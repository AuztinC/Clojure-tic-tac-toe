(ns tic-tac-toe.human-turn-spec
  (:require-macros [speclj.core :refer [should=
                                        it
                                        describe]])
  (:require [speclj.core]
            [tic-tac-toe.gamec :as game]))

(describe "human turn cljs"
  (it "invokes apply-next-move gui"
    (let [out (game/next-position {:board   (vec (repeat 9 [""]))
                                   :ui      :web-cljs
                                   :players [:human :ai]
                                   :choice  0
                                   :markers ["X" "O"]
                                   :turn    "p1"} ["X" :human])]
      (should= "p2" (:turn out))
      (should= [["X"] [""] [""] [""] [""] [""] [""] [""] [""]] (:board out)))))

