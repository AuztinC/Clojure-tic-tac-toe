// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.setup');
var description__10066__auto___23278 = speclj.components.new_description.call(null,"game setup",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__23256_23279 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__23257_23280 = description__10066__auto___23278;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__23257_23280);

try{var seq__23258_23281 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__23256_23279,_STAR_parent_description_STAR__temp_val__23257_23280,description__10066__auto___23278){
return (function (it__10440__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__23270 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__23271 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__23271);

try{return it__10440__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__23270);
}});})(_STAR_parent_description_STAR__orig_val__23256_23279,_STAR_parent_description_STAR__temp_val__23257_23280,description__10066__auto___23278))
),(function (){var description__10066__auto____$1 = speclj.components.new_description.call(null,"select-difficulty correct count and switch to game",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__23272_23285 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__23273_23286 = description__10066__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__23273_23286);

try{var seq__23274_23287 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"single difficulty 1 time",((function (_STAR_parent_description_STAR__orig_val__23272_23285,_STAR_parent_description_STAR__temp_val__23273_23286,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__23256_23279,_STAR_parent_description_STAR__temp_val__23257_23280,description__10066__auto___23278){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"human","human",-772334390)], null)], null));

var out = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"easy","easy",315769928));
speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___23291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__10209__auto___23292 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10208__auto___23291,actual__10209__auto___23292)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___23291;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___23292;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__10209__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10208__auto__,actual__10209__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__23272_23285,_STAR_parent_description_STAR__temp_val__23273_23286,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__23256_23279,_STAR_parent_description_STAR__temp_val__23257_23280,description__10066__auto___23278))
,false),speclj.components.new_characteristic.call(null,"two difficulty ",((function (_STAR_parent_description_STAR__orig_val__23272_23285,_STAR_parent_description_STAR__temp_val__23273_23286,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__23256_23279,_STAR_parent_description_STAR__temp_val__23257_23280,description__10066__auto___23278){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var out1 = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"easy","easy",315769928));
var out2 = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"hard","hard",2068420191));
speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___23293 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__10209__auto___23294 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__10208__auto___23293,actual__10209__auto___23294)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___23293;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___23294;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___23295 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10209__auto___23296 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__10208__auto___23295,actual__10209__auto___23296)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___23295;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___23296;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___23297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null);
var actual__10209__auto___23298 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out2);
if(cljs.core._EQ_.call(null,expected__10208__auto___23297,actual__10209__auto___23298)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___23297;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___23298;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__10209__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out2);
if(cljs.core._EQ_.call(null,expected__10208__auto__,actual__10209__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__23272_23285,_STAR_parent_description_STAR__temp_val__23273_23286,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__23256_23279,_STAR_parent_description_STAR__temp_val__23257_23280,description__10066__auto___23278))
,false)],null)));
var chunk__23275_23288 = null;
var count__23276_23289 = (0);
var i__23277_23290 = (0);
while(true){
if((i__23277_23290 < count__23276_23289)){
var component__10067__auto___23299 = cljs.core._nth.call(null,chunk__23275_23288,i__23277_23290);
speclj.components.install.call(null,component__10067__auto___23299,description__10066__auto____$1);


var G__23300 = seq__23274_23287;
var G__23301 = chunk__23275_23288;
var G__23302 = count__23276_23289;
var G__23303 = (i__23277_23290 + (1));
seq__23274_23287 = G__23300;
chunk__23275_23288 = G__23301;
count__23276_23289 = G__23302;
i__23277_23290 = G__23303;
continue;
} else {
var temp__5825__auto___23304 = cljs.core.seq.call(null,seq__23274_23287);
if(temp__5825__auto___23304){
var seq__23274_23305__$1 = temp__5825__auto___23304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23274_23305__$1)){
var c__5548__auto___23306 = cljs.core.chunk_first.call(null,seq__23274_23305__$1);
var G__23307 = cljs.core.chunk_rest.call(null,seq__23274_23305__$1);
var G__23308 = c__5548__auto___23306;
var G__23309 = cljs.core.count.call(null,c__5548__auto___23306);
var G__23310 = (0);
seq__23274_23287 = G__23307;
chunk__23275_23288 = G__23308;
count__23276_23289 = G__23309;
i__23277_23290 = G__23310;
continue;
} else {
var component__10067__auto___23311 = cljs.core.first.call(null,seq__23274_23305__$1);
speclj.components.install.call(null,component__10067__auto___23311,description__10066__auto____$1);


var G__23312 = cljs.core.next.call(null,seq__23274_23305__$1);
var G__23313 = null;
var G__23314 = (0);
var G__23315 = (0);
seq__23274_23287 = G__23312;
chunk__23275_23288 = G__23313;
count__23276_23289 = G__23314;
i__23277_23290 = G__23315;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__23272_23285);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10066__auto____$1);
}

return description__10066__auto____$1;
})()],null)));
var chunk__23259_23282 = null;
var count__23260_23283 = (0);
var i__23261_23284 = (0);
while(true){
if((i__23261_23284 < count__23260_23283)){
var component__10067__auto___23316 = cljs.core._nth.call(null,chunk__23259_23282,i__23261_23284);
speclj.components.install.call(null,component__10067__auto___23316,description__10066__auto___23278);


var G__23317 = seq__23258_23281;
var G__23318 = chunk__23259_23282;
var G__23319 = count__23260_23283;
var G__23320 = (i__23261_23284 + (1));
seq__23258_23281 = G__23317;
chunk__23259_23282 = G__23318;
count__23260_23283 = G__23319;
i__23261_23284 = G__23320;
continue;
} else {
var temp__5825__auto___23321 = cljs.core.seq.call(null,seq__23258_23281);
if(temp__5825__auto___23321){
var seq__23258_23322__$1 = temp__5825__auto___23321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23258_23322__$1)){
var c__5548__auto___23323 = cljs.core.chunk_first.call(null,seq__23258_23322__$1);
var G__23324 = cljs.core.chunk_rest.call(null,seq__23258_23322__$1);
var G__23325 = c__5548__auto___23323;
var G__23326 = cljs.core.count.call(null,c__5548__auto___23323);
var G__23327 = (0);
seq__23258_23281 = G__23324;
chunk__23259_23282 = G__23325;
count__23260_23283 = G__23326;
i__23261_23284 = G__23327;
continue;
} else {
var component__10067__auto___23328 = cljs.core.first.call(null,seq__23258_23322__$1);
speclj.components.install.call(null,component__10067__auto___23328,description__10066__auto___23278);


var G__23329 = cljs.core.next.call(null,seq__23258_23322__$1);
var G__23330 = null;
var G__23331 = (0);
var G__23332 = (0);
seq__23258_23281 = G__23329;
chunk__23259_23282 = G__23330;
count__23260_23283 = G__23331;
i__23261_23284 = G__23332;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__23256_23279);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10066__auto___23278);
}


//# sourceMappingURL=setup_spec.js.map
