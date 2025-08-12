(ns tic-tac-toe.gamec-spec
  (:require [speclj.core :refer [describe
                                 with-stubs
                                 context
                                 stub
                                 it
                                 should-have-invoked
                                 should-not-throw
                                 should=
                                 redefs-around]]
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
  (redefs-around [sut/next-position (stub :next-position {:return 0})])
  (context "Next-state"

    (it "makes a move and updates turn and board"
      (let [result (sut/next-state ai-vs-ai-state 0)]
        (should= "p2" (:turn result))
        (should= [["X"][""][""][""][""][""][""][""][""]] (:board result))))

    (it "handles human players"
      (should-not-throw (sut/next-state human-vs-ai-state 0)))

    (it "next-state checks winner, sets screen to :game-over"
      (with-redefs [board/check-winner (stub :check-winner {:return "X Wins!"})]
        (let [result (sut/next-state {:screen :game} 0)]
          (should-have-invoked :check-winner)
          (should= :game-over (:screen result)))))

    ))