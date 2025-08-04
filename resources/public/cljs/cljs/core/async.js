// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11889 = arguments.length;
switch (G__11889) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11891 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11891 = (function (f,blockable,meta11892){
this.f = f;
this.blockable = blockable;
this.meta11892 = meta11892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11893,meta11892__$1){
var self__ = this;
var _11893__$1 = this;
return (new cljs.core.async.t_cljs$core$async11891(self__.f,self__.blockable,meta11892__$1));
}));

(cljs.core.async.t_cljs$core$async11891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11893){
var self__ = this;
var _11893__$1 = this;
return self__.meta11892;
}));

(cljs.core.async.t_cljs$core$async11891.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11891.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11892","meta11892",-224437767,null)], null);
}));

(cljs.core.async.t_cljs$core$async11891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11891");

(cljs.core.async.t_cljs$core$async11891.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11891.
 */
cljs.core.async.__GT_t_cljs$core$async11891 = (function cljs$core$async$__GT_t_cljs$core$async11891(f__$1,blockable__$1,meta11892){
return (new cljs.core.async.t_cljs$core$async11891(f__$1,blockable__$1,meta11892));
});

}

return (new cljs.core.async.t_cljs$core$async11891(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__11897 = arguments.length;
switch (G__11897) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__11899 = arguments.length;
switch (G__11899) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__11903 = arguments.length;
switch (G__11903) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11905 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11905);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_11905);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__11907 = arguments.length;
switch (G__11907) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___11909 = n;
var x_11913 = (0);
while(true){
if((x_11913 < n__5616__auto___11909)){
(a[x_11913] = x_11913);

var G__11914 = (x_11913 + (1));
x_11913 = G__11914;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11910 = (function (flag,meta11911){
this.flag = flag;
this.meta11911 = meta11911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11912,meta11911__$1){
var self__ = this;
var _11912__$1 = this;
return (new cljs.core.async.t_cljs$core$async11910(self__.flag,meta11911__$1));
}));

(cljs.core.async.t_cljs$core$async11910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11912){
var self__ = this;
var _11912__$1 = this;
return self__.meta11911;
}));

(cljs.core.async.t_cljs$core$async11910.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11910.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11911","meta11911",-1640070786,null)], null);
}));

(cljs.core.async.t_cljs$core$async11910.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11910");

(cljs.core.async.t_cljs$core$async11910.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11910");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11910.
 */
cljs.core.async.__GT_t_cljs$core$async11910 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11910(flag__$1,meta11911){
return (new cljs.core.async.t_cljs$core$async11910(flag__$1,meta11911));
});

}

return (new cljs.core.async.t_cljs$core$async11910(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11915 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11915 = (function (flag,cb,meta11916){
this.flag = flag;
this.cb = cb;
this.meta11916 = meta11916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11917,meta11916__$1){
var self__ = this;
var _11917__$1 = this;
return (new cljs.core.async.t_cljs$core$async11915(self__.flag,self__.cb,meta11916__$1));
}));

(cljs.core.async.t_cljs$core$async11915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11917){
var self__ = this;
var _11917__$1 = this;
return self__.meta11916;
}));

(cljs.core.async.t_cljs$core$async11915.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11915.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11915.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11915.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11916","meta11916",-1211237884,null)], null);
}));

(cljs.core.async.t_cljs$core$async11915.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11915");

(cljs.core.async.t_cljs$core$async11915.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11915");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11915.
 */
cljs.core.async.__GT_t_cljs$core$async11915 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11915(flag__$1,cb__$1,meta11916){
return (new cljs.core.async.t_cljs$core$async11915(flag__$1,cb__$1,meta11916));
});

}

