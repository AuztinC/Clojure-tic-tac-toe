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
var state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board-size","board-size",140730505),size,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,size)], null);
var out = tic_tac_toe.html.render_board.call(null,state);
var vec__10610 = out;
var seq__10611 = cljs.core.seq.call(null,vec__10610);
var first__10612 = cljs.core.first.call(null,seq__10611);
var seq__10611__$1 = cljs.core.next.call(null,seq__10611);
var _tag = first__10612;
var first__10612__$1 = cljs.core.first.call(null,seq__10611__$1);
var seq__10611__$2 = cljs.core.next.call(null,seq__10611__$1);
var _attrs = first__10612__$1;
var rows = seq__10611__$2;
var row_count = cljs.core.count.call(null,rows);
var column_count = cljs.core.count.call(null,cljs.core.drop.call(null,(2),cljs.core.first.call(null,rows)));
var cell_count = (row_count * column_count);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-count","row-count",1060167988),row_count,new cljs.core.Keyword(null,"column-count","column-count",1235131236),column_count,new cljs.core.Keyword(null,"cell-count","cell-count",-441457582),cell_count], null);
});
var description__10055__auto___10735 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__10613_10736 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10614_10737 = description__10055__auto___10735;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10614_10737);

try{var seq__10615_10738 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (it__10429__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__10677 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__10678 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__10678);

try{return it__10429__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__10677);
}});})(_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (it__10122__auto__){
var auto_advance_orig_val__10679 = tic_tac_toe.setup.auto_advance;
var auto_advance_temp_val__10680 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"auto-advance","auto-advance",930772766),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.auto_advance = auto_advance_temp_val__10680);

try{return it__10122__auto__.call(null);
}finally {(tic_tac_toe.setup.auto_advance = auto_advance_orig_val__10679);
}});})(_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
),(function (){var description__10055__auto____$1 = speclj.components.new_description.call(null,"updated state atom with screen on click",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__10681_10742 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10682_10743 = description__10055__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10682_10743);

try{var seq__10683_10744 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__10055__auto____$2 = speclj.components.new_description.call(null,"select-game-mode",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__10699_10748 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10700_10749 = description__10055__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10700_10749);

try{var seq__10701_10750 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"clicking Human vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__10699_10748,_STAR_parent_description_STAR__temp_val__10700_10749,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10754 = "Human vs AI";
var actual__10198__auto___10755 = c3kit.wire.spec_helper.text.call(null,"#human-vs-ai");
if(cljs.core._EQ_.call(null,expected__10197__auto___10754,actual__10198__auto___10755)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10754;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10755;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-ai");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10756 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10198__auto___10757 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto___10756,actual__10198__auto___10757)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10756;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10757;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__10198__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto__,actual__10198__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10699_10748,_STAR_parent_description_STAR__temp_val__10700_10749,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__10699_10748,_STAR_parent_description_STAR__temp_val__10700_10749,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10758 = "AI vs Human";
var actual__10198__auto___10759 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-human");
if(cljs.core._EQ_.call(null,expected__10197__auto___10758,actual__10198__auto___10759)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10758;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10759;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10760 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10198__auto___10761 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto___10760,actual__10198__auto___10761)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10760;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10761;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__10198__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto__,actual__10198__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10699_10748,_STAR_parent_description_STAR__temp_val__10700_10749,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
,false),speclj.components.new_characteristic.call(null,"clicking Human vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__10699_10748,_STAR_parent_description_STAR__temp_val__10700_10749,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10762 = "Human vs Human";
var actual__10198__auto___10763 = c3kit.wire.spec_helper.text.call(null,"#human-vs-human");
if(cljs.core._EQ_.call(null,expected__10197__auto___10762,actual__10198__auto___10763)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10762;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10763;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10764 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10198__auto___10765 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto___10764,actual__10198__auto___10765)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10764;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10765;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__10198__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto__,actual__10198__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10699_10748,_STAR_parent_description_STAR__temp_val__10700_10749,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__10699_10748,_STAR_parent_description_STAR__temp_val__10700_10749,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10766 = "AI vs AI";
var actual__10198__auto___10767 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-ai");
if(cljs.core._EQ_.call(null,expected__10197__auto___10766,actual__10198__auto___10767)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10766;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10767;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-ai");

var out = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10768 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10198__auto___10769 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10197__auto___10768,actual__10198__auto___10769)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10768;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10769;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__10198__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10197__auto__,actual__10198__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10699_10748,_STAR_parent_description_STAR__temp_val__10700_10749,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
,false)],null)));
var chunk__10702_10751 = null;
var count__10703_10752 = (0);
var i__10704_10753 = (0);
while(true){
if((i__10704_10753 < count__10703_10752)){
var component__10056__auto___10770 = cljs.core._nth.call(null,chunk__10702_10751,i__10704_10753);
speclj.components.install.call(null,component__10056__auto___10770,description__10055__auto____$2);


var G__10771 = seq__10701_10750;
var G__10772 = chunk__10702_10751;
var G__10773 = count__10703_10752;
var G__10774 = (i__10704_10753 + (1));
seq__10701_10750 = G__10771;
chunk__10702_10751 = G__10772;
count__10703_10752 = G__10773;
i__10704_10753 = G__10774;
continue;
} else {
var temp__5825__auto___10775 = cljs.core.seq.call(null,seq__10701_10750);
if(temp__5825__auto___10775){
var seq__10701_10776__$1 = temp__5825__auto___10775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10701_10776__$1)){
var c__5548__auto___10777 = cljs.core.chunk_first.call(null,seq__10701_10776__$1);
var G__10778 = cljs.core.chunk_rest.call(null,seq__10701_10776__$1);
var G__10779 = c__5548__auto___10777;
var G__10780 = cljs.core.count.call(null,c__5548__auto___10777);
var G__10781 = (0);
seq__10701_10750 = G__10778;
chunk__10702_10751 = G__10779;
count__10703_10752 = G__10780;
i__10704_10753 = G__10781;
continue;
} else {
var component__10056__auto___10782 = cljs.core.first.call(null,seq__10701_10776__$1);
speclj.components.install.call(null,component__10056__auto___10782,description__10055__auto____$2);


var G__10783 = cljs.core.next.call(null,seq__10701_10776__$1);
var G__10784 = null;
var G__10785 = (0);
var G__10786 = (0);
seq__10701_10750 = G__10783;
chunk__10702_10751 = G__10784;
count__10703_10752 = G__10785;
i__10704_10753 = G__10786;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10699_10748);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10055__auto____$2);
}

