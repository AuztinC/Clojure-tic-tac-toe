(ns tic-tac-toe.persistence-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.persistence :as sut]
            [tic-tac-toe.board :as board]))

(describe "persistence"
  (with-stubs)

  (before (reset! sut/mem-db {}))
  (after (reset! sut/mem-db {}))

  (context "set new game id"
    (it "return zero for empty file"
      (should= 0 (db/set-new-game-id {:store :mem})))

    (it "returns 1 for single game in file"
      (reset! sut/mem-db {0 {:state {:id 0}}})
      (should= 1 (db/set-new-game-id {:store :mem})))
    )

  (context "find game by id"
    (it "returns nil if empty"
      (should-not (sut/find-game-by-id {:store :mem} 0)))

    (it "returns game with one move"
      (let [state {:state {:id           0
                           :screen       :game
                           :players      [:human :ai]
                           :markers      ["X" "O"]
                           :difficulties [:hard]
                           :store        :file
                           :board-size   :3x3}
                   :moves [{:player "X" :position 0}]}
            new-state (assoc (:state state) :board (db/play-board (:state state) (:moves state))
                        :turn (db/next-player (:moves state))
                        :moves (:moves state))]
        (reset! sut/mem-db [state])
        (should= new-state (sut/find-game-by-id {:store :mem} 0)))))

  (context "update game atom"
    (it "creates game with move when none exist"
      (with-redefs [db/find-game-by-id (stub :find-game-by-id {:return nil})]
        (let [state {:id           1
                     :screen       :game
                     :board-size   :3x3
                     :board        [["X"] [""] [""] [""] [""] [""] [""] [""] [""]]
                     :players      [:ai :ai]
                     :markers      ["X" "O"]
                     :difficulties [:easy :hard]
                     :turn         "p2"
                     :store        :mem}
              move 0]
          (db/update-current-game! state move)
          (should= {:current-game-id (:id state)
                    (:id state)
                    {:state {:id           (:id state)
                             :board-size   :3x3
                             :screen       (:screen state)
                             :players      (:players state)
                             :difficulties (:difficulties state)}
                     :moves [{:player "X" :position move}]}}
            @sut/mem-db))))

    (it "creates game with move when no game in progress"
      (let [old-state {0 {:state {:id           0
                                  :board-size   :3x3
                                  :screen       :game
                                  :players      [:ai :ai]
                                  :difficulties [:easy :hard]
                                  :store        :mem}
                          :moves (map #(assoc {} :player "X" :position %) (range 9))}}
            new-state {:id           1
                       :board-size   :3x3
                       :screen       :game
                       :board        [["X"] [""] [""] [""] [""] [""] [""] [""] [""]]
                       :players      [:ai :ai]
                       :markers      ["X" "O"]
                       :difficulties [:easy :hard]
                       :turn         "p2"
                       :store        :mem}
            move 0]
        (reset! sut/mem-db old-state)
        (db/update-current-game! new-state move)
        (should= (merge old-state
                   {:current-game-id (:id new-state)
                    (:id new-state)
                    {:state {:id           (:id new-state)
                             :board-size   :3x3
                             :screen       (:screen new-state)
                             :players      (:players new-state)
                             :difficulties (:difficulties new-state)}
                     :moves [{:player "X" :position move}]}})
          @sut/mem-db)))

    (it "adds new move to current game"
      (let [old-state {:current-game-id 0
                       0 {:state {:id           0
                                :board-size   :3x3
                                :screen       :game
                                :players      [:ai :ai]
                                :difficulties [:easy :hard]}
                        :moves [{:player "X" :position 0}]}}
            new-state {:id           0
                       :board-size   :3x3
                       :screen       :game
                       :board        [["X"] ["O"] [""] [""] [""] [""] [""] [""] [""]]
                       :players      [:ai :ai]
                       :markers      ["X" "O"]
                       :difficulties [:easy :hard]
                       :turn         "p2"
                       :store        :mem}
            move 1]
        (reset! sut/mem-db old-state)
        (db/update-current-game! new-state move)
        (should= (merge old-state
                   {:current-game-id (:id new-state)
                    (:id new-state)
                    {:state {:id           (:id new-state)
                             :board-size   :3x3
                             :screen       (:screen new-state)
                             :players      (:players new-state)
                             :difficulties (:difficulties new-state)}
                     :moves [{:player "X" :position 0}
                             {:player "O" :position 1}]}})
          @sut/mem-db))))

  (context "in progress"
    (it "returns false if :current-game-id's game complete"
      (reset! sut/mem-db {:current-game-id 0
                          0 {:state {:id           0
                                     :board-size   :3x3
                                     :screen       :game
                                     :players      [:ai :ai]
                                     :difficulties [:easy :hard]}
                             :moves (map #(assoc {} :player "X" :position %) (range 9))}})
      (should-not (sut/in-progress? {:store :mem})))

    (it "returns true if :current-game-id's game complete"
      (reset! sut/mem-db {:current-game-id 0
                          0 {:state {:id           0
                                     :board-size   :3x3
                                     :screen       :game
                                     :players      [:ai :ai]
                                     :difficulties [:easy :hard]}
                             :moves [{:player "X" :position 0}
                                     {:player "O" :position 1}]}})
      (should (sut/in-progress? {:store :mem}))))

  (context "previous games"
    (it "returns false if no games in file"
      (reset! sut/mem-db nil)
      (should-not (db/previous-games? {:store :mem})))

    (it "returns true if previous game complete in file"
      (reset! sut/mem-db {0 {:state {:id           0
                                     :board-size   :3x3
                                     :screen       :game
                                     :players      [:ai :ai]
                                     :difficulties [:easy :hard]}
                             :moves (map #(assoc {} :player "X" :position %) (range 9))}})
      (should (db/previous-games? {:store :mem})))
    )

  #_(context "mem"
      (it "uses mem impl as default"
        (with-redefs [sut/clear-current-game! (stub :clear! {:invoke sut/clear-current-game!})]
          (sut/clear-current-game! {:store nil})
          (should-have-invoked :clear! {:with [{:store :mem}]})))

      (it "clears blank atom"
        (sut/clear-current-game! {:store :mem})
        (should= {} @sut/mem-db))

      (let [state {:board        (board/get-board :3x3)
                   :players      [:human :ai] :markers ["X" "O"]
                   :difficulties [:hard] :turn "p1" :store :mem}]
        (it "clears populated atom"
          (sut/update-current-game! state 0)
          (sut/clear-current-game! :mem)
          (should= {} @sut/mem-db))

        (it "updates current game"
          (sut/update-current-game! state 0)
          (should= {:current-game
                    {:board        (repeat 9 [""])
                     :players      [:human :ai]
                     :markers      ["X" "O"]
                     :difficulties [:hard]
                     :turn         "p1"
                     :store        :mem}}
            @sut/mem-db)))

      (it "returns empty previous-games"
        (should= nil (sut/previous-games? {:store :mem})))
      (it "returns previous-games"
        (reset! sut/mem-db {:previous-games {:id 1}})
        (should= {:id 1} (sut/previous-games? {:store :mem})))

      (it "adds new game to previous games mem"
        (reset! sut/mem-db {:previous-games [{:id 1 :moves [] :board-size :3x3}]})
        (let [data {:id         5
                    :moves      [{:player "X" :move 0}]
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
                      {:previous-games [{:id 1 :moves [move] :board-size :3x3}]}]}))))
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
          (sut/add-entry-to-previous! :mem state-1)
          (sut/add-entry-to-previous! :mem state-2)
          (should= 3 (sut/set-new-game-id {:store :mem}))))

      (context "receive game to replay"
        (it "given id returns state"
          (reset! sut/mem-db {:previous-games [{:id 1 :moves [{}] :board-size :3x3}]})
          (should-contain {:id         1
                           :moves      [{}]
                           :board-size :3x3} (sut/find-game-by-id {:store :mem} 1)))

        (it "user gives bad id"
          (should= () (sut/find-game-by-id {:store :mem} "S"))))
      )
  )
