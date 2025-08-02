// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__10055__auto___14778 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__14742_14779 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14743_14780 = description__10055__auto___14778;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14743_14780);

try{var seq__14744_14781 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__14742_14779,_STAR_parent_description_STAR__temp_val__14743_14780,description__10055__auto___14778){
return (function (it__10429__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__14768 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__14769 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__14769);

try{return it__10429__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__14768);
}});})(_STAR_parent_description_STAR__orig_val__14742_14779,_STAR_parent_description_STAR__temp_val__14743_14780,description__10055__auto___14778))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__14742_14779,_STAR_parent_description_STAR__temp_val__14743_14780,description__10055__auto___14778){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__14742_14779,_STAR_parent_description_STAR__temp_val__14743_14780,description__10055__auto___14778))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__14742_14779,_STAR_parent_description_STAR__temp_val__14743_14780,description__10055__auto___14778){
return (function (it__10122__auto__){
var __GT_inspect_orig_val__14776 = tic_tac_toe.main.__GT_inspect;
var __GT_inspect_temp_val__14777 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"inspect","inspect",688794057),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.main.__GT_inspect = __GT_inspect_temp_val__14777);

try{return it__10122__auto__.call(null);
}finally {(tic_tac_toe.main.__GT_inspect = __GT_inspect_orig_val__14776);
}});})(_STAR_parent_description_STAR__orig_val__14742_14779,_STAR_parent_description_STAR__temp_val__14743_14780,description__10055__auto___14778))
),speclj.components.new_characteristic.call(null,"game container",((function (_STAR_parent_description_STAR__orig_val__14742_14779,_STAR_parent_description_STAR__temp_val__14743_14780,description__10055__auto___14778){
return (function (){
var value__10559__auto___14785 = "#main-container";
var node__10560__auto___14786 = c3kit.wire.spec_helper.select.call(null,value__10559__auto___14785);
if(cljs.core.truth_(node__10560__auto___14786)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10559__auto___14785;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto__ = "Welcome to Tic Tac Toe!";
var actual__10198__auto__ = c3kit.wire.spec_helper.text.call(null,"#title");
if(cljs.core._EQ_.call(null,expected__10197__auto__,actual__10198__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__14742_14779,_STAR_parent_description_STAR__temp_val__14743_14780,description__10055__auto___14778))
,false)],null)));
var chunk__14745_14782 = null;
var count__14746_14783 = (0);
var i__14747_14784 = (0);
while(true){
if((i__14747_14784 < count__14746_14783)){
var component__10056__auto___14787 = cljs.core._nth.call(null,chunk__14745_14782,i__14747_14784);
speclj.components.install.call(null,component__10056__auto___14787,description__10055__auto___14778);


var G__14788 = seq__14744_14781;
var G__14789 = chunk__14745_14782;
var G__14790 = count__14746_14783;
var G__14791 = (i__14747_14784 + (1));
seq__14744_14781 = G__14788;
chunk__14745_14782 = G__14789;
count__14746_14783 = G__14790;
i__14747_14784 = G__14791;
continue;
} else {
var temp__5825__auto___14792 = cljs.core.seq.call(null,seq__14744_14781);
if(temp__5825__auto___14792){
var seq__14744_14793__$1 = temp__5825__auto___14792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14744_14793__$1)){
var c__5548__auto___14794 = cljs.core.chunk_first.call(null,seq__14744_14793__$1);
var G__14795 = cljs.core.chunk_rest.call(null,seq__14744_14793__$1);
var G__14796 = c__5548__auto___14794;
var G__14797 = cljs.core.count.call(null,c__5548__auto___14794);
var G__14798 = (0);
seq__14744_14781 = G__14795;
chunk__14745_14782 = G__14796;
count__14746_14783 = G__14797;
i__14747_14784 = G__14798;
continue;
} else {
var component__10056__auto___14799 = cljs.core.first.call(null,seq__14744_14793__$1);
speclj.components.install.call(null,component__10056__auto___14799,description__10055__auto___14778);


var G__14800 = cljs.core.next.call(null,seq__14744_14793__$1);
var G__14801 = null;
var G__14802 = (0);
var G__14803 = (0);
seq__14744_14781 = G__14800;
chunk__14745_14782 = G__14801;
count__14746_14783 = G__14802;
i__14747_14784 = G__14803;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14742_14779);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10055__auto___14778);
}


//# sourceMappingURL=main_spec.js.map
