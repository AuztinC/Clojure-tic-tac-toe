(ns tic-tac-toe.main
  (:require [tic-tac-toe.game-options :as opt]
            [tic-tac-toe.psql :as pg]
            [tic-tac-toe.edn]
            [tic-tac-toe.persistence]
            [tic-tac-toe.human-turn]
            [tic-tac-toe.ai-turn]
            [tic-tac-toe.quil-core :as gui]))

(defn -main [& args]
  (let [flags (set args)
        store (cond
                (flags "-file") :file
                (flags "-psql") (do (pg/db-setup) :psql)
                :default :mem)]
    (cond
      (flags "--gui") (gui/start-gui store)
      :else (opt/cli-loop {:screen :replay-confirm
                           :store  store
                           :ui :cli}))))

