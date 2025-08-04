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
tic_tac_toe.html_spec.cssfn = (function tic_tac_toe$html_spec$cssfn(target,key){
return c3kit.wire.spec_helper.style.call(null,target).getPropertyValue(key);
});
tic_tac_toe.html_spec.cell_count = (function tic_tac_toe$html_spec$cell_count(size){
var state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board-size","board-size",140730505),size,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,size)], null);
var out = tic_tac_toe.html.render_board.call(null,state);
var vec__11904 = out;
var seq__11905 = cljs.core.seq.call(null,vec__11904);
var first__11906 = cljs.core.first.call(null,seq__11905);
var seq__11905__$1 = cljs.core.next.call(null,seq__11905);
var _tag = first__11906;
var first__11906__$1 = cljs.core.first.call(null,seq__11905__$1);
var seq__11905__$2 = cljs.core.next.call(null,seq__11905__$1);
var _attrs = first__11906__$1;
var rows = seq__11905__$2;
var row_count = cljs.core.count.call(null,rows);
var column_count = cljs.core.count.call(null,cljs.core.drop.call(null,(2),cljs.core.first.call(null,rows)));
var cell_count = (row_count * column_count);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-count","row-count",1060167988),row_count,new cljs.core.Keyword(null,"column-count","column-count",1235131236),column_count,new cljs.core.Keyword(null,"cell-count","cell-count",-441457582),cell_count], null);
});
var description__10067__auto___12045 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__11907_12046 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11908_12047 = description__10067__auto___12045;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11908_12047);

try{var seq__11909_12048 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (it__10441__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__11979 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__11980 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__11980);

try{return it__10441__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__11979);
}});})(_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (it__10134__auto__){
var auto_advance_orig_val__11981 = tic_tac_toe.setup.auto_advance;
var auto_advance_temp_val__11982 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"auto-advance","auto-advance",930772766),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.auto_advance = auto_advance_temp_val__11982);

try{return it__10134__auto__.call(null);
}finally {(tic_tac_toe.setup.auto_advance = auto_advance_orig_val__11981);
}});})(_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
),(function (){var description__10067__auto____$1 = speclj.components.new_description.call(null,"updated state atom with screen on click",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__11983_12052 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11984_12053 = description__10067__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11984_12053);

try{var seq__11985_12054 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__10067__auto____$2 = speclj.components.new_description.call(null,"select-game-mode",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__12001_12058 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12002_12059 = description__10067__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12002_12059);

try{var seq__12003_12060 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"clicking Human vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__12001_12058,_STAR_parent_description_STAR__temp_val__12002_12059,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12064 = "Human vs AI";
var actual__10210__auto___12065 = c3kit.wire.spec_helper.text.call(null,"#human-vs-ai");
if(cljs.core._EQ_.call(null,expected__10209__auto___12064,actual__10210__auto___12065)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12064;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12065;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-ai");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12066 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10210__auto___12067 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10209__auto___12066,actual__10210__auto___12067)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12066;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12067;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__10210__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10209__auto__,actual__10210__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__12001_12058,_STAR_parent_description_STAR__temp_val__12002_12059,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__12001_12058,_STAR_parent_description_STAR__temp_val__12002_12059,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12068 = "AI vs Human";
var actual__10210__auto___12069 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-human");
if(cljs.core._EQ_.call(null,expected__10209__auto___12068,actual__10210__auto___12069)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12068;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12069;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12070 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10210__auto___12071 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10209__auto___12070,actual__10210__auto___12071)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12070;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12071;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__10210__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10209__auto__,actual__10210__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__12001_12058,_STAR_parent_description_STAR__temp_val__12002_12059,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false),speclj.components.new_characteristic.call(null,"clicking Human vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__12001_12058,_STAR_parent_description_STAR__temp_val__12002_12059,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12072 = "Human vs Human";
var actual__10210__auto___12073 = c3kit.wire.spec_helper.text.call(null,"#human-vs-human");
if(cljs.core._EQ_.call(null,expected__10209__auto___12072,actual__10210__auto___12073)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12072;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12073;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12074 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10210__auto___12075 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10209__auto___12074,actual__10210__auto___12075)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12074;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12075;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__10210__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10209__auto__,actual__10210__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__12001_12058,_STAR_parent_description_STAR__temp_val__12002_12059,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__12001_12058,_STAR_parent_description_STAR__temp_val__12002_12059,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12076 = "AI vs AI";
var actual__10210__auto___12077 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-ai");
if(cljs.core._EQ_.call(null,expected__10209__auto___12076,actual__10210__auto___12077)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12076;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12077;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-ai");

var out = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12078 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10210__auto___12079 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10209__auto___12078,actual__10210__auto___12079)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12078;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12079;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__10210__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10209__auto__,actual__10210__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__12001_12058,_STAR_parent_description_STAR__temp_val__12002_12059,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false)],null)));
var chunk__12004_12061 = null;
var count__12005_12062 = (0);
var i__12006_12063 = (0);
while(true){
if((i__12006_12063 < count__12005_12062)){
var component__10068__auto___12080 = cljs.core._nth.call(null,chunk__12004_12061,i__12006_12063);
speclj.components.install.call(null,component__10068__auto___12080,description__10067__auto____$2);


var G__12081 = seq__12003_12060;
var G__12082 = chunk__12004_12061;
var G__12083 = count__12005_12062;
var G__12084 = (i__12006_12063 + (1));
seq__12003_12060 = G__12081;
chunk__12004_12061 = G__12082;
count__12005_12062 = G__12083;
i__12006_12063 = G__12084;
continue;
} else {
var temp__5825__auto___12085 = cljs.core.seq.call(null,seq__12003_12060);
if(temp__5825__auto___12085){
var seq__12003_12086__$1 = temp__5825__auto___12085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12003_12086__$1)){
var c__5548__auto___12087 = cljs.core.chunk_first.call(null,seq__12003_12086__$1);
var G__12088 = cljs.core.chunk_rest.call(null,seq__12003_12086__$1);
var G__12089 = c__5548__auto___12087;
var G__12090 = cljs.core.count.call(null,c__5548__auto___12087);
var G__12091 = (0);
seq__12003_12060 = G__12088;
chunk__12004_12061 = G__12089;
count__12005_12062 = G__12090;
i__12006_12063 = G__12091;
continue;
} else {
var component__10068__auto___12092 = cljs.core.first.call(null,seq__12003_12086__$1);
speclj.components.install.call(null,component__10068__auto___12092,description__10067__auto____$2);


var G__12093 = cljs.core.next.call(null,seq__12003_12086__$1);
var G__12094 = null;
var G__12095 = (0);
var G__12096 = (0);
seq__12003_12060 = G__12093;
chunk__12004_12061 = G__12094;
count__12005_12062 = G__12095;
i__12006_12063 = G__12096;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12001_12058);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10067__auto____$2);
}

