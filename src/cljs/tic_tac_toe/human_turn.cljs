(ns tic-tac-toe.human-turn
  (:require [tic-tac-toe.game :as game]
            [tic-tac-toe.config :as config]))

(defmethod game/next-position [:human :web-cljs] [{:keys [board turn choice] :as state} [marker _] _]
  (if (and (some? choice) (game/empty-space? board choice))
    (let [updated-board (assoc board choice [marker])]
      (swap! config/state assoc
        :board updated-board
        :turn (game/next-player turn)))
    state))