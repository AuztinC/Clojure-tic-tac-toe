(ns tic-tac-toe.cli-text-spec
  (:require [speclj.core :refer [describe
                                 context
                                 it
                                 should=]]
            [tic-tac-toe.board :as sut]
            [tic-tac-toe.cli-text :as printer]))

(describe "cli text "

  (context "can print a board"
    (it "displays a 3x3 board"
      (should= "   0 | 1 | 2\n  -----------\n   3 | 4 | 5\n  -----------\n   6 | 7 | 8\n----------------\n"
        (with-out-str (printer/display-board (sut/get-board :3x3)))))
    (it "displays a 4x4 board"
      (should= "   0 | 1 | 2 | 3\n  -----------\n   4 | 5 | 6 | 7\n  -----------\n   8 | 9 | 10 | 11\n  -----------\n   12 | 13 | 14 | 15\n----------------\n"
        (with-out-str (printer/display-board (sut/get-board :4x4)))))
    (it "displays a 3x3x3 board"
      (should= " 0 |  1 |  2    3 |  4 |  5    6 |  7 |  8   \n -----------    -----------    -----------\n 9 | 10 | 11   12 | 13 | 14   15 | 16 | 17   \n -----------    -----------    -----------\n18 | 19 | 20   21 | 22 | 23   24 | 25 | 26   \n-------------------------------------------\n"
        (with-out-str (printer/display-board (sut/get-board :3x3x3)))))))