return description__10067__auto____$2;
})(),(function (){var description__10067__auto____$2 = speclj.components.new_description.call(null,"select-board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__12007_12097 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12008_12098 = description__10067__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12008_12098);

try{var seq__12009_12099 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__12007_12097,_STAR_parent_description_STAR__temp_val__12008_12098,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__12007_12097,_STAR_parent_description_STAR__temp_val__12008_12098,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
),speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__12007_12097,_STAR_parent_description_STAR__temp_val__12008_12098,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
var value__10571__auto___12103 = "#board-3x3";
var node__10572__auto___12104 = c3kit.wire.spec_helper.select.call(null,value__10571__auto___12103);
if(cljs.core.truth_(node__10572__auto___12104)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10571__auto___12103;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12105 = "3x3";
var actual__10210__auto___12106 = c3kit.wire.spec_helper.text.call(null,"#board-3x3");
if(cljs.core._EQ_.call(null,expected__10209__auto___12105,actual__10210__auto___12106)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12105;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12106;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12107 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10210__auto___12108 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10209__auto___12107,actual__10210__auto___12108)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12107;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12108;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12109 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10210__auto___12110 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10209__auto___12109,actual__10210__auto___12110)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12109;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12110;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10210__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10209__auto__,actual__10210__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__12007_12097,_STAR_parent_description_STAR__temp_val__12008_12098,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false),speclj.components.new_characteristic.call(null,"4x4",((function (_STAR_parent_description_STAR__orig_val__12007_12097,_STAR_parent_description_STAR__temp_val__12008_12098,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
var value__10571__auto___12111 = "#board-4x4";
var node__10572__auto___12112 = c3kit.wire.spec_helper.select.call(null,value__10571__auto___12111);
if(cljs.core.truth_(node__10572__auto___12112)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10571__auto___12111;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12113 = "4x4";
var actual__10210__auto___12114 = c3kit.wire.spec_helper.text.call(null,"#board-4x4");
if(cljs.core._EQ_.call(null,expected__10209__auto___12113,actual__10210__auto___12114)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12113;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12114;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-4x4");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12115 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10210__auto___12116 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10209__auto___12115,actual__10210__auto___12116)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12115;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12116;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12117 = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__10210__auto___12118 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10209__auto___12117,actual__10210__auto___12118)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12117;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12118;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__10210__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10209__auto__,actual__10210__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__12007_12097,_STAR_parent_description_STAR__temp_val__12008_12098,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false),speclj.components.new_characteristic.call(null,"3x3x3",((function (_STAR_parent_description_STAR__orig_val__12007_12097,_STAR_parent_description_STAR__temp_val__12008_12098,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
var value__10571__auto___12119 = "#board-3x3x3";
var node__10572__auto___12120 = c3kit.wire.spec_helper.select.call(null,value__10571__auto___12119);
if(cljs.core.truth_(node__10572__auto___12120)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10571__auto___12119;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12121 = "3x3x3";
var actual__10210__auto___12122 = c3kit.wire.spec_helper.text.call(null,"#board-3x3x3");
if(cljs.core._EQ_.call(null,expected__10209__auto___12121,actual__10210__auto___12122)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12121;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12122;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12123 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10210__auto___12124 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10209__auto___12123,actual__10210__auto___12124)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12123;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12124;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12125 = new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540);
var actual__10210__auto___12126 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10209__auto___12125,actual__10210__auto___12126)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12125;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12126;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
var actual__10210__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10209__auto__,actual__10210__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__12007_12097,_STAR_parent_description_STAR__temp_val__12008_12098,description__10067__auto____$2,_STAR_parent_description_STAR__orig_val__11983_12052,_STAR_parent_description_STAR__temp_val__11984_12053,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false)],null)));
var chunk__12010_12100 = null;
var count__12011_12101 = (0);
var i__12012_12102 = (0);
while(true){
if((i__12012_12102 < count__12011_12101)){
var component__10068__auto___12127 = cljs.core._nth.call(null,chunk__12010_12100,i__12012_12102);
speclj.components.install.call(null,component__10068__auto___12127,description__10067__auto____$2);


var G__12128 = seq__12009_12099;
var G__12129 = chunk__12010_12100;
var G__12130 = count__12011_12101;
var G__12131 = (i__12012_12102 + (1));
seq__12009_12099 = G__12128;
chunk__12010_12100 = G__12129;
count__12011_12101 = G__12130;
i__12012_12102 = G__12131;
continue;
} else {
var temp__5825__auto___12132 = cljs.core.seq.call(null,seq__12009_12099);
if(temp__5825__auto___12132){
var seq__12009_12133__$1 = temp__5825__auto___12132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12009_12133__$1)){
var c__5548__auto___12134 = cljs.core.chunk_first.call(null,seq__12009_12133__$1);
var G__12135 = cljs.core.chunk_rest.call(null,seq__12009_12133__$1);
var G__12136 = c__5548__auto___12134;
var G__12137 = cljs.core.count.call(null,c__5548__auto___12134);
var G__12138 = (0);
seq__12009_12099 = G__12135;
chunk__12010_12100 = G__12136;
count__12011_12101 = G__12137;
i__12012_12102 = G__12138;
continue;
} else {
var component__10068__auto___12139 = cljs.core.first.call(null,seq__12009_12133__$1);
speclj.components.install.call(null,component__10068__auto___12139,description__10067__auto____$2);


var G__12140 = cljs.core.next.call(null,seq__12009_12133__$1);
var G__12141 = null;
var G__12142 = (0);
var G__12143 = (0);
seq__12009_12099 = G__12140;
chunk__12010_12100 = G__12141;
count__12011_12101 = G__12142;
i__12012_12102 = G__12143;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12007_12097);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10067__auto____$2);
}

return description__10067__auto____$2;
})()],null)));
var chunk__11986_12055 = null;
var count__11987_12056 = (0);
var i__11988_12057 = (0);
while(true){
if((i__11988_12057 < count__11987_12056)){
var component__10068__auto___12144 = cljs.core._nth.call(null,chunk__11986_12055,i__11988_12057);
speclj.components.install.call(null,component__10068__auto___12144,description__10067__auto____$1);


var G__12145 = seq__11985_12054;
var G__12146 = chunk__11986_12055;
var G__12147 = count__11987_12056;
var G__12148 = (i__11988_12057 + (1));
seq__11985_12054 = G__12145;
chunk__11986_12055 = G__12146;
count__11987_12056 = G__12147;
i__11988_12057 = G__12148;
continue;
} else {
var temp__5825__auto___12149 = cljs.core.seq.call(null,seq__11985_12054);
if(temp__5825__auto___12149){
var seq__11985_12150__$1 = temp__5825__auto___12149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11985_12150__$1)){
var c__5548__auto___12151 = cljs.core.chunk_first.call(null,seq__11985_12150__$1);
var G__12152 = cljs.core.chunk_rest.call(null,seq__11985_12150__$1);
var G__12153 = c__5548__auto___12151;
var G__12154 = cljs.core.count.call(null,c__5548__auto___12151);
var G__12155 = (0);
seq__11985_12054 = G__12152;
chunk__11986_12055 = G__12153;
count__11987_12056 = G__12154;
i__11988_12057 = G__12155;
continue;
} else {
var component__10068__auto___12156 = cljs.core.first.call(null,seq__11985_12150__$1);
speclj.components.install.call(null,component__10068__auto___12156,description__10067__auto____$1);


var G__12157 = cljs.core.next.call(null,seq__11985_12150__$1);
var G__12158 = null;
var G__12159 = (0);
var G__12160 = (0);
seq__11985_12054 = G__12157;
chunk__11986_12055 = G__12158;
count__11987_12056 = G__12159;
i__11988_12057 = G__12160;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11983_12052);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10067__auto____$1);
}

