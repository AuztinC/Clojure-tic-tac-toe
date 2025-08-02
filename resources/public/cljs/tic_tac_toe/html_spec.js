// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.html_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.html');
goog.require('tic_tac_toe.setup');
goog.require('tic_tac_toe.main');
var description__10066__auto___26179 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__26073_26180 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__26074_26181 = description__10066__auto___26179;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__26074_26181);

try{var seq__26075_26182 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179){
return (function (it__10440__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__26129 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__26130 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__26130);

try{return it__10440__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__26129);
}});})(_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179))
),(function (){var description__10066__auto____$1 = speclj.components.new_description.call(null,"updated state atom with screen on click",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__26131_26186 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__26132_26187 = description__10066__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__26132_26187);

try{var seq__26133_26188 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__10066__auto____$2 = speclj.components.new_description.call(null,"select-game-mode",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__26149_26192 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__26150_26193 = description__10066__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__26150_26193);

try{var seq__26151_26194 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"clicking Human vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__26149_26192,_STAR_parent_description_STAR__temp_val__26150_26193,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26198 = "Human vs AI";
var actual__10209__auto___26199 = c3kit.wire.spec_helper.text.call(null,"#human-vs-ai");
if(cljs.core._EQ_.call(null,expected__10208__auto___26198,actual__10209__auto___26199)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26198;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26199;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-ai");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26200 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10209__auto___26201 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10208__auto___26200,actual__10209__auto___26201)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26200;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26201;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__10209__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__26149_26192,_STAR_parent_description_STAR__temp_val__26150_26193,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__26149_26192,_STAR_parent_description_STAR__temp_val__26150_26193,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26202 = "AI vs Human";
var actual__10209__auto___26203 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-human");
if(cljs.core._EQ_.call(null,expected__10208__auto___26202,actual__10209__auto___26203)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26202;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26203;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26204 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10209__auto___26205 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10208__auto___26204,actual__10209__auto___26205)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26204;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26205;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__10209__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__26149_26192,_STAR_parent_description_STAR__temp_val__26150_26193,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179))
,false),speclj.components.new_characteristic.call(null,"clicking Human vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__26149_26192,_STAR_parent_description_STAR__temp_val__26150_26193,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26206 = "Human vs Human";
var actual__10209__auto___26207 = c3kit.wire.spec_helper.text.call(null,"#human-vs-human");
if(cljs.core._EQ_.call(null,expected__10208__auto___26206,actual__10209__auto___26207)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26206;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26207;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26208 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10209__auto___26209 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10208__auto___26208,actual__10209__auto___26209)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26208;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26209;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__10209__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__26149_26192,_STAR_parent_description_STAR__temp_val__26150_26193,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__26149_26192,_STAR_parent_description_STAR__temp_val__26150_26193,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26210 = "AI vs AI";
var actual__10209__auto___26211 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-ai");
if(cljs.core._EQ_.call(null,expected__10208__auto___26210,actual__10209__auto___26211)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26210;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26211;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-ai");

var out = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26212 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10209__auto___26213 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10208__auto___26212,actual__10209__auto___26213)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26212;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26213;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__10209__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(out);
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
});})(_STAR_parent_description_STAR__orig_val__26149_26192,_STAR_parent_description_STAR__temp_val__26150_26193,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179))
,false)],null)));
var chunk__26152_26195 = null;
var count__26153_26196 = (0);
var i__26154_26197 = (0);
while(true){
if((i__26154_26197 < count__26153_26196)){
var component__10067__auto___26214 = cljs.core._nth.call(null,chunk__26152_26195,i__26154_26197);
speclj.components.install.call(null,component__10067__auto___26214,description__10066__auto____$2);


var G__26215 = seq__26151_26194;
var G__26216 = chunk__26152_26195;
var G__26217 = count__26153_26196;
var G__26218 = (i__26154_26197 + (1));
seq__26151_26194 = G__26215;
chunk__26152_26195 = G__26216;
count__26153_26196 = G__26217;
i__26154_26197 = G__26218;
continue;
} else {
var temp__5825__auto___26219 = cljs.core.seq.call(null,seq__26151_26194);
if(temp__5825__auto___26219){
var seq__26151_26220__$1 = temp__5825__auto___26219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26151_26220__$1)){
var c__5548__auto___26221 = cljs.core.chunk_first.call(null,seq__26151_26220__$1);
var G__26222 = cljs.core.chunk_rest.call(null,seq__26151_26220__$1);
var G__26223 = c__5548__auto___26221;
var G__26224 = cljs.core.count.call(null,c__5548__auto___26221);
var G__26225 = (0);
seq__26151_26194 = G__26222;
chunk__26152_26195 = G__26223;
count__26153_26196 = G__26224;
i__26154_26197 = G__26225;
continue;
} else {
var component__10067__auto___26226 = cljs.core.first.call(null,seq__26151_26220__$1);
speclj.components.install.call(null,component__10067__auto___26226,description__10066__auto____$2);


var G__26227 = cljs.core.next.call(null,seq__26151_26220__$1);
var G__26228 = null;
var G__26229 = (0);
var G__26230 = (0);
seq__26151_26194 = G__26227;
chunk__26152_26195 = G__26228;
count__26153_26196 = G__26229;
i__26154_26197 = G__26230;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__26149_26192);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10066__auto____$2);
}

