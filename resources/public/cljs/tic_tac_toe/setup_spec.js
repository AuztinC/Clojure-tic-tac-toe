// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.setup');
var description__18609__auto___22268 = speclj.components.new_description.call(null,"game setup",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__22206_22269 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22207_22270 = description__18609__auto___22268;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22207_22270);

try{var seq__22208_22271 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__22206_22269,_STAR_parent_description_STAR__temp_val__22207_22270,description__18609__auto___22268){
return (function (it__18983__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__22242 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__22243 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__22243);

try{return it__18983__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__22242);
}});})(_STAR_parent_description_STAR__orig_val__22206_22269,_STAR_parent_description_STAR__temp_val__22207_22270,description__18609__auto___22268))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__22206_22269,_STAR_parent_description_STAR__temp_val__22207_22270,description__18609__auto___22268){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));
});})(_STAR_parent_description_STAR__orig_val__22206_22269,_STAR_parent_description_STAR__temp_val__22207_22270,description__18609__auto___22268))
),(function (){var description__18609__auto____$1 = speclj.components.new_description.call(null,"select-difficulty correct count and switch to game",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__22244_22275 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22245_22276 = description__18609__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22245_22276);

try{var seq__22246_22277 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"single difficulty 1 time",((function (_STAR_parent_description_STAR__orig_val__22244_22275,_STAR_parent_description_STAR__temp_val__22245_22276,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22206_22269,_STAR_parent_description_STAR__temp_val__22207_22270,description__18609__auto___22268){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var out = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"easy","easy",315769928));
speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22281 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__18752__auto___22282 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18751__auto___22281,actual__18752__auto___22282)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22281;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22282;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__18752__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18751__auto__,actual__18752__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__22244_22275,_STAR_parent_description_STAR__temp_val__22245_22276,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22206_22269,_STAR_parent_description_STAR__temp_val__22207_22270,description__18609__auto___22268))
,false),speclj.components.new_characteristic.call(null,"two difficulty ",((function (_STAR_parent_description_STAR__orig_val__22244_22275,_STAR_parent_description_STAR__temp_val__22245_22276,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22206_22269,_STAR_parent_description_STAR__temp_val__22207_22270,description__18609__auto___22268){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var out1 = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"easy","easy",315769928));
var out2 = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"hard","hard",2068420191));
speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__18752__auto___22284 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__18751__auto___22283,actual__18752__auto___22284)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22283;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22284;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22285 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__18752__auto___22286 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__18751__auto___22285,actual__18752__auto___22286)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22285;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22286;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22287 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null);
var actual__18752__auto___22288 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out2);
if(cljs.core._EQ_.call(null,expected__18751__auto___22287,actual__18752__auto___22288)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22287;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22288;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__18752__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out2);
if(cljs.core._EQ_.call(null,expected__18751__auto__,actual__18752__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__22244_22275,_STAR_parent_description_STAR__temp_val__22245_22276,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22206_22269,_STAR_parent_description_STAR__temp_val__22207_22270,description__18609__auto___22268))
,false)],null)));
var chunk__22247_22278 = null;
var count__22248_22279 = (0);
var i__22249_22280 = (0);
while(true){
if((i__22249_22280 < count__22248_22279)){
var component__18610__auto___22289 = cljs.core._nth.call(null,chunk__22247_22278,i__22249_22280);
speclj.components.install.call(null,component__18610__auto___22289,description__18609__auto____$1);


var G__22290 = seq__22246_22277;
var G__22291 = chunk__22247_22278;
var G__22292 = count__22248_22279;
var G__22293 = (i__22249_22280 + (1));
seq__22246_22277 = G__22290;
chunk__22247_22278 = G__22291;
count__22248_22279 = G__22292;
i__22249_22280 = G__22293;
continue;
} else {
var temp__5825__auto___22294 = cljs.core.seq.call(null,seq__22246_22277);
if(temp__5825__auto___22294){
var seq__22246_22295__$1 = temp__5825__auto___22294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22246_22295__$1)){
var c__5548__auto___22296 = cljs.core.chunk_first.call(null,seq__22246_22295__$1);
var G__22297 = cljs.core.chunk_rest.call(null,seq__22246_22295__$1);
var G__22298 = c__5548__auto___22296;
var G__22299 = cljs.core.count.call(null,c__5548__auto___22296);
var G__22300 = (0);
seq__22246_22277 = G__22297;
chunk__22247_22278 = G__22298;
count__22248_22279 = G__22299;
i__22249_22280 = G__22300;
continue;
} else {
var component__18610__auto___22301 = cljs.core.first.call(null,seq__22246_22295__$1);
speclj.components.install.call(null,component__18610__auto___22301,description__18609__auto____$1);


var G__22302 = cljs.core.next.call(null,seq__22246_22295__$1);
var G__22303 = null;
var G__22304 = (0);
var G__22305 = (0);
seq__22246_22277 = G__22302;
chunk__22247_22278 = G__22303;
count__22248_22279 = G__22304;
i__22249_22280 = G__22305;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22244_22275);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18609__auto____$1);
}

