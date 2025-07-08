(ns tic-tac-toe.quil-core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.game :as init]
            [tic-tac-toe.quil-drawings :as draw]))

(defn in-button? [mx my x y w h]
  (and (>= mx x) (<= mx (+ x w))
    (>= my y) (<= my (+ y h))))

(defn ->difficulty [x y]
  (cond
    (in-button? x y 250 220 70 50) :easy
    (in-button? x y 150 220 70 50) :medium
    (in-button? x y 50 220 70 50) :hard
    :else nil))

(defn click-backspace? [x y pos-x pos-y]
  (in-button? x y pos-x pos-y 70 50))

(defn click-enter? [x y pos-x pos-y]
  (in-button? x y pos-x pos-y 70 50))

(defn click-clear? [x y pos-x pos-y]
  (in-button? x y pos-x pos-y 40 50))

(defn sleep []
  (Thread/sleep 500))

(defn next-state [state selection]
  (let [{:keys [turn markers]} state
        marker (case turn
                 "p1" (first markers)
                 "p2" (second markers))
        next-turn (init/next-player turn)
        updated (assoc state :board (assoc (:board state) selection [marker]) :turn next-turn)]
    (db/update-current-game! updated selection)
    updated))

(defn get-selection [state]
  (let [{:keys [store id board markers difficulties turn players]} state
        [marker player] (case turn
                          "p1" [(first markers) (first players)]
                          "p2" [(second markers) (second players)])
        difficulty (init/->difficulties turn :ai difficulties)]
    (when (= :ai player)
      (sleep)
      (let [move (init/play-turn store id board [marker :ai] difficulty)]
        (when (nil? move))
        move))))

(defn game-loop! [state]
  (q/frame-rate 30)
  (cond
    (board/check-winner (:board state))
    (assoc state :screen :game-over)

    (and (not (:waiting-ai? state))
      (= :ai (case (:turn state)
               "p1" (first (:players state))
               "p2" (second (:players state)))))
    (assoc state :waiting-ai? true)

    (:waiting-ai? state)
    (let [selection (get-selection state)]
      (if selection
        (-> state
          (assoc :waiting-ai? false)
          (next-state selection))
        (assoc state :waiting-ai? false)))
    :else state))

(defmulti handle-in-game-click!
  (fn [state _event] (:board-size state)))

(declare draw-game-screen)
(defmethod handle-in-game-click! :3x3 [state event]
  (let [{:keys [x y]} event
        {:keys [markers turn board store id]} state
        marker (case turn
                 "p1" (first markers)
                 "p2" (second markers))
        cell-size (/ (q/width) 3)
        col (int (/ x cell-size))
        row (int (/ y cell-size))
        index (+ (* row 3) col)
        selection? (and (>= index 0) (< index 9) (= (first (nth board index)) ""))]
    (if selection?
      (do
        (-> state
          (next-state index)
          #_(assoc :board (assoc board index [marker]) :turn (init/next-player turn))
          (draw-game-screen)))
      state)))

(defmethod handle-in-game-click! :4x4 [state event]
  (let [{:keys [x y]} event
        {:keys [markers turn board store id]} state
        marker (case turn
                 "p1" (first markers)
                 "p2" (second markers))
        cell-size (/ (q/width) 4)
        col (int (/ x cell-size))
        row (int (/ y cell-size))
        index (+ (* row 4) col)
        entry {:player marker :move index}
        selection? (and (>= index 0) (< index 16) (= (first (nth board index)) ""))]
    (if selection?
      (do
        (-> state
          (assoc :board (assoc board index [marker]) :turn (init/next-player turn))
          (draw-game-screen)))
      state)))

(defn- find-layer [x y square]
  (first
    (keep-indexed
      (fn [i _]
        (let [ox (* i square)
              oy (* i square)]
          (when (and (>= x ox) (< x (+ ox square))
                  (>= y oy) (< y (+ oy square)))
            i)))
      (range 3))))

