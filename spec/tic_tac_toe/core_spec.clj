(ns tic-tac-toe.core-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.core :refer :all]))

(describe "tic tac toe"
  (with-stubs)

  ;(redefs-around [read-line (stub :read-line {:return "X"})])

  #_(it "init"
    (should= -1 (init-game)))

  (it "tie game"
    (should (tie-game? [["x"] ["x"] ["x"] ["x"] ["x"] ["x"] ["x"] ["o"] ["x"]]))
    (should-not (tie-game? [["x"] ["x"] ["x"] ["x"] ["x"] ["x"] ["x"] [""] [""]])))

  (it "someone made winning move"
    (should= "x" (winner? [["x"] ["x"] ["x"] ["o"] ["x"] ["x"] [""] [""] [""]]))
    (should-not (winner? [["o"] ["x"] ["x"] ["o"] ["x"] ["x"] [""] [""] [""]]))
    (should= "x" (winner? [["o"] ["x"] ["x"] ["o"] ["x"] ["x"] ["x"] [""] [""]]))
    (should= "o" (winner? [["o"] ["x"] ["x"] ["o"] ["o"] ["x"] [""] [""] ["o"]]))
    (should (winner? [["x"] ["x"] ["o"]
                           ["o"] ["o"] ["x"]
                           ["x"] ["o"] ["x"]]))
    )

  #_(it "ai turn : currently returns index of random space"
    (should= -1
      (ai-turn [[""] [""] [""] [""] [""] [""] [""] [""] [""]])))
  )
