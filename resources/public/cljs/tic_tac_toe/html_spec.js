// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.html_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.html');
goog.require('tic_tac_toe.human_turn');
goog.require('tic_tac_toe.setup');
goog.require('tic_tac_toe.main');
tic_tac_toe.html_spec.cell_count = (function tic_tac_toe$html_spec$cell_count(size){
var state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board-size","board-size",140730505),size], null);
var out = tic_tac_toe.html.render_board.call(null,state);
var row_count = cljs.core.count.call(null,cljs.core.first.call(null,out));
var column_count = cljs.core.count.call(null,out);
var cell_count = (row_count * column_count);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-count","row-count",1060167988),row_count,new cljs.core.Keyword(null,"column-count","column-count",1235131236),column_count,new cljs.core.Keyword(null,"cell-count","cell-count",-441457582),cell_count], null);
});
var description__10061__auto___22429 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__22311_22430 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22312_22431 = description__10061__auto___22429;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22312_22431);

try{var seq__22313_22432 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (it__10435__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__22373 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__22374 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__22374);

try{return it__10435__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__22373);
}});})(_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"updated state atom with screen on click",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__22375_22436 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22376_22437 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22376_22437);

try{var seq__22377_22438 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__10061__auto____$2 = speclj.components.new_description.call(null,"select-game-mode",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__22393_22442 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22394_22443 = description__10061__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22394_22443);

try{var seq__22395_22444 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"clicking Human vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__22393_22442,_STAR_parent_description_STAR__temp_val__22394_22443,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22448 = "Human vs AI";
var actual__10204__auto___22449 = c3kit.wire.spec_helper.text.call(null,"#human-vs-ai");
if(cljs.core._EQ_.call(null,expected__10203__auto___22448,actual__10204__auto___22449)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22448;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22449;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-ai");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22450 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10204__auto___22451 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10203__auto___22450,actual__10204__auto___22451)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22450;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22451;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__10204__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__22393_22442,_STAR_parent_description_STAR__temp_val__22394_22443,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__22393_22442,_STAR_parent_description_STAR__temp_val__22394_22443,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22452 = "AI vs Human";
var actual__10204__auto___22453 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-human");
if(cljs.core._EQ_.call(null,expected__10203__auto___22452,actual__10204__auto___22453)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22452;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22453;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22454 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10204__auto___22455 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10203__auto___22454,actual__10204__auto___22455)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22454;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22455;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__10204__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__22393_22442,_STAR_parent_description_STAR__temp_val__22394_22443,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
,false),speclj.components.new_characteristic.call(null,"clicking Human vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__22393_22442,_STAR_parent_description_STAR__temp_val__22394_22443,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22456 = "Human vs Human";
var actual__10204__auto___22457 = c3kit.wire.spec_helper.text.call(null,"#human-vs-human");
if(cljs.core._EQ_.call(null,expected__10203__auto___22456,actual__10204__auto___22457)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22456;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22457;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22458 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10204__auto___22459 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10203__auto___22458,actual__10204__auto___22459)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22458;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22459;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__10204__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__22393_22442,_STAR_parent_description_STAR__temp_val__22394_22443,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__22393_22442,_STAR_parent_description_STAR__temp_val__22394_22443,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22460 = "AI vs AI";
var actual__10204__auto___22461 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-ai");
if(cljs.core._EQ_.call(null,expected__10203__auto___22460,actual__10204__auto___22461)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22460;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22461;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-ai");

var out = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22462 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10204__auto___22463 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10203__auto___22462,actual__10204__auto___22463)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22462;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22463;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__10204__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__22393_22442,_STAR_parent_description_STAR__temp_val__22394_22443,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
,false)],null)));
var chunk__22396_22445 = null;
var count__22397_22446 = (0);
var i__22398_22447 = (0);
while(true){
if((i__22398_22447 < count__22397_22446)){
var component__10062__auto___22464 = cljs.core._nth.call(null,chunk__22396_22445,i__22398_22447);
speclj.components.install.call(null,component__10062__auto___22464,description__10061__auto____$2);


var G__22465 = seq__22395_22444;
var G__22466 = chunk__22396_22445;
var G__22467 = count__22397_22446;
var G__22468 = (i__22398_22447 + (1));
seq__22395_22444 = G__22465;
chunk__22396_22445 = G__22466;
count__22397_22446 = G__22467;
i__22398_22447 = G__22468;
continue;
} else {
var temp__5825__auto___22469 = cljs.core.seq.call(null,seq__22395_22444);
if(temp__5825__auto___22469){
var seq__22395_22470__$1 = temp__5825__auto___22469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22395_22470__$1)){
var c__5548__auto___22471 = cljs.core.chunk_first.call(null,seq__22395_22470__$1);
var G__22472 = cljs.core.chunk_rest.call(null,seq__22395_22470__$1);
var G__22473 = c__5548__auto___22471;
var G__22474 = cljs.core.count.call(null,c__5548__auto___22471);
var G__22475 = (0);
seq__22395_22444 = G__22472;
chunk__22396_22445 = G__22473;
count__22397_22446 = G__22474;
i__22398_22447 = G__22475;
continue;
} else {
var component__10062__auto___22476 = cljs.core.first.call(null,seq__22395_22470__$1);
speclj.components.install.call(null,component__10062__auto___22476,description__10061__auto____$2);


var G__22477 = cljs.core.next.call(null,seq__22395_22470__$1);
var G__22478 = null;
var G__22479 = (0);
var G__22480 = (0);
seq__22395_22444 = G__22477;
chunk__22396_22445 = G__22478;
count__22397_22446 = G__22479;
i__22398_22447 = G__22480;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22393_22442);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$2);
}

