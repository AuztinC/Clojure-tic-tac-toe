(ns tic-tac-toe.game
  (:require [tic-tac-toe.printer :as printer]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.persistence :as db]))

(defmulti play-turn (fn [_store _id _board [_ player-type] & _] player-type))

(defn next-player [turn]
  (if (= "p1" turn) "p2" "p1"))

(defn ->players
  [turn player1-marker player1-type player2-marker player2-type]
  (if (= "p1" turn)
    [player1-marker player1-type]
    [player2-marker player2-type]))

(defn ->difficulties [turn player-type difficulties]
  (if (= 1 (count difficulties))
    (if (= :ai player-type) (first difficulties))
    (cond
      (and (= "p1" turn) (= :ai player-type)) (first difficulties)
      (and (= "p2" turn) (= :ai player-type)) (second difficulties))))

(defn end-game! [id board]
  (let [id id]
    (printer/display-board board)
    (printer/output-result (board/check-winner board))
    (printer/game-id id)))

(defn next-state [state]
  (let [{board                           :board,
         [player1-type player2-type]     :players
         [player1-marker player2-marker] :markers,
         difficulties                    :difficulties
         turn                            :turn
         id                              :id
         store                           :store} state]
    (let [[marker player-type :as player] (->players turn
                                            "X" player1-type
                                            "O" player2-type)
          difficulty (->difficulties turn player-type difficulties)
          move (play-turn store id board player difficulty)
          next-state (assoc state :board (assoc board move [marker]) :turn (next-player turn))]
      (do
        (db/update-current-game! next-state move)
        next-state))))

(defn game-loop [state]
  (loop [{:keys [board id] :as state} state]
    (if (board/check-winner board)
      (end-game! id board)
      (do
        (printer/display-board board)
        (recur (next-state state))))))

(defn init-game [state]
  (do
    (printer/game-id (get state :id))
    (game-loop state)))

(defn ->inspect [x]
  (prn "->inspect: " x ) x)

(defn resume-game [store]
  (game-loop (db/in-progress? {:store store})))

