(ns tic-tac-toe.replay-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.replay :as sut]
            [tic-tac-toe.persistence :as db]))

(describe "replay"
  (context "given move(s) will display board with the move"
    (it "give a position, makes a move on blank"
      (let [out (with-out-str
                  (sut/replay {:id 1 :moves [{:player "X" :move 0}] :board-size :3x3}))]
        (should-contain "X | 1 | 2\n  -----------\n   3 | 4 | 5\n  -----------\n   6 | 7 | 8\n----------------\n" out)
        (should-contain "Player X moves to: 0" out)))

    (it "two positions"
      (let [out (with-out-str
                  (sut/replay {:moves [{:player "X" :move 0} {:player "O" :move 4}] :board-size :3x3}))]
        (should-contain "X | 1 | 2\n  -----------\n   3 | O | 5\n  -----------\n   6 | 7 | 8\n----------------\n" out)))
    (it "full game"
      (let [out (with-out-str
                  (sut/replay {:moves [{:player "X" :move 0} {:player "O" :move 4}
                                       {:player "X" :move 3} {:player "O" :move 8}
                                       {:player "X" :move 6}] :board-size :3x3}))]
        (should-contain "X wins!" out)))
    (it "tie game"
      (let [out (with-out-str
                  (sut/replay {:moves [{:player "X" :move 0} {:player "O" :move 4}
                                       {:player "X" :move 3} {:player "O" :move 8}
                                       {:player "X" :move 7} {:player "O" :move 6}
                                       {:player "X" :move 2} {:player "O" :move 1}
                                       {:player "X" :move 5}] :board-size :3x3}))]
        (should-contain "tie game" out))))

  (context "receive game to replay"
    (it "given id returns state"
      (with-redefs [db/edn-state (fn [] {:previous-games [{:id 1 :moves [{}] :board-size :3x3}]})]
        (should-contain {:id 1
                         :moves [{}]
                         :board-size :3x3} (sut/unpack-game 1))))

    (it "user gives bad id"
      (should= () (sut/unpack-game "S"))))
  )


