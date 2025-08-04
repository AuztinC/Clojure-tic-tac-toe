// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.setup');
var description__8450__auto___15135 = speclj.components.new_description.call(null,"game setup",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__15067_15136 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__15068_15137 = description__8450__auto___15135;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__15068_15137);

try{var seq__15069_15138 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__15067_15136,_STAR_parent_description_STAR__temp_val__15068_15137,description__8450__auto___15135){
return (function (it__8824__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__15105 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__15106 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__15106);

try{return it__8824__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__15105);
}});})(_STAR_parent_description_STAR__orig_val__15067_15136,_STAR_parent_description_STAR__temp_val__15068_15137,description__8450__auto___15135))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__15067_15136,_STAR_parent_description_STAR__temp_val__15068_15137,description__8450__auto___15135){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));
});})(_STAR_parent_description_STAR__orig_val__15067_15136,_STAR_parent_description_STAR__temp_val__15068_15137,description__8450__auto___15135))
),(function (){var description__8450__auto____$1 = speclj.components.new_description.call(null,"select-difficulty correct count and switch to game",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__15107_15142 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__15108_15143 = description__8450__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__15108_15143);

try{var seq__15109_15144 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"single difficulty 1 time",((function (_STAR_parent_description_STAR__orig_val__15107_15142,_STAR_parent_description_STAR__temp_val__15108_15143,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__15067_15136,_STAR_parent_description_STAR__temp_val__15068_15137,description__8450__auto___15135){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var out = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"easy","easy",315769928));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___15148 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__8593__auto___15149 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___15148,actual__8593__auto___15149)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___15148;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___15149;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__8593__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto__,actual__8593__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15107_15142,_STAR_parent_description_STAR__temp_val__15108_15143,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__15067_15136,_STAR_parent_description_STAR__temp_val__15068_15137,description__8450__auto___15135))
,false),speclj.components.new_characteristic.call(null,"two difficulty ",((function (_STAR_parent_description_STAR__orig_val__15107_15142,_STAR_parent_description_STAR__temp_val__15108_15143,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__15067_15136,_STAR_parent_description_STAR__temp_val__15068_15137,description__8450__auto___15135){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var out1 = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"easy","easy",315769928));
var out2 = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"hard","hard",2068420191));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___15150 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__8593__auto___15151 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__8592__auto___15150,actual__8593__auto___15151)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___15150;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___15151;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___15152 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__8593__auto___15153 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__8592__auto___15152,actual__8593__auto___15153)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___15152;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___15153;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___15154 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null);
var actual__8593__auto___15155 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out2);
if(cljs.core._EQ_.call(null,expected__8592__auto___15154,actual__8593__auto___15155)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___15154;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___15155;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__8593__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out2);
if(cljs.core._EQ_.call(null,expected__8592__auto__,actual__8593__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15107_15142,_STAR_parent_description_STAR__temp_val__15108_15143,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__15067_15136,_STAR_parent_description_STAR__temp_val__15068_15137,description__8450__auto___15135))
,false)],null)));
var chunk__15110_15145 = null;
var count__15111_15146 = (0);
var i__15112_15147 = (0);
while(true){
if((i__15112_15147 < count__15111_15146)){
var component__8451__auto___15156 = cljs.core._nth.call(null,chunk__15110_15145,i__15112_15147);
speclj.components.install.call(null,component__8451__auto___15156,description__8450__auto____$1);


var G__15157 = seq__15109_15144;
var G__15158 = chunk__15110_15145;
var G__15159 = count__15111_15146;
var G__15160 = (i__15112_15147 + (1));
seq__15109_15144 = G__15157;
chunk__15110_15145 = G__15158;
count__15111_15146 = G__15159;
i__15112_15147 = G__15160;
continue;
} else {
var temp__5825__auto___15161 = cljs.core.seq.call(null,seq__15109_15144);
if(temp__5825__auto___15161){
var seq__15109_15162__$1 = temp__5825__auto___15161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15109_15162__$1)){
var c__5548__auto___15163 = cljs.core.chunk_first.call(null,seq__15109_15162__$1);
var G__15164 = cljs.core.chunk_rest.call(null,seq__15109_15162__$1);
var G__15165 = c__5548__auto___15163;
var G__15166 = cljs.core.count.call(null,c__5548__auto___15163);
var G__15167 = (0);
seq__15109_15144 = G__15164;
chunk__15110_15145 = G__15165;
count__15111_15146 = G__15166;
i__15112_15147 = G__15167;
continue;
} else {
var component__8451__auto___15168 = cljs.core.first.call(null,seq__15109_15162__$1);
speclj.components.install.call(null,component__8451__auto___15168,description__8450__auto____$1);


var G__15169 = cljs.core.next.call(null,seq__15109_15162__$1);
var G__15170 = null;
var G__15171 = (0);
var G__15172 = (0);
seq__15109_15144 = G__15169;
chunk__15110_15145 = G__15170;
count__15111_15146 = G__15171;
i__15112_15147 = G__15172;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__15107_15142);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$1);
}

