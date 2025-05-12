(ns tic-tac-toe.ai-turn
  (:require [tic-tac-toe.ai-util :as util]))

(defn check-winner [board]
  (let [wm->board (for [wm util/winning-moves] (map #(first (nth board %)) wm))]
    (let [winner-result (util/winner-result wm->board)]
      (if winner-result
        (first winner-result)
        (if (util/tie-game? board) "tie" nil)))))

(defn open-positions [board]
  (filter #(not= nil %)
    (map-indexed
      (fn [idx itm] (when (= "" (first itm)) idx)) board)))

(defn score-board [b maximizing? depth ai-marker]
  (if-let [result (util/check-winner b)]
    (util/score-game result depth ai-marker)
    (util/minimax b maximizing? depth ai-marker)))


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