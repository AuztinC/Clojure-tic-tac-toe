// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.persistence_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.persistence');
goog.require('tic_tac_toe.board');
var description__10102__auto___13745 = speclj.components.new_description.call(null,"persistence",false,"tic-tac-toe.persistence-spec");
var _STAR_parent_description_STAR__orig_val__13647_13746 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13648_13747 = description__10102__auto___13745;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13648_13747);

try{var seq__13649_13748 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745){
return (function (it__10476__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__13699 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__13700 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__13700);

try{return it__10476__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__13699);
}});})(_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.persistence.mem_db,cljs.core.PersistentArrayMap.EMPTY);
});})(_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745))
),speclj.components.new_after.call(null,((function (_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.persistence.mem_db,cljs.core.PersistentArrayMap.EMPTY);
});})(_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745))
),(function (){var description__10102__auto____$1 = speclj.components.new_description.call(null,"set new game id",false,"tic-tac-toe.persistence-spec");
var _STAR_parent_description_STAR__orig_val__13701_13752 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13702_13753 = description__10102__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13702_13753);

try{var seq__13703_13754 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"return zero for empty file",((function (_STAR_parent_description_STAR__orig_val__13701_13752,_STAR_parent_description_STAR__temp_val__13702_13753,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto__ = (0);
var actual__10245__auto__ = tic_tac_toe.persistence.set_new_game_id.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"mem","mem",-1804286459)], null));
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
});})(_STAR_parent_description_STAR__orig_val__13701_13752,_STAR_parent_description_STAR__temp_val__13702_13753,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745))
,false),speclj.components.new_characteristic.call(null,"returns 1 for single game in file",((function (_STAR_parent_description_STAR__orig_val__13701_13752,_STAR_parent_description_STAR__temp_val__13702_13753,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.persistence.mem_db,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null)], null)], null));

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto__ = (1);
var actual__10245__auto__ = tic_tac_toe.persistence.set_new_game_id.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"mem","mem",-1804286459)], null));
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
});})(_STAR_parent_description_STAR__orig_val__13701_13752,_STAR_parent_description_STAR__temp_val__13702_13753,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745))
,false)],null)));
var chunk__13704_13755 = null;
var count__13705_13756 = (0);
var i__13706_13757 = (0);
while(true){
if((i__13706_13757 < count__13705_13756)){
var component__10103__auto___13758 = cljs.core._nth.call(null,chunk__13704_13755,i__13706_13757);
speclj.components.install.call(null,component__10103__auto___13758,description__10102__auto____$1);


var G__13759 = seq__13703_13754;
var G__13760 = chunk__13704_13755;
var G__13761 = count__13705_13756;
var G__13762 = (i__13706_13757 + (1));
seq__13703_13754 = G__13759;
chunk__13704_13755 = G__13760;
count__13705_13756 = G__13761;
i__13706_13757 = G__13762;
continue;
} else {
var temp__5825__auto___13763 = cljs.core.seq.call(null,seq__13703_13754);
if(temp__5825__auto___13763){
var seq__13703_13764__$1 = temp__5825__auto___13763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13703_13764__$1)){
var c__5548__auto___13765 = cljs.core.chunk_first.call(null,seq__13703_13764__$1);
var G__13766 = cljs.core.chunk_rest.call(null,seq__13703_13764__$1);
var G__13767 = c__5548__auto___13765;
var G__13768 = cljs.core.count.call(null,c__5548__auto___13765);
var G__13769 = (0);
seq__13703_13754 = G__13766;
chunk__13704_13755 = G__13767;
count__13705_13756 = G__13768;
i__13706_13757 = G__13769;
continue;
} else {
var component__10103__auto___13770 = cljs.core.first.call(null,seq__13703_13764__$1);
speclj.components.install.call(null,component__10103__auto___13770,description__10102__auto____$1);


var G__13771 = cljs.core.next.call(null,seq__13703_13764__$1);
var G__13772 = null;
var G__13773 = (0);
var G__13774 = (0);
seq__13703_13754 = G__13771;
chunk__13704_13755 = G__13772;
count__13705_13756 = G__13773;
i__13706_13757 = G__13774;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13701_13752);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10102__auto____$1);
}

