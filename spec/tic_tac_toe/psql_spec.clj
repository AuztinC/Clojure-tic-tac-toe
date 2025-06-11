(ns tic-tac-toe.psql-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.psql :as sut]
            [tic-tac-toe.persistence :as db]
            [clojure.java.jdbc :as jdbc]
            [cheshire.core :as json]
            [tic-tac-toe.board :as board]))

(describe "postgresql persistence"
  (redefs-around [sut/psql-spec {:dbtype "postgresql"
                                 :dbname "tic-tac-toe-test"
                                 :host "localhost"
                                 :port 5432
                                 :user "austincripe"
                                 :password ""}])

  (before [(jdbc/db-do-commands sut/psql-spec
             ["DELETE FROM previous_games"])
           (db/clear-current-game! {:store :psql})])
  (after [(jdbc/db-do-commands sut/psql-spec
             ["DELETE FROM previous_games"])
           (db/clear-current-game! {:store :psql})])

  (context "read"
    (before [(jdbc/db-do-commands sut/psql-spec
               ["DELETE FROM previous_games"])
             (db/clear-current-game! {:store :psql})])
    (it "SELECT 1 as one, confirms db connection"
      (let [result (jdbc/query sut/psql-spec ["SELECT 1 as one"])
            one (:one (first result))]
        (should= 1 one)))

    (it "reads empty psql state"
      (jdbc/db-do-commands sut/psql-spec
        ["DROP TABLE IF EXISTS current_game;"
         "DROP TABLE IF EXISTS previous_games;"
         "CREATE TABLE current_game(state JSONB);"
         "CREATE TABLE previous_games(id int NOT NULL UNIQUE, state JSONB);"])
      (should= () (sut/state "current_game"))
      (should= () (sut/state "previous_games")))

    (it "can find a game with ID"
      (let [state-1 {:id 1
                     :moves [{:player "X" :move 0}]
                     :board-size (case (count (board/get-board :3x3))
                                   9 :3x3
                                   16 :4x4
                                   :3x3x3)}]
        (db/add-entry-to-previous! :psql state-1)
        (should= state-1 (db/find-game-by-id {:store :psql} 1))))

    (it "can return empty"
      (jdbc/db-do-commands sut/psql-spec
        ["DELETE FROM previous_games"])
      (should= [] (db/find-game-by-id {:store :psql} 1)))

    (it "empty current_game"
      (db/clear-current-game! {:store :psql})
      (should= nil (db/in-progress? {:store :psql}))
      (db/clear-current-game! {:store :psql}))

    (it "finds current_game"
      (db/clear-current-game! {:store :psql})
      (let [state {:board (board/get-board :3x3)
                   :players [:human :ai]
                   :markers ["X" "O"]
                   :difficulties [:hard]
                   :turn "p1"
                   :store :psql}]
        (jdbc/execute! sut/psql-spec
          ["INSERT INTO current_game(state) VALUES (?::jsonb)"
           (json/generate-string state)])
        (should= state (db/in-progress? {:store :psql}))
        #_(db/clear-current-game! {:store :psql})))

    (it "returns empty previous-games"
      (with-redefs [sut/state (fn [_table] {})]
        (should= nil (db/previous-games? {:store :psql}))))

    (it "returns previous-games"
      (with-redefs [sut/state (fn [_table] {:previous-games {:id 1}})]
        (should=  {:previous-games {:id 1}}  (db/previous-games? {:store :psql}))))
    )

  (context "write"
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
                                   :3x3x3)}
            state-3 {:id 3
                     :moves [{:player "X" :move 0}]
                     :board-size (case (count (board/get-board :4x4))
                                   9 :3x3
                                   16 :4x4
                                   :3x3x3)}]
        (db/add-entry-to-previous! :psql state-1)
        (db/add-entry-to-previous! :psql state-2)
        (db/add-entry-to-previous! :psql state-3)
        (should= 4 (db/set-new-game-id {:store :psql}))
        (jdbc/db-do-commands sut/psql-spec
          ["DELETE FROM previous_games"])))

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
        (db/update-current-game! new-state)
        (let [result (:state (first (jdbc/query sut/psql-spec ["SELECT state FROM current_game;"])))
              loaded (sut/clojurify-psql-state result)]
          (should= new-state loaded))))

    (it "initialize current_game if empty"
      (let [state {:board (board/get-board :3x3)
                   :players [:human :ai]
                   :markers ["X" "O"]
                   :difficulties [:hard]
                   :turn "p1"
                   :store :psql}]
        (db/update-current-game! state)
        (let [result (:state (first (jdbc/query sut/psql-spec ["SELECT state FROM current_game;"])))
              loaded (sut/clojurify-psql-state result)]
          (should= state loaded))))

    (it "update-current-game!"
      (db/clear-current-game! {:store :psql})
      (let [state {:board (board/get-board :3x3)
                   :players [:human :ai]
                   :markers ["X" "O"]
                   :difficulties [:hard]
                   :turn "p1"
                   :store :psql}]
        (db/update-current-game! state)
        (let [result (:state (first (jdbc/query sut/psql-spec ["SELECT state FROM current_game;"])))
              loaded (sut/clojurify-psql-state result)]
          (should= state loaded))))

    (it "adds new move to :previous-games key using ID psql"
      (let [state-1 {:id 1
                     :moves []
                     :board-size (case (count (board/get-board :3x3))
                                   9 :3x3
                                   16 :4x4
                                   :3x3x3)}]
        (db/add-entry-to-previous! :psql state-1)
        (should= [1] (db/update-previous-games! :psql 1 {:player "X" :move 0}))
        (jdbc/db-do-commands sut/psql-spec
          ["DELETE FROM previous_games"])))
    )
  )
