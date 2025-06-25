(ns tic-tac-toe.quil-drawings
  (:require [quil.core :as q]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.persistence :as db]))

(defn draw-button [text x y w h]
  (q/fill 255)
  (q/rect x y w h)
  (q/fill 0)
  (q/text text (+ x (/ w 2)) (+ y (/ h 2))))

(defn draw-select-game-mode [_]
  (q/background 200)
  (q/fill 255)
  (q/text-align :center :center)
  (q/text "Choose Game Mode" (/ (q/width) 2) 20)
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
  (q/text "Choose Your Board!" (/ (q/width) 2) 20)
  (q/stroke-weight 3)
  (q/stroke 255 0 0 100)
  (draw-button "3x3" 250 220 70 50)
  (draw-button "4x4" 150 220 70 50)
  (draw-button "3x3x3" 50 220 70 50))

(defn draw-select-difficulty [_]
  (q/background 200)
  (q/fill 255)
  (q/text-align :center :center)
  (q/text "AI difficulty?" (/ (q/width) 2) 20)
  (q/stroke-weight 3)
  (q/stroke 255 0 0 100)
  (draw-button "Hard" 50 220 70 50)
  (draw-button "Medium" 150 220 70 50)
  (draw-button "Easy" 250 220 70 50))

(defn draw-replay-screen [_]
  (q/background 200)
  (q/fill 255)
  (q/text-align :center :center)
  (q/text "Previous games are available to watch" (/ (q/width) 2) 50)
  (q/stroke-weight 5)
  (q/stroke 255 0 0 50)
  (draw-button "Choose\nGame Mode" 220 220 70 50)
  (draw-button "Watch\nReplay" 120 220 70 50))

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
  (q/text "Enter Game ID to Replay:" (/ (q/width) 2) 20)
  (q/text (:typed-id state) (/ (q/width) 2) 40)
  (draw-number-buttons)
  (draw-button "Enter" 220 300 70 50)
  (draw-button "Backspace" 120 300 70 50)
  (draw-button "Clear" 80 300 40 50))

(defn draw-in-progress-game [_]
  (q/background 200)
  (q/fill 255)
  (q/text-align :center)
  (q/text "There was a game in-progress, resume?" (/ (q/width) 2) 50)
  (q/stroke-weight 3)
  (q/stroke 255 0 0 50)
  (draw-button "Continue Game" 100 220 100 50)
  (draw-button "No thanks" 230 220 100 50))

#_(defn draw-game-screen [state]
  (let [turn (case (:turn state)
               "p1" "X"
               "p2" "O"
               "X")
        board (:board state)
        size (case (:board-size state)
               :3x3 3
               :4x4 4
               3)
        cell-size (/ (q/width) size)]
    (q/background 150)
    (q/stroke 0)
    (doseq [i (range 1 size)]
      (q/line (* i cell-size) 0 (* i cell-size) (q/height))
      (q/line 0 (* i cell-size) (q/width) (* i cell-size)))
    (doseq [idx (range (count board))]
      (let [row (quot idx size)
            col (mod idx size)
            val (nth board idx)
            x (* col cell-size)
            y (* row cell-size)]
        (when (not= val "")
          (q/text-align :center :center)
          (q/text-size 32)
          (q/fill 0)
          (q/text (str "Turn: " turn) (/ (q/width) 2) (- (q/height) 20))
          (q/text (first val) (+ x (/ cell-size 2)) (+ y (/ cell-size 2)))))))
  (game-loop state))

#_(defn draw-3d-game-screen [state]
  (let [turn (case (:turn state)
               "p1" "X"
               "p2" "O"
               "X")
        layers (partition 9 (flatten (:board state)))
        size 3
        cell-size (/ (q/width) 9)
        board-square (* size cell-size)]
    (q/background 150)
    (q/stroke 0)
    (doseq [[layer-idx layer] (map-indexed vector layers)]
      (let [offset (* layer-idx board-square)]
        (doseq [i (range 1 size)]
          (q/line (+ offset (* i cell-size)) offset (+ offset (* i cell-size)) (+ offset board-square))
          (q/line offset (+ offset (* i cell-size)) (+ offset board-square) (+ offset (* i cell-size)))
          (doseq [idx (range (count layer))]
            (let [row (quot idx size)
                  col (mod idx size)
                  val (nth layer idx)
                  x (+ offset (* col cell-size))
                  y (+ offset (* row cell-size))]
              (when (not= val "")
                (q/text-align :center :center)
                (q/text-size 28)
                (q/fill 0)
                (q/text val (+ x (/ cell-size 2)) (+ y (/ cell-size 2)))))))))
    (q/text (str "Turn: " turn) (/ (q/width) 2) (- (q/height) 20))))

#_(defn draw-game-over [state]
  (let [board-size (:board-size state)]
    (db/clear-current-game! {:store (:store state)})
    (q/background 150)
    (if (= :3x3x3 board-size)
      (draw-3d-game-screen state)
      (draw-game-screen state))
    (q/fill 255 100 100)
    (q/text (str "Game Over " (board/check-winner (:board state)) " wins!") (/ (q/width) 2) 20)))