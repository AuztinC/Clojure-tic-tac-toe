// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__7202__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7203__i = 0, G__7203__a = new Array(arguments.length -  0);
while (G__7203__i < G__7203__a.length) {G__7203__a[G__7203__i] = arguments[G__7203__i + 0]; ++G__7203__i;}
  args = new cljs.core.IndexedSeq(G__7203__a,0,null);
} 
return G__7202__delegate.call(this,args);};
G__7202.cljs$lang$maxFixedArity = 0;
G__7202.cljs$lang$applyTo = (function (arglist__7204){
var args = cljs.core.seq(arglist__7204);
return G__7202__delegate(args);
});
G__7202.cljs$core$IFn$_invoke$arity$variadic = G__7202__delegate;
return G__7202;
})()
);

(o.error = (function() { 
var G__7205__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7206__i = 0, G__7206__a = new Array(arguments.length -  0);
while (G__7206__i < G__7206__a.length) {G__7206__a[G__7206__i] = arguments[G__7206__i + 0]; ++G__7206__i;}
  args = new cljs.core.IndexedSeq(G__7206__a,0,null);
} 
return G__7205__delegate.call(this,args);};
G__7205.cljs$lang$maxFixedArity = 0;
G__7205.cljs$lang$applyTo = (function (arglist__7207){
var args = cljs.core.seq(arglist__7207);
return G__7205__delegate(args);
});
G__7205.cljs$core$IFn$_invoke$arity$variadic = G__7205__delegate;
return G__7205;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
