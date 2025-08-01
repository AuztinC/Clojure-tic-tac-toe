// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__5755__auto__ = [];
var len__5749__auto___14273 = arguments.length;
var i__5750__auto___14274 = (0);
while(true){
if((i__5750__auto___14274 < len__5749__auto___14273)){
args__5755__auto__.push((arguments[i__5750__auto___14274]));

var G__14275 = (i__5750__auto___14274 + (1));
i__5750__auto___14274 = G__14275;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__14265){
var vec__14266 = p__14265;
var _opts = cljs.core.nth.call(null,vec__14266,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (data){
var map__14269 = data;
var map__14269__$1 = cljs.core.__destructure_map.call(null,map__14269);
var output_ = cljs.core.get.call(null,map__14269__$1,new cljs.core.Keyword(null,"output_","output_",-36797880));
return cljs.core.println.call(null,cljs.core.force.call(null,output_));
})], null);
}));

(taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq14260){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14260));
}));

/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   Raw logging
 * 
 *     There's 2 ways that Timbre can log to a web browser console:
 *       1. As a prepared output string (default)
 *       2. As a list of raw argument objects
 * 
 *     The benefit of #2 is that it allows the browser to offer type-specific
 *     object printing and inspection (e.g. for maps, etc.).
 * 
 *     Raw logging can be enabled or disabled as follows:
 * 
 *       1. On a per-call basis via a special 1st argument to your logging call:
 *            (info ^:meta {:raw-console? true} arg1 ...)
 * 
 *       2. Via middleware, by adding an option to your log data:
 *            (fn my-middleware [data] (assoc data :raw-console? true))
 * 
 *       3. Via an option provided to this appender constructor:
 *            (console-appender {:raw-console? <bool>})
 * 
 *   Ignoring library / "blackbox" code for accurate line numbers, etc.
 * 
 *     Most web browsers offer a feature to ignore library or "blackbox" code
 *     in their debugger.
 * 
 *     You'll probably want to ignore at least the following:
 *       `/taoensso/timbre/appenders/core\.js$` ; Timbre console appender
 *       `/taoensso/timbre\.js$`                ; Timbre core
 *       `/cljs/core\.js$`                      ; ClojureScript core
 * 
 *     Depending on the browser, you can usually set up these exclusions through
 *     right-click popups and/or through a configurable list in a settings menu.
 * 
 *     For example:
 *       https://developer.chrome.com/docs/devtools/settings/ignore-list/
 *       https://webkit.org/web-inspector/web-inspector-settings/
 *       https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/ignoring_sources/index.html
 *       etc.
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__5755__auto__ = [];
var len__5749__auto___14295 = arguments.length;
var i__5750__auto___14296 = (0);
while(true){
if((i__5750__auto___14296 < len__5749__auto___14295)){
args__5755__auto__.push((arguments[i__5750__auto___14296]));

var G__14298 = (i__5750__auto___14296 + (1));
i__5750__auto___14296 = G__14298;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__14280){
var vec__14282 = p__14280;
var map__14285 = cljs.core.nth.call(null,vec__14282,(0),null);
var map__14285__$1 = cljs.core.__destructure_map.call(null,map__14285);
var raw_console_QMARK_ = cljs.core.get.call(null,map__14285__$1,new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),(((!((typeof console !== 'undefined'))))?(function (data){
return null;
}):(function (){var level__GT_logger = (function (level){
var or__5025__auto__ = (function (){var G__14287 = level;
var G__14287__$1 = (((G__14287 instanceof cljs.core.Keyword))?G__14287.fqn:null);
switch (G__14287__$1) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14287__$1)].join('')));

}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return console.log;
}
});
return (function (data){
var temp__5825__auto__ = level__GT_logger.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5825__auto__)){
var logger = temp__5825__auto__;
var temp__5823__auto__ = (function (){var _QMARK_meta = cljs.core.get.call(null,data,new cljs.core.Keyword(null,"?meta","?meta",-793560773));
if(cljs.core.contains_QMARK_.call(null,_QMARK_meta,new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061))){
return cljs.core.get.call(null,_QMARK_meta,new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061));
} else {
if(cljs.core.contains_QMARK_.call(null,data,new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061))){
return cljs.core.get.call(null,data,new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061));
} else {
return raw_console_QMARK_;
}
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var raw_console_QMARK___$1 = temp__5823__auto__;
var output = new cljs.core.Keyword(null,"output-fn","output-fn",1600951539).cljs$core$IFn$_invoke$arity$1(data).call(null,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"msg-type","msg-type",-2132567822),null,new cljs.core.Keyword(null,"?err","?err",549653299),null));
var args = (function (){var vargs = new cljs.core.Keyword(null,"vargs","vargs",-966597273).cljs$core$IFn$_invoke$arity$1(data);
var temp__5823__auto____$1 = new cljs.core.Keyword(null,"?err","?err",549653299).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5823__auto____$1)){
var err = temp__5823__auto____$1;
return cljs.core.cons.call(null,output,cljs.core.cons.call(null,err,vargs));
} else {
return cljs.core.cons.call(null,output,vargs);
}
})();
return logger.apply(console,cljs.core.into_array.call(null,args));
} else {
return logger.call(console,cljs.core.force.call(null,new cljs.core.Keyword(null,"output_","output_",-36797880).cljs$core$IFn$_invoke$arity$1(data)));
}
} else {
return null;
}
});
})())], null);
}));

(taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq14277){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14277));
}));

taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

//# sourceMappingURL=core.js.map
