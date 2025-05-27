(ns tic-tac-toe.ai-turn
  (:require [tic-tac-toe.board :as board]))

(defn creates-fork? [board marker pos]
  (let [new-board (assoc board pos [marker])
        lines (get board/winning-moves :3x3x3)
        catch-fork
        (filter (fn [line]
                  (let [vals (map #(get new-board %) line)
                        count (frequencies vals)]
                    (and (= 2 (get count [marker] 0))
                      (= 1 (get count [""] 0)))))
          lines)]
    (>= (count catch-fork) 2)))

(defn will-create-fork-next-turn? [board marker pos]
  (let [new-board (assoc board pos [marker])
        open (board/open-positions new-board)]
    (some #(creates-fork? new-board marker %) open)))

(defn evaluate-lines [board marker]
  (let [opponent (if (= "X" marker) "O" "X")
        lines (get board/winning-moves :3x3x3)
        score-line
        (fn [line]
          (let [vals (map #(get board %) line)
                counts (frequencies vals)
                marker-score (get counts [marker] 0)
                opponent-score (get counts [opponent] 0)]
            (cond
              (and (= 2 marker-score) (= 0 opponent-score)) 10
              (and (= 1 marker-score) (= 0 opponent-score)) 1
              (and (= 2 opponent-score) (= 0 marker-score)) -10
              (and (= 1 opponent-score) (= 0 marker-score)) -1
              :else 0)))]
    (reduce + (map #(score-line %) lines))))

(defn score-minimax-result [result depth marker]
  (cond
    (= result marker) (- 10 depth)
    (= result "tie") 0
    :else (+ depth -10)))

(declare score-move)
(defn minimax [board maximizing? depth ai-marker ai-best p2-best]
  (let [
        p1-marker ai-marker
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
    (let [max-depth (if (= 27 (count board)) 4 12)]
      (if (>= depth max-depth)
        (evaluate-lines board ai-marker)
        (memo-minimax board maximizing? depth ai-marker ai-best p2-best)))))


(defn win-detected? [board marker open]
  (let [opponent (if (= "X" marker) "O" "X")
        winning (some (fn [pos]
                        (let [new-board (assoc board pos [marker])]
                          (when (= marker (board/check-winner new-board))
                            pos))) open)
        blocking (some (fn [pos]
                         (let [new-board (assoc board pos [opponent])]
                           (when (= opponent (board/check-winner new-board))
                             pos))) open)
        fork (some (fn [pos]
                     (when (will-create-fork-next-turn? board opponent pos)
                       pos)) open)
        own-fork (some (fn [pos]
                         (when (will-create-fork-next-turn? board marker pos)
                           pos)) open)]
    (cond
      blocking blocking
      winning winning
      fork fork
      own-fork own-fork
      :else nil)))

(defn hard [board marker open-positions]
  (let [is-3d (= 27 (count board))
        immediate-move (when is-3d
                         (win-detected? board marker open-positions))]
    (if (and immediate-move is-3d)
      immediate-move
      (let [is-4x4 (= 16 (count board))
            possible-boards (map #(assoc board % [marker]) open-positions)
            board-scores (map #(score-move % false 0 marker ##-Inf ##Inf) possible-boards)
            turn-limit (when is-4x4 12)]
        (cond
          (and is-3d (<= turn-limit (count open-positions))) (evaluate-lines board marker)
          (and is-4x4 (<= turn-limit (count open-positions))) (best-early-move board)
          :else (first (first (sort-by second > (zipmap open-positions board-scores)))))))))

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
