// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.printer');
goog.require('cljs.core');
tic_tac_toe.printer.__GT_index_board = (function tic_tac_toe$printer$__GT_index_board(board){
if(cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,board))){
var iter__5503__auto__ = (function tic_tac_toe$printer$__GT_index_board_$_iter__14254(s__14255){
return (new cljs.core.LazySeq(null,(function (){
var s__14255__$1 = s__14255;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__14255__$1);
if(temp__5825__auto__){
var s__14255__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14255__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__14255__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__14257 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__14256 = (0);
while(true){
if((i__14256 < size__5502__auto__)){
var board__$1 = cljs.core._nth.call(null,c__5501__auto__,i__14256);
cljs.core.chunk_append.call(null,b__14257,cljs.core.map_indexed.call(null,((function (i__14256,board__$1,c__5501__auto__,size__5502__auto__,b__14257,s__14255__$2,temp__5825__auto__){
return (function (idx,cell){
if(cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cell))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx);
} else {
return cljs.core.first.call(null,cell);
}
});})(i__14256,board__$1,c__5501__auto__,size__5502__auto__,b__14257,s__14255__$2,temp__5825__auto__))
,board__$1));

var G__14262 = (i__14256 + (1));
i__14256 = G__14262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14257),tic_tac_toe$printer$__GT_index_board_$_iter__14254.call(null,cljs.core.chunk_rest.call(null,s__14255__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14257),null);
}
} else {
var board__$1 = cljs.core.first.call(null,s__14255__$2);
return cljs.core.cons.call(null,cljs.core.map_indexed.call(null,((function (board__$1,s__14255__$2,temp__5825__auto__){
return (function (idx,cell){
if(cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cell))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx);
} else {
return cljs.core.first.call(null,cell);
}
});})(board__$1,s__14255__$2,temp__5825__auto__))
,board__$1),tic_tac_toe$printer$__GT_index_board_$_iter__14254.call(null,cljs.core.rest.call(null,s__14255__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,board);
} else {
return cljs.core.map_indexed.call(null,(function (idx,cell){
if(cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cell))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx);
} else {
return cljs.core.first.call(null,cell);
}
}),board);
}
});
tic_tac_toe.printer.print_rows = (function tic_tac_toe$printer$print_rows(row,size){
return cljs.core.println.call(null,["   ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,(0)))," | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,(1)))," | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,(2))),((cljs.core._EQ_.call(null,(4),size))?[" | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,(3)))].join(''):"")].join(''));
});
tic_tac_toe.printer.print_rows_3d = (function tic_tac_toe$printer$print_rows_3d(row,size){
var seq__14258 = cljs.core.seq.call(null,cljs.core.range.call(null,size));
var chunk__14259 = null;
var count__14260 = (0);
var i__14261 = (0);
while(true){
if((i__14261 < count__14260)){
var row_idx = cljs.core._nth.call(null,chunk__14259,i__14261);
cljs.core.print.call(null,["",((((10) > row_idx))?" ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,row_idx)),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(20),null,(17),null,(2),null,(23),null,(11),null,(5),null,(14),null,(26),null,(8),null], null), null),row_idx))?"   ":" | "),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(17),null,(8),null], null), null),row_idx))?"\n -----------    -----------    -----------\n":"")].join(''));


var G__14267 = seq__14258;
var G__14268 = chunk__14259;
var G__14269 = count__14260;
var G__14270 = (i__14261 + (1));
seq__14258 = G__14267;
chunk__14259 = G__14268;
count__14260 = G__14269;
i__14261 = G__14270;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__14258);
if(temp__5825__auto__){
var seq__14258__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14258__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__14258__$1);
var G__14271 = cljs.core.chunk_rest.call(null,seq__14258__$1);
var G__14272 = c__5548__auto__;
var G__14273 = cljs.core.count.call(null,c__5548__auto__);
var G__14274 = (0);
seq__14258 = G__14271;
chunk__14259 = G__14272;
count__14260 = G__14273;
i__14261 = G__14274;
continue;
} else {
var row_idx = cljs.core.first.call(null,seq__14258__$1);
cljs.core.print.call(null,["",((((10) > row_idx))?" ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,row_idx)),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(20),null,(17),null,(2),null,(23),null,(11),null,(5),null,(14),null,(26),null,(8),null], null), null),row_idx))?"   ":" | "),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(17),null,(8),null], null), null),row_idx))?"\n -----------    -----------    -----------\n":"")].join(''));


var G__14275 = cljs.core.next.call(null,seq__14258__$1);
var G__14276 = null;
var G__14277 = (0);
var G__14278 = (0);
seq__14258 = G__14275;
chunk__14259 = G__14276;
count__14260 = G__14277;
i__14261 = G__14278;
continue;
}
} else {
return null;
}
}
break;
}
});
tic_tac_toe.printer.print_breaks = (function tic_tac_toe$printer$print_breaks(idx,rows){
if((idx < (cljs.core.count.call(null,rows) - (1)))){
return cljs.core.println.call(null,"  -----------");
} else {
return null;
}
});
tic_tac_toe.printer.__GT_format = (function tic_tac_toe$printer$__GT_format(board,size){
var indexed_board = tic_tac_toe.printer.__GT_index_board.call(null,board);
var rows = cljs.core.partition.call(null,size,indexed_board);
var seq__14263_14291 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
var chunk__14264_14292 = null;
var count__14265_14293 = (0);
var i__14266_14294 = (0);
while(true){
if((i__14266_14294 < count__14265_14293)){
var vec__14285_14299 = cljs.core._nth.call(null,chunk__14264_14292,i__14266_14294);
var idx_14300 = cljs.core.nth.call(null,vec__14285_14299,(0),null);
var row_14301 = cljs.core.nth.call(null,vec__14285_14299,(1),null);
tic_tac_toe.printer.print_rows.call(null,row_14301,size);

tic_tac_toe.printer.print_breaks.call(null,idx_14300,rows);


var G__14305 = seq__14263_14291;
var G__14306 = chunk__14264_14292;
var G__14307 = count__14265_14293;
var G__14308 = (i__14266_14294 + (1));
seq__14263_14291 = G__14305;
chunk__14264_14292 = G__14306;
count__14265_14293 = G__14307;
i__14266_14294 = G__14308;
continue;
} else {
var temp__5825__auto___14309 = cljs.core.seq.call(null,seq__14263_14291);
if(temp__5825__auto___14309){
var seq__14263_14310__$1 = temp__5825__auto___14309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14263_14310__$1)){
var c__5548__auto___14311 = cljs.core.chunk_first.call(null,seq__14263_14310__$1);
var G__14312 = cljs.core.chunk_rest.call(null,seq__14263_14310__$1);
var G__14313 = c__5548__auto___14311;
var G__14314 = cljs.core.count.call(null,c__5548__auto___14311);
var G__14315 = (0);
seq__14263_14291 = G__14312;
chunk__14264_14292 = G__14313;
count__14265_14293 = G__14314;
i__14266_14294 = G__14315;
continue;
} else {
var vec__14288_14316 = cljs.core.first.call(null,seq__14263_14310__$1);
var idx_14317 = cljs.core.nth.call(null,vec__14288_14316,(0),null);
var row_14318 = cljs.core.nth.call(null,vec__14288_14316,(1),null);
tic_tac_toe.printer.print_rows.call(null,row_14318,size);

tic_tac_toe.printer.print_breaks.call(null,idx_14317,rows);


var G__14322 = cljs.core.next.call(null,seq__14263_14310__$1);
var G__14323 = null;
var G__14324 = (0);
var G__14325 = (0);
seq__14263_14291 = G__14322;
chunk__14264_14292 = G__14323;
count__14265_14293 = G__14324;
i__14266_14294 = G__14325;
continue;
}
} else {
}
}
break;
}

return cljs.core.println.call(null,"----------------");
});
tic_tac_toe.printer.setup_3d = (function tic_tac_toe$printer$setup_3d(board){
var size = (27);
var indexed_board = tic_tac_toe.printer.__GT_index_board.call(null,board);
var rows = cljs.core.partition.call(null,size,indexed_board);
var seq__14295_14332 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
var chunk__14296_14333 = null;
var count__14297_14334 = (0);
var i__14298_14335 = (0);
while(true){
if((i__14298_14335 < count__14297_14334)){
var vec__14326_14336 = cljs.core._nth.call(null,chunk__14296_14333,i__14298_14335);
var idx_14337 = cljs.core.nth.call(null,vec__14326_14336,(0),null);
var row_14338 = cljs.core.nth.call(null,vec__14326_14336,(1),null);
tic_tac_toe.printer.print_rows_3d.call(null,row_14338,size);

tic_tac_toe.printer.print_breaks.call(null,idx_14337,rows);


var G__14339 = seq__14295_14332;
var G__14340 = chunk__14296_14333;
var G__14341 = count__14297_14334;
var G__14342 = (i__14298_14335 + (1));
seq__14295_14332 = G__14339;
chunk__14296_14333 = G__14340;
count__14297_14334 = G__14341;
i__14298_14335 = G__14342;
continue;
} else {
var temp__5825__auto___14343 = cljs.core.seq.call(null,seq__14295_14332);
if(temp__5825__auto___14343){
var seq__14295_14344__$1 = temp__5825__auto___14343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14295_14344__$1)){
var c__5548__auto___14345 = cljs.core.chunk_first.call(null,seq__14295_14344__$1);
var G__14346 = cljs.core.chunk_rest.call(null,seq__14295_14344__$1);
var G__14347 = c__5548__auto___14345;
var G__14348 = cljs.core.count.call(null,c__5548__auto___14345);
var G__14349 = (0);
seq__14295_14332 = G__14346;
chunk__14296_14333 = G__14347;
count__14297_14334 = G__14348;
i__14298_14335 = G__14349;
continue;
} else {
var vec__14329_14350 = cljs.core.first.call(null,seq__14295_14344__$1);
var idx_14351 = cljs.core.nth.call(null,vec__14329_14350,(0),null);
var row_14352 = cljs.core.nth.call(null,vec__14329_14350,(1),null);
tic_tac_toe.printer.print_rows_3d.call(null,row_14352,size);

tic_tac_toe.printer.print_breaks.call(null,idx_14351,rows);


var G__14353 = cljs.core.next.call(null,seq__14295_14344__$1);
var G__14354 = null;
var G__14355 = (0);
var G__14356 = (0);
seq__14295_14332 = G__14353;
chunk__14296_14333 = G__14354;
count__14297_14334 = G__14355;
i__14298_14335 = G__14356;
continue;
}
} else {
}
}
break;
}

return cljs.core.println.call(null,"\n-------------------------------------------");
});
tic_tac_toe.printer.print_board_selection = (function tic_tac_toe$printer$print_board_selection(){
return cljs.core.println.call(null,"Choose your board\n  1: 3x3\n  2: 4x4\n  3: 3x3x3");
});
tic_tac_toe.printer.display_board = (function tic_tac_toe$printer$display_board(board){
if(cljs.core._EQ_.call(null,(9),cljs.core.count.call(null,board))){
return tic_tac_toe.printer.__GT_format.call(null,board,(3));
} else {
if(cljs.core._EQ_.call(null,(16),cljs.core.count.call(null,board))){
return tic_tac_toe.printer.__GT_format.call(null,board,(4));
} else {
if(cljs.core._EQ_.call(null,(27),cljs.core.count.call(null,board))){
return tic_tac_toe.printer.setup_3d.call(null,board);
} else {
return null;
}
}
}
});
tic_tac_toe.printer.print_game_options = (function tic_tac_toe$printer$print_game_options(){
return cljs.core.println.call(null,"Choose your game\n  1: Human vs Computer\n  2: Computer vs Human\n  3: Human vs Human\n  4: Computer vs Computer");
});
tic_tac_toe.printer.print_difficulty_iteration = (function tic_tac_toe$printer$print_difficulty_iteration(current_ai){
var current_ai__$1 = (current_ai + (1));
return cljs.core.println.call(null,((cljs.core._EQ_.call(null,(1),current_ai__$1))?["Choose ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ai__$1),"st AI difficulty"].join(''):((cljs.core._EQ_.call(null,(2),current_ai__$1))?["Choose ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ai__$1),"nd AI difficulty"].join(''):null)));
});
tic_tac_toe.printer.print_difficulty = (function tic_tac_toe$printer$print_difficulty(){
return cljs.core.println.call(null,"Choose AI difficulties\n  1: Easy\n  2: Medium\n  3: Hard");
});
tic_tac_toe.printer.output_result = (function tic_tac_toe$printer$output_result(result){
if(cljs.core._EQ_.call(null,"tie",result)){
return cljs.core.println.call(null,"tie game");
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)," wins!"].join(''));
}
});
tic_tac_toe.printer.print_bad_move = (function tic_tac_toe$printer$print_bad_move(){
return cljs.core.println.call(null,"oops bad move, try again");
});
tic_tac_toe.printer.print_player_prompt = (function tic_tac_toe$printer$print_player_prompt(marker){
return cljs.core.println.call(null,["Player ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker),", enter your move:"].join(''));
});
tic_tac_toe.printer.game_id = (function tic_tac_toe$printer$game_id(id){
return cljs.core.println.call(null,["Game ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});

//# sourceMappingURL=printer.js.map
