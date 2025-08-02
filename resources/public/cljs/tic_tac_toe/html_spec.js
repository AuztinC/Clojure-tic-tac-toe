// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.html_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.html');
goog.require('tic_tac_toe.game_setup');
goog.require('tic_tac_toe.main');
var description__10055__auto___14854 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__14754_14855 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14755_14856 = description__10055__auto___14854;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14755_14856);

try{var seq__14756_14857 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854){
return (function (it__10429__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__14822 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__14823 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__14823);

try{return it__10429__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__14822);
}});})(_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.game_setup.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854))
),(function (){var description__10055__auto____$1 = speclj.components.new_description.call(null,"updated state atom with screen on click",true,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__14824_14861 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14825_14862 = description__10055__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14825_14862);

try{var seq__14826_14863 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__10055__auto____$2 = speclj.components.new_description.call(null,"select-game-mode",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__14842_14867 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14843_14868 = description__10055__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14843_14868);

try{var seq__14844_14869 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"clicking Human vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__14842_14867,_STAR_parent_description_STAR__temp_val__14843_14868,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__14824_14861,_STAR_parent_description_STAR__temp_val__14825_14862,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___14873 = "Human vs AI";
var actual__10198__auto___14874 = c3kit.wire.spec_helper.text.call(null,"#human-vs-ai");
if(cljs.core._EQ_.call(null,expected__10197__auto___14873,actual__10198__auto___14874)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___14873;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___14874;
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

var expected__10197__auto___14875 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10198__auto___14876 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.game_setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto___14875,actual__10198__auto___14876)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___14875;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___14876;
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
var actual__10198__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.game_setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__14842_14867,_STAR_parent_description_STAR__temp_val__14843_14868,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__14824_14861,_STAR_parent_description_STAR__temp_val__14825_14862,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__14842_14867,_STAR_parent_description_STAR__temp_val__14843_14868,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__14824_14861,_STAR_parent_description_STAR__temp_val__14825_14862,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___14877 = "AI vs Human";
var actual__10198__auto___14878 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-human");
if(cljs.core._EQ_.call(null,expected__10197__auto___14877,actual__10198__auto___14878)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___14877;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___14878;
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

var expected__10197__auto___14879 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10198__auto___14880 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.game_setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto___14879,actual__10198__auto___14880)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___14879;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___14880;
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
var actual__10198__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.game_setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__14842_14867,_STAR_parent_description_STAR__temp_val__14843_14868,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__14824_14861,_STAR_parent_description_STAR__temp_val__14825_14862,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854))
,false),speclj.components.new_characteristic.call(null,"clicking Human vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__14842_14867,_STAR_parent_description_STAR__temp_val__14843_14868,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__14824_14861,_STAR_parent_description_STAR__temp_val__14825_14862,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___14881 = "Human vs Human";
var actual__10198__auto___14882 = c3kit.wire.spec_helper.text.call(null,"#human-vs-human");
if(cljs.core._EQ_.call(null,expected__10197__auto___14881,actual__10198__auto___14882)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___14881;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___14882;
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

var expected__10197__auto___14883 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10198__auto___14884 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.game_setup.state));
if(cljs.core._EQ_.call(null,expected__10197__auto___14883,actual__10198__auto___14884)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___14883;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___14884;
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
var actual__10198__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.game_setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__14842_14867,_STAR_parent_description_STAR__temp_val__14843_14868,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__14824_14861,_STAR_parent_description_STAR__temp_val__14825_14862,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__14842_14867,_STAR_parent_description_STAR__temp_val__14843_14868,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__14824_14861,_STAR_parent_description_STAR__temp_val__14825_14862,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___14885 = "AI vs AI";
var actual__10198__auto___14886 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-ai");
if(cljs.core._EQ_.call(null,expected__10197__auto___14885,actual__10198__auto___14886)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___14885;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___14886;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-ai");

var out = cljs.core.deref.call(null,tic_tac_toe.game_setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___14887 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__10198__auto___14888 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__10197__auto___14887,actual__10198__auto___14888)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___14887;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___14888;
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
});})(_STAR_parent_description_STAR__orig_val__14842_14867,_STAR_parent_description_STAR__temp_val__14843_14868,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__14824_14861,_STAR_parent_description_STAR__temp_val__14825_14862,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854))
,false)],null)));
var chunk__14845_14870 = null;
var count__14846_14871 = (0);
var i__14847_14872 = (0);
while(true){
if((i__14847_14872 < count__14846_14871)){
var component__10056__auto___14889 = cljs.core._nth.call(null,chunk__14845_14870,i__14847_14872);
speclj.components.install.call(null,component__10056__auto___14889,description__10055__auto____$2);


var G__14890 = seq__14844_14869;
var G__14891 = chunk__14845_14870;
var G__14892 = count__14846_14871;
var G__14893 = (i__14847_14872 + (1));
seq__14844_14869 = G__14890;
chunk__14845_14870 = G__14891;
count__14846_14871 = G__14892;
i__14847_14872 = G__14893;
continue;
} else {
var temp__5825__auto___14894 = cljs.core.seq.call(null,seq__14844_14869);
if(temp__5825__auto___14894){
var seq__14844_14895__$1 = temp__5825__auto___14894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14844_14895__$1)){
var c__5548__auto___14896 = cljs.core.chunk_first.call(null,seq__14844_14895__$1);
var G__14897 = cljs.core.chunk_rest.call(null,seq__14844_14895__$1);
var G__14898 = c__5548__auto___14896;
var G__14899 = cljs.core.count.call(null,c__5548__auto___14896);
var G__14900 = (0);
seq__14844_14869 = G__14897;
chunk__14845_14870 = G__14898;
count__14846_14871 = G__14899;
i__14847_14872 = G__14900;
continue;
} else {
var component__10056__auto___14901 = cljs.core.first.call(null,seq__14844_14895__$1);
speclj.components.install.call(null,component__10056__auto___14901,description__10055__auto____$2);


var G__14902 = cljs.core.next.call(null,seq__14844_14895__$1);
var G__14903 = null;
var G__14904 = (0);
var G__14905 = (0);
seq__14844_14869 = G__14902;
chunk__14845_14870 = G__14903;
count__14846_14871 = G__14904;
i__14847_14872 = G__14905;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14842_14867);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10055__auto____$2);
}

