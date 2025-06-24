(ns tic-tac-toe.quil-core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game-options :as opt]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.init-game :as init]))

(defn in-button? [mx my x y w h]
  (and (>= mx x) (<= mx (+ x w))
    (>= my y) (<= my (+ y h))))

(defn draw-button [text x y w h]
  (q/fill 255)
  (q/rect x y w h)
  (q/fill 0)
  (q/text text (+ x (/ w 2)) (+ y (/ h 2))))

(defn ->difficulty [x y state]
  (cond
    (in-button? x y 250 220 70 50) :easy
    (in-button? x y 150 220 70 50) :medium
    (in-button? x y 50 220 70 50) :hard
    :else nil))

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
  (in-button? x y pos-x pos-y 70 50))

(defn click-enter? [x y pos-x pos-y]
  (in-button? x y pos-x pos-y 70 50))

(defn click-clear? [x y pos-x pos-y]
  (in-button? x y pos-x pos-y 40 50))

;(let [{board :board,
;       [player1-type player2-type] :players
;       [player1-marker player2-marker] :markers,
;       difficulties :difficulties
;       turn :turn
;       id :id
;       store :store} state]
;  (let [[_marker player-type :as player] (->players turn
;                                           player1-marker player1-type
;                                           player2-marker player2-type)
;        difficulty (->difficulties turn player-type difficulties)
;        new-board (play-turn store id board player difficulty)
;        next-state (assoc state :board new-board :turn (next-player turn))]
;    (do
;      (db/update-current-game! next-state)
;      next-state)))
; (if (board/check-winner board)
;      (end-game! id board store)
;      (do
;        (printer/display-board board)
;        (recur (next-state state))))

(defn advance-state [state]
  (loop [current state]
    (let [{:keys [players turn board store id]} current
          player-type (if (= turn "p1") (first players) (second players))]
      (cond

        (board/check-winner board)
        (assoc current :screen :game-over)

        (= player-type :ai)
        (recur (init/next-state current))

        :else
        (do
          (db/update-current-game! current)
          current)))))


(defmulti handle-in-game-click!
  (fn [state _event] (:board-size state)))

(defmethod handle-in-game-click! :3x3 [state event]
  (let [{:keys [x y]} event
        {:keys [markers turn board]} state
        marker (case turn
                 "p1" (first markers)
                 "p2" (second markers))
        cell-size (/ (q/width) 3)
        col (int (/ x cell-size))
        row (int (/ y cell-size))
        index (+ (* row 3) col)]
    (cond
      (and (>= index 0) (< index 9) (= (first (nth board index)) ""))
      (-> state
        (assoc :board (assoc board index [marker]))
        (assoc :turn (init/next-player turn))
        (advance-state))

      :else state)))

(defn mouse-pressed! [state event]
  (case (:screen state)
    :select-game-mode
    (let [{:keys [x y]} event]
      (cond
        (in-button? x y 20 220 70 50)
        (assoc state :players [:human :human] :screen :select-board)
        (in-button? x y 120 220 70 50)
        (assoc state :players [:ai :human] :screen :select-board)
        (in-button? x y 220 220 70 50)
        (assoc state :players [:human :ai] :screen :select-board)
        (in-button? x y 320 220 70 50)
        (assoc state :players [:ai :ai] :screen :select-board)
        :else state))

    :select-board
    (let [{:keys [x y]} event]
      (cond
        (in-button? x y 250 220 70 50)
        (assoc state :board (board/get-board :3x3) :board-size :3x3 :screen :select-difficulty)
        (in-button? x y 150 220 70 50)
        (assoc state :board (board/get-board :4x4) :board-size :4x4 :screen :select-difficulty)
        (in-button? x y 50 220 70 50)
        (assoc state :board (board/get-board :3x3x3) :board-size :3x3x3 :screen :select-difficulty)
        :else state))

    :select-difficulty
    (let [{:keys [x y]} event
          difficulty (->difficulty x y state)]
      (if difficulty
        (let [ai-count (count (filterv #(= :ai %) (:players state)))
              updated-difficulties (conj (vec (:difficulties state)) difficulty)]
          (if (< (count updated-difficulties) ai-count)
            (assoc state :difficulties updated-difficulties)
            (-> state
              (assoc :difficulties updated-difficulties)
              (assoc :screen :game))))
        state))

    :replay
    (let [{:keys [x y]} event]
      (cond
        (in-button? x y 220 220 70 50)
        (assoc state :screen :select-game-mode)
        (in-button? x y 120 220 70 50)
        (assoc state :screen :replay-id-entry)
        :else state))

    :replay-id-entry
    (let [{:keys [x y]} event
          clicked-digit (some (fn [[digit [bx by]]]
                                (when (in-button? x y bx by 15 15)
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
        (in-button? x y 100 220 100 50)
        (assoc state :screen :game)
        (in-button? x y 230 220 100 50)
        (assoc state :screen :select-game-mode)
        :else state))

    :game
    (handle-in-game-click! state event)

    state))

#_(defn setup []
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

(defn draw-in-progress-game [_]
  (q/background 200)
  (q/fill 255)
  (q/text-align :center)
  (q/text "There was a game in-progress, resume?" (/ (q/width) 2) 50)
  (q/stroke-weight 3)
  (q/stroke 255 0 0 50)
  (draw-button "Continue Game" 100 220 100 50)
  (draw-button "Start New Game" 230 220 100 50))

(defn draw-game-screen [state]
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
          (q/text (first val) (+ x (/ cell-size 2)) (+ y (/ cell-size 2))))))))

(defn draw-3d-game-screen [state]
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

(defn draw-game-over [state]
  (q/background 150)
  (draw-game-screen state)
  (q/fill 255 100 100)
  (q/text (str "Game Over " (board/check-winner (:board state)) " wins!") (/ (q/width) 2) 20))

(defn draw [state]
  (case (:screen state)
    :game-over (draw-game-over state)
    :in-progress-game (draw-in-progress-game state)
    :select-game-mode (draw-select-game-mode state)
    :select-board (draw-select-board state)
    :select-difficulty (draw-select-difficulty state)
    :replay (draw-replay-screen state)
    :replay-id-entry (draw-replay-id-entry state)
    :game (cond
            (or (= :3x3 (:board-size state)) (= :4x4 (:board-size state))) (draw-game-screen state)
            (= :3x3x3 (:board-size state)) (draw-3d-game-screen state)
            :else (draw-select-game-mode state))))

(defn start-gui [store]
  (let [starting-screen (opt/determine-starting-screen store)]
    (q/sketch
      :title "Tic-Tac-Toe"
      :size [400 400]
      :setup #(hash-map
                :screen starting-screen
                :markers ["X" "O"]
                :store store
                :typed-id ""
                :turn "p1")
      :draw draw
      :mouse-pressed mouse-pressed!
      :middleware [m/fun-mode])))

#_(q/defsketch tic-tac-toe
    :title "Tic-Tac-Toe"
    :size [400 400]
    :setup setup
    :draw draw
    :mouse-pressed mouse-pressed!
    :middleware [m/fun-mode])