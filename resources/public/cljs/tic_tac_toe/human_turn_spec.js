// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.human_turn_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.human_turn');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.printer');
speclj.core.describe.call(null,"human-turn",speclj.core.with_stubs.call(null),speclj.core.it.call(null,"oops bad move",speclj.core.should_EQ_.call(null,"oops bad move, try again\n",(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16455_16546 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16456_16547 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16457_16548 = true;
var _STAR_print_fn_STAR__temp_val__16458_16549 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16457_16548);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16458_16549);

try{tic_tac_toe.printer.print_bad_move.call(null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16456_16547);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16455_16546);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})())),speclj.core.it.call(null,"print player prompt",(function (){var marker = "X";
return speclj.core.should_EQ_.call(null,["Player ",marker,", enter your move:\n"].join(''),(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16459_16554 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16460_16555 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16461_16556 = true;
var _STAR_print_fn_STAR__temp_val__16462_16557 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16461_16556);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16462_16557);

try{tic_tac_toe.printer.print_player_prompt.call(null,marker);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16460_16555);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16459_16554);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})());
})()),speclj.core.context.call(null,"cli",speclj.core.it.call(null,"invoke 'bad-move' for bad input",(function (){var bad_move_orig_val__16463 = tic_tac_toe.human_turn.bad_move;
var bad_move_temp_val__16464 = speclj.core.stub.call(null,new cljs.core.Keyword(null,"bad-move","bad-move",1605601357));
(tic_tac_toe.human_turn.bad_move = bad_move_temp_val__16464);

try{var sb__5670__auto___16559 = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16469_16560 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16470_16561 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16471_16562 = true;
var _STAR_print_fn_STAR__temp_val__16472_16563 = (function (x__5671__auto__){
return sb__5670__auto___16559.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16471_16562);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16472_16563);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"f\n",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16470_16561);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16469_16560);
}
cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto___16559);

var sb__5670__auto___16572 = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16480_16573 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16481_16574 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16482_16575 = true;
var _STAR_print_fn_STAR__temp_val__16483_16576 = (function (x__5671__auto__){
return sb__5670__auto___16572.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16482_16575);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16483_16576);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9\n",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16481_16574);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16480_16573);
}
cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto___16572);

return speclj.core.should_have_invoked.call(null,new cljs.core.Keyword(null,"bad-move","bad-move",1605601357));
}finally {(tic_tac_toe.human_turn.bad_move = bad_move_orig_val__16463);
}})()),speclj.core.it.call(null,"prints message to retry",(function (){var print_bad_move_orig_val__16484 = tic_tac_toe.printer.print_bad_move;
var print_bad_move_temp_val__16485 = (function() { 
var G__16581__delegate = function (_){
return cljs.core.println.call(null,"oops");
};
var G__16581 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__16582__i = 0, G__16582__a = new Array(arguments.length -  0);
while (G__16582__i < G__16582__a.length) {G__16582__a[G__16582__i] = arguments[G__16582__i + 0]; ++G__16582__i;}
  _ = new cljs.core.IndexedSeq(G__16582__a,0,null);
} 
return G__16581__delegate.call(this,_);};
G__16581.cljs$lang$maxFixedArity = 0;
G__16581.cljs$lang$applyTo = (function (arglist__16583){
var _ = cljs.core.seq(arglist__16583);
return G__16581__delegate(_);
});
G__16581.cljs$core$IFn$_invoke$arity$variadic = G__16581__delegate;
return G__16581;
})()
;
(tic_tac_toe.printer.print_bad_move = print_bad_move_temp_val__16485);

try{return speclj.core.should_contain.call(null,"oops",(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16486_16584 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16487_16585 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16488_16586 = true;
var _STAR_print_fn_STAR__temp_val__16489_16587 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16488_16586);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16489_16587);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9\n2",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16487_16585);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16486_16584);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})());
}finally {(tic_tac_toe.printer.print_bad_move = print_bad_move_orig_val__16484);
}})()),speclj.core.it.call(null,"prints board to retry",(function (){var display_board_orig_val__16496 = tic_tac_toe.printer.display_board;
var display_board_temp_val__16497 = (function() { 
var G__16588__delegate = function (_){
return cljs.core.println.call(null,"board");
};
var G__16588 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__16589__i = 0, G__16589__a = new Array(arguments.length -  0);
while (G__16589__i < G__16589__a.length) {G__16589__a[G__16589__i] = arguments[G__16589__i + 0]; ++G__16589__i;}
  _ = new cljs.core.IndexedSeq(G__16589__a,0,null);
} 
return G__16588__delegate.call(this,_);};
G__16588.cljs$lang$maxFixedArity = 0;
G__16588.cljs$lang$applyTo = (function (arglist__16593){
var _ = cljs.core.seq(arglist__16593);
return G__16588__delegate(_);
});
G__16588.cljs$core$IFn$_invoke$arity$variadic = G__16588__delegate;
return G__16588;
})()
;
(tic_tac_toe.printer.display_board = display_board_temp_val__16497);

try{return speclj.core.should_contain.call(null,"board",(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16504_16594 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16505_16595 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16506_16596 = true;
var _STAR_print_fn_STAR__temp_val__16507_16597 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16506_16596);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16507_16597);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9\n2",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16505_16595);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16504_16594);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})());
}finally {(tic_tac_toe.printer.display_board = display_board_orig_val__16496);
}})()),speclj.core.it.call(null,"invokes human-turn again",(function (){var human_turn_orig_val__16517 = tic_tac_toe.human_turn.human_turn;
var human_turn_temp_val__16518 = speclj.core.stub.call(null,new cljs.core.Keyword(null,"human-turn","human-turn",979790362));
(tic_tac_toe.human_turn.human_turn = human_turn_temp_val__16518);

try{var sb__5670__auto___16602 = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16522_16606 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16523_16607 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16524_16608 = true;
var _STAR_print_fn_STAR__temp_val__16525_16609 = (function (x__5671__auto__){
return sb__5670__auto___16602.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16524_16608);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16525_16609);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16523_16607);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16522_16606);
}
cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto___16602);

return speclj.core.should_have_invoked.call(null,new cljs.core.Keyword(null,"human-turn","human-turn",979790362));
}finally {(tic_tac_toe.human_turn.human_turn = human_turn_orig_val__16517);
}})())),speclj.core.context.call(null,"next position",speclj.core.redefs_around.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.human_turn_spec.read_line,(function (){
return "1";
})], null)),(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16537_16610 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16538_16611 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16539_16612 = true;
var _STAR_print_fn_STAR__temp_val__16540_16613 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16539_16612);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16540_16613);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"1",speclj.core.it.call(null,"invokes next position cli",speclj.core.should_EQ_.call(null,(1),tic_tac_toe.game.next_position.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"cli","cli",-207918086),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null)))));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16538_16611);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16537_16610);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})(),speclj.core.it.call(null,"invokes apply-next-move gui",(function (){var out = tic_tac_toe.game.next_position.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"choice","choice",-1375170727),(0),new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null));
speclj.core.should_EQ_.call(null,"p2",new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(out));

return speclj.core.should_EQ_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)], null),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(out));
})())));

//# sourceMappingURL=human_turn_spec.js.map
