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
var G__10481 = arguments.length;
switch (G__10481) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10484 = (function (f,blockable,meta10485){
this.f = f;
this.blockable = blockable;
this.meta10485 = meta10485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10486,meta10485__$1){
var self__ = this;
var _10486__$1 = this;
return (new cljs.core.async.t_cljs$core$async10484(self__.f,self__.blockable,meta10485__$1));
}));

(cljs.core.async.t_cljs$core$async10484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10486){
var self__ = this;
var _10486__$1 = this;
return self__.meta10485;
}));

(cljs.core.async.t_cljs$core$async10484.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10484.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10484.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10484.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10485","meta10485",-1656503131,null)], null);
}));

(cljs.core.async.t_cljs$core$async10484.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10484");

(cljs.core.async.t_cljs$core$async10484.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async10484");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10484.
 */
cljs.core.async.__GT_t_cljs$core$async10484 = (function cljs$core$async$__GT_t_cljs$core$async10484(f__$1,blockable__$1,meta10485){
return (new cljs.core.async.t_cljs$core$async10484(f__$1,blockable__$1,meta10485));
});

}

return (new cljs.core.async.t_cljs$core$async10484(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10490 = arguments.length;
switch (G__10490) {
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
var G__10492 = arguments.length;
switch (G__10492) {
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
var G__10501 = arguments.length;
switch (G__10501) {
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
var val_10548 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10548);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_10548);
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
var G__10519 = arguments.length;
switch (G__10519) {
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
var n__5616__auto___10562 = n;
var x_10563 = (0);
while(true){
if((x_10563 < n__5616__auto___10562)){
(a[x_10563] = x_10563);

var G__10564 = (x_10563 + (1));
x_10563 = G__10564;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10526 = (function (flag,meta10527){
this.flag = flag;
this.meta10527 = meta10527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10528,meta10527__$1){
var self__ = this;
var _10528__$1 = this;
return (new cljs.core.async.t_cljs$core$async10526(self__.flag,meta10527__$1));
}));

(cljs.core.async.t_cljs$core$async10526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10528){
var self__ = this;
var _10528__$1 = this;
return self__.meta10527;
}));

(cljs.core.async.t_cljs$core$async10526.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async10526.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10527","meta10527",-1630217329,null)], null);
}));

(cljs.core.async.t_cljs$core$async10526.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10526");

(cljs.core.async.t_cljs$core$async10526.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async10526");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10526.
 */
cljs.core.async.__GT_t_cljs$core$async10526 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10526(flag__$1,meta10527){
return (new cljs.core.async.t_cljs$core$async10526(flag__$1,meta10527));
});

}

return (new cljs.core.async.t_cljs$core$async10526(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10550 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10550 = (function (flag,cb,meta10551){
this.flag = flag;
this.cb = cb;
this.meta10551 = meta10551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10552,meta10551__$1){
var self__ = this;
var _10552__$1 = this;
return (new cljs.core.async.t_cljs$core$async10550(self__.flag,self__.cb,meta10551__$1));
}));

(cljs.core.async.t_cljs$core$async10550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10552){
var self__ = this;
var _10552__$1 = this;
return self__.meta10551;
}));

(cljs.core.async.t_cljs$core$async10550.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10550.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async10550.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10550.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async10550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10551","meta10551",-751863530,null)], null);
}));

(cljs.core.async.t_cljs$core$async10550.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10550");

(cljs.core.async.t_cljs$core$async10550.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async10550");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10550.
 */
cljs.core.async.__GT_t_cljs$core$async10550 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10550(flag__$1,cb__$1,meta10551){
return (new cljs.core.async.t_cljs$core$async10550(flag__$1,cb__$1,meta10551));
});

}

