(ns tic-tac-toe.setup
  (:require [reagent.core :as r]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]
            [reagent.ratom :as ratom]))

(defonce state (r/atom {:screen :select-game-mode
                        :ui :web-cljs
                        :turn "p1"
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

(defn auto-advance [next-state]
  (prn "next state " next-state)
  (let [next-player (case (:turn next-state)
                      "p1" (first (:players next-state))
                      "p2" (second (:players next-state)))]
    (cond
      (= :game (:screen next-state))
      (if (= :ai next-player)
        (reset! state (game/next-state next-state))
        @state)

      ;(= :replay (:screen next-state))
      ;(replay/apply-next-replay-move next-state)

      :else @state)))