return (new cljs.core.async.t_cljs$core$async11915(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var ports__$1 = cljs.core.vec.call(null,ports);
var n = cljs.core.count.call(null,ports__$1);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__11918_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11918_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__11919_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11919_SHARP_,port], null));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11924 = (i + (1));
i = G__11924;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5023__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___11925 = arguments.length;
var i__5750__auto___11926 = (0);
while(true){
if((i__5750__auto___11926 < len__5749__auto___11925)){
args__5755__auto__.push((arguments[i__5750__auto___11926]));

var G__11927 = (i__5750__auto___11926 + (1));
i__5750__auto___11926 = G__11927;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11922){
var map__11923 = p__11922;
var map__11923__$1 = cljs.core.__destructure_map.call(null,map__11923);
var opts = map__11923__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11920){
var G__11921 = cljs.core.first.call(null,seq11920);
var seq11920__$1 = cljs.core.next.call(null,seq11920);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11921,seq11920__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__11929 = arguments.length;
switch (G__11929) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11830__auto___11976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_11953){
var state_val_11954 = (state_11953[(1)]);
if((state_val_11954 === (7))){
var inst_11949 = (state_11953[(2)]);
var state_11953__$1 = state_11953;
var statearr_11955_11981 = state_11953__$1;
(statearr_11955_11981[(2)] = inst_11949);

(statearr_11955_11981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11954 === (1))){
var state_11953__$1 = state_11953;
var statearr_11956_11982 = state_11953__$1;
(statearr_11956_11982[(2)] = null);

(statearr_11956_11982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11954 === (4))){
var inst_11932 = (state_11953[(7)]);
var inst_11932__$1 = (state_11953[(2)]);
var inst_11933 = (inst_11932__$1 == null);
var state_11953__$1 = (function (){var statearr_11957 = state_11953;
(statearr_11957[(7)] = inst_11932__$1);

return statearr_11957;
})();
if(cljs.core.truth_(inst_11933)){
var statearr_11958_11989 = state_11953__$1;
(statearr_11958_11989[(1)] = (5));

} else {
var statearr_11959_11990 = state_11953__$1;
(statearr_11959_11990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11954 === (13))){
var state_11953__$1 = state_11953;
var statearr_11960_11991 = state_11953__$1;
(statearr_11960_11991[(2)] = null);

(statearr_11960_11991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11954 === (6))){
var inst_11932 = (state_11953[(7)]);
var state_11953__$1 = state_11953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11953__$1,(11),to,inst_11932);
} else {
if((state_val_11954 === (3))){
var inst_11951 = (state_11953[(2)]);
var state_11953__$1 = state_11953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11953__$1,inst_11951);
} else {
if((state_val_11954 === (12))){
var state_11953__$1 = state_11953;
var statearr_11961_11993 = state_11953__$1;
(statearr_11961_11993[(2)] = null);

(statearr_11961_11993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11954 === (2))){
var state_11953__$1 = state_11953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11953__$1,(4),from);
} else {
if((state_val_11954 === (11))){
var inst_11942 = (state_11953[(2)]);
var state_11953__$1 = state_11953;
if(cljs.core.truth_(inst_11942)){
var statearr_11962_11995 = state_11953__$1;
(statearr_11962_11995[(1)] = (12));

} else {
var statearr_11963_11996 = state_11953__$1;
(statearr_11963_11996[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11954 === (9))){
var state_11953__$1 = state_11953;
var statearr_11964_11999 = state_11953__$1;
(statearr_11964_11999[(2)] = null);

(statearr_11964_11999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11954 === (5))){
var state_11953__$1 = state_11953;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11965_12001 = state_11953__$1;
(statearr_11965_12001[(1)] = (8));

} else {
var statearr_11966_12002 = state_11953__$1;
(statearr_11966_12002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11954 === (14))){
var inst_11947 = (state_11953[(2)]);
var state_11953__$1 = state_11953;
var statearr_11967_12003 = state_11953__$1;
(statearr_11967_12003[(2)] = inst_11947);

(statearr_11967_12003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11954 === (10))){
var inst_11939 = (state_11953[(2)]);
var state_11953__$1 = state_11953;
var statearr_11968_12004 = state_11953__$1;
(statearr_11968_12004[(2)] = inst_11939);

(statearr_11968_12004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11954 === (8))){
var inst_11936 = cljs.core.async.close_BANG_.call(null,to);
var state_11953__$1 = state_11953;
var statearr_11969_12006 = state_11953__$1;
(statearr_11969_12006[(2)] = inst_11936);

(statearr_11969_12006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11757__auto__ = null;
var cljs$core$async$state_machine__11757__auto____0 = (function (){
var statearr_11970 = [null,null,null,null,null,null,null,null];
(statearr_11970[(0)] = cljs$core$async$state_machine__11757__auto__);

(statearr_11970[(1)] = (1));

return statearr_11970;
});
var cljs$core$async$state_machine__11757__auto____1 = (function (state_11953){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_11953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e11971){var ex__11760__auto__ = e11971;
var statearr_11972_12012 = state_11953;
(statearr_11972_12012[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_11953[(4)]))){
var statearr_11973_12013 = state_11953;
(statearr_11973_12013[(1)] = cljs.core.first.call(null,(state_11953[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12017 = state_11953;
state_11953 = G__12017;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$state_machine__11757__auto__ = function(state_11953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11757__auto____1.call(this,state_11953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11757__auto____0;
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11757__auto____1;
return cljs$core$async$state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_11974 = f__11831__auto__.call(null);
(statearr_11974[(6)] = c__11830__auto___11976);

return statearr_11974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__11977){
var vec__11978 = p__11977;
var v = cljs.core.nth.call(null,vec__11978,(0),null);
var p = cljs.core.nth.call(null,vec__11978,(1),null);
var job = vec__11978;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11830__auto___12173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_11987){
var state_val_11988 = (state_11987[(1)]);
if((state_val_11988 === (1))){
var state_11987__$1 = state_11987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11987__$1,(2),res,v);
} else {
if((state_val_11988 === (2))){
var inst_11984 = (state_11987[(2)]);
var inst_11985 = cljs.core.async.close_BANG_.call(null,res);
var state_11987__$1 = (function (){var statearr_11992 = state_11987;
(statearr_11992[(7)] = inst_11984);

return statearr_11992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11987__$1,inst_11985);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____0 = (function (){
var statearr_11994 = [null,null,null,null,null,null,null,null];
(statearr_11994[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__);

(statearr_11994[(1)] = (1));

return statearr_11994;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____1 = (function (state_11987){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_11987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e11997){var ex__11760__auto__ = e11997;
var statearr_11998_12176 = state_11987;
(statearr_11998_12176[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_11987[(4)]))){
var statearr_12000_12177 = state_11987;
(statearr_12000_12177[(1)] = cljs.core.first.call(null,(state_11987[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12178 = state_11987;
state_11987 = G__12178;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__ = function(state_11987){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____1.call(this,state_11987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_12005 = f__11831__auto__.call(null);
(statearr_12005[(6)] = c__11830__auto___12173);

return statearr_12005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__12007){
var vec__12008 = p__12007;
var v = cljs.core.nth.call(null,vec__12008,(0),null);
var p = cljs.core.nth.call(null,vec__12008,(1),null);
var job = vec__12008;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5616__auto___12179 = n;
var __12180 = (0);
while(true){
if((__12180 < n__5616__auto___12179)){
var G__12011_12181 = type;
var G__12011_12182__$1 = (((G__12011_12181 instanceof cljs.core.Keyword))?G__12011_12181.fqn:null);
switch (G__12011_12182__$1) {
case "compute":
var c__11830__auto___12186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12180,c__11830__auto___12186,G__12011_12181,G__12011_12182__$1,n__5616__auto___12179,jobs,results,process__$1,async){
return (function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = ((function (__12180,c__11830__auto___12186,G__12011_12181,G__12011_12182__$1,n__5616__auto___12179,jobs,results,process__$1,async){
return (function (state_12027){
var state_val_12028 = (state_12027[(1)]);
if((state_val_12028 === (1))){
var state_12027__$1 = state_12027;
var statearr_12029_12187 = state_12027__$1;
(statearr_12029_12187[(2)] = null);

(statearr_12029_12187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12028 === (2))){
var state_12027__$1 = state_12027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12027__$1,(4),jobs);
} else {
if((state_val_12028 === (3))){
var inst_12025 = (state_12027[(2)]);
var state_12027__$1 = state_12027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12027__$1,inst_12025);
} else {
if((state_val_12028 === (4))){
var inst_12016 = (state_12027[(2)]);
var inst_12018 = process__$1.call(null,inst_12016);
var state_12027__$1 = state_12027;
if(cljs.core.truth_(inst_12018)){
var statearr_12030_12188 = state_12027__$1;
(statearr_12030_12188[(1)] = (5));

} else {
var statearr_12031_12190 = state_12027__$1;
(statearr_12031_12190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12028 === (5))){
var state_12027__$1 = state_12027;
var statearr_12032_12195 = state_12027__$1;
(statearr_12032_12195[(2)] = null);

(statearr_12032_12195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12028 === (6))){
var state_12027__$1 = state_12027;
var statearr_12033_12200 = state_12027__$1;
(statearr_12033_12200[(2)] = null);

(statearr_12033_12200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12028 === (7))){
var inst_12023 = (state_12027[(2)]);
var state_12027__$1 = state_12027;
var statearr_12034_12215 = state_12027__$1;
(statearr_12034_12215[(2)] = inst_12023);

(statearr_12034_12215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__12180,c__11830__auto___12186,G__12011_12181,G__12011_12182__$1,n__5616__auto___12179,jobs,results,process__$1,async))
;
return ((function (__12180,switch__11756__auto__,c__11830__auto___12186,G__12011_12181,G__12011_12182__$1,n__5616__auto___12179,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____0 = (function (){
var statearr_12035 = [null,null,null,null,null,null,null];
(statearr_12035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__);

(statearr_12035[(1)] = (1));

return statearr_12035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____1 = (function (state_12027){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_12027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e12036){var ex__11760__auto__ = e12036;
var statearr_12037_12220 = state_12027;
(statearr_12037_12220[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_12027[(4)]))){
var statearr_12038_12221 = state_12027;
(statearr_12038_12221[(1)] = cljs.core.first.call(null,(state_12027[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12223 = state_12027;
state_12027 = G__12223;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__ = function(state_12027){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____1.call(this,state_12027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__;
})()
;})(__12180,switch__11756__auto__,c__11830__auto___12186,G__12011_12181,G__12011_12182__$1,n__5616__auto___12179,jobs,results,process__$1,async))
})();
var state__11832__auto__ = (function (){var statearr_12039 = f__11831__auto__.call(null);
(statearr_12039[(6)] = c__11830__auto___12186);

return statearr_12039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
});})(__12180,c__11830__auto___12186,G__12011_12181,G__12011_12182__$1,n__5616__auto___12179,jobs,results,process__$1,async))
);


break;
case "async":
var c__11830__auto___12225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12180,c__11830__auto___12225,G__12011_12181,G__12011_12182__$1,n__5616__auto___12179,jobs,results,process__$1,async){
return (function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = ((function (__12180,c__11830__auto___12225,G__12011_12181,G__12011_12182__$1,n__5616__auto___12179,jobs,results,process__$1,async){
return (function (state_12052){
var state_val_12053 = (state_12052[(1)]);
if((state_val_12053 === (1))){
var state_12052__$1 = state_12052;
var statearr_12054_12229 = state_12052__$1;
(statearr_12054_12229[(2)] = null);

(statearr_12054_12229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12053 === (2))){
var state_12052__$1 = state_12052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12052__$1,(4),jobs);
} else {
if((state_val_12053 === (3))){
var inst_12050 = (state_12052[(2)]);
var state_12052__$1 = state_12052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12052__$1,inst_12050);
} else {
if((state_val_12053 === (4))){
var inst_12042 = (state_12052[(2)]);
var inst_12043 = async.call(null,inst_12042);
var state_12052__$1 = state_12052;
if(cljs.core.truth_(inst_12043)){
var statearr_12055_12232 = state_12052__$1;
(statearr_12055_12232[(1)] = (5));

} else {
var statearr_12056_12234 = state_12052__$1;
(statearr_12056_12234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12053 === (5))){
var state_12052__$1 = state_12052;
var statearr_12057_12235 = state_12052__$1;
(statearr_12057_12235[(2)] = null);

(statearr_12057_12235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12053 === (6))){
var state_12052__$1 = state_12052;
var statearr_12058_12236 = state_12052__$1;
(statearr_12058_12236[(2)] = null);

(statearr_12058_12236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12053 === (7))){
var inst_12048 = (state_12052[(2)]);
var state_12052__$1 = state_12052;
var statearr_12059_12238 = state_12052__$1;
(statearr_12059_12238[(2)] = inst_12048);

(statearr_12059_12238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__12180,c__11830__auto___12225,G__12011_12181,G__12011_12182__$1,n__5616__auto___12179,jobs,results,process__$1,async))
;
return ((function (__12180,switch__11756__auto__,c__11830__auto___12225,G__12011_12181,G__12011_12182__$1,n__5616__auto___12179,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____0 = (function (){
var statearr_12060 = [null,null,null,null,null,null,null];
(statearr_12060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__);

(statearr_12060[(1)] = (1));

return statearr_12060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____1 = (function (state_12052){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_12052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e12061){var ex__11760__auto__ = e12061;
var statearr_12062_12240 = state_12052;
(statearr_12062_12240[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_12052[(4)]))){
var statearr_12063_12242 = state_12052;
(statearr_12063_12242[(1)] = cljs.core.first.call(null,(state_12052[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12244 = state_12052;
state_12052 = G__12244;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__ = function(state_12052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____1.call(this,state_12052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__;
})()
;})(__12180,switch__11756__auto__,c__11830__auto___12225,G__12011_12181,G__12011_12182__$1,n__5616__auto___12179,jobs,results,process__$1,async))
})();
var state__11832__auto__ = (function (){var statearr_12064 = f__11831__auto__.call(null);
(statearr_12064[(6)] = c__11830__auto___12225);

return statearr_12064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
});})(__12180,c__11830__auto___12225,G__12011_12181,G__12011_12182__$1,n__5616__auto___12179,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12011_12182__$1)].join('')));

}

var G__12247 = (__12180 + (1));
__12180 = G__12247;
continue;
} else {
}
break;
}

var c__11830__auto___12248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_12086){
var state_val_12087 = (state_12086[(1)]);
if((state_val_12087 === (7))){
var inst_12082 = (state_12086[(2)]);
var state_12086__$1 = state_12086;
var statearr_12088_12251 = state_12086__$1;
(statearr_12088_12251[(2)] = inst_12082);

(statearr_12088_12251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (1))){
var state_12086__$1 = state_12086;
var statearr_12089_12252 = state_12086__$1;
(statearr_12089_12252[(2)] = null);

(statearr_12089_12252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (4))){
var inst_12067 = (state_12086[(7)]);
var inst_12067__$1 = (state_12086[(2)]);
var inst_12068 = (inst_12067__$1 == null);
var state_12086__$1 = (function (){var statearr_12090 = state_12086;
(statearr_12090[(7)] = inst_12067__$1);

return statearr_12090;
})();
if(cljs.core.truth_(inst_12068)){
var statearr_12091_12254 = state_12086__$1;
(statearr_12091_12254[(1)] = (5));

} else {
var statearr_12092_12257 = state_12086__$1;
(statearr_12092_12257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (6))){
var inst_12067 = (state_12086[(7)]);
var inst_12072 = (state_12086[(8)]);
var inst_12072__$1 = cljs.core.async.chan.call(null,(1));
var inst_12073 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12074 = [inst_12067,inst_12072__$1];
var inst_12075 = (new cljs.core.PersistentVector(null,2,(5),inst_12073,inst_12074,null));
var state_12086__$1 = (function (){var statearr_12093 = state_12086;
(statearr_12093[(8)] = inst_12072__$1);

return statearr_12093;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12086__$1,(8),jobs,inst_12075);
} else {
if((state_val_12087 === (3))){
var inst_12084 = (state_12086[(2)]);
var state_12086__$1 = state_12086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12086__$1,inst_12084);
} else {
if((state_val_12087 === (2))){
var state_12086__$1 = state_12086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12086__$1,(4),from);
} else {
if((state_val_12087 === (9))){
var inst_12079 = (state_12086[(2)]);
var state_12086__$1 = (function (){var statearr_12094 = state_12086;
(statearr_12094[(9)] = inst_12079);

return statearr_12094;
})();
var statearr_12095_12260 = state_12086__$1;
(statearr_12095_12260[(2)] = null);

(statearr_12095_12260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (5))){
var inst_12070 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12086__$1 = state_12086;
var statearr_12096_12261 = state_12086__$1;
(statearr_12096_12261[(2)] = inst_12070);

(statearr_12096_12261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (8))){
var inst_12072 = (state_12086[(8)]);
var inst_12077 = (state_12086[(2)]);
var state_12086__$1 = (function (){var statearr_12097 = state_12086;
(statearr_12097[(10)] = inst_12077);

return statearr_12097;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12086__$1,(9),results,inst_12072);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____0 = (function (){
var statearr_12098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__);

(statearr_12098[(1)] = (1));

return statearr_12098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____1 = (function (state_12086){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_12086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e12099){var ex__11760__auto__ = e12099;
var statearr_12100_12264 = state_12086;
(statearr_12100_12264[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_12086[(4)]))){
var statearr_12101_12268 = state_12086;
(statearr_12101_12268[(1)] = cljs.core.first.call(null,(state_12086[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12277 = state_12086;
state_12086 = G__12277;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__ = function(state_12086){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____1.call(this,state_12086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_12102 = f__11831__auto__.call(null);
(statearr_12102[(6)] = c__11830__auto___12248);

return statearr_12102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));


var c__11830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_12140){
var state_val_12141 = (state_12140[(1)]);
if((state_val_12141 === (7))){
var inst_12136 = (state_12140[(2)]);
var state_12140__$1 = state_12140;
var statearr_12142_12288 = state_12140__$1;
(statearr_12142_12288[(2)] = inst_12136);

(statearr_12142_12288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12141 === (20))){
var state_12140__$1 = state_12140;
var statearr_12143_12289 = state_12140__$1;
(statearr_12143_12289[(2)] = null);

(statearr_12143_12289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12141 === (1))){
var state_12140__$1 = state_12140;
var statearr_12144_12291 = state_12140__$1;
(statearr_12144_12291[(2)] = null);

(statearr_12144_12291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12141 === (4))){
var inst_12105 = (state_12140[(7)]);
var inst_12105__$1 = (state_12140[(2)]);
var inst_12106 = (inst_12105__$1 == null);
var state_12140__$1 = (function (){var statearr_12145 = state_12140;
(statearr_12145[(7)] = inst_12105__$1);

return statearr_12145;
})();
if(cljs.core.truth_(inst_12106)){
var statearr_12146_12294 = state_12140__$1;
(statearr_12146_12294[(1)] = (5));

} else {
var statearr_12147_12295 = state_12140__$1;
(statearr_12147_12295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12141 === (15))){
var inst_12118 = (state_12140[(8)]);
var state_12140__$1 = state_12140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12140__$1,(18),to,inst_12118);
} else {
if((state_val_12141 === (21))){
var inst_12131 = (state_12140[(2)]);
var state_12140__$1 = state_12140;
var statearr_12148_12299 = state_12140__$1;
(statearr_12148_12299[(2)] = inst_12131);

(statearr_12148_12299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12141 === (13))){
var inst_12133 = (state_12140[(2)]);
var state_12140__$1 = (function (){var statearr_12149 = state_12140;
(statearr_12149[(9)] = inst_12133);

return statearr_12149;
})();
var statearr_12150_12300 = state_12140__$1;
(statearr_12150_12300[(2)] = null);

(statearr_12150_12300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12141 === (6))){
var inst_12105 = (state_12140[(7)]);
var state_12140__$1 = state_12140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12140__$1,(11),inst_12105);
} else {
if((state_val_12141 === (17))){
var inst_12126 = (state_12140[(2)]);
var state_12140__$1 = state_12140;
if(cljs.core.truth_(inst_12126)){
var statearr_12151_12304 = state_12140__$1;
(statearr_12151_12304[(1)] = (19));

} else {
var statearr_12152_12305 = state_12140__$1;
(statearr_12152_12305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12141 === (3))){
var inst_12138 = (state_12140[(2)]);
var state_12140__$1 = state_12140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12140__$1,inst_12138);
} else {
if((state_val_12141 === (12))){
var inst_12115 = (state_12140[(10)]);
var state_12140__$1 = state_12140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12140__$1,(14),inst_12115);
} else {
if((state_val_12141 === (2))){
var state_12140__$1 = state_12140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12140__$1,(4),results);
} else {
if((state_val_12141 === (19))){
var state_12140__$1 = state_12140;
var statearr_12153_12307 = state_12140__$1;
(statearr_12153_12307[(2)] = null);

(statearr_12153_12307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12141 === (11))){
var inst_12115 = (state_12140[(2)]);
var state_12140__$1 = (function (){var statearr_12154 = state_12140;
(statearr_12154[(10)] = inst_12115);

return statearr_12154;
})();
var statearr_12155_12309 = state_12140__$1;
(statearr_12155_12309[(2)] = null);

(statearr_12155_12309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12141 === (9))){
var state_12140__$1 = state_12140;
var statearr_12156_12311 = state_12140__$1;
(statearr_12156_12311[(2)] = null);

(statearr_12156_12311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12141 === (5))){
var state_12140__$1 = state_12140;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12157_12313 = state_12140__$1;
(statearr_12157_12313[(1)] = (8));

} else {
var statearr_12158_12314 = state_12140__$1;
(statearr_12158_12314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12141 === (14))){
var inst_12118 = (state_12140[(8)]);
var inst_12120 = (state_12140[(11)]);
var inst_12118__$1 = (state_12140[(2)]);
var inst_12119 = (inst_12118__$1 == null);
var inst_12120__$1 = cljs.core.not.call(null,inst_12119);
var state_12140__$1 = (function (){var statearr_12159 = state_12140;
(statearr_12159[(8)] = inst_12118__$1);

(statearr_12159[(11)] = inst_12120__$1);

return statearr_12159;
})();
if(inst_12120__$1){
var statearr_12160_12316 = state_12140__$1;
(statearr_12160_12316[(1)] = (15));

} else {
var statearr_12161_12317 = state_12140__$1;
(statearr_12161_12317[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12141 === (16))){
var inst_12120 = (state_12140[(11)]);
var state_12140__$1 = state_12140;
var statearr_12162_12319 = state_12140__$1;
(statearr_12162_12319[(2)] = inst_12120);

(statearr_12162_12319[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12141 === (10))){
var inst_12112 = (state_12140[(2)]);
var state_12140__$1 = state_12140;
var statearr_12163_12322 = state_12140__$1;
(statearr_12163_12322[(2)] = inst_12112);

(statearr_12163_12322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12141 === (18))){
var inst_12123 = (state_12140[(2)]);
var state_12140__$1 = state_12140;
var statearr_12164_12324 = state_12140__$1;
(statearr_12164_12324[(2)] = inst_12123);

(statearr_12164_12324[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12141 === (8))){
var inst_12109 = cljs.core.async.close_BANG_.call(null,to);
var state_12140__$1 = state_12140;
var statearr_12165_12325 = state_12140__$1;
(statearr_12165_12325[(2)] = inst_12109);

(statearr_12165_12325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____0 = (function (){
var statearr_12166 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__);

(statearr_12166[(1)] = (1));

return statearr_12166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____1 = (function (state_12140){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_12140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e12167){var ex__11760__auto__ = e12167;
var statearr_12168_12327 = state_12140;
(statearr_12168_12327[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_12140[(4)]))){
var statearr_12169_12328 = state_12140;
(statearr_12169_12328[(1)] = cljs.core.first.call(null,(state_12140[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12329 = state_12140;
state_12140 = G__12329;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__ = function(state_12140){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____1.call(this,state_12140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_12170 = f__11831__auto__.call(null);
(statearr_12170[(6)] = c__11830__auto__);

return statearr_12170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));

return c__11830__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__12172 = arguments.length;
switch (G__12172) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__12175 = arguments.length;
switch (G__12175) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__12185 = arguments.length;
switch (G__12185) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11830__auto___12346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_12218){
var state_val_12219 = (state_12218[(1)]);
if((state_val_12219 === (7))){
var inst_12213 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12222_12348 = state_12218__$1;
(statearr_12222_12348[(2)] = inst_12213);

(statearr_12222_12348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (1))){
var state_12218__$1 = state_12218;
var statearr_12224_12349 = state_12218__$1;
(statearr_12224_12349[(2)] = null);

(statearr_12224_12349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (4))){
var inst_12192 = (state_12218[(7)]);
var inst_12192__$1 = (state_12218[(2)]);
var inst_12193 = (inst_12192__$1 == null);
var state_12218__$1 = (function (){var statearr_12226 = state_12218;
(statearr_12226[(7)] = inst_12192__$1);

return statearr_12226;
})();
if(cljs.core.truth_(inst_12193)){
var statearr_12227_12350 = state_12218__$1;
(statearr_12227_12350[(1)] = (5));

} else {
var statearr_12228_12351 = state_12218__$1;
(statearr_12228_12351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (13))){
var state_12218__$1 = state_12218;
var statearr_12230_12355 = state_12218__$1;
(statearr_12230_12355[(2)] = null);

(statearr_12230_12355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (6))){
var inst_12192 = (state_12218[(7)]);
var inst_12199 = p.call(null,inst_12192);
var state_12218__$1 = state_12218;
if(cljs.core.truth_(inst_12199)){
var statearr_12231_12363 = state_12218__$1;
(statearr_12231_12363[(1)] = (9));

} else {
var statearr_12233_12365 = state_12218__$1;
(statearr_12233_12365[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (3))){
var inst_12216 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12218__$1,inst_12216);
} else {
if((state_val_12219 === (12))){
var state_12218__$1 = state_12218;
var statearr_12237_12379 = state_12218__$1;
(statearr_12237_12379[(2)] = null);

(statearr_12237_12379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (2))){
var state_12218__$1 = state_12218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12218__$1,(4),ch);
} else {
if((state_val_12219 === (11))){
var inst_12192 = (state_12218[(7)]);
var inst_12204 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12218__$1,(8),inst_12204,inst_12192);
} else {
if((state_val_12219 === (9))){
var state_12218__$1 = state_12218;
var statearr_12239_12382 = state_12218__$1;
(statearr_12239_12382[(2)] = tc);

(statearr_12239_12382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (5))){
var inst_12196 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12197 = cljs.core.async.close_BANG_.call(null,fc);
var state_12218__$1 = (function (){var statearr_12241 = state_12218;
(statearr_12241[(8)] = inst_12196);

return statearr_12241;
})();
var statearr_12243_12384 = state_12218__$1;
(statearr_12243_12384[(2)] = inst_12197);

(statearr_12243_12384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (14))){
var inst_12211 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12245_12387 = state_12218__$1;
(statearr_12245_12387[(2)] = inst_12211);

(statearr_12245_12387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (10))){
var state_12218__$1 = state_12218;
var statearr_12246_12388 = state_12218__$1;
(statearr_12246_12388[(2)] = fc);

(statearr_12246_12388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (8))){
var inst_12206 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
if(cljs.core.truth_(inst_12206)){
var statearr_12249_12389 = state_12218__$1;
(statearr_12249_12389[(1)] = (12));

} else {
var statearr_12250_12391 = state_12218__$1;
(statearr_12250_12391[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11757__auto__ = null;
var cljs$core$async$state_machine__11757__auto____0 = (function (){
var statearr_12253 = [null,null,null,null,null,null,null,null,null];
(statearr_12253[(0)] = cljs$core$async$state_machine__11757__auto__);

(statearr_12253[(1)] = (1));

return statearr_12253;
});
var cljs$core$async$state_machine__11757__auto____1 = (function (state_12218){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_12218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e12255){var ex__11760__auto__ = e12255;
var statearr_12256_12394 = state_12218;
(statearr_12256_12394[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_12218[(4)]))){
var statearr_12258_12395 = state_12218;
(statearr_12258_12395[(1)] = cljs.core.first.call(null,(state_12218[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12397 = state_12218;
state_12218 = G__12397;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$state_machine__11757__auto__ = function(state_12218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11757__auto____1.call(this,state_12218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11757__auto____0;
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11757__auto____1;
return cljs$core$async$state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_12259 = f__11831__auto__.call(null);
(statearr_12259[(6)] = c__11830__auto___12346);

return statearr_12259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_12286){
var state_val_12287 = (state_12286[(1)]);
if((state_val_12287 === (7))){
var inst_12282 = (state_12286[(2)]);
var state_12286__$1 = state_12286;
var statearr_12290_12402 = state_12286__$1;
(statearr_12290_12402[(2)] = inst_12282);

(statearr_12290_12402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (1))){
var inst_12262 = init;
var inst_12263 = inst_12262;
var state_12286__$1 = (function (){var statearr_12292 = state_12286;
(statearr_12292[(7)] = inst_12263);

return statearr_12292;
})();
var statearr_12293_12404 = state_12286__$1;
(statearr_12293_12404[(2)] = null);

(statearr_12293_12404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (4))){
var inst_12267 = (state_12286[(8)]);
var inst_12267__$1 = (state_12286[(2)]);
var inst_12269 = (inst_12267__$1 == null);
var state_12286__$1 = (function (){var statearr_12296 = state_12286;
(statearr_12296[(8)] = inst_12267__$1);

return statearr_12296;
})();
if(cljs.core.truth_(inst_12269)){
var statearr_12297_12407 = state_12286__$1;
(statearr_12297_12407[(1)] = (5));

} else {
var statearr_12298_12408 = state_12286__$1;
(statearr_12298_12408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (6))){
var inst_12263 = (state_12286[(7)]);
var inst_12267 = (state_12286[(8)]);
var inst_12272 = (state_12286[(9)]);
var inst_12272__$1 = f.call(null,inst_12263,inst_12267);
var inst_12273 = cljs.core.reduced_QMARK_.call(null,inst_12272__$1);
var state_12286__$1 = (function (){var statearr_12301 = state_12286;
(statearr_12301[(9)] = inst_12272__$1);

return statearr_12301;
})();
if(inst_12273){
var statearr_12302_12411 = state_12286__$1;
(statearr_12302_12411[(1)] = (8));

} else {
var statearr_12303_12412 = state_12286__$1;
(statearr_12303_12412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (3))){
var inst_12284 = (state_12286[(2)]);
var state_12286__$1 = state_12286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12286__$1,inst_12284);
} else {
if((state_val_12287 === (2))){
var state_12286__$1 = state_12286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12286__$1,(4),ch);
} else {
if((state_val_12287 === (9))){
var inst_12272 = (state_12286[(9)]);
var inst_12263 = inst_12272;
var state_12286__$1 = (function (){var statearr_12306 = state_12286;
(statearr_12306[(7)] = inst_12263);

return statearr_12306;
})();
var statearr_12308_12417 = state_12286__$1;
(statearr_12308_12417[(2)] = null);

(statearr_12308_12417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (5))){
var inst_12263 = (state_12286[(7)]);
var state_12286__$1 = state_12286;
var statearr_12310_12418 = state_12286__$1;
(statearr_12310_12418[(2)] = inst_12263);

(statearr_12310_12418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (10))){
var inst_12280 = (state_12286[(2)]);
var state_12286__$1 = state_12286;
var statearr_12312_12419 = state_12286__$1;
(statearr_12312_12419[(2)] = inst_12280);

(statearr_12312_12419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12287 === (8))){
var inst_12272 = (state_12286[(9)]);
var inst_12275 = cljs.core.deref.call(null,inst_12272);
var state_12286__$1 = state_12286;
var statearr_12315_12421 = state_12286__$1;
(statearr_12315_12421[(2)] = inst_12275);

(statearr_12315_12421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__11757__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11757__auto____0 = (function (){
var statearr_12318 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12318[(0)] = cljs$core$async$reduce_$_state_machine__11757__auto__);

(statearr_12318[(1)] = (1));

return statearr_12318;
});
var cljs$core$async$reduce_$_state_machine__11757__auto____1 = (function (state_12286){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_12286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e12320){var ex__11760__auto__ = e12320;
var statearr_12321_12422 = state_12286;
(statearr_12321_12422[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_12286[(4)]))){
var statearr_12323_12424 = state_12286;
(statearr_12323_12424[(1)] = cljs.core.first.call(null,(state_12286[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12426 = state_12286;
state_12286 = G__12426;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11757__auto__ = function(state_12286){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11757__auto____1.call(this,state_12286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11757__auto____0;
cljs$core$async$reduce_$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11757__auto____1;
return cljs$core$async$reduce_$_state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_12326 = f__11831__auto__.call(null);
(statearr_12326[(6)] = c__11830__auto__);

return statearr_12326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));

return c__11830__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_12335){
var state_val_12336 = (state_12335[(1)]);
if((state_val_12336 === (1))){
var inst_12330 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_12335__$1 = state_12335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12335__$1,(2),inst_12330);
} else {
if((state_val_12336 === (2))){
var inst_12332 = (state_12335[(2)]);
var inst_12333 = f__$1.call(null,inst_12332);
var state_12335__$1 = state_12335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12335__$1,inst_12333);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11757__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11757__auto____0 = (function (){
var statearr_12339 = [null,null,null,null,null,null,null];
(statearr_12339[(0)] = cljs$core$async$transduce_$_state_machine__11757__auto__);

(statearr_12339[(1)] = (1));

return statearr_12339;
});
var cljs$core$async$transduce_$_state_machine__11757__auto____1 = (function (state_12335){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_12335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e12340){var ex__11760__auto__ = e12340;
var statearr_12341_12427 = state_12335;
(statearr_12341_12427[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_12335[(4)]))){
var statearr_12342_12428 = state_12335;
(statearr_12342_12428[(1)] = cljs.core.first.call(null,(state_12335[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12429 = state_12335;
state_12335 = G__12429;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11757__auto__ = function(state_12335){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11757__auto____1.call(this,state_12335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11757__auto____0;
cljs$core$async$transduce_$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11757__auto____1;
return cljs$core$async$transduce_$_state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_12343 = f__11831__auto__.call(null);
(statearr_12343[(6)] = c__11830__auto__);

return statearr_12343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));

return c__11830__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__12347 = arguments.length;
switch (G__12347) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_12380){
var state_val_12381 = (state_12380[(1)]);
if((state_val_12381 === (7))){
var inst_12359 = (state_12380[(2)]);
var state_12380__$1 = state_12380;
var statearr_12383_12431 = state_12380__$1;
(statearr_12383_12431[(2)] = inst_12359);

(statearr_12383_12431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12381 === (1))){
var inst_12352 = cljs.core.seq.call(null,coll);
var inst_12353 = inst_12352;
var state_12380__$1 = (function (){var statearr_12385 = state_12380;
(statearr_12385[(7)] = inst_12353);

return statearr_12385;
})();
var statearr_12386_12432 = state_12380__$1;
(statearr_12386_12432[(2)] = null);

(statearr_12386_12432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12381 === (4))){
var inst_12353 = (state_12380[(7)]);
var inst_12357 = cljs.core.first.call(null,inst_12353);
var state_12380__$1 = state_12380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12380__$1,(7),ch,inst_12357);
} else {
if((state_val_12381 === (13))){
var inst_12373 = (state_12380[(2)]);
var state_12380__$1 = state_12380;
var statearr_12390_12433 = state_12380__$1;
(statearr_12390_12433[(2)] = inst_12373);

(statearr_12390_12433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12381 === (6))){
var inst_12362 = (state_12380[(2)]);
var state_12380__$1 = state_12380;
if(cljs.core.truth_(inst_12362)){
var statearr_12392_12434 = state_12380__$1;
(statearr_12392_12434[(1)] = (8));

} else {
var statearr_12393_12435 = state_12380__$1;
(statearr_12393_12435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12381 === (3))){
var inst_12377 = (state_12380[(2)]);
var state_12380__$1 = state_12380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12380__$1,inst_12377);
} else {
if((state_val_12381 === (12))){
var state_12380__$1 = state_12380;
var statearr_12396_12436 = state_12380__$1;
(statearr_12396_12436[(2)] = null);

(statearr_12396_12436[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12381 === (2))){
var inst_12353 = (state_12380[(7)]);
var state_12380__$1 = state_12380;
if(cljs.core.truth_(inst_12353)){
var statearr_12398_12437 = state_12380__$1;
(statearr_12398_12437[(1)] = (4));

} else {
var statearr_12399_12438 = state_12380__$1;
(statearr_12399_12438[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12381 === (11))){
var inst_12370 = cljs.core.async.close_BANG_.call(null,ch);
var state_12380__$1 = state_12380;
var statearr_12400_12439 = state_12380__$1;
(statearr_12400_12439[(2)] = inst_12370);

(statearr_12400_12439[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12381 === (9))){
var state_12380__$1 = state_12380;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12401_12440 = state_12380__$1;
(statearr_12401_12440[(1)] = (11));

} else {
var statearr_12403_12441 = state_12380__$1;
(statearr_12403_12441[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12381 === (5))){
var inst_12353 = (state_12380[(7)]);
var state_12380__$1 = state_12380;
var statearr_12405_12442 = state_12380__$1;
(statearr_12405_12442[(2)] = inst_12353);

(statearr_12405_12442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12381 === (10))){
var inst_12375 = (state_12380[(2)]);
var state_12380__$1 = state_12380;
var statearr_12406_12443 = state_12380__$1;
(statearr_12406_12443[(2)] = inst_12375);

(statearr_12406_12443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12381 === (8))){
var inst_12353 = (state_12380[(7)]);
var inst_12366 = cljs.core.next.call(null,inst_12353);
var inst_12353__$1 = inst_12366;
var state_12380__$1 = (function (){var statearr_12409 = state_12380;
(statearr_12409[(7)] = inst_12353__$1);

return statearr_12409;
})();
var statearr_12410_12444 = state_12380__$1;
(statearr_12410_12444[(2)] = null);

(statearr_12410_12444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11757__auto__ = null;
var cljs$core$async$state_machine__11757__auto____0 = (function (){
var statearr_12413 = [null,null,null,null,null,null,null,null];
(statearr_12413[(0)] = cljs$core$async$state_machine__11757__auto__);

(statearr_12413[(1)] = (1));

return statearr_12413;
});
var cljs$core$async$state_machine__11757__auto____1 = (function (state_12380){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_12380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e12414){var ex__11760__auto__ = e12414;
var statearr_12415_12448 = state_12380;
(statearr_12415_12448[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_12380[(4)]))){
var statearr_12416_12449 = state_12380;
(statearr_12416_12449[(1)] = cljs.core.first.call(null,(state_12380[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12450 = state_12380;
state_12380 = G__12450;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$state_machine__11757__auto__ = function(state_12380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11757__auto____1.call(this,state_12380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11757__auto____0;
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11757__auto____1;
return cljs$core$async$state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_12420 = f__11831__auto__.call(null);
(statearr_12420[(6)] = c__11830__auto__);

return statearr_12420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));

return c__11830__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__12425 = arguments.length;
switch (G__12425) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_12452 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,_);
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_12452.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12453 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_12453.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12465 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch);
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_12465.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12485 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m);
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_12485.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12445 = (function (ch,cs,meta12446){
this.ch = ch;
this.cs = cs;
this.meta12446 = meta12446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12447,meta12446__$1){
var self__ = this;
var _12447__$1 = this;
return (new cljs.core.async.t_cljs$core$async12445(self__.ch,self__.cs,meta12446__$1));
}));

(cljs.core.async.t_cljs$core$async12445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12447){
var self__ = this;
var _12447__$1 = this;
return self__.meta12446;
}));

(cljs.core.async.t_cljs$core$async12445.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12445.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12445.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12445.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12445.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12445.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12446","meta12446",1314623947,null)], null);
}));

(cljs.core.async.t_cljs$core$async12445.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12445");

(cljs.core.async.t_cljs$core$async12445.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12445");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12445.
 */
cljs.core.async.__GT_t_cljs$core$async12445 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12445(ch__$1,cs__$1,meta12446){
return (new cljs.core.async.t_cljs$core$async12445(ch__$1,cs__$1,meta12446));
});

}

return (new cljs.core.async.t_cljs$core$async12445(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__11830__auto___12674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_12588){
var state_val_12589 = (state_12588[(1)]);
if((state_val_12589 === (7))){
var inst_12584 = (state_12588[(2)]);
var state_12588__$1 = state_12588;
var statearr_12590_12675 = state_12588__$1;
(statearr_12590_12675[(2)] = inst_12584);

(statearr_12590_12675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (20))){
var inst_12489 = (state_12588[(7)]);
var inst_12501 = cljs.core.first.call(null,inst_12489);
var inst_12502 = cljs.core.nth.call(null,inst_12501,(0),null);
var inst_12503 = cljs.core.nth.call(null,inst_12501,(1),null);
var state_12588__$1 = (function (){var statearr_12591 = state_12588;
(statearr_12591[(8)] = inst_12502);

return statearr_12591;
})();
if(cljs.core.truth_(inst_12503)){
var statearr_12592_12676 = state_12588__$1;
(statearr_12592_12676[(1)] = (22));

} else {
var statearr_12593_12677 = state_12588__$1;
(statearr_12593_12677[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (27))){
var inst_12531 = (state_12588[(9)]);
var inst_12533 = (state_12588[(10)]);
var inst_12538 = (state_12588[(11)]);
var inst_12456 = (state_12588[(12)]);
var inst_12538__$1 = cljs.core._nth.call(null,inst_12531,inst_12533);
var inst_12539 = cljs.core.async.put_BANG_.call(null,inst_12538__$1,inst_12456,done);
var state_12588__$1 = (function (){var statearr_12594 = state_12588;
(statearr_12594[(11)] = inst_12538__$1);

return statearr_12594;
})();
if(cljs.core.truth_(inst_12539)){
var statearr_12595_12678 = state_12588__$1;
(statearr_12595_12678[(1)] = (30));

} else {
var statearr_12596_12679 = state_12588__$1;
(statearr_12596_12679[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (1))){
var state_12588__$1 = state_12588;
var statearr_12597_12680 = state_12588__$1;
(statearr_12597_12680[(2)] = null);

(statearr_12597_12680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (24))){
var inst_12489 = (state_12588[(7)]);
var inst_12508 = (state_12588[(2)]);
var inst_12509 = cljs.core.next.call(null,inst_12489);
var inst_12466 = inst_12509;
var inst_12467 = null;
var inst_12468 = (0);
var inst_12469 = (0);
var state_12588__$1 = (function (){var statearr_12598 = state_12588;
(statearr_12598[(13)] = inst_12508);

(statearr_12598[(14)] = inst_12466);

(statearr_12598[(15)] = inst_12467);

(statearr_12598[(16)] = inst_12468);

(statearr_12598[(17)] = inst_12469);

return statearr_12598;
})();
var statearr_12599_12681 = state_12588__$1;
(statearr_12599_12681[(2)] = null);

(statearr_12599_12681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (39))){
var state_12588__$1 = state_12588;
var statearr_12603_12682 = state_12588__$1;
(statearr_12603_12682[(2)] = null);

(statearr_12603_12682[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (4))){
var inst_12456 = (state_12588[(12)]);
var inst_12456__$1 = (state_12588[(2)]);
var inst_12457 = (inst_12456__$1 == null);
var state_12588__$1 = (function (){var statearr_12604 = state_12588;
(statearr_12604[(12)] = inst_12456__$1);

return statearr_12604;
})();
if(cljs.core.truth_(inst_12457)){
var statearr_12605_12683 = state_12588__$1;
(statearr_12605_12683[(1)] = (5));

} else {
var statearr_12606_12684 = state_12588__$1;
(statearr_12606_12684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (15))){
var inst_12469 = (state_12588[(17)]);
var inst_12466 = (state_12588[(14)]);
var inst_12467 = (state_12588[(15)]);
var inst_12468 = (state_12588[(16)]);
var inst_12484 = (state_12588[(2)]);
var inst_12486 = (inst_12469 + (1));
var tmp12600 = inst_12467;
var tmp12601 = inst_12466;
var tmp12602 = inst_12468;
var inst_12466__$1 = tmp12601;
var inst_12467__$1 = tmp12600;
var inst_12468__$1 = tmp12602;
var inst_12469__$1 = inst_12486;
var state_12588__$1 = (function (){var statearr_12607 = state_12588;
(statearr_12607[(18)] = inst_12484);

(statearr_12607[(14)] = inst_12466__$1);

(statearr_12607[(15)] = inst_12467__$1);

(statearr_12607[(16)] = inst_12468__$1);

(statearr_12607[(17)] = inst_12469__$1);

return statearr_12607;
})();
var statearr_12608_12685 = state_12588__$1;
(statearr_12608_12685[(2)] = null);

(statearr_12608_12685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (21))){
var inst_12512 = (state_12588[(2)]);
var state_12588__$1 = state_12588;
var statearr_12612_12686 = state_12588__$1;
(statearr_12612_12686[(2)] = inst_12512);

(statearr_12612_12686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (31))){
var inst_12538 = (state_12588[(11)]);
var inst_12542 = cljs.core.async.untap_STAR_.call(null,m,inst_12538);
var state_12588__$1 = state_12588;
var statearr_12613_12687 = state_12588__$1;
(statearr_12613_12687[(2)] = inst_12542);

(statearr_12613_12687[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (32))){
var inst_12533 = (state_12588[(10)]);
var inst_12530 = (state_12588[(19)]);
var inst_12531 = (state_12588[(9)]);
var inst_12532 = (state_12588[(20)]);
var inst_12544 = (state_12588[(2)]);
var inst_12545 = (inst_12533 + (1));
var tmp12609 = inst_12532;
var tmp12610 = inst_12530;
var tmp12611 = inst_12531;
var inst_12530__$1 = tmp12610;
var inst_12531__$1 = tmp12611;
var inst_12532__$1 = tmp12609;
var inst_12533__$1 = inst_12545;
var state_12588__$1 = (function (){var statearr_12614 = state_12588;
(statearr_12614[(21)] = inst_12544);

(statearr_12614[(19)] = inst_12530__$1);

(statearr_12614[(9)] = inst_12531__$1);

(statearr_12614[(20)] = inst_12532__$1);

(statearr_12614[(10)] = inst_12533__$1);

return statearr_12614;
})();
var statearr_12615_12688 = state_12588__$1;
(statearr_12615_12688[(2)] = null);

(statearr_12615_12688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (40))){
var inst_12557 = (state_12588[(22)]);
var inst_12561 = cljs.core.async.untap_STAR_.call(null,m,inst_12557);
var state_12588__$1 = state_12588;
var statearr_12616_12689 = state_12588__$1;
(statearr_12616_12689[(2)] = inst_12561);

(statearr_12616_12689[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (33))){
var inst_12548 = (state_12588[(23)]);
var inst_12550 = cljs.core.chunked_seq_QMARK_.call(null,inst_12548);
var state_12588__$1 = state_12588;
if(inst_12550){
var statearr_12617_12690 = state_12588__$1;
(statearr_12617_12690[(1)] = (36));

} else {
var statearr_12618_12691 = state_12588__$1;
(statearr_12618_12691[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (13))){
var inst_12478 = (state_12588[(24)]);
var inst_12481 = cljs.core.async.close_BANG_.call(null,inst_12478);
var state_12588__$1 = state_12588;
var statearr_12619_12692 = state_12588__$1;
(statearr_12619_12692[(2)] = inst_12481);

(statearr_12619_12692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (22))){
var inst_12502 = (state_12588[(8)]);
var inst_12505 = cljs.core.async.close_BANG_.call(null,inst_12502);
var state_12588__$1 = state_12588;
var statearr_12620_12693 = state_12588__$1;
(statearr_12620_12693[(2)] = inst_12505);

(statearr_12620_12693[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (36))){
var inst_12548 = (state_12588[(23)]);
var inst_12552 = cljs.core.chunk_first.call(null,inst_12548);
var inst_12553 = cljs.core.chunk_rest.call(null,inst_12548);
var inst_12554 = cljs.core.count.call(null,inst_12552);
var inst_12530 = inst_12553;
var inst_12531 = inst_12552;
var inst_12532 = inst_12554;
var inst_12533 = (0);
var state_12588__$1 = (function (){var statearr_12621 = state_12588;
(statearr_12621[(19)] = inst_12530);

(statearr_12621[(9)] = inst_12531);

(statearr_12621[(20)] = inst_12532);

(statearr_12621[(10)] = inst_12533);

return statearr_12621;
})();
var statearr_12622_12698 = state_12588__$1;
(statearr_12622_12698[(2)] = null);

(statearr_12622_12698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (41))){
var inst_12548 = (state_12588[(23)]);
var inst_12563 = (state_12588[(2)]);
var inst_12564 = cljs.core.next.call(null,inst_12548);
var inst_12530 = inst_12564;
var inst_12531 = null;
var inst_12532 = (0);
var inst_12533 = (0);
var state_12588__$1 = (function (){var statearr_12623 = state_12588;
(statearr_12623[(25)] = inst_12563);

(statearr_12623[(19)] = inst_12530);

(statearr_12623[(9)] = inst_12531);

(statearr_12623[(20)] = inst_12532);

(statearr_12623[(10)] = inst_12533);

return statearr_12623;
})();
var statearr_12624_12701 = state_12588__$1;
(statearr_12624_12701[(2)] = null);

(statearr_12624_12701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (43))){
var state_12588__$1 = state_12588;
var statearr_12625_12703 = state_12588__$1;
(statearr_12625_12703[(2)] = null);

(statearr_12625_12703[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (29))){
var inst_12572 = (state_12588[(2)]);
var state_12588__$1 = state_12588;
var statearr_12626_12705 = state_12588__$1;
(statearr_12626_12705[(2)] = inst_12572);

(statearr_12626_12705[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (44))){
var inst_12581 = (state_12588[(2)]);
var state_12588__$1 = (function (){var statearr_12627 = state_12588;
(statearr_12627[(26)] = inst_12581);

return statearr_12627;
})();
var statearr_12628_12707 = state_12588__$1;
(statearr_12628_12707[(2)] = null);

(statearr_12628_12707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (6))){
var inst_12522 = (state_12588[(27)]);
var inst_12521 = cljs.core.deref.call(null,cs);
var inst_12522__$1 = cljs.core.keys.call(null,inst_12521);
var inst_12523 = cljs.core.count.call(null,inst_12522__$1);
var inst_12524 = cljs.core.reset_BANG_.call(null,dctr,inst_12523);
var inst_12529 = cljs.core.seq.call(null,inst_12522__$1);
var inst_12530 = inst_12529;
var inst_12531 = null;
var inst_12532 = (0);
var inst_12533 = (0);
var state_12588__$1 = (function (){var statearr_12629 = state_12588;
(statearr_12629[(27)] = inst_12522__$1);

(statearr_12629[(28)] = inst_12524);

(statearr_12629[(19)] = inst_12530);

(statearr_12629[(9)] = inst_12531);

(statearr_12629[(20)] = inst_12532);

(statearr_12629[(10)] = inst_12533);

return statearr_12629;
})();
var statearr_12630_12708 = state_12588__$1;
(statearr_12630_12708[(2)] = null);

(statearr_12630_12708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (28))){
var inst_12530 = (state_12588[(19)]);
var inst_12548 = (state_12588[(23)]);
var inst_12548__$1 = cljs.core.seq.call(null,inst_12530);
var state_12588__$1 = (function (){var statearr_12631 = state_12588;
(statearr_12631[(23)] = inst_12548__$1);

return statearr_12631;
})();
if(inst_12548__$1){
var statearr_12632_12709 = state_12588__$1;
(statearr_12632_12709[(1)] = (33));

} else {
var statearr_12633_12710 = state_12588__$1;
(statearr_12633_12710[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (25))){
var inst_12533 = (state_12588[(10)]);
var inst_12532 = (state_12588[(20)]);
var inst_12535 = (inst_12533 < inst_12532);
var inst_12536 = inst_12535;
var state_12588__$1 = state_12588;
if(cljs.core.truth_(inst_12536)){
var statearr_12634_12711 = state_12588__$1;
(statearr_12634_12711[(1)] = (27));

} else {
var statearr_12635_12712 = state_12588__$1;
(statearr_12635_12712[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (34))){
var state_12588__$1 = state_12588;
var statearr_12636_12713 = state_12588__$1;
(statearr_12636_12713[(2)] = null);

(statearr_12636_12713[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (17))){
var state_12588__$1 = state_12588;
var statearr_12637_12714 = state_12588__$1;
(statearr_12637_12714[(2)] = null);

(statearr_12637_12714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (3))){
var inst_12586 = (state_12588[(2)]);
var state_12588__$1 = state_12588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12588__$1,inst_12586);
} else {
if((state_val_12589 === (12))){
var inst_12517 = (state_12588[(2)]);
var state_12588__$1 = state_12588;
var statearr_12638_12715 = state_12588__$1;
(statearr_12638_12715[(2)] = inst_12517);

(statearr_12638_12715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (2))){
var state_12588__$1 = state_12588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12588__$1,(4),ch);
} else {
if((state_val_12589 === (23))){
var state_12588__$1 = state_12588;
var statearr_12639_12716 = state_12588__$1;
(statearr_12639_12716[(2)] = null);

(statearr_12639_12716[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (35))){
var inst_12570 = (state_12588[(2)]);
var state_12588__$1 = state_12588;
var statearr_12640_12720 = state_12588__$1;
(statearr_12640_12720[(2)] = inst_12570);

(statearr_12640_12720[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (19))){
var inst_12489 = (state_12588[(7)]);
var inst_12493 = cljs.core.chunk_first.call(null,inst_12489);
var inst_12494 = cljs.core.chunk_rest.call(null,inst_12489);
var inst_12495 = cljs.core.count.call(null,inst_12493);
var inst_12466 = inst_12494;
var inst_12467 = inst_12493;
var inst_12468 = inst_12495;
var inst_12469 = (0);
var state_12588__$1 = (function (){var statearr_12641 = state_12588;
(statearr_12641[(14)] = inst_12466);

(statearr_12641[(15)] = inst_12467);

(statearr_12641[(16)] = inst_12468);

(statearr_12641[(17)] = inst_12469);

return statearr_12641;
})();
var statearr_12642_12721 = state_12588__$1;
(statearr_12642_12721[(2)] = null);

(statearr_12642_12721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (11))){
var inst_12466 = (state_12588[(14)]);
var inst_12489 = (state_12588[(7)]);
var inst_12489__$1 = cljs.core.seq.call(null,inst_12466);
var state_12588__$1 = (function (){var statearr_12643 = state_12588;
(statearr_12643[(7)] = inst_12489__$1);

return statearr_12643;
})();
if(inst_12489__$1){
var statearr_12644_12722 = state_12588__$1;
(statearr_12644_12722[(1)] = (16));

} else {
var statearr_12645_12723 = state_12588__$1;
(statearr_12645_12723[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (9))){
var inst_12519 = (state_12588[(2)]);
var state_12588__$1 = state_12588;
var statearr_12646_12724 = state_12588__$1;
(statearr_12646_12724[(2)] = inst_12519);

(statearr_12646_12724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (5))){
var inst_12463 = cljs.core.deref.call(null,cs);
var inst_12464 = cljs.core.seq.call(null,inst_12463);
var inst_12466 = inst_12464;
var inst_12467 = null;
var inst_12468 = (0);
var inst_12469 = (0);
var state_12588__$1 = (function (){var statearr_12647 = state_12588;
(statearr_12647[(14)] = inst_12466);

(statearr_12647[(15)] = inst_12467);

(statearr_12647[(16)] = inst_12468);

(statearr_12647[(17)] = inst_12469);

return statearr_12647;
})();
var statearr_12648_12725 = state_12588__$1;
(statearr_12648_12725[(2)] = null);

(statearr_12648_12725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (14))){
var state_12588__$1 = state_12588;
var statearr_12649_12726 = state_12588__$1;
(statearr_12649_12726[(2)] = null);

(statearr_12649_12726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (45))){
var inst_12578 = (state_12588[(2)]);
var state_12588__$1 = state_12588;
var statearr_12650_12727 = state_12588__$1;
(statearr_12650_12727[(2)] = inst_12578);

(statearr_12650_12727[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (26))){
var inst_12522 = (state_12588[(27)]);
var inst_12574 = (state_12588[(2)]);
var inst_12575 = cljs.core.seq.call(null,inst_12522);
var state_12588__$1 = (function (){var statearr_12651 = state_12588;
(statearr_12651[(29)] = inst_12574);

return statearr_12651;
})();
if(inst_12575){
var statearr_12652_12728 = state_12588__$1;
(statearr_12652_12728[(1)] = (42));

} else {
var statearr_12653_12729 = state_12588__$1;
(statearr_12653_12729[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (16))){
var inst_12489 = (state_12588[(7)]);
var inst_12491 = cljs.core.chunked_seq_QMARK_.call(null,inst_12489);
var state_12588__$1 = state_12588;
if(inst_12491){
var statearr_12654_12731 = state_12588__$1;
(statearr_12654_12731[(1)] = (19));

} else {
var statearr_12655_12732 = state_12588__$1;
(statearr_12655_12732[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (38))){
var inst_12567 = (state_12588[(2)]);
var state_12588__$1 = state_12588;
var statearr_12656_12734 = state_12588__$1;
(statearr_12656_12734[(2)] = inst_12567);

(statearr_12656_12734[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (30))){
var state_12588__$1 = state_12588;
var statearr_12657_12737 = state_12588__$1;
(statearr_12657_12737[(2)] = null);

(statearr_12657_12737[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (10))){
var inst_12467 = (state_12588[(15)]);
var inst_12469 = (state_12588[(17)]);
var inst_12477 = cljs.core._nth.call(null,inst_12467,inst_12469);
var inst_12478 = cljs.core.nth.call(null,inst_12477,(0),null);
var inst_12479 = cljs.core.nth.call(null,inst_12477,(1),null);
var state_12588__$1 = (function (){var statearr_12658 = state_12588;
(statearr_12658[(24)] = inst_12478);

return statearr_12658;
})();
if(cljs.core.truth_(inst_12479)){
var statearr_12659_12763 = state_12588__$1;
(statearr_12659_12763[(1)] = (13));

} else {
var statearr_12660_12770 = state_12588__$1;
(statearr_12660_12770[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (18))){
var inst_12515 = (state_12588[(2)]);
var state_12588__$1 = state_12588;
var statearr_12661_12777 = state_12588__$1;
(statearr_12661_12777[(2)] = inst_12515);

(statearr_12661_12777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (42))){
var state_12588__$1 = state_12588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12588__$1,(45),dchan);
} else {
if((state_val_12589 === (37))){
var inst_12548 = (state_12588[(23)]);
var inst_12557 = (state_12588[(22)]);
var inst_12456 = (state_12588[(12)]);
var inst_12557__$1 = cljs.core.first.call(null,inst_12548);
var inst_12558 = cljs.core.async.put_BANG_.call(null,inst_12557__$1,inst_12456,done);
var state_12588__$1 = (function (){var statearr_12662 = state_12588;
(statearr_12662[(22)] = inst_12557__$1);

return statearr_12662;
})();
if(cljs.core.truth_(inst_12558)){
var statearr_12663_12804 = state_12588__$1;
(statearr_12663_12804[(1)] = (39));

} else {
var statearr_12664_12805 = state_12588__$1;
(statearr_12664_12805[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12589 === (8))){
var inst_12469 = (state_12588[(17)]);
var inst_12468 = (state_12588[(16)]);
var inst_12471 = (inst_12469 < inst_12468);
var inst_12472 = inst_12471;
var state_12588__$1 = state_12588;
if(cljs.core.truth_(inst_12472)){
var statearr_12665_12808 = state_12588__$1;
(statearr_12665_12808[(1)] = (10));

} else {
var statearr_12666_12809 = state_12588__$1;
(statearr_12666_12809[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__11757__auto__ = null;
var cljs$core$async$mult_$_state_machine__11757__auto____0 = (function (){
var statearr_12667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12667[(0)] = cljs$core$async$mult_$_state_machine__11757__auto__);

(statearr_12667[(1)] = (1));

return statearr_12667;
});
var cljs$core$async$mult_$_state_machine__11757__auto____1 = (function (state_12588){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_12588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e12668){var ex__11760__auto__ = e12668;
var statearr_12669_12812 = state_12588;
(statearr_12669_12812[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_12588[(4)]))){
var statearr_12670_12813 = state_12588;
(statearr_12670_12813[(1)] = cljs.core.first.call(null,(state_12588[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12814 = state_12588;
state_12588 = G__12814;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11757__auto__ = function(state_12588){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11757__auto____1.call(this,state_12588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11757__auto____0;
cljs$core$async$mult_$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11757__auto____1;
return cljs$core$async$mult_$_state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_12671 = f__11831__auto__.call(null);
(statearr_12671[(6)] = c__11830__auto___12674);

return statearr_12671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__12673 = arguments.length;
switch (G__12673) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_12822 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch);
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_12822.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12827 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch);
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_12827.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12832 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m);
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12832.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12835 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,state_map);
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_12835.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12838 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,mode);
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12838.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___12841 = arguments.length;
var i__5750__auto___12842 = (0);
while(true){
if((i__5750__auto___12842 < len__5749__auto___12841)){
args__5755__auto__.push((arguments[i__5750__auto___12842]));

var G__12843 = (i__5750__auto___12842 + (1));
i__5750__auto___12842 = G__12843;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12699){
var map__12700 = p__12699;
var map__12700__$1 = cljs.core.__destructure_map.call(null,map__12700);
var opts = map__12700__$1;
var statearr_12702_12847 = state;
(statearr_12702_12847[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_12704_12849 = state;
(statearr_12704_12849[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_12706_12851 = state;
(statearr_12706_12851[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12694){
var G__12695 = cljs.core.first.call(null,seq12694);
var seq12694__$1 = cljs.core.next.call(null,seq12694);
var G__12696 = cljs.core.first.call(null,seq12694__$1);
var seq12694__$2 = cljs.core.next.call(null,seq12694__$1);
var G__12697 = cljs.core.first.call(null,seq12694__$2);
var seq12694__$3 = cljs.core.next.call(null,seq12694__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12695,G__12696,G__12697,seq12694__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12717 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12718){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12718 = meta12718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12719,meta12718__$1){
var self__ = this;
var _12719__$1 = this;
return (new cljs.core.async.t_cljs$core$async12717(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12718__$1));
}));

(cljs.core.async.t_cljs$core$async12717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12719){
var self__ = this;
var _12719__$1 = this;
return self__.meta12718;
}));

(cljs.core.async.t_cljs$core$async12717.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12717.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12717.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12717.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12717.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12717.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12717.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12717.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12718","meta12718",-847756526,null)], null);
}));

(cljs.core.async.t_cljs$core$async12717.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12717");

(cljs.core.async.t_cljs$core$async12717.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12717");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12717.
 */
cljs.core.async.__GT_t_cljs$core$async12717 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12717(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12718){
return (new cljs.core.async.t_cljs$core$async12717(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12718));
});

}

return (new cljs.core.async.t_cljs$core$async12717(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11830__auto___12868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_12806){
var state_val_12807 = (state_12806[(1)]);
if((state_val_12807 === (7))){
var inst_12761 = (state_12806[(2)]);
var state_12806__$1 = state_12806;
if(cljs.core.truth_(inst_12761)){
var statearr_12810_12870 = state_12806__$1;
(statearr_12810_12870[(1)] = (8));

} else {
var statearr_12811_12872 = state_12806__$1;
(statearr_12811_12872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (20))){
var inst_12754 = (state_12806[(7)]);
var state_12806__$1 = state_12806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12806__$1,(23),out,inst_12754);
} else {
if((state_val_12807 === (1))){
var inst_12736 = calc_state.call(null);
var inst_12738 = cljs.core.__destructure_map.call(null,inst_12736);
var inst_12739 = cljs.core.get.call(null,inst_12738,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12740 = cljs.core.get.call(null,inst_12738,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12741 = cljs.core.get.call(null,inst_12738,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12742 = inst_12736;
var state_12806__$1 = (function (){var statearr_12815 = state_12806;
(statearr_12815[(8)] = inst_12739);

(statearr_12815[(9)] = inst_12740);

(statearr_12815[(10)] = inst_12741);

(statearr_12815[(11)] = inst_12742);

return statearr_12815;
})();
var statearr_12816_12873 = state_12806__$1;
(statearr_12816_12873[(2)] = null);

(statearr_12816_12873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (24))){
var inst_12745 = (state_12806[(12)]);
var inst_12742 = inst_12745;
var state_12806__$1 = (function (){var statearr_12818 = state_12806;
(statearr_12818[(11)] = inst_12742);

return statearr_12818;
})();
var statearr_12819_12874 = state_12806__$1;
(statearr_12819_12874[(2)] = null);

(statearr_12819_12874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (4))){
var inst_12754 = (state_12806[(7)]);
var inst_12756 = (state_12806[(13)]);
var inst_12753 = (state_12806[(2)]);
var inst_12754__$1 = cljs.core.nth.call(null,inst_12753,(0),null);
var inst_12755 = cljs.core.nth.call(null,inst_12753,(1),null);
var inst_12756__$1 = (inst_12754__$1 == null);
var state_12806__$1 = (function (){var statearr_12820 = state_12806;
(statearr_12820[(7)] = inst_12754__$1);

(statearr_12820[(14)] = inst_12755);

(statearr_12820[(13)] = inst_12756__$1);

return statearr_12820;
})();
if(cljs.core.truth_(inst_12756__$1)){
var statearr_12821_12875 = state_12806__$1;
(statearr_12821_12875[(1)] = (5));

} else {
var statearr_12823_12877 = state_12806__$1;
(statearr_12823_12877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (15))){
var inst_12746 = (state_12806[(15)]);
var inst_12778 = (state_12806[(16)]);
var inst_12778__$1 = cljs.core.empty_QMARK_.call(null,inst_12746);
var state_12806__$1 = (function (){var statearr_12824 = state_12806;
(statearr_12824[(16)] = inst_12778__$1);

return statearr_12824;
})();
if(inst_12778__$1){
var statearr_12825_12879 = state_12806__$1;
(statearr_12825_12879[(1)] = (17));

} else {
var statearr_12826_12881 = state_12806__$1;
(statearr_12826_12881[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (21))){
var inst_12745 = (state_12806[(12)]);
var inst_12742 = inst_12745;
var state_12806__$1 = (function (){var statearr_12828 = state_12806;
(statearr_12828[(11)] = inst_12742);

return statearr_12828;
})();
var statearr_12829_12882 = state_12806__$1;
(statearr_12829_12882[(2)] = null);

(statearr_12829_12882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (13))){
var inst_12769 = (state_12806[(2)]);
var inst_12771 = calc_state.call(null);
var inst_12742 = inst_12771;
var state_12806__$1 = (function (){var statearr_12830 = state_12806;
(statearr_12830[(17)] = inst_12769);

(statearr_12830[(11)] = inst_12742);

return statearr_12830;
})();
var statearr_12831_12883 = state_12806__$1;
(statearr_12831_12883[(2)] = null);

(statearr_12831_12883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (22))){
var inst_12798 = (state_12806[(2)]);
var state_12806__$1 = state_12806;
var statearr_12833_12884 = state_12806__$1;
(statearr_12833_12884[(2)] = inst_12798);

(statearr_12833_12884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (6))){
var inst_12755 = (state_12806[(14)]);
var inst_12759 = cljs.core._EQ_.call(null,inst_12755,change);
var state_12806__$1 = state_12806;
var statearr_12834_12885 = state_12806__$1;
(statearr_12834_12885[(2)] = inst_12759);

(statearr_12834_12885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (25))){
var state_12806__$1 = state_12806;
var statearr_12836_12889 = state_12806__$1;
(statearr_12836_12889[(2)] = null);

(statearr_12836_12889[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (17))){
var inst_12747 = (state_12806[(18)]);
var inst_12755 = (state_12806[(14)]);
var inst_12780 = inst_12747.call(null,inst_12755);
var inst_12781 = cljs.core.not.call(null,inst_12780);
var state_12806__$1 = state_12806;
var statearr_12837_12890 = state_12806__$1;
(statearr_12837_12890[(2)] = inst_12781);

(statearr_12837_12890[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (3))){
var inst_12802 = (state_12806[(2)]);
var state_12806__$1 = state_12806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12806__$1,inst_12802);
} else {
if((state_val_12807 === (12))){
var state_12806__$1 = state_12806;
var statearr_12839_12891 = state_12806__$1;
(statearr_12839_12891[(2)] = null);

(statearr_12839_12891[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (2))){
var inst_12742 = (state_12806[(11)]);
var inst_12745 = (state_12806[(12)]);
var inst_12745__$1 = cljs.core.__destructure_map.call(null,inst_12742);
var inst_12746 = cljs.core.get.call(null,inst_12745__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12747 = cljs.core.get.call(null,inst_12745__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12748 = cljs.core.get.call(null,inst_12745__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12806__$1 = (function (){var statearr_12840 = state_12806;
(statearr_12840[(12)] = inst_12745__$1);

(statearr_12840[(15)] = inst_12746);

(statearr_12840[(18)] = inst_12747);

return statearr_12840;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12806__$1,(4),inst_12748);
} else {
if((state_val_12807 === (23))){
var inst_12789 = (state_12806[(2)]);
var state_12806__$1 = state_12806;
if(cljs.core.truth_(inst_12789)){
var statearr_12844_12892 = state_12806__$1;
(statearr_12844_12892[(1)] = (24));

} else {
var statearr_12845_12893 = state_12806__$1;
(statearr_12845_12893[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (19))){
var inst_12784 = (state_12806[(2)]);
var state_12806__$1 = state_12806;
var statearr_12846_12894 = state_12806__$1;
(statearr_12846_12894[(2)] = inst_12784);

(statearr_12846_12894[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (11))){
var inst_12755 = (state_12806[(14)]);
var inst_12766 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12755);
var state_12806__$1 = state_12806;
var statearr_12848_12895 = state_12806__$1;
(statearr_12848_12895[(2)] = inst_12766);

(statearr_12848_12895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (9))){
var inst_12746 = (state_12806[(15)]);
var inst_12755 = (state_12806[(14)]);
var inst_12774 = (state_12806[(19)]);
var inst_12774__$1 = inst_12746.call(null,inst_12755);
var state_12806__$1 = (function (){var statearr_12850 = state_12806;
(statearr_12850[(19)] = inst_12774__$1);

return statearr_12850;
})();
if(cljs.core.truth_(inst_12774__$1)){
var statearr_12852_12896 = state_12806__$1;
(statearr_12852_12896[(1)] = (14));

} else {
var statearr_12853_12897 = state_12806__$1;
(statearr_12853_12897[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (5))){
var inst_12756 = (state_12806[(13)]);
var state_12806__$1 = state_12806;
var statearr_12854_12898 = state_12806__$1;
(statearr_12854_12898[(2)] = inst_12756);

(statearr_12854_12898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (14))){
var inst_12774 = (state_12806[(19)]);
var state_12806__$1 = state_12806;
var statearr_12855_12899 = state_12806__$1;
(statearr_12855_12899[(2)] = inst_12774);

(statearr_12855_12899[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (26))){
var inst_12794 = (state_12806[(2)]);
var state_12806__$1 = state_12806;
var statearr_12856_12900 = state_12806__$1;
(statearr_12856_12900[(2)] = inst_12794);

(statearr_12856_12900[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (16))){
var inst_12786 = (state_12806[(2)]);
var state_12806__$1 = state_12806;
if(cljs.core.truth_(inst_12786)){
var statearr_12857_12901 = state_12806__$1;
(statearr_12857_12901[(1)] = (20));

} else {
var statearr_12858_12902 = state_12806__$1;
(statearr_12858_12902[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (10))){
var inst_12800 = (state_12806[(2)]);
var state_12806__$1 = state_12806;
var statearr_12859_12903 = state_12806__$1;
(statearr_12859_12903[(2)] = inst_12800);

(statearr_12859_12903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (18))){
var inst_12778 = (state_12806[(16)]);
var state_12806__$1 = state_12806;
var statearr_12860_12907 = state_12806__$1;
(statearr_12860_12907[(2)] = inst_12778);

(statearr_12860_12907[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12807 === (8))){
var inst_12754 = (state_12806[(7)]);
var inst_12764 = (inst_12754 == null);
var state_12806__$1 = state_12806;
if(cljs.core.truth_(inst_12764)){
var statearr_12861_12917 = state_12806__$1;
(statearr_12861_12917[(1)] = (11));

} else {
var statearr_12862_12923 = state_12806__$1;
(statearr_12862_12923[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__11757__auto__ = null;
var cljs$core$async$mix_$_state_machine__11757__auto____0 = (function (){
var statearr_12863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12863[(0)] = cljs$core$async$mix_$_state_machine__11757__auto__);

(statearr_12863[(1)] = (1));

return statearr_12863;
});
var cljs$core$async$mix_$_state_machine__11757__auto____1 = (function (state_12806){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_12806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e12864){var ex__11760__auto__ = e12864;
var statearr_12865_12935 = state_12806;
(statearr_12865_12935[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_12806[(4)]))){
var statearr_12866_12939 = state_12806;
(statearr_12866_12939[(1)] = cljs.core.first.call(null,(state_12806[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12945 = state_12806;
state_12806 = G__12945;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11757__auto__ = function(state_12806){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11757__auto____1.call(this,state_12806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11757__auto____0;
cljs$core$async$mix_$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11757__auto____1;
return cljs$core$async$mix_$_state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_12867 = f__11831__auto__.call(null);
(statearr_12867[(6)] = c__11830__auto___12868);

return statearr_12867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_12982 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_12982.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12986 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p,v,ch);
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_12986.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12989 = (function() {
var G__12990 = null;
var G__12990__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p);
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__12990__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p,v);
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__12990 = function(p,v){
switch(arguments.length){
case 1:
return G__12990__1.call(this,p);
case 2:
return G__12990__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12990.cljs$core$IFn$_invoke$arity$1 = G__12990__1;
G__12990.cljs$core$IFn$_invoke$arity$2 = G__12990__2;
return G__12990;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12871 = arguments.length;
switch (G__12871) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12989.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12989.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__12880 = arguments.length;
switch (G__12880) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12876_SHARP_){
if(cljs.core.truth_(p1__12876_SHARP_.call(null,topic))){
return p1__12876_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12876_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12886 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12887){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12887 = meta12887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12888,meta12887__$1){
var self__ = this;
var _12888__$1 = this;
return (new cljs.core.async.t_cljs$core$async12886(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12887__$1));
}));

(cljs.core.async.t_cljs$core$async12886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12888){
var self__ = this;
var _12888__$1 = this;
return self__.meta12887;
}));

(cljs.core.async.t_cljs$core$async12886.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12886.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12886.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12886.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12886.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async12886.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12886.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12887","meta12887",2082275676,null)], null);
}));

(cljs.core.async.t_cljs$core$async12886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12886");

(cljs.core.async.t_cljs$core$async12886.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12886.
 */
cljs.core.async.__GT_t_cljs$core$async12886 = (function cljs$core$async$__GT_t_cljs$core$async12886(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12887){
return (new cljs.core.async.t_cljs$core$async12886(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12887));
});

}

return (new cljs.core.async.t_cljs$core$async12886(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11830__auto___13039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_12981){
var state_val_12983 = (state_12981[(1)]);
if((state_val_12983 === (7))){
var inst_12977 = (state_12981[(2)]);
var state_12981__$1 = state_12981;
var statearr_12984_13040 = state_12981__$1;
(statearr_12984_13040[(2)] = inst_12977);

(statearr_12984_13040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (20))){
var state_12981__$1 = state_12981;
var statearr_12985_13041 = state_12981__$1;
(statearr_12985_13041[(2)] = null);

(statearr_12985_13041[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (1))){
var state_12981__$1 = state_12981;
var statearr_12987_13042 = state_12981__$1;
(statearr_12987_13042[(2)] = null);

(statearr_12987_13042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (24))){
var inst_12960 = (state_12981[(7)]);
var inst_12969 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12960);
var state_12981__$1 = state_12981;
var statearr_12988_13044 = state_12981__$1;
(statearr_12988_13044[(2)] = inst_12969);

(statearr_12988_13044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (4))){
var inst_12906 = (state_12981[(8)]);
var inst_12906__$1 = (state_12981[(2)]);
var inst_12908 = (inst_12906__$1 == null);
var state_12981__$1 = (function (){var statearr_12991 = state_12981;
(statearr_12991[(8)] = inst_12906__$1);

return statearr_12991;
})();
if(cljs.core.truth_(inst_12908)){
var statearr_12992_13051 = state_12981__$1;
(statearr_12992_13051[(1)] = (5));

} else {
var statearr_12993_13052 = state_12981__$1;
(statearr_12993_13052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (15))){
var inst_12954 = (state_12981[(2)]);
var state_12981__$1 = state_12981;
var statearr_12994_13053 = state_12981__$1;
(statearr_12994_13053[(2)] = inst_12954);

(statearr_12994_13053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (21))){
var inst_12974 = (state_12981[(2)]);
var state_12981__$1 = (function (){var statearr_12996 = state_12981;
(statearr_12996[(9)] = inst_12974);

return statearr_12996;
})();
var statearr_12997_13054 = state_12981__$1;
(statearr_12997_13054[(2)] = null);

(statearr_12997_13054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (13))){
var inst_12933 = (state_12981[(10)]);
var inst_12936 = cljs.core.chunked_seq_QMARK_.call(null,inst_12933);
var state_12981__$1 = state_12981;
if(inst_12936){
var statearr_12998_13055 = state_12981__$1;
(statearr_12998_13055[(1)] = (16));

} else {
var statearr_12999_13056 = state_12981__$1;
(statearr_12999_13056[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (22))){
var inst_12966 = (state_12981[(2)]);
var state_12981__$1 = state_12981;
if(cljs.core.truth_(inst_12966)){
var statearr_13000_13057 = state_12981__$1;
(statearr_13000_13057[(1)] = (23));

} else {
var statearr_13001_13058 = state_12981__$1;
(statearr_13001_13058[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (6))){
var inst_12906 = (state_12981[(8)]);
var inst_12960 = (state_12981[(7)]);
var inst_12962 = (state_12981[(11)]);
var inst_12960__$1 = topic_fn.call(null,inst_12906);
var inst_12961 = cljs.core.deref.call(null,mults);
var inst_12962__$1 = cljs.core.get.call(null,inst_12961,inst_12960__$1);
var state_12981__$1 = (function (){var statearr_13002 = state_12981;
(statearr_13002[(7)] = inst_12960__$1);

(statearr_13002[(11)] = inst_12962__$1);

return statearr_13002;
})();
if(cljs.core.truth_(inst_12962__$1)){
var statearr_13003_13066 = state_12981__$1;
(statearr_13003_13066[(1)] = (19));

} else {
var statearr_13004_13072 = state_12981__$1;
(statearr_13004_13072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (25))){
var inst_12971 = (state_12981[(2)]);
var state_12981__$1 = state_12981;
var statearr_13005_13081 = state_12981__$1;
(statearr_13005_13081[(2)] = inst_12971);

(statearr_13005_13081[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (17))){
var inst_12933 = (state_12981[(10)]);
var inst_12944 = cljs.core.first.call(null,inst_12933);
var inst_12946 = cljs.core.async.muxch_STAR_.call(null,inst_12944);
var inst_12947 = cljs.core.async.close_BANG_.call(null,inst_12946);
var inst_12948 = cljs.core.next.call(null,inst_12933);
var inst_12918 = inst_12948;
var inst_12919 = null;
var inst_12920 = (0);
var inst_12921 = (0);
var state_12981__$1 = (function (){var statearr_13006 = state_12981;
(statearr_13006[(12)] = inst_12947);

(statearr_13006[(13)] = inst_12918);

(statearr_13006[(14)] = inst_12919);

(statearr_13006[(15)] = inst_12920);

(statearr_13006[(16)] = inst_12921);

return statearr_13006;
})();
var statearr_13007_13098 = state_12981__$1;
(statearr_13007_13098[(2)] = null);

(statearr_13007_13098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (3))){
var inst_12979 = (state_12981[(2)]);
var state_12981__$1 = state_12981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12981__$1,inst_12979);
} else {
if((state_val_12983 === (12))){
var inst_12956 = (state_12981[(2)]);
var state_12981__$1 = state_12981;
var statearr_13008_13100 = state_12981__$1;
(statearr_13008_13100[(2)] = inst_12956);

(statearr_13008_13100[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (2))){
var state_12981__$1 = state_12981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12981__$1,(4),ch);
} else {
if((state_val_12983 === (23))){
var state_12981__$1 = state_12981;
var statearr_13009_13101 = state_12981__$1;
(statearr_13009_13101[(2)] = null);

(statearr_13009_13101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (19))){
var inst_12962 = (state_12981[(11)]);
var inst_12906 = (state_12981[(8)]);
var inst_12964 = cljs.core.async.muxch_STAR_.call(null,inst_12962);
var state_12981__$1 = state_12981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12981__$1,(22),inst_12964,inst_12906);
} else {
if((state_val_12983 === (11))){
var inst_12918 = (state_12981[(13)]);
var inst_12933 = (state_12981[(10)]);
var inst_12933__$1 = cljs.core.seq.call(null,inst_12918);
var state_12981__$1 = (function (){var statearr_13010 = state_12981;
(statearr_13010[(10)] = inst_12933__$1);

return statearr_13010;
})();
if(inst_12933__$1){
var statearr_13011_13104 = state_12981__$1;
(statearr_13011_13104[(1)] = (13));

} else {
var statearr_13012_13105 = state_12981__$1;
(statearr_13012_13105[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (9))){
var inst_12958 = (state_12981[(2)]);
var state_12981__$1 = state_12981;
var statearr_13013_13106 = state_12981__$1;
(statearr_13013_13106[(2)] = inst_12958);

(statearr_13013_13106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (5))){
var inst_12914 = cljs.core.deref.call(null,mults);
var inst_12915 = cljs.core.vals.call(null,inst_12914);
var inst_12916 = cljs.core.seq.call(null,inst_12915);
var inst_12918 = inst_12916;
var inst_12919 = null;
var inst_12920 = (0);
var inst_12921 = (0);
var state_12981__$1 = (function (){var statearr_13014 = state_12981;
(statearr_13014[(13)] = inst_12918);

(statearr_13014[(14)] = inst_12919);

(statearr_13014[(15)] = inst_12920);

(statearr_13014[(16)] = inst_12921);

return statearr_13014;
})();
var statearr_13015_13109 = state_12981__$1;
(statearr_13015_13109[(2)] = null);

(statearr_13015_13109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (14))){
var state_12981__$1 = state_12981;
var statearr_13019_13110 = state_12981__$1;
(statearr_13019_13110[(2)] = null);

(statearr_13019_13110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (16))){
var inst_12933 = (state_12981[(10)]);
var inst_12938 = cljs.core.chunk_first.call(null,inst_12933);
var inst_12940 = cljs.core.chunk_rest.call(null,inst_12933);
var inst_12941 = cljs.core.count.call(null,inst_12938);
var inst_12918 = inst_12940;
var inst_12919 = inst_12938;
var inst_12920 = inst_12941;
var inst_12921 = (0);
var state_12981__$1 = (function (){var statearr_13020 = state_12981;
(statearr_13020[(13)] = inst_12918);

(statearr_13020[(14)] = inst_12919);

(statearr_13020[(15)] = inst_12920);

(statearr_13020[(16)] = inst_12921);

return statearr_13020;
})();
var statearr_13021_13114 = state_12981__$1;
(statearr_13021_13114[(2)] = null);

(statearr_13021_13114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (10))){
var inst_12919 = (state_12981[(14)]);
var inst_12921 = (state_12981[(16)]);
var inst_12918 = (state_12981[(13)]);
var inst_12920 = (state_12981[(15)]);
var inst_12927 = cljs.core._nth.call(null,inst_12919,inst_12921);
var inst_12928 = cljs.core.async.muxch_STAR_.call(null,inst_12927);
var inst_12929 = cljs.core.async.close_BANG_.call(null,inst_12928);
var inst_12930 = (inst_12921 + (1));
var tmp13016 = inst_12919;
var tmp13017 = inst_12918;
var tmp13018 = inst_12920;
var inst_12918__$1 = tmp13017;
var inst_12919__$1 = tmp13016;
var inst_12920__$1 = tmp13018;
var inst_12921__$1 = inst_12930;
var state_12981__$1 = (function (){var statearr_13022 = state_12981;
(statearr_13022[(17)] = inst_12929);

(statearr_13022[(13)] = inst_12918__$1);

(statearr_13022[(14)] = inst_12919__$1);

(statearr_13022[(15)] = inst_12920__$1);

(statearr_13022[(16)] = inst_12921__$1);

return statearr_13022;
})();
var statearr_13023_13116 = state_12981__$1;
(statearr_13023_13116[(2)] = null);

(statearr_13023_13116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (18))){
var inst_12951 = (state_12981[(2)]);
var state_12981__$1 = state_12981;
var statearr_13024_13117 = state_12981__$1;
(statearr_13024_13117[(2)] = inst_12951);

(statearr_13024_13117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (8))){
var inst_12921 = (state_12981[(16)]);
var inst_12920 = (state_12981[(15)]);
var inst_12924 = (inst_12921 < inst_12920);
var inst_12925 = inst_12924;
var state_12981__$1 = state_12981;
if(cljs.core.truth_(inst_12925)){
var statearr_13025_13118 = state_12981__$1;
(statearr_13025_13118[(1)] = (10));

} else {
var statearr_13026_13119 = state_12981__$1;
(statearr_13026_13119[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11757__auto__ = null;
var cljs$core$async$state_machine__11757__auto____0 = (function (){
var statearr_13027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13027[(0)] = cljs$core$async$state_machine__11757__auto__);

(statearr_13027[(1)] = (1));

return statearr_13027;
});
var cljs$core$async$state_machine__11757__auto____1 = (function (state_12981){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_12981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e13028){var ex__11760__auto__ = e13028;
var statearr_13029_13123 = state_12981;
(statearr_13029_13123[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_12981[(4)]))){
var statearr_13030_13124 = state_12981;
(statearr_13030_13124[(1)] = cljs.core.first.call(null,(state_12981[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13126 = state_12981;
state_12981 = G__13126;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$state_machine__11757__auto__ = function(state_12981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11757__auto____1.call(this,state_12981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11757__auto____0;
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11757__auto____1;
return cljs$core$async$state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_13031 = f__11831__auto__.call(null);
(statearr_13031[(6)] = c__11830__auto___13039);

return statearr_13031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__13033 = arguments.length;
switch (G__13033) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__13036 = arguments.length;
switch (G__13036) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__13038 = arguments.length;
switch (G__13038) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__11830__auto___13185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_13097){
var state_val_13099 = (state_13097[(1)]);
if((state_val_13099 === (7))){
var state_13097__$1 = state_13097;
var statearr_13102_13196 = state_13097__$1;
(statearr_13102_13196[(2)] = null);

(statearr_13102_13196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13099 === (1))){
var state_13097__$1 = state_13097;
var statearr_13103_13203 = state_13097__$1;
(statearr_13103_13203[(2)] = null);

(statearr_13103_13203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13099 === (4))){
var inst_13047 = (state_13097[(7)]);
var inst_13046 = (state_13097[(8)]);
var inst_13049 = (inst_13047 < inst_13046);
var state_13097__$1 = state_13097;
if(cljs.core.truth_(inst_13049)){
var statearr_13107_13207 = state_13097__$1;
(statearr_13107_13207[(1)] = (6));

} else {
var statearr_13108_13208 = state_13097__$1;
(statearr_13108_13208[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13099 === (15))){
var inst_13083 = (state_13097[(9)]);
var inst_13088 = cljs.core.apply.call(null,f,inst_13083);
var state_13097__$1 = state_13097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13097__$1,(17),out,inst_13088);
} else {
if((state_val_13099 === (13))){
var inst_13083 = (state_13097[(9)]);
var inst_13083__$1 = (state_13097[(2)]);
var inst_13084 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13083__$1);
var state_13097__$1 = (function (){var statearr_13111 = state_13097;
(statearr_13111[(9)] = inst_13083__$1);

return statearr_13111;
})();
if(cljs.core.truth_(inst_13084)){
var statearr_13112_13210 = state_13097__$1;
(statearr_13112_13210[(1)] = (14));

} else {
var statearr_13113_13211 = state_13097__$1;
(statearr_13113_13211[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13099 === (6))){
var state_13097__$1 = state_13097;
var statearr_13115_13213 = state_13097__$1;
(statearr_13115_13213[(2)] = null);

(statearr_13115_13213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13099 === (17))){
var inst_13090 = (state_13097[(2)]);
var state_13097__$1 = (function (){var statearr_13121 = state_13097;
(statearr_13121[(10)] = inst_13090);

return statearr_13121;
})();
var statearr_13122_13215 = state_13097__$1;
(statearr_13122_13215[(2)] = null);

(statearr_13122_13215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13099 === (3))){
var inst_13095 = (state_13097[(2)]);
var state_13097__$1 = state_13097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13097__$1,inst_13095);
} else {
if((state_val_13099 === (12))){
var _ = (function (){var statearr_13125 = state_13097;
(statearr_13125[(4)] = cljs.core.rest.call(null,(state_13097[(4)])));

return statearr_13125;
})();
var state_13097__$1 = state_13097;
var ex13120 = (state_13097__$1[(2)]);
var statearr_13127_13218 = state_13097__$1;
(statearr_13127_13218[(5)] = ex13120);


if((ex13120 instanceof Object)){
var statearr_13130_13219 = state_13097__$1;
(statearr_13130_13219[(1)] = (11));

(statearr_13130_13219[(5)] = null);

} else {
throw ex13120;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13099 === (2))){
var inst_13045 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13046 = cnt;
var inst_13047 = (0);
var state_13097__$1 = (function (){var statearr_13131 = state_13097;
(statearr_13131[(11)] = inst_13045);

(statearr_13131[(8)] = inst_13046);

(statearr_13131[(7)] = inst_13047);

return statearr_13131;
})();
var statearr_13132_13222 = state_13097__$1;
(statearr_13132_13222[(2)] = null);

(statearr_13132_13222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13099 === (11))){
var inst_13059 = (state_13097[(2)]);
var inst_13060 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13097__$1 = (function (){var statearr_13133 = state_13097;
(statearr_13133[(12)] = inst_13059);

return statearr_13133;
})();
var statearr_13134_13224 = state_13097__$1;
(statearr_13134_13224[(2)] = inst_13060);

(statearr_13134_13224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13099 === (9))){
var inst_13047 = (state_13097[(7)]);
var _ = (function (){var statearr_13135 = state_13097;
(statearr_13135[(4)] = cljs.core.cons.call(null,(12),(state_13097[(4)])));

return statearr_13135;
})();
var inst_13067 = chs__$1.call(null,inst_13047);
var inst_13068 = done.call(null,inst_13047);
var inst_13069 = cljs.core.async.take_BANG_.call(null,inst_13067,inst_13068);
var ___$1 = (function (){var statearr_13136 = state_13097;
(statearr_13136[(4)] = cljs.core.rest.call(null,(state_13097[(4)])));

return statearr_13136;
})();
var state_13097__$1 = state_13097;
var statearr_13137_13231 = state_13097__$1;
(statearr_13137_13231[(2)] = inst_13069);

(statearr_13137_13231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13099 === (5))){
var inst_13080 = (state_13097[(2)]);
var state_13097__$1 = (function (){var statearr_13138 = state_13097;
(statearr_13138[(13)] = inst_13080);

return statearr_13138;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13097__$1,(13),dchan);
} else {
if((state_val_13099 === (14))){
var inst_13086 = cljs.core.async.close_BANG_.call(null,out);
var state_13097__$1 = state_13097;
var statearr_13139_13232 = state_13097__$1;
(statearr_13139_13232[(2)] = inst_13086);

(statearr_13139_13232[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13099 === (16))){
var inst_13093 = (state_13097[(2)]);
var state_13097__$1 = state_13097;
var statearr_13140_13233 = state_13097__$1;
(statearr_13140_13233[(2)] = inst_13093);

(statearr_13140_13233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13099 === (10))){
var inst_13047 = (state_13097[(7)]);
var inst_13073 = (state_13097[(2)]);
var inst_13074 = (inst_13047 + (1));
var inst_13047__$1 = inst_13074;
var state_13097__$1 = (function (){var statearr_13141 = state_13097;
(statearr_13141[(14)] = inst_13073);

(statearr_13141[(7)] = inst_13047__$1);

return statearr_13141;
})();
var statearr_13142_13236 = state_13097__$1;
(statearr_13142_13236[(2)] = null);

(statearr_13142_13236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13099 === (8))){
var inst_13078 = (state_13097[(2)]);
var state_13097__$1 = state_13097;
var statearr_13144_13238 = state_13097__$1;
(statearr_13144_13238[(2)] = inst_13078);

(statearr_13144_13238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11757__auto__ = null;
var cljs$core$async$state_machine__11757__auto____0 = (function (){
var statearr_13147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13147[(0)] = cljs$core$async$state_machine__11757__auto__);

(statearr_13147[(1)] = (1));

return statearr_13147;
});
var cljs$core$async$state_machine__11757__auto____1 = (function (state_13097){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_13097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e13148){var ex__11760__auto__ = e13148;
var statearr_13149_13241 = state_13097;
(statearr_13149_13241[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_13097[(4)]))){
var statearr_13154_13242 = state_13097;
(statearr_13154_13242[(1)] = cljs.core.first.call(null,(state_13097[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13244 = state_13097;
state_13097 = G__13244;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$state_machine__11757__auto__ = function(state_13097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11757__auto____1.call(this,state_13097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11757__auto____0;
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11757__auto____1;
return cljs$core$async$state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_13156 = f__11831__auto__.call(null);
(statearr_13156[(6)] = c__11830__auto___13185);

return statearr_13156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__13159 = arguments.length;
switch (G__13159) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11830__auto___13250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_13204){
var state_val_13206 = (state_13204[(1)]);
if((state_val_13206 === (7))){
var inst_13175 = (state_13204[(7)]);
var inst_13176 = (state_13204[(8)]);
var inst_13175__$1 = (state_13204[(2)]);
var inst_13176__$1 = cljs.core.nth.call(null,inst_13175__$1,(0),null);
var inst_13177 = cljs.core.nth.call(null,inst_13175__$1,(1),null);
var inst_13178 = (inst_13176__$1 == null);
var state_13204__$1 = (function (){var statearr_13209 = state_13204;
(statearr_13209[(7)] = inst_13175__$1);

(statearr_13209[(8)] = inst_13176__$1);

(statearr_13209[(9)] = inst_13177);

return statearr_13209;
})();
if(cljs.core.truth_(inst_13178)){
var statearr_13212_13253 = state_13204__$1;
(statearr_13212_13253[(1)] = (8));

} else {
var statearr_13214_13254 = state_13204__$1;
(statearr_13214_13254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (1))){
var inst_13165 = cljs.core.vec.call(null,chs);
var inst_13166 = inst_13165;
var state_13204__$1 = (function (){var statearr_13216 = state_13204;
(statearr_13216[(10)] = inst_13166);

return statearr_13216;
})();
var statearr_13217_13255 = state_13204__$1;
(statearr_13217_13255[(2)] = null);

(statearr_13217_13255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (4))){
var inst_13166 = (state_13204[(10)]);
var state_13204__$1 = state_13204;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13204__$1,(7),inst_13166);
} else {
if((state_val_13206 === (6))){
var inst_13199 = (state_13204[(2)]);
var state_13204__$1 = state_13204;
var statearr_13220_13260 = state_13204__$1;
(statearr_13220_13260[(2)] = inst_13199);

(statearr_13220_13260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (3))){
var inst_13201 = (state_13204[(2)]);
var state_13204__$1 = state_13204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13204__$1,inst_13201);
} else {
if((state_val_13206 === (2))){
var inst_13166 = (state_13204[(10)]);
var inst_13168 = cljs.core.count.call(null,inst_13166);
var inst_13169 = (inst_13168 > (0));
var state_13204__$1 = state_13204;
if(cljs.core.truth_(inst_13169)){
var statearr_13223_13280 = state_13204__$1;
(statearr_13223_13280[(1)] = (4));

} else {
var statearr_13225_13281 = state_13204__$1;
(statearr_13225_13281[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (11))){
var inst_13166 = (state_13204[(10)]);
var inst_13191 = (state_13204[(2)]);
var tmp13221 = inst_13166;
var inst_13166__$1 = tmp13221;
var state_13204__$1 = (function (){var statearr_13226 = state_13204;
(statearr_13226[(11)] = inst_13191);

(statearr_13226[(10)] = inst_13166__$1);

return statearr_13226;
})();
var statearr_13228_13284 = state_13204__$1;
(statearr_13228_13284[(2)] = null);

(statearr_13228_13284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (9))){
var inst_13176 = (state_13204[(8)]);
var state_13204__$1 = state_13204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13204__$1,(11),out,inst_13176);
} else {
if((state_val_13206 === (5))){
var inst_13197 = cljs.core.async.close_BANG_.call(null,out);
var state_13204__$1 = state_13204;
var statearr_13234_13288 = state_13204__$1;
(statearr_13234_13288[(2)] = inst_13197);

(statearr_13234_13288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (10))){
var inst_13194 = (state_13204[(2)]);
var state_13204__$1 = state_13204;
var statearr_13237_13290 = state_13204__$1;
(statearr_13237_13290[(2)] = inst_13194);

(statearr_13237_13290[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (8))){
var inst_13166 = (state_13204[(10)]);
var inst_13175 = (state_13204[(7)]);
var inst_13176 = (state_13204[(8)]);
var inst_13177 = (state_13204[(9)]);
var inst_13186 = (function (){var cs = inst_13166;
var vec__13171 = inst_13175;
var v = inst_13176;
var c = inst_13177;
return (function (p1__13157_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13157_SHARP_);
});
})();
var inst_13187 = cljs.core.filterv.call(null,inst_13186,inst_13166);
var inst_13166__$1 = inst_13187;
var state_13204__$1 = (function (){var statearr_13239 = state_13204;
(statearr_13239[(10)] = inst_13166__$1);

return statearr_13239;
})();
var statearr_13240_13293 = state_13204__$1;
(statearr_13240_13293[(2)] = null);

(statearr_13240_13293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11757__auto__ = null;
var cljs$core$async$state_machine__11757__auto____0 = (function (){
var statearr_13243 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13243[(0)] = cljs$core$async$state_machine__11757__auto__);

(statearr_13243[(1)] = (1));

return statearr_13243;
});
var cljs$core$async$state_machine__11757__auto____1 = (function (state_13204){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_13204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e13245){var ex__11760__auto__ = e13245;
var statearr_13246_13297 = state_13204;
(statearr_13246_13297[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_13204[(4)]))){
var statearr_13247_13298 = state_13204;
(statearr_13247_13298[(1)] = cljs.core.first.call(null,(state_13204[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13301 = state_13204;
state_13204 = G__13301;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$state_machine__11757__auto__ = function(state_13204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11757__auto____1.call(this,state_13204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11757__auto____0;
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11757__auto____1;
return cljs$core$async$state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_13248 = f__11831__auto__.call(null);
(statearr_13248[(6)] = c__11830__auto___13250);

return statearr_13248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__13252 = arguments.length;
switch (G__13252) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11830__auto___13315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_13282){
var state_val_13283 = (state_13282[(1)]);
if((state_val_13283 === (7))){
var inst_13262 = (state_13282[(7)]);
var inst_13262__$1 = (state_13282[(2)]);
var inst_13263 = (inst_13262__$1 == null);
var inst_13264 = cljs.core.not.call(null,inst_13263);
var state_13282__$1 = (function (){var statearr_13285 = state_13282;
(statearr_13285[(7)] = inst_13262__$1);

return statearr_13285;
})();
if(inst_13264){
var statearr_13286_13316 = state_13282__$1;
(statearr_13286_13316[(1)] = (8));

} else {
var statearr_13287_13317 = state_13282__$1;
(statearr_13287_13317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13283 === (1))){
var inst_13256 = (0);
var state_13282__$1 = (function (){var statearr_13289 = state_13282;
(statearr_13289[(8)] = inst_13256);

return statearr_13289;
})();
var statearr_13291_13318 = state_13282__$1;
(statearr_13291_13318[(2)] = null);

(statearr_13291_13318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13283 === (4))){
var state_13282__$1 = state_13282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13282__$1,(7),ch);
} else {
if((state_val_13283 === (6))){
var inst_13275 = (state_13282[(2)]);
var state_13282__$1 = state_13282;
var statearr_13292_13319 = state_13282__$1;
(statearr_13292_13319[(2)] = inst_13275);

(statearr_13292_13319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13283 === (3))){
var inst_13277 = (state_13282[(2)]);
var inst_13278 = cljs.core.async.close_BANG_.call(null,out);
var state_13282__$1 = (function (){var statearr_13294 = state_13282;
(statearr_13294[(9)] = inst_13277);

return statearr_13294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13282__$1,inst_13278);
} else {
if((state_val_13283 === (2))){
var inst_13256 = (state_13282[(8)]);
var inst_13258 = (inst_13256 < n);
var state_13282__$1 = state_13282;
if(cljs.core.truth_(inst_13258)){
var statearr_13295_13320 = state_13282__$1;
(statearr_13295_13320[(1)] = (4));

} else {
var statearr_13296_13321 = state_13282__$1;
(statearr_13296_13321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13283 === (11))){
var inst_13256 = (state_13282[(8)]);
var inst_13267 = (state_13282[(2)]);
var inst_13268 = (inst_13256 + (1));
var inst_13256__$1 = inst_13268;
var state_13282__$1 = (function (){var statearr_13299 = state_13282;
(statearr_13299[(10)] = inst_13267);

(statearr_13299[(8)] = inst_13256__$1);

return statearr_13299;
})();
var statearr_13300_13325 = state_13282__$1;
(statearr_13300_13325[(2)] = null);

(statearr_13300_13325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13283 === (9))){
var state_13282__$1 = state_13282;
var statearr_13302_13326 = state_13282__$1;
(statearr_13302_13326[(2)] = null);

(statearr_13302_13326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13283 === (5))){
var state_13282__$1 = state_13282;
var statearr_13303_13327 = state_13282__$1;
(statearr_13303_13327[(2)] = null);

(statearr_13303_13327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13283 === (10))){
var inst_13272 = (state_13282[(2)]);
var state_13282__$1 = state_13282;
var statearr_13304_13328 = state_13282__$1;
(statearr_13304_13328[(2)] = inst_13272);

(statearr_13304_13328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13283 === (8))){
var inst_13262 = (state_13282[(7)]);
var state_13282__$1 = state_13282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13282__$1,(11),out,inst_13262);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11757__auto__ = null;
var cljs$core$async$state_machine__11757__auto____0 = (function (){
var statearr_13305 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13305[(0)] = cljs$core$async$state_machine__11757__auto__);

(statearr_13305[(1)] = (1));

return statearr_13305;
});
var cljs$core$async$state_machine__11757__auto____1 = (function (state_13282){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_13282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e13306){var ex__11760__auto__ = e13306;
var statearr_13307_13329 = state_13282;
(statearr_13307_13329[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_13282[(4)]))){
var statearr_13308_13330 = state_13282;
(statearr_13308_13330[(1)] = cljs.core.first.call(null,(state_13282[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13331 = state_13282;
state_13282 = G__13331;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$state_machine__11757__auto__ = function(state_13282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11757__auto____1.call(this,state_13282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11757__auto____0;
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11757__auto____1;
return cljs$core$async$state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_13309 = f__11831__auto__.call(null);
(statearr_13309[(6)] = c__11830__auto___13315);

return statearr_13309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13312 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13312 = (function (f,ch,meta13313){
this.f = f;
this.ch = ch;
this.meta13313 = meta13313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13314,meta13313__$1){
var self__ = this;
var _13314__$1 = this;
return (new cljs.core.async.t_cljs$core$async13312(self__.f,self__.ch,meta13313__$1));
}));

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13314){
var self__ = this;
var _13314__$1 = this;
return self__.meta13313;
}));

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13322 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13322 = (function (f,ch,meta13313,_,fn1,meta13323){
this.f = f;
this.ch = ch;
this.meta13313 = meta13313;
this._ = _;
this.fn1 = fn1;
this.meta13323 = meta13323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13324,meta13323__$1){
var self__ = this;
var _13324__$1 = this;
return (new cljs.core.async.t_cljs$core$async13322(self__.f,self__.ch,self__.meta13313,self__._,self__.fn1,meta13323__$1));
}));

(cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13324){
var self__ = this;
var _13324__$1 = this;
return self__.meta13323;
}));

(cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13322.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__13310_SHARP_){
return f1.call(null,(((p1__13310_SHARP_ == null))?null:self__.f.call(null,p1__13310_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async13322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13313","meta13313",-1639726482,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13312","cljs.core.async/t_cljs$core$async13312",-1160450595,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13323","meta13323",807582913,null)], null);
}));

(cljs.core.async.t_cljs$core$async13322.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13322");

(cljs.core.async.t_cljs$core$async13322.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13322");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13322.
 */
cljs.core.async.__GT_t_cljs$core$async13322 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13322(f__$1,ch__$1,meta13313__$1,___$2,fn1__$1,meta13323){
return (new cljs.core.async.t_cljs$core$async13322(f__$1,ch__$1,meta13313__$1,___$2,fn1__$1,meta13323));
});

}

return (new cljs.core.async.t_cljs$core$async13322(self__.f,self__.ch,self__.meta13313,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13313","meta13313",-1639726482,null)], null);
}));

(cljs.core.async.t_cljs$core$async13312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13312");

(cljs.core.async.t_cljs$core$async13312.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13312.
 */
cljs.core.async.__GT_t_cljs$core$async13312 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13312(f__$1,ch__$1,meta13313){
return (new cljs.core.async.t_cljs$core$async13312(f__$1,ch__$1,meta13313));
});

}

return (new cljs.core.async.t_cljs$core$async13312(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13332 = (function (f,ch,meta13333){
this.f = f;
this.ch = ch;
this.meta13333 = meta13333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13334,meta13333__$1){
var self__ = this;
var _13334__$1 = this;
return (new cljs.core.async.t_cljs$core$async13332(self__.f,self__.ch,meta13333__$1));
}));

(cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13334){
var self__ = this;
var _13334__$1 = this;
return self__.meta13333;
}));

(cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async13332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13333","meta13333",-587682553,null)], null);
}));

(cljs.core.async.t_cljs$core$async13332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13332");

(cljs.core.async.t_cljs$core$async13332.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13332.
 */
cljs.core.async.__GT_t_cljs$core$async13332 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13332(f__$1,ch__$1,meta13333){
return (new cljs.core.async.t_cljs$core$async13332(f__$1,ch__$1,meta13333));
});

}

return (new cljs.core.async.t_cljs$core$async13332(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13335 = (function (p,ch,meta13336){
this.p = p;
this.ch = ch;
this.meta13336 = meta13336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13337,meta13336__$1){
var self__ = this;
var _13337__$1 = this;
return (new cljs.core.async.t_cljs$core$async13335(self__.p,self__.ch,meta13336__$1));
}));

(cljs.core.async.t_cljs$core$async13335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13337){
var self__ = this;
var _13337__$1 = this;
return self__.meta13336;
}));

(cljs.core.async.t_cljs$core$async13335.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13335.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13335.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13335.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13336","meta13336",-1608421275,null)], null);
}));

(cljs.core.async.t_cljs$core$async13335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13335");

(cljs.core.async.t_cljs$core$async13335.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13335.
 */
cljs.core.async.__GT_t_cljs$core$async13335 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13335(p__$1,ch__$1,meta13336){
return (new cljs.core.async.t_cljs$core$async13335(p__$1,ch__$1,meta13336));
});

}

return (new cljs.core.async.t_cljs$core$async13335(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__13339 = arguments.length;
switch (G__13339) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11830__auto___13384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_13360){
var state_val_13361 = (state_13360[(1)]);
if((state_val_13361 === (7))){
var inst_13356 = (state_13360[(2)]);
var state_13360__$1 = state_13360;
var statearr_13362_13388 = state_13360__$1;
(statearr_13362_13388[(2)] = inst_13356);

(statearr_13362_13388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (1))){
var state_13360__$1 = state_13360;
var statearr_13363_13397 = state_13360__$1;
(statearr_13363_13397[(2)] = null);

(statearr_13363_13397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (4))){
var inst_13342 = (state_13360[(7)]);
var inst_13342__$1 = (state_13360[(2)]);
var inst_13343 = (inst_13342__$1 == null);
var state_13360__$1 = (function (){var statearr_13364 = state_13360;
(statearr_13364[(7)] = inst_13342__$1);

return statearr_13364;
})();
if(cljs.core.truth_(inst_13343)){
var statearr_13365_13411 = state_13360__$1;
(statearr_13365_13411[(1)] = (5));

} else {
var statearr_13366_13414 = state_13360__$1;
(statearr_13366_13414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (6))){
var inst_13342 = (state_13360[(7)]);
var inst_13347 = p.call(null,inst_13342);
var state_13360__$1 = state_13360;
if(cljs.core.truth_(inst_13347)){
var statearr_13367_13419 = state_13360__$1;
(statearr_13367_13419[(1)] = (8));

} else {
var statearr_13368_13421 = state_13360__$1;
(statearr_13368_13421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (3))){
var inst_13358 = (state_13360[(2)]);
var state_13360__$1 = state_13360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13360__$1,inst_13358);
} else {
if((state_val_13361 === (2))){
var state_13360__$1 = state_13360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13360__$1,(4),ch);
} else {
if((state_val_13361 === (11))){
var inst_13350 = (state_13360[(2)]);
var state_13360__$1 = state_13360;
var statearr_13369_13439 = state_13360__$1;
(statearr_13369_13439[(2)] = inst_13350);

(statearr_13369_13439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (9))){
var state_13360__$1 = state_13360;
var statearr_13370_13452 = state_13360__$1;
(statearr_13370_13452[(2)] = null);

(statearr_13370_13452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (5))){
var inst_13345 = cljs.core.async.close_BANG_.call(null,out);
var state_13360__$1 = state_13360;
var statearr_13371_13456 = state_13360__$1;
(statearr_13371_13456[(2)] = inst_13345);

(statearr_13371_13456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (10))){
var inst_13353 = (state_13360[(2)]);
var state_13360__$1 = (function (){var statearr_13372 = state_13360;
(statearr_13372[(8)] = inst_13353);

return statearr_13372;
})();
var statearr_13373_13459 = state_13360__$1;
(statearr_13373_13459[(2)] = null);

(statearr_13373_13459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (8))){
var inst_13342 = (state_13360[(7)]);
var state_13360__$1 = state_13360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13360__$1,(11),out,inst_13342);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11757__auto__ = null;
var cljs$core$async$state_machine__11757__auto____0 = (function (){
var statearr_13374 = [null,null,null,null,null,null,null,null,null];
(statearr_13374[(0)] = cljs$core$async$state_machine__11757__auto__);

(statearr_13374[(1)] = (1));

return statearr_13374;
});
var cljs$core$async$state_machine__11757__auto____1 = (function (state_13360){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_13360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e13375){var ex__11760__auto__ = e13375;
var statearr_13376_13461 = state_13360;
(statearr_13376_13461[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_13360[(4)]))){
var statearr_13377_13462 = state_13360;
(statearr_13377_13462[(1)] = cljs.core.first.call(null,(state_13360[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13465 = state_13360;
state_13360 = G__13465;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$state_machine__11757__auto__ = function(state_13360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11757__auto____1.call(this,state_13360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11757__auto____0;
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11757__auto____1;
return cljs$core$async$state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_13378 = f__11831__auto__.call(null);
(statearr_13378[(6)] = c__11830__auto___13384);

return statearr_13378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__13380 = arguments.length;
switch (G__13380) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_13457){
var state_val_13458 = (state_13457[(1)]);
if((state_val_13458 === (7))){
var inst_13451 = (state_13457[(2)]);
var state_13457__$1 = state_13457;
var statearr_13460_13527 = state_13457__$1;
(statearr_13460_13527[(2)] = inst_13451);

(statearr_13460_13527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (20))){
var inst_13418 = (state_13457[(7)]);
var inst_13431 = (state_13457[(2)]);
var inst_13432 = cljs.core.next.call(null,inst_13418);
var inst_13401 = inst_13432;
var inst_13402 = null;
var inst_13403 = (0);
var inst_13404 = (0);
var state_13457__$1 = (function (){var statearr_13463 = state_13457;
(statearr_13463[(8)] = inst_13431);

(statearr_13463[(9)] = inst_13401);

(statearr_13463[(10)] = inst_13402);

(statearr_13463[(11)] = inst_13403);

(statearr_13463[(12)] = inst_13404);

return statearr_13463;
})();
var statearr_13464_13530 = state_13457__$1;
(statearr_13464_13530[(2)] = null);

(statearr_13464_13530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (1))){
var state_13457__$1 = state_13457;
var statearr_13466_13532 = state_13457__$1;
(statearr_13466_13532[(2)] = null);

(statearr_13466_13532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (4))){
var inst_13387 = (state_13457[(13)]);
var inst_13387__$1 = (state_13457[(2)]);
var inst_13389 = (inst_13387__$1 == null);
var state_13457__$1 = (function (){var statearr_13467 = state_13457;
(statearr_13467[(13)] = inst_13387__$1);

return statearr_13467;
})();
if(cljs.core.truth_(inst_13389)){
var statearr_13469_13536 = state_13457__$1;
(statearr_13469_13536[(1)] = (5));

} else {
var statearr_13470_13537 = state_13457__$1;
(statearr_13470_13537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (15))){
var state_13457__$1 = state_13457;
var statearr_13474_13538 = state_13457__$1;
(statearr_13474_13538[(2)] = null);

(statearr_13474_13538[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (21))){
var state_13457__$1 = state_13457;
var statearr_13476_13541 = state_13457__$1;
(statearr_13476_13541[(2)] = null);

(statearr_13476_13541[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (13))){
var inst_13404 = (state_13457[(12)]);
var inst_13401 = (state_13457[(9)]);
var inst_13402 = (state_13457[(10)]);
var inst_13403 = (state_13457[(11)]);
var inst_13413 = (state_13457[(2)]);
var inst_13415 = (inst_13404 + (1));
var tmp13471 = inst_13402;
var tmp13472 = inst_13403;
var tmp13473 = inst_13401;
var inst_13401__$1 = tmp13473;
var inst_13402__$1 = tmp13471;
var inst_13403__$1 = tmp13472;
var inst_13404__$1 = inst_13415;
var state_13457__$1 = (function (){var statearr_13479 = state_13457;
(statearr_13479[(14)] = inst_13413);

(statearr_13479[(9)] = inst_13401__$1);

(statearr_13479[(10)] = inst_13402__$1);

(statearr_13479[(11)] = inst_13403__$1);

(statearr_13479[(12)] = inst_13404__$1);

return statearr_13479;
})();
var statearr_13480_13547 = state_13457__$1;
(statearr_13480_13547[(2)] = null);

(statearr_13480_13547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (22))){
var state_13457__$1 = state_13457;
var statearr_13482_13554 = state_13457__$1;
(statearr_13482_13554[(2)] = null);

(statearr_13482_13554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (6))){
var inst_13387 = (state_13457[(13)]);
var inst_13398 = f.call(null,inst_13387);
var inst_13399 = cljs.core.seq.call(null,inst_13398);
var inst_13401 = inst_13399;
var inst_13402 = null;
var inst_13403 = (0);
var inst_13404 = (0);
var state_13457__$1 = (function (){var statearr_13484 = state_13457;
(statearr_13484[(9)] = inst_13401);

(statearr_13484[(10)] = inst_13402);

(statearr_13484[(11)] = inst_13403);

(statearr_13484[(12)] = inst_13404);

return statearr_13484;
})();
var statearr_13485_13570 = state_13457__$1;
(statearr_13485_13570[(2)] = null);

(statearr_13485_13570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (17))){
var inst_13418 = (state_13457[(7)]);
var inst_13424 = cljs.core.chunk_first.call(null,inst_13418);
var inst_13425 = cljs.core.chunk_rest.call(null,inst_13418);
var inst_13426 = cljs.core.count.call(null,inst_13424);
var inst_13401 = inst_13425;
var inst_13402 = inst_13424;
var inst_13403 = inst_13426;
var inst_13404 = (0);
var state_13457__$1 = (function (){var statearr_13486 = state_13457;
(statearr_13486[(9)] = inst_13401);

(statearr_13486[(10)] = inst_13402);

(statearr_13486[(11)] = inst_13403);

(statearr_13486[(12)] = inst_13404);

return statearr_13486;
})();
var statearr_13487_13576 = state_13457__$1;
(statearr_13487_13576[(2)] = null);

(statearr_13487_13576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (3))){
var inst_13454 = (state_13457[(2)]);
var state_13457__$1 = state_13457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13457__$1,inst_13454);
} else {
if((state_val_13458 === (12))){
var inst_13441 = (state_13457[(2)]);
var state_13457__$1 = state_13457;
var statearr_13488_13580 = state_13457__$1;
(statearr_13488_13580[(2)] = inst_13441);

(statearr_13488_13580[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (2))){
var state_13457__$1 = state_13457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13457__$1,(4),in$);
} else {
if((state_val_13458 === (23))){
var inst_13449 = (state_13457[(2)]);
var state_13457__$1 = state_13457;
var statearr_13490_13583 = state_13457__$1;
(statearr_13490_13583[(2)] = inst_13449);

(statearr_13490_13583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (19))){
var inst_13435 = (state_13457[(2)]);
var state_13457__$1 = state_13457;
var statearr_13492_13585 = state_13457__$1;
(statearr_13492_13585[(2)] = inst_13435);

(statearr_13492_13585[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (11))){
var inst_13401 = (state_13457[(9)]);
var inst_13418 = (state_13457[(7)]);
var inst_13418__$1 = cljs.core.seq.call(null,inst_13401);
var state_13457__$1 = (function (){var statearr_13493 = state_13457;
(statearr_13493[(7)] = inst_13418__$1);

return statearr_13493;
})();
if(inst_13418__$1){
var statearr_13495_13591 = state_13457__$1;
(statearr_13495_13591[(1)] = (14));

} else {
var statearr_13496_13592 = state_13457__$1;
(statearr_13496_13592[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (9))){
var inst_13443 = (state_13457[(2)]);
var inst_13444 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13457__$1 = (function (){var statearr_13497 = state_13457;
(statearr_13497[(15)] = inst_13443);

return statearr_13497;
})();
if(cljs.core.truth_(inst_13444)){
var statearr_13498_13596 = state_13457__$1;
(statearr_13498_13596[(1)] = (21));

} else {
var statearr_13499_13597 = state_13457__$1;
(statearr_13499_13597[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (5))){
var inst_13391 = cljs.core.async.close_BANG_.call(null,out);
var state_13457__$1 = state_13457;
var statearr_13504_13605 = state_13457__$1;
(statearr_13504_13605[(2)] = inst_13391);

(statearr_13504_13605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (14))){
var inst_13418 = (state_13457[(7)]);
var inst_13422 = cljs.core.chunked_seq_QMARK_.call(null,inst_13418);
var state_13457__$1 = state_13457;
if(inst_13422){
var statearr_13505_13608 = state_13457__$1;
(statearr_13505_13608[(1)] = (17));

} else {
var statearr_13506_13609 = state_13457__$1;
(statearr_13506_13609[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (16))){
var inst_13438 = (state_13457[(2)]);
var state_13457__$1 = state_13457;
var statearr_13508_13610 = state_13457__$1;
(statearr_13508_13610[(2)] = inst_13438);

(statearr_13508_13610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13458 === (10))){
var inst_13402 = (state_13457[(10)]);
var inst_13404 = (state_13457[(12)]);
var inst_13410 = cljs.core._nth.call(null,inst_13402,inst_13404);
var state_13457__$1 = state_13457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13457__$1,(13),out,inst_13410);
} else {
if((state_val_13458 === (18))){
var inst_13418 = (state_13457[(7)]);
var inst_13429 = cljs.core.first.call(null,inst_13418);
var state_13457__$1 = state_13457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13457__$1,(20),out,inst_13429);
} else {
if((state_val_13458 === (8))){
var inst_13404 = (state_13457[(12)]);
var inst_13403 = (state_13457[(11)]);
var inst_13407 = (inst_13404 < inst_13403);
var inst_13408 = inst_13407;
var state_13457__$1 = state_13457;
if(cljs.core.truth_(inst_13408)){
var statearr_13513_13615 = state_13457__$1;
(statearr_13513_13615[(1)] = (10));

} else {
var statearr_13514_13616 = state_13457__$1;
(statearr_13514_13616[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11757__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11757__auto____0 = (function (){
var statearr_13515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13515[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11757__auto__);

(statearr_13515[(1)] = (1));

return statearr_13515;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11757__auto____1 = (function (state_13457){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_13457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e13518){var ex__11760__auto__ = e13518;
var statearr_13519_13617 = state_13457;
(statearr_13519_13617[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_13457[(4)]))){
var statearr_13521_13619 = state_13457;
(statearr_13521_13619[(1)] = cljs.core.first.call(null,(state_13457[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13621 = state_13457;
state_13457 = G__13621;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11757__auto__ = function(state_13457){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11757__auto____1.call(this,state_13457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11757__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11757__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_13524 = f__11831__auto__.call(null);
(statearr_13524[(6)] = c__11830__auto__);

return statearr_13524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));

return c__11830__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13526 = arguments.length;
switch (G__13526) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__13529 = arguments.length;
switch (G__13529) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__13540 = arguments.length;
switch (G__13540) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11830__auto___13632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_13568){
var state_val_13569 = (state_13568[(1)]);
if((state_val_13569 === (7))){
var inst_13563 = (state_13568[(2)]);
var state_13568__$1 = state_13568;
var statearr_13571_13637 = state_13568__$1;
(statearr_13571_13637[(2)] = inst_13563);

(statearr_13571_13637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13569 === (1))){
var inst_13543 = null;
var state_13568__$1 = (function (){var statearr_13572 = state_13568;
(statearr_13572[(7)] = inst_13543);

return statearr_13572;
})();
var statearr_13573_13645 = state_13568__$1;
(statearr_13573_13645[(2)] = null);

(statearr_13573_13645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13569 === (4))){
var inst_13546 = (state_13568[(8)]);
var inst_13546__$1 = (state_13568[(2)]);
var inst_13548 = (inst_13546__$1 == null);
var inst_13549 = cljs.core.not.call(null,inst_13548);
var state_13568__$1 = (function (){var statearr_13575 = state_13568;
(statearr_13575[(8)] = inst_13546__$1);

return statearr_13575;
})();
if(inst_13549){
var statearr_13577_13666 = state_13568__$1;
(statearr_13577_13666[(1)] = (5));

} else {
var statearr_13578_13667 = state_13568__$1;
(statearr_13578_13667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13569 === (6))){
var state_13568__$1 = state_13568;
var statearr_13579_13671 = state_13568__$1;
(statearr_13579_13671[(2)] = null);

(statearr_13579_13671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13569 === (3))){
var inst_13565 = (state_13568[(2)]);
var inst_13566 = cljs.core.async.close_BANG_.call(null,out);
var state_13568__$1 = (function (){var statearr_13581 = state_13568;
(statearr_13581[(9)] = inst_13565);

return statearr_13581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13568__$1,inst_13566);
} else {
if((state_val_13569 === (2))){
var state_13568__$1 = state_13568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13568__$1,(4),ch);
} else {
if((state_val_13569 === (11))){
var inst_13546 = (state_13568[(8)]);
var inst_13557 = (state_13568[(2)]);
var inst_13543 = inst_13546;
var state_13568__$1 = (function (){var statearr_13584 = state_13568;
(statearr_13584[(10)] = inst_13557);

(statearr_13584[(7)] = inst_13543);

return statearr_13584;
})();
var statearr_13590_13683 = state_13568__$1;
(statearr_13590_13683[(2)] = null);

(statearr_13590_13683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13569 === (9))){
var inst_13546 = (state_13568[(8)]);
var state_13568__$1 = state_13568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13568__$1,(11),out,inst_13546);
} else {
if((state_val_13569 === (5))){
var inst_13546 = (state_13568[(8)]);
var inst_13543 = (state_13568[(7)]);
var inst_13551 = cljs.core._EQ_.call(null,inst_13546,inst_13543);
var state_13568__$1 = state_13568;
if(inst_13551){
var statearr_13594_13685 = state_13568__$1;
(statearr_13594_13685[(1)] = (8));

} else {
var statearr_13595_13687 = state_13568__$1;
(statearr_13595_13687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13569 === (10))){
var inst_13560 = (state_13568[(2)]);
var state_13568__$1 = state_13568;
var statearr_13598_13689 = state_13568__$1;
(statearr_13598_13689[(2)] = inst_13560);

(statearr_13598_13689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13569 === (8))){
var inst_13543 = (state_13568[(7)]);
var tmp13593 = inst_13543;
var inst_13543__$1 = tmp13593;
var state_13568__$1 = (function (){var statearr_13606 = state_13568;
(statearr_13606[(7)] = inst_13543__$1);

return statearr_13606;
})();
var statearr_13607_13694 = state_13568__$1;
(statearr_13607_13694[(2)] = null);

(statearr_13607_13694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11757__auto__ = null;
var cljs$core$async$state_machine__11757__auto____0 = (function (){
var statearr_13611 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13611[(0)] = cljs$core$async$state_machine__11757__auto__);

(statearr_13611[(1)] = (1));

return statearr_13611;
});
var cljs$core$async$state_machine__11757__auto____1 = (function (state_13568){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_13568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e13618){var ex__11760__auto__ = e13618;
var statearr_13620_13698 = state_13568;
(statearr_13620_13698[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_13568[(4)]))){
var statearr_13623_13700 = state_13568;
(statearr_13623_13700[(1)] = cljs.core.first.call(null,(state_13568[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13702 = state_13568;
state_13568 = G__13702;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$state_machine__11757__auto__ = function(state_13568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11757__auto____1.call(this,state_13568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11757__auto____0;
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11757__auto____1;
return cljs$core$async$state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_13626 = f__11831__auto__.call(null);
(statearr_13626[(6)] = c__11830__auto___13632);

return statearr_13626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__13630 = arguments.length;
switch (G__13630) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11830__auto___13731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_13678){
var state_val_13679 = (state_13678[(1)]);
if((state_val_13679 === (7))){
var inst_13674 = (state_13678[(2)]);
var state_13678__$1 = state_13678;
var statearr_13684_13732 = state_13678__$1;
(statearr_13684_13732[(2)] = inst_13674);

(statearr_13684_13732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13679 === (1))){
var inst_13633 = (new Array(n));
var inst_13634 = inst_13633;
var inst_13635 = (0);
var state_13678__$1 = (function (){var statearr_13686 = state_13678;
(statearr_13686[(7)] = inst_13634);

(statearr_13686[(8)] = inst_13635);

return statearr_13686;
})();
var statearr_13688_13744 = state_13678__$1;
(statearr_13688_13744[(2)] = null);

(statearr_13688_13744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13679 === (4))){
var inst_13639 = (state_13678[(9)]);
var inst_13639__$1 = (state_13678[(2)]);
var inst_13640 = (inst_13639__$1 == null);
var inst_13641 = cljs.core.not.call(null,inst_13640);
var state_13678__$1 = (function (){var statearr_13693 = state_13678;
(statearr_13693[(9)] = inst_13639__$1);

return statearr_13693;
})();
if(inst_13641){
var statearr_13695_13763 = state_13678__$1;
(statearr_13695_13763[(1)] = (5));

} else {
var statearr_13696_13767 = state_13678__$1;
(statearr_13696_13767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13679 === (15))){
var inst_13662 = (state_13678[(2)]);
var state_13678__$1 = state_13678;
var statearr_13697_13780 = state_13678__$1;
(statearr_13697_13780[(2)] = inst_13662);

(statearr_13697_13780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13679 === (13))){
var state_13678__$1 = state_13678;
var statearr_13699_13782 = state_13678__$1;
(statearr_13699_13782[(2)] = null);

(statearr_13699_13782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13679 === (6))){
var inst_13635 = (state_13678[(8)]);
var inst_13658 = (inst_13635 > (0));
var state_13678__$1 = state_13678;
if(cljs.core.truth_(inst_13658)){
var statearr_13704_13785 = state_13678__$1;
(statearr_13704_13785[(1)] = (12));

} else {
var statearr_13705_13786 = state_13678__$1;
(statearr_13705_13786[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13679 === (3))){
var inst_13676 = (state_13678[(2)]);
var state_13678__$1 = state_13678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13678__$1,inst_13676);
} else {
if((state_val_13679 === (12))){
var inst_13634 = (state_13678[(7)]);
var inst_13660 = cljs.core.vec.call(null,inst_13634);
var state_13678__$1 = state_13678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13678__$1,(15),out,inst_13660);
} else {
if((state_val_13679 === (2))){
var state_13678__$1 = state_13678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13678__$1,(4),ch);
} else {
if((state_val_13679 === (11))){
var inst_13652 = (state_13678[(2)]);
var inst_13653 = (new Array(n));
var inst_13634 = inst_13653;
var inst_13635 = (0);
var state_13678__$1 = (function (){var statearr_13706 = state_13678;
(statearr_13706[(10)] = inst_13652);

(statearr_13706[(7)] = inst_13634);

(statearr_13706[(8)] = inst_13635);

return statearr_13706;
})();
var statearr_13707_13791 = state_13678__$1;
(statearr_13707_13791[(2)] = null);

(statearr_13707_13791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13679 === (9))){
var inst_13634 = (state_13678[(7)]);
var inst_13650 = cljs.core.vec.call(null,inst_13634);
var state_13678__$1 = state_13678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13678__$1,(11),out,inst_13650);
} else {
if((state_val_13679 === (5))){
var inst_13634 = (state_13678[(7)]);
var inst_13635 = (state_13678[(8)]);
var inst_13639 = (state_13678[(9)]);
var inst_13644 = (state_13678[(11)]);
var inst_13643 = (inst_13634[inst_13635] = inst_13639);
var inst_13644__$1 = (inst_13635 + (1));
var inst_13646 = (inst_13644__$1 < n);
var state_13678__$1 = (function (){var statearr_13710 = state_13678;
(statearr_13710[(12)] = inst_13643);

(statearr_13710[(11)] = inst_13644__$1);

return statearr_13710;
})();
if(cljs.core.truth_(inst_13646)){
var statearr_13711_13795 = state_13678__$1;
(statearr_13711_13795[(1)] = (8));

} else {
var statearr_13712_13796 = state_13678__$1;
(statearr_13712_13796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13679 === (14))){
var inst_13665 = (state_13678[(2)]);
var inst_13672 = cljs.core.async.close_BANG_.call(null,out);
var state_13678__$1 = (function (){var statearr_13714 = state_13678;
(statearr_13714[(13)] = inst_13665);

return statearr_13714;
})();
var statearr_13715_13800 = state_13678__$1;
(statearr_13715_13800[(2)] = inst_13672);

(statearr_13715_13800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13679 === (10))){
var inst_13656 = (state_13678[(2)]);
var state_13678__$1 = state_13678;
var statearr_13716_13803 = state_13678__$1;
(statearr_13716_13803[(2)] = inst_13656);

(statearr_13716_13803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13679 === (8))){
var inst_13634 = (state_13678[(7)]);
var inst_13644 = (state_13678[(11)]);
var tmp13713 = inst_13634;
var inst_13634__$1 = tmp13713;
var inst_13635 = inst_13644;
var state_13678__$1 = (function (){var statearr_13717 = state_13678;
(statearr_13717[(7)] = inst_13634__$1);

(statearr_13717[(8)] = inst_13635);

return statearr_13717;
})();
var statearr_13718_13807 = state_13678__$1;
(statearr_13718_13807[(2)] = null);

(statearr_13718_13807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11757__auto__ = null;
var cljs$core$async$state_machine__11757__auto____0 = (function (){
var statearr_13719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13719[(0)] = cljs$core$async$state_machine__11757__auto__);

(statearr_13719[(1)] = (1));

return statearr_13719;
});
var cljs$core$async$state_machine__11757__auto____1 = (function (state_13678){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_13678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e13720){var ex__11760__auto__ = e13720;
var statearr_13721_13810 = state_13678;
(statearr_13721_13810[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_13678[(4)]))){
var statearr_13722_13811 = state_13678;
(statearr_13722_13811[(1)] = cljs.core.first.call(null,(state_13678[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13812 = state_13678;
state_13678 = G__13812;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$state_machine__11757__auto__ = function(state_13678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11757__auto____1.call(this,state_13678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11757__auto____0;
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11757__auto____1;
return cljs$core$async$state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_13726 = f__11831__auto__.call(null);
(statearr_13726[(6)] = c__11830__auto___13731);

return statearr_13726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13730 = arguments.length;
switch (G__13730) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11830__auto___13860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11831__auto__ = (function (){var switch__11756__auto__ = (function (state_13783){
var state_val_13784 = (state_13783[(1)]);
if((state_val_13784 === (7))){
var inst_13776 = (state_13783[(2)]);
var state_13783__$1 = state_13783;
var statearr_13787_13862 = state_13783__$1;
(statearr_13787_13862[(2)] = inst_13776);

(statearr_13787_13862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13784 === (1))){
var inst_13733 = [];
var inst_13734 = inst_13733;
var inst_13735 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13783__$1 = (function (){var statearr_13788 = state_13783;
(statearr_13788[(7)] = inst_13734);

(statearr_13788[(8)] = inst_13735);

return statearr_13788;
})();
var statearr_13789_13863 = state_13783__$1;
(statearr_13789_13863[(2)] = null);

(statearr_13789_13863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13784 === (4))){
var inst_13738 = (state_13783[(9)]);
var inst_13738__$1 = (state_13783[(2)]);
var inst_13739 = (inst_13738__$1 == null);
var inst_13740 = cljs.core.not.call(null,inst_13739);
var state_13783__$1 = (function (){var statearr_13790 = state_13783;
(statearr_13790[(9)] = inst_13738__$1);

return statearr_13790;
})();
if(inst_13740){
var statearr_13792_13865 = state_13783__$1;
(statearr_13792_13865[(1)] = (5));

} else {
var statearr_13793_13866 = state_13783__$1;
(statearr_13793_13866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13784 === (15))){
var inst_13734 = (state_13783[(7)]);
var inst_13768 = cljs.core.vec.call(null,inst_13734);
var state_13783__$1 = state_13783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13783__$1,(18),out,inst_13768);
} else {
if((state_val_13784 === (13))){
var inst_13761 = (state_13783[(2)]);
var state_13783__$1 = state_13783;
var statearr_13794_13869 = state_13783__$1;
(statearr_13794_13869[(2)] = inst_13761);

(statearr_13794_13869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13784 === (6))){
var inst_13734 = (state_13783[(7)]);
var inst_13764 = inst_13734.length;
var inst_13765 = (inst_13764 > (0));
var state_13783__$1 = state_13783;
if(cljs.core.truth_(inst_13765)){
var statearr_13797_13870 = state_13783__$1;
(statearr_13797_13870[(1)] = (15));

} else {
var statearr_13799_13871 = state_13783__$1;
(statearr_13799_13871[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13784 === (17))){
var inst_13773 = (state_13783[(2)]);
var inst_13774 = cljs.core.async.close_BANG_.call(null,out);
var state_13783__$1 = (function (){var statearr_13801 = state_13783;
(statearr_13801[(10)] = inst_13773);

return statearr_13801;
})();
var statearr_13802_13874 = state_13783__$1;
(statearr_13802_13874[(2)] = inst_13774);

(statearr_13802_13874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13784 === (3))){
var inst_13778 = (state_13783[(2)]);
var state_13783__$1 = state_13783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13783__$1,inst_13778);
} else {
if((state_val_13784 === (12))){
var inst_13734 = (state_13783[(7)]);
var inst_13754 = cljs.core.vec.call(null,inst_13734);
var state_13783__$1 = state_13783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13783__$1,(14),out,inst_13754);
} else {
if((state_val_13784 === (2))){
var state_13783__$1 = state_13783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13783__$1,(4),ch);
} else {
if((state_val_13784 === (11))){
var inst_13734 = (state_13783[(7)]);
var inst_13738 = (state_13783[(9)]);
var inst_13742 = (state_13783[(11)]);
var inst_13751 = inst_13734.push(inst_13738);
var tmp13804 = inst_13734;
var inst_13734__$1 = tmp13804;
var inst_13735 = inst_13742;
var state_13783__$1 = (function (){var statearr_13805 = state_13783;
(statearr_13805[(12)] = inst_13751);

(statearr_13805[(7)] = inst_13734__$1);

(statearr_13805[(8)] = inst_13735);

return statearr_13805;
})();
var statearr_13806_13877 = state_13783__$1;
(statearr_13806_13877[(2)] = null);

(statearr_13806_13877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13784 === (9))){
var inst_13735 = (state_13783[(8)]);
var inst_13747 = cljs.core.keyword_identical_QMARK_.call(null,inst_13735,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_13783__$1 = state_13783;
var statearr_13808_13878 = state_13783__$1;
(statearr_13808_13878[(2)] = inst_13747);

(statearr_13808_13878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13784 === (5))){
var inst_13738 = (state_13783[(9)]);
var inst_13742 = (state_13783[(11)]);
var inst_13735 = (state_13783[(8)]);
var inst_13743 = (state_13783[(13)]);
var inst_13742__$1 = f.call(null,inst_13738);
var inst_13743__$1 = cljs.core._EQ_.call(null,inst_13742__$1,inst_13735);
var state_13783__$1 = (function (){var statearr_13827 = state_13783;
(statearr_13827[(11)] = inst_13742__$1);

(statearr_13827[(13)] = inst_13743__$1);

return statearr_13827;
})();
if(inst_13743__$1){
var statearr_13828_13879 = state_13783__$1;
(statearr_13828_13879[(1)] = (8));

} else {
var statearr_13829_13881 = state_13783__$1;
(statearr_13829_13881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13784 === (14))){
var inst_13738 = (state_13783[(9)]);
var inst_13742 = (state_13783[(11)]);
var inst_13756 = (state_13783[(2)]);
var inst_13757 = [];
var inst_13758 = inst_13757.push(inst_13738);
var inst_13734 = inst_13757;
var inst_13735 = inst_13742;
var state_13783__$1 = (function (){var statearr_13831 = state_13783;
(statearr_13831[(14)] = inst_13756);

(statearr_13831[(15)] = inst_13758);

(statearr_13831[(7)] = inst_13734);

(statearr_13831[(8)] = inst_13735);

return statearr_13831;
})();
var statearr_13833_13884 = state_13783__$1;
(statearr_13833_13884[(2)] = null);

(statearr_13833_13884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13784 === (16))){
var state_13783__$1 = state_13783;
var statearr_13843_13886 = state_13783__$1;
(statearr_13843_13886[(2)] = null);

(statearr_13843_13886[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13784 === (10))){
var inst_13749 = (state_13783[(2)]);
var state_13783__$1 = state_13783;
if(cljs.core.truth_(inst_13749)){
var statearr_13844_13887 = state_13783__$1;
(statearr_13844_13887[(1)] = (11));

} else {
var statearr_13845_13888 = state_13783__$1;
(statearr_13845_13888[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13784 === (18))){
var inst_13770 = (state_13783[(2)]);
var state_13783__$1 = state_13783;
var statearr_13847_13889 = state_13783__$1;
(statearr_13847_13889[(2)] = inst_13770);

(statearr_13847_13889[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13784 === (8))){
var inst_13743 = (state_13783[(13)]);
var state_13783__$1 = state_13783;
var statearr_13848_13890 = state_13783__$1;
(statearr_13848_13890[(2)] = inst_13743);

(statearr_13848_13890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11757__auto__ = null;
var cljs$core$async$state_machine__11757__auto____0 = (function (){
var statearr_13849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13849[(0)] = cljs$core$async$state_machine__11757__auto__);

(statearr_13849[(1)] = (1));

return statearr_13849;
});
var cljs$core$async$state_machine__11757__auto____1 = (function (state_13783){
while(true){
var ret_value__11758__auto__ = (function (){try{while(true){
var result__11759__auto__ = switch__11756__auto__.call(null,state_13783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11759__auto__;
}
break;
}
}catch (e13850){var ex__11760__auto__ = e13850;
var statearr_13851_13891 = state_13783;
(statearr_13851_13891[(2)] = ex__11760__auto__);


if(cljs.core.seq.call(null,(state_13783[(4)]))){
var statearr_13852_13892 = state_13783;
(statearr_13852_13892[(1)] = cljs.core.first.call(null,(state_13783[(4)])));

} else {
throw ex__11760__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13893 = state_13783;
state_13783 = G__13893;
continue;
} else {
return ret_value__11758__auto__;
}
break;
}
});
cljs$core$async$state_machine__11757__auto__ = function(state_13783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11757__auto____1.call(this,state_13783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11757__auto____0;
cljs$core$async$state_machine__11757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11757__auto____1;
return cljs$core$async$state_machine__11757__auto__;
})()
})();
var state__11832__auto__ = (function (){var statearr_13856 = f__11831__auto__.call(null);
(statearr_13856[(6)] = c__11830__auto___13860);

return statearr_13856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11832__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
