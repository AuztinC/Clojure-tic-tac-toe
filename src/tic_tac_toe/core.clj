(ns tic-tac-toe.core
  (:require [tic-tac-toe.play-turn :as pt]
            [tic-tac-toe.printer :as printer]))

(def board [[""] [""] [""] [""] [""] [""] [""] [""] [""]])

(defn display-board [b] (run! println (partition 3 b)))

(def winning-moves [[0 1 2] [3 4 5] [6 7 8]
                    [0 3 6] [1 4 7] [2 5 8]
                    [0 4 8] [2 4 6]])

(defn tie-game? [b]
  (every? false? (map #(empty? (first %)) b)))

(defn winner-result [b]
  (first (filter #(and
                    (not= "" (first %))
                    (every? #{(first %)} %)) b)))

(defn check-winner [b]
  (let [wm->board (for [wm winning-moves] (map #(first (nth b %)) wm))]
    (let [winner-result (winner-result wm->board)]
      (if winner-result
        (first winner-result)
        (if (tie-game? b) "tie" nil)))))

(defn open-positions [b]
  (filter #(not= nil %)
    (map-indexed
      (fn [idx itm] (when (= "" (first itm)) idx)) b)))

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

(defn empty-space? [board move]
  (= [""] (get board move)))

(declare human-turn)
(defn bad-move [board marker]
  (do
    (printer/print-bad-move)
    (display-board board)
    (human-turn board marker)))

(defn human-turn [board marker]
  (printer/print-player-prompt marker)
  (let [move (Integer/parseInt (read-line))]
    (if (empty-space? board move)
      move
      (bad-move board marker))))

(defn set-turn [turn]
  (if (= "p1" turn) "p2" "p1"))

(defn set-players [turn player1-marker player1-type player2-marker player2-type]
  (if (= "p1" turn)
    [player1-marker player1-type]
    [player2-marker player2-type]))

(defn set-player-fn [player-type]
  (cond
    (= :human player-type) human-turn
    (= :ai player-type) ai-turn))

(defn set-difficulties [turn player-type difficulties]
  (if (= 1 (count difficulties))
    (if(= :ai player-type)(first difficulties))
    (cond
      (and (= "p1" turn) (= :ai player-type)) (first difficulties)
      (and (= "p2" turn) (= :ai player-type)) (second difficulties))))

(defn init-game
  [board [player1-type player2-type] [player1-marker player2-marker] difficulties]
  (loop [board board result (check-winner board) turn "p1"]
    (display-board board)
    (if result
      (printer/output-result result)
      (let [[marker player-type] (set-players turn player1-marker player1-type player2-marker player2-type)
            player-fn (set-player-fn player-type)
            difficulty (set-difficulties turn player-type difficulties)
            new-board (pt/play-turn board marker player-fn difficulty)]
        (recur new-board
          (check-winner new-board)
          (set-turn turn))))))

(declare select-difficulty)
(defn- retry-difficulty [iterations]
  (println "Not a difficulty, retry.")
  (select-difficulty iterations))

(defn select-difficulty [iterations]
  (printer/print-difficulty)
  (loop [out []]
    (if (= iterations (count out))
      out
      (let [player-choice (read-line)
            option (cond
                     (= "1" player-choice) :easy
                     (= "2" player-choice) :medium
                     (= "3" player-choice) :hard
                     :else (retry-difficulty iterations))]
        (recur (conj out option))))))

(declare select-game)
(defn- retry-select-game []
  (println "Not a game-mode, retry.")
  (select-game))

(defn select-game []
  (printer/print-game-options)
  (let [game (read-line)]
    (cond
      (= "1" game) (init-game board [:human :ai] ["X" "O"] (select-difficulty 1))
      (= "2" game) (init-game board [:ai :human] ["X" "O"] (select-difficulty 1))
      (= "3" game) (init-game board [:human :human] ["X" "O"] (select-difficulty 0))
      (= "4" game) (init-game board [:ai :ai] ["X" "O"] (select-difficulty 2))
      :else (retry-select-game))))

(defn -main [& args]
  (select-game))

