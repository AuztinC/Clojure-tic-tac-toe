(ns tic-tac-toe.printer)

(defn ->index-board [board]
  (map-indexed
    (fn [idx cell] (if (= "" (first cell))
                     (str idx)
                     (first cell)))
    board))

(defn print-rows [row size]
  (println (str "   " (nth row 0) " | " (nth row 1) " | " (nth row 2)
             (if (= 4 size) (str " | " (nth row 3)) ""))))

(defn print-breaks [idx rows]
  (when (or (< idx (dec (count rows))))
    (println "  -----------")))

(defn formatted-board [board size]
  (let [indexed-board (->index-board board)
        rows (partition size indexed-board)]
    (doseq [[idx row] (map-indexed vector rows)]
      (print-rows row size)
      (print-breaks idx rows))
    (println "----------------")))

(defn print-board-selection []
  (println "Choose your board
  1: 3x3
  2: 4x4"))

(defn display-board [board]
  (cond
    (= 9 (count board)) (formatted-board board 3)
    (= 16 (count board)) (formatted-board board 4)))

(defn print-game-options []
  (println "Choose your game
  1: Human vs Computer
  2: Computer vs Human
  3: Human vs Human
  4: Computer vs Computer"))

(defn print-difficulty-iteration [current-ai]
  (let [current-ai (inc current-ai)]
   (println (cond
             (= 1 current-ai)(str "Choose " current-ai "st AI difficulty")
             (= 2 current-ai)(str "Choose " current-ai "nd AI difficulty")))))

(defn print-difficulty []
  (println "Choose AI difficulties
  1: Easy
  2: Medium
  3: Hard"))

(defn output-result [result]
  (if (= "tie" result)
    (println "tie game")
    (println (str result " wins!"))))

(defn print-bad-move [] (println "oops bad move, try again"))

(defn print-player-prompt [marker] (println (str "Player " marker ", enter your move:")))
