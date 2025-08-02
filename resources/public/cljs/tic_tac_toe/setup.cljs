(ns tic-tac-toe.setup
  (:require [reagent.core :as r]
            [tic-tac-toe.board :as board]))

(defonce state (r/atom {:screen :select-game-mode}))

(defn select-difficulty! [choice]
  (let [current-state @state
        ai-count (count (filterv #(= :ai %) (:players current-state)))
        updated-difficulties (conj (vec (:difficulties current-state)) choice)]
    (if (< (count updated-difficulties) ai-count)
      (swap! state assoc :difficulties updated-difficulties
        :screen :select-difficulty)
      (swap! state assoc
        :active true
        :difficulties updated-difficulties
        :screen :game
        :turn "p1"
        :markers ["X" "O"]))))