return description__10066__auto____$2;
})(),(function (){var description__10066__auto____$2 = speclj.components.new_description.call(null,"select-board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__26155_26231 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__26156_26232 = description__10066__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__26156_26232);

try{var seq__26157_26233 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__26155_26231,_STAR_parent_description_STAR__temp_val__26156_26232,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__26155_26231,_STAR_parent_description_STAR__temp_val__26156_26232,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179))
),speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__26155_26231,_STAR_parent_description_STAR__temp_val__26156_26232,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179){
return (function (){
var value__10570__auto___26237 = "#board-3x3";
var node__10571__auto___26238 = c3kit.wire.spec_helper.select.call(null,value__10570__auto___26237);
if(cljs.core.truth_(node__10571__auto___26238)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10570__auto___26237;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26239 = "3x3";
var actual__10209__auto___26240 = c3kit.wire.spec_helper.text.call(null,"#board-3x3");
if(cljs.core._EQ_.call(null,expected__10208__auto___26239,actual__10209__auto___26240)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26239;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26240;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26241 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10209__auto___26242 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10208__auto___26241,actual__10209__auto___26242)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26241;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26242;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26243 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10209__auto___26244 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10208__auto___26243,actual__10209__auto___26244)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26243;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26244;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10209__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__26155_26231,_STAR_parent_description_STAR__temp_val__26156_26232,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179))
,false),speclj.components.new_characteristic.call(null,"4x4",((function (_STAR_parent_description_STAR__orig_val__26155_26231,_STAR_parent_description_STAR__temp_val__26156_26232,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179){
return (function (){
var value__10570__auto___26245 = "#board-4x4";
var node__10571__auto___26246 = c3kit.wire.spec_helper.select.call(null,value__10570__auto___26245);
if(cljs.core.truth_(node__10571__auto___26246)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10570__auto___26245;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26247 = "4x4";
var actual__10209__auto___26248 = c3kit.wire.spec_helper.text.call(null,"#board-4x4");
if(cljs.core._EQ_.call(null,expected__10208__auto___26247,actual__10209__auto___26248)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26247;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26248;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-4x4");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26249 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10209__auto___26250 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10208__auto___26249,actual__10209__auto___26250)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26249;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26250;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26251 = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__10209__auto___26252 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10208__auto___26251,actual__10209__auto___26252)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26251;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26252;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__10209__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__26155_26231,_STAR_parent_description_STAR__temp_val__26156_26232,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179))
,false),speclj.components.new_characteristic.call(null,"3x3x3",((function (_STAR_parent_description_STAR__orig_val__26155_26231,_STAR_parent_description_STAR__temp_val__26156_26232,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179){
return (function (){
var value__10570__auto___26253 = "#board-3x3x3";
var node__10571__auto___26254 = c3kit.wire.spec_helper.select.call(null,value__10570__auto___26253);
if(cljs.core.truth_(node__10571__auto___26254)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10570__auto___26253;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26255 = "3x3x3";
var actual__10209__auto___26256 = c3kit.wire.spec_helper.text.call(null,"#board-3x3x3");
if(cljs.core._EQ_.call(null,expected__10208__auto___26255,actual__10209__auto___26256)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26255;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26256;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26257 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10209__auto___26258 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10208__auto___26257,actual__10209__auto___26258)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26257;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26258;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26259 = new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540);
var actual__10209__auto___26260 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10208__auto___26259,actual__10209__auto___26260)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26259;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26260;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
var actual__10209__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__26155_26231,_STAR_parent_description_STAR__temp_val__26156_26232,description__10066__auto____$2,_STAR_parent_description_STAR__orig_val__26131_26186,_STAR_parent_description_STAR__temp_val__26132_26187,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179))
,false)],null)));
var chunk__26158_26234 = null;
var count__26159_26235 = (0);
var i__26160_26236 = (0);
while(true){
if((i__26160_26236 < count__26159_26235)){
var component__10067__auto___26261 = cljs.core._nth.call(null,chunk__26158_26234,i__26160_26236);
speclj.components.install.call(null,component__10067__auto___26261,description__10066__auto____$2);


var G__26262 = seq__26157_26233;
var G__26263 = chunk__26158_26234;
var G__26264 = count__26159_26235;
var G__26265 = (i__26160_26236 + (1));
seq__26157_26233 = G__26262;
chunk__26158_26234 = G__26263;
count__26159_26235 = G__26264;
i__26160_26236 = G__26265;
continue;
} else {
var temp__5825__auto___26266 = cljs.core.seq.call(null,seq__26157_26233);
if(temp__5825__auto___26266){
var seq__26157_26267__$1 = temp__5825__auto___26266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26157_26267__$1)){
var c__5548__auto___26268 = cljs.core.chunk_first.call(null,seq__26157_26267__$1);
var G__26269 = cljs.core.chunk_rest.call(null,seq__26157_26267__$1);
var G__26270 = c__5548__auto___26268;
var G__26271 = cljs.core.count.call(null,c__5548__auto___26268);
var G__26272 = (0);
seq__26157_26233 = G__26269;
chunk__26158_26234 = G__26270;
count__26159_26235 = G__26271;
i__26160_26236 = G__26272;
continue;
} else {
var component__10067__auto___26273 = cljs.core.first.call(null,seq__26157_26267__$1);
speclj.components.install.call(null,component__10067__auto___26273,description__10066__auto____$2);


var G__26274 = cljs.core.next.call(null,seq__26157_26267__$1);
var G__26275 = null;
var G__26276 = (0);
var G__26277 = (0);
seq__26157_26233 = G__26274;
chunk__26158_26234 = G__26275;
count__26159_26235 = G__26276;
i__26160_26236 = G__26277;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__26155_26231);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10066__auto____$2);
}

return description__10066__auto____$2;
})()],null)));
var chunk__26134_26189 = null;
var count__26135_26190 = (0);
var i__26136_26191 = (0);
while(true){
if((i__26136_26191 < count__26135_26190)){
var component__10067__auto___26278 = cljs.core._nth.call(null,chunk__26134_26189,i__26136_26191);
speclj.components.install.call(null,component__10067__auto___26278,description__10066__auto____$1);


var G__26279 = seq__26133_26188;
var G__26280 = chunk__26134_26189;
var G__26281 = count__26135_26190;
var G__26282 = (i__26136_26191 + (1));
seq__26133_26188 = G__26279;
chunk__26134_26189 = G__26280;
count__26135_26190 = G__26281;
i__26136_26191 = G__26282;
continue;
} else {
var temp__5825__auto___26283 = cljs.core.seq.call(null,seq__26133_26188);
if(temp__5825__auto___26283){
var seq__26133_26284__$1 = temp__5825__auto___26283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26133_26284__$1)){
var c__5548__auto___26285 = cljs.core.chunk_first.call(null,seq__26133_26284__$1);
var G__26286 = cljs.core.chunk_rest.call(null,seq__26133_26284__$1);
var G__26287 = c__5548__auto___26285;
var G__26288 = cljs.core.count.call(null,c__5548__auto___26285);
var G__26289 = (0);
seq__26133_26188 = G__26286;
chunk__26134_26189 = G__26287;
count__26135_26190 = G__26288;
i__26136_26191 = G__26289;
continue;
} else {
var component__10067__auto___26290 = cljs.core.first.call(null,seq__26133_26284__$1);
speclj.components.install.call(null,component__10067__auto___26290,description__10066__auto____$1);


var G__26291 = cljs.core.next.call(null,seq__26133_26284__$1);
var G__26292 = null;
var G__26293 = (0);
var G__26294 = (0);
seq__26133_26188 = G__26291;
chunk__26134_26189 = G__26292;
count__26135_26190 = G__26293;
i__26136_26191 = G__26294;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__26131_26186);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10066__auto____$1);
}