return description__10061__auto____$2;
})(),(function (){var description__10061__auto____$2 = speclj.components.new_description.call(null,"select-board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__22399_22481 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22400_22482 = description__10061__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22400_22482);

try{var seq__22401_22483 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__22399_22481,_STAR_parent_description_STAR__temp_val__22400_22482,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__22399_22481,_STAR_parent_description_STAR__temp_val__22400_22482,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
),speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__22399_22481,_STAR_parent_description_STAR__temp_val__22400_22482,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
var value__10565__auto___22487 = "#board-3x3";
var node__10566__auto___22488 = c3kit.wire.spec_helper.select.call(null,value__10565__auto___22487);
if(cljs.core.truth_(node__10566__auto___22488)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10565__auto___22487;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22489 = "3x3";
var actual__10204__auto___22490 = c3kit.wire.spec_helper.text.call(null,"#board-3x3");
if(cljs.core._EQ_.call(null,expected__10203__auto___22489,actual__10204__auto___22490)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22489;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22490;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22491 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10204__auto___22492 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10203__auto___22491,actual__10204__auto___22492)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22491;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22492;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22493 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10204__auto___22494 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10203__auto___22493,actual__10204__auto___22494)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22493;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22494;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10204__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__22399_22481,_STAR_parent_description_STAR__temp_val__22400_22482,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
,false),speclj.components.new_characteristic.call(null,"4x4",((function (_STAR_parent_description_STAR__orig_val__22399_22481,_STAR_parent_description_STAR__temp_val__22400_22482,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
var value__10565__auto___22495 = "#board-4x4";
var node__10566__auto___22496 = c3kit.wire.spec_helper.select.call(null,value__10565__auto___22495);
if(cljs.core.truth_(node__10566__auto___22496)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10565__auto___22495;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22497 = "4x4";
var actual__10204__auto___22498 = c3kit.wire.spec_helper.text.call(null,"#board-4x4");
if(cljs.core._EQ_.call(null,expected__10203__auto___22497,actual__10204__auto___22498)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22497;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22498;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-4x4");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22499 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10204__auto___22500 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10203__auto___22499,actual__10204__auto___22500)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22499;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22500;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22501 = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__10204__auto___22502 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10203__auto___22501,actual__10204__auto___22502)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22501;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22502;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__10204__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__22399_22481,_STAR_parent_description_STAR__temp_val__22400_22482,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
,false),speclj.components.new_characteristic.call(null,"3x3x3",((function (_STAR_parent_description_STAR__orig_val__22399_22481,_STAR_parent_description_STAR__temp_val__22400_22482,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
var value__10565__auto___22503 = "#board-3x3x3";
var node__10566__auto___22504 = c3kit.wire.spec_helper.select.call(null,value__10565__auto___22503);
if(cljs.core.truth_(node__10566__auto___22504)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10565__auto___22503;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22505 = "3x3x3";
var actual__10204__auto___22506 = c3kit.wire.spec_helper.text.call(null,"#board-3x3x3");
if(cljs.core._EQ_.call(null,expected__10203__auto___22505,actual__10204__auto___22506)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22505;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22506;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22507 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10204__auto___22508 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10203__auto___22507,actual__10204__auto___22508)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22507;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22508;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22509 = new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540);
var actual__10204__auto___22510 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10203__auto___22509,actual__10204__auto___22510)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22509;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22510;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
var actual__10204__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__22399_22481,_STAR_parent_description_STAR__temp_val__22400_22482,description__10061__auto____$2,_STAR_parent_description_STAR__orig_val__22375_22436,_STAR_parent_description_STAR__temp_val__22376_22437,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
,false)],null)));
var chunk__22402_22484 = null;
var count__22403_22485 = (0);
var i__22404_22486 = (0);
while(true){
if((i__22404_22486 < count__22403_22485)){
var component__10062__auto___22511 = cljs.core._nth.call(null,chunk__22402_22484,i__22404_22486);
speclj.components.install.call(null,component__10062__auto___22511,description__10061__auto____$2);


var G__22512 = seq__22401_22483;
var G__22513 = chunk__22402_22484;
var G__22514 = count__22403_22485;
var G__22515 = (i__22404_22486 + (1));
seq__22401_22483 = G__22512;
chunk__22402_22484 = G__22513;
count__22403_22485 = G__22514;
i__22404_22486 = G__22515;
continue;
} else {
var temp__5825__auto___22516 = cljs.core.seq.call(null,seq__22401_22483);
if(temp__5825__auto___22516){
var seq__22401_22517__$1 = temp__5825__auto___22516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22401_22517__$1)){
var c__5548__auto___22518 = cljs.core.chunk_first.call(null,seq__22401_22517__$1);
var G__22519 = cljs.core.chunk_rest.call(null,seq__22401_22517__$1);
var G__22520 = c__5548__auto___22518;
var G__22521 = cljs.core.count.call(null,c__5548__auto___22518);
var G__22522 = (0);
seq__22401_22483 = G__22519;
chunk__22402_22484 = G__22520;
count__22403_22485 = G__22521;
i__22404_22486 = G__22522;
continue;
} else {
var component__10062__auto___22523 = cljs.core.first.call(null,seq__22401_22517__$1);
speclj.components.install.call(null,component__10062__auto___22523,description__10061__auto____$2);


var G__22524 = cljs.core.next.call(null,seq__22401_22517__$1);
var G__22525 = null;
var G__22526 = (0);
var G__22527 = (0);
seq__22401_22483 = G__22524;
chunk__22402_22484 = G__22525;
count__22403_22485 = G__22526;
i__22404_22486 = G__22527;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22399_22481);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$2);
}

return description__10061__auto____$2;
})()],null)));
var chunk__22378_22439 = null;
var count__22379_22440 = (0);
var i__22380_22441 = (0);
while(true){
if((i__22380_22441 < count__22379_22440)){
var component__10062__auto___22528 = cljs.core._nth.call(null,chunk__22378_22439,i__22380_22441);
speclj.components.install.call(null,component__10062__auto___22528,description__10061__auto____$1);


var G__22529 = seq__22377_22438;
var G__22530 = chunk__22378_22439;
var G__22531 = count__22379_22440;
var G__22532 = (i__22380_22441 + (1));
seq__22377_22438 = G__22529;
chunk__22378_22439 = G__22530;
count__22379_22440 = G__22531;
i__22380_22441 = G__22532;
continue;
} else {
var temp__5825__auto___22533 = cljs.core.seq.call(null,seq__22377_22438);
if(temp__5825__auto___22533){
var seq__22377_22534__$1 = temp__5825__auto___22533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22377_22534__$1)){
var c__5548__auto___22535 = cljs.core.chunk_first.call(null,seq__22377_22534__$1);
var G__22536 = cljs.core.chunk_rest.call(null,seq__22377_22534__$1);
var G__22537 = c__5548__auto___22535;
var G__22538 = cljs.core.count.call(null,c__5548__auto___22535);
var G__22539 = (0);
seq__22377_22438 = G__22536;
chunk__22378_22439 = G__22537;
count__22379_22440 = G__22538;
i__22380_22441 = G__22539;
continue;
} else {
var component__10062__auto___22540 = cljs.core.first.call(null,seq__22377_22534__$1);
speclj.components.install.call(null,component__10062__auto___22540,description__10061__auto____$1);


var G__22541 = cljs.core.next.call(null,seq__22377_22534__$1);
var G__22542 = null;
var G__22543 = (0);
var G__22544 = (0);
seq__22377_22438 = G__22541;
chunk__22378_22439 = G__22542;
count__22379_22440 = G__22543;
i__22380_22441 = G__22544;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22375_22436);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"calls select-difficulty with correct key",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__22405_22545 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22406_22546 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22406_22546);

