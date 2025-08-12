(ns tic-tac-toe.draw
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.gamec :as gamec]

            [tic-tac-toe.config :as config]))

(defn- reset-btn []
  (if (:players @config/state)
    [:button {:id       "reset-btn"
              :on-click #(reset! config/state config/starting-state)
              :disabled (and (= :game (:screen @config/state))
                          (= [:ai :ai] (:players @config/state)))}
     "Reset Game?"]))

(def select-game-mode
  [:div {:id "main-container"}
   [:h1 {:style {:text-align "center"}} "Select a game mode"]
   [:div [:button {:id       "human-vs-ai"
                   :on-click #(config/select-game! config/state 1)} "Human vs AI"]
    [:button {:id       "ai-vs-human"
              :on-click #(config/select-game! config/state 2)} "AI vs Human"]
    [:button {:id       "human-vs-human"
              :on-click #(config/select-game! config/state 3)} "Human vs Human"]
    [:button {:id       "ai-vs-ai"
              :on-click #(config/select-game! config/state 4)} "AI vs AI"]]])

(defn select-board []
  [:div
   {:id "main-container"}
   [:h1 "Select a board"]
   [:div [:button {:id       "board-3x3"
                   :on-click #(config/select-board-size! config/state 1)} "3x3"]
    [:button {:id       "board-4x4"
              :on-click #(config/select-board-size! config/state 2)} "4x4"]
    [:button {:id       "board-3x3x3"
              :on-click #(config/select-board-size! config/state 3)} "3x3x3"]]
   [:br]
   [:br]
   (reset-btn)])

(defn select-difficulty []
  (let [diff-count (count (:difficulties @config/state))
        text (config/difficulty-text diff-count)]
    [:div
     {:id "main-container"}
     [:h1 text]
     [:div [:button {:id       "easy"
                     :class    "diff"
                     :on-click #(config/select-difficulty! config/state :easy)} "Easy"]
      [:button {:id       "medium"
                :class    "diff"
                :on-click #(config/select-difficulty! config/state :medium)} "Medium"]
      [:button {:id       "hard"
                :class    "diff"
                :on-click #(config/select-difficulty! config/state :hard)} "Hard"]]
     [:br]
     (reset-btn)]))

(defn- cell-cursor [value]
  (if (or (string? value) (config/ignore-user-input?))
    "default"
    "pointer"))

(defn- cell-text-color [value]
  (case value
    "X" "orange"
    "O" "rgb(85, 189, 237)"

    "white"))

(defn render-cell [value]
  [:td {:style    {:background-color "grey"
                   :width            "60px"
                   :height           "60px"
                   :text-align       "center"
                   :color            (cell-text-color value)
                   :font-size        "2em"
                   :cursor           (cell-cursor value)}
        :id       (str "cell-" value)
        :class    "cell"
        :on-click #(config/handle-click value)}
   value])

(defn render-board [{:keys [board-size board] :as _state}]
  (let [indexed (map-indexed (fn [idx _cell]
                               (render-cell
                                 (if (= "" (first (nth board idx)))
                                   idx
                                   (first (nth board idx))))) board)
        size (case board-size
               :3x3 3
               :4x4 4
               :3x3x3 9)
        part-board (partition size indexed)]
    (into [:tbody {:id (str "game-board-" (name board-size))}]
      (map-indexed (fn [i row]
                     (into [:tr {:class "row"}] row))
        part-board))))

(defn game []
  [:div {:id "main-container"}
   [:table
    (render-board @config/state)]
   [:br]
   (reset-btn)])

(defn game-over []
  (let [winner (board/check-winner (:board @config/state))]
    [:div {:id "main-container"}
     [:table (render-board @config/state)]
     [:h1 "Game Over!"]
     [:h2 {:id "winner"} (config/winner-text winner)]
     [:br]
     (reset-btn)]))

