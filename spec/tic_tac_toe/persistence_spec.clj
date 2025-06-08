(ns tic-tac-toe.persistence-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.persistence :as sut]
            [tic-tac-toe.board :as board]))

(describe "persistence"
  (with-stubs)

  (before (reset! sut/mem-db {}))

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

      (it "updates current game file"
        (with-redefs [sut/edn-state "{}"
                      sut/update-game-file! (stub :update-game-file!)]
          (let [state {:board (board/get-board :3x3) :players [:human :ai] :markers ["X" "O"]
                       :difficulties [:hard] :turn "p1" :store :file}]
            (sut/update-current-game! state)
            (should-have-invoked :update-game-file!
              {:with [state]}))))

      (it "writes :current-game game to the EDN file"
        (with-redefs [sut/edn-state (fn [] {})]
          (let [state {:board (board/get-board 3)
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
            (sut/add-entry-to-previous! :file data)
            (should-have-invoked :spit {:with [sut/edn-file (prn-str {:previous-games [data]})]})
            (dissoc (sut/edn-state) (:id data)))))

      (it "adds new move to :previous-games key using ID"
        (with-redefs [sut/edn-state (fn [] {:previous-games [{:id 1 :moves [] :board-size :3x3}]})]
          (sut/update-previous-games! :file 1 {:player "X" :move 0})
          (should-have-invoked :spit
            {:with [sut/edn-file
                    (prn-str {:previous-games [{:id 1 :moves [{:player "X" :move 0}] :board-size :3x3}]})]})))

      (it "clear current game edn"
        (with-redefs [sut/edn-state (fn [] {:current-game {}
                                            :previous-games []})]
          (sut/clear! {:store :file})
          (should-have-invoked :spit {:with [sut/edn-file (dissoc (sut/edn-state) :current-game)]}))))

    (context "receive game to replay"
      (it "given id returns state"
        (with-redefs [sut/edn-state (fn [] {:previous-games [{:id 1 :moves [{}] :board-size :3x3}]})]
          (should-contain {:id 1
                           :moves [{}]
                           :board-size :3x3} (sut/find-game-by-id {:store :file} 1))))

      (it "user gives bad id"
        (should= () (sut/find-game-by-id {:store :file} "S"))))
    )

  #_(context "postgres"
      (it "blah"
        (sut/clear! :pgsql)))

  (context "mem"
    (it "uses mem impl as default"
      (with-redefs [sut/clear! (stub :clear! {:invoke sut/clear!})]
        (sut/clear! {:store nil})
        (should-have-invoked :clear! {:with [{:store :mem}]})))

    (it "clears blank atom"
      (sut/clear! {:store :mem})
      (should= {} @sut/mem-db))

    (let [state {:board (board/get-board :3x3)
                 :players [:human :ai] :markers ["X" "O"]
                 :difficulties [:hard] :turn "p1" :store :mem}]
      (it "clears populated atom"
        (sut/update-current-game! state)
        (sut/clear! :mem)
        (should= {} @sut/mem-db))

      (it "updates cuurent game"
        (sut/update-current-game! state)
        (should= {:current-game
                  {:board (repeat 9 [""])
                   :players [:human :ai]
                   :markers ["X" "O"]
                   :difficulties [:hard]
                   :turn "p1"
                   :store :mem}}
          @sut/mem-db)))

    (it "adds new game to previous games mem"
      (reset! sut/mem-db {:previous-games [{:id 1 :moves [] :board-size :3x3}]})
      (let [data {:id 5
                  :moves [{:player "X" :move 0}]
                  :board-size :3x3}]
        (with-redefs [reset! (stub :reset!)]
          (sut/add-entry-to-previous! :mem data)
          (should-have-invoked :reset! {:with [sut/mem-db {:previous-games [{:id 1 :moves [] :board-size :3x3} data]}]}))))

    (it "adds move to previous-games :moves list"
      (reset! sut/mem-db {:previous-games [{:id 1 :moves [] :board-size :3x3}]})
      (let [move {:player "X" :move 0}]
        (with-redefs [reset! (stub :reset!)]
          (sut/update-previous-games! :mem 1 move)
          (should-have-invoked :reset!
            {:with [sut/mem-db
                    {:previous-games [{:id 1 :moves [move] :board-size :3x3}]}]})))
      )

    (context "receive game to replay"
      (it "given id returns state"
        (reset! sut/mem-db {:previous-games [{:id 1 :moves [{}] :board-size :3x3}]})
        (should-contain {:id 1
                         :moves [{}]
                         :board-size :3x3} (sut/find-game-by-id {:store :mem} 1)))

      (it "user gives bad id"
        (should= () (sut/find-game-by-id {:store :mem} "S"))))
    )
  )