(ns tic-tac-toe.setup
  (:require
            [clojure.string :as str]
            [reagent.core :as r]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.ai-turn :as ai]
            [tic-tac-toe.setupc :as setupc]))

(def starting-state
  {:store   nil
   :active  true
   :screen  :select-game-mode
   :ui      :web-cljs
   :turn    "p1"
   :markers ["X" "O"]})

(defonce state (r/atom starting-state))

#_(defn select-difficulty! [state choice]
  (let [current-state @state
        ai-count (count (filterv #(= :ai %) (:players state)))
        updated-difficulties (conj (vec (:difficulties state)) choice)]
    (if (< (count updated-difficulties) ai-count)
      (swap! state assoc :difficulties updated-difficulties
        :screen :select-difficulty)
      (swap! state assoc
        :difficulties updated-difficulties
        :screen :game))))

(defmethod setupc/select-difficulty! :web-cljs [state choice]
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

(defn auto-advance [_key _atom _old new]
  (when (= :game (:screen new))
    (let [next-player (game/next-player-key new)]
      (when (= :ai next-player)
        (if (= [:ai :ai] (:players new))
          (do
            (sleep
              #(reset! state (game/next-state new))
              500))
          (reset! state (game/next-state new)))
        ))))

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