return description__10067__auto____$1;
})(),(function (){var description__10067__auto____$1 = speclj.components.new_description.call(null,"calls select-difficulty with correct key",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__12013_12161 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12014_12162 = description__10067__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12014_12162);

try{var seq__12015_12163 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__12013_12161,_STAR_parent_description_STAR__temp_val__12014_12162,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__12013_12161,_STAR_parent_description_STAR__temp_val__12014_12162,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
),speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__12013_12161,_STAR_parent_description_STAR__temp_val__12014_12162,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
var select_difficulty_BANG__orig_val__12025 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__12026 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__12026);

try{var value__10571__auto___12167 = ".easy";
var node__10572__auto___12168 = c3kit.wire.spec_helper.select.call(null,value__10571__auto___12167);
if(cljs.core.truth_(node__10572__auto___12168)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10571__auto___12167;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12169 = "Easy";
var actual__10210__auto___12170 = c3kit.wire.spec_helper.text.call(null,".easy");
if(cljs.core._EQ_.call(null,expected__10209__auto___12169,actual__10210__auto___12170)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12169;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12170;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".easy");

speclj.components.inc_assertions_BANG_.call(null);

var name__10455__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__10456__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null)], null);
var invocations__10457__auto__ = speclj.stub.invocations_of.call(null,name__10455__auto__);
var times__10458__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10456__auto__);
var times_QMARK___10459__auto__ = typeof times__10458__auto__ === 'number';
var check_params_QMARK___10460__auto__ = cljs.core.contains_QMARK_.call(null,options__10456__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10461__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10456__auto__);
var with__10461__auto____$1 = (((with__10461__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10461__auto__);
var invocations_str__10462__auto__ = (function (p1__10452__10463__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10452__10463__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10459__auto__) && (check_params_QMARK___10460__auto__))){
var matching_invocations__10464__auto__ = cljs.core.filter.call(null,(function (p1__10453__10465__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10461__auto____$1,p1__10453__10465__auto__);
}),invocations__10457__auto__);
var matching_count__10466__auto__ = cljs.core.count.call(null,matching_invocations__10464__auto__);
if(cljs.core._EQ_.call(null,times__10458__auto__,matching_count__10466__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10458__auto__)," ",invocations_str__10462__auto__.call(null,times__10458__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__)," with ",cljs.core.pr_str.call(null,with__10461__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10466__auto__)," ",invocations_str__10462__auto__.call(null,matching_count__10466__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___10460__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10454__10467__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10461__auto____$1,p1__10454__10467__auto__);
}),invocations__10457__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__)," with ",cljs.core.pr_str.call(null,with__10461__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10457__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___10459__auto__){
if(cljs.core._EQ_.call(null,times__10458__auto__,cljs.core.count.call(null,invocations__10457__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10458__auto__)," ",invocations_str__10462__auto__.call(null,times__10458__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10457__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__10457__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10457__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__12025);
}});})(_STAR_parent_description_STAR__orig_val__12013_12161,_STAR_parent_description_STAR__temp_val__12014_12162,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__12013_12161,_STAR_parent_description_STAR__temp_val__12014_12162,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
var select_difficulty_BANG__orig_val__12027 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__12028 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__12028);

