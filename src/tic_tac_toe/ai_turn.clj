(ns tic-tac-toe.ai-turn)

(def winning-moves [[0 1 2] [3 4 5] [6 7 8]
                    [0 3 6] [1 4 7] [2 5 8]
                    [0 4 8] [2 4 6]])

(defn tie-game? [board]
  (every? false? (map #(empty? (first %)) board)))

(defn winner-result [board]
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

(declare score-board)
(defn- minimax [b maximizing? depth ai-marker]
  (let [p1-marker ai-marker
        p2-marker (if (= "O" p1-marker) "X" "O")
        spec {true  {:extrema-fn max :extreme ##-Inf :current-marker p1-marker}
              false {:extrema-fn min :extreme ##Inf :current-marker p2-marker}}
        {:keys [extrema-fn extreme current-marker]} (spec maximizing?)]
    (loop [positions (open-positions b) best-score extreme]
      (if (empty? positions)
        best-score
        (let [new-b (assoc b (first positions) [current-marker])
              score (score-board new-b (not maximizing?) (inc depth) ai-marker)]
          (recur (rest positions) (extrema-fn best-score score)))))))

(defn score-game [result depth ai-marker]
  (cond
    (= result ai-marker) (- 10 depth)
    (= result "tie") 0
    :else (+ depth -10)))

(defn score-board [b maximizing? depth ai-marker]
  (if-let [result (check-winner b)]
    (score-game result depth ai-marker)
    (minimax b maximizing? depth ai-marker)))



(defn hard [board marker open]
  (let [possible-boards (map #(assoc board % [marker]) open)
        board-scores (map #(score-board % false 0 marker) possible-boards)]
    (first (first (sort-by second > (zipmap open board-scores))))))

(defn easy [open]
  (rand-nth open))

(defn medium [board marker open]
  (let [chance (rand-int 2)]
    (cond
      (= 0 chance) (hard board marker open)
      (= 1 chance) (easy open))))

(defn ai-turn [board marker difficulty]
  (let [open (open-positions board)]
    (cond
      (= :hard difficulty) (hard board marker open)
      (= :medium difficulty) (medium board marker open)
      (= :easy difficulty) (easy open))))