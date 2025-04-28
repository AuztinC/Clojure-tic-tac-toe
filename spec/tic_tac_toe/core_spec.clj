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

  (it "minimax : return -1 0 1"
    (should= -10 (minimax [["X"] ["O"] ["O"]
                          ["O"] ["X"] ["X"]
                          ["X"] ["X"] ["X"]] false 0))
    (should= -11 (minimax [["X"] [""] ["O"]
                          ["O"] ["X"] ["X"]
                          ["O"] ["X"] ["O"]] false 0))
    (should= -13 (minimax [["X"] ["O"] [""]
                         [""] ["X"] [""]
                         [""] [""] ["O"]] false 0)))

  (it "ai turn : return index for chosen position"
    (should= 6
      (ai-turn [["X"] ["O"] [""]
                ["X"] [""] [""]
                [""] [""] [""]])))
  )
