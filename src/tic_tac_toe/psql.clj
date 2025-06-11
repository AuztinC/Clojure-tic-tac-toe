(ns tic-tac-toe.psql
  (:require [tic-tac-toe.persistence :refer [set-new-game-id
                                             find-game-by-id
                                             update-current-game!
                                             in-progress?
                                             clear-current-game!
                                             add-entry-to-previous!
                                             update-previous-games!]]
            [clojure.java.jdbc :as jdbc]
            [cheshire.core :as json]))

(def psql-spec {:dbtype "postgresql"
                :dbname "tic-tac-toe"
                :host "localhost"
                :port 5432
                :user "austincripe"
                :password ""})

(defn psql-state [table]
  (let [query (str "SELECT * FROM " table ";")]
    (jdbc/query psql-spec [query])))

(defn clojurify-psql-state [state]
  (-> state
    (.getValue)
    (json/parse-string true)
    (update :players (fn [ps] (mapv keyword ps)))
    (update :difficulties (fn [ds] (mapv keyword ds)))
    (update :store keyword)))

(defmethod set-new-game-id :psql [_store]
  (let [row (first
              (jdbc/query psql-spec
                ["SELECT
                    COALESCE(MAX((games->>'id')::int), 0) AS maxid
                   FROM previous_games"]))]
    (inc (:maxid row))))

(defmethod find-game-by-id :psql [_store id]
  (let [row (first (jdbc/query psql-spec
                     ["SELECT games FROM previous_games WHERE (games->>'id')::int = ?" id]))]
    (if row
      (let [str-map (json/parse-string
                      (.getValue
                        (:games
                          row)))
            keyword-map (update-keys str-map keyword)
            updated-moves-key (assoc keyword-map :moves (map #(update-keys % keyword) (get keyword-map :moves)))
            keyed-map (update-in updated-moves-key [:board-size] keyword)]
        keyed-map)
      ())))

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

(defmethod in-progress? :psql [_store]
  (if (empty? (jdbc/query psql-spec ["SELECT state FROM current_game;"]))
    nil
    (clojurify-psql-state (:state (first (jdbc/query psql-spec ["SELECT state FROM current_game;"]))))))

(defmethod clear-current-game! :psql [_store]
  (jdbc/execute! psql-spec
    ["DELETE FROM current_game"]))

(defmethod add-entry-to-previous! :psql
  [_store data]
  (jdbc/execute! psql-spec ["INSERT INTO previous_games(games) VALUES (?::jsonb)"
                            (json/generate-string data)]))

(defmethod update-previous-games! :psql [_store id move]
  (let [game (json/parse-string
               (.getValue
                 (:games
                   (first (jdbc/query psql-spec
                            ["SELECT games FROM previous_games WHERE (games->>'id')::int = ?" id])))))
        updated-moves (update game "moves" conj move)
        json-str (json/generate-string updated-moves)]
    (jdbc/execute! psql-spec
      ["UPDATE previous_games SET games = ?::jsonb WHERE (games->>'id')::int = ?"
       json-str
       id])))