(ns tic-tac-toe.psql-spec
  (:require [clojure.string :as str]
            [speclj.core :refer :all]
            [tic-tac-toe.psql :as sut]
            [tic-tac-toe.persistence :as db]
            [clojure.java.jdbc :as jdbc]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.spec-helper :as helper]))

(describe "postgresql persistence"
  (with-stubs)

  (context "db setup"
    (helper/stub-jdbc)

    (it "create games & moves tables if it doesn't exist"
      (sut/db-setup)
      (helper/should-initialize-db)))

  (context "set new game id"
    (it "returns first id"
      (with-redefs [jdbc/query (stub :query {:return [{:nextval 1}]})]
        (should= 1 (db/set-new-game-id {:store :psql}))
        (should-have-invoked :query {:with [sut/psql-spec ["SELECT nextval('games_id_seq')"]]})))

    (it "returns subsequent ids"
      (with-redefs [jdbc/query (stub :query {:return [{:nextval 3}]})]
        (should= 3 (db/set-new-game-id {:store :psql}))
        (should-have-invoked :query {:with [sut/psql-spec ["SELECT nextval('games_id_seq')"]]}))))

  (context "find-game-by-id"

    (it "if query returns empty, return empty vector"
      (with-redefs [jdbc/query (stub :query {:return ()})]
        (should-not (db/find-game-by-id {:store :psql} 123))
        (should-have-invoked :query {:with [sut/psql-spec ["SELECT * FROM games WHERE id = ?" 123]]})))

    (it "returns game with one move"
      (with-redefs [jdbc/query
                    (stub :query {:invoke (fn [spec query-coll]
                                            (if (str/includes? (first query-coll) "games")
                                              [{:id 1 :screen "game" :p1 "ai" :p2 "ai" :diff1 "easy" :diff2 "hard" :boardsize "3x3"}]
                                              [{:id 1 :gameid 1 :position 0 :player "X"}]))})]
        (let [game (db/find-game-by-id {:store :psql} 1)]
          (should= :game (:screen game))
          (should= 1 (:id game))
          (should= [["X"] [""] [""] [""] [""] [""] [""] [""] [""]] (:board game))
          (should= [:ai :ai] (:players game))
          (should= ["X" "O"] (:markers game))
          (should= [:easy :hard] (:difficulties game))
          (should= "p2" (:turn game))
          (should= :psql (:store game))
          (should-have-invoked :query {:times 2})
          (should-have-invoked :query {:with [sut/psql-spec ["SELECT * FROM games WHERE id = ?" 1]]})
          (should-have-invoked :query {:with [sut/psql-spec ["SELECT * FROM moves WHERE gameid = ?" 1]]})
          )))

    (it "returns game with multiple moves"
      (with-redefs [jdbc/query
                    (stub :query {:invoke (fn [_spec query-coll]
                                            (if (str/includes? (first query-coll) "games")
                                              [{:id 1 :screen "game" :p1 "ai" :p2 "ai" :diff1 "easy" :diff2 "hard" :boardsize "3x3"}]
                                              [{:id 1 :gameid 1 :position 0 :player "X"}
                                               {:id 2 :gameid 1 :position 1 :player "O"}
                                               {:id 3 :gameid 1 :position 2 :player "X"}]))})]
        (let [game (db/find-game-by-id {:store :psql} 1)]
          (should= [["X"] ["O"] ["X"] [""] [""] [""] [""] [""] [""]] (:board game))))))

  (context "update current game"

    (it "creates game with move when none exist"
      (with-redefs [db/find-game-by-id (stub :find-game-by-id {:return {}})
                    jdbc/execute! (stub :execute!)]
        (let [state {:id 1
                     :board-size :3x3
                     :screen :game
                     :board [["X"] [""] [""] [""] [""] [""] [""] [""] [""]]
                     :players [:ai :ai]
                     :markers ["X" "O"]
                     :difficulties [:easy :hard]
                     :turn "p2"
                     :store :psql}
              move 0]
          (db/update-current-game! state move)
          (should-have-invoked :execute!
            {:with [sut/psql-spec
                    ["INSERT INTO games(id, screen, p1, p2, diff1, diff2, boardsize, active) VALUES (?::int, ?::text, ?::text, ?::text, ?::text, ?::text, ?::text, true);"
                     (:id state)
                     (str (:screen state))
                     (str (first (:players state)))
                     (str (second (:players state)))
                     (str (first (:difficulties state)))
                     (str (second (:difficulties state)))
                     "3x3"]]})

          (should-have-invoked :execute!
            {:with [sut/psql-spec
                    ["INSERT INTO moves(gameid, position, player) VALUES (?::int, ?::int, ?::text)"
                     (:id state)
                     move
                     (first (get (:board state) move))]]}))))

    (it "returns true if game in progress"
      (should-not (sut/previous-game-complete? (board/get-board :3x3)))
      (should (sut/previous-game-complete? (repeat 9 ["X"])))
      (should-not (sut/previous-game-complete? [["X"] [""] [""] [""] [""] [""] [""] [""] [""]])))

    (it "creates game with move when no game in progress"
      (with-redefs [db/find-game-by-id (stub :find-game-by-id {:return [{:id 1
                                                                         :screen :game
                                                                         :board (repeat 9 ["X"])
                                                                         :players [:ai :ai]
                                                                         :markers ["X" "O"]
                                                                         :difficulties [:easy :hard]
                                                                         :turn "p2"
                                                                         :store :psql}]})
                    jdbc/execute! (stub :execute!)]
        (let [state {:id 2
                     :screen :game
                     :board [["X"] [""] [""] [""] [""] [""] [""] [""] [""]]
                     :players [:ai :ai]
                     :markers ["X" "O"]
                     :difficulties [:easy :hard]
                     :turn "p2"
                     :store :psql}
              move 0]
          (db/update-current-game! state move)
          (should-have-invoked :execute!
            {:with [sut/psql-spec
                    ["INSERT INTO games(id, screen, p1, p2, diff1, diff2, boardsize, active) VALUES (?::int, ?::text, ?::text, ?::text, ?::text, ?::text, ?::text, true);"
                     (:id state)
                     (str (:screen state))
                     (str (first (:players state)))
                     (str (second (:players state)))
                     (str (first (:difficulties state)))
                     (str (second (:difficulties state)))
                     "3x3"]]})

          (should-have-invoked :execute!
            {:with [sut/psql-spec
                    ["INSERT INTO moves(gameid, position, player) VALUES (?::int, ?::int, ?::text)"
                     (:id state)
                     move
                     (first (get (:board state) move))]]}))))

    #_(it "adds a move to game when in progress"
      (with-redefs [db/find-game-by-id (stub :find-game-by-id {:return [{:id 1
                                                                         :board-size :3x3
                                                                         :screen :game
                                                                         :board [["X"] [""] [""] [""] [""] [""] [""] [""] [""]]
                                                                         :players [:ai :ai]
                                                                         :markers ["X" "O"]
                                                                         :difficulties [:easy :hard]
                                                                         :turn "p2"
                                                                         :store :psql}]})
                    jdbc/execute! (stub :execute!)]
        (let [state {:id 1
                     :board-size :3x3
                     :screen :game
                     :board [["X"] ["O"] [""] [""] [""] [""] [""] [""] [""]]
                     :players [:ai :ai]
                     :markers ["X" "O"]
                     :difficulties [:easy :hard]
                     :turn "p1"
                     :store :psql}
              move 0]
          (db/update-current-game! state move)
          (should-have-invoked :execute!
            {:with [sut/psql-spec
                    ["UPDATE moves SET position = (?::int), player =(?::text) WHERE gameid = ?"
                     move
                     (first (get (:board state) move))
                     (:id state)]]}))))
    )

  (context "in progress? "
    (it "returns false if last game complete"
      (with-redefs [jdbc/query
                    (stub :query {:invoke (fn [_spec query-coll]
                                            (if (str/includes? (first query-coll) "games")
                                              [{:id 1 :screen "game" :p1 "ai" :p2 "ai" :diff1 "easy" :diff2 "hard" :boardsize "3x3"}
                                               {:id 2 :screen "game" :p1 "ai" :p2 "ai" :diff1 "easy" :diff2 "hard" :boardsize "3x3"}]
                                              [{:id 1 :gameid 2 :position 0 :player "X"}
                                               {:id 2 :gameid 2 :position 1 :player "O"}
                                               {:id 3 :gameid 2 :position 2 :player "X"}
                                               {:id 4 :gameid 2 :position 3 :player "O"}
                                               {:id 5 :gameid 2 :position 4 :player "X"}
                                               {:id 6 :gameid 2 :position 5 :player "O"}
                                               {:id 7 :gameid 2 :position 6 :player "X"}
                                               {:id 8 :gameid 2 :position 7 :player "O"}
                                               {:id 9 :gameid 2 :position 8 :player "X"}]))})]
        (should-not (db/in-progress? {:store :psql}))))

    (it "returns true if last game NOT complete"
      (with-redefs [jdbc/query
                    (stub :query {:invoke (fn [_spec query-coll]
                                            (if (str/includes? (first query-coll) "games")
                                              [{:id 1 :screen "game" :p1 "ai" :p2 "ai" :diff1 "easy" :diff2 "hard" :board-size "3x3"}
                                               {:id 2 :screen "game" :p1 "ai" :p2 "ai" :diff1 "easy" :diff2 "hard" :board-size "3x3"}]
                                              [{:id 1 :gameid 2 :position 0 :player "X"}
                                               {:id 2 :gameid 2 :position 1 :player "O"}
                                               {:id 3 :gameid 2 :position 2 :player "X"}]))})]
        (should (db/in-progress? {:store :psql})))))

  (context "previous games"
    (it "returns false if no games in file"
      (with-redefs [jdbc/query (stub :query {:return nil})]
        (should-not (db/previous-games? {:store :psql}))))

    (it "returns true if previous game complete in file"
      (with-redefs [jdbc/query (stub :query {:invoke (fn [_spec query-coll]
                                                       (if (str/includes? (first query-coll) "games")
                                                         [{:id 1 :screen "game" :p1 "ai" :p2 "ai" :diff1 "easy" :diff2 "hard" :boardsize "3x3"}
                                                          {:id 2 :screen "game" :p1 "ai" :p2 "ai" :diff1 "easy" :diff2 "hard" :boardsize "3x3"}]
                                                         [{:id 1 :gameid 2 :position 0 :player "X"}
                                                          {:id 2 :gameid 2 :position 1 :player "O"}
                                                          {:id 3 :gameid 2 :position 2 :player "X"}
                                                          {:id 4 :gameid 2 :position 3 :player "O"}
                                                          {:id 5 :gameid 2 :position 4 :player "X"}
                                                          {:id 6 :gameid 2 :position 5 :player "O"}
                                                          {:id 7 :gameid 2 :position 6 :player "X"}
                                                          {:id 8 :gameid 2 :position 7 :player "O"}
                                                          {:id 9 :gameid 2 :position 8 :player "X"}]))})]
        (should (db/previous-games? {:store :psql}))))

    (it "returns false if single game in progress"
      (with-redefs [jdbc/query (stub :query {:invoke (fn [_spec query-coll]
                                                       (if (str/includes? (first query-coll) "games")
                                                         [{:id 2 :screen "game" :p1 "ai" :p2 "ai" :diff1 "easy" :diff2 "hard" :boardsize "3x3"}]
                                                         [{:id 1 :gameid 2 :position 0 :player "X"}
                                                          {:id 2 :gameid 2 :position 1 :player "O"}
                                                          {:id 3 :gameid 2 :position 2 :player "X"}
                                                          {:id 4 :gameid 2 :position 3 :player "O"}
                                                          {:id 5 :gameid 2 :position 4 :player "X"}]))})]
        (should-not (db/previous-games? {:store :psql}))))
    )
  )
