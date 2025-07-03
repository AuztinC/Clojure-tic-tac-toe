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
      (it "zero for empty file"
        (with-redefs [slurp (stub :slurp {:return ""})]
          (should= 0 (db/set-new-game-id {:store :file}))))

      (it "1 for single game in file"
        (with-redefs [slurp (stub :slurp {:return (pr-str {0 {:state {:id 0} :moves []}})})]
          (should= 1 (db/set-new-game-id {:store :file}))))

      (it "2"
        (with-redefs [slurp (stub :slurp {:return (pr-str {0 {:state {:id 0} :moves []}
                                                           1 {:state {:id 1} :moves []}})})]
          (should= 2 (db/set-new-game-id {:store :file}))))
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
            (should= :file (:store game))
            (should= [{:player "X" :position 0}] (:moves game)))))

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
                                               {:current-game-id 1
                                                (:id state)
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
                                                 {:current-game-id 1
                                                  0 old-state
                                                  1 {:state {:id           (:id state)
                                                             :board-size   (:board-size state)
                                                             :screen       (:screen state)
                                                             :players      (:players state)
                                                             :difficulties (:difficulties state)}
                                                     :moves [{:player "X" :position move}]}}]})))))

      (it "adds a move to game when in progress"
        (with-redefs [slurp (stub :slurp {:return (prn-str {:current-game-id 1
                                                            1 {:state {:id           1
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
                                               {:current-game-id 1
                                                1
                                                {:state {:id           (:id state)
                                                         :board-size   :3x3
                                                         :screen       (:screen state)
                                                         :players      (:players state)
                                                         :difficulties (:difficulties state)}
                                                 :moves [{:player "X" :position 0}
                                                         {:player "O" :position move}]}}]}))))
      )

    (context "in progress"
      (it "returns false if last game is not complete"
        (with-redefs [slurp (stub :slurp {:return (prn-str {1 {:state {:id           1
                                                                       :board-size   :3x3
                                                                       :screen       :game
                                                                       :players      [:ai :ai]
                                                                       :difficulties [:easy :hard]}
                                                               :moves (map #(assoc {} :player "X" :position %) (range 9))}})})]
          (should-not (db/in-progress? {:store :file})))
        )

      (it "returns false if last game is not complete"
        (with-redefs [slurp (stub :slurp {:return (prn-str {1 {:state {:id           1
                                                                       :board-size   :3x3
                                                                       :screen       :game
                                                                       :players      [:ai :ai]
                                                                       :difficulties [:easy :hard]}
                                                               :moves [{:player "X" :position 0}
                                                                       {:player "O" :position 1}]}})})]
          (should (db/in-progress? {:store :file})))
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
    )

  )