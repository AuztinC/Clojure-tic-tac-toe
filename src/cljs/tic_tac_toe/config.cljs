(ns tic-tac-toe.config
  (:require
    [clojure.string :as str]
    [reagent.core :as r]
    [tic-tac-toe.board :as board]
    [tic-tac-toe.gamec :as gamec]
    [tic-tac-toe.ai-turn]
    [tic-tac-toe.configc :as configc]))

(def starting-state
  {:store   nil
   :active  true
   :screen  :select-game-mode
   :ui      :web-cljs
   :turn    "p1"
   :markers ["X" "O"]})

(defonce state (r/atom starting-state))

(defn select-difficulty! [atom choice]
  (swap! atom configc/select-difficulty choice))

#_(defn select-difficulty! [state choice]
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
    (if (board/check-winner (:board new))
      (reset! state (assoc new :screen :game-over))
     (let [next-player (gamec/next-player-key new)]
      (when (= :ai next-player)
        (let [move (gamec/next-position new
                     [(gamec/current-marker new) (gamec/current-player-type new)]
                     (gamec/->difficulties new next-player))]
          (if (= [:ai :ai] (:players new))
            (sleep
              #(reset! state (gamec/next-state new move))
              500)
            (reset! state (gamec/next-state new move)))))))))

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


