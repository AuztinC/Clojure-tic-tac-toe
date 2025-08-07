(ns tic-tac-toe.ai-turn-spec
  (:require-macros [speclj.core :refer [should=
                                        it
                                        describe]])
  (:require [speclj.core]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.ai-turnc :as aic]
            [tic-tac-toe.ai-turn]))

(describe "ai-turn-cljs"

  (it "web-cljs"
    (let [expected (aic/ai-turn (board/get-board :3x3) "X" :hard)]
      (should= expected (game/next-position {:board (board/get-board :3x3) :ui :web-cljs :players [:human :ai]} ["X" :ai] :hard)))))