return description__10055__auto____$2;
})(),(function (){var description__10055__auto____$2 = speclj.components.new_description.call(null,"select-board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__10705_10787 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10706_10788 = description__10055__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10706_10788);

try{var seq__10707_10789 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10705_10787,_STAR_parent_description_STAR__temp_val__10706_10788,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__10705_10787,_STAR_parent_description_STAR__temp_val__10706_10788,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
),speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__10705_10787,_STAR_parent_description_STAR__temp_val__10706_10788,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
var value__10559__auto___10793 = "#board-3x3";
var node__10560__auto___10794 = c3kit.wire.spec_helper.select.call(null,value__10559__auto___10793);
if(cljs.core.truth_(node__10560__auto___10794)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10559__auto___10793;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10795 = "3x3";
var actual__10198__auto___10796 = c3kit.wire.spec_helper.text.call(null,"#board-3x3");
if(cljs.core._EQ_.call(null,expected__10197__auto___10795,actual__10198__auto___10796)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10795;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10796;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10797 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10198__auto___10798 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto___10797,actual__10198__auto___10798)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10797;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10798;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10799 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10198__auto___10800 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto___10799,actual__10198__auto___10800)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10799;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10800;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10198__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto__,actual__10198__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10705_10787,_STAR_parent_description_STAR__temp_val__10706_10788,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
,false),speclj.components.new_characteristic.call(null,"4x4",((function (_STAR_parent_description_STAR__orig_val__10705_10787,_STAR_parent_description_STAR__temp_val__10706_10788,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
var value__10559__auto___10801 = "#board-4x4";
var node__10560__auto___10802 = c3kit.wire.spec_helper.select.call(null,value__10559__auto___10801);
if(cljs.core.truth_(node__10560__auto___10802)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10559__auto___10801;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10803 = "4x4";
var actual__10198__auto___10804 = c3kit.wire.spec_helper.text.call(null,"#board-4x4");
if(cljs.core._EQ_.call(null,expected__10197__auto___10803,actual__10198__auto___10804)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10803;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10804;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-4x4");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10805 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10198__auto___10806 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto___10805,actual__10198__auto___10806)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10805;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10806;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10807 = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__10198__auto___10808 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto___10807,actual__10198__auto___10808)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10807;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10808;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__10198__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto__,actual__10198__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10705_10787,_STAR_parent_description_STAR__temp_val__10706_10788,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
,false),speclj.components.new_characteristic.call(null,"3x3x3",((function (_STAR_parent_description_STAR__orig_val__10705_10787,_STAR_parent_description_STAR__temp_val__10706_10788,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
var value__10559__auto___10809 = "#board-3x3x3";
var node__10560__auto___10810 = c3kit.wire.spec_helper.select.call(null,value__10559__auto___10809);
if(cljs.core.truth_(node__10560__auto___10810)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10559__auto___10809;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10811 = "3x3x3";
var actual__10198__auto___10812 = c3kit.wire.spec_helper.text.call(null,"#board-3x3x3");
if(cljs.core._EQ_.call(null,expected__10197__auto___10811,actual__10198__auto___10812)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10811;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10812;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10813 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10198__auto___10814 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto___10813,actual__10198__auto___10814)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10813;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10814;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10815 = new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540);
var actual__10198__auto___10816 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto___10815,actual__10198__auto___10816)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10815;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10816;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
var actual__10198__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto__,actual__10198__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10705_10787,_STAR_parent_description_STAR__temp_val__10706_10788,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__10681_10742,_STAR_parent_description_STAR__temp_val__10682_10743,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
,false)],null)));
var chunk__10708_10790 = null;
var count__10709_10791 = (0);
var i__10710_10792 = (0);
while(true){
if((i__10710_10792 < count__10709_10791)){
var component__10056__auto___10817 = cljs.core._nth.call(null,chunk__10708_10790,i__10710_10792);
speclj.components.install.call(null,component__10056__auto___10817,description__10055__auto____$2);


var G__10818 = seq__10707_10789;
var G__10819 = chunk__10708_10790;
var G__10820 = count__10709_10791;
var G__10821 = (i__10710_10792 + (1));
seq__10707_10789 = G__10818;
chunk__10708_10790 = G__10819;
count__10709_10791 = G__10820;
i__10710_10792 = G__10821;
continue;
} else {
var temp__5825__auto___10822 = cljs.core.seq.call(null,seq__10707_10789);
if(temp__5825__auto___10822){
var seq__10707_10823__$1 = temp__5825__auto___10822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10707_10823__$1)){
var c__5548__auto___10824 = cljs.core.chunk_first.call(null,seq__10707_10823__$1);
var G__10825 = cljs.core.chunk_rest.call(null,seq__10707_10823__$1);
var G__10826 = c__5548__auto___10824;
var G__10827 = cljs.core.count.call(null,c__5548__auto___10824);
var G__10828 = (0);
seq__10707_10789 = G__10825;
chunk__10708_10790 = G__10826;
count__10709_10791 = G__10827;
i__10710_10792 = G__10828;
continue;
} else {
var component__10056__auto___10829 = cljs.core.first.call(null,seq__10707_10823__$1);
speclj.components.install.call(null,component__10056__auto___10829,description__10055__auto____$2);


var G__10830 = cljs.core.next.call(null,seq__10707_10823__$1);
var G__10831 = null;
var G__10832 = (0);
var G__10833 = (0);
seq__10707_10789 = G__10830;
chunk__10708_10790 = G__10831;
count__10709_10791 = G__10832;
i__10710_10792 = G__10833;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10705_10787);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10055__auto____$2);
}

return description__10055__auto____$2;
})()],null)));
var chunk__10684_10745 = null;
var count__10685_10746 = (0);
var i__10686_10747 = (0);
while(true){
if((i__10686_10747 < count__10685_10746)){
var component__10056__auto___10834 = cljs.core._nth.call(null,chunk__10684_10745,i__10686_10747);
speclj.components.install.call(null,component__10056__auto___10834,description__10055__auto____$1);


var G__10835 = seq__10683_10744;
var G__10836 = chunk__10684_10745;
var G__10837 = count__10685_10746;
var G__10838 = (i__10686_10747 + (1));
seq__10683_10744 = G__10835;
chunk__10684_10745 = G__10836;
count__10685_10746 = G__10837;
i__10686_10747 = G__10838;
continue;
} else {
var temp__5825__auto___10839 = cljs.core.seq.call(null,seq__10683_10744);
if(temp__5825__auto___10839){
var seq__10683_10840__$1 = temp__5825__auto___10839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10683_10840__$1)){
var c__5548__auto___10841 = cljs.core.chunk_first.call(null,seq__10683_10840__$1);
var G__10842 = cljs.core.chunk_rest.call(null,seq__10683_10840__$1);
var G__10843 = c__5548__auto___10841;
var G__10844 = cljs.core.count.call(null,c__5548__auto___10841);
var G__10845 = (0);
seq__10683_10744 = G__10842;
chunk__10684_10745 = G__10843;
count__10685_10746 = G__10844;
i__10686_10747 = G__10845;
continue;
} else {
var component__10056__auto___10846 = cljs.core.first.call(null,seq__10683_10840__$1);
speclj.components.install.call(null,component__10056__auto___10846,description__10055__auto____$1);


var G__10847 = cljs.core.next.call(null,seq__10683_10840__$1);
var G__10848 = null;
var G__10849 = (0);
var G__10850 = (0);
seq__10683_10744 = G__10847;
chunk__10684_10745 = G__10848;
count__10685_10746 = G__10849;
i__10686_10747 = G__10850;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10681_10742);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10055__auto____$1);
}

