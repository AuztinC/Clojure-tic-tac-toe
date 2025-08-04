// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.setup');
goog.require('cljs.core');
goog.require('c3kit.wire.js');
goog.require('reagent.core');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.ai_turn');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.setup !== 'undefined') && (typeof tic_tac_toe.setup.state !== 'undefined')){
} else {
tic_tac_toe.setup.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"store","store",1512230022),null,new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));
}
tic_tac_toe.setup.select_difficulty_BANG_ = (function tic_tac_toe$setup$select_difficulty_BANG_(choice){
var current_state = cljs.core.deref.call(null,tic_tac_toe.setup.state);
var ai_count = cljs.core.count.call(null,cljs.core.filterv.call(null,(function (p1__15062_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai","ai",760454697),p1__15062_SHARP_);
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(current_state)));
var updated_difficulties = cljs.core.conj.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(current_state)),choice);
if((cljs.core.count.call(null,updated_difficulties) < ai_count)){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"difficulties","difficulties",179230342),updated_difficulties,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984));
} else {
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"difficulties","difficulties",179230342),updated_difficulties,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833));
}
});
tic_tac_toe.setup.sleep = (function tic_tac_toe$setup$sleep(fn,t){
return setTimeout(fn,t);
});
tic_tac_toe.setup.auto_advance = (function tic_tac_toe$setup$auto_advance(_key,_atom,_old,new$){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(new$))){
var next_player = (function (){var G__15063 = new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(new$);
switch (G__15063) {
case "p1":
return cljs.core.first.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(new$));

break;
case "p2":
return cljs.core.second.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(new$));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15063)].join('')));

}
})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai","ai",760454697),next_player)){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(new$))){
removeEventListener("on-click",c3kit.wire.js.element_by_id.call(null,"app"));

return tic_tac_toe.setup.sleep.call(null,(function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,tic_tac_toe.game.next_state.call(null,new$));
}),(500));
} else {
return cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,tic_tac_toe.game.next_state.call(null,new$));
}
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=setup.js.map
