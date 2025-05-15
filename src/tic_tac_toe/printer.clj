(ns tic-tac-toe.printer)

(defn ->3x3 [board]
  (let [indexed-board (map-indexed
                        (fn [idx cell]
                          (if (= "" (first cell))
                            (str idx)
                            (first cell)))
                        board)
        rows (partition 3 indexed-board)]
    (doseq [[idx row] (map-indexed vector rows)]
      (println (str "   " (nth row 0) " | " (nth row 1) " | " (nth row 2)))
      (when (or (< idx (dec (count rows))))
        (println "  -----------")))
    (println "----------------")))

(defn ->4x4 [board]
  (let [indexed-board (map-indexed
                        (fn [idx cell]
                          (if (= "" (first cell))
                            (str idx)
                            (first cell)))
                        board)
        rows (partition 4 indexed-board)]
    (doseq [[idx row] (map-indexed vector rows)]
      (println (str "   " (nth row 0) " | " (nth row 1) " | " (nth row 2) " | " (nth row 3) ))
      (when (or (< idx (dec (count rows))))
        (println "  -----------")))
    (println "----------------")))

(defn display-board [board]
  (cond
    (= 9 (count board)) (->3x3 board)
    (= 16 (count board)) (->4x4 board)))

(defn print-game-options []
  (println "Choose your game
  1: Human vs Computer
  2: Computer vs Human
  3: Human vs Human
  4: Computer vs Computer"))

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
