(ns tic-tac-toe.ai-turn-spec
  (:require [speclj.core :refer [describe
                                 with-stubs
                                 should
                                 should-not-have-invoked
                                 context
                                 tags
                                 stub
                                 it
                                 should-have-invoked
                                 redefs-around
                                 should=]]
            [tic-tac-toe.ai-turn :as sut]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]))

(describe "ai-turn"
  (with-stubs)
  (redefs-around [sut/best-early-move (stub :best-early-move {:invoke (fn [&_] 0)})])

  (context "score a board through minimax"
    (tags :slow)
    (it "score-move calls minimax"
      (with-redefs [sut/memo-minimax (stub :minimax {:invoke sut/memo-minimax})]
        (sut/score-move (board/get-board :3x3) true 0 "X" ##-Inf ##Inf)
        (should-have-invoked :minimax)))
    (it "empty"
      (should= 0 (sut/score-move (board/get-board :3x3) false 0 "O" ##-Inf ##Inf)))
    (it "tie game"
      (should= 0 (sut/score-move [["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["X"] ["X"] ["O"]] false 0 "O" ##-Inf ##Inf)))
    (it "Player will win"
      (should= -9 (sut/score-move [["X"] ["X"] [""] [""] [""] [""] [""] [""] [""]] false 0 "O" ##-Inf ##Inf)))
    (it "player has fork to win"
      (should= -9 (sut/score-move [["X"] ["X"] [""] ["X"] ["O"] ["O"] [""] [""] [""]] false 0 "O" ##-Inf ##Inf))
      (should= 9 (sut/score-move [[""] ["O"] [""] ["X"] [""] ["X"] ["X"] ["O"] ["O"]] true 0 "O" ##-Inf ##Inf)))
    (it "ai will win"
      (should= 6 (sut/score-move [[""] [""] [""] [""] [""] [""] ["O"] ["O"] [""]] false 0 "O" ##-Inf ##Inf)))
    (it "ai has fork to win"
      (should= 8 (sut/score-move [["O"] ["X"] [""] ["O"] ["O"] [""] ["X"] [""] [""]] false 0 "O" ##-Inf ##Inf))
      (should= 8 (sut/score-move [["O"] ["O"] [""] ["O"] [""] ["X"] ["X"] ["O"] ["O"]] false 0 "O" ##-Inf ##Inf)))
    )

  (context "score-minimax-result 3x3"
    (it "tie gives 0"
      (should= 0 (sut/score-minimax-result "tie" 1 "O")))
    (it "player gives -10"
      (should= -10 (sut/score-minimax-result "X" 0 "O")))
    (it "ai gives +10"
      (should= 10 (sut/score-minimax-result "O" 0 "O"))))

  (context "difficulty functions"
    (redefs-around [sut/score-move (stub :score-move {:return 0})])
    (it "3x3 hard invokes minimax, returns best position"
      (sut/hard (board/get-board :3x3) "O" (board/open-positions (board/get-board :3x3)))
      (should-have-invoked :score-move))

    (it "4x4 hard invokes best-early-score early game"
      (sut/hard (board/get-board :4x4) "O" (board/open-positions (board/get-board :4x4)))
      (should-have-invoked :best-early-move))

    (it "4x4 hard invokes minimax later game"
      (let [temp-board [["X"] ["X"] ["X"] [""] [""] ["O"] [""] ["O"]
                        ["O"] ["O"] ["X"] [""] [""] ["X"] ["X"] [""]]]
        (sut/hard temp-board "O" (board/open-positions temp-board)))
      (should-have-invoked :score-move))

    (it "easy returns random open position"
      (with-redefs [rand-nth (constantly 1)]
        (should= 1 (sut/easy (board/open-positions (board/get-board :3x3))))))
    (it "medium can give hard"
      (with-redefs [rand-int (fn [& _] 0)
                    sut/hard (fn [& _] 5)]
        (should= 5
          (sut/medium (board/get-board :3x3) "O" (board/open-positions (board/get-board :3x3))))))
    (it "medium can give easy"
      (with-redefs [rand-int (fn [& _] 1)
                    sut/easy (fn [& _] 3)]
        (should= 3
          (sut/medium (board/get-board :3x3) "O" (board/open-positions (board/get-board :3x3))))))
    )

  (context "4x4 early moves"
    (it "returns a middle or corner for 2 moves"
      (should= 0 (sut/best-early-move (board/get-board :4x4)))))

  (context "ai-moves"
    (tags :slow)

    (it "blank board gives 0"
      (should= 0 (sut/ai-turn (board/get-board :3x3) "O" :hard))
      (should= 0 (sut/ai-turn (board/get-board :4x4) "O" :hard)))

    (it "3x3 plays center asap"
      (should= 4 (sut/ai-turn [["X"] [""] [""]
                               [""] [""] [""]
                               [""] [""] [""]] "O" :hard)))
    (it "defends on 4x4 "
      (should= 3 (sut/ai-turn [["X"] ["X"] ["X"] [""]
                               [""] ["O"] [""] ["O"]
                               ["O"] ["O"] ["X"] [""]
                               [""] ["X"] ["X"] [""]] "O" :hard))
      (should= 15 (sut/ai-turn [["X"] ["O"] ["O"] [""]
                                ["O"] ["X"] [""] [""]
                                ["O"] ["X"] ["X"] [""]
                                [""] [""] [""] [""]] "O" :hard)))
    (it "wins over defend"
      (should= 7 (sut/ai-turn [["X"] ["X"] ["X"] [""]
                               ["O"] ["O"] ["O"] [""]
                               ["O"] ["X"] ["X"] [""]
                               [""] [""] [""] [""]] "O" :hard)))
    (it "defends on 3x3"
      (should= 2 (sut/ai-turn [["X"] ["X"] [""]
                               [""] ["O"] [""]
                               [""] [""] [""]] "O" :hard))
      (should= 6 (sut/ai-turn [["X"] [""] [""]
                               ["X"] ["O"] [""]
                               [""] [""] [""]] "O" :hard))
      (should= 5 (sut/ai-turn [["O"] [""] [""]
                               ["X"] ["X"] [""]
                               [""] [""] [""]] "O" :hard))))

  (it "detects immediate win, returns position to play"
    (let [temp-board [["X"] [""] ["X"] [""] [""] [""] ["O"] [""] [""]
                      ["X"] ["O"] ["O"] [""] ["O"] [""] [""] [""] [""]
                      [""] [""] ["O"] [""] ["X"] ["X"] [""] [""] [""]]]
      (should= 1 (sut/immediate-move? temp-board "O" (board/open-positions temp-board)))))

  (it "catches a spot where the opponent will create a fork"
    (should (sut/creates-fork? [[""] [""] ["X"] [""] [""] [""] [""] [""] [""]
                                [""] [""] [""] [""] [""] ["O"] [""] [""] [""]
                                ["X"] ["O"] [""] [""] [""] ["X"] [""] [""] [""]] "X" 0))
    (should= [4 10] (get (sut/best-fork-threats [["O"] ["X"] [""] [""] [""] [""] [""] [""] [""]
                                                 [""] [""] [""] [""] ["X"] [""] [""] [""] [""]
                                                 [""] [""] [""] [""] [""] [""] [""] ["O"] [""]] "O" 0) :positions))
    (should= 4 (sut/ai-turn [["O"] ["X"] [""] [""] [""] [""] [""] [""] [""]
                             [""] [""] [""] [""] ["X"] [""] [""] [""] [""]
                             [""] [""] [""] [""] [""] [""] [""] ["O"] [""]] "O" :hard)))

  (context "evaluate lines 3x3x3"
    (it "3x3x3 hard invokes immediate-move late game"
      (let [temp-board [["X"] [""] ["X"] [""] [""] [""] ["O"] [""] [""]
                        ["X"] ["O"] ["O"] [""] ["O"] [""] [""] [""] [""]
                        [""] [""] ["O"] [""] ["X"] ["X"] [""] [""] [""]]]
        (with-redefs [sut/immediate-move? (stub :immediate-move? {:return 0})]
          (sut/hard temp-board "O" (board/open-positions temp-board))
          (should-have-invoked :immediate-move?))))

    (it "high negative score for opponent winning"
      (should= -190 (sut/evaluate-lines [["X"] [""] [""] [""] [""] [""] [""] [""] [""]
                                         ["X"] [""] [""] [""] [""] [""] [""] [""] [""]
                                         [""] [""] [""] [""] [""] [""] [""] [""] [""]] "O")))
    (it "high positive score for win"
      (should= 100 (sut/evaluate-lines [["X"] [""] [""] [""] [""] [""] [""] [""] [""]
                                        ["O"] ["O"] [""] [""] [""] [""] [""] [""] [""]
                                        [""] [""] [""] [""] [""] [""] [""] [""] [""]] "O"))
      (should= 220 (sut/evaluate-lines [["X"] [""] [""] [""] [""] [""] [""] [""] [""]
                                        ["O"] ["O"] [""] [""] [""] [""] [""] [""] [""]
                                        [""] ["O"] [""] [""] [""] [""] [""] [""] [""]] "O"))))
  (context "3x3x3 moves"
    (it "defend"
      (should= 1 (sut/ai-turn [["X"] [""] ["X"] [""] [""] [""] ["O"] ["O"] [""]
                               ["X"] [""] [""] [""] ["O"] [""] [""] [""] [""]
                               [""] [""] ["O"] [""] ["X"] ["X"] [""] [""] ["X"]] "O" :hard)))
    (it "make a winning move"
      (should= 1 (sut/ai-turn [["O"] [""] ["O"] [""] [""] [""] [""] [""] [""]
                               [""] [""] ["X"] [""] ["O"] [""] [""] [""] [""]
                               [""] [""] ["X"] [""] [""] [""] [""] [""] [""]] "O" :hard)))
    )

  (context "next position"

    (it "ai move in the CLI"
      (let [expected (sut/ai-turn (board/get-board :3x3) "X" :hard)]
        (should= expected (game/next-position {:board (board/get-board :3x3) :ui :cli :players [:ai :ai]} ["X" :ai] :hard))))

    (it "ai vs ai move in the GUI"
      (with-redefs [sut/sleep (stub :sleep)]
        (let [expected (sut/ai-turn (board/get-board :3x3) "X" :hard)]
          (should= expected (game/next-position {:board (board/get-board :3x3) :ui :gui :players [:ai :ai]} ["X" :ai] :hard))
          (should-have-invoked :sleep))))

    (it "ai vs human move in the GUI"
      (with-redefs [sut/sleep (stub :sleep)]
       (let [expected (sut/ai-turn (board/get-board :3x3) "X" :hard)]
        (should= expected (game/next-position {:board (board/get-board :3x3) :ui :gui :players [:human :ai]} ["X" :ai] :hard))
        (should-not-have-invoked :sleep))))
    )
  )