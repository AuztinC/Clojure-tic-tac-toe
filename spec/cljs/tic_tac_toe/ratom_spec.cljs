(ns tic-tac-toe.ratom-spec
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

(describe "ratom persistence"
  (it ""))
