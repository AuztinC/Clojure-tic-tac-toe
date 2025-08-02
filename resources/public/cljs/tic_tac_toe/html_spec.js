// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.html_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.html');
goog.require('tic_tac_toe.setup');
goog.require('tic_tac_toe.main');
var description__10102__auto___14392 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__14244_14393 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14245_14394 = description__10102__auto___14392;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14245_14394);

try{var seq__14247_14395 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392){
return (function (it__10476__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__14354 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__14355 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__14355);

try{return it__10476__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__14354);
}});})(_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392))
),(function (){var description__10102__auto____$1 = speclj.components.new_description.call(null,"updated state atom with screen on click",true,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__14356_14399 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14357_14400 = description__10102__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14357_14400);

try{var seq__14358_14401 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__10102__auto____$2 = speclj.components.new_description.call(null,"select-game-mode",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__14374_14405 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14375_14406 = description__10102__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14375_14406);

try{var seq__14376_14407 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"clicking Human vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__14374_14405,_STAR_parent_description_STAR__temp_val__14375_14406,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14411 = "Human vs AI";
var actual__10245__auto___14412 = c3kit.wire.spec_helper.text.call(null,"#human-vs-ai");
if(cljs.core._EQ_.call(null,expected__10244__auto___14411,actual__10245__auto___14412)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14411;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14412;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-ai");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14413 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10245__auto___14414 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10244__auto___14413,actual__10245__auto___14414)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14413;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14414;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__10245__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__14374_14405,_STAR_parent_description_STAR__temp_val__14375_14406,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__14374_14405,_STAR_parent_description_STAR__temp_val__14375_14406,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14415 = "AI vs Human";
var actual__10245__auto___14416 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-human");
if(cljs.core._EQ_.call(null,expected__10244__auto___14415,actual__10245__auto___14416)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14415;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14416;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14417 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10245__auto___14418 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10244__auto___14417,actual__10245__auto___14418)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14417;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14418;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__10245__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__14374_14405,_STAR_parent_description_STAR__temp_val__14375_14406,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392))
,false),speclj.components.new_characteristic.call(null,"clicking Human vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__14374_14405,_STAR_parent_description_STAR__temp_val__14375_14406,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14419 = "Human vs Human";
var actual__10245__auto___14420 = c3kit.wire.spec_helper.text.call(null,"#human-vs-human");
if(cljs.core._EQ_.call(null,expected__10244__auto___14419,actual__10245__auto___14420)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14419;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14420;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14421 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10245__auto___14422 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10244__auto___14421,actual__10245__auto___14422)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14421;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14422;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__10245__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__14374_14405,_STAR_parent_description_STAR__temp_val__14375_14406,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__14374_14405,_STAR_parent_description_STAR__temp_val__14375_14406,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14423 = "AI vs AI";
var actual__10245__auto___14424 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-ai");
if(cljs.core._EQ_.call(null,expected__10244__auto___14423,actual__10245__auto___14424)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14423;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14424;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-ai");

var out = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14425 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10245__auto___14426 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10244__auto___14425,actual__10245__auto___14426)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14425;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14426;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__10245__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(out);
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
});})(_STAR_parent_description_STAR__orig_val__14374_14405,_STAR_parent_description_STAR__temp_val__14375_14406,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392))
,false)],null)));
var chunk__14377_14408 = null;
var count__14378_14409 = (0);
var i__14379_14410 = (0);
while(true){
if((i__14379_14410 < count__14378_14409)){
var component__10103__auto___14427 = cljs.core._nth.call(null,chunk__14377_14408,i__14379_14410);
speclj.components.install.call(null,component__10103__auto___14427,description__10102__auto____$2);


var G__14428 = seq__14376_14407;
var G__14429 = chunk__14377_14408;
var G__14430 = count__14378_14409;
var G__14431 = (i__14379_14410 + (1));
seq__14376_14407 = G__14428;
chunk__14377_14408 = G__14429;
count__14378_14409 = G__14430;
i__14379_14410 = G__14431;
continue;
} else {
var temp__5825__auto___14432 = cljs.core.seq.call(null,seq__14376_14407);
if(temp__5825__auto___14432){
var seq__14376_14433__$1 = temp__5825__auto___14432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14376_14433__$1)){
var c__5548__auto___14434 = cljs.core.chunk_first.call(null,seq__14376_14433__$1);
var G__14435 = cljs.core.chunk_rest.call(null,seq__14376_14433__$1);
var G__14436 = c__5548__auto___14434;
var G__14437 = cljs.core.count.call(null,c__5548__auto___14434);
var G__14438 = (0);
seq__14376_14407 = G__14435;
chunk__14377_14408 = G__14436;
count__14378_14409 = G__14437;
i__14379_14410 = G__14438;
continue;
} else {
var component__10103__auto___14439 = cljs.core.first.call(null,seq__14376_14433__$1);
speclj.components.install.call(null,component__10103__auto___14439,description__10102__auto____$2);


var G__14440 = cljs.core.next.call(null,seq__14376_14433__$1);
var G__14441 = null;
var G__14442 = (0);
var G__14443 = (0);
seq__14376_14407 = G__14440;
chunk__14377_14408 = G__14441;
count__14378_14409 = G__14442;
i__14379_14410 = G__14443;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14374_14405);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10102__auto____$2);
}

