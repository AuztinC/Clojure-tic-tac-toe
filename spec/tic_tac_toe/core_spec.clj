(ns tic-tac-toe.core-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.core :refer :all]))

(describe "tic tac toe"
  (with-stubs)

  ;(redefs-around [read-line (stub :read-line {:return "X"})])

  #_(it "init"
    (should= -1 (init-game)))

  (it "tie game"
    (should (tie-game? [["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["O"] ["X"]]))
    (should-not (tie-game? [["X"] ["X"] ["X"] ["X"] ["X"] ["X"] ["X"] [""] [""]])))

  (it "someone made winning move"
    (should= "X" (check-winner [["X"] ["X"] ["X"] ["O"] ["X"] ["X"] [""] [""] [""]]))
    (should-not (check-winner [["O"] ["X"] ["X"] ["O"] ["X"] ["X"] [""] [""] [""]]))
    (should= "X" (check-winner [["O"] ["X"] ["X"] ["O"] ["X"] ["X"] ["X"] [""] [""]]))
    (should= "O" (check-winner [["O"] ["X"] ["X"] ["O"] ["O"] ["X"] [""] [""] ["O"]]))
    (should= "tie" (check-winner [["X"] ["X"] ["O"] ["O"] ["O"] ["X"] ["X"] ["O"] ["X"]]))
    )

  (it "minimaX"
    (should= -1 (minimax [["X"] ["O"] ["O"]
                          ["O"] ["X"] ["X"]
                          ["X"] ["X"] ["X"]] true 0))
    (should= -1 (minimax [["X"] [""] ["O"]
                          ["O"] ["X"] ["X"]
                          ["O"] ["X"] [""]] true 0)))

  #_(it "ai turn : currently returns index of random space"
    (should= -1
      (ai-turn [[""] [""] [""] [""] [""] [""] [""] [""] [""]])))
  )
