// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.ai_turn');
goog.require('cljs.core');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
tic_tac_toe.ai_turn.score_minimax_result = (function tic_tac_toe$ai_turn$score_minimax_result(result,depth,marker){
if(cljs.core._EQ_.call(null,result,marker)){
return ((10) - depth);
} else {
if(cljs.core._EQ_.call(null,result,"tie")){
return (0);
} else {
return (depth + (-10));

}
}
});
tic_tac_toe.ai_turn.minimax = (function tic_tac_toe$ai_turn$minimax(board,maximizing_QMARK_,depth,ai_marker,ai_best,p2_best){
var p1_marker = ai_marker;
var p2_marker = ((cljs.core._EQ_.call(null,"O",p1_marker))?"X":"O");
var spec = new cljs.core.PersistentArrayMap(null, 2, [true,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"extrema-fn","extrema-fn",-1434745175),cljs.core.max,new cljs.core.Keyword(null,"extreme","extreme",-253354207),-Infinity,new cljs.core.Keyword(null,"current-marker","current-marker",698926429),p1_marker], null),false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"extrema-fn","extrema-fn",-1434745175),cljs.core.min,new cljs.core.Keyword(null,"extreme","extreme",-253354207),Infinity,new cljs.core.Keyword(null,"current-marker","current-marker",698926429),p2_marker], null)], null);
var map__7569 = spec.call(null,maximizing_QMARK_);
var map__7569__$1 = cljs.core.__destructure_map.call(null,map__7569);
var extrema_fn = cljs.core.get.call(null,map__7569__$1,new cljs.core.Keyword(null,"extrema-fn","extrema-fn",-1434745175));
var extreme = cljs.core.get.call(null,map__7569__$1,new cljs.core.Keyword(null,"extreme","extreme",-253354207));
var current_marker = cljs.core.get.call(null,map__7569__$1,new cljs.core.Keyword(null,"current-marker","current-marker",698926429));
var temp__5823__auto__ = tic_tac_toe.board.check_winner.call(null,board);
if(cljs.core.truth_(temp__5823__auto__)){
var result = temp__5823__auto__;
return tic_tac_toe.ai_turn.score_minimax_result.call(null,result,depth,current_marker);
} else {
var open_positions = tic_tac_toe.board.open_positions.call(null,board);
var best_score = extreme;
var ai_best__$1 = ai_best;
var p2_best__$1 = p2_best;
while(true){
if(cljs.core.empty_QMARK_.call(null,open_positions)){
return best_score;
} else {
var pos = cljs.core.first.call(null,open_positions);
var new_board = cljs.core.assoc.call(null,board,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_marker], null));
var score = tic_tac_toe.ai_turn.score_move.call(null,new_board,cljs.core.not.call(null,maximizing_QMARK_),(depth + (1)),ai_marker,ai_best__$1,p2_best__$1);
var new_best = extrema_fn.call(null,score,best_score);
var new_ai_best = (cljs.core.truth_(maximizing_QMARK_)?(function (){var x__5110__auto__ = ai_best__$1;
var y__5111__auto__ = new_best;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})():ai_best__$1);
var new_p2_best = ((cljs.core.not.call(null,maximizing_QMARK_))?(function (){var x__5113__auto__ = p2_best__$1;
var y__5114__auto__ = new_best;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})():p2_best__$1);
if((new_ai_best >= new_p2_best)){
return new_best;
} else {
var G__7592 = cljs.core.rest.call(null,open_positions);
var G__7593 = new_best;
var G__7594 = new_ai_best;
var G__7595 = new_p2_best;
open_positions = G__7592;
best_score = G__7593;
ai_best__$1 = G__7594;
p2_best__$1 = G__7595;
continue;
}
}
break;
}
}
});
tic_tac_toe.ai_turn.memo_minimax = cljs.core.memoize.call(null,(function (board,maximizing_QMARK_,depth,ai_marker,ai_best,p2_best){
return tic_tac_toe.ai_turn.minimax.call(null,board,maximizing_QMARK_,depth,ai_marker,ai_best,p2_best);
}));
tic_tac_toe.ai_turn.best_early_move = (function tic_tac_toe$ai_turn$best_early_move(board){
var best_moves = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(12),(15),(5),(6),(9),(10)], null);
var filtered_moves = cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__7577_SHARP_){
return cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,cljs.core.get.call(null,board,p1__7577_SHARP_)));
}),best_moves));
var random_best = cljs.core.rand_int.call(null,cljs.core.count.call(null,filtered_moves));
return cljs.core.get.call(null,filtered_moves,random_best);
});
tic_tac_toe.ai_turn.creates_fork_QMARK_ = (function tic_tac_toe$ai_turn$creates_fork_QMARK_(board,marker,pos){
var new_board = cljs.core.assoc.call(null,board,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker], null));
var lines = cljs.core.get.call(null,tic_tac_toe.board.winning_moves,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
var potential_wins = (function (){var iter__5503__auto__ = (function tic_tac_toe$ai_turn$creates_fork_QMARK__$_iter__7588(s__7589){
return (new cljs.core.LazySeq(null,(function (){
var s__7589__$1 = s__7589;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__7589__$1);
if(temp__5825__auto__){
var s__7589__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7589__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__7589__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__7591 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__7590 = (0);
while(true){
if((i__7590 < size__5502__auto__)){
var line = cljs.core._nth.call(null,c__5501__auto__,i__7590);
var vals = cljs.core.map.call(null,((function (i__7590,s__7589__$1,line,c__5501__auto__,size__5502__auto__,b__7591,s__7589__$2,temp__5825__auto__,new_board,lines){
return (function (p1__7582_SHARP_){
return cljs.core.get.call(null,new_board,p1__7582_SHARP_);
});})(i__7590,s__7589__$1,line,c__5501__auto__,size__5502__auto__,b__7591,s__7589__$2,temp__5825__auto__,new_board,lines))
,line);
var freqs = cljs.core.frequencies.call(null,vals);
if(((cljs.core._EQ_.call(null,(2),cljs.core.get.call(null,freqs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker], null),(0)))) && (cljs.core._EQ_.call(null,(1),cljs.core.get.call(null,freqs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),(0)))))){
cljs.core.chunk_append.call(null,b__7591,cljs.core.first.call(null,cljs.core.filter.call(null,((function (i__7590,s__7589__$1,vals,freqs,line,c__5501__auto__,size__5502__auto__,b__7591,s__7589__$2,temp__5825__auto__,new_board,lines){
return (function (p1__7583_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,new_board,p1__7583_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null));
});})(i__7590,s__7589__$1,vals,freqs,line,c__5501__auto__,size__5502__auto__,b__7591,s__7589__$2,temp__5825__auto__,new_board,lines))
,line)));

var G__7602 = (i__7590 + (1));
i__7590 = G__7602;
continue;
} else {
var G__7605 = (i__7590 + (1));
i__7590 = G__7605;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7591),tic_tac_toe$ai_turn$creates_fork_QMARK__$_iter__7588.call(null,cljs.core.chunk_rest.call(null,s__7589__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7591),null);
}
} else {
var line = cljs.core.first.call(null,s__7589__$2);
var vals = cljs.core.map.call(null,((function (s__7589__$1,line,s__7589__$2,temp__5825__auto__,new_board,lines){
return (function (p1__7582_SHARP_){
return cljs.core.get.call(null,new_board,p1__7582_SHARP_);
});})(s__7589__$1,line,s__7589__$2,temp__5825__auto__,new_board,lines))
,line);
var freqs = cljs.core.frequencies.call(null,vals);
if(((cljs.core._EQ_.call(null,(2),cljs.core.get.call(null,freqs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker], null),(0)))) && (cljs.core._EQ_.call(null,(1),cljs.core.get.call(null,freqs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),(0)))))){
return cljs.core.cons.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (s__7589__$1,vals,freqs,line,s__7589__$2,temp__5825__auto__,new_board,lines){
return (function (p1__7583_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,new_board,p1__7583_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null));
});})(s__7589__$1,vals,freqs,line,s__7589__$2,temp__5825__auto__,new_board,lines))
,line)),tic_tac_toe$ai_turn$creates_fork_QMARK__$_iter__7588.call(null,cljs.core.rest.call(null,s__7589__$2)));
} else {
var G__7607 = cljs.core.rest.call(null,s__7589__$2);
s__7589__$1 = G__7607;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,lines);
})();
return (cljs.core.count.call(null,cljs.core.distinct.call(null,potential_wins)) >= (2));
});
tic_tac_toe.ai_turn.best_fork_threats = (function tic_tac_toe$ai_turn$best_fork_threats(board,marker,pos){
var new_board = cljs.core.assoc.call(null,board,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker], null));
var opponent = ((cljs.core._EQ_.call(null,"X",marker))?"O":"X");
var open = tic_tac_toe.board.open_positions.call(null,new_board);
var fork_threats = cljs.core.filter.call(null,(function (p1__7596_SHARP_){
return tic_tac_toe.ai_turn.creates_fork_QMARK_.call(null,cljs.core.assoc.call(null,new_board,p1__7596_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opponent], null)),opponent,p1__7596_SHARP_);
}),open);
return cljs.core.reduce.call(null,(function (acc,threat_pos){
var score = tic_tac_toe.ai_turn.evaluate_lines.call(null,cljs.core.assoc.call(null,new_board,threat_pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opponent], null)),opponent);
if((score > new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(acc))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"score","score",-1963588780),score,new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [threat_pos], null)], null);
} else {
if(cljs.core._EQ_.call(null,score,new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(acc))){
return cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.conj,threat_pos);
} else {
return acc;

}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"score","score",-1963588780),-Infinity,new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.PersistentVector.EMPTY], null),fork_threats);
});
tic_tac_toe.ai_turn.evaluate_lines = (function tic_tac_toe$ai_turn$evaluate_lines(board,marker){
var opponent = ((cljs.core._EQ_.call(null,"X",marker))?"O":"X");
var lines = cljs.core.get.call(null,tic_tac_toe.board.winning_moves,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
var score_line = (function (line){
var vals = cljs.core.map.call(null,(function (p1__7612_SHARP_){
return cljs.core.get.call(null,board,p1__7612_SHARP_);
}),line);
var counts = cljs.core.frequencies.call(null,vals);
var marker_score = cljs.core.get.call(null,counts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker], null),(0));
var opponent_score = cljs.core.get.call(null,counts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opponent], null),(0));
if(cljs.core._EQ_.call(null,(3),marker_score)){
return (1000);
} else {
if(((cljs.core._EQ_.call(null,(2),marker_score)) && (cljs.core._EQ_.call(null,(0),opponent_score)))){
return (100);
} else {
if(((cljs.core._EQ_.call(null,(1),marker_score)) && (cljs.core._EQ_.call(null,(0),opponent_score)))){
return (10);
} else {
if(((cljs.core._EQ_.call(null,(2),opponent_score)) && (cljs.core._EQ_.call(null,(0),marker_score)))){
return (-100);
} else {
if(((cljs.core._EQ_.call(null,(1),opponent_score)) && (cljs.core._EQ_.call(null,(0),marker_score)))){
return (-10);
} else {
return (0);

}
}
}
}
}
});
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__7616_SHARP_){
return score_line.call(null,p1__7616_SHARP_);
}),lines));
});
tic_tac_toe.ai_turn.score_move = (function tic_tac_toe$ai_turn$score_move(board,maximizing_QMARK_,depth,ai_marker,ai_best,p2_best){
var temp__5823__auto__ = tic_tac_toe.board.check_winner.call(null,board);
if(cljs.core.truth_(temp__5823__auto__)){
var result = temp__5823__auto__;
return tic_tac_toe.ai_turn.score_minimax_result.call(null,result,depth,ai_marker);
} else {
if((depth >= (10))){
return tic_tac_toe.ai_turn.evaluate_lines.call(null,board,ai_marker);
} else {
return tic_tac_toe.ai_turn.memo_minimax.call(null,board,maximizing_QMARK_,depth,ai_marker,ai_best,p2_best);
}
}
});
tic_tac_toe.ai_turn.prevent_opponent_fork = (function tic_tac_toe$ai_turn$prevent_opponent_fork(board,marker,opponent){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (pos){
var new_board = cljs.core.assoc.call(null,board,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker], null));
var forks_after_move = cljs.core.filter.call(null,(function (p1__7625_SHARP_){
return tic_tac_toe.ai_turn.creates_fork_QMARK_.call(null,cljs.core.assoc.call(null,new_board,p1__7625_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opponent], null)),opponent,p1__7625_SHARP_);
}),tic_tac_toe.board.open_positions.call(null,new_board));
if(cljs.core.empty_QMARK_.call(null,forks_after_move)){
return pos;
} else {
return null;
}
}),tic_tac_toe.board.open_positions.call(null,board)));
});
tic_tac_toe.ai_turn.immediate_move_QMARK_ = (function tic_tac_toe$ai_turn$immediate_move_QMARK_(board,marker,open){
var opponent = ((cljs.core._EQ_.call(null,"X",marker))?"O":"X");
var winning = cljs.core.some.call(null,(function (pos){
var new_board = cljs.core.assoc.call(null,board,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker], null));
if(cljs.core._EQ_.call(null,marker,tic_tac_toe.board.check_winner.call(null,new_board))){
return pos;
} else {
return null;
}
}),open);
var blocking = cljs.core.some.call(null,(function (pos){
var new_board = cljs.core.assoc.call(null,board,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opponent], null));
if(cljs.core._EQ_.call(null,opponent,tic_tac_toe.board.check_winner.call(null,new_board))){
return pos;
} else {
return null;
}
}),open);
var fork = cljs.core.some.call(null,(function (pos){
return cljs.core.first.call(null,cljs.core.get.call(null,tic_tac_toe.ai_turn.best_fork_threats.call(null,board,marker,pos),new cljs.core.Keyword(null,"positions","positions",-1380538434)));
}),open);
var block_fork = tic_tac_toe.ai_turn.prevent_opponent_fork.call(null,board,marker,opponent);
var or__5025__auto__ = winning;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = blocking;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = fork;
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return block_fork;
}
}
}
});
tic_tac_toe.ai_turn.hard = (function tic_tac_toe$ai_turn$hard(board,marker,open_positions){
var is_3d = cljs.core._EQ_.call(null,(27),cljs.core.count.call(null,board));
var immediate_move = ((cljs.core._EQ_.call(null,(27),cljs.core.count.call(null,open_positions)))?(13):((is_3d)?tic_tac_toe.ai_turn.immediate_move_QMARK_.call(null,board,marker,open_positions):null));
if(cljs.core.truth_((function (){var and__5023__auto__ = immediate_move;
if(cljs.core.truth_(and__5023__auto__)){
return is_3d;
} else {
return and__5023__auto__;
}
})())){
return immediate_move;
} else {
var is_4x4 = cljs.core._EQ_.call(null,(16),cljs.core.count.call(null,board));
var possible_boards = cljs.core.map.call(null,(function (p1__7641_SHARP_){
return cljs.core.assoc.call(null,board,p1__7641_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker], null));
}),open_positions);
var board_scores = cljs.core.map.call(null,(function (p1__7642_SHARP_){
return tic_tac_toe.ai_turn.score_move.call(null,p1__7642_SHARP_,false,(0),marker,-Infinity,Infinity);
}),possible_boards);
var turn_limit = ((is_4x4)?(12):null);
if(((is_4x4) && ((turn_limit <= cljs.core.count.call(null,open_positions))))){
return tic_tac_toe.ai_turn.best_early_move.call(null,board);
} else {
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.sort_by.call(null,cljs.core.second,cljs.core._GT_,cljs.core.zipmap.call(null,open_positions,board_scores))));

}
}
});
tic_tac_toe.ai_turn.easy = (function tic_tac_toe$ai_turn$easy(open){
return cljs.core.rand_nth.call(null,open);
});
tic_tac_toe.ai_turn.medium = (function tic_tac_toe$ai_turn$medium(board,marker,open){
var chance = cljs.core.rand_int.call(null,(2));
if(cljs.core._EQ_.call(null,(0),chance)){
return tic_tac_toe.ai_turn.hard.call(null,board,marker,open);
} else {
if(cljs.core._EQ_.call(null,(1),chance)){
return tic_tac_toe.ai_turn.easy.call(null,open);
} else {
return null;
}
}
});
tic_tac_toe.ai_turn.ai_turn = (function tic_tac_toe$ai_turn$ai_turn(board,marker,difficulty){
var open_positions = tic_tac_toe.board.open_positions.call(null,board);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hard","hard",2068420191),difficulty)){
return tic_tac_toe.ai_turn.hard.call(null,board,marker,open_positions);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"medium","medium",-1864319384),difficulty)){
return tic_tac_toe.ai_turn.medium.call(null,board,marker,open_positions);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"easy","easy",315769928),difficulty)){
return tic_tac_toe.ai_turn.easy.call(null,open_positions);
} else {
return null;
}
}
}
});
tic_tac_toe.ai_turn.sleep = (function tic_tac_toe$ai_turn$sleep(){
return Thread.sleep((500));
});
cljs.core._add_method.call(null,tic_tac_toe.game.next_position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"cli","cli",-207918086)], null),(function (p__7665,p__7666,diff){
var map__7667 = p__7665;
var map__7667__$1 = cljs.core.__destructure_map.call(null,map__7667);
var board = cljs.core.get.call(null,map__7667__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var vec__7668 = p__7666;
var marker = cljs.core.nth.call(null,vec__7668,(0),null);
var _ = cljs.core.nth.call(null,vec__7668,(1),null);
return tic_tac_toe.ai_turn.ai_turn.call(null,board,marker,diff);
}));
cljs.core._add_method.call(null,tic_tac_toe.game.next_position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"gui","gui",604532813)], null),(function (p__7673,p__7674,diff){
var map__7675 = p__7673;
var map__7675__$1 = cljs.core.__destructure_map.call(null,map__7675);
var board = cljs.core.get.call(null,map__7675__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var players = cljs.core.get.call(null,map__7675__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var vec__7676 = p__7674;
var marker = cljs.core.nth.call(null,vec__7676,(0),null);
var _ = cljs.core.nth.call(null,vec__7676,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),players)){
tic_tac_toe.ai_turn.sleep.call(null);
} else {
}

return tic_tac_toe.ai_turn.ai_turn.call(null,board,marker,diff);
}));
cljs.core._add_method.call(null,tic_tac_toe.game.next_position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"web","web",-654701153)], null),(function (p__7680,p__7681,diff){
var map__7682 = p__7680;
var map__7682__$1 = cljs.core.__destructure_map.call(null,map__7682);
var board = cljs.core.get.call(null,map__7682__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var players = cljs.core.get.call(null,map__7682__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var vec__7683 = p__7681;
var marker = cljs.core.nth.call(null,vec__7683,(0),null);
var _ = cljs.core.nth.call(null,vec__7683,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),players)){
tic_tac_toe.ai_turn.sleep.call(null);
} else {
}

return tic_tac_toe.ai_turn.ai_turn.call(null,board,marker,diff);
}));
cljs.core._add_method.call(null,tic_tac_toe.game.next_position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180)], null),(function (p__7690,p__7691,diff){
var map__7692 = p__7690;
var map__7692__$1 = cljs.core.__destructure_map.call(null,map__7692);
var board = cljs.core.get.call(null,map__7692__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var players = cljs.core.get.call(null,map__7692__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var vec__7693 = p__7691;
var marker = cljs.core.nth.call(null,vec__7693,(0),null);
var _ = cljs.core.nth.call(null,vec__7693,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),players)){
tic_tac_toe.ai_turn.sleep.call(null);
} else {
}

return tic_tac_toe.ai_turn.ai_turn.call(null,board,marker,diff);
}));

//# sourceMappingURL=ai_turn.js.map