try{var seq__22407_22547 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__22405_22545,_STAR_parent_description_STAR__temp_val__22406_22546,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__22405_22545,_STAR_parent_description_STAR__temp_val__22406_22546,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
),speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__22405_22545,_STAR_parent_description_STAR__temp_val__22406_22546,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
var select_difficulty_BANG__orig_val__22417 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__22418 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__22418);

try{var value__10565__auto___22551 = ".easy";
var node__10566__auto___22552 = c3kit.wire.spec_helper.select.call(null,value__10565__auto___22551);
if(cljs.core.truth_(node__10566__auto___22552)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10565__auto___22551;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22553 = "Easy";
var actual__10204__auto___22554 = c3kit.wire.spec_helper.text.call(null,".easy");
if(cljs.core._EQ_.call(null,expected__10203__auto___22553,actual__10204__auto___22554)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22553;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22554;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".easy");

speclj.components.inc_assertions_BANG_.call(null);

var name__10449__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__10450__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null)], null);
var invocations__10451__auto__ = speclj.stub.invocations_of.call(null,name__10449__auto__);
var times__10452__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10450__auto__);
var times_QMARK___10453__auto__ = typeof times__10452__auto__ === 'number';
var check_params_QMARK___10454__auto__ = cljs.core.contains_QMARK_.call(null,options__10450__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10455__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10450__auto__);
var with__10455__auto____$1 = (((with__10455__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10455__auto__);
var invocations_str__10456__auto__ = (function (p1__10446__10457__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10446__10457__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10453__auto__) && (check_params_QMARK___10454__auto__))){
var matching_invocations__10458__auto__ = cljs.core.filter.call(null,(function (p1__10447__10459__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10455__auto____$1,p1__10447__10459__auto__);
}),invocations__10451__auto__);
var matching_count__10460__auto__ = cljs.core.count.call(null,matching_invocations__10458__auto__);
if(cljs.core._EQ_.call(null,times__10452__auto__,matching_count__10460__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10452__auto__)," ",invocations_str__10456__auto__.call(null,times__10452__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10449__auto__)," with ",cljs.core.pr_str.call(null,with__10455__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10460__auto__)," ",invocations_str__10456__auto__.call(null,matching_count__10460__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___10454__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10448__10461__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10455__auto____$1,p1__10448__10461__auto__);
}),invocations__10451__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10449__auto__)," with ",cljs.core.pr_str.call(null,with__10455__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10451__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___10453__auto__){
if(cljs.core._EQ_.call(null,times__10452__auto__,cljs.core.count.call(null,invocations__10451__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10452__auto__)," ",invocations_str__10456__auto__.call(null,times__10452__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10449__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10451__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__10451__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10449__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10451__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__22417);
}});})(_STAR_parent_description_STAR__orig_val__22405_22545,_STAR_parent_description_STAR__temp_val__22406_22546,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
,false),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__22405_22545,_STAR_parent_description_STAR__temp_val__22406_22546,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
var select_difficulty_BANG__orig_val__22419 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__22420 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__22420);

