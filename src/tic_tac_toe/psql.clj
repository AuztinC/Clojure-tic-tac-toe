(ns tic-tac-toe.psql
  (:require [clojure.walk :as walk]
            [tic-tac-toe.persistence :as db]
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
                     ["SELECT id, moves, board_size FROM previous_games WHERE id = ?" id]))]
    (if row
      (let [parsed-moves (json/parse-string (:moves row))
            updated-moves-key (assoc row :moves (map walk/keywordize-keys parsed-moves))
            updated-board-size (assoc updated-moves-key :board_size (read-string (:board_size updated-moves-key)))
            corrected (-> updated-board-size
                        (assoc :board-size (:board_size updated-board-size))
                        (dissoc :board_size))]
        corrected)
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
  (jdbc/execute! psql-spec ["INSERT INTO previous_games(id, moves, board_size) VALUES (?::int, ?::text, ?::text)"
                            (json/generate-string (:id data))
                            (json/generate-string (:moves data))
                            (str (:board-size data))]))

(defmethod db/update-previous-games! :psql [_store id move]
  (let [row (first (jdbc/query psql-spec
                      ["SELECT moves FROM previous_games WHERE id = ?" id]))
        parsed-moves (vec (json/parse-string (:moves row)))
        updated-moves (conj parsed-moves move)
        json-str (json/generate-string updated-moves)]
    (jdbc/execute! psql-spec
      ["UPDATE previous_games SET moves = ?::text WHERE id = ?"
       json-str
       id])))

(defmethod db/previous-games? :psql [_store]
  (not-empty (state "previous_games")))