(defmethod handle-in-game-click! :3x3x3 [state event]
  (let [{:keys [x y]} event
        {:keys [markers turn board store id]} state
        marker (case turn
                 "p1" (first markers)
                 "p2" (second markers))
        cell-size (/ (q/width) 9)
        layer-size (* 3 cell-size)
        layer (find-layer x y layer-size)]

    (if (some? layer)
      (let [ox (* layer layer-size)
            oy (* layer layer-size)
            local-x (- x ox)
            local-y (- y oy)
            col (int (/ local-x cell-size))
            row (int (/ local-y cell-size))
            index (+ (* layer 9) (+ (* row 3) col))
            entry {:player marker :move index}
            selection? (and (>= index 0)
                         (< index 27)
                         (= (first (nth board index)) ""))]
        (if selection?
          (do
            (-> state
              (next-state index)
              #_(assoc :board (assoc board index [marker]) :turn (init/next-player turn))
              (draw-game-screen)))
          state))
      state)))

(defmulti mouse-pressed! (fn [state _event] (:screen state)))

(defmethod mouse-pressed! :select-game-mode [state event]
  (let [{:keys [x y]} event]
    (cond
      (in-button? x y 20 220 70 50)
      (assoc state :players [:human :human] :screen :select-board)
      (in-button? x y 120 220 70 50)
      (assoc state :players [:ai :human] :screen :select-board)
      (in-button? x y 220 220 70 50)
      (assoc state :players [:human :ai] :screen :select-board)
      (in-button? x y 320 220 70 50)
      (assoc state :mode :ai-v-ai :players [:ai :ai] :screen :select-board)
      :else state)))

(defmethod mouse-pressed! :select-board [state event]
  (let [next-screen (if (= [:human :human] (:players state))
                      :game
                      :select-difficulty)
        {:keys [x y]} event]
    (cond
      (in-button? x y 250 220 70 50)
      (assoc state :board (board/get-board :3x3) :board-size :3x3 :screen next-screen)
      (in-button? x y 150 220 70 50)
      (assoc state :board (board/get-board :4x4) :board-size :4x4 :screen next-screen)
      (in-button? x y 50 220 70 50)
      (assoc state :board (board/get-board :3x3x3) :board-size :3x3x3 :screen next-screen)
      :else state)))

(defmethod mouse-pressed! :select-difficulty [state event]
  (let [{:keys [x y]} event
        difficulty (->difficulty x y)]
    (if difficulty
      (let [ai-count (count (filterv #(= :ai %) (:players state)))
            updated-difficulties (conj (vec (:difficulties state)) difficulty)]
        (if (< (count updated-difficulties) ai-count)
          (assoc state :difficulties updated-difficulties)
          (-> state
            (assoc :id (db/set-new-game-id {:store (:store state)})
              :difficulties updated-difficulties
              :screen :game))))
      state)))

(defmethod mouse-pressed! :replay-confirm [state event]
  (let [{:keys [x y]} event]
    (cond
      (in-button? x y 220 220 70 50)
      (assoc state :screen :select-game-mode)
      (in-button? x y 120 220 70 50)
      (assoc state :screen :replay-id-entry)
      :else state)))

(defn- add-to-typed-id [state clicked-digit]
  (let [new-id (str (:typed-id state) clicked-digit)]
    (if (<= (count new-id) 2)
      (assoc state :typed-id new-id)
      state)))

(defn confirm-replay [state]
  (let [id-str (:typed-id state)
        id (Integer/parseInt id-str)
        game (db/find-game-by-id {:store (:store state)} id)]
    (println "game" game)
    (if (empty? game)
      (assoc state :typed-id "Game not found")
      (assoc game :screen :replay :board (board/get-board (:board-size game))))))

(defmethod mouse-pressed! :replay-id-entry [state event]
  (let [{:keys [x y]} event
        clicked-digit (some (fn [[digit [bx by]]]
                              (when (in-button? x y bx by 15 15)
                                digit))
                        draw/digit-positions)]
    (cond
      clicked-digit
      (add-to-typed-id state clicked-digit)
      (click-backspace? x y 120 300)
      (update state :typed-id #(subs % 0 (max 0 (dec (count %)))))

      (click-enter? x y 220 300)
      (confirm-replay state)

      (click-clear? x y 80 300)
      (assoc state :typed-id "")
      :else state)))

(defmethod mouse-pressed! :in-progress-game [state event]
  (let [{:keys [x y]} event]
    (cond
      (in-button? x y 100 220 100 50)
      (merge state (db/in-progress? {:store (:store state)}))
      (in-button? x y 230 220 100 50)
      (if (db/previous-games? {:store (:store state)})
        (assoc state :screen :replay-confirm)
        (assoc state :screen :select-game-mode))
      :else state)))

(defmethod mouse-pressed! :game [state event]
  (handle-in-game-click! state event))

(defn draw-game-screen [state]
  (let [turn (case (:turn state)
               "p1" "X"
               "p2" "O"
               "X")
        board (:board state)
        size (if (= 9 (count (:board state)))
               3
               4)
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
          (q/text (first val) (+ x (/ cell-size 2)) (+ y (/ cell-size 2)))
          (q/text-size 15)
          (q/text (str "Game Id: " (:id state)) 50 10))))
    state))

(defn draw-3d-game-screen [state]
  (let [turn (case (:turn state)
               "p1" "X"
               "p2" "O"
               "X")
        layers (partition 9 (:board state))
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
                  val (first (nth layer idx))
                  x (+ offset (* col cell-size))
                  y (+ offset (* row cell-size))]
              (when (not= val "")
                (q/text-align :center :center)
                (q/text-size 28)
                (q/fill 0)
                (q/text val (+ x (/ cell-size 2)) (+ y (/ cell-size 2)))))))))
    (q/text (str "Turn: " turn) (/ (q/width) 2) (- (q/height) 20))
    (q/text-size 15)
    (q/text (str "Game Id: " (:id state)) (/ (q/width) 2) 10)))

