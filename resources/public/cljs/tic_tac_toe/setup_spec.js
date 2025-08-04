// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.setup');
var description__8439__auto___9168 = speclj.components.new_description.call(null,"game setup",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__9118_9169 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9119_9170 = description__8439__auto___9168;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9119_9170);

try{var seq__9120_9171 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__9118_9169,_STAR_parent_description_STAR__temp_val__9119_9170,description__8439__auto___9168){
return (function (it__8813__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__9146 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__9147 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__9147);

try{return it__8813__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__9146);
}});})(_STAR_parent_description_STAR__orig_val__9118_9169,_STAR_parent_description_STAR__temp_val__9119_9170,description__8439__auto___9168))
),(function (){var description__8439__auto____$1 = speclj.components.new_description.call(null,"select-difficulty correct count and switch to game",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__9148_9175 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9149_9176 = description__8439__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9149_9176);

try{var seq__9150_9177 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"single difficulty 1 time",((function (_STAR_parent_description_STAR__orig_val__9148_9175,_STAR_parent_description_STAR__temp_val__9149_9176,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9118_9169,_STAR_parent_description_STAR__temp_val__9119_9170,description__8439__auto___9168){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var out = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"easy","easy",315769928));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto___9181 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__8582__auto___9182 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8581__auto___9181,actual__8582__auto___9182)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto___9181;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto___9182;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__8582__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8581__auto__,actual__8582__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9148_9175,_STAR_parent_description_STAR__temp_val__9149_9176,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9118_9169,_STAR_parent_description_STAR__temp_val__9119_9170,description__8439__auto___9168))
,false),speclj.components.new_characteristic.call(null,"two difficulty ",((function (_STAR_parent_description_STAR__orig_val__9148_9175,_STAR_parent_description_STAR__temp_val__9149_9176,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9118_9169,_STAR_parent_description_STAR__temp_val__9119_9170,description__8439__auto___9168){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var out1 = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"easy","easy",315769928));
var out2 = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"hard","hard",2068420191));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto___9183 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__8582__auto___9184 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__8581__auto___9183,actual__8582__auto___9184)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto___9183;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto___9184;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto___9185 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__8582__auto___9186 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__8581__auto___9185,actual__8582__auto___9186)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto___9185;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto___9186;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto___9187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null);
var actual__8582__auto___9188 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out2);
if(cljs.core._EQ_.call(null,expected__8581__auto___9187,actual__8582__auto___9188)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto___9187;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto___9188;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__8582__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out2);
if(cljs.core._EQ_.call(null,expected__8581__auto__,actual__8582__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9148_9175,_STAR_parent_description_STAR__temp_val__9149_9176,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9118_9169,_STAR_parent_description_STAR__temp_val__9119_9170,description__8439__auto___9168))
,false)],null)));
var chunk__9151_9178 = null;
var count__9152_9179 = (0);
var i__9153_9180 = (0);
while(true){
if((i__9153_9180 < count__9152_9179)){
var component__8440__auto___9189 = cljs.core._nth.call(null,chunk__9151_9178,i__9153_9180);
speclj.components.install.call(null,component__8440__auto___9189,description__8439__auto____$1);


var G__9190 = seq__9150_9177;
var G__9191 = chunk__9151_9178;
var G__9192 = count__9152_9179;
var G__9193 = (i__9153_9180 + (1));
seq__9150_9177 = G__9190;
chunk__9151_9178 = G__9191;
count__9152_9179 = G__9192;
i__9153_9180 = G__9193;
continue;
} else {
var temp__5825__auto___9194 = cljs.core.seq.call(null,seq__9150_9177);
if(temp__5825__auto___9194){
var seq__9150_9195__$1 = temp__5825__auto___9194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9150_9195__$1)){
var c__5548__auto___9196 = cljs.core.chunk_first.call(null,seq__9150_9195__$1);
var G__9197 = cljs.core.chunk_rest.call(null,seq__9150_9195__$1);
var G__9198 = c__5548__auto___9196;
var G__9199 = cljs.core.count.call(null,c__5548__auto___9196);
var G__9200 = (0);
seq__9150_9177 = G__9197;
chunk__9151_9178 = G__9198;
count__9152_9179 = G__9199;
i__9153_9180 = G__9200;
continue;
} else {
var component__8440__auto___9201 = cljs.core.first.call(null,seq__9150_9195__$1);
speclj.components.install.call(null,component__8440__auto___9201,description__8439__auto____$1);


var G__9202 = cljs.core.next.call(null,seq__9150_9195__$1);
var G__9203 = null;
var G__9204 = (0);
var G__9205 = (0);
seq__9150_9177 = G__9202;
chunk__9151_9178 = G__9203;
count__9152_9179 = G__9204;
i__9153_9180 = G__9205;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9148_9175);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8439__auto____$1);
}

