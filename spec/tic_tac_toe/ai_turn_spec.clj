(ns tic-tac-toe.ai-turn-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.ai-turn :as sut]))

(def board [[""] [""] [""] [""] [""] [""] [""] [""] [""]])

(context "difficulty functions"
  (it "hard runs minimax, returns best position"
    (let [temp-board [["X"] ["X"] [""] [""] ["O"] [""] [""] [""] [""]]]
      (should= 2 (sut/hard temp-board "O" (sut/open-positions temp-board)))))
  (it "easy returns random open position"
    (with-redefs [rand-nth (constantly 1)]
      (should= 1 (sut/easy (sut/open-positions board)))))
  (it "medium can give hard"
    (with-redefs [rand-int (fn [& _] 0)
                  sut/hard (fn [& _] 5)]
      (should= 5 (sut/medium board "O" (sut/open-positions board)))))
  (it "medium can give easy"
    (with-redefs [rand-int (fn [& _] 1)
                  sut/easy (fn [& _] 3)]
      (should= 3 (sut/medium board "O" (sut/open-positions board)))))
  )

   (context "win or tie?"
    (it "tie game"
      (should (sut/tie-game? [["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["O"] ["X"]]))
      (should-not (sut/tie-game? [["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["X"] [""] [""]])))

    (it "someone made winning move"
      (should= "X" (sut/check-winner [["X"] ["X"] ["X"] ["O"] ["X"] ["X"] [""] [""] [""]]))
      (should-not (sut/check-winner [["O"] ["X"] ["X"] ["O"] ["X"] ["X"] [""] [""] [""]]))
      (should= "X" (sut/check-winner [["O"] ["X"] ["X"] ["O"] ["X"] ["X"] ["X"] [""] [""]]))
      (should= "O" (sut/check-winner [["O"] ["X"] ["X"] ["O"] ["O"] ["X"] [""] [""] ["O"]]))
      (should= "tie" (sut/check-winner [["X"] ["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["O"] ["X"]]))
      ))

(context "minimax"
  (it "empty"
    (should= 0 (sut/score-board board false 0 "O")))
  (it "tie game"
    (should= 0 (sut/score-board [["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["X"] ["X"] ["O"]] false 0 "O")))
  (it "Player will win"
    (should= -9 (sut/score-board [["X"] ["X"] [""] [""] [""] [""] [""] [""] [""]] false 0 "O")))
  (it "player has fork to win"
    (should= -9 (sut/score-board [["X"] ["X"] [""] ["X"] ["O"] ["O"] [""] [""] [""]] false 0 "O"))
    (should= 9 (sut/score-board [[""] ["O"] [""] ["X"] [""] ["X"] ["X"] ["O"] ["O"]] true 0 "O")))
  (it "ai will win"
    (should= 6 (sut/score-board [[""] [""] [""] [""] [""] [""] ["O"] ["O"] [""]] false 0 "O")))
  (it "ai has fork to win"
    (should= 8 (sut/score-board [["O"] ["X"] [""] ["O"] ["O"] [""] ["X"] [""] [""]] false 0 "O"))
    (should= 8 (sut/score-board [["O"] ["O"] [""] ["O"] [""] ["X"] ["X"] ["O"] ["O"]] false 0 "O")))
  )

(context "ai-moves"
  (it "blank board gives 0"
    (should= 0 (sut/ai-turn board "O" :hard)))
  (it "plays center asap"
    (should= 4 (sut/ai-turn [["X"] [""] [""]
                             [""] [""] [""]
                             [""] [""] [""]] "O" :hard)))
  (it "defends against player win"
    (should= 2 (sut/ai-turn [["X"] ["X"] [""]
                             [""] ["O"] [""]
                             [""] [""] [""]] "O" :hard))
    (should= 6 (sut/ai-turn [["X"] [""] [""]
                             ["X"] ["O"] [""]
                             [""] [""] [""]] "O" :hard))
    (should= 5 (sut/ai-turn [["O"] [""] [""]
                             ["X"] ["X"] [""]
                             [""] [""] [""]] "O" :hard))))