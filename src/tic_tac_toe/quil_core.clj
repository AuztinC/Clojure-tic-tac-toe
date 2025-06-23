(ns tic-tac-toe.quil-core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.persistence :as db]))

(defn in-box? [mx my x y w h]
  (and (>= mx x) (<= mx (+ x w))
    (>= my y) (<= my (+ y h))))

(defn draw-button [text x y w h]
  (q/fill 255)
  (q/rect x y w h)
  (q/text text (+ x (/ w 2)) (+ y (/ h 2))))

(defn determine-difficulty-from-mouse [x y state]
  (cond
    (in-box? x y 250 220 70 50) :easy
    (in-box? x y 150 220 70 50) :medium
    (in-box? x y 50 220 70 50) :hard
    :else state))

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

(defn click-backspace? [x y pos-x pos-y]
  (in-box? x y pos-x pos-y 70 50))

(defn click-enter? [x y pos-x pos-y]
  (in-box? x y pos-x pos-y 70 50))

(defn click-clear? [x y pos-x pos-y]
  (in-box? x y pos-x pos-y 40 50))

(defn mouse-pressed [state event]
  (case (:screen state)
    :select-game-mode
    (let [{:keys [x y]} event]
      (cond
        (in-box? x y 20 220 70 50)
        (assoc state :players [:human :human] :screen :select-board)
        (in-box? x y 120 220 70 50)
        (assoc state :players [:ai :human] :screen :select-board)
        (in-box? x y 220 220 70 50)
        (assoc state :players [:human :ai] :screen :select-board)
        (in-box? x y 320 220 70 50)
        (assoc state :players [:ai :ai] :screen :select-board)
        :else state))

    :select-board
    (let [{:keys [x y]} event]
      (cond
        (in-box? x y 250 220 70 50)
        (assoc state :selected-board :3x3 :screen :select-difficulty)
        (in-box? x y 150 220 70 50)
        (assoc state :selected-board :4x4 :screen :select-difficulty)
        (in-box? x y 50 220 70 50)
        (assoc state :selected-board :3x3x3 :screen :select-difficulty)
        :else state))

    :select-difficulty
    (let [{:keys [x y]} event
          difficulty (determine-difficulty-from-mouse x y state)
          ai-count (count (filterv #(= :ai %) (:players state)))
          updated-difficulties (conj (vec (:difficulties state)) difficulty)]
      (if (< (count updated-difficulties) ai-count)
        (assoc state :difficulties updated-difficulties)
        (-> state
          (assoc :difficulties updated-difficulties)
          (assoc :screen :game))))

    :replay
    (let [{:keys [x y]} event]
      (cond
        (in-box? x y 220 220 70 50)
        (assoc state :screen :select-game-mode)
        (in-box? x y 120 220 70 50)
        (assoc state :screen :replay-id-entry)
        :else state))

    :replay-id-entry
    (let [{:keys [x y]} event
          clicked-digit (some (fn [[digit [bx by]]]
                                (when (in-box? x y bx by 15 15)
                                  digit))
                          digit-positions)]
      (cond
        clicked-digit
        (let [new-id (str (:typed-id state) clicked-digit)]
          (if (<= (count new-id) 2)
            (assoc state :typed-id new-id)
            state))
        (click-backspace? x y 120 300)
        (update state :typed-id #(subs % 0 (max 0 (dec (count %)))))
        (click-enter? x y 220 300)
        (let [id-str (:typed-id state)]
          (if (re-matches #"\d+" id-str)
            (let [id (Integer/parseInt id-str)
                  game (db/find-game-by-id {:store (:store state)} id)]
              (if (empty? game)
                (assoc state :typed-id "Game not found")
                (assoc state :screen :game :game-state game)))
            state))
        (click-clear? x y 80 300)
        (assoc state :typed-id "")
        :else state))

    :in-progress-game
    (let [{:keys [x y]} event]
      (cond
        (in-box? x y 100 220 100 50)
        (assoc state :screen :game)
        (in-box? x y 230 220 100 50)
        (assoc state :screen :select-game-mode)
        :else state))

    state))

(defn setup []
  {:screen :in-progress-game
   :store :mem
   :difficulties []
   :typed-id ""})

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
  (draw-button "Easy" 250 220 70 50)
  )

(defn draw-replay-screen [_]
  (q/background 200)
  (q/fill 255)
  (q/text-align :center :center)
  (q/text "Previous games are available to watch" (/ (q/width) 2) 50)
  (q/stroke-weight 5)
  (q/stroke 255 0 0 50)
  (draw-button "Choose\nGame Mode" 220 220 70 50)
  (draw-button "Watch\nReplay" 120 220 70 50))

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

(defn draw-game-screen [_]
  (q/background 150))

(defn draw-in-progress-game [_]
  (q/background 200)
  (q/fill 255)
  (q/text-align :center)
  (q/text "There was a game in-progress, resume?" (/ (q/width) 2) 50)
  (q/stroke-weight 3)
  (q/stroke 255 0 0 50)
  (draw-button "Continue Game" 100 220 100 50)
  (draw-button "Start New Game" 230 220 100 50))

(defn draw [state]
  (case (:screen state)
    :in-progress-game (draw-in-progress-game state)
    :select-game-mode (draw-select-game-mode state)
    :select-board (draw-select-board state)
    :select-difficulty (draw-select-difficulty state)
    :replay (draw-replay-screen state)
    :replay-id-entry (draw-replay-id-entry state)
    :game (draw-game-screen state)
    (draw-select-game-mode state)))

(q/defsketch tic-tac-toe
  :title "Tic-Tac-Toe"
  :size [400 400]
  :setup setup
  :draw draw
  :mouse-pressed mouse-pressed
  :middleware [m/fun-mode])