return description__8439__auto____$1;
})(),(function (){var description__8439__auto____$1 = speclj.components.new_description.call(null,"auto advance",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__9154_9206 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9155_9207 = description__8439__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9155_9207);

try{var seq__9156_9208 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns current state if not ai turn",((function (_STAR_parent_description_STAR__orig_val__9154_9206,_STAR_parent_description_STAR__temp_val__9155_9207,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9118_9169,_STAR_parent_description_STAR__temp_val__9119_9170,description__8439__auto___9168){
return (function (){
var next_state_orig_val__9164 = tic_tac_toe.game.next_state;
var next_state_temp_val__9165 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.game.next_state = next_state_temp_val__9165);

try{var state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
var out = tic_tac_toe.setup.auto_advance.call(null,state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto___9212 = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__8582__auto___9213 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8581__auto___9212,actual__8582__auto___9213)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto___9212;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto___9213;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var name__8848__auto__ = new cljs.core.Keyword(null,"next-state","next-state",-1428728252);
var options__8849__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__8850__auto__ = speclj.stub.invocations_of.call(null,name__8848__auto__);
var times__8851__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8849__auto__);
var times_QMARK___8852__auto__ = typeof times__8851__auto__ === 'number';
var check_params_QMARK___8853__auto__ = cljs.core.contains_QMARK_.call(null,options__8849__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8854__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8849__auto__);
var with__8854__auto____$1 = (((with__8854__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8854__auto__);
var add_s__8855__auto__ = (function (p1__8845__8856__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8845__8856__auto__)){
return "";
} else {
return "s";
}
});
if(((times_QMARK___8852__auto__) && (check_params_QMARK___8853__auto__))){
var matching_invocations__8857__auto__ = cljs.core.filter.call(null,(function (p1__8846__8858__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8854__auto____$1,p1__8846__8858__auto__);
}),invocations__8850__auto__);
var matching_count__8859__auto__ = cljs.core.count.call(null,matching_invocations__8857__auto__);
if(cljs.core._EQ_.call(null,times__8851__auto__,matching_count__8859__auto__)){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8848__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8851__auto__)," time",add_s__8855__auto__.call(null,matching_count__8859__auto__)," with ",cljs.core.pr_str.call(null,with__8854__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8859__auto__)," invocation",add_s__8855__auto__.call(null,matching_count__8859__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(times_QMARK___8852__auto__){
if(cljs.core._EQ_.call(null,times__8851__auto__,cljs.core.count.call(null,invocations__8850__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8848__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8851__auto__)," time",add_s__8855__auto__.call(null,times__8851__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8851__auto__)," invocation",add_s__8855__auto__.call(null,times__8851__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(check_params_QMARK___8853__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8847__8860__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8854__auto____$1,p1__8847__8860__auto__);
}),invocations__8850__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8848__auto__)," not to have been invoked with ",cljs.core.pr_str.call(null,with__8854__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8850__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.seq.call(null,invocations__8850__auto__)){
throw cljs.core.ex_info.call(null,["Expected: 0 invocations of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8848__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8850__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}

}
}
}
}finally {(tic_tac_toe.game.next_state = next_state_orig_val__9164);
}});})(_STAR_parent_description_STAR__orig_val__9154_9206,_STAR_parent_description_STAR__temp_val__9155_9207,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9118_9169,_STAR_parent_description_STAR__temp_val__9119_9170,description__8439__auto___9168))
,false),speclj.components.new_characteristic.call(null,"returns new state if ai turn",((function (_STAR_parent_description_STAR__orig_val__9154_9206,_STAR_parent_description_STAR__temp_val__9155_9207,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9118_9169,_STAR_parent_description_STAR__temp_val__9119_9170,description__8439__auto___9168){
return (function (){
var next_state_orig_val__9166 = tic_tac_toe.game.next_state;
var next_state_temp_val__9167 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1"], null)], null));
(tic_tac_toe.game.next_state = next_state_temp_val__9167);

try{var state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p2",new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null);
var new_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1"], null);
var out = tic_tac_toe.setup.auto_advance.call(null,state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto___9214 = new_state;
var actual__8582__auto___9215 = out;
if(cljs.core._EQ_.call(null,expected__8581__auto___9214,actual__8582__auto___9215)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto___9214;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto___9215;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var name__8827__auto__ = new cljs.core.Keyword(null,"next-state","next-state",-1428728252);
var options__8828__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null)], null);
var invocations__8829__auto__ = speclj.stub.invocations_of.call(null,name__8827__auto__);
var times__8830__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8828__auto__);
var times_QMARK___8831__auto__ = typeof times__8830__auto__ === 'number';
var check_params_QMARK___8832__auto__ = cljs.core.contains_QMARK_.call(null,options__8828__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8833__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8828__auto__);
var with__8833__auto____$1 = (((with__8833__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8833__auto__);
var invocations_str__8834__auto__ = (function (p1__8824__8835__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8824__8835__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8831__auto__) && (check_params_QMARK___8832__auto__))){
var matching_invocations__8836__auto__ = cljs.core.filter.call(null,(function (p1__8825__8837__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8833__auto____$1,p1__8825__8837__auto__);
}),invocations__8829__auto__);
var matching_count__8838__auto__ = cljs.core.count.call(null,matching_invocations__8836__auto__);
if(cljs.core._EQ_.call(null,times__8830__auto__,matching_count__8838__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8830__auto__)," ",invocations_str__8834__auto__.call(null,times__8830__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8827__auto__)," with ",cljs.core.pr_str.call(null,with__8833__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8838__auto__)," ",invocations_str__8834__auto__.call(null,matching_count__8838__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___8832__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8826__8839__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8833__auto____$1,p1__8826__8839__auto__);
}),invocations__8829__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8827__auto__)," with ",cljs.core.pr_str.call(null,with__8833__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8829__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___8831__auto__){
if(cljs.core._EQ_.call(null,times__8830__auto__,cljs.core.count.call(null,invocations__8829__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8830__auto__)," ",invocations_str__8834__auto__.call(null,times__8830__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8827__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8829__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__8829__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8827__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8829__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.game.next_state = next_state_orig_val__9166);
}});})(_STAR_parent_description_STAR__orig_val__9154_9206,_STAR_parent_description_STAR__temp_val__9155_9207,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9118_9169,_STAR_parent_description_STAR__temp_val__9119_9170,description__8439__auto___9168))
,false)],null)));
var chunk__9157_9209 = null;
var count__9158_9210 = (0);
var i__9159_9211 = (0);
while(true){
if((i__9159_9211 < count__9158_9210)){
var component__8440__auto___9216 = cljs.core._nth.call(null,chunk__9157_9209,i__9159_9211);
speclj.components.install.call(null,component__8440__auto___9216,description__8439__auto____$1);


var G__9217 = seq__9156_9208;
var G__9218 = chunk__9157_9209;
var G__9219 = count__9158_9210;
var G__9220 = (i__9159_9211 + (1));
seq__9156_9208 = G__9217;
chunk__9157_9209 = G__9218;
count__9158_9210 = G__9219;
i__9159_9211 = G__9220;
continue;
} else {
var temp__5825__auto___9221 = cljs.core.seq.call(null,seq__9156_9208);
if(temp__5825__auto___9221){
var seq__9156_9222__$1 = temp__5825__auto___9221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9156_9222__$1)){
var c__5548__auto___9223 = cljs.core.chunk_first.call(null,seq__9156_9222__$1);
var G__9224 = cljs.core.chunk_rest.call(null,seq__9156_9222__$1);
var G__9225 = c__5548__auto___9223;
var G__9226 = cljs.core.count.call(null,c__5548__auto___9223);
var G__9227 = (0);
seq__9156_9208 = G__9224;
chunk__9157_9209 = G__9225;
count__9158_9210 = G__9226;
i__9159_9211 = G__9227;
continue;
} else {
var component__8440__auto___9228 = cljs.core.first.call(null,seq__9156_9222__$1);
speclj.components.install.call(null,component__8440__auto___9228,description__8439__auto____$1);


var G__9229 = cljs.core.next.call(null,seq__9156_9222__$1);
var G__9230 = null;
var G__9231 = (0);
var G__9232 = (0);
seq__9156_9208 = G__9229;
chunk__9157_9209 = G__9230;
count__9158_9210 = G__9231;
i__9159_9211 = G__9232;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9154_9206);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8439__auto____$1);
}