return description__10102__auto____$1;
})(),(function (){var description__10102__auto____$1 = speclj.components.new_description.call(null,"find game by id",false,"tic-tac-toe.persistence-spec");
var _STAR_parent_description_STAR__orig_val__13707_13775 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13708_13776 = description__10102__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13708_13776);

try{var seq__13709_13777 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns nil if empty",((function (_STAR_parent_description_STAR__orig_val__13707_13775,_STAR_parent_description_STAR__temp_val__13708_13776,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.persistence.find_game_by_id.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"mem","mem",-1804286459)], null),(0));
if(cljs.core.truth_(temp__5825__auto__)){
var value__10238__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__10238__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__13707_13775,_STAR_parent_description_STAR__temp_val__13708_13776,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745))
,false),speclj.components.new_characteristic.call(null,"returns game with one move",((function (_STAR_parent_description_STAR__orig_val__13707_13775,_STAR_parent_description_STAR__temp_val__13708_13776,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745){
return (function (){
var state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"difficulties","difficulties",179230342),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"mem","mem",-1804286459),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null),new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),"X",new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null)], null)], null);
var new_state = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.persistence.play_board.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"turn","turn",75759344),tic_tac_toe.persistence.next_player.call(null,new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(state));
cljs.core.reset_BANG_.call(null,tic_tac_toe.persistence.mem_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null));

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto__ = new_state;
var actual__10245__auto__ = tic_tac_toe.persistence.find_game_by_id.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"mem","mem",-1804286459)], null),(0));
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
});})(_STAR_parent_description_STAR__orig_val__13707_13775,_STAR_parent_description_STAR__temp_val__13708_13776,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745))
,false)],null)));
var chunk__13710_13778 = null;
var count__13711_13779 = (0);
var i__13712_13780 = (0);
while(true){
if((i__13712_13780 < count__13711_13779)){
var component__10103__auto___13781 = cljs.core._nth.call(null,chunk__13710_13778,i__13712_13780);
speclj.components.install.call(null,component__10103__auto___13781,description__10102__auto____$1);


var G__13782 = seq__13709_13777;
var G__13783 = chunk__13710_13778;
var G__13784 = count__13711_13779;
var G__13785 = (i__13712_13780 + (1));
seq__13709_13777 = G__13782;
chunk__13710_13778 = G__13783;
count__13711_13779 = G__13784;
i__13712_13780 = G__13785;
continue;
} else {
var temp__5825__auto___13786 = cljs.core.seq.call(null,seq__13709_13777);
if(temp__5825__auto___13786){
var seq__13709_13787__$1 = temp__5825__auto___13786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13709_13787__$1)){
var c__5548__auto___13788 = cljs.core.chunk_first.call(null,seq__13709_13787__$1);
var G__13789 = cljs.core.chunk_rest.call(null,seq__13709_13787__$1);
var G__13790 = c__5548__auto___13788;
var G__13791 = cljs.core.count.call(null,c__5548__auto___13788);
var G__13792 = (0);
seq__13709_13777 = G__13789;
chunk__13710_13778 = G__13790;
count__13711_13779 = G__13791;
i__13712_13780 = G__13792;
continue;
} else {
var component__10103__auto___13793 = cljs.core.first.call(null,seq__13709_13787__$1);
speclj.components.install.call(null,component__10103__auto___13793,description__10102__auto____$1);


var G__13794 = cljs.core.next.call(null,seq__13709_13787__$1);
var G__13795 = null;
var G__13796 = (0);
var G__13797 = (0);
seq__13709_13777 = G__13794;
chunk__13710_13778 = G__13795;
count__13711_13779 = G__13796;
i__13712_13780 = G__13797;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13707_13775);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10102__auto____$1);
}

