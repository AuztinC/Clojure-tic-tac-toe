(ns tic-tac-toe.persistence-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.persistence :as sut]
            [tic-tac-toe.board :as board]))

(describe "persistence"
  (with-stubs)

  (context "file"

    (context "read edn"
      (it "from correct file"
        (should= "resources/state.edn"
          sut/edn-file))
      (it "empty file"
        (with-redefs [slurp (stub :slurp {:return "{}"})]
          (should= {} (sut/edn-state))
          (should-have-invoked :slurp {:with [sut/edn-file]})))
      (it "can read blank current game"
        (let [contents {:current-game {}}]
          (with-redefs [slurp (stub :slurp {:return (pr-str contents)})]
            (should= contents (sut/edn-state))))))

    (context "write to edn"
      (redefs-around [spit (stub :spit)])
      (it "updates file"
        (sut/update-game! :file (board/get-board :3x3) :human :ai "X" "O" [:hard] "p1")
        (should-have-invoked :spit
          {:with [sut/edn-file
                  "{:current-game {:board [[\"\"] [\"\"] [\"\"] [\"\"] [\"\"] [\"\"] [\"\"] [\"\"] [\"\"]], :players [:human :ai], :markers [\"X\" \"O\"], :difficulties [:hard], :turn \"p1\"}}\n"]}))

      (it "clear edn"
        (with-redefs [sut/edn-state (fn [] {:current-game   {}
                                            :previous-games []})]
          (sut/clear! :file)
          (should-have-invoked :spit {:with [sut/edn-file (dissoc (sut/edn-state) :current-game)]})))
      ))

  #_(context "postgres"

    (it "blah"
      (sut/clear! :pgsql)))

  (context "mem"

    (it "uses mem impl as default"
      (with-redefs [sut/clear! (stub :clear! {:invoke sut/clear!})]
        (sut/clear! nil)
        (should-have-invoked :clear! {:with [:mem]})))

    (it "clears blank atom"
      (sut/clear! :mem)
      (should= {} @sut/mem-db))

    (it "clears populated atom"
      (sut/update-game! :mem (board/get-board :3x3) :human :ai "X" "O" [:hard] "p1")
      (sut/clear! :mem)
      (should= {} @sut/mem-db))

    (it "updates game"
      (sut/update-game! :mem (board/get-board :3x3) :human :ai "X" "O" [:hard] "p1")
      (should= {:current-game
                {:board        (repeat 9 [""])
                 :players      [:human :ai]
                 :markers      ["X" "O"]
                 :difficulties [:hard]
                 :turn         "p1"}}
        @sut/mem-db))))
