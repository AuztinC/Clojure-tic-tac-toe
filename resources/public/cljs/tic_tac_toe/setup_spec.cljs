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
            [tic-tac-toe.board :as board]
            [tic-tac-toe.setup :as sut]))

(describe "game setup"
  (with-stubs)


  (context "select-difficulty correct count and switch to game"
    (it "single difficulty 1 time"
      (reset! sut/state {:players [:ai :human]})
      (let [out (sut/select-difficulty! :easy)]
        (should= [:easy] (:difficulties out))
        (should= :game (:screen out))))

    (it "two difficulty "
      (reset! sut/state {:players [:ai :ai]})
      (let [out1 (sut/select-difficulty! :easy)
            out2 (sut/select-difficulty! :hard)]
        (should= [:easy] (:difficulties out1))
        (should= :select-difficulty (:screen out1))

        (should= [:easy :hard] (:difficulties out2))
        (should= :game (:screen out2))
        )))

  )




