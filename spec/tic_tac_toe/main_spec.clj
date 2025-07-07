(ns tic-tac-toe.main-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.main :as sut]
            [tic-tac-toe.game-options :as opt]
            [tic-tac-toe.quil-core :as gui]
            [tic-tac-toe.spec-helper :as helper]))

(describe "Main"
  (with-stubs)
  (context "dispatches all available db's"
    (it "defaults to :mem with no tag"
      (with-redefs [opt/cli-loop (stub :cli-loop)]
        (sut/-main)
        (should-have-invoked :cli-loop {:with [{:screen :replay-confirm, :store :mem}]})))

    (it "-file calls with :file"
      (with-redefs [opt/cli-loop (stub :cli-loop)]
        (apply sut/-main ["-file"])
        (should-have-invoked :cli-loop {:with [{:screen :replay-confirm, :store :file}]})))

    (context "-psql"
      (helper/stub-jdbc)

      (it "returns :psql with flag"
        (with-redefs [opt/cli-loop (stub :cli-loop)]
          (apply sut/-main ["-psql"])
          (should-have-invoked :cli-loop {:with [{:screen :replay-confirm, :store :psql}]})))

      (it "initializes db"
        (with-redefs [opt/cli-loop (stub :cli-loop)]
          (apply sut/-main ["-psql"])
          (helper/should-initialize-db)))
      ))


  (context "gui"
    (it "default to cli"
      (with-redefs [opt/cli-loop (stub :cli-loop)]
        (apply sut/-main [""])
        (should-have-invoked :cli-loop {:with [{:screen :replay-confirm, :store :mem}]})))

    (it "--cli launches command line ui"
      (with-redefs [opt/cli-loop (stub :cli-loop)]
        (apply sut/-main ["--cli"])
        (should-have-invoked :cli-loop {:with [{:screen :replay-confirm, :store :mem}]})))

    (it "--gui launches quil"
      (with-redefs [gui/start-gui (stub :start-gui)]
        (apply sut/-main ["--gui"])
        (should-have-invoked :start-gui {:with [:mem]})))
    )
  )
