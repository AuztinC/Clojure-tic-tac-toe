// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.human_turn');
goog.require('cljs.core');
goog.require('tic_tac_toe.printer');
goog.require('tic_tac_toe.persistence');
goog.require('tic_tac_toe.game');
tic_tac_toe.human_turn.empty_space_QMARK_ = (function tic_tac_toe$human_turn$empty_space_QMARK_(board,move){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),cljs.core.get.call(null,board,move));
});
tic_tac_toe.human_turn.apply_human_move = (function tic_tac_toe$human_turn$apply_human_move(p__16021,idx){
var map__16022 = p__16021;
var map__16022__$1 = cljs.core.__destructure_map.call(null,map__16022);
var state = map__16022__$1;
var board = cljs.core.get.call(null,map__16022__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var turn = cljs.core.get.call(null,map__16022__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var markers = cljs.core.get.call(null,map__16022__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));
var marker = ((cljs.core._EQ_.call(null,turn,"p1"))?cljs.core.first.call(null,markers):cljs.core.second.call(null,markers));
if((((!((idx == null)))) && (tic_tac_toe.human_turn.empty_space_QMARK_.call(null,board,idx)))){
var updated_board = cljs.core.assoc.call(null,board,idx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker], null));
var updated_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),updated_board,new cljs.core.Keyword(null,"turn","turn",75759344),tic_tac_toe.game.next_player.call(null,turn));
tic_tac_toe.persistence.update_current_game_BANG_.call(null,updated_state,idx);

return updated_state;
} else {
return state;
}
});
tic_tac_toe.human_turn.bad_move = (function tic_tac_toe$human_turn$bad_move(board,marker){
tic_tac_toe.printer.print_bad_move.call(null);

tic_tac_toe.printer.display_board.call(null,board);

return tic_tac_toe.human_turn.human_turn.call(null,board,marker);
});
tic_tac_toe.human_turn.human_turn = (function tic_tac_toe$human_turn$human_turn(board,marker){
tic_tac_toe.printer.print_player_prompt.call(null,marker);

var input = tic_tac_toe.human_turn.read_line.call(null);
var move = (cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,input))?Integer.parseInt(input):null);
if(tic_tac_toe.human_turn.empty_space_QMARK_.call(null,board,move)){
return move;
} else {
return tic_tac_toe.human_turn.bad_move.call(null,board,marker);
}
});
cljs.core._add_method.call(null,tic_tac_toe.game.next_position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"cli","cli",-207918086)], null),(function (p__16038,p__16039,_){
var map__16040 = p__16038;
var map__16040__$1 = cljs.core.__destructure_map.call(null,map__16040);
var _state = map__16040__$1;
var board = cljs.core.get.call(null,map__16040__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var vec__16041 = p__16039;
var marker = cljs.core.nth.call(null,vec__16041,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16041,(1),null);
var move = tic_tac_toe.human_turn.human_turn.call(null,board,marker);
return move;
}));
cljs.core._add_method.call(null,tic_tac_toe.game.next_position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180)], null),(function (p__16044,p__16045,_){
var map__16046 = p__16044;
var map__16046__$1 = cljs.core.__destructure_map.call(null,map__16046);
var state = map__16046__$1;
var choice = cljs.core.get.call(null,map__16046__$1,new cljs.core.Keyword(null,"choice","choice",-1375170727));
var vec__16047 = p__16045;
var marker = cljs.core.nth.call(null,vec__16047,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16047,(1),null);
return tic_tac_toe.human_turn.apply_human_move.call(null,state,choice);
}));

//# sourceMappingURL=human_turn.js.map
