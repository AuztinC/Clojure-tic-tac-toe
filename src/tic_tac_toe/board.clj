(ns tic-tac-toe.board)

(defn get-board [size] (cond
                         (= :3x3 size) [[""] [""] [""] [""] [""] [""] [""] [""] [""]]
                         (= :4x4 size) [[""] [""] [""] [""] [""] [""] [""] [""] [""] [""] [""] [""] [""] [""] [""] [""]]))

(def ->3x3-winning-moves [[0 1 2] [3 4 5] [6 7 8]
                          [0 3 6] [1 4 7] [2 5 8]
                          [0 4 8] [2 4 6]])

(def ->4x4-winning-moves [[0 1 2 3] [4 5 6 7] [8 9 10 11] [12 13 14 15]
                          [0 4 8 12] [1 5 9 13] [2 6 10 14] [3 7 11 15]
                          [0 5 10 15] [3 6 9 13]])

(defn winning-moves [size] (cond
                             (= :3x3 size) ->3x3-winning-moves
                             (= :4x4 size) ->4x4-winning-moves))

(defn tie-game? [board]
  (every? false? (map #(empty? (first %)) board)))

(defn- winner-result [board]
  (first (filter #(and
                    (not= "" (first %))
                    (every? #{(first %)} %)) board)))

(defn score-4x4 [board]
  (let [wm->board (for [wm (winning-moves :4x4)] (map #(first (nth board %)) wm))]
    (let [winner-result (winner-result wm->board)]
      (if winner-result
        (first winner-result)
        (if (tie-game? board) "tie" nil)))))

(defn score-3x3 [board]
  (let [wm->board (for [wm (winning-moves :3x3)] (map #(first (nth board %)) wm))]
    (let [winner-result (winner-result wm->board)]
      (if winner-result
        (first winner-result)
        (if (tie-game? board) "tie" nil)))))

(defn check-winner [board]
  (cond
    (= 9 (count board)) (score-3x3 board)
    (= 16 (count board)) (score-4x4 board)))

(defn open-positions [board]
  (filter #(not= nil %)
    (map-indexed
      (fn [idx itm] (when (= "" (first itm)) idx)) board)))