return description__10102__auto____$2;
})(),(function (){var description__10102__auto____$2 = speclj.components.new_description.call(null,"select-board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__14380_14444 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14381_14445 = description__10102__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14381_14445);

try{var seq__14382_14446 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__14380_14444,_STAR_parent_description_STAR__temp_val__14381_14445,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__14380_14444,_STAR_parent_description_STAR__temp_val__14381_14445,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392))
),speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__14380_14444,_STAR_parent_description_STAR__temp_val__14381_14445,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14450 = "3x3";
var actual__10245__auto___14451 = c3kit.wire.spec_helper.text.call(null,"#board-3x3");
if(cljs.core._EQ_.call(null,expected__10244__auto___14450,actual__10245__auto___14451)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14450;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14451;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14452 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10245__auto___14453 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10244__auto___14452,actual__10245__auto___14453)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14452;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14453;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14454 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10245__auto___14455 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10244__auto___14454,actual__10245__auto___14455)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14454;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14455;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10245__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__14380_14444,_STAR_parent_description_STAR__temp_val__14381_14445,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392))
,false),speclj.components.new_characteristic.call(null,"4x4",((function (_STAR_parent_description_STAR__orig_val__14380_14444,_STAR_parent_description_STAR__temp_val__14381_14445,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14456 = "4x4";
var actual__10245__auto___14457 = c3kit.wire.spec_helper.text.call(null,"#board-4x4");
if(cljs.core._EQ_.call(null,expected__10244__auto___14456,actual__10245__auto___14457)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14456;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14457;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-4x4");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14458 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10245__auto___14459 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10244__auto___14458,actual__10245__auto___14459)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14458;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14459;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14460 = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__10245__auto___14461 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10244__auto___14460,actual__10245__auto___14461)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14460;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14461;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__10245__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__14380_14444,_STAR_parent_description_STAR__temp_val__14381_14445,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392))
,false),speclj.components.new_characteristic.call(null,"3x3x3",((function (_STAR_parent_description_STAR__orig_val__14380_14444,_STAR_parent_description_STAR__temp_val__14381_14445,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14462 = "3x3x3";
var actual__10245__auto___14463 = c3kit.wire.spec_helper.text.call(null,"#board-3x3x3");
if(cljs.core._EQ_.call(null,expected__10244__auto___14462,actual__10245__auto___14463)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14462;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14463;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14464 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10245__auto___14465 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10244__auto___14464,actual__10245__auto___14465)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14464;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14465;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto___14466 = new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540);
var actual__10245__auto___14467 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__10244__auto___14466,actual__10245__auto___14467)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10244__auto___14466;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10245__auto___14467;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10212__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10212__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10244__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
var actual__10245__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__14380_14444,_STAR_parent_description_STAR__temp_val__14381_14445,description__10102__auto____$2,_STAR_parent_description_STAR__orig_val__14356_14399,_STAR_parent_description_STAR__temp_val__14357_14400,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392))
,false)],null)));
var chunk__14383_14447 = null;
var count__14384_14448 = (0);
var i__14385_14449 = (0);
while(true){
if((i__14385_14449 < count__14384_14448)){
var component__10103__auto___14468 = cljs.core._nth.call(null,chunk__14383_14447,i__14385_14449);
speclj.components.install.call(null,component__10103__auto___14468,description__10102__auto____$2);


var G__14469 = seq__14382_14446;
var G__14470 = chunk__14383_14447;
var G__14471 = count__14384_14448;
var G__14472 = (i__14385_14449 + (1));
seq__14382_14446 = G__14469;
chunk__14383_14447 = G__14470;
count__14384_14448 = G__14471;
i__14385_14449 = G__14472;
continue;
} else {
var temp__5825__auto___14473 = cljs.core.seq.call(null,seq__14382_14446);
if(temp__5825__auto___14473){
var seq__14382_14474__$1 = temp__5825__auto___14473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14382_14474__$1)){
var c__5548__auto___14475 = cljs.core.chunk_first.call(null,seq__14382_14474__$1);
var G__14476 = cljs.core.chunk_rest.call(null,seq__14382_14474__$1);
var G__14477 = c__5548__auto___14475;
var G__14478 = cljs.core.count.call(null,c__5548__auto___14475);
var G__14479 = (0);
seq__14382_14446 = G__14476;
chunk__14383_14447 = G__14477;
count__14384_14448 = G__14478;
i__14385_14449 = G__14479;
continue;
} else {
var component__10103__auto___14480 = cljs.core.first.call(null,seq__14382_14474__$1);
speclj.components.install.call(null,component__10103__auto___14480,description__10102__auto____$2);


var G__14481 = cljs.core.next.call(null,seq__14382_14474__$1);
var G__14482 = null;
var G__14483 = (0);
var G__14484 = (0);
seq__14382_14446 = G__14481;
chunk__14383_14447 = G__14482;
count__14384_14448 = G__14483;
i__14385_14449 = G__14484;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14380_14444);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10102__auto____$2);
}

