(ns tic-tac-toe.ai-turn
  (:require [tic-tac-toe.board :as board]))

(defn score-minimax-result [result depth marker]
  (cond
    (= result marker) (- 10 depth)
    (= result "tie") 0
    :else (+ depth -10)))

(declare score-move)
(defn minimax [board maximizing? depth ai-marker ai-best p2-best]
  (let [p1-marker ai-marker
        p2-marker (if (= "O" p1-marker) "X" "O")
        spec {true  {:extrema-fn max :extreme ##-Inf :current-marker p1-marker}
              false {:extrema-fn min :extreme ##Inf :current-marker p2-marker}}
        {:keys [extrema-fn extreme current-marker]} (spec maximizing?)]
    (if-let [result (board/check-winner board)]
      (score-minimax-result result depth current-marker)
      (loop [open-positions (board/open-positions board)
             best-score extreme
             ai-best ai-best
             p2-best p2-best]
        (if (empty? open-positions)
          best-score
          (let [pos (first open-positions)
                new-board (assoc board pos [current-marker])
                score (score-move new-board (not maximizing?) (inc depth) ai-marker ai-best p2-best)
                new-best (extrema-fn score best-score)
                new-ai-best (if maximizing? (max ai-best new-best) ai-best)
                new-p2-best (if (not maximizing?) (min p2-best new-best) p2-best)]
            (if (>= new-ai-best new-p2-best)
              new-best
              (recur (rest open-positions) new-best new-ai-best new-p2-best))))))))

(def memo-minimax (memoize (fn [board maximizing? depth ai-marker ai-best p2-best]
                             (minimax board maximizing? depth ai-marker ai-best p2-best))))

(defn best-early-move [board]
  (let [best-moves [0 3 12 15 5 6 9 10]
        filtered-moves (vec (filter #(empty? (first (get board %))) best-moves))
        random-best (rand-int (count filtered-moves))]
    (get filtered-moves random-best)))

(defn score-move [board maximizing? depth ai-marker ai-best p2-best]
  (if-let [result (board/check-winner board)]
    (score-minimax-result result depth ai-marker)
    (memo-minimax board maximizing? depth ai-marker ai-best p2-best)))

(defn hard [board marker open-positions]
  (let [possible-boards (map #(assoc board % [marker]) open-positions)
        board-scores (map #(score-move % false 0 marker ##-Inf ##Inf) possible-boards)
        turn-limit 12]
    (cond
      (<= turn-limit (count open-positions)) (best-early-move board)
      :else (first (first (sort-by second > (zipmap open-positions board-scores)))))))

(defn easy [open]
  (rand-nth open))

(defn medium [board marker open]
  (let [chance (rand-int 2)]
    (cond
      (= 0 chance) (hard board marker open)
      (= 1 chance) (easy open))))

(defn ai-turn [board marker difficulty]
  (let [open-positions (board/open-positions board)]
    (cond
      (= :hard difficulty) (hard board marker open-positions)
      (= :medium difficulty) (medium board marker open-positions)
      (= :easy difficulty) (easy open-positions))))
