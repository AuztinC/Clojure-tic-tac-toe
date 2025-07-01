(ns tic-tac-toe.edn-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.edn :as sut]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.board :as board]))

(describe "edn"
  (with-stubs)


  (context "file"

    #_(context "read edn"
      (it "from correct file"
        (should= "resources/state.edn"
          sut/edn-file))

      (it "empty file"
        (with-redefs [slurp (stub :slurp {:return "{}"})]
          (should= {} (sut/edn-state))
          (should-have-invoked :slurp {:with [sut/edn-file]})))

      (context "set-new-game-id"
        (it "return id for new game"
          (with-redefs [sut/edn-state (fn [] {:games [{:id 1}]})])
          (should= 2 (db/set-new-game-id {:store :file}))))
      )



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
            (should= contents (sut/edn-state)))))

        (it "returns empty previous-games"
          (with-redefs [sut/edn-state (fn [] {})]
            (should= nil (db/previous-games? {:store :file}))))

        (it "returns previous-games"
          (with-redefs [sut/edn-state (fn [] {:previous-games {:id 1}})]
            (should= {:id 1} (db/previous-games? {:store :file}))))
        )

      (context "write to edn"
        (redefs-around [spit (stub :spit)])

        (it "updates current game file"
          (with-redefs [sut/edn-state (fn [] {})
                        sut/update-game-file! (stub :update-game-file!)]
            (let [state {:board (board/get-board :3x3) :players [:human :ai] :markers ["X" "O"]
                         :difficulties [:hard] :turn "p1" :store :file}]
              (db/update-current-game! state 0)
              (should-have-invoked :update-game-file!
                {:with [state]}))))

        (it "writes :current-game to the EDN file"
          (with-redefs [sut/edn-state (fn [] {})]
            (let [state {:board (board/get-board :3x3)
                         :players [:human :ai]
                         :markers ["X" "O"]
                         :difficulties [:hard]
                         :turn "p1"
                         :store :file}
                  expected-str (prn-str {:current-game state})]
              (sut/update-game-file! state)
              (should-have-invoked :spit
                {:with [sut/edn-file expected-str]}))))

        (it "add new game to previous games file"
          (let [data {:id 5
                      :moves [{:player "X" :move 0}]
                      :board-size (case (count (board/get-board :3x3))
                                    9 :3x3
                                    16 :4x4
                                    :3x3x3)}]
            (with-redefs [sut/edn-state (fn [] {:previous-games []})]
              (db/add-entry-to-previous! :file data)
              (should-have-invoked :spit {:with [sut/edn-file (prn-str {:previous-games [data]})]})
              (dissoc (sut/edn-state) (:id data)))))

        (it "adds new move to :previous-games key using ID"
          (with-redefs [sut/edn-state (fn [] {:previous-games [{:id 1 :moves [] :board-size :3x3}]})]
            (db/update-previous-games! :file 1 {:player "X" :move 0})
            (should-have-invoked :spit
              {:with [sut/edn-file
                      (prn-str {:previous-games [{:id 1 :moves [{:player "X" :move 0}] :board-size :3x3}]})]})))

        (it "clear current game edn"
          (with-redefs [sut/edn-state (fn [] {:current-game {}
                                              :previous-games []})]
            (db/clear-current-game! {:store :file})
            (should-have-invoked :spit {:with [sut/edn-file (dissoc (sut/edn-state) :current-game)]}))))

      (context "receive game to replay"
        (it "given id returns state"
          (with-redefs [sut/edn-state (fn [] {:previous-games [{:id 1 :moves [{}] :board-size :3x3}]})]
            (should-contain {:id 1
                             :moves [{}]
                             :board-size :3x3} (db/find-game-by-id {:store :file} 1))))

        (it "gets new id for new game"
          (let [state-1 {:id 1
                         :moves [{:player "X" :move 0}]
                         :board-size (case (count (board/get-board :3x3))
                                       9 :3x3
                                       16 :4x4
                                       :3x3x3)}
                state-2 {:id 2
                         :moves [{:player "X" :move 0}]
                         :board-size (case (count (board/get-board :4x4))
                                       9 :3x3
                                       16 :4x4
                                       :3x3x3)}]
            (with-redefs [spit (stub :spit)
                          sut/edn-state (fn [] {:previous-games [state-1 state-2]})]
              (db/add-entry-to-previous! :file state-1)
              (db/add-entry-to-previous! :file state-2)
              (should= 3 (db/set-new-game-id {:store :file}))
              (should-have-invoked :spit))))

        (it "user gives bad id"
          (should= () (db/find-game-by-id {:store :file} "S")))
        )
      )


  )