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
var vec__22390 = out;
var seq__22391 = cljs.core.seq.call(null,vec__22390);
var first__22392 = cljs.core.first.call(null,seq__22391);
var seq__22391__$1 = cljs.core.next.call(null,seq__22391);
var _tag = first__22392;
var first__22392__$1 = cljs.core.first.call(null,seq__22391__$1);
var seq__22391__$2 = cljs.core.next.call(null,seq__22391__$1);
var _attrs = first__22392__$1;
var rows = seq__22391__$2;
var row_count = cljs.core.count.call(null,rows);
var column_count = cljs.core.count.call(null,cljs.core.drop.call(null,(2),cljs.core.first.call(null,rows)));
var cell_count = (row_count * column_count);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-count","row-count",1060167988),row_count,new cljs.core.Keyword(null,"column-count","column-count",1235131236),column_count,new cljs.core.Keyword(null,"cell-count","cell-count",-441457582),cell_count], null);
});
var description__18609__auto___22515 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__22393_22516 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22394_22517 = description__18609__auto___22515;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22394_22517);

try{var seq__22395_22518 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (it__18983__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__22457 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__22458 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__22458);

try{return it__18983__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__22457);
}});})(_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (it__18676__auto__){
var auto_advance_orig_val__22459 = tic_tac_toe.setup.auto_advance;
var auto_advance_temp_val__22460 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"auto-advance","auto-advance",930772766),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.auto_advance = auto_advance_temp_val__22460);

try{return it__18676__auto__.call(null);
}finally {(tic_tac_toe.setup.auto_advance = auto_advance_orig_val__22459);
}});})(_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
),(function (){var description__18609__auto____$1 = speclj.components.new_description.call(null,"updated state atom with screen on click",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__22461_22522 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22462_22523 = description__18609__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22462_22523);

try{var seq__22463_22524 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__18609__auto____$2 = speclj.components.new_description.call(null,"select-game-mode",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__22479_22528 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22480_22529 = description__18609__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22480_22529);

try{var seq__22481_22530 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"clicking Human vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__22479_22528,_STAR_parent_description_STAR__temp_val__22480_22529,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22534 = "Human vs AI";
var actual__18752__auto___22535 = c3kit.wire.spec_helper.text.call(null,"#human-vs-ai");
if(cljs.core._EQ_.call(null,expected__18751__auto___22534,actual__18752__auto___22535)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22534;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22535;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-ai");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22536 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__18752__auto___22537 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18751__auto___22536,actual__18752__auto___22537)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22536;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22537;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__18752__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__22479_22528,_STAR_parent_description_STAR__temp_val__22480_22529,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__22479_22528,_STAR_parent_description_STAR__temp_val__22480_22529,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22538 = "AI vs Human";
var actual__18752__auto___22539 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-human");
if(cljs.core._EQ_.call(null,expected__18751__auto___22538,actual__18752__auto___22539)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22538;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22539;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22540 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__18752__auto___22541 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18751__auto___22540,actual__18752__auto___22541)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22540;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22541;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__18752__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__22479_22528,_STAR_parent_description_STAR__temp_val__22480_22529,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
,false),speclj.components.new_characteristic.call(null,"clicking Human vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__22479_22528,_STAR_parent_description_STAR__temp_val__22480_22529,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22542 = "Human vs Human";
var actual__18752__auto___22543 = c3kit.wire.spec_helper.text.call(null,"#human-vs-human");
if(cljs.core._EQ_.call(null,expected__18751__auto___22542,actual__18752__auto___22543)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22542;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22543;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22544 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__18752__auto___22545 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18751__auto___22544,actual__18752__auto___22545)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22544;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22545;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__18752__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__22479_22528,_STAR_parent_description_STAR__temp_val__22480_22529,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__22479_22528,_STAR_parent_description_STAR__temp_val__22480_22529,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22546 = "AI vs AI";
var actual__18752__auto___22547 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-ai");
if(cljs.core._EQ_.call(null,expected__18751__auto___22546,actual__18752__auto___22547)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22546;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22547;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-ai");

var out = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22548 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__18752__auto___22549 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18751__auto___22548,actual__18752__auto___22549)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22548;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22549;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__18752__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(out);
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
});})(_STAR_parent_description_STAR__orig_val__22479_22528,_STAR_parent_description_STAR__temp_val__22480_22529,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
,false)],null)));
var chunk__22482_22531 = null;
var count__22483_22532 = (0);
var i__22484_22533 = (0);
while(true){
if((i__22484_22533 < count__22483_22532)){
var component__18610__auto___22550 = cljs.core._nth.call(null,chunk__22482_22531,i__22484_22533);
speclj.components.install.call(null,component__18610__auto___22550,description__18609__auto____$2);


var G__22551 = seq__22481_22530;
var G__22552 = chunk__22482_22531;
var G__22553 = count__22483_22532;
var G__22554 = (i__22484_22533 + (1));
seq__22481_22530 = G__22551;
chunk__22482_22531 = G__22552;
count__22483_22532 = G__22553;
i__22484_22533 = G__22554;
continue;
} else {
var temp__5825__auto___22555 = cljs.core.seq.call(null,seq__22481_22530);
if(temp__5825__auto___22555){
var seq__22481_22556__$1 = temp__5825__auto___22555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22481_22556__$1)){
var c__5548__auto___22557 = cljs.core.chunk_first.call(null,seq__22481_22556__$1);
var G__22558 = cljs.core.chunk_rest.call(null,seq__22481_22556__$1);
var G__22559 = c__5548__auto___22557;
var G__22560 = cljs.core.count.call(null,c__5548__auto___22557);
var G__22561 = (0);
seq__22481_22530 = G__22558;
chunk__22482_22531 = G__22559;
count__22483_22532 = G__22560;
i__22484_22533 = G__22561;
continue;
} else {
var component__18610__auto___22562 = cljs.core.first.call(null,seq__22481_22556__$1);
speclj.components.install.call(null,component__18610__auto___22562,description__18609__auto____$2);


var G__22563 = cljs.core.next.call(null,seq__22481_22556__$1);
var G__22564 = null;
var G__22565 = (0);
var G__22566 = (0);
seq__22481_22530 = G__22563;
chunk__22482_22531 = G__22564;
count__22483_22532 = G__22565;
i__22484_22533 = G__22566;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22479_22528);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18609__auto____$2);
}