return description__10102__auto____$1;
})(),(function (){var description__10102__auto____$1 = speclj.components.new_description.call(null,"update game atom",false,"tic-tac-toe.persistence-spec");
var _STAR_parent_description_STAR__orig_val__13713_13798 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13714_13799 = description__10102__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13714_13799);

try{var seq__13715_13800 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"creates game with move when none exist",((function (_STAR_parent_description_STAR__orig_val__13713_13798,_STAR_parent_description_STAR__temp_val__13714_13799,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745){
return (function (){
var find_game_by_id_orig_val__13721 = tic_tac_toe.persistence.find_game_by_id;
var find_game_by_id_temp_val__13722 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"find-game-by-id","find-game-by-id",986227618),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),null], null));
(tic_tac_toe.persistence.find_game_by_id = find_game_by_id_temp_val__13722);

try{var state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"difficulties","difficulties",179230342),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"board","board",-1907017633)],[new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"mem","mem",-1804286459),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null),new cljs.core.Keyword(null,"3x3","3x3",570362544),"p2",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),true,(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)], null)]);
var move = (0);
tic_tac_toe.persistence.update_current_game_BANG_.call(null,state,move);

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto__ = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"difficulties","difficulties",179230342),new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"active","active",1895962068),true], null),new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),"X",new cljs.core.Keyword(null,"position","position",-2011731912),move], null)], null)], null)]);
var actual__10245__auto__ = cljs.core.deref.call(null,tic_tac_toe.persistence.mem_db);
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
}finally {(tic_tac_toe.persistence.find_game_by_id = find_game_by_id_orig_val__13721);
}});})(_STAR_parent_description_STAR__orig_val__13713_13798,_STAR_parent_description_STAR__temp_val__13714_13799,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745))
,false),speclj.components.new_characteristic.call(null,"creates game with move when no game in progress",((function (_STAR_parent_description_STAR__orig_val__13713_13798,_STAR_parent_description_STAR__temp_val__13714_13799,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745){
return (function (){
var old_state = new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"difficulties","difficulties",179230342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"mem","mem",-1804286459),new cljs.core.Keyword(null,"active","active",1895962068),false], null),new cljs.core.Keyword(null,"moves","moves",927465255),cljs.core.map.call(null,(function (p1__13644_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"player","player",-97687400),"X",new cljs.core.Keyword(null,"position","position",-2011731912),p1__13644_SHARP_);
}),cljs.core.range.call(null,(9)))], null)], null);
var new_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"difficulties","difficulties",179230342),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"board","board",-1907017633)],[new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"mem","mem",-1804286459),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null),new cljs.core.Keyword(null,"3x3","3x3",570362544),"p2",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),true,(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)], null)]);
var move = (0);
cljs.core.reset_BANG_.call(null,tic_tac_toe.persistence.mem_db,old_state);

tic_tac_toe.persistence.update_current_game_BANG_.call(null,new_state,move);

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto__ = cljs.core.merge.call(null,old_state,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"difficulties","difficulties",179230342),new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"active","active",1895962068),true], null),new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),"X",new cljs.core.Keyword(null,"position","position",-2011731912),move], null)], null)], null)]));
var actual__10245__auto__ = cljs.core.deref.call(null,tic_tac_toe.persistence.mem_db);
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
});})(_STAR_parent_description_STAR__orig_val__13713_13798,_STAR_parent_description_STAR__temp_val__13714_13799,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745))
,false),speclj.components.new_characteristic.call(null,"adds new move to current game",((function (_STAR_parent_description_STAR__orig_val__13713_13798,_STAR_parent_description_STAR__temp_val__13714_13799,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745){
return (function (){
var old_state = new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"difficulties","difficulties",179230342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null),new cljs.core.Keyword(null,"active","active",1895962068),true], null),new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),"X",new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null)], null)], null)], null);
var new_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"difficulties","difficulties",179230342),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"board","board",-1907017633)],[new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"mem","mem",-1804286459),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null),new cljs.core.Keyword(null,"3x3","3x3",570362544),"p2",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),true,(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)], null)]);
var move = (1);
cljs.core.reset_BANG_.call(null,tic_tac_toe.persistence.mem_db,old_state);

