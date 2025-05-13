(ns tic-tac-toe.ai-turn
  (:require [tic-tac-toe.board :as board]))

(declare score-board)
(defn minimax [b maximizing? depth ai-marker]
  (let [p1-marker ai-marker
        p2-marker (if (= "O" p1-marker) "X" "O")
        spec {true  {:extrema-fn max :extreme ##-Inf :current-marker p1-marker}
              false {:extrema-fn min :extreme ##Inf :current-marker p2-marker}}
        {:keys [extrema-fn extreme current-marker]} (spec maximizing?)]
    (loop [positions (board/open-positions b) best-score extreme]
      (if (empty? positions)
        best-score
        (let [new-b (assoc b (first positions) [current-marker])
              score (score-board new-b (not maximizing?) (inc depth) ai-marker)]
          (recur (rest positions) (extrema-fn best-score score)))))))

(defn score-minimax-result [result depth ai-marker]
  (cond
    (= result ai-marker) (- 10 depth)
    (= result "tie") 0
    :else (+ depth -10)))

(defn score-board [board maximizing? depth ai-marker]
  (if-let [result (board/check-winner board)]
    (score-minimax-result result depth ai-marker)
    (minimax board maximizing? depth ai-marker)))

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
  (let [open (board/open-positions board)]
    (cond
      (= :hard difficulty) (hard board marker open)
      (= :medium difficulty) (medium board marker open)
      (= :easy difficulty) (easy open))))