return description__18609__auto____$2;
})(),(function (){var description__18609__auto____$2 = speclj.components.new_description.call(null,"select-board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__22485_22567 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22486_22568 = description__18609__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22486_22568);

try{var seq__22487_22569 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__22485_22567,_STAR_parent_description_STAR__temp_val__22486_22568,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__22485_22567,_STAR_parent_description_STAR__temp_val__22486_22568,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
),speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__22485_22567,_STAR_parent_description_STAR__temp_val__22486_22568,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
var value__19113__auto___22573 = "#board-3x3";
var node__19114__auto___22574 = c3kit.wire.spec_helper.select.call(null,value__19113__auto___22573);
if(cljs.core.truth_(node__19114__auto___22574)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19113__auto___22573;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22575 = "3x3";
var actual__18752__auto___22576 = c3kit.wire.spec_helper.text.call(null,"#board-3x3");
if(cljs.core._EQ_.call(null,expected__18751__auto___22575,actual__18752__auto___22576)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22575;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22576;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22577 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__18752__auto___22578 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18751__auto___22577,actual__18752__auto___22578)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22577;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22578;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22579 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__18752__auto___22580 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18751__auto___22579,actual__18752__auto___22580)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22579;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22580;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__18752__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__22485_22567,_STAR_parent_description_STAR__temp_val__22486_22568,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
,false),speclj.components.new_characteristic.call(null,"4x4",((function (_STAR_parent_description_STAR__orig_val__22485_22567,_STAR_parent_description_STAR__temp_val__22486_22568,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
var value__19113__auto___22581 = "#board-4x4";
var node__19114__auto___22582 = c3kit.wire.spec_helper.select.call(null,value__19113__auto___22581);
if(cljs.core.truth_(node__19114__auto___22582)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19113__auto___22581;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22583 = "4x4";
var actual__18752__auto___22584 = c3kit.wire.spec_helper.text.call(null,"#board-4x4");
if(cljs.core._EQ_.call(null,expected__18751__auto___22583,actual__18752__auto___22584)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22583;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22584;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-4x4");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22585 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__18752__auto___22586 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18751__auto___22585,actual__18752__auto___22586)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22585;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22586;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22587 = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__18752__auto___22588 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18751__auto___22587,actual__18752__auto___22588)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22587;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22588;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__18752__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__22485_22567,_STAR_parent_description_STAR__temp_val__22486_22568,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
,false),speclj.components.new_characteristic.call(null,"3x3x3",((function (_STAR_parent_description_STAR__orig_val__22485_22567,_STAR_parent_description_STAR__temp_val__22486_22568,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
var value__19113__auto___22589 = "#board-3x3x3";
var node__19114__auto___22590 = c3kit.wire.spec_helper.select.call(null,value__19113__auto___22589);
if(cljs.core.truth_(node__19114__auto___22590)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19113__auto___22589;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22591 = "3x3x3";
var actual__18752__auto___22592 = c3kit.wire.spec_helper.text.call(null,"#board-3x3x3");
if(cljs.core._EQ_.call(null,expected__18751__auto___22591,actual__18752__auto___22592)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22591;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22592;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22593 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__18752__auto___22594 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18751__auto___22593,actual__18752__auto___22594)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22593;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22594;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22595 = new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540);
var actual__18752__auto___22596 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__18751__auto___22595,actual__18752__auto___22596)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22595;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22596;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
var actual__18752__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__22485_22567,_STAR_parent_description_STAR__temp_val__22486_22568,description__18609__auto____$2,_STAR_parent_description_STAR__orig_val__22461_22522,_STAR_parent_description_STAR__temp_val__22462_22523,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
,false)],null)));
var chunk__22488_22570 = null;
var count__22489_22571 = (0);
var i__22490_22572 = (0);
while(true){
if((i__22490_22572 < count__22489_22571)){
var component__18610__auto___22597 = cljs.core._nth.call(null,chunk__22488_22570,i__22490_22572);
speclj.components.install.call(null,component__18610__auto___22597,description__18609__auto____$2);


var G__22598 = seq__22487_22569;
var G__22599 = chunk__22488_22570;
var G__22600 = count__22489_22571;
var G__22601 = (i__22490_22572 + (1));
seq__22487_22569 = G__22598;
chunk__22488_22570 = G__22599;
count__22489_22571 = G__22600;
i__22490_22572 = G__22601;
continue;
} else {
var temp__5825__auto___22602 = cljs.core.seq.call(null,seq__22487_22569);
if(temp__5825__auto___22602){
var seq__22487_22603__$1 = temp__5825__auto___22602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22487_22603__$1)){
var c__5548__auto___22604 = cljs.core.chunk_first.call(null,seq__22487_22603__$1);
var G__22605 = cljs.core.chunk_rest.call(null,seq__22487_22603__$1);
var G__22606 = c__5548__auto___22604;
var G__22607 = cljs.core.count.call(null,c__5548__auto___22604);
var G__22608 = (0);
seq__22487_22569 = G__22605;
chunk__22488_22570 = G__22606;
count__22489_22571 = G__22607;
i__22490_22572 = G__22608;
continue;
} else {
var component__18610__auto___22609 = cljs.core.first.call(null,seq__22487_22603__$1);
speclj.components.install.call(null,component__18610__auto___22609,description__18609__auto____$2);


var G__22610 = cljs.core.next.call(null,seq__22487_22603__$1);
var G__22611 = null;
var G__22612 = (0);
var G__22613 = (0);
seq__22487_22569 = G__22610;
chunk__22488_22570 = G__22611;
count__22489_22571 = G__22612;
i__22490_22572 = G__22613;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22485_22567);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18609__auto____$2);
}

return description__18609__auto____$2;
})()],null)));
var chunk__22464_22525 = null;
var count__22465_22526 = (0);
var i__22466_22527 = (0);
while(true){
if((i__22466_22527 < count__22465_22526)){
var component__18610__auto___22614 = cljs.core._nth.call(null,chunk__22464_22525,i__22466_22527);
speclj.components.install.call(null,component__18610__auto___22614,description__18609__auto____$1);


var G__22615 = seq__22463_22524;
var G__22616 = chunk__22464_22525;
var G__22617 = count__22465_22526;
var G__22618 = (i__22466_22527 + (1));
seq__22463_22524 = G__22615;
chunk__22464_22525 = G__22616;
count__22465_22526 = G__22617;
i__22466_22527 = G__22618;
continue;
} else {
var temp__5825__auto___22619 = cljs.core.seq.call(null,seq__22463_22524);
if(temp__5825__auto___22619){
var seq__22463_22620__$1 = temp__5825__auto___22619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22463_22620__$1)){
var c__5548__auto___22621 = cljs.core.chunk_first.call(null,seq__22463_22620__$1);
var G__22622 = cljs.core.chunk_rest.call(null,seq__22463_22620__$1);
var G__22623 = c__5548__auto___22621;
var G__22624 = cljs.core.count.call(null,c__5548__auto___22621);
var G__22625 = (0);
seq__22463_22524 = G__22622;
chunk__22464_22525 = G__22623;
count__22465_22526 = G__22624;
i__22466_22527 = G__22625;
continue;
} else {
var component__18610__auto___22626 = cljs.core.first.call(null,seq__22463_22620__$1);
speclj.components.install.call(null,component__18610__auto___22626,description__18609__auto____$1);


var G__22627 = cljs.core.next.call(null,seq__22463_22620__$1);
var G__22628 = null;
var G__22629 = (0);
var G__22630 = (0);
seq__22463_22524 = G__22627;
chunk__22464_22525 = G__22628;
count__22465_22526 = G__22629;
i__22466_22527 = G__22630;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22461_22522);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18609__auto____$1);
}

