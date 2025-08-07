(ns tic-tac-toe.gamec-spec
  (:require [speclj.core :refer [describe
                                 with-stubs
                                 context
                                 stub
                                 it
                                 should-have-invoked
                                 should=]]
            [tic-tac-toe.gamec :as sut]
            [tic-tac-toe.board :as board]))
(def human-vs-ai-state {:ui           :cli
                        :active-game  true
                        :id           123
                        :board        (board/get-board :3x3)
                        :board-size   :3x3
                        :screen       :game
                        :players      [:human :ai]
                        :markers      ["X" "O"]
                        :difficulties [:hard]
                        :store        :mem
                        :turn         "p1"})
(def ai-vs-ai-state {:ui           :cli
                     :active-game  true
                     :id           123
                     :board        (board/get-board :3x3)
                     :board-size   :3x3
                     :players      [:ai :ai]
                     :markers      ["X" "O"]
                     :difficulties [:hard :hard]
                     :store        :mem
                     :turn         "p1"})
(describe "game common"
  (with-stubs)
  (context "Next-state stores a new move, updates turn and board"
    ;; TODO ARC - update tests for next-state


    (it "next-state checks winner, sets screen to :game-over"
      (with-redefs [board/check-winner (stub :check-winner {:return "X Wins!"})]
        (let [result (sut/next-state {:screen :game})]
          (should-have-invoked :check-winner)
          (should= :game-over (:screen result)))))

    ))