(ns tic-tac-toe.human-turn
  (:require [tic-tac-toe.gamec :as gamec]
            [tic-tac-toe.config :as config]))

(defmethod gamec/next-position [:human :web-cljs] [{:keys [board turn choice] :as state} [marker _] _]
  (if (and (some? choice) (gamec/empty-space? board choice))
    (let [updated-board (assoc board choice [marker])]
      (swap! config/state assoc
        :board updated-board
        :turn (gamec/next-player turn)))
    state))