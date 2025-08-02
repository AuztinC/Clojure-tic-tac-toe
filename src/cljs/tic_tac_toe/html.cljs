(ns tic-tac-toe.html
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.setup :as setup]))

(def select-game-mode
  [:div
   {:id "main-container"}
   [:div [:h1 "Select a game mode"]
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
                           :screen :select-board)} "AI vs AI"]]])

(def select-board
  [:div
   {:id "main-container"}
   [:h1 "Select a board"]
   [:button {:id       "board-3x3"
             :on-click #(swap! setup/state assoc
                          :screen :select-difficulty
                          :board-size :3x3
                          :board (board/get-board :3x3))} "3x3"]
   [:button {:id       "board-4x4"
             :on-click #(swap! setup/state assoc
                          :screen :select-difficulty
                          :board-size :4x4
                          :board (board/get-board :4x4))} "4x4"]
   [:button {:id       "board-3x3x3"
             :on-click #(swap! setup/state assoc
                          :screen :select-difficulty
                          :board-size :3x3x3
                          :board (board/get-board :3x3x3))} "3x3x3"]
   ])

(def select-difficulty
  [:div
   {:id "main-container"}
   [:h1 "Select difficulty"]
   [:button {:type "submit" :name "choice" :value "1"} "Easy"]
   [:button {:type "submit" :name "choice" :value "2"} "Medium"]
   [:button {:type "submit" :name "choice" :value "3"} "Hard"]])


