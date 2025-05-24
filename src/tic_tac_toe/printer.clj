(ns tic-tac-toe.printer)

(defn ->index-board [board]
  (if (= 3 (count board))
    (for [board board] (map-indexed
                         (fn [idx cell] (if (= "" (first cell))
                                          (str idx)
                                          (first cell)))
                         board))
    (map-indexed
      (fn [idx cell] (if (= "" (first cell))
                       (str idx)
                       (first cell)))
      board)))

(defn print-rows [row size]
  (println (str "   " (nth row 0) " | " (nth row 1) " | " (nth row 2)
             (if (= 4 size) (str " | " (nth row 3)) ""))))

(defn print-rows-3d [row size]
  (doseq [row-idx (range size)] (print (str "" (if (> 10 row-idx) " " "") (nth row row-idx)
                                        (if (contains? #{8 17 26 2 11 20 5 14 23} row-idx)
                                          "   " " | ")
                                        (if (contains? #{8 17} row-idx)
                                        "\n -----------    -----------    -----------\n"
                                        "")))))

(defn print-breaks [idx rows]
  (when (or (< idx (dec (count rows))))
    (println "  -----------")))

(defn ->format [board size]
  (let [indexed-board (->index-board board)
        rows (partition size indexed-board)]
    (doseq [[idx row] (map-indexed vector rows)]
      (print-rows row size)
      (print-breaks idx rows))
    (println "----------------")))

(defn setup-3d [board]
  (let [size 27
        indexed-board (->index-board board)
        rows (partition size indexed-board)]
    (doseq [[idx row] (map-indexed vector rows)]
      (print-rows-3d row size)
      (print-breaks idx rows))
    (println "\n-------------------------------------------")))

(defn print-board-selection []
  (println "Choose your board
  1: 3x3
  2: 4x4
  3: 3x3x3"))

(defn display-board [board]
  (cond
    (= 9 (count board)) (->format board 3)
    (= 16 (count board)) (->format board 4)
    (= 27 (count board)) (setup-3d board)))

(defn print-game-options []
  (println "Choose your game
  1: Human vs Computer
  2: Computer vs Human
  3: Human vs Human
  4: Computer vs Computer"))

(defn print-difficulty-iteration [current-ai]
  (let [current-ai (inc current-ai)]
    (println (cond
               (= 1 current-ai) (str "Choose " current-ai "st AI difficulty")
               (= 2 current-ai) (str "Choose " current-ai "nd AI difficulty")))))

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