return description__18609__auto____$1;
})(),(function (){var description__18609__auto____$1 = speclj.components.new_description.call(null,"calls select-difficulty with correct key",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__22491_22631 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22492_22632 = description__18609__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22492_22632);

try{var seq__22493_22633 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__22491_22631,_STAR_parent_description_STAR__temp_val__22492_22632,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__22491_22631,_STAR_parent_description_STAR__temp_val__22492_22632,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
),speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__22491_22631,_STAR_parent_description_STAR__temp_val__22492_22632,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
var select_difficulty_BANG__orig_val__22503 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__22504 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__22504);

try{var value__19113__auto___22637 = ".easy";
var node__19114__auto___22638 = c3kit.wire.spec_helper.select.call(null,value__19113__auto___22637);
if(cljs.core.truth_(node__19114__auto___22638)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19113__auto___22637;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22639 = "Easy";
var actual__18752__auto___22640 = c3kit.wire.spec_helper.text.call(null,".easy");
if(cljs.core._EQ_.call(null,expected__18751__auto___22639,actual__18752__auto___22640)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22639;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22640;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".easy");

speclj.components.inc_assertions_BANG_.call(null);

var name__18997__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__18998__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null)], null);
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
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__22503);
}});})(_STAR_parent_description_STAR__orig_val__22491_22631,_STAR_parent_description_STAR__temp_val__22492_22632,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
,false),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__22491_22631,_STAR_parent_description_STAR__temp_val__22492_22632,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
var select_difficulty_BANG__orig_val__22505 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__22506 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__22506);

