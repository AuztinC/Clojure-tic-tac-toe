(ns tic-tac-toe.replay-spec
  (:require [speclj.core :refer [describe
                                 context
                                 it
                                 should-contain]]
            [tic-tac-toe.replay :as sut]))


(describe "replay"

  (context "given move(s) will display board with the move"
    (it "give a position, makes a move on blank"
      (let [out (with-out-str
                  (sut/replay {:id 1 :moves [{:player "X" :position 0}] :board-size :3x3}))]
        (should-contain "X | 1 | 2\n  -----------\n   3 | 4 | 5\n  -----------\n   6 | 7 | 8\n----------------\n" out)
        (should-contain "Player X moves to: 0" out)))

    (it "two positions"
      (let [out (with-out-str
                  (sut/replay {:moves [{:player "X" :position 0} {:player "O" :position 4}] :board-size :3x3}))]
        (should-contain "X | 1 | 2\n  -----------\n   3 | O | 5\n  -----------\n   6 | 7 | 8\n----------------\n" out)))
    (it "full game"
      (let [out (with-out-str
                  (sut/replay {:moves [{:player "X" :position 0} {:player "O" :position 4}
                                       {:player "X" :position 3} {:player "O" :position 8}
                                       {:player "X" :position 6}] :board-size :3x3}))]
        (should-contain "X wins!" out)))
    (it "tie game"
      (let [out (with-out-str
                  (sut/replay {:moves [{:player "X" :position 0} {:player "O" :position 4}
                                       {:player "X" :position 3} {:player "O" :position 8}
                                       {:player "X" :position 7} {:player "O" :position 6}
                                       {:player "X" :position 2} {:player "O" :position 1}
                                       {:player "X" :position 5}] :board-size :3x3}))]
        (should-contain "tie game" out))))


  )


