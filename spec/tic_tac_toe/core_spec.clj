(ns tic-tac-toe.core-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.core :refer :all]))

(describe "tic tac toe"
  (with-stubs)

  (redefs-around [read-line (stub :read-line {:return "X"})])

  (it "reads from stdin"
    (should= "X" (read-line)))

  (it "tie game"
    (should (tie-game? [["x"] ["x"] ["x"] ["x"] ["x"] ["x"] ["x"] ["o"] ["x"]]))
    (should-not (tie-game? [["x"] ["x"] ["x"] ["x"] ["x"] ["x"] ["x"] [""] [""]])))

  (it "someone made winning move"
    (should (winner? [0 1 2]))
    (should (winner? [1 4 7]))
    )

  (it "ai turn"
    (should= [["o"] [""] [""] [""] [""] [""] [""] [""] [""]]
      (ai-turn ( atom [[""] [""] [""] [""] [""] [""] [""] [""] [""]]))))
  )
