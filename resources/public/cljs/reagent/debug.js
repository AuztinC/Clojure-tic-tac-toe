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
var G__7342__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7343__i = 0, G__7343__a = new Array(arguments.length -  0);
while (G__7343__i < G__7343__a.length) {G__7343__a[G__7343__i] = arguments[G__7343__i + 0]; ++G__7343__i;}
  args = new cljs.core.IndexedSeq(G__7343__a,0,null);
} 
return G__7342__delegate.call(this,args);};
G__7342.cljs$lang$maxFixedArity = 0;
G__7342.cljs$lang$applyTo = (function (arglist__7344){
var args = cljs.core.seq(arglist__7344);
return G__7342__delegate(args);
});
G__7342.cljs$core$IFn$_invoke$arity$variadic = G__7342__delegate;
return G__7342;
})()
);

(o.error = (function() { 
var G__7345__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7346__i = 0, G__7346__a = new Array(arguments.length -  0);
while (G__7346__i < G__7346__a.length) {G__7346__a[G__7346__i] = arguments[G__7346__i + 0]; ++G__7346__i;}
  args = new cljs.core.IndexedSeq(G__7346__a,0,null);
} 
return G__7345__delegate.call(this,args);};
G__7345.cljs$lang$maxFixedArity = 0;
G__7345.cljs$lang$applyTo = (function (arglist__7347){
var args = cljs.core.seq(arglist__7347);
return G__7345__delegate(args);
});
G__7345.cljs$core$IFn$_invoke$arity$variadic = G__7345__delegate;
return G__7345;
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