return description__10055__auto____$2;
})(),(function (){var description__10055__auto____$2 = speclj.components.new_description.call(null,"select-board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__14848_14906 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14849_14907 = description__10055__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14849_14907);

try{var seq__14850_14908 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__14848_14906,_STAR_parent_description_STAR__temp_val__14849_14907,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__14824_14861,_STAR_parent_description_STAR__temp_val__14825_14862,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.game_setup.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__14848_14906,_STAR_parent_description_STAR__temp_val__14849_14907,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__14824_14861,_STAR_parent_description_STAR__temp_val__14825_14862,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854))
),speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__14848_14906,_STAR_parent_description_STAR__temp_val__14849_14907,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__14824_14861,_STAR_parent_description_STAR__temp_val__14825_14862,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10197__auto___14912 = "3x3";
var actual__10198__auto___14913 = c3kit.wire.spec_helper.text.call(null,"#board-3x3");
if(cljs.core._EQ_.call(null,expected__10197__auto___14912,actual__10198__auto___14913)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10197__auto___14912;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10165__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10165__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10198__auto___14913;
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

var expected__10197__auto__ = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__10198__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.game_setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__14848_14906,_STAR_parent_description_STAR__temp_val__14849_14907,description__10055__auto____$2,_STAR_parent_description_STAR__orig_val__14824_14861,_STAR_parent_description_STAR__temp_val__14825_14862,description__10055__auto____$1,_STAR_parent_description_STAR__orig_val__14754_14855,_STAR_parent_description_STAR__temp_val__14755_14856,description__10055__auto___14854))
,false)],null)));
var chunk__14851_14909 = null;
var count__14852_14910 = (0);
var i__14853_14911 = (0);
while(true){
if((i__14853_14911 < count__14852_14910)){
var component__10056__auto___14914 = cljs.core._nth.call(null,chunk__14851_14909,i__14853_14911);
speclj.components.install.call(null,component__10056__auto___14914,description__10055__auto____$2);


var G__14915 = seq__14850_14908;
var G__14916 = chunk__14851_14909;
var G__14917 = count__14852_14910;
var G__14918 = (i__14853_14911 + (1));
seq__14850_14908 = G__14915;
chunk__14851_14909 = G__14916;
count__14852_14910 = G__14917;
i__14853_14911 = G__14918;
continue;
} else {
var temp__5825__auto___14919 = cljs.core.seq.call(null,seq__14850_14908);
if(temp__5825__auto___14919){
var seq__14850_14920__$1 = temp__5825__auto___14919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14850_14920__$1)){
var c__5548__auto___14921 = cljs.core.chunk_first.call(null,seq__14850_14920__$1);
var G__14922 = cljs.core.chunk_rest.call(null,seq__14850_14920__$1);
var G__14923 = c__5548__auto___14921;
var G__14924 = cljs.core.count.call(null,c__5548__auto___14921);
var G__14925 = (0);
seq__14850_14908 = G__14922;
chunk__14851_14909 = G__14923;
count__14852_14910 = G__14924;
i__14853_14911 = G__14925;
continue;
} else {
var component__10056__auto___14926 = cljs.core.first.call(null,seq__14850_14920__$1);
speclj.components.install.call(null,component__10056__auto___14926,description__10055__auto____$2);


var G__14927 = cljs.core.next.call(null,seq__14850_14920__$1);
var G__14928 = null;
var G__14929 = (0);
var G__14930 = (0);
seq__14850_14908 = G__14927;
chunk__14851_14909 = G__14928;
count__14852_14910 = G__14929;
i__14853_14911 = G__14930;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14848_14906);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10055__auto____$2);
}