return description__18609__auto____$1;
})(),(function (){var description__18609__auto____$1 = speclj.components.new_description.call(null,"auto advance",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__22250_22306 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22251_22307 = description__18609__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22251_22307);

try{var seq__22252_22308 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"does not advance if it's not the AI's turn",((function (_STAR_parent_description_STAR__orig_val__22250_22306,_STAR_parent_description_STAR__temp_val__22251_22307,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22206_22269,_STAR_parent_description_STAR__temp_val__22207_22270,description__18609__auto___22268){
return (function (){
var next_state_orig_val__22262 = tic_tac_toe.game.next_state;
var next_state_temp_val__22263 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.game.next_state = next_state_temp_val__22263);

try{var initial_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,initial_state);

tic_tac_toe.setup.auto_advance.call(null,new cljs.core.Keyword(null,"test-key","test-key",-1385375189),tic_tac_toe.setup.state,initial_state,initial_state);

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22312 = initial_state;
var actual__18752__auto___22313 = cljs.core.deref.call(null,tic_tac_toe.setup.state);
if(cljs.core._EQ_.call(null,expected__18751__auto___22312,actual__18752__auto___22313)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22312;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22313;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var name__19018__auto__ = new cljs.core.Keyword(null,"next-state","next-state",-1428728252);
var options__19019__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__19020__auto__ = speclj.stub.invocations_of.call(null,name__19018__auto__);
var times__19021__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__19019__auto__);
var times_QMARK___19022__auto__ = typeof times__19021__auto__ === 'number';
var check_params_QMARK___19023__auto__ = cljs.core.contains_QMARK_.call(null,options__19019__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__19024__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__19019__auto__);
var with__19024__auto____$1 = (((with__19024__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__19024__auto__);
var add_s__19025__auto__ = (function (p1__19015__19026__auto__){
if(cljs.core._EQ_.call(null,(1),p1__19015__19026__auto__)){
return "";
} else {
return "s";
}
});
if(((times_QMARK___19022__auto__) && (check_params_QMARK___19023__auto__))){
var matching_invocations__19027__auto__ = cljs.core.filter.call(null,(function (p1__19016__19028__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__19024__auto____$1,p1__19016__19028__auto__);
}),invocations__19020__auto__);
var matching_count__19029__auto__ = cljs.core.count.call(null,matching_invocations__19027__auto__);
if(cljs.core._EQ_.call(null,times__19021__auto__,matching_count__19029__auto__)){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__19018__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__19021__auto__)," time",add_s__19025__auto__.call(null,matching_count__19029__auto__)," with ",cljs.core.pr_str.call(null,with__19024__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__19029__auto__)," invocation",add_s__19025__auto__.call(null,matching_count__19029__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(times_QMARK___19022__auto__){
if(cljs.core._EQ_.call(null,times__19021__auto__,cljs.core.count.call(null,invocations__19020__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__19018__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__19021__auto__)," time",add_s__19025__auto__.call(null,times__19021__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__19021__auto__)," invocation",add_s__19025__auto__.call(null,times__19021__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(check_params_QMARK___19023__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__19017__19030__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__19024__auto____$1,p1__19017__19030__auto__);
}),invocations__19020__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__19018__auto__)," not to have been invoked with ",cljs.core.pr_str.call(null,with__19024__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__19020__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.seq.call(null,invocations__19020__auto__)){
throw cljs.core.ex_info.call(null,["Expected: 0 invocations of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__19018__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__19020__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}

}
}
}
}finally {(tic_tac_toe.game.next_state = next_state_orig_val__22262);
}});})(_STAR_parent_description_STAR__orig_val__22250_22306,_STAR_parent_description_STAR__temp_val__22251_22307,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22206_22269,_STAR_parent_description_STAR__temp_val__22207_22270,description__18609__auto___22268))
,false),speclj.components.new_characteristic.call(null,"returns new state if ai turn",((function (_STAR_parent_description_STAR__orig_val__22250_22306,_STAR_parent_description_STAR__temp_val__22251_22307,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22206_22269,_STAR_parent_description_STAR__temp_val__22207_22270,description__18609__auto___22268){
return (function (){
var next_state_orig_val__22264 = tic_tac_toe.game.next_state;
var sleep_orig_val__22265 = tic_tac_toe.setup.sleep;
var next_state_temp_val__22266 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),"p1"], null)], null));
var sleep_temp_val__22267 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"sleep","sleep",-1932665860),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.game.next_state = next_state_temp_val__22266);

(tic_tac_toe.setup.sleep = sleep_temp_val__22267);

try{var state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p2",new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null);
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,state);

tic_tac_toe.setup.auto_advance.call(null,new cljs.core.Keyword(null,"test-key","test-key",-1385375189),tic_tac_toe.setup.state,state,state);

speclj.components.inc_assertions_BANG_.call(null);

var name__18997__auto__ = new cljs.core.Keyword(null,"sleep","sleep",-1932665860);
var options__18998__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__18999__auto__ = speclj.stub.invocations_of.call(null,name__18997__auto__);
var times__19000__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__18998__auto__);
var times_QMARK___19001__auto__ = typeof times__19000__auto__ === 'number';
var check_params_QMARK___19002__auto__ = cljs.core.contains_QMARK_.call(null,options__18998__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__19003__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__18998__auto__);
var with__19003__auto____$1 = (((with__19003__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__19003__auto__);
var invocations_str__19004__auto__ = (function (p1__18994__19005__auto__){
if(cljs.core._EQ_.call(null,(1),p1__18994__19005__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___19001__auto__) && (check_params_QMARK___19002__auto__))){
var matching_invocations__19006__auto__ = cljs.core.filter.call(null,(function (p1__18995__19007__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__19003__auto____$1,p1__18995__19007__auto__);
}),invocations__18999__auto__);
var matching_count__19008__auto__ = cljs.core.count.call(null,matching_invocations__19006__auto__);
if(cljs.core._EQ_.call(null,times__19000__auto__,matching_count__19008__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__19000__auto__)," ",invocations_str__19004__auto__.call(null,times__19000__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18997__auto__)," with ",cljs.core.pr_str.call(null,with__19003__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__19008__auto__)," ",invocations_str__19004__auto__.call(null,matching_count__19008__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___19002__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18996__19009__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__19003__auto____$1,p1__18996__19009__auto__);
}),invocations__18999__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18997__auto__)," with ",cljs.core.pr_str.call(null,with__19003__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__18999__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___19001__auto__){
if(cljs.core._EQ_.call(null,times__19000__auto__,cljs.core.count.call(null,invocations__18999__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__19000__auto__)," ",invocations_str__19004__auto__.call(null,times__19000__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18997__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__18999__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__18999__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18997__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__18999__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.sleep = sleep_orig_val__22265);

(tic_tac_toe.game.next_state = next_state_orig_val__22264);
}});})(_STAR_parent_description_STAR__orig_val__22250_22306,_STAR_parent_description_STAR__temp_val__22251_22307,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22206_22269,_STAR_parent_description_STAR__temp_val__22207_22270,description__18609__auto___22268))
,false)],null)));
var chunk__22253_22309 = null;
var count__22254_22310 = (0);
var i__22255_22311 = (0);
while(true){
if((i__22255_22311 < count__22254_22310)){
var component__18610__auto___22314 = cljs.core._nth.call(null,chunk__22253_22309,i__22255_22311);
speclj.components.install.call(null,component__18610__auto___22314,description__18609__auto____$1);


var G__22315 = seq__22252_22308;
var G__22316 = chunk__22253_22309;
var G__22317 = count__22254_22310;
var G__22318 = (i__22255_22311 + (1));
seq__22252_22308 = G__22315;
chunk__22253_22309 = G__22316;
count__22254_22310 = G__22317;
i__22255_22311 = G__22318;
continue;
} else {
var temp__5825__auto___22319 = cljs.core.seq.call(null,seq__22252_22308);
if(temp__5825__auto___22319){
var seq__22252_22320__$1 = temp__5825__auto___22319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22252_22320__$1)){
var c__5548__auto___22321 = cljs.core.chunk_first.call(null,seq__22252_22320__$1);
var G__22322 = cljs.core.chunk_rest.call(null,seq__22252_22320__$1);
var G__22323 = c__5548__auto___22321;
var G__22324 = cljs.core.count.call(null,c__5548__auto___22321);
var G__22325 = (0);
seq__22252_22308 = G__22322;
chunk__22253_22309 = G__22323;
count__22254_22310 = G__22324;
i__22255_22311 = G__22325;
continue;
} else {
var component__18610__auto___22326 = cljs.core.first.call(null,seq__22252_22320__$1);
speclj.components.install.call(null,component__18610__auto___22326,description__18609__auto____$1);


var G__22327 = cljs.core.next.call(null,seq__22252_22320__$1);
var G__22328 = null;
var G__22329 = (0);
var G__22330 = (0);
seq__22252_22308 = G__22327;
chunk__22253_22309 = G__22328;
count__22254_22310 = G__22329;
i__22255_22311 = G__22330;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22250_22306);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18609__auto____$1);
}

