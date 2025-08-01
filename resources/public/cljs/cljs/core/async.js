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
var G__10502 = arguments.length;
switch (G__10502) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10503 = (function (f,blockable,meta10504){
this.f = f;
this.blockable = blockable;
this.meta10504 = meta10504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10505,meta10504__$1){
var self__ = this;
var _10505__$1 = this;
return (new cljs.core.async.t_cljs$core$async10503(self__.f,self__.blockable,meta10504__$1));
}));

(cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10505){
var self__ = this;
var _10505__$1 = this;
return self__.meta10504;
}));

(cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10504","meta10504",2598305,null)], null);
}));

(cljs.core.async.t_cljs$core$async10503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10503");

(cljs.core.async.t_cljs$core$async10503.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async10503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10503.
 */
cljs.core.async.__GT_t_cljs$core$async10503 = (function cljs$core$async$__GT_t_cljs$core$async10503(f__$1,blockable__$1,meta10504){
return (new cljs.core.async.t_cljs$core$async10503(f__$1,blockable__$1,meta10504));
});

}

return (new cljs.core.async.t_cljs$core$async10503(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10516 = arguments.length;
switch (G__10516) {
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
var G__10520 = arguments.length;
switch (G__10520) {
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
var G__10525 = arguments.length;
switch (G__10525) {
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
var val_10540 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10540);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_10540);
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
var G__10532 = arguments.length;
switch (G__10532) {
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
var n__5616__auto___10558 = n;
var x_10559 = (0);
while(true){
if((x_10559 < n__5616__auto___10558)){
(a[x_10559] = x_10559);

var G__10560 = (x_10559 + (1));
x_10559 = G__10560;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10552 = (function (flag,meta10553){
this.flag = flag;
this.meta10553 = meta10553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10554,meta10553__$1){
var self__ = this;
var _10554__$1 = this;
return (new cljs.core.async.t_cljs$core$async10552(self__.flag,meta10553__$1));
}));

(cljs.core.async.t_cljs$core$async10552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10554){
var self__ = this;
var _10554__$1 = this;
return self__.meta10553;
}));

(cljs.core.async.t_cljs$core$async10552.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10552.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async10552.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10552.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10553","meta10553",-2045540101,null)], null);
}));

(cljs.core.async.t_cljs$core$async10552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10552");

(cljs.core.async.t_cljs$core$async10552.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async10552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10552.
 */
cljs.core.async.__GT_t_cljs$core$async10552 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10552(flag__$1,meta10553){
return (new cljs.core.async.t_cljs$core$async10552(flag__$1,meta10553));
});

}

return (new cljs.core.async.t_cljs$core$async10552(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10564 = (function (flag,cb,meta10565){
this.flag = flag;
this.cb = cb;
this.meta10565 = meta10565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10566,meta10565__$1){
var self__ = this;
var _10566__$1 = this;
return (new cljs.core.async.t_cljs$core$async10564(self__.flag,self__.cb,meta10565__$1));
}));

(cljs.core.async.t_cljs$core$async10564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10566){
var self__ = this;
var _10566__$1 = this;
return self__.meta10565;
}));

(cljs.core.async.t_cljs$core$async10564.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async10564.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async10564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10565","meta10565",1393418064,null)], null);
}));

(cljs.core.async.t_cljs$core$async10564.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10564");

(cljs.core.async.t_cljs$core$async10564.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async10564");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10564.
 */
cljs.core.async.__GT_t_cljs$core$async10564 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10564(flag__$1,cb__$1,meta10565){
return (new cljs.core.async.t_cljs$core$async10564(flag__$1,cb__$1,meta10565));
});

}

