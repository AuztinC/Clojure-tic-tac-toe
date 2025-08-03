// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__10061__auto___17179 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__17153_17180 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__17154_17181 = description__10061__auto___17179;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__17154_17181);

try{var seq__17155_17182 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__17153_17180,_STAR_parent_description_STAR__temp_val__17154_17181,description__10061__auto___17179){
return (function (it__10435__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__17175 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__17176 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__17176);

try{return it__10435__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__17175);
}});})(_STAR_parent_description_STAR__orig_val__17153_17180,_STAR_parent_description_STAR__temp_val__17154_17181,description__10061__auto___17179))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__17153_17180,_STAR_parent_description_STAR__temp_val__17154_17181,description__10061__auto___17179){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__17153_17180,_STAR_parent_description_STAR__temp_val__17154_17181,description__10061__auto___17179))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__17153_17180,_STAR_parent_description_STAR__temp_val__17154_17181,description__10061__auto___17179){
return (function (it__10128__auto__){
var __GT_inspect_orig_val__17177 = tic_tac_toe.main.__GT_inspect;
var __GT_inspect_temp_val__17178 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"inspect","inspect",688794057),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.main.__GT_inspect = __GT_inspect_temp_val__17178);

try{return it__10128__auto__.call(null);
}finally {(tic_tac_toe.main.__GT_inspect = __GT_inspect_orig_val__17177);
}});})(_STAR_parent_description_STAR__orig_val__17153_17180,_STAR_parent_description_STAR__temp_val__17154_17181,description__10061__auto___17179))
),speclj.components.new_characteristic.call(null,"game container",((function (_STAR_parent_description_STAR__orig_val__17153_17180,_STAR_parent_description_STAR__temp_val__17154_17181,description__10061__auto___17179){
return (function (){
var value__10565__auto__ = "#main-container";
var node__10566__auto__ = c3kit.wire.spec_helper.select.call(null,value__10565__auto__);
if(cljs.core.truth_(node__10566__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10565__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__17153_17180,_STAR_parent_description_STAR__temp_val__17154_17181,description__10061__auto___17179))
,false)],null)));
var chunk__17156_17183 = null;
var count__17157_17184 = (0);
var i__17158_17185 = (0);
while(true){
if((i__17158_17185 < count__17157_17184)){
var component__10062__auto___17186 = cljs.core._nth.call(null,chunk__17156_17183,i__17158_17185);
speclj.components.install.call(null,component__10062__auto___17186,description__10061__auto___17179);


var G__17187 = seq__17155_17182;
var G__17188 = chunk__17156_17183;
var G__17189 = count__17157_17184;
var G__17190 = (i__17158_17185 + (1));
seq__17155_17182 = G__17187;
chunk__17156_17183 = G__17188;
count__17157_17184 = G__17189;
i__17158_17185 = G__17190;
continue;
} else {
var temp__5825__auto___17191 = cljs.core.seq.call(null,seq__17155_17182);
if(temp__5825__auto___17191){
var seq__17155_17192__$1 = temp__5825__auto___17191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17155_17192__$1)){
var c__5548__auto___17193 = cljs.core.chunk_first.call(null,seq__17155_17192__$1);
var G__17194 = cljs.core.chunk_rest.call(null,seq__17155_17192__$1);
var G__17195 = c__5548__auto___17193;
var G__17196 = cljs.core.count.call(null,c__5548__auto___17193);
var G__17197 = (0);
seq__17155_17182 = G__17194;
chunk__17156_17183 = G__17195;
count__17157_17184 = G__17196;
i__17158_17185 = G__17197;
continue;
} else {
var component__10062__auto___17198 = cljs.core.first.call(null,seq__17155_17192__$1);
speclj.components.install.call(null,component__10062__auto___17198,description__10061__auto___17179);


var G__17199 = cljs.core.next.call(null,seq__17155_17192__$1);
var G__17200 = null;
var G__17201 = (0);
var G__17202 = (0);
seq__17155_17182 = G__17199;
chunk__17156_17183 = G__17200;
count__17157_17184 = G__17201;
i__17158_17185 = G__17202;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__17153_17180);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto___17179);
}


//# sourceMappingURL=main_spec.js.map
