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
var vec__19646 = out;
var seq__19647 = cljs.core.seq.call(null,vec__19646);
var first__19648 = cljs.core.first.call(null,seq__19647);
var seq__19647__$1 = cljs.core.next.call(null,seq__19647);
var _tag = first__19648;
var first__19648__$1 = cljs.core.first.call(null,seq__19647__$1);
var seq__19647__$2 = cljs.core.next.call(null,seq__19647__$1);
var _attrs = first__19648__$1;
var rows = seq__19647__$2;
var row_count = cljs.core.count.call(null,rows);
var column_count = cljs.core.count.call(null,cljs.core.drop.call(null,(2),cljs.core.first.call(null,rows)));
var cell_count = (row_count * column_count);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-count","row-count",1060167988),row_count,new cljs.core.Keyword(null,"column-count","column-count",1235131236),column_count,new cljs.core.Keyword(null,"cell-count","cell-count",-441457582),cell_count], null);
});
var description__18610__auto___19779 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__19649_19780 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19650_19781 = description__18610__auto___19779;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19650_19781);

try{var seq__19651_19782 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (it__18984__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__19717 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__19718 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__19718);

try{return it__18984__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__19717);
}});})(_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (it__18677__auto__){
var auto_advance_orig_val__19719 = tic_tac_toe.setup.auto_advance;
var auto_advance_temp_val__19720 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"auto-advance","auto-advance",930772766),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.auto_advance = auto_advance_temp_val__19720);

try{return it__18677__auto__.call(null);
}finally {(tic_tac_toe.setup.auto_advance = auto_advance_orig_val__19719);
}});})(_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
),(function (){var description__18610__auto____$1 = speclj.components.new_description.call(null,"updated state atom with screen on click",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__19721_19786 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19722_19787 = description__18610__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19722_19787);

try{var seq__19723_19788 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__18610__auto____$2 = speclj.components.new_description.call(null,"select-game-mode",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__19739_19792 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19740_19793 = description__18610__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19740_19793);

try{var seq__19741_19794 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"clicking Human vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__19739_19792,_STAR_parent_description_STAR__temp_val__19740_19793,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19798 = "Human vs AI";
var actual__18753__auto___19799 = c3kit.wire.spec_helper.text.call(null,"#human-vs-ai");
if(cljs.core._EQ_.call(null,expected__18752__auto___19798,actual__18753__auto___19799)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19798;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19799;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-ai");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19800 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__18753__auto___19801 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18752__auto___19800,actual__18753__auto___19801)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19800;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19801;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__18753__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18752__auto__,actual__18753__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19739_19792,_STAR_parent_description_STAR__temp_val__19740_19793,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__19739_19792,_STAR_parent_description_STAR__temp_val__19740_19793,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19802 = "AI vs Human";
var actual__18753__auto___19803 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-human");
if(cljs.core._EQ_.call(null,expected__18752__auto___19802,actual__18753__auto___19803)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19802;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19803;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19804 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__18753__auto___19805 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18752__auto___19804,actual__18753__auto___19805)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19804;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19805;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__18753__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18752__auto__,actual__18753__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19739_19792,_STAR_parent_description_STAR__temp_val__19740_19793,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false),speclj.components.new_characteristic.call(null,"clicking Human vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__19739_19792,_STAR_parent_description_STAR__temp_val__19740_19793,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19806 = "Human vs Human";
var actual__18753__auto___19807 = c3kit.wire.spec_helper.text.call(null,"#human-vs-human");
if(cljs.core._EQ_.call(null,expected__18752__auto___19806,actual__18753__auto___19807)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19806;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19807;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19808 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__18753__auto___19809 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18752__auto___19808,actual__18753__auto___19809)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19808;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19809;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__18753__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18752__auto__,actual__18753__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19739_19792,_STAR_parent_description_STAR__temp_val__19740_19793,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__19739_19792,_STAR_parent_description_STAR__temp_val__19740_19793,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19810 = "AI vs AI";
var actual__18753__auto___19811 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-ai");
if(cljs.core._EQ_.call(null,expected__18752__auto___19810,actual__18753__auto___19811)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19810;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19811;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-ai");

var out = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19812 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__18753__auto___19813 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18752__auto___19812,actual__18753__auto___19813)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19812;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19813;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__18753__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18752__auto__,actual__18753__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19739_19792,_STAR_parent_description_STAR__temp_val__19740_19793,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false)],null)));
var chunk__19742_19795 = null;
var count__19743_19796 = (0);
var i__19744_19797 = (0);
while(true){
if((i__19744_19797 < count__19743_19796)){
var component__18611__auto___19814 = cljs.core._nth.call(null,chunk__19742_19795,i__19744_19797);
speclj.components.install.call(null,component__18611__auto___19814,description__18610__auto____$2);


var G__19815 = seq__19741_19794;
var G__19816 = chunk__19742_19795;
var G__19817 = count__19743_19796;
var G__19818 = (i__19744_19797 + (1));
seq__19741_19794 = G__19815;
chunk__19742_19795 = G__19816;
count__19743_19796 = G__19817;
i__19744_19797 = G__19818;
continue;
} else {
var temp__5825__auto___19819 = cljs.core.seq.call(null,seq__19741_19794);
if(temp__5825__auto___19819){
var seq__19741_19820__$1 = temp__5825__auto___19819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19741_19820__$1)){
var c__5548__auto___19821 = cljs.core.chunk_first.call(null,seq__19741_19820__$1);
var G__19822 = cljs.core.chunk_rest.call(null,seq__19741_19820__$1);
var G__19823 = c__5548__auto___19821;
var G__19824 = cljs.core.count.call(null,c__5548__auto___19821);
var G__19825 = (0);
seq__19741_19794 = G__19822;
chunk__19742_19795 = G__19823;
count__19743_19796 = G__19824;
i__19744_19797 = G__19825;
continue;
} else {
var component__18611__auto___19826 = cljs.core.first.call(null,seq__19741_19820__$1);
speclj.components.install.call(null,component__18611__auto___19826,description__18610__auto____$2);


var G__19827 = cljs.core.next.call(null,seq__19741_19820__$1);
var G__19828 = null;
var G__19829 = (0);
var G__19830 = (0);
seq__19741_19794 = G__19827;
chunk__19742_19795 = G__19828;
count__19743_19796 = G__19829;
i__19744_19797 = G__19830;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19739_19792);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18610__auto____$2);
}

