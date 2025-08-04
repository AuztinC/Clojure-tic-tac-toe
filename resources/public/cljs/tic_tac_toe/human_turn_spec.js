// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.human_turn_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.human_turn');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.printer');
speclj.core.describe.call(null,"human-turn",speclj.core.with_stubs.call(null),speclj.core.it.call(null,"oops bad move",speclj.core.should_EQ_.call(null,"oops bad move, try again\n",(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16440_16490 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16441_16491 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16442_16492 = true;
var _STAR_print_fn_STAR__temp_val__16443_16493 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16442_16492);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16443_16493);

try{tic_tac_toe.printer.print_bad_move.call(null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16441_16491);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16440_16490);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})())),speclj.core.it.call(null,"print player prompt",(function (){var marker = "X";
return speclj.core.should_EQ_.call(null,["Player ",marker,", enter your move:\n"].join(''),(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16444_16494 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16445_16495 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16446_16496 = true;
var _STAR_print_fn_STAR__temp_val__16447_16497 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16446_16496);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16447_16497);

try{tic_tac_toe.printer.print_player_prompt.call(null,marker);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16445_16495);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16444_16494);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})());
})()),speclj.core.context.call(null,"cli",speclj.core.it.call(null,"invoke 'bad-move' for bad input",(function (){var bad_move_orig_val__16448 = tic_tac_toe.human_turn.bad_move;
var bad_move_temp_val__16449 = speclj.core.stub.call(null,new cljs.core.Keyword(null,"bad-move","bad-move",1605601357));
(tic_tac_toe.human_turn.bad_move = bad_move_temp_val__16449);

try{var sb__5670__auto___16498 = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16450_16502 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16451_16503 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16452_16504 = true;
var _STAR_print_fn_STAR__temp_val__16453_16505 = (function (x__5671__auto__){
return sb__5670__auto___16498.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16452_16504);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16453_16505);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"f\n",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16451_16503);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16450_16502);
}
cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto___16498);

var sb__5670__auto___16507 = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16459_16508 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16460_16509 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16461_16510 = true;
var _STAR_print_fn_STAR__temp_val__16462_16511 = (function (x__5671__auto__){
return sb__5670__auto___16507.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16461_16510);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16462_16511);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9\n",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16460_16509);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16459_16508);
}
cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto___16507);

return speclj.core.should_have_invoked.call(null,new cljs.core.Keyword(null,"bad-move","bad-move",1605601357));
}finally {(tic_tac_toe.human_turn.bad_move = bad_move_orig_val__16448);
}})()),speclj.core.it.call(null,"prints message to retry",(function (){var print_bad_move_orig_val__16463 = tic_tac_toe.printer.print_bad_move;
var print_bad_move_temp_val__16464 = (function() { 
var G__16512__delegate = function (_){
return cljs.core.println.call(null,"oops");
};
var G__16512 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__16513__i = 0, G__16513__a = new Array(arguments.length -  0);
while (G__16513__i < G__16513__a.length) {G__16513__a[G__16513__i] = arguments[G__16513__i + 0]; ++G__16513__i;}
  _ = new cljs.core.IndexedSeq(G__16513__a,0,null);
} 
return G__16512__delegate.call(this,_);};
G__16512.cljs$lang$maxFixedArity = 0;
G__16512.cljs$lang$applyTo = (function (arglist__16514){
var _ = cljs.core.seq(arglist__16514);
return G__16512__delegate(_);
});
G__16512.cljs$core$IFn$_invoke$arity$variadic = G__16512__delegate;
return G__16512;
})()
;
(tic_tac_toe.printer.print_bad_move = print_bad_move_temp_val__16464);

try{return speclj.core.should_contain.call(null,"oops",(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16465_16515 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16466_16516 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16467_16517 = true;
var _STAR_print_fn_STAR__temp_val__16468_16518 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16467_16517);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16468_16518);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9\n2",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16466_16516);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16465_16515);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})());
}finally {(tic_tac_toe.printer.print_bad_move = print_bad_move_orig_val__16463);
}})()),speclj.core.it.call(null,"prints board to retry",(function (){var display_board_orig_val__16469 = tic_tac_toe.printer.display_board;
var display_board_temp_val__16470 = (function() { 
var G__16519__delegate = function (_){
return cljs.core.println.call(null,"board");
};
var G__16519 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__16520__i = 0, G__16520__a = new Array(arguments.length -  0);
while (G__16520__i < G__16520__a.length) {G__16520__a[G__16520__i] = arguments[G__16520__i + 0]; ++G__16520__i;}
  _ = new cljs.core.IndexedSeq(G__16520__a,0,null);
} 
return G__16519__delegate.call(this,_);};
G__16519.cljs$lang$maxFixedArity = 0;
G__16519.cljs$lang$applyTo = (function (arglist__16521){
var _ = cljs.core.seq(arglist__16521);
return G__16519__delegate(_);
});
G__16519.cljs$core$IFn$_invoke$arity$variadic = G__16519__delegate;
return G__16519;
})()
;
(tic_tac_toe.printer.display_board = display_board_temp_val__16470);

try{return speclj.core.should_contain.call(null,"board",(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16471_16526 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16472_16527 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16473_16528 = true;
var _STAR_print_fn_STAR__temp_val__16474_16529 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16473_16528);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16474_16529);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9\n2",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16472_16527);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16471_16526);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})());
}finally {(tic_tac_toe.printer.display_board = display_board_orig_val__16469);
}})()),speclj.core.it.call(null,"invokes human-turn again",(function (){var human_turn_orig_val__16480 = tic_tac_toe.human_turn.human_turn;
var human_turn_temp_val__16481 = speclj.core.stub.call(null,new cljs.core.Keyword(null,"human-turn","human-turn",979790362));
(tic_tac_toe.human_turn.human_turn = human_turn_temp_val__16481);

try{var sb__5670__auto___16531 = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16482_16532 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16483_16533 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16484_16534 = true;
var _STAR_print_fn_STAR__temp_val__16485_16535 = (function (x__5671__auto__){
return sb__5670__auto___16531.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16484_16534);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16485_16535);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16483_16533);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16482_16532);
}
cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto___16531);

return speclj.core.should_have_invoked.call(null,new cljs.core.Keyword(null,"human-turn","human-turn",979790362));
}finally {(tic_tac_toe.human_turn.human_turn = human_turn_orig_val__16480);
}})())),speclj.core.context.call(null,"next position",speclj.core.redefs_around.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.human_turn_spec.read_line,(function (){
return "1";
})], null)),(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16486_16540 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16487_16541 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16488_16542 = true;
var _STAR_print_fn_STAR__temp_val__16489_16543 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16488_16542);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16489_16543);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"1",speclj.core.it.call(null,"invokes next position cli",speclj.core.should_EQ_.call(null,(1),tic_tac_toe.game.next_position.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"cli","cli",-207918086),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null)))));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16487_16541);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16486_16540);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})(),speclj.core.it.call(null,"invokes apply-next-move gui",(function (){var out = tic_tac_toe.game.next_position.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"choice","choice",-1375170727),(0),new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null));
speclj.core.should_EQ_.call(null,"p2",new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(out));

return speclj.core.should_EQ_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)], null),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(out));
})())));

//# sourceMappingURL=human_turn_spec.js.map
