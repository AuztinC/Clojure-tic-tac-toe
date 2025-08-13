(ns tic-tac-toe.human-turn
  (:require [tic-tac-toe.gamec :as gamec]))

(defmethod gamec/next-position [:human :web-cljs]
  [{:keys [board choice] :as state} [_ _] _]
  (let [idx choice]
    (dissoc state :choice)
    (if (and (some? idx) (gamec/empty-space? board idx))
      idx
      nil)))