tic_tac_toe.persistence.update_current_game_BANG_.call(null,new_state,move);

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto__ = cljs.core.merge.call(null,old_state,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"difficulties","difficulties",179230342),new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"active","active",1895962068),true], null),new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),"X",new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),"O",new cljs.core.Keyword(null,"position","position",-2011731912),(1)], null)], null)], null)]));
var actual__10245__auto__ = cljs.core.deref.call(null,tic_tac_toe.persistence.mem_db);
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
});})(_STAR_parent_description_STAR__orig_val__13713_13798,_STAR_parent_description_STAR__temp_val__13714_13799,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745))
,false)],null)));
var chunk__13716_13801 = null;
var count__13717_13802 = (0);
var i__13718_13803 = (0);
while(true){
if((i__13718_13803 < count__13717_13802)){
var component__10103__auto___13804 = cljs.core._nth.call(null,chunk__13716_13801,i__13718_13803);
speclj.components.install.call(null,component__10103__auto___13804,description__10102__auto____$1);


var G__13805 = seq__13715_13800;
var G__13806 = chunk__13716_13801;
var G__13807 = count__13717_13802;
var G__13808 = (i__13718_13803 + (1));
seq__13715_13800 = G__13805;
chunk__13716_13801 = G__13806;
count__13717_13802 = G__13807;
i__13718_13803 = G__13808;
continue;
} else {
var temp__5825__auto___13809 = cljs.core.seq.call(null,seq__13715_13800);
if(temp__5825__auto___13809){
var seq__13715_13810__$1 = temp__5825__auto___13809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13715_13810__$1)){
var c__5548__auto___13811 = cljs.core.chunk_first.call(null,seq__13715_13810__$1);
var G__13812 = cljs.core.chunk_rest.call(null,seq__13715_13810__$1);
var G__13813 = c__5548__auto___13811;
var G__13814 = cljs.core.count.call(null,c__5548__auto___13811);
var G__13815 = (0);
seq__13715_13800 = G__13812;
chunk__13716_13801 = G__13813;
count__13717_13802 = G__13814;
i__13718_13803 = G__13815;
continue;
} else {
var component__10103__auto___13816 = cljs.core.first.call(null,seq__13715_13810__$1);
speclj.components.install.call(null,component__10103__auto___13816,description__10102__auto____$1);


var G__13817 = cljs.core.next.call(null,seq__13715_13810__$1);
var G__13818 = null;
var G__13819 = (0);
var G__13820 = (0);
seq__13715_13800 = G__13817;
chunk__13716_13801 = G__13818;
count__13717_13802 = G__13819;
i__13718_13803 = G__13820;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13713_13798);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10102__auto____$1);
}

return description__10102__auto____$1;
})(),(function (){var description__10102__auto____$1 = speclj.components.new_description.call(null,"in progress",false,"tic-tac-toe.persistence-spec");
var _STAR_parent_description_STAR__orig_val__13723_13821 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13724_13822 = description__10102__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13724_13822);

try{var seq__13725_13823 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false if :current-game-id's game complete",((function (_STAR_parent_description_STAR__orig_val__13723_13821,_STAR_parent_description_STAR__temp_val__13724_13822,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.persistence.mem_db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-game-id","current-game-id",944092117),(0),(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"difficulties","difficulties",179230342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null)], null),new cljs.core.Keyword(null,"moves","moves",927465255),cljs.core.map.call(null,(function (p1__13645_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"player","player",-97687400),"X",new cljs.core.Keyword(null,"position","position",-2011731912),p1__13645_SHARP_);
}),cljs.core.range.call(null,(9)))], null)], null));

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.persistence.in_progress_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"mem","mem",-1804286459)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var value__10238__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__10238__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__13723_13821,_STAR_parent_description_STAR__temp_val__13724_13822,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745))
,false),speclj.components.new_characteristic.call(null,"returns true if :current-game-id's game complete",((function (_STAR_parent_description_STAR__orig_val__13723_13821,_STAR_parent_description_STAR__temp_val__13724_13822,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.persistence.mem_db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-game-id","current-game-id",944092117),(0),(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"difficulties","difficulties",179230342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null)], null),new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),"X",new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),"O",new cljs.core.Keyword(null,"position","position",-2011731912),(1)], null)], null)], null)], null));

speclj.components.inc_assertions_BANG_.call(null);

var value__10232__auto__ = tic_tac_toe.persistence.in_progress_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"mem","mem",-1804286459)], null));
if(cljs.core.truth_(value__10232__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__10232__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__13723_13821,_STAR_parent_description_STAR__temp_val__13724_13822,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745))
,false)],null)));
var chunk__13726_13824 = null;
var count__13727_13825 = (0);
var i__13728_13826 = (0);
while(true){
if((i__13728_13826 < count__13727_13825)){
var component__10103__auto___13827 = cljs.core._nth.call(null,chunk__13726_13824,i__13728_13826);
speclj.components.install.call(null,component__10103__auto___13827,description__10102__auto____$1);


var G__13828 = seq__13725_13823;
var G__13829 = chunk__13726_13824;
var G__13830 = count__13727_13825;
var G__13831 = (i__13728_13826 + (1));
seq__13725_13823 = G__13828;
chunk__13726_13824 = G__13829;
count__13727_13825 = G__13830;
i__13728_13826 = G__13831;
continue;
} else {
var temp__5825__auto___13832 = cljs.core.seq.call(null,seq__13725_13823);
if(temp__5825__auto___13832){
var seq__13725_13833__$1 = temp__5825__auto___13832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13725_13833__$1)){
var c__5548__auto___13834 = cljs.core.chunk_first.call(null,seq__13725_13833__$1);
var G__13835 = cljs.core.chunk_rest.call(null,seq__13725_13833__$1);
var G__13836 = c__5548__auto___13834;
var G__13837 = cljs.core.count.call(null,c__5548__auto___13834);
var G__13838 = (0);
seq__13725_13823 = G__13835;
chunk__13726_13824 = G__13836;
count__13727_13825 = G__13837;
i__13728_13826 = G__13838;
continue;
} else {
var component__10103__auto___13839 = cljs.core.first.call(null,seq__13725_13833__$1);
speclj.components.install.call(null,component__10103__auto___13839,description__10102__auto____$1);


var G__13840 = cljs.core.next.call(null,seq__13725_13833__$1);
var G__13841 = null;
var G__13842 = (0);
var G__13843 = (0);
seq__13725_13823 = G__13840;
chunk__13726_13824 = G__13841;
count__13727_13825 = G__13842;
i__13728_13826 = G__13843;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13723_13821);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10102__auto____$1);
}