return description__18610__auto____$2;
})(),(function (){var description__18610__auto____$2 = speclj.components.new_description.call(null,"select-board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__19745_19831 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19746_19832 = description__18610__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19746_19832);

try{var seq__19747_19833 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19745_19831,_STAR_parent_description_STAR__temp_val__19746_19832,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__19745_19831,_STAR_parent_description_STAR__temp_val__19746_19832,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
),speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__19745_19831,_STAR_parent_description_STAR__temp_val__19746_19832,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
var value__19114__auto___19837 = "#board-3x3";
var node__19115__auto___19838 = c3kit.wire.spec_helper.select.call(null,value__19114__auto___19837);
if(cljs.core.truth_(node__19115__auto___19838)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19114__auto___19837;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19839 = "3x3";
var actual__18753__auto___19840 = c3kit.wire.spec_helper.text.call(null,"#board-3x3");
if(cljs.core._EQ_.call(null,expected__18752__auto___19839,actual__18753__auto___19840)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19839;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19840;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19841 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__18753__auto___19842 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18752__auto___19841,actual__18753__auto___19842)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19841;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19842;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19843 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__18753__auto___19844 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18752__auto___19843,actual__18753__auto___19844)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19843;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19844;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__18753__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18752__auto__,actual__18753__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19745_19831,_STAR_parent_description_STAR__temp_val__19746_19832,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false),speclj.components.new_characteristic.call(null,"4x4",((function (_STAR_parent_description_STAR__orig_val__19745_19831,_STAR_parent_description_STAR__temp_val__19746_19832,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
var value__19114__auto___19845 = "#board-4x4";
var node__19115__auto___19846 = c3kit.wire.spec_helper.select.call(null,value__19114__auto___19845);
if(cljs.core.truth_(node__19115__auto___19846)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19114__auto___19845;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19847 = "4x4";
var actual__18753__auto___19848 = c3kit.wire.spec_helper.text.call(null,"#board-4x4");
if(cljs.core._EQ_.call(null,expected__18752__auto___19847,actual__18753__auto___19848)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19847;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19848;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-4x4");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19849 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__18753__auto___19850 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18752__auto___19849,actual__18753__auto___19850)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19849;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19850;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19851 = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__18753__auto___19852 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18752__auto___19851,actual__18753__auto___19852)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19851;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19852;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__18753__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18752__auto__,actual__18753__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19745_19831,_STAR_parent_description_STAR__temp_val__19746_19832,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false),speclj.components.new_characteristic.call(null,"3x3x3",((function (_STAR_parent_description_STAR__orig_val__19745_19831,_STAR_parent_description_STAR__temp_val__19746_19832,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
var value__19114__auto___19853 = "#board-3x3x3";
var node__19115__auto___19854 = c3kit.wire.spec_helper.select.call(null,value__19114__auto___19853);
if(cljs.core.truth_(node__19115__auto___19854)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19114__auto___19853;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19855 = "3x3x3";
var actual__18753__auto___19856 = c3kit.wire.spec_helper.text.call(null,"#board-3x3x3");
if(cljs.core._EQ_.call(null,expected__18752__auto___19855,actual__18753__auto___19856)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19855;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19856;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19857 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__18753__auto___19858 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18752__auto___19857,actual__18753__auto___19858)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19857;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19858;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19859 = new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540);
var actual__18753__auto___19860 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18752__auto___19859,actual__18753__auto___19860)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19859;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19860;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
var actual__18753__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18752__auto__,actual__18753__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19745_19831,_STAR_parent_description_STAR__temp_val__19746_19832,description__18610__auto____$2,_STAR_parent_description_STAR__orig_val__19721_19786,_STAR_parent_description_STAR__temp_val__19722_19787,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false)],null)));
var chunk__19748_19834 = null;
var count__19749_19835 = (0);
var i__19750_19836 = (0);
while(true){
if((i__19750_19836 < count__19749_19835)){
var component__18611__auto___19861 = cljs.core._nth.call(null,chunk__19748_19834,i__19750_19836);
speclj.components.install.call(null,component__18611__auto___19861,description__18610__auto____$2);


var G__19862 = seq__19747_19833;
var G__19863 = chunk__19748_19834;
var G__19864 = count__19749_19835;
var G__19865 = (i__19750_19836 + (1));
seq__19747_19833 = G__19862;
chunk__19748_19834 = G__19863;
count__19749_19835 = G__19864;
i__19750_19836 = G__19865;
continue;
} else {
var temp__5825__auto___19866 = cljs.core.seq.call(null,seq__19747_19833);
if(temp__5825__auto___19866){
var seq__19747_19867__$1 = temp__5825__auto___19866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19747_19867__$1)){
var c__5548__auto___19868 = cljs.core.chunk_first.call(null,seq__19747_19867__$1);
var G__19869 = cljs.core.chunk_rest.call(null,seq__19747_19867__$1);
var G__19870 = c__5548__auto___19868;
var G__19871 = cljs.core.count.call(null,c__5548__auto___19868);
var G__19872 = (0);
seq__19747_19833 = G__19869;
chunk__19748_19834 = G__19870;
count__19749_19835 = G__19871;
i__19750_19836 = G__19872;
continue;
} else {
var component__18611__auto___19873 = cljs.core.first.call(null,seq__19747_19867__$1);
speclj.components.install.call(null,component__18611__auto___19873,description__18610__auto____$2);


var G__19874 = cljs.core.next.call(null,seq__19747_19867__$1);
var G__19875 = null;
var G__19876 = (0);
var G__19877 = (0);
seq__19747_19833 = G__19874;
chunk__19748_19834 = G__19875;
count__19749_19835 = G__19876;
i__19750_19836 = G__19877;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19745_19831);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18610__auto____$2);
}

return description__18610__auto____$2;
})()],null)));
var chunk__19724_19789 = null;
var count__19725_19790 = (0);
var i__19726_19791 = (0);
while(true){
if((i__19726_19791 < count__19725_19790)){
var component__18611__auto___19878 = cljs.core._nth.call(null,chunk__19724_19789,i__19726_19791);
speclj.components.install.call(null,component__18611__auto___19878,description__18610__auto____$1);


var G__19879 = seq__19723_19788;
var G__19880 = chunk__19724_19789;
var G__19881 = count__19725_19790;
var G__19882 = (i__19726_19791 + (1));
seq__19723_19788 = G__19879;
chunk__19724_19789 = G__19880;
count__19725_19790 = G__19881;
i__19726_19791 = G__19882;
continue;
} else {
var temp__5825__auto___19883 = cljs.core.seq.call(null,seq__19723_19788);
if(temp__5825__auto___19883){
var seq__19723_19884__$1 = temp__5825__auto___19883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19723_19884__$1)){
var c__5548__auto___19885 = cljs.core.chunk_first.call(null,seq__19723_19884__$1);
var G__19886 = cljs.core.chunk_rest.call(null,seq__19723_19884__$1);
var G__19887 = c__5548__auto___19885;
var G__19888 = cljs.core.count.call(null,c__5548__auto___19885);
var G__19889 = (0);
seq__19723_19788 = G__19886;
chunk__19724_19789 = G__19887;
count__19725_19790 = G__19888;
i__19726_19791 = G__19889;
continue;
} else {
var component__18611__auto___19890 = cljs.core.first.call(null,seq__19723_19884__$1);
speclj.components.install.call(null,component__18611__auto___19890,description__18610__auto____$1);


var G__19891 = cljs.core.next.call(null,seq__19723_19884__$1);
var G__19892 = null;
var G__19893 = (0);
var G__19894 = (0);
seq__19723_19788 = G__19891;
chunk__19724_19789 = G__19892;
count__19725_19790 = G__19893;
i__19726_19791 = G__19894;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19721_19786);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18610__auto____$1);
}

