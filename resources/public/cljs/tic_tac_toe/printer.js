// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.printer');
goog.require('cljs.core');
tic_tac_toe.printer.__GT_index_board = (function tic_tac_toe$printer$__GT_index_board(board){
if(cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,board))){
var iter__5503__auto__ = (function tic_tac_toe$printer$__GT_index_board_$_iter__6997(s__6998){
return (new cljs.core.LazySeq(null,(function (){
var s__6998__$1 = s__6998;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__6998__$1);
if(temp__5825__auto__){
var s__6998__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6998__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__6998__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__7000 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__6999 = (0);
while(true){
if((i__6999 < size__5502__auto__)){
var board__$1 = cljs.core._nth.call(null,c__5501__auto__,i__6999);
cljs.core.chunk_append.call(null,b__7000,cljs.core.map_indexed.call(null,((function (i__6999,board__$1,c__5501__auto__,size__5502__auto__,b__7000,s__6998__$2,temp__5825__auto__){
return (function (idx,cell){
if(cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cell))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx);
} else {
return cljs.core.first.call(null,cell);
}
});})(i__6999,board__$1,c__5501__auto__,size__5502__auto__,b__7000,s__6998__$2,temp__5825__auto__))
,board__$1));

var G__7008 = (i__6999 + (1));
i__6999 = G__7008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7000),tic_tac_toe$printer$__GT_index_board_$_iter__6997.call(null,cljs.core.chunk_rest.call(null,s__6998__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7000),null);
}
} else {
var board__$1 = cljs.core.first.call(null,s__6998__$2);
return cljs.core.cons.call(null,cljs.core.map_indexed.call(null,((function (board__$1,s__6998__$2,temp__5825__auto__){
return (function (idx,cell){
if(cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cell))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx);
} else {
return cljs.core.first.call(null,cell);
}
});})(board__$1,s__6998__$2,temp__5825__auto__))
,board__$1),tic_tac_toe$printer$__GT_index_board_$_iter__6997.call(null,cljs.core.rest.call(null,s__6998__$2)));
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
var seq__7011 = cljs.core.seq.call(null,cljs.core.range.call(null,size));
var chunk__7012 = null;
var count__7013 = (0);
var i__7014 = (0);
while(true){
if((i__7014 < count__7013)){
var row_idx = cljs.core._nth.call(null,chunk__7012,i__7014);
cljs.core.print.call(null,["",((((10) > row_idx))?" ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,row_idx)),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(20),null,(17),null,(2),null,(23),null,(11),null,(5),null,(14),null,(26),null,(8),null], null), null),row_idx))?"   ":" | "),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(17),null,(8),null], null), null),row_idx))?"\n -----------    -----------    -----------\n":"")].join(''));


var G__7040 = seq__7011;
var G__7041 = chunk__7012;
var G__7042 = count__7013;
var G__7043 = (i__7014 + (1));
seq__7011 = G__7040;
chunk__7012 = G__7041;
count__7013 = G__7042;
i__7014 = G__7043;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__7011);
if(temp__5825__auto__){
var seq__7011__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7011__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__7011__$1);
var G__7048 = cljs.core.chunk_rest.call(null,seq__7011__$1);
var G__7049 = c__5548__auto__;
var G__7050 = cljs.core.count.call(null,c__5548__auto__);
var G__7051 = (0);
seq__7011 = G__7048;
chunk__7012 = G__7049;
count__7013 = G__7050;
i__7014 = G__7051;
continue;
} else {
var row_idx = cljs.core.first.call(null,seq__7011__$1);
cljs.core.print.call(null,["",((((10) > row_idx))?" ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,row_idx)),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(20),null,(17),null,(2),null,(23),null,(11),null,(5),null,(14),null,(26),null,(8),null], null), null),row_idx))?"   ":" | "),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(17),null,(8),null], null), null),row_idx))?"\n -----------    -----------    -----------\n":"")].join(''));


var G__7056 = cljs.core.next.call(null,seq__7011__$1);
var G__7057 = null;
var G__7058 = (0);
var G__7059 = (0);
seq__7011 = G__7056;
chunk__7012 = G__7057;
count__7013 = G__7058;
i__7014 = G__7059;
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
var seq__7026_7084 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
var chunk__7027_7085 = null;
var count__7028_7086 = (0);
var i__7029_7087 = (0);
while(true){
if((i__7029_7087 < count__7028_7086)){
var vec__7066_7092 = cljs.core._nth.call(null,chunk__7027_7085,i__7029_7087);
var idx_7093 = cljs.core.nth.call(null,vec__7066_7092,(0),null);
var row_7094 = cljs.core.nth.call(null,vec__7066_7092,(1),null);
tic_tac_toe.printer.print_rows.call(null,row_7094,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7093,rows);


var G__7098 = seq__7026_7084;
var G__7099 = chunk__7027_7085;
var G__7100 = count__7028_7086;
var G__7101 = (i__7029_7087 + (1));
seq__7026_7084 = G__7098;
chunk__7027_7085 = G__7099;
count__7028_7086 = G__7100;
i__7029_7087 = G__7101;
continue;
} else {
var temp__5825__auto___7109 = cljs.core.seq.call(null,seq__7026_7084);
if(temp__5825__auto___7109){
var seq__7026_7110__$1 = temp__5825__auto___7109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7026_7110__$1)){
var c__5548__auto___7111 = cljs.core.chunk_first.call(null,seq__7026_7110__$1);
var G__7112 = cljs.core.chunk_rest.call(null,seq__7026_7110__$1);
var G__7113 = c__5548__auto___7111;
var G__7114 = cljs.core.count.call(null,c__5548__auto___7111);
var G__7115 = (0);
seq__7026_7084 = G__7112;
chunk__7027_7085 = G__7113;
count__7028_7086 = G__7114;
i__7029_7087 = G__7115;
continue;
} else {
var vec__7074_7116 = cljs.core.first.call(null,seq__7026_7110__$1);
var idx_7117 = cljs.core.nth.call(null,vec__7074_7116,(0),null);
var row_7118 = cljs.core.nth.call(null,vec__7074_7116,(1),null);
tic_tac_toe.printer.print_rows.call(null,row_7118,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7117,rows);


var G__7125 = cljs.core.next.call(null,seq__7026_7110__$1);
var G__7126 = null;
var G__7127 = (0);
var G__7128 = (0);
seq__7026_7084 = G__7125;
chunk__7027_7085 = G__7126;
count__7028_7086 = G__7127;
i__7029_7087 = G__7128;
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
var seq__7077_7151 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
var chunk__7078_7152 = null;
var count__7079_7153 = (0);
var i__7080_7154 = (0);
while(true){
if((i__7080_7154 < count__7079_7153)){
var vec__7122_7155 = cljs.core._nth.call(null,chunk__7078_7152,i__7080_7154);
var idx_7156 = cljs.core.nth.call(null,vec__7122_7155,(0),null);
var row_7157 = cljs.core.nth.call(null,vec__7122_7155,(1),null);
tic_tac_toe.printer.print_rows_3d.call(null,row_7157,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7156,rows);


var G__7158 = seq__7077_7151;
var G__7159 = chunk__7078_7152;
var G__7160 = count__7079_7153;
var G__7161 = (i__7080_7154 + (1));
seq__7077_7151 = G__7158;
chunk__7078_7152 = G__7159;
count__7079_7153 = G__7160;
i__7080_7154 = G__7161;
continue;
} else {
var temp__5825__auto___7162 = cljs.core.seq.call(null,seq__7077_7151);
if(temp__5825__auto___7162){
var seq__7077_7167__$1 = temp__5825__auto___7162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7077_7167__$1)){
var c__5548__auto___7168 = cljs.core.chunk_first.call(null,seq__7077_7167__$1);
var G__7169 = cljs.core.chunk_rest.call(null,seq__7077_7167__$1);
var G__7170 = c__5548__auto___7168;
var G__7171 = cljs.core.count.call(null,c__5548__auto___7168);
var G__7172 = (0);
seq__7077_7151 = G__7169;
chunk__7078_7152 = G__7170;
count__7079_7153 = G__7171;
i__7080_7154 = G__7172;
continue;
} else {
var vec__7136_7173 = cljs.core.first.call(null,seq__7077_7167__$1);
var idx_7174 = cljs.core.nth.call(null,vec__7136_7173,(0),null);
var row_7175 = cljs.core.nth.call(null,vec__7136_7173,(1),null);
tic_tac_toe.printer.print_rows_3d.call(null,row_7175,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7174,rows);


var G__7177 = cljs.core.next.call(null,seq__7077_7167__$1);
var G__7178 = null;
var G__7179 = (0);
var G__7180 = (0);
seq__7077_7151 = G__7177;
chunk__7078_7152 = G__7178;
count__7079_7153 = G__7179;
i__7080_7154 = G__7180;
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
