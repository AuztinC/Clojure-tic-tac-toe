(ns tic-tac-toe.draw
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.gamec :as gamec]
            [tic-tac-toe.human-turn :as ht]
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
                   :on-click #(swap! config/state assoc
                                :players [:human :ai]
                                :screen :select-board)} "Human vs AI"]
    [:button {:id       "ai-vs-human"
              :on-click #(swap! config/state assoc
                           :players [:ai :human]
                           :screen :select-board)} "AI vs Human"]
    [:button {:id       "human-vs-human"
              :on-click #(swap! config/state assoc
                           :players [:human :human]
                           :screen :select-board)} "Human vs Human"]
    [:button {:id       "ai-vs-ai"
              :on-click #(swap! config/state assoc
                           :players [:ai :ai]
                           :screen :select-board)} "AI vs AI"]]])

(defn select-board []
  (let [next-screen (if (= [:human :human] (:players @config/state))
                      :game
                      :select-difficulty)]
    [:div
     {:id "main-container"}
     [:h1 "Select a board"]
     [:div [:button {:id       "board-3x3"
                     :on-click #(swap! config/state assoc
                                  :screen next-screen
                                  :board-size :3x3
                                  :board (board/get-board :3x3))} "3x3"]
      [:button {:id       "board-4x4"
                :on-click #(swap! config/state assoc
                             :screen next-screen
                             :board-size :4x4
                             :board (board/get-board :4x4))} "4x4"]
      [:button {:id       "board-3x3x3"
                :on-click #(swap! config/state assoc
                             :screen next-screen
                             :board-size :3x3x3
                             :board (board/get-board :3x3x3))} "3x3x3"]]
     [:br]
     [:br]
     (reset-btn)]))

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

(defn- ignore-user-input? []
  (or
    (= :game-over (:screen @config/state))
    (= [:ai :ai] (:players @config/state))))

(defn- handle-click [idx]
  (when-not (ignore-user-input?)
    (let [state (assoc @config/state :choice (js/parseInt idx))
          move (gamec/next-position state
                 [(gamec/current-marker state) (gamec/current-player-type state)]
                 nil)
          marker (if (= "p1" (:turn state)) "X" "O")
          updated-board (assoc (:board state) move [marker])]
      (swap! config/state assoc
        :board updated-board
        :turn (gamec/next-player (:turn state)))  #_(gamec/next-position state
        [(gamec/current-marker state) (gamec/current-player-type state)]
        nil))))

(defn- cell-cursor [value]
  (if (or (string? value) (ignore-user-input?))
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
        :on-click #(handle-click value)}
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
     (reset-btn)]
    ))

