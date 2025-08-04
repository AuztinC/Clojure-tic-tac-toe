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
var G__7367__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7368__i = 0, G__7368__a = new Array(arguments.length -  0);
while (G__7368__i < G__7368__a.length) {G__7368__a[G__7368__i] = arguments[G__7368__i + 0]; ++G__7368__i;}
  args = new cljs.core.IndexedSeq(G__7368__a,0,null);
} 
return G__7367__delegate.call(this,args);};
G__7367.cljs$lang$maxFixedArity = 0;
G__7367.cljs$lang$applyTo = (function (arglist__7369){
var args = cljs.core.seq(arglist__7369);
return G__7367__delegate(args);
});
G__7367.cljs$core$IFn$_invoke$arity$variadic = G__7367__delegate;
return G__7367;
})()
);

(o.error = (function() { 
var G__7370__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7373__i = 0, G__7373__a = new Array(arguments.length -  0);
while (G__7373__i < G__7373__a.length) {G__7373__a[G__7373__i] = arguments[G__7373__i + 0]; ++G__7373__i;}
  args = new cljs.core.IndexedSeq(G__7373__a,0,null);
} 
return G__7370__delegate.call(this,args);};
G__7370.cljs$lang$maxFixedArity = 0;
G__7370.cljs$lang$applyTo = (function (arglist__7374){
var args = cljs.core.seq(arglist__7374);
return G__7370__delegate(args);
});
G__7370.cljs$core$IFn$_invoke$arity$variadic = G__7370__delegate;
return G__7370;
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
