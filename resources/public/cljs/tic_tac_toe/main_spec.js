// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__18609__auto___22364 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__22350_22365 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22351_22366 = description__18609__auto___22364;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22351_22366);

try{var seq__22352_22367 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__22350_22365,_STAR_parent_description_STAR__temp_val__22351_22366,description__18609__auto___22364){
return (function (it__18983__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__22360 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__22361 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__22361);

try{return it__18983__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__22360);
}});})(_STAR_parent_description_STAR__orig_val__22350_22365,_STAR_parent_description_STAR__temp_val__22351_22366,description__18609__auto___22364))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__22350_22365,_STAR_parent_description_STAR__temp_val__22351_22366,description__18609__auto___22364){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__22350_22365,_STAR_parent_description_STAR__temp_val__22351_22366,description__18609__auto___22364))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__22350_22365,_STAR_parent_description_STAR__temp_val__22351_22366,description__18609__auto___22364){
return (function (it__18676__auto__){
var __GT_inspect_orig_val__22362 = tic_tac_toe.main.__GT_inspect;
var __GT_inspect_temp_val__22363 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"inspect","inspect",688794057),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.main.__GT_inspect = __GT_inspect_temp_val__22363);

try{return it__18676__auto__.call(null);
}finally {(tic_tac_toe.main.__GT_inspect = __GT_inspect_orig_val__22362);
}});})(_STAR_parent_description_STAR__orig_val__22350_22365,_STAR_parent_description_STAR__temp_val__22351_22366,description__18609__auto___22364))
)],null)));
var chunk__22353_22368 = null;
var count__22354_22369 = (0);
var i__22355_22370 = (0);
while(true){
if((i__22355_22370 < count__22354_22369)){
var component__18610__auto___22371 = cljs.core._nth.call(null,chunk__22353_22368,i__22355_22370);
speclj.components.install.call(null,component__18610__auto___22371,description__18609__auto___22364);


var G__22372 = seq__22352_22367;
var G__22373 = chunk__22353_22368;
var G__22374 = count__22354_22369;
var G__22375 = (i__22355_22370 + (1));
seq__22352_22367 = G__22372;
chunk__22353_22368 = G__22373;
count__22354_22369 = G__22374;
i__22355_22370 = G__22375;
continue;
} else {
var temp__5825__auto___22376 = cljs.core.seq.call(null,seq__22352_22367);
if(temp__5825__auto___22376){
var seq__22352_22377__$1 = temp__5825__auto___22376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22352_22377__$1)){
var c__5548__auto___22378 = cljs.core.chunk_first.call(null,seq__22352_22377__$1);
var G__22379 = cljs.core.chunk_rest.call(null,seq__22352_22377__$1);
var G__22380 = c__5548__auto___22378;
var G__22381 = cljs.core.count.call(null,c__5548__auto___22378);
var G__22382 = (0);
seq__22352_22367 = G__22379;
chunk__22353_22368 = G__22380;
count__22354_22369 = G__22381;
i__22355_22370 = G__22382;
continue;
} else {
var component__18610__auto___22383 = cljs.core.first.call(null,seq__22352_22377__$1);
speclj.components.install.call(null,component__18610__auto___22383,description__18609__auto___22364);


var G__22384 = cljs.core.next.call(null,seq__22352_22377__$1);
var G__22385 = null;
var G__22386 = (0);
var G__22387 = (0);
seq__22352_22367 = G__22384;
chunk__22353_22368 = G__22385;
count__22354_22369 = G__22386;
i__22355_22370 = G__22387;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22350_22365);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18609__auto___22364);
}


//# sourceMappingURL=main_spec.js.map
