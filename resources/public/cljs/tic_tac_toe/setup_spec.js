// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.setup');
var description__8450__auto___19084 = speclj.components.new_description.call(null,"game setup",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__19062_19085 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19063_19086 = description__8450__auto___19084;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19063_19086);

try{var seq__19064_19087 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__19062_19085,_STAR_parent_description_STAR__temp_val__19063_19086,description__8450__auto___19084){
return (function (it__8824__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__19076 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__19077 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__19077);

try{return it__8824__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__19076);
}});})(_STAR_parent_description_STAR__orig_val__19062_19085,_STAR_parent_description_STAR__temp_val__19063_19086,description__8450__auto___19084))
),(function (){var description__8450__auto____$1 = speclj.components.new_description.call(null,"select-difficulty correct count and switch to game",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__19078_19091 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19079_19092 = description__8450__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19079_19092);

try{var seq__19080_19093 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"single difficulty 1 time",((function (_STAR_parent_description_STAR__orig_val__19078_19091,_STAR_parent_description_STAR__temp_val__19079_19092,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__19062_19085,_STAR_parent_description_STAR__temp_val__19063_19086,description__8450__auto___19084){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var out = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"easy","easy",315769928));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___19097 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__8593__auto___19098 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___19097,actual__8593__auto___19098)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___19097;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___19098;
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
});})(_STAR_parent_description_STAR__orig_val__19078_19091,_STAR_parent_description_STAR__temp_val__19079_19092,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__19062_19085,_STAR_parent_description_STAR__temp_val__19063_19086,description__8450__auto___19084))
,false)],null)));
var chunk__19081_19094 = null;
var count__19082_19095 = (0);
var i__19083_19096 = (0);
while(true){
if((i__19083_19096 < count__19082_19095)){
var component__8451__auto___19099 = cljs.core._nth.call(null,chunk__19081_19094,i__19083_19096);
speclj.components.install.call(null,component__8451__auto___19099,description__8450__auto____$1);


var G__19100 = seq__19080_19093;
var G__19101 = chunk__19081_19094;
var G__19102 = count__19082_19095;
var G__19103 = (i__19083_19096 + (1));
seq__19080_19093 = G__19100;
chunk__19081_19094 = G__19101;
count__19082_19095 = G__19102;
i__19083_19096 = G__19103;
continue;
} else {
var temp__5825__auto___19104 = cljs.core.seq.call(null,seq__19080_19093);
if(temp__5825__auto___19104){
var seq__19080_19105__$1 = temp__5825__auto___19104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19080_19105__$1)){
var c__5548__auto___19106 = cljs.core.chunk_first.call(null,seq__19080_19105__$1);
var G__19107 = cljs.core.chunk_rest.call(null,seq__19080_19105__$1);
var G__19108 = c__5548__auto___19106;
var G__19109 = cljs.core.count.call(null,c__5548__auto___19106);
var G__19110 = (0);
seq__19080_19093 = G__19107;
chunk__19081_19094 = G__19108;
count__19082_19095 = G__19109;
i__19083_19096 = G__19110;
continue;
} else {
var component__8451__auto___19111 = cljs.core.first.call(null,seq__19080_19105__$1);
speclj.components.install.call(null,component__8451__auto___19111,description__8450__auto____$1);


var G__19112 = cljs.core.next.call(null,seq__19080_19105__$1);
var G__19113 = null;
var G__19114 = (0);
var G__19115 = (0);
seq__19080_19093 = G__19112;
chunk__19081_19094 = G__19113;
count__19082_19095 = G__19114;
i__19083_19096 = G__19115;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19078_19091);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$1);
}

return description__8450__auto____$1;
})()],null)));
var chunk__19065_19088 = null;
var count__19066_19089 = (0);
var i__19067_19090 = (0);
while(true){
if((i__19067_19090 < count__19066_19089)){
var component__8451__auto___19116 = cljs.core._nth.call(null,chunk__19065_19088,i__19067_19090);
speclj.components.install.call(null,component__8451__auto___19116,description__8450__auto___19084);


var G__19117 = seq__19064_19087;
var G__19118 = chunk__19065_19088;
var G__19119 = count__19066_19089;
var G__19120 = (i__19067_19090 + (1));
seq__19064_19087 = G__19117;
chunk__19065_19088 = G__19118;
count__19066_19089 = G__19119;
i__19067_19090 = G__19120;
continue;
} else {
var temp__5825__auto___19121 = cljs.core.seq.call(null,seq__19064_19087);
if(temp__5825__auto___19121){
var seq__19064_19122__$1 = temp__5825__auto___19121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19064_19122__$1)){
var c__5548__auto___19123 = cljs.core.chunk_first.call(null,seq__19064_19122__$1);
var G__19124 = cljs.core.chunk_rest.call(null,seq__19064_19122__$1);
var G__19125 = c__5548__auto___19123;
var G__19126 = cljs.core.count.call(null,c__5548__auto___19123);
var G__19127 = (0);
seq__19064_19087 = G__19124;
chunk__19065_19088 = G__19125;
count__19066_19089 = G__19126;
i__19067_19090 = G__19127;
continue;
} else {
var component__8451__auto___19128 = cljs.core.first.call(null,seq__19064_19122__$1);
speclj.components.install.call(null,component__8451__auto___19128,description__8450__auto___19084);


var G__19129 = cljs.core.next.call(null,seq__19064_19122__$1);
var G__19130 = null;
var G__19131 = (0);
var G__19132 = (0);
seq__19064_19087 = G__19129;
chunk__19065_19088 = G__19130;
count__19066_19089 = G__19131;
i__19067_19090 = G__19132;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19062_19085);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto___19084);
}


//# sourceMappingURL=setup_spec.js.map
