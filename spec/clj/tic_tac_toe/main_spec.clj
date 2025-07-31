(ns tic-tac-toe.main-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.main :as sut]
            [tic-tac-toe.game-options :as opt]
            [tic-tac-toe.quil-core :as gui]
            [tic-tac-toe.spec-helper :as helper]))

(describe "Main"
  (with-stubs)

  (redefs-around [opt/cli-loop (stub :cli-loop)])

  (context "dispatches all available db's"
    (it "defaults to :mem with no tag"
      (sut/-main)
      (let [[state] (stub/last-invocation-of :cli-loop)]
        (should= :mem (:store state))))

    (it "-file calls with :file"
      (apply sut/-main ["-file"])
      (let [[state] (stub/last-invocation-of :cli-loop)]
        (should= :file (:store state))))

    (context "-psql"
      (helper/stub-jdbc)

      (it "returns :psql with flag"
        (apply sut/-main ["-psql"])
        (let [[state] (stub/last-invocation-of :cli-loop)]
          (should= :psql (:store state))))

      (it "initializes db"
        (apply sut/-main ["-psql"])
        (helper/should-initialize-db))
      ))


  (context "gui"
    (it "default to cli"
      (apply sut/-main [""])
      (let [[state] (stub/last-invocation-of :cli-loop)]
        (should= :cli (:ui state))))

    (it "--cli launches command line ui"
      (apply sut/-main ["--cli"])
      (let [[state] (stub/last-invocation-of :cli-loop)]
        (should= :cli (:ui state))))

    (it "--gui launches quil"
      (with-redefs [gui/start-gui (stub :start-gui)]
        (apply sut/-main ["--gui"])
        (should-have-invoked :start-gui {:with [:mem]})))
    )
  )