return (new cljs.core.async.t_cljs$core$async10564(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10575_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10575_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__10577_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10577_SHARP_,port], null));
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
var G__10617 = (i + (1));
i = G__10617;
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
var len__5749__auto___10620 = arguments.length;
var i__5750__auto___10621 = (0);
while(true){
if((i__5750__auto___10621 < len__5749__auto___10620)){
args__5755__auto__.push((arguments[i__5750__auto___10621]));

var G__10622 = (i__5750__auto___10621 + (1));
i__5750__auto___10621 = G__10622;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10608){
var map__10612 = p__10608;
var map__10612__$1 = cljs.core.__destructure_map.call(null,map__10612);
var opts = map__10612__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10604){
var G__10605 = cljs.core.first.call(null,seq10604);
var seq10604__$1 = cljs.core.next.call(null,seq10604);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10605,seq10604__$1);
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
var G__10619 = arguments.length;
switch (G__10619) {
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
var c__10429__auto___10721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_10666){
var state_val_10667 = (state_10666[(1)]);
if((state_val_10667 === (7))){
var inst_10656 = (state_10666[(2)]);
var state_10666__$1 = state_10666;
var statearr_10674_10722 = state_10666__$1;
(statearr_10674_10722[(2)] = inst_10656);

(statearr_10674_10722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (1))){
var state_10666__$1 = state_10666;
var statearr_10675_10723 = state_10666__$1;
(statearr_10675_10723[(2)] = null);

(statearr_10675_10723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (4))){
var inst_10637 = (state_10666[(7)]);
var inst_10637__$1 = (state_10666[(2)]);
var inst_10638 = (inst_10637__$1 == null);
var state_10666__$1 = (function (){var statearr_10678 = state_10666;
(statearr_10678[(7)] = inst_10637__$1);

return statearr_10678;
})();
if(cljs.core.truth_(inst_10638)){
var statearr_10679_10921 = state_10666__$1;
(statearr_10679_10921[(1)] = (5));

} else {
var statearr_10680_10922 = state_10666__$1;
(statearr_10680_10922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (13))){
var state_10666__$1 = state_10666;
var statearr_10685_10923 = state_10666__$1;
(statearr_10685_10923[(2)] = null);

(statearr_10685_10923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (6))){
var inst_10637 = (state_10666[(7)]);
var state_10666__$1 = state_10666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10666__$1,(11),to,inst_10637);
} else {
if((state_val_10667 === (3))){
var inst_10658 = (state_10666[(2)]);
var state_10666__$1 = state_10666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10666__$1,inst_10658);
} else {
if((state_val_10667 === (12))){
var state_10666__$1 = state_10666;
var statearr_10689_10926 = state_10666__$1;
(statearr_10689_10926[(2)] = null);

(statearr_10689_10926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (2))){
var state_10666__$1 = state_10666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10666__$1,(4),from);
} else {
if((state_val_10667 === (11))){
var inst_10649 = (state_10666[(2)]);
var state_10666__$1 = state_10666;
if(cljs.core.truth_(inst_10649)){
var statearr_10690_10932 = state_10666__$1;
(statearr_10690_10932[(1)] = (12));

} else {
var statearr_10691_10933 = state_10666__$1;
(statearr_10691_10933[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (9))){
var state_10666__$1 = state_10666;
var statearr_10692_10934 = state_10666__$1;
(statearr_10692_10934[(2)] = null);

(statearr_10692_10934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (5))){
var state_10666__$1 = state_10666;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10693_10937 = state_10666__$1;
(statearr_10693_10937[(1)] = (8));

} else {
var statearr_10694_10938 = state_10666__$1;
(statearr_10694_10938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (14))){
var inst_10654 = (state_10666[(2)]);
var state_10666__$1 = state_10666;
var statearr_10695_10940 = state_10666__$1;
(statearr_10695_10940[(2)] = inst_10654);

(statearr_10695_10940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (10))){
var inst_10646 = (state_10666[(2)]);
var state_10666__$1 = state_10666;
var statearr_10696_10941 = state_10666__$1;
(statearr_10696_10941[(2)] = inst_10646);

(statearr_10696_10941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10667 === (8))){
var inst_10642 = cljs.core.async.close_BANG_.call(null,to);
var state_10666__$1 = state_10666;
var statearr_10697_10943 = state_10666__$1;
(statearr_10697_10943[(2)] = inst_10642);

(statearr_10697_10943[(1)] = (10));


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
var cljs$core$async$state_machine__10264__auto__ = null;
var cljs$core$async$state_machine__10264__auto____0 = (function (){
var statearr_10699 = [null,null,null,null,null,null,null,null];
(statearr_10699[(0)] = cljs$core$async$state_machine__10264__auto__);

(statearr_10699[(1)] = (1));

return statearr_10699;
});
var cljs$core$async$state_machine__10264__auto____1 = (function (state_10666){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_10666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e10702){var ex__10267__auto__ = e10702;
var statearr_10703_10947 = state_10666;
(statearr_10703_10947[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_10666[(4)]))){
var statearr_10706_10950 = state_10666;
(statearr_10706_10950[(1)] = cljs.core.first.call(null,(state_10666[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10951 = state_10666;
state_10666 = G__10951;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$state_machine__10264__auto__ = function(state_10666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10264__auto____1.call(this,state_10666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10264__auto____0;
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10264__auto____1;
return cljs$core$async$state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_10707 = f__10430__auto__.call(null);
(statearr_10707[(6)] = c__10429__auto___10721);

return statearr_10707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
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
var process__$1 = (function (p__10710){
var vec__10711 = p__10710;
var v = cljs.core.nth.call(null,vec__10711,(0),null);
var p = cljs.core.nth.call(null,vec__10711,(1),null);
var job = vec__10711;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10429__auto___10983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_10719){
var state_val_10720 = (state_10719[(1)]);
if((state_val_10720 === (1))){
var state_10719__$1 = state_10719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10719__$1,(2),res,v);
} else {
if((state_val_10720 === (2))){
var inst_10716 = (state_10719[(2)]);
var inst_10717 = cljs.core.async.close_BANG_.call(null,res);
var state_10719__$1 = (function (){var statearr_10724 = state_10719;
(statearr_10724[(7)] = inst_10716);

return statearr_10724;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10719__$1,inst_10717);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____0 = (function (){
var statearr_10725 = [null,null,null,null,null,null,null,null];
(statearr_10725[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__);

(statearr_10725[(1)] = (1));

return statearr_10725;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____1 = (function (state_10719){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_10719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e10726){var ex__10267__auto__ = e10726;
var statearr_10727_10990 = state_10719;
(statearr_10727_10990[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_10719[(4)]))){
var statearr_10729_10991 = state_10719;
(statearr_10729_10991[(1)] = cljs.core.first.call(null,(state_10719[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10994 = state_10719;
state_10719 = G__10994;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__ = function(state_10719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____1.call(this,state_10719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_10731 = f__10430__auto__.call(null);
(statearr_10731[(6)] = c__10429__auto___10983);

return statearr_10731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__10738){
var vec__10739 = p__10738;
var v = cljs.core.nth.call(null,vec__10739,(0),null);
var p = cljs.core.nth.call(null,vec__10739,(1),null);
var job = vec__10739;
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
var n__5616__auto___11000 = n;
var __11001 = (0);
while(true){
if((__11001 < n__5616__auto___11000)){
var G__10743_11002 = type;
var G__10743_11003__$1 = (((G__10743_11002 instanceof cljs.core.Keyword))?G__10743_11002.fqn:null);
switch (G__10743_11003__$1) {
case "compute":
var c__10429__auto___11006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11001,c__10429__auto___11006,G__10743_11002,G__10743_11003__$1,n__5616__auto___11000,jobs,results,process__$1,async){
return (function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = ((function (__11001,c__10429__auto___11006,G__10743_11002,G__10743_11003__$1,n__5616__auto___11000,jobs,results,process__$1,async){
return (function (state_10761){
var state_val_10762 = (state_10761[(1)]);
if((state_val_10762 === (1))){
var state_10761__$1 = state_10761;
var statearr_10763_11011 = state_10761__$1;
(statearr_10763_11011[(2)] = null);

(statearr_10763_11011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10762 === (2))){
var state_10761__$1 = state_10761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10761__$1,(4),jobs);
} else {
if((state_val_10762 === (3))){
var inst_10759 = (state_10761[(2)]);
var state_10761__$1 = state_10761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10761__$1,inst_10759);
} else {
if((state_val_10762 === (4))){
var inst_10747 = (state_10761[(2)]);
var inst_10751 = process__$1.call(null,inst_10747);
var state_10761__$1 = state_10761;
if(cljs.core.truth_(inst_10751)){
var statearr_10764_11012 = state_10761__$1;
(statearr_10764_11012[(1)] = (5));

} else {
var statearr_10765_11013 = state_10761__$1;
(statearr_10765_11013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10762 === (5))){
var state_10761__$1 = state_10761;
var statearr_10766_11019 = state_10761__$1;
(statearr_10766_11019[(2)] = null);

(statearr_10766_11019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10762 === (6))){
var state_10761__$1 = state_10761;
var statearr_10767_11028 = state_10761__$1;
(statearr_10767_11028[(2)] = null);

(statearr_10767_11028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10762 === (7))){
var inst_10757 = (state_10761[(2)]);
var state_10761__$1 = state_10761;
var statearr_10768_11047 = state_10761__$1;
(statearr_10768_11047[(2)] = inst_10757);

(statearr_10768_11047[(1)] = (3));


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
});})(__11001,c__10429__auto___11006,G__10743_11002,G__10743_11003__$1,n__5616__auto___11000,jobs,results,process__$1,async))
;
return ((function (__11001,switch__10263__auto__,c__10429__auto___11006,G__10743_11002,G__10743_11003__$1,n__5616__auto___11000,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____0 = (function (){
var statearr_10772 = [null,null,null,null,null,null,null];
(statearr_10772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__);

(statearr_10772[(1)] = (1));

return statearr_10772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____1 = (function (state_10761){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_10761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e10774){var ex__10267__auto__ = e10774;
var statearr_10775_11051 = state_10761;
(statearr_10775_11051[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_10761[(4)]))){
var statearr_10776_11052 = state_10761;
(statearr_10776_11052[(1)] = cljs.core.first.call(null,(state_10761[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11054 = state_10761;
state_10761 = G__11054;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__ = function(state_10761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____1.call(this,state_10761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__;
})()
;})(__11001,switch__10263__auto__,c__10429__auto___11006,G__10743_11002,G__10743_11003__$1,n__5616__auto___11000,jobs,results,process__$1,async))
})();
var state__10431__auto__ = (function (){var statearr_10777 = f__10430__auto__.call(null);
(statearr_10777[(6)] = c__10429__auto___11006);

return statearr_10777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
});})(__11001,c__10429__auto___11006,G__10743_11002,G__10743_11003__$1,n__5616__auto___11000,jobs,results,process__$1,async))
);


break;
case "async":
var c__10429__auto___11057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11001,c__10429__auto___11057,G__10743_11002,G__10743_11003__$1,n__5616__auto___11000,jobs,results,process__$1,async){
return (function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = ((function (__11001,c__10429__auto___11057,G__10743_11002,G__10743_11003__$1,n__5616__auto___11000,jobs,results,process__$1,async){
return (function (state_10790){
var state_val_10791 = (state_10790[(1)]);
if((state_val_10791 === (1))){
var state_10790__$1 = state_10790;
var statearr_10794_11060 = state_10790__$1;
(statearr_10794_11060[(2)] = null);

(statearr_10794_11060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10791 === (2))){
var state_10790__$1 = state_10790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10790__$1,(4),jobs);
} else {
if((state_val_10791 === (3))){
var inst_10788 = (state_10790[(2)]);
var state_10790__$1 = state_10790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10790__$1,inst_10788);
} else {
if((state_val_10791 === (4))){
var inst_10780 = (state_10790[(2)]);
var inst_10781 = async.call(null,inst_10780);
var state_10790__$1 = state_10790;
if(cljs.core.truth_(inst_10781)){
var statearr_10795_11069 = state_10790__$1;
(statearr_10795_11069[(1)] = (5));

} else {
var statearr_10796_11071 = state_10790__$1;
(statearr_10796_11071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10791 === (5))){
var state_10790__$1 = state_10790;
var statearr_10797_11072 = state_10790__$1;
(statearr_10797_11072[(2)] = null);

(statearr_10797_11072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10791 === (6))){
var state_10790__$1 = state_10790;
var statearr_10798_11074 = state_10790__$1;
(statearr_10798_11074[(2)] = null);

(statearr_10798_11074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10791 === (7))){
var inst_10786 = (state_10790[(2)]);
var state_10790__$1 = state_10790;
var statearr_10799_11075 = state_10790__$1;
(statearr_10799_11075[(2)] = inst_10786);

(statearr_10799_11075[(1)] = (3));


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
});})(__11001,c__10429__auto___11057,G__10743_11002,G__10743_11003__$1,n__5616__auto___11000,jobs,results,process__$1,async))
;
return ((function (__11001,switch__10263__auto__,c__10429__auto___11057,G__10743_11002,G__10743_11003__$1,n__5616__auto___11000,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____0 = (function (){
var statearr_10800 = [null,null,null,null,null,null,null];
(statearr_10800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__);

(statearr_10800[(1)] = (1));

return statearr_10800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____1 = (function (state_10790){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_10790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e10803){var ex__10267__auto__ = e10803;
var statearr_10804_11081 = state_10790;
(statearr_10804_11081[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_10790[(4)]))){
var statearr_10805_11082 = state_10790;
(statearr_10805_11082[(1)] = cljs.core.first.call(null,(state_10790[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11088 = state_10790;
state_10790 = G__11088;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__ = function(state_10790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____1.call(this,state_10790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__;
})()
;})(__11001,switch__10263__auto__,c__10429__auto___11057,G__10743_11002,G__10743_11003__$1,n__5616__auto___11000,jobs,results,process__$1,async))
})();
var state__10431__auto__ = (function (){var statearr_10806 = f__10430__auto__.call(null);
(statearr_10806[(6)] = c__10429__auto___11057);

return statearr_10806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
});})(__11001,c__10429__auto___11057,G__10743_11002,G__10743_11003__$1,n__5616__auto___11000,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10743_11003__$1)].join('')));

}

var G__11090 = (__11001 + (1));
__11001 = G__11090;
continue;
} else {
}
break;
}

var c__10429__auto___11092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_10835){
var state_val_10836 = (state_10835[(1)]);
if((state_val_10836 === (7))){
var inst_10829 = (state_10835[(2)]);
var state_10835__$1 = state_10835;
var statearr_10837_11103 = state_10835__$1;
(statearr_10837_11103[(2)] = inst_10829);

(statearr_10837_11103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (1))){
var state_10835__$1 = state_10835;
var statearr_10840_11110 = state_10835__$1;
(statearr_10840_11110[(2)] = null);

(statearr_10840_11110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (4))){
var inst_10814 = (state_10835[(7)]);
var inst_10814__$1 = (state_10835[(2)]);
var inst_10815 = (inst_10814__$1 == null);
var state_10835__$1 = (function (){var statearr_10841 = state_10835;
(statearr_10841[(7)] = inst_10814__$1);

return statearr_10841;
})();
if(cljs.core.truth_(inst_10815)){
var statearr_10844_11111 = state_10835__$1;
(statearr_10844_11111[(1)] = (5));

} else {
var statearr_10845_11113 = state_10835__$1;
(statearr_10845_11113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (6))){
var inst_10814 = (state_10835[(7)]);
var inst_10819 = (state_10835[(8)]);
var inst_10819__$1 = cljs.core.async.chan.call(null,(1));
var inst_10820 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10821 = [inst_10814,inst_10819__$1];
var inst_10822 = (new cljs.core.PersistentVector(null,2,(5),inst_10820,inst_10821,null));
var state_10835__$1 = (function (){var statearr_10849 = state_10835;
(statearr_10849[(8)] = inst_10819__$1);

return statearr_10849;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10835__$1,(8),jobs,inst_10822);
} else {
if((state_val_10836 === (3))){
var inst_10831 = (state_10835[(2)]);
var state_10835__$1 = state_10835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10835__$1,inst_10831);
} else {
if((state_val_10836 === (2))){
var state_10835__$1 = state_10835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10835__$1,(4),from);
} else {
if((state_val_10836 === (9))){
var inst_10826 = (state_10835[(2)]);
var state_10835__$1 = (function (){var statearr_10852 = state_10835;
(statearr_10852[(9)] = inst_10826);

return statearr_10852;
})();
var statearr_10854_11117 = state_10835__$1;
(statearr_10854_11117[(2)] = null);

(statearr_10854_11117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (5))){
var inst_10817 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10835__$1 = state_10835;
var statearr_10861_11119 = state_10835__$1;
(statearr_10861_11119[(2)] = inst_10817);

(statearr_10861_11119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10836 === (8))){
var inst_10819 = (state_10835[(8)]);
var inst_10824 = (state_10835[(2)]);
var state_10835__$1 = (function (){var statearr_10866 = state_10835;
(statearr_10866[(10)] = inst_10824);

return statearr_10866;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10835__$1,(9),results,inst_10819);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____0 = (function (){
var statearr_10867 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__);

(statearr_10867[(1)] = (1));

return statearr_10867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____1 = (function (state_10835){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_10835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e10869){var ex__10267__auto__ = e10869;
var statearr_10871_11123 = state_10835;
(statearr_10871_11123[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_10835[(4)]))){
var statearr_10872_11126 = state_10835;
(statearr_10872_11126[(1)] = cljs.core.first.call(null,(state_10835[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11134 = state_10835;
state_10835 = G__11134;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__ = function(state_10835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____1.call(this,state_10835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_10876 = f__10430__auto__.call(null);
(statearr_10876[(6)] = c__10429__auto___11092);

return statearr_10876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
}));


var c__10429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_10919){
var state_val_10920 = (state_10919[(1)]);
if((state_val_10920 === (7))){
var inst_10915 = (state_10919[(2)]);
var state_10919__$1 = state_10919;
var statearr_10924_11148 = state_10919__$1;
(statearr_10924_11148[(2)] = inst_10915);

(statearr_10924_11148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (20))){
var state_10919__$1 = state_10919;
var statearr_10925_11149 = state_10919__$1;
(statearr_10925_11149[(2)] = null);

(statearr_10925_11149[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (1))){
var state_10919__$1 = state_10919;
var statearr_10929_11152 = state_10919__$1;
(statearr_10929_11152[(2)] = null);

(statearr_10929_11152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (4))){
var inst_10880 = (state_10919[(7)]);
var inst_10880__$1 = (state_10919[(2)]);
var inst_10881 = (inst_10880__$1 == null);
var state_10919__$1 = (function (){var statearr_10935 = state_10919;
(statearr_10935[(7)] = inst_10880__$1);

return statearr_10935;
})();
if(cljs.core.truth_(inst_10881)){
var statearr_10936_11155 = state_10919__$1;
(statearr_10936_11155[(1)] = (5));

} else {
var statearr_10939_11156 = state_10919__$1;
(statearr_10939_11156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (15))){
var inst_10894 = (state_10919[(8)]);
var state_10919__$1 = state_10919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10919__$1,(18),to,inst_10894);
} else {
if((state_val_10920 === (21))){
var inst_10910 = (state_10919[(2)]);
var state_10919__$1 = state_10919;
var statearr_10942_11159 = state_10919__$1;
(statearr_10942_11159[(2)] = inst_10910);

(statearr_10942_11159[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (13))){
var inst_10912 = (state_10919[(2)]);
var state_10919__$1 = (function (){var statearr_10944 = state_10919;
(statearr_10944[(9)] = inst_10912);

return statearr_10944;
})();
var statearr_10945_11162 = state_10919__$1;
(statearr_10945_11162[(2)] = null);

(statearr_10945_11162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (6))){
var inst_10880 = (state_10919[(7)]);
var state_10919__$1 = state_10919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10919__$1,(11),inst_10880);
} else {
if((state_val_10920 === (17))){
var inst_10904 = (state_10919[(2)]);
var state_10919__$1 = state_10919;
if(cljs.core.truth_(inst_10904)){
var statearr_10946_11164 = state_10919__$1;
(statearr_10946_11164[(1)] = (19));

} else {
var statearr_10948_11165 = state_10919__$1;
(statearr_10948_11165[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (3))){
var inst_10917 = (state_10919[(2)]);
var state_10919__$1 = state_10919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10919__$1,inst_10917);
} else {
if((state_val_10920 === (12))){
var inst_10890 = (state_10919[(10)]);
var state_10919__$1 = state_10919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10919__$1,(14),inst_10890);
} else {
if((state_val_10920 === (2))){
var state_10919__$1 = state_10919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10919__$1,(4),results);
} else {
if((state_val_10920 === (19))){
var state_10919__$1 = state_10919;
var statearr_10952_11170 = state_10919__$1;
(statearr_10952_11170[(2)] = null);

(statearr_10952_11170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (11))){
var inst_10890 = (state_10919[(2)]);
var state_10919__$1 = (function (){var statearr_10953 = state_10919;
(statearr_10953[(10)] = inst_10890);

return statearr_10953;
})();
var statearr_10955_11176 = state_10919__$1;
(statearr_10955_11176[(2)] = null);

(statearr_10955_11176[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (9))){
var state_10919__$1 = state_10919;
var statearr_10957_11179 = state_10919__$1;
(statearr_10957_11179[(2)] = null);

(statearr_10957_11179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (5))){
var state_10919__$1 = state_10919;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10959_11183 = state_10919__$1;
(statearr_10959_11183[(1)] = (8));

} else {
var statearr_10960_11185 = state_10919__$1;
(statearr_10960_11185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (14))){
var inst_10894 = (state_10919[(8)]);
var inst_10897 = (state_10919[(11)]);
var inst_10894__$1 = (state_10919[(2)]);
var inst_10896 = (inst_10894__$1 == null);
var inst_10897__$1 = cljs.core.not.call(null,inst_10896);
var state_10919__$1 = (function (){var statearr_10961 = state_10919;
(statearr_10961[(8)] = inst_10894__$1);

(statearr_10961[(11)] = inst_10897__$1);

return statearr_10961;
})();
if(inst_10897__$1){
var statearr_10964_11189 = state_10919__$1;
(statearr_10964_11189[(1)] = (15));

} else {
var statearr_10965_11190 = state_10919__$1;
(statearr_10965_11190[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (16))){
var inst_10897 = (state_10919[(11)]);
var state_10919__$1 = state_10919;
var statearr_10966_11192 = state_10919__$1;
(statearr_10966_11192[(2)] = inst_10897);

(statearr_10966_11192[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (10))){
var inst_10887 = (state_10919[(2)]);
var state_10919__$1 = state_10919;
var statearr_10967_11196 = state_10919__$1;
(statearr_10967_11196[(2)] = inst_10887);

(statearr_10967_11196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (18))){
var inst_10901 = (state_10919[(2)]);
var state_10919__$1 = state_10919;
var statearr_10968_11199 = state_10919__$1;
(statearr_10968_11199[(2)] = inst_10901);

(statearr_10968_11199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10920 === (8))){
var inst_10884 = cljs.core.async.close_BANG_.call(null,to);
var state_10919__$1 = state_10919;
var statearr_10969_11200 = state_10919__$1;
(statearr_10969_11200[(2)] = inst_10884);

(statearr_10969_11200[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____0 = (function (){
var statearr_10971 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__);

(statearr_10971[(1)] = (1));

return statearr_10971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____1 = (function (state_10919){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_10919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e10972){var ex__10267__auto__ = e10972;
var statearr_10973_11204 = state_10919;
(statearr_10973_11204[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_10919[(4)]))){
var statearr_10974_11206 = state_10919;
(statearr_10974_11206[(1)] = cljs.core.first.call(null,(state_10919[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11209 = state_10919;
state_10919 = G__11209;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__ = function(state_10919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____1.call(this,state_10919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10264__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_10975 = f__10430__auto__.call(null);
(statearr_10975[(6)] = c__10429__auto__);

return statearr_10975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
}));

return c__10429__auto__;
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
var G__10977 = arguments.length;
switch (G__10977) {
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
var G__10979 = arguments.length;
switch (G__10979) {
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
var G__11004 = arguments.length;
switch (G__11004) {
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
var c__10429__auto___11294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_11048){
var state_val_11049 = (state_11048[(1)]);
if((state_val_11049 === (7))){
var inst_11042 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
var statearr_11050_11300 = state_11048__$1;
(statearr_11050_11300[(2)] = inst_11042);

(statearr_11050_11300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (1))){
var state_11048__$1 = state_11048;
var statearr_11053_11319 = state_11048__$1;
(statearr_11053_11319[(2)] = null);

(statearr_11053_11319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (4))){
var inst_11016 = (state_11048[(7)]);
var inst_11016__$1 = (state_11048[(2)]);
var inst_11017 = (inst_11016__$1 == null);
var state_11048__$1 = (function (){var statearr_11056 = state_11048;
(statearr_11056[(7)] = inst_11016__$1);

return statearr_11056;
})();
if(cljs.core.truth_(inst_11017)){
var statearr_11058_11323 = state_11048__$1;
(statearr_11058_11323[(1)] = (5));

} else {
var statearr_11059_11324 = state_11048__$1;
(statearr_11059_11324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (13))){
var state_11048__$1 = state_11048;
var statearr_11061_11327 = state_11048__$1;
(statearr_11061_11327[(2)] = null);

(statearr_11061_11327[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (6))){
var inst_11016 = (state_11048[(7)]);
var inst_11024 = p.call(null,inst_11016);
var state_11048__$1 = state_11048;
if(cljs.core.truth_(inst_11024)){
var statearr_11065_11329 = state_11048__$1;
(statearr_11065_11329[(1)] = (9));

} else {
var statearr_11068_11330 = state_11048__$1;
(statearr_11068_11330[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (3))){
var inst_11044 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11048__$1,inst_11044);
} else {
if((state_val_11049 === (12))){
var state_11048__$1 = state_11048;
var statearr_11073_11333 = state_11048__$1;
(statearr_11073_11333[(2)] = null);

(statearr_11073_11333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (2))){
var state_11048__$1 = state_11048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11048__$1,(4),ch);
} else {
if((state_val_11049 === (11))){
var inst_11016 = (state_11048[(7)]);
var inst_11029 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11048__$1,(8),inst_11029,inst_11016);
} else {
if((state_val_11049 === (9))){
var state_11048__$1 = state_11048;
var statearr_11079_11335 = state_11048__$1;
(statearr_11079_11335[(2)] = tc);

(statearr_11079_11335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (5))){
var inst_11020 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11021 = cljs.core.async.close_BANG_.call(null,fc);
var state_11048__$1 = (function (){var statearr_11083 = state_11048;
(statearr_11083[(8)] = inst_11020);

return statearr_11083;
})();
var statearr_11086_11344 = state_11048__$1;
(statearr_11086_11344[(2)] = inst_11021);

(statearr_11086_11344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (14))){
var inst_11040 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
var statearr_11089_11346 = state_11048__$1;
(statearr_11089_11346[(2)] = inst_11040);

(statearr_11089_11346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (10))){
var state_11048__$1 = state_11048;
var statearr_11093_11347 = state_11048__$1;
(statearr_11093_11347[(2)] = fc);

(statearr_11093_11347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11049 === (8))){
var inst_11032 = (state_11048[(2)]);
var state_11048__$1 = state_11048;
if(cljs.core.truth_(inst_11032)){
var statearr_11104_11349 = state_11048__$1;
(statearr_11104_11349[(1)] = (12));

} else {
var statearr_11105_11350 = state_11048__$1;
(statearr_11105_11350[(1)] = (13));

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
var cljs$core$async$state_machine__10264__auto__ = null;
var cljs$core$async$state_machine__10264__auto____0 = (function (){
var statearr_11112 = [null,null,null,null,null,null,null,null,null];
(statearr_11112[(0)] = cljs$core$async$state_machine__10264__auto__);

(statearr_11112[(1)] = (1));

return statearr_11112;
});
var cljs$core$async$state_machine__10264__auto____1 = (function (state_11048){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_11048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e11114){var ex__10267__auto__ = e11114;
var statearr_11115_11351 = state_11048;
(statearr_11115_11351[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_11048[(4)]))){
var statearr_11116_11353 = state_11048;
(statearr_11116_11353[(1)] = cljs.core.first.call(null,(state_11048[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11355 = state_11048;
state_11048 = G__11355;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$state_machine__10264__auto__ = function(state_11048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10264__auto____1.call(this,state_11048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10264__auto____0;
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10264__auto____1;
return cljs$core$async$state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_11118 = f__10430__auto__.call(null);
(statearr_11118[(6)] = c__10429__auto___11294);

return statearr_11118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
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
var c__10429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_11146){
var state_val_11147 = (state_11146[(1)]);
if((state_val_11147 === (7))){
var inst_11142 = (state_11146[(2)]);
var state_11146__$1 = state_11146;
var statearr_11151_11360 = state_11146__$1;
(statearr_11151_11360[(2)] = inst_11142);

(statearr_11151_11360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11147 === (1))){
var inst_11120 = init;
var inst_11121 = inst_11120;
var state_11146__$1 = (function (){var statearr_11153 = state_11146;
(statearr_11153[(7)] = inst_11121);

return statearr_11153;
})();
var statearr_11154_11366 = state_11146__$1;
(statearr_11154_11366[(2)] = null);

(statearr_11154_11366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11147 === (4))){
var inst_11125 = (state_11146[(8)]);
var inst_11125__$1 = (state_11146[(2)]);
var inst_11127 = (inst_11125__$1 == null);
var state_11146__$1 = (function (){var statearr_11158 = state_11146;
(statearr_11158[(8)] = inst_11125__$1);

return statearr_11158;
})();
if(cljs.core.truth_(inst_11127)){
var statearr_11160_11368 = state_11146__$1;
(statearr_11160_11368[(1)] = (5));

} else {
var statearr_11161_11369 = state_11146__$1;
(statearr_11161_11369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11147 === (6))){
var inst_11121 = (state_11146[(7)]);
var inst_11125 = (state_11146[(8)]);
var inst_11131 = (state_11146[(9)]);
var inst_11131__$1 = f.call(null,inst_11121,inst_11125);
var inst_11132 = cljs.core.reduced_QMARK_.call(null,inst_11131__$1);
var state_11146__$1 = (function (){var statearr_11163 = state_11146;
(statearr_11163[(9)] = inst_11131__$1);

return statearr_11163;
})();
if(inst_11132){
var statearr_11166_11370 = state_11146__$1;
(statearr_11166_11370[(1)] = (8));

} else {
var statearr_11167_11371 = state_11146__$1;
(statearr_11167_11371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11147 === (3))){
var inst_11144 = (state_11146[(2)]);
var state_11146__$1 = state_11146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11146__$1,inst_11144);
} else {
if((state_val_11147 === (2))){
var state_11146__$1 = state_11146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11146__$1,(4),ch);
} else {
if((state_val_11147 === (9))){
var inst_11131 = (state_11146[(9)]);
var inst_11121 = inst_11131;
var state_11146__$1 = (function (){var statearr_11174 = state_11146;
(statearr_11174[(7)] = inst_11121);

return statearr_11174;
})();
var statearr_11175_11372 = state_11146__$1;
(statearr_11175_11372[(2)] = null);

(statearr_11175_11372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11147 === (5))){
var inst_11121 = (state_11146[(7)]);
var state_11146__$1 = state_11146;
var statearr_11180_11373 = state_11146__$1;
(statearr_11180_11373[(2)] = inst_11121);

(statearr_11180_11373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11147 === (10))){
var inst_11140 = (state_11146[(2)]);
var state_11146__$1 = state_11146;
var statearr_11184_11374 = state_11146__$1;
(statearr_11184_11374[(2)] = inst_11140);

(statearr_11184_11374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11147 === (8))){
var inst_11131 = (state_11146[(9)]);
var inst_11136 = cljs.core.deref.call(null,inst_11131);
var state_11146__$1 = state_11146;
var statearr_11188_11375 = state_11146__$1;
(statearr_11188_11375[(2)] = inst_11136);

(statearr_11188_11375[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10264__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10264__auto____0 = (function (){
var statearr_11191 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11191[(0)] = cljs$core$async$reduce_$_state_machine__10264__auto__);

(statearr_11191[(1)] = (1));

return statearr_11191;
});
var cljs$core$async$reduce_$_state_machine__10264__auto____1 = (function (state_11146){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_11146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e11195){var ex__10267__auto__ = e11195;
var statearr_11197_11387 = state_11146;
(statearr_11197_11387[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_11146[(4)]))){
var statearr_11198_11390 = state_11146;
(statearr_11198_11390[(1)] = cljs.core.first.call(null,(state_11146[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11398 = state_11146;
state_11146 = G__11398;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10264__auto__ = function(state_11146){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10264__auto____1.call(this,state_11146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10264__auto____0;
cljs$core$async$reduce_$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10264__auto____1;
return cljs$core$async$reduce_$_state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_11202 = f__10430__auto__.call(null);
(statearr_11202[(6)] = c__10429__auto__);

return statearr_11202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
}));

return c__10429__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_11215){
var state_val_11216 = (state_11215[(1)]);
if((state_val_11216 === (1))){
var inst_11210 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11215__$1 = state_11215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11215__$1,(2),inst_11210);
} else {
if((state_val_11216 === (2))){
var inst_11212 = (state_11215[(2)]);
var inst_11213 = f__$1.call(null,inst_11212);
var state_11215__$1 = state_11215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11215__$1,inst_11213);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10264__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10264__auto____0 = (function (){
var statearr_11229 = [null,null,null,null,null,null,null];
(statearr_11229[(0)] = cljs$core$async$transduce_$_state_machine__10264__auto__);

(statearr_11229[(1)] = (1));

return statearr_11229;
});
var cljs$core$async$transduce_$_state_machine__10264__auto____1 = (function (state_11215){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_11215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e11235){var ex__10267__auto__ = e11235;
var statearr_11236_11405 = state_11215;
(statearr_11236_11405[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_11215[(4)]))){
var statearr_11237_11406 = state_11215;
(statearr_11237_11406[(1)] = cljs.core.first.call(null,(state_11215[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11408 = state_11215;
state_11215 = G__11408;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10264__auto__ = function(state_11215){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10264__auto____1.call(this,state_11215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10264__auto____0;
cljs$core$async$transduce_$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10264__auto____1;
return cljs$core$async$transduce_$_state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_11242 = f__10430__auto__.call(null);
(statearr_11242[(6)] = c__10429__auto__);

return statearr_11242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
}));

return c__10429__auto__;
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
var G__11245 = arguments.length;
switch (G__11245) {
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
var c__10429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_11291){
var state_val_11292 = (state_11291[(1)]);
if((state_val_11292 === (7))){
var inst_11272 = (state_11291[(2)]);
var state_11291__$1 = state_11291;
var statearr_11298_11418 = state_11291__$1;
(statearr_11298_11418[(2)] = inst_11272);

(statearr_11298_11418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11292 === (1))){
var inst_11260 = cljs.core.seq.call(null,coll);
var inst_11263 = inst_11260;
var state_11291__$1 = (function (){var statearr_11299 = state_11291;
(statearr_11299[(7)] = inst_11263);

return statearr_11299;
})();
var statearr_11301_11421 = state_11291__$1;
(statearr_11301_11421[(2)] = null);

(statearr_11301_11421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11292 === (4))){
var inst_11263 = (state_11291[(7)]);
var inst_11270 = cljs.core.first.call(null,inst_11263);
var state_11291__$1 = state_11291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11291__$1,(7),ch,inst_11270);
} else {
if((state_val_11292 === (13))){
var inst_11285 = (state_11291[(2)]);
var state_11291__$1 = state_11291;
var statearr_11304_11423 = state_11291__$1;
(statearr_11304_11423[(2)] = inst_11285);

(statearr_11304_11423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11292 === (6))){
var inst_11275 = (state_11291[(2)]);
var state_11291__$1 = state_11291;
if(cljs.core.truth_(inst_11275)){
var statearr_11305_11428 = state_11291__$1;
(statearr_11305_11428[(1)] = (8));

} else {
var statearr_11307_11429 = state_11291__$1;
(statearr_11307_11429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11292 === (3))){
var inst_11289 = (state_11291[(2)]);
var state_11291__$1 = state_11291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11291__$1,inst_11289);
} else {
if((state_val_11292 === (12))){
var state_11291__$1 = state_11291;
var statearr_11313_11431 = state_11291__$1;
(statearr_11313_11431[(2)] = null);

(statearr_11313_11431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11292 === (2))){
var inst_11263 = (state_11291[(7)]);
var state_11291__$1 = state_11291;
if(cljs.core.truth_(inst_11263)){
var statearr_11318_11432 = state_11291__$1;
(statearr_11318_11432[(1)] = (4));

} else {
var statearr_11320_11433 = state_11291__$1;
(statearr_11320_11433[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11292 === (11))){
var inst_11282 = cljs.core.async.close_BANG_.call(null,ch);
var state_11291__$1 = state_11291;
var statearr_11322_11434 = state_11291__$1;
(statearr_11322_11434[(2)] = inst_11282);

(statearr_11322_11434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11292 === (9))){
var state_11291__$1 = state_11291;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11325_11435 = state_11291__$1;
(statearr_11325_11435[(1)] = (11));

} else {
var statearr_11326_11436 = state_11291__$1;
(statearr_11326_11436[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11292 === (5))){
var inst_11263 = (state_11291[(7)]);
var state_11291__$1 = state_11291;
var statearr_11328_11437 = state_11291__$1;
(statearr_11328_11437[(2)] = inst_11263);

(statearr_11328_11437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11292 === (10))){
var inst_11287 = (state_11291[(2)]);
var state_11291__$1 = state_11291;
var statearr_11331_11438 = state_11291__$1;
(statearr_11331_11438[(2)] = inst_11287);

(statearr_11331_11438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11292 === (8))){
var inst_11263 = (state_11291[(7)]);
var inst_11278 = cljs.core.next.call(null,inst_11263);
var inst_11263__$1 = inst_11278;
var state_11291__$1 = (function (){var statearr_11332 = state_11291;
(statearr_11332[(7)] = inst_11263__$1);

return statearr_11332;
})();
var statearr_11334_11439 = state_11291__$1;
(statearr_11334_11439[(2)] = null);

(statearr_11334_11439[(1)] = (2));


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
var cljs$core$async$state_machine__10264__auto__ = null;
var cljs$core$async$state_machine__10264__auto____0 = (function (){
var statearr_11337 = [null,null,null,null,null,null,null,null];
(statearr_11337[(0)] = cljs$core$async$state_machine__10264__auto__);

(statearr_11337[(1)] = (1));

return statearr_11337;
});
var cljs$core$async$state_machine__10264__auto____1 = (function (state_11291){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_11291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e11342){var ex__10267__auto__ = e11342;
var statearr_11343_11449 = state_11291;
(statearr_11343_11449[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_11291[(4)]))){
var statearr_11345_11458 = state_11291;
(statearr_11345_11458[(1)] = cljs.core.first.call(null,(state_11291[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11467 = state_11291;
state_11291 = G__11467;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$state_machine__10264__auto__ = function(state_11291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10264__auto____1.call(this,state_11291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10264__auto____0;
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10264__auto____1;
return cljs$core$async$state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_11348 = f__10430__auto__.call(null);
(statearr_11348[(6)] = c__10429__auto__);

return statearr_11348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
}));

return c__10429__auto__;
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
var G__11354 = arguments.length;
switch (G__11354) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_11596 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_11596.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_11599 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_11599.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_11606 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_11606.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_11616 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_11616.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11410 = (function (ch,cs,meta11411){
this.ch = ch;
this.cs = cs;
this.meta11411 = meta11411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11412,meta11411__$1){
var self__ = this;
var _11412__$1 = this;
return (new cljs.core.async.t_cljs$core$async11410(self__.ch,self__.cs,meta11411__$1));
}));

(cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11412){
var self__ = this;
var _11412__$1 = this;
return self__.meta11411;
}));

(cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11410.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11411","meta11411",1911370695,null)], null);
}));

(cljs.core.async.t_cljs$core$async11410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11410");

(cljs.core.async.t_cljs$core$async11410.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11410.
 */
cljs.core.async.__GT_t_cljs$core$async11410 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11410(ch__$1,cs__$1,meta11411){
return (new cljs.core.async.t_cljs$core$async11410(ch__$1,cs__$1,meta11411));
});

}

return (new cljs.core.async.t_cljs$core$async11410(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10429__auto___11745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_11595){
var state_val_11597 = (state_11595[(1)]);
if((state_val_11597 === (7))){
var inst_11585 = (state_11595[(2)]);
var state_11595__$1 = state_11595;
var statearr_11598_11746 = state_11595__$1;
(statearr_11598_11746[(2)] = inst_11585);

(statearr_11598_11746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (20))){
var inst_11485 = (state_11595[(7)]);
var inst_11499 = cljs.core.first.call(null,inst_11485);
var inst_11500 = cljs.core.nth.call(null,inst_11499,(0),null);
var inst_11501 = cljs.core.nth.call(null,inst_11499,(1),null);
var state_11595__$1 = (function (){var statearr_11600 = state_11595;
(statearr_11600[(8)] = inst_11500);

return statearr_11600;
})();
if(cljs.core.truth_(inst_11501)){
var statearr_11601_11747 = state_11595__$1;
(statearr_11601_11747[(1)] = (22));

} else {
var statearr_11602_11748 = state_11595__$1;
(statearr_11602_11748[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (27))){
var inst_11529 = (state_11595[(9)]);
var inst_11531 = (state_11595[(10)]);
var inst_11539 = (state_11595[(11)]);
var inst_11442 = (state_11595[(12)]);
var inst_11539__$1 = cljs.core._nth.call(null,inst_11529,inst_11531);
var inst_11540 = cljs.core.async.put_BANG_.call(null,inst_11539__$1,inst_11442,done);
var state_11595__$1 = (function (){var statearr_11603 = state_11595;
(statearr_11603[(11)] = inst_11539__$1);

return statearr_11603;
})();
if(cljs.core.truth_(inst_11540)){
var statearr_11604_11751 = state_11595__$1;
(statearr_11604_11751[(1)] = (30));

} else {
var statearr_11605_11752 = state_11595__$1;
(statearr_11605_11752[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (1))){
var state_11595__$1 = state_11595;
var statearr_11607_11753 = state_11595__$1;
(statearr_11607_11753[(2)] = null);

(statearr_11607_11753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (24))){
var inst_11485 = (state_11595[(7)]);
var inst_11506 = (state_11595[(2)]);
var inst_11507 = cljs.core.next.call(null,inst_11485);
var inst_11453 = inst_11507;
var inst_11454 = null;
var inst_11455 = (0);
var inst_11456 = (0);
var state_11595__$1 = (function (){var statearr_11610 = state_11595;
(statearr_11610[(13)] = inst_11506);

(statearr_11610[(14)] = inst_11453);

(statearr_11610[(15)] = inst_11454);

(statearr_11610[(16)] = inst_11455);

(statearr_11610[(17)] = inst_11456);

return statearr_11610;
})();
var statearr_11612_11754 = state_11595__$1;
(statearr_11612_11754[(2)] = null);

(statearr_11612_11754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (39))){
var state_11595__$1 = state_11595;
var statearr_11617_11755 = state_11595__$1;
(statearr_11617_11755[(2)] = null);

(statearr_11617_11755[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (4))){
var inst_11442 = (state_11595[(12)]);
var inst_11442__$1 = (state_11595[(2)]);
var inst_11443 = (inst_11442__$1 == null);
var state_11595__$1 = (function (){var statearr_11618 = state_11595;
(statearr_11618[(12)] = inst_11442__$1);

return statearr_11618;
})();
if(cljs.core.truth_(inst_11443)){
var statearr_11620_11756 = state_11595__$1;
(statearr_11620_11756[(1)] = (5));

} else {
var statearr_11621_11757 = state_11595__$1;
(statearr_11621_11757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (15))){
var inst_11456 = (state_11595[(17)]);
var inst_11453 = (state_11595[(14)]);
var inst_11454 = (state_11595[(15)]);
var inst_11455 = (state_11595[(16)]);
var inst_11480 = (state_11595[(2)]);
var inst_11482 = (inst_11456 + (1));
var tmp11613 = inst_11453;
var tmp11614 = inst_11454;
var tmp11615 = inst_11455;
var inst_11453__$1 = tmp11613;
var inst_11454__$1 = tmp11614;
var inst_11455__$1 = tmp11615;
var inst_11456__$1 = inst_11482;
var state_11595__$1 = (function (){var statearr_11624 = state_11595;
(statearr_11624[(18)] = inst_11480);

(statearr_11624[(14)] = inst_11453__$1);

(statearr_11624[(15)] = inst_11454__$1);

(statearr_11624[(16)] = inst_11455__$1);

(statearr_11624[(17)] = inst_11456__$1);

return statearr_11624;
})();
var statearr_11626_11759 = state_11595__$1;
(statearr_11626_11759[(2)] = null);

(statearr_11626_11759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (21))){
var inst_11510 = (state_11595[(2)]);
var state_11595__$1 = state_11595;
var statearr_11630_11760 = state_11595__$1;
(statearr_11630_11760[(2)] = inst_11510);

(statearr_11630_11760[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (31))){
var inst_11539 = (state_11595[(11)]);
var inst_11543 = cljs.core.async.untap_STAR_.call(null,m,inst_11539);
var state_11595__$1 = state_11595;
var statearr_11632_11761 = state_11595__$1;
(statearr_11632_11761[(2)] = inst_11543);

(statearr_11632_11761[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (32))){
var inst_11531 = (state_11595[(10)]);
var inst_11528 = (state_11595[(19)]);
var inst_11529 = (state_11595[(9)]);
var inst_11530 = (state_11595[(20)]);
var inst_11545 = (state_11595[(2)]);
var inst_11546 = (inst_11531 + (1));
var tmp11627 = inst_11530;
var tmp11628 = inst_11528;
var tmp11629 = inst_11529;
var inst_11528__$1 = tmp11628;
var inst_11529__$1 = tmp11629;
var inst_11530__$1 = tmp11627;
var inst_11531__$1 = inst_11546;
var state_11595__$1 = (function (){var statearr_11633 = state_11595;
(statearr_11633[(21)] = inst_11545);

(statearr_11633[(19)] = inst_11528__$1);

(statearr_11633[(9)] = inst_11529__$1);

(statearr_11633[(20)] = inst_11530__$1);

(statearr_11633[(10)] = inst_11531__$1);

return statearr_11633;
})();
var statearr_11634_11768 = state_11595__$1;
(statearr_11634_11768[(2)] = null);

(statearr_11634_11768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (40))){
var inst_11558 = (state_11595[(22)]);
var inst_11562 = cljs.core.async.untap_STAR_.call(null,m,inst_11558);
var state_11595__$1 = state_11595;
var statearr_11635_11770 = state_11595__$1;
(statearr_11635_11770[(2)] = inst_11562);

(statearr_11635_11770[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (33))){
var inst_11549 = (state_11595[(23)]);
var inst_11551 = cljs.core.chunked_seq_QMARK_.call(null,inst_11549);
var state_11595__$1 = state_11595;
if(inst_11551){
var statearr_11636_11771 = state_11595__$1;
(statearr_11636_11771[(1)] = (36));

} else {
var statearr_11637_11772 = state_11595__$1;
(statearr_11637_11772[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (13))){
var inst_11468 = (state_11595[(24)]);
var inst_11477 = cljs.core.async.close_BANG_.call(null,inst_11468);
var state_11595__$1 = state_11595;
var statearr_11641_11775 = state_11595__$1;
(statearr_11641_11775[(2)] = inst_11477);

(statearr_11641_11775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (22))){
var inst_11500 = (state_11595[(8)]);
var inst_11503 = cljs.core.async.close_BANG_.call(null,inst_11500);
var state_11595__$1 = state_11595;
var statearr_11643_11777 = state_11595__$1;
(statearr_11643_11777[(2)] = inst_11503);

(statearr_11643_11777[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (36))){
var inst_11549 = (state_11595[(23)]);
var inst_11553 = cljs.core.chunk_first.call(null,inst_11549);
var inst_11554 = cljs.core.chunk_rest.call(null,inst_11549);
var inst_11555 = cljs.core.count.call(null,inst_11553);
var inst_11528 = inst_11554;
var inst_11529 = inst_11553;
var inst_11530 = inst_11555;
var inst_11531 = (0);
var state_11595__$1 = (function (){var statearr_11644 = state_11595;
(statearr_11644[(19)] = inst_11528);

(statearr_11644[(9)] = inst_11529);

(statearr_11644[(20)] = inst_11530);

(statearr_11644[(10)] = inst_11531);

return statearr_11644;
})();
var statearr_11645_11785 = state_11595__$1;
(statearr_11645_11785[(2)] = null);

(statearr_11645_11785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (41))){
var inst_11549 = (state_11595[(23)]);
var inst_11564 = (state_11595[(2)]);
var inst_11565 = cljs.core.next.call(null,inst_11549);
var inst_11528 = inst_11565;
var inst_11529 = null;
var inst_11530 = (0);
var inst_11531 = (0);
var state_11595__$1 = (function (){var statearr_11649 = state_11595;
(statearr_11649[(25)] = inst_11564);

(statearr_11649[(19)] = inst_11528);

(statearr_11649[(9)] = inst_11529);

(statearr_11649[(20)] = inst_11530);

(statearr_11649[(10)] = inst_11531);

return statearr_11649;
})();
var statearr_11650_11787 = state_11595__$1;
(statearr_11650_11787[(2)] = null);

(statearr_11650_11787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (43))){
var state_11595__$1 = state_11595;
var statearr_11652_11788 = state_11595__$1;
(statearr_11652_11788[(2)] = null);

(statearr_11652_11788[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (29))){
var inst_11573 = (state_11595[(2)]);
var state_11595__$1 = state_11595;
var statearr_11662_11789 = state_11595__$1;
(statearr_11662_11789[(2)] = inst_11573);

(statearr_11662_11789[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (44))){
var inst_11582 = (state_11595[(2)]);
var state_11595__$1 = (function (){var statearr_11666 = state_11595;
(statearr_11666[(26)] = inst_11582);

return statearr_11666;
})();
var statearr_11667_11790 = state_11595__$1;
(statearr_11667_11790[(2)] = null);

(statearr_11667_11790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (6))){
var inst_11520 = (state_11595[(27)]);
var inst_11519 = cljs.core.deref.call(null,cs);
var inst_11520__$1 = cljs.core.keys.call(null,inst_11519);
var inst_11521 = cljs.core.count.call(null,inst_11520__$1);
var inst_11522 = cljs.core.reset_BANG_.call(null,dctr,inst_11521);
var inst_11527 = cljs.core.seq.call(null,inst_11520__$1);
var inst_11528 = inst_11527;
var inst_11529 = null;
var inst_11530 = (0);
var inst_11531 = (0);
var state_11595__$1 = (function (){var statearr_11668 = state_11595;
(statearr_11668[(27)] = inst_11520__$1);

(statearr_11668[(28)] = inst_11522);

(statearr_11668[(19)] = inst_11528);

(statearr_11668[(9)] = inst_11529);

(statearr_11668[(20)] = inst_11530);

(statearr_11668[(10)] = inst_11531);

return statearr_11668;
})();
var statearr_11669_11792 = state_11595__$1;
(statearr_11669_11792[(2)] = null);

(statearr_11669_11792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (28))){
var inst_11528 = (state_11595[(19)]);
var inst_11549 = (state_11595[(23)]);
var inst_11549__$1 = cljs.core.seq.call(null,inst_11528);
var state_11595__$1 = (function (){var statearr_11670 = state_11595;
(statearr_11670[(23)] = inst_11549__$1);

return statearr_11670;
})();
if(inst_11549__$1){
var statearr_11671_11793 = state_11595__$1;
(statearr_11671_11793[(1)] = (33));

} else {
var statearr_11672_11794 = state_11595__$1;
(statearr_11672_11794[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (25))){
var inst_11531 = (state_11595[(10)]);
var inst_11530 = (state_11595[(20)]);
var inst_11535 = (inst_11531 < inst_11530);
var inst_11536 = inst_11535;
var state_11595__$1 = state_11595;
if(cljs.core.truth_(inst_11536)){
var statearr_11674_11795 = state_11595__$1;
(statearr_11674_11795[(1)] = (27));

} else {
var statearr_11677_11797 = state_11595__$1;
(statearr_11677_11797[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (34))){
var state_11595__$1 = state_11595;
var statearr_11681_11799 = state_11595__$1;
(statearr_11681_11799[(2)] = null);

(statearr_11681_11799[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (17))){
var state_11595__$1 = state_11595;
var statearr_11682_11800 = state_11595__$1;
(statearr_11682_11800[(2)] = null);

(statearr_11682_11800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (3))){
var inst_11587 = (state_11595[(2)]);
var state_11595__$1 = state_11595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11595__$1,inst_11587);
} else {
if((state_val_11597 === (12))){
var inst_11515 = (state_11595[(2)]);
var state_11595__$1 = state_11595;
var statearr_11683_11802 = state_11595__$1;
(statearr_11683_11802[(2)] = inst_11515);

(statearr_11683_11802[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (2))){
var state_11595__$1 = state_11595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11595__$1,(4),ch);
} else {
if((state_val_11597 === (23))){
var state_11595__$1 = state_11595;
var statearr_11684_11803 = state_11595__$1;
(statearr_11684_11803[(2)] = null);

(statearr_11684_11803[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (35))){
var inst_11571 = (state_11595[(2)]);
var state_11595__$1 = state_11595;
var statearr_11685_11804 = state_11595__$1;
(statearr_11685_11804[(2)] = inst_11571);

(statearr_11685_11804[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (19))){
var inst_11485 = (state_11595[(7)]);
var inst_11489 = cljs.core.chunk_first.call(null,inst_11485);
var inst_11491 = cljs.core.chunk_rest.call(null,inst_11485);
var inst_11492 = cljs.core.count.call(null,inst_11489);
var inst_11453 = inst_11491;
var inst_11454 = inst_11489;
var inst_11455 = inst_11492;
var inst_11456 = (0);
var state_11595__$1 = (function (){var statearr_11692 = state_11595;
(statearr_11692[(14)] = inst_11453);

(statearr_11692[(15)] = inst_11454);

(statearr_11692[(16)] = inst_11455);

(statearr_11692[(17)] = inst_11456);

return statearr_11692;
})();
var statearr_11693_11805 = state_11595__$1;
(statearr_11693_11805[(2)] = null);

(statearr_11693_11805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (11))){
var inst_11453 = (state_11595[(14)]);
var inst_11485 = (state_11595[(7)]);
var inst_11485__$1 = cljs.core.seq.call(null,inst_11453);
var state_11595__$1 = (function (){var statearr_11694 = state_11595;
(statearr_11694[(7)] = inst_11485__$1);

return statearr_11694;
})();
if(inst_11485__$1){
var statearr_11695_11806 = state_11595__$1;
(statearr_11695_11806[(1)] = (16));

} else {
var statearr_11697_11808 = state_11595__$1;
(statearr_11697_11808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (9))){
var inst_11517 = (state_11595[(2)]);
var state_11595__$1 = state_11595;
var statearr_11698_11813 = state_11595__$1;
(statearr_11698_11813[(2)] = inst_11517);

(statearr_11698_11813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (5))){
var inst_11451 = cljs.core.deref.call(null,cs);
var inst_11452 = cljs.core.seq.call(null,inst_11451);
var inst_11453 = inst_11452;
var inst_11454 = null;
var inst_11455 = (0);
var inst_11456 = (0);
var state_11595__$1 = (function (){var statearr_11699 = state_11595;
(statearr_11699[(14)] = inst_11453);

(statearr_11699[(15)] = inst_11454);

(statearr_11699[(16)] = inst_11455);

(statearr_11699[(17)] = inst_11456);

return statearr_11699;
})();
var statearr_11700_11814 = state_11595__$1;
(statearr_11700_11814[(2)] = null);

(statearr_11700_11814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (14))){
var state_11595__$1 = state_11595;
var statearr_11701_11815 = state_11595__$1;
(statearr_11701_11815[(2)] = null);

(statearr_11701_11815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (45))){
var inst_11579 = (state_11595[(2)]);
var state_11595__$1 = state_11595;
var statearr_11702_11816 = state_11595__$1;
(statearr_11702_11816[(2)] = inst_11579);

(statearr_11702_11816[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (26))){
var inst_11520 = (state_11595[(27)]);
var inst_11575 = (state_11595[(2)]);
var inst_11576 = cljs.core.seq.call(null,inst_11520);
var state_11595__$1 = (function (){var statearr_11703 = state_11595;
(statearr_11703[(29)] = inst_11575);

return statearr_11703;
})();
if(inst_11576){
var statearr_11704_11818 = state_11595__$1;
(statearr_11704_11818[(1)] = (42));

} else {
var statearr_11705_11819 = state_11595__$1;
(statearr_11705_11819[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (16))){
var inst_11485 = (state_11595[(7)]);
var inst_11487 = cljs.core.chunked_seq_QMARK_.call(null,inst_11485);
var state_11595__$1 = state_11595;
if(inst_11487){
var statearr_11706_11821 = state_11595__$1;
(statearr_11706_11821[(1)] = (19));

} else {
var statearr_11707_11822 = state_11595__$1;
(statearr_11707_11822[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (38))){
var inst_11568 = (state_11595[(2)]);
var state_11595__$1 = state_11595;
var statearr_11710_11824 = state_11595__$1;
(statearr_11710_11824[(2)] = inst_11568);

(statearr_11710_11824[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (30))){
var state_11595__$1 = state_11595;
var statearr_11711_11826 = state_11595__$1;
(statearr_11711_11826[(2)] = null);

(statearr_11711_11826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (10))){
var inst_11454 = (state_11595[(15)]);
var inst_11456 = (state_11595[(17)]);
var inst_11466 = cljs.core._nth.call(null,inst_11454,inst_11456);
var inst_11468 = cljs.core.nth.call(null,inst_11466,(0),null);
var inst_11469 = cljs.core.nth.call(null,inst_11466,(1),null);
var state_11595__$1 = (function (){var statearr_11712 = state_11595;
(statearr_11712[(24)] = inst_11468);

return statearr_11712;
})();
if(cljs.core.truth_(inst_11469)){
var statearr_11713_11827 = state_11595__$1;
(statearr_11713_11827[(1)] = (13));

} else {
var statearr_11714_11828 = state_11595__$1;
(statearr_11714_11828[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (18))){
var inst_11513 = (state_11595[(2)]);
var state_11595__$1 = state_11595;
var statearr_11717_11829 = state_11595__$1;
(statearr_11717_11829[(2)] = inst_11513);

(statearr_11717_11829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (42))){
var state_11595__$1 = state_11595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11595__$1,(45),dchan);
} else {
if((state_val_11597 === (37))){
var inst_11549 = (state_11595[(23)]);
var inst_11558 = (state_11595[(22)]);
var inst_11442 = (state_11595[(12)]);
var inst_11558__$1 = cljs.core.first.call(null,inst_11549);
var inst_11559 = cljs.core.async.put_BANG_.call(null,inst_11558__$1,inst_11442,done);
var state_11595__$1 = (function (){var statearr_11720 = state_11595;
(statearr_11720[(22)] = inst_11558__$1);

return statearr_11720;
})();
if(cljs.core.truth_(inst_11559)){
var statearr_11723_11833 = state_11595__$1;
(statearr_11723_11833[(1)] = (39));

} else {
var statearr_11725_11834 = state_11595__$1;
(statearr_11725_11834[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (8))){
var inst_11456 = (state_11595[(17)]);
var inst_11455 = (state_11595[(16)]);
var inst_11460 = (inst_11456 < inst_11455);
var inst_11461 = inst_11460;
var state_11595__$1 = state_11595;
if(cljs.core.truth_(inst_11461)){
var statearr_11730_11840 = state_11595__$1;
(statearr_11730_11840[(1)] = (10));

} else {
var statearr_11731_11841 = state_11595__$1;
(statearr_11731_11841[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10264__auto__ = null;
var cljs$core$async$mult_$_state_machine__10264__auto____0 = (function (){
var statearr_11737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11737[(0)] = cljs$core$async$mult_$_state_machine__10264__auto__);

(statearr_11737[(1)] = (1));

return statearr_11737;
});
var cljs$core$async$mult_$_state_machine__10264__auto____1 = (function (state_11595){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_11595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e11738){var ex__10267__auto__ = e11738;
var statearr_11739_11843 = state_11595;
(statearr_11739_11843[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_11595[(4)]))){
var statearr_11740_11844 = state_11595;
(statearr_11740_11844[(1)] = cljs.core.first.call(null,(state_11595[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11845 = state_11595;
state_11595 = G__11845;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10264__auto__ = function(state_11595){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10264__auto____1.call(this,state_11595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10264__auto____0;
cljs$core$async$mult_$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10264__auto____1;
return cljs$core$async$mult_$_state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_11741 = f__10430__auto__.call(null);
(statearr_11741[(6)] = c__10429__auto___11745);

return statearr_11741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
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
var G__11743 = arguments.length;
switch (G__11743) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_11890 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_11890.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_11923 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_11923.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_11930 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_11930.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_11936 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_11936.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_11944 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_11944.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___11951 = arguments.length;
var i__5750__auto___11955 = (0);
while(true){
if((i__5750__auto___11955 < len__5749__auto___11951)){
args__5755__auto__.push((arguments[i__5750__auto___11955]));

var G__11958 = (i__5750__auto___11955 + (1));
i__5750__auto___11955 = G__11958;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11773){
var map__11774 = p__11773;
var map__11774__$1 = cljs.core.__destructure_map.call(null,map__11774);
var opts = map__11774__$1;
var statearr_11776_11961 = state;
(statearr_11776_11961[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_11778_11963 = state;
(statearr_11778_11963[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_11779_11965 = state;
(statearr_11779_11965[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11762){
var G__11764 = cljs.core.first.call(null,seq11762);
var seq11762__$1 = cljs.core.next.call(null,seq11762);
var G__11765 = cljs.core.first.call(null,seq11762__$1);
var seq11762__$2 = cljs.core.next.call(null,seq11762__$1);
var G__11766 = cljs.core.first.call(null,seq11762__$2);
var seq11762__$3 = cljs.core.next.call(null,seq11762__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11764,G__11765,G__11766,seq11762__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11830 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11831){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11831 = meta11831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11832,meta11831__$1){
var self__ = this;
var _11832__$1 = this;
return (new cljs.core.async.t_cljs$core$async11830(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11831__$1));
}));

(cljs.core.async.t_cljs$core$async11830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11832){
var self__ = this;
var _11832__$1 = this;
return self__.meta11831;
}));

(cljs.core.async.t_cljs$core$async11830.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11830.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11830.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11830.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11830.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11830.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11830.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11830.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11831","meta11831",-1707257244,null)], null);
}));

(cljs.core.async.t_cljs$core$async11830.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11830");

(cljs.core.async.t_cljs$core$async11830.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11830");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11830.
 */
cljs.core.async.__GT_t_cljs$core$async11830 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11830(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11831){
return (new cljs.core.async.t_cljs$core$async11830(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11831));
});

}

return (new cljs.core.async.t_cljs$core$async11830(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10429__auto___12082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_11922){
var state_val_11924 = (state_11922[(1)]);
if((state_val_11924 === (7))){
var inst_11875 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
if(cljs.core.truth_(inst_11875)){
var statearr_11926_12090 = state_11922__$1;
(statearr_11926_12090[(1)] = (8));

} else {
var statearr_11927_12096 = state_11922__$1;
(statearr_11927_12096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (20))){
var inst_11868 = (state_11922[(7)]);
var state_11922__$1 = state_11922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11922__$1,(23),out,inst_11868);
} else {
if((state_val_11924 === (1))){
var inst_11851 = calc_state.call(null);
var inst_11852 = cljs.core.__destructure_map.call(null,inst_11851);
var inst_11853 = cljs.core.get.call(null,inst_11852,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11854 = cljs.core.get.call(null,inst_11852,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11855 = cljs.core.get.call(null,inst_11852,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11856 = inst_11851;
var state_11922__$1 = (function (){var statearr_11929 = state_11922;
(statearr_11929[(8)] = inst_11853);

(statearr_11929[(9)] = inst_11854);

(statearr_11929[(10)] = inst_11855);

(statearr_11929[(11)] = inst_11856);

return statearr_11929;
})();
var statearr_11932_12129 = state_11922__$1;
(statearr_11932_12129[(2)] = null);

(statearr_11932_12129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (24))){
var inst_11859 = (state_11922[(12)]);
var inst_11856 = inst_11859;
var state_11922__$1 = (function (){var statearr_11933 = state_11922;
(statearr_11933[(11)] = inst_11856);

return statearr_11933;
})();
var statearr_11934_12132 = state_11922__$1;
(statearr_11934_12132[(2)] = null);

(statearr_11934_12132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (4))){
var inst_11868 = (state_11922[(7)]);
var inst_11870 = (state_11922[(13)]);
var inst_11867 = (state_11922[(2)]);
var inst_11868__$1 = cljs.core.nth.call(null,inst_11867,(0),null);
var inst_11869 = cljs.core.nth.call(null,inst_11867,(1),null);
var inst_11870__$1 = (inst_11868__$1 == null);
var state_11922__$1 = (function (){var statearr_11937 = state_11922;
(statearr_11937[(7)] = inst_11868__$1);

(statearr_11937[(14)] = inst_11869);

(statearr_11937[(13)] = inst_11870__$1);

return statearr_11937;
})();
if(cljs.core.truth_(inst_11870__$1)){
var statearr_11941_12133 = state_11922__$1;
(statearr_11941_12133[(1)] = (5));

} else {
var statearr_11943_12134 = state_11922__$1;
(statearr_11943_12134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (15))){
var inst_11860 = (state_11922[(15)]);
var inst_11891 = (state_11922[(16)]);
var inst_11891__$1 = cljs.core.empty_QMARK_.call(null,inst_11860);
var state_11922__$1 = (function (){var statearr_11945 = state_11922;
(statearr_11945[(16)] = inst_11891__$1);

return statearr_11945;
})();
if(inst_11891__$1){
var statearr_11947_12137 = state_11922__$1;
(statearr_11947_12137[(1)] = (17));

} else {
var statearr_11948_12138 = state_11922__$1;
(statearr_11948_12138[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (21))){
var inst_11859 = (state_11922[(12)]);
var inst_11856 = inst_11859;
var state_11922__$1 = (function (){var statearr_11949 = state_11922;
(statearr_11949[(11)] = inst_11856);

return statearr_11949;
})();
var statearr_11950_12140 = state_11922__$1;
(statearr_11950_12140[(2)] = null);

(statearr_11950_12140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (13))){
var inst_11882 = (state_11922[(2)]);
var inst_11883 = calc_state.call(null);
var inst_11856 = inst_11883;
var state_11922__$1 = (function (){var statearr_11956 = state_11922;
(statearr_11956[(17)] = inst_11882);

(statearr_11956[(11)] = inst_11856);

return statearr_11956;
})();
var statearr_11959_12142 = state_11922__$1;
(statearr_11959_12142[(2)] = null);

(statearr_11959_12142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (22))){
var inst_11914 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
var statearr_11960_12144 = state_11922__$1;
(statearr_11960_12144[(2)] = inst_11914);

(statearr_11960_12144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (6))){
var inst_11869 = (state_11922[(14)]);
var inst_11873 = cljs.core._EQ_.call(null,inst_11869,change);
var state_11922__$1 = state_11922;
var statearr_11962_12147 = state_11922__$1;
(statearr_11962_12147[(2)] = inst_11873);

(statearr_11962_12147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (25))){
var state_11922__$1 = state_11922;
var statearr_11964_12148 = state_11922__$1;
(statearr_11964_12148[(2)] = null);

(statearr_11964_12148[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (17))){
var inst_11861 = (state_11922[(18)]);
var inst_11869 = (state_11922[(14)]);
var inst_11894 = inst_11861.call(null,inst_11869);
var inst_11895 = cljs.core.not.call(null,inst_11894);
var state_11922__$1 = state_11922;
var statearr_11966_12152 = state_11922__$1;
(statearr_11966_12152[(2)] = inst_11895);

(statearr_11966_12152[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (3))){
var inst_11919 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11922__$1,inst_11919);
} else {
if((state_val_11924 === (12))){
var state_11922__$1 = state_11922;
var statearr_11967_12154 = state_11922__$1;
(statearr_11967_12154[(2)] = null);

(statearr_11967_12154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (2))){
var inst_11856 = (state_11922[(11)]);
var inst_11859 = (state_11922[(12)]);
var inst_11859__$1 = cljs.core.__destructure_map.call(null,inst_11856);
var inst_11860 = cljs.core.get.call(null,inst_11859__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11861 = cljs.core.get.call(null,inst_11859__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11862 = cljs.core.get.call(null,inst_11859__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11922__$1 = (function (){var statearr_11968 = state_11922;
(statearr_11968[(12)] = inst_11859__$1);

(statearr_11968[(15)] = inst_11860);

(statearr_11968[(18)] = inst_11861);

return statearr_11968;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11922__$1,(4),inst_11862);
} else {
if((state_val_11924 === (23))){
var inst_11904 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
if(cljs.core.truth_(inst_11904)){
var statearr_11969_12160 = state_11922__$1;
(statearr_11969_12160[(1)] = (24));

} else {
var statearr_11970_12162 = state_11922__$1;
(statearr_11970_12162[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (19))){
var inst_11899 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
var statearr_11971_12163 = state_11922__$1;
(statearr_11971_12163[(2)] = inst_11899);

(statearr_11971_12163[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (11))){
var inst_11869 = (state_11922[(14)]);
var inst_11879 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11869);
var state_11922__$1 = state_11922;
var statearr_11972_12165 = state_11922__$1;
(statearr_11972_12165[(2)] = inst_11879);

(statearr_11972_12165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (9))){
var inst_11860 = (state_11922[(15)]);
var inst_11869 = (state_11922[(14)]);
var inst_11887 = (state_11922[(19)]);
var inst_11887__$1 = inst_11860.call(null,inst_11869);
var state_11922__$1 = (function (){var statearr_11973 = state_11922;
(statearr_11973[(19)] = inst_11887__$1);

return statearr_11973;
})();
if(cljs.core.truth_(inst_11887__$1)){
var statearr_11974_12169 = state_11922__$1;
(statearr_11974_12169[(1)] = (14));

} else {
var statearr_11975_12170 = state_11922__$1;
(statearr_11975_12170[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (5))){
var inst_11870 = (state_11922[(13)]);
var state_11922__$1 = state_11922;
var statearr_11976_12171 = state_11922__$1;
(statearr_11976_12171[(2)] = inst_11870);

(statearr_11976_12171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (14))){
var inst_11887 = (state_11922[(19)]);
var state_11922__$1 = state_11922;
var statearr_11979_12173 = state_11922__$1;
(statearr_11979_12173[(2)] = inst_11887);

(statearr_11979_12173[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (26))){
var inst_11910 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
var statearr_11980_12177 = state_11922__$1;
(statearr_11980_12177[(2)] = inst_11910);

(statearr_11980_12177[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (16))){
var inst_11901 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
if(cljs.core.truth_(inst_11901)){
var statearr_11989_12178 = state_11922__$1;
(statearr_11989_12178[(1)] = (20));

} else {
var statearr_11991_12180 = state_11922__$1;
(statearr_11991_12180[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (10))){
var inst_11916 = (state_11922[(2)]);
var state_11922__$1 = state_11922;
var statearr_11993_12181 = state_11922__$1;
(statearr_11993_12181[(2)] = inst_11916);

(statearr_11993_12181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (18))){
var inst_11891 = (state_11922[(16)]);
var state_11922__$1 = state_11922;
var statearr_11996_12183 = state_11922__$1;
(statearr_11996_12183[(2)] = inst_11891);

(statearr_11996_12183[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (8))){
var inst_11868 = (state_11922[(7)]);
var inst_11877 = (inst_11868 == null);
var state_11922__$1 = state_11922;
if(cljs.core.truth_(inst_11877)){
var statearr_11997_12184 = state_11922__$1;
(statearr_11997_12184[(1)] = (11));

} else {
var statearr_11998_12185 = state_11922__$1;
(statearr_11998_12185[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__10264__auto__ = null;
var cljs$core$async$mix_$_state_machine__10264__auto____0 = (function (){
var statearr_12001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12001[(0)] = cljs$core$async$mix_$_state_machine__10264__auto__);

(statearr_12001[(1)] = (1));

return statearr_12001;
});
var cljs$core$async$mix_$_state_machine__10264__auto____1 = (function (state_11922){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_11922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e12005){var ex__10267__auto__ = e12005;
var statearr_12006_12190 = state_11922;
(statearr_12006_12190[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_11922[(4)]))){
var statearr_12007_12191 = state_11922;
(statearr_12007_12191[(1)] = cljs.core.first.call(null,(state_11922[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12193 = state_11922;
state_11922 = G__12193;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10264__auto__ = function(state_11922){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10264__auto____1.call(this,state_11922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10264__auto____0;
cljs$core$async$mix_$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10264__auto____1;
return cljs$core$async$mix_$_state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_12012 = f__10430__auto__.call(null);
(statearr_12012[(6)] = c__10429__auto___12082);

return statearr_12012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_12201 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_12201.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12202 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_12202.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12204 = (function() {
var G__12205 = null;
var G__12205__1 = (function (p){
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
var G__12205__2 = (function (p,v){
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
G__12205 = function(p,v){
switch(arguments.length){
case 1:
return G__12205__1.call(this,p);
case 2:
return G__12205__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12205.cljs$core$IFn$_invoke$arity$1 = G__12205__1;
G__12205.cljs$core$IFn$_invoke$arity$2 = G__12205__2;
return G__12205;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12030 = arguments.length;
switch (G__12030) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12204.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12204.call(null,p,v);
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
var G__12041 = arguments.length;
switch (G__12041) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12033_SHARP_){
if(cljs.core.truth_(p1__12033_SHARP_.call(null,topic))){
return p1__12033_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12033_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12043 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12043 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12044){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12044 = meta12044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12045,meta12044__$1){
var self__ = this;
var _12045__$1 = this;
return (new cljs.core.async.t_cljs$core$async12043(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12044__$1));
}));

(cljs.core.async.t_cljs$core$async12043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12045){
var self__ = this;
var _12045__$1 = this;
return self__.meta12044;
}));

(cljs.core.async.t_cljs$core$async12043.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12043.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12043.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12043.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12043.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12043.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12043.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12044","meta12044",1234656998,null)], null);
}));

(cljs.core.async.t_cljs$core$async12043.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12043");

(cljs.core.async.t_cljs$core$async12043.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12043");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12043.
 */
cljs.core.async.__GT_t_cljs$core$async12043 = (function cljs$core$async$__GT_t_cljs$core$async12043(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12044){
return (new cljs.core.async.t_cljs$core$async12043(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12044));
});

}

return (new cljs.core.async.t_cljs$core$async12043(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10429__auto___12255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_12130){
var state_val_12131 = (state_12130[(1)]);
if((state_val_12131 === (7))){
var inst_12124 = (state_12130[(2)]);
var state_12130__$1 = state_12130;
var statearr_12135_12256 = state_12130__$1;
(statearr_12135_12256[(2)] = inst_12124);

(statearr_12135_12256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (20))){
var state_12130__$1 = state_12130;
var statearr_12136_12259 = state_12130__$1;
(statearr_12136_12259[(2)] = null);

(statearr_12136_12259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (1))){
var state_12130__$1 = state_12130;
var statearr_12139_12260 = state_12130__$1;
(statearr_12139_12260[(2)] = null);

(statearr_12139_12260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (24))){
var inst_12104 = (state_12130[(7)]);
var inst_12115 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12104);
var state_12130__$1 = state_12130;
var statearr_12141_12261 = state_12130__$1;
(statearr_12141_12261[(2)] = inst_12115);

(statearr_12141_12261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (4))){
var inst_12051 = (state_12130[(8)]);
var inst_12051__$1 = (state_12130[(2)]);
var inst_12052 = (inst_12051__$1 == null);
var state_12130__$1 = (function (){var statearr_12143 = state_12130;
(statearr_12143[(8)] = inst_12051__$1);

return statearr_12143;
})();
if(cljs.core.truth_(inst_12052)){
var statearr_12145_12263 = state_12130__$1;
(statearr_12145_12263[(1)] = (5));

} else {
var statearr_12146_12264 = state_12130__$1;
(statearr_12146_12264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (15))){
var inst_12098 = (state_12130[(2)]);
var state_12130__$1 = state_12130;
var statearr_12149_12265 = state_12130__$1;
(statearr_12149_12265[(2)] = inst_12098);

(statearr_12149_12265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (21))){
var inst_12121 = (state_12130[(2)]);
var state_12130__$1 = (function (){var statearr_12151 = state_12130;
(statearr_12151[(9)] = inst_12121);

return statearr_12151;
})();
var statearr_12153_12267 = state_12130__$1;
(statearr_12153_12267[(2)] = null);

(statearr_12153_12267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (13))){
var inst_12077 = (state_12130[(10)]);
var inst_12079 = cljs.core.chunked_seq_QMARK_.call(null,inst_12077);
var state_12130__$1 = state_12130;
if(inst_12079){
var statearr_12155_12275 = state_12130__$1;
(statearr_12155_12275[(1)] = (16));

} else {
var statearr_12156_12282 = state_12130__$1;
(statearr_12156_12282[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (22))){
var inst_12112 = (state_12130[(2)]);
var state_12130__$1 = state_12130;
if(cljs.core.truth_(inst_12112)){
var statearr_12157_12290 = state_12130__$1;
(statearr_12157_12290[(1)] = (23));

} else {
var statearr_12158_12294 = state_12130__$1;
(statearr_12158_12294[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (6))){
var inst_12051 = (state_12130[(8)]);
var inst_12104 = (state_12130[(7)]);
var inst_12106 = (state_12130[(11)]);
var inst_12104__$1 = topic_fn.call(null,inst_12051);
var inst_12105 = cljs.core.deref.call(null,mults);
var inst_12106__$1 = cljs.core.get.call(null,inst_12105,inst_12104__$1);
var state_12130__$1 = (function (){var statearr_12164 = state_12130;
(statearr_12164[(7)] = inst_12104__$1);

(statearr_12164[(11)] = inst_12106__$1);

return statearr_12164;
})();
if(cljs.core.truth_(inst_12106__$1)){
var statearr_12166_12309 = state_12130__$1;
(statearr_12166_12309[(1)] = (19));

} else {
var statearr_12167_12310 = state_12130__$1;
(statearr_12167_12310[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (25))){
var inst_12117 = (state_12130[(2)]);
var state_12130__$1 = state_12130;
var statearr_12168_12311 = state_12130__$1;
(statearr_12168_12311[(2)] = inst_12117);

(statearr_12168_12311[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (17))){
var inst_12077 = (state_12130[(10)]);
var inst_12087 = cljs.core.first.call(null,inst_12077);
var inst_12088 = cljs.core.async.muxch_STAR_.call(null,inst_12087);
var inst_12089 = cljs.core.async.close_BANG_.call(null,inst_12088);
var inst_12091 = cljs.core.next.call(null,inst_12077);
var inst_12061 = inst_12091;
var inst_12062 = null;
var inst_12063 = (0);
var inst_12064 = (0);
var state_12130__$1 = (function (){var statearr_12172 = state_12130;
(statearr_12172[(12)] = inst_12089);

(statearr_12172[(13)] = inst_12061);

(statearr_12172[(14)] = inst_12062);

(statearr_12172[(15)] = inst_12063);

(statearr_12172[(16)] = inst_12064);

return statearr_12172;
})();
var statearr_12175_12314 = state_12130__$1;
(statearr_12175_12314[(2)] = null);

(statearr_12175_12314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (3))){
var inst_12126 = (state_12130[(2)]);
var state_12130__$1 = state_12130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12130__$1,inst_12126);
} else {
if((state_val_12131 === (12))){
var inst_12100 = (state_12130[(2)]);
var state_12130__$1 = state_12130;
var statearr_12179_12318 = state_12130__$1;
(statearr_12179_12318[(2)] = inst_12100);

(statearr_12179_12318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (2))){
var state_12130__$1 = state_12130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12130__$1,(4),ch);
} else {
if((state_val_12131 === (23))){
var state_12130__$1 = state_12130;
var statearr_12182_12321 = state_12130__$1;
(statearr_12182_12321[(2)] = null);

(statearr_12182_12321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (19))){
var inst_12106 = (state_12130[(11)]);
var inst_12051 = (state_12130[(8)]);
var inst_12110 = cljs.core.async.muxch_STAR_.call(null,inst_12106);
var state_12130__$1 = state_12130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12130__$1,(22),inst_12110,inst_12051);
} else {
if((state_val_12131 === (11))){
var inst_12061 = (state_12130[(13)]);
var inst_12077 = (state_12130[(10)]);
var inst_12077__$1 = cljs.core.seq.call(null,inst_12061);
var state_12130__$1 = (function (){var statearr_12186 = state_12130;
(statearr_12186[(10)] = inst_12077__$1);

return statearr_12186;
})();
if(inst_12077__$1){
var statearr_12187_12325 = state_12130__$1;
(statearr_12187_12325[(1)] = (13));

} else {
var statearr_12188_12326 = state_12130__$1;
(statearr_12188_12326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (9))){
var inst_12102 = (state_12130[(2)]);
var state_12130__$1 = state_12130;
var statearr_12189_12328 = state_12130__$1;
(statearr_12189_12328[(2)] = inst_12102);

(statearr_12189_12328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (5))){
var inst_12058 = cljs.core.deref.call(null,mults);
var inst_12059 = cljs.core.vals.call(null,inst_12058);
var inst_12060 = cljs.core.seq.call(null,inst_12059);
var inst_12061 = inst_12060;
var inst_12062 = null;
var inst_12063 = (0);
var inst_12064 = (0);
var state_12130__$1 = (function (){var statearr_12192 = state_12130;
(statearr_12192[(13)] = inst_12061);

(statearr_12192[(14)] = inst_12062);

(statearr_12192[(15)] = inst_12063);

(statearr_12192[(16)] = inst_12064);

return statearr_12192;
})();
var statearr_12194_12330 = state_12130__$1;
(statearr_12194_12330[(2)] = null);

(statearr_12194_12330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (14))){
var state_12130__$1 = state_12130;
var statearr_12198_12331 = state_12130__$1;
(statearr_12198_12331[(2)] = null);

(statearr_12198_12331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (16))){
var inst_12077 = (state_12130[(10)]);
var inst_12081 = cljs.core.chunk_first.call(null,inst_12077);
var inst_12083 = cljs.core.chunk_rest.call(null,inst_12077);
var inst_12084 = cljs.core.count.call(null,inst_12081);
var inst_12061 = inst_12083;
var inst_12062 = inst_12081;
var inst_12063 = inst_12084;
var inst_12064 = (0);
var state_12130__$1 = (function (){var statearr_12199 = state_12130;
(statearr_12199[(13)] = inst_12061);

(statearr_12199[(14)] = inst_12062);

(statearr_12199[(15)] = inst_12063);

(statearr_12199[(16)] = inst_12064);

return statearr_12199;
})();
var statearr_12200_12334 = state_12130__$1;
(statearr_12200_12334[(2)] = null);

(statearr_12200_12334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (10))){
var inst_12062 = (state_12130[(14)]);
var inst_12064 = (state_12130[(16)]);
var inst_12061 = (state_12130[(13)]);
var inst_12063 = (state_12130[(15)]);
var inst_12069 = cljs.core._nth.call(null,inst_12062,inst_12064);
var inst_12071 = cljs.core.async.muxch_STAR_.call(null,inst_12069);
var inst_12072 = cljs.core.async.close_BANG_.call(null,inst_12071);
var inst_12074 = (inst_12064 + (1));
var tmp12195 = inst_12062;
var tmp12196 = inst_12061;
var tmp12197 = inst_12063;
var inst_12061__$1 = tmp12196;
var inst_12062__$1 = tmp12195;
var inst_12063__$1 = tmp12197;
var inst_12064__$1 = inst_12074;
var state_12130__$1 = (function (){var statearr_12203 = state_12130;
(statearr_12203[(17)] = inst_12072);

(statearr_12203[(13)] = inst_12061__$1);

(statearr_12203[(14)] = inst_12062__$1);

(statearr_12203[(15)] = inst_12063__$1);

(statearr_12203[(16)] = inst_12064__$1);

return statearr_12203;
})();
var statearr_12206_12340 = state_12130__$1;
(statearr_12206_12340[(2)] = null);

(statearr_12206_12340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (18))){
var inst_12094 = (state_12130[(2)]);
var state_12130__$1 = state_12130;
var statearr_12207_12342 = state_12130__$1;
(statearr_12207_12342[(2)] = inst_12094);

(statearr_12207_12342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12131 === (8))){
var inst_12064 = (state_12130[(16)]);
var inst_12063 = (state_12130[(15)]);
var inst_12066 = (inst_12064 < inst_12063);
var inst_12067 = inst_12066;
var state_12130__$1 = state_12130;
if(cljs.core.truth_(inst_12067)){
var statearr_12208_12345 = state_12130__$1;
(statearr_12208_12345[(1)] = (10));

} else {
var statearr_12209_12348 = state_12130__$1;
(statearr_12209_12348[(1)] = (11));

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
var cljs$core$async$state_machine__10264__auto__ = null;
var cljs$core$async$state_machine__10264__auto____0 = (function (){
var statearr_12215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12215[(0)] = cljs$core$async$state_machine__10264__auto__);

(statearr_12215[(1)] = (1));

return statearr_12215;
});
var cljs$core$async$state_machine__10264__auto____1 = (function (state_12130){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_12130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e12218){var ex__10267__auto__ = e12218;
var statearr_12219_12349 = state_12130;
(statearr_12219_12349[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_12130[(4)]))){
var statearr_12220_12350 = state_12130;
(statearr_12220_12350[(1)] = cljs.core.first.call(null,(state_12130[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12351 = state_12130;
state_12130 = G__12351;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$state_machine__10264__auto__ = function(state_12130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10264__auto____1.call(this,state_12130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10264__auto____0;
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10264__auto____1;
return cljs$core$async$state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_12224 = f__10430__auto__.call(null);
(statearr_12224[(6)] = c__10429__auto___12255);

return statearr_12224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
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
var G__12227 = arguments.length;
switch (G__12227) {
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
var G__12236 = arguments.length;
switch (G__12236) {
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
var G__12246 = arguments.length;
switch (G__12246) {
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
var c__10429__auto___12433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_12307){
var state_val_12308 = (state_12307[(1)]);
if((state_val_12308 === (7))){
var state_12307__$1 = state_12307;
var statearr_12312_12437 = state_12307__$1;
(statearr_12312_12437[(2)] = null);

(statearr_12312_12437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (1))){
var state_12307__$1 = state_12307;
var statearr_12313_12439 = state_12307__$1;
(statearr_12313_12439[(2)] = null);

(statearr_12313_12439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (4))){
var inst_12251 = (state_12307[(7)]);
var inst_12250 = (state_12307[(8)]);
var inst_12253 = (inst_12251 < inst_12250);
var state_12307__$1 = state_12307;
if(cljs.core.truth_(inst_12253)){
var statearr_12316_12440 = state_12307__$1;
(statearr_12316_12440[(1)] = (6));

} else {
var statearr_12317_12441 = state_12307__$1;
(statearr_12317_12441[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (15))){
var inst_12292 = (state_12307[(9)]);
var inst_12298 = cljs.core.apply.call(null,f,inst_12292);
var state_12307__$1 = state_12307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12307__$1,(17),out,inst_12298);
} else {
if((state_val_12308 === (13))){
var inst_12292 = (state_12307[(9)]);
var inst_12292__$1 = (state_12307[(2)]);
var inst_12293 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12292__$1);
var state_12307__$1 = (function (){var statearr_12322 = state_12307;
(statearr_12322[(9)] = inst_12292__$1);

return statearr_12322;
})();
if(cljs.core.truth_(inst_12293)){
var statearr_12323_12445 = state_12307__$1;
(statearr_12323_12445[(1)] = (14));

} else {
var statearr_12324_12446 = state_12307__$1;
(statearr_12324_12446[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (6))){
var state_12307__$1 = state_12307;
var statearr_12327_12447 = state_12307__$1;
(statearr_12327_12447[(2)] = null);

(statearr_12327_12447[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (17))){
var inst_12300 = (state_12307[(2)]);
var state_12307__$1 = (function (){var statearr_12335 = state_12307;
(statearr_12335[(10)] = inst_12300);

return statearr_12335;
})();
var statearr_12336_12450 = state_12307__$1;
(statearr_12336_12450[(2)] = null);

(statearr_12336_12450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (3))){
var inst_12305 = (state_12307[(2)]);
var state_12307__$1 = state_12307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12307__$1,inst_12305);
} else {
if((state_val_12308 === (12))){
var _ = (function (){var statearr_12339 = state_12307;
(statearr_12339[(4)] = cljs.core.rest.call(null,(state_12307[(4)])));

return statearr_12339;
})();
var state_12307__$1 = state_12307;
var ex12332 = (state_12307__$1[(2)]);
var statearr_12341_12455 = state_12307__$1;
(statearr_12341_12455[(5)] = ex12332);


if((ex12332 instanceof Object)){
var statearr_12346_12460 = state_12307__$1;
(statearr_12346_12460[(1)] = (11));

(statearr_12346_12460[(5)] = null);

} else {
throw ex12332;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (2))){
var inst_12249 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12250 = cnt;
var inst_12251 = (0);
var state_12307__$1 = (function (){var statearr_12355 = state_12307;
(statearr_12355[(11)] = inst_12249);

(statearr_12355[(8)] = inst_12250);

(statearr_12355[(7)] = inst_12251);

return statearr_12355;
})();
var statearr_12356_12479 = state_12307__$1;
(statearr_12356_12479[(2)] = null);

(statearr_12356_12479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (11))){
var inst_12266 = (state_12307[(2)]);
var inst_12268 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12307__$1 = (function (){var statearr_12357 = state_12307;
(statearr_12357[(12)] = inst_12266);

return statearr_12357;
})();
var statearr_12358_12481 = state_12307__$1;
(statearr_12358_12481[(2)] = inst_12268);

(statearr_12358_12481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (9))){
var inst_12251 = (state_12307[(7)]);
var _ = (function (){var statearr_12360 = state_12307;
(statearr_12360[(4)] = cljs.core.cons.call(null,(12),(state_12307[(4)])));

return statearr_12360;
})();
var inst_12276 = chs__$1.call(null,inst_12251);
var inst_12277 = done.call(null,inst_12251);
var inst_12278 = cljs.core.async.take_BANG_.call(null,inst_12276,inst_12277);
var ___$1 = (function (){var statearr_12362 = state_12307;
(statearr_12362[(4)] = cljs.core.rest.call(null,(state_12307[(4)])));

return statearr_12362;
})();
var state_12307__$1 = state_12307;
var statearr_12363_12487 = state_12307__$1;
(statearr_12363_12487[(2)] = inst_12278);

(statearr_12363_12487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (5))){
var inst_12289 = (state_12307[(2)]);
var state_12307__$1 = (function (){var statearr_12364 = state_12307;
(statearr_12364[(13)] = inst_12289);

return statearr_12364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12307__$1,(13),dchan);
} else {
if((state_val_12308 === (14))){
var inst_12296 = cljs.core.async.close_BANG_.call(null,out);
var state_12307__$1 = state_12307;
var statearr_12365_12490 = state_12307__$1;
(statearr_12365_12490[(2)] = inst_12296);

(statearr_12365_12490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (16))){
var inst_12303 = (state_12307[(2)]);
var state_12307__$1 = state_12307;
var statearr_12366_12491 = state_12307__$1;
(statearr_12366_12491[(2)] = inst_12303);

(statearr_12366_12491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (10))){
var inst_12251 = (state_12307[(7)]);
var inst_12281 = (state_12307[(2)]);
var inst_12283 = (inst_12251 + (1));
var inst_12251__$1 = inst_12283;
var state_12307__$1 = (function (){var statearr_12367 = state_12307;
(statearr_12367[(14)] = inst_12281);

(statearr_12367[(7)] = inst_12251__$1);

return statearr_12367;
})();
var statearr_12368_12493 = state_12307__$1;
(statearr_12368_12493[(2)] = null);

(statearr_12368_12493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (8))){
var inst_12287 = (state_12307[(2)]);
var state_12307__$1 = state_12307;
var statearr_12369_12495 = state_12307__$1;
(statearr_12369_12495[(2)] = inst_12287);

(statearr_12369_12495[(1)] = (5));


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
var cljs$core$async$state_machine__10264__auto__ = null;
var cljs$core$async$state_machine__10264__auto____0 = (function (){
var statearr_12370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12370[(0)] = cljs$core$async$state_machine__10264__auto__);

(statearr_12370[(1)] = (1));

return statearr_12370;
});
var cljs$core$async$state_machine__10264__auto____1 = (function (state_12307){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_12307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e12371){var ex__10267__auto__ = e12371;
var statearr_12372_12499 = state_12307;
(statearr_12372_12499[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_12307[(4)]))){
var statearr_12373_12501 = state_12307;
(statearr_12373_12501[(1)] = cljs.core.first.call(null,(state_12307[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12502 = state_12307;
state_12307 = G__12502;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$state_machine__10264__auto__ = function(state_12307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10264__auto____1.call(this,state_12307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10264__auto____0;
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10264__auto____1;
return cljs$core$async$state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_12376 = f__10430__auto__.call(null);
(statearr_12376[(6)] = c__10429__auto___12433);

return statearr_12376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
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
var G__12379 = arguments.length;
switch (G__12379) {
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
var c__10429__auto___12525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_12412){
var state_val_12413 = (state_12412[(1)]);
if((state_val_12413 === (7))){
var inst_12390 = (state_12412[(7)]);
var inst_12391 = (state_12412[(8)]);
var inst_12390__$1 = (state_12412[(2)]);
var inst_12391__$1 = cljs.core.nth.call(null,inst_12390__$1,(0),null);
var inst_12392 = cljs.core.nth.call(null,inst_12390__$1,(1),null);
var inst_12393 = (inst_12391__$1 == null);
var state_12412__$1 = (function (){var statearr_12414 = state_12412;
(statearr_12414[(7)] = inst_12390__$1);

(statearr_12414[(8)] = inst_12391__$1);

(statearr_12414[(9)] = inst_12392);

return statearr_12414;
})();
if(cljs.core.truth_(inst_12393)){
var statearr_12415_12536 = state_12412__$1;
(statearr_12415_12536[(1)] = (8));

} else {
var statearr_12416_12537 = state_12412__$1;
(statearr_12416_12537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (1))){
var inst_12380 = cljs.core.vec.call(null,chs);
var inst_12381 = inst_12380;
var state_12412__$1 = (function (){var statearr_12417 = state_12412;
(statearr_12417[(10)] = inst_12381);

return statearr_12417;
})();
var statearr_12418_12543 = state_12412__$1;
(statearr_12418_12543[(2)] = null);

(statearr_12418_12543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (4))){
var inst_12381 = (state_12412[(10)]);
var state_12412__$1 = state_12412;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12412__$1,(7),inst_12381);
} else {
if((state_val_12413 === (6))){
var inst_12408 = (state_12412[(2)]);
var state_12412__$1 = state_12412;
var statearr_12419_12545 = state_12412__$1;
(statearr_12419_12545[(2)] = inst_12408);

(statearr_12419_12545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (3))){
var inst_12410 = (state_12412[(2)]);
var state_12412__$1 = state_12412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12412__$1,inst_12410);
} else {
if((state_val_12413 === (2))){
var inst_12381 = (state_12412[(10)]);
var inst_12383 = cljs.core.count.call(null,inst_12381);
var inst_12384 = (inst_12383 > (0));
var state_12412__$1 = state_12412;
if(cljs.core.truth_(inst_12384)){
var statearr_12421_12546 = state_12412__$1;
(statearr_12421_12546[(1)] = (4));

} else {
var statearr_12422_12547 = state_12412__$1;
(statearr_12422_12547[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (11))){
var inst_12381 = (state_12412[(10)]);
var inst_12401 = (state_12412[(2)]);
var tmp12420 = inst_12381;
var inst_12381__$1 = tmp12420;
var state_12412__$1 = (function (){var statearr_12423 = state_12412;
(statearr_12423[(11)] = inst_12401);

(statearr_12423[(10)] = inst_12381__$1);

return statearr_12423;
})();
var statearr_12424_12551 = state_12412__$1;
(statearr_12424_12551[(2)] = null);

(statearr_12424_12551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (9))){
var inst_12391 = (state_12412[(8)]);
var state_12412__$1 = state_12412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12412__$1,(11),out,inst_12391);
} else {
if((state_val_12413 === (5))){
var inst_12406 = cljs.core.async.close_BANG_.call(null,out);
var state_12412__$1 = state_12412;
var statearr_12426_12552 = state_12412__$1;
(statearr_12426_12552[(2)] = inst_12406);

(statearr_12426_12552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (10))){
var inst_12404 = (state_12412[(2)]);
var state_12412__$1 = state_12412;
var statearr_12427_12554 = state_12412__$1;
(statearr_12427_12554[(2)] = inst_12404);

(statearr_12427_12554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (8))){
var inst_12381 = (state_12412[(10)]);
var inst_12390 = (state_12412[(7)]);
var inst_12391 = (state_12412[(8)]);
var inst_12392 = (state_12412[(9)]);
var inst_12396 = (function (){var cs = inst_12381;
var vec__12386 = inst_12390;
var v = inst_12391;
var c = inst_12392;
return (function (p1__12377_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12377_SHARP_);
});
})();
var inst_12397 = cljs.core.filterv.call(null,inst_12396,inst_12381);
var inst_12381__$1 = inst_12397;
var state_12412__$1 = (function (){var statearr_12428 = state_12412;
(statearr_12428[(10)] = inst_12381__$1);

return statearr_12428;
})();
var statearr_12429_12555 = state_12412__$1;
(statearr_12429_12555[(2)] = null);

(statearr_12429_12555[(1)] = (2));


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
var cljs$core$async$state_machine__10264__auto__ = null;
var cljs$core$async$state_machine__10264__auto____0 = (function (){
var statearr_12431 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12431[(0)] = cljs$core$async$state_machine__10264__auto__);

(statearr_12431[(1)] = (1));

return statearr_12431;
});
var cljs$core$async$state_machine__10264__auto____1 = (function (state_12412){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_12412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e12434){var ex__10267__auto__ = e12434;
var statearr_12435_12560 = state_12412;
(statearr_12435_12560[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_12412[(4)]))){
var statearr_12436_12561 = state_12412;
(statearr_12436_12561[(1)] = cljs.core.first.call(null,(state_12412[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12563 = state_12412;
state_12412 = G__12563;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$state_machine__10264__auto__ = function(state_12412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10264__auto____1.call(this,state_12412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10264__auto____0;
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10264__auto____1;
return cljs$core$async$state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_12438 = f__10430__auto__.call(null);
(statearr_12438[(6)] = c__10429__auto___12525);

return statearr_12438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
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
var G__12444 = arguments.length;
switch (G__12444) {
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
var c__10429__auto___12570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_12478){
var state_val_12480 = (state_12478[(1)]);
if((state_val_12480 === (7))){
var inst_12457 = (state_12478[(7)]);
var inst_12457__$1 = (state_12478[(2)]);
var inst_12459 = (inst_12457__$1 == null);
var inst_12461 = cljs.core.not.call(null,inst_12459);
var state_12478__$1 = (function (){var statearr_12484 = state_12478;
(statearr_12484[(7)] = inst_12457__$1);

return statearr_12484;
})();
if(inst_12461){
var statearr_12485_12574 = state_12478__$1;
(statearr_12485_12574[(1)] = (8));

} else {
var statearr_12486_12575 = state_12478__$1;
(statearr_12486_12575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (1))){
var inst_12451 = (0);
var state_12478__$1 = (function (){var statearr_12488 = state_12478;
(statearr_12488[(8)] = inst_12451);

return statearr_12488;
})();
var statearr_12489_12580 = state_12478__$1;
(statearr_12489_12580[(2)] = null);

(statearr_12489_12580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (4))){
var state_12478__$1 = state_12478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12478__$1,(7),ch);
} else {
if((state_val_12480 === (6))){
var inst_12473 = (state_12478[(2)]);
var state_12478__$1 = state_12478;
var statearr_12492_12581 = state_12478__$1;
(statearr_12492_12581[(2)] = inst_12473);

(statearr_12492_12581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (3))){
var inst_12475 = (state_12478[(2)]);
var inst_12476 = cljs.core.async.close_BANG_.call(null,out);
var state_12478__$1 = (function (){var statearr_12494 = state_12478;
(statearr_12494[(9)] = inst_12475);

return statearr_12494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12478__$1,inst_12476);
} else {
if((state_val_12480 === (2))){
var inst_12451 = (state_12478[(8)]);
var inst_12453 = (inst_12451 < n);
var state_12478__$1 = state_12478;
if(cljs.core.truth_(inst_12453)){
var statearr_12496_12597 = state_12478__$1;
(statearr_12496_12597[(1)] = (4));

} else {
var statearr_12497_12605 = state_12478__$1;
(statearr_12497_12605[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (11))){
var inst_12451 = (state_12478[(8)]);
var inst_12464 = (state_12478[(2)]);
var inst_12466 = (inst_12451 + (1));
var inst_12451__$1 = inst_12466;
var state_12478__$1 = (function (){var statearr_12498 = state_12478;
(statearr_12498[(10)] = inst_12464);

(statearr_12498[(8)] = inst_12451__$1);

return statearr_12498;
})();
var statearr_12500_12611 = state_12478__$1;
(statearr_12500_12611[(2)] = null);

(statearr_12500_12611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (9))){
var state_12478__$1 = state_12478;
var statearr_12503_12612 = state_12478__$1;
(statearr_12503_12612[(2)] = null);

(statearr_12503_12612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (5))){
var state_12478__$1 = state_12478;
var statearr_12504_12613 = state_12478__$1;
(statearr_12504_12613[(2)] = null);

(statearr_12504_12613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (10))){
var inst_12470 = (state_12478[(2)]);
var state_12478__$1 = state_12478;
var statearr_12506_12619 = state_12478__$1;
(statearr_12506_12619[(2)] = inst_12470);

(statearr_12506_12619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12480 === (8))){
var inst_12457 = (state_12478[(7)]);
var state_12478__$1 = state_12478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12478__$1,(11),out,inst_12457);
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
var cljs$core$async$state_machine__10264__auto__ = null;
var cljs$core$async$state_machine__10264__auto____0 = (function (){
var statearr_12509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12509[(0)] = cljs$core$async$state_machine__10264__auto__);

(statearr_12509[(1)] = (1));

return statearr_12509;
});
var cljs$core$async$state_machine__10264__auto____1 = (function (state_12478){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_12478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e12510){var ex__10267__auto__ = e12510;
var statearr_12511_12629 = state_12478;
(statearr_12511_12629[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_12478[(4)]))){
var statearr_12513_12632 = state_12478;
(statearr_12513_12632[(1)] = cljs.core.first.call(null,(state_12478[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12634 = state_12478;
state_12478 = G__12634;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$state_machine__10264__auto__ = function(state_12478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10264__auto____1.call(this,state_12478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10264__auto____0;
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10264__auto____1;
return cljs$core$async$state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_12515 = f__10430__auto__.call(null);
(statearr_12515[(6)] = c__10429__auto___12570);

return statearr_12515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12517 = (function (f,ch,meta12518){
this.f = f;
this.ch = ch;
this.meta12518 = meta12518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12519,meta12518__$1){
var self__ = this;
var _12519__$1 = this;
return (new cljs.core.async.t_cljs$core$async12517(self__.f,self__.ch,meta12518__$1));
}));

(cljs.core.async.t_cljs$core$async12517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12519){
var self__ = this;
var _12519__$1 = this;
return self__.meta12518;
}));

(cljs.core.async.t_cljs$core$async12517.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12517.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12517.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12517.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12517.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12533 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12533 = (function (f,ch,meta12518,_,fn1,meta12534){
this.f = f;
this.ch = ch;
this.meta12518 = meta12518;
this._ = _;
this.fn1 = fn1;
this.meta12534 = meta12534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12535,meta12534__$1){
var self__ = this;
var _12535__$1 = this;
return (new cljs.core.async.t_cljs$core$async12533(self__.f,self__.ch,self__.meta12518,self__._,self__.fn1,meta12534__$1));
}));

(cljs.core.async.t_cljs$core$async12533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12535){
var self__ = this;
var _12535__$1 = this;
return self__.meta12534;
}));

(cljs.core.async.t_cljs$core$async12533.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12533.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__12516_SHARP_){
return f1.call(null,(((p1__12516_SHARP_ == null))?null:self__.f.call(null,p1__12516_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async12533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12518","meta12518",-2057286576,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12517","cljs.core.async/t_cljs$core$async12517",725912854,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12534","meta12534",1997378522,null)], null);
}));

(cljs.core.async.t_cljs$core$async12533.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12533");

(cljs.core.async.t_cljs$core$async12533.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12533");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12533.
 */
cljs.core.async.__GT_t_cljs$core$async12533 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12533(f__$1,ch__$1,meta12518__$1,___$2,fn1__$1,meta12534){
return (new cljs.core.async.t_cljs$core$async12533(f__$1,ch__$1,meta12518__$1,___$2,fn1__$1,meta12534));
});

}

return (new cljs.core.async.t_cljs$core$async12533(self__.f,self__.ch,self__.meta12518,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async12517.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12517.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12518","meta12518",-2057286576,null)], null);
}));

(cljs.core.async.t_cljs$core$async12517.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12517");

(cljs.core.async.t_cljs$core$async12517.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12517");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12517.
 */
cljs.core.async.__GT_t_cljs$core$async12517 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12517(f__$1,ch__$1,meta12518){
return (new cljs.core.async.t_cljs$core$async12517(f__$1,ch__$1,meta12518));
});

}

return (new cljs.core.async.t_cljs$core$async12517(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12548 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12548 = (function (f,ch,meta12549){
this.f = f;
this.ch = ch;
this.meta12549 = meta12549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12550,meta12549__$1){
var self__ = this;
var _12550__$1 = this;
return (new cljs.core.async.t_cljs$core$async12548(self__.f,self__.ch,meta12549__$1));
}));

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12550){
var self__ = this;
var _12550__$1 = this;
return self__.meta12549;
}));

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async12548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12549","meta12549",1996276862,null)], null);
}));

(cljs.core.async.t_cljs$core$async12548.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12548");

(cljs.core.async.t_cljs$core$async12548.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12548");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12548.
 */
cljs.core.async.__GT_t_cljs$core$async12548 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12548(f__$1,ch__$1,meta12549){
return (new cljs.core.async.t_cljs$core$async12548(f__$1,ch__$1,meta12549));
});

}

return (new cljs.core.async.t_cljs$core$async12548(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12557 = (function (p,ch,meta12558){
this.p = p;
this.ch = ch;
this.meta12558 = meta12558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12559,meta12558__$1){
var self__ = this;
var _12559__$1 = this;
return (new cljs.core.async.t_cljs$core$async12557(self__.p,self__.ch,meta12558__$1));
}));

(cljs.core.async.t_cljs$core$async12557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12559){
var self__ = this;
var _12559__$1 = this;
return self__.meta12558;
}));

(cljs.core.async.t_cljs$core$async12557.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12557.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12557.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12557.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12557.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12557.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12557.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12558","meta12558",1351445785,null)], null);
}));

(cljs.core.async.t_cljs$core$async12557.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12557");

(cljs.core.async.t_cljs$core$async12557.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12557");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12557.
 */
cljs.core.async.__GT_t_cljs$core$async12557 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12557(p__$1,ch__$1,meta12558){
return (new cljs.core.async.t_cljs$core$async12557(p__$1,ch__$1,meta12558));
});

}

return (new cljs.core.async.t_cljs$core$async12557(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12573 = arguments.length;
switch (G__12573) {
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
var c__10429__auto___12778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_12609){
var state_val_12610 = (state_12609[(1)]);
if((state_val_12610 === (7))){
var inst_12601 = (state_12609[(2)]);
var state_12609__$1 = state_12609;
var statearr_12618_12779 = state_12609__$1;
(statearr_12618_12779[(2)] = inst_12601);

(statearr_12618_12779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12610 === (1))){
var state_12609__$1 = state_12609;
var statearr_12620_12780 = state_12609__$1;
(statearr_12620_12780[(2)] = null);

(statearr_12620_12780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12610 === (4))){
var inst_12584 = (state_12609[(7)]);
var inst_12584__$1 = (state_12609[(2)]);
var inst_12586 = (inst_12584__$1 == null);
var state_12609__$1 = (function (){var statearr_12624 = state_12609;
(statearr_12624[(7)] = inst_12584__$1);

return statearr_12624;
})();
if(cljs.core.truth_(inst_12586)){
var statearr_12627_12784 = state_12609__$1;
(statearr_12627_12784[(1)] = (5));

} else {
var statearr_12628_12785 = state_12609__$1;
(statearr_12628_12785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12610 === (6))){
var inst_12584 = (state_12609[(7)]);
var inst_12590 = p.call(null,inst_12584);
var state_12609__$1 = state_12609;
if(cljs.core.truth_(inst_12590)){
var statearr_12631_12786 = state_12609__$1;
(statearr_12631_12786[(1)] = (8));

} else {
var statearr_12633_12787 = state_12609__$1;
(statearr_12633_12787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12610 === (3))){
var inst_12603 = (state_12609[(2)]);
var state_12609__$1 = state_12609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12609__$1,inst_12603);
} else {
if((state_val_12610 === (2))){
var state_12609__$1 = state_12609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12609__$1,(4),ch);
} else {
if((state_val_12610 === (11))){
var inst_12594 = (state_12609[(2)]);
var state_12609__$1 = state_12609;
var statearr_12636_12788 = state_12609__$1;
(statearr_12636_12788[(2)] = inst_12594);

(statearr_12636_12788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12610 === (9))){
var state_12609__$1 = state_12609;
var statearr_12637_12789 = state_12609__$1;
(statearr_12637_12789[(2)] = null);

(statearr_12637_12789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12610 === (5))){
var inst_12588 = cljs.core.async.close_BANG_.call(null,out);
var state_12609__$1 = state_12609;
var statearr_12638_12791 = state_12609__$1;
(statearr_12638_12791[(2)] = inst_12588);

(statearr_12638_12791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12610 === (10))){
var inst_12598 = (state_12609[(2)]);
var state_12609__$1 = (function (){var statearr_12639 = state_12609;
(statearr_12639[(8)] = inst_12598);

return statearr_12639;
})();
var statearr_12640_12794 = state_12609__$1;
(statearr_12640_12794[(2)] = null);

(statearr_12640_12794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12610 === (8))){
var inst_12584 = (state_12609[(7)]);
var state_12609__$1 = state_12609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12609__$1,(11),out,inst_12584);
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
var cljs$core$async$state_machine__10264__auto__ = null;
var cljs$core$async$state_machine__10264__auto____0 = (function (){
var statearr_12642 = [null,null,null,null,null,null,null,null,null];
(statearr_12642[(0)] = cljs$core$async$state_machine__10264__auto__);

(statearr_12642[(1)] = (1));

return statearr_12642;
});
var cljs$core$async$state_machine__10264__auto____1 = (function (state_12609){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_12609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e12643){var ex__10267__auto__ = e12643;
var statearr_12644_12796 = state_12609;
(statearr_12644_12796[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_12609[(4)]))){
var statearr_12647_12797 = state_12609;
(statearr_12647_12797[(1)] = cljs.core.first.call(null,(state_12609[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12798 = state_12609;
state_12609 = G__12798;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$state_machine__10264__auto__ = function(state_12609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10264__auto____1.call(this,state_12609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10264__auto____0;
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10264__auto____1;
return cljs$core$async$state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_12650 = f__10430__auto__.call(null);
(statearr_12650[(6)] = c__10429__auto___12778);

return statearr_12650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12653 = arguments.length;
switch (G__12653) {
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
var c__10429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_12719){
var state_val_12720 = (state_12719[(1)]);
if((state_val_12720 === (7))){
var inst_12715 = (state_12719[(2)]);
var state_12719__$1 = state_12719;
var statearr_12721_12835 = state_12719__$1;
(statearr_12721_12835[(2)] = inst_12715);

(statearr_12721_12835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (20))){
var inst_12684 = (state_12719[(7)]);
var inst_12695 = (state_12719[(2)]);
var inst_12696 = cljs.core.next.call(null,inst_12684);
var inst_12668 = inst_12696;
var inst_12669 = null;
var inst_12670 = (0);
var inst_12671 = (0);
var state_12719__$1 = (function (){var statearr_12724 = state_12719;
(statearr_12724[(8)] = inst_12695);

(statearr_12724[(9)] = inst_12668);

(statearr_12724[(10)] = inst_12669);

(statearr_12724[(11)] = inst_12670);

(statearr_12724[(12)] = inst_12671);

return statearr_12724;
})();
var statearr_12727_12839 = state_12719__$1;
(statearr_12727_12839[(2)] = null);

(statearr_12727_12839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (1))){
var state_12719__$1 = state_12719;
var statearr_12729_12840 = state_12719__$1;
(statearr_12729_12840[(2)] = null);

(statearr_12729_12840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (4))){
var inst_12656 = (state_12719[(13)]);
var inst_12656__$1 = (state_12719[(2)]);
var inst_12657 = (inst_12656__$1 == null);
var state_12719__$1 = (function (){var statearr_12730 = state_12719;
(statearr_12730[(13)] = inst_12656__$1);

return statearr_12730;
})();
if(cljs.core.truth_(inst_12657)){
var statearr_12731_12842 = state_12719__$1;
(statearr_12731_12842[(1)] = (5));

} else {
var statearr_12732_12844 = state_12719__$1;
(statearr_12732_12844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (15))){
var state_12719__$1 = state_12719;
var statearr_12736_12847 = state_12719__$1;
(statearr_12736_12847[(2)] = null);

(statearr_12736_12847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (21))){
var state_12719__$1 = state_12719;
var statearr_12738_12848 = state_12719__$1;
(statearr_12738_12848[(2)] = null);

(statearr_12738_12848[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (13))){
var inst_12671 = (state_12719[(12)]);
var inst_12668 = (state_12719[(9)]);
var inst_12669 = (state_12719[(10)]);
var inst_12670 = (state_12719[(11)]);
var inst_12680 = (state_12719[(2)]);
var inst_12681 = (inst_12671 + (1));
var tmp12733 = inst_12669;
var tmp12734 = inst_12670;
var tmp12735 = inst_12668;
var inst_12668__$1 = tmp12735;
var inst_12669__$1 = tmp12733;
var inst_12670__$1 = tmp12734;
var inst_12671__$1 = inst_12681;
var state_12719__$1 = (function (){var statearr_12739 = state_12719;
(statearr_12739[(14)] = inst_12680);

(statearr_12739[(9)] = inst_12668__$1);

(statearr_12739[(10)] = inst_12669__$1);

(statearr_12739[(11)] = inst_12670__$1);

(statearr_12739[(12)] = inst_12671__$1);

return statearr_12739;
})();
var statearr_12741_12850 = state_12719__$1;
(statearr_12741_12850[(2)] = null);

(statearr_12741_12850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (22))){
var state_12719__$1 = state_12719;
var statearr_12744_12853 = state_12719__$1;
(statearr_12744_12853[(2)] = null);

(statearr_12744_12853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (6))){
var inst_12656 = (state_12719[(13)]);
var inst_12666 = f.call(null,inst_12656);
var inst_12667 = cljs.core.seq.call(null,inst_12666);
var inst_12668 = inst_12667;
var inst_12669 = null;
var inst_12670 = (0);
var inst_12671 = (0);
var state_12719__$1 = (function (){var statearr_12745 = state_12719;
(statearr_12745[(9)] = inst_12668);

(statearr_12745[(10)] = inst_12669);

(statearr_12745[(11)] = inst_12670);

(statearr_12745[(12)] = inst_12671);

return statearr_12745;
})();
var statearr_12747_12854 = state_12719__$1;
(statearr_12747_12854[(2)] = null);

(statearr_12747_12854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (17))){
var inst_12684 = (state_12719[(7)]);
var inst_12688 = cljs.core.chunk_first.call(null,inst_12684);
var inst_12689 = cljs.core.chunk_rest.call(null,inst_12684);
var inst_12690 = cljs.core.count.call(null,inst_12688);
var inst_12668 = inst_12689;
var inst_12669 = inst_12688;
var inst_12670 = inst_12690;
var inst_12671 = (0);
var state_12719__$1 = (function (){var statearr_12751 = state_12719;
(statearr_12751[(9)] = inst_12668);

(statearr_12751[(10)] = inst_12669);

(statearr_12751[(11)] = inst_12670);

(statearr_12751[(12)] = inst_12671);

return statearr_12751;
})();
var statearr_12752_12855 = state_12719__$1;
(statearr_12752_12855[(2)] = null);

(statearr_12752_12855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (3))){
var inst_12717 = (state_12719[(2)]);
var state_12719__$1 = state_12719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12719__$1,inst_12717);
} else {
if((state_val_12720 === (12))){
var inst_12704 = (state_12719[(2)]);
var state_12719__$1 = state_12719;
var statearr_12753_12857 = state_12719__$1;
(statearr_12753_12857[(2)] = inst_12704);

(statearr_12753_12857[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (2))){
var state_12719__$1 = state_12719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12719__$1,(4),in$);
} else {
if((state_val_12720 === (23))){
var inst_12713 = (state_12719[(2)]);
var state_12719__$1 = state_12719;
var statearr_12754_12861 = state_12719__$1;
(statearr_12754_12861[(2)] = inst_12713);

(statearr_12754_12861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (19))){
var inst_12699 = (state_12719[(2)]);
var state_12719__$1 = state_12719;
var statearr_12755_12866 = state_12719__$1;
(statearr_12755_12866[(2)] = inst_12699);

(statearr_12755_12866[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (11))){
var inst_12668 = (state_12719[(9)]);
var inst_12684 = (state_12719[(7)]);
var inst_12684__$1 = cljs.core.seq.call(null,inst_12668);
var state_12719__$1 = (function (){var statearr_12756 = state_12719;
(statearr_12756[(7)] = inst_12684__$1);

return statearr_12756;
})();
if(inst_12684__$1){
var statearr_12757_12886 = state_12719__$1;
(statearr_12757_12886[(1)] = (14));

} else {
var statearr_12758_12887 = state_12719__$1;
(statearr_12758_12887[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (9))){
var inst_12706 = (state_12719[(2)]);
var inst_12707 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12719__$1 = (function (){var statearr_12759 = state_12719;
(statearr_12759[(15)] = inst_12706);

return statearr_12759;
})();
if(cljs.core.truth_(inst_12707)){
var statearr_12760_12890 = state_12719__$1;
(statearr_12760_12890[(1)] = (21));

} else {
var statearr_12762_12891 = state_12719__$1;
(statearr_12762_12891[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (5))){
var inst_12659 = cljs.core.async.close_BANG_.call(null,out);
var state_12719__$1 = state_12719;
var statearr_12763_12892 = state_12719__$1;
(statearr_12763_12892[(2)] = inst_12659);

(statearr_12763_12892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (14))){
var inst_12684 = (state_12719[(7)]);
var inst_12686 = cljs.core.chunked_seq_QMARK_.call(null,inst_12684);
var state_12719__$1 = state_12719;
if(inst_12686){
var statearr_12764_12894 = state_12719__$1;
(statearr_12764_12894[(1)] = (17));

} else {
var statearr_12765_12896 = state_12719__$1;
(statearr_12765_12896[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (16))){
var inst_12702 = (state_12719[(2)]);
var state_12719__$1 = state_12719;
var statearr_12766_12898 = state_12719__$1;
(statearr_12766_12898[(2)] = inst_12702);

(statearr_12766_12898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12720 === (10))){
var inst_12669 = (state_12719[(10)]);
var inst_12671 = (state_12719[(12)]);
var inst_12678 = cljs.core._nth.call(null,inst_12669,inst_12671);
var state_12719__$1 = state_12719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12719__$1,(13),out,inst_12678);
} else {
if((state_val_12720 === (18))){
var inst_12684 = (state_12719[(7)]);
var inst_12693 = cljs.core.first.call(null,inst_12684);
var state_12719__$1 = state_12719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12719__$1,(20),out,inst_12693);
} else {
if((state_val_12720 === (8))){
var inst_12671 = (state_12719[(12)]);
var inst_12670 = (state_12719[(11)]);
var inst_12675 = (inst_12671 < inst_12670);
var inst_12676 = inst_12675;
var state_12719__$1 = state_12719;
if(cljs.core.truth_(inst_12676)){
var statearr_12809_12899 = state_12719__$1;
(statearr_12809_12899[(1)] = (10));

} else {
var statearr_12810_12900 = state_12719__$1;
(statearr_12810_12900[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10264__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10264__auto____0 = (function (){
var statearr_12812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12812[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10264__auto__);

(statearr_12812[(1)] = (1));

return statearr_12812;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10264__auto____1 = (function (state_12719){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_12719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e12816){var ex__10267__auto__ = e12816;
var statearr_12819_12901 = state_12719;
(statearr_12819_12901[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_12719[(4)]))){
var statearr_12823_12902 = state_12719;
(statearr_12823_12902[(1)] = cljs.core.first.call(null,(state_12719[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12905 = state_12719;
state_12719 = G__12905;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10264__auto__ = function(state_12719){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10264__auto____1.call(this,state_12719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10264__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10264__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_12828 = f__10430__auto__.call(null);
(statearr_12828[(6)] = c__10429__auto__);

return statearr_12828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
}));

return c__10429__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12830 = arguments.length;
switch (G__12830) {
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
var G__12837 = arguments.length;
switch (G__12837) {
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
var G__12846 = arguments.length;
switch (G__12846) {
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
var c__10429__auto___12960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_12888){
var state_val_12889 = (state_12888[(1)]);
if((state_val_12889 === (7))){
var inst_12881 = (state_12888[(2)]);
var state_12888__$1 = state_12888;
var statearr_12893_12993 = state_12888__$1;
(statearr_12893_12993[(2)] = inst_12881);

(statearr_12893_12993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12889 === (1))){
var inst_12862 = null;
var state_12888__$1 = (function (){var statearr_12895 = state_12888;
(statearr_12895[(7)] = inst_12862);

return statearr_12895;
})();
var statearr_12897_13002 = state_12888__$1;
(statearr_12897_13002[(2)] = null);

(statearr_12897_13002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12889 === (4))){
var inst_12865 = (state_12888[(8)]);
var inst_12865__$1 = (state_12888[(2)]);
var inst_12867 = (inst_12865__$1 == null);
var inst_12868 = cljs.core.not.call(null,inst_12867);
var state_12888__$1 = (function (){var statearr_12910 = state_12888;
(statearr_12910[(8)] = inst_12865__$1);

return statearr_12910;
})();
if(inst_12868){
var statearr_12911_13006 = state_12888__$1;
(statearr_12911_13006[(1)] = (5));

} else {
var statearr_12912_13007 = state_12888__$1;
(statearr_12912_13007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12889 === (6))){
var state_12888__$1 = state_12888;
var statearr_12913_13008 = state_12888__$1;
(statearr_12913_13008[(2)] = null);

(statearr_12913_13008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12889 === (3))){
var inst_12883 = (state_12888[(2)]);
var inst_12884 = cljs.core.async.close_BANG_.call(null,out);
var state_12888__$1 = (function (){var statearr_12914 = state_12888;
(statearr_12914[(9)] = inst_12883);

return statearr_12914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12888__$1,inst_12884);
} else {
if((state_val_12889 === (2))){
var state_12888__$1 = state_12888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12888__$1,(4),ch);
} else {
if((state_val_12889 === (11))){
var inst_12865 = (state_12888[(8)]);
var inst_12875 = (state_12888[(2)]);
var inst_12862 = inst_12865;
var state_12888__$1 = (function (){var statearr_12915 = state_12888;
(statearr_12915[(10)] = inst_12875);

(statearr_12915[(7)] = inst_12862);

return statearr_12915;
})();
var statearr_12916_13013 = state_12888__$1;
(statearr_12916_13013[(2)] = null);

(statearr_12916_13013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12889 === (9))){
var inst_12865 = (state_12888[(8)]);
var state_12888__$1 = state_12888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12888__$1,(11),out,inst_12865);
} else {
if((state_val_12889 === (5))){
var inst_12865 = (state_12888[(8)]);
var inst_12862 = (state_12888[(7)]);
var inst_12870 = cljs.core._EQ_.call(null,inst_12865,inst_12862);
var state_12888__$1 = state_12888;
if(inst_12870){
var statearr_12918_13016 = state_12888__$1;
(statearr_12918_13016[(1)] = (8));

} else {
var statearr_12919_13017 = state_12888__$1;
(statearr_12919_13017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12889 === (10))){
var inst_12878 = (state_12888[(2)]);
var state_12888__$1 = state_12888;
var statearr_12920_13020 = state_12888__$1;
(statearr_12920_13020[(2)] = inst_12878);

(statearr_12920_13020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12889 === (8))){
var inst_12862 = (state_12888[(7)]);
var tmp12917 = inst_12862;
var inst_12862__$1 = tmp12917;
var state_12888__$1 = (function (){var statearr_12921 = state_12888;
(statearr_12921[(7)] = inst_12862__$1);

return statearr_12921;
})();
var statearr_12922_13022 = state_12888__$1;
(statearr_12922_13022[(2)] = null);

(statearr_12922_13022[(1)] = (2));


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
var cljs$core$async$state_machine__10264__auto__ = null;
var cljs$core$async$state_machine__10264__auto____0 = (function (){
var statearr_12925 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12925[(0)] = cljs$core$async$state_machine__10264__auto__);

(statearr_12925[(1)] = (1));

return statearr_12925;
});
var cljs$core$async$state_machine__10264__auto____1 = (function (state_12888){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_12888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e12926){var ex__10267__auto__ = e12926;
var statearr_12938_13025 = state_12888;
(statearr_12938_13025[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_12888[(4)]))){
var statearr_12939_13026 = state_12888;
(statearr_12939_13026[(1)] = cljs.core.first.call(null,(state_12888[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13027 = state_12888;
state_12888 = G__13027;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$state_machine__10264__auto__ = function(state_12888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10264__auto____1.call(this,state_12888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10264__auto____0;
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10264__auto____1;
return cljs$core$async$state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_12944 = f__10430__auto__.call(null);
(statearr_12944[(6)] = c__10429__auto___12960);

return statearr_12944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12948 = arguments.length;
switch (G__12948) {
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
var c__10429__auto___13058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_12989){
var state_val_12990 = (state_12989[(1)]);
if((state_val_12990 === (7))){
var inst_12985 = (state_12989[(2)]);
var state_12989__$1 = state_12989;
var statearr_12992_13059 = state_12989__$1;
(statearr_12992_13059[(2)] = inst_12985);

(statearr_12992_13059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12990 === (1))){
var inst_12951 = (new Array(n));
var inst_12952 = inst_12951;
var inst_12953 = (0);
var state_12989__$1 = (function (){var statearr_12994 = state_12989;
(statearr_12994[(7)] = inst_12952);

(statearr_12994[(8)] = inst_12953);

return statearr_12994;
})();
var statearr_13000_13069 = state_12989__$1;
(statearr_13000_13069[(2)] = null);

(statearr_13000_13069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12990 === (4))){
var inst_12956 = (state_12989[(9)]);
var inst_12956__$1 = (state_12989[(2)]);
var inst_12957 = (inst_12956__$1 == null);
var inst_12958 = cljs.core.not.call(null,inst_12957);
var state_12989__$1 = (function (){var statearr_13028 = state_12989;
(statearr_13028[(9)] = inst_12956__$1);

return statearr_13028;
})();
if(inst_12958){
var statearr_13029_13084 = state_12989__$1;
(statearr_13029_13084[(1)] = (5));

} else {
var statearr_13030_13086 = state_12989__$1;
(statearr_13030_13086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12990 === (15))){
var inst_12979 = (state_12989[(2)]);
var state_12989__$1 = state_12989;
var statearr_13031_13095 = state_12989__$1;
(statearr_13031_13095[(2)] = inst_12979);

(statearr_13031_13095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12990 === (13))){
var state_12989__$1 = state_12989;
var statearr_13032_13108 = state_12989__$1;
(statearr_13032_13108[(2)] = null);

(statearr_13032_13108[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12990 === (6))){
var inst_12953 = (state_12989[(8)]);
var inst_12975 = (inst_12953 > (0));
var state_12989__$1 = state_12989;
if(cljs.core.truth_(inst_12975)){
var statearr_13034_13109 = state_12989__$1;
(statearr_13034_13109[(1)] = (12));

} else {
var statearr_13035_13110 = state_12989__$1;
(statearr_13035_13110[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12990 === (3))){
var inst_12987 = (state_12989[(2)]);
var state_12989__$1 = state_12989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12989__$1,inst_12987);
} else {
if((state_val_12990 === (12))){
var inst_12952 = (state_12989[(7)]);
var inst_12977 = cljs.core.vec.call(null,inst_12952);
var state_12989__$1 = state_12989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12989__$1,(15),out,inst_12977);
} else {
if((state_val_12990 === (2))){
var state_12989__$1 = state_12989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12989__$1,(4),ch);
} else {
if((state_val_12990 === (11))){
var inst_12969 = (state_12989[(2)]);
var inst_12970 = (new Array(n));
var inst_12952 = inst_12970;
var inst_12953 = (0);
var state_12989__$1 = (function (){var statearr_13039 = state_12989;
(statearr_13039[(10)] = inst_12969);

(statearr_13039[(7)] = inst_12952);

(statearr_13039[(8)] = inst_12953);

return statearr_13039;
})();
var statearr_13040_13114 = state_12989__$1;
(statearr_13040_13114[(2)] = null);

(statearr_13040_13114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12990 === (9))){
var inst_12952 = (state_12989[(7)]);
var inst_12967 = cljs.core.vec.call(null,inst_12952);
var state_12989__$1 = state_12989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12989__$1,(11),out,inst_12967);
} else {
if((state_val_12990 === (5))){
var inst_12952 = (state_12989[(7)]);
var inst_12953 = (state_12989[(8)]);
var inst_12956 = (state_12989[(9)]);
var inst_12962 = (state_12989[(11)]);
var inst_12961 = (inst_12952[inst_12953] = inst_12956);
var inst_12962__$1 = (inst_12953 + (1));
var inst_12963 = (inst_12962__$1 < n);
var state_12989__$1 = (function (){var statearr_13041 = state_12989;
(statearr_13041[(12)] = inst_12961);

(statearr_13041[(11)] = inst_12962__$1);

return statearr_13041;
})();
if(cljs.core.truth_(inst_12963)){
var statearr_13042_13120 = state_12989__$1;
(statearr_13042_13120[(1)] = (8));

} else {
var statearr_13043_13122 = state_12989__$1;
(statearr_13043_13122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12990 === (14))){
var inst_12982 = (state_12989[(2)]);
var inst_12983 = cljs.core.async.close_BANG_.call(null,out);
var state_12989__$1 = (function (){var statearr_13045 = state_12989;
(statearr_13045[(13)] = inst_12982);

return statearr_13045;
})();
var statearr_13046_13123 = state_12989__$1;
(statearr_13046_13123[(2)] = inst_12983);

(statearr_13046_13123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12990 === (10))){
var inst_12973 = (state_12989[(2)]);
var state_12989__$1 = state_12989;
var statearr_13047_13125 = state_12989__$1;
(statearr_13047_13125[(2)] = inst_12973);

(statearr_13047_13125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12990 === (8))){
var inst_12952 = (state_12989[(7)]);
var inst_12962 = (state_12989[(11)]);
var tmp13044 = inst_12952;
var inst_12952__$1 = tmp13044;
var inst_12953 = inst_12962;
var state_12989__$1 = (function (){var statearr_13048 = state_12989;
(statearr_13048[(7)] = inst_12952__$1);

(statearr_13048[(8)] = inst_12953);

return statearr_13048;
})();
var statearr_13049_13129 = state_12989__$1;
(statearr_13049_13129[(2)] = null);

(statearr_13049_13129[(1)] = (2));


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
var cljs$core$async$state_machine__10264__auto__ = null;
var cljs$core$async$state_machine__10264__auto____0 = (function (){
var statearr_13050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13050[(0)] = cljs$core$async$state_machine__10264__auto__);

(statearr_13050[(1)] = (1));

return statearr_13050;
});
var cljs$core$async$state_machine__10264__auto____1 = (function (state_12989){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_12989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e13051){var ex__10267__auto__ = e13051;
var statearr_13052_13133 = state_12989;
(statearr_13052_13133[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_12989[(4)]))){
var statearr_13053_13134 = state_12989;
(statearr_13053_13134[(1)] = cljs.core.first.call(null,(state_12989[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13135 = state_12989;
state_12989 = G__13135;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$state_machine__10264__auto__ = function(state_12989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10264__auto____1.call(this,state_12989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10264__auto____0;
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10264__auto____1;
return cljs$core$async$state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_13054 = f__10430__auto__.call(null);
(statearr_13054[(6)] = c__10429__auto___13058);

return statearr_13054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13056 = arguments.length;
switch (G__13056) {
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
var c__10429__auto___13163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10430__auto__ = (function (){var switch__10263__auto__ = (function (state_13111){
var state_val_13112 = (state_13111[(1)]);
if((state_val_13112 === (7))){
var inst_13104 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
var statearr_13113_13165 = state_13111__$1;
(statearr_13113_13165[(2)] = inst_13104);

(statearr_13113_13165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (1))){
var inst_13060 = [];
var inst_13061 = inst_13060;
var inst_13062 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13111__$1 = (function (){var statearr_13115 = state_13111;
(statearr_13115[(7)] = inst_13061);

(statearr_13115[(8)] = inst_13062);

return statearr_13115;
})();
var statearr_13116_13166 = state_13111__$1;
(statearr_13116_13166[(2)] = null);

(statearr_13116_13166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (4))){
var inst_13065 = (state_13111[(9)]);
var inst_13065__$1 = (state_13111[(2)]);
var inst_13066 = (inst_13065__$1 == null);
var inst_13067 = cljs.core.not.call(null,inst_13066);
var state_13111__$1 = (function (){var statearr_13117 = state_13111;
(statearr_13117[(9)] = inst_13065__$1);

return statearr_13117;
})();
if(inst_13067){
var statearr_13118_13167 = state_13111__$1;
(statearr_13118_13167[(1)] = (5));

} else {
var statearr_13119_13168 = state_13111__$1;
(statearr_13119_13168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (15))){
var inst_13061 = (state_13111[(7)]);
var inst_13096 = cljs.core.vec.call(null,inst_13061);
var state_13111__$1 = state_13111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13111__$1,(18),out,inst_13096);
} else {
if((state_val_13112 === (13))){
var inst_13090 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
var statearr_13124_13169 = state_13111__$1;
(statearr_13124_13169[(2)] = inst_13090);

(statearr_13124_13169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (6))){
var inst_13061 = (state_13111[(7)]);
var inst_13092 = inst_13061.length;
var inst_13093 = (inst_13092 > (0));
var state_13111__$1 = state_13111;
if(cljs.core.truth_(inst_13093)){
var statearr_13126_13170 = state_13111__$1;
(statearr_13126_13170[(1)] = (15));

} else {
var statearr_13128_13171 = state_13111__$1;
(statearr_13128_13171[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (17))){
var inst_13101 = (state_13111[(2)]);
var inst_13102 = cljs.core.async.close_BANG_.call(null,out);
var state_13111__$1 = (function (){var statearr_13130 = state_13111;
(statearr_13130[(10)] = inst_13101);

return statearr_13130;
})();
var statearr_13131_13172 = state_13111__$1;
(statearr_13131_13172[(2)] = inst_13102);

(statearr_13131_13172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (3))){
var inst_13106 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13111__$1,inst_13106);
} else {
if((state_val_13112 === (12))){
var inst_13061 = (state_13111[(7)]);
var inst_13081 = cljs.core.vec.call(null,inst_13061);
var state_13111__$1 = state_13111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13111__$1,(14),out,inst_13081);
} else {
if((state_val_13112 === (2))){
var state_13111__$1 = state_13111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13111__$1,(4),ch);
} else {
if((state_val_13112 === (11))){
var inst_13061 = (state_13111[(7)]);
var inst_13065 = (state_13111[(9)]);
var inst_13070 = (state_13111[(11)]);
var inst_13078 = inst_13061.push(inst_13065);
var tmp13132 = inst_13061;
var inst_13061__$1 = tmp13132;
var inst_13062 = inst_13070;
var state_13111__$1 = (function (){var statearr_13136 = state_13111;
(statearr_13136[(12)] = inst_13078);

(statearr_13136[(7)] = inst_13061__$1);

(statearr_13136[(8)] = inst_13062);

return statearr_13136;
})();
var statearr_13137_13173 = state_13111__$1;
(statearr_13137_13173[(2)] = null);

(statearr_13137_13173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (9))){
var inst_13062 = (state_13111[(8)]);
var inst_13074 = cljs.core.keyword_identical_QMARK_.call(null,inst_13062,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_13111__$1 = state_13111;
var statearr_13138_13174 = state_13111__$1;
(statearr_13138_13174[(2)] = inst_13074);

(statearr_13138_13174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (5))){
var inst_13065 = (state_13111[(9)]);
var inst_13070 = (state_13111[(11)]);
var inst_13062 = (state_13111[(8)]);
var inst_13071 = (state_13111[(13)]);
var inst_13070__$1 = f.call(null,inst_13065);
var inst_13071__$1 = cljs.core._EQ_.call(null,inst_13070__$1,inst_13062);
var state_13111__$1 = (function (){var statearr_13143 = state_13111;
(statearr_13143[(11)] = inst_13070__$1);

(statearr_13143[(13)] = inst_13071__$1);

return statearr_13143;
})();
if(inst_13071__$1){
var statearr_13144_13175 = state_13111__$1;
(statearr_13144_13175[(1)] = (8));

} else {
var statearr_13145_13176 = state_13111__$1;
(statearr_13145_13176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (14))){
var inst_13065 = (state_13111[(9)]);
var inst_13070 = (state_13111[(11)]);
var inst_13083 = (state_13111[(2)]);
var inst_13085 = [];
var inst_13087 = inst_13085.push(inst_13065);
var inst_13061 = inst_13085;
var inst_13062 = inst_13070;
var state_13111__$1 = (function (){var statearr_13146 = state_13111;
(statearr_13146[(14)] = inst_13083);

(statearr_13146[(15)] = inst_13087);

(statearr_13146[(7)] = inst_13061);

(statearr_13146[(8)] = inst_13062);

return statearr_13146;
})();
var statearr_13147_13177 = state_13111__$1;
(statearr_13147_13177[(2)] = null);

(statearr_13147_13177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (16))){
var state_13111__$1 = state_13111;
var statearr_13148_13178 = state_13111__$1;
(statearr_13148_13178[(2)] = null);

(statearr_13148_13178[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (10))){
var inst_13076 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
if(cljs.core.truth_(inst_13076)){
var statearr_13149_13179 = state_13111__$1;
(statearr_13149_13179[(1)] = (11));

} else {
var statearr_13150_13180 = state_13111__$1;
(statearr_13150_13180[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (18))){
var inst_13098 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
var statearr_13151_13182 = state_13111__$1;
(statearr_13151_13182[(2)] = inst_13098);

(statearr_13151_13182[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (8))){
var inst_13071 = (state_13111[(13)]);
var state_13111__$1 = state_13111;
var statearr_13152_13185 = state_13111__$1;
(statearr_13152_13185[(2)] = inst_13071);

(statearr_13152_13185[(1)] = (10));


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
var cljs$core$async$state_machine__10264__auto__ = null;
var cljs$core$async$state_machine__10264__auto____0 = (function (){
var statearr_13155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13155[(0)] = cljs$core$async$state_machine__10264__auto__);

(statearr_13155[(1)] = (1));

return statearr_13155;
});
var cljs$core$async$state_machine__10264__auto____1 = (function (state_13111){
while(true){
var ret_value__10265__auto__ = (function (){try{while(true){
var result__10266__auto__ = switch__10263__auto__.call(null,state_13111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10266__auto__;
}
break;
}
}catch (e13156){var ex__10267__auto__ = e13156;
var statearr_13157_13191 = state_13111;
(statearr_13157_13191[(2)] = ex__10267__auto__);


if(cljs.core.seq.call(null,(state_13111[(4)]))){
var statearr_13159_13192 = state_13111;
(statearr_13159_13192[(1)] = cljs.core.first.call(null,(state_13111[(4)])));

} else {
throw ex__10267__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13193 = state_13111;
state_13111 = G__13193;
continue;
} else {
return ret_value__10265__auto__;
}
break;
}
});
cljs$core$async$state_machine__10264__auto__ = function(state_13111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10264__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10264__auto____1.call(this,state_13111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10264__auto____0;
cljs$core$async$state_machine__10264__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10264__auto____1;
return cljs$core$async$state_machine__10264__auto__;
})()
})();
var state__10431__auto__ = (function (){var statearr_13160 = f__10430__auto__.call(null);
(statearr_13160[(6)] = c__10429__auto___13163);

return statearr_13160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10431__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
