(ns tic-tac-toe.config
  (:require
    [clojure.string :as str]
    [reagent.core :as r]
    [tic-tac-toe.board :as board]
    [tic-tac-toe.gamec :as gamec]
    [tic-tac-toe.ai-turn]
    ))

(def starting-state
  {:store   nil
   :active  true
   :screen  :select-game-mode
   :ui      :web-cljs
   :turn    "p1"
   :markers ["X" "O"]})

(defonce state (r/atom starting-state))

(defn select-difficulty! [state choice]
  (let [ai-count (count (filterv #(= :ai %) (:players @state)))
        updated-difficulties (conj (vec (:difficulties @state)) choice)]
    (if (< (count updated-difficulties) ai-count)
      (swap! state assoc :difficulties updated-difficulties
        :screen :select-difficulty)
      (swap! state assoc
        :difficulties updated-difficulties
        :screen :game))))

(defn sleep [fn t]
  (js/setTimeout fn t))

(defn game-over? [winner? new]
  (if winner?
    (do
      (reset! state new)
       (js/setTimeout (reset! state (assoc new :screen :game-over)) 10))
    (reset! state new)))

(defn auto-advance [_key _atom _old new]
  (when (= :game (:screen new))
    (let [next-player (gamec/next-player-key new)]
      (when (= :ai next-player)
        (let [after-move-state (gamec/next-state new)
              winner? (board/check-winner (:board after-move-state))]
          (if (= [:ai :ai] (:players new))
            (sleep
              #(reset! state (gamec/next-state new))
              500)
            (game-over? winner? after-move-state)))))))

(defn difficulty-text [diff-count]
  (cond
    (= [:ai :ai] (:players @state))
    (if (= 0 diff-count)
      "Select 1st AI difficulty"
      "Select 2nd AI difficulty")
    :else "Select AI difficulty"))

(defn winner-text [winner]
  (if (= "tie" winner)
    (str (str/replace-first winner #"t"
           (.toUpperCase (.charAt winner 0))) " Game!")
    (str "Winner is " winner "!")))