try{var value__10571__auto___12171 = ".medium";
var node__10572__auto___12172 = c3kit.wire.spec_helper.select.call(null,value__10571__auto___12171);
if(cljs.core.truth_(node__10572__auto___12172)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10571__auto___12171;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12173 = "Medium";
var actual__10210__auto___12174 = c3kit.wire.spec_helper.text.call(null,".medium");
if(cljs.core._EQ_.call(null,expected__10209__auto___12173,actual__10210__auto___12174)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12173;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12174;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".medium");

speclj.components.inc_assertions_BANG_.call(null);

var name__10455__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__10456__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384)], null)], null);
var invocations__10457__auto__ = speclj.stub.invocations_of.call(null,name__10455__auto__);
var times__10458__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10456__auto__);
var times_QMARK___10459__auto__ = typeof times__10458__auto__ === 'number';
var check_params_QMARK___10460__auto__ = cljs.core.contains_QMARK_.call(null,options__10456__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10461__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10456__auto__);
var with__10461__auto____$1 = (((with__10461__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10461__auto__);
var invocations_str__10462__auto__ = (function (p1__10452__10463__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10452__10463__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10459__auto__) && (check_params_QMARK___10460__auto__))){
var matching_invocations__10464__auto__ = cljs.core.filter.call(null,(function (p1__10453__10465__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10461__auto____$1,p1__10453__10465__auto__);
}),invocations__10457__auto__);
var matching_count__10466__auto__ = cljs.core.count.call(null,matching_invocations__10464__auto__);
if(cljs.core._EQ_.call(null,times__10458__auto__,matching_count__10466__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10458__auto__)," ",invocations_str__10462__auto__.call(null,times__10458__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__)," with ",cljs.core.pr_str.call(null,with__10461__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10466__auto__)," ",invocations_str__10462__auto__.call(null,matching_count__10466__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___10460__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10454__10467__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10461__auto____$1,p1__10454__10467__auto__);
}),invocations__10457__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__)," with ",cljs.core.pr_str.call(null,with__10461__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10457__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___10459__auto__){
if(cljs.core._EQ_.call(null,times__10458__auto__,cljs.core.count.call(null,invocations__10457__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10458__auto__)," ",invocations_str__10462__auto__.call(null,times__10458__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10457__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__10457__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10457__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__12027);
}});})(_STAR_parent_description_STAR__orig_val__12013_12161,_STAR_parent_description_STAR__temp_val__12014_12162,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__12013_12161,_STAR_parent_description_STAR__temp_val__12014_12162,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
var select_difficulty_BANG__orig_val__12029 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__12030 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__12030);