return description__10066__auto____$1;
})(),(function (){var description__10066__auto____$1 = speclj.components.new_description.call(null,"calls select-difficulty with correct key",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__26161_26295 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__26162_26296 = description__10066__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__26162_26296);

try{var seq__26163_26297 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__26161_26295,_STAR_parent_description_STAR__temp_val__26162_26296,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__26161_26295,_STAR_parent_description_STAR__temp_val__26162_26296,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179))
),speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__26161_26295,_STAR_parent_description_STAR__temp_val__26162_26296,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179){
return (function (){
var select_difficulty_BANG__orig_val__26173 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__26174 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__26174);

try{var value__10570__auto___26301 = ".easy";
var node__10571__auto___26302 = c3kit.wire.spec_helper.select.call(null,value__10570__auto___26301);
if(cljs.core.truth_(node__10571__auto___26302)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10570__auto___26301;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26303 = "Easy";
var actual__10209__auto___26304 = c3kit.wire.spec_helper.text.call(null,".easy");
if(cljs.core._EQ_.call(null,expected__10208__auto___26303,actual__10209__auto___26304)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26303;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26304;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".easy");

speclj.components.inc_assertions_BANG_.call(null);

var name__10454__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__10455__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null)], null);
var invocations__10456__auto__ = speclj.stub.invocations_of.call(null,name__10454__auto__);
var times__10457__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10455__auto__);
var times_QMARK___10458__auto__ = typeof times__10457__auto__ === 'number';
var check_params_QMARK___10459__auto__ = cljs.core.contains_QMARK_.call(null,options__10455__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10460__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10455__auto__);
var with__10460__auto____$1 = (((with__10460__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10460__auto__);
var invocations_str__10461__auto__ = (function (p1__10451__10462__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10451__10462__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10458__auto__) && (check_params_QMARK___10459__auto__))){
var matching_invocations__10463__auto__ = cljs.core.filter.call(null,(function (p1__10452__10464__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10460__auto____$1,p1__10452__10464__auto__);
}),invocations__10456__auto__);
var matching_count__10465__auto__ = cljs.core.count.call(null,matching_invocations__10463__auto__);
if(cljs.core._EQ_.call(null,times__10457__auto__,matching_count__10465__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10457__auto__)," ",invocations_str__10461__auto__.call(null,times__10457__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10454__auto__)," with ",cljs.core.pr_str.call(null,with__10460__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10465__auto__)," ",invocations_str__10461__auto__.call(null,matching_count__10465__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___10459__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10453__10466__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10460__auto____$1,p1__10453__10466__auto__);
}),invocations__10456__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10454__auto__)," with ",cljs.core.pr_str.call(null,with__10460__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10456__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___10458__auto__){
if(cljs.core._EQ_.call(null,times__10457__auto__,cljs.core.count.call(null,invocations__10456__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10457__auto__)," ",invocations_str__10461__auto__.call(null,times__10457__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10454__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10456__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__10456__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10454__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10456__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__26173);
}});})(_STAR_parent_description_STAR__orig_val__26161_26295,_STAR_parent_description_STAR__temp_val__26162_26296,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179))
,false),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__26161_26295,_STAR_parent_description_STAR__temp_val__26162_26296,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179){
return (function (){
var select_difficulty_BANG__orig_val__26175 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__26176 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__26176);

try{var value__10570__auto___26305 = ".medium";
var node__10571__auto___26306 = c3kit.wire.spec_helper.select.call(null,value__10570__auto___26305);
if(cljs.core.truth_(node__10571__auto___26306)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10570__auto___26305;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26307 = "Medium";
var actual__10209__auto___26308 = c3kit.wire.spec_helper.text.call(null,".medium");
if(cljs.core._EQ_.call(null,expected__10208__auto___26307,actual__10209__auto___26308)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26307;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26308;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".medium");

speclj.components.inc_assertions_BANG_.call(null);

var name__10454__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__10455__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384)], null)], null);
var invocations__10456__auto__ = speclj.stub.invocations_of.call(null,name__10454__auto__);
var times__10457__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10455__auto__);
var times_QMARK___10458__auto__ = typeof times__10457__auto__ === 'number';
var check_params_QMARK___10459__auto__ = cljs.core.contains_QMARK_.call(null,options__10455__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10460__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10455__auto__);
var with__10460__auto____$1 = (((with__10460__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10460__auto__);
var invocations_str__10461__auto__ = (function (p1__10451__10462__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10451__10462__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10458__auto__) && (check_params_QMARK___10459__auto__))){
var matching_invocations__10463__auto__ = cljs.core.filter.call(null,(function (p1__10452__10464__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10460__auto____$1,p1__10452__10464__auto__);
}),invocations__10456__auto__);
var matching_count__10465__auto__ = cljs.core.count.call(null,matching_invocations__10463__auto__);
if(cljs.core._EQ_.call(null,times__10457__auto__,matching_count__10465__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10457__auto__)," ",invocations_str__10461__auto__.call(null,times__10457__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10454__auto__)," with ",cljs.core.pr_str.call(null,with__10460__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10465__auto__)," ",invocations_str__10461__auto__.call(null,matching_count__10465__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___10459__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10453__10466__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10460__auto____$1,p1__10453__10466__auto__);
}),invocations__10456__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10454__auto__)," with ",cljs.core.pr_str.call(null,with__10460__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10456__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___10458__auto__){
if(cljs.core._EQ_.call(null,times__10457__auto__,cljs.core.count.call(null,invocations__10456__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10457__auto__)," ",invocations_str__10461__auto__.call(null,times__10457__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10454__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10456__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__10456__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10454__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10456__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__26175);
}});})(_STAR_parent_description_STAR__orig_val__26161_26295,_STAR_parent_description_STAR__temp_val__26162_26296,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179))
,false),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__26161_26295,_STAR_parent_description_STAR__temp_val__26162_26296,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179){
return (function (){
var select_difficulty_BANG__orig_val__26177 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__26178 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__26178);

try{var value__10570__auto___26309 = ".hard";
var node__10571__auto___26310 = c3kit.wire.spec_helper.select.call(null,value__10570__auto___26309);
if(cljs.core.truth_(node__10571__auto___26310)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10570__auto___26309;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10208__auto___26311 = "Hard";
var actual__10209__auto___26312 = c3kit.wire.spec_helper.text.call(null,".hard");
if(cljs.core._EQ_.call(null,expected__10208__auto___26311,actual__10209__auto___26312)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10208__auto___26311;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10209__auto___26312;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10176__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10176__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".hard");

speclj.components.inc_assertions_BANG_.call(null);

var name__10454__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__10455__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null)], null);
var invocations__10456__auto__ = speclj.stub.invocations_of.call(null,name__10454__auto__);
var times__10457__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10455__auto__);
var times_QMARK___10458__auto__ = typeof times__10457__auto__ === 'number';
var check_params_QMARK___10459__auto__ = cljs.core.contains_QMARK_.call(null,options__10455__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10460__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10455__auto__);
var with__10460__auto____$1 = (((with__10460__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10460__auto__);
var invocations_str__10461__auto__ = (function (p1__10451__10462__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10451__10462__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10458__auto__) && (check_params_QMARK___10459__auto__))){
var matching_invocations__10463__auto__ = cljs.core.filter.call(null,(function (p1__10452__10464__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10460__auto____$1,p1__10452__10464__auto__);
}),invocations__10456__auto__);
var matching_count__10465__auto__ = cljs.core.count.call(null,matching_invocations__10463__auto__);
if(cljs.core._EQ_.call(null,times__10457__auto__,matching_count__10465__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10457__auto__)," ",invocations_str__10461__auto__.call(null,times__10457__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10454__auto__)," with ",cljs.core.pr_str.call(null,with__10460__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10465__auto__)," ",invocations_str__10461__auto__.call(null,matching_count__10465__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___10459__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10453__10466__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10460__auto____$1,p1__10453__10466__auto__);
}),invocations__10456__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10454__auto__)," with ",cljs.core.pr_str.call(null,with__10460__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10456__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___10458__auto__){
if(cljs.core._EQ_.call(null,times__10457__auto__,cljs.core.count.call(null,invocations__10456__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10457__auto__)," ",invocations_str__10461__auto__.call(null,times__10457__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10454__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10456__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__10456__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10454__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10456__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__26177);
}});})(_STAR_parent_description_STAR__orig_val__26161_26295,_STAR_parent_description_STAR__temp_val__26162_26296,description__10066__auto____$1,_STAR_parent_description_STAR__orig_val__26073_26180,_STAR_parent_description_STAR__temp_val__26074_26181,description__10066__auto___26179))
,false)],null)));
var chunk__26164_26298 = null;
var count__26165_26299 = (0);
var i__26166_26300 = (0);
while(true){
if((i__26166_26300 < count__26165_26299)){
var component__10067__auto___26313 = cljs.core._nth.call(null,chunk__26164_26298,i__26166_26300);
speclj.components.install.call(null,component__10067__auto___26313,description__10066__auto____$1);


var G__26314 = seq__26163_26297;
var G__26315 = chunk__26164_26298;
var G__26316 = count__26165_26299;
var G__26317 = (i__26166_26300 + (1));
seq__26163_26297 = G__26314;
chunk__26164_26298 = G__26315;
count__26165_26299 = G__26316;
i__26166_26300 = G__26317;
continue;
} else {
var temp__5825__auto___26318 = cljs.core.seq.call(null,seq__26163_26297);
if(temp__5825__auto___26318){
var seq__26163_26319__$1 = temp__5825__auto___26318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26163_26319__$1)){
var c__5548__auto___26320 = cljs.core.chunk_first.call(null,seq__26163_26319__$1);
var G__26321 = cljs.core.chunk_rest.call(null,seq__26163_26319__$1);
var G__26322 = c__5548__auto___26320;
var G__26323 = cljs.core.count.call(null,c__5548__auto___26320);
var G__26324 = (0);
seq__26163_26297 = G__26321;
chunk__26164_26298 = G__26322;
count__26165_26299 = G__26323;
i__26166_26300 = G__26324;
continue;
} else {
var component__10067__auto___26325 = cljs.core.first.call(null,seq__26163_26319__$1);
speclj.components.install.call(null,component__10067__auto___26325,description__10066__auto____$1);


var G__26326 = cljs.core.next.call(null,seq__26163_26319__$1);
var G__26327 = null;
var G__26328 = (0);
var G__26329 = (0);
seq__26163_26297 = G__26326;
chunk__26164_26298 = G__26327;
count__26165_26299 = G__26328;
i__26166_26300 = G__26329;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__26161_26295);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10066__auto____$1);
}

