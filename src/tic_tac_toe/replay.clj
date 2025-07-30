(ns tic-tac-toe.replay
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.printer :as printer]))

(defn game-loop! []
  (fn [acc {:keys [player position]}]
    (let [new-board (assoc acc position [player])
          winner (board/check-winner new-board)]
          (printer/display-board new-board)
          (println (str "Player " player " moves to: " position))
      (if winner
        (printer/output-result winner)
        new-board))))

(defn replay [state]
  (prn "replay state " state)
  (let [{moves :moves, size :board-size} state
        board (board/get-board size)]
    (reduce (game-loop!)
      board
      moves)))

(defn apply-next-replay-move [state]
  (if-let [[next-move & remaining] (:moves state)]
    (let [{:keys [player position]} next-move
          new-board (assoc (:board state) position [player])
          winner (board/check-winner new-board)
          updated-state (-> state
                          (assoc :board new-board)
                          (assoc :moves remaining)
                          (assoc :turn (game/next-player (:turn state))))]
      (if winner
        (assoc updated-state :screen :game-over)
        updated-state))
    (assoc state :screen :game-over)))