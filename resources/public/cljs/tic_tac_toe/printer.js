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

var G__7007 = (i__6999 + (1));
i__6999 = G__7007;
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
var seq__7033 = cljs.core.seq.call(null,cljs.core.range.call(null,size));
var chunk__7034 = null;
var count__7035 = (0);
var i__7036 = (0);
while(true){
if((i__7036 < count__7035)){
var row_idx = cljs.core._nth.call(null,chunk__7034,i__7036);
cljs.core.print.call(null,["",((((10) > row_idx))?" ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,row_idx)),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(20),null,(17),null,(2),null,(23),null,(11),null,(5),null,(14),null,(26),null,(8),null], null), null),row_idx))?"   ":" | "),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(17),null,(8),null], null), null),row_idx))?"\n -----------    -----------    -----------\n":"")].join(''));


var G__7118 = seq__7033;
var G__7119 = chunk__7034;
var G__7120 = count__7035;
var G__7121 = (i__7036 + (1));
seq__7033 = G__7118;
chunk__7034 = G__7119;
count__7035 = G__7120;
i__7036 = G__7121;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__7033);
if(temp__5825__auto__){
var seq__7033__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7033__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__7033__$1);
var G__7122 = cljs.core.chunk_rest.call(null,seq__7033__$1);
var G__7123 = c__5548__auto__;
var G__7124 = cljs.core.count.call(null,c__5548__auto__);
var G__7125 = (0);
seq__7033 = G__7122;
chunk__7034 = G__7123;
count__7035 = G__7124;
i__7036 = G__7125;
continue;
} else {
var row_idx = cljs.core.first.call(null,seq__7033__$1);
cljs.core.print.call(null,["",((((10) > row_idx))?" ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,row_idx)),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(20),null,(17),null,(2),null,(23),null,(11),null,(5),null,(14),null,(26),null,(8),null], null), null),row_idx))?"   ":" | "),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(17),null,(8),null], null), null),row_idx))?"\n -----------    -----------    -----------\n":"")].join(''));


var G__7126 = cljs.core.next.call(null,seq__7033__$1);
var G__7127 = null;
var G__7128 = (0);
var G__7129 = (0);
seq__7033 = G__7126;
chunk__7034 = G__7127;
count__7035 = G__7128;
i__7036 = G__7129;
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
var seq__7075_7166 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
var chunk__7076_7167 = null;
var count__7077_7168 = (0);
var i__7078_7169 = (0);
while(true){
if((i__7078_7169 < count__7077_7168)){
var vec__7111_7170 = cljs.core._nth.call(null,chunk__7076_7167,i__7078_7169);
var idx_7171 = cljs.core.nth.call(null,vec__7111_7170,(0),null);
var row_7172 = cljs.core.nth.call(null,vec__7111_7170,(1),null);
tic_tac_toe.printer.print_rows.call(null,row_7172,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7171,rows);


var G__7176 = seq__7075_7166;
var G__7177 = chunk__7076_7167;
var G__7178 = count__7077_7168;
var G__7179 = (i__7078_7169 + (1));
seq__7075_7166 = G__7176;
chunk__7076_7167 = G__7177;
count__7077_7168 = G__7178;
i__7078_7169 = G__7179;
continue;
} else {
var temp__5825__auto___7180 = cljs.core.seq.call(null,seq__7075_7166);
if(temp__5825__auto___7180){
var seq__7075_7181__$1 = temp__5825__auto___7180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7075_7181__$1)){
var c__5548__auto___7182 = cljs.core.chunk_first.call(null,seq__7075_7181__$1);
var G__7186 = cljs.core.chunk_rest.call(null,seq__7075_7181__$1);
var G__7187 = c__5548__auto___7182;
var G__7188 = cljs.core.count.call(null,c__5548__auto___7182);
var G__7189 = (0);
seq__7075_7166 = G__7186;
chunk__7076_7167 = G__7187;
count__7077_7168 = G__7188;
i__7078_7169 = G__7189;
continue;
} else {
var vec__7145_7190 = cljs.core.first.call(null,seq__7075_7181__$1);
var idx_7191 = cljs.core.nth.call(null,vec__7145_7190,(0),null);
var row_7192 = cljs.core.nth.call(null,vec__7145_7190,(1),null);
tic_tac_toe.printer.print_rows.call(null,row_7192,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7191,rows);


var G__7193 = cljs.core.next.call(null,seq__7075_7181__$1);
var G__7194 = null;
var G__7195 = (0);
var G__7196 = (0);
seq__7075_7166 = G__7193;
chunk__7076_7167 = G__7194;
count__7077_7168 = G__7195;
i__7078_7169 = G__7196;
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
var seq__7153_7204 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
var chunk__7154_7205 = null;
var count__7155_7206 = (0);
var i__7156_7207 = (0);
while(true){
if((i__7156_7207 < count__7155_7206)){
var vec__7183_7211 = cljs.core._nth.call(null,chunk__7154_7205,i__7156_7207);
var idx_7212 = cljs.core.nth.call(null,vec__7183_7211,(0),null);
var row_7213 = cljs.core.nth.call(null,vec__7183_7211,(1),null);
tic_tac_toe.printer.print_rows_3d.call(null,row_7213,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7212,rows);


var G__7217 = seq__7153_7204;
var G__7218 = chunk__7154_7205;
var G__7219 = count__7155_7206;
var G__7220 = (i__7156_7207 + (1));
seq__7153_7204 = G__7217;
chunk__7154_7205 = G__7218;
count__7155_7206 = G__7219;
i__7156_7207 = G__7220;
continue;
} else {
var temp__5825__auto___7221 = cljs.core.seq.call(null,seq__7153_7204);
if(temp__5825__auto___7221){
var seq__7153_7222__$1 = temp__5825__auto___7221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7153_7222__$1)){
var c__5548__auto___7223 = cljs.core.chunk_first.call(null,seq__7153_7222__$1);
var G__7224 = cljs.core.chunk_rest.call(null,seq__7153_7222__$1);
var G__7225 = c__5548__auto___7223;
var G__7226 = cljs.core.count.call(null,c__5548__auto___7223);
var G__7227 = (0);
seq__7153_7204 = G__7224;
chunk__7154_7205 = G__7225;
count__7155_7206 = G__7226;
i__7156_7207 = G__7227;
continue;
} else {
var vec__7197_7228 = cljs.core.first.call(null,seq__7153_7222__$1);
var idx_7229 = cljs.core.nth.call(null,vec__7197_7228,(0),null);
var row_7230 = cljs.core.nth.call(null,vec__7197_7228,(1),null);
tic_tac_toe.printer.print_rows_3d.call(null,row_7230,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7229,rows);


var G__7231 = cljs.core.next.call(null,seq__7153_7222__$1);
var G__7232 = null;
var G__7233 = (0);
var G__7234 = (0);
seq__7153_7204 = G__7231;
chunk__7154_7205 = G__7232;
count__7155_7206 = G__7233;
i__7156_7207 = G__7234;
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