try{var value__10565__auto___22555 = ".medium";
var node__10566__auto___22556 = c3kit.wire.spec_helper.select.call(null,value__10565__auto___22555);
if(cljs.core.truth_(node__10566__auto___22556)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10565__auto___22555;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22557 = "Medium";
var actual__10204__auto___22558 = c3kit.wire.spec_helper.text.call(null,".medium");
if(cljs.core._EQ_.call(null,expected__10203__auto___22557,actual__10204__auto___22558)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22557;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22558;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".medium");

speclj.components.inc_assertions_BANG_.call(null);

var name__10449__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__10450__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384)], null)], null);
var invocations__10451__auto__ = speclj.stub.invocations_of.call(null,name__10449__auto__);
var times__10452__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10450__auto__);
var times_QMARK___10453__auto__ = typeof times__10452__auto__ === 'number';
var check_params_QMARK___10454__auto__ = cljs.core.contains_QMARK_.call(null,options__10450__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10455__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10450__auto__);
var with__10455__auto____$1 = (((with__10455__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10455__auto__);
var invocations_str__10456__auto__ = (function (p1__10446__10457__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10446__10457__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10453__auto__) && (check_params_QMARK___10454__auto__))){
var matching_invocations__10458__auto__ = cljs.core.filter.call(null,(function (p1__10447__10459__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10455__auto____$1,p1__10447__10459__auto__);
}),invocations__10451__auto__);
var matching_count__10460__auto__ = cljs.core.count.call(null,matching_invocations__10458__auto__);
if(cljs.core._EQ_.call(null,times__10452__auto__,matching_count__10460__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10452__auto__)," ",invocations_str__10456__auto__.call(null,times__10452__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10449__auto__)," with ",cljs.core.pr_str.call(null,with__10455__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10460__auto__)," ",invocations_str__10456__auto__.call(null,matching_count__10460__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___10454__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10448__10461__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10455__auto____$1,p1__10448__10461__auto__);
}),invocations__10451__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10449__auto__)," with ",cljs.core.pr_str.call(null,with__10455__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10451__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___10453__auto__){
if(cljs.core._EQ_.call(null,times__10452__auto__,cljs.core.count.call(null,invocations__10451__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10452__auto__)," ",invocations_str__10456__auto__.call(null,times__10452__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10449__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10451__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__10451__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10449__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10451__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__22419);
}});})(_STAR_parent_description_STAR__orig_val__22405_22545,_STAR_parent_description_STAR__temp_val__22406_22546,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
,false),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__22405_22545,_STAR_parent_description_STAR__temp_val__22406_22546,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
var select_difficulty_BANG__orig_val__22421 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__22422 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__22422);

