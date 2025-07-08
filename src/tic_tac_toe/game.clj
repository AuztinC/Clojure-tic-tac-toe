(ns tic-tac-toe.game
  (:require [tic-tac-toe.printer :as printer]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.persistence :as db]))

(defn position-dispatch [{:keys [ui] :as _state} [_ player-type] & _]
  [player-type ui])
(defmulti next-position position-dispatch)

(defn next-player [turn]
  (if (= "p1" turn) "p2" "p1"))

(defn ->players
  [{:keys [turn players]}]
  (let [[p1-type p2-type] players]
    (if (= "p1" turn)
      ["X" p1-type]
      ["O" p2-type])))

(defn ->difficulties [turn player-type difficulties]
  (if (= 1 (count difficulties))
    (if (= :ai player-type) (first difficulties))
    (cond
      (and (= "p1" turn) (= :ai player-type)) (first difficulties)
      (and (= "p2" turn) (= :ai player-type)) (second difficulties))))

(defn end-game! [{:keys [id board] :as state}]
  (do
    (printer/display-board board)
    (printer/output-result (board/check-winner board))
    (printer/game-id id)))

(defn next-state [state]
  (if (board/check-winner (:board state))
    (assoc state :screen :game-over)
    (let [{board        :board,
           difficulties :difficulties
           turn         :turn} state]
      (let [[marker player-type :as player] (->players state)
            difficulty (->difficulties turn player-type difficulties)
            move (next-position state player difficulty)
            next-state (assoc state :board (assoc board move [marker]) :turn (next-player turn))]
        (do
          (db/update-current-game! next-state move)
          next-state)))))

(defn game-loop [state]
  (loop [state state]
    (if (= :game-over (:screen state))
      (end-game! state)
      (do
        (printer/display-board (:board state))
        (recur (next-state state))))))

(defn init-game [state]
  (do
    (db/clear-active {:store (:store state)})
    (printer/game-id (get state :id))
    (game-loop state)))

(defn ->inspect [x]
  (prn "->inspect: " x) x)

(defn resume-game [store]
  (game-loop (db/in-progress? {:store store})))

