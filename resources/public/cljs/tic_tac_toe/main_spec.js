// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__10102__auto___14304 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__14240_14305 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14242_14306 = description__10102__auto___14304;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14242_14306);

try{var seq__14246_14307 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__14240_14305,_STAR_parent_description_STAR__temp_val__14242_14306,description__10102__auto___14304){
return (function (it__10476__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__14295 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__14296 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__14296);

try{return it__10476__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__14295);
}});})(_STAR_parent_description_STAR__orig_val__14240_14305,_STAR_parent_description_STAR__temp_val__14242_14306,description__10102__auto___14304))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__14240_14305,_STAR_parent_description_STAR__temp_val__14242_14306,description__10102__auto___14304){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__14240_14305,_STAR_parent_description_STAR__temp_val__14242_14306,description__10102__auto___14304))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__14240_14305,_STAR_parent_description_STAR__temp_val__14242_14306,description__10102__auto___14304){
return (function (it__10169__auto__){
var __GT_inspect_orig_val__14302 = tic_tac_toe.main.__GT_inspect;
var __GT_inspect_temp_val__14303 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"inspect","inspect",688794057),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.main.__GT_inspect = __GT_inspect_temp_val__14303);

try{return it__10169__auto__.call(null);
}finally {(tic_tac_toe.main.__GT_inspect = __GT_inspect_orig_val__14302);
}});})(_STAR_parent_description_STAR__orig_val__14240_14305,_STAR_parent_description_STAR__temp_val__14242_14306,description__10102__auto___14304))
),speclj.components.new_characteristic.call(null,"game container",((function (_STAR_parent_description_STAR__orig_val__14240_14305,_STAR_parent_description_STAR__temp_val__14242_14306,description__10102__auto___14304){
return (function (){
var value__10606__auto___14311 = "#main-container";
var node__10607__auto___14312 = c3kit.wire.spec_helper.select.call(null,value__10606__auto___14311);
if(cljs.core.truth_(node__10607__auto___14312)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10606__auto___14311;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto__ = "Welcome to Tic Tac Toe!";
var actual__10245__auto__ = c3kit.wire.spec_helper.text.call(null,"#title");
if(cljs.core._EQ_.call(null,expected__10244__auto__,actual__10245__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__14240_14305,_STAR_parent_description_STAR__temp_val__14242_14306,description__10102__auto___14304))
,false)],null)));
var chunk__14249_14308 = null;
var count__14250_14309 = (0);
var i__14251_14310 = (0);
while(true){
if((i__14251_14310 < count__14250_14309)){
var component__10103__auto___14313 = cljs.core._nth.call(null,chunk__14249_14308,i__14251_14310);
speclj.components.install.call(null,component__10103__auto___14313,description__10102__auto___14304);


var G__14314 = seq__14246_14307;
var G__14315 = chunk__14249_14308;
var G__14316 = count__14250_14309;
var G__14317 = (i__14251_14310 + (1));
seq__14246_14307 = G__14314;
chunk__14249_14308 = G__14315;
count__14250_14309 = G__14316;
i__14251_14310 = G__14317;
continue;
} else {
var temp__5825__auto___14318 = cljs.core.seq.call(null,seq__14246_14307);
if(temp__5825__auto___14318){
var seq__14246_14319__$1 = temp__5825__auto___14318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14246_14319__$1)){
var c__5548__auto___14320 = cljs.core.chunk_first.call(null,seq__14246_14319__$1);
var G__14321 = cljs.core.chunk_rest.call(null,seq__14246_14319__$1);
var G__14322 = c__5548__auto___14320;
var G__14323 = cljs.core.count.call(null,c__5548__auto___14320);
var G__14324 = (0);
seq__14246_14307 = G__14321;
chunk__14249_14308 = G__14322;
count__14250_14309 = G__14323;
i__14251_14310 = G__14324;
continue;
} else {
var component__10103__auto___14325 = cljs.core.first.call(null,seq__14246_14319__$1);
speclj.components.install.call(null,component__10103__auto___14325,description__10102__auto___14304);


var G__14326 = cljs.core.next.call(null,seq__14246_14319__$1);
var G__14327 = null;
var G__14328 = (0);
var G__14329 = (0);
seq__14246_14307 = G__14326;
chunk__14249_14308 = G__14327;
count__14250_14309 = G__14328;
i__14251_14310 = G__14329;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14240_14305);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10102__auto___14304);
}


//# sourceMappingURL=main_spec.js.map
