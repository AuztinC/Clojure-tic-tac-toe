(ns tic-tac-toe.main
  (:require [tic-tac-toe.game-options :as opt]))

(defn -main [& args]
  (opt/select-game))

