(ns tic-tac-toe.replay-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.replay :as sut]
            [tic-tac-toe.persistence :as db]))

(describe "replay"
  (context "single move"
    (it "give a position, makes a move on blank"
      (should-contain (str [["X"] [""] [""]
                            [""] [""] [""]
                            [""] [""] [""]]) (with-out-str
                                               (sut/replay {:moves [{:player "X" :move 0}] :board-size :3x3}))))
    (it "two positions"
      (should-contain (str [["X"] [""] [""]
                            [""] ["O"] [""]
                            [""] [""] [""]]) (with-out-str
                                               (sut/replay {:moves [{:player "X" :move 0} {:player "O" :move 4}] :board-size :3x3}))))
    (it "full game"
      (should-contain "X wins!" #_(str [["X"] [""] [""]
                                        ["X"] ["O"] [""]
                                        ["X"] [""] ["O"]]) (with-out-str
                                                             (sut/replay {:moves [{:player "X" :move 0} {:player "O" :move 4}
                                                                                  {:player "X" :move 3} {:player "O" :move 8}
                                                                                  {:player "X" :move 6}] :board-size :3x3}))))
    (it "tie game"
      (should-contain "tie game" (with-out-str
                                   (sut/replay {:moves [{:player "X" :move 0} {:player "O" :move 4}
                                                        {:player "X" :move 3} {:player "O" :move 8}
                                                        {:player "X" :move 7} {:player "O" :move 6}
                                                        {:player "X" :move 2} {:player "O" :move 1}
                                                        {:player "X" :move 5}] :board-size :3x3})))))
  (context "receive game to replay"
    (it "given id returns state"
      (with-redefs [db/edn-state (fn [] {:previous-games [{:id 1 :moves [{}] :board-size :3x3}]})]
        (should-contain {:id 1
                         :moves [{}]
                         :board-size :3x3} (sut/unpack-game 1)))))
  )