return description__8450__auto____$1;
})(),(function (){var description__8450__auto____$1 = speclj.components.new_description.call(null,"auto advance",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__15113_15173 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__15114_15174 = description__8450__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__15114_15174);

try{var seq__15115_15175 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"does not advance if it's not the AI's turn",((function (_STAR_parent_description_STAR__orig_val__15113_15173,_STAR_parent_description_STAR__temp_val__15114_15174,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__15067_15136,_STAR_parent_description_STAR__temp_val__15068_15137,description__8450__auto___15135){
return (function (){
var next_state_orig_val__15129 = tic_tac_toe.game.next_state;
var next_state_temp_val__15130 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.game.next_state = next_state_temp_val__15130);

try{var initial_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,initial_state);

tic_tac_toe.setup.auto_advance.call(null,new cljs.core.Keyword(null,"test-key","test-key",-1385375189),tic_tac_toe.setup.state,initial_state,initial_state);

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___15179 = initial_state;
var actual__8593__auto___15180 = cljs.core.deref.call(null,tic_tac_toe.setup.state);
if(cljs.core._EQ_.call(null,expected__8592__auto___15179,actual__8593__auto___15180)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___15179;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___15180;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var name__8859__auto__ = new cljs.core.Keyword(null,"next-state","next-state",-1428728252);
var options__8860__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__8861__auto__ = speclj.stub.invocations_of.call(null,name__8859__auto__);
var times__8862__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8860__auto__);
var times_QMARK___8863__auto__ = typeof times__8862__auto__ === 'number';
var check_params_QMARK___8864__auto__ = cljs.core.contains_QMARK_.call(null,options__8860__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8865__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8860__auto__);
var with__8865__auto____$1 = (((with__8865__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8865__auto__);
var add_s__8866__auto__ = (function (p1__8856__8867__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8856__8867__auto__)){
return "";
} else {
return "s";
}
});
if(((times_QMARK___8863__auto__) && (check_params_QMARK___8864__auto__))){
var matching_invocations__8868__auto__ = cljs.core.filter.call(null,(function (p1__8857__8869__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8865__auto____$1,p1__8857__8869__auto__);
}),invocations__8861__auto__);
var matching_count__8870__auto__ = cljs.core.count.call(null,matching_invocations__8868__auto__);
if(cljs.core._EQ_.call(null,times__8862__auto__,matching_count__8870__auto__)){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8859__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8862__auto__)," time",add_s__8866__auto__.call(null,matching_count__8870__auto__)," with ",cljs.core.pr_str.call(null,with__8865__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8870__auto__)," invocation",add_s__8866__auto__.call(null,matching_count__8870__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(times_QMARK___8863__auto__){
if(cljs.core._EQ_.call(null,times__8862__auto__,cljs.core.count.call(null,invocations__8861__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8859__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8862__auto__)," time",add_s__8866__auto__.call(null,times__8862__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8862__auto__)," invocation",add_s__8866__auto__.call(null,times__8862__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(check_params_QMARK___8864__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8858__8871__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8865__auto____$1,p1__8858__8871__auto__);
}),invocations__8861__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8859__auto__)," not to have been invoked with ",cljs.core.pr_str.call(null,with__8865__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8861__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.seq.call(null,invocations__8861__auto__)){
throw cljs.core.ex_info.call(null,["Expected: 0 invocations of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8859__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8861__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}

}
}
}
}finally {(tic_tac_toe.game.next_state = next_state_orig_val__15129);
}});})(_STAR_parent_description_STAR__orig_val__15113_15173,_STAR_parent_description_STAR__temp_val__15114_15174,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__15067_15136,_STAR_parent_description_STAR__temp_val__15068_15137,description__8450__auto___15135))
,false),speclj.components.new_characteristic.call(null,"returns new state if ai turn",((function (_STAR_parent_description_STAR__orig_val__15113_15173,_STAR_parent_description_STAR__temp_val__15114_15174,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__15067_15136,_STAR_parent_description_STAR__temp_val__15068_15137,description__8450__auto___15135){
return (function (){
var next_state_orig_val__15131 = tic_tac_toe.game.next_state;
var sleep_orig_val__15132 = tic_tac_toe.setup.sleep;
var next_state_temp_val__15133 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),"p1"], null)], null));
var sleep_temp_val__15134 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"sleep","sleep",-1932665860),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.game.next_state = next_state_temp_val__15133);

