(ns tic-tac-toe.edn-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.edn :as sut]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.board :as board]))

(describe "edn"
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

      )

    (context "set new game id"
      (it "return zero for empty file"
        (with-redefs [slurp (stub :slurp {:return ""})]
          (should= 0 (db/set-new-game-id {:store :file}))))

      (it "returns 1 for single game in file"
        (with-redefs [slurp (stub :slurp {:return (pr-str {0 {:state {:id 0} :moves []}})})]
          (should= 1 (db/set-new-game-id {:store :file}))))
      )

    (context "find game by id"
      (it "nil if empty"
        (with-redefs [slurp (stub :slurp {:return ""})]
          (should-not (db/find-game-by-id {:store :file} 123))
          (should-have-invoked :slurp {:with [sut/edn-file]})))

      (it "returns game with one move"
        (with-redefs [slurp (stub :slurp {:return (pr-str {0 {:state {:id           0
                                                                      :screen       :game
                                                                      :players      [:human :ai]
                                                                      :markers      ["X" "O"]
                                                                      :difficulties [:hard]
                                                                      :store        :file
                                                                      :board-size   :3x3}
                                                              :moves [{:player "X" :position 0}]}})})]
          (let [game (db/find-game-by-id {:store :file} 0)]
            (should= :game (:screen game))
            (should= 0 (:id game))
            (should= [["X"] [""] [""] [""] [""] [""] [""] [""] [""]] (:board game))
            (should= [:human :ai] (:players game))
            (should= ["X" "O"] (:markers game))
            (should= [:hard] (:difficulties game))
            (should= "p2" (:turn game))
            (should= :file (:store game)))))

      (it "returns game with multiple moves"
          (with-redefs [slurp (stub :slurp {:return (pr-str {0 {:state {:id           0
                                                                        :screen       :game
                                                                        :players      [:human :ai]
                                                                        :markers      ["X" "O"]
                                                                        :difficulties [:hard]
                                                                        :store        :file
                                                                        :board-size   :3x3}
                                                                :moves [{:player "X" :position 0}
                                                                        {:player "O" :position 1}
                                                                        {:player "X" :position 2}]}})})]
            (let [game (db/find-game-by-id {:store :file} 0)]
              (should= [["X"] ["O"] ["X"] [""] [""] [""] [""] [""] [""]] (:board game)))))
      )

    (context "update current game"
      (it "creates game with move when none exist"
        (with-redefs [slurp (stub :slurp {:return ""})
                      spit (stub :spit)]
          (let [state {:id           1
                       :screen       :game
                       :board-size   :3x3
                       :board        [["X"] [""] [""] [""] [""] [""] [""] [""] [""]]
                       :players      [:ai :ai]
                       :markers      ["X" "O"]
                       :difficulties [:easy :hard]
                       :turn         "p2"
                       :store        :file}
                move 0]
            (db/update-current-game! state move)
            (should-have-invoked :spit {:with [sut/edn-file
                                               {(:id state)
                                                {:state {:id           (:id state)
                                                         :board-size   :3x3
                                                         :screen       (:screen state)
                                                         :players      (:players state)
                                                         :difficulties (:difficulties state)}
                                                 :moves [{:player "X" :position move}]}}]}))))

      (it "creates game with move when no game in progress"
        (let [old-state {:state {:id           0
                                 :board-size   :3x3
                                 :screen       :game
                                 :players      [:ai :ai]
                                 :difficulties [:easy :hard]
                                 :store        :file}
                         :moves (map #(assoc {} :player "X" :position %) (range 9))}]
          (with-redefs [slurp (stub :slurp {:return (prn-str {0 old-state})})
                        spit (stub :spit)]
            (let [state {:id           1
                         :board-size   :3x3
                         :screen       :game
                         :board        [["X"] [""] [""] [""] [""] [""] [""] [""] [""]]
                         :players      [:ai :ai]
                         :markers      ["X" "O"]
                         :difficulties [:easy :hard]
                         :turn         "p2"
                         :store        :file}
                  move 0]
              (db/update-current-game! state move)
              (should-have-invoked :spit {:with [sut/edn-file
                                                 {0 old-state
                                                  1 {:state {:id           (:id state)
                                                             :board-size   (:board-size state)
                                                             :screen       (:screen state)
                                                             :players      (:players state)
                                                             :difficulties (:difficulties state)}
                                                     :moves [{:player "X" :position move}]}}]})))))

      (it "adds a move to game when in progress"
        (with-redefs [slurp (stub :slurp {:return (prn-str {1 {:state {:id           1
                                                                       :board-size   :3x3
                                                                       :screen       :game
                                                                       :players      [:ai :ai]
                                                                       :difficulties [:easy :hard]}
                                                               :moves [{:player "X" :position 0}]}})})
                      spit (stub :spit)]
          (let [state {:id           1
                       :screen       :game
                       :board        [["X"] ["O"] [""] [""] [""] [""] [""] [""] [""]]
                       :players      [:ai :ai]
                       :markers      ["X" "O"]
                       :difficulties [:easy :hard]
                       :turn         "p1"
                       :store        :file}
                move 1]
            (db/update-current-game! state move)
            (should-have-invoked :spit {:with [sut/edn-file
                                               {1
                                                {:state {:id           (:id state)
                                                         :board-size   :3x3
                                                         :screen       (:screen state)
                                                         :players      (:players state)
                                                         :difficulties (:difficulties state)}
                                                 :moves [{:player "X" :position 0}
                                                         {:player "O" :position move}]}}]}))))
      )

    (context "in progress"
      (it "returns if last game is complete"
        (with-redefs [slurp (stub :slurp {:return (prn-str {1 {:state {:id           1
                                                                       :board-size   :3x3
                                                                       :screen       :game
                                                                       :players      [:ai :ai]
                                                                       :difficulties [:easy :hard]}
                                                               :moves (map #(assoc {} :player "X" :position %) (range 9))}})})]
          (should (db/in-progress? {:store :file})))
        )

      (it "returns false if last game is not complete"
        (with-redefs [slurp (stub :slurp {:return (prn-str {1 {:state {:id           1
                                                                       :board-size   :3x3
                                                                       :screen       :game
                                                                       :players      [:ai :ai]
                                                                       :difficulties [:easy :hard]}
                                                               :moves [{:player "X" :position 0}
                                                                       {:player "O" :position 1}]}})})]
          (should-not (db/in-progress? {:store :file})))
        )
      )

    (context "previous games"
      (it "returns false if no games in file"
        (with-redefs [slurp (stub :slurp {:return ""})]
          (should-not (db/previous-games? {:store :file}))))

      (it "returns true if previous game complete in file"
        (with-redefs [slurp (stub :slurp {:return (prn-str {1 {:state {:id           1
                                                                       :board-size   :3x3
                                                                       :screen       :game
                                                                       :players      [:ai :ai]
                                                                       :difficulties [:easy :hard]}
                                                               :moves (map #(assoc {} :player "X" :position %) (range 9))}})})]
          (should (db/previous-games? {:store :file}))))

      (it "returns true if previous game complete in file"
        (with-redefs [slurp (stub :slurp {:return (prn-str {1 {:state {:id           1
                                                                       :board-size   :3x3
                                                                       :screen       :game
                                                                       :players      [:ai :ai]
                                                                       :difficulties [:easy :hard]}
                                                               :moves [{:player "X" :position 0}
                                                                       {:player "O" :position 1}]}})})]
          (should-not (db/previous-games? {:store :file}))))
      )





    #_(context "read edn"
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

    #_(context "write to edn"
        (redefs-around [spit (stub :spit)])

        (it "updates current game file"
          (with-redefs [sut/edn-state (fn [] {})
                        sut/update-game-file! (stub :update-game-file!)]
            (let [state {:board        (board/get-board :3x3) :players [:human :ai] :markers ["X" "O"]
                         :difficulties [:hard] :turn "p1" :store :file}]
              (db/update-current-game! state 0)
              (should-have-invoked :update-game-file!
                {:with [state]}))))

        (it "writes :current-game to the EDN file"
          (with-redefs [sut/edn-state (fn [] {})]
            (let [state {:board        (board/get-board :3x3)
                         :players      [:human :ai]
                         :markers      ["X" "O"]
                         :difficulties [:hard]
                         :turn         "p1"
                         :store        :file}
                  expected-str (prn-str {:current-game state})]
              (sut/update-game-file! state)
              (should-have-invoked :spit
                {:with [sut/edn-file expected-str]}))))

        (it "add new game to previous games file"
          (let [data {:id         5
                      :moves      [{:player "X" :move 0}]
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
          (with-redefs [sut/edn-state (fn [] {:current-game   {}
                                              :previous-games []})]
            (db/clear-current-game! {:store :file})
            (should-have-invoked :spit {:with [sut/edn-file (dissoc (sut/edn-state) :current-game)]}))))

    #_(context "receive game to replay"
        (it "given id returns state"
          (with-redefs [sut/edn-state (fn [] {:previous-games [{:id 1 :moves [{}] :board-size :3x3}]})]
            (should-contain {:id         1
                             :moves      [{}]
                             :board-size :3x3} (db/find-game-by-id {:store :file} 1))))

        (it "gets new id for new game"
          (let [state-1 {:id         1
                         :moves      [{:player "X" :move 0}]
                         :board-size (case (count (board/get-board :3x3))
                                       9 :3x3
                                       16 :4x4
                                       :3x3x3)}
                state-2 {:id         2
                         :moves      [{:player "X" :move 0}]
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