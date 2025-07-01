(ns tic-tac-toe.human-turn
  (:require [tic-tac-toe.printer :as printer]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.game :as init]))

(defn- empty-space? [board move]
  (= [""] (get board move)))

(declare human-turn)
(defn bad-move [board marker]
  (do
    (printer/print-bad-move)
    (printer/display-board board)
    (human-turn board marker)))

(defn human-turn [board marker]
  (printer/print-player-prompt marker)
  (let [input (read-line)
        move (if (re-matches #"\d+" input) (Integer/parseInt input))]
    (if (empty-space? board move)
      move
      (bad-move board marker))))

(defmethod init/play-turn :human [store id board [marker _] _]
  (let [move (human-turn board marker)
        entry {:player marker
               :move move}]
    (db/update-previous-games! store id entry)
    move #_(assoc board move [marker])))