return description__10102__auto____$2;
})()],null)));
var chunk__14359_14402 = null;
var count__14360_14403 = (0);
var i__14361_14404 = (0);
while(true){
if((i__14361_14404 < count__14360_14403)){
var component__10103__auto___14485 = cljs.core._nth.call(null,chunk__14359_14402,i__14361_14404);
speclj.components.install.call(null,component__10103__auto___14485,description__10102__auto____$1);


var G__14486 = seq__14358_14401;
var G__14487 = chunk__14359_14402;
var G__14488 = count__14360_14403;
var G__14489 = (i__14361_14404 + (1));
seq__14358_14401 = G__14486;
chunk__14359_14402 = G__14487;
count__14360_14403 = G__14488;
i__14361_14404 = G__14489;
continue;
} else {
var temp__5825__auto___14490 = cljs.core.seq.call(null,seq__14358_14401);
if(temp__5825__auto___14490){
var seq__14358_14491__$1 = temp__5825__auto___14490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14358_14491__$1)){
var c__5548__auto___14492 = cljs.core.chunk_first.call(null,seq__14358_14491__$1);
var G__14493 = cljs.core.chunk_rest.call(null,seq__14358_14491__$1);
var G__14494 = c__5548__auto___14492;
var G__14495 = cljs.core.count.call(null,c__5548__auto___14492);
var G__14496 = (0);
seq__14358_14401 = G__14493;
chunk__14359_14402 = G__14494;
count__14360_14403 = G__14495;
i__14361_14404 = G__14496;
continue;
} else {
var component__10103__auto___14497 = cljs.core.first.call(null,seq__14358_14491__$1);
speclj.components.install.call(null,component__10103__auto___14497,description__10102__auto____$1);


var G__14498 = cljs.core.next.call(null,seq__14358_14491__$1);
var G__14499 = null;
var G__14500 = (0);
var G__14501 = (0);
seq__14358_14401 = G__14498;
chunk__14359_14402 = G__14499;
count__14360_14403 = G__14500;
i__14361_14404 = G__14501;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14356_14399);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10102__auto____$1);
}

