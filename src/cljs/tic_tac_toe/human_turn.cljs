(ns tic-tac-toe.human-turn
  (:require [tic-tac-toe.gamec :as gamec]))

;; TODO ARC - allow cljs to accept position instead of full state
(defmethod gamec/next-position [:human :web-cljs] [{:keys [board turn choice] :as state} [marker _] _]
  (let [idx choice]
    (dissoc state :choice)
    (if (and (some? idx) (gamec/empty-space? board idx))
      idx
      #_(let [updated-board (assoc board choice [marker])]
          (dissoc @config/state :choice)
          (swap! config/state assoc
            :board updated-board
            :turn (gamec/next-player turn)))
      nil)))

;(defmethod gamec/next-position [:human :web-cljs] [{:keys [board turn choice] :as state} [marker _] _]
;  (let [idx choice]
;    (dissoc state :choice)
;    (if (and (some? idx) (gamec/empty-space? board idx))
;      (let [updated-board (assoc board choice [marker])]
;        (dissoc @config/state :choice)
;        (swap! config/state assoc
;          :board updated-board
;          :turn (gamec/next-player turn)))
;      (dissoc @config/state :choice))))