return description__18610__auto____$1;
})(),(function (){var description__18610__auto____$1 = speclj.components.new_description.call(null,"calls select-difficulty with correct key",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__19751_19895 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19752_19896 = description__18610__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19752_19896);

try{var seq__19753_19897 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19751_19895,_STAR_parent_description_STAR__temp_val__19752_19896,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__19751_19895,_STAR_parent_description_STAR__temp_val__19752_19896,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
),speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__19751_19895,_STAR_parent_description_STAR__temp_val__19752_19896,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
var select_difficulty_BANG__orig_val__19763 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__19764 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__19764);

try{var value__19114__auto___19901 = ".easy";
var node__19115__auto___19902 = c3kit.wire.spec_helper.select.call(null,value__19114__auto___19901);
if(cljs.core.truth_(node__19115__auto___19902)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19114__auto___19901;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19903 = "Easy";
var actual__18753__auto___19904 = c3kit.wire.spec_helper.text.call(null,".easy");
if(cljs.core._EQ_.call(null,expected__18752__auto___19903,actual__18753__auto___19904)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19903;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19904;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".easy");

speclj.components.inc_assertions_BANG_.call(null);

var name__18998__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__18999__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null)], null);
var invocations__19000__auto__ = speclj.stub.invocations_of.call(null,name__18998__auto__);
var times__19001__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__18999__auto__);
var times_QMARK___19002__auto__ = typeof times__19001__auto__ === 'number';
var check_params_QMARK___19003__auto__ = cljs.core.contains_QMARK_.call(null,options__18999__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__19004__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__18999__auto__);
var with__19004__auto____$1 = (((with__19004__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__19004__auto__);
var invocations_str__19005__auto__ = (function (p1__18995__19006__auto__){
if(cljs.core._EQ_.call(null,(1),p1__18995__19006__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___19002__auto__) && (check_params_QMARK___19003__auto__))){
var matching_invocations__19007__auto__ = cljs.core.filter.call(null,(function (p1__18996__19008__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__19004__auto____$1,p1__18996__19008__auto__);
}),invocations__19000__auto__);
var matching_count__19009__auto__ = cljs.core.count.call(null,matching_invocations__19007__auto__);
if(cljs.core._EQ_.call(null,times__19001__auto__,matching_count__19009__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__19001__auto__)," ",invocations_str__19005__auto__.call(null,times__19001__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__)," with ",cljs.core.pr_str.call(null,with__19004__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__19009__auto__)," ",invocations_str__19005__auto__.call(null,matching_count__19009__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___19003__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18997__19010__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__19004__auto____$1,p1__18997__19010__auto__);
}),invocations__19000__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__)," with ",cljs.core.pr_str.call(null,with__19004__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__19000__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___19002__auto__){
if(cljs.core._EQ_.call(null,times__19001__auto__,cljs.core.count.call(null,invocations__19000__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__19001__auto__)," ",invocations_str__19005__auto__.call(null,times__19001__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__19000__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__19000__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__19000__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__19763);
}});})(_STAR_parent_description_STAR__orig_val__19751_19895,_STAR_parent_description_STAR__temp_val__19752_19896,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__19751_19895,_STAR_parent_description_STAR__temp_val__19752_19896,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
var select_difficulty_BANG__orig_val__19765 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__19766 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__19766);