return description__8439__auto____$1;
})()],null)));
var chunk__9121_9172 = null;
var count__9122_9173 = (0);
var i__9123_9174 = (0);
while(true){
if((i__9123_9174 < count__9122_9173)){
var component__8440__auto___9233 = cljs.core._nth.call(null,chunk__9121_9172,i__9123_9174);
speclj.components.install.call(null,component__8440__auto___9233,description__8439__auto___9168);


var G__9234 = seq__9120_9171;
var G__9235 = chunk__9121_9172;
var G__9236 = count__9122_9173;
var G__9237 = (i__9123_9174 + (1));
seq__9120_9171 = G__9234;
chunk__9121_9172 = G__9235;
count__9122_9173 = G__9236;
i__9123_9174 = G__9237;
continue;
} else {
var temp__5825__auto___9238 = cljs.core.seq.call(null,seq__9120_9171);
if(temp__5825__auto___9238){
var seq__9120_9239__$1 = temp__5825__auto___9238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9120_9239__$1)){
var c__5548__auto___9240 = cljs.core.chunk_first.call(null,seq__9120_9239__$1);
var G__9241 = cljs.core.chunk_rest.call(null,seq__9120_9239__$1);
var G__9242 = c__5548__auto___9240;
var G__9243 = cljs.core.count.call(null,c__5548__auto___9240);
var G__9244 = (0);
seq__9120_9171 = G__9241;
chunk__9121_9172 = G__9242;
count__9122_9173 = G__9243;
i__9123_9174 = G__9244;
continue;
} else {
var component__8440__auto___9245 = cljs.core.first.call(null,seq__9120_9239__$1);
speclj.components.install.call(null,component__8440__auto___9245,description__8439__auto___9168);


var G__9246 = cljs.core.next.call(null,seq__9120_9239__$1);
var G__9247 = null;
var G__9248 = (0);
var G__9249 = (0);
seq__9120_9171 = G__9246;
chunk__9121_9172 = G__9247;
count__9122_9173 = G__9248;
i__9123_9174 = G__9249;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9118_9169);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8439__auto___9168);
}


//# sourceMappingURL=setup_spec.js.map
