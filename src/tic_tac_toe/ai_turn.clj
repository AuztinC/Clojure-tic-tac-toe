(ns tic-tac-toe.ai-turn
  (:require [tic-tac-toe.board :as board]))

(declare score-move)
(defn minimax [board maximizing? depth ai-marker size]
  (let [p1-marker ai-marker
        p2-marker (if (= "O" p1-marker) "X" "O")
        spec {true  {:extrema-fn max :extreme ##-Inf :current-marker p1-marker}
              false {:extrema-fn min :extreme ##Inf :current-marker p2-marker}}
        {:keys [extrema-fn extreme current-marker]} (spec maximizing?)]
    ;; TODO ARC - use reduce?
    (loop [positions (board/open-positions board) best-score extreme]
      (if (empty? positions)
        best-score
        (let [new-board (assoc board (first positions) [current-marker])
              score (score-move new-board (not maximizing?) (inc depth) ai-marker size)]
          (recur (rest positions) (extrema-fn best-score score)))))))

(def memo-mini (memoize minimax))

(defn score-minimax-result [result depth marker]
  (cond
    (= result marker) (- 10 depth)
    (= result "tie") 0
    :else (+ depth -10)))

(defn score-move [board maximizing? depth ai-marker size]
  (if-let [result (board/check-winner board size)]
    (score-minimax-result result depth ai-marker)
    (minimax board maximizing? depth ai-marker size)))

(defn hard [board marker open size]
  (let [possible-boards (map #(assoc board % [marker]) open)
        board-scores (map #(score-move % false 0 marker size) possible-boards)]
    (first (first (sort-by second > (zipmap open board-scores))))))

(defn easy [open]
  (rand-nth open))

(defn medium [board marker open size]
  (let [chance (rand-int 2) ]
    (cond
      (= 0 chance) (hard board marker open size)
      (= 1 chance) (easy open))))

(defn ai-turn [board marker difficulty]
  (let [open (board/open-positions board)]
    (cond
      (= :hard difficulty) (hard board marker open :3x3)
      (= :medium difficulty) (medium board marker open :3x3)
      (= :easy difficulty) (easy open))))