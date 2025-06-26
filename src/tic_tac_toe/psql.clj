(ns tic-tac-toe.psql
  (:require [tic-tac-toe.board :as board]
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
                ["SELECT nextval('games_id_seq')"]))]
    (:nextval row)))

(defmethod db/find-game-by-id :psql [_store id]
  (let [game (first (jdbc/query psql-spec
                      ["SELECT * FROM games WHERE id = ?" id]))
        moves (jdbc/query psql-spec
                ["SELECT * FROM moves WHERE gameid = ?" id])]
    (if game
      {:id (:id game)
       :screen (keyword (:screen game))
       :board (reduce (fn [acc move] (assoc acc (:position move) [(:player move)]))
                (board/get-board (keyword (:board-size game)))
                moves)
       :players (map keyword [(:p1 game) (:p2 game)])
       :markers ["X" "O"]
       :difficulties (map keyword [(:diff1 game) (:diff2 game)])
       :turn (if (= (:player (last moves)) "X") "p2" "p1")
       :store :psql}
      nil)))

(defn state->psql [state]
  [(:id state)
   (str (:screen state))
   (str (first (:players state)))
   (str (second (:players state)))
   (str (first (:difficulties state)))
   (str (second (:difficulties state)))
   (case (count (:board state))
     9 "3x3"
     16 "4x4"
     "3x3x3")])

(defn game-complete? [board]
  (empty? (board/open-positions board)))

(defmethod db/update-current-game! :psql [state move]
  (let [psql-state (db/find-game-by-id {:store :psql} (:id state))]
    (if (or (game-complete? (:board psql-state)) (empty? psql-state))
      (let [[id screen p1 p2 diff1 diff2 boardsize] (state->psql state)]
        (jdbc/execute! psql-spec
          ["INSERT INTO games(id, screen, p1, p2, diff1, diff2, boardsize) VALUES (?::int, ?::text, ?::text, ?::text, ?::text, ?::text, ?::text)"
           id screen p1 p2 diff1 diff2 boardsize
           "INSERT INTO moves(gameid, position, player) VALUES (?::int, ?::int, ?::text)"
           (:id state)
           move
           (first (get (:board state) move))]))
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

(defn db-setup []
  (jdbc/execute! psql-spec
    ["CREATE TABLE IF NOT EXISTS games(id SERIAL PRIMARY KEY, screen TEXT, p1 TEXT, p2 TEXT, diff1 TEXT, diff2 TEXT, boardsize TEXT)"])
  (jdbc/execute! psql-spec
    ["CREATE TABLE IF NOT EXISTS moves(id SERIAL PRIMARY KEY, gameId INTEGER NOT NULL, FOREIGN KEY(gameId) REFERENCES games(id), position INTEGER, player TEXT)"]))