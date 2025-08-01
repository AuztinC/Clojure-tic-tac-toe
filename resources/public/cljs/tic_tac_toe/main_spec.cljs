(ns tic-tac-toe.main-spec
  (:require-macros [speclj.core :refer [should= it describe before]]
                   [c3kit.wire.spec-helperc :refer [should-select]])
  (:require [speclj.core]
            [c3kit.wire.spec-helper :as wire]
            [tic-tac-toe.main :as sut]))

(describe "main"
  (wire/with-root-dom)
  (before (wire/render [sut/app]))

  (it "game container"
    (should-select "#bob")
    (should= "file:///" (wire/href "#bob a"))))