return description__10055__auto____$1;
})(),(function (){var description__10055__auto____$1 = speclj.components.new_description.call(null,"calls select-difficulty with correct key",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__10711_10851 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10712_10852 = description__10055__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10712_10852);

try{var seq__10713_10853 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10711_10851,_STAR_parent_description_STAR__temp_val__10712_10852,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__10711_10851,_STAR_parent_description_STAR__temp_val__10712_10852,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
),speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__10711_10851,_STAR_parent_description_STAR__temp_val__10712_10852,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
var select_difficulty_BANG__orig_val__10723 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__10724 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__10724);

try{var value__10559__auto___10857 = ".easy";
var node__10560__auto___10858 = c3kit.wire.spec_helper.select.call(null,value__10559__auto___10857);
if(cljs.core.truth_(node__10560__auto___10858)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10559__auto___10857;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10859 = "Easy";
var actual__10198__auto___10860 = c3kit.wire.spec_helper.text.call(null,".easy");
if(cljs.core._EQ_.call(null,expected__10197__auto___10859,actual__10198__auto___10860)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10859;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10860;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".easy");

speclj.components.inc_assertions_BANG_.call(null);

var name__10443__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__10444__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null)], null);
var invocations__10445__auto__ = speclj.stub.invocations_of.call(null,name__10443__auto__);
var times__10446__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10444__auto__);
var times_QMARK___10447__auto__ = typeof times__10446__auto__ === 'number';
var check_params_QMARK___10448__auto__ = cljs.core.contains_QMARK_.call(null,options__10444__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10449__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10444__auto__);
var with__10449__auto____$1 = (((with__10449__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10449__auto__);
var invocations_str__10450__auto__ = (function (p1__10440__10451__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10440__10451__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10447__auto__) && (check_params_QMARK___10448__auto__))){
var matching_invocations__10452__auto__ = cljs.core.filter.call(null,(function (p1__10441__10453__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10449__auto____$1,p1__10441__10453__auto__);
}),invocations__10445__auto__);
var matching_count__10454__auto__ = cljs.core.count.call(null,matching_invocations__10452__auto__);
if(cljs.core._EQ_.call(null,times__10446__auto__,matching_count__10454__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10446__auto__)," ",invocations_str__10450__auto__.call(null,times__10446__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10443__auto__)," with ",cljs.core.pr_str.call(null,with__10449__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10454__auto__)," ",invocations_str__10450__auto__.call(null,matching_count__10454__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___10448__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10442__10455__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10449__auto____$1,p1__10442__10455__auto__);
}),invocations__10445__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10443__auto__)," with ",cljs.core.pr_str.call(null,with__10449__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10445__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___10447__auto__){
if(cljs.core._EQ_.call(null,times__10446__auto__,cljs.core.count.call(null,invocations__10445__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10446__auto__)," ",invocations_str__10450__auto__.call(null,times__10446__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10443__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10445__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__10445__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10443__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10445__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__10723);
}});})(_STAR_parent_description_STAR__orig_val__10711_10851,_STAR_parent_description_STAR__temp_val__10712_10852,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
,false),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__10711_10851,_STAR_parent_description_STAR__temp_val__10712_10852,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
var select_difficulty_BANG__orig_val__10725 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__10726 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__10726);

