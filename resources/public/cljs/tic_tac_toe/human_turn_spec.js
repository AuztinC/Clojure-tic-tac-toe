// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.human_turn_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.human_turn');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.printer');
speclj.core.describe.call(null,"human-turn",speclj.core.with_stubs.call(null),speclj.core.it.call(null,"oops bad move",speclj.core.should_EQ_.call(null,"oops bad move, try again\n",(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16509_16677 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16510_16678 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16511_16679 = true;
var _STAR_print_fn_STAR__temp_val__16512_16680 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16511_16679);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16512_16680);

try{tic_tac_toe.printer.print_bad_move.call(null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16510_16678);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16509_16677);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})())),speclj.core.it.call(null,"print player prompt",(function (){var marker = "X";
return speclj.core.should_EQ_.call(null,["Player ",marker,", enter your move:\n"].join(''),(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16520_16682 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16521_16683 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16522_16684 = true;
var _STAR_print_fn_STAR__temp_val__16523_16685 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16522_16684);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16523_16685);

try{tic_tac_toe.printer.print_player_prompt.call(null,marker);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16521_16683);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16520_16682);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})());
})()),speclj.core.context.call(null,"cli",speclj.core.it.call(null,"invoke 'bad-move' for bad input",(function (){var bad_move_orig_val__16526 = tic_tac_toe.human_turn.bad_move;
var bad_move_temp_val__16527 = speclj.core.stub.call(null,new cljs.core.Keyword(null,"bad-move","bad-move",1605601357));
(tic_tac_toe.human_turn.bad_move = bad_move_temp_val__16527);

try{var sb__5670__auto___16689 = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16539_16690 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16540_16691 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16541_16692 = true;
var _STAR_print_fn_STAR__temp_val__16542_16693 = (function (x__5671__auto__){
return sb__5670__auto___16689.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16541_16692);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16542_16693);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"f\n",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16540_16691);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16539_16690);
}
cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto___16689);

var sb__5670__auto___16695 = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16570_16696 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16571_16697 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16572_16698 = true;
var _STAR_print_fn_STAR__temp_val__16573_16699 = (function (x__5671__auto__){
return sb__5670__auto___16695.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16572_16698);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16573_16699);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9\n",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16571_16697);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16570_16696);
}
cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto___16695);

return speclj.core.should_have_invoked.call(null,new cljs.core.Keyword(null,"bad-move","bad-move",1605601357));
}finally {(tic_tac_toe.human_turn.bad_move = bad_move_orig_val__16526);
}})()),speclj.core.it.call(null,"prints message to retry",(function (){var print_bad_move_orig_val__16602 = tic_tac_toe.printer.print_bad_move;
var print_bad_move_temp_val__16603 = (function() { 
var G__16708__delegate = function (_){
return cljs.core.println.call(null,"oops");
};
var G__16708 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__16713__i = 0, G__16713__a = new Array(arguments.length -  0);
while (G__16713__i < G__16713__a.length) {G__16713__a[G__16713__i] = arguments[G__16713__i + 0]; ++G__16713__i;}
  _ = new cljs.core.IndexedSeq(G__16713__a,0,null);
} 
return G__16708__delegate.call(this,_);};
G__16708.cljs$lang$maxFixedArity = 0;
G__16708.cljs$lang$applyTo = (function (arglist__16715){
var _ = cljs.core.seq(arglist__16715);
return G__16708__delegate(_);
});
G__16708.cljs$core$IFn$_invoke$arity$variadic = G__16708__delegate;
return G__16708;
})()
;
(tic_tac_toe.printer.print_bad_move = print_bad_move_temp_val__16603);

try{return speclj.core.should_contain.call(null,"oops",(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16606_16718 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16607_16719 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16608_16720 = true;
var _STAR_print_fn_STAR__temp_val__16609_16721 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16608_16720);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16609_16721);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9\n2",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16607_16719);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16606_16718);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})());
}finally {(tic_tac_toe.printer.print_bad_move = print_bad_move_orig_val__16602);
}})()),speclj.core.it.call(null,"prints board to retry",(function (){var display_board_orig_val__16614 = tic_tac_toe.printer.display_board;
var display_board_temp_val__16615 = (function() { 
var G__16723__delegate = function (_){
return cljs.core.println.call(null,"board");
};
var G__16723 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__16724__i = 0, G__16724__a = new Array(arguments.length -  0);
while (G__16724__i < G__16724__a.length) {G__16724__a[G__16724__i] = arguments[G__16724__i + 0]; ++G__16724__i;}
  _ = new cljs.core.IndexedSeq(G__16724__a,0,null);
} 
return G__16723__delegate.call(this,_);};
G__16723.cljs$lang$maxFixedArity = 0;
G__16723.cljs$lang$applyTo = (function (arglist__16725){
var _ = cljs.core.seq(arglist__16725);
return G__16723__delegate(_);
});
G__16723.cljs$core$IFn$_invoke$arity$variadic = G__16723__delegate;
return G__16723;
})()
;
(tic_tac_toe.printer.display_board = display_board_temp_val__16615);

try{return speclj.core.should_contain.call(null,"board",(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16619_16726 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16620_16727 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16621_16728 = true;
var _STAR_print_fn_STAR__temp_val__16622_16729 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16621_16728);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16622_16729);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9\n2",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16620_16727);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16619_16726);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})());
}finally {(tic_tac_toe.printer.display_board = display_board_orig_val__16614);
}})()),speclj.core.it.call(null,"invokes human-turn again",(function (){var human_turn_orig_val__16623 = tic_tac_toe.human_turn.human_turn;
var human_turn_temp_val__16624 = speclj.core.stub.call(null,new cljs.core.Keyword(null,"human-turn","human-turn",979790362));
(tic_tac_toe.human_turn.human_turn = human_turn_temp_val__16624);

try{var sb__5670__auto___16730 = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16625_16731 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16626_16732 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16627_16733 = true;
var _STAR_print_fn_STAR__temp_val__16628_16734 = (function (x__5671__auto__){
return sb__5670__auto___16730.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16627_16733);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16628_16734);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16626_16732);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16625_16731);
}
cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto___16730);

return speclj.core.should_have_invoked.call(null,new cljs.core.Keyword(null,"human-turn","human-turn",979790362));
}finally {(tic_tac_toe.human_turn.human_turn = human_turn_orig_val__16623);
}})())),speclj.core.context.call(null,"next position",speclj.core.redefs_around.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.human_turn_spec.read_line,(function (){
return "1";
})], null)),(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16633_16740 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16634_16741 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16635_16742 = true;
var _STAR_print_fn_STAR__temp_val__16636_16745 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16635_16742);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16636_16745);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"1",speclj.core.it.call(null,"invokes next position cli",speclj.core.should_EQ_.call(null,(1),tic_tac_toe.game.next_position.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"cli","cli",-207918086),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null)))));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16634_16741);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16633_16740);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})(),speclj.core.it.call(null,"invokes apply-next-move gui",(function (){var out = tic_tac_toe.game.next_position.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"choice","choice",-1375170727),(0),new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null));
speclj.core.should_EQ_.call(null,"p2",new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(out));

return speclj.core.should_EQ_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)], null),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(out));
})())));

//# sourceMappingURL=human_turn_spec.js.map