return description__10102__auto____$1;
})(),(function (){var description__10102__auto____$1 = speclj.components.new_description.call(null,"previous games",false,"tic-tac-toe.persistence-spec");
var _STAR_parent_description_STAR__orig_val__13729_13844 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13730_13845 = description__10102__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13730_13845);

try{var seq__13731_13846 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false if no games in file",((function (_STAR_parent_description_STAR__orig_val__13729_13844,_STAR_parent_description_STAR__temp_val__13730_13845,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.persistence.mem_db,cljs.core.PersistentArrayMap.EMPTY);

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.persistence.previous_games_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"mem","mem",-1804286459)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var value__10238__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__10238__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__13729_13844,_STAR_parent_description_STAR__temp_val__13730_13845,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745))
,false),speclj.components.new_characteristic.call(null,"returns true if previous game complete in file",((function (_STAR_parent_description_STAR__orig_val__13729_13844,_STAR_parent_description_STAR__temp_val__13730_13845,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.persistence.mem_db,new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"difficulties","difficulties",179230342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null),new cljs.core.Keyword(null,"active","active",1895962068),false], null),new cljs.core.Keyword(null,"moves","moves",927465255),cljs.core.map.call(null,(function (p1__13646_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"player","player",-97687400),"X",new cljs.core.Keyword(null,"position","position",-2011731912),p1__13646_SHARP_);
}),cljs.core.range.call(null,(9)))], null)], null));

speclj.components.inc_assertions_BANG_.call(null);

var value__10232__auto__ = tic_tac_toe.persistence.previous_games_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"mem","mem",-1804286459)], null));
if(cljs.core.truth_(value__10232__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__10232__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__13729_13844,_STAR_parent_description_STAR__temp_val__13730_13845,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745))
,false)],null)));
var chunk__13732_13847 = null;
var count__13733_13848 = (0);
var i__13734_13849 = (0);
while(true){
if((i__13734_13849 < count__13733_13848)){
var component__10103__auto___13850 = cljs.core._nth.call(null,chunk__13732_13847,i__13734_13849);
speclj.components.install.call(null,component__10103__auto___13850,description__10102__auto____$1);


var G__13851 = seq__13731_13846;
var G__13852 = chunk__13732_13847;
var G__13853 = count__13733_13848;
var G__13854 = (i__13734_13849 + (1));
seq__13731_13846 = G__13851;
chunk__13732_13847 = G__13852;
count__13733_13848 = G__13853;
i__13734_13849 = G__13854;
continue;
} else {
var temp__5825__auto___13855 = cljs.core.seq.call(null,seq__13731_13846);
if(temp__5825__auto___13855){
var seq__13731_13856__$1 = temp__5825__auto___13855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13731_13856__$1)){
var c__5548__auto___13857 = cljs.core.chunk_first.call(null,seq__13731_13856__$1);
var G__13858 = cljs.core.chunk_rest.call(null,seq__13731_13856__$1);
var G__13859 = c__5548__auto___13857;
var G__13860 = cljs.core.count.call(null,c__5548__auto___13857);
var G__13861 = (0);
seq__13731_13846 = G__13858;
chunk__13732_13847 = G__13859;
count__13733_13848 = G__13860;
i__13734_13849 = G__13861;
continue;
} else {
var component__10103__auto___13862 = cljs.core.first.call(null,seq__13731_13856__$1);
speclj.components.install.call(null,component__10103__auto___13862,description__10102__auto____$1);


var G__13863 = cljs.core.next.call(null,seq__13731_13856__$1);
var G__13864 = null;
var G__13865 = (0);
var G__13866 = (0);
seq__13731_13846 = G__13863;
chunk__13732_13847 = G__13864;
count__13733_13848 = G__13865;
i__13734_13849 = G__13866;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13729_13844);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10102__auto____$1);
}

