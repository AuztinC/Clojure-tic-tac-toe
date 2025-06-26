(ns tic-tac-toe.persistence-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.persistence :as sut]
            [tic-tac-toe.board :as board]))

(describe "persistence"
  (with-stubs)

  (before (reset! sut/mem-db {}))

  (context "mem"
    (it "uses mem impl as default"
      (with-redefs [sut/clear-current-game! (stub :clear! {:invoke sut/clear-current-game!})]
        (sut/clear-current-game! {:store nil})
        (should-have-invoked :clear! {:with [{:store :mem}]})))

    (it "clears blank atom"
      (sut/clear-current-game! {:store :mem})
      (should= {} @sut/mem-db))

    (let [state {:board (board/get-board :3x3)
                 :players [:human :ai] :markers ["X" "O"]
                 :difficulties [:hard] :turn "p1" :store :mem}]
      (it "clears populated atom"
        (sut/update-current-game! state 0)
        (sut/clear-current-game! :mem)
        (should= {} @sut/mem-db))

      (it "updates current game"
        (sut/update-current-game! state 0)
        (should= {:current-game
                  {:board (repeat 9 [""])
                   :players [:human :ai]
                   :markers ["X" "O"]
                   :difficulties [:hard]
                   :turn "p1"
                   :store :mem}}
          @sut/mem-db)))

    (it "returns empty previous-games"
      (should= nil (sut/previous-games? {:store :mem})))
    (it "returns previous-games"
      (reset! sut/mem-db {:previous-games {:id 1}})
      (should= {:id 1} (sut/previous-games? {:store :mem})))

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
                    {:previous-games [{:id 1 :moves [move] :board-size :3x3}]}]}))))
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
        (sut/add-entry-to-previous! :mem state-1)
        (sut/add-entry-to-previous! :mem state-2)
        (should= 3 (sut/set-new-game-id {:store :mem}))))

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
