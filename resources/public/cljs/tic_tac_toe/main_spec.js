// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__10066__auto___24723 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__24697_24724 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__24698_24725 = description__10066__auto___24723;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__24698_24725);

try{var seq__24699_24726 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__24697_24724,_STAR_parent_description_STAR__temp_val__24698_24725,description__10066__auto___24723){
return (function (it__10440__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__24719 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__24720 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__24720);

try{return it__10440__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__24719);
}});})(_STAR_parent_description_STAR__orig_val__24697_24724,_STAR_parent_description_STAR__temp_val__24698_24725,description__10066__auto___24723))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__24697_24724,_STAR_parent_description_STAR__temp_val__24698_24725,description__10066__auto___24723){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__24697_24724,_STAR_parent_description_STAR__temp_val__24698_24725,description__10066__auto___24723))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__24697_24724,_STAR_parent_description_STAR__temp_val__24698_24725,description__10066__auto___24723){
return (function (it__10133__auto__){
var __GT_inspect_orig_val__24721 = tic_tac_toe.main.__GT_inspect;
var __GT_inspect_temp_val__24722 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"inspect","inspect",688794057),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.main.__GT_inspect = __GT_inspect_temp_val__24722);

try{return it__10133__auto__.call(null);
}finally {(tic_tac_toe.main.__GT_inspect = __GT_inspect_orig_val__24721);
}});})(_STAR_parent_description_STAR__orig_val__24697_24724,_STAR_parent_description_STAR__temp_val__24698_24725,description__10066__auto___24723))
),speclj.components.new_characteristic.call(null,"game container",((function (_STAR_parent_description_STAR__orig_val__24697_24724,_STAR_parent_description_STAR__temp_val__24698_24725,description__10066__auto___24723){
return (function (){
var value__10570__auto__ = "#main-container";
var node__10571__auto__ = c3kit.wire.spec_helper.select.call(null,value__10570__auto__);
if(cljs.core.truth_(node__10571__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10570__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__24697_24724,_STAR_parent_description_STAR__temp_val__24698_24725,description__10066__auto___24723))
,false)],null)));
var chunk__24700_24727 = null;
var count__24701_24728 = (0);
var i__24702_24729 = (0);
while(true){
if((i__24702_24729 < count__24701_24728)){
var component__10067__auto___24730 = cljs.core._nth.call(null,chunk__24700_24727,i__24702_24729);
speclj.components.install.call(null,component__10067__auto___24730,description__10066__auto___24723);


var G__24731 = seq__24699_24726;
var G__24732 = chunk__24700_24727;
var G__24733 = count__24701_24728;
var G__24734 = (i__24702_24729 + (1));
seq__24699_24726 = G__24731;
chunk__24700_24727 = G__24732;
count__24701_24728 = G__24733;
i__24702_24729 = G__24734;
continue;
} else {
var temp__5825__auto___24735 = cljs.core.seq.call(null,seq__24699_24726);
if(temp__5825__auto___24735){
var seq__24699_24736__$1 = temp__5825__auto___24735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24699_24736__$1)){
var c__5548__auto___24737 = cljs.core.chunk_first.call(null,seq__24699_24736__$1);
var G__24738 = cljs.core.chunk_rest.call(null,seq__24699_24736__$1);
var G__24739 = c__5548__auto___24737;
var G__24740 = cljs.core.count.call(null,c__5548__auto___24737);
var G__24741 = (0);
seq__24699_24726 = G__24738;
chunk__24700_24727 = G__24739;
count__24701_24728 = G__24740;
i__24702_24729 = G__24741;
continue;
} else {
var component__10067__auto___24742 = cljs.core.first.call(null,seq__24699_24736__$1);
speclj.components.install.call(null,component__10067__auto___24742,description__10066__auto___24723);


var G__24743 = cljs.core.next.call(null,seq__24699_24736__$1);
var G__24744 = null;
var G__24745 = (0);
var G__24746 = (0);
seq__24699_24726 = G__24743;
chunk__24700_24727 = G__24744;
count__24701_24728 = G__24745;
i__24702_24729 = G__24746;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__24697_24724);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10066__auto___24723);
}


//# sourceMappingURL=main_spec.js.map