return description__10102__auto____$1;
})(),(function (){var description__10102__auto____$1 = speclj.components.new_description.call(null,"clear current active",false,"tic-tac-toe.persistence-spec");
var _STAR_parent_description_STAR__orig_val__13735_13867 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13736_13868 = description__10102__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13736_13868);

try{var seq__13737_13869 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"sets previous active false",((function (_STAR_parent_description_STAR__orig_val__13735_13867,_STAR_parent_description_STAR__temp_val__13736_13868,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.persistence.mem_db,new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"difficulties","difficulties",179230342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null),new cljs.core.Keyword(null,"active","active",1895962068),true], null),new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),"X",new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),"O",new cljs.core.Keyword(null,"position","position",-2011731912),(1)], null)], null)], null)], null));

var reset_BANG__orig_val__13743 = cljs.core.reset_BANG_;
var reset_BANG__temp_val__13744 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"reset!","reset!",-1113255895),cljs.core.PersistentArrayMap.EMPTY);
(cljs.core.reset_BANG_ = reset_BANG__temp_val__13744);

try{var state = new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"difficulties","difficulties",179230342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null),new cljs.core.Keyword(null,"active","active",1895962068),false], null),new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),"X",new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),"O",new cljs.core.Keyword(null,"position","position",-2011731912),(1)], null)], null)], null)], null);
tic_tac_toe.persistence.clear_active.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"mem","mem",-1804286459)], null));

speclj.components.inc_assertions_BANG_.call(null);