try{var value__10559__auto___10861 = ".medium";
var node__10560__auto___10862 = c3kit.wire.spec_helper.select.call(null,value__10559__auto___10861);
if(cljs.core.truth_(node__10560__auto___10862)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10559__auto___10861;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10863 = "Medium";
var actual__10198__auto___10864 = c3kit.wire.spec_helper.text.call(null,".medium");
if(cljs.core._EQ_.call(null,expected__10197__auto___10863,actual__10198__auto___10864)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10863;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10864;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".medium");

speclj.components.inc_assertions_BANG_.call(null);

var name__10443__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__10444__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384)], null)], null);
var invocations__10445__auto__ = speclj.stub.invocations_of.call(null,name__10443__auto__);
var times__10446__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10444__auto__);
var times_QMARK___10447__auto__ = typeof times__10446__auto__ === 'number';
var check_params_QMARK___10448__auto__ = cljs.core.contains_QMARK_.call(null,options__10444__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10449__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10444__auto__);
var with__10449__auto____$1 = (((with__10449__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10449__auto__);
var invocations_str__10450__auto__ = (function (p1__10440__10451__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10440__10451__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10447__auto__) && (check_params_QMARK___10448__auto__))){
var matching_invocations__10452__auto__ = cljs.core.filter.call(null,(function (p1__10441__10453__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10449__auto____$1,p1__10441__10453__auto__);
}),invocations__10445__auto__);
var matching_count__10454__auto__ = cljs.core.count.call(null,matching_invocations__10452__auto__);
if(cljs.core._EQ_.call(null,times__10446__auto__,matching_count__10454__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10446__auto__)," ",invocations_str__10450__auto__.call(null,times__10446__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10443__auto__)," with ",cljs.core.pr_str.call(null,with__10449__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10454__auto__)," ",invocations_str__10450__auto__.call(null,matching_count__10454__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___10448__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10442__10455__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10449__auto____$1,p1__10442__10455__auto__);
}),invocations__10445__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10443__auto__)," with ",cljs.core.pr_str.call(null,with__10449__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10445__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___10447__auto__){
if(cljs.core._EQ_.call(null,times__10446__auto__,cljs.core.count.call(null,invocations__10445__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10446__auto__)," ",invocations_str__10450__auto__.call(null,times__10446__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10443__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10445__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__10445__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10443__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10445__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__10725);
}});})(_STAR_parent_description_STAR__orig_val__10711_10851,_STAR_parent_description_STAR__temp_val__10712_10852,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
,false),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__10711_10851,_STAR_parent_description_STAR__temp_val__10712_10852,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
var select_difficulty_BANG__orig_val__10727 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__10728 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__10728);

