(ns tic-tac-toe.game
  (:require [tic-tac-toe.cli-text :as printer]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.gamec :as gamec]
            [tic-tac-toe.persistence :as db]))

(defn end-game! [{:keys [id board] :as state}]
  (do
    (printer/display-board board)
    (printer/output-result (board/check-winner board))
    (printer/game-id id)))

(defn game-loop [state]
  (loop [state state]
    (printer/display-board (:board state))
    (if (board/check-winner (:board state))
      (do
        (assoc state :screen :game-over)
        (end-game! state))
      (let [player-type (gamec/current-player-type state)
            difficulty (gamec/->difficulties state player-type)
            move (gamec/next-position state
                   [(gamec/current-marker state) player-type]
                   difficulty)
            next-state (gamec/next-state state move)]
        (db/update-current-game! next-state move)
        (recur next-state)))))

