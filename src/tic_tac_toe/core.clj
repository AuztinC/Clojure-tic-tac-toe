(ns tic-tac-toe.core
  (:require [tic-tac-toe.game-options :as opt]))

(defn -main [& args]
  (opt/select-game))