try{var value__19114__auto___19905 = ".medium";
var node__19115__auto___19906 = c3kit.wire.spec_helper.select.call(null,value__19114__auto___19905);
if(cljs.core.truth_(node__19115__auto___19906)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19114__auto___19905;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19907 = "Medium";
var actual__18753__auto___19908 = c3kit.wire.spec_helper.text.call(null,".medium");
if(cljs.core._EQ_.call(null,expected__18752__auto___19907,actual__18753__auto___19908)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19907;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19908;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".medium");

speclj.components.inc_assertions_BANG_.call(null);

var name__18998__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__18999__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384)], null)], null);
var invocations__19000__auto__ = speclj.stub.invocations_of.call(null,name__18998__auto__);
var times__19001__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__18999__auto__);
var times_QMARK___19002__auto__ = typeof times__19001__auto__ === 'number';
var check_params_QMARK___19003__auto__ = cljs.core.contains_QMARK_.call(null,options__18999__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__19004__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__18999__auto__);
var with__19004__auto____$1 = (((with__19004__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__19004__auto__);
var invocations_str__19005__auto__ = (function (p1__18995__19006__auto__){
if(cljs.core._EQ_.call(null,(1),p1__18995__19006__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___19002__auto__) && (check_params_QMARK___19003__auto__))){
var matching_invocations__19007__auto__ = cljs.core.filter.call(null,(function (p1__18996__19008__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__19004__auto____$1,p1__18996__19008__auto__);
}),invocations__19000__auto__);
var matching_count__19009__auto__ = cljs.core.count.call(null,matching_invocations__19007__auto__);
if(cljs.core._EQ_.call(null,times__19001__auto__,matching_count__19009__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__19001__auto__)," ",invocations_str__19005__auto__.call(null,times__19001__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__)," with ",cljs.core.pr_str.call(null,with__19004__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__19009__auto__)," ",invocations_str__19005__auto__.call(null,matching_count__19009__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___19003__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18997__19010__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__19004__auto____$1,p1__18997__19010__auto__);
}),invocations__19000__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__)," with ",cljs.core.pr_str.call(null,with__19004__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__19000__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___19002__auto__){
if(cljs.core._EQ_.call(null,times__19001__auto__,cljs.core.count.call(null,invocations__19000__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__19001__auto__)," ",invocations_str__19005__auto__.call(null,times__19001__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__19000__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__19000__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__19000__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__19765);
}});})(_STAR_parent_description_STAR__orig_val__19751_19895,_STAR_parent_description_STAR__temp_val__19752_19896,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__19751_19895,_STAR_parent_description_STAR__temp_val__19752_19896,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
var select_difficulty_BANG__orig_val__19767 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__19768 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__19768);

