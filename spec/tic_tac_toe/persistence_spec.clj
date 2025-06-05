(ns tic-tac-toe.persistence-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.init-game :as init]
            [tic-tac-toe.persistence :as sut]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game-options :as opt]))

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

      (it "updates current game file"
        (with-redefs [sut/edn-state "{}"
                      sut/update-game-file! (stub :update-game-file!)]
          (let [state {:board (board/get-board :3x3) :players [:human :ai] :markers ["X" "O"]
                       :difficulties [:hard] :turn "p1" :store :file}]
            (sut/update-game! state)
            (should-have-invoked :update-game-file!
              {:with [state]}))))

      (it "writes game to the EDN file"
        (with-redefs [sut/edn-state (fn [] {})]
         (let [state {:board       (board/get-board 3)
                     :players     [:human :ai]
                     :markers     ["X" "O"]
                     :difficulties [:hard]
                     :turn        "p1"
                     :store       :file}
              expected-str (prn-str {:current-game state})]
          (sut/update-game-file! state)
          (should-have-invoked :spit
            {:with [sut/edn-file expected-str]}))))

      (it "update previous games file"
        (let [data {:id 5
                    :moves [{:player "X" :move 0}]
                    :board-size (case (count (board/get-board :3x3))
                                  9 :3x3
                                  16 :4x4
                                  :3x3x3)}]
          (with-redefs [reset! (stub :reset!)
                        sut/edn-state (fn [] {:previous-games []})]
            (sut/update-previous-games! :file data)
            (should-have-invoked :spit)
            (dissoc (sut/edn-state) (:id data)))))

      (it "clear current game edn"
        (with-redefs [sut/edn-state (fn [] {:current-game {}
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

    (let [state {:board (board/get-board :3x3)
                 :players [:human :ai] :markers ["X" "O"]
                 :difficulties [:hard] :turn "p1" :store :mem}]
      (it "clears populated atom"
        (sut/update-game! state)
        (sut/clear! :mem)
        (should= {} @sut/mem-db))

      (it "updates game"
        (sut/update-game! state)
        (should= {:current-game
                  {:board (repeat 9 [""])
                   :players [:human :ai]
                   :markers ["X" "O"]
                   :difficulties [:hard]
                   :turn "p1"
                   :store :mem}}
          @sut/mem-db)))

    (it "update previous games mem"
      (let [data {:id 5
                  :moves [{:player "X" :move 0}]
                  :board-size (case (count (board/get-board :3x3))
                                9 :3x3
                                16 :4x4
                                :3x3x3)}]
        (with-redefs [reset! (stub :reset!)
                      sut/edn-state (fn [] {:previous-games []})]
          (sut/update-previous-games! :mem data)
          (should-have-invoked :reset!))))
    )
  #_(context "storing moves"
      (around [it] (reset! init/stored-moves []))
      (it "stores single player move"
        (let [board []
              move-fn (fn [board marker] 5)
              return (init/play-turn board move-fn ["X" :human] nil)]
          (should= ["5"] @init/stored-moves))))
  )