try{var value__10571__auto___12175 = ".hard";
var node__10572__auto___12176 = c3kit.wire.spec_helper.select.call(null,value__10571__auto___12175);
if(cljs.core.truth_(node__10572__auto___12176)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10571__auto___12175;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12177 = "Hard";
var actual__10210__auto___12178 = c3kit.wire.spec_helper.text.call(null,".hard");
if(cljs.core._EQ_.call(null,expected__10209__auto___12177,actual__10210__auto___12178)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12177;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12178;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".hard");

speclj.components.inc_assertions_BANG_.call(null);

var name__10455__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__10456__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null)], null);
var invocations__10457__auto__ = speclj.stub.invocations_of.call(null,name__10455__auto__);
var times__10458__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10456__auto__);
var times_QMARK___10459__auto__ = typeof times__10458__auto__ === 'number';
var check_params_QMARK___10460__auto__ = cljs.core.contains_QMARK_.call(null,options__10456__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10461__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10456__auto__);
var with__10461__auto____$1 = (((with__10461__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10461__auto__);
var invocations_str__10462__auto__ = (function (p1__10452__10463__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10452__10463__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10459__auto__) && (check_params_QMARK___10460__auto__))){
var matching_invocations__10464__auto__ = cljs.core.filter.call(null,(function (p1__10453__10465__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10461__auto____$1,p1__10453__10465__auto__);
}),invocations__10457__auto__);
var matching_count__10466__auto__ = cljs.core.count.call(null,matching_invocations__10464__auto__);
if(cljs.core._EQ_.call(null,times__10458__auto__,matching_count__10466__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10458__auto__)," ",invocations_str__10462__auto__.call(null,times__10458__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__)," with ",cljs.core.pr_str.call(null,with__10461__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10466__auto__)," ",invocations_str__10462__auto__.call(null,matching_count__10466__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___10460__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10454__10467__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10461__auto____$1,p1__10454__10467__auto__);
}),invocations__10457__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__)," with ",cljs.core.pr_str.call(null,with__10461__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10457__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___10459__auto__){
if(cljs.core._EQ_.call(null,times__10458__auto__,cljs.core.count.call(null,invocations__10457__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10458__auto__)," ",invocations_str__10462__auto__.call(null,times__10458__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10457__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__10457__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10457__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__12029);
}});})(_STAR_parent_description_STAR__orig_val__12013_12161,_STAR_parent_description_STAR__temp_val__12014_12162,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false)],null)));
var chunk__12016_12164 = null;
var count__12017_12165 = (0);
var i__12018_12166 = (0);
while(true){
if((i__12018_12166 < count__12017_12165)){
var component__10068__auto___12179 = cljs.core._nth.call(null,chunk__12016_12164,i__12018_12166);
speclj.components.install.call(null,component__10068__auto___12179,description__10067__auto____$1);


var G__12180 = seq__12015_12163;
var G__12181 = chunk__12016_12164;
var G__12182 = count__12017_12165;
var G__12183 = (i__12018_12166 + (1));
seq__12015_12163 = G__12180;
chunk__12016_12164 = G__12181;
count__12017_12165 = G__12182;
i__12018_12166 = G__12183;
continue;
} else {
var temp__5825__auto___12184 = cljs.core.seq.call(null,seq__12015_12163);
if(temp__5825__auto___12184){
var seq__12015_12185__$1 = temp__5825__auto___12184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12015_12185__$1)){
var c__5548__auto___12186 = cljs.core.chunk_first.call(null,seq__12015_12185__$1);
var G__12187 = cljs.core.chunk_rest.call(null,seq__12015_12185__$1);
var G__12188 = c__5548__auto___12186;
var G__12189 = cljs.core.count.call(null,c__5548__auto___12186);
var G__12190 = (0);
seq__12015_12163 = G__12187;
chunk__12016_12164 = G__12188;
count__12017_12165 = G__12189;
i__12018_12166 = G__12190;
continue;
} else {
var component__10068__auto___12191 = cljs.core.first.call(null,seq__12015_12185__$1);
speclj.components.install.call(null,component__10068__auto___12191,description__10067__auto____$1);


var G__12192 = cljs.core.next.call(null,seq__12015_12185__$1);
var G__12193 = null;
var G__12194 = (0);
var G__12195 = (0);
seq__12015_12163 = G__12192;
chunk__12016_12164 = G__12193;
count__12017_12165 = G__12194;
i__12018_12166 = G__12195;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12013_12161);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10067__auto____$1);
}

