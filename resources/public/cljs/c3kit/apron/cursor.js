// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.apron.cursor');
goog.require('cljs.core');
c3kit.apron.cursor.do_swap_BANG_ = (function c3kit$apron$cursor$do_swap_BANG_(var_args){
var G__6930 = arguments.length;
switch (G__6930) {
case 3:
return c3kit.apron.cursor.do_swap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return c3kit.apron.cursor.do_swap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return c3kit.apron.cursor.do_swap_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return c3kit.apron.cursor.do_swap_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.cursor.do_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (base,path,f){
return cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,base,cljs.core.update_in,path,f),path);
}));

(c3kit.apron.cursor.do_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (base,path,f,x){
return cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,base,cljs.core.update_in,path,f,x),path);
}));

(c3kit.apron.cursor.do_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (base,path,f,x,y){
return cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,base,cljs.core.update_in,path,f,x,y),path);
}));

(c3kit.apron.cursor.do_swap_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (base,path,f,x,y,more){
return cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,base,cljs.core.update_in,path,(function (v){
return cljs.core.apply.call(null,f,v,x,y,more);
})),path);
}));

(c3kit.apron.cursor.do_swap_BANG_.cljs$lang$maxFixedArity = 6);

c3kit.apron.cursor.swap_vals_result = (function c3kit$apron$cursor$swap_vals_result(path,result){
var vec__6948 = result;
var o = cljs.core.nth.call(null,vec__6948,(0),null);
var n = cljs.core.nth.call(null,vec__6948,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,o,path),cljs.core.get_in.call(null,n,path)], null);
});
c3kit.apron.cursor.do_reset_BANG_ = (function c3kit$apron$cursor$do_reset_BANG_(base,path,new_value){
cljs.core.swap_BANG_.call(null,base,cljs.core.assoc_in,path,new_value);

return new_value;
});
c3kit.apron.cursor.to_string = (function c3kit$apron$cursor$to_string(this$,path){
return ["#<Cursor: ",cljs.core.pr_str.call(null,cljs.core.deref.call(null,this$))," @",cljs.core.pr_str.call(null,path),">"].join('');
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
c3kit.apron.cursor.Cursor = (function (base,path){
this.base = base;
this.path = path;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2147516416;
});
(c3kit.apron.cursor.Cursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.base),self__.path);
}));

(c3kit.apron.cursor.Cursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
return c3kit.apron.cursor.do_reset_BANG_.call(null,self__.base,self__.path,new_value);
}));

(c3kit.apron.cursor.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return c3kit.apron.cursor.do_swap_BANG_.call(null,self__.base,self__.path,f);
}));

(c3kit.apron.cursor.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return c3kit.apron.cursor.do_swap_BANG_.call(null,self__.base,self__.path,f,x);
}));

(c3kit.apron.cursor.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return c3kit.apron.cursor.do_swap_BANG_.call(null,self__.base,self__.path,f,x,y);
}));

(c3kit.apron.cursor.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return c3kit.apron.cursor.do_swap_BANG_.call(null,self__.base,self__.path,f,x,y,more);
}));

(c3kit.apron.cursor.Cursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.base),self__.path),writer,opts);

cljs.core._write.call(null,writer," @");

cljs.core.pr_writer.call(null,self__.path,writer,opts);

return cljs.core._write.call(null,writer,">");
}));

(c3kit.apron.cursor.Cursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (_,oldval,newval){
var self__ = this;
var ___$1 = this;
return cljs.core._notify_watches.call(null,self__.base,oldval,newval);
}));

(c3kit.apron.cursor.Cursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,self__.base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,key], null),(function (k,r,o,n){
return f.call(null,key,this$__$1,cljs.core.get_in.call(null,o,self__.path),cljs.core.get_in.call(null,n,self__.path));
}));
}));

(c3kit.apron.cursor.Cursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return cljs.core._remove_watch.call(null,self__.base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,key], null));
}));

(c3kit.apron.cursor.Cursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(c3kit.apron.cursor.Cursor.cljs$lang$type = true);

(c3kit.apron.cursor.Cursor.cljs$lang$ctorStr = "c3kit.apron.cursor/Cursor");

(c3kit.apron.cursor.Cursor.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"c3kit.apron.cursor/Cursor");
}));

/**
 * Positional factory function for c3kit.apron.cursor/Cursor.
 */
c3kit.apron.cursor.__GT_Cursor = (function c3kit$apron$cursor$__GT_Cursor(base,path){
return (new c3kit.apron.cursor.Cursor(base,path));
});

c3kit.apron.cursor.cursor = (function c3kit$apron$cursor$cursor(a,path){
if(cljs.core.seq.call(null,path)){
return (new c3kit.apron.cursor.Cursor(a,path));
} else {
return a;
}
});

//# sourceMappingURL=cursor.js.map