try{var value__19113__auto___22641 = ".medium";
var node__19114__auto___22642 = c3kit.wire.spec_helper.select.call(null,value__19113__auto___22641);
if(cljs.core.truth_(node__19114__auto___22642)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19113__auto___22641;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22643 = "Medium";
var actual__18752__auto___22644 = c3kit.wire.spec_helper.text.call(null,".medium");
if(cljs.core._EQ_.call(null,expected__18751__auto___22643,actual__18752__auto___22644)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22643;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22644;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".medium");

speclj.components.inc_assertions_BANG_.call(null);

var name__18997__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__18998__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384)], null)], null);
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
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__22505);
}});})(_STAR_parent_description_STAR__orig_val__22491_22631,_STAR_parent_description_STAR__temp_val__22492_22632,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
,false),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__22491_22631,_STAR_parent_description_STAR__temp_val__22492_22632,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
var select_difficulty_BANG__orig_val__22507 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__22508 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__22508);

try{var value__19113__auto___22645 = ".hard";
var node__19114__auto___22646 = c3kit.wire.spec_helper.select.call(null,value__19113__auto___22645);
if(cljs.core.truth_(node__19114__auto___22646)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19113__auto___22645;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22647 = "Hard";
var actual__18752__auto___22648 = c3kit.wire.spec_helper.text.call(null,".hard");
if(cljs.core._EQ_.call(null,expected__18751__auto___22647,actual__18752__auto___22648)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22647;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22648;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".hard");

speclj.components.inc_assertions_BANG_.call(null);

var name__18997__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__18998__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null)], null);
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
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__22507);
}});})(_STAR_parent_description_STAR__orig_val__22491_22631,_STAR_parent_description_STAR__temp_val__22492_22632,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
,false)],null)));
var chunk__22494_22634 = null;
var count__22495_22635 = (0);
var i__22496_22636 = (0);
while(true){
if((i__22496_22636 < count__22495_22635)){
var component__18610__auto___22649 = cljs.core._nth.call(null,chunk__22494_22634,i__22496_22636);
speclj.components.install.call(null,component__18610__auto___22649,description__18609__auto____$1);


var G__22650 = seq__22493_22633;
var G__22651 = chunk__22494_22634;
var G__22652 = count__22495_22635;
var G__22653 = (i__22496_22636 + (1));
seq__22493_22633 = G__22650;
chunk__22494_22634 = G__22651;
count__22495_22635 = G__22652;
i__22496_22636 = G__22653;
continue;
} else {
var temp__5825__auto___22654 = cljs.core.seq.call(null,seq__22493_22633);
if(temp__5825__auto___22654){
var seq__22493_22655__$1 = temp__5825__auto___22654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22493_22655__$1)){
var c__5548__auto___22656 = cljs.core.chunk_first.call(null,seq__22493_22655__$1);
var G__22657 = cljs.core.chunk_rest.call(null,seq__22493_22655__$1);
var G__22658 = c__5548__auto___22656;
var G__22659 = cljs.core.count.call(null,c__5548__auto___22656);
var G__22660 = (0);
seq__22493_22633 = G__22657;
chunk__22494_22634 = G__22658;
count__22495_22635 = G__22659;
i__22496_22636 = G__22660;
continue;
} else {
var component__18610__auto___22661 = cljs.core.first.call(null,seq__22493_22655__$1);
speclj.components.install.call(null,component__18610__auto___22661,description__18609__auto____$1);


var G__22662 = cljs.core.next.call(null,seq__22493_22655__$1);
var G__22663 = null;
var G__22664 = (0);
var G__22665 = (0);
seq__22493_22633 = G__22662;
chunk__22494_22634 = G__22663;
count__22495_22635 = G__22664;
i__22496_22636 = G__22665;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22491_22631);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18609__auto____$1);
}

