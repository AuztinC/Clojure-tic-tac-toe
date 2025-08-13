(ns tic-tac-toe.human-turn
  (:require [tic-tac-toe.gamec :as gamec]))

(defmethod gamec/next-position [:human :web-cljs]
  [{:keys [board last-move] :as _state} [_ _] _]
  (let [idx last-move]
    (if (and (some? idx) (gamec/empty-space? board idx))
      idx
      nil)))