(ns tic-tac-toe.persistence
  (:require [clojure.edn :as edn]
            [cheshire.core :as json]
            [clojure.java.jdbc :as jdbc]))

(def psql-spec {:dbtype "postgresql"
                :dbname "tic-tac-toe"
                :host "localhost"
                :port 5432
                :user "austincripe"
                :password ""})

(def edn-file "resources/state.edn")

(defn edn-state []
  (-> (slurp edn-file)
    (edn/read-string)))

(def mem-db (atom {}))

(defn clojurify-psql-state [state]
  (-> state
    (.getValue)
    (json/parse-string true)
    (update :players (fn [ps] (mapv keyword ps)))
    (update :difficulties (fn [ds] (mapv keyword ds)))
    (update :store keyword)))

(defn psql-state [table]
  (let [query (str "SELECT * FROM " table ";")]
    (jdbc/query psql-spec [query])))

(defn set-new-game-id [store]
  (case store
    :file (-> (edn-state)
            (get :previous-games)
            (last)
            (get :id 0)
            (inc))
    :psql (let [row (first
                      (jdbc/query psql-spec
                        ["SELECT
                    COALESCE(MAX((games->>'id')::int), 0) AS maxid
                   FROM previous_games"]))]
            (inc (:maxid row)))
    :mem (-> @mem-db
           (get :previous-games)
           (last)
           (get :id 0)
           (inc))))

(defmulti find-game-by-id :store)

(defmethod find-game-by-id :psql [_store id]
  (let [str-map (json/parse-string
                  (.getValue
                    (:games
                      (first (jdbc/query psql-spec
                               ["SELECT games FROM previous_games WHERE (games->>'id')::int = ?" id])))))
        keyword-map (update-keys str-map keyword)
        updated-moves-key (assoc keyword-map :moves (map #(update-keys % keyword) (get keyword-map :moves)))
        updated-board-size (update-in updated-moves-key [:board-size] keyword)]
    updated-board-size))

(defmethod find-game-by-id :file [_store id]
  (let [previous-games (get (edn-state) :previous-games)
        game (filter #(= id (:id %)) previous-games)]
    game))

(defmethod find-game-by-id :mem [_store id]
  (let [previous-games (get @mem-db :previous-games)
        game (filter #(= id (:id %)) previous-games)]
    game))

(defn update-game-file! [state]
  (spit edn-file
    (-> (edn-state)
      (assoc :current-game state)
      (prn-str))))

(defn update-atom! [state]
  (reset! mem-db (assoc @mem-db :current-game state)))

(defmulti update-current-game!
  (fn [state]
    (:store state)))

(defmethod update-current-game! :psql [state]
  (let [psql-state (jdbc/query psql-spec ["SELECT state FROM current_game;"])]
    (if (empty? psql-state)
      (jdbc/execute! psql-spec
        ["INSERT INTO current_game(state) VALUES (?::jsonb)"
         (json/generate-string state)])
      (jdbc/execute! psql-spec
        ["UPDATE current_game
                   SET state = (?::jsonb)"
         (json/generate-string state)]))))

(defmethod update-current-game! :file [state]
  (update-game-file! state))

(defmethod update-current-game! :mem [state]
  (update-atom! state))

(defmethod update-current-game! :default [state]
  (update-current-game! (assoc state :store :mem)))

(defn update-previous-games! [store id move]
  (case store
    :psql (let [game (json/parse-string
                       (.getValue
                         (:games
                           (first (jdbc/query psql-spec
                                    ["SELECT games FROM previous_games WHERE (games->>'id')::int = ?" id])))))
                updated-moves (update game "moves" conj move)
                json-str (json/generate-string updated-moves)]
            (jdbc/execute! psql-spec
              ["UPDATE previous_games SET games = ?::jsonb WHERE (games->>'id')::int = ?"
               json-str
               id]))
    :file (let [state (edn-state)
                previous-games (:previous-games state)
                updated-games (mapv (fn [game]
                                      (if (= (:id game) id)
                                        (update game :moves conj move)
                                        game))
                                previous-games)
                new-state (assoc state :previous-games updated-games)]
            (spit edn-file (prn-str new-state)))
    :mem (let [games (:previous-games @mem-db)
               updated (mapv (fn [game]
                               (if (= (:id game) id)
                                 (update game :moves conj move)
                                 game))
                         games)]
           (reset! mem-db {:previous-games updated}))))

(defn compute-entry [state data]
  (update state :previous-games (fnil conj []) data))

(defmulti add-entry-to-previous!
  (fn [store _data]
    store))

(defmethod add-entry-to-previous! :psql
  [_store data]
  (jdbc/execute! psql-spec ["INSERT INTO previous_games(games) VALUES (?::jsonb)"
                            (json/generate-string data)]))

(defmethod add-entry-to-previous! :file
  [_store data]
  (let [state (edn-state)
        updated (compute-entry state data)]
    (spit edn-file (prn-str updated))))

(defmethod add-entry-to-previous! :mem
  [_store data]
  (let [state @mem-db
        updated (compute-entry state data)]
    (reset! mem-db updated)))

#_(defmethod add-entry-to-previous! :default
    [_store data]
    (add-entry-to-previous! :mem data))

(defn in-progress? [store]
  (case store
    :file (get (edn-state) :current-game)
    :psql (if (empty? (jdbc/query psql-spec ["SELECT state FROM current_game;"]))
            nil
            (clojurify-psql-state (:state (first (jdbc/query psql-spec ["SELECT state FROM current_game;"])))))
    #_(if (empty? (json/parse-string (.getValue (:state (first (jdbc/query psql-spec ["SELECT state FROM current_game;"]))))))
        nil
        (clojurify-psql-state (:state (first (jdbc/query psql-spec ["SELECT state FROM current_game;"])))))
    :mem nil))

(defn previous-games? [store]
  (case store
    :file (get (edn-state) :previous-games)
    :mem (get @mem-db :previous-games)
    :psql (not-empty (psql-state "previous_games"))))

(defmulti clear-current-game! :store)

(defmethod clear-current-game! :psql [_store]
  (jdbc/execute! psql-spec
    ["DELETE FROM current_game"]))

(defmethod clear-current-game! :file [_store]
  (spit edn-file (dissoc (edn-state) :current-game)))

(defmethod clear-current-game! :mem [_store]
  (reset! mem-db {}))

(defmethod clear-current-game! :default [_store]
  (clear-current-game! {:store :mem}))

;(defprotocol Db
;  (clear [_this]))
;(deftype FileDb
;  Db
;  (clear [_this]
;    (spit ...)))
;
;(defmulti clear :store)
;(defmethod clear :file [state]
;  (...))
;(defmethod clear :pgsql [state]
;  (...))

;