(tic_tac_toe.setup.sleep = sleep_temp_val__15134);

try{var state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p2",new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null);
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,state);

tic_tac_toe.setup.auto_advance.call(null,new cljs.core.Keyword(null,"test-key","test-key",-1385375189),tic_tac_toe.setup.state,state,state);

speclj.components.inc_assertions_BANG_.call(null);

var name__8838__auto__ = new cljs.core.Keyword(null,"sleep","sleep",-1932665860);
var options__8839__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__8840__auto__ = speclj.stub.invocations_of.call(null,name__8838__auto__);
var times__8841__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8839__auto__);
var times_QMARK___8842__auto__ = typeof times__8841__auto__ === 'number';
var check_params_QMARK___8843__auto__ = cljs.core.contains_QMARK_.call(null,options__8839__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8844__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8839__auto__);
var with__8844__auto____$1 = (((with__8844__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8844__auto__);
var invocations_str__8845__auto__ = (function (p1__8835__8846__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8835__8846__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8842__auto__) && (check_params_QMARK___8843__auto__))){
var matching_invocations__8847__auto__ = cljs.core.filter.call(null,(function (p1__8836__8848__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8844__auto____$1,p1__8836__8848__auto__);
}),invocations__8840__auto__);
var matching_count__8849__auto__ = cljs.core.count.call(null,matching_invocations__8847__auto__);
if(cljs.core._EQ_.call(null,times__8841__auto__,matching_count__8849__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8841__auto__)," ",invocations_str__8845__auto__.call(null,times__8841__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__)," with ",cljs.core.pr_str.call(null,with__8844__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8849__auto__)," ",invocations_str__8845__auto__.call(null,matching_count__8849__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___8843__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8837__8850__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8844__auto____$1,p1__8837__8850__auto__);
}),invocations__8840__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__)," with ",cljs.core.pr_str.call(null,with__8844__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8840__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___8842__auto__){
if(cljs.core._EQ_.call(null,times__8841__auto__,cljs.core.count.call(null,invocations__8840__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8841__auto__)," ",invocations_str__8845__auto__.call(null,times__8841__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8840__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__8840__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8840__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.sleep = sleep_orig_val__15132);

(tic_tac_toe.game.next_state = next_state_orig_val__15131);
}});})(_STAR_parent_description_STAR__orig_val__15113_15173,_STAR_parent_description_STAR__temp_val__15114_15174,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__15067_15136,_STAR_parent_description_STAR__temp_val__15068_15137,description__8450__auto___15135))
,false)],null)));
var chunk__15116_15176 = null;
var count__15117_15177 = (0);
var i__15118_15178 = (0);
while(true){
if((i__15118_15178 < count__15117_15177)){
var component__8451__auto___15181 = cljs.core._nth.call(null,chunk__15116_15176,i__15118_15178);
speclj.components.install.call(null,component__8451__auto___15181,description__8450__auto____$1);


var G__15182 = seq__15115_15175;
var G__15183 = chunk__15116_15176;
var G__15184 = count__15117_15177;
var G__15185 = (i__15118_15178 + (1));
seq__15115_15175 = G__15182;
chunk__15116_15176 = G__15183;
count__15117_15177 = G__15184;
i__15118_15178 = G__15185;
continue;
} else {
var temp__5825__auto___15186 = cljs.core.seq.call(null,seq__15115_15175);
if(temp__5825__auto___15186){
var seq__15115_15187__$1 = temp__5825__auto___15186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15115_15187__$1)){
var c__5548__auto___15188 = cljs.core.chunk_first.call(null,seq__15115_15187__$1);
var G__15189 = cljs.core.chunk_rest.call(null,seq__15115_15187__$1);
var G__15190 = c__5548__auto___15188;
var G__15191 = cljs.core.count.call(null,c__5548__auto___15188);
var G__15192 = (0);
seq__15115_15175 = G__15189;
chunk__15116_15176 = G__15190;
count__15117_15177 = G__15191;
i__15118_15178 = G__15192;
continue;
} else {
var component__8451__auto___15193 = cljs.core.first.call(null,seq__15115_15187__$1);
speclj.components.install.call(null,component__8451__auto___15193,description__8450__auto____$1);


var G__15194 = cljs.core.next.call(null,seq__15115_15187__$1);
var G__15195 = null;
var G__15196 = (0);
var G__15197 = (0);
seq__15115_15175 = G__15194;
chunk__15116_15176 = G__15195;
count__15117_15177 = G__15196;
i__15118_15178 = G__15197;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__15113_15173);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$1);
}

