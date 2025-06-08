(ns tic-tac-toe.main
  (:require [tic-tac-toe.game-options :as opt]))

(defn -main [& args]
  (let [flags     (set args)
        store     (if (flags "-file") :file :mem)]
    (println "▶ Using storage:" store)
    (opt/watch-replay? :file)))

