(ns tic-tac-toe.main
  (:require [tic-tac-toe.game-options :as opt]
            [tic-tac-toe.psql]
            [tic-tac-toe.edn]))

(defn -main [& args]
  (let [flags     (set args)
        store     (cond
                    (flags "-file") :file
                    (flags "-psql") :psql
                    :default :mem)]

    (opt/watch-replay? store)))

