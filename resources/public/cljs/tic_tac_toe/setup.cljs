(ns tic-tac-toe.setup
  (:require [reagent.core :as r]))

(defonce state (r/atom {:screen :select-game-mode}))

(defn select-difficulty! [choice]
  (let [diff (case choice
               "1" :easy
               "2" :medium
               "3" :hard)
        ai-count (count (filterv #(= :ai %) (:players state)))
        updated-difficulties (conj (vec (:difficulties state)) diff)]
    (if (< (count updated-difficulties) ai-count)
      (assoc state :difficulties updated-difficulties
        :screen :select-difficulty)
      (do
        (-> state
          (assoc
            :active true
            :difficulties updated-difficulties
            :screen :game
            :board (board/get-board (:board-size state))
            :turn "p1"
            :markers ["X" "O"]))))))