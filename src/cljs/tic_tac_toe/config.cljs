(ns tic-tac-toe.config
  (:require
    [clojure.string :as str]
    [reagent.core :as r]
    [tic-tac-toe.board :as board]
    [tic-tac-toe.gamec :as gamec]
    [tic-tac-toe.ai-turn]
    [tic-tac-toe.human-turn]
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

(defn select-game! [atom choice]
  (swap! atom configc/select-game choice))

(defn select-board-size! [atom choice]
  (swap! atom configc/select-board choice))

(defn ignore-user-input? []
  (or
    (= :game-over (:screen @state))
    (= [:ai :ai] (:players @state))))

(defn handle-click [idx]
  (when-not (ignore-user-input?)
    (let [choice-state (assoc @state :last-move (js/parseInt idx))
          marker (gamec/current-marker choice-state)
          player-type (gamec/current-player-type choice-state)
          move (gamec/next-position choice-state
                 [marker player-type] nil)]
      (if move
        (reset! state (gamec/next-state (dissoc choice-state :last-move) move))
        @state))))

(defn sleep [fn t]
  (js/setTimeout fn t))

(defn auto-advance [_key _atom _old new]
  (when (= :game (:screen new))
    (if (board/check-winner (:board new))
      (reset! state (assoc new :screen :game-over))
      (let [next-player (gamec/next-player-key new)]
        (when (= :ai next-player)
          (let [marker (gamec/current-marker new)
                player-type (gamec/current-player-type new)
                diff (gamec/->difficulties new next-player)
                move (gamec/next-position new [marker player-type] diff)]
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