return description__18609__auto____$1;
})(),(function (){var description__18609__auto____$1 = speclj.components.new_description.call(null,"drawing board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__22509_22666 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22510_22667 = description__18609__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22510_22667);

try{var seq__22511_22668 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__22509_22666,_STAR_parent_description_STAR__temp_val__22510_22667,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__22509_22666,_STAR_parent_description_STAR__temp_val__22510_22667,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
),speclj.components.new_characteristic.call(null,"render-cell returns td with value",((function (_STAR_parent_description_STAR__orig_val__22509_22666,_STAR_parent_description_STAR__temp_val__22510_22667,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
var out = tic_tac_toe.html.render_cell.call(null,"index");
speclj.components.inc_assertions_BANG_.call(null);

var expected__18802__auto___22672 = new cljs.core.Keyword(null,"td","td",1479933353);
var actual__18803__auto___22673 = out;
if((actual__18803__auto___22673 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18802__auto___22672;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__18802__auto___22672 === 'string') && (typeof actual__18803__auto___22673 === 'string'))){
if((clojure.string.index_of.call(null,actual__18803__auto___22673,expected__18802__auto___22672) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18802__auto___22672;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18803__auto___22673;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__18802__auto___22672)) && (typeof actual__18803__auto___22673 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__18802__auto___22672,actual__18803__auto___22673))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__18803__auto___22673;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__18802__auto___22672;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__18803__auto___22673)){
if(cljs.core.contains_QMARK_.call(null,actual__18803__auto___22673,expected__18802__auto___22672)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18802__auto___22672;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__18803__auto___22673;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__18803__auto___22673)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18801__18804__auto__){
return cljs.core._EQ_.call(null,expected__18802__auto___22672,p1__18801__18804__auto__);
}),actual__18803__auto___22673))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18802__auto___22672;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18803__auto___22673;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__18730__auto__ = expected__18802__auto___22672;
var b__18731__auto__ = actual__18803__auto___22673;
var type_a__18732__auto__ = (((a__18730__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__18730__auto__)));
var type_b__18733__auto__ = (((b__18731__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__18731__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__18732__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__18733__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18802__auto__ = "index";
var actual__18803__auto__ = out;
if((actual__18803__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18802__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__18802__auto__ === 'string') && (typeof actual__18803__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__18803__auto__,expected__18802__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18802__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__18802__auto__)) && (typeof actual__18803__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__18802__auto__,actual__18803__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__18802__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__18803__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__18803__auto__,expected__18802__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18802__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__18803__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18801__18804__auto__){
return cljs.core._EQ_.call(null,expected__18802__auto__,p1__18801__18804__auto__);
}),actual__18803__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18802__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__18730__auto__ = expected__18802__auto__;
var b__18731__auto__ = actual__18803__auto__;
var type_a__18732__auto__ = (((a__18730__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__18730__auto__)));
var type_b__18733__auto__ = (((b__18731__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__18731__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__18732__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__18733__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__22509_22666,_STAR_parent_description_STAR__temp_val__22510_22667,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
,false),speclj.components.new_characteristic.call(null,"render-board returns table with value",((function (_STAR_parent_description_STAR__orig_val__22509_22666,_STAR_parent_description_STAR__temp_val__22510_22667,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
var out = tic_tac_toe.html.render_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180)], null));
speclj.components.inc_assertions_BANG_.call(null);

var expected__18802__auto__ = new cljs.core.Keyword(null,"tbody","tbody",-80678300);
var actual__18803__auto__ = out;
if((actual__18803__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18802__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__18802__auto__ === 'string') && (typeof actual__18803__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__18803__auto__,expected__18802__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18802__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__18802__auto__)) && (typeof actual__18803__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__18802__auto__,actual__18803__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__18802__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__18803__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__18803__auto__,expected__18802__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18802__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__18803__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18801__18804__auto__){
return cljs.core._EQ_.call(null,expected__18802__auto__,p1__18801__18804__auto__);
}),actual__18803__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18802__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18803__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__18730__auto__ = expected__18802__auto__;
var b__18731__auto__ = actual__18803__auto__;
var type_a__18732__auto__ = (((a__18730__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__18730__auto__)));
var type_b__18733__auto__ = (((b__18731__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__18731__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__18732__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__18733__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__22509_22666,_STAR_parent_description_STAR__temp_val__22510_22667,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
,false),speclj.components.new_characteristic.call(null,"gives nine cells for 3x3",((function (_STAR_parent_description_STAR__orig_val__22509_22666,_STAR_parent_description_STAR__temp_val__22510_22667,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22674 = (3);
var actual__18752__auto___22675 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18751__auto___22674,actual__18752__auto___22675)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22674;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22675;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22676 = (3);
var actual__18752__auto___22677 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18751__auto___22676,actual__18752__auto___22677)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22676;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22677;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto__ = (9);
var actual__18752__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
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
});})(_STAR_parent_description_STAR__orig_val__22509_22666,_STAR_parent_description_STAR__temp_val__22510_22667,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
,false),speclj.components.new_characteristic.call(null,"gives 16 cells for 4x4",((function (_STAR_parent_description_STAR__orig_val__22509_22666,_STAR_parent_description_STAR__temp_val__22510_22667,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22678 = (4);
var actual__18752__auto___22679 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18751__auto___22678,actual__18752__auto___22679)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22678;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22679;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22680 = (4);
var actual__18752__auto___22681 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18751__auto___22680,actual__18752__auto___22681)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22680;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22681;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto__ = (16);
var actual__18752__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
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
});})(_STAR_parent_description_STAR__orig_val__22509_22666,_STAR_parent_description_STAR__temp_val__22510_22667,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
,false),speclj.components.new_characteristic.call(null,"gives 27 cells for 3x3x3",((function (_STAR_parent_description_STAR__orig_val__22509_22666,_STAR_parent_description_STAR__temp_val__22510_22667,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22682 = (3);
var actual__18752__auto___22683 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18751__auto___22682,actual__18752__auto___22683)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22682;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22683;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto___22684 = (9);
var actual__18752__auto___22685 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__18751__auto___22684,actual__18752__auto___22685)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18751__auto___22684;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18752__auto___22685;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18719__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18719__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18751__auto__ = (27);
var actual__18752__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
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
});})(_STAR_parent_description_STAR__orig_val__22509_22666,_STAR_parent_description_STAR__temp_val__22510_22667,description__18609__auto____$1,_STAR_parent_description_STAR__orig_val__22393_22516,_STAR_parent_description_STAR__temp_val__22394_22517,description__18609__auto___22515))
,false)],null)));
var chunk__22512_22669 = null;
var count__22513_22670 = (0);
var i__22514_22671 = (0);
while(true){
if((i__22514_22671 < count__22513_22670)){
var component__18610__auto___22686 = cljs.core._nth.call(null,chunk__22512_22669,i__22514_22671);
speclj.components.install.call(null,component__18610__auto___22686,description__18609__auto____$1);


var G__22687 = seq__22511_22668;
var G__22688 = chunk__22512_22669;
var G__22689 = count__22513_22670;
var G__22690 = (i__22514_22671 + (1));
seq__22511_22668 = G__22687;
chunk__22512_22669 = G__22688;
count__22513_22670 = G__22689;
i__22514_22671 = G__22690;
continue;
} else {
var temp__5825__auto___22691 = cljs.core.seq.call(null,seq__22511_22668);
if(temp__5825__auto___22691){
var seq__22511_22692__$1 = temp__5825__auto___22691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22511_22692__$1)){
var c__5548__auto___22693 = cljs.core.chunk_first.call(null,seq__22511_22692__$1);
var G__22694 = cljs.core.chunk_rest.call(null,seq__22511_22692__$1);
var G__22695 = c__5548__auto___22693;
var G__22696 = cljs.core.count.call(null,c__5548__auto___22693);
var G__22697 = (0);
seq__22511_22668 = G__22694;
chunk__22512_22669 = G__22695;
count__22513_22670 = G__22696;
i__22514_22671 = G__22697;
continue;
} else {
var component__18610__auto___22698 = cljs.core.first.call(null,seq__22511_22692__$1);
speclj.components.install.call(null,component__18610__auto___22698,description__18609__auto____$1);


var G__22699 = cljs.core.next.call(null,seq__22511_22692__$1);
var G__22700 = null;
var G__22701 = (0);
var G__22702 = (0);
seq__22511_22668 = G__22699;
chunk__22512_22669 = G__22700;
count__22513_22670 = G__22701;
i__22514_22671 = G__22702;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22509_22666);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18609__auto____$1);
}

