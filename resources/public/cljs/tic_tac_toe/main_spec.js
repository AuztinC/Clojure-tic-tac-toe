// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__18456__auto___19264 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19258_19265 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19259_19266 = description__18456__auto___19264;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19259_19266);

try{var seq__19260_19267 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19258_19265,_STAR_parent_description_STAR__temp_val__19259_19266,description__18456__auto___19264){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__19258_19265,_STAR_parent_description_STAR__temp_val__19259_19266,description__18456__auto___19264))
),speclj.components.new_characteristic.call(null,"game container",((function (_STAR_parent_description_STAR__orig_val__19258_19265,_STAR_parent_description_STAR__temp_val__19259_19266,description__18456__auto___19264){
return (function (){
var value__19207__auto___19271 = "#bob";
var node__19208__auto___19272 = c3kit.wire.spec_helper.select.call(null,value__19207__auto___19271);
if(cljs.core.truth_(node__19208__auto___19272)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19207__auto___19271;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18566__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18566__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18598__auto__ = "file:///";
var actual__18599__auto__ = c3kit.wire.spec_helper.href.call(null,"#bob a");
if(cljs.core._EQ_.call(null,expected__18598__auto__,actual__18599__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18598__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18566__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18566__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18599__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18566__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18566__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19258_19265,_STAR_parent_description_STAR__temp_val__19259_19266,description__18456__auto___19264))
,false)],null)));
var chunk__19261_19268 = null;
var count__19262_19269 = (0);
var i__19263_19270 = (0);
while(true){
if((i__19263_19270 < count__19262_19269)){
var component__18457__auto___19273 = cljs.core._nth.call(null,chunk__19261_19268,i__19263_19270);
speclj.components.install.call(null,component__18457__auto___19273,description__18456__auto___19264);


var G__19274 = seq__19260_19267;
var G__19275 = chunk__19261_19268;
var G__19276 = count__19262_19269;
var G__19277 = (i__19263_19270 + (1));
seq__19260_19267 = G__19274;
chunk__19261_19268 = G__19275;
count__19262_19269 = G__19276;
i__19263_19270 = G__19277;
continue;
} else {
var temp__5825__auto___19278 = cljs.core.seq.call(null,seq__19260_19267);
if(temp__5825__auto___19278){
var seq__19260_19279__$1 = temp__5825__auto___19278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19260_19279__$1)){
var c__5548__auto___19280 = cljs.core.chunk_first.call(null,seq__19260_19279__$1);
var G__19281 = cljs.core.chunk_rest.call(null,seq__19260_19279__$1);
var G__19282 = c__5548__auto___19280;
var G__19283 = cljs.core.count.call(null,c__5548__auto___19280);
var G__19284 = (0);
seq__19260_19267 = G__19281;
chunk__19261_19268 = G__19282;
count__19262_19269 = G__19283;
i__19263_19270 = G__19284;
continue;
} else {
var component__18457__auto___19285 = cljs.core.first.call(null,seq__19260_19279__$1);
speclj.components.install.call(null,component__18457__auto___19285,description__18456__auto___19264);


var G__19286 = cljs.core.next.call(null,seq__19260_19279__$1);
var G__19287 = null;
var G__19288 = (0);
var G__19289 = (0);
seq__19260_19267 = G__19286;
chunk__19261_19268 = G__19287;
count__19262_19269 = G__19288;
i__19263_19270 = G__19289;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19258_19265);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18456__auto___19264);
}


//# sourceMappingURL=main_spec.js.map
