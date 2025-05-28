(ns tic-tac-toe.board)

(defn get-board [size] (cond
                         (= :3x3 size) [[""] [""] [""] [""] [""] [""] [""] [""] [""]]
                         (= :4x4 size) [[""] [""] [""] [""] [""] [""] [""] [""] [""] [""] [""] [""] [""] [""] [""] [""]]
                         (= :3x3x3 size) [[""] [""] [""] [""] [""] [""] [""] [""] [""]
                                          [""] [""] [""] [""] [""] [""] [""] [""] [""]
                                          [""] [""] [""] [""] [""] [""] [""] [""] [""]]))

(def winning-moves {:3x3   [[0 1 2] [3 4 5] [6 7 8]
                            [0 3 6] [1 4 7] [2 5 8]
                            [0 4 8] [2 4 6]]
                    :4x4   [[0 1 2 3] [4 5 6 7] [8 9 10 11] [12 13 14 15]
                            [0 4 8 12] [1 5 9 13] [2 6 10 14] [3 7 11 15]
                            [0 5 10 15] [3 6 9 12]]
                    :3x3x3 [[0 1 2] [3 4 5] [6 7 8]         ;horizontal-flat
                            [9 10 11] [12 13 14] [15 16 17] ;horizontal-flat
                            [18 19 20] [21 22 23] [24 25 26] ;horizontal-flat
                            [2 10 18] [0 10 20]             ;diag-flat
                            [3 13 23] [5 13 21]             ;diag-flat
                            [6 16 26] [8 16 24]             ;diag-flat
                            [0 4 8] [2 4 6]                 ;diag-3d -top
                            [9 13 17] [11 13 15]            ;diag-3d -mid
                            [18 22 26] [20 22 24]           ;diag-3d -bottom
                            [0 12 24] [6 12 18]             ;diag-3d -vert-left
                            [1 13 25] [7 13 19]             ;diag-3d -vert-mid
                            [2 14 26] [8 14 20]             ;diag-3d -vert-right
                            [0 3 6] [1 4 7] [2 5 8]         ;vertical-3d -top
                            [9 12 15] [10 13 16] [11 14 17] ;vertical-3d -mid
                            [18 21 24] [19 22 25] [20 23 26] ;vertical-3d -bottom
                            [0 9 18] [1 10 19] [2 11 20]    ;vertical-flat
                            [3 12 21] [4 13 22] [5 14 23]   ;vertical-flat
                            [6 15 24] [7 16 25] [8 17 26]   ;vertical-flat
                            [0 13 26] [6 13 20] [2 13 24] [8 13 18]
                            ]})

(defn tie-game? [board]
  (every? false? (map #(empty? (first %)) board)))

(defn- winner-result [board]
  (first (filter #(and
                    (not= "" (first %))
                    (every? #{(first %)} %)) board)))

(defn check-winner [board]
  (let [board-size (case (count board)
                     9 :3x3
                     16 :4x4
                     :3x3x3)
        winning-lines (get winning-moves board-size)
        line-values (map #(map (comp first (partial nth board)) %) winning-lines)
        winner (some (fn [line]
                       (let [first-val (first line)]
                         (when (and (not= first-val "")
                                 (every? #(= % first-val) line))
                           first-val)))
                 line-values)]
    (if winner
      winner
      (if (tie-game? board) "tie" nil))))

(defn open-positions [board]
  (filter #(not= nil %)
    (map-indexed
      (fn [idx itm] (when (= "" (first itm)) idx)) board)))
