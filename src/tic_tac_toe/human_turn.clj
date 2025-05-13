(ns tic-tac-toe.human-turn
  (:require [tic-tac-toe.printer :as printer]))

(defn empty-space? [board move]
  (= [""] (get board move)))

(declare human-turn)
(defn- bad-move [board marker]
  (do
    (printer/print-bad-move)
    (printer/display-board board)
    (human-turn board marker)))

(defn human-turn [board marker]
  (printer/print-player-prompt marker)
  (let [move (Integer/parseInt (read-line))]
    (if (empty-space? board move)
      move
      (bad-move board marker))))