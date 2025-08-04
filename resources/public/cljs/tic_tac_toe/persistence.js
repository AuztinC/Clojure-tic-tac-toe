// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.persistence');
goog.require('cljs.core');
goog.require('tic_tac_toe.board');
tic_tac_toe.persistence.next_player = (function tic_tac_toe$persistence$next_player(moves){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,moves)),"X")){
return "p2";
} else {
return "p1";
}
});
tic_tac_toe.persistence.play_board = (function tic_tac_toe$persistence$play_board(game,moves){
return cljs.core.reduce.call(null,(function (acc,move){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(move),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(move)], null));
}),tic_tac_toe.board.get_board.call(null,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(game))),moves);
});
tic_tac_toe.persistence.file__GT_state = (function tic_tac_toe$persistence$file__GT_state(p__7044){
var map__7045 = p__7044;
var map__7045__$1 = cljs.core.__destructure_map.call(null,map__7045);
var _game = map__7045__$1;
var state = cljs.core.get.call(null,map__7045__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var moves = cljs.core.get.call(null,map__7045__$1,new cljs.core.Keyword(null,"moves","moves",927465255));
return cljs.core.merge.call(null,state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.persistence.play_board.call(null,state,moves),new cljs.core.Keyword(null,"turn","turn",75759344),tic_tac_toe.persistence.next_player.call(null,moves),new cljs.core.Keyword(null,"moves","moves",927465255),moves,new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));
});
tic_tac_toe.persistence.mem_db = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.persistence !== 'undefined') && (typeof tic_tac_toe.persistence.set_new_game_id !== 'undefined')){
} else {
tic_tac_toe.persistence.set_new_game_id = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.persistence","set-new-game-id"),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.persistence.set_new_game_id,new cljs.core.Keyword(null,"mem","mem",-1804286459),(function (_store){
return (cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.second.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,tic_tac_toe.persistence.mem_db))),new cljs.core.Keyword(null,"state","state",-1988618099)),new cljs.core.Keyword(null,"id","id",-1388402092),(-1)) + (1));
}));
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.persistence !== 'undefined') && (typeof tic_tac_toe.persistence.find_game_by_id !== 'undefined')){
} else {
tic_tac_toe.persistence.find_game_by_id = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.persistence","find-game-by-id"),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.persistence.find_game_by_id,new cljs.core.Keyword(null,"mem","mem",-1804286459),(function (_store,id){
var previous_games = cljs.core.deref.call(null,tic_tac_toe.persistence.mem_db);
var game = cljs.core.get.call(null,previous_games,id);
if(cljs.core.truth_(game)){
return cljs.core.assoc.call(null,tic_tac_toe.persistence.file__GT_state.call(null,game),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"mem","mem",-1804286459));
} else {
return null;
}
}));
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.persistence !== 'undefined') && (typeof tic_tac_toe.persistence.update_current_game_BANG_ !== 'undefined')){
} else {
tic_tac_toe.persistence.update_current_game_BANG_ = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.persistence","update-current-game!"),(function (state,_move){
return new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(state);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
tic_tac_toe.persistence.init_new_game = (function tic_tac_toe$persistence$init_new_game(games,state,move){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.persistence.mem_db,cljs.core.assoc.call(null,games,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"store","store",1512230022)),new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.first.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state),move)),new cljs.core.Keyword(null,"position","position",-2011731912),move], null)], null)], null)));
});
tic_tac_toe.persistence.update_game = (function tic_tac_toe$persistence$update_game(current_game,state,move,games){
var updated_game = cljs.core.update.call(null,current_game,new cljs.core.Keyword(null,"moves","moves",927465255),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.first.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state),move)),new cljs.core.Keyword(null,"position","position",-2011731912),move], null));
return cljs.core.reset_BANG_.call(null,tic_tac_toe.persistence.mem_db,cljs.core.assoc.call(null,games,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(state),updated_game));
});
cljs.core._add_method.call(null,tic_tac_toe.persistence.update_current_game_BANG_,new cljs.core.Keyword(null,"mem","mem",-1804286459),(function (state,move){
var games = cljs.core.deref.call(null,tic_tac_toe.persistence.mem_db);
var current_game = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__7074_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__7074_SHARP_))),true);
}),games)));
var winner_QMARK_ = tic_tac_toe.board.check_winner.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state),move,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state),move))], null)));
if((current_game == null)){
return tic_tac_toe.persistence.init_new_game.call(null,games,state,move);
} else {
if(cljs.core.truth_(winner_QMARK_)){
return tic_tac_toe.persistence.update_game.call(null,cljs.core.assoc_in.call(null,current_game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"active-game","active-game",1509290572)], null),false),state,move,games);
} else {
return tic_tac_toe.persistence.update_game.call(null,current_game,state,move,games);
}
}
}));
cljs.core._add_method.call(null,tic_tac_toe.persistence.update_current_game_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state,_move){
return tic_tac_toe.persistence.update_current_game_BANG_.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"mem","mem",-1804286459)),(0));
}));
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.persistence !== 'undefined') && (typeof tic_tac_toe.persistence.in_progress_QMARK_ !== 'undefined')){
} else {
tic_tac_toe.persistence.in_progress_QMARK_ = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.persistence","in-progress?"),(function (state){
return new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(state);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.persistence.in_progress_QMARK_,new cljs.core.Keyword(null,"mem","mem",-1804286459),(function (_state){
var games = cljs.core.deref.call(null,tic_tac_toe.persistence.mem_db);
var current_id = new cljs.core.Keyword(null,"current-game-id","current-game-id",944092117).cljs$core$IFn$_invoke$arity$1(games);
var game = cljs.core.get.call(null,games,current_id);
var board = tic_tac_toe.persistence.play_board.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(game));
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not.call(null,tic_tac_toe.board.check_winner.call(null,board));
if(and__5023__auto__){
return games;
} else {
return and__5023__auto__;
}
})())){
return tic_tac_toe.persistence.file__GT_state.call(null,game);
} else {
return null;
}
}));
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.persistence !== 'undefined') && (typeof tic_tac_toe.persistence.previous_games_QMARK_ !== 'undefined')){
} else {
tic_tac_toe.persistence.previous_games_QMARK_ = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.persistence","previous-games?"),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.persistence.previous_games_QMARK_,new cljs.core.Keyword(null,"mem","mem",-1804286459),(function (_store){
var temp__5823__auto__ = cljs.core.deref.call(null,tic_tac_toe.persistence.mem_db);
if(cljs.core.truth_(temp__5823__auto__)){
var games = temp__5823__auto__;
return cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,tic_tac_toe.board.check_winner,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core.map.call(null,(function (p__7139){
var vec__7140 = p__7139;
var _ = cljs.core.nth.call(null,vec__7140,(0),null);
var map__7143 = cljs.core.nth.call(null,vec__7140,(1),null);
var map__7143__$1 = cljs.core.__destructure_map.call(null,map__7143);
var state = cljs.core.get.call(null,map__7143__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var moves = cljs.core.get.call(null,map__7143__$1,new cljs.core.Keyword(null,"moves","moves",927465255));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.persistence.play_board.call(null,state,moves));
}),games)));
} else {
return false;
}
}));
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.persistence !== 'undefined') && (typeof tic_tac_toe.persistence.clear_active !== 'undefined')){
} else {
tic_tac_toe.persistence.clear_active = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.persistence","clear-active"),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.persistence.clear_active,new cljs.core.Keyword(null,"mem","mem",-1804286459),(function (_store){
var temp__5825__auto__ = cljs.core.deref.call(null,tic_tac_toe.persistence.mem_db);
if(cljs.core.truth_(temp__5825__auto__)){
var games = temp__5825__auto__;
var temp__5823__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__7152){
var vec__7157 = p__7152;
var _ = cljs.core.nth.call(null,vec__7157,(0),null);
var g = cljs.core.nth.call(null,vec__7157,(1),null);
return cljs.core.get_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"active","active",1895962068)], null));
}),games));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__7163 = temp__5823__auto__;
var id = cljs.core.nth.call(null,vec__7163,(0),null);
var game = cljs.core.nth.call(null,vec__7163,(1),null);
var updated_game = cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"active","active",1895962068),false));
return cljs.core.reset_BANG_.call(null,tic_tac_toe.persistence.mem_db,cljs.core.assoc.call(null,games,id,updated_game));
} else {
return null;
}
} else {
return null;
}
}));

//# sourceMappingURL=persistence.js.map