return description__10066__auto____$1;
})()],null)));
var chunk__26076_26183 = null;
var count__26077_26184 = (0);
var i__26078_26185 = (0);
while(true){
if((i__26078_26185 < count__26077_26184)){
var component__10067__auto___26330 = cljs.core._nth.call(null,chunk__26076_26183,i__26078_26185);
speclj.components.install.call(null,component__10067__auto___26330,description__10066__auto___26179);


var G__26331 = seq__26075_26182;
var G__26332 = chunk__26076_26183;
var G__26333 = count__26077_26184;
var G__26334 = (i__26078_26185 + (1));
seq__26075_26182 = G__26331;
chunk__26076_26183 = G__26332;
count__26077_26184 = G__26333;
i__26078_26185 = G__26334;
continue;
} else {
var temp__5825__auto___26335 = cljs.core.seq.call(null,seq__26075_26182);
if(temp__5825__auto___26335){
var seq__26075_26336__$1 = temp__5825__auto___26335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26075_26336__$1)){
var c__5548__auto___26337 = cljs.core.chunk_first.call(null,seq__26075_26336__$1);
var G__26338 = cljs.core.chunk_rest.call(null,seq__26075_26336__$1);
var G__26339 = c__5548__auto___26337;
var G__26340 = cljs.core.count.call(null,c__5548__auto___26337);
var G__26341 = (0);
seq__26075_26182 = G__26338;
chunk__26076_26183 = G__26339;
count__26077_26184 = G__26340;
i__26078_26185 = G__26341;
continue;
} else {
var component__10067__auto___26342 = cljs.core.first.call(null,seq__26075_26336__$1);
speclj.components.install.call(null,component__10067__auto___26342,description__10066__auto___26179);


var G__26343 = cljs.core.next.call(null,seq__26075_26336__$1);
var G__26344 = null;
var G__26345 = (0);
var G__26346 = (0);
seq__26075_26182 = G__26343;
chunk__26076_26183 = G__26344;
count__26077_26184 = G__26345;
i__26078_26185 = G__26346;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__26073_26180);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10066__auto___26179);
}


//# sourceMappingURL=html_spec.js.map