try{var value__19114__auto___19909 = ".hard";
var node__19115__auto___19910 = c3kit.wire.spec_helper.select.call(null,value__19114__auto___19909);
if(cljs.core.truth_(node__19115__auto___19910)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19114__auto___19909;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19911 = "Hard";
var actual__18753__auto___19912 = c3kit.wire.spec_helper.text.call(null,".hard");
if(cljs.core._EQ_.call(null,expected__18752__auto___19911,actual__18753__auto___19912)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19911;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19912;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".hard");

speclj.components.inc_assertions_BANG_.call(null);

var name__18998__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__18999__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null)], null);
var invocations__19000__auto__ = speclj.stub.invocations_of.call(null,name__18998__auto__);
var times__19001__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__18999__auto__);
var times_QMARK___19002__auto__ = typeof times__19001__auto__ === 'number';
var check_params_QMARK___19003__auto__ = cljs.core.contains_QMARK_.call(null,options__18999__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__19004__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__18999__auto__);
var with__19004__auto____$1 = (((with__19004__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__19004__auto__);
var invocations_str__19005__auto__ = (function (p1__18995__19006__auto__){
if(cljs.core._EQ_.call(null,(1),p1__18995__19006__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___19002__auto__) && (check_params_QMARK___19003__auto__))){
var matching_invocations__19007__auto__ = cljs.core.filter.call(null,(function (p1__18996__19008__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__19004__auto____$1,p1__18996__19008__auto__);
}),invocations__19000__auto__);
var matching_count__19009__auto__ = cljs.core.count.call(null,matching_invocations__19007__auto__);
if(cljs.core._EQ_.call(null,times__19001__auto__,matching_count__19009__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__19001__auto__)," ",invocations_str__19005__auto__.call(null,times__19001__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__)," with ",cljs.core.pr_str.call(null,with__19004__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__19009__auto__)," ",invocations_str__19005__auto__.call(null,matching_count__19009__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___19003__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18997__19010__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__19004__auto____$1,p1__18997__19010__auto__);
}),invocations__19000__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__)," with ",cljs.core.pr_str.call(null,with__19004__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__19000__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___19002__auto__){
if(cljs.core._EQ_.call(null,times__19001__auto__,cljs.core.count.call(null,invocations__19000__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__19001__auto__)," ",invocations_str__19005__auto__.call(null,times__19001__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__19000__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__19000__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__19000__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__19767);
}});})(_STAR_parent_description_STAR__orig_val__19751_19895,_STAR_parent_description_STAR__temp_val__19752_19896,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false)],null)));
var chunk__19754_19898 = null;
var count__19755_19899 = (0);
var i__19756_19900 = (0);
while(true){
if((i__19756_19900 < count__19755_19899)){
var component__18611__auto___19913 = cljs.core._nth.call(null,chunk__19754_19898,i__19756_19900);
speclj.components.install.call(null,component__18611__auto___19913,description__18610__auto____$1);


var G__19914 = seq__19753_19897;
var G__19915 = chunk__19754_19898;
var G__19916 = count__19755_19899;
var G__19917 = (i__19756_19900 + (1));
seq__19753_19897 = G__19914;
chunk__19754_19898 = G__19915;
count__19755_19899 = G__19916;
i__19756_19900 = G__19917;
continue;
} else {
var temp__5825__auto___19918 = cljs.core.seq.call(null,seq__19753_19897);
if(temp__5825__auto___19918){
var seq__19753_19919__$1 = temp__5825__auto___19918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19753_19919__$1)){
var c__5548__auto___19920 = cljs.core.chunk_first.call(null,seq__19753_19919__$1);
var G__19921 = cljs.core.chunk_rest.call(null,seq__19753_19919__$1);
var G__19922 = c__5548__auto___19920;
var G__19923 = cljs.core.count.call(null,c__5548__auto___19920);
var G__19924 = (0);
seq__19753_19897 = G__19921;
chunk__19754_19898 = G__19922;
count__19755_19899 = G__19923;
i__19756_19900 = G__19924;
continue;
} else {
var component__18611__auto___19925 = cljs.core.first.call(null,seq__19753_19919__$1);
speclj.components.install.call(null,component__18611__auto___19925,description__18610__auto____$1);


var G__19926 = cljs.core.next.call(null,seq__19753_19919__$1);
var G__19927 = null;
var G__19928 = (0);
var G__19929 = (0);
seq__19753_19897 = G__19926;
chunk__19754_19898 = G__19927;
count__19755_19899 = G__19928;
i__19756_19900 = G__19929;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19751_19895);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18610__auto____$1);
}

