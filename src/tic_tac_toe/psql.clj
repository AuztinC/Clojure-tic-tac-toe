(ns tic-tac-toe.psql
  (:require [tic-tac-toe.persistence :as db]
            [clojure.java.jdbc :as jdbc]
            [cheshire.core :as json]))

(def psql-spec {:dbtype "postgresql"
                :dbname "tic-tac-toe"
                :host "localhost"
                :port 5432
                :user "austincripe"
                :password ""})

(defn state [table]
  (let [query (str "SELECT * FROM " table ";")]
    (jdbc/query psql-spec [query])))

(defn clojurify-psql-state [state]
  (-> state
    (.getValue)
    (json/parse-string true)
    (update :players (fn [ps] (mapv keyword ps)))
    (update :difficulties (fn [ds] (mapv keyword ds)))
    (update :store keyword)))

(defmethod db/set-new-game-id :psql [_store]
  (let [row (first
              (jdbc/query psql-spec
                ["SELECT * FROM previous_games
                ORDER BY id DESC
                LIMIT 1"]))]
    (inc (get row :id 0))))

(defmethod db/find-game-by-id :psql [_store id]
  (let [row (first (jdbc/query psql-spec
                     ["SELECT state FROM previous_games WHERE id = ?" id]))]
    (if row
      (let [str-map (json/parse-string
                      (.getValue
                        (:state
                          row)))
            keyword-map (update-keys str-map keyword)
            updated-moves-key (assoc keyword-map :moves (map #(update-keys % keyword) (get keyword-map :moves)))
            keyed-map (update-in updated-moves-key [:board-size] keyword)]
        keyed-map)
      ())))

(defmethod db/update-current-game! :psql [state]
  (let [psql-state (jdbc/query psql-spec ["SELECT state FROM current_game;"])]
    (if (empty? psql-state)
      (jdbc/execute! psql-spec
        ["INSERT INTO current_game(state) VALUES (?::jsonb)"
         (json/generate-string state)])
      (jdbc/execute! psql-spec
        ["UPDATE current_game
                   SET state = (?::jsonb)"
         (json/generate-string state)]))))

(defmethod db/in-progress? :psql [_store]
  (if (empty? (jdbc/query psql-spec ["SELECT state FROM current_game;"]))
    nil
    (clojurify-psql-state (:state (first (jdbc/query psql-spec ["SELECT state FROM current_game;"]))))))

(defmethod db/clear-current-game! :psql [_store]
  (jdbc/execute! psql-spec
    ["DELETE FROM current_game"]))

(defmethod db/add-entry-to-previous! :psql
  [_store data]
  (jdbc/execute! psql-spec ["INSERT INTO previous_games(id, state) VALUES (?::int, ?::jsonb)"
                            (json/generate-string (:id data))
                            (json/generate-string data)]))

(defmethod db/update-previous-games! :psql [_store id move]
  (let [game (json/parse-string
               (.getValue
                 (:state
                   (first (jdbc/query psql-spec
                            ["SELECT state FROM previous_games WHERE id = ?" id])))))
        updated-moves (update game "moves" conj move)
        json-str (json/generate-string updated-moves)]
    (jdbc/execute! psql-spec
      ["UPDATE previous_games SET state = ?::jsonb WHERE id = ?"
       json-str
       id])))

(defmethod db/previous-games? :psql [_store]
  (not-empty (state "previous_games")))