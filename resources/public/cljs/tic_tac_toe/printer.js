// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.printer');
goog.require('cljs.core');
tic_tac_toe.printer.__GT_index_board = (function tic_tac_toe$printer$__GT_index_board(board){
if(cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,board))){
var iter__5503__auto__ = (function tic_tac_toe$printer$__GT_index_board_$_iter__6993(s__6994){
return (new cljs.core.LazySeq(null,(function (){
var s__6994__$1 = s__6994;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__6994__$1);
if(temp__5825__auto__){
var s__6994__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6994__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__6994__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__6996 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__6995 = (0);
while(true){
if((i__6995 < size__5502__auto__)){
var board__$1 = cljs.core._nth.call(null,c__5501__auto__,i__6995);
cljs.core.chunk_append.call(null,b__6996,cljs.core.map_indexed.call(null,((function (i__6995,board__$1,c__5501__auto__,size__5502__auto__,b__6996,s__6994__$2,temp__5825__auto__){
return (function (idx,cell){
if(cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cell))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx);
} else {
return cljs.core.first.call(null,cell);
}
});})(i__6995,board__$1,c__5501__auto__,size__5502__auto__,b__6996,s__6994__$2,temp__5825__auto__))
,board__$1));

var G__7009 = (i__6995 + (1));
i__6995 = G__7009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6996),tic_tac_toe$printer$__GT_index_board_$_iter__6993.call(null,cljs.core.chunk_rest.call(null,s__6994__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6996),null);
}
} else {
var board__$1 = cljs.core.first.call(null,s__6994__$2);
return cljs.core.cons.call(null,cljs.core.map_indexed.call(null,((function (board__$1,s__6994__$2,temp__5825__auto__){
return (function (idx,cell){
if(cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cell))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx);
} else {
return cljs.core.first.call(null,cell);
}
});})(board__$1,s__6994__$2,temp__5825__auto__))
,board__$1),tic_tac_toe$printer$__GT_index_board_$_iter__6993.call(null,cljs.core.rest.call(null,s__6994__$2)));
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
var seq__7062 = cljs.core.seq.call(null,cljs.core.range.call(null,size));
var chunk__7063 = null;
var count__7068 = (0);
var i__7069 = (0);
while(true){
if((i__7069 < count__7068)){
var row_idx = cljs.core._nth.call(null,chunk__7063,i__7069);
cljs.core.print.call(null,["",((((10) > row_idx))?" ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,row_idx)),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(20),null,(17),null,(2),null,(23),null,(11),null,(5),null,(14),null,(26),null,(8),null], null), null),row_idx))?"   ":" | "),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(17),null,(8),null], null), null),row_idx))?"\n -----------    -----------    -----------\n":"")].join(''));


var G__7144 = seq__7062;
var G__7145 = chunk__7063;
var G__7146 = count__7068;
var G__7147 = (i__7069 + (1));
seq__7062 = G__7144;
chunk__7063 = G__7145;
count__7068 = G__7146;
i__7069 = G__7147;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__7062);
if(temp__5825__auto__){
var seq__7062__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7062__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__7062__$1);
var G__7148 = cljs.core.chunk_rest.call(null,seq__7062__$1);
var G__7149 = c__5548__auto__;
var G__7150 = cljs.core.count.call(null,c__5548__auto__);
var G__7151 = (0);
seq__7062 = G__7148;
chunk__7063 = G__7149;
count__7068 = G__7150;
i__7069 = G__7151;
continue;
} else {
var row_idx = cljs.core.first.call(null,seq__7062__$1);
cljs.core.print.call(null,["",((((10) > row_idx))?" ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,row_idx)),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(20),null,(17),null,(2),null,(23),null,(11),null,(5),null,(14),null,(26),null,(8),null], null), null),row_idx))?"   ":" | "),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(17),null,(8),null], null), null),row_idx))?"\n -----------    -----------    -----------\n":"")].join(''));


var G__7152 = cljs.core.next.call(null,seq__7062__$1);
var G__7153 = null;
var G__7154 = (0);
var G__7155 = (0);
seq__7062 = G__7152;
chunk__7063 = G__7153;
count__7068 = G__7154;
i__7069 = G__7155;
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
var seq__7131_7173 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
var chunk__7132_7174 = null;
var count__7133_7175 = (0);
var i__7134_7176 = (0);
while(true){
if((i__7134_7176 < count__7133_7175)){
var vec__7141_7179 = cljs.core._nth.call(null,chunk__7132_7174,i__7134_7176);
var idx_7180 = cljs.core.nth.call(null,vec__7141_7179,(0),null);
var row_7181 = cljs.core.nth.call(null,vec__7141_7179,(1),null);
tic_tac_toe.printer.print_rows.call(null,row_7181,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7180,rows);


var G__7185 = seq__7131_7173;
var G__7186 = chunk__7132_7174;
var G__7187 = count__7133_7175;
var G__7188 = (i__7134_7176 + (1));
seq__7131_7173 = G__7185;
chunk__7132_7174 = G__7186;
count__7133_7175 = G__7187;
i__7134_7176 = G__7188;
continue;
} else {
var temp__5825__auto___7190 = cljs.core.seq.call(null,seq__7131_7173);
if(temp__5825__auto___7190){
var seq__7131_7191__$1 = temp__5825__auto___7190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7131_7191__$1)){
var c__5548__auto___7192 = cljs.core.chunk_first.call(null,seq__7131_7191__$1);
var G__7194 = cljs.core.chunk_rest.call(null,seq__7131_7191__$1);
var G__7195 = c__5548__auto___7192;
var G__7196 = cljs.core.count.call(null,c__5548__auto___7192);
var G__7197 = (0);
seq__7131_7173 = G__7194;
chunk__7132_7174 = G__7195;
count__7133_7175 = G__7196;
i__7134_7176 = G__7197;
continue;
} else {
var vec__7157_7198 = cljs.core.first.call(null,seq__7131_7191__$1);
var idx_7199 = cljs.core.nth.call(null,vec__7157_7198,(0),null);
var row_7200 = cljs.core.nth.call(null,vec__7157_7198,(1),null);
tic_tac_toe.printer.print_rows.call(null,row_7200,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7199,rows);


var G__7204 = cljs.core.next.call(null,seq__7131_7191__$1);
var G__7205 = null;
var G__7206 = (0);
var G__7207 = (0);
seq__7131_7173 = G__7204;
chunk__7132_7174 = G__7205;
count__7133_7175 = G__7206;
i__7134_7176 = G__7207;
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
var seq__7162_7218 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
var chunk__7163_7219 = null;
var count__7164_7220 = (0);
var i__7165_7221 = (0);
while(true){
if((i__7165_7221 < count__7164_7220)){
var vec__7201_7226 = cljs.core._nth.call(null,chunk__7163_7219,i__7165_7221);
var idx_7227 = cljs.core.nth.call(null,vec__7201_7226,(0),null);
var row_7228 = cljs.core.nth.call(null,vec__7201_7226,(1),null);
tic_tac_toe.printer.print_rows_3d.call(null,row_7228,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7227,rows);


var G__7229 = seq__7162_7218;
var G__7230 = chunk__7163_7219;
var G__7231 = count__7164_7220;
var G__7232 = (i__7165_7221 + (1));
seq__7162_7218 = G__7229;
chunk__7163_7219 = G__7230;
count__7164_7220 = G__7231;
i__7165_7221 = G__7232;
continue;
} else {
var temp__5825__auto___7233 = cljs.core.seq.call(null,seq__7162_7218);
if(temp__5825__auto___7233){
var seq__7162_7235__$1 = temp__5825__auto___7233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7162_7235__$1)){
var c__5548__auto___7236 = cljs.core.chunk_first.call(null,seq__7162_7235__$1);
var G__7237 = cljs.core.chunk_rest.call(null,seq__7162_7235__$1);
var G__7238 = c__5548__auto___7236;
var G__7239 = cljs.core.count.call(null,c__5548__auto___7236);
var G__7240 = (0);
seq__7162_7218 = G__7237;
chunk__7163_7219 = G__7238;
count__7164_7220 = G__7239;
i__7165_7221 = G__7240;
continue;
} else {
var vec__7210_7241 = cljs.core.first.call(null,seq__7162_7235__$1);
var idx_7242 = cljs.core.nth.call(null,vec__7210_7241,(0),null);
var row_7243 = cljs.core.nth.call(null,vec__7210_7241,(1),null);
tic_tac_toe.printer.print_rows_3d.call(null,row_7243,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7242,rows);


var G__7244 = cljs.core.next.call(null,seq__7162_7235__$1);
var G__7245 = null;
var G__7246 = (0);
var G__7247 = (0);
seq__7162_7218 = G__7244;
chunk__7163_7219 = G__7245;
count__7164_7220 = G__7246;
i__7165_7221 = G__7247;
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