(defn draw-game-over [state]
  (let [is3d? (= 27 (count (:board state)))]
    (q/background 150)
    (if is3d?
      (draw-3d-game-screen state)
      (draw-game-screen state))
    (q/fill 255 100 100)
    (q/text (str "Game Over " (board/check-winner (:board state)) " wins!") (/ (q/width) 2) 20)))

(defn watch-replay [state]
  (q/frame-rate 2)
  (if-let [[next-move & remaining] (:moves state)]
    (let [{:keys [player position]} next-move
          new-board (assoc (:board state) position [player])
          winner (board/check-winner new-board)
          updated-state (-> state
                          (assoc :board new-board)
                          (assoc :moves remaining)
                          (assoc :turn (init/next-player (:turn state))))]
      (if winner
        (assoc updated-state :screen :game-over)
        updated-state))
    (assoc state :screen :game-over)))

(defn draw [state]
  (case (:screen state)
    :game-over (draw-game-over state)
    :in-progress-game (draw/draw-in-progress-game state)
    :select-game-mode (draw/draw-select-game-mode state)
    :select-board (draw/draw-select-board state)
    :select-difficulty (draw/draw-select-difficulty state)
    :replay-confirm (draw/draw-replay-screen state)
    :replay-id-entry (draw/draw-replay-id-entry state)
    :replay (draw-game-screen state)
    :game (cond
            (or (= :3x3 (:board-size state)) (= :4x4 (:board-size state)))
            (draw-game-screen state)

            (= :3x3x3 (:board-size state))
            (draw-3d-game-screen state))
    :else (draw/draw-select-game-mode state)))




(defn update-state [state]
  (case (:screen state)
    :game
    (game-loop! state)

    :replay
    (watch-replay state)

    state))

(defn- determine-starting-screen [store]
  (cond
    (db/in-progress? {:store store}) :in-progress-game
    (db/previous-games? {:store store}) :replay-confirm
    :else :select-game-mode))

(defn start-gui [store]
  (let [starting-screen (determine-starting-screen store)]
    (q/sketch
      :title "Tic-Tac-Toe"
      :size [400 400]
      :setup #(hash-map
                :screen starting-screen
                :markers ["X" "O"]
                :store store
                :typed-id ""
                :turn "p1"
                :waiting-ai? true)
      :update update-state
      :draw draw
      :mouse-pressed mouse-pressed!
      :middleware [m/fun-mode])))