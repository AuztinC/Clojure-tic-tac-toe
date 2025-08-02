(ns tic-tac-toe.setup-spec
  (:require-macros [speclj.core :refer [should=
                                        it
                                        describe
                                        before
                                        redefs-around
                                        with-stubs
                                        stub
                                        should-have-invoked
                                        context
                                        should-contain
                                        focus-context]]
                   [c3kit.wire.spec-helperc :refer [should-select]])
  (:require [speclj.core]
            [c3kit.wire.spec-helper :as wire]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.html :as sut]
            [tic-tac-toe.setup :as setup]
            [tic-tac-toe.main :as main]))

(describe "game setup"



  (it "select-difficulty"
    (let [state {:players [:ai :human]}]
      ))

  )




