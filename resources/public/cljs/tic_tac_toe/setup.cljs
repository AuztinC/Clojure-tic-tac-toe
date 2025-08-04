(ns tic-tac-toe.setup
  (:require [reagent.core :as r]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]
            [reagent.ratom :as ratom]
            [tic-tac-toe.ai-turn :as ai]))

(defonce state (r/atom {:store nil
                        :active true
                        :screen  :select-game-mode
                        :ui      :web-cljs
                        :turn    "p1"
                        :markers ["X" "O"]}))

(defn select-difficulty! [choice]
  (let [current-state @state
        ai-count (count (filterv #(= :ai %) (:players current-state)))
        updated-difficulties (conj (vec (:difficulties current-state)) choice)]
    (if (< (count updated-difficulties) ai-count)
      (swap! state assoc :difficulties updated-difficulties
        :screen :select-difficulty)
      (swap! state assoc
        :difficulties updated-difficulties
        :screen :game))))

(defn auto-advance [_key _atom _old new]
  (when (and (= :game (:screen new)))
    (let [next-player (case (:turn new)
                        "p1" (first (:players new))
                        "p2" (second (:players new)))]
      (when (= :ai next-player)
        (js/setTimeout
          #(swap! state game/next-state)
          500)))))


