// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.setup');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('tic_tac_toe.board');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.setup !== 'undefined') && (typeof tic_tac_toe.setup.state !== 'undefined')){
} else {
tic_tac_toe.setup.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370)], null));
}
tic_tac_toe.setup.select_difficulty_BANG_ = (function tic_tac_toe$setup$select_difficulty_BANG_(choice){
var current_state = cljs.core.deref.call(null,tic_tac_toe.setup.state);
var ai_count = cljs.core.count.call(null,cljs.core.filterv.call(null,(function (p1__23247_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai","ai",760454697),p1__23247_SHARP_);
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(current_state)));
var updated_difficulties = cljs.core.conj.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(current_state)),choice);
if((cljs.core.count.call(null,updated_difficulties) < ai_count)){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"difficulties","difficulties",179230342),updated_difficulties,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984));
} else {
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"difficulties","difficulties",179230342),updated_difficulties,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null));
}
});

//# sourceMappingURL=setup.js.map
