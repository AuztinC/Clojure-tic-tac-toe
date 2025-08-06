(ns tic-tac-toe.setup
  (:require
    [clojure.string :as str]
    [reagent.core :as r]
    [tic-tac-toe.board :as board]
    [tic-tac-toe.game :as game]
    [tic-tac-toe.ai-turn]
    [tic-tac-toe.setupc :as setupc]))

(def starting-state
  {:store   nil
   :active  true
   :screen  :select-game-mode
   :ui      :web-cljs
   :turn    "p1"
   :markers ["X" "O"]})

(defonce state (r/atom starting-state))

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

(defn game-over? [winner? new]
  (if winner?
    (do
      (reset! state (game/next-state new))
      (reset! state (assoc (game/next-state new) :screen :game-over)))
    (reset! state (game/next-state new))))

(defn auto-advance [_key _atom _old new]
  (when (= :game (:screen new))
    (let [next-player (game/next-player-key new)]
      (when (= :ai next-player)
        (let [after-move-state (game/next-state new)
              winner? (board/check-winner (:board after-move-state))]
          (if (= [:ai :ai] (:players new))
            (sleep
              #(game-over? winner? new)
              500)
            (game-over? winner? new)))))))

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


