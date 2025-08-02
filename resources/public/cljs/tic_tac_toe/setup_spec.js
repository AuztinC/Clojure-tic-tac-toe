// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.html');
goog.require('tic_tac_toe.setup');
goog.require('tic_tac_toe.main');
var description__10102__auto___14276 = speclj.components.new_description.call(null,"game setup",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__14241_14277 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14243_14278 = description__10102__auto___14276;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14243_14278);

try{var seq__14248_14279 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"select-difficulty",((function (_STAR_parent_description_STAR__orig_val__14241_14277,_STAR_parent_description_STAR__temp_val__14243_14278,description__10102__auto___14276){
return (function (){
var state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"human","human",-772334390)], null)], null);
return null;
});})(_STAR_parent_description_STAR__orig_val__14241_14277,_STAR_parent_description_STAR__temp_val__14243_14278,description__10102__auto___14276))
,false)],null)));
var chunk__14252_14280 = null;
var count__14253_14281 = (0);
var i__14254_14282 = (0);
while(true){
if((i__14254_14282 < count__14253_14281)){
var component__10103__auto___14283 = cljs.core._nth.call(null,chunk__14252_14280,i__14254_14282);
speclj.components.install.call(null,component__10103__auto___14283,description__10102__auto___14276);


var G__14284 = seq__14248_14279;
var G__14285 = chunk__14252_14280;
var G__14286 = count__14253_14281;
var G__14287 = (i__14254_14282 + (1));
seq__14248_14279 = G__14284;
chunk__14252_14280 = G__14285;
count__14253_14281 = G__14286;
i__14254_14282 = G__14287;
continue;
} else {
var temp__5825__auto___14288 = cljs.core.seq.call(null,seq__14248_14279);
if(temp__5825__auto___14288){
var seq__14248_14289__$1 = temp__5825__auto___14288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14248_14289__$1)){
var c__5548__auto___14290 = cljs.core.chunk_first.call(null,seq__14248_14289__$1);
var G__14291 = cljs.core.chunk_rest.call(null,seq__14248_14289__$1);
var G__14292 = c__5548__auto___14290;
var G__14293 = cljs.core.count.call(null,c__5548__auto___14290);
var G__14294 = (0);
seq__14248_14279 = G__14291;
chunk__14252_14280 = G__14292;
count__14253_14281 = G__14293;
i__14254_14282 = G__14294;
continue;
} else {
var component__10103__auto___14297 = cljs.core.first.call(null,seq__14248_14289__$1);
speclj.components.install.call(null,component__10103__auto___14297,description__10102__auto___14276);


var G__14298 = cljs.core.next.call(null,seq__14248_14289__$1);
var G__14299 = null;
var G__14300 = (0);
var G__14301 = (0);
seq__14248_14279 = G__14298;
chunk__14252_14280 = G__14299;
count__14253_14281 = G__14300;
i__14254_14282 = G__14301;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14241_14277);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10102__auto___14276);
}


//# sourceMappingURL=setup_spec.js.map