return description__10102__auto____$1;
})(),(function (){var description__10102__auto____$1 = speclj.components.new_description.call(null,"difficulty",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__14386_14502 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14387_14503 = description__10102__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14387_14503);

try{var seq__14388_14504 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"selects one difficulty for ai human",((function (_STAR_parent_description_STAR__orig_val__14386_14502,_STAR_parent_description_STAR__temp_val__14387_14503,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392){
return (function (){
return cljs.core.List.EMPTY;
});})(_STAR_parent_description_STAR__orig_val__14386_14502,_STAR_parent_description_STAR__temp_val__14387_14503,description__10102__auto____$1,_STAR_parent_description_STAR__orig_val__14244_14393,_STAR_parent_description_STAR__temp_val__14245_14394,description__10102__auto___14392))
,false)],null)));
var chunk__14389_14505 = null;
var count__14390_14506 = (0);
var i__14391_14507 = (0);
while(true){
if((i__14391_14507 < count__14390_14506)){
var component__10103__auto___14508 = cljs.core._nth.call(null,chunk__14389_14505,i__14391_14507);
speclj.components.install.call(null,component__10103__auto___14508,description__10102__auto____$1);


var G__14509 = seq__14388_14504;
var G__14510 = chunk__14389_14505;
var G__14511 = count__14390_14506;
var G__14512 = (i__14391_14507 + (1));
seq__14388_14504 = G__14509;
chunk__14389_14505 = G__14510;
count__14390_14506 = G__14511;
i__14391_14507 = G__14512;
continue;
} else {
var temp__5825__auto___14513 = cljs.core.seq.call(null,seq__14388_14504);
if(temp__5825__auto___14513){
var seq__14388_14514__$1 = temp__5825__auto___14513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14388_14514__$1)){
var c__5548__auto___14515 = cljs.core.chunk_first.call(null,seq__14388_14514__$1);
var G__14516 = cljs.core.chunk_rest.call(null,seq__14388_14514__$1);
var G__14517 = c__5548__auto___14515;
var G__14518 = cljs.core.count.call(null,c__5548__auto___14515);
var G__14519 = (0);
seq__14388_14504 = G__14516;
chunk__14389_14505 = G__14517;
count__14390_14506 = G__14518;
i__14391_14507 = G__14519;
continue;
} else {
var component__10103__auto___14520 = cljs.core.first.call(null,seq__14388_14514__$1);
speclj.components.install.call(null,component__10103__auto___14520,description__10102__auto____$1);


var G__14521 = cljs.core.next.call(null,seq__14388_14514__$1);
var G__14522 = null;
var G__14523 = (0);
var G__14524 = (0);
seq__14388_14504 = G__14521;
chunk__14389_14505 = G__14522;
count__14390_14506 = G__14523;
i__14391_14507 = G__14524;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14386_14502);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10102__auto____$1);
}

return description__10102__auto____$1;
})()],null)));
var chunk__14255_14396 = null;
var count__14256_14397 = (0);
var i__14257_14398 = (0);
while(true){
if((i__14257_14398 < count__14256_14397)){
var component__10103__auto___14525 = cljs.core._nth.call(null,chunk__14255_14396,i__14257_14398);
speclj.components.install.call(null,component__10103__auto___14525,description__10102__auto___14392);


var G__14526 = seq__14247_14395;
var G__14527 = chunk__14255_14396;
var G__14528 = count__14256_14397;
var G__14529 = (i__14257_14398 + (1));
seq__14247_14395 = G__14526;
chunk__14255_14396 = G__14527;
count__14256_14397 = G__14528;
i__14257_14398 = G__14529;
continue;
} else {
var temp__5825__auto___14530 = cljs.core.seq.call(null,seq__14247_14395);
if(temp__5825__auto___14530){
var seq__14247_14531__$1 = temp__5825__auto___14530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14247_14531__$1)){
var c__5548__auto___14532 = cljs.core.chunk_first.call(null,seq__14247_14531__$1);
var G__14533 = cljs.core.chunk_rest.call(null,seq__14247_14531__$1);
var G__14534 = c__5548__auto___14532;
var G__14535 = cljs.core.count.call(null,c__5548__auto___14532);
var G__14536 = (0);
seq__14247_14395 = G__14533;
chunk__14255_14396 = G__14534;
count__14256_14397 = G__14535;
i__14257_14398 = G__14536;
continue;
} else {
var component__10103__auto___14537 = cljs.core.first.call(null,seq__14247_14531__$1);
speclj.components.install.call(null,component__10103__auto___14537,description__10102__auto___14392);


var G__14538 = cljs.core.next.call(null,seq__14247_14531__$1);
var G__14539 = null;
var G__14540 = (0);
var G__14541 = (0);
seq__14247_14395 = G__14538;
chunk__14255_14396 = G__14539;
count__14256_14397 = G__14540;
i__14257_14398 = G__14541;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14244_14393);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10102__auto___14392);
}


//# sourceMappingURL=html_spec.js.map