return (new cljs.core.async.t_cljs$core$async10550(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10567_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10567_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__10568_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10568_SHARP_,port], null));
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
var G__10654 = (i + (1));
i = G__10654;
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
var len__5749__auto___10675 = arguments.length;
var i__5750__auto___10676 = (0);
while(true){
if((i__5750__auto___10676 < len__5749__auto___10675)){
args__5755__auto__.push((arguments[i__5750__auto___10676]));

var G__10678 = (i__5750__auto___10676 + (1));
i__5750__auto___10676 = G__10678;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10586){
var map__10587 = p__10586;
var map__10587__$1 = cljs.core.__destructure_map.call(null,map__10587);
var opts = map__10587__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10580){
var G__10581 = cljs.core.first.call(null,seq10580);
var seq10580__$1 = cljs.core.next.call(null,seq10580);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10581,seq10580__$1);
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
var G__10589 = arguments.length;
switch (G__10589) {
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
var c__10405__auto___10692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_10633){
var state_val_10636 = (state_10633[(1)]);
if((state_val_10636 === (7))){
var inst_10623 = (state_10633[(2)]);
var state_10633__$1 = state_10633;
var statearr_10642_10696 = state_10633__$1;
(statearr_10642_10696[(2)] = inst_10623);

(statearr_10642_10696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10636 === (1))){
var state_10633__$1 = state_10633;
var statearr_10643_10707 = state_10633__$1;
(statearr_10643_10707[(2)] = null);

(statearr_10643_10707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10636 === (4))){
var inst_10606 = (state_10633[(7)]);
var inst_10606__$1 = (state_10633[(2)]);
var inst_10607 = (inst_10606__$1 == null);
var state_10633__$1 = (function (){var statearr_10644 = state_10633;
(statearr_10644[(7)] = inst_10606__$1);

return statearr_10644;
})();
if(cljs.core.truth_(inst_10607)){
var statearr_10645_10708 = state_10633__$1;
(statearr_10645_10708[(1)] = (5));

} else {
var statearr_10648_10709 = state_10633__$1;
(statearr_10648_10709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10636 === (13))){
var state_10633__$1 = state_10633;
var statearr_10652_10710 = state_10633__$1;
(statearr_10652_10710[(2)] = null);

(statearr_10652_10710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10636 === (6))){
var inst_10606 = (state_10633[(7)]);
var state_10633__$1 = state_10633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10633__$1,(11),to,inst_10606);
} else {
if((state_val_10636 === (3))){
var inst_10629 = (state_10633[(2)]);
var state_10633__$1 = state_10633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10633__$1,inst_10629);
} else {
if((state_val_10636 === (12))){
var state_10633__$1 = state_10633;
var statearr_10655_10712 = state_10633__$1;
(statearr_10655_10712[(2)] = null);

(statearr_10655_10712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10636 === (2))){
var state_10633__$1 = state_10633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10633__$1,(4),from);
} else {
if((state_val_10636 === (11))){
var inst_10616 = (state_10633[(2)]);
var state_10633__$1 = state_10633;
if(cljs.core.truth_(inst_10616)){
var statearr_10658_10716 = state_10633__$1;
(statearr_10658_10716[(1)] = (12));

} else {
var statearr_10659_10717 = state_10633__$1;
(statearr_10659_10717[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10636 === (9))){
var state_10633__$1 = state_10633;
var statearr_10660_10720 = state_10633__$1;
(statearr_10660_10720[(2)] = null);

(statearr_10660_10720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10636 === (5))){
var state_10633__$1 = state_10633;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10661_10722 = state_10633__$1;
(statearr_10661_10722[(1)] = (8));

} else {
var statearr_10662_10724 = state_10633__$1;
(statearr_10662_10724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10636 === (14))){
var inst_10621 = (state_10633[(2)]);
var state_10633__$1 = state_10633;
var statearr_10663_10726 = state_10633__$1;
(statearr_10663_10726[(2)] = inst_10621);

(statearr_10663_10726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10636 === (10))){
var inst_10613 = (state_10633[(2)]);
var state_10633__$1 = state_10633;
var statearr_10668_10728 = state_10633__$1;
(statearr_10668_10728[(2)] = inst_10613);

(statearr_10668_10728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10636 === (8))){
var inst_10610 = cljs.core.async.close_BANG_.call(null,to);
var state_10633__$1 = state_10633;
var statearr_10669_10729 = state_10633__$1;
(statearr_10669_10729[(2)] = inst_10610);

(statearr_10669_10729[(1)] = (10));


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
var cljs$core$async$state_machine__10315__auto__ = null;
var cljs$core$async$state_machine__10315__auto____0 = (function (){
var statearr_10671 = [null,null,null,null,null,null,null,null];
(statearr_10671[(0)] = cljs$core$async$state_machine__10315__auto__);

(statearr_10671[(1)] = (1));

return statearr_10671;
});
var cljs$core$async$state_machine__10315__auto____1 = (function (state_10633){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_10633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e10673){var ex__10318__auto__ = e10673;
var statearr_10674_10737 = state_10633;
(statearr_10674_10737[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_10633[(4)]))){
var statearr_10677_10738 = state_10633;
(statearr_10677_10738[(1)] = cljs.core.first.call(null,(state_10633[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10742 = state_10633;
state_10633 = G__10742;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$state_machine__10315__auto__ = function(state_10633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10315__auto____1.call(this,state_10633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10315__auto____0;
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10315__auto____1;
return cljs$core$async$state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_10679 = f__10406__auto__.call(null);
(statearr_10679[(6)] = c__10405__auto___10692);

return statearr_10679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
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
var process__$1 = (function (p__10680){
var vec__10681 = p__10680;
var v = cljs.core.nth.call(null,vec__10681,(0),null);
var p = cljs.core.nth.call(null,vec__10681,(1),null);
var job = vec__10681;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10405__auto___10970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_10689){
var state_val_10690 = (state_10689[(1)]);
if((state_val_10690 === (1))){
var state_10689__$1 = state_10689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10689__$1,(2),res,v);
} else {
if((state_val_10690 === (2))){
var inst_10686 = (state_10689[(2)]);
var inst_10687 = cljs.core.async.close_BANG_.call(null,res);
var state_10689__$1 = (function (){var statearr_10695 = state_10689;
(statearr_10695[(7)] = inst_10686);

return statearr_10695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10689__$1,inst_10687);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____0 = (function (){
var statearr_10706 = [null,null,null,null,null,null,null,null];
(statearr_10706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__);

(statearr_10706[(1)] = (1));

return statearr_10706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____1 = (function (state_10689){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_10689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e10718){var ex__10318__auto__ = e10718;
var statearr_10719_10971 = state_10689;
(statearr_10719_10971[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_10689[(4)]))){
var statearr_10721_10972 = state_10689;
(statearr_10721_10972[(1)] = cljs.core.first.call(null,(state_10689[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10973 = state_10689;
state_10689 = G__10973;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__ = function(state_10689){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____1.call(this,state_10689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_10727 = f__10406__auto__.call(null);
(statearr_10727[(6)] = c__10405__auto___10970);

return statearr_10727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__10730){
var vec__10731 = p__10730;
var v = cljs.core.nth.call(null,vec__10731,(0),null);
var p = cljs.core.nth.call(null,vec__10731,(1),null);
var job = vec__10731;
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
var n__5616__auto___10986 = n;
var __10987 = (0);
while(true){
if((__10987 < n__5616__auto___10986)){
var G__10736_10990 = type;
var G__10736_10991__$1 = (((G__10736_10990 instanceof cljs.core.Keyword))?G__10736_10990.fqn:null);
switch (G__10736_10991__$1) {
case "compute":
var c__10405__auto___10993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10987,c__10405__auto___10993,G__10736_10990,G__10736_10991__$1,n__5616__auto___10986,jobs,results,process__$1,async){
return (function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = ((function (__10987,c__10405__auto___10993,G__10736_10990,G__10736_10991__$1,n__5616__auto___10986,jobs,results,process__$1,async){
return (function (state_10752){
var state_val_10753 = (state_10752[(1)]);
if((state_val_10753 === (1))){
var state_10752__$1 = state_10752;
var statearr_10758_10994 = state_10752__$1;
(statearr_10758_10994[(2)] = null);

(statearr_10758_10994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (2))){
var state_10752__$1 = state_10752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10752__$1,(4),jobs);
} else {
if((state_val_10753 === (3))){
var inst_10750 = (state_10752[(2)]);
var state_10752__$1 = state_10752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10752__$1,inst_10750);
} else {
if((state_val_10753 === (4))){
var inst_10741 = (state_10752[(2)]);
var inst_10743 = process__$1.call(null,inst_10741);
var state_10752__$1 = state_10752;
if(cljs.core.truth_(inst_10743)){
var statearr_10761_10996 = state_10752__$1;
(statearr_10761_10996[(1)] = (5));

} else {
var statearr_10762_11001 = state_10752__$1;
(statearr_10762_11001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (5))){
var state_10752__$1 = state_10752;
var statearr_10763_11002 = state_10752__$1;
(statearr_10763_11002[(2)] = null);

(statearr_10763_11002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (6))){
var state_10752__$1 = state_10752;
var statearr_10765_11003 = state_10752__$1;
(statearr_10765_11003[(2)] = null);

(statearr_10765_11003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10753 === (7))){
var inst_10748 = (state_10752[(2)]);
var state_10752__$1 = state_10752;
var statearr_10767_11004 = state_10752__$1;
(statearr_10767_11004[(2)] = inst_10748);

(statearr_10767_11004[(1)] = (3));


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
});})(__10987,c__10405__auto___10993,G__10736_10990,G__10736_10991__$1,n__5616__auto___10986,jobs,results,process__$1,async))
;
return ((function (__10987,switch__10314__auto__,c__10405__auto___10993,G__10736_10990,G__10736_10991__$1,n__5616__auto___10986,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____0 = (function (){
var statearr_10768 = [null,null,null,null,null,null,null];
(statearr_10768[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__);

(statearr_10768[(1)] = (1));

return statearr_10768;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____1 = (function (state_10752){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_10752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e10769){var ex__10318__auto__ = e10769;
var statearr_10770_11008 = state_10752;
(statearr_10770_11008[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_10752[(4)]))){
var statearr_10771_11009 = state_10752;
(statearr_10771_11009[(1)] = cljs.core.first.call(null,(state_10752[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11010 = state_10752;
state_10752 = G__11010;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__ = function(state_10752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____1.call(this,state_10752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__;
})()
;})(__10987,switch__10314__auto__,c__10405__auto___10993,G__10736_10990,G__10736_10991__$1,n__5616__auto___10986,jobs,results,process__$1,async))
})();
var state__10407__auto__ = (function (){var statearr_10773 = f__10406__auto__.call(null);
(statearr_10773[(6)] = c__10405__auto___10993);

return statearr_10773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
});})(__10987,c__10405__auto___10993,G__10736_10990,G__10736_10991__$1,n__5616__auto___10986,jobs,results,process__$1,async))
);


break;
case "async":
var c__10405__auto___11012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10987,c__10405__auto___11012,G__10736_10990,G__10736_10991__$1,n__5616__auto___10986,jobs,results,process__$1,async){
return (function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = ((function (__10987,c__10405__auto___11012,G__10736_10990,G__10736_10991__$1,n__5616__auto___10986,jobs,results,process__$1,async){
return (function (state_10789){
var state_val_10790 = (state_10789[(1)]);
if((state_val_10790 === (1))){
var state_10789__$1 = state_10789;
var statearr_10795_11015 = state_10789__$1;
(statearr_10795_11015[(2)] = null);

(statearr_10795_11015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10790 === (2))){
var state_10789__$1 = state_10789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10789__$1,(4),jobs);
} else {
if((state_val_10790 === (3))){
var inst_10787 = (state_10789[(2)]);
var state_10789__$1 = state_10789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10789__$1,inst_10787);
} else {
if((state_val_10790 === (4))){
var inst_10779 = (state_10789[(2)]);
var inst_10780 = async.call(null,inst_10779);
var state_10789__$1 = state_10789;
if(cljs.core.truth_(inst_10780)){
var statearr_10796_11016 = state_10789__$1;
(statearr_10796_11016[(1)] = (5));

} else {
var statearr_10797_11017 = state_10789__$1;
(statearr_10797_11017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10790 === (5))){
var state_10789__$1 = state_10789;
var statearr_10798_11018 = state_10789__$1;
(statearr_10798_11018[(2)] = null);

(statearr_10798_11018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10790 === (6))){
var state_10789__$1 = state_10789;
var statearr_10802_11019 = state_10789__$1;
(statearr_10802_11019[(2)] = null);

(statearr_10802_11019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10790 === (7))){
var inst_10785 = (state_10789[(2)]);
var state_10789__$1 = state_10789;
var statearr_10810_11020 = state_10789__$1;
(statearr_10810_11020[(2)] = inst_10785);

(statearr_10810_11020[(1)] = (3));


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
});})(__10987,c__10405__auto___11012,G__10736_10990,G__10736_10991__$1,n__5616__auto___10986,jobs,results,process__$1,async))
;
return ((function (__10987,switch__10314__auto__,c__10405__auto___11012,G__10736_10990,G__10736_10991__$1,n__5616__auto___10986,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____0 = (function (){
var statearr_10817 = [null,null,null,null,null,null,null];
(statearr_10817[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__);

(statearr_10817[(1)] = (1));

return statearr_10817;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____1 = (function (state_10789){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_10789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e10818){var ex__10318__auto__ = e10818;
var statearr_10819_11028 = state_10789;
(statearr_10819_11028[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_10789[(4)]))){
var statearr_10822_11029 = state_10789;
(statearr_10822_11029[(1)] = cljs.core.first.call(null,(state_10789[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11031 = state_10789;
state_10789 = G__11031;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__ = function(state_10789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____1.call(this,state_10789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__;
})()
;})(__10987,switch__10314__auto__,c__10405__auto___11012,G__10736_10990,G__10736_10991__$1,n__5616__auto___10986,jobs,results,process__$1,async))
})();
var state__10407__auto__ = (function (){var statearr_10823 = f__10406__auto__.call(null);
(statearr_10823[(6)] = c__10405__auto___11012);

return statearr_10823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
});})(__10987,c__10405__auto___11012,G__10736_10990,G__10736_10991__$1,n__5616__auto___10986,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10736_10991__$1)].join('')));

}

var G__11032 = (__10987 + (1));
__10987 = G__11032;
continue;
} else {
}
break;
}

var c__10405__auto___11034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_10846){
var state_val_10847 = (state_10846[(1)]);
if((state_val_10847 === (7))){
var inst_10842 = (state_10846[(2)]);
var state_10846__$1 = state_10846;
var statearr_10850_11035 = state_10846__$1;
(statearr_10850_11035[(2)] = inst_10842);

(statearr_10850_11035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10847 === (1))){
var state_10846__$1 = state_10846;
var statearr_10851_11036 = state_10846__$1;
(statearr_10851_11036[(2)] = null);

(statearr_10851_11036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10847 === (4))){
var inst_10827 = (state_10846[(7)]);
var inst_10827__$1 = (state_10846[(2)]);
var inst_10828 = (inst_10827__$1 == null);
var state_10846__$1 = (function (){var statearr_10856 = state_10846;
(statearr_10856[(7)] = inst_10827__$1);

return statearr_10856;
})();
if(cljs.core.truth_(inst_10828)){
var statearr_10857_11037 = state_10846__$1;
(statearr_10857_11037[(1)] = (5));

} else {
var statearr_10859_11038 = state_10846__$1;
(statearr_10859_11038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10847 === (6))){
var inst_10827 = (state_10846[(7)]);
var inst_10832 = (state_10846[(8)]);
var inst_10832__$1 = cljs.core.async.chan.call(null,(1));
var inst_10833 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10834 = [inst_10827,inst_10832__$1];
var inst_10835 = (new cljs.core.PersistentVector(null,2,(5),inst_10833,inst_10834,null));
var state_10846__$1 = (function (){var statearr_10862 = state_10846;
(statearr_10862[(8)] = inst_10832__$1);

return statearr_10862;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10846__$1,(8),jobs,inst_10835);
} else {
if((state_val_10847 === (3))){
var inst_10844 = (state_10846[(2)]);
var state_10846__$1 = state_10846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10846__$1,inst_10844);
} else {
if((state_val_10847 === (2))){
var state_10846__$1 = state_10846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10846__$1,(4),from);
} else {
if((state_val_10847 === (9))){
var inst_10839 = (state_10846[(2)]);
var state_10846__$1 = (function (){var statearr_10865 = state_10846;
(statearr_10865[(9)] = inst_10839);

return statearr_10865;
})();
var statearr_10866_11054 = state_10846__$1;
(statearr_10866_11054[(2)] = null);

(statearr_10866_11054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10847 === (5))){
var inst_10830 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10846__$1 = state_10846;
var statearr_10867_11063 = state_10846__$1;
(statearr_10867_11063[(2)] = inst_10830);

(statearr_10867_11063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10847 === (8))){
var inst_10832 = (state_10846[(8)]);
var inst_10837 = (state_10846[(2)]);
var state_10846__$1 = (function (){var statearr_10869 = state_10846;
(statearr_10869[(10)] = inst_10837);

return statearr_10869;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10846__$1,(9),results,inst_10832);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____0 = (function (){
var statearr_10873 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__);

(statearr_10873[(1)] = (1));

return statearr_10873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____1 = (function (state_10846){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_10846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e10874){var ex__10318__auto__ = e10874;
var statearr_10875_11084 = state_10846;
(statearr_10875_11084[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_10846[(4)]))){
var statearr_10876_11085 = state_10846;
(statearr_10876_11085[(1)] = cljs.core.first.call(null,(state_10846[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11086 = state_10846;
state_10846 = G__11086;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__ = function(state_10846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____1.call(this,state_10846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_10877 = f__10406__auto__.call(null);
(statearr_10877[(6)] = c__10405__auto___11034);

return statearr_10877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
}));


var c__10405__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_10915){
var state_val_10916 = (state_10915[(1)]);
if((state_val_10916 === (7))){
var inst_10911 = (state_10915[(2)]);
var state_10915__$1 = state_10915;
var statearr_10917_11090 = state_10915__$1;
(statearr_10917_11090[(2)] = inst_10911);

(statearr_10917_11090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10916 === (20))){
var state_10915__$1 = state_10915;
var statearr_10918_11092 = state_10915__$1;
(statearr_10918_11092[(2)] = null);

(statearr_10918_11092[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10916 === (1))){
var state_10915__$1 = state_10915;
var statearr_10919_11095 = state_10915__$1;
(statearr_10919_11095[(2)] = null);

(statearr_10919_11095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10916 === (4))){
var inst_10880 = (state_10915[(7)]);
var inst_10880__$1 = (state_10915[(2)]);
var inst_10881 = (inst_10880__$1 == null);
var state_10915__$1 = (function (){var statearr_10920 = state_10915;
(statearr_10920[(7)] = inst_10880__$1);

return statearr_10920;
})();
if(cljs.core.truth_(inst_10881)){
var statearr_10921_11110 = state_10915__$1;
(statearr_10921_11110[(1)] = (5));

} else {
var statearr_10922_11111 = state_10915__$1;
(statearr_10922_11111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10916 === (15))){
var inst_10893 = (state_10915[(8)]);
var state_10915__$1 = state_10915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10915__$1,(18),to,inst_10893);
} else {
if((state_val_10916 === (21))){
var inst_10906 = (state_10915[(2)]);
var state_10915__$1 = state_10915;
var statearr_10923_11113 = state_10915__$1;
(statearr_10923_11113[(2)] = inst_10906);

(statearr_10923_11113[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10916 === (13))){
var inst_10908 = (state_10915[(2)]);
var state_10915__$1 = (function (){var statearr_10924 = state_10915;
(statearr_10924[(9)] = inst_10908);

return statearr_10924;
})();
var statearr_10925_11117 = state_10915__$1;
(statearr_10925_11117[(2)] = null);

(statearr_10925_11117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10916 === (6))){
var inst_10880 = (state_10915[(7)]);
var state_10915__$1 = state_10915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10915__$1,(11),inst_10880);
} else {
if((state_val_10916 === (17))){
var inst_10901 = (state_10915[(2)]);
var state_10915__$1 = state_10915;
if(cljs.core.truth_(inst_10901)){
var statearr_10930_11119 = state_10915__$1;
(statearr_10930_11119[(1)] = (19));

} else {
var statearr_10931_11121 = state_10915__$1;
(statearr_10931_11121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10916 === (3))){
var inst_10913 = (state_10915[(2)]);
var state_10915__$1 = state_10915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10915__$1,inst_10913);
} else {
if((state_val_10916 === (12))){
var inst_10890 = (state_10915[(10)]);
var state_10915__$1 = state_10915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10915__$1,(14),inst_10890);
} else {
if((state_val_10916 === (2))){
var state_10915__$1 = state_10915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10915__$1,(4),results);
} else {
if((state_val_10916 === (19))){
var state_10915__$1 = state_10915;
var statearr_10934_11125 = state_10915__$1;
(statearr_10934_11125[(2)] = null);

(statearr_10934_11125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10916 === (11))){
var inst_10890 = (state_10915[(2)]);
var state_10915__$1 = (function (){var statearr_10935 = state_10915;
(statearr_10935[(10)] = inst_10890);

return statearr_10935;
})();
var statearr_10936_11128 = state_10915__$1;
(statearr_10936_11128[(2)] = null);

(statearr_10936_11128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10916 === (9))){
var state_10915__$1 = state_10915;
var statearr_10937_11131 = state_10915__$1;
(statearr_10937_11131[(2)] = null);

(statearr_10937_11131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10916 === (5))){
var state_10915__$1 = state_10915;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10938_11134 = state_10915__$1;
(statearr_10938_11134[(1)] = (8));

} else {
var statearr_10939_11135 = state_10915__$1;
(statearr_10939_11135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10916 === (14))){
var inst_10893 = (state_10915[(8)]);
var inst_10895 = (state_10915[(11)]);
var inst_10893__$1 = (state_10915[(2)]);
var inst_10894 = (inst_10893__$1 == null);
var inst_10895__$1 = cljs.core.not.call(null,inst_10894);
var state_10915__$1 = (function (){var statearr_10940 = state_10915;
(statearr_10940[(8)] = inst_10893__$1);

(statearr_10940[(11)] = inst_10895__$1);

return statearr_10940;
})();
if(inst_10895__$1){
var statearr_10941_11137 = state_10915__$1;
(statearr_10941_11137[(1)] = (15));

} else {
var statearr_10942_11138 = state_10915__$1;
(statearr_10942_11138[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10916 === (16))){
var inst_10895 = (state_10915[(11)]);
var state_10915__$1 = state_10915;
var statearr_10943_11139 = state_10915__$1;
(statearr_10943_11139[(2)] = inst_10895);

(statearr_10943_11139[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10916 === (10))){
var inst_10887 = (state_10915[(2)]);
var state_10915__$1 = state_10915;
var statearr_10944_11140 = state_10915__$1;
(statearr_10944_11140[(2)] = inst_10887);

(statearr_10944_11140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10916 === (18))){
var inst_10898 = (state_10915[(2)]);
var state_10915__$1 = state_10915;
var statearr_10945_11146 = state_10915__$1;
(statearr_10945_11146[(2)] = inst_10898);

(statearr_10945_11146[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10916 === (8))){
var inst_10884 = cljs.core.async.close_BANG_.call(null,to);
var state_10915__$1 = state_10915;
var statearr_10946_11153 = state_10915__$1;
(statearr_10946_11153[(2)] = inst_10884);

(statearr_10946_11153[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____0 = (function (){
var statearr_10947 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10947[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__);

(statearr_10947[(1)] = (1));

return statearr_10947;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____1 = (function (state_10915){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_10915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e10948){var ex__10318__auto__ = e10948;
var statearr_10949_11166 = state_10915;
(statearr_10949_11166[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_10915[(4)]))){
var statearr_10951_11168 = state_10915;
(statearr_10951_11168[(1)] = cljs.core.first.call(null,(state_10915[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11171 = state_10915;
state_10915 = G__11171;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__ = function(state_10915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____1.call(this,state_10915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_10959 = f__10406__auto__.call(null);
(statearr_10959[(6)] = c__10405__auto__);

return statearr_10959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
}));

return c__10405__auto__;
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
var G__10964 = arguments.length;
switch (G__10964) {
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
var G__10995 = arguments.length;
switch (G__10995) {
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
var G__11033 = arguments.length;
switch (G__11033) {
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
var c__10405__auto___11206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_11080){
var state_val_11081 = (state_11080[(1)]);
if((state_val_11081 === (7))){
var inst_11076 = (state_11080[(2)]);
var state_11080__$1 = state_11080;
var statearr_11082_11213 = state_11080__$1;
(statearr_11082_11213[(2)] = inst_11076);

(statearr_11082_11213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (1))){
var state_11080__$1 = state_11080;
var statearr_11083_11254 = state_11080__$1;
(statearr_11083_11254[(2)] = null);

(statearr_11083_11254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (4))){
var inst_11056 = (state_11080[(7)]);
var inst_11056__$1 = (state_11080[(2)]);
var inst_11057 = (inst_11056__$1 == null);
var state_11080__$1 = (function (){var statearr_11093 = state_11080;
(statearr_11093[(7)] = inst_11056__$1);

return statearr_11093;
})();
if(cljs.core.truth_(inst_11057)){
var statearr_11097_11260 = state_11080__$1;
(statearr_11097_11260[(1)] = (5));

} else {
var statearr_11109_11261 = state_11080__$1;
(statearr_11109_11261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (13))){
var state_11080__$1 = state_11080;
var statearr_11112_11262 = state_11080__$1;
(statearr_11112_11262[(2)] = null);

(statearr_11112_11262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (6))){
var inst_11056 = (state_11080[(7)]);
var inst_11062 = p.call(null,inst_11056);
var state_11080__$1 = state_11080;
if(cljs.core.truth_(inst_11062)){
var statearr_11114_11297 = state_11080__$1;
(statearr_11114_11297[(1)] = (9));

} else {
var statearr_11115_11300 = state_11080__$1;
(statearr_11115_11300[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (3))){
var inst_11078 = (state_11080[(2)]);
var state_11080__$1 = state_11080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11080__$1,inst_11078);
} else {
if((state_val_11081 === (12))){
var state_11080__$1 = state_11080;
var statearr_11116_11362 = state_11080__$1;
(statearr_11116_11362[(2)] = null);

(statearr_11116_11362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (2))){
var state_11080__$1 = state_11080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11080__$1,(4),ch);
} else {
if((state_val_11081 === (11))){
var inst_11056 = (state_11080[(7)]);
var inst_11067 = (state_11080[(2)]);
var state_11080__$1 = state_11080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11080__$1,(8),inst_11067,inst_11056);
} else {
if((state_val_11081 === (9))){
var state_11080__$1 = state_11080;
var statearr_11118_11372 = state_11080__$1;
(statearr_11118_11372[(2)] = tc);

(statearr_11118_11372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (5))){
var inst_11059 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11060 = cljs.core.async.close_BANG_.call(null,fc);
var state_11080__$1 = (function (){var statearr_11120 = state_11080;
(statearr_11120[(8)] = inst_11059);

return statearr_11120;
})();
var statearr_11122_11373 = state_11080__$1;
(statearr_11122_11373[(2)] = inst_11060);

(statearr_11122_11373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (14))){
var inst_11074 = (state_11080[(2)]);
var state_11080__$1 = state_11080;
var statearr_11123_11374 = state_11080__$1;
(statearr_11123_11374[(2)] = inst_11074);

(statearr_11123_11374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (10))){
var state_11080__$1 = state_11080;
var statearr_11124_11375 = state_11080__$1;
(statearr_11124_11375[(2)] = fc);

(statearr_11124_11375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (8))){
var inst_11069 = (state_11080[(2)]);
var state_11080__$1 = state_11080;
if(cljs.core.truth_(inst_11069)){
var statearr_11126_11381 = state_11080__$1;
(statearr_11126_11381[(1)] = (12));

} else {
var statearr_11127_11382 = state_11080__$1;
(statearr_11127_11382[(1)] = (13));

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
var cljs$core$async$state_machine__10315__auto__ = null;
var cljs$core$async$state_machine__10315__auto____0 = (function (){
var statearr_11129 = [null,null,null,null,null,null,null,null,null];
(statearr_11129[(0)] = cljs$core$async$state_machine__10315__auto__);

(statearr_11129[(1)] = (1));

return statearr_11129;
});
var cljs$core$async$state_machine__10315__auto____1 = (function (state_11080){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_11080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e11130){var ex__10318__auto__ = e11130;
var statearr_11132_11390 = state_11080;
(statearr_11132_11390[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_11080[(4)]))){
var statearr_11133_11391 = state_11080;
(statearr_11133_11391[(1)] = cljs.core.first.call(null,(state_11080[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11392 = state_11080;
state_11080 = G__11392;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$state_machine__10315__auto__ = function(state_11080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10315__auto____1.call(this,state_11080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10315__auto____0;
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10315__auto____1;
return cljs$core$async$state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_11136 = f__10406__auto__.call(null);
(statearr_11136[(6)] = c__10405__auto___11206);

return statearr_11136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
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
var c__10405__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_11164){
var state_val_11165 = (state_11164[(1)]);
if((state_val_11165 === (7))){
var inst_11160 = (state_11164[(2)]);
var state_11164__$1 = state_11164;
var statearr_11167_11406 = state_11164__$1;
(statearr_11167_11406[(2)] = inst_11160);

(statearr_11167_11406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (1))){
var inst_11141 = init;
var inst_11142 = inst_11141;
var state_11164__$1 = (function (){var statearr_11169 = state_11164;
(statearr_11169[(7)] = inst_11142);

return statearr_11169;
})();
var statearr_11170_11408 = state_11164__$1;
(statearr_11170_11408[(2)] = null);

(statearr_11170_11408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (4))){
var inst_11145 = (state_11164[(8)]);
var inst_11145__$1 = (state_11164[(2)]);
var inst_11147 = (inst_11145__$1 == null);
var state_11164__$1 = (function (){var statearr_11172 = state_11164;
(statearr_11172[(8)] = inst_11145__$1);

return statearr_11172;
})();
if(cljs.core.truth_(inst_11147)){
var statearr_11173_11409 = state_11164__$1;
(statearr_11173_11409[(1)] = (5));

} else {
var statearr_11174_11410 = state_11164__$1;
(statearr_11174_11410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (6))){
var inst_11142 = (state_11164[(7)]);
var inst_11145 = (state_11164[(8)]);
var inst_11150 = (state_11164[(9)]);
var inst_11150__$1 = f.call(null,inst_11142,inst_11145);
var inst_11151 = cljs.core.reduced_QMARK_.call(null,inst_11150__$1);
var state_11164__$1 = (function (){var statearr_11176 = state_11164;
(statearr_11176[(9)] = inst_11150__$1);

return statearr_11176;
})();
if(inst_11151){
var statearr_11177_11411 = state_11164__$1;
(statearr_11177_11411[(1)] = (8));

} else {
var statearr_11178_11412 = state_11164__$1;
(statearr_11178_11412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (3))){
var inst_11162 = (state_11164[(2)]);
var state_11164__$1 = state_11164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11164__$1,inst_11162);
} else {
if((state_val_11165 === (2))){
var state_11164__$1 = state_11164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11164__$1,(4),ch);
} else {
if((state_val_11165 === (9))){
var inst_11150 = (state_11164[(9)]);
var inst_11142 = inst_11150;
var state_11164__$1 = (function (){var statearr_11181 = state_11164;
(statearr_11181[(7)] = inst_11142);

return statearr_11181;
})();
var statearr_11182_11414 = state_11164__$1;
(statearr_11182_11414[(2)] = null);

(statearr_11182_11414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (5))){
var inst_11142 = (state_11164[(7)]);
var state_11164__$1 = state_11164;
var statearr_11184_11420 = state_11164__$1;
(statearr_11184_11420[(2)] = inst_11142);

(statearr_11184_11420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (10))){
var inst_11158 = (state_11164[(2)]);
var state_11164__$1 = state_11164;
var statearr_11195_11421 = state_11164__$1;
(statearr_11195_11421[(2)] = inst_11158);

(statearr_11195_11421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (8))){
var inst_11150 = (state_11164[(9)]);
var inst_11154 = cljs.core.deref.call(null,inst_11150);
var state_11164__$1 = state_11164;
var statearr_11198_11422 = state_11164__$1;
(statearr_11198_11422[(2)] = inst_11154);

(statearr_11198_11422[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10315__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10315__auto____0 = (function (){
var statearr_11218 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11218[(0)] = cljs$core$async$reduce_$_state_machine__10315__auto__);

(statearr_11218[(1)] = (1));

return statearr_11218;
});
var cljs$core$async$reduce_$_state_machine__10315__auto____1 = (function (state_11164){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_11164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e11219){var ex__10318__auto__ = e11219;
var statearr_11220_11423 = state_11164;
(statearr_11220_11423[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_11164[(4)]))){
var statearr_11221_11424 = state_11164;
(statearr_11221_11424[(1)] = cljs.core.first.call(null,(state_11164[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11425 = state_11164;
state_11164 = G__11425;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10315__auto__ = function(state_11164){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10315__auto____1.call(this,state_11164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10315__auto____0;
cljs$core$async$reduce_$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10315__auto____1;
return cljs$core$async$reduce_$_state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_11225 = f__10406__auto__.call(null);
(statearr_11225[(6)] = c__10405__auto__);

return statearr_11225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
}));

return c__10405__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10405__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_11240){
var state_val_11241 = (state_11240[(1)]);
if((state_val_11241 === (1))){
var inst_11233 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11240__$1 = state_11240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11240__$1,(2),inst_11233);
} else {
if((state_val_11241 === (2))){
var inst_11237 = (state_11240[(2)]);
var inst_11238 = f__$1.call(null,inst_11237);
var state_11240__$1 = state_11240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11240__$1,inst_11238);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10315__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10315__auto____0 = (function (){
var statearr_11244 = [null,null,null,null,null,null,null];
(statearr_11244[(0)] = cljs$core$async$transduce_$_state_machine__10315__auto__);

(statearr_11244[(1)] = (1));

return statearr_11244;
});
var cljs$core$async$transduce_$_state_machine__10315__auto____1 = (function (state_11240){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_11240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e11245){var ex__10318__auto__ = e11245;
var statearr_11246_11426 = state_11240;
(statearr_11246_11426[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_11240[(4)]))){
var statearr_11247_11427 = state_11240;
(statearr_11247_11427[(1)] = cljs.core.first.call(null,(state_11240[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11428 = state_11240;
state_11240 = G__11428;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10315__auto__ = function(state_11240){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10315__auto____1.call(this,state_11240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10315__auto____0;
cljs$core$async$transduce_$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10315__auto____1;
return cljs$core$async$transduce_$_state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_11252 = f__10406__auto__.call(null);
(statearr_11252[(6)] = c__10405__auto__);

return statearr_11252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
}));

return c__10405__auto__;
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
var G__11259 = arguments.length;
switch (G__11259) {
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
var c__10405__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_11294){
var state_val_11295 = (state_11294[(1)]);
if((state_val_11295 === (7))){
var inst_11273 = (state_11294[(2)]);
var state_11294__$1 = state_11294;
var statearr_11296_11439 = state_11294__$1;
(statearr_11296_11439[(2)] = inst_11273);

(statearr_11296_11439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11295 === (1))){
var inst_11267 = cljs.core.seq.call(null,coll);
var inst_11268 = inst_11267;
var state_11294__$1 = (function (){var statearr_11298 = state_11294;
(statearr_11298[(7)] = inst_11268);

return statearr_11298;
})();
var statearr_11299_11440 = state_11294__$1;
(statearr_11299_11440[(2)] = null);

(statearr_11299_11440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11295 === (4))){
var inst_11268 = (state_11294[(7)]);
var inst_11271 = cljs.core.first.call(null,inst_11268);
var state_11294__$1 = state_11294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11294__$1,(7),ch,inst_11271);
} else {
if((state_val_11295 === (13))){
var inst_11287 = (state_11294[(2)]);
var state_11294__$1 = state_11294;
var statearr_11301_11441 = state_11294__$1;
(statearr_11301_11441[(2)] = inst_11287);

(statearr_11301_11441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11295 === (6))){
var inst_11276 = (state_11294[(2)]);
var state_11294__$1 = state_11294;
if(cljs.core.truth_(inst_11276)){
var statearr_11302_11442 = state_11294__$1;
(statearr_11302_11442[(1)] = (8));

} else {
var statearr_11303_11443 = state_11294__$1;
(statearr_11303_11443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11295 === (3))){
var inst_11291 = (state_11294[(2)]);
var state_11294__$1 = state_11294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11294__$1,inst_11291);
} else {
if((state_val_11295 === (12))){
var state_11294__$1 = state_11294;
var statearr_11308_11444 = state_11294__$1;
(statearr_11308_11444[(2)] = null);

(statearr_11308_11444[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11295 === (2))){
var inst_11268 = (state_11294[(7)]);
var state_11294__$1 = state_11294;
if(cljs.core.truth_(inst_11268)){
var statearr_11309_11445 = state_11294__$1;
(statearr_11309_11445[(1)] = (4));

} else {
var statearr_11310_11446 = state_11294__$1;
(statearr_11310_11446[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11295 === (11))){
var inst_11284 = cljs.core.async.close_BANG_.call(null,ch);
var state_11294__$1 = state_11294;
var statearr_11315_11447 = state_11294__$1;
(statearr_11315_11447[(2)] = inst_11284);

(statearr_11315_11447[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11295 === (9))){
var state_11294__$1 = state_11294;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11317_11448 = state_11294__$1;
(statearr_11317_11448[(1)] = (11));

} else {
var statearr_11318_11449 = state_11294__$1;
(statearr_11318_11449[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11295 === (5))){
var inst_11268 = (state_11294[(7)]);
var state_11294__$1 = state_11294;
var statearr_11326_11450 = state_11294__$1;
(statearr_11326_11450[(2)] = inst_11268);

(statearr_11326_11450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11295 === (10))){
var inst_11289 = (state_11294[(2)]);
var state_11294__$1 = state_11294;
var statearr_11330_11451 = state_11294__$1;
(statearr_11330_11451[(2)] = inst_11289);

(statearr_11330_11451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11295 === (8))){
var inst_11268 = (state_11294[(7)]);
var inst_11278 = cljs.core.next.call(null,inst_11268);
var inst_11268__$1 = inst_11278;
var state_11294__$1 = (function (){var statearr_11336 = state_11294;
(statearr_11336[(7)] = inst_11268__$1);

return statearr_11336;
})();
var statearr_11341_11459 = state_11294__$1;
(statearr_11341_11459[(2)] = null);

(statearr_11341_11459[(1)] = (2));


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
var cljs$core$async$state_machine__10315__auto__ = null;
var cljs$core$async$state_machine__10315__auto____0 = (function (){
var statearr_11344 = [null,null,null,null,null,null,null,null];
(statearr_11344[(0)] = cljs$core$async$state_machine__10315__auto__);

(statearr_11344[(1)] = (1));

return statearr_11344;
});
var cljs$core$async$state_machine__10315__auto____1 = (function (state_11294){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_11294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e11346){var ex__10318__auto__ = e11346;
var statearr_11347_11481 = state_11294;
(statearr_11347_11481[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_11294[(4)]))){
var statearr_11349_11484 = state_11294;
(statearr_11349_11484[(1)] = cljs.core.first.call(null,(state_11294[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11491 = state_11294;
state_11294 = G__11491;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$state_machine__10315__auto__ = function(state_11294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10315__auto____1.call(this,state_11294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10315__auto____0;
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10315__auto____1;
return cljs$core$async$state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_11351 = f__10406__auto__.call(null);
(statearr_11351[(6)] = c__10405__auto__);

return statearr_11351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
}));

return c__10405__auto__;
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
var G__11355 = arguments.length;
switch (G__11355) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_11565 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_11565.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_11598 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_11598.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_11601 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_11601.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_11603 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_11603.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11430 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11430 = (function (ch,cs,meta11431){
this.ch = ch;
this.cs = cs;
this.meta11431 = meta11431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11432,meta11431__$1){
var self__ = this;
var _11432__$1 = this;
return (new cljs.core.async.t_cljs$core$async11430(self__.ch,self__.cs,meta11431__$1));
}));

(cljs.core.async.t_cljs$core$async11430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11432){
var self__ = this;
var _11432__$1 = this;
return self__.meta11431;
}));

(cljs.core.async.t_cljs$core$async11430.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11430.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11430.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11430.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11430.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11430.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11431","meta11431",680828378,null)], null);
}));

(cljs.core.async.t_cljs$core$async11430.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11430");

(cljs.core.async.t_cljs$core$async11430.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11430");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11430.
 */
cljs.core.async.__GT_t_cljs$core$async11430 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11430(ch__$1,cs__$1,meta11431){
return (new cljs.core.async.t_cljs$core$async11430(ch__$1,cs__$1,meta11431));
});

}

return (new cljs.core.async.t_cljs$core$async11430(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10405__auto___11750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_11599){
var state_val_11600 = (state_11599[(1)]);
if((state_val_11600 === (7))){
var inst_11593 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
var statearr_11602_11752 = state_11599__$1;
(statearr_11602_11752[(2)] = inst_11593);

(statearr_11602_11752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (20))){
var inst_11495 = (state_11599[(7)]);
var inst_11507 = cljs.core.first.call(null,inst_11495);
var inst_11508 = cljs.core.nth.call(null,inst_11507,(0),null);
var inst_11510 = cljs.core.nth.call(null,inst_11507,(1),null);
var state_11599__$1 = (function (){var statearr_11605 = state_11599;
(statearr_11605[(8)] = inst_11508);

return statearr_11605;
})();
if(cljs.core.truth_(inst_11510)){
var statearr_11607_11753 = state_11599__$1;
(statearr_11607_11753[(1)] = (22));

} else {
var statearr_11608_11754 = state_11599__$1;
(statearr_11608_11754[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (27))){
var inst_11538 = (state_11599[(9)]);
var inst_11540 = (state_11599[(10)]);
var inst_11545 = (state_11599[(11)]);
var inst_11460 = (state_11599[(12)]);
var inst_11545__$1 = cljs.core._nth.call(null,inst_11538,inst_11540);
var inst_11546 = cljs.core.async.put_BANG_.call(null,inst_11545__$1,inst_11460,done);
var state_11599__$1 = (function (){var statearr_11609 = state_11599;
(statearr_11609[(11)] = inst_11545__$1);

return statearr_11609;
})();
if(cljs.core.truth_(inst_11546)){
var statearr_11610_11755 = state_11599__$1;
(statearr_11610_11755[(1)] = (30));

} else {
var statearr_11611_11756 = state_11599__$1;
(statearr_11611_11756[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (1))){
var state_11599__$1 = state_11599;
var statearr_11612_11757 = state_11599__$1;
(statearr_11612_11757[(2)] = null);

(statearr_11612_11757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (24))){
var inst_11495 = (state_11599[(7)]);
var inst_11515 = (state_11599[(2)]);
var inst_11516 = cljs.core.next.call(null,inst_11495);
var inst_11470 = inst_11516;
var inst_11471 = null;
var inst_11472 = (0);
var inst_11473 = (0);
var state_11599__$1 = (function (){var statearr_11617 = state_11599;
(statearr_11617[(13)] = inst_11515);

(statearr_11617[(14)] = inst_11470);

(statearr_11617[(15)] = inst_11471);

(statearr_11617[(16)] = inst_11472);

(statearr_11617[(17)] = inst_11473);

return statearr_11617;
})();
var statearr_11618_11766 = state_11599__$1;
(statearr_11618_11766[(2)] = null);

(statearr_11618_11766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (39))){
var state_11599__$1 = state_11599;
var statearr_11635_11767 = state_11599__$1;
(statearr_11635_11767[(2)] = null);

(statearr_11635_11767[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (4))){
var inst_11460 = (state_11599[(12)]);
var inst_11460__$1 = (state_11599[(2)]);
var inst_11461 = (inst_11460__$1 == null);
var state_11599__$1 = (function (){var statearr_11639 = state_11599;
(statearr_11639[(12)] = inst_11460__$1);

return statearr_11639;
})();
if(cljs.core.truth_(inst_11461)){
var statearr_11640_11769 = state_11599__$1;
(statearr_11640_11769[(1)] = (5));

} else {
var statearr_11641_11770 = state_11599__$1;
(statearr_11641_11770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (15))){
var inst_11473 = (state_11599[(17)]);
var inst_11470 = (state_11599[(14)]);
var inst_11471 = (state_11599[(15)]);
var inst_11472 = (state_11599[(16)]);
var inst_11490 = (state_11599[(2)]);
var inst_11492 = (inst_11473 + (1));
var tmp11619 = inst_11472;
var tmp11620 = inst_11471;
var tmp11621 = inst_11470;
var inst_11470__$1 = tmp11621;
var inst_11471__$1 = tmp11620;
var inst_11472__$1 = tmp11619;
var inst_11473__$1 = inst_11492;
var state_11599__$1 = (function (){var statearr_11643 = state_11599;
(statearr_11643[(18)] = inst_11490);

(statearr_11643[(14)] = inst_11470__$1);

(statearr_11643[(15)] = inst_11471__$1);

(statearr_11643[(16)] = inst_11472__$1);

(statearr_11643[(17)] = inst_11473__$1);

return statearr_11643;
})();
var statearr_11647_11772 = state_11599__$1;
(statearr_11647_11772[(2)] = null);

(statearr_11647_11772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (21))){
var inst_11519 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
var statearr_11651_11773 = state_11599__$1;
(statearr_11651_11773[(2)] = inst_11519);

(statearr_11651_11773[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (31))){
var inst_11545 = (state_11599[(11)]);
var inst_11549 = cljs.core.async.untap_STAR_.call(null,m,inst_11545);
var state_11599__$1 = state_11599;
var statearr_11654_11774 = state_11599__$1;
(statearr_11654_11774[(2)] = inst_11549);

(statearr_11654_11774[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (32))){
var inst_11540 = (state_11599[(10)]);
var inst_11537 = (state_11599[(19)]);
var inst_11538 = (state_11599[(9)]);
var inst_11539 = (state_11599[(20)]);
var inst_11551 = (state_11599[(2)]);
var inst_11552 = (inst_11540 + (1));
var tmp11648 = inst_11538;
var tmp11649 = inst_11539;
var tmp11650 = inst_11537;
var inst_11537__$1 = tmp11650;
var inst_11538__$1 = tmp11648;
var inst_11539__$1 = tmp11649;
var inst_11540__$1 = inst_11552;
var state_11599__$1 = (function (){var statearr_11655 = state_11599;
(statearr_11655[(21)] = inst_11551);

(statearr_11655[(19)] = inst_11537__$1);

(statearr_11655[(9)] = inst_11538__$1);

(statearr_11655[(20)] = inst_11539__$1);

(statearr_11655[(10)] = inst_11540__$1);

return statearr_11655;
})();
var statearr_11660_11775 = state_11599__$1;
(statearr_11660_11775[(2)] = null);

(statearr_11660_11775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (40))){
var inst_11564 = (state_11599[(22)]);
var inst_11569 = cljs.core.async.untap_STAR_.call(null,m,inst_11564);
var state_11599__$1 = state_11599;
var statearr_11661_11776 = state_11599__$1;
(statearr_11661_11776[(2)] = inst_11569);

(statearr_11661_11776[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (33))){
var inst_11555 = (state_11599[(23)]);
var inst_11557 = cljs.core.chunked_seq_QMARK_.call(null,inst_11555);
var state_11599__$1 = state_11599;
if(inst_11557){
var statearr_11662_11777 = state_11599__$1;
(statearr_11662_11777[(1)] = (36));

} else {
var statearr_11667_11778 = state_11599__$1;
(statearr_11667_11778[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (13))){
var inst_11483 = (state_11599[(24)]);
var inst_11487 = cljs.core.async.close_BANG_.call(null,inst_11483);
var state_11599__$1 = state_11599;
var statearr_11669_11779 = state_11599__$1;
(statearr_11669_11779[(2)] = inst_11487);

(statearr_11669_11779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (22))){
var inst_11508 = (state_11599[(8)]);
var inst_11512 = cljs.core.async.close_BANG_.call(null,inst_11508);
var state_11599__$1 = state_11599;
var statearr_11671_11780 = state_11599__$1;
(statearr_11671_11780[(2)] = inst_11512);

(statearr_11671_11780[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (36))){
var inst_11555 = (state_11599[(23)]);
var inst_11559 = cljs.core.chunk_first.call(null,inst_11555);
var inst_11560 = cljs.core.chunk_rest.call(null,inst_11555);
var inst_11561 = cljs.core.count.call(null,inst_11559);
var inst_11537 = inst_11560;
var inst_11538 = inst_11559;
var inst_11539 = inst_11561;
var inst_11540 = (0);
var state_11599__$1 = (function (){var statearr_11672 = state_11599;
(statearr_11672[(19)] = inst_11537);

(statearr_11672[(9)] = inst_11538);

(statearr_11672[(20)] = inst_11539);

(statearr_11672[(10)] = inst_11540);

return statearr_11672;
})();
var statearr_11673_11781 = state_11599__$1;
(statearr_11673_11781[(2)] = null);

(statearr_11673_11781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (41))){
var inst_11555 = (state_11599[(23)]);
var inst_11571 = (state_11599[(2)]);
var inst_11572 = cljs.core.next.call(null,inst_11555);
var inst_11537 = inst_11572;
var inst_11538 = null;
var inst_11539 = (0);
var inst_11540 = (0);
var state_11599__$1 = (function (){var statearr_11674 = state_11599;
(statearr_11674[(25)] = inst_11571);

(statearr_11674[(19)] = inst_11537);

(statearr_11674[(9)] = inst_11538);

(statearr_11674[(20)] = inst_11539);

(statearr_11674[(10)] = inst_11540);

return statearr_11674;
})();
var statearr_11675_11782 = state_11599__$1;
(statearr_11675_11782[(2)] = null);

(statearr_11675_11782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (43))){
var state_11599__$1 = state_11599;
var statearr_11676_11784 = state_11599__$1;
(statearr_11676_11784[(2)] = null);

(statearr_11676_11784[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (29))){
var inst_11580 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
var statearr_11680_11786 = state_11599__$1;
(statearr_11680_11786[(2)] = inst_11580);

(statearr_11680_11786[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (44))){
var inst_11590 = (state_11599[(2)]);
var state_11599__$1 = (function (){var statearr_11681 = state_11599;
(statearr_11681[(26)] = inst_11590);

return statearr_11681;
})();
var statearr_11682_11791 = state_11599__$1;
(statearr_11682_11791[(2)] = null);

(statearr_11682_11791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (6))){
var inst_11529 = (state_11599[(27)]);
var inst_11528 = cljs.core.deref.call(null,cs);
var inst_11529__$1 = cljs.core.keys.call(null,inst_11528);
var inst_11530 = cljs.core.count.call(null,inst_11529__$1);
var inst_11531 = cljs.core.reset_BANG_.call(null,dctr,inst_11530);
var inst_11536 = cljs.core.seq.call(null,inst_11529__$1);
var inst_11537 = inst_11536;
var inst_11538 = null;
var inst_11539 = (0);
var inst_11540 = (0);
var state_11599__$1 = (function (){var statearr_11683 = state_11599;
(statearr_11683[(27)] = inst_11529__$1);

(statearr_11683[(28)] = inst_11531);

(statearr_11683[(19)] = inst_11537);

(statearr_11683[(9)] = inst_11538);

(statearr_11683[(20)] = inst_11539);

(statearr_11683[(10)] = inst_11540);

return statearr_11683;
})();
var statearr_11684_11792 = state_11599__$1;
(statearr_11684_11792[(2)] = null);

(statearr_11684_11792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (28))){
var inst_11537 = (state_11599[(19)]);
var inst_11555 = (state_11599[(23)]);
var inst_11555__$1 = cljs.core.seq.call(null,inst_11537);
var state_11599__$1 = (function (){var statearr_11687 = state_11599;
(statearr_11687[(23)] = inst_11555__$1);

return statearr_11687;
})();
if(inst_11555__$1){
var statearr_11688_11795 = state_11599__$1;
(statearr_11688_11795[(1)] = (33));

} else {
var statearr_11689_11797 = state_11599__$1;
(statearr_11689_11797[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (25))){
var inst_11540 = (state_11599[(10)]);
var inst_11539 = (state_11599[(20)]);
var inst_11542 = (inst_11540 < inst_11539);
var inst_11543 = inst_11542;
var state_11599__$1 = state_11599;
if(cljs.core.truth_(inst_11543)){
var statearr_11690_11799 = state_11599__$1;
(statearr_11690_11799[(1)] = (27));

} else {
var statearr_11691_11800 = state_11599__$1;
(statearr_11691_11800[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (34))){
var state_11599__$1 = state_11599;
var statearr_11692_11803 = state_11599__$1;
(statearr_11692_11803[(2)] = null);

(statearr_11692_11803[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (17))){
var state_11599__$1 = state_11599;
var statearr_11695_11806 = state_11599__$1;
(statearr_11695_11806[(2)] = null);

(statearr_11695_11806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (3))){
var inst_11595 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11599__$1,inst_11595);
} else {
if((state_val_11600 === (12))){
var inst_11524 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
var statearr_11696_11813 = state_11599__$1;
(statearr_11696_11813[(2)] = inst_11524);

(statearr_11696_11813[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (2))){
var state_11599__$1 = state_11599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11599__$1,(4),ch);
} else {
if((state_val_11600 === (23))){
var state_11599__$1 = state_11599;
var statearr_11699_11815 = state_11599__$1;
(statearr_11699_11815[(2)] = null);

(statearr_11699_11815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (35))){
var inst_11578 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
var statearr_11701_11816 = state_11599__$1;
(statearr_11701_11816[(2)] = inst_11578);

(statearr_11701_11816[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (19))){
var inst_11495 = (state_11599[(7)]);
var inst_11499 = cljs.core.chunk_first.call(null,inst_11495);
var inst_11500 = cljs.core.chunk_rest.call(null,inst_11495);
var inst_11501 = cljs.core.count.call(null,inst_11499);
var inst_11470 = inst_11500;
var inst_11471 = inst_11499;
var inst_11472 = inst_11501;
var inst_11473 = (0);
var state_11599__$1 = (function (){var statearr_11702 = state_11599;
(statearr_11702[(14)] = inst_11470);

(statearr_11702[(15)] = inst_11471);

(statearr_11702[(16)] = inst_11472);

(statearr_11702[(17)] = inst_11473);

return statearr_11702;
})();
var statearr_11703_11818 = state_11599__$1;
(statearr_11703_11818[(2)] = null);

(statearr_11703_11818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (11))){
var inst_11470 = (state_11599[(14)]);
var inst_11495 = (state_11599[(7)]);
var inst_11495__$1 = cljs.core.seq.call(null,inst_11470);
var state_11599__$1 = (function (){var statearr_11708 = state_11599;
(statearr_11708[(7)] = inst_11495__$1);

return statearr_11708;
})();
if(inst_11495__$1){
var statearr_11709_11819 = state_11599__$1;
(statearr_11709_11819[(1)] = (16));

} else {
var statearr_11710_11820 = state_11599__$1;
(statearr_11710_11820[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (9))){
var inst_11526 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
var statearr_11712_11822 = state_11599__$1;
(statearr_11712_11822[(2)] = inst_11526);

(statearr_11712_11822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (5))){
var inst_11468 = cljs.core.deref.call(null,cs);
var inst_11469 = cljs.core.seq.call(null,inst_11468);
var inst_11470 = inst_11469;
var inst_11471 = null;
var inst_11472 = (0);
var inst_11473 = (0);
var state_11599__$1 = (function (){var statearr_11713 = state_11599;
(statearr_11713[(14)] = inst_11470);

(statearr_11713[(15)] = inst_11471);

(statearr_11713[(16)] = inst_11472);

(statearr_11713[(17)] = inst_11473);

return statearr_11713;
})();
var statearr_11714_11823 = state_11599__$1;
(statearr_11714_11823[(2)] = null);

(statearr_11714_11823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (14))){
var state_11599__$1 = state_11599;
var statearr_11717_11824 = state_11599__$1;
(statearr_11717_11824[(2)] = null);

(statearr_11717_11824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (45))){
var inst_11587 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
var statearr_11720_11828 = state_11599__$1;
(statearr_11720_11828[(2)] = inst_11587);

(statearr_11720_11828[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (26))){
var inst_11529 = (state_11599[(27)]);
var inst_11582 = (state_11599[(2)]);
var inst_11583 = cljs.core.seq.call(null,inst_11529);
var state_11599__$1 = (function (){var statearr_11721 = state_11599;
(statearr_11721[(29)] = inst_11582);

return statearr_11721;
})();
if(inst_11583){
var statearr_11722_11829 = state_11599__$1;
(statearr_11722_11829[(1)] = (42));

} else {
var statearr_11723_11830 = state_11599__$1;
(statearr_11723_11830[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (16))){
var inst_11495 = (state_11599[(7)]);
var inst_11497 = cljs.core.chunked_seq_QMARK_.call(null,inst_11495);
var state_11599__$1 = state_11599;
if(inst_11497){
var statearr_11724_11831 = state_11599__$1;
(statearr_11724_11831[(1)] = (19));

} else {
var statearr_11725_11832 = state_11599__$1;
(statearr_11725_11832[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (38))){
var inst_11575 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
var statearr_11726_11833 = state_11599__$1;
(statearr_11726_11833[(2)] = inst_11575);

(statearr_11726_11833[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (30))){
var state_11599__$1 = state_11599;
var statearr_11727_11839 = state_11599__$1;
(statearr_11727_11839[(2)] = null);

(statearr_11727_11839[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (10))){
var inst_11471 = (state_11599[(15)]);
var inst_11473 = (state_11599[(17)]);
var inst_11482 = cljs.core._nth.call(null,inst_11471,inst_11473);
var inst_11483 = cljs.core.nth.call(null,inst_11482,(0),null);
var inst_11485 = cljs.core.nth.call(null,inst_11482,(1),null);
var state_11599__$1 = (function (){var statearr_11728 = state_11599;
(statearr_11728[(24)] = inst_11483);

return statearr_11728;
})();
if(cljs.core.truth_(inst_11485)){
var statearr_11730_11841 = state_11599__$1;
(statearr_11730_11841[(1)] = (13));

} else {
var statearr_11731_11842 = state_11599__$1;
(statearr_11731_11842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (18))){
var inst_11522 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
var statearr_11732_11843 = state_11599__$1;
(statearr_11732_11843[(2)] = inst_11522);

(statearr_11732_11843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (42))){
var state_11599__$1 = state_11599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11599__$1,(45),dchan);
} else {
if((state_val_11600 === (37))){
var inst_11555 = (state_11599[(23)]);
var inst_11564 = (state_11599[(22)]);
var inst_11460 = (state_11599[(12)]);
var inst_11564__$1 = cljs.core.first.call(null,inst_11555);
var inst_11566 = cljs.core.async.put_BANG_.call(null,inst_11564__$1,inst_11460,done);
var state_11599__$1 = (function (){var statearr_11733 = state_11599;
(statearr_11733[(22)] = inst_11564__$1);

return statearr_11733;
})();
if(cljs.core.truth_(inst_11566)){
var statearr_11734_11844 = state_11599__$1;
(statearr_11734_11844[(1)] = (39));

} else {
var statearr_11735_11845 = state_11599__$1;
(statearr_11735_11845[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (8))){
var inst_11473 = (state_11599[(17)]);
var inst_11472 = (state_11599[(16)]);
var inst_11475 = (inst_11473 < inst_11472);
var inst_11476 = inst_11475;
var state_11599__$1 = state_11599;
if(cljs.core.truth_(inst_11476)){
var statearr_11736_11846 = state_11599__$1;
(statearr_11736_11846[(1)] = (10));

} else {
var statearr_11737_11847 = state_11599__$1;
(statearr_11737_11847[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10315__auto__ = null;
var cljs$core$async$mult_$_state_machine__10315__auto____0 = (function (){
var statearr_11740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11740[(0)] = cljs$core$async$mult_$_state_machine__10315__auto__);

(statearr_11740[(1)] = (1));

return statearr_11740;
});
var cljs$core$async$mult_$_state_machine__10315__auto____1 = (function (state_11599){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_11599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e11741){var ex__10318__auto__ = e11741;
var statearr_11742_11848 = state_11599;
(statearr_11742_11848[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_11599[(4)]))){
var statearr_11743_11849 = state_11599;
(statearr_11743_11849[(1)] = cljs.core.first.call(null,(state_11599[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11850 = state_11599;
state_11599 = G__11850;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10315__auto__ = function(state_11599){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10315__auto____1.call(this,state_11599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10315__auto____0;
cljs$core$async$mult_$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10315__auto____1;
return cljs$core$async$mult_$_state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_11745 = f__10406__auto__.call(null);
(statearr_11745[(6)] = c__10405__auto___11750);

return statearr_11745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
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
var G__11747 = arguments.length;
switch (G__11747) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_11859 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_11859.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_11887 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_11887.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_11910 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_11910.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_11928 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_11928.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_11934 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_11934.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___11936 = arguments.length;
var i__5750__auto___11937 = (0);
while(true){
if((i__5750__auto___11937 < len__5749__auto___11936)){
args__5755__auto__.push((arguments[i__5750__auto___11937]));

var G__11938 = (i__5750__auto___11937 + (1));
i__5750__auto___11937 = G__11938;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11793){
var map__11794 = p__11793;
var map__11794__$1 = cljs.core.__destructure_map.call(null,map__11794);
var opts = map__11794__$1;
var statearr_11796_11939 = state;
(statearr_11796_11939[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_11798_11941 = state;
(statearr_11798_11941[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_11802_11951 = state;
(statearr_11802_11951[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11787){
var G__11788 = cljs.core.first.call(null,seq11787);
var seq11787__$1 = cljs.core.next.call(null,seq11787);
var G__11789 = cljs.core.first.call(null,seq11787__$1);
var seq11787__$2 = cljs.core.next.call(null,seq11787__$1);
var G__11790 = cljs.core.first.call(null,seq11787__$2);
var seq11787__$3 = cljs.core.next.call(null,seq11787__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11788,G__11789,G__11790,seq11787__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11825 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11825 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11826){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11826 = meta11826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11827,meta11826__$1){
var self__ = this;
var _11827__$1 = this;
return (new cljs.core.async.t_cljs$core$async11825(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11826__$1));
}));

(cljs.core.async.t_cljs$core$async11825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11827){
var self__ = this;
var _11827__$1 = this;
return self__.meta11826;
}));

(cljs.core.async.t_cljs$core$async11825.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11825.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11825.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11825.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11825.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11825.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11825.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11825.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11826","meta11826",1134321264,null)], null);
}));

(cljs.core.async.t_cljs$core$async11825.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11825");

(cljs.core.async.t_cljs$core$async11825.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11825");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11825.
 */
cljs.core.async.__GT_t_cljs$core$async11825 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11825(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11826){
return (new cljs.core.async.t_cljs$core$async11825(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11826));
});

}

return (new cljs.core.async.t_cljs$core$async11825(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10405__auto___12042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_11931){
var state_val_11933 = (state_11931[(1)]);
if((state_val_11933 === (7))){
var inst_11884 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
if(cljs.core.truth_(inst_11884)){
var statearr_11943_12044 = state_11931__$1;
(statearr_11943_12044[(1)] = (8));

} else {
var statearr_11955_12045 = state_11931__$1;
(statearr_11955_12045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (20))){
var inst_11877 = (state_11931[(7)]);
var state_11931__$1 = state_11931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11931__$1,(23),out,inst_11877);
} else {
if((state_val_11933 === (1))){
var inst_11856 = calc_state.call(null);
var inst_11857 = cljs.core.__destructure_map.call(null,inst_11856);
var inst_11858 = cljs.core.get.call(null,inst_11857,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11860 = cljs.core.get.call(null,inst_11857,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11861 = cljs.core.get.call(null,inst_11857,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11862 = inst_11856;
var state_11931__$1 = (function (){var statearr_11962 = state_11931;
(statearr_11962[(8)] = inst_11858);

(statearr_11962[(9)] = inst_11860);

(statearr_11962[(10)] = inst_11861);

(statearr_11962[(11)] = inst_11862);

return statearr_11962;
})();
var statearr_11963_12046 = state_11931__$1;
(statearr_11963_12046[(2)] = null);

(statearr_11963_12046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (24))){
var inst_11867 = (state_11931[(12)]);
var inst_11862 = inst_11867;
var state_11931__$1 = (function (){var statearr_11964 = state_11931;
(statearr_11964[(11)] = inst_11862);

return statearr_11964;
})();
var statearr_11966_12048 = state_11931__$1;
(statearr_11966_12048[(2)] = null);

(statearr_11966_12048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (4))){
var inst_11877 = (state_11931[(7)]);
var inst_11879 = (state_11931[(13)]);
var inst_11876 = (state_11931[(2)]);
var inst_11877__$1 = cljs.core.nth.call(null,inst_11876,(0),null);
var inst_11878 = cljs.core.nth.call(null,inst_11876,(1),null);
var inst_11879__$1 = (inst_11877__$1 == null);
var state_11931__$1 = (function (){var statearr_11967 = state_11931;
(statearr_11967[(7)] = inst_11877__$1);

(statearr_11967[(14)] = inst_11878);

(statearr_11967[(13)] = inst_11879__$1);

return statearr_11967;
})();
if(cljs.core.truth_(inst_11879__$1)){
var statearr_11968_12052 = state_11931__$1;
(statearr_11968_12052[(1)] = (5));

} else {
var statearr_11969_12053 = state_11931__$1;
(statearr_11969_12053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (15))){
var inst_11868 = (state_11931[(15)]);
var inst_11900 = (state_11931[(16)]);
var inst_11900__$1 = cljs.core.empty_QMARK_.call(null,inst_11868);
var state_11931__$1 = (function (){var statearr_11970 = state_11931;
(statearr_11970[(16)] = inst_11900__$1);

return statearr_11970;
})();
if(inst_11900__$1){
var statearr_11971_12054 = state_11931__$1;
(statearr_11971_12054[(1)] = (17));

} else {
var statearr_11973_12055 = state_11931__$1;
(statearr_11973_12055[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (21))){
var inst_11867 = (state_11931[(12)]);
var inst_11862 = inst_11867;
var state_11931__$1 = (function (){var statearr_11975 = state_11931;
(statearr_11975[(11)] = inst_11862);

return statearr_11975;
})();
var statearr_11977_12056 = state_11931__$1;
(statearr_11977_12056[(2)] = null);

(statearr_11977_12056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (13))){
var inst_11893 = (state_11931[(2)]);
var inst_11894 = calc_state.call(null);
var inst_11862 = inst_11894;
var state_11931__$1 = (function (){var statearr_11978 = state_11931;
(statearr_11978[(17)] = inst_11893);

(statearr_11978[(11)] = inst_11862);

return statearr_11978;
})();
var statearr_11979_12057 = state_11931__$1;
(statearr_11979_12057[(2)] = null);

(statearr_11979_12057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (22))){
var inst_11921 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
var statearr_11980_12061 = state_11931__$1;
(statearr_11980_12061[(2)] = inst_11921);

(statearr_11980_12061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (6))){
var inst_11878 = (state_11931[(14)]);
var inst_11882 = cljs.core._EQ_.call(null,inst_11878,change);
var state_11931__$1 = state_11931;
var statearr_11981_12062 = state_11931__$1;
(statearr_11981_12062[(2)] = inst_11882);

(statearr_11981_12062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (25))){
var state_11931__$1 = state_11931;
var statearr_11982_12063 = state_11931__$1;
(statearr_11982_12063[(2)] = null);

(statearr_11982_12063[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (17))){
var inst_11869 = (state_11931[(18)]);
var inst_11878 = (state_11931[(14)]);
var inst_11902 = inst_11869.call(null,inst_11878);
var inst_11903 = cljs.core.not.call(null,inst_11902);
var state_11931__$1 = state_11931;
var statearr_11985_12064 = state_11931__$1;
(statearr_11985_12064[(2)] = inst_11903);

(statearr_11985_12064[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (3))){
var inst_11925 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11931__$1,inst_11925);
} else {
if((state_val_11933 === (12))){
var state_11931__$1 = state_11931;
var statearr_11987_12065 = state_11931__$1;
(statearr_11987_12065[(2)] = null);

(statearr_11987_12065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (2))){
var inst_11862 = (state_11931[(11)]);
var inst_11867 = (state_11931[(12)]);
var inst_11867__$1 = cljs.core.__destructure_map.call(null,inst_11862);
var inst_11868 = cljs.core.get.call(null,inst_11867__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11869 = cljs.core.get.call(null,inst_11867__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11870 = cljs.core.get.call(null,inst_11867__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11931__$1 = (function (){var statearr_11988 = state_11931;
(statearr_11988[(12)] = inst_11867__$1);

(statearr_11988[(15)] = inst_11868);

(statearr_11988[(18)] = inst_11869);

return statearr_11988;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11931__$1,(4),inst_11870);
} else {
if((state_val_11933 === (23))){
var inst_11912 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
if(cljs.core.truth_(inst_11912)){
var statearr_11989_12066 = state_11931__$1;
(statearr_11989_12066[(1)] = (24));

} else {
var statearr_11990_12067 = state_11931__$1;
(statearr_11990_12067[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (19))){
var inst_11906 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
var statearr_11992_12069 = state_11931__$1;
(statearr_11992_12069[(2)] = inst_11906);

(statearr_11992_12069[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (11))){
var inst_11878 = (state_11931[(14)]);
var inst_11890 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11878);
var state_11931__$1 = state_11931;
var statearr_11994_12070 = state_11931__$1;
(statearr_11994_12070[(2)] = inst_11890);

(statearr_11994_12070[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (9))){
var inst_11868 = (state_11931[(15)]);
var inst_11878 = (state_11931[(14)]);
var inst_11897 = (state_11931[(19)]);
var inst_11897__$1 = inst_11868.call(null,inst_11878);
var state_11931__$1 = (function (){var statearr_11995 = state_11931;
(statearr_11995[(19)] = inst_11897__$1);

return statearr_11995;
})();
if(cljs.core.truth_(inst_11897__$1)){
var statearr_11997_12071 = state_11931__$1;
(statearr_11997_12071[(1)] = (14));

} else {
var statearr_11998_12072 = state_11931__$1;
(statearr_11998_12072[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (5))){
var inst_11879 = (state_11931[(13)]);
var state_11931__$1 = state_11931;
var statearr_11999_12073 = state_11931__$1;
(statearr_11999_12073[(2)] = inst_11879);

(statearr_11999_12073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (14))){
var inst_11897 = (state_11931[(19)]);
var state_11931__$1 = state_11931;
var statearr_12002_12074 = state_11931__$1;
(statearr_12002_12074[(2)] = inst_11897);

(statearr_12002_12074[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (26))){
var inst_11917 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
var statearr_12003_12076 = state_11931__$1;
(statearr_12003_12076[(2)] = inst_11917);

(statearr_12003_12076[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (16))){
var inst_11908 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
if(cljs.core.truth_(inst_11908)){
var statearr_12004_12078 = state_11931__$1;
(statearr_12004_12078[(1)] = (20));

} else {
var statearr_12005_12082 = state_11931__$1;
(statearr_12005_12082[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (10))){
var inst_11923 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
var statearr_12006_12083 = state_11931__$1;
(statearr_12006_12083[(2)] = inst_11923);

(statearr_12006_12083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (18))){
var inst_11900 = (state_11931[(16)]);
var state_11931__$1 = state_11931;
var statearr_12007_12092 = state_11931__$1;
(statearr_12007_12092[(2)] = inst_11900);

(statearr_12007_12092[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (8))){
var inst_11877 = (state_11931[(7)]);
var inst_11888 = (inst_11877 == null);
var state_11931__$1 = state_11931;
if(cljs.core.truth_(inst_11888)){
var statearr_12008_12093 = state_11931__$1;
(statearr_12008_12093[(1)] = (11));

} else {
var statearr_12009_12097 = state_11931__$1;
(statearr_12009_12097[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__10315__auto__ = null;
var cljs$core$async$mix_$_state_machine__10315__auto____0 = (function (){
var statearr_12019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12019[(0)] = cljs$core$async$mix_$_state_machine__10315__auto__);

(statearr_12019[(1)] = (1));

return statearr_12019;
});
var cljs$core$async$mix_$_state_machine__10315__auto____1 = (function (state_11931){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_11931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e12021){var ex__10318__auto__ = e12021;
var statearr_12022_12105 = state_11931;
(statearr_12022_12105[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_11931[(4)]))){
var statearr_12023_12112 = state_11931;
(statearr_12023_12112[(1)] = cljs.core.first.call(null,(state_11931[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12118 = state_11931;
state_11931 = G__12118;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10315__auto__ = function(state_11931){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10315__auto____1.call(this,state_11931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10315__auto____0;
cljs$core$async$mix_$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10315__auto____1;
return cljs$core$async$mix_$_state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_12027 = f__10406__auto__.call(null);
(statearr_12027[(6)] = c__10405__auto___12042);

return statearr_12027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_12162 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_12162.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12180 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_12180.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12194 = (function() {
var G__12196 = null;
var G__12196__1 = (function (p){
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
var G__12196__2 = (function (p,v){
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
G__12196 = function(p,v){
switch(arguments.length){
case 1:
return G__12196__1.call(this,p);
case 2:
return G__12196__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12196.cljs$core$IFn$_invoke$arity$1 = G__12196__1;
G__12196.cljs$core$IFn$_invoke$arity$2 = G__12196__2;
return G__12196;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12041 = arguments.length;
switch (G__12041) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12194.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12194.call(null,p,v);
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
var G__12050 = arguments.length;
switch (G__12050) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12047_SHARP_){
if(cljs.core.truth_(p1__12047_SHARP_.call(null,topic))){
return p1__12047_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12047_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12058 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12059){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12059 = meta12059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12060,meta12059__$1){
var self__ = this;
var _12060__$1 = this;
return (new cljs.core.async.t_cljs$core$async12058(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12059__$1));
}));

(cljs.core.async.t_cljs$core$async12058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12060){
var self__ = this;
var _12060__$1 = this;
return self__.meta12059;
}));

(cljs.core.async.t_cljs$core$async12058.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12058.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12058.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12058.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12059","meta12059",-424382522,null)], null);
}));

(cljs.core.async.t_cljs$core$async12058.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12058");

(cljs.core.async.t_cljs$core$async12058.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12058");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12058.
 */
cljs.core.async.__GT_t_cljs$core$async12058 = (function cljs$core$async$__GT_t_cljs$core$async12058(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12059){
return (new cljs.core.async.t_cljs$core$async12058(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12059));
});

}

return (new cljs.core.async.t_cljs$core$async12058(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10405__auto___12250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_12176){
var state_val_12177 = (state_12176[(1)]);
if((state_val_12177 === (7))){
var inst_12171 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
var statearr_12179_12251 = state_12176__$1;
(statearr_12179_12251[(2)] = inst_12171);

(statearr_12179_12251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (20))){
var state_12176__$1 = state_12176;
var statearr_12181_12252 = state_12176__$1;
(statearr_12181_12252[(2)] = null);

(statearr_12181_12252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (1))){
var state_12176__$1 = state_12176;
var statearr_12182_12253 = state_12176__$1;
(statearr_12182_12253[(2)] = null);

(statearr_12182_12253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (24))){
var inst_12152 = (state_12176[(7)]);
var inst_12163 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12152);
var state_12176__$1 = state_12176;
var statearr_12183_12254 = state_12176__$1;
(statearr_12183_12254[(2)] = inst_12163);

(statearr_12183_12254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (4))){
var inst_12081 = (state_12176[(8)]);
var inst_12081__$1 = (state_12176[(2)]);
var inst_12084 = (inst_12081__$1 == null);
var state_12176__$1 = (function (){var statearr_12185 = state_12176;
(statearr_12185[(8)] = inst_12081__$1);

return statearr_12185;
})();
if(cljs.core.truth_(inst_12084)){
var statearr_12187_12255 = state_12176__$1;
(statearr_12187_12255[(1)] = (5));

} else {
var statearr_12188_12257 = state_12176__$1;
(statearr_12188_12257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (15))){
var inst_12144 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
var statearr_12189_12260 = state_12176__$1;
(statearr_12189_12260[(2)] = inst_12144);

(statearr_12189_12260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (21))){
var inst_12168 = (state_12176[(2)]);
var state_12176__$1 = (function (){var statearr_12190 = state_12176;
(statearr_12190[(9)] = inst_12168);

return statearr_12190;
})();
var statearr_12191_12265 = state_12176__$1;
(statearr_12191_12265[(2)] = null);

(statearr_12191_12265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (13))){
var inst_12125 = (state_12176[(10)]);
var inst_12127 = cljs.core.chunked_seq_QMARK_.call(null,inst_12125);
var state_12176__$1 = state_12176;
if(inst_12127){
var statearr_12193_12266 = state_12176__$1;
(statearr_12193_12266[(1)] = (16));

} else {
var statearr_12195_12267 = state_12176__$1;
(statearr_12195_12267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (22))){
var inst_12159 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
if(cljs.core.truth_(inst_12159)){
var statearr_12199_12268 = state_12176__$1;
(statearr_12199_12268[(1)] = (23));

} else {
var statearr_12200_12269 = state_12176__$1;
(statearr_12200_12269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (6))){
var inst_12081 = (state_12176[(8)]);
var inst_12152 = (state_12176[(7)]);
var inst_12154 = (state_12176[(11)]);
var inst_12152__$1 = topic_fn.call(null,inst_12081);
var inst_12153 = cljs.core.deref.call(null,mults);
var inst_12154__$1 = cljs.core.get.call(null,inst_12153,inst_12152__$1);
var state_12176__$1 = (function (){var statearr_12202 = state_12176;
(statearr_12202[(7)] = inst_12152__$1);

(statearr_12202[(11)] = inst_12154__$1);

return statearr_12202;
})();
if(cljs.core.truth_(inst_12154__$1)){
var statearr_12204_12271 = state_12176__$1;
(statearr_12204_12271[(1)] = (19));

} else {
var statearr_12205_12272 = state_12176__$1;
(statearr_12205_12272[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (25))){
var inst_12165 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
var statearr_12206_12273 = state_12176__$1;
(statearr_12206_12273[(2)] = inst_12165);

(statearr_12206_12273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (17))){
var inst_12125 = (state_12176[(10)]);
var inst_12134 = cljs.core.first.call(null,inst_12125);
var inst_12136 = cljs.core.async.muxch_STAR_.call(null,inst_12134);
var inst_12137 = cljs.core.async.close_BANG_.call(null,inst_12136);
var inst_12138 = cljs.core.next.call(null,inst_12125);
var inst_12106 = inst_12138;
var inst_12108 = null;
var inst_12109 = (0);
var inst_12110 = (0);
var state_12176__$1 = (function (){var statearr_12207 = state_12176;
(statearr_12207[(12)] = inst_12137);

(statearr_12207[(13)] = inst_12106);

(statearr_12207[(14)] = inst_12108);

(statearr_12207[(15)] = inst_12109);

(statearr_12207[(16)] = inst_12110);

return statearr_12207;
})();
var statearr_12209_12275 = state_12176__$1;
(statearr_12209_12275[(2)] = null);

(statearr_12209_12275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (3))){
var inst_12173 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12176__$1,inst_12173);
} else {
if((state_val_12177 === (12))){
var inst_12146 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
var statearr_12210_12283 = state_12176__$1;
(statearr_12210_12283[(2)] = inst_12146);

(statearr_12210_12283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (2))){
var state_12176__$1 = state_12176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12176__$1,(4),ch);
} else {
if((state_val_12177 === (23))){
var state_12176__$1 = state_12176;
var statearr_12211_12300 = state_12176__$1;
(statearr_12211_12300[(2)] = null);

(statearr_12211_12300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (19))){
var inst_12154 = (state_12176[(11)]);
var inst_12081 = (state_12176[(8)]);
var inst_12157 = cljs.core.async.muxch_STAR_.call(null,inst_12154);
var state_12176__$1 = state_12176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12176__$1,(22),inst_12157,inst_12081);
} else {
if((state_val_12177 === (11))){
var inst_12106 = (state_12176[(13)]);
var inst_12125 = (state_12176[(10)]);
var inst_12125__$1 = cljs.core.seq.call(null,inst_12106);
var state_12176__$1 = (function (){var statearr_12212 = state_12176;
(statearr_12212[(10)] = inst_12125__$1);

return statearr_12212;
})();
if(inst_12125__$1){
var statearr_12213_12313 = state_12176__$1;
(statearr_12213_12313[(1)] = (13));

} else {
var statearr_12214_12314 = state_12176__$1;
(statearr_12214_12314[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (9))){
var inst_12148 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
var statearr_12215_12315 = state_12176__$1;
(statearr_12215_12315[(2)] = inst_12148);

(statearr_12215_12315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (5))){
var inst_12094 = cljs.core.deref.call(null,mults);
var inst_12095 = cljs.core.vals.call(null,inst_12094);
var inst_12096 = cljs.core.seq.call(null,inst_12095);
var inst_12106 = inst_12096;
var inst_12108 = null;
var inst_12109 = (0);
var inst_12110 = (0);
var state_12176__$1 = (function (){var statearr_12217 = state_12176;
(statearr_12217[(13)] = inst_12106);

(statearr_12217[(14)] = inst_12108);

(statearr_12217[(15)] = inst_12109);

(statearr_12217[(16)] = inst_12110);

return statearr_12217;
})();
var statearr_12218_12317 = state_12176__$1;
(statearr_12218_12317[(2)] = null);

(statearr_12218_12317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (14))){
var state_12176__$1 = state_12176;
var statearr_12222_12318 = state_12176__$1;
(statearr_12222_12318[(2)] = null);

(statearr_12222_12318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (16))){
var inst_12125 = (state_12176[(10)]);
var inst_12129 = cljs.core.chunk_first.call(null,inst_12125);
var inst_12130 = cljs.core.chunk_rest.call(null,inst_12125);
var inst_12131 = cljs.core.count.call(null,inst_12129);
var inst_12106 = inst_12130;
var inst_12108 = inst_12129;
var inst_12109 = inst_12131;
var inst_12110 = (0);
var state_12176__$1 = (function (){var statearr_12223 = state_12176;
(statearr_12223[(13)] = inst_12106);

(statearr_12223[(14)] = inst_12108);

(statearr_12223[(15)] = inst_12109);

(statearr_12223[(16)] = inst_12110);

return statearr_12223;
})();
var statearr_12224_12323 = state_12176__$1;
(statearr_12224_12323[(2)] = null);

(statearr_12224_12323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (10))){
var inst_12108 = (state_12176[(14)]);
var inst_12110 = (state_12176[(16)]);
var inst_12106 = (state_12176[(13)]);
var inst_12109 = (state_12176[(15)]);
var inst_12119 = cljs.core._nth.call(null,inst_12108,inst_12110);
var inst_12120 = cljs.core.async.muxch_STAR_.call(null,inst_12119);
var inst_12121 = cljs.core.async.close_BANG_.call(null,inst_12120);
var inst_12122 = (inst_12110 + (1));
var tmp12219 = inst_12106;
var tmp12220 = inst_12109;
var tmp12221 = inst_12108;
var inst_12106__$1 = tmp12219;
var inst_12108__$1 = tmp12221;
var inst_12109__$1 = tmp12220;
var inst_12110__$1 = inst_12122;
var state_12176__$1 = (function (){var statearr_12225 = state_12176;
(statearr_12225[(17)] = inst_12121);

(statearr_12225[(13)] = inst_12106__$1);

(statearr_12225[(14)] = inst_12108__$1);

(statearr_12225[(15)] = inst_12109__$1);

(statearr_12225[(16)] = inst_12110__$1);

return statearr_12225;
})();
var statearr_12226_12329 = state_12176__$1;
(statearr_12226_12329[(2)] = null);

(statearr_12226_12329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (18))){
var inst_12141 = (state_12176[(2)]);
var state_12176__$1 = state_12176;
var statearr_12227_12330 = state_12176__$1;
(statearr_12227_12330[(2)] = inst_12141);

(statearr_12227_12330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12177 === (8))){
var inst_12110 = (state_12176[(16)]);
var inst_12109 = (state_12176[(15)]);
var inst_12115 = (inst_12110 < inst_12109);
var inst_12116 = inst_12115;
var state_12176__$1 = state_12176;
if(cljs.core.truth_(inst_12116)){
var statearr_12228_12333 = state_12176__$1;
(statearr_12228_12333[(1)] = (10));

} else {
var statearr_12229_12335 = state_12176__$1;
(statearr_12229_12335[(1)] = (11));

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
var cljs$core$async$state_machine__10315__auto__ = null;
var cljs$core$async$state_machine__10315__auto____0 = (function (){
var statearr_12232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12232[(0)] = cljs$core$async$state_machine__10315__auto__);

(statearr_12232[(1)] = (1));

return statearr_12232;
});
var cljs$core$async$state_machine__10315__auto____1 = (function (state_12176){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_12176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e12233){var ex__10318__auto__ = e12233;
var statearr_12234_12338 = state_12176;
(statearr_12234_12338[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_12176[(4)]))){
var statearr_12235_12340 = state_12176;
(statearr_12235_12340[(1)] = cljs.core.first.call(null,(state_12176[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12342 = state_12176;
state_12176 = G__12342;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$state_machine__10315__auto__ = function(state_12176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10315__auto____1.call(this,state_12176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10315__auto____0;
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10315__auto____1;
return cljs$core$async$state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_12236 = f__10406__auto__.call(null);
(statearr_12236[(6)] = c__10405__auto___12250);

return statearr_12236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
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
var G__12240 = arguments.length;
switch (G__12240) {
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
var G__12246 = arguments.length;
switch (G__12246) {
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
var G__12249 = arguments.length;
switch (G__12249) {
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
var c__10405__auto___12433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_12321){
var state_val_12322 = (state_12321[(1)]);
if((state_val_12322 === (7))){
var state_12321__$1 = state_12321;
var statearr_12324_12436 = state_12321__$1;
(statearr_12324_12436[(2)] = null);

(statearr_12324_12436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (1))){
var state_12321__$1 = state_12321;
var statearr_12325_12439 = state_12321__$1;
(statearr_12325_12439[(2)] = null);

(statearr_12325_12439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (4))){
var inst_12261 = (state_12321[(7)]);
var inst_12259 = (state_12321[(8)]);
var inst_12263 = (inst_12261 < inst_12259);
var state_12321__$1 = state_12321;
if(cljs.core.truth_(inst_12263)){
var statearr_12327_12440 = state_12321__$1;
(statearr_12327_12440[(1)] = (6));

} else {
var statearr_12328_12441 = state_12321__$1;
(statearr_12328_12441[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (15))){
var inst_12298 = (state_12321[(9)]);
var inst_12304 = cljs.core.apply.call(null,f,inst_12298);
var state_12321__$1 = state_12321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12321__$1,(17),out,inst_12304);
} else {
if((state_val_12322 === (13))){
var inst_12298 = (state_12321[(9)]);
var inst_12298__$1 = (state_12321[(2)]);
var inst_12299 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12298__$1);
var state_12321__$1 = (function (){var statearr_12331 = state_12321;
(statearr_12331[(9)] = inst_12298__$1);

return statearr_12331;
})();
if(cljs.core.truth_(inst_12299)){
var statearr_12332_12446 = state_12321__$1;
(statearr_12332_12446[(1)] = (14));

} else {
var statearr_12334_12448 = state_12321__$1;
(statearr_12334_12448[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (6))){
var state_12321__$1 = state_12321;
var statearr_12337_12449 = state_12321__$1;
(statearr_12337_12449[(2)] = null);

(statearr_12337_12449[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (17))){
var inst_12306 = (state_12321[(2)]);
var state_12321__$1 = (function (){var statearr_12347 = state_12321;
(statearr_12347[(10)] = inst_12306);

return statearr_12347;
})();
var statearr_12350_12451 = state_12321__$1;
(statearr_12350_12451[(2)] = null);

(statearr_12350_12451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (3))){
var inst_12311 = (state_12321[(2)]);
var state_12321__$1 = state_12321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12321__$1,inst_12311);
} else {
if((state_val_12322 === (12))){
var _ = (function (){var statearr_12353 = state_12321;
(statearr_12353[(4)] = cljs.core.rest.call(null,(state_12321[(4)])));

return statearr_12353;
})();
var state_12321__$1 = state_12321;
var ex12344 = (state_12321__$1[(2)]);
var statearr_12354_12455 = state_12321__$1;
(statearr_12354_12455[(5)] = ex12344);


if((ex12344 instanceof Object)){
var statearr_12355_12456 = state_12321__$1;
(statearr_12355_12456[(1)] = (11));

(statearr_12355_12456[(5)] = null);

} else {
throw ex12344;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (2))){
var inst_12258 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12259 = cnt;
var inst_12261 = (0);
var state_12321__$1 = (function (){var statearr_12360 = state_12321;
(statearr_12360[(11)] = inst_12258);

(statearr_12360[(8)] = inst_12259);

(statearr_12360[(7)] = inst_12261);

return statearr_12360;
})();
var statearr_12361_12460 = state_12321__$1;
(statearr_12361_12460[(2)] = null);

(statearr_12361_12460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (11))){
var inst_12276 = (state_12321[(2)]);
var inst_12277 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12321__$1 = (function (){var statearr_12363 = state_12321;
(statearr_12363[(12)] = inst_12276);

return statearr_12363;
})();
var statearr_12364_12462 = state_12321__$1;
(statearr_12364_12462[(2)] = inst_12277);

(statearr_12364_12462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (9))){
var inst_12261 = (state_12321[(7)]);
var _ = (function (){var statearr_12365 = state_12321;
(statearr_12365[(4)] = cljs.core.cons.call(null,(12),(state_12321[(4)])));

return statearr_12365;
})();
var inst_12284 = chs__$1.call(null,inst_12261);
var inst_12285 = done.call(null,inst_12261);
var inst_12286 = cljs.core.async.take_BANG_.call(null,inst_12284,inst_12285);
var ___$1 = (function (){var statearr_12366 = state_12321;
(statearr_12366[(4)] = cljs.core.rest.call(null,(state_12321[(4)])));

return statearr_12366;
})();
var state_12321__$1 = state_12321;
var statearr_12367_12464 = state_12321__$1;
(statearr_12367_12464[(2)] = inst_12286);

(statearr_12367_12464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (5))){
var inst_12296 = (state_12321[(2)]);
var state_12321__$1 = (function (){var statearr_12368 = state_12321;
(statearr_12368[(13)] = inst_12296);

return statearr_12368;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12321__$1,(13),dchan);
} else {
if((state_val_12322 === (14))){
var inst_12302 = cljs.core.async.close_BANG_.call(null,out);
var state_12321__$1 = state_12321;
var statearr_12371_12467 = state_12321__$1;
(statearr_12371_12467[(2)] = inst_12302);

(statearr_12371_12467[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (16))){
var inst_12309 = (state_12321[(2)]);
var state_12321__$1 = state_12321;
var statearr_12372_12468 = state_12321__$1;
(statearr_12372_12468[(2)] = inst_12309);

(statearr_12372_12468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (10))){
var inst_12261 = (state_12321[(7)]);
var inst_12289 = (state_12321[(2)]);
var inst_12290 = (inst_12261 + (1));
var inst_12261__$1 = inst_12290;
var state_12321__$1 = (function (){var statearr_12373 = state_12321;
(statearr_12373[(14)] = inst_12289);

(statearr_12373[(7)] = inst_12261__$1);

return statearr_12373;
})();
var statearr_12374_12470 = state_12321__$1;
(statearr_12374_12470[(2)] = null);

(statearr_12374_12470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12322 === (8))){
var inst_12294 = (state_12321[(2)]);
var state_12321__$1 = state_12321;
var statearr_12375_12476 = state_12321__$1;
(statearr_12375_12476[(2)] = inst_12294);

(statearr_12375_12476[(1)] = (5));


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
var cljs$core$async$state_machine__10315__auto__ = null;
var cljs$core$async$state_machine__10315__auto____0 = (function (){
var statearr_12376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12376[(0)] = cljs$core$async$state_machine__10315__auto__);

(statearr_12376[(1)] = (1));

return statearr_12376;
});
var cljs$core$async$state_machine__10315__auto____1 = (function (state_12321){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_12321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e12377){var ex__10318__auto__ = e12377;
var statearr_12379_12499 = state_12321;
(statearr_12379_12499[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_12321[(4)]))){
var statearr_12380_12500 = state_12321;
(statearr_12380_12500[(1)] = cljs.core.first.call(null,(state_12321[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12503 = state_12321;
state_12321 = G__12503;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$state_machine__10315__auto__ = function(state_12321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10315__auto____1.call(this,state_12321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10315__auto____0;
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10315__auto____1;
return cljs$core$async$state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_12382 = f__10406__auto__.call(null);
(statearr_12382[(6)] = c__10405__auto___12433);

return statearr_12382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
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
var G__12386 = arguments.length;
switch (G__12386) {
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
var c__10405__auto___12509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_12421){
var state_val_12422 = (state_12421[(1)]);
if((state_val_12422 === (7))){
var inst_12399 = (state_12421[(7)]);
var inst_12400 = (state_12421[(8)]);
var inst_12399__$1 = (state_12421[(2)]);
var inst_12400__$1 = cljs.core.nth.call(null,inst_12399__$1,(0),null);
var inst_12401 = cljs.core.nth.call(null,inst_12399__$1,(1),null);
var inst_12402 = (inst_12400__$1 == null);
var state_12421__$1 = (function (){var statearr_12423 = state_12421;
(statearr_12423[(7)] = inst_12399__$1);

(statearr_12423[(8)] = inst_12400__$1);

(statearr_12423[(9)] = inst_12401);

return statearr_12423;
})();
if(cljs.core.truth_(inst_12402)){
var statearr_12425_12514 = state_12421__$1;
(statearr_12425_12514[(1)] = (8));

} else {
var statearr_12426_12515 = state_12421__$1;
(statearr_12426_12515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12422 === (1))){
var inst_12388 = cljs.core.vec.call(null,chs);
var inst_12389 = inst_12388;
var state_12421__$1 = (function (){var statearr_12428 = state_12421;
(statearr_12428[(10)] = inst_12389);

return statearr_12428;
})();
var statearr_12429_12517 = state_12421__$1;
(statearr_12429_12517[(2)] = null);

(statearr_12429_12517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12422 === (4))){
var inst_12389 = (state_12421[(10)]);
var state_12421__$1 = state_12421;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12421__$1,(7),inst_12389);
} else {
if((state_val_12422 === (6))){
var inst_12416 = (state_12421[(2)]);
var state_12421__$1 = state_12421;
var statearr_12430_12522 = state_12421__$1;
(statearr_12430_12522[(2)] = inst_12416);

(statearr_12430_12522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12422 === (3))){
var inst_12418 = (state_12421[(2)]);
var state_12421__$1 = state_12421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12421__$1,inst_12418);
} else {
if((state_val_12422 === (2))){
var inst_12389 = (state_12421[(10)]);
var inst_12391 = cljs.core.count.call(null,inst_12389);
var inst_12392 = (inst_12391 > (0));
var state_12421__$1 = state_12421;
if(cljs.core.truth_(inst_12392)){
var statearr_12434_12523 = state_12421__$1;
(statearr_12434_12523[(1)] = (4));

} else {
var statearr_12435_12524 = state_12421__$1;
(statearr_12435_12524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12422 === (11))){
var inst_12389 = (state_12421[(10)]);
var inst_12409 = (state_12421[(2)]);
var tmp12431 = inst_12389;
var inst_12389__$1 = tmp12431;
var state_12421__$1 = (function (){var statearr_12437 = state_12421;
(statearr_12437[(11)] = inst_12409);

(statearr_12437[(10)] = inst_12389__$1);

return statearr_12437;
})();
var statearr_12438_12526 = state_12421__$1;
(statearr_12438_12526[(2)] = null);

(statearr_12438_12526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12422 === (9))){
var inst_12400 = (state_12421[(8)]);
var state_12421__$1 = state_12421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12421__$1,(11),out,inst_12400);
} else {
if((state_val_12422 === (5))){
var inst_12414 = cljs.core.async.close_BANG_.call(null,out);
var state_12421__$1 = state_12421;
var statearr_12444_12529 = state_12421__$1;
(statearr_12444_12529[(2)] = inst_12414);

(statearr_12444_12529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12422 === (10))){
var inst_12412 = (state_12421[(2)]);
var state_12421__$1 = state_12421;
var statearr_12447_12530 = state_12421__$1;
(statearr_12447_12530[(2)] = inst_12412);

(statearr_12447_12530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12422 === (8))){
var inst_12389 = (state_12421[(10)]);
var inst_12399 = (state_12421[(7)]);
var inst_12400 = (state_12421[(8)]);
var inst_12401 = (state_12421[(9)]);
var inst_12404 = (function (){var cs = inst_12389;
var vec__12394 = inst_12399;
var v = inst_12400;
var c = inst_12401;
return (function (p1__12384_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12384_SHARP_);
});
})();
var inst_12405 = cljs.core.filterv.call(null,inst_12404,inst_12389);
var inst_12389__$1 = inst_12405;
var state_12421__$1 = (function (){var statearr_12450 = state_12421;
(statearr_12450[(10)] = inst_12389__$1);

return statearr_12450;
})();
var statearr_12452_12533 = state_12421__$1;
(statearr_12452_12533[(2)] = null);

(statearr_12452_12533[(1)] = (2));


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
var cljs$core$async$state_machine__10315__auto__ = null;
var cljs$core$async$state_machine__10315__auto____0 = (function (){
var statearr_12454 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12454[(0)] = cljs$core$async$state_machine__10315__auto__);

(statearr_12454[(1)] = (1));

return statearr_12454;
});
var cljs$core$async$state_machine__10315__auto____1 = (function (state_12421){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_12421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e12457){var ex__10318__auto__ = e12457;
var statearr_12458_12535 = state_12421;
(statearr_12458_12535[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_12421[(4)]))){
var statearr_12459_12537 = state_12421;
(statearr_12459_12537[(1)] = cljs.core.first.call(null,(state_12421[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12539 = state_12421;
state_12421 = G__12539;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$state_machine__10315__auto__ = function(state_12421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10315__auto____1.call(this,state_12421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10315__auto____0;
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10315__auto____1;
return cljs$core$async$state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_12461 = f__10406__auto__.call(null);
(statearr_12461[(6)] = c__10405__auto___12509);

return statearr_12461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
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
var G__12466 = arguments.length;
switch (G__12466) {
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
var c__10405__auto___12592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_12497){
var state_val_12498 = (state_12497[(1)]);
if((state_val_12498 === (7))){
var inst_12478 = (state_12497[(7)]);
var inst_12478__$1 = (state_12497[(2)]);
var inst_12479 = (inst_12478__$1 == null);
var inst_12480 = cljs.core.not.call(null,inst_12479);
var state_12497__$1 = (function (){var statearr_12516 = state_12497;
(statearr_12516[(7)] = inst_12478__$1);

return statearr_12516;
})();
if(inst_12480){
var statearr_12518_12598 = state_12497__$1;
(statearr_12518_12598[(1)] = (8));

} else {
var statearr_12519_12599 = state_12497__$1;
(statearr_12519_12599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (1))){
var inst_12471 = (0);
var state_12497__$1 = (function (){var statearr_12520 = state_12497;
(statearr_12520[(8)] = inst_12471);

return statearr_12520;
})();
var statearr_12521_12600 = state_12497__$1;
(statearr_12521_12600[(2)] = null);

(statearr_12521_12600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (4))){
var state_12497__$1 = state_12497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12497__$1,(7),ch);
} else {
if((state_val_12498 === (6))){
var inst_12491 = (state_12497[(2)]);
var state_12497__$1 = state_12497;
var statearr_12531_12601 = state_12497__$1;
(statearr_12531_12601[(2)] = inst_12491);

(statearr_12531_12601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (3))){
var inst_12493 = (state_12497[(2)]);
var inst_12495 = cljs.core.async.close_BANG_.call(null,out);
var state_12497__$1 = (function (){var statearr_12536 = state_12497;
(statearr_12536[(9)] = inst_12493);

return statearr_12536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12497__$1,inst_12495);
} else {
if((state_val_12498 === (2))){
var inst_12471 = (state_12497[(8)]);
var inst_12474 = (inst_12471 < n);
var state_12497__$1 = state_12497;
if(cljs.core.truth_(inst_12474)){
var statearr_12540_12604 = state_12497__$1;
(statearr_12540_12604[(1)] = (4));

} else {
var statearr_12541_12605 = state_12497__$1;
(statearr_12541_12605[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (11))){
var inst_12471 = (state_12497[(8)]);
var inst_12483 = (state_12497[(2)]);
var inst_12484 = (inst_12471 + (1));
var inst_12471__$1 = inst_12484;
var state_12497__$1 = (function (){var statearr_12543 = state_12497;
(statearr_12543[(10)] = inst_12483);

(statearr_12543[(8)] = inst_12471__$1);

return statearr_12543;
})();
var statearr_12544_12606 = state_12497__$1;
(statearr_12544_12606[(2)] = null);

(statearr_12544_12606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (9))){
var state_12497__$1 = state_12497;
var statearr_12548_12607 = state_12497__$1;
(statearr_12548_12607[(2)] = null);

(statearr_12548_12607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (5))){
var state_12497__$1 = state_12497;
var statearr_12549_12609 = state_12497__$1;
(statearr_12549_12609[(2)] = null);

(statearr_12549_12609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (10))){
var inst_12488 = (state_12497[(2)]);
var state_12497__$1 = state_12497;
var statearr_12551_12610 = state_12497__$1;
(statearr_12551_12610[(2)] = inst_12488);

(statearr_12551_12610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12498 === (8))){
var inst_12478 = (state_12497[(7)]);
var state_12497__$1 = state_12497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12497__$1,(11),out,inst_12478);
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
var cljs$core$async$state_machine__10315__auto__ = null;
var cljs$core$async$state_machine__10315__auto____0 = (function (){
var statearr_12554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12554[(0)] = cljs$core$async$state_machine__10315__auto__);

(statearr_12554[(1)] = (1));

return statearr_12554;
});
var cljs$core$async$state_machine__10315__auto____1 = (function (state_12497){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_12497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e12556){var ex__10318__auto__ = e12556;
var statearr_12557_12612 = state_12497;
(statearr_12557_12612[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_12497[(4)]))){
var statearr_12560_12615 = state_12497;
(statearr_12560_12615[(1)] = cljs.core.first.call(null,(state_12497[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12617 = state_12497;
state_12497 = G__12617;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$state_machine__10315__auto__ = function(state_12497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10315__auto____1.call(this,state_12497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10315__auto____0;
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10315__auto____1;
return cljs$core$async$state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_12563 = f__10406__auto__.call(null);
(statearr_12563[(6)] = c__10405__auto___12592);

return statearr_12563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12570 = (function (f,ch,meta12571){
this.f = f;
this.ch = ch;
this.meta12571 = meta12571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12572,meta12571__$1){
var self__ = this;
var _12572__$1 = this;
return (new cljs.core.async.t_cljs$core$async12570(self__.f,self__.ch,meta12571__$1));
}));

(cljs.core.async.t_cljs$core$async12570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12572){
var self__ = this;
var _12572__$1 = this;
return self__.meta12571;
}));

(cljs.core.async.t_cljs$core$async12570.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12570.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12570.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12570.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12570.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12585 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12585 = (function (f,ch,meta12571,_,fn1,meta12586){
this.f = f;
this.ch = ch;
this.meta12571 = meta12571;
this._ = _;
this.fn1 = fn1;
this.meta12586 = meta12586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12587,meta12586__$1){
var self__ = this;
var _12587__$1 = this;
return (new cljs.core.async.t_cljs$core$async12585(self__.f,self__.ch,self__.meta12571,self__._,self__.fn1,meta12586__$1));
}));

(cljs.core.async.t_cljs$core$async12585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12587){
var self__ = this;
var _12587__$1 = this;
return self__.meta12586;
}));

(cljs.core.async.t_cljs$core$async12585.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12585.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__12568_SHARP_){
return f1.call(null,(((p1__12568_SHARP_ == null))?null:self__.f.call(null,p1__12568_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async12585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12571","meta12571",-1667396708,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12570","cljs.core.async/t_cljs$core$async12570",1218740304,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12586","meta12586",-2135098372,null)], null);
}));

(cljs.core.async.t_cljs$core$async12585.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12585");

(cljs.core.async.t_cljs$core$async12585.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12585");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12585.
 */
cljs.core.async.__GT_t_cljs$core$async12585 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12585(f__$1,ch__$1,meta12571__$1,___$2,fn1__$1,meta12586){
return (new cljs.core.async.t_cljs$core$async12585(f__$1,ch__$1,meta12571__$1,___$2,fn1__$1,meta12586));
});

}

return (new cljs.core.async.t_cljs$core$async12585(self__.f,self__.ch,self__.meta12571,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async12570.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12570.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12571","meta12571",-1667396708,null)], null);
}));

(cljs.core.async.t_cljs$core$async12570.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12570");

(cljs.core.async.t_cljs$core$async12570.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12570");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12570.
 */
cljs.core.async.__GT_t_cljs$core$async12570 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12570(f__$1,ch__$1,meta12571){
return (new cljs.core.async.t_cljs$core$async12570(f__$1,ch__$1,meta12571));
});

}

return (new cljs.core.async.t_cljs$core$async12570(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12620 = (function (f,ch,meta12621){
this.f = f;
this.ch = ch;
this.meta12621 = meta12621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12622,meta12621__$1){
var self__ = this;
var _12622__$1 = this;
return (new cljs.core.async.t_cljs$core$async12620(self__.f,self__.ch,meta12621__$1));
}));

(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12622){
var self__ = this;
var _12622__$1 = this;
return self__.meta12621;
}));

(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12620.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async12620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12621","meta12621",1621311316,null)], null);
}));

(cljs.core.async.t_cljs$core$async12620.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12620");

(cljs.core.async.t_cljs$core$async12620.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12620");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12620.
 */
cljs.core.async.__GT_t_cljs$core$async12620 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12620(f__$1,ch__$1,meta12621){
return (new cljs.core.async.t_cljs$core$async12620(f__$1,ch__$1,meta12621));
});

}

return (new cljs.core.async.t_cljs$core$async12620(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12636 = (function (p,ch,meta12637){
this.p = p;
this.ch = ch;
this.meta12637 = meta12637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12638,meta12637__$1){
var self__ = this;
var _12638__$1 = this;
return (new cljs.core.async.t_cljs$core$async12636(self__.p,self__.ch,meta12637__$1));
}));

(cljs.core.async.t_cljs$core$async12636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12638){
var self__ = this;
var _12638__$1 = this;
return self__.meta12637;
}));

(cljs.core.async.t_cljs$core$async12636.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12636.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12636.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12636.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12636.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12636.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12636.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12637","meta12637",586688592,null)], null);
}));

(cljs.core.async.t_cljs$core$async12636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12636");

(cljs.core.async.t_cljs$core$async12636.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12636.
 */
cljs.core.async.__GT_t_cljs$core$async12636 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12636(p__$1,ch__$1,meta12637){
return (new cljs.core.async.t_cljs$core$async12636(p__$1,ch__$1,meta12637));
});

}

return (new cljs.core.async.t_cljs$core$async12636(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12645 = arguments.length;
switch (G__12645) {
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
var c__10405__auto___12743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_12672){
var state_val_12673 = (state_12672[(1)]);
if((state_val_12673 === (7))){
var inst_12668 = (state_12672[(2)]);
var state_12672__$1 = state_12672;
var statearr_12675_12786 = state_12672__$1;
(statearr_12675_12786[(2)] = inst_12668);

(statearr_12675_12786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (1))){
var state_12672__$1 = state_12672;
var statearr_12676_12790 = state_12672__$1;
(statearr_12676_12790[(2)] = null);

(statearr_12676_12790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (4))){
var inst_12654 = (state_12672[(7)]);
var inst_12654__$1 = (state_12672[(2)]);
var inst_12655 = (inst_12654__$1 == null);
var state_12672__$1 = (function (){var statearr_12678 = state_12672;
(statearr_12678[(7)] = inst_12654__$1);

return statearr_12678;
})();
if(cljs.core.truth_(inst_12655)){
var statearr_12679_12814 = state_12672__$1;
(statearr_12679_12814[(1)] = (5));

} else {
var statearr_12680_12816 = state_12672__$1;
(statearr_12680_12816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (6))){
var inst_12654 = (state_12672[(7)]);
var inst_12659 = p.call(null,inst_12654);
var state_12672__$1 = state_12672;
if(cljs.core.truth_(inst_12659)){
var statearr_12681_12824 = state_12672__$1;
(statearr_12681_12824[(1)] = (8));

} else {
var statearr_12682_12826 = state_12672__$1;
(statearr_12682_12826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (3))){
var inst_12670 = (state_12672[(2)]);
var state_12672__$1 = state_12672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12672__$1,inst_12670);
} else {
if((state_val_12673 === (2))){
var state_12672__$1 = state_12672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12672__$1,(4),ch);
} else {
if((state_val_12673 === (11))){
var inst_12662 = (state_12672[(2)]);
var state_12672__$1 = state_12672;
var statearr_12684_12829 = state_12672__$1;
(statearr_12684_12829[(2)] = inst_12662);

(statearr_12684_12829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (9))){
var state_12672__$1 = state_12672;
var statearr_12685_12831 = state_12672__$1;
(statearr_12685_12831[(2)] = null);

(statearr_12685_12831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (5))){
var inst_12657 = cljs.core.async.close_BANG_.call(null,out);
var state_12672__$1 = state_12672;
var statearr_12686_12833 = state_12672__$1;
(statearr_12686_12833[(2)] = inst_12657);

(statearr_12686_12833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (10))){
var inst_12665 = (state_12672[(2)]);
var state_12672__$1 = (function (){var statearr_12688 = state_12672;
(statearr_12688[(8)] = inst_12665);

return statearr_12688;
})();
var statearr_12689_12834 = state_12672__$1;
(statearr_12689_12834[(2)] = null);

(statearr_12689_12834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (8))){
var inst_12654 = (state_12672[(7)]);
var state_12672__$1 = state_12672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12672__$1,(11),out,inst_12654);
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
var cljs$core$async$state_machine__10315__auto__ = null;
var cljs$core$async$state_machine__10315__auto____0 = (function (){
var statearr_12693 = [null,null,null,null,null,null,null,null,null];
(statearr_12693[(0)] = cljs$core$async$state_machine__10315__auto__);

(statearr_12693[(1)] = (1));

return statearr_12693;
});
var cljs$core$async$state_machine__10315__auto____1 = (function (state_12672){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_12672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e12698){var ex__10318__auto__ = e12698;
var statearr_12699_12837 = state_12672;
(statearr_12699_12837[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_12672[(4)]))){
var statearr_12700_12838 = state_12672;
(statearr_12700_12838[(1)] = cljs.core.first.call(null,(state_12672[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12839 = state_12672;
state_12672 = G__12839;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$state_machine__10315__auto__ = function(state_12672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10315__auto____1.call(this,state_12672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10315__auto____0;
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10315__auto____1;
return cljs$core$async$state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_12703 = f__10406__auto__.call(null);
(statearr_12703[(6)] = c__10405__auto___12743);

return statearr_12703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12707 = arguments.length;
switch (G__12707) {
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
var c__10405__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_12787){
var state_val_12789 = (state_12787[(1)]);
if((state_val_12789 === (7))){
var inst_12782 = (state_12787[(2)]);
var state_12787__$1 = state_12787;
var statearr_12793_12865 = state_12787__$1;
(statearr_12793_12865[(2)] = inst_12782);

(statearr_12793_12865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (20))){
var inst_12741 = (state_12787[(7)]);
var inst_12763 = (state_12787[(2)]);
var inst_12764 = cljs.core.next.call(null,inst_12741);
var inst_12724 = inst_12764;
var inst_12725 = null;
var inst_12726 = (0);
var inst_12727 = (0);
var state_12787__$1 = (function (){var statearr_12794 = state_12787;
(statearr_12794[(8)] = inst_12763);

(statearr_12794[(9)] = inst_12724);

(statearr_12794[(10)] = inst_12725);

(statearr_12794[(11)] = inst_12726);

(statearr_12794[(12)] = inst_12727);

return statearr_12794;
})();
var statearr_12796_12869 = state_12787__$1;
(statearr_12796_12869[(2)] = null);

(statearr_12796_12869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (1))){
var state_12787__$1 = state_12787;
var statearr_12799_12870 = state_12787__$1;
(statearr_12799_12870[(2)] = null);

(statearr_12799_12870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (4))){
var inst_12713 = (state_12787[(13)]);
var inst_12713__$1 = (state_12787[(2)]);
var inst_12714 = (inst_12713__$1 == null);
var state_12787__$1 = (function (){var statearr_12803 = state_12787;
(statearr_12803[(13)] = inst_12713__$1);

return statearr_12803;
})();
if(cljs.core.truth_(inst_12714)){
var statearr_12804_12871 = state_12787__$1;
(statearr_12804_12871[(1)] = (5));

} else {
var statearr_12805_12872 = state_12787__$1;
(statearr_12805_12872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (15))){
var state_12787__$1 = state_12787;
var statearr_12811_12874 = state_12787__$1;
(statearr_12811_12874[(2)] = null);

(statearr_12811_12874[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (21))){
var state_12787__$1 = state_12787;
var statearr_12813_12876 = state_12787__$1;
(statearr_12813_12876[(2)] = null);

(statearr_12813_12876[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (13))){
var inst_12727 = (state_12787[(12)]);
var inst_12724 = (state_12787[(9)]);
var inst_12725 = (state_12787[(10)]);
var inst_12726 = (state_12787[(11)]);
var inst_12737 = (state_12787[(2)]);
var inst_12738 = (inst_12727 + (1));
var tmp12807 = inst_12725;
var tmp12808 = inst_12726;
var tmp12809 = inst_12724;
var inst_12724__$1 = tmp12809;
var inst_12725__$1 = tmp12807;
var inst_12726__$1 = tmp12808;
var inst_12727__$1 = inst_12738;
var state_12787__$1 = (function (){var statearr_12815 = state_12787;
(statearr_12815[(14)] = inst_12737);

(statearr_12815[(9)] = inst_12724__$1);

(statearr_12815[(10)] = inst_12725__$1);

(statearr_12815[(11)] = inst_12726__$1);

(statearr_12815[(12)] = inst_12727__$1);

return statearr_12815;
})();
var statearr_12817_12877 = state_12787__$1;
(statearr_12817_12877[(2)] = null);

(statearr_12817_12877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (22))){
var state_12787__$1 = state_12787;
var statearr_12818_12878 = state_12787__$1;
(statearr_12818_12878[(2)] = null);

(statearr_12818_12878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (6))){
var inst_12713 = (state_12787[(13)]);
var inst_12722 = f.call(null,inst_12713);
var inst_12723 = cljs.core.seq.call(null,inst_12722);
var inst_12724 = inst_12723;
var inst_12725 = null;
var inst_12726 = (0);
var inst_12727 = (0);
var state_12787__$1 = (function (){var statearr_12822 = state_12787;
(statearr_12822[(9)] = inst_12724);

(statearr_12822[(10)] = inst_12725);

(statearr_12822[(11)] = inst_12726);

(statearr_12822[(12)] = inst_12727);

return statearr_12822;
})();
var statearr_12825_12879 = state_12787__$1;
(statearr_12825_12879[(2)] = null);

(statearr_12825_12879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (17))){
var inst_12741 = (state_12787[(7)]);
var inst_12750 = cljs.core.chunk_first.call(null,inst_12741);
var inst_12755 = cljs.core.chunk_rest.call(null,inst_12741);
var inst_12756 = cljs.core.count.call(null,inst_12750);
var inst_12724 = inst_12755;
var inst_12725 = inst_12750;
var inst_12726 = inst_12756;
var inst_12727 = (0);
var state_12787__$1 = (function (){var statearr_12827 = state_12787;
(statearr_12827[(9)] = inst_12724);

(statearr_12827[(10)] = inst_12725);

(statearr_12827[(11)] = inst_12726);

(statearr_12827[(12)] = inst_12727);

return statearr_12827;
})();
var statearr_12828_12884 = state_12787__$1;
(statearr_12828_12884[(2)] = null);

(statearr_12828_12884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (3))){
var inst_12784 = (state_12787[(2)]);
var state_12787__$1 = state_12787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12787__$1,inst_12784);
} else {
if((state_val_12789 === (12))){
var inst_12772 = (state_12787[(2)]);
var state_12787__$1 = state_12787;
var statearr_12832_12886 = state_12787__$1;
(statearr_12832_12886[(2)] = inst_12772);

(statearr_12832_12886[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (2))){
var state_12787__$1 = state_12787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12787__$1,(4),in$);
} else {
if((state_val_12789 === (23))){
var inst_12780 = (state_12787[(2)]);
var state_12787__$1 = state_12787;
var statearr_12835_12910 = state_12787__$1;
(statearr_12835_12910[(2)] = inst_12780);

(statearr_12835_12910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (19))){
var inst_12767 = (state_12787[(2)]);
var state_12787__$1 = state_12787;
var statearr_12836_12911 = state_12787__$1;
(statearr_12836_12911[(2)] = inst_12767);

(statearr_12836_12911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (11))){
var inst_12724 = (state_12787[(9)]);
var inst_12741 = (state_12787[(7)]);
var inst_12741__$1 = cljs.core.seq.call(null,inst_12724);
var state_12787__$1 = (function (){var statearr_12840 = state_12787;
(statearr_12840[(7)] = inst_12741__$1);

return statearr_12840;
})();
if(inst_12741__$1){
var statearr_12841_12914 = state_12787__$1;
(statearr_12841_12914[(1)] = (14));

} else {
var statearr_12842_12916 = state_12787__$1;
(statearr_12842_12916[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (9))){
var inst_12774 = (state_12787[(2)]);
var inst_12775 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12787__$1 = (function (){var statearr_12844 = state_12787;
(statearr_12844[(15)] = inst_12774);

return statearr_12844;
})();
if(cljs.core.truth_(inst_12775)){
var statearr_12845_12918 = state_12787__$1;
(statearr_12845_12918[(1)] = (21));

} else {
var statearr_12846_12921 = state_12787__$1;
(statearr_12846_12921[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (5))){
var inst_12716 = cljs.core.async.close_BANG_.call(null,out);
var state_12787__$1 = state_12787;
var statearr_12848_12923 = state_12787__$1;
(statearr_12848_12923[(2)] = inst_12716);

(statearr_12848_12923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (14))){
var inst_12741 = (state_12787[(7)]);
var inst_12744 = cljs.core.chunked_seq_QMARK_.call(null,inst_12741);
var state_12787__$1 = state_12787;
if(inst_12744){
var statearr_12849_12924 = state_12787__$1;
(statearr_12849_12924[(1)] = (17));

} else {
var statearr_12850_12925 = state_12787__$1;
(statearr_12850_12925[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (16))){
var inst_12770 = (state_12787[(2)]);
var state_12787__$1 = state_12787;
var statearr_12851_12927 = state_12787__$1;
(statearr_12851_12927[(2)] = inst_12770);

(statearr_12851_12927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12789 === (10))){
var inst_12725 = (state_12787[(10)]);
var inst_12727 = (state_12787[(12)]);
var inst_12735 = cljs.core._nth.call(null,inst_12725,inst_12727);
var state_12787__$1 = state_12787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12787__$1,(13),out,inst_12735);
} else {
if((state_val_12789 === (18))){
var inst_12741 = (state_12787[(7)]);
var inst_12760 = cljs.core.first.call(null,inst_12741);
var state_12787__$1 = state_12787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12787__$1,(20),out,inst_12760);
} else {
if((state_val_12789 === (8))){
var inst_12727 = (state_12787[(12)]);
var inst_12726 = (state_12787[(11)]);
var inst_12731 = (inst_12727 < inst_12726);
var inst_12732 = inst_12731;
var state_12787__$1 = state_12787;
if(cljs.core.truth_(inst_12732)){
var statearr_12852_12929 = state_12787__$1;
(statearr_12852_12929[(1)] = (10));

} else {
var statearr_12853_12930 = state_12787__$1;
(statearr_12853_12930[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10315__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10315__auto____0 = (function (){
var statearr_12854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12854[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10315__auto__);

(statearr_12854[(1)] = (1));

return statearr_12854;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10315__auto____1 = (function (state_12787){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_12787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e12855){var ex__10318__auto__ = e12855;
var statearr_12856_12933 = state_12787;
(statearr_12856_12933[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_12787[(4)]))){
var statearr_12857_12934 = state_12787;
(statearr_12857_12934[(1)] = cljs.core.first.call(null,(state_12787[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12935 = state_12787;
state_12787 = G__12935;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10315__auto__ = function(state_12787){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10315__auto____1.call(this,state_12787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10315__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10315__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_12859 = f__10406__auto__.call(null);
(statearr_12859[(6)] = c__10405__auto__);

return statearr_12859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
}));

return c__10405__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12862 = arguments.length;
switch (G__12862) {
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
var G__12864 = arguments.length;
switch (G__12864) {
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
var G__12875 = arguments.length;
switch (G__12875) {
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
var c__10405__auto___12999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_12908){
var state_val_12909 = (state_12908[(1)]);
if((state_val_12909 === (7))){
var inst_12903 = (state_12908[(2)]);
var state_12908__$1 = state_12908;
var statearr_12912_13000 = state_12908__$1;
(statearr_12912_13000[(2)] = inst_12903);

(statearr_12912_13000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12909 === (1))){
var inst_12883 = null;
var state_12908__$1 = (function (){var statearr_12913 = state_12908;
(statearr_12913[(7)] = inst_12883);

return statearr_12913;
})();
var statearr_12915_13002 = state_12908__$1;
(statearr_12915_13002[(2)] = null);

(statearr_12915_13002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12909 === (4))){
var inst_12888 = (state_12908[(8)]);
var inst_12888__$1 = (state_12908[(2)]);
var inst_12889 = (inst_12888__$1 == null);
var inst_12890 = cljs.core.not.call(null,inst_12889);
var state_12908__$1 = (function (){var statearr_12917 = state_12908;
(statearr_12917[(8)] = inst_12888__$1);

return statearr_12917;
})();
if(inst_12890){
var statearr_12919_13004 = state_12908__$1;
(statearr_12919_13004[(1)] = (5));

} else {
var statearr_12920_13006 = state_12908__$1;
(statearr_12920_13006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12909 === (6))){
var state_12908__$1 = state_12908;
var statearr_12922_13007 = state_12908__$1;
(statearr_12922_13007[(2)] = null);

(statearr_12922_13007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12909 === (3))){
var inst_12905 = (state_12908[(2)]);
var inst_12906 = cljs.core.async.close_BANG_.call(null,out);
var state_12908__$1 = (function (){var statearr_12928 = state_12908;
(statearr_12928[(9)] = inst_12905);

return statearr_12928;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12908__$1,inst_12906);
} else {
if((state_val_12909 === (2))){
var state_12908__$1 = state_12908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12908__$1,(4),ch);
} else {
if((state_val_12909 === (11))){
var inst_12888 = (state_12908[(8)]);
var inst_12897 = (state_12908[(2)]);
var inst_12883 = inst_12888;
var state_12908__$1 = (function (){var statearr_12931 = state_12908;
(statearr_12931[(10)] = inst_12897);

(statearr_12931[(7)] = inst_12883);

return statearr_12931;
})();
var statearr_12932_13012 = state_12908__$1;
(statearr_12932_13012[(2)] = null);

(statearr_12932_13012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12909 === (9))){
var inst_12888 = (state_12908[(8)]);
var state_12908__$1 = state_12908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12908__$1,(11),out,inst_12888);
} else {
if((state_val_12909 === (5))){
var inst_12888 = (state_12908[(8)]);
var inst_12883 = (state_12908[(7)]);
var inst_12892 = cljs.core._EQ_.call(null,inst_12888,inst_12883);
var state_12908__$1 = state_12908;
if(inst_12892){
var statearr_12937_13017 = state_12908__$1;
(statearr_12937_13017[(1)] = (8));

} else {
var statearr_12939_13020 = state_12908__$1;
(statearr_12939_13020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12909 === (10))){
var inst_12900 = (state_12908[(2)]);
var state_12908__$1 = state_12908;
var statearr_12940_13022 = state_12908__$1;
(statearr_12940_13022[(2)] = inst_12900);

(statearr_12940_13022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12909 === (8))){
var inst_12883 = (state_12908[(7)]);
var tmp12936 = inst_12883;
var inst_12883__$1 = tmp12936;
var state_12908__$1 = (function (){var statearr_12941 = state_12908;
(statearr_12941[(7)] = inst_12883__$1);

return statearr_12941;
})();
var statearr_12942_13023 = state_12908__$1;
(statearr_12942_13023[(2)] = null);

(statearr_12942_13023[(1)] = (2));


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
var cljs$core$async$state_machine__10315__auto__ = null;
var cljs$core$async$state_machine__10315__auto____0 = (function (){
var statearr_12946 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12946[(0)] = cljs$core$async$state_machine__10315__auto__);

(statearr_12946[(1)] = (1));

return statearr_12946;
});
var cljs$core$async$state_machine__10315__auto____1 = (function (state_12908){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_12908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e12947){var ex__10318__auto__ = e12947;
var statearr_12948_13026 = state_12908;
(statearr_12948_13026[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_12908[(4)]))){
var statearr_12949_13027 = state_12908;
(statearr_12949_13027[(1)] = cljs.core.first.call(null,(state_12908[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13029 = state_12908;
state_12908 = G__13029;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$state_machine__10315__auto__ = function(state_12908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10315__auto____1.call(this,state_12908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10315__auto____0;
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10315__auto____1;
return cljs$core$async$state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_12950 = f__10406__auto__.call(null);
(statearr_12950[(6)] = c__10405__auto___12999);

return statearr_12950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12957 = arguments.length;
switch (G__12957) {
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
var c__10405__auto___13056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_12997){
var state_val_12998 = (state_12997[(1)]);
if((state_val_12998 === (7))){
var inst_12993 = (state_12997[(2)]);
var state_12997__$1 = state_12997;
var statearr_13001_13057 = state_12997__$1;
(statearr_13001_13057[(2)] = inst_12993);

(statearr_13001_13057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (1))){
var inst_12959 = (new Array(n));
var inst_12960 = inst_12959;
var inst_12961 = (0);
var state_12997__$1 = (function (){var statearr_13003 = state_12997;
(statearr_13003[(7)] = inst_12960);

(statearr_13003[(8)] = inst_12961);

return statearr_13003;
})();
var statearr_13005_13058 = state_12997__$1;
(statearr_13005_13058[(2)] = null);

(statearr_13005_13058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (4))){
var inst_12964 = (state_12997[(9)]);
var inst_12964__$1 = (state_12997[(2)]);
var inst_12965 = (inst_12964__$1 == null);
var inst_12966 = cljs.core.not.call(null,inst_12965);
var state_12997__$1 = (function (){var statearr_13008 = state_12997;
(statearr_13008[(9)] = inst_12964__$1);

return statearr_13008;
})();
if(inst_12966){
var statearr_13009_13059 = state_12997__$1;
(statearr_13009_13059[(1)] = (5));

} else {
var statearr_13010_13063 = state_12997__$1;
(statearr_13010_13063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (15))){
var inst_12987 = (state_12997[(2)]);
var state_12997__$1 = state_12997;
var statearr_13013_13072 = state_12997__$1;
(statearr_13013_13072[(2)] = inst_12987);

(statearr_13013_13072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (13))){
var state_12997__$1 = state_12997;
var statearr_13014_13079 = state_12997__$1;
(statearr_13014_13079[(2)] = null);

(statearr_13014_13079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (6))){
var inst_12961 = (state_12997[(8)]);
var inst_12983 = (inst_12961 > (0));
var state_12997__$1 = state_12997;
if(cljs.core.truth_(inst_12983)){
var statearr_13016_13091 = state_12997__$1;
(statearr_13016_13091[(1)] = (12));

} else {
var statearr_13019_13096 = state_12997__$1;
(statearr_13019_13096[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (3))){
var inst_12995 = (state_12997[(2)]);
var state_12997__$1 = state_12997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12997__$1,inst_12995);
} else {
if((state_val_12998 === (12))){
var inst_12960 = (state_12997[(7)]);
var inst_12985 = cljs.core.vec.call(null,inst_12960);
var state_12997__$1 = state_12997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12997__$1,(15),out,inst_12985);
} else {
if((state_val_12998 === (2))){
var state_12997__$1 = state_12997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12997__$1,(4),ch);
} else {
if((state_val_12998 === (11))){
var inst_12976 = (state_12997[(2)]);
var inst_12978 = (new Array(n));
var inst_12960 = inst_12978;
var inst_12961 = (0);
var state_12997__$1 = (function (){var statearr_13024 = state_12997;
(statearr_13024[(10)] = inst_12976);

(statearr_13024[(7)] = inst_12960);

(statearr_13024[(8)] = inst_12961);

return statearr_13024;
})();
var statearr_13025_13116 = state_12997__$1;
(statearr_13025_13116[(2)] = null);

(statearr_13025_13116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (9))){
var inst_12960 = (state_12997[(7)]);
var inst_12974 = cljs.core.vec.call(null,inst_12960);
var state_12997__$1 = state_12997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12997__$1,(11),out,inst_12974);
} else {
if((state_val_12998 === (5))){
var inst_12960 = (state_12997[(7)]);
var inst_12961 = (state_12997[(8)]);
var inst_12964 = (state_12997[(9)]);
var inst_12969 = (state_12997[(11)]);
var inst_12968 = (inst_12960[inst_12961] = inst_12964);
var inst_12969__$1 = (inst_12961 + (1));
var inst_12970 = (inst_12969__$1 < n);
var state_12997__$1 = (function (){var statearr_13028 = state_12997;
(statearr_13028[(12)] = inst_12968);

(statearr_13028[(11)] = inst_12969__$1);

return statearr_13028;
})();
if(cljs.core.truth_(inst_12970)){
var statearr_13030_13120 = state_12997__$1;
(statearr_13030_13120[(1)] = (8));

} else {
var statearr_13031_13121 = state_12997__$1;
(statearr_13031_13121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (14))){
var inst_12990 = (state_12997[(2)]);
var inst_12991 = cljs.core.async.close_BANG_.call(null,out);
var state_12997__$1 = (function (){var statearr_13033 = state_12997;
(statearr_13033[(13)] = inst_12990);

return statearr_13033;
})();
var statearr_13034_13122 = state_12997__$1;
(statearr_13034_13122[(2)] = inst_12991);

(statearr_13034_13122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (10))){
var inst_12981 = (state_12997[(2)]);
var state_12997__$1 = state_12997;
var statearr_13037_13124 = state_12997__$1;
(statearr_13037_13124[(2)] = inst_12981);

(statearr_13037_13124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12998 === (8))){
var inst_12960 = (state_12997[(7)]);
var inst_12969 = (state_12997[(11)]);
var tmp13032 = inst_12960;
var inst_12960__$1 = tmp13032;
var inst_12961 = inst_12969;
var state_12997__$1 = (function (){var statearr_13040 = state_12997;
(statearr_13040[(7)] = inst_12960__$1);

(statearr_13040[(8)] = inst_12961);

return statearr_13040;
})();
var statearr_13041_13125 = state_12997__$1;
(statearr_13041_13125[(2)] = null);

(statearr_13041_13125[(1)] = (2));


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
var cljs$core$async$state_machine__10315__auto__ = null;
var cljs$core$async$state_machine__10315__auto____0 = (function (){
var statearr_13043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13043[(0)] = cljs$core$async$state_machine__10315__auto__);

(statearr_13043[(1)] = (1));

return statearr_13043;
});
var cljs$core$async$state_machine__10315__auto____1 = (function (state_12997){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_12997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e13044){var ex__10318__auto__ = e13044;
var statearr_13045_13134 = state_12997;
(statearr_13045_13134[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_12997[(4)]))){
var statearr_13046_13135 = state_12997;
(statearr_13046_13135[(1)] = cljs.core.first.call(null,(state_12997[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13138 = state_12997;
state_12997 = G__13138;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$state_machine__10315__auto__ = function(state_12997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10315__auto____1.call(this,state_12997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10315__auto____0;
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10315__auto____1;
return cljs$core$async$state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_13049 = f__10406__auto__.call(null);
(statearr_13049[(6)] = c__10405__auto___13056);

return statearr_13049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13053 = arguments.length;
switch (G__13053) {
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
var c__10405__auto___13199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10406__auto__ = (function (){var switch__10314__auto__ = (function (state_13117){
var state_val_13119 = (state_13117[(1)]);
if((state_val_13119 === (7))){
var inst_13111 = (state_13117[(2)]);
var state_13117__$1 = state_13117;
var statearr_13126_13200 = state_13117__$1;
(statearr_13126_13200[(2)] = inst_13111);

(statearr_13126_13200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (1))){
var inst_13060 = [];
var inst_13061 = inst_13060;
var inst_13062 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13117__$1 = (function (){var statearr_13130 = state_13117;
(statearr_13130[(7)] = inst_13061);

(statearr_13130[(8)] = inst_13062);

return statearr_13130;
})();
var statearr_13133_13203 = state_13117__$1;
(statearr_13133_13203[(2)] = null);

(statearr_13133_13203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (4))){
var inst_13068 = (state_13117[(9)]);
var inst_13068__$1 = (state_13117[(2)]);
var inst_13069 = (inst_13068__$1 == null);
var inst_13070 = cljs.core.not.call(null,inst_13069);
var state_13117__$1 = (function (){var statearr_13137 = state_13117;
(statearr_13137[(9)] = inst_13068__$1);

return statearr_13137;
})();
if(inst_13070){
var statearr_13139_13206 = state_13117__$1;
(statearr_13139_13206[(1)] = (5));

} else {
var statearr_13140_13207 = state_13117__$1;
(statearr_13140_13207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (15))){
var inst_13061 = (state_13117[(7)]);
var inst_13103 = cljs.core.vec.call(null,inst_13061);
var state_13117__$1 = state_13117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13117__$1,(18),out,inst_13103);
} else {
if((state_val_13119 === (13))){
var inst_13097 = (state_13117[(2)]);
var state_13117__$1 = state_13117;
var statearr_13145_13209 = state_13117__$1;
(statearr_13145_13209[(2)] = inst_13097);

(statearr_13145_13209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (6))){
var inst_13061 = (state_13117[(7)]);
var inst_13100 = inst_13061.length;
var inst_13101 = (inst_13100 > (0));
var state_13117__$1 = state_13117;
if(cljs.core.truth_(inst_13101)){
var statearr_13148_13210 = state_13117__$1;
(statearr_13148_13210[(1)] = (15));

} else {
var statearr_13150_13211 = state_13117__$1;
(statearr_13150_13211[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (17))){
var inst_13108 = (state_13117[(2)]);
var inst_13109 = cljs.core.async.close_BANG_.call(null,out);
var state_13117__$1 = (function (){var statearr_13151 = state_13117;
(statearr_13151[(10)] = inst_13108);

return statearr_13151;
})();
var statearr_13152_13212 = state_13117__$1;
(statearr_13152_13212[(2)] = inst_13109);

(statearr_13152_13212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (3))){
var inst_13113 = (state_13117[(2)]);
var state_13117__$1 = state_13117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13117__$1,inst_13113);
} else {
if((state_val_13119 === (12))){
var inst_13061 = (state_13117[(7)]);
var inst_13088 = cljs.core.vec.call(null,inst_13061);
var state_13117__$1 = state_13117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13117__$1,(14),out,inst_13088);
} else {
if((state_val_13119 === (2))){
var state_13117__$1 = state_13117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13117__$1,(4),ch);
} else {
if((state_val_13119 === (11))){
var inst_13061 = (state_13117[(7)]);
var inst_13068 = (state_13117[(9)]);
var inst_13074 = (state_13117[(11)]);
var inst_13085 = inst_13061.push(inst_13068);
var tmp13155 = inst_13061;
var inst_13061__$1 = tmp13155;
var inst_13062 = inst_13074;
var state_13117__$1 = (function (){var statearr_13162 = state_13117;
(statearr_13162[(12)] = inst_13085);

(statearr_13162[(7)] = inst_13061__$1);

(statearr_13162[(8)] = inst_13062);

return statearr_13162;
})();
var statearr_13163_13213 = state_13117__$1;
(statearr_13163_13213[(2)] = null);

(statearr_13163_13213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (9))){
var inst_13062 = (state_13117[(8)]);
var inst_13081 = cljs.core.keyword_identical_QMARK_.call(null,inst_13062,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_13117__$1 = state_13117;
var statearr_13165_13215 = state_13117__$1;
(statearr_13165_13215[(2)] = inst_13081);

(statearr_13165_13215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (5))){
var inst_13068 = (state_13117[(9)]);
var inst_13074 = (state_13117[(11)]);
var inst_13062 = (state_13117[(8)]);
var inst_13077 = (state_13117[(13)]);
var inst_13074__$1 = f.call(null,inst_13068);
var inst_13077__$1 = cljs.core._EQ_.call(null,inst_13074__$1,inst_13062);
var state_13117__$1 = (function (){var statearr_13167 = state_13117;
(statearr_13167[(11)] = inst_13074__$1);

(statearr_13167[(13)] = inst_13077__$1);

return statearr_13167;
})();
if(inst_13077__$1){
var statearr_13168_13216 = state_13117__$1;
(statearr_13168_13216[(1)] = (8));

} else {
var statearr_13169_13217 = state_13117__$1;
(statearr_13169_13217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (14))){
var inst_13068 = (state_13117[(9)]);
var inst_13074 = (state_13117[(11)]);
var inst_13090 = (state_13117[(2)]);
var inst_13092 = [];
var inst_13093 = inst_13092.push(inst_13068);
var inst_13061 = inst_13092;
var inst_13062 = inst_13074;
var state_13117__$1 = (function (){var statearr_13173 = state_13117;
(statearr_13173[(14)] = inst_13090);

(statearr_13173[(15)] = inst_13093);

(statearr_13173[(7)] = inst_13061);

(statearr_13173[(8)] = inst_13062);

return statearr_13173;
})();
var statearr_13174_13218 = state_13117__$1;
(statearr_13174_13218[(2)] = null);

(statearr_13174_13218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (16))){
var state_13117__$1 = state_13117;
var statearr_13176_13219 = state_13117__$1;
(statearr_13176_13219[(2)] = null);

(statearr_13176_13219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (10))){
var inst_13083 = (state_13117[(2)]);
var state_13117__$1 = state_13117;
if(cljs.core.truth_(inst_13083)){
var statearr_13177_13220 = state_13117__$1;
(statearr_13177_13220[(1)] = (11));

} else {
var statearr_13178_13222 = state_13117__$1;
(statearr_13178_13222[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (18))){
var inst_13105 = (state_13117[(2)]);
var state_13117__$1 = state_13117;
var statearr_13179_13225 = state_13117__$1;
(statearr_13179_13225[(2)] = inst_13105);

(statearr_13179_13225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13119 === (8))){
var inst_13077 = (state_13117[(13)]);
var state_13117__$1 = state_13117;
var statearr_13180_13227 = state_13117__$1;
(statearr_13180_13227[(2)] = inst_13077);

(statearr_13180_13227[(1)] = (10));


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
var cljs$core$async$state_machine__10315__auto__ = null;
var cljs$core$async$state_machine__10315__auto____0 = (function (){
var statearr_13181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13181[(0)] = cljs$core$async$state_machine__10315__auto__);

(statearr_13181[(1)] = (1));

return statearr_13181;
});
var cljs$core$async$state_machine__10315__auto____1 = (function (state_13117){
while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_13117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10317__auto__;
}
break;
}
}catch (e13182){var ex__10318__auto__ = e13182;
var statearr_13183_13234 = state_13117;
(statearr_13183_13234[(2)] = ex__10318__auto__);


if(cljs.core.seq.call(null,(state_13117[(4)]))){
var statearr_13184_13235 = state_13117;
(statearr_13184_13235[(1)] = cljs.core.first.call(null,(state_13117[(4)])));

} else {
throw ex__10318__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13237 = state_13117;
state_13117 = G__13237;
continue;
} else {
return ret_value__10316__auto__;
}
break;
}
});
cljs$core$async$state_machine__10315__auto__ = function(state_13117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10315__auto____1.call(this,state_13117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10315__auto____0;
cljs$core$async$state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10315__auto____1;
return cljs$core$async$state_machine__10315__auto__;
})()
})();
var state__10407__auto__ = (function (){var statearr_13185 = f__10406__auto__.call(null);
(statearr_13185[(6)] = c__10405__auto___13199);

return statearr_13185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10407__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