return description__18609__auto____$1;
})()],null)));
var chunk__22209_22272 = null;
var count__22210_22273 = (0);
var i__22211_22274 = (0);
while(true){
if((i__22211_22274 < count__22210_22273)){
var component__18610__auto___22331 = cljs.core._nth.call(null,chunk__22209_22272,i__22211_22274);
speclj.components.install.call(null,component__18610__auto___22331,description__18609__auto___22268);


var G__22332 = seq__22208_22271;
var G__22333 = chunk__22209_22272;
var G__22334 = count__22210_22273;
var G__22335 = (i__22211_22274 + (1));
seq__22208_22271 = G__22332;
chunk__22209_22272 = G__22333;
count__22210_22273 = G__22334;
i__22211_22274 = G__22335;
continue;
} else {
var temp__5825__auto___22336 = cljs.core.seq.call(null,seq__22208_22271);
if(temp__5825__auto___22336){
var seq__22208_22337__$1 = temp__5825__auto___22336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22208_22337__$1)){
var c__5548__auto___22338 = cljs.core.chunk_first.call(null,seq__22208_22337__$1);
var G__22339 = cljs.core.chunk_rest.call(null,seq__22208_22337__$1);
var G__22340 = c__5548__auto___22338;
var G__22341 = cljs.core.count.call(null,c__5548__auto___22338);
var G__22342 = (0);
seq__22208_22271 = G__22339;
chunk__22209_22272 = G__22340;
count__22210_22273 = G__22341;
i__22211_22274 = G__22342;
continue;
} else {
var component__18610__auto___22343 = cljs.core.first.call(null,seq__22208_22337__$1);
speclj.components.install.call(null,component__18610__auto___22343,description__18609__auto___22268);


var G__22344 = cljs.core.next.call(null,seq__22208_22337__$1);
var G__22345 = null;
var G__22346 = (0);
var G__22347 = (0);
seq__22208_22271 = G__22344;
chunk__22209_22272 = G__22345;
count__22210_22273 = G__22346;
i__22211_22274 = G__22347;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22206_22269);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18609__auto___22268);
}


//# sourceMappingURL=setup_spec.js.map
