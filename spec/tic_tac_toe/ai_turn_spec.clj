(ns tic-tac-toe.ai-turn-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.ai-turn :as sut]
            [tic-tac-toe.board :as board]))

(describe "ai-turn"
  (with-stubs)
  (context "score a board through minimax"
    (tags :slow)
    (it "score-move calls minimax"
      (with-redefs [sut/minimax (stub :minimax {:invoke sut/minimax})]
        (sut/score-move (board/get-board :3x3) true 0 "X" :3x3)
        (should-have-invoked :minimax)))
    (it "empty"
      (should= 0 (sut/score-move (board/get-board :3x3) false 0 "O" :3x3)))
    (it "tie game"
      (should= 0 (sut/score-move [["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["X"] ["X"] ["O"]] false 0 "O" :3x3)))
    (it "Player will win"
      (should= -9 (sut/score-move [["X"] ["X"] [""] [""] [""] [""] [""] [""] [""]] false 0 "O" :3x3)))
    (it "player has fork to win"
      (should= -9 (sut/score-move [["X"] ["X"] [""] ["X"] ["O"] ["O"] [""] [""] [""]] false 0 "O" :3x3))
      (should= 9 (sut/score-move [[""] ["O"] [""] ["X"] [""] ["X"] ["X"] ["O"] ["O"]] true 0 "O" :3x3)))
    (it "ai will win"
      (should= 6 (sut/score-move [[""] [""] [""] [""] [""] [""] ["O"] ["O"] [""]] false 0 "O" :3x3)))
    (it "ai has fork to win"
      (should= 8 (sut/score-move [["O"] ["X"] [""] ["O"] ["O"] [""] ["X"] [""] [""]] false 0 "O" :3x3))
      (should= 8 (sut/score-move [["O"] ["O"] [""] ["O"] [""] ["X"] ["X"] ["O"] ["O"]] false 0 "O" :3x3)))
    )

  (context "score-minimax-result 3x3"
    (it "tie gives 0"
      (should= 0 (sut/score-minimax-result "tie" 1 "O")))
    (it "player gives -10"
      (should= -10 (sut/score-minimax-result "X" 0 "O")))
    (it "ai gives +10"
      (should= 10 (sut/score-minimax-result "O" 0 "O"))))
  #_(context "scoring-minimax 4x4"
    (it "1"))

  (context "difficulty functions"
    (it "hard runs minimax, returns best position"
      (with-redefs [sut/score-move (stub :score-move {:return 0})]
        (sut/hard (board/get-board :3x3) "O" (board/open-positions (board/get-board :3x3)) :3x3)
        (should-have-invoked :score-move)))

    (it "easy returns random open position"
      (with-redefs [rand-nth (constantly 1)]
        (should= 1 (sut/easy (board/open-positions (board/get-board :3x3))))))

    (it "medium can give hard"
      (with-redefs [rand-int (fn [& _] 0)
                    sut/hard (fn [& _] 5)]
        (should= 5 (sut/medium (board/get-board :3x3) "O" (board/open-positions (board/get-board :3x3)) :3x3))))

    (it "medium can give easy"
      (with-redefs [rand-int (fn [& _] 1)
                    sut/easy (fn [& _] 3)]
        (should= 3 (sut/medium (board/get-board :3x3) "O" (board/open-positions (board/get-board :3x3)) :3x3))))
    )

  (context "ai-moves"
    (tags :slow)

    (it "blank board gives 0"
      (should= 0 (sut/ai-turn (board/get-board :3x3) "O" :hard)))

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
                               [""] [""] [""]] "O" :hard)))))