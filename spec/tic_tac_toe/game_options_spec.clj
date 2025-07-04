(ns tic-tac-toe.game-options-spec
  (:require [speclj.core :refer :all]
            [speclj.stub :as stub]
            [tic-tac-toe.game-options :as sut]
            [tic-tac-toe.game :as init]
            [tic-tac-toe.persistence :as db]
            [tic-tac-toe.printer :as printer]
            [tic-tac-toe.replay :as replay]))

(describe "game-options"
  (with-stubs)

  (context "select-game"
    (redefs-around [db/previous-games? (fn [_store] true)
                    init/init-game (stub :init-game {:return :init})])

    (it "prints game options"
      (with-redefs [read-line (fn [] "1")]
        (should-contain "Choose your game"
          (with-out-str (sut/select-game :mem)))))

    (it "game-mode retries for bad input"
      (with-redefs [sut/select-game (stub :select-game {:invoke sut/select-game})]
        (let [out (with-out-str (with-in-str "5\n1\n1\n1" (sut/select-game :mem)))]
          (should-contain "Not a game-mode, retry.\n" out)
          (should-have-invoked :select-game {:times 2}))))

    (it "selects human v ai"
      (with-out-str (with-in-str "1\n1\n1" (sut/select-game :mem)))
      (let [[{:keys [players]}] (stub/last-invocation-of :init-game)]
        (should= [:human :ai] players)
        (should-have-invoked :init-game)))

    (it "selects ai vs human"
      (with-out-str (with-in-str "2\n1\n1" (sut/select-game :mem)))
      (let [[{:keys [players]}] (stub/last-invocation-of :init-game)]
        (should= [:ai :human] players)
        (should-have-invoked :init-game)))

    (it "selects human v human"
      (with-out-str (with-in-str "3\n0\n1" (sut/select-game :mem)))
      (let [[{:keys [players]}] (stub/last-invocation-of :init-game)]
      (should-have-invoked :init-game)
      (should= [:human :human] players)))

  (it "selects ai v ai"
    (with-out-str (with-in-str "4\n1\n1\n3" (sut/select-game :mem)))
    (let [[{:keys [players]}] (stub/last-invocation-of :init-game)]
      (should-have-invoked :init-game)
      (should= [:ai :ai] players)))
  )

(context "selecting difficulty"
  (it "prints difficulty"
    (should-contain "Choose AI difficulties\n  1: Easy\n  2: Medium\n  3: Hard\n"
      (with-out-str (with-in-str "1\n" (sut/select-difficulty 1)))))

  (it "difficulty retries for bad input"
    (with-redefs [sut/select-difficulty (stub :select-difficulty {:invoke sut/select-difficulty})]
      (let [out1 (with-out-str (with-in-str "5\n1\n1" (sut/select-difficulty 1)))
            out2 (with-out-str (with-in-str "5\n1\n6\n2" (sut/select-difficulty 2)))]
        (should-contain "Not a difficulty, retry.\n" out1)
        (should-contain "Not a difficulty, retry.\n" out2))))

  (it "selects one difficulty for human vs ai"
    (with-out-str (should= [:easy] (with-in-str "1" (sut/select-difficulty 1)))))
  (it "selects two difficulty for ai vs ai"
    (with-out-str (should= [:easy :hard] (with-in-str "1\n3" (sut/select-difficulty 2)))))
  (it "empty for human vs human"
    (with-out-str (should= [] (with-in-str "1" (sut/select-difficulty 0)))))
  )
(context "select board size"
  (it "prints board options"
    (should= "Choose your board\n  1: 3x3\n  2: 4x4\n  3: 3x3x3\n" (with-out-str (printer/print-board-selection))))
  (it "can select both sizes"
    (with-out-str (should= :3x3 (with-in-str "1" (sut/select-board))))
    (with-out-str (should= :4x4 (with-in-str "2" (sut/select-board)))))
  (it "retry for bad input"
    (with-redefs [sut/select-board (stub :select-board {:invoke sut/select-board})]
      (let [out (with-out-str (with-in-str "5\n1" (sut/select-board)))]
        (should-contain "Oops, try again." out)
        (should-have-invoked :select-board {:times 2})))))

(context "replay a game"
  (redefs-around [db/previous-games? (fn [_store] true)])
  (it "prints option to replay with ID"
    (with-redefs [sut/dispatch-id (stub :dispatch-id)]
      (let [out (with-out-str (with-in-str "1" (sut/watch-replay? :mem)))]
        (should-contain "Would you like to watch a replay?
  You'll need a match ID.
  1: Yes
  2: No\n" out))))

  (it "asks for ID to invoke unpack-game with"
    (with-redefs [sut/dispatch-id (fn [_store]
                                    (println "Please enter your game ID: ")
                                    (let [id-str (read-line)
                                          id (Integer/parseInt id-str)]
                                      (db/find-game-by-id id)))
                  db/find-game-by-id (stub :unpack-game)]
      (should-contain "Please enter your game ID: "
        (with-out-str (with-in-str "1\n1" (sut/watch-replay? :mem))))
      (should-have-invoked :unpack-game {:with [1]})))

  (it "load-game for 2"
    (with-redefs [sut/load-game (stub :load-game)]
      (with-out-str (with-in-str "2" (sut/watch-replay? :mem)))
      (should-have-invoked :load-game)))

  (it "retry replay for bad input"
    (with-redefs [sut/dispatch-id (stub :dispatch-id)
                  sut/watch-replay? (stub :watch-replay? {:invoke sut/watch-replay?})
                  ]
      (let [out (with-out-str (with-in-str "W\n1\n1" (sut/watch-replay? :mem)))]
        (should-contain "Bad input" out)
        (should-have-invoked :watch-replay? {:times 2}))))
  )
)