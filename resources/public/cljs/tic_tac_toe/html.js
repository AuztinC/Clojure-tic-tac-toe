// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.html');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.human_turn');
goog.require('tic_tac_toe.setup');
tic_tac_toe.html.select_game_mode = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Select a game mode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"human-vs-ai",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643));
})], null),"Human vs AI"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"ai-vs-human",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643));
})], null),"AI vs Human"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"human-vs-human",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643));
})], null),"Human vs Human"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"ai-vs-ai",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643));
})], null),"AI vs AI"], null)], null);
tic_tac_toe.html.select_board = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Select a board"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"board-3x3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)));
})], null),"3x3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"board-4x4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723)));
})], null),"4x4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"board-3x3x3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540)));
})], null),"3x3x3"], null)], null);
tic_tac_toe.html.select_difficulty = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Select difficulty"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"diff",new cljs.core.Keyword(null,"class","class",-2030961996),"easy",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"easy","easy",315769928));
})], null),"Easy"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"diff",new cljs.core.Keyword(null,"class","class",-2030961996),"medium",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"medium","medium",-1864319384));
})], null),"Medium"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"diff",new cljs.core.Keyword(null,"class","class",-2030961996),"hard",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"hard","hard",2068420191));
})], null),"Hard"], null)], null);
tic_tac_toe.html.ai_ai_QMARK_ = (function tic_tac_toe$html$ai_ai_QMARK_(){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state)));
});
tic_tac_toe.html.handle_click = (function tic_tac_toe$html$handle_click(idx){
if(tic_tac_toe.html.ai_ai_QMARK_.call(null)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,tic_tac_toe.human_turn.apply_human_move,parseInt(idx));
}
});
tic_tac_toe.html.render_cell = (function tic_tac_toe$html$render_cell(idx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"grey",new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em",new cljs.core.Keyword(null,"cursor","cursor",1011937484),((tic_tac_toe.html.ai_ai_QMARK_.call(null))?"default":"pointer")], null),new cljs.core.Keyword(null,"id","id",-1388402092),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.html.handle_click.call(null,idx);
})], null),idx], null);
});
tic_tac_toe.html.render_board = (function tic_tac_toe$html$render_board(p__11854){
var map__11855 = p__11854;
var map__11855__$1 = cljs.core.__destructure_map.call(null,map__11855);
var _state = map__11855__$1;
var board_size = cljs.core.get.call(null,map__11855__$1,new cljs.core.Keyword(null,"board-size","board-size",140730505));
var board = cljs.core.get.call(null,map__11855__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var indexed = cljs.core.map_indexed.call(null,(function (idx,_cell){
return tic_tac_toe.html.render_cell.call(null,((cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cljs.core.nth.call(null,board,idx))))?idx:cljs.core.first.call(null,cljs.core.nth.call(null,board,idx))));
}),board);
var size = (function (){var G__11856 = board_size;
var G__11856__$1 = (((G__11856 instanceof cljs.core.Keyword))?G__11856.fqn:null);
switch (G__11856__$1) {
case "3x3":
return (3);

break;
case "4x4":
return (4);

break;
case "3x3x3":
return (9);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11856__$1)].join('')));

}
})();
var part_board = cljs.core.partition.call(null,size,indexed);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"board"], null)], null),cljs.core.map_indexed.call(null,(function (i,row){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)], null),row);
}),part_board));
});
tic_tac_toe.html.game = (function tic_tac_toe$html$game(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main-container"], null),tic_tac_toe.html.render_board.call(null,cljs.core.deref.call(null,tic_tac_toe.setup.state))], null);
});

//# sourceMappingURL=html.js.map