try{var value__10559__auto___10865 = ".hard";
var node__10560__auto___10866 = c3kit.wire.spec_helper.select.call(null,value__10559__auto___10865);
if(cljs.core.truth_(node__10560__auto___10866)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10559__auto___10865;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10867 = "Hard";
var actual__10198__auto___10868 = c3kit.wire.spec_helper.text.call(null,".hard");
if(cljs.core._EQ_.call(null,expected__10197__auto___10867,actual__10198__auto___10868)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10867;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10868;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".hard");

speclj.components.inc_assertions_BANG_.call(null);

var name__10443__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__10444__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null)], null);
var invocations__10445__auto__ = speclj.stub.invocations_of.call(null,name__10443__auto__);
var times__10446__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10444__auto__);
var times_QMARK___10447__auto__ = typeof times__10446__auto__ === 'number';
var check_params_QMARK___10448__auto__ = cljs.core.contains_QMARK_.call(null,options__10444__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10449__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10444__auto__);
var with__10449__auto____$1 = (((with__10449__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10449__auto__);
var invocations_str__10450__auto__ = (function (p1__10440__10451__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10440__10451__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10447__auto__) && (check_params_QMARK___10448__auto__))){
var matching_invocations__10452__auto__ = cljs.core.filter.call(null,(function (p1__10441__10453__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10449__auto____$1,p1__10441__10453__auto__);
}),invocations__10445__auto__);
var matching_count__10454__auto__ = cljs.core.count.call(null,matching_invocations__10452__auto__);
if(cljs.core._EQ_.call(null,times__10446__auto__,matching_count__10454__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10446__auto__)," ",invocations_str__10450__auto__.call(null,times__10446__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10443__auto__)," with ",cljs.core.pr_str.call(null,with__10449__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10454__auto__)," ",invocations_str__10450__auto__.call(null,matching_count__10454__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___10448__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10442__10455__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10449__auto____$1,p1__10442__10455__auto__);
}),invocations__10445__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10443__auto__)," with ",cljs.core.pr_str.call(null,with__10449__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10445__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___10447__auto__){
if(cljs.core._EQ_.call(null,times__10446__auto__,cljs.core.count.call(null,invocations__10445__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10446__auto__)," ",invocations_str__10450__auto__.call(null,times__10446__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10443__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10445__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__10445__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10443__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10445__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__10727);
}});})(_STAR_parent_description_STAR__orig_val__10711_10851,_STAR_parent_description_STAR__temp_val__10712_10852,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
,false)],null)));
var chunk__10714_10854 = null;
var count__10715_10855 = (0);
var i__10716_10856 = (0);
while(true){
if((i__10716_10856 < count__10715_10855)){
var component__10056__auto___10869 = cljs.core._nth.call(null,chunk__10714_10854,i__10716_10856);
speclj.components.install.call(null,component__10056__auto___10869,description__10055__auto____$1);


var G__10870 = seq__10713_10853;
var G__10871 = chunk__10714_10854;
var G__10872 = count__10715_10855;
var G__10873 = (i__10716_10856 + (1));
seq__10713_10853 = G__10870;
chunk__10714_10854 = G__10871;
count__10715_10855 = G__10872;
i__10716_10856 = G__10873;
continue;
} else {
var temp__5825__auto___10874 = cljs.core.seq.call(null,seq__10713_10853);
if(temp__5825__auto___10874){
var seq__10713_10875__$1 = temp__5825__auto___10874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10713_10875__$1)){
var c__5548__auto___10876 = cljs.core.chunk_first.call(null,seq__10713_10875__$1);
var G__10877 = cljs.core.chunk_rest.call(null,seq__10713_10875__$1);
var G__10878 = c__5548__auto___10876;
var G__10879 = cljs.core.count.call(null,c__5548__auto___10876);
var G__10880 = (0);
seq__10713_10853 = G__10877;
chunk__10714_10854 = G__10878;
count__10715_10855 = G__10879;
i__10716_10856 = G__10880;
continue;
} else {
var component__10056__auto___10881 = cljs.core.first.call(null,seq__10713_10875__$1);
speclj.components.install.call(null,component__10056__auto___10881,description__10055__auto____$1);


var G__10882 = cljs.core.next.call(null,seq__10713_10875__$1);
var G__10883 = null;
var G__10884 = (0);
var G__10885 = (0);
seq__10713_10853 = G__10882;
chunk__10714_10854 = G__10883;
count__10715_10855 = G__10884;
i__10716_10856 = G__10885;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10711_10851);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10055__auto____$1);
}

