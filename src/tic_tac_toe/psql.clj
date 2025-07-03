(ns tic-tac-toe.psql
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.persistence :as db]
            [clojure.java.jdbc :as jdbc]))

(def psql-spec {:dbtype   "postgresql"
                :dbname   "tic-tac-toe"
                :host     "localhost"
                :port     5432
                :user     "austincripe"
                :password ""})

(defn psql->state [game moves]
  (let [game {:id           (:id game)
              :board-size   (keyword (:boardsize game))
              :screen       (keyword (:screen game))
              :players      (mapv keyword [(:p1 game) (:p2 game)])
              :markers      ["X" "O"]
              :difficulties (mapv keyword [(:diff1 game) (:diff2 game)])
              :turn         (db/next-player moves)
              :store        :psql}]
    (assoc game :board (db/play-board game moves))))

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
      (psql->state game moves)
      nil)))

(defn previous-game-complete? [board]
  (empty? (board/open-positions board)))

;; TODO ARC - DO WE WANT ACTIVE KEY IN DB?
;; TODO ARC - this will create a need to find and change active status when making new game
;; TODO ARC - should I have a table just for current-active instead?
(defmethod db/update-current-game! :psql [state move]
  (let [psql-state (db/find-game-by-id {:store :psql} (:id state))
        game (first (jdbc/query psql-spec ["SELECT * FROM games WHERE active = true;"]))
        moves (jdbc/query psql-spec ["SELECT * FROM moves WHERE gameid = ?"
                                     (:id game)])
        cleaned-game (psql->state game moves)]
    (prn "update current game " cleaned-game)
    (if (or #_(not= (:id cleaned-game) (:id state)) (some? (board/check-winner (:board psql-state))) (nil? psql-state))
      (let [[id screen p1 p2 diff1 diff2 boardsize] (state->psql state)]
        (prn "IN NEW GAME")
        (jdbc/execute! psql-spec
          ["INSERT INTO games(id, screen, p1, p2, diff1, diff2, boardsize, active) VALUES (?::int, ?::text, ?::text, ?::text, ?::text, ?::text, ?::text, true);"
           id screen p1 p2 diff1 diff2 boardsize])
        (jdbc/execute! psql-spec ["INSERT INTO moves(gameid, position, player) VALUES (?::int, ?::int, ?::text)"
                                  (:id state)
                                  move
                                  (first (get (:board state) move))]))
      (do
        (prn "updatre")
        (jdbc/execute! psql-spec
          ["UPDATE moves SET position = (?::int), player =(?::text) WHERE gameid = ?"
           move
           (first (get (:board state) move))
           (:id state)])))))

(defmethod db/in-progress? :psql [_store]
  (let [game (last (jdbc/query psql-spec ["SELECT * FROM games;"]))
        moves (jdbc/query psql-spec ["SELECT * FROM moves WHERE gameid = ?;"
                                     (:id game)])
        board-state (db/play-board game moves)]
    (prn "in-progress? board" game)
    (not (previous-game-complete? board-state))))

(defn ->inspect [x]
  (prn "->inspect: " x) x)

(defmethod db/previous-games? :psql [_store]
  (let [games (jdbc/query psql-spec ["SELECT * FROM games;"])
        moves (group-by :gameid (jdbc/query psql-spec ["SELECT * FROM moves;"]))]
    (when (seq games)
      (->> (map #(psql->state % (get moves (:id %))) games)
        (filter (comp board/check-winner :board))
        seq))))

(defn db-setup []
  (jdbc/execute! psql-spec
    ["CREATE TABLE IF NOT EXISTS games(id SERIAL PRIMARY KEY, screen TEXT, p1 TEXT, p2 TEXT, diff1 TEXT, diff2 TEXT, boardsize TEXT, active BOOLEAN)"])
  (jdbc/execute! psql-spec
    ["CREATE TABLE IF NOT EXISTS moves(id SERIAL PRIMARY KEY, gameId INTEGER NOT NULL, FOREIGN KEY(gameId) REFERENCES games(id), position INTEGER, player TEXT)"]))