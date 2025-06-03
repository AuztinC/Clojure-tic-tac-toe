(ns tic-tac-toe.replay
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.persistence :as db]))

(defn unpack-game [id]
  (let [previous-games (get (db/edn-state) :previous-games)
        game (filter #(= id (:id %)) previous-games)]
    game))

(defn replay [state]
  (let [{moves :moves, size :board-size} state
        board (board/get-board size)]
    (reduce (fn [acc {:keys [player move]}]
              (let [new-board (assoc acc move [player])
                    winner (board/check-winner new-board)]
                (if winner
                  (printer/output-result winner)
                  (do
                    (println (str "Player " player " moves to: " move))
                    (prn new-board)
                    new-board))
                ))
      board
      moves)))