return description__10055__auto____$1;
})(),(function (){var description__10055__auto____$1 = speclj.components.new_description.call(null,"drawing board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__10729_10886 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10730_10887 = description__10055__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10730_10887);

try{var seq__10731_10888 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10729_10886,_STAR_parent_description_STAR__temp_val__10730_10887,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__10729_10886,_STAR_parent_description_STAR__temp_val__10730_10887,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
),speclj.components.new_characteristic.call(null,"render-cell returns td with value",((function (_STAR_parent_description_STAR__orig_val__10729_10886,_STAR_parent_description_STAR__temp_val__10730_10887,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
var out = tic_tac_toe.html.render_cell.call(null,"index");
speclj.components.inc_assertions_BANG_.call(null);

var expected__10248__auto___10892 = new cljs.core.Keyword(null,"td","td",1479933353);
var actual__10249__auto___10893 = out;
if((actual__10249__auto___10893 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10248__auto___10892;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10248__auto___10892 === 'string') && (typeof actual__10249__auto___10893 === 'string'))){
if((clojure.string.index_of.call(null,actual__10249__auto___10893,expected__10248__auto___10892) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10248__auto___10892;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10249__auto___10893;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10248__auto___10892)) && (typeof actual__10249__auto___10893 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10248__auto___10892,actual__10249__auto___10893))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10249__auto___10893;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10248__auto___10892;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10249__auto___10893)){
if(cljs.core.contains_QMARK_.call(null,actual__10249__auto___10893,expected__10248__auto___10892)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10248__auto___10892;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10249__auto___10893;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10249__auto___10893)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10247__10250__auto__){
return cljs.core._EQ_.call(null,expected__10248__auto___10892,p1__10247__10250__auto__);
}),actual__10249__auto___10893))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10248__auto___10892;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10249__auto___10893;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10176__auto__ = expected__10248__auto___10892;
var b__10177__auto__ = actual__10249__auto___10893;
var type_a__10178__auto__ = (((a__10176__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10176__auto__)));
var type_b__10179__auto__ = (((b__10177__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10177__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10178__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10179__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10248__auto__ = "index";
var actual__10249__auto__ = out;
if((actual__10249__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10248__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10248__auto__ === 'string') && (typeof actual__10249__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10249__auto__,expected__10248__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10248__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10249__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10248__auto__)) && (typeof actual__10249__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10248__auto__,actual__10249__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10249__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10248__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10249__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10249__auto__,expected__10248__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10248__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10249__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10249__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10247__10250__auto__){
return cljs.core._EQ_.call(null,expected__10248__auto__,p1__10247__10250__auto__);
}),actual__10249__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10248__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10249__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10176__auto__ = expected__10248__auto__;
var b__10177__auto__ = actual__10249__auto__;
var type_a__10178__auto__ = (((a__10176__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10176__auto__)));
var type_b__10179__auto__ = (((b__10177__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10177__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10178__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10179__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__10729_10886,_STAR_parent_description_STAR__temp_val__10730_10887,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
,false),speclj.components.new_characteristic.call(null,"render-board returns table with value",((function (_STAR_parent_description_STAR__orig_val__10729_10886,_STAR_parent_description_STAR__temp_val__10730_10887,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
var out = tic_tac_toe.html.render_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180)], null));
speclj.components.inc_assertions_BANG_.call(null);

var expected__10248__auto__ = new cljs.core.Keyword(null,"tbody","tbody",-80678300);
var actual__10249__auto__ = out;
if((actual__10249__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10248__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10248__auto__ === 'string') && (typeof actual__10249__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10249__auto__,expected__10248__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10248__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10249__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10248__auto__)) && (typeof actual__10249__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10248__auto__,actual__10249__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10249__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10248__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10249__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10249__auto__,expected__10248__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10248__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10249__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10249__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10247__10250__auto__){
return cljs.core._EQ_.call(null,expected__10248__auto__,p1__10247__10250__auto__);
}),actual__10249__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10248__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10249__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10176__auto__ = expected__10248__auto__;
var b__10177__auto__ = actual__10249__auto__;
var type_a__10178__auto__ = (((a__10176__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10176__auto__)));
var type_b__10179__auto__ = (((b__10177__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10177__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10178__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10179__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__10729_10886,_STAR_parent_description_STAR__temp_val__10730_10887,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
,false),speclj.components.new_characteristic.call(null,"gives nine cells for 3x3",((function (_STAR_parent_description_STAR__orig_val__10729_10886,_STAR_parent_description_STAR__temp_val__10730_10887,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10894 = (3);
var actual__10198__auto___10895 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10197__auto___10894,actual__10198__auto___10895)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10894;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10895;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10896 = (3);
var actual__10198__auto___10897 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10197__auto___10896,actual__10198__auto___10897)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10896;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10897;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto__ = (9);
var actual__10198__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10197__auto__,actual__10198__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10729_10886,_STAR_parent_description_STAR__temp_val__10730_10887,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
,false),speclj.components.new_characteristic.call(null,"gives 16 cells for 4x4",((function (_STAR_parent_description_STAR__orig_val__10729_10886,_STAR_parent_description_STAR__temp_val__10730_10887,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10898 = (4);
var actual__10198__auto___10899 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10197__auto___10898,actual__10198__auto___10899)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10898;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10899;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10900 = (4);
var actual__10198__auto___10901 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10197__auto___10900,actual__10198__auto___10901)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10900;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10901;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto__ = (16);
var actual__10198__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10197__auto__,actual__10198__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10729_10886,_STAR_parent_description_STAR__temp_val__10730_10887,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
,false),speclj.components.new_characteristic.call(null,"gives 27 cells for 3x3x3",((function (_STAR_parent_description_STAR__orig_val__10729_10886,_STAR_parent_description_STAR__temp_val__10730_10887,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10902 = (3);
var actual__10198__auto___10903 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10197__auto___10902,actual__10198__auto___10903)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10902;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10903;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___10904 = (9);
var actual__10198__auto___10905 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10197__auto___10904,actual__10198__auto___10905)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___10904;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___10905;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto__ = (27);
var actual__10198__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10197__auto__,actual__10198__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10729_10886,_STAR_parent_description_STAR__temp_val__10730_10887,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__10613_10736,_STAR_parent_description_STAR__temp_val__10614_10737,description__10055__auto___10735))
,false)],null)));
var chunk__10732_10889 = null;
var count__10733_10890 = (0);
var i__10734_10891 = (0);
while(true){
if((i__10734_10891 < count__10733_10890)){
var component__10056__auto___10906 = cljs.core._nth.call(null,chunk__10732_10889,i__10734_10891);
speclj.components.install.call(null,component__10056__auto___10906,description__10055__auto____$1);


var G__10907 = seq__10731_10888;
var G__10908 = chunk__10732_10889;
var G__10909 = count__10733_10890;
var G__10910 = (i__10734_10891 + (1));
seq__10731_10888 = G__10907;
chunk__10732_10889 = G__10908;
count__10733_10890 = G__10909;
i__10734_10891 = G__10910;
continue;
} else {
var temp__5825__auto___10911 = cljs.core.seq.call(null,seq__10731_10888);
if(temp__5825__auto___10911){
var seq__10731_10912__$1 = temp__5825__auto___10911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10731_10912__$1)){
var c__5548__auto___10913 = cljs.core.chunk_first.call(null,seq__10731_10912__$1);
var G__10914 = cljs.core.chunk_rest.call(null,seq__10731_10912__$1);
var G__10915 = c__5548__auto___10913;
var G__10916 = cljs.core.count.call(null,c__5548__auto___10913);
var G__10917 = (0);
seq__10731_10888 = G__10914;
chunk__10732_10889 = G__10915;
count__10733_10890 = G__10916;
i__10734_10891 = G__10917;
continue;
} else {
var component__10056__auto___10918 = cljs.core.first.call(null,seq__10731_10912__$1);
speclj.components.install.call(null,component__10056__auto___10918,description__10055__auto____$1);


var G__10919 = cljs.core.next.call(null,seq__10731_10912__$1);
var G__10920 = null;
var G__10921 = (0);
var G__10922 = (0);
seq__10731_10888 = G__10919;
chunk__10732_10889 = G__10920;
count__10733_10890 = G__10921;
i__10734_10891 = G__10922;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10729_10886);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10055__auto____$1);
}

return description__10055__auto____$1;
})()],null)));
var chunk__10616_10739 = null;
var count__10617_10740 = (0);
var i__10618_10741 = (0);
while(true){
if((i__10618_10741 < count__10617_10740)){
var component__10056__auto___10923 = cljs.core._nth.call(null,chunk__10616_10739,i__10618_10741);
speclj.components.install.call(null,component__10056__auto___10923,description__10055__auto___10735);


var G__10924 = seq__10615_10738;
var G__10925 = chunk__10616_10739;
var G__10926 = count__10617_10740;
var G__10927 = (i__10618_10741 + (1));
seq__10615_10738 = G__10924;
chunk__10616_10739 = G__10925;
count__10617_10740 = G__10926;
i__10618_10741 = G__10927;
continue;
} else {
var temp__5825__auto___10928 = cljs.core.seq.call(null,seq__10615_10738);
if(temp__5825__auto___10928){
var seq__10615_10929__$1 = temp__5825__auto___10928;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10615_10929__$1)){
var c__5548__auto___10930 = cljs.core.chunk_first.call(null,seq__10615_10929__$1);
var G__10931 = cljs.core.chunk_rest.call(null,seq__10615_10929__$1);
var G__10932 = c__5548__auto___10930;
var G__10933 = cljs.core.count.call(null,c__5548__auto___10930);
var G__10934 = (0);
seq__10615_10738 = G__10931;
chunk__10616_10739 = G__10932;
count__10617_10740 = G__10933;
i__10618_10741 = G__10934;
continue;
} else {
var component__10056__auto___10935 = cljs.core.first.call(null,seq__10615_10929__$1);
speclj.components.install.call(null,component__10056__auto___10935,description__10055__auto___10735);


var G__10936 = cljs.core.next.call(null,seq__10615_10929__$1);
var G__10937 = null;
var G__10938 = (0);
var G__10939 = (0);
seq__10615_10738 = G__10936;
chunk__10616_10739 = G__10937;
count__10617_10740 = G__10938;
i__10618_10741 = G__10939;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10613_10736);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10055__auto___10735);
}


//# sourceMappingURL=html_spec.js.map