return description__10067__auto____$1;
})(),(function (){var description__10067__auto____$1 = speclj.components.new_description.call(null,"drawing board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__12031_12196 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12032_12197 = description__10067__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12032_12197);

try{var seq__12033_12198 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
),speclj.components.new_characteristic.call(null,"render-cell returns td with value",((function (_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
var out = tic_tac_toe.html.render_cell.call(null,"index");
speclj.components.inc_assertions_BANG_.call(null);

var expected__10260__auto___12202 = new cljs.core.Keyword(null,"td","td",1479933353);
var actual__10261__auto___12203 = out;
if((actual__10261__auto___12203 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10260__auto___12202;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10260__auto___12202 === 'string') && (typeof actual__10261__auto___12203 === 'string'))){
if((clojure.string.index_of.call(null,actual__10261__auto___12203,expected__10260__auto___12202) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10260__auto___12202;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10261__auto___12203;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10260__auto___12202)) && (typeof actual__10261__auto___12203 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10260__auto___12202,actual__10261__auto___12203))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10261__auto___12203;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10260__auto___12202;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10261__auto___12203)){
if(cljs.core.contains_QMARK_.call(null,actual__10261__auto___12203,expected__10260__auto___12202)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10260__auto___12202;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10261__auto___12203;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10261__auto___12203)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10259__10262__auto__){
return cljs.core._EQ_.call(null,expected__10260__auto___12202,p1__10259__10262__auto__);
}),actual__10261__auto___12203))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10260__auto___12202;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10261__auto___12203;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10188__auto__ = expected__10260__auto___12202;
var b__10189__auto__ = actual__10261__auto___12203;
var type_a__10190__auto__ = (((a__10188__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10188__auto__)));
var type_b__10191__auto__ = (((b__10189__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10189__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10190__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10191__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10260__auto__ = "index";
var actual__10261__auto__ = out;
if((actual__10261__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10260__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10260__auto__ === 'string') && (typeof actual__10261__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10261__auto__,expected__10260__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10260__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10261__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10260__auto__)) && (typeof actual__10261__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10260__auto__,actual__10261__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10261__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10260__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10261__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10261__auto__,expected__10260__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10260__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10261__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10261__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10259__10262__auto__){
return cljs.core._EQ_.call(null,expected__10260__auto__,p1__10259__10262__auto__);
}),actual__10261__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10260__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10261__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10188__auto__ = expected__10260__auto__;
var b__10189__auto__ = actual__10261__auto__;
var type_a__10190__auto__ = (((a__10188__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10188__auto__)));
var type_b__10191__auto__ = (((b__10189__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10189__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10190__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10191__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false),speclj.components.new_characteristic.call(null,"render-board returns table with value",((function (_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
var out = tic_tac_toe.html.render_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180)], null));
speclj.components.inc_assertions_BANG_.call(null);

var expected__10260__auto__ = new cljs.core.Keyword(null,"tbody","tbody",-80678300);
var actual__10261__auto__ = out;
if((actual__10261__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10260__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10260__auto__ === 'string') && (typeof actual__10261__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10261__auto__,expected__10260__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10260__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10261__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10260__auto__)) && (typeof actual__10261__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10260__auto__,actual__10261__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10261__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10260__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10261__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10261__auto__,expected__10260__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10260__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10261__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10261__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10259__10262__auto__){
return cljs.core._EQ_.call(null,expected__10260__auto__,p1__10259__10262__auto__);
}),actual__10261__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10260__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10261__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10188__auto__ = expected__10260__auto__;
var b__10189__auto__ = actual__10261__auto__;
var type_a__10190__auto__ = (((a__10188__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10188__auto__)));
var type_b__10191__auto__ = (((b__10189__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10189__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10190__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10191__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false),speclj.components.new_characteristic.call(null,"gives nine cells for 3x3",((function (_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12204 = (3);
var actual__10210__auto___12205 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10209__auto___12204,actual__10210__auto___12205)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12204;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12205;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12206 = (3);
var actual__10210__auto___12207 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10209__auto___12206,actual__10210__auto___12207)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12206;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12207;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto__ = (9);
var actual__10210__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10209__auto__,actual__10210__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false),speclj.components.new_characteristic.call(null,"gives 16 cells for 4x4",((function (_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12208 = (4);
var actual__10210__auto___12209 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10209__auto___12208,actual__10210__auto___12209)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12208;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12209;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12210 = (4);
var actual__10210__auto___12211 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10209__auto___12210,actual__10210__auto___12211)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12210;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12211;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto__ = (16);
var actual__10210__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10209__auto__,actual__10210__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false),speclj.components.new_characteristic.call(null,"gives 27 cells for 3x3x3",((function (_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12212 = (3);
var actual__10210__auto___12213 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10209__auto___12212,actual__10210__auto___12213)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12212;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12213;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12214 = (9);
var actual__10210__auto___12215 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10209__auto___12214,actual__10210__auto___12215)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12214;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12215;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto__ = (27);
var actual__10210__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10209__auto__,actual__10210__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false),speclj.components.new_characteristic.call(null,"click cell, css",((function (_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
var apply_human_move_orig_val__12041 = tic_tac_toe.human_turn.apply_human_move;
var apply_human_move_temp_val__12042 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (state,_idx){
return state;
})], null));
(tic_tac_toe.human_turn.apply_human_move = apply_human_move_temp_val__12042);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

var value__10571__auto___12216 = "#cell-1";
var node__10572__auto___12217 = c3kit.wire.spec_helper.select.call(null,value__10571__auto___12216);
if(cljs.core.truth_(node__10572__auto___12217)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10571__auto___12216;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12218 = "grey";
var actual__10210__auto___12219 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","background-color");
if(cljs.core._EQ_.call(null,expected__10209__auto___12218,actual__10210__auto___12219)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12218;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12219;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12220 = "60px";
var actual__10210__auto___12221 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","width");
if(cljs.core._EQ_.call(null,expected__10209__auto___12220,actual__10210__auto___12221)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12220;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12221;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12222 = "60px";
var actual__10210__auto___12223 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","height");
if(cljs.core._EQ_.call(null,expected__10209__auto___12222,actual__10210__auto___12223)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12222;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12223;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12224 = "pointer";
var actual__10210__auto___12225 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","cursor");
if(cljs.core._EQ_.call(null,expected__10209__auto___12224,actual__10210__auto___12225)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12224;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12225;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12226 = "1";
var actual__10210__auto___12227 = c3kit.wire.spec_helper.text.call(null,"#cell-1");
if(cljs.core._EQ_.call(null,expected__10209__auto___12226,actual__10210__auto___12227)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12226;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12227;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-1");

speclj.components.inc_assertions_BANG_.call(null);

var name__10455__auto__ = new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819);
var options__10456__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10457__auto__ = speclj.stub.invocations_of.call(null,name__10455__auto__);
var times__10458__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10456__auto__);
var times_QMARK___10459__auto__ = typeof times__10458__auto__ === 'number';
var check_params_QMARK___10460__auto__ = cljs.core.contains_QMARK_.call(null,options__10456__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10461__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10456__auto__);
var with__10461__auto____$1 = (((with__10461__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10461__auto__);
var invocations_str__10462__auto__ = (function (p1__10452__10463__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10452__10463__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10459__auto__) && (check_params_QMARK___10460__auto__))){
var matching_invocations__10464__auto__ = cljs.core.filter.call(null,(function (p1__10453__10465__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10461__auto____$1,p1__10453__10465__auto__);
}),invocations__10457__auto__);
var matching_count__10466__auto__ = cljs.core.count.call(null,matching_invocations__10464__auto__);
if(cljs.core._EQ_.call(null,times__10458__auto__,matching_count__10466__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10458__auto__)," ",invocations_str__10462__auto__.call(null,times__10458__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__)," with ",cljs.core.pr_str.call(null,with__10461__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10466__auto__)," ",invocations_str__10462__auto__.call(null,matching_count__10466__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___10460__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10454__10467__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10461__auto____$1,p1__10454__10467__auto__);
}),invocations__10457__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__)," with ",cljs.core.pr_str.call(null,with__10461__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10457__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___10459__auto__){
if(cljs.core._EQ_.call(null,times__10458__auto__,cljs.core.count.call(null,invocations__10457__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10458__auto__)," ",invocations_str__10462__auto__.call(null,times__10458__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10457__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__10457__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10455__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10457__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.human_turn.apply_human_move = apply_human_move_orig_val__12041);
}});})(_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false),speclj.components.new_characteristic.call(null,"click cell, css",((function (_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045){
return (function (){
var apply_human_move_orig_val__12043 = tic_tac_toe.human_turn.apply_human_move;
var apply_human_move_temp_val__12044 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (state,_idx){
return state;
})], null));
(tic_tac_toe.human_turn.apply_human_move = apply_human_move_temp_val__12044);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

var value__10571__auto___12228 = "#cell-1";
var node__10572__auto___12229 = c3kit.wire.spec_helper.select.call(null,value__10571__auto___12228);
if(cljs.core.truth_(node__10572__auto___12229)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10571__auto___12228;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10209__auto___12230 = "1";
var actual__10210__auto___12231 = c3kit.wire.spec_helper.text.call(null,"#cell-1");
if(cljs.core._EQ_.call(null,expected__10209__auto___12230,actual__10210__auto___12231)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10209__auto___12230;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10210__auto___12231;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-1");

speclj.components.inc_assertions_BANG_.call(null);

var name__10476__auto__ = new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819);
var options__10477__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__10478__auto__ = speclj.stub.invocations_of.call(null,name__10476__auto__);
var times__10479__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10477__auto__);
var times_QMARK___10480__auto__ = typeof times__10479__auto__ === 'number';
var check_params_QMARK___10481__auto__ = cljs.core.contains_QMARK_.call(null,options__10477__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10482__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10477__auto__);
var with__10482__auto____$1 = (((with__10482__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10482__auto__);
var add_s__10483__auto__ = (function (p1__10473__10484__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10473__10484__auto__)){
return "";
} else {
return "s";
}
});
if(((times_QMARK___10480__auto__) && (check_params_QMARK___10481__auto__))){
var matching_invocations__10485__auto__ = cljs.core.filter.call(null,(function (p1__10474__10486__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10482__auto____$1,p1__10474__10486__auto__);
}),invocations__10478__auto__);
var matching_count__10487__auto__ = cljs.core.count.call(null,matching_invocations__10485__auto__);
if(cljs.core._EQ_.call(null,times__10479__auto__,matching_count__10487__auto__)){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10476__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10479__auto__)," time",add_s__10483__auto__.call(null,matching_count__10487__auto__)," with ",cljs.core.pr_str.call(null,with__10482__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10487__auto__)," invocation",add_s__10483__auto__.call(null,matching_count__10487__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(times_QMARK___10480__auto__){
if(cljs.core._EQ_.call(null,times__10479__auto__,cljs.core.count.call(null,invocations__10478__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10476__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10479__auto__)," time",add_s__10483__auto__.call(null,times__10479__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10479__auto__)," invocation",add_s__10483__auto__.call(null,times__10479__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(check_params_QMARK___10481__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10475__10488__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10482__auto____$1,p1__10475__10488__auto__);
}),invocations__10478__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10476__auto__)," not to have been invoked with ",cljs.core.pr_str.call(null,with__10482__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10478__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.seq.call(null,invocations__10478__auto__)){
throw cljs.core.ex_info.call(null,["Expected: 0 invocations of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10476__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10478__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}

}
}
}
}finally {(tic_tac_toe.human_turn.apply_human_move = apply_human_move_orig_val__12043);
}});})(_STAR_parent_description_STAR__orig_val__12031_12196,_STAR_parent_description_STAR__temp_val__12032_12197,description__10067__auto____$1,_STAR_parent_description_STAR__orig_val__11907_12046,_STAR_parent_description_STAR__temp_val__11908_12047,description__10067__auto___12045))
,false)],null)));
var chunk__12034_12199 = null;
var count__12035_12200 = (0);
var i__12036_12201 = (0);
while(true){
if((i__12036_12201 < count__12035_12200)){
var component__10068__auto___12232 = cljs.core._nth.call(null,chunk__12034_12199,i__12036_12201);
speclj.components.install.call(null,component__10068__auto___12232,description__10067__auto____$1);


var G__12233 = seq__12033_12198;
var G__12234 = chunk__12034_12199;
var G__12235 = count__12035_12200;
var G__12236 = (i__12036_12201 + (1));
seq__12033_12198 = G__12233;
chunk__12034_12199 = G__12234;
count__12035_12200 = G__12235;
i__12036_12201 = G__12236;
continue;
} else {
var temp__5825__auto___12237 = cljs.core.seq.call(null,seq__12033_12198);
if(temp__5825__auto___12237){
var seq__12033_12238__$1 = temp__5825__auto___12237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12033_12238__$1)){
var c__5548__auto___12239 = cljs.core.chunk_first.call(null,seq__12033_12238__$1);
var G__12240 = cljs.core.chunk_rest.call(null,seq__12033_12238__$1);
var G__12241 = c__5548__auto___12239;
var G__12242 = cljs.core.count.call(null,c__5548__auto___12239);
var G__12243 = (0);
seq__12033_12198 = G__12240;
chunk__12034_12199 = G__12241;
count__12035_12200 = G__12242;
i__12036_12201 = G__12243;
continue;
} else {
var component__10068__auto___12244 = cljs.core.first.call(null,seq__12033_12238__$1);
speclj.components.install.call(null,component__10068__auto___12244,description__10067__auto____$1);


var G__12245 = cljs.core.next.call(null,seq__12033_12238__$1);
var G__12246 = null;
var G__12247 = (0);
var G__12248 = (0);
seq__12033_12198 = G__12245;
chunk__12034_12199 = G__12246;
count__12035_12200 = G__12247;
i__12036_12201 = G__12248;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12031_12196);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10067__auto____$1);
}

return description__10067__auto____$1;
})()],null)));
var chunk__11910_12049 = null;
var count__11911_12050 = (0);
var i__11912_12051 = (0);
while(true){
if((i__11912_12051 < count__11911_12050)){
var component__10068__auto___12249 = cljs.core._nth.call(null,chunk__11910_12049,i__11912_12051);
speclj.components.install.call(null,component__10068__auto___12249,description__10067__auto___12045);


var G__12250 = seq__11909_12048;
var G__12251 = chunk__11910_12049;
var G__12252 = count__11911_12050;
var G__12253 = (i__11912_12051 + (1));
seq__11909_12048 = G__12250;
chunk__11910_12049 = G__12251;
count__11911_12050 = G__12252;
i__11912_12051 = G__12253;
continue;
} else {
var temp__5825__auto___12254 = cljs.core.seq.call(null,seq__11909_12048);
if(temp__5825__auto___12254){
var seq__11909_12255__$1 = temp__5825__auto___12254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11909_12255__$1)){
var c__5548__auto___12256 = cljs.core.chunk_first.call(null,seq__11909_12255__$1);
var G__12257 = cljs.core.chunk_rest.call(null,seq__11909_12255__$1);
var G__12258 = c__5548__auto___12256;
var G__12259 = cljs.core.count.call(null,c__5548__auto___12256);
var G__12260 = (0);
seq__11909_12048 = G__12257;
chunk__11910_12049 = G__12258;
count__11911_12050 = G__12259;
i__11912_12051 = G__12260;
continue;
} else {
var component__10068__auto___12261 = cljs.core.first.call(null,seq__11909_12255__$1);
speclj.components.install.call(null,component__10068__auto___12261,description__10067__auto___12045);


var G__12262 = cljs.core.next.call(null,seq__11909_12255__$1);
var G__12263 = null;
var G__12264 = (0);
var G__12265 = (0);
seq__11909_12048 = G__12262;
chunk__11910_12049 = G__12263;
count__11911_12050 = G__12264;
i__11912_12051 = G__12265;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11907_12046);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10067__auto___12045);
}


//# sourceMappingURL=html_spec.js.map