return description__18610__auto____$1;
})(),(function (){var description__18610__auto____$1 = speclj.components.new_description.call(null,"drawing board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__19769_19930 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19770_19931 = description__18610__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19770_19931);

try{var seq__19771_19932 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19769_19930,_STAR_parent_description_STAR__temp_val__19770_19931,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__19769_19930,_STAR_parent_description_STAR__temp_val__19770_19931,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
),speclj.components.new_characteristic.call(null,"render-cell returns td with value",((function (_STAR_parent_description_STAR__orig_val__19769_19930,_STAR_parent_description_STAR__temp_val__19770_19931,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
var out = tic_tac_toe.html.render_cell.call(null,"index");
speclj.components.inc_assertions_BANG_.call(null);

var expected__18803__auto___19936 = new cljs.core.Keyword(null,"td","td",1479933353);
var actual__18804__auto___19937 = out;
if((actual__18804__auto___19937 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18803__auto___19936;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__18803__auto___19936 === 'string') && (typeof actual__18804__auto___19937 === 'string'))){
if((clojure.string.index_of.call(null,actual__18804__auto___19937,expected__18803__auto___19936) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18803__auto___19936;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18804__auto___19937;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__18803__auto___19936)) && (typeof actual__18804__auto___19937 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__18803__auto___19936,actual__18804__auto___19937))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__18804__auto___19937;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__18803__auto___19936;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__18804__auto___19937)){
if(cljs.core.contains_QMARK_.call(null,actual__18804__auto___19937,expected__18803__auto___19936)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18803__auto___19936;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__18804__auto___19937;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__18804__auto___19937)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18802__18805__auto__){
return cljs.core._EQ_.call(null,expected__18803__auto___19936,p1__18802__18805__auto__);
}),actual__18804__auto___19937))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18803__auto___19936;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18804__auto___19937;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__18731__auto__ = expected__18803__auto___19936;
var b__18732__auto__ = actual__18804__auto___19937;
var type_a__18733__auto__ = (((a__18731__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__18731__auto__)));
var type_b__18734__auto__ = (((b__18732__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__18732__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__18733__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__18734__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18803__auto__ = "index";
var actual__18804__auto__ = out;
if((actual__18804__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__18803__auto__ === 'string') && (typeof actual__18804__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__18804__auto__,expected__18803__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18804__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__18803__auto__)) && (typeof actual__18804__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__18803__auto__,actual__18804__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__18804__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__18804__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__18804__auto__,expected__18803__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__18804__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__18804__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18802__18805__auto__){
return cljs.core._EQ_.call(null,expected__18803__auto__,p1__18802__18805__auto__);
}),actual__18804__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18804__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__18731__auto__ = expected__18803__auto__;
var b__18732__auto__ = actual__18804__auto__;
var type_a__18733__auto__ = (((a__18731__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__18731__auto__)));
var type_b__18734__auto__ = (((b__18732__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__18732__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__18733__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__18734__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__19769_19930,_STAR_parent_description_STAR__temp_val__19770_19931,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false),speclj.components.new_characteristic.call(null,"render-board returns table with value",((function (_STAR_parent_description_STAR__orig_val__19769_19930,_STAR_parent_description_STAR__temp_val__19770_19931,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
var out = tic_tac_toe.html.render_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180)], null));
speclj.components.inc_assertions_BANG_.call(null);

var expected__18803__auto__ = new cljs.core.Keyword(null,"tbody","tbody",-80678300);
var actual__18804__auto__ = out;
if((actual__18804__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__18803__auto__ === 'string') && (typeof actual__18804__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__18804__auto__,expected__18803__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18804__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__18803__auto__)) && (typeof actual__18804__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__18803__auto__,actual__18804__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__18804__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__18804__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__18804__auto__,expected__18803__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__18804__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__18804__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18802__18805__auto__){
return cljs.core._EQ_.call(null,expected__18803__auto__,p1__18802__18805__auto__);
}),actual__18804__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18804__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__18731__auto__ = expected__18803__auto__;
var b__18732__auto__ = actual__18804__auto__;
var type_a__18733__auto__ = (((a__18731__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__18731__auto__)));
var type_b__18734__auto__ = (((b__18732__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__18732__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__18733__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__18734__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__19769_19930,_STAR_parent_description_STAR__temp_val__19770_19931,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false),speclj.components.new_characteristic.call(null,"gives nine cells for 3x3",((function (_STAR_parent_description_STAR__orig_val__19769_19930,_STAR_parent_description_STAR__temp_val__19770_19931,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19938 = (3);
var actual__18753__auto___19939 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18752__auto___19938,actual__18753__auto___19939)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19938;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19939;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19940 = (3);
var actual__18753__auto___19941 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18752__auto___19940,actual__18753__auto___19941)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19940;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19941;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto__ = (9);
var actual__18753__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18752__auto__,actual__18753__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19769_19930,_STAR_parent_description_STAR__temp_val__19770_19931,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false),speclj.components.new_characteristic.call(null,"gives 16 cells for 4x4",((function (_STAR_parent_description_STAR__orig_val__19769_19930,_STAR_parent_description_STAR__temp_val__19770_19931,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19942 = (4);
var actual__18753__auto___19943 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18752__auto___19942,actual__18753__auto___19943)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19942;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19943;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19944 = (4);
var actual__18753__auto___19945 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18752__auto___19944,actual__18753__auto___19945)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19944;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19945;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto__ = (16);
var actual__18753__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18752__auto__,actual__18753__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19769_19930,_STAR_parent_description_STAR__temp_val__19770_19931,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false),speclj.components.new_characteristic.call(null,"gives 27 cells for 3x3x3",((function (_STAR_parent_description_STAR__orig_val__19769_19930,_STAR_parent_description_STAR__temp_val__19770_19931,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19946 = (3);
var actual__18753__auto___19947 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18752__auto___19946,actual__18753__auto___19947)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19946;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19947;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19948 = (9);
var actual__18753__auto___19949 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18752__auto___19948,actual__18753__auto___19949)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19948;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19949;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto__ = (27);
var actual__18753__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18752__auto__,actual__18753__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19769_19930,_STAR_parent_description_STAR__temp_val__19770_19931,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false),speclj.components.new_characteristic.call(null,"click cell",((function (_STAR_parent_description_STAR__orig_val__19769_19930,_STAR_parent_description_STAR__temp_val__19770_19931,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779){
return (function (){
var apply_human_move_orig_val__19777 = tic_tac_toe.human_turn.apply_human_move;
var apply_human_move_temp_val__19778 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.PersistentVector.EMPTY], null)], null));
(tic_tac_toe.human_turn.apply_human_move = apply_human_move_temp_val__19778);

try{var value__19114__auto___19950 = "#cell";
var node__19115__auto___19951 = c3kit.wire.spec_helper.select.call(null,value__19114__auto___19950);
if(cljs.core.truth_(node__19115__auto___19951)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19114__auto___19950;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18752__auto___19952 = "0";
var actual__18753__auto___19953 = c3kit.wire.spec_helper.text.call(null,"#cell");
if(cljs.core._EQ_.call(null,expected__18752__auto___19952,actual__18753__auto___19953)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18752__auto___19952;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18753__auto___19953;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18720__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18720__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#cell");

speclj.components.inc_assertions_BANG_.call(null);

var name__18998__auto__ = new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819);
var options__18999__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__19000__auto__ = speclj.stub.invocations_of.call(null,name__18998__auto__);
var times__19001__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__18999__auto__);
var times_QMARK___19002__auto__ = typeof times__19001__auto__ === 'number';
var check_params_QMARK___19003__auto__ = cljs.core.contains_QMARK_.call(null,options__18999__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__19004__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__18999__auto__);
var with__19004__auto____$1 = (((with__19004__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__19004__auto__);
var invocations_str__19005__auto__ = (function (p1__18995__19006__auto__){
if(cljs.core._EQ_.call(null,(1),p1__18995__19006__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___19002__auto__) && (check_params_QMARK___19003__auto__))){
var matching_invocations__19007__auto__ = cljs.core.filter.call(null,(function (p1__18996__19008__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__19004__auto____$1,p1__18996__19008__auto__);
}),invocations__19000__auto__);
var matching_count__19009__auto__ = cljs.core.count.call(null,matching_invocations__19007__auto__);
if(cljs.core._EQ_.call(null,times__19001__auto__,matching_count__19009__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__19001__auto__)," ",invocations_str__19005__auto__.call(null,times__19001__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__)," with ",cljs.core.pr_str.call(null,with__19004__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__19009__auto__)," ",invocations_str__19005__auto__.call(null,matching_count__19009__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___19003__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18997__19010__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__19004__auto____$1,p1__18997__19010__auto__);
}),invocations__19000__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__)," with ",cljs.core.pr_str.call(null,with__19004__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__19000__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___19002__auto__){
if(cljs.core._EQ_.call(null,times__19001__auto__,cljs.core.count.call(null,invocations__19000__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__19001__auto__)," ",invocations_str__19005__auto__.call(null,times__19001__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__19000__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__19000__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__18998__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__19000__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.human_turn.apply_human_move = apply_human_move_orig_val__19777);
}});})(_STAR_parent_description_STAR__orig_val__19769_19930,_STAR_parent_description_STAR__temp_val__19770_19931,description__18610__auto____$1,_STAR_parent_description_STAR__orig_val__19649_19780,_STAR_parent_description_STAR__temp_val__19650_19781,description__18610__auto___19779))
,false)],null)));
var chunk__19772_19933 = null;
var count__19773_19934 = (0);
var i__19774_19935 = (0);
while(true){
if((i__19774_19935 < count__19773_19934)){
var component__18611__auto___19954 = cljs.core._nth.call(null,chunk__19772_19933,i__19774_19935);
speclj.components.install.call(null,component__18611__auto___19954,description__18610__auto____$1);


var G__19955 = seq__19771_19932;
var G__19956 = chunk__19772_19933;
var G__19957 = count__19773_19934;
var G__19958 = (i__19774_19935 + (1));
seq__19771_19932 = G__19955;
chunk__19772_19933 = G__19956;
count__19773_19934 = G__19957;
i__19774_19935 = G__19958;
continue;
} else {
var temp__5825__auto___19959 = cljs.core.seq.call(null,seq__19771_19932);
if(temp__5825__auto___19959){
var seq__19771_19960__$1 = temp__5825__auto___19959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19771_19960__$1)){
var c__5548__auto___19961 = cljs.core.chunk_first.call(null,seq__19771_19960__$1);
var G__19962 = cljs.core.chunk_rest.call(null,seq__19771_19960__$1);
var G__19963 = c__5548__auto___19961;
var G__19964 = cljs.core.count.call(null,c__5548__auto___19961);
var G__19965 = (0);
seq__19771_19932 = G__19962;
chunk__19772_19933 = G__19963;
count__19773_19934 = G__19964;
i__19774_19935 = G__19965;
continue;
} else {
var component__18611__auto___19966 = cljs.core.first.call(null,seq__19771_19960__$1);
speclj.components.install.call(null,component__18611__auto___19966,description__18610__auto____$1);


var G__19967 = cljs.core.next.call(null,seq__19771_19960__$1);
var G__19968 = null;
var G__19969 = (0);
var G__19970 = (0);
seq__19771_19932 = G__19967;
chunk__19772_19933 = G__19968;
count__19773_19934 = G__19969;
i__19774_19935 = G__19970;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19769_19930);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18610__auto____$1);
}

return description__18610__auto____$1;
})()],null)));
var chunk__19652_19783 = null;
var count__19653_19784 = (0);
var i__19654_19785 = (0);
while(true){
if((i__19654_19785 < count__19653_19784)){
var component__18611__auto___19971 = cljs.core._nth.call(null,chunk__19652_19783,i__19654_19785);
speclj.components.install.call(null,component__18611__auto___19971,description__18610__auto___19779);


var G__19972 = seq__19651_19782;
var G__19973 = chunk__19652_19783;
var G__19974 = count__19653_19784;
var G__19975 = (i__19654_19785 + (1));
seq__19651_19782 = G__19972;
chunk__19652_19783 = G__19973;
count__19653_19784 = G__19974;
i__19654_19785 = G__19975;
continue;
} else {
var temp__5825__auto___19976 = cljs.core.seq.call(null,seq__19651_19782);
if(temp__5825__auto___19976){
var seq__19651_19977__$1 = temp__5825__auto___19976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19651_19977__$1)){
var c__5548__auto___19978 = cljs.core.chunk_first.call(null,seq__19651_19977__$1);
var G__19979 = cljs.core.chunk_rest.call(null,seq__19651_19977__$1);
var G__19980 = c__5548__auto___19978;
var G__19981 = cljs.core.count.call(null,c__5548__auto___19978);
var G__19982 = (0);
seq__19651_19782 = G__19979;
chunk__19652_19783 = G__19980;
count__19653_19784 = G__19981;
i__19654_19785 = G__19982;
continue;
} else {
var component__18611__auto___19983 = cljs.core.first.call(null,seq__19651_19977__$1);
speclj.components.install.call(null,component__18611__auto___19983,description__18610__auto___19779);


var G__19984 = cljs.core.next.call(null,seq__19651_19977__$1);
var G__19985 = null;
var G__19986 = (0);
var G__19987 = (0);
seq__19651_19782 = G__19984;
chunk__19652_19783 = G__19985;
count__19653_19784 = G__19986;
i__19654_19785 = G__19987;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19649_19780);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18610__auto___19779);
}


//# sourceMappingURL=html_spec.js.map
