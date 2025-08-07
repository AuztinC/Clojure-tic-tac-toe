(ns tic-tac-toe.setupc)

;(instance? clojure.lang.IAtom n)
(defmulti select-difficulty!
  (fn [state _choice]
    (let [actual-state (if (satisfies? IDeref state) @state state)]
      (:ui actual-state))))