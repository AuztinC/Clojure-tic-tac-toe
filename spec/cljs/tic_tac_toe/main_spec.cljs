(ns tic-tac-toe.main-spec
  (:require-macros [speclj.core :refer [should=
                                        it
                                        describe
                                        before
                                        redefs-around
                                        with-stubs
                                        stub
                                        should-have-invoked
                                        focus-describe]]
                   [c3kit.wire.spec-helperc :refer [should-select]])
  (:require [speclj.core]
            [c3kit.wire.spec-helper :as wire]
            [tic-tac-toe.main :as sut]))

(describe "main"
  (with-stubs)
  (wire/with-root-dom)
  (before (wire/render [sut/app]))

  (it "game container"
    (should-select "#main-container")
    #_(should= "Welcome to Tic-Tac-Toe!" (wire/text "#title")))
  )