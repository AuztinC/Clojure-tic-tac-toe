(ns tic-tac-toe.quil-drawings
  (:require [quil.core :as q]))

;; TODO ARC - Return same messages as cli
(defn draw-button [text x y w h]
  (q/fill 255)
  (q/rect x y w h)
  (q/fill 0)
  (q/text text (+ x (/ w 2)) (+ y (/ h 2))))

(defn draw-select-game-mode [_]
  (q/background 200)
  (q/fill 255)
  (q/text-align :center :center)
  (q/text "Choose your game" (/ (q/width) 2) 20)
  (q/stroke-weight 3)
  (q/stroke 255 0 0 100)
  (draw-button "Human vs\nAI" 220 220 70 50)
  (draw-button "AI vs\nHuman" 120 220 70 50)
  (draw-button "Human vs\nHuman" 20 220 70 50)
  (draw-button "AI vs AI" 320 220 70 50))

(defn draw-select-board [_]
  (q/background 200)
  (q/fill 255)
  (q/text-align :center :center)
  (q/text "Choose Your Board" (/ (q/width) 2) 20)
  (q/stroke-weight 3)
  (q/stroke 255 0 0 100)
  (draw-button "3x3" 250 220 70 50)
  (draw-button "4x4" 150 220 70 50)
  (draw-button "3x3x3" 50 220 70 50))

(defn draw-select-difficulty [{:keys [difficulties]}]
  (let [count (inc (count difficulties))
        text (cond
               (= 1 count) (str "Choose " count "st AI difficulty")
               (= 2 count) (str "Choose " count "nd AI difficulty"))]
   (q/background 200)
  (q/fill 255)
  (q/text-align :center :center)
  (q/text text (/ (q/width) 2) 20)
  (q/stroke-weight 3)
  (q/stroke 255 0 0 100)
  (draw-button "Hard" 50 220 70 50)
  (draw-button "Medium" 150 220 70 50)
  (draw-button "Easy" 250 220 70 50)))

(defn draw-replay-screen [_]
  (q/background 200)
  (q/fill 255)
  (q/text-align :center :center)
  (q/text "Would you like to watch a replay?\n  You'll need a match ID." (/ (q/width) 2) 50)
  (q/stroke-weight 5)
  (q/stroke 255 0 0 50)
  (draw-button "No" 220 220 70 50)
  (draw-button "Yes" 120 220 70 50))

(def digit-positions
  {0 [200 250]
   1 [170 160]
   2 [200 160]
   3 [230 160]
   4 [170 190]
   5 [200 190]
   6 [230 190]
   7 [170 220]
   8 [200 220]
   9 [230 220]})

(defn draw-number-buttons []
  (doseq [[digit [x y]] digit-positions]
    (draw-button (str digit) x y 15 15)))

(defn draw-replay-id-entry [state]
  (q/background 255)
  (q/fill 0)
  (q/text-align :center :center)
  (q/text "Please enter your game ID: " (/ (q/width) 2) 20)
  (q/text (:typed-id state) (/ (q/width) 2) 40)
  (draw-number-buttons)
  (draw-button "Enter" 220 300 70 50)
  (draw-button "Backspace" 120 300 70 50)
  (draw-button "Clear" 80 300 40 50))

(defn draw-in-progress-game [_]
  (q/background 200)
  (q/fill 255)
  (q/text-align :center)
  (q/text "Previous game detected! Resume?" (/ (q/width) 2) 50)
  (q/stroke-weight 3)
  (q/stroke 255 0 0 50)
  (draw-button "Continue Game" 100 220 100 50)
  (draw-button "No Thanks" 230 220 100 50))