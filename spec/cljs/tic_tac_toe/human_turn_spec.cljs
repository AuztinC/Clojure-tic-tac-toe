(ns tic-tac-toe.human-turn-spec
  (:require-macros [speclj.core :refer [should=
                                        it
                                        describe
                                        should-not]])
  (:require [speclj.core]
            [tic-tac-toe.gamec :as game]))

(describe "human turn cljs"
  (it "returns choice"
    (let [out (game/next-position {:board   (vec (repeat 9 [""]))
                                   :ui      :web-cljs
                                   :players [:human :ai]
                                   :choice  0
                                   :markers ["X" "O"]
                                   :turn    "p1"} ["X" :human])]
      (should= 0 out)))

  (it "handles bad input; removes choice"
    (let [out (game/next-position {:board   (vec (repeat 9 [""]))
                                   :ui      :web-cljs
                                   :players [:human :ai]
                                   :choice  10
                                   :markers ["X" "O"]
                                   :turn    "p1"} ["X" :human])
          expected-out {:board   (vec (repeat 9 [""]))
                        :ui      :web-cljs
                        :players [:human :ai]
                        :markers ["X" "O"]
                        :turn    "p1"}]
      (should-not out)
      (should-not (:choice expected-out)))))