return description__18609__auto____$1;
})()],null)));
var chunk__22396_22519 = null;
var count__22397_22520 = (0);
var i__22398_22521 = (0);
while(true){
if((i__22398_22521 < count__22397_22520)){
var component__18610__auto___22703 = cljs.core._nth.call(null,chunk__22396_22519,i__22398_22521);
speclj.components.install.call(null,component__18610__auto___22703,description__18609__auto___22515);


var G__22704 = seq__22395_22518;
var G__22705 = chunk__22396_22519;
var G__22706 = count__22397_22520;
var G__22707 = (i__22398_22521 + (1));
seq__22395_22518 = G__22704;
chunk__22396_22519 = G__22705;
count__22397_22520 = G__22706;
i__22398_22521 = G__22707;
continue;
} else {
var temp__5825__auto___22708 = cljs.core.seq.call(null,seq__22395_22518);
if(temp__5825__auto___22708){
var seq__22395_22709__$1 = temp__5825__auto___22708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22395_22709__$1)){
var c__5548__auto___22710 = cljs.core.chunk_first.call(null,seq__22395_22709__$1);
var G__22711 = cljs.core.chunk_rest.call(null,seq__22395_22709__$1);
var G__22712 = c__5548__auto___22710;
var G__22713 = cljs.core.count.call(null,c__5548__auto___22710);
var G__22714 = (0);
seq__22395_22518 = G__22711;
chunk__22396_22519 = G__22712;
count__22397_22520 = G__22713;
i__22398_22521 = G__22714;
continue;
} else {
var component__18610__auto___22715 = cljs.core.first.call(null,seq__22395_22709__$1);
speclj.components.install.call(null,component__18610__auto___22715,description__18609__auto___22515);


var G__22716 = cljs.core.next.call(null,seq__22395_22709__$1);
var G__22717 = null;
var G__22718 = (0);
var G__22719 = (0);
seq__22395_22518 = G__22716;
chunk__22396_22519 = G__22717;
count__22397_22520 = G__22718;
i__22398_22521 = G__22719;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22393_22516);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18609__auto___22515);
}


//# sourceMappingURL=html_spec.js.map
