// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__18610__auto___19620 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19606_19621 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19607_19622 = description__18610__auto___19620;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19607_19622);

try{var seq__19608_19623 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__19606_19621,_STAR_parent_description_STAR__temp_val__19607_19622,description__18610__auto___19620){
return (function (it__18984__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__19616 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__19617 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__19617);

try{return it__18984__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__19616);
}});})(_STAR_parent_description_STAR__orig_val__19606_19621,_STAR_parent_description_STAR__temp_val__19607_19622,description__18610__auto___19620))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19606_19621,_STAR_parent_description_STAR__temp_val__19607_19622,description__18610__auto___19620){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__19606_19621,_STAR_parent_description_STAR__temp_val__19607_19622,description__18610__auto___19620))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__19606_19621,_STAR_parent_description_STAR__temp_val__19607_19622,description__18610__auto___19620){
return (function (it__18677__auto__){
var __GT_inspect_orig_val__19618 = tic_tac_toe.main.__GT_inspect;
var __GT_inspect_temp_val__19619 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"inspect","inspect",688794057),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.main.__GT_inspect = __GT_inspect_temp_val__19619);

try{return it__18677__auto__.call(null);
}finally {(tic_tac_toe.main.__GT_inspect = __GT_inspect_orig_val__19618);
}});})(_STAR_parent_description_STAR__orig_val__19606_19621,_STAR_parent_description_STAR__temp_val__19607_19622,description__18610__auto___19620))
),speclj.components.new_characteristic.call(null,"game container",((function (_STAR_parent_description_STAR__orig_val__19606_19621,_STAR_parent_description_STAR__temp_val__19607_19622,description__18610__auto___19620){
return (function (){
var value__19114__auto__ = "#main-container";
var node__19115__auto__ = c3kit.wire.spec_helper.select.call(null,value__19114__auto__);
if(cljs.core.truth_(node__19115__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19114__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19606_19621,_STAR_parent_description_STAR__temp_val__19607_19622,description__18610__auto___19620))
,false)],null)));
var chunk__19609_19624 = null;
var count__19610_19625 = (0);
var i__19611_19626 = (0);
while(true){
if((i__19611_19626 < count__19610_19625)){
var component__18611__auto___19627 = cljs.core._nth.call(null,chunk__19609_19624,i__19611_19626);
speclj.components.install.call(null,component__18611__auto___19627,description__18610__auto___19620);


var G__19628 = seq__19608_19623;
var G__19629 = chunk__19609_19624;
var G__19630 = count__19610_19625;
var G__19631 = (i__19611_19626 + (1));
seq__19608_19623 = G__19628;
chunk__19609_19624 = G__19629;
count__19610_19625 = G__19630;
i__19611_19626 = G__19631;
continue;
} else {
var temp__5825__auto___19632 = cljs.core.seq.call(null,seq__19608_19623);
if(temp__5825__auto___19632){
var seq__19608_19633__$1 = temp__5825__auto___19632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19608_19633__$1)){
var c__5548__auto___19634 = cljs.core.chunk_first.call(null,seq__19608_19633__$1);
var G__19635 = cljs.core.chunk_rest.call(null,seq__19608_19633__$1);
var G__19636 = c__5548__auto___19634;
var G__19637 = cljs.core.count.call(null,c__5548__auto___19634);
var G__19638 = (0);
seq__19608_19623 = G__19635;
chunk__19609_19624 = G__19636;
count__19610_19625 = G__19637;
i__19611_19626 = G__19638;
continue;
} else {
var component__18611__auto___19640 = cljs.core.first.call(null,seq__19608_19633__$1);
speclj.components.install.call(null,component__18611__auto___19640,description__18610__auto___19620);


var G__19642 = cljs.core.next.call(null,seq__19608_19633__$1);
var G__19643 = null;
var G__19644 = (0);
var G__19645 = (0);
seq__19608_19623 = G__19642;
chunk__19609_19624 = G__19643;
count__19610_19625 = G__19644;
i__19611_19626 = G__19645;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19606_19621);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18610__auto___19620);
}


//# sourceMappingURL=main_spec.js.map
