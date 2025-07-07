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
              :screen       (keyword (when (seq (:screen game))
                                       (read-string (:screen game))))
              :players      (when (and (seq (:p1 game)) (seq (:p2 game)))
                              (mapv keyword (mapv read-string [(:p1 game) (:p2 game)])))
              :markers      ["X" "O"]
              :difficulties (when (and (seq (:diff1 game)) (seq (:diff2 game)))
                              (mapv keyword (mapv read-string [(:diff1 game) (:diff2 game)])))
              :turn         (db/next-player moves)
              :store        :psql
              :active-game  (:active game)
              :moves        moves}]
    (assoc game :board (db/play-board game moves))))

(defn state->psql [state]
  [(:id state)
   (str (:screen state))
   (str (first (:players state)))
   (str (second (:players state)))
   (str (nth (:difficulties state) 0 nil))
   (str (nth (:difficulties state) 1 nil))
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
      (do
        (prn "find game" (psql->state game moves))
        (psql->state game moves))
      nil)))

(defn previous-game-complete? [board]
  (empty? (board/open-positions board)))

;; TODO ARC - refactor to cond or case
;; TODO ARC - what happens when game is abandoned? make previous :active = false
(defmethod db/update-current-game! :psql [state move]
  (let [game (first (jdbc/query psql-spec ["SELECT * FROM games WHERE active = true;"]))
        winner? (board/check-winner (assoc (:board state) move [(first (get (:board state) move))]))]
    (prn "update current game " game)
    (if (nil? game)
      (let [[id screen p1 p2 diff1 diff2 boardsize] (state->psql state)]
        (prn "IN NEW GAME")

        (jdbc/execute! psql-spec
          ["INSERT INTO games(id, screen, p1, p2, diff1, diff2, boardsize, active) VALUES (?::int, ?::text, ?::text, ?::text, ?::text, ?::text, ?::text, true);"
           id screen p1 p2 diff1 diff2 boardsize])
        (jdbc/execute! psql-spec ["INSERT INTO moves(gameid, position, player) VALUES (?::int, ?::int, ?::text)"
                                  (:id state)
                                  move
                                  (first (get (:board state) move))]))
      (if winner?
        (do
          (jdbc/execute! psql-spec
            ["UPDATE games SET active = false WHERE id = ?"
             (:id state)])
          (jdbc/execute! psql-spec
            ["INSERT INTO moves(gameid, position, player) VALUES (?::int, ?::int, ?::text)"
             (:id state)
             move
             (first (get (:board state) move))]))
        (do
          (prn "update")
          (jdbc/execute! psql-spec
            ["INSERT INTO moves(gameid, position, player) VALUES (?::int, ?::int, ?::text)"
             (:id state)
             move
             (first (get (:board state) move))]))))))

(defmethod db/in-progress? :psql [_store]
  (let [game (first (jdbc/query psql-spec ["SELECT * FROM games WHERE active = true;"]))
        moves (jdbc/query psql-spec ["SELECT * FROM moves WHERE gameid = ?;"
                                     (:id game)])
        parse-game (psql->state game moves)
        board (db/play-board parse-game (:games parse-game))]
    (when (and game (not (board/check-winner board)))
      (psql->state game moves))))

(defn ->inspect [x]
  (prn "->inspect: " x) x)

(defmethod db/previous-games? :psql [_store]
  (let [games (jdbc/query psql-spec ["SELECT * FROM games;"])
        moves (group-by :gameid (jdbc/query psql-spec ["SELECT * FROM moves;"]))]
    (when (seq games)
      (->> (map #(psql->state % (get moves (:id %))) games)
        (filter (comp board/check-winner :board))
        seq))))

(defmethod db/clear-active :psql [_store]
  (when-let [game (first (jdbc/query psql-spec ["SELECT * FROM games WHERE active = true;"]))]
    (jdbc/execute! psql-spec
      ["UPDATE games SET active = false WHERE id = ?"
       (:id game)])))

(defn db-setup []
  (jdbc/execute! psql-spec
    ["CREATE TABLE IF NOT EXISTS games(id SERIAL PRIMARY KEY, screen TEXT, p1 TEXT, p2 TEXT, diff1 TEXT, diff2 TEXT, boardsize TEXT, active BOOLEAN)"])
  (jdbc/execute! psql-spec
    ["CREATE TABLE IF NOT EXISTS moves(id SERIAL PRIMARY KEY, gameId INTEGER NOT NULL, FOREIGN KEY(gameId) REFERENCES games(id), position INTEGER, player TEXT)"]))