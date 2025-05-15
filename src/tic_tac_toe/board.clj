(ns tic-tac-toe.board)

(defn get-board [size] (cond
                         (= :3x3 size) [[""] [""] [""] [""] [""] [""] [""] [""] [""]]
                         (= :4x4 size) [[""] [""] [""] [""]
                                        [""] [""] [""] [""]
                                        [""] [""] [""] [""]
                                        [""] [""] [""] [""]]))

(def winning-moves [[0 1 2] [3 4 5] [6 7 8]
                    [0 3 6] [1 4 7] [2 5 8]
                    [0 4 8] [2 4 6]])

(defn tie-game? [board]
  (every? false? (map #(empty? (first %)) board)))

(defn- winner-result [board]
  (first (filter #(and
                    (not= "" (first %))
                    (every? #{(first %)} %)) board)))

(defn check-winner [board]
  (let [wm->board (for [wm winning-moves] (map #(first (nth board %)) wm))]
    (let [winner-result (winner-result wm->board)]
      (if winner-result
        (first winner-result)
        (if (tie-game? board) "tie" nil)))))

(defn open-positions [board]
  (filter #(not= nil %)
    (map-indexed
      (fn [idx itm] (when (= "" (first itm)) idx)) board)))
