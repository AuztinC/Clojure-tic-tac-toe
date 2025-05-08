(ns tic-tac-toe.core
  (:require [clojure.string :as str]))

(def board [[""] [""] [""] [""] [""] [""] [""] [""] [""]])

(defn display-board [b] (run! println (partition 3 b)))

(def winning-moves [[0 1 2] [3 4 5] [6 7 8]
                    [0 3 6] [1 4 7] [2 5 8]
                    [0 4 8] [2 4 6]])

(defn output-result [result]
  (if (= "tie" result)
    (println "tie game")
    (println (str result " wins!"))))

(def print-bad-move (println "oops bad move, try again"))

(defn print-player-prompt [marker] (println (str "Player " marker ", enter your move:")))

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
(defn- minimax [b maximizing? depth]
  (let [spec {true  {:extrema-fn max :extreme ##-Inf :marker "O"}
              false {:extrema-fn min :extreme ##Inf :marker "X"}}
        {:keys [extrema-fn extreme marker]} (spec maximizing?)]
    (loop [positions (open-positions b) best-score extreme]
      (if (empty? positions)
        best-score
        (let [new-b (assoc b (first positions) [marker])
              score (score-board new-b (not maximizing?) (inc depth))]
          (recur (rest positions) (extrema-fn best-score score)))))))

(def scores {"X" -10 "O" 10 "tie" 0})

(defn score-game [result depth]
  (let [score (get scores result)]
    (if (= score 0)
      0
      (- score depth))))

(defn score-board [b maximizing? depth]
  (if-let [result (check-winner b)]
    (score-game result depth)
    (minimax b maximizing? depth)))

(defn winner->block [b]
  (some (fn [m]
          (some (fn [pos]
                  (let [new-b (assoc b pos [m])]
                    (when (= m (check-winner new-b))
                      pos)))
            (open-positions b)))
    ["O" "X"]))

(defn ai-turn [b marker]
  (let [open (open-positions b)]
    (if-let [best-move (winner->block b)]
      best-move
      (loop [positions open
             best-pos -1
             best-score ##-Inf]
        (if (empty? positions)
          best-pos
          (let [pos (first positions)
                new-b (assoc b pos [marker])
                score (score-board new-b false 0)]
            (if (> score best-score)
              (recur (rest positions) pos score)
              (recur (rest positions) best-pos best-score))))))))

(defn empty-space? [board move]
  (= [""] (get board move)))

(defn human-turn [board marker]
  (print-player-prompt marker)
  (let [move (Integer/parseInt (read-line))]
    (if (empty-space? board move)
      move
      (do
        print-bad-move
        (display-board board)
        (human-turn board marker)))))

(defn play-turn [b marker move-fn]
  (let [move (move-fn b marker)]
    (assoc b move [marker])))

(defn set-turn [turn]
  (if (= "p1" turn) "p2" "p1"))

(defn init-game
  [board [player1-type player2-type] [player1-marker player2-marker]]
  (loop [board board result (check-winner board) turn "p1"]
    (display-board board)
    (if result
      (output-result result)
      (let [[marker player-type] (if (= "p1" turn)
                                   [player1-marker player1-type]
                                   [player2-marker player2-type])
            player-fn (cond
                        (= :human player-type) human-turn
                        (= :ai player-type) ai-turn)
            new-board (play-turn board marker player-fn)]
        (recur new-board
          (check-winner new-board)
          (set-turn turn))))))

#_(defn human-vs-computer [board]
    (display-board board)
    (let [input (human-turn board "X")
          new-b (assoc board input ["X"])
          ai-move (ai-turn new-b "O")]
      (assoc new-b ai-move ["O"]))
    #_(loop [b board turn "player" winner (check-winner b)]
        (display-board b)
        (if winner
          (output-result winner)
          (if (= "player" turn)
            (let [move (human-turn b)
                  new-b (assoc b move ["X"])]
              (recur new-b "ai" (check-winner new-b)))
            (let [ai-move (ai-turn b "O")
                  new-b (assoc b ai-move ["O"])]
              (recur new-b "player" (check-winner new-b)))))))

(defn- print-game-options []
  (println "Choose your game
  1: Human vs Computer
  2: Computer vs Human
  3: Human vs Human
  4: Computer vs Computer"))

(declare select-game)
(defn- retry-select-game []
  (println "Not a game-mode, retry.")
  (select-game))

(defn select-game []
  (print-game-options)
  (let [game (read-line)]
    (cond
      (= "1" game) (init-game board [:human :ai] ["X" "O"])
      (= "2" game) (init-game board [:ai :human] ["X" "O"])
      (= "3" game) (init-game board [:human :human] ["X" "O"])
      (= "4" game) (init-game board [:ai :ai] ["X" "O"])
      :else (retry-select-game))))

(defn print-simulated [result]
  (when (= result "X")
    (println "Something is wrong, X won!")))

(defn simulate-game [b turn]
  (if-let [winner (check-winner b)]
    winner
    (let [next-move (if (= turn "player")
                      (first (open-positions b))
                      (ai-turn b "O"))
          next-b (assoc b next-move [(if (= turn "player") "X" "O")])]
      (simulate-game next-b (if (= turn "player") "ai" "player")))))

(defn simulate-all-first-moves []
  (doseq [pos (open-positions board)]
    (let [new-b (assoc board pos ["X"])
          result (simulate-game new-b "ai")]
      (print-simulated result)
      )))

(defn -main [& args]
  (select-game))


(defn make-move [board move]
  (assoc board move "X"))

; Scores a player win as terrible
; Implement minimax on TTT board
; Computer has to determine what the BEST move is
; Computer has to determine which move to make
; Computer has to respond to one of my moves

; Play single move in the terminal
; Play in the terminal
; Implement unbeatable TTT
;
; Make a move on an empty board