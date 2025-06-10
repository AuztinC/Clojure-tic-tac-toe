(ns tic-tac-toe.main-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.main :as sut]
            [tic-tac-toe.game-options :as opt]))

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
        (should-have-invoked :watch-replay? {:with [:file]})))))
