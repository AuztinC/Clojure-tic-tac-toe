// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__10057__auto___10618 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__10612_10619 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10613_10620 = description__10057__auto___10618;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10613_10620);

try{var seq__10614_10621 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10612_10619,_STAR_parent_description_STAR__temp_val__10613_10620,description__10057__auto___10618){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__10612_10619,_STAR_parent_description_STAR__temp_val__10613_10620,description__10057__auto___10618))
),speclj.components.new_characteristic.call(null,"does stuff",((function (_STAR_parent_description_STAR__orig_val__10612_10619,_STAR_parent_description_STAR__temp_val__10613_10620,description__10057__auto___10618){
return (function (){
var value__10561__auto___10625 = "#bob";
var node__10562__auto___10626 = c3kit.wire.spec_helper.select.call(null,value__10561__auto___10625);
if(cljs.core.truth_(node__10562__auto___10626)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10561__auto___10625;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto__ = "file:///";
var actual__10200__auto__ = c3kit.wire.spec_helper.href.call(null,"#bob a");
if(cljs.core._EQ_.call(null,expected__10199__auto__,actual__10200__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10612_10619,_STAR_parent_description_STAR__temp_val__10613_10620,description__10057__auto___10618))
,false)],null)));
var chunk__10615_10622 = null;
var count__10616_10623 = (0);
var i__10617_10624 = (0);
while(true){
if((i__10617_10624 < count__10616_10623)){
var component__10058__auto___10627 = cljs.core._nth.call(null,chunk__10615_10622,i__10617_10624);
speclj.components.install.call(null,component__10058__auto___10627,description__10057__auto___10618);


var G__10628 = seq__10614_10621;
var G__10629 = chunk__10615_10622;
var G__10630 = count__10616_10623;
var G__10631 = (i__10617_10624 + (1));
seq__10614_10621 = G__10628;
chunk__10615_10622 = G__10629;
count__10616_10623 = G__10630;
i__10617_10624 = G__10631;
continue;
} else {
var temp__5825__auto___10632 = cljs.core.seq.call(null,seq__10614_10621);
if(temp__5825__auto___10632){
var seq__10614_10633__$1 = temp__5825__auto___10632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10614_10633__$1)){
var c__5548__auto___10634 = cljs.core.chunk_first.call(null,seq__10614_10633__$1);
var G__10635 = cljs.core.chunk_rest.call(null,seq__10614_10633__$1);
var G__10636 = c__5548__auto___10634;
var G__10637 = cljs.core.count.call(null,c__5548__auto___10634);
var G__10638 = (0);
seq__10614_10621 = G__10635;
chunk__10615_10622 = G__10636;
count__10616_10623 = G__10637;
i__10617_10624 = G__10638;
continue;
} else {
var component__10058__auto___10639 = cljs.core.first.call(null,seq__10614_10633__$1);
speclj.components.install.call(null,component__10058__auto___10639,description__10057__auto___10618);


var G__10640 = cljs.core.next.call(null,seq__10614_10633__$1);
var G__10641 = null;
var G__10642 = (0);
var G__10643 = (0);
seq__10614_10621 = G__10640;
chunk__10615_10622 = G__10641;
count__10616_10623 = G__10642;
i__10617_10624 = G__10643;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10612_10619);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10057__auto___10618);
}


//# sourceMappingURL=main_spec.js.map