return description__10055__auto____$2;
})()],null)));
var chunk__14827_14864 = null;
var count__14828_14865 = (0);
var i__14829_14866 = (0);
while(true){
if((i__14829_14866 < count__14828_14865)){
var component__10056__auto___14931 = cljs.core._nth.call(null,chunk__14827_14864,i__14829_14866);
speclj.components.install.call(null,component__10056__auto___14931,description__10055__auto____$1);


var G__14932 = seq__14826_14863;
var G__14933 = chunk__14827_14864;
var G__14934 = count__14828_14865;
var G__14935 = (i__14829_14866 + (1));
seq__14826_14863 = G__14932;
chunk__14827_14864 = G__14933;
count__14828_14865 = G__14934;
i__14829_14866 = G__14935;
continue;
} else {
var temp__5825__auto___14936 = cljs.core.seq.call(null,seq__14826_14863);
if(temp__5825__auto___14936){
var seq__14826_14937__$1 = temp__5825__auto___14936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14826_14937__$1)){
var c__5548__auto___14938 = cljs.core.chunk_first.call(null,seq__14826_14937__$1);
var G__14939 = cljs.core.chunk_rest.call(null,seq__14826_14937__$1);
var G__14940 = c__5548__auto___14938;
var G__14941 = cljs.core.count.call(null,c__5548__auto___14938);
var G__14942 = (0);
seq__14826_14863 = G__14939;
chunk__14827_14864 = G__14940;
count__14828_14865 = G__14941;
i__14829_14866 = G__14942;
continue;
} else {
var component__10056__auto___14943 = cljs.core.first.call(null,seq__14826_14937__$1);
speclj.components.install.call(null,component__10056__auto___14943,description__10055__auto____$1);


var G__14944 = cljs.core.next.call(null,seq__14826_14937__$1);
var G__14945 = null;
var G__14946 = (0);
var G__14947 = (0);
seq__14826_14863 = G__14944;
chunk__14827_14864 = G__14945;
count__14828_14865 = G__14946;
i__14829_14866 = G__14947;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14824_14861);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10055__auto____$1);
}

return description__10055__auto____$1;
})()],null)));
var chunk__14757_14858 = null;
var count__14758_14859 = (0);
var i__14759_14860 = (0);
while(true){
if((i__14759_14860 < count__14758_14859)){
var component__10056__auto___14948 = cljs.core._nth.call(null,chunk__14757_14858,i__14759_14860);
speclj.components.install.call(null,component__10056__auto___14948,description__10055__auto___14854);


var G__14949 = seq__14756_14857;
var G__14950 = chunk__14757_14858;
var G__14951 = count__14758_14859;
var G__14952 = (i__14759_14860 + (1));
seq__14756_14857 = G__14949;
chunk__14757_14858 = G__14950;
count__14758_14859 = G__14951;
i__14759_14860 = G__14952;
continue;
} else {
var temp__5825__auto___14953 = cljs.core.seq.call(null,seq__14756_14857);
if(temp__5825__auto___14953){
var seq__14756_14954__$1 = temp__5825__auto___14953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14756_14954__$1)){
var c__5548__auto___14955 = cljs.core.chunk_first.call(null,seq__14756_14954__$1);
var G__14956 = cljs.core.chunk_rest.call(null,seq__14756_14954__$1);
var G__14957 = c__5548__auto___14955;
var G__14958 = cljs.core.count.call(null,c__5548__auto___14955);
var G__14959 = (0);
seq__14756_14857 = G__14956;
chunk__14757_14858 = G__14957;
count__14758_14859 = G__14958;
i__14759_14860 = G__14959;
continue;
} else {
var component__10056__auto___14960 = cljs.core.first.call(null,seq__14756_14954__$1);
speclj.components.install.call(null,component__10056__auto___14960,description__10055__auto___14854);


var G__14961 = cljs.core.next.call(null,seq__14756_14954__$1);
var G__14962 = null;
var G__14963 = (0);
var G__14964 = (0);
seq__14756_14857 = G__14961;
chunk__14757_14858 = G__14962;
count__14758_14859 = G__14963;
i__14759_14860 = G__14964;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14754_14855);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10055__auto___14854);
}


//# sourceMappingURL=html_spec.js.map
