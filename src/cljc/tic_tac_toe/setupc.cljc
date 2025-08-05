(ns tic-tac-toe.setupc)


(defmulti select-difficulty! (fn [state _choice]
                               (let [actual-state (if (satisfies? IDeref state) @state state)]
                                 (:ui actual-state))))

