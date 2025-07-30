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
                           :store        :mem
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
                     :active       true
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
          (should= {(:id state)
                    {:state {:id           (:id state)
                             :board-size   :3x3
                             :screen       (:screen state)
                             :players      (:players state)
                             :difficulties (:difficulties state)
                             :active       true}
                     :moves [{:player "X" :position move}]}}
            @sut/mem-db))))

    (it "creates game with move when no game in progress"
      (let [old-state {0 {:state {:id           0
                                  :board-size   :3x3
                                  :screen       :game
                                  :players      [:ai :ai]
                                  :difficulties [:easy :hard]
                                  :store        :mem
                                  :active       false}
                          :moves (map #(assoc {} :player "X" :position %) (range 9))}}
            new-state {:id           1
                       :active       true
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
                   {(:id new-state)
                    {:state {:id           (:id new-state)
                             :board-size   :3x3
                             :screen       (:screen new-state)
                             :players      (:players new-state)
                             :difficulties (:difficulties new-state)
                             :active       true}
                     :moves [{:player "X" :position move}]}})
          @sut/mem-db)))

    (it "adds new move to current game"
      (let [old-state {0 {:state {:id           0
                                  :board-size   :3x3
                                  :screen       :game
                                  :players      [:ai :ai]
                                  :difficulties [:easy :hard]
                                  :active       true}
                          :moves [{:player "X" :position 0}]}}
            new-state {:id           0
                       :board-size   :3x3
                       :screen       :game
                       :board        [["X"] ["O"] [""] [""] [""] [""] [""] [""] [""]]
                       :players      [:ai :ai]
                       :markers      ["X" "O"]
                       :difficulties [:easy :hard]
                       :turn         "p2"
                       :store        :mem
                       :active       true}
            move 1]
        (reset! sut/mem-db old-state)
        (db/update-current-game! new-state move)
        (should= (merge old-state
                   {(:id new-state)
                    {:state {:id           (:id new-state)
                             :board-size   :3x3
                             :screen       (:screen new-state)
                             :players      (:players new-state)
                             :difficulties (:difficulties new-state)
                             :active       true}
                     :moves [{:player "X" :position 0}
                             {:player "O" :position 1}]}})
          @sut/mem-db))))

  (context "in progress"
    (it "returns false if :current-game-id's game complete"
      (reset! sut/mem-db {:current-game-id 0
                          0                {:state {:id           0
                                                    :board-size   :3x3
                                                    :screen       :game
                                                    :players      [:ai :ai]
                                                    :difficulties [:easy :hard]}
                                            :moves (map #(assoc {} :player "X" :position %) (range 9))}})
      (should-not (sut/in-progress? {:store :mem})))

    (it "returns true if :current-game-id's game complete"
      (reset! sut/mem-db {:current-game-id 0
                          0                {:state {:id           0
                                                    :board-size   :3x3
                                                    :screen       :game
                                                    :players      [:ai :ai]
                                                    :difficulties [:easy :hard]}
                                            :moves [{:player "X" :position 0}
                                                    {:player "O" :position 1}]}})
      (should (sut/in-progress? {:store :mem}))))

  (context "previous games"
    (it "returns false if no games in file"
      (reset! sut/mem-db {})
      (should-not (db/previous-games? {:store :mem})))

    (it "returns true if previous game complete in file"
      (reset! sut/mem-db {0 {:state {:id           0
                                     :board-size   :3x3
                                     :screen       :game
                                     :players      [:ai :ai]
                                     :difficulties [:easy :hard]
                                     :active       false}
                             :moves (map #(assoc {} :player "X" :position %) (range 9))}})
      (should (db/previous-games? {:store :mem})))
    )
  (context "clear current active"
    (it "sets previous active false"
      (reset! sut/mem-db {1 {:state {:id           1
                                     :board-size   :3x3
                                     :screen       :game
                                     :players      [:ai :ai]
                                     :difficulties [:easy :hard]
                                     :active       true}
                             :moves [{:player "X" :position 0}
                                     {:player "O" :position 1}]}})
      (with-redefs [reset! (stub :reset!)]
        (let [state {1 {:state {:id 1,
                                :board-size :3x3,
                                :screen :game,
                                :players [:ai :ai],
                                :difficulties [:easy :hard],
                                :active false},
                        :moves [{:player "X", :position 0} {:player "O", :position 1}]}}]
          (db/clear-active {:store :mem})
          (should-have-invoked :reset!
            {:with [sut/mem-db
                    state]})))))
  )
