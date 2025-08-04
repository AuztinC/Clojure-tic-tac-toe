// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__8450__auto___19537 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19523_19538 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19524_19539 = description__8450__auto___19537;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19524_19539);

try{var seq__19525_19540 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__19523_19538,_STAR_parent_description_STAR__temp_val__19524_19539,description__8450__auto___19537){
return (function (it__8824__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__19533 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__19534 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__19534);

try{return it__8824__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__19533);
}});})(_STAR_parent_description_STAR__orig_val__19523_19538,_STAR_parent_description_STAR__temp_val__19524_19539,description__8450__auto___19537))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19523_19538,_STAR_parent_description_STAR__temp_val__19524_19539,description__8450__auto___19537){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__19523_19538,_STAR_parent_description_STAR__temp_val__19524_19539,description__8450__auto___19537))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__19523_19538,_STAR_parent_description_STAR__temp_val__19524_19539,description__8450__auto___19537){
return (function (it__8517__auto__){
var __GT_inspect_orig_val__19535 = tic_tac_toe.main.__GT_inspect;
var __GT_inspect_temp_val__19536 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"inspect","inspect",688794057),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.main.__GT_inspect = __GT_inspect_temp_val__19536);

try{return it__8517__auto__.call(null);
}finally {(tic_tac_toe.main.__GT_inspect = __GT_inspect_orig_val__19535);
}});})(_STAR_parent_description_STAR__orig_val__19523_19538,_STAR_parent_description_STAR__temp_val__19524_19539,description__8450__auto___19537))
)],null)));
var chunk__19526_19541 = null;
var count__19527_19542 = (0);
var i__19528_19543 = (0);
while(true){
if((i__19528_19543 < count__19527_19542)){
var component__8451__auto___19544 = cljs.core._nth.call(null,chunk__19526_19541,i__19528_19543);
speclj.components.install.call(null,component__8451__auto___19544,description__8450__auto___19537);


var G__19546 = seq__19525_19540;
var G__19547 = chunk__19526_19541;
var G__19548 = count__19527_19542;
var G__19549 = (i__19528_19543 + (1));
seq__19525_19540 = G__19546;
chunk__19526_19541 = G__19547;
count__19527_19542 = G__19548;
i__19528_19543 = G__19549;
continue;
} else {
var temp__5825__auto___19551 = cljs.core.seq.call(null,seq__19525_19540);
if(temp__5825__auto___19551){
var seq__19525_19552__$1 = temp__5825__auto___19551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19525_19552__$1)){
var c__5548__auto___19556 = cljs.core.chunk_first.call(null,seq__19525_19552__$1);
var G__19557 = cljs.core.chunk_rest.call(null,seq__19525_19552__$1);
var G__19558 = c__5548__auto___19556;
var G__19559 = cljs.core.count.call(null,c__5548__auto___19556);
var G__19560 = (0);
seq__19525_19540 = G__19557;
chunk__19526_19541 = G__19558;
count__19527_19542 = G__19559;
i__19528_19543 = G__19560;
continue;
} else {
var component__8451__auto___19561 = cljs.core.first.call(null,seq__19525_19552__$1);
speclj.components.install.call(null,component__8451__auto___19561,description__8450__auto___19537);


var G__19562 = cljs.core.next.call(null,seq__19525_19552__$1);
var G__19563 = null;
var G__19564 = (0);
var G__19565 = (0);
seq__19525_19540 = G__19562;
chunk__19526_19541 = G__19563;
count__19527_19542 = G__19564;
i__19528_19543 = G__19565;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19523_19538);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto___19537);
}


//# sourceMappingURL=main_spec.js.map
