(ns tic-tac-toe.ai-turn
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.init-game :as init]
            [tic-tac-toe.persistence :as db]))

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

(defn creates-fork? [board marker pos]
  (let [new-board (assoc board pos [marker])
        lines (get board/winning-moves :3x3x3)
        potential-wins
        (for [line lines
              :let [vals (map #(get new-board %) line)
                    freqs (frequencies vals)]
              :when (and (= 2 (get freqs [marker] 0))
                      (= 1 (get freqs [""] 0)))]
          (first (filter #(= (get new-board %) [""]) line)))]
    (>= (count (distinct potential-wins)) 2)))

(declare evaluate-lines)
(defn best-fork-threats [board marker pos]
  (let [new-board (assoc board pos [marker])
        opponent (if (= "X" marker) "O" "X")
        open (board/open-positions new-board)
        fork-threats (filter #(creates-fork? (assoc new-board % [opponent]) opponent %) open)]
    (reduce
      (fn [acc threat-pos]
        (let [score (evaluate-lines (assoc new-board threat-pos [opponent]) opponent)]
          (cond
            (> score (:score acc)) {:score score :positions [threat-pos]}
            (= score (:score acc)) (update acc :positions conj threat-pos)
            :else acc)))
      {:score ##-Inf :positions []}
      fork-threats)))

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
              (= 3 marker-score) 1000
              (and (= 2 marker-score) (= 0 opponent-score)) 100
              (and (= 1 marker-score) (= 0 opponent-score)) 10
              (and (= 2 opponent-score) (= 0 marker-score)) -100
              (and (= 1 opponent-score) (= 0 marker-score)) -10
              :else 0)))]
    (reduce + (map #(score-line %) lines))))

(defn score-move [board maximizing? depth ai-marker ai-best p2-best]
  (if-let [result (board/check-winner board)]
    (score-minimax-result result depth ai-marker)
    (if (>= depth 10)
      (evaluate-lines board ai-marker)
      (memo-minimax board maximizing? depth ai-marker ai-best p2-best))
    ))

(defn prevent-opponent-fork [board marker opponent]
  (first
    (filter (fn [pos]
              (let [new-board (assoc board pos [marker])
                    forks-after-move (filter #(creates-fork? (assoc new-board % [opponent]) opponent %)
                                       (board/open-positions new-board))]
                (when (empty? forks-after-move)
                  pos)))
      (board/open-positions board))))

(defn immediate-move? [board marker open]
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
                     (first (get (best-fork-threats board marker pos) :positions)))
               open)
        block-fork (prevent-opponent-fork board marker opponent)]
    (or winning blocking fork block-fork)))

(defn hard [board marker open-positions]
  (let [is-3d (= 27 (count board))
        immediate-move (if (= 27 (count open-positions))
                         13
                         (when is-3d
                           (immediate-move? board marker open-positions)))]
    (if (and immediate-move is-3d)
      immediate-move
      (let [is-4x4 (= 16 (count board))
            possible-boards (map #(assoc board % [marker]) open-positions)
            board-scores (map #(score-move % false 0 marker ##-Inf ##Inf) possible-boards)
            turn-limit (when is-4x4 12)]
        (cond
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

(defmethod init/play-turn :ai [store id board [marker _] diff]
  (let [move (ai-turn board marker diff)
        entry {:player marker
               :move move}]
    (do
      (db/update-previous-games! store id entry)
      (assoc board move [marker]))))