var name__10490__auto__ = new cljs.core.Keyword(null,"reset!","reset!",-1113255895);
var options__10491__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.persistence.mem_db,state], null)], null);
var invocations__10492__auto__ = speclj.stub.invocations_of.call(null,name__10490__auto__);
var times__10493__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10491__auto__);
var times_QMARK___10494__auto__ = typeof times__10493__auto__ === 'number';
var check_params_QMARK___10495__auto__ = cljs.core.contains_QMARK_.call(null,options__10491__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10496__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10491__auto__);
var with__10496__auto____$1 = (((with__10496__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10496__auto__);
var invocations_str__10497__auto__ = (function (p1__10487__10498__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10487__10498__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10494__auto__) && (check_params_QMARK___10495__auto__))){
var matching_invocations__10499__auto__ = cljs.core.filter.call(null,(function (p1__10488__10500__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10496__auto____$1,p1__10488__10500__auto__);
}),invocations__10492__auto__);
var matching_count__10501__auto__ = cljs.core.count.call(null,matching_invocations__10499__auto__);
if(cljs.core._EQ_.call(null,times__10493__auto__,matching_count__10501__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10493__auto__)," ",invocations_str__10497__auto__.call(null,times__10493__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10490__auto__)," with ",cljs.core.pr_str.call(null,with__10496__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10501__auto__)," ",invocations_str__10497__auto__.call(null,matching_count__10501__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___10495__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10489__10502__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10496__auto____$1,p1__10489__10502__auto__);
}),invocations__10492__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10490__auto__)," with ",cljs.core.pr_str.call(null,with__10496__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10492__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___10494__auto__){
if(cljs.core._EQ_.call(null,times__10493__auto__,cljs.core.count.call(null,invocations__10492__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10493__auto__)," ",invocations_str__10497__auto__.call(null,times__10493__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10490__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10492__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__10492__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10490__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10492__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(cljs.core.reset_BANG_ = reset_BANG__orig_val__13743);
}});})(_STAR_parent_description_STAR__orig_val__13735_13867,_STAR_parent_description_STAR__temp_val__13736_13868,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__13647_13746,_STAR_parent_description_STAR__temp_val__13648_13747,description__10102__auto___13745))
,false)],null)));
var chunk__13738_13870 = null;
var count__13739_13871 = (0);
var i__13740_13872 = (0);
while(true){
if((i__13740_13872 < count__13739_13871)){
var component__10103__auto___13873 = cljs.core._nth.call(null,chunk__13738_13870,i__13740_13872);
speclj.components.install.call(null,component__10103__auto___13873,description__10102__auto____$1);


var G__13874 = seq__13737_13869;
var G__13875 = chunk__13738_13870;
var G__13876 = count__13739_13871;
var G__13877 = (i__13740_13872 + (1));
seq__13737_13869 = G__13874;
chunk__13738_13870 = G__13875;
count__13739_13871 = G__13876;
i__13740_13872 = G__13877;
continue;
} else {
var temp__5825__auto___13878 = cljs.core.seq.call(null,seq__13737_13869);
if(temp__5825__auto___13878){
var seq__13737_13879__$1 = temp__5825__auto___13878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13737_13879__$1)){
var c__5548__auto___13880 = cljs.core.chunk_first.call(null,seq__13737_13879__$1);
var G__13881 = cljs.core.chunk_rest.call(null,seq__13737_13879__$1);
var G__13882 = c__5548__auto___13880;
var G__13883 = cljs.core.count.call(null,c__5548__auto___13880);
var G__13884 = (0);
seq__13737_13869 = G__13881;
chunk__13738_13870 = G__13882;
count__13739_13871 = G__13883;
i__13740_13872 = G__13884;
continue;
} else {
var component__10103__auto___13885 = cljs.core.first.call(null,seq__13737_13879__$1);
speclj.components.install.call(null,component__10103__auto___13885,description__10102__auto____$1);


var G__13886 = cljs.core.next.call(null,seq__13737_13879__$1);
var G__13887 = null;
var G__13888 = (0);
var G__13889 = (0);
seq__13737_13869 = G__13886;
chunk__13738_13870 = G__13887;
count__13739_13871 = G__13888;
i__13740_13872 = G__13889;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13735_13867);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10102__auto____$1);
}

return description__10102__auto____$1;
})()],null)));
var chunk__13650_13749 = null;
var count__13651_13750 = (0);
var i__13652_13751 = (0);
while(true){
if((i__13652_13751 < count__13651_13750)){
var component__10103__auto___13890 = cljs.core._nth.call(null,chunk__13650_13749,i__13652_13751);
speclj.components.install.call(null,component__10103__auto___13890,description__10102__auto___13745);


var G__13891 = seq__13649_13748;
var G__13892 = chunk__13650_13749;
var G__13893 = count__13651_13750;
var G__13894 = (i__13652_13751 + (1));
seq__13649_13748 = G__13891;
chunk__13650_13749 = G__13892;
count__13651_13750 = G__13893;
i__13652_13751 = G__13894;
continue;
} else {
var temp__5825__auto___13895 = cljs.core.seq.call(null,seq__13649_13748);
if(temp__5825__auto___13895){
var seq__13649_13896__$1 = temp__5825__auto___13895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13649_13896__$1)){
var c__5548__auto___13897 = cljs.core.chunk_first.call(null,seq__13649_13896__$1);
var G__13898 = cljs.core.chunk_rest.call(null,seq__13649_13896__$1);
var G__13899 = c__5548__auto___13897;
var G__13900 = cljs.core.count.call(null,c__5548__auto___13897);
var G__13901 = (0);
seq__13649_13748 = G__13898;
chunk__13650_13749 = G__13899;
count__13651_13750 = G__13900;
i__13652_13751 = G__13901;
continue;
} else {
var component__10103__auto___13902 = cljs.core.first.call(null,seq__13649_13896__$1);
speclj.components.install.call(null,component__10103__auto___13902,description__10102__auto___13745);


var G__13903 = cljs.core.next.call(null,seq__13649_13896__$1);
var G__13904 = null;
var G__13905 = (0);
var G__13906 = (0);
seq__13649_13748 = G__13903;
chunk__13650_13749 = G__13904;
count__13651_13750 = G__13905;
i__13652_13751 = G__13906;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13647_13746);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10102__auto___13745);
}


//# sourceMappingURL=persistence_spec.js.map
