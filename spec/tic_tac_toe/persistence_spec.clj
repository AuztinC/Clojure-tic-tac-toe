(ns tic-tac-toe.persistence-spec
  (:require [cheshire.core :as json]
            [speclj.core :refer :all]
            [tic-tac-toe.persistence :as sut]
            [tic-tac-toe.board :as board]
            [clojure.java.jdbc :as jdbc]))

(describe "persistence"
  (with-stubs)
  (redefs-around [sut/psql-spec {:dbtype "postgresql"
                                 :dbname "tic-tac-toe-test"
                                 :host "localhost"
                                 :port 5432
                                 :user "austincripe"
                                 :password ""}])

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
          (sut/clear-current-game! {:store :file})
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

  (context "postgres"
    (context "read from psql"
      (it "SELECT 1 as one, confirms db connection"
        (let [result (jdbc/query sut/psql-spec ["SELECT 1 as one"])
              one (:one (first result))]
          (should= 1 one)))

      (it "reads empty psql state"
        (jdbc/db-do-commands sut/psql-spec
          ["DROP TABLE IF EXISTS current_game;"
           "DROP TABLE IF EXISTS previous_games;"
           "CREATE TABLE current_game(state JSONB);"
           "CREATE TABLE previous_games(games JSONB);"])
        (should= () (sut/psql-state "current_game"))
        (should= () (sut/psql-state "previous_games")))

      (it "empty current_game"
        (sut/clear-current-game! {:store :psql})
        (should= nil (sut/in-progress? :psql))
        (sut/clear-current-game! {:store :psql}))

      (it "finds current_game"
        (sut/clear-current-game! {:store :psql})
        (let [state {:board (board/get-board :3x3)
                     :players [:human :ai]
                     :markers ["X" "O"]
                     :difficulties [:hard]
                     :turn "p1"
                     :store :psql}]
          (jdbc/execute! sut/psql-spec
            ["INSERT INTO current_game(state) VALUES (?::jsonb)"
             (json/generate-string state)])
          (should= state (sut/in-progress? :psql))
          (sut/clear-current-game! {:store :psql})))
      )

    (context "write to psql"
      (before [(jdbc/db-do-commands sut/psql-spec
                 ["DELETE FROM previous_games"])
               (sut/clear-current-game! {:store :psql})])
      (after [(jdbc/db-do-commands sut/psql-spec
                ["DELETE FROM previous_games"])
              (sut/clear-current-game! {:store :psql})])

      (it " updates current-game once started"
        (let [init-state {:board (board/get-board :3x3)
                          :players [:human :ai]
                          :markers ["X" "O"]
                          :difficulties [:hard]
                          :turn "p1"
                          :store :psql}]
          (jdbc/execute! sut/psql-spec
            ["INSERT INTO current_game(state) VALUES (?::jsonb)"
             (json/generate-string init-state)]))
        (let [new-state {:board [["X"] [""] [""] [""] [""] [""] [""] [""] [""]]
                         :players [:human :ai]
                         :markers ["X" "O"]
                         :difficulties [:hard]
                         :turn "p2"
                         :store :psql}]
          (sut/update-current-game! new-state)
          (let [result (:state (first (jdbc/query sut/psql-spec ["SELECT state FROM current_game;"])))
                json-str (.getValue result)
                loaded (sut/clojurify-psql-state result)]
            (should= new-state loaded))))

      (it "initialize current_game if empty"
        (let [state {:board (board/get-board :3x3)
                     :players [:human :ai]
                     :markers ["X" "O"]
                     :difficulties [:hard]
                     :turn "p1"
                     :store :psql}]
          (sut/update-current-game! state)
          (let [result (:state (first (jdbc/query sut/psql-spec ["SELECT state FROM current_game;"])))
                json-str (.getValue result)
                loaded (sut/clojurify-psql-state result)]
            (should= state loaded))))

      (it "clears current_game"
        (sut/clear-current-game! {:store :psql})
        (should= () (jdbc/query sut/psql-spec
                      ["SELECT state FROM current_game;"])))

      (it "update-current-game!"
        (sut/clear-current-game! {:store :psql})
        (let [state {:board (board/get-board :3x3)
                     :players [:human :ai]
                     :markers ["X" "O"]
                     :difficulties [:hard]
                     :turn "p1"
                     :store :psql}]
          (sut/update-current-game! state)
          (let [result (:state (first (jdbc/query sut/psql-spec ["SELECT state FROM current_game;"])))
                loaded (sut/clojurify-psql-state result)]
            (should= state loaded))))

      (it "add new game to previous games psql"
        (let [data {:id 5
                    :moves [{:player "X" :move 0}]
                    :board-size (case (count (board/get-board :3x3))
                                  9 :3x3
                                  16 :4x4
                                  :3x3x3)}]
          (with-redefs [jdbc/execute! (stub :execute!)]
            (sut/add-entry-to-previous! :psql data)
            (should-have-invoked :execute! {:with [sut/psql-spec
                                                   ["INSERT INTO previous_games(games) VALUES (?::jsonb)"
                                                    "{\"id\":5,\"moves\":[{\"player\":\"X\",\"move\":0}],\"board-size\":\"3x3\"}"]]}))))

      (it "gets new id for new game"
        (let [state-1 {:id 5
                       :moves [{:player "X" :move 0}]
                       :board-size (case (count (board/get-board :3x3))
                                     9 :3x3
                                     16 :4x4
                                     :3x3x3)}
              state-2 {:id 1
                       :moves [{:player "X" :move 0}]
                       :board-size (case (count (board/get-board :3x3))
                                     9 :3x3
                                     16 :4x4
                                     :3x3x3)}]
          (sut/add-entry-to-previous! :psql state-1)
          (sut/add-entry-to-previous! :psql state-2)
          (should= 2 (sut/set-new-game-id :psql))
          (jdbc/db-do-commands sut/psql-spec
            ["DELETE FROM previous_games"])))

      (it "selects previous_game with ID"
        (let [state-1 {:id 1
                       :moves []
                       :board-size (case (count (board/get-board :3x3))
                                     9 :3x3
                                     16 :4x4
                                     :3x3x3)}]
          (sut/add-entry-to-previous! :psql state-1)
          (should= []
            (get (json/parse-string (.getValue (:games (first (jdbc/query sut/psql-spec ["SELECT games FROM previous_games WHERE (games->>'id')::int = ?" 1]))))) "moves"))
          #_(jdbc/db-do-commands sut/psql-spec
            ["DELETE FROM previous_games"])))

      (it "adds new move to :previous-games key using ID psql"
        (let [state-1 {:id 1
                       :moves []
                       :board-size (case (count (board/get-board :3x3))
                                     9 :3x3
                                     16 :4x4
                                     :3x3x3)}]
          (sut/add-entry-to-previous! :psql state-1)
          (should= [1] (sut/update-previous-games! :psql 1 {:player "X" :move 0}))
          (jdbc/db-do-commands sut/psql-spec
            ["DELETE FROM previous_games"])))
      ))

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
        (sut/update-current-game! state)
        (sut/clear-current-game! :mem)
        (should= {} @sut/mem-db))

      (it "updates current game"
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