(ns tic-tac-toe.ai-turn-spec
  (:require [speclj.core :refer [describe
                                 with-stubs
                                 should
                                 should-not-have-invoked
                                 context
                                 tags
                                 stub
                                 it
                                 should-have-invoked
                                 redefs-around
                                 should=]]
            [tic-tac-toe.ai-turn :as sut]
            [tic-tac-toe.ai-turnc :as aic]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]))

(describe "ai-turn"
  (with-stubs)
  (context "next position"

    (it "ai move in the CLI"
      (let [expected (aic/ai-turn (board/get-board :3x3) "X" :hard)]
        (should= expected (game/next-position {:board (board/get-board :3x3) :ui :cli :players [:ai :ai]} ["X" :ai] :hard))))

    (it "ai vs ai move in the GUI"
      (with-redefs [sut/sleep (stub :sleep)]
        (let [expected (aic/ai-turn (board/get-board :3x3) "X" :hard)]
          (should= expected (game/next-position {:board (board/get-board :3x3) :ui :gui :players [:ai :ai]} ["X" :ai] :hard))
          (should-have-invoked :sleep))))

    (it "ai vs human move in the GUI"
      (with-redefs [sut/sleep (stub :sleep)]
       (let [expected (aic/ai-turn (board/get-board :3x3) "X" :hard)]
        (should= expected (game/next-position {:board (board/get-board :3x3) :ui :gui :players [:human :ai]} ["X" :ai] :hard))
        (should-not-have-invoked :sleep))))

    )
  )