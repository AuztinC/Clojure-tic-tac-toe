// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main');
goog.require('cljs.core');
goog.require('reagent.dom.client');
goog.require('c3kit.wire.js');
goog.require('tic_tac_toe.html');
goog.require('tic_tac_toe.game_setup');
tic_tac_toe.main.__GT_inspect = (function tic_tac_toe$main$__GT_inspect(x){
return cljs.core.prn.call(null,"inspect -> ",x);
});
tic_tac_toe.main.app = (function tic_tac_toe$main$app(){
var screen__$1 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.game_setup.state));
var G__14738 = screen__$1;
var G__14738__$1 = (((G__14738 instanceof cljs.core.Keyword))?G__14738.fqn:null);
switch (G__14738__$1) {
case "select-game-mode":
return tic_tac_toe.html.select_game_mode;

break;
case "select-board":
return tic_tac_toe.html.select_board;

break;
case "select-difficulty":
return tic_tac_toe.html.select_difficulty;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14738__$1)].join('')));

}
});
tic_tac_toe.main.main = (function tic_tac_toe$main$main(){
return reagent.dom.client.render.call(null,reagent.dom.client.create_root.call(null,c3kit.wire.js.element_by_id.call(null,"app")),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});
goog.exportSymbol('tic_tac_toe.main.main', tic_tac_toe.main.main);

//# sourceMappingURL=main.js.map
