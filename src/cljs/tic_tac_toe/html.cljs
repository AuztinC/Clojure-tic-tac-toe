(ns tic-tac-toe.html
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.human-turn :as ht]
            [tic-tac-toe.setup :as setup]))

(def select-game-mode
  [:div {:id "main-container"}
   [:h1 {:style {:text-align "center"}} "Select a game mode"]
   [:button {:id       "human-vs-ai"
             :on-click #(swap! setup/state assoc
                          :players [:human :ai]
                          :screen :select-board)} "Human vs AI"]
   [:button {:id       "ai-vs-human"
             :on-click #(swap! setup/state assoc
                          :players [:ai :human]
                          :screen :select-board)} "AI vs Human"]
   [:button {:id       "human-vs-human"
             :on-click #(swap! setup/state assoc
                          :players [:human :human]
                          :screen :select-board)} "Human vs Human"]
   [:button {:id       "ai-vs-ai"
             :on-click #(swap! setup/state assoc
                          :players [:ai :ai]
                          :screen :select-board)} "AI vs AI"]])

(defn select-board []
  (let [next-screen (if (= [:human :human] (:players @setup/state))
                      :game
                      :select-difficulty)]
    [:div
     {:id "main-container"}
     [:h1 "Select a board"]
     [:button {:id       "board-3x3"
               :on-click #(swap! setup/state assoc
                            :screen next-screen
                            :board-size :3x3
                            :board (board/get-board :3x3))} "3x3"]
     [:button {:id       "board-4x4"
               :on-click #(swap! setup/state assoc
                            :screen next-screen
                            :board-size :4x4
                            :board (board/get-board :4x4))} "4x4"]
     [:button {:id       "board-3x3x3"
               :on-click #(swap! setup/state assoc
                            :screen next-screen
                            :board-size :3x3x3
                            :board (board/get-board :3x3x3))} "3x3x3"]]))

(defn select-difficulty []
  (let [diff-count (count (:difficulties @setup/state))
        text (setup/difficulty-text diff-count)]
    [:div
     {:id "main-container"}
     [:h1 text]
     [:button {:id       "easy"
               :class    "diff"
               :on-click #(setup/select-difficulty! :easy)} "Easy"]
     [:button {:id       "medium"
               :class    "diff"
               :on-click #(setup/select-difficulty! :medium)} "Medium"]
     [:button {:id       "hard"
               :class    "diff"
               :on-click #(setup/select-difficulty! :hard)} "Hard"]]))

(defn- ai-ai? []
  (or
    (= :game-over (:screen @setup/state))
    (= [:ai :ai] (:players @setup/state))))

(defn- handle-click [idx]
  (if (ai-ai?)
    nil
    (swap! setup/state ht/apply-human-move (js/parseInt idx))))

(defn- cell-cursor [value]
  (if (or (string? value) (ai-ai?))
    "default"
    "pointer"))

(defn render-cell [value]
  [:td {:style    {:background-color "grey"
                   :width            "60px"
                   :height           "60px"
                   :text-align       "center"
                   :color            "white"
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
    (into [:tbody {:class "board"}]
      (map-indexed (fn [i row]
                     (into [:tr {:class "row"}] row))
        part-board))))

(defn game []
  [:table {:id "main-container"}
   (render-board @setup/state)])

(defn game-over []
  (let [winner (board/check-winner (:board @setup/state))]
    [:div {:id "main-container"}
     [:table (render-board @setup/state)]
     [:h1 "Game Over!"]
     [:h2 {:id "winner"} (setup/winner-text winner)]]
    ))