try{var value__10565__auto___22559 = ".hard";
var node__10566__auto___22560 = c3kit.wire.spec_helper.select.call(null,value__10565__auto___22559);
if(cljs.core.truth_(node__10566__auto___22560)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10565__auto___22559;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22561 = "Hard";
var actual__10204__auto___22562 = c3kit.wire.spec_helper.text.call(null,".hard");
if(cljs.core._EQ_.call(null,expected__10203__auto___22561,actual__10204__auto___22562)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22561;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22562;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".hard");

speclj.components.inc_assertions_BANG_.call(null);

var name__10449__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__10450__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null)], null);
var invocations__10451__auto__ = speclj.stub.invocations_of.call(null,name__10449__auto__);
var times__10452__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10450__auto__);
var times_QMARK___10453__auto__ = typeof times__10452__auto__ === 'number';
var check_params_QMARK___10454__auto__ = cljs.core.contains_QMARK_.call(null,options__10450__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10455__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10450__auto__);
var with__10455__auto____$1 = (((with__10455__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10455__auto__);
var invocations_str__10456__auto__ = (function (p1__10446__10457__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10446__10457__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10453__auto__) && (check_params_QMARK___10454__auto__))){
var matching_invocations__10458__auto__ = cljs.core.filter.call(null,(function (p1__10447__10459__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10455__auto____$1,p1__10447__10459__auto__);
}),invocations__10451__auto__);
var matching_count__10460__auto__ = cljs.core.count.call(null,matching_invocations__10458__auto__);
if(cljs.core._EQ_.call(null,times__10452__auto__,matching_count__10460__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10452__auto__)," ",invocations_str__10456__auto__.call(null,times__10452__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10449__auto__)," with ",cljs.core.pr_str.call(null,with__10455__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10460__auto__)," ",invocations_str__10456__auto__.call(null,matching_count__10460__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___10454__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10448__10461__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10455__auto____$1,p1__10448__10461__auto__);
}),invocations__10451__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10449__auto__)," with ",cljs.core.pr_str.call(null,with__10455__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10451__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___10453__auto__){
if(cljs.core._EQ_.call(null,times__10452__auto__,cljs.core.count.call(null,invocations__10451__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10452__auto__)," ",invocations_str__10456__auto__.call(null,times__10452__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10449__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10451__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__10451__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10449__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10451__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__22421);
}});})(_STAR_parent_description_STAR__orig_val__22405_22545,_STAR_parent_description_STAR__temp_val__22406_22546,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
,false)],null)));
var chunk__22408_22548 = null;
var count__22409_22549 = (0);
var i__22410_22550 = (0);
while(true){
if((i__22410_22550 < count__22409_22549)){
var component__10062__auto___22563 = cljs.core._nth.call(null,chunk__22408_22548,i__22410_22550);
speclj.components.install.call(null,component__10062__auto___22563,description__10061__auto____$1);


var G__22564 = seq__22407_22547;
var G__22565 = chunk__22408_22548;
var G__22566 = count__22409_22549;
var G__22567 = (i__22410_22550 + (1));
seq__22407_22547 = G__22564;
chunk__22408_22548 = G__22565;
count__22409_22549 = G__22566;
i__22410_22550 = G__22567;
continue;
} else {
var temp__5825__auto___22568 = cljs.core.seq.call(null,seq__22407_22547);
if(temp__5825__auto___22568){
var seq__22407_22569__$1 = temp__5825__auto___22568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22407_22569__$1)){
var c__5548__auto___22570 = cljs.core.chunk_first.call(null,seq__22407_22569__$1);
var G__22571 = cljs.core.chunk_rest.call(null,seq__22407_22569__$1);
var G__22572 = c__5548__auto___22570;
var G__22573 = cljs.core.count.call(null,c__5548__auto___22570);
var G__22574 = (0);
seq__22407_22547 = G__22571;
chunk__22408_22548 = G__22572;
count__22409_22549 = G__22573;
i__22410_22550 = G__22574;
continue;
} else {
var component__10062__auto___22575 = cljs.core.first.call(null,seq__22407_22569__$1);
speclj.components.install.call(null,component__10062__auto___22575,description__10061__auto____$1);


var G__22576 = cljs.core.next.call(null,seq__22407_22569__$1);
var G__22577 = null;
var G__22578 = (0);
var G__22579 = (0);
seq__22407_22547 = G__22576;
chunk__22408_22548 = G__22577;
count__22409_22549 = G__22578;
i__22410_22550 = G__22579;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22405_22545);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"drawing board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__22423_22580 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22424_22581 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22424_22581);

try{var seq__22425_22582 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"render-cell returns div with value",((function (_STAR_parent_description_STAR__orig_val__22423_22580,_STAR_parent_description_STAR__temp_val__22424_22581,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
var out = tic_tac_toe.html.render_cell.call(null,"index");
speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___22586 = new cljs.core.Keyword(null,"div","div",1057191632);
var actual__10255__auto___22587 = out;
if((actual__10255__auto___22587 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___22586;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___22586 === 'string') && (typeof actual__10255__auto___22587 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___22587,expected__10254__auto___22586) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___22586;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___22587;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___22586)) && (typeof actual__10255__auto___22587 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___22586,actual__10255__auto___22587))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___22587;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___22586;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___22587)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___22587,expected__10254__auto___22586)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___22586;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___22587;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___22587)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___22586,p1__10253__10256__auto__);
}),actual__10255__auto___22587))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___22586;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___22587;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___22586;
var b__10183__auto__ = actual__10255__auto___22587;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = "index";
var actual__10255__auto__ = out;
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__22423_22580,_STAR_parent_description_STAR__temp_val__22424_22581,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
,false),speclj.components.new_characteristic.call(null,"gives nine cells for 3x3",((function (_STAR_parent_description_STAR__orig_val__22423_22580,_STAR_parent_description_STAR__temp_val__22424_22581,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22588 = (3);
var actual__10204__auto___22589 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10203__auto___22588,actual__10204__auto___22589)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22588;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22589;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22590 = (3);
var actual__10204__auto___22591 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10203__auto___22590,actual__10204__auto___22591)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22590;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22591;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = (9);
var actual__10204__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__22423_22580,_STAR_parent_description_STAR__temp_val__22424_22581,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
,false),speclj.components.new_characteristic.call(null,"gives 16 cells for 4x4",((function (_STAR_parent_description_STAR__orig_val__22423_22580,_STAR_parent_description_STAR__temp_val__22424_22581,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22592 = (4);
var actual__10204__auto___22593 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10203__auto___22592,actual__10204__auto___22593)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22592;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22593;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22594 = (4);
var actual__10204__auto___22595 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10203__auto___22594,actual__10204__auto___22595)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22594;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22595;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = (16);
var actual__10204__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__22423_22580,_STAR_parent_description_STAR__temp_val__22424_22581,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
,false),speclj.components.new_characteristic.call(null,"gives 27 cells for 3x3x3",((function (_STAR_parent_description_STAR__orig_val__22423_22580,_STAR_parent_description_STAR__temp_val__22424_22581,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22596 = (9);
var actual__10204__auto___22597 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10203__auto___22596,actual__10204__auto___22597)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22596;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22597;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___22598 = (3);
var actual__10204__auto___22599 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10203__auto___22598,actual__10204__auto___22599)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___22598;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___22599;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = (27);
var actual__10204__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__22423_22580,_STAR_parent_description_STAR__temp_val__22424_22581,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__22311_22430,_STAR_parent_description_STAR__temp_val__22312_22431,description__10061__auto___22429))
,false)],null)));
var chunk__22426_22583 = null;
var count__22427_22584 = (0);
var i__22428_22585 = (0);
while(true){
if((i__22428_22585 < count__22427_22584)){
var component__10062__auto___22600 = cljs.core._nth.call(null,chunk__22426_22583,i__22428_22585);
speclj.components.install.call(null,component__10062__auto___22600,description__10061__auto____$1);


var G__22601 = seq__22425_22582;
var G__22602 = chunk__22426_22583;
var G__22603 = count__22427_22584;
var G__22604 = (i__22428_22585 + (1));
seq__22425_22582 = G__22601;
chunk__22426_22583 = G__22602;
count__22427_22584 = G__22603;
i__22428_22585 = G__22604;
continue;
} else {
var temp__5825__auto___22605 = cljs.core.seq.call(null,seq__22425_22582);
if(temp__5825__auto___22605){
var seq__22425_22606__$1 = temp__5825__auto___22605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22425_22606__$1)){
var c__5548__auto___22607 = cljs.core.chunk_first.call(null,seq__22425_22606__$1);
var G__22608 = cljs.core.chunk_rest.call(null,seq__22425_22606__$1);
var G__22609 = c__5548__auto___22607;
var G__22610 = cljs.core.count.call(null,c__5548__auto___22607);
var G__22611 = (0);
seq__22425_22582 = G__22608;
chunk__22426_22583 = G__22609;
count__22427_22584 = G__22610;
i__22428_22585 = G__22611;
continue;
} else {
var component__10062__auto___22612 = cljs.core.first.call(null,seq__22425_22606__$1);
speclj.components.install.call(null,component__10062__auto___22612,description__10061__auto____$1);


var G__22613 = cljs.core.next.call(null,seq__22425_22606__$1);
var G__22614 = null;
var G__22615 = (0);
var G__22616 = (0);
seq__22425_22582 = G__22613;
chunk__22426_22583 = G__22614;
count__22427_22584 = G__22615;
i__22428_22585 = G__22616;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22423_22580);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})()],null)));
var chunk__22314_22433 = null;
var count__22315_22434 = (0);
var i__22316_22435 = (0);
while(true){
if((i__22316_22435 < count__22315_22434)){
var component__10062__auto___22617 = cljs.core._nth.call(null,chunk__22314_22433,i__22316_22435);
speclj.components.install.call(null,component__10062__auto___22617,description__10061__auto___22429);


var G__22618 = seq__22313_22432;
var G__22619 = chunk__22314_22433;
var G__22620 = count__22315_22434;
var G__22621 = (i__22316_22435 + (1));
seq__22313_22432 = G__22618;
chunk__22314_22433 = G__22619;
count__22315_22434 = G__22620;
i__22316_22435 = G__22621;
continue;
} else {
var temp__5825__auto___22622 = cljs.core.seq.call(null,seq__22313_22432);
if(temp__5825__auto___22622){
var seq__22313_22623__$1 = temp__5825__auto___22622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22313_22623__$1)){
var c__5548__auto___22624 = cljs.core.chunk_first.call(null,seq__22313_22623__$1);
var G__22625 = cljs.core.chunk_rest.call(null,seq__22313_22623__$1);
var G__22626 = c__5548__auto___22624;
var G__22627 = cljs.core.count.call(null,c__5548__auto___22624);
var G__22628 = (0);
seq__22313_22432 = G__22625;
chunk__22314_22433 = G__22626;
count__22315_22434 = G__22627;
i__22316_22435 = G__22628;
continue;
} else {
var component__10062__auto___22629 = cljs.core.first.call(null,seq__22313_22623__$1);
speclj.components.install.call(null,component__10062__auto___22629,description__10061__auto___22429);


var G__22630 = cljs.core.next.call(null,seq__22313_22623__$1);
var G__22631 = null;
var G__22632 = (0);
var G__22633 = (0);
seq__22313_22432 = G__22630;
chunk__22314_22433 = G__22631;
count__22315_22434 = G__22632;
i__22316_22435 = G__22633;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22311_22430);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto___22429);
}


//# sourceMappingURL=html_spec.js.map
