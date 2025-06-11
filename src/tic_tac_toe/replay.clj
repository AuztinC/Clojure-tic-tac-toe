(ns tic-tac-toe.replay
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.printer :as printer]))

(defn game-loop! []
  (fn [acc {:keys [player move]}]
    (let [new-board (assoc acc move [player])
          winner (board/check-winner new-board)]
          (printer/display-board new-board)
          (println (str "Player " player " moves to: " move))
      (if winner
        (printer/output-result winner)
        new-board))))

(defn replay [state]
  (let [{moves :moves, size :board-size} state
        board (board/get-board size)]
    (reduce (game-loop!)
      board
      moves)))