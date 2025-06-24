(ns tic-tac-toe.main-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.main :as sut]
            [tic-tac-toe.game-options :as opt]
            [tic-tac-toe.quil-core :as gui]))

(describe "Main"
  (with-stubs)
  (context "dispatches all available db's"
    (it "defaults to :mem with no tag"
      (with-redefs [opt/watch-replay? (stub :watch-replay?)]
        (sut/-main)
        (should-have-invoked :watch-replay? {:with [:mem]})))

    (it "-file calls with :file"
      (with-redefs [opt/watch-replay? (stub :watch-replay?)]
        (apply sut/-main ["-file"])
        (should-have-invoked :watch-replay? {:with [:file]})))

    (it "-psql"
      (with-redefs [opt/watch-replay? (stub :watch-replay?)]
        (apply sut/-main ["-psql"])
        (should-have-invoked :watch-replay? {:with [:psql]}))))

  (context "gui"
    (it "default to cli"
      (with-redefs [opt/watch-replay? (stub :watch-replay?)]
        (apply sut/-main [""])
        (should-have-invoked :watch-replay? {:with [:mem]})))

    (it "--cli launches command line ui"
      (with-redefs [opt/watch-replay? (stub :watch-replay?)]
        (apply sut/-main ["--cli"])
        (should-have-invoked :watch-replay? {:with [:mem]})))

    (it "--gui launches quil"
      (with-redefs [gui/start-gui (stub :start-gui)]
        (apply sut/-main ["--gui"])
        (should-have-invoked :start-gui {:with [:mem]})))
    )
  )