return description__8450__auto____$1;
})()],null)));
var chunk__15070_15139 = null;
var count__15071_15140 = (0);
var i__15072_15141 = (0);
while(true){
if((i__15072_15141 < count__15071_15140)){
var component__8451__auto___15198 = cljs.core._nth.call(null,chunk__15070_15139,i__15072_15141);
speclj.components.install.call(null,component__8451__auto___15198,description__8450__auto___15135);


var G__15199 = seq__15069_15138;
var G__15200 = chunk__15070_15139;
var G__15201 = count__15071_15140;
var G__15202 = (i__15072_15141 + (1));
seq__15069_15138 = G__15199;
chunk__15070_15139 = G__15200;
count__15071_15140 = G__15201;
i__15072_15141 = G__15202;
continue;
} else {
var temp__5825__auto___15203 = cljs.core.seq.call(null,seq__15069_15138);
if(temp__5825__auto___15203){
var seq__15069_15204__$1 = temp__5825__auto___15203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15069_15204__$1)){
var c__5548__auto___15205 = cljs.core.chunk_first.call(null,seq__15069_15204__$1);
var G__15206 = cljs.core.chunk_rest.call(null,seq__15069_15204__$1);
var G__15207 = c__5548__auto___15205;
var G__15208 = cljs.core.count.call(null,c__5548__auto___15205);
var G__15209 = (0);
seq__15069_15138 = G__15206;
chunk__15070_15139 = G__15207;
count__15071_15140 = G__15208;
i__15072_15141 = G__15209;
continue;
} else {
var component__8451__auto___15210 = cljs.core.first.call(null,seq__15069_15204__$1);
speclj.components.install.call(null,component__8451__auto___15210,description__8450__auto___15135);


var G__15211 = cljs.core.next.call(null,seq__15069_15204__$1);
var G__15212 = null;
var G__15213 = (0);
var G__15214 = (0);
seq__15069_15138 = G__15211;
chunk__15070_15139 = G__15212;
count__15071_15140 = G__15213;
i__15072_15141 = G__15214;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__15067_15136);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto___15135);
}


//# sourceMappingURL=setup_spec.js.map
