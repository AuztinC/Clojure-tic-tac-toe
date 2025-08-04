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
var G__11843 = arguments.length;
switch (G__11843) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11844 = (function (f,blockable,meta11845){
this.f = f;
this.blockable = blockable;
this.meta11845 = meta11845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11846,meta11845__$1){
var self__ = this;
var _11846__$1 = this;
return (new cljs.core.async.t_cljs$core$async11844(self__.f,self__.blockable,meta11845__$1));
}));

(cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11846){
var self__ = this;
var _11846__$1 = this;
return self__.meta11845;
}));

(cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11845","meta11845",-1073878825,null)], null);
}));

(cljs.core.async.t_cljs$core$async11844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11844");

(cljs.core.async.t_cljs$core$async11844.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11844.
 */
cljs.core.async.__GT_t_cljs$core$async11844 = (function cljs$core$async$__GT_t_cljs$core$async11844(f__$1,blockable__$1,meta11845){
return (new cljs.core.async.t_cljs$core$async11844(f__$1,blockable__$1,meta11845));
});

}

return (new cljs.core.async.t_cljs$core$async11844(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11850 = arguments.length;
switch (G__11850) {
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
var G__11852 = arguments.length;
switch (G__11852) {
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
var G__11856 = arguments.length;
switch (G__11856) {
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
var val_11858 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11858);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_11858);
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
var G__11860 = arguments.length;
switch (G__11860) {
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
var n__5616__auto___11865 = n;
var x_11866 = (0);
while(true){
if((x_11866 < n__5616__auto___11865)){
(a[x_11866] = x_11866);

var G__11867 = (x_11866 + (1));
x_11866 = G__11867;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11862 = (function (flag,meta11863){
this.flag = flag;
this.meta11863 = meta11863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11864,meta11863__$1){
var self__ = this;
var _11864__$1 = this;
return (new cljs.core.async.t_cljs$core$async11862(self__.flag,meta11863__$1));
}));

(cljs.core.async.t_cljs$core$async11862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11864){
var self__ = this;
var _11864__$1 = this;
return self__.meta11863;
}));

(cljs.core.async.t_cljs$core$async11862.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11862.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11863","meta11863",1152938781,null)], null);
}));

(cljs.core.async.t_cljs$core$async11862.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11862");

(cljs.core.async.t_cljs$core$async11862.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11862");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11862.
 */
cljs.core.async.__GT_t_cljs$core$async11862 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11862(flag__$1,meta11863){
return (new cljs.core.async.t_cljs$core$async11862(flag__$1,meta11863));
});

}

return (new cljs.core.async.t_cljs$core$async11862(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11868 = (function (flag,cb,meta11869){
this.flag = flag;
this.cb = cb;
this.meta11869 = meta11869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11870,meta11869__$1){
var self__ = this;
var _11870__$1 = this;
return (new cljs.core.async.t_cljs$core$async11868(self__.flag,self__.cb,meta11869__$1));
}));

(cljs.core.async.t_cljs$core$async11868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11870){
var self__ = this;
var _11870__$1 = this;
return self__.meta11869;
}));

(cljs.core.async.t_cljs$core$async11868.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11868.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11868.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11868.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11869","meta11869",541851180,null)], null);
}));

(cljs.core.async.t_cljs$core$async11868.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11868");

(cljs.core.async.t_cljs$core$async11868.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11868");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11868.
 */
cljs.core.async.__GT_t_cljs$core$async11868 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11868(flag__$1,cb__$1,meta11869){
return (new cljs.core.async.t_cljs$core$async11868(flag__$1,cb__$1,meta11869));
});

}

return (new cljs.core.async.t_cljs$core$async11868(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11871_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11871_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__11872_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11872_SHARP_,port], null));
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
var G__11877 = (i + (1));
i = G__11877;
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
var len__5749__auto___11878 = arguments.length;
var i__5750__auto___11879 = (0);
while(true){
if((i__5750__auto___11879 < len__5749__auto___11878)){
args__5755__auto__.push((arguments[i__5750__auto___11879]));

var G__11880 = (i__5750__auto___11879 + (1));
i__5750__auto___11879 = G__11880;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11875){
var map__11876 = p__11875;
var map__11876__$1 = cljs.core.__destructure_map.call(null,map__11876);
var opts = map__11876__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11873){
var G__11874 = cljs.core.first.call(null,seq11873);
var seq11873__$1 = cljs.core.next.call(null,seq11873);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11874,seq11873__$1);
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
var G__11882 = arguments.length;
switch (G__11882) {
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
var c__11783__auto___11929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_11906){
var state_val_11907 = (state_11906[(1)]);
if((state_val_11907 === (7))){
var inst_11902 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11908_11931 = state_11906__$1;
(statearr_11908_11931[(2)] = inst_11902);

(statearr_11908_11931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (1))){
var state_11906__$1 = state_11906;
var statearr_11909_11935 = state_11906__$1;
(statearr_11909_11935[(2)] = null);

(statearr_11909_11935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (4))){
var inst_11885 = (state_11906[(7)]);
var inst_11885__$1 = (state_11906[(2)]);
var inst_11886 = (inst_11885__$1 == null);
var state_11906__$1 = (function (){var statearr_11910 = state_11906;
(statearr_11910[(7)] = inst_11885__$1);

return statearr_11910;
})();
if(cljs.core.truth_(inst_11886)){
var statearr_11911_11938 = state_11906__$1;
(statearr_11911_11938[(1)] = (5));

} else {
var statearr_11912_11942 = state_11906__$1;
(statearr_11912_11942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (13))){
var state_11906__$1 = state_11906;
var statearr_11913_11944 = state_11906__$1;
(statearr_11913_11944[(2)] = null);

(statearr_11913_11944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (6))){
var inst_11885 = (state_11906[(7)]);
var state_11906__$1 = state_11906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11906__$1,(11),to,inst_11885);
} else {
if((state_val_11907 === (3))){
var inst_11904 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11906__$1,inst_11904);
} else {
if((state_val_11907 === (12))){
var state_11906__$1 = state_11906;
var statearr_11914_11945 = state_11906__$1;
(statearr_11914_11945[(2)] = null);

(statearr_11914_11945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (2))){
var state_11906__$1 = state_11906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11906__$1,(4),from);
} else {
if((state_val_11907 === (11))){
var inst_11895 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
if(cljs.core.truth_(inst_11895)){
var statearr_11915_11947 = state_11906__$1;
(statearr_11915_11947[(1)] = (12));

} else {
var statearr_11916_11948 = state_11906__$1;
(statearr_11916_11948[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (9))){
var state_11906__$1 = state_11906;
var statearr_11917_11950 = state_11906__$1;
(statearr_11917_11950[(2)] = null);

(statearr_11917_11950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (5))){
var state_11906__$1 = state_11906;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11918_11953 = state_11906__$1;
(statearr_11918_11953[(1)] = (8));

} else {
var statearr_11919_11954 = state_11906__$1;
(statearr_11919_11954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (14))){
var inst_11900 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11920_11956 = state_11906__$1;
(statearr_11920_11956[(2)] = inst_11900);

(statearr_11920_11956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (10))){
var inst_11892 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11921_11957 = state_11906__$1;
(statearr_11921_11957[(2)] = inst_11892);

(statearr_11921_11957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (8))){
var inst_11889 = cljs.core.async.close_BANG_.call(null,to);
var state_11906__$1 = state_11906;
var statearr_11922_11958 = state_11906__$1;
(statearr_11922_11958[(2)] = inst_11889);

(statearr_11922_11958[(1)] = (10));


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
var cljs$core$async$state_machine__11700__auto__ = null;
var cljs$core$async$state_machine__11700__auto____0 = (function (){
var statearr_11923 = [null,null,null,null,null,null,null,null];
(statearr_11923[(0)] = cljs$core$async$state_machine__11700__auto__);

(statearr_11923[(1)] = (1));

return statearr_11923;
});
var cljs$core$async$state_machine__11700__auto____1 = (function (state_11906){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_11906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e11924){var ex__11703__auto__ = e11924;
var statearr_11925_11964 = state_11906;
(statearr_11925_11964[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_11906[(4)]))){
var statearr_11926_11965 = state_11906;
(statearr_11926_11965[(1)] = cljs.core.first.call(null,(state_11906[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11967 = state_11906;
state_11906 = G__11967;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$state_machine__11700__auto__ = function(state_11906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11700__auto____1.call(this,state_11906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11700__auto____0;
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11700__auto____1;
return cljs$core$async$state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_11927 = f__11784__auto__.call(null);
(statearr_11927[(6)] = c__11783__auto___11929);

return statearr_11927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
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
var process__$1 = (function (p__11930){
var vec__11932 = p__11930;
var v = cljs.core.nth.call(null,vec__11932,(0),null);
var p = cljs.core.nth.call(null,vec__11932,(1),null);
var job = vec__11932;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11783__auto___12126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_11941){
var state_val_11943 = (state_11941[(1)]);
if((state_val_11943 === (1))){
var state_11941__$1 = state_11941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11941__$1,(2),res,v);
} else {
if((state_val_11943 === (2))){
var inst_11937 = (state_11941[(2)]);
var inst_11939 = cljs.core.async.close_BANG_.call(null,res);
var state_11941__$1 = (function (){var statearr_11946 = state_11941;
(statearr_11946[(7)] = inst_11937);

return statearr_11946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11941__$1,inst_11939);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____0 = (function (){
var statearr_11949 = [null,null,null,null,null,null,null,null];
(statearr_11949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__);

(statearr_11949[(1)] = (1));

return statearr_11949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____1 = (function (state_11941){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_11941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e11951){var ex__11703__auto__ = e11951;
var statearr_11952_12129 = state_11941;
(statearr_11952_12129[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_11941[(4)]))){
var statearr_11955_12130 = state_11941;
(statearr_11955_12130[(1)] = cljs.core.first.call(null,(state_11941[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12131 = state_11941;
state_11941 = G__12131;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__ = function(state_11941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____1.call(this,state_11941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_11959 = f__11784__auto__.call(null);
(statearr_11959[(6)] = c__11783__auto___12126);

return statearr_11959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__11960){
var vec__11961 = p__11960;
var v = cljs.core.nth.call(null,vec__11961,(0),null);
var p = cljs.core.nth.call(null,vec__11961,(1),null);
var job = vec__11961;
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
var n__5616__auto___12132 = n;
var __12133 = (0);
while(true){
if((__12133 < n__5616__auto___12132)){
var G__11966_12134 = type;
var G__11966_12135__$1 = (((G__11966_12134 instanceof cljs.core.Keyword))?G__11966_12134.fqn:null);
switch (G__11966_12135__$1) {
case "compute":
var c__11783__auto___12137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12133,c__11783__auto___12137,G__11966_12134,G__11966_12135__$1,n__5616__auto___12132,jobs,results,process__$1,async){
return (function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = ((function (__12133,c__11783__auto___12137,G__11966_12134,G__11966_12135__$1,n__5616__auto___12132,jobs,results,process__$1,async){
return (function (state_11980){
var state_val_11981 = (state_11980[(1)]);
if((state_val_11981 === (1))){
var state_11980__$1 = state_11980;
var statearr_11982_12140 = state_11980__$1;
(statearr_11982_12140[(2)] = null);

(statearr_11982_12140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11981 === (2))){
var state_11980__$1 = state_11980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11980__$1,(4),jobs);
} else {
if((state_val_11981 === (3))){
var inst_11978 = (state_11980[(2)]);
var state_11980__$1 = state_11980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11980__$1,inst_11978);
} else {
if((state_val_11981 === (4))){
var inst_11970 = (state_11980[(2)]);
var inst_11971 = process__$1.call(null,inst_11970);
var state_11980__$1 = state_11980;
if(cljs.core.truth_(inst_11971)){
var statearr_11983_12141 = state_11980__$1;
(statearr_11983_12141[(1)] = (5));

} else {
var statearr_11984_12142 = state_11980__$1;
(statearr_11984_12142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11981 === (5))){
var state_11980__$1 = state_11980;
var statearr_11985_12144 = state_11980__$1;
(statearr_11985_12144[(2)] = null);

(statearr_11985_12144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11981 === (6))){
var state_11980__$1 = state_11980;
var statearr_11986_12149 = state_11980__$1;
(statearr_11986_12149[(2)] = null);

(statearr_11986_12149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11981 === (7))){
var inst_11976 = (state_11980[(2)]);
var state_11980__$1 = state_11980;
var statearr_11987_12158 = state_11980__$1;
(statearr_11987_12158[(2)] = inst_11976);

(statearr_11987_12158[(1)] = (3));


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
});})(__12133,c__11783__auto___12137,G__11966_12134,G__11966_12135__$1,n__5616__auto___12132,jobs,results,process__$1,async))
;
return ((function (__12133,switch__11699__auto__,c__11783__auto___12137,G__11966_12134,G__11966_12135__$1,n__5616__auto___12132,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____0 = (function (){
var statearr_11988 = [null,null,null,null,null,null,null];
(statearr_11988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__);

(statearr_11988[(1)] = (1));

return statearr_11988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____1 = (function (state_11980){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_11980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e11989){var ex__11703__auto__ = e11989;
var statearr_11990_12173 = state_11980;
(statearr_11990_12173[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_11980[(4)]))){
var statearr_11991_12174 = state_11980;
(statearr_11991_12174[(1)] = cljs.core.first.call(null,(state_11980[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12176 = state_11980;
state_11980 = G__12176;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__ = function(state_11980){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____1.call(this,state_11980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__;
})()
;})(__12133,switch__11699__auto__,c__11783__auto___12137,G__11966_12134,G__11966_12135__$1,n__5616__auto___12132,jobs,results,process__$1,async))
})();
var state__11785__auto__ = (function (){var statearr_11992 = f__11784__auto__.call(null);
(statearr_11992[(6)] = c__11783__auto___12137);

return statearr_11992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
});})(__12133,c__11783__auto___12137,G__11966_12134,G__11966_12135__$1,n__5616__auto___12132,jobs,results,process__$1,async))
);


break;
case "async":
var c__11783__auto___12178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12133,c__11783__auto___12178,G__11966_12134,G__11966_12135__$1,n__5616__auto___12132,jobs,results,process__$1,async){
return (function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = ((function (__12133,c__11783__auto___12178,G__11966_12134,G__11966_12135__$1,n__5616__auto___12132,jobs,results,process__$1,async){
return (function (state_12005){
var state_val_12006 = (state_12005[(1)]);
if((state_val_12006 === (1))){
var state_12005__$1 = state_12005;
var statearr_12007_12182 = state_12005__$1;
(statearr_12007_12182[(2)] = null);

(statearr_12007_12182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12006 === (2))){
var state_12005__$1 = state_12005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12005__$1,(4),jobs);
} else {
if((state_val_12006 === (3))){
var inst_12003 = (state_12005[(2)]);
var state_12005__$1 = state_12005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12005__$1,inst_12003);
} else {
if((state_val_12006 === (4))){
var inst_11995 = (state_12005[(2)]);
var inst_11996 = async.call(null,inst_11995);
var state_12005__$1 = state_12005;
if(cljs.core.truth_(inst_11996)){
var statearr_12008_12186 = state_12005__$1;
(statearr_12008_12186[(1)] = (5));

} else {
var statearr_12009_12187 = state_12005__$1;
(statearr_12009_12187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12006 === (5))){
var state_12005__$1 = state_12005;
var statearr_12010_12188 = state_12005__$1;
(statearr_12010_12188[(2)] = null);

(statearr_12010_12188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12006 === (6))){
var state_12005__$1 = state_12005;
var statearr_12011_12190 = state_12005__$1;
(statearr_12011_12190[(2)] = null);

(statearr_12011_12190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12006 === (7))){
var inst_12001 = (state_12005[(2)]);
var state_12005__$1 = state_12005;
var statearr_12012_12191 = state_12005__$1;
(statearr_12012_12191[(2)] = inst_12001);

(statearr_12012_12191[(1)] = (3));


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
});})(__12133,c__11783__auto___12178,G__11966_12134,G__11966_12135__$1,n__5616__auto___12132,jobs,results,process__$1,async))
;
return ((function (__12133,switch__11699__auto__,c__11783__auto___12178,G__11966_12134,G__11966_12135__$1,n__5616__auto___12132,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____0 = (function (){
var statearr_12013 = [null,null,null,null,null,null,null];
(statearr_12013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__);

(statearr_12013[(1)] = (1));

return statearr_12013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____1 = (function (state_12005){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_12005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e12014){var ex__11703__auto__ = e12014;
var statearr_12015_12194 = state_12005;
(statearr_12015_12194[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_12005[(4)]))){
var statearr_12016_12196 = state_12005;
(statearr_12016_12196[(1)] = cljs.core.first.call(null,(state_12005[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12198 = state_12005;
state_12005 = G__12198;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__ = function(state_12005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____1.call(this,state_12005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__;
})()
;})(__12133,switch__11699__auto__,c__11783__auto___12178,G__11966_12134,G__11966_12135__$1,n__5616__auto___12132,jobs,results,process__$1,async))
})();
var state__11785__auto__ = (function (){var statearr_12017 = f__11784__auto__.call(null);
(statearr_12017[(6)] = c__11783__auto___12178);

return statearr_12017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
});})(__12133,c__11783__auto___12178,G__11966_12134,G__11966_12135__$1,n__5616__auto___12132,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11966_12135__$1)].join('')));

}

var G__12201 = (__12133 + (1));
__12133 = G__12201;
continue;
} else {
}
break;
}

var c__11783__auto___12203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_12039){
var state_val_12040 = (state_12039[(1)]);
if((state_val_12040 === (7))){
var inst_12035 = (state_12039[(2)]);
var state_12039__$1 = state_12039;
var statearr_12041_12204 = state_12039__$1;
(statearr_12041_12204[(2)] = inst_12035);

(statearr_12041_12204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12040 === (1))){
var state_12039__$1 = state_12039;
var statearr_12042_12206 = state_12039__$1;
(statearr_12042_12206[(2)] = null);

(statearr_12042_12206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12040 === (4))){
var inst_12020 = (state_12039[(7)]);
var inst_12020__$1 = (state_12039[(2)]);
var inst_12021 = (inst_12020__$1 == null);
var state_12039__$1 = (function (){var statearr_12043 = state_12039;
(statearr_12043[(7)] = inst_12020__$1);

return statearr_12043;
})();
if(cljs.core.truth_(inst_12021)){
var statearr_12044_12210 = state_12039__$1;
(statearr_12044_12210[(1)] = (5));

} else {
var statearr_12045_12211 = state_12039__$1;
(statearr_12045_12211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12040 === (6))){
var inst_12020 = (state_12039[(7)]);
var inst_12025 = (state_12039[(8)]);
var inst_12025__$1 = cljs.core.async.chan.call(null,(1));
var inst_12026 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12027 = [inst_12020,inst_12025__$1];
var inst_12028 = (new cljs.core.PersistentVector(null,2,(5),inst_12026,inst_12027,null));
var state_12039__$1 = (function (){var statearr_12046 = state_12039;
(statearr_12046[(8)] = inst_12025__$1);

return statearr_12046;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12039__$1,(8),jobs,inst_12028);
} else {
if((state_val_12040 === (3))){
var inst_12037 = (state_12039[(2)]);
var state_12039__$1 = state_12039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12039__$1,inst_12037);
} else {
if((state_val_12040 === (2))){
var state_12039__$1 = state_12039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12039__$1,(4),from);
} else {
if((state_val_12040 === (9))){
var inst_12032 = (state_12039[(2)]);
var state_12039__$1 = (function (){var statearr_12047 = state_12039;
(statearr_12047[(9)] = inst_12032);

return statearr_12047;
})();
var statearr_12048_12213 = state_12039__$1;
(statearr_12048_12213[(2)] = null);

(statearr_12048_12213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12040 === (5))){
var inst_12023 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12039__$1 = state_12039;
var statearr_12049_12214 = state_12039__$1;
(statearr_12049_12214[(2)] = inst_12023);

(statearr_12049_12214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12040 === (8))){
var inst_12025 = (state_12039[(8)]);
var inst_12030 = (state_12039[(2)]);
var state_12039__$1 = (function (){var statearr_12050 = state_12039;
(statearr_12050[(10)] = inst_12030);

return statearr_12050;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12039__$1,(9),results,inst_12025);
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
var cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____0 = (function (){
var statearr_12051 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__);

(statearr_12051[(1)] = (1));

return statearr_12051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____1 = (function (state_12039){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_12039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e12052){var ex__11703__auto__ = e12052;
var statearr_12053_12218 = state_12039;
(statearr_12053_12218[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_12039[(4)]))){
var statearr_12054_12222 = state_12039;
(statearr_12054_12222[(1)] = cljs.core.first.call(null,(state_12039[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12228 = state_12039;
state_12039 = G__12228;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__ = function(state_12039){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____1.call(this,state_12039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_12055 = f__11784__auto__.call(null);
(statearr_12055[(6)] = c__11783__auto___12203);

return statearr_12055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));


var c__11783__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_12093){
var state_val_12094 = (state_12093[(1)]);
if((state_val_12094 === (7))){
var inst_12089 = (state_12093[(2)]);
var state_12093__$1 = state_12093;
var statearr_12095_12241 = state_12093__$1;
(statearr_12095_12241[(2)] = inst_12089);

(statearr_12095_12241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (20))){
var state_12093__$1 = state_12093;
var statearr_12096_12242 = state_12093__$1;
(statearr_12096_12242[(2)] = null);

(statearr_12096_12242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (1))){
var state_12093__$1 = state_12093;
var statearr_12097_12244 = state_12093__$1;
(statearr_12097_12244[(2)] = null);

(statearr_12097_12244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (4))){
var inst_12058 = (state_12093[(7)]);
var inst_12058__$1 = (state_12093[(2)]);
var inst_12059 = (inst_12058__$1 == null);
var state_12093__$1 = (function (){var statearr_12098 = state_12093;
(statearr_12098[(7)] = inst_12058__$1);

return statearr_12098;
})();
if(cljs.core.truth_(inst_12059)){
var statearr_12099_12247 = state_12093__$1;
(statearr_12099_12247[(1)] = (5));

} else {
var statearr_12100_12248 = state_12093__$1;
(statearr_12100_12248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (15))){
var inst_12071 = (state_12093[(8)]);
var state_12093__$1 = state_12093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12093__$1,(18),to,inst_12071);
} else {
if((state_val_12094 === (21))){
var inst_12084 = (state_12093[(2)]);
var state_12093__$1 = state_12093;
var statearr_12101_12252 = state_12093__$1;
(statearr_12101_12252[(2)] = inst_12084);

(statearr_12101_12252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (13))){
var inst_12086 = (state_12093[(2)]);
var state_12093__$1 = (function (){var statearr_12102 = state_12093;
(statearr_12102[(9)] = inst_12086);

return statearr_12102;
})();
var statearr_12103_12253 = state_12093__$1;
(statearr_12103_12253[(2)] = null);

(statearr_12103_12253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (6))){
var inst_12058 = (state_12093[(7)]);
var state_12093__$1 = state_12093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12093__$1,(11),inst_12058);
} else {
if((state_val_12094 === (17))){
var inst_12079 = (state_12093[(2)]);
var state_12093__$1 = state_12093;
if(cljs.core.truth_(inst_12079)){
var statearr_12104_12257 = state_12093__$1;
(statearr_12104_12257[(1)] = (19));

} else {
var statearr_12105_12258 = state_12093__$1;
(statearr_12105_12258[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (3))){
var inst_12091 = (state_12093[(2)]);
var state_12093__$1 = state_12093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12093__$1,inst_12091);
} else {
if((state_val_12094 === (12))){
var inst_12068 = (state_12093[(10)]);
var state_12093__$1 = state_12093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12093__$1,(14),inst_12068);
} else {
if((state_val_12094 === (2))){
var state_12093__$1 = state_12093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12093__$1,(4),results);
} else {
if((state_val_12094 === (19))){
var state_12093__$1 = state_12093;
var statearr_12106_12261 = state_12093__$1;
(statearr_12106_12261[(2)] = null);

(statearr_12106_12261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (11))){
var inst_12068 = (state_12093[(2)]);
var state_12093__$1 = (function (){var statearr_12107 = state_12093;
(statearr_12107[(10)] = inst_12068);

return statearr_12107;
})();
var statearr_12108_12263 = state_12093__$1;
(statearr_12108_12263[(2)] = null);

(statearr_12108_12263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (9))){
var state_12093__$1 = state_12093;
var statearr_12109_12265 = state_12093__$1;
(statearr_12109_12265[(2)] = null);

(statearr_12109_12265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (5))){
var state_12093__$1 = state_12093;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12110_12266 = state_12093__$1;
(statearr_12110_12266[(1)] = (8));

} else {
var statearr_12111_12268 = state_12093__$1;
(statearr_12111_12268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (14))){
var inst_12071 = (state_12093[(8)]);
var inst_12073 = (state_12093[(11)]);
var inst_12071__$1 = (state_12093[(2)]);
var inst_12072 = (inst_12071__$1 == null);
var inst_12073__$1 = cljs.core.not.call(null,inst_12072);
var state_12093__$1 = (function (){var statearr_12112 = state_12093;
(statearr_12112[(8)] = inst_12071__$1);

(statearr_12112[(11)] = inst_12073__$1);

return statearr_12112;
})();
if(inst_12073__$1){
var statearr_12113_12270 = state_12093__$1;
(statearr_12113_12270[(1)] = (15));

} else {
var statearr_12114_12271 = state_12093__$1;
(statearr_12114_12271[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (16))){
var inst_12073 = (state_12093[(11)]);
var state_12093__$1 = state_12093;
var statearr_12115_12274 = state_12093__$1;
(statearr_12115_12274[(2)] = inst_12073);

(statearr_12115_12274[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (10))){
var inst_12065 = (state_12093[(2)]);
var state_12093__$1 = state_12093;
var statearr_12116_12276 = state_12093__$1;
(statearr_12116_12276[(2)] = inst_12065);

(statearr_12116_12276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (18))){
var inst_12076 = (state_12093[(2)]);
var state_12093__$1 = state_12093;
var statearr_12117_12277 = state_12093__$1;
(statearr_12117_12277[(2)] = inst_12076);

(statearr_12117_12277[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (8))){
var inst_12062 = cljs.core.async.close_BANG_.call(null,to);
var state_12093__$1 = state_12093;
var statearr_12118_12279 = state_12093__$1;
(statearr_12118_12279[(2)] = inst_12062);

(statearr_12118_12279[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____0 = (function (){
var statearr_12119 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12119[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__);

(statearr_12119[(1)] = (1));

return statearr_12119;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____1 = (function (state_12093){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_12093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e12120){var ex__11703__auto__ = e12120;
var statearr_12121_12280 = state_12093;
(statearr_12121_12280[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_12093[(4)]))){
var statearr_12122_12281 = state_12093;
(statearr_12122_12281[(1)] = cljs.core.first.call(null,(state_12093[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12289 = state_12093;
state_12093 = G__12289;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__ = function(state_12093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____1.call(this,state_12093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_12123 = f__11784__auto__.call(null);
(statearr_12123[(6)] = c__11783__auto__);

return statearr_12123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));

return c__11783__auto__;
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
var G__12125 = arguments.length;
switch (G__12125) {
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
var G__12128 = arguments.length;
switch (G__12128) {
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
var G__12139 = arguments.length;
switch (G__12139) {
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
var c__11783__auto___12300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_12171){
var state_val_12172 = (state_12171[(1)]);
if((state_val_12172 === (7))){
var inst_12167 = (state_12171[(2)]);
var state_12171__$1 = state_12171;
var statearr_12175_12303 = state_12171__$1;
(statearr_12175_12303[(2)] = inst_12167);

(statearr_12175_12303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12172 === (1))){
var state_12171__$1 = state_12171;
var statearr_12177_12306 = state_12171__$1;
(statearr_12177_12306[(2)] = null);

(statearr_12177_12306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12172 === (4))){
var inst_12146 = (state_12171[(7)]);
var inst_12146__$1 = (state_12171[(2)]);
var inst_12147 = (inst_12146__$1 == null);
var state_12171__$1 = (function (){var statearr_12179 = state_12171;
(statearr_12179[(7)] = inst_12146__$1);

return statearr_12179;
})();
if(cljs.core.truth_(inst_12147)){
var statearr_12180_12327 = state_12171__$1;
(statearr_12180_12327[(1)] = (5));

} else {
var statearr_12181_12328 = state_12171__$1;
(statearr_12181_12328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12172 === (13))){
var state_12171__$1 = state_12171;
var statearr_12183_12331 = state_12171__$1;
(statearr_12183_12331[(2)] = null);

(statearr_12183_12331[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12172 === (6))){
var inst_12146 = (state_12171[(7)]);
var inst_12153 = p.call(null,inst_12146);
var state_12171__$1 = state_12171;
if(cljs.core.truth_(inst_12153)){
var statearr_12184_12332 = state_12171__$1;
(statearr_12184_12332[(1)] = (9));

} else {
var statearr_12185_12333 = state_12171__$1;
(statearr_12185_12333[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12172 === (3))){
var inst_12169 = (state_12171[(2)]);
var state_12171__$1 = state_12171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12171__$1,inst_12169);
} else {
if((state_val_12172 === (12))){
var state_12171__$1 = state_12171;
var statearr_12189_12336 = state_12171__$1;
(statearr_12189_12336[(2)] = null);

(statearr_12189_12336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12172 === (2))){
var state_12171__$1 = state_12171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12171__$1,(4),ch);
} else {
if((state_val_12172 === (11))){
var inst_12146 = (state_12171[(7)]);
var inst_12157 = (state_12171[(2)]);
var state_12171__$1 = state_12171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12171__$1,(8),inst_12157,inst_12146);
} else {
if((state_val_12172 === (9))){
var state_12171__$1 = state_12171;
var statearr_12192_12338 = state_12171__$1;
(statearr_12192_12338[(2)] = tc);

(statearr_12192_12338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12172 === (5))){
var inst_12150 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12151 = cljs.core.async.close_BANG_.call(null,fc);
var state_12171__$1 = (function (){var statearr_12193 = state_12171;
(statearr_12193[(8)] = inst_12150);

return statearr_12193;
})();
var statearr_12195_12340 = state_12171__$1;
(statearr_12195_12340[(2)] = inst_12151);

(statearr_12195_12340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12172 === (14))){
var inst_12165 = (state_12171[(2)]);
var state_12171__$1 = state_12171;
var statearr_12197_12343 = state_12171__$1;
(statearr_12197_12343[(2)] = inst_12165);

(statearr_12197_12343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12172 === (10))){
var state_12171__$1 = state_12171;
var statearr_12199_12344 = state_12171__$1;
(statearr_12199_12344[(2)] = fc);

(statearr_12199_12344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12172 === (8))){
var inst_12160 = (state_12171[(2)]);
var state_12171__$1 = state_12171;
if(cljs.core.truth_(inst_12160)){
var statearr_12200_12346 = state_12171__$1;
(statearr_12200_12346[(1)] = (12));

} else {
var statearr_12202_12347 = state_12171__$1;
(statearr_12202_12347[(1)] = (13));

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
var cljs$core$async$state_machine__11700__auto__ = null;
var cljs$core$async$state_machine__11700__auto____0 = (function (){
var statearr_12205 = [null,null,null,null,null,null,null,null,null];
(statearr_12205[(0)] = cljs$core$async$state_machine__11700__auto__);

(statearr_12205[(1)] = (1));

return statearr_12205;
});
var cljs$core$async$state_machine__11700__auto____1 = (function (state_12171){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_12171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e12207){var ex__11703__auto__ = e12207;
var statearr_12208_12351 = state_12171;
(statearr_12208_12351[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_12171[(4)]))){
var statearr_12209_12352 = state_12171;
(statearr_12209_12352[(1)] = cljs.core.first.call(null,(state_12171[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12355 = state_12171;
state_12171 = G__12355;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$state_machine__11700__auto__ = function(state_12171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11700__auto____1.call(this,state_12171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11700__auto____0;
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11700__auto____1;
return cljs$core$async$state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_12212 = f__11784__auto__.call(null);
(statearr_12212[(6)] = c__11783__auto___12300);

return statearr_12212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
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
var c__11783__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_12239){
var state_val_12240 = (state_12239[(1)]);
if((state_val_12240 === (7))){
var inst_12235 = (state_12239[(2)]);
var state_12239__$1 = state_12239;
var statearr_12243_12359 = state_12239__$1;
(statearr_12243_12359[(2)] = inst_12235);

(statearr_12243_12359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (1))){
var inst_12215 = init;
var inst_12216 = inst_12215;
var state_12239__$1 = (function (){var statearr_12245 = state_12239;
(statearr_12245[(7)] = inst_12216);

return statearr_12245;
})();
var statearr_12246_12361 = state_12239__$1;
(statearr_12246_12361[(2)] = null);

(statearr_12246_12361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (4))){
var inst_12220 = (state_12239[(8)]);
var inst_12220__$1 = (state_12239[(2)]);
var inst_12221 = (inst_12220__$1 == null);
var state_12239__$1 = (function (){var statearr_12249 = state_12239;
(statearr_12249[(8)] = inst_12220__$1);

return statearr_12249;
})();
if(cljs.core.truth_(inst_12221)){
var statearr_12250_12363 = state_12239__$1;
(statearr_12250_12363[(1)] = (5));

} else {
var statearr_12251_12365 = state_12239__$1;
(statearr_12251_12365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (6))){
var inst_12216 = (state_12239[(7)]);
var inst_12220 = (state_12239[(8)]);
var inst_12225 = (state_12239[(9)]);
var inst_12225__$1 = f.call(null,inst_12216,inst_12220);
var inst_12226 = cljs.core.reduced_QMARK_.call(null,inst_12225__$1);
var state_12239__$1 = (function (){var statearr_12254 = state_12239;
(statearr_12254[(9)] = inst_12225__$1);

return statearr_12254;
})();
if(inst_12226){
var statearr_12255_12368 = state_12239__$1;
(statearr_12255_12368[(1)] = (8));

} else {
var statearr_12256_12369 = state_12239__$1;
(statearr_12256_12369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (3))){
var inst_12237 = (state_12239[(2)]);
var state_12239__$1 = state_12239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12239__$1,inst_12237);
} else {
if((state_val_12240 === (2))){
var state_12239__$1 = state_12239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12239__$1,(4),ch);
} else {
if((state_val_12240 === (9))){
var inst_12225 = (state_12239[(9)]);
var inst_12216 = inst_12225;
var state_12239__$1 = (function (){var statearr_12259 = state_12239;
(statearr_12259[(7)] = inst_12216);

return statearr_12259;
})();
var statearr_12260_12371 = state_12239__$1;
(statearr_12260_12371[(2)] = null);

(statearr_12260_12371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (5))){
var inst_12216 = (state_12239[(7)]);
var state_12239__$1 = state_12239;
var statearr_12262_12372 = state_12239__$1;
(statearr_12262_12372[(2)] = inst_12216);

(statearr_12262_12372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (10))){
var inst_12233 = (state_12239[(2)]);
var state_12239__$1 = state_12239;
var statearr_12264_12373 = state_12239__$1;
(statearr_12264_12373[(2)] = inst_12233);

(statearr_12264_12373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (8))){
var inst_12225 = (state_12239[(9)]);
var inst_12229 = cljs.core.deref.call(null,inst_12225);
var state_12239__$1 = state_12239;
var statearr_12267_12376 = state_12239__$1;
(statearr_12267_12376[(2)] = inst_12229);

(statearr_12267_12376[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__11700__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11700__auto____0 = (function (){
var statearr_12269 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12269[(0)] = cljs$core$async$reduce_$_state_machine__11700__auto__);

(statearr_12269[(1)] = (1));

return statearr_12269;
});
var cljs$core$async$reduce_$_state_machine__11700__auto____1 = (function (state_12239){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_12239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e12272){var ex__11703__auto__ = e12272;
var statearr_12273_12377 = state_12239;
(statearr_12273_12377[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_12239[(4)]))){
var statearr_12275_12378 = state_12239;
(statearr_12275_12378[(1)] = cljs.core.first.call(null,(state_12239[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12379 = state_12239;
state_12239 = G__12379;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11700__auto__ = function(state_12239){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11700__auto____1.call(this,state_12239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11700__auto____0;
cljs$core$async$reduce_$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11700__auto____1;
return cljs$core$async$reduce_$_state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_12278 = f__11784__auto__.call(null);
(statearr_12278[(6)] = c__11783__auto__);

return statearr_12278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));

return c__11783__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11783__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_12287){
var state_val_12288 = (state_12287[(1)]);
if((state_val_12288 === (1))){
var inst_12282 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_12287__$1 = state_12287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12287__$1,(2),inst_12282);
} else {
if((state_val_12288 === (2))){
var inst_12284 = (state_12287[(2)]);
var inst_12285 = f__$1.call(null,inst_12284);
var state_12287__$1 = state_12287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12287__$1,inst_12285);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11700__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11700__auto____0 = (function (){
var statearr_12291 = [null,null,null,null,null,null,null];
(statearr_12291[(0)] = cljs$core$async$transduce_$_state_machine__11700__auto__);

(statearr_12291[(1)] = (1));

return statearr_12291;
});
var cljs$core$async$transduce_$_state_machine__11700__auto____1 = (function (state_12287){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_12287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e12292){var ex__11703__auto__ = e12292;
var statearr_12293_12380 = state_12287;
(statearr_12293_12380[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_12287[(4)]))){
var statearr_12294_12381 = state_12287;
(statearr_12294_12381[(1)] = cljs.core.first.call(null,(state_12287[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12382 = state_12287;
state_12287 = G__12382;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11700__auto__ = function(state_12287){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11700__auto____1.call(this,state_12287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11700__auto____0;
cljs$core$async$transduce_$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11700__auto____1;
return cljs$core$async$transduce_$_state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_12296 = f__11784__auto__.call(null);
(statearr_12296[(6)] = c__11783__auto__);

return statearr_12296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));

return c__11783__auto__;
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
var G__12298 = arguments.length;
switch (G__12298) {
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
var c__11783__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_12329){
var state_val_12330 = (state_12329[(1)]);
if((state_val_12330 === (7))){
var inst_12309 = (state_12329[(2)]);
var state_12329__$1 = state_12329;
var statearr_12334_12384 = state_12329__$1;
(statearr_12334_12384[(2)] = inst_12309);

(statearr_12334_12384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (1))){
var inst_12301 = cljs.core.seq.call(null,coll);
var inst_12302 = inst_12301;
var state_12329__$1 = (function (){var statearr_12335 = state_12329;
(statearr_12335[(7)] = inst_12302);

return statearr_12335;
})();
var statearr_12337_12385 = state_12329__$1;
(statearr_12337_12385[(2)] = null);

(statearr_12337_12385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (4))){
var inst_12302 = (state_12329[(7)]);
var inst_12307 = cljs.core.first.call(null,inst_12302);
var state_12329__$1 = state_12329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12329__$1,(7),ch,inst_12307);
} else {
if((state_val_12330 === (13))){
var inst_12321 = (state_12329[(2)]);
var state_12329__$1 = state_12329;
var statearr_12339_12386 = state_12329__$1;
(statearr_12339_12386[(2)] = inst_12321);

(statearr_12339_12386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (6))){
var inst_12312 = (state_12329[(2)]);
var state_12329__$1 = state_12329;
if(cljs.core.truth_(inst_12312)){
var statearr_12341_12387 = state_12329__$1;
(statearr_12341_12387[(1)] = (8));

} else {
var statearr_12342_12388 = state_12329__$1;
(statearr_12342_12388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (3))){
var inst_12325 = (state_12329[(2)]);
var state_12329__$1 = state_12329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12329__$1,inst_12325);
} else {
if((state_val_12330 === (12))){
var state_12329__$1 = state_12329;
var statearr_12345_12389 = state_12329__$1;
(statearr_12345_12389[(2)] = null);

(statearr_12345_12389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (2))){
var inst_12302 = (state_12329[(7)]);
var state_12329__$1 = state_12329;
if(cljs.core.truth_(inst_12302)){
var statearr_12348_12390 = state_12329__$1;
(statearr_12348_12390[(1)] = (4));

} else {
var statearr_12349_12391 = state_12329__$1;
(statearr_12349_12391[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (11))){
var inst_12318 = cljs.core.async.close_BANG_.call(null,ch);
var state_12329__$1 = state_12329;
var statearr_12350_12392 = state_12329__$1;
(statearr_12350_12392[(2)] = inst_12318);

(statearr_12350_12392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (9))){
var state_12329__$1 = state_12329;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12353_12393 = state_12329__$1;
(statearr_12353_12393[(1)] = (11));

} else {
var statearr_12354_12394 = state_12329__$1;
(statearr_12354_12394[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (5))){
var inst_12302 = (state_12329[(7)]);
var state_12329__$1 = state_12329;
var statearr_12356_12395 = state_12329__$1;
(statearr_12356_12395[(2)] = inst_12302);

(statearr_12356_12395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (10))){
var inst_12323 = (state_12329[(2)]);
var state_12329__$1 = state_12329;
var statearr_12357_12396 = state_12329__$1;
(statearr_12357_12396[(2)] = inst_12323);

(statearr_12357_12396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12330 === (8))){
var inst_12302 = (state_12329[(7)]);
var inst_12314 = cljs.core.next.call(null,inst_12302);
var inst_12302__$1 = inst_12314;
var state_12329__$1 = (function (){var statearr_12358 = state_12329;
(statearr_12358[(7)] = inst_12302__$1);

return statearr_12358;
})();
var statearr_12360_12397 = state_12329__$1;
(statearr_12360_12397[(2)] = null);

(statearr_12360_12397[(1)] = (2));


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
var cljs$core$async$state_machine__11700__auto__ = null;
var cljs$core$async$state_machine__11700__auto____0 = (function (){
var statearr_12362 = [null,null,null,null,null,null,null,null];
(statearr_12362[(0)] = cljs$core$async$state_machine__11700__auto__);

(statearr_12362[(1)] = (1));

return statearr_12362;
});
var cljs$core$async$state_machine__11700__auto____1 = (function (state_12329){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_12329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e12364){var ex__11703__auto__ = e12364;
var statearr_12366_12398 = state_12329;
(statearr_12366_12398[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_12329[(4)]))){
var statearr_12367_12399 = state_12329;
(statearr_12367_12399[(1)] = cljs.core.first.call(null,(state_12329[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12403 = state_12329;
state_12329 = G__12403;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$state_machine__11700__auto__ = function(state_12329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11700__auto____1.call(this,state_12329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11700__auto____0;
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11700__auto____1;
return cljs$core$async$state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_12370 = f__11784__auto__.call(null);
(statearr_12370[(6)] = c__11783__auto__);

return statearr_12370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));

return c__11783__auto__;
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
var G__12375 = arguments.length;
switch (G__12375) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12405 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12405.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12406 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_12406.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12407 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_12407.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12408 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_12408.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12400 = (function (ch,cs,meta12401){
this.ch = ch;
this.cs = cs;
this.meta12401 = meta12401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12402,meta12401__$1){
var self__ = this;
var _12402__$1 = this;
return (new cljs.core.async.t_cljs$core$async12400(self__.ch,self__.cs,meta12401__$1));
}));

(cljs.core.async.t_cljs$core$async12400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12402){
var self__ = this;
var _12402__$1 = this;
return self__.meta12401;
}));

(cljs.core.async.t_cljs$core$async12400.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12400.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12400.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12400.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12400.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12400.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12401","meta12401",225204801,null)], null);
}));

(cljs.core.async.t_cljs$core$async12400.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12400");

(cljs.core.async.t_cljs$core$async12400.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12400");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12400.
 */
cljs.core.async.__GT_t_cljs$core$async12400 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12400(ch__$1,cs__$1,meta12401){
return (new cljs.core.async.t_cljs$core$async12400(ch__$1,cs__$1,meta12401));
});

}

return (new cljs.core.async.t_cljs$core$async12400(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11783__auto___12627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_12541){
var state_val_12542 = (state_12541[(1)]);
if((state_val_12542 === (7))){
var inst_12537 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
var statearr_12543_12628 = state_12541__$1;
(statearr_12543_12628[(2)] = inst_12537);

(statearr_12543_12628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (20))){
var inst_12442 = (state_12541[(7)]);
var inst_12454 = cljs.core.first.call(null,inst_12442);
var inst_12455 = cljs.core.nth.call(null,inst_12454,(0),null);
var inst_12456 = cljs.core.nth.call(null,inst_12454,(1),null);
var state_12541__$1 = (function (){var statearr_12544 = state_12541;
(statearr_12544[(8)] = inst_12455);

return statearr_12544;
})();
if(cljs.core.truth_(inst_12456)){
var statearr_12545_12629 = state_12541__$1;
(statearr_12545_12629[(1)] = (22));

} else {
var statearr_12546_12630 = state_12541__$1;
(statearr_12546_12630[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (27))){
var inst_12484 = (state_12541[(9)]);
var inst_12486 = (state_12541[(10)]);
var inst_12491 = (state_12541[(11)]);
var inst_12411 = (state_12541[(12)]);
var inst_12491__$1 = cljs.core._nth.call(null,inst_12484,inst_12486);
var inst_12492 = cljs.core.async.put_BANG_.call(null,inst_12491__$1,inst_12411,done);
var state_12541__$1 = (function (){var statearr_12547 = state_12541;
(statearr_12547[(11)] = inst_12491__$1);

return statearr_12547;
})();
if(cljs.core.truth_(inst_12492)){
var statearr_12548_12631 = state_12541__$1;
(statearr_12548_12631[(1)] = (30));

} else {
var statearr_12549_12632 = state_12541__$1;
(statearr_12549_12632[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (1))){
var state_12541__$1 = state_12541;
var statearr_12550_12633 = state_12541__$1;
(statearr_12550_12633[(2)] = null);

(statearr_12550_12633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (24))){
var inst_12442 = (state_12541[(7)]);
var inst_12461 = (state_12541[(2)]);
var inst_12462 = cljs.core.next.call(null,inst_12442);
var inst_12420 = inst_12462;
var inst_12421 = null;
var inst_12422 = (0);
var inst_12423 = (0);
var state_12541__$1 = (function (){var statearr_12551 = state_12541;
(statearr_12551[(13)] = inst_12461);

(statearr_12551[(14)] = inst_12420);

(statearr_12551[(15)] = inst_12421);

(statearr_12551[(16)] = inst_12422);

(statearr_12551[(17)] = inst_12423);

return statearr_12551;
})();
var statearr_12552_12634 = state_12541__$1;
(statearr_12552_12634[(2)] = null);

(statearr_12552_12634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (39))){
var state_12541__$1 = state_12541;
var statearr_12556_12635 = state_12541__$1;
(statearr_12556_12635[(2)] = null);

(statearr_12556_12635[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (4))){
var inst_12411 = (state_12541[(12)]);
var inst_12411__$1 = (state_12541[(2)]);
var inst_12412 = (inst_12411__$1 == null);
var state_12541__$1 = (function (){var statearr_12557 = state_12541;
(statearr_12557[(12)] = inst_12411__$1);

return statearr_12557;
})();
if(cljs.core.truth_(inst_12412)){
var statearr_12558_12636 = state_12541__$1;
(statearr_12558_12636[(1)] = (5));

} else {
var statearr_12559_12637 = state_12541__$1;
(statearr_12559_12637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (15))){
var inst_12423 = (state_12541[(17)]);
var inst_12420 = (state_12541[(14)]);
var inst_12421 = (state_12541[(15)]);
var inst_12422 = (state_12541[(16)]);
var inst_12438 = (state_12541[(2)]);
var inst_12439 = (inst_12423 + (1));
var tmp12553 = inst_12421;
var tmp12554 = inst_12420;
var tmp12555 = inst_12422;
var inst_12420__$1 = tmp12554;
var inst_12421__$1 = tmp12553;
var inst_12422__$1 = tmp12555;
var inst_12423__$1 = inst_12439;
var state_12541__$1 = (function (){var statearr_12560 = state_12541;
(statearr_12560[(18)] = inst_12438);

(statearr_12560[(14)] = inst_12420__$1);

(statearr_12560[(15)] = inst_12421__$1);

(statearr_12560[(16)] = inst_12422__$1);

(statearr_12560[(17)] = inst_12423__$1);

return statearr_12560;
})();
var statearr_12561_12638 = state_12541__$1;
(statearr_12561_12638[(2)] = null);

(statearr_12561_12638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (21))){
var inst_12465 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
var statearr_12565_12639 = state_12541__$1;
(statearr_12565_12639[(2)] = inst_12465);

(statearr_12565_12639[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (31))){
var inst_12491 = (state_12541[(11)]);
var inst_12495 = cljs.core.async.untap_STAR_.call(null,m,inst_12491);
var state_12541__$1 = state_12541;
var statearr_12566_12640 = state_12541__$1;
(statearr_12566_12640[(2)] = inst_12495);

(statearr_12566_12640[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (32))){
var inst_12486 = (state_12541[(10)]);
var inst_12483 = (state_12541[(19)]);
var inst_12484 = (state_12541[(9)]);
var inst_12485 = (state_12541[(20)]);
var inst_12497 = (state_12541[(2)]);
var inst_12498 = (inst_12486 + (1));
var tmp12562 = inst_12485;
var tmp12563 = inst_12484;
var tmp12564 = inst_12483;
var inst_12483__$1 = tmp12564;
var inst_12484__$1 = tmp12563;
var inst_12485__$1 = tmp12562;
var inst_12486__$1 = inst_12498;
var state_12541__$1 = (function (){var statearr_12567 = state_12541;
(statearr_12567[(21)] = inst_12497);

(statearr_12567[(19)] = inst_12483__$1);

(statearr_12567[(9)] = inst_12484__$1);

(statearr_12567[(20)] = inst_12485__$1);

(statearr_12567[(10)] = inst_12486__$1);

return statearr_12567;
})();
var statearr_12568_12641 = state_12541__$1;
(statearr_12568_12641[(2)] = null);

(statearr_12568_12641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (40))){
var inst_12510 = (state_12541[(22)]);
var inst_12514 = cljs.core.async.untap_STAR_.call(null,m,inst_12510);
var state_12541__$1 = state_12541;
var statearr_12569_12642 = state_12541__$1;
(statearr_12569_12642[(2)] = inst_12514);

(statearr_12569_12642[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (33))){
var inst_12501 = (state_12541[(23)]);
var inst_12503 = cljs.core.chunked_seq_QMARK_.call(null,inst_12501);
var state_12541__$1 = state_12541;
if(inst_12503){
var statearr_12570_12643 = state_12541__$1;
(statearr_12570_12643[(1)] = (36));

} else {
var statearr_12571_12644 = state_12541__$1;
(statearr_12571_12644[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (13))){
var inst_12432 = (state_12541[(24)]);
var inst_12435 = cljs.core.async.close_BANG_.call(null,inst_12432);
var state_12541__$1 = state_12541;
var statearr_12572_12645 = state_12541__$1;
(statearr_12572_12645[(2)] = inst_12435);

(statearr_12572_12645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (22))){
var inst_12455 = (state_12541[(8)]);
var inst_12458 = cljs.core.async.close_BANG_.call(null,inst_12455);
var state_12541__$1 = state_12541;
var statearr_12573_12646 = state_12541__$1;
(statearr_12573_12646[(2)] = inst_12458);

(statearr_12573_12646[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (36))){
var inst_12501 = (state_12541[(23)]);
var inst_12505 = cljs.core.chunk_first.call(null,inst_12501);
var inst_12506 = cljs.core.chunk_rest.call(null,inst_12501);
var inst_12507 = cljs.core.count.call(null,inst_12505);
var inst_12483 = inst_12506;
var inst_12484 = inst_12505;
var inst_12485 = inst_12507;
var inst_12486 = (0);
var state_12541__$1 = (function (){var statearr_12574 = state_12541;
(statearr_12574[(19)] = inst_12483);

(statearr_12574[(9)] = inst_12484);

(statearr_12574[(20)] = inst_12485);

(statearr_12574[(10)] = inst_12486);

return statearr_12574;
})();
var statearr_12575_12651 = state_12541__$1;
(statearr_12575_12651[(2)] = null);

(statearr_12575_12651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (41))){
var inst_12501 = (state_12541[(23)]);
var inst_12516 = (state_12541[(2)]);
var inst_12517 = cljs.core.next.call(null,inst_12501);
var inst_12483 = inst_12517;
var inst_12484 = null;
var inst_12485 = (0);
var inst_12486 = (0);
var state_12541__$1 = (function (){var statearr_12576 = state_12541;
(statearr_12576[(25)] = inst_12516);

(statearr_12576[(19)] = inst_12483);

(statearr_12576[(9)] = inst_12484);

(statearr_12576[(20)] = inst_12485);

(statearr_12576[(10)] = inst_12486);

return statearr_12576;
})();
var statearr_12577_12652 = state_12541__$1;
(statearr_12577_12652[(2)] = null);

(statearr_12577_12652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (43))){
var state_12541__$1 = state_12541;
var statearr_12578_12653 = state_12541__$1;
(statearr_12578_12653[(2)] = null);

(statearr_12578_12653[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (29))){
var inst_12525 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
var statearr_12579_12655 = state_12541__$1;
(statearr_12579_12655[(2)] = inst_12525);

(statearr_12579_12655[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (44))){
var inst_12534 = (state_12541[(2)]);
var state_12541__$1 = (function (){var statearr_12580 = state_12541;
(statearr_12580[(26)] = inst_12534);

return statearr_12580;
})();
var statearr_12581_12658 = state_12541__$1;
(statearr_12581_12658[(2)] = null);

(statearr_12581_12658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (6))){
var inst_12475 = (state_12541[(27)]);
var inst_12474 = cljs.core.deref.call(null,cs);
var inst_12475__$1 = cljs.core.keys.call(null,inst_12474);
var inst_12476 = cljs.core.count.call(null,inst_12475__$1);
var inst_12477 = cljs.core.reset_BANG_.call(null,dctr,inst_12476);
var inst_12482 = cljs.core.seq.call(null,inst_12475__$1);
var inst_12483 = inst_12482;
var inst_12484 = null;
var inst_12485 = (0);
var inst_12486 = (0);
var state_12541__$1 = (function (){var statearr_12582 = state_12541;
(statearr_12582[(27)] = inst_12475__$1);

(statearr_12582[(28)] = inst_12477);

(statearr_12582[(19)] = inst_12483);

(statearr_12582[(9)] = inst_12484);

(statearr_12582[(20)] = inst_12485);

(statearr_12582[(10)] = inst_12486);

return statearr_12582;
})();
var statearr_12583_12661 = state_12541__$1;
(statearr_12583_12661[(2)] = null);

(statearr_12583_12661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (28))){
var inst_12483 = (state_12541[(19)]);
var inst_12501 = (state_12541[(23)]);
var inst_12501__$1 = cljs.core.seq.call(null,inst_12483);
var state_12541__$1 = (function (){var statearr_12584 = state_12541;
(statearr_12584[(23)] = inst_12501__$1);

return statearr_12584;
})();
if(inst_12501__$1){
var statearr_12585_12662 = state_12541__$1;
(statearr_12585_12662[(1)] = (33));

} else {
var statearr_12586_12663 = state_12541__$1;
(statearr_12586_12663[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (25))){
var inst_12486 = (state_12541[(10)]);
var inst_12485 = (state_12541[(20)]);
var inst_12488 = (inst_12486 < inst_12485);
var inst_12489 = inst_12488;
var state_12541__$1 = state_12541;
if(cljs.core.truth_(inst_12489)){
var statearr_12587_12664 = state_12541__$1;
(statearr_12587_12664[(1)] = (27));

} else {
var statearr_12588_12665 = state_12541__$1;
(statearr_12588_12665[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (34))){
var state_12541__$1 = state_12541;
var statearr_12589_12666 = state_12541__$1;
(statearr_12589_12666[(2)] = null);

(statearr_12589_12666[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (17))){
var state_12541__$1 = state_12541;
var statearr_12590_12667 = state_12541__$1;
(statearr_12590_12667[(2)] = null);

(statearr_12590_12667[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (3))){
var inst_12539 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12541__$1,inst_12539);
} else {
if((state_val_12542 === (12))){
var inst_12470 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
var statearr_12591_12668 = state_12541__$1;
(statearr_12591_12668[(2)] = inst_12470);

(statearr_12591_12668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (2))){
var state_12541__$1 = state_12541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12541__$1,(4),ch);
} else {
if((state_val_12542 === (23))){
var state_12541__$1 = state_12541;
var statearr_12592_12669 = state_12541__$1;
(statearr_12592_12669[(2)] = null);

(statearr_12592_12669[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (35))){
var inst_12523 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
var statearr_12593_12670 = state_12541__$1;
(statearr_12593_12670[(2)] = inst_12523);

(statearr_12593_12670[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (19))){
var inst_12442 = (state_12541[(7)]);
var inst_12446 = cljs.core.chunk_first.call(null,inst_12442);
var inst_12447 = cljs.core.chunk_rest.call(null,inst_12442);
var inst_12448 = cljs.core.count.call(null,inst_12446);
var inst_12420 = inst_12447;
var inst_12421 = inst_12446;
var inst_12422 = inst_12448;
var inst_12423 = (0);
var state_12541__$1 = (function (){var statearr_12594 = state_12541;
(statearr_12594[(14)] = inst_12420);

(statearr_12594[(15)] = inst_12421);

(statearr_12594[(16)] = inst_12422);

(statearr_12594[(17)] = inst_12423);

return statearr_12594;
})();
var statearr_12595_12671 = state_12541__$1;
(statearr_12595_12671[(2)] = null);

(statearr_12595_12671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (11))){
var inst_12420 = (state_12541[(14)]);
var inst_12442 = (state_12541[(7)]);
var inst_12442__$1 = cljs.core.seq.call(null,inst_12420);
var state_12541__$1 = (function (){var statearr_12596 = state_12541;
(statearr_12596[(7)] = inst_12442__$1);

return statearr_12596;
})();
if(inst_12442__$1){
var statearr_12597_12672 = state_12541__$1;
(statearr_12597_12672[(1)] = (16));

} else {
var statearr_12598_12676 = state_12541__$1;
(statearr_12598_12676[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (9))){
var inst_12472 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
var statearr_12599_12677 = state_12541__$1;
(statearr_12599_12677[(2)] = inst_12472);

(statearr_12599_12677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (5))){
var inst_12418 = cljs.core.deref.call(null,cs);
var inst_12419 = cljs.core.seq.call(null,inst_12418);
var inst_12420 = inst_12419;
var inst_12421 = null;
var inst_12422 = (0);
var inst_12423 = (0);
var state_12541__$1 = (function (){var statearr_12600 = state_12541;
(statearr_12600[(14)] = inst_12420);

(statearr_12600[(15)] = inst_12421);

(statearr_12600[(16)] = inst_12422);

(statearr_12600[(17)] = inst_12423);

return statearr_12600;
})();
var statearr_12601_12678 = state_12541__$1;
(statearr_12601_12678[(2)] = null);

(statearr_12601_12678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (14))){
var state_12541__$1 = state_12541;
var statearr_12602_12679 = state_12541__$1;
(statearr_12602_12679[(2)] = null);

(statearr_12602_12679[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (45))){
var inst_12531 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
var statearr_12603_12680 = state_12541__$1;
(statearr_12603_12680[(2)] = inst_12531);

(statearr_12603_12680[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (26))){
var inst_12475 = (state_12541[(27)]);
var inst_12527 = (state_12541[(2)]);
var inst_12528 = cljs.core.seq.call(null,inst_12475);
var state_12541__$1 = (function (){var statearr_12604 = state_12541;
(statearr_12604[(29)] = inst_12527);

return statearr_12604;
})();
if(inst_12528){
var statearr_12605_12681 = state_12541__$1;
(statearr_12605_12681[(1)] = (42));

} else {
var statearr_12606_12682 = state_12541__$1;
(statearr_12606_12682[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (16))){
var inst_12442 = (state_12541[(7)]);
var inst_12444 = cljs.core.chunked_seq_QMARK_.call(null,inst_12442);
var state_12541__$1 = state_12541;
if(inst_12444){
var statearr_12607_12683 = state_12541__$1;
(statearr_12607_12683[(1)] = (19));

} else {
var statearr_12608_12684 = state_12541__$1;
(statearr_12608_12684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (38))){
var inst_12520 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
var statearr_12609_12685 = state_12541__$1;
(statearr_12609_12685[(2)] = inst_12520);

(statearr_12609_12685[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (30))){
var state_12541__$1 = state_12541;
var statearr_12610_12686 = state_12541__$1;
(statearr_12610_12686[(2)] = null);

(statearr_12610_12686[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (10))){
var inst_12421 = (state_12541[(15)]);
var inst_12423 = (state_12541[(17)]);
var inst_12431 = cljs.core._nth.call(null,inst_12421,inst_12423);
var inst_12432 = cljs.core.nth.call(null,inst_12431,(0),null);
var inst_12433 = cljs.core.nth.call(null,inst_12431,(1),null);
var state_12541__$1 = (function (){var statearr_12611 = state_12541;
(statearr_12611[(24)] = inst_12432);

return statearr_12611;
})();
if(cljs.core.truth_(inst_12433)){
var statearr_12612_12687 = state_12541__$1;
(statearr_12612_12687[(1)] = (13));

} else {
var statearr_12613_12688 = state_12541__$1;
(statearr_12613_12688[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (18))){
var inst_12468 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
var statearr_12614_12689 = state_12541__$1;
(statearr_12614_12689[(2)] = inst_12468);

(statearr_12614_12689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (42))){
var state_12541__$1 = state_12541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12541__$1,(45),dchan);
} else {
if((state_val_12542 === (37))){
var inst_12501 = (state_12541[(23)]);
var inst_12510 = (state_12541[(22)]);
var inst_12411 = (state_12541[(12)]);
var inst_12510__$1 = cljs.core.first.call(null,inst_12501);
var inst_12511 = cljs.core.async.put_BANG_.call(null,inst_12510__$1,inst_12411,done);
var state_12541__$1 = (function (){var statearr_12615 = state_12541;
(statearr_12615[(22)] = inst_12510__$1);

return statearr_12615;
})();
if(cljs.core.truth_(inst_12511)){
var statearr_12616_12690 = state_12541__$1;
(statearr_12616_12690[(1)] = (39));

} else {
var statearr_12617_12691 = state_12541__$1;
(statearr_12617_12691[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (8))){
var inst_12423 = (state_12541[(17)]);
var inst_12422 = (state_12541[(16)]);
var inst_12425 = (inst_12423 < inst_12422);
var inst_12426 = inst_12425;
var state_12541__$1 = state_12541;
if(cljs.core.truth_(inst_12426)){
var statearr_12618_12692 = state_12541__$1;
(statearr_12618_12692[(1)] = (10));

} else {
var statearr_12619_12693 = state_12541__$1;
(statearr_12619_12693[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__11700__auto__ = null;
var cljs$core$async$mult_$_state_machine__11700__auto____0 = (function (){
var statearr_12620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12620[(0)] = cljs$core$async$mult_$_state_machine__11700__auto__);

(statearr_12620[(1)] = (1));

return statearr_12620;
});
var cljs$core$async$mult_$_state_machine__11700__auto____1 = (function (state_12541){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_12541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e12621){var ex__11703__auto__ = e12621;
var statearr_12622_12695 = state_12541;
(statearr_12622_12695[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_12541[(4)]))){
var statearr_12623_12697 = state_12541;
(statearr_12623_12697[(1)] = cljs.core.first.call(null,(state_12541[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12699 = state_12541;
state_12541 = G__12699;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11700__auto__ = function(state_12541){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11700__auto____1.call(this,state_12541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11700__auto____0;
cljs$core$async$mult_$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11700__auto____1;
return cljs$core$async$mult_$_state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_12624 = f__11784__auto__.call(null);
(statearr_12624[(6)] = c__11783__auto___12627);

return statearr_12624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
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
var G__12626 = arguments.length;
switch (G__12626) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_12737 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_12737.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12766 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_12766.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12769 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12769.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12770 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_12770.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12773 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12773.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___12778 = arguments.length;
var i__5750__auto___12779 = (0);
while(true){
if((i__5750__auto___12779 < len__5749__auto___12778)){
args__5755__auto__.push((arguments[i__5750__auto___12779]));

var G__12780 = (i__5750__auto___12779 + (1));
i__5750__auto___12779 = G__12780;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12654){
var map__12656 = p__12654;
var map__12656__$1 = cljs.core.__destructure_map.call(null,map__12656);
var opts = map__12656__$1;
var statearr_12657_12783 = state;
(statearr_12657_12783[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_12659_12785 = state;
(statearr_12659_12785[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_12660_12786 = state;
(statearr_12660_12786[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12647){
var G__12648 = cljs.core.first.call(null,seq12647);
var seq12647__$1 = cljs.core.next.call(null,seq12647);
var G__12649 = cljs.core.first.call(null,seq12647__$1);
var seq12647__$2 = cljs.core.next.call(null,seq12647__$1);
var G__12650 = cljs.core.first.call(null,seq12647__$2);
var seq12647__$3 = cljs.core.next.call(null,seq12647__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12648,G__12649,G__12650,seq12647__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12673 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12673 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12674){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12674 = meta12674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12675,meta12674__$1){
var self__ = this;
var _12675__$1 = this;
return (new cljs.core.async.t_cljs$core$async12673(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12674__$1));
}));

(cljs.core.async.t_cljs$core$async12673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12675){
var self__ = this;
var _12675__$1 = this;
return self__.meta12674;
}));

(cljs.core.async.t_cljs$core$async12673.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12673.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12673.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12673.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12673.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12673.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12673.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12674","meta12674",183326422,null)], null);
}));

(cljs.core.async.t_cljs$core$async12673.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12673");

(cljs.core.async.t_cljs$core$async12673.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12673");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12673.
 */
cljs.core.async.__GT_t_cljs$core$async12673 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12673(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12674){
return (new cljs.core.async.t_cljs$core$async12673(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12674));
});

}

return (new cljs.core.async.t_cljs$core$async12673(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11783__auto___12823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_12767){
var state_val_12768 = (state_12767[(1)]);
if((state_val_12768 === (7))){
var inst_12725 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
if(cljs.core.truth_(inst_12725)){
var statearr_12771_12824 = state_12767__$1;
(statearr_12771_12824[(1)] = (8));

} else {
var statearr_12772_12825 = state_12767__$1;
(statearr_12772_12825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (20))){
var inst_12718 = (state_12767[(7)]);
var state_12767__$1 = state_12767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12767__$1,(23),out,inst_12718);
} else {
if((state_val_12768 === (1))){
var inst_12700 = calc_state.call(null);
var inst_12701 = cljs.core.__destructure_map.call(null,inst_12700);
var inst_12702 = cljs.core.get.call(null,inst_12701,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12703 = cljs.core.get.call(null,inst_12701,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12704 = cljs.core.get.call(null,inst_12701,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12705 = inst_12700;
var state_12767__$1 = (function (){var statearr_12774 = state_12767;
(statearr_12774[(8)] = inst_12702);

(statearr_12774[(9)] = inst_12703);

(statearr_12774[(10)] = inst_12704);

(statearr_12774[(11)] = inst_12705);

return statearr_12774;
})();
var statearr_12775_12826 = state_12767__$1;
(statearr_12775_12826[(2)] = null);

(statearr_12775_12826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (24))){
var inst_12708 = (state_12767[(12)]);
var inst_12705 = inst_12708;
var state_12767__$1 = (function (){var statearr_12776 = state_12767;
(statearr_12776[(11)] = inst_12705);

return statearr_12776;
})();
var statearr_12777_12828 = state_12767__$1;
(statearr_12777_12828[(2)] = null);

(statearr_12777_12828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (4))){
var inst_12718 = (state_12767[(7)]);
var inst_12720 = (state_12767[(13)]);
var inst_12717 = (state_12767[(2)]);
var inst_12718__$1 = cljs.core.nth.call(null,inst_12717,(0),null);
var inst_12719 = cljs.core.nth.call(null,inst_12717,(1),null);
var inst_12720__$1 = (inst_12718__$1 == null);
var state_12767__$1 = (function (){var statearr_12781 = state_12767;
(statearr_12781[(7)] = inst_12718__$1);

(statearr_12781[(14)] = inst_12719);

(statearr_12781[(13)] = inst_12720__$1);

return statearr_12781;
})();
if(cljs.core.truth_(inst_12720__$1)){
var statearr_12782_12831 = state_12767__$1;
(statearr_12782_12831[(1)] = (5));

} else {
var statearr_12784_12832 = state_12767__$1;
(statearr_12784_12832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (15))){
var inst_12710 = (state_12767[(15)]);
var inst_12740 = (state_12767[(16)]);
var inst_12740__$1 = cljs.core.empty_QMARK_.call(null,inst_12710);
var state_12767__$1 = (function (){var statearr_12787 = state_12767;
(statearr_12787[(16)] = inst_12740__$1);

return statearr_12787;
})();
if(inst_12740__$1){
var statearr_12788_12833 = state_12767__$1;
(statearr_12788_12833[(1)] = (17));

} else {
var statearr_12789_12834 = state_12767__$1;
(statearr_12789_12834[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (21))){
var inst_12708 = (state_12767[(12)]);
var inst_12705 = inst_12708;
var state_12767__$1 = (function (){var statearr_12790 = state_12767;
(statearr_12790[(11)] = inst_12705);

return statearr_12790;
})();
var statearr_12791_12835 = state_12767__$1;
(statearr_12791_12835[(2)] = null);

(statearr_12791_12835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (13))){
var inst_12732 = (state_12767[(2)]);
var inst_12733 = calc_state.call(null);
var inst_12705 = inst_12733;
var state_12767__$1 = (function (){var statearr_12792 = state_12767;
(statearr_12792[(17)] = inst_12732);

(statearr_12792[(11)] = inst_12705);

return statearr_12792;
})();
var statearr_12793_12839 = state_12767__$1;
(statearr_12793_12839[(2)] = null);

(statearr_12793_12839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (22))){
var inst_12760 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12794_12840 = state_12767__$1;
(statearr_12794_12840[(2)] = inst_12760);

(statearr_12794_12840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (6))){
var inst_12719 = (state_12767[(14)]);
var inst_12723 = cljs.core._EQ_.call(null,inst_12719,change);
var state_12767__$1 = state_12767;
var statearr_12795_12841 = state_12767__$1;
(statearr_12795_12841[(2)] = inst_12723);

(statearr_12795_12841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (25))){
var state_12767__$1 = state_12767;
var statearr_12796_12842 = state_12767__$1;
(statearr_12796_12842[(2)] = null);

(statearr_12796_12842[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (17))){
var inst_12711 = (state_12767[(18)]);
var inst_12719 = (state_12767[(14)]);
var inst_12742 = inst_12711.call(null,inst_12719);
var inst_12743 = cljs.core.not.call(null,inst_12742);
var state_12767__$1 = state_12767;
var statearr_12797_12843 = state_12767__$1;
(statearr_12797_12843[(2)] = inst_12743);

(statearr_12797_12843[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (3))){
var inst_12764 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12767__$1,inst_12764);
} else {
if((state_val_12768 === (12))){
var state_12767__$1 = state_12767;
var statearr_12798_12844 = state_12767__$1;
(statearr_12798_12844[(2)] = null);

(statearr_12798_12844[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (2))){
var inst_12705 = (state_12767[(11)]);
var inst_12708 = (state_12767[(12)]);
var inst_12708__$1 = cljs.core.__destructure_map.call(null,inst_12705);
var inst_12710 = cljs.core.get.call(null,inst_12708__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12711 = cljs.core.get.call(null,inst_12708__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12712 = cljs.core.get.call(null,inst_12708__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12767__$1 = (function (){var statearr_12799 = state_12767;
(statearr_12799[(12)] = inst_12708__$1);

(statearr_12799[(15)] = inst_12710);

(statearr_12799[(18)] = inst_12711);

return statearr_12799;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12767__$1,(4),inst_12712);
} else {
if((state_val_12768 === (23))){
var inst_12751 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
if(cljs.core.truth_(inst_12751)){
var statearr_12800_12845 = state_12767__$1;
(statearr_12800_12845[(1)] = (24));

} else {
var statearr_12801_12846 = state_12767__$1;
(statearr_12801_12846[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (19))){
var inst_12746 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12802_12847 = state_12767__$1;
(statearr_12802_12847[(2)] = inst_12746);

(statearr_12802_12847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (11))){
var inst_12719 = (state_12767[(14)]);
var inst_12729 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12719);
var state_12767__$1 = state_12767;
var statearr_12803_12848 = state_12767__$1;
(statearr_12803_12848[(2)] = inst_12729);

(statearr_12803_12848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (9))){
var inst_12710 = (state_12767[(15)]);
var inst_12719 = (state_12767[(14)]);
var inst_12736 = (state_12767[(19)]);
var inst_12736__$1 = inst_12710.call(null,inst_12719);
var state_12767__$1 = (function (){var statearr_12804 = state_12767;
(statearr_12804[(19)] = inst_12736__$1);

return statearr_12804;
})();
if(cljs.core.truth_(inst_12736__$1)){
var statearr_12805_12849 = state_12767__$1;
(statearr_12805_12849[(1)] = (14));

} else {
var statearr_12806_12850 = state_12767__$1;
(statearr_12806_12850[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (5))){
var inst_12720 = (state_12767[(13)]);
var state_12767__$1 = state_12767;
var statearr_12807_12851 = state_12767__$1;
(statearr_12807_12851[(2)] = inst_12720);

(statearr_12807_12851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (14))){
var inst_12736 = (state_12767[(19)]);
var state_12767__$1 = state_12767;
var statearr_12808_12853 = state_12767__$1;
(statearr_12808_12853[(2)] = inst_12736);

(statearr_12808_12853[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (26))){
var inst_12756 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12809_12858 = state_12767__$1;
(statearr_12809_12858[(2)] = inst_12756);

(statearr_12809_12858[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (16))){
var inst_12748 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
if(cljs.core.truth_(inst_12748)){
var statearr_12810_12870 = state_12767__$1;
(statearr_12810_12870[(1)] = (20));

} else {
var statearr_12811_12872 = state_12767__$1;
(statearr_12811_12872[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (10))){
var inst_12762 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12812_12873 = state_12767__$1;
(statearr_12812_12873[(2)] = inst_12762);

(statearr_12812_12873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (18))){
var inst_12740 = (state_12767[(16)]);
var state_12767__$1 = state_12767;
var statearr_12813_12875 = state_12767__$1;
(statearr_12813_12875[(2)] = inst_12740);

(statearr_12813_12875[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (8))){
var inst_12718 = (state_12767[(7)]);
var inst_12727 = (inst_12718 == null);
var state_12767__$1 = state_12767;
if(cljs.core.truth_(inst_12727)){
var statearr_12814_12879 = state_12767__$1;
(statearr_12814_12879[(1)] = (11));

} else {
var statearr_12815_12882 = state_12767__$1;
(statearr_12815_12882[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__11700__auto__ = null;
var cljs$core$async$mix_$_state_machine__11700__auto____0 = (function (){
var statearr_12816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12816[(0)] = cljs$core$async$mix_$_state_machine__11700__auto__);

(statearr_12816[(1)] = (1));

return statearr_12816;
});
var cljs$core$async$mix_$_state_machine__11700__auto____1 = (function (state_12767){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_12767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e12817){var ex__11703__auto__ = e12817;
var statearr_12818_12910 = state_12767;
(statearr_12818_12910[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_12767[(4)]))){
var statearr_12819_12914 = state_12767;
(statearr_12819_12914[(1)] = cljs.core.first.call(null,(state_12767[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12928 = state_12767;
state_12767 = G__12928;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11700__auto__ = function(state_12767){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11700__auto____1.call(this,state_12767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11700__auto____0;
cljs$core$async$mix_$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11700__auto____1;
return cljs$core$async$mix_$_state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_12820 = f__11784__auto__.call(null);
(statearr_12820[(6)] = c__11783__auto___12823);

return statearr_12820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_12938 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_12938.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12942 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_12942.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12948 = (function() {
var G__12949 = null;
var G__12949__1 = (function (p){
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
var G__12949__2 = (function (p,v){
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
G__12949 = function(p,v){
switch(arguments.length){
case 1:
return G__12949__1.call(this,p);
case 2:
return G__12949__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12949.cljs$core$IFn$_invoke$arity$1 = G__12949__1;
G__12949.cljs$core$IFn$_invoke$arity$2 = G__12949__2;
return G__12949;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12822 = arguments.length;
switch (G__12822) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12948.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12948.call(null,p,v);
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
var G__12830 = arguments.length;
switch (G__12830) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12827_SHARP_){
if(cljs.core.truth_(p1__12827_SHARP_.call(null,topic))){
return p1__12827_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12827_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12836 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12836 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12837){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12837 = meta12837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12838,meta12837__$1){
var self__ = this;
var _12838__$1 = this;
return (new cljs.core.async.t_cljs$core$async12836(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12837__$1));
}));

(cljs.core.async.t_cljs$core$async12836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12838){
var self__ = this;
var _12838__$1 = this;
return self__.meta12837;
}));

(cljs.core.async.t_cljs$core$async12836.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12836.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12836.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12836.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12836.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12836.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12836.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12837","meta12837",1321934475,null)], null);
}));

(cljs.core.async.t_cljs$core$async12836.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12836");

(cljs.core.async.t_cljs$core$async12836.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12836");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12836.
 */
cljs.core.async.__GT_t_cljs$core$async12836 = (function cljs$core$async$__GT_t_cljs$core$async12836(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12837){
return (new cljs.core.async.t_cljs$core$async12836(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12837));
});

}

return (new cljs.core.async.t_cljs$core$async12836(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11783__auto___12992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_12934){
var state_val_12935 = (state_12934[(1)]);
if((state_val_12935 === (7))){
var inst_12930 = (state_12934[(2)]);
var state_12934__$1 = state_12934;
var statearr_12936_12993 = state_12934__$1;
(statearr_12936_12993[(2)] = inst_12930);

(statearr_12936_12993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (20))){
var state_12934__$1 = state_12934;
var statearr_12937_12994 = state_12934__$1;
(statearr_12937_12994[(2)] = null);

(statearr_12937_12994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (1))){
var state_12934__$1 = state_12934;
var statearr_12939_12995 = state_12934__$1;
(statearr_12939_12995[(2)] = null);

(statearr_12939_12995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (24))){
var inst_12911 = (state_12934[(7)]);
var inst_12921 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12911);
var state_12934__$1 = state_12934;
var statearr_12940_12996 = state_12934__$1;
(statearr_12940_12996[(2)] = inst_12921);

(statearr_12940_12996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (4))){
var inst_12855 = (state_12934[(8)]);
var inst_12855__$1 = (state_12934[(2)]);
var inst_12856 = (inst_12855__$1 == null);
var state_12934__$1 = (function (){var statearr_12941 = state_12934;
(statearr_12941[(8)] = inst_12855__$1);

return statearr_12941;
})();
if(cljs.core.truth_(inst_12856)){
var statearr_12943_12997 = state_12934__$1;
(statearr_12943_12997[(1)] = (5));

} else {
var statearr_12944_12999 = state_12934__$1;
(statearr_12944_12999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (15))){
var inst_12904 = (state_12934[(2)]);
var state_12934__$1 = state_12934;
var statearr_12945_13001 = state_12934__$1;
(statearr_12945_13001[(2)] = inst_12904);

(statearr_12945_13001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (21))){
var inst_12926 = (state_12934[(2)]);
var state_12934__$1 = (function (){var statearr_12946 = state_12934;
(statearr_12946[(9)] = inst_12926);

return statearr_12946;
})();
var statearr_12947_13007 = state_12934__$1;
(statearr_12947_13007[(2)] = null);

(statearr_12947_13007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (13))){
var inst_12886 = (state_12934[(10)]);
var inst_12888 = cljs.core.chunked_seq_QMARK_.call(null,inst_12886);
var state_12934__$1 = state_12934;
if(inst_12888){
var statearr_12951_13008 = state_12934__$1;
(statearr_12951_13008[(1)] = (16));

} else {
var statearr_12952_13009 = state_12934__$1;
(statearr_12952_13009[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (22))){
var inst_12918 = (state_12934[(2)]);
var state_12934__$1 = state_12934;
if(cljs.core.truth_(inst_12918)){
var statearr_12953_13010 = state_12934__$1;
(statearr_12953_13010[(1)] = (23));

} else {
var statearr_12954_13011 = state_12934__$1;
(statearr_12954_13011[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (6))){
var inst_12855 = (state_12934[(8)]);
var inst_12911 = (state_12934[(7)]);
var inst_12913 = (state_12934[(11)]);
var inst_12911__$1 = topic_fn.call(null,inst_12855);
var inst_12912 = cljs.core.deref.call(null,mults);
var inst_12913__$1 = cljs.core.get.call(null,inst_12912,inst_12911__$1);
var state_12934__$1 = (function (){var statearr_12955 = state_12934;
(statearr_12955[(7)] = inst_12911__$1);

(statearr_12955[(11)] = inst_12913__$1);

return statearr_12955;
})();
if(cljs.core.truth_(inst_12913__$1)){
var statearr_12956_13012 = state_12934__$1;
(statearr_12956_13012[(1)] = (19));

} else {
var statearr_12957_13013 = state_12934__$1;
(statearr_12957_13013[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (25))){
var inst_12923 = (state_12934[(2)]);
var state_12934__$1 = state_12934;
var statearr_12958_13014 = state_12934__$1;
(statearr_12958_13014[(2)] = inst_12923);

(statearr_12958_13014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (17))){
var inst_12886 = (state_12934[(10)]);
var inst_12895 = cljs.core.first.call(null,inst_12886);
var inst_12896 = cljs.core.async.muxch_STAR_.call(null,inst_12895);
var inst_12897 = cljs.core.async.close_BANG_.call(null,inst_12896);
var inst_12898 = cljs.core.next.call(null,inst_12886);
var inst_12866 = inst_12898;
var inst_12867 = null;
var inst_12868 = (0);
var inst_12869 = (0);
var state_12934__$1 = (function (){var statearr_12959 = state_12934;
(statearr_12959[(12)] = inst_12897);

(statearr_12959[(13)] = inst_12866);

(statearr_12959[(14)] = inst_12867);

(statearr_12959[(15)] = inst_12868);

(statearr_12959[(16)] = inst_12869);

return statearr_12959;
})();
var statearr_12960_13037 = state_12934__$1;
(statearr_12960_13037[(2)] = null);

(statearr_12960_13037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (3))){
var inst_12932 = (state_12934[(2)]);
var state_12934__$1 = state_12934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12934__$1,inst_12932);
} else {
if((state_val_12935 === (12))){
var inst_12906 = (state_12934[(2)]);
var state_12934__$1 = state_12934;
var statearr_12961_13051 = state_12934__$1;
(statearr_12961_13051[(2)] = inst_12906);

(statearr_12961_13051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (2))){
var state_12934__$1 = state_12934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12934__$1,(4),ch);
} else {
if((state_val_12935 === (23))){
var state_12934__$1 = state_12934;
var statearr_12962_13054 = state_12934__$1;
(statearr_12962_13054[(2)] = null);

(statearr_12962_13054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (19))){
var inst_12913 = (state_12934[(11)]);
var inst_12855 = (state_12934[(8)]);
var inst_12916 = cljs.core.async.muxch_STAR_.call(null,inst_12913);
var state_12934__$1 = state_12934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12934__$1,(22),inst_12916,inst_12855);
} else {
if((state_val_12935 === (11))){
var inst_12866 = (state_12934[(13)]);
var inst_12886 = (state_12934[(10)]);
var inst_12886__$1 = cljs.core.seq.call(null,inst_12866);
var state_12934__$1 = (function (){var statearr_12963 = state_12934;
(statearr_12963[(10)] = inst_12886__$1);

return statearr_12963;
})();
if(inst_12886__$1){
var statearr_12964_13056 = state_12934__$1;
(statearr_12964_13056[(1)] = (13));

} else {
var statearr_12965_13058 = state_12934__$1;
(statearr_12965_13058[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (9))){
var inst_12908 = (state_12934[(2)]);
var state_12934__$1 = state_12934;
var statearr_12966_13059 = state_12934__$1;
(statearr_12966_13059[(2)] = inst_12908);

(statearr_12966_13059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (5))){
var inst_12863 = cljs.core.deref.call(null,mults);
var inst_12864 = cljs.core.vals.call(null,inst_12863);
var inst_12865 = cljs.core.seq.call(null,inst_12864);
var inst_12866 = inst_12865;
var inst_12867 = null;
var inst_12868 = (0);
var inst_12869 = (0);
var state_12934__$1 = (function (){var statearr_12967 = state_12934;
(statearr_12967[(13)] = inst_12866);

(statearr_12967[(14)] = inst_12867);

(statearr_12967[(15)] = inst_12868);

(statearr_12967[(16)] = inst_12869);

return statearr_12967;
})();
var statearr_12968_13062 = state_12934__$1;
(statearr_12968_13062[(2)] = null);

(statearr_12968_13062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (14))){
var state_12934__$1 = state_12934;
var statearr_12972_13064 = state_12934__$1;
(statearr_12972_13064[(2)] = null);

(statearr_12972_13064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (16))){
var inst_12886 = (state_12934[(10)]);
var inst_12890 = cljs.core.chunk_first.call(null,inst_12886);
var inst_12891 = cljs.core.chunk_rest.call(null,inst_12886);
var inst_12892 = cljs.core.count.call(null,inst_12890);
var inst_12866 = inst_12891;
var inst_12867 = inst_12890;
var inst_12868 = inst_12892;
var inst_12869 = (0);
var state_12934__$1 = (function (){var statearr_12973 = state_12934;
(statearr_12973[(13)] = inst_12866);

(statearr_12973[(14)] = inst_12867);

(statearr_12973[(15)] = inst_12868);

(statearr_12973[(16)] = inst_12869);

return statearr_12973;
})();
var statearr_12974_13068 = state_12934__$1;
(statearr_12974_13068[(2)] = null);

(statearr_12974_13068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (10))){
var inst_12867 = (state_12934[(14)]);
var inst_12869 = (state_12934[(16)]);
var inst_12866 = (state_12934[(13)]);
var inst_12868 = (state_12934[(15)]);
var inst_12878 = cljs.core._nth.call(null,inst_12867,inst_12869);
var inst_12880 = cljs.core.async.muxch_STAR_.call(null,inst_12878);
var inst_12881 = cljs.core.async.close_BANG_.call(null,inst_12880);
var inst_12883 = (inst_12869 + (1));
var tmp12969 = inst_12868;
var tmp12970 = inst_12867;
var tmp12971 = inst_12866;
var inst_12866__$1 = tmp12971;
var inst_12867__$1 = tmp12970;
var inst_12868__$1 = tmp12969;
var inst_12869__$1 = inst_12883;
var state_12934__$1 = (function (){var statearr_12975 = state_12934;
(statearr_12975[(17)] = inst_12881);

(statearr_12975[(13)] = inst_12866__$1);

(statearr_12975[(14)] = inst_12867__$1);

(statearr_12975[(15)] = inst_12868__$1);

(statearr_12975[(16)] = inst_12869__$1);

return statearr_12975;
})();
var statearr_12976_13069 = state_12934__$1;
(statearr_12976_13069[(2)] = null);

(statearr_12976_13069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (18))){
var inst_12901 = (state_12934[(2)]);
var state_12934__$1 = state_12934;
var statearr_12977_13070 = state_12934__$1;
(statearr_12977_13070[(2)] = inst_12901);

(statearr_12977_13070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12935 === (8))){
var inst_12869 = (state_12934[(16)]);
var inst_12868 = (state_12934[(15)]);
var inst_12874 = (inst_12869 < inst_12868);
var inst_12876 = inst_12874;
var state_12934__$1 = state_12934;
if(cljs.core.truth_(inst_12876)){
var statearr_12978_13071 = state_12934__$1;
(statearr_12978_13071[(1)] = (10));

} else {
var statearr_12979_13073 = state_12934__$1;
(statearr_12979_13073[(1)] = (11));

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
var cljs$core$async$state_machine__11700__auto__ = null;
var cljs$core$async$state_machine__11700__auto____0 = (function (){
var statearr_12980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12980[(0)] = cljs$core$async$state_machine__11700__auto__);

(statearr_12980[(1)] = (1));

return statearr_12980;
});
var cljs$core$async$state_machine__11700__auto____1 = (function (state_12934){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_12934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e12981){var ex__11703__auto__ = e12981;
var statearr_12982_13076 = state_12934;
(statearr_12982_13076[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_12934[(4)]))){
var statearr_12983_13078 = state_12934;
(statearr_12983_13078[(1)] = cljs.core.first.call(null,(state_12934[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13079 = state_12934;
state_12934 = G__13079;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$state_machine__11700__auto__ = function(state_12934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11700__auto____1.call(this,state_12934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11700__auto____0;
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11700__auto____1;
return cljs$core$async$state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_12984 = f__11784__auto__.call(null);
(statearr_12984[(6)] = c__11783__auto___12992);

return statearr_12984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
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
var G__12986 = arguments.length;
switch (G__12986) {
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
var G__12989 = arguments.length;
switch (G__12989) {
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
var G__12991 = arguments.length;
switch (G__12991) {
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
var c__11783__auto___13144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_13052){
var state_val_13053 = (state_13052[(1)]);
if((state_val_13053 === (7))){
var state_13052__$1 = state_13052;
var statearr_13055_13147 = state_13052__$1;
(statearr_13055_13147[(2)] = null);

(statearr_13055_13147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13053 === (1))){
var state_13052__$1 = state_13052;
var statearr_13057_13148 = state_13052__$1;
(statearr_13057_13148[(2)] = null);

(statearr_13057_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13053 === (4))){
var inst_13003 = (state_13052[(7)]);
var inst_13002 = (state_13052[(8)]);
var inst_13005 = (inst_13003 < inst_13002);
var state_13052__$1 = state_13052;
if(cljs.core.truth_(inst_13005)){
var statearr_13060_13151 = state_13052__$1;
(statearr_13060_13151[(1)] = (6));

} else {
var statearr_13061_13152 = state_13052__$1;
(statearr_13061_13152[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13053 === (15))){
var inst_13036 = (state_13052[(9)]);
var inst_13042 = cljs.core.apply.call(null,f,inst_13036);
var state_13052__$1 = state_13052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13052__$1,(17),out,inst_13042);
} else {
if((state_val_13053 === (13))){
var inst_13036 = (state_13052[(9)]);
var inst_13036__$1 = (state_13052[(2)]);
var inst_13038 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13036__$1);
var state_13052__$1 = (function (){var statearr_13063 = state_13052;
(statearr_13063[(9)] = inst_13036__$1);

return statearr_13063;
})();
if(cljs.core.truth_(inst_13038)){
var statearr_13065_13155 = state_13052__$1;
(statearr_13065_13155[(1)] = (14));

} else {
var statearr_13066_13156 = state_13052__$1;
(statearr_13066_13156[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13053 === (6))){
var state_13052__$1 = state_13052;
var statearr_13067_13157 = state_13052__$1;
(statearr_13067_13157[(2)] = null);

(statearr_13067_13157[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13053 === (17))){
var inst_13044 = (state_13052[(2)]);
var state_13052__$1 = (function (){var statearr_13074 = state_13052;
(statearr_13074[(10)] = inst_13044);

return statearr_13074;
})();
var statearr_13075_13158 = state_13052__$1;
(statearr_13075_13158[(2)] = null);

(statearr_13075_13158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13053 === (3))){
var inst_13049 = (state_13052[(2)]);
var state_13052__$1 = state_13052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13052__$1,inst_13049);
} else {
if((state_val_13053 === (12))){
var _ = (function (){var statearr_13077 = state_13052;
(statearr_13077[(4)] = cljs.core.rest.call(null,(state_13052[(4)])));

return statearr_13077;
})();
var state_13052__$1 = state_13052;
var ex13072 = (state_13052__$1[(2)]);
var statearr_13080_13161 = state_13052__$1;
(statearr_13080_13161[(5)] = ex13072);


if((ex13072 instanceof Object)){
var statearr_13081_13162 = state_13052__$1;
(statearr_13081_13162[(1)] = (11));

(statearr_13081_13162[(5)] = null);

} else {
throw ex13072;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13053 === (2))){
var inst_13000 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13002 = cnt;
var inst_13003 = (0);
var state_13052__$1 = (function (){var statearr_13084 = state_13052;
(statearr_13084[(11)] = inst_13000);

(statearr_13084[(8)] = inst_13002);

(statearr_13084[(7)] = inst_13003);

return statearr_13084;
})();
var statearr_13085_13165 = state_13052__$1;
(statearr_13085_13165[(2)] = null);

(statearr_13085_13165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13053 === (11))){
var inst_13015 = (state_13052[(2)]);
var inst_13016 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13052__$1 = (function (){var statearr_13086 = state_13052;
(statearr_13086[(12)] = inst_13015);

return statearr_13086;
})();
var statearr_13087_13167 = state_13052__$1;
(statearr_13087_13167[(2)] = inst_13016);

(statearr_13087_13167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13053 === (9))){
var inst_13003 = (state_13052[(7)]);
var _ = (function (){var statearr_13088 = state_13052;
(statearr_13088[(4)] = cljs.core.cons.call(null,(12),(state_13052[(4)])));

return statearr_13088;
})();
var inst_13022 = chs__$1.call(null,inst_13003);
var inst_13023 = done.call(null,inst_13003);
var inst_13024 = cljs.core.async.take_BANG_.call(null,inst_13022,inst_13023);
var ___$1 = (function (){var statearr_13089 = state_13052;
(statearr_13089[(4)] = cljs.core.rest.call(null,(state_13052[(4)])));

return statearr_13089;
})();
var state_13052__$1 = state_13052;
var statearr_13090_13171 = state_13052__$1;
(statearr_13090_13171[(2)] = inst_13024);

(statearr_13090_13171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13053 === (5))){
var inst_13034 = (state_13052[(2)]);
var state_13052__$1 = (function (){var statearr_13091 = state_13052;
(statearr_13091[(13)] = inst_13034);

return statearr_13091;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13052__$1,(13),dchan);
} else {
if((state_val_13053 === (14))){
var inst_13040 = cljs.core.async.close_BANG_.call(null,out);
var state_13052__$1 = state_13052;
var statearr_13092_13173 = state_13052__$1;
(statearr_13092_13173[(2)] = inst_13040);

(statearr_13092_13173[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13053 === (16))){
var inst_13047 = (state_13052[(2)]);
var state_13052__$1 = state_13052;
var statearr_13093_13174 = state_13052__$1;
(statearr_13093_13174[(2)] = inst_13047);

(statearr_13093_13174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13053 === (10))){
var inst_13003 = (state_13052[(7)]);
var inst_13027 = (state_13052[(2)]);
var inst_13028 = (inst_13003 + (1));
var inst_13003__$1 = inst_13028;
var state_13052__$1 = (function (){var statearr_13094 = state_13052;
(statearr_13094[(14)] = inst_13027);

(statearr_13094[(7)] = inst_13003__$1);

return statearr_13094;
})();
var statearr_13095_13177 = state_13052__$1;
(statearr_13095_13177[(2)] = null);

(statearr_13095_13177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13053 === (8))){
var inst_13032 = (state_13052[(2)]);
var state_13052__$1 = state_13052;
var statearr_13096_13178 = state_13052__$1;
(statearr_13096_13178[(2)] = inst_13032);

(statearr_13096_13178[(1)] = (5));


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
var cljs$core$async$state_machine__11700__auto__ = null;
var cljs$core$async$state_machine__11700__auto____0 = (function (){
var statearr_13097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13097[(0)] = cljs$core$async$state_machine__11700__auto__);

(statearr_13097[(1)] = (1));

return statearr_13097;
});
var cljs$core$async$state_machine__11700__auto____1 = (function (state_13052){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_13052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e13098){var ex__11703__auto__ = e13098;
var statearr_13099_13185 = state_13052;
(statearr_13099_13185[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_13052[(4)]))){
var statearr_13100_13189 = state_13052;
(statearr_13100_13189[(1)] = cljs.core.first.call(null,(state_13052[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13204 = state_13052;
state_13052 = G__13204;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$state_machine__11700__auto__ = function(state_13052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11700__auto____1.call(this,state_13052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11700__auto____0;
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11700__auto____1;
return cljs$core$async$state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_13101 = f__11784__auto__.call(null);
(statearr_13101[(6)] = c__11783__auto___13144);

return statearr_13101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
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
var G__13104 = arguments.length;
switch (G__13104) {
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
var c__11783__auto___13213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_13137){
var state_val_13138 = (state_13137[(1)]);
if((state_val_13138 === (7))){
var inst_13116 = (state_13137[(7)]);
var inst_13117 = (state_13137[(8)]);
var inst_13116__$1 = (state_13137[(2)]);
var inst_13117__$1 = cljs.core.nth.call(null,inst_13116__$1,(0),null);
var inst_13118 = cljs.core.nth.call(null,inst_13116__$1,(1),null);
var inst_13119 = (inst_13117__$1 == null);
var state_13137__$1 = (function (){var statearr_13139 = state_13137;
(statearr_13139[(7)] = inst_13116__$1);

(statearr_13139[(8)] = inst_13117__$1);

(statearr_13139[(9)] = inst_13118);

return statearr_13139;
})();
if(cljs.core.truth_(inst_13119)){
var statearr_13140_13218 = state_13137__$1;
(statearr_13140_13218[(1)] = (8));

} else {
var statearr_13141_13219 = state_13137__$1;
(statearr_13141_13219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13138 === (1))){
var inst_13106 = cljs.core.vec.call(null,chs);
var inst_13107 = inst_13106;
var state_13137__$1 = (function (){var statearr_13142 = state_13137;
(statearr_13142[(10)] = inst_13107);

return statearr_13142;
})();
var statearr_13143_13222 = state_13137__$1;
(statearr_13143_13222[(2)] = null);

(statearr_13143_13222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13138 === (4))){
var inst_13107 = (state_13137[(10)]);
var state_13137__$1 = state_13137;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13137__$1,(7),inst_13107);
} else {
if((state_val_13138 === (6))){
var inst_13133 = (state_13137[(2)]);
var state_13137__$1 = state_13137;
var statearr_13145_13224 = state_13137__$1;
(statearr_13145_13224[(2)] = inst_13133);

(statearr_13145_13224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13138 === (3))){
var inst_13135 = (state_13137[(2)]);
var state_13137__$1 = state_13137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13137__$1,inst_13135);
} else {
if((state_val_13138 === (2))){
var inst_13107 = (state_13137[(10)]);
var inst_13109 = cljs.core.count.call(null,inst_13107);
var inst_13110 = (inst_13109 > (0));
var state_13137__$1 = state_13137;
if(cljs.core.truth_(inst_13110)){
var statearr_13149_13227 = state_13137__$1;
(statearr_13149_13227[(1)] = (4));

} else {
var statearr_13150_13228 = state_13137__$1;
(statearr_13150_13228[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13138 === (11))){
var inst_13107 = (state_13137[(10)]);
var inst_13126 = (state_13137[(2)]);
var tmp13146 = inst_13107;
var inst_13107__$1 = tmp13146;
var state_13137__$1 = (function (){var statearr_13153 = state_13137;
(statearr_13153[(11)] = inst_13126);

(statearr_13153[(10)] = inst_13107__$1);

return statearr_13153;
})();
var statearr_13154_13230 = state_13137__$1;
(statearr_13154_13230[(2)] = null);

(statearr_13154_13230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13138 === (9))){
var inst_13117 = (state_13137[(8)]);
var state_13137__$1 = state_13137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13137__$1,(11),out,inst_13117);
} else {
if((state_val_13138 === (5))){
var inst_13131 = cljs.core.async.close_BANG_.call(null,out);
var state_13137__$1 = state_13137;
var statearr_13159_13234 = state_13137__$1;
(statearr_13159_13234[(2)] = inst_13131);

(statearr_13159_13234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13138 === (10))){
var inst_13129 = (state_13137[(2)]);
var state_13137__$1 = state_13137;
var statearr_13160_13235 = state_13137__$1;
(statearr_13160_13235[(2)] = inst_13129);

(statearr_13160_13235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13138 === (8))){
var inst_13107 = (state_13137[(10)]);
var inst_13116 = (state_13137[(7)]);
var inst_13117 = (state_13137[(8)]);
var inst_13118 = (state_13137[(9)]);
var inst_13121 = (function (){var cs = inst_13107;
var vec__13112 = inst_13116;
var v = inst_13117;
var c = inst_13118;
return (function (p1__13102_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13102_SHARP_);
});
})();
var inst_13122 = cljs.core.filterv.call(null,inst_13121,inst_13107);
var inst_13107__$1 = inst_13122;
var state_13137__$1 = (function (){var statearr_13163 = state_13137;
(statearr_13163[(10)] = inst_13107__$1);

return statearr_13163;
})();
var statearr_13164_13238 = state_13137__$1;
(statearr_13164_13238[(2)] = null);

(statearr_13164_13238[(1)] = (2));


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
var cljs$core$async$state_machine__11700__auto__ = null;
var cljs$core$async$state_machine__11700__auto____0 = (function (){
var statearr_13166 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13166[(0)] = cljs$core$async$state_machine__11700__auto__);

(statearr_13166[(1)] = (1));

return statearr_13166;
});
var cljs$core$async$state_machine__11700__auto____1 = (function (state_13137){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_13137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e13168){var ex__11703__auto__ = e13168;
var statearr_13169_13242 = state_13137;
(statearr_13169_13242[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_13137[(4)]))){
var statearr_13170_13243 = state_13137;
(statearr_13170_13243[(1)] = cljs.core.first.call(null,(state_13137[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13244 = state_13137;
state_13137 = G__13244;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$state_machine__11700__auto__ = function(state_13137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11700__auto____1.call(this,state_13137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11700__auto____0;
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11700__auto____1;
return cljs$core$async$state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_13172 = f__11784__auto__.call(null);
(statearr_13172[(6)] = c__11783__auto___13213);

return statearr_13172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
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
var G__13176 = arguments.length;
switch (G__13176) {
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
var c__11783__auto___13246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_13205){
var state_val_13206 = (state_13205[(1)]);
if((state_val_13206 === (7))){
var inst_13184 = (state_13205[(7)]);
var inst_13184__$1 = (state_13205[(2)]);
var inst_13186 = (inst_13184__$1 == null);
var inst_13187 = cljs.core.not.call(null,inst_13186);
var state_13205__$1 = (function (){var statearr_13208 = state_13205;
(statearr_13208[(7)] = inst_13184__$1);

return statearr_13208;
})();
if(inst_13187){
var statearr_13209_13250 = state_13205__$1;
(statearr_13209_13250[(1)] = (8));

} else {
var statearr_13210_13251 = state_13205__$1;
(statearr_13210_13251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (1))){
var inst_13179 = (0);
var state_13205__$1 = (function (){var statearr_13211 = state_13205;
(statearr_13211[(8)] = inst_13179);

return statearr_13211;
})();
var statearr_13212_13252 = state_13205__$1;
(statearr_13212_13252[(2)] = null);

(statearr_13212_13252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (4))){
var state_13205__$1 = state_13205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13205__$1,(7),ch);
} else {
if((state_val_13206 === (6))){
var inst_13199 = (state_13205[(2)]);
var state_13205__$1 = state_13205;
var statearr_13214_13253 = state_13205__$1;
(statearr_13214_13253[(2)] = inst_13199);

(statearr_13214_13253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (3))){
var inst_13201 = (state_13205[(2)]);
var inst_13202 = cljs.core.async.close_BANG_.call(null,out);
var state_13205__$1 = (function (){var statearr_13215 = state_13205;
(statearr_13215[(9)] = inst_13201);

return statearr_13215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13205__$1,inst_13202);
} else {
if((state_val_13206 === (2))){
var inst_13179 = (state_13205[(8)]);
var inst_13181 = (inst_13179 < n);
var state_13205__$1 = state_13205;
if(cljs.core.truth_(inst_13181)){
var statearr_13216_13254 = state_13205__$1;
(statearr_13216_13254[(1)] = (4));

} else {
var statearr_13217_13255 = state_13205__$1;
(statearr_13217_13255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (11))){
var inst_13179 = (state_13205[(8)]);
var inst_13191 = (state_13205[(2)]);
var inst_13192 = (inst_13179 + (1));
var inst_13179__$1 = inst_13192;
var state_13205__$1 = (function (){var statearr_13220 = state_13205;
(statearr_13220[(10)] = inst_13191);

(statearr_13220[(8)] = inst_13179__$1);

return statearr_13220;
})();
var statearr_13221_13256 = state_13205__$1;
(statearr_13221_13256[(2)] = null);

(statearr_13221_13256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (9))){
var state_13205__$1 = state_13205;
var statearr_13223_13257 = state_13205__$1;
(statearr_13223_13257[(2)] = null);

(statearr_13223_13257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (5))){
var state_13205__$1 = state_13205;
var statearr_13225_13258 = state_13205__$1;
(statearr_13225_13258[(2)] = null);

(statearr_13225_13258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (10))){
var inst_13196 = (state_13205[(2)]);
var state_13205__$1 = state_13205;
var statearr_13226_13259 = state_13205__$1;
(statearr_13226_13259[(2)] = inst_13196);

(statearr_13226_13259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (8))){
var inst_13184 = (state_13205[(7)]);
var state_13205__$1 = state_13205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13205__$1,(11),out,inst_13184);
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
var cljs$core$async$state_machine__11700__auto__ = null;
var cljs$core$async$state_machine__11700__auto____0 = (function (){
var statearr_13229 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13229[(0)] = cljs$core$async$state_machine__11700__auto__);

(statearr_13229[(1)] = (1));

return statearr_13229;
});
var cljs$core$async$state_machine__11700__auto____1 = (function (state_13205){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_13205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e13231){var ex__11703__auto__ = e13231;
var statearr_13232_13260 = state_13205;
(statearr_13232_13260[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_13205[(4)]))){
var statearr_13233_13261 = state_13205;
(statearr_13233_13261[(1)] = cljs.core.first.call(null,(state_13205[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13262 = state_13205;
state_13205 = G__13262;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$state_machine__11700__auto__ = function(state_13205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11700__auto____1.call(this,state_13205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11700__auto____0;
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11700__auto____1;
return cljs$core$async$state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_13236 = f__11784__auto__.call(null);
(statearr_13236[(6)] = c__11783__auto___13246);

return statearr_13236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13239 = (function (f,ch,meta13240){
this.f = f;
this.ch = ch;
this.meta13240 = meta13240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13241,meta13240__$1){
var self__ = this;
var _13241__$1 = this;
return (new cljs.core.async.t_cljs$core$async13239(self__.f,self__.ch,meta13240__$1));
}));

(cljs.core.async.t_cljs$core$async13239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13241){
var self__ = this;
var _13241__$1 = this;
return self__.meta13240;
}));

(cljs.core.async.t_cljs$core$async13239.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13239.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13239.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13239.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13239.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13247 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13247 = (function (f,ch,meta13240,_,fn1,meta13248){
this.f = f;
this.ch = ch;
this.meta13240 = meta13240;
this._ = _;
this.fn1 = fn1;
this.meta13248 = meta13248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13249,meta13248__$1){
var self__ = this;
var _13249__$1 = this;
return (new cljs.core.async.t_cljs$core$async13247(self__.f,self__.ch,self__.meta13240,self__._,self__.fn1,meta13248__$1));
}));

(cljs.core.async.t_cljs$core$async13247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13249){
var self__ = this;
var _13249__$1 = this;
return self__.meta13248;
}));

(cljs.core.async.t_cljs$core$async13247.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13247.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13247.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13247.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__13237_SHARP_){
return f1.call(null,(((p1__13237_SHARP_ == null))?null:self__.f.call(null,p1__13237_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async13247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13240","meta13240",2112973562,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13239","cljs.core.async/t_cljs$core$async13239",-2052963852,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13248","meta13248",513181968,null)], null);
}));

(cljs.core.async.t_cljs$core$async13247.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13247");

(cljs.core.async.t_cljs$core$async13247.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13247");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13247.
 */
cljs.core.async.__GT_t_cljs$core$async13247 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13247(f__$1,ch__$1,meta13240__$1,___$2,fn1__$1,meta13248){
return (new cljs.core.async.t_cljs$core$async13247(f__$1,ch__$1,meta13240__$1,___$2,fn1__$1,meta13248));
});

}

return (new cljs.core.async.t_cljs$core$async13247(self__.f,self__.ch,self__.meta13240,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async13239.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13239.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13240","meta13240",2112973562,null)], null);
}));

(cljs.core.async.t_cljs$core$async13239.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13239");

(cljs.core.async.t_cljs$core$async13239.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13239");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13239.
 */
cljs.core.async.__GT_t_cljs$core$async13239 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13239(f__$1,ch__$1,meta13240){
return (new cljs.core.async.t_cljs$core$async13239(f__$1,ch__$1,meta13240));
});

}

return (new cljs.core.async.t_cljs$core$async13239(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13263 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13263 = (function (f,ch,meta13264){
this.f = f;
this.ch = ch;
this.meta13264 = meta13264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13265,meta13264__$1){
var self__ = this;
var _13265__$1 = this;
return (new cljs.core.async.t_cljs$core$async13263(self__.f,self__.ch,meta13264__$1));
}));

(cljs.core.async.t_cljs$core$async13263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13265){
var self__ = this;
var _13265__$1 = this;
return self__.meta13264;
}));

(cljs.core.async.t_cljs$core$async13263.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13263.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13263.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13263.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13263.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13263.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async13263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13264","meta13264",544751762,null)], null);
}));

(cljs.core.async.t_cljs$core$async13263.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13263");

(cljs.core.async.t_cljs$core$async13263.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13263");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13263.
 */
cljs.core.async.__GT_t_cljs$core$async13263 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13263(f__$1,ch__$1,meta13264){
return (new cljs.core.async.t_cljs$core$async13263(f__$1,ch__$1,meta13264));
});

}

return (new cljs.core.async.t_cljs$core$async13263(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13266 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13266 = (function (p,ch,meta13267){
this.p = p;
this.ch = ch;
this.meta13267 = meta13267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13268,meta13267__$1){
var self__ = this;
var _13268__$1 = this;
return (new cljs.core.async.t_cljs$core$async13266(self__.p,self__.ch,meta13267__$1));
}));

(cljs.core.async.t_cljs$core$async13266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13268){
var self__ = this;
var _13268__$1 = this;
return self__.meta13267;
}));

(cljs.core.async.t_cljs$core$async13266.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13266.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13266.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13266.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13266.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13266.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13266.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13267","meta13267",542222176,null)], null);
}));

(cljs.core.async.t_cljs$core$async13266.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13266");

(cljs.core.async.t_cljs$core$async13266.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13266");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13266.
 */
cljs.core.async.__GT_t_cljs$core$async13266 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13266(p__$1,ch__$1,meta13267){
return (new cljs.core.async.t_cljs$core$async13266(p__$1,ch__$1,meta13267));
});

}

return (new cljs.core.async.t_cljs$core$async13266(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13270 = arguments.length;
switch (G__13270) {
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
var c__11783__auto___13313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_13291){
var state_val_13292 = (state_13291[(1)]);
if((state_val_13292 === (7))){
var inst_13287 = (state_13291[(2)]);
var state_13291__$1 = state_13291;
var statearr_13293_13314 = state_13291__$1;
(statearr_13293_13314[(2)] = inst_13287);

(statearr_13293_13314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13292 === (1))){
var state_13291__$1 = state_13291;
var statearr_13294_13315 = state_13291__$1;
(statearr_13294_13315[(2)] = null);

(statearr_13294_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13292 === (4))){
var inst_13273 = (state_13291[(7)]);
var inst_13273__$1 = (state_13291[(2)]);
var inst_13274 = (inst_13273__$1 == null);
var state_13291__$1 = (function (){var statearr_13295 = state_13291;
(statearr_13295[(7)] = inst_13273__$1);

return statearr_13295;
})();
if(cljs.core.truth_(inst_13274)){
var statearr_13296_13324 = state_13291__$1;
(statearr_13296_13324[(1)] = (5));

} else {
var statearr_13297_13328 = state_13291__$1;
(statearr_13297_13328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13292 === (6))){
var inst_13273 = (state_13291[(7)]);
var inst_13278 = p.call(null,inst_13273);
var state_13291__$1 = state_13291;
if(cljs.core.truth_(inst_13278)){
var statearr_13298_13339 = state_13291__$1;
(statearr_13298_13339[(1)] = (8));

} else {
var statearr_13299_13341 = state_13291__$1;
(statearr_13299_13341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13292 === (3))){
var inst_13289 = (state_13291[(2)]);
var state_13291__$1 = state_13291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13291__$1,inst_13289);
} else {
if((state_val_13292 === (2))){
var state_13291__$1 = state_13291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13291__$1,(4),ch);
} else {
if((state_val_13292 === (11))){
var inst_13281 = (state_13291[(2)]);
var state_13291__$1 = state_13291;
var statearr_13300_13354 = state_13291__$1;
(statearr_13300_13354[(2)] = inst_13281);

(statearr_13300_13354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13292 === (9))){
var state_13291__$1 = state_13291;
var statearr_13301_13367 = state_13291__$1;
(statearr_13301_13367[(2)] = null);

(statearr_13301_13367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13292 === (5))){
var inst_13276 = cljs.core.async.close_BANG_.call(null,out);
var state_13291__$1 = state_13291;
var statearr_13302_13386 = state_13291__$1;
(statearr_13302_13386[(2)] = inst_13276);

(statearr_13302_13386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13292 === (10))){
var inst_13284 = (state_13291[(2)]);
var state_13291__$1 = (function (){var statearr_13303 = state_13291;
(statearr_13303[(8)] = inst_13284);

return statearr_13303;
})();
var statearr_13304_13389 = state_13291__$1;
(statearr_13304_13389[(2)] = null);

(statearr_13304_13389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13292 === (8))){
var inst_13273 = (state_13291[(7)]);
var state_13291__$1 = state_13291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13291__$1,(11),out,inst_13273);
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
var cljs$core$async$state_machine__11700__auto__ = null;
var cljs$core$async$state_machine__11700__auto____0 = (function (){
var statearr_13305 = [null,null,null,null,null,null,null,null,null];
(statearr_13305[(0)] = cljs$core$async$state_machine__11700__auto__);

(statearr_13305[(1)] = (1));

return statearr_13305;
});
var cljs$core$async$state_machine__11700__auto____1 = (function (state_13291){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_13291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e13306){var ex__11703__auto__ = e13306;
var statearr_13307_13397 = state_13291;
(statearr_13307_13397[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_13291[(4)]))){
var statearr_13308_13399 = state_13291;
(statearr_13308_13399[(1)] = cljs.core.first.call(null,(state_13291[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13401 = state_13291;
state_13291 = G__13401;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$state_machine__11700__auto__ = function(state_13291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11700__auto____1.call(this,state_13291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11700__auto____0;
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11700__auto____1;
return cljs$core$async$state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_13309 = f__11784__auto__.call(null);
(statearr_13309[(6)] = c__11783__auto___13313);

return statearr_13309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__13312 = arguments.length;
switch (G__13312) {
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
var c__11783__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_13387){
var state_val_13388 = (state_13387[(1)]);
if((state_val_13388 === (7))){
var inst_13382 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13394_13454 = state_13387__$1;
(statearr_13394_13454[(2)] = inst_13382);

(statearr_13394_13454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (20))){
var inst_13347 = (state_13387[(7)]);
var inst_13361 = (state_13387[(2)]);
var inst_13362 = cljs.core.next.call(null,inst_13347);
var inst_13331 = inst_13362;
var inst_13332 = null;
var inst_13333 = (0);
var inst_13334 = (0);
var state_13387__$1 = (function (){var statearr_13396 = state_13387;
(statearr_13396[(8)] = inst_13361);

(statearr_13396[(9)] = inst_13331);

(statearr_13396[(10)] = inst_13332);

(statearr_13396[(11)] = inst_13333);

(statearr_13396[(12)] = inst_13334);

return statearr_13396;
})();
var statearr_13398_13455 = state_13387__$1;
(statearr_13398_13455[(2)] = null);

(statearr_13398_13455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (1))){
var state_13387__$1 = state_13387;
var statearr_13400_13456 = state_13387__$1;
(statearr_13400_13456[(2)] = null);

(statearr_13400_13456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (4))){
var inst_13318 = (state_13387[(13)]);
var inst_13318__$1 = (state_13387[(2)]);
var inst_13319 = (inst_13318__$1 == null);
var state_13387__$1 = (function (){var statearr_13402 = state_13387;
(statearr_13402[(13)] = inst_13318__$1);

return statearr_13402;
})();
if(cljs.core.truth_(inst_13319)){
var statearr_13403_13459 = state_13387__$1;
(statearr_13403_13459[(1)] = (5));

} else {
var statearr_13404_13460 = state_13387__$1;
(statearr_13404_13460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (15))){
var state_13387__$1 = state_13387;
var statearr_13409_13461 = state_13387__$1;
(statearr_13409_13461[(2)] = null);

(statearr_13409_13461[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (21))){
var state_13387__$1 = state_13387;
var statearr_13412_13462 = state_13387__$1;
(statearr_13412_13462[(2)] = null);

(statearr_13412_13462[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (13))){
var inst_13334 = (state_13387[(12)]);
var inst_13331 = (state_13387[(9)]);
var inst_13332 = (state_13387[(10)]);
var inst_13333 = (state_13387[(11)]);
var inst_13343 = (state_13387[(2)]);
var inst_13344 = (inst_13334 + (1));
var tmp13406 = inst_13333;
var tmp13407 = inst_13332;
var tmp13408 = inst_13331;
var inst_13331__$1 = tmp13408;
var inst_13332__$1 = tmp13407;
var inst_13333__$1 = tmp13406;
var inst_13334__$1 = inst_13344;
var state_13387__$1 = (function (){var statearr_13415 = state_13387;
(statearr_13415[(14)] = inst_13343);

(statearr_13415[(9)] = inst_13331__$1);

(statearr_13415[(10)] = inst_13332__$1);

(statearr_13415[(11)] = inst_13333__$1);

(statearr_13415[(12)] = inst_13334__$1);

return statearr_13415;
})();
var statearr_13416_13465 = state_13387__$1;
(statearr_13416_13465[(2)] = null);

(statearr_13416_13465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (22))){
var state_13387__$1 = state_13387;
var statearr_13417_13466 = state_13387__$1;
(statearr_13417_13466[(2)] = null);

(statearr_13417_13466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (6))){
var inst_13318 = (state_13387[(13)]);
var inst_13329 = f.call(null,inst_13318);
var inst_13330 = cljs.core.seq.call(null,inst_13329);
var inst_13331 = inst_13330;
var inst_13332 = null;
var inst_13333 = (0);
var inst_13334 = (0);
var state_13387__$1 = (function (){var statearr_13423 = state_13387;
(statearr_13423[(9)] = inst_13331);

(statearr_13423[(10)] = inst_13332);

(statearr_13423[(11)] = inst_13333);

(statearr_13423[(12)] = inst_13334);

return statearr_13423;
})();
var statearr_13424_13467 = state_13387__$1;
(statearr_13424_13467[(2)] = null);

(statearr_13424_13467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (17))){
var inst_13347 = (state_13387[(7)]);
var inst_13351 = cljs.core.chunk_first.call(null,inst_13347);
var inst_13352 = cljs.core.chunk_rest.call(null,inst_13347);
var inst_13355 = cljs.core.count.call(null,inst_13351);
var inst_13331 = inst_13352;
var inst_13332 = inst_13351;
var inst_13333 = inst_13355;
var inst_13334 = (0);
var state_13387__$1 = (function (){var statearr_13426 = state_13387;
(statearr_13426[(9)] = inst_13331);

(statearr_13426[(10)] = inst_13332);

(statearr_13426[(11)] = inst_13333);

(statearr_13426[(12)] = inst_13334);

return statearr_13426;
})();
var statearr_13427_13470 = state_13387__$1;
(statearr_13427_13470[(2)] = null);

(statearr_13427_13470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (3))){
var inst_13384 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13387__$1,inst_13384);
} else {
if((state_val_13388 === (12))){
var inst_13371 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13428_13473 = state_13387__$1;
(statearr_13428_13473[(2)] = inst_13371);

(statearr_13428_13473[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (2))){
var state_13387__$1 = state_13387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13387__$1,(4),in$);
} else {
if((state_val_13388 === (23))){
var inst_13380 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13429_13493 = state_13387__$1;
(statearr_13429_13493[(2)] = inst_13380);

(statearr_13429_13493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (19))){
var inst_13365 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13430_13496 = state_13387__$1;
(statearr_13430_13496[(2)] = inst_13365);

(statearr_13430_13496[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (11))){
var inst_13331 = (state_13387[(9)]);
var inst_13347 = (state_13387[(7)]);
var inst_13347__$1 = cljs.core.seq.call(null,inst_13331);
var state_13387__$1 = (function (){var statearr_13431 = state_13387;
(statearr_13431[(7)] = inst_13347__$1);

return statearr_13431;
})();
if(inst_13347__$1){
var statearr_13432_13497 = state_13387__$1;
(statearr_13432_13497[(1)] = (14));

} else {
var statearr_13433_13498 = state_13387__$1;
(statearr_13433_13498[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (9))){
var inst_13373 = (state_13387[(2)]);
var inst_13374 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13387__$1 = (function (){var statearr_13435 = state_13387;
(statearr_13435[(15)] = inst_13373);

return statearr_13435;
})();
if(cljs.core.truth_(inst_13374)){
var statearr_13437_13502 = state_13387__$1;
(statearr_13437_13502[(1)] = (21));

} else {
var statearr_13439_13503 = state_13387__$1;
(statearr_13439_13503[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (5))){
var inst_13321 = cljs.core.async.close_BANG_.call(null,out);
var state_13387__$1 = state_13387;
var statearr_13440_13505 = state_13387__$1;
(statearr_13440_13505[(2)] = inst_13321);

(statearr_13440_13505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (14))){
var inst_13347 = (state_13387[(7)]);
var inst_13349 = cljs.core.chunked_seq_QMARK_.call(null,inst_13347);
var state_13387__$1 = state_13387;
if(inst_13349){
var statearr_13441_13508 = state_13387__$1;
(statearr_13441_13508[(1)] = (17));

} else {
var statearr_13442_13510 = state_13387__$1;
(statearr_13442_13510[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (16))){
var inst_13369 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13444_13511 = state_13387__$1;
(statearr_13444_13511[(2)] = inst_13369);

(statearr_13444_13511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (10))){
var inst_13332 = (state_13387[(10)]);
var inst_13334 = (state_13387[(12)]);
var inst_13340 = cljs.core._nth.call(null,inst_13332,inst_13334);
var state_13387__$1 = state_13387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13387__$1,(13),out,inst_13340);
} else {
if((state_val_13388 === (18))){
var inst_13347 = (state_13387[(7)]);
var inst_13359 = cljs.core.first.call(null,inst_13347);
var state_13387__$1 = state_13387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13387__$1,(20),out,inst_13359);
} else {
if((state_val_13388 === (8))){
var inst_13334 = (state_13387[(12)]);
var inst_13333 = (state_13387[(11)]);
var inst_13336 = (inst_13334 < inst_13333);
var inst_13337 = inst_13336;
var state_13387__$1 = state_13387;
if(cljs.core.truth_(inst_13337)){
var statearr_13445_13515 = state_13387__$1;
(statearr_13445_13515[(1)] = (10));

} else {
var statearr_13446_13516 = state_13387__$1;
(statearr_13446_13516[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__11700__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11700__auto____0 = (function (){
var statearr_13447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13447[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11700__auto__);

(statearr_13447[(1)] = (1));

return statearr_13447;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11700__auto____1 = (function (state_13387){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_13387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e13448){var ex__11703__auto__ = e13448;
var statearr_13449_13521 = state_13387;
(statearr_13449_13521[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_13387[(4)]))){
var statearr_13450_13522 = state_13387;
(statearr_13450_13522[(1)] = cljs.core.first.call(null,(state_13387[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13525 = state_13387;
state_13387 = G__13525;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11700__auto__ = function(state_13387){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11700__auto____1.call(this,state_13387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11700__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11700__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_13451 = f__11784__auto__.call(null);
(statearr_13451[(6)] = c__11783__auto__);

return statearr_13451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));

return c__11783__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13453 = arguments.length;
switch (G__13453) {
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
var G__13458 = arguments.length;
switch (G__13458) {
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
var G__13464 = arguments.length;
switch (G__13464) {
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
var c__11783__auto___13536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_13494){
var state_val_13495 = (state_13494[(1)]);
if((state_val_13495 === (7))){
var inst_13488 = (state_13494[(2)]);
var state_13494__$1 = state_13494;
var statearr_13499_13537 = state_13494__$1;
(statearr_13499_13537[(2)] = inst_13488);

(statearr_13499_13537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (1))){
var inst_13468 = null;
var state_13494__$1 = (function (){var statearr_13500 = state_13494;
(statearr_13500[(7)] = inst_13468);

return statearr_13500;
})();
var statearr_13501_13538 = state_13494__$1;
(statearr_13501_13538[(2)] = null);

(statearr_13501_13538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (4))){
var inst_13472 = (state_13494[(8)]);
var inst_13472__$1 = (state_13494[(2)]);
var inst_13474 = (inst_13472__$1 == null);
var inst_13475 = cljs.core.not.call(null,inst_13474);
var state_13494__$1 = (function (){var statearr_13504 = state_13494;
(statearr_13504[(8)] = inst_13472__$1);

return statearr_13504;
})();
if(inst_13475){
var statearr_13506_13545 = state_13494__$1;
(statearr_13506_13545[(1)] = (5));

} else {
var statearr_13507_13549 = state_13494__$1;
(statearr_13507_13549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (6))){
var state_13494__$1 = state_13494;
var statearr_13509_13553 = state_13494__$1;
(statearr_13509_13553[(2)] = null);

(statearr_13509_13553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (3))){
var inst_13490 = (state_13494[(2)]);
var inst_13491 = cljs.core.async.close_BANG_.call(null,out);
var state_13494__$1 = (function (){var statearr_13512 = state_13494;
(statearr_13512[(9)] = inst_13490);

return statearr_13512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13494__$1,inst_13491);
} else {
if((state_val_13495 === (2))){
var state_13494__$1 = state_13494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13494__$1,(4),ch);
} else {
if((state_val_13495 === (11))){
var inst_13472 = (state_13494[(8)]);
var inst_13482 = (state_13494[(2)]);
var inst_13468 = inst_13472;
var state_13494__$1 = (function (){var statearr_13513 = state_13494;
(statearr_13513[(10)] = inst_13482);

(statearr_13513[(7)] = inst_13468);

return statearr_13513;
})();
var statearr_13514_13573 = state_13494__$1;
(statearr_13514_13573[(2)] = null);

(statearr_13514_13573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (9))){
var inst_13472 = (state_13494[(8)]);
var state_13494__$1 = state_13494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13494__$1,(11),out,inst_13472);
} else {
if((state_val_13495 === (5))){
var inst_13472 = (state_13494[(8)]);
var inst_13468 = (state_13494[(7)]);
var inst_13477 = cljs.core._EQ_.call(null,inst_13472,inst_13468);
var state_13494__$1 = state_13494;
if(inst_13477){
var statearr_13518_13582 = state_13494__$1;
(statearr_13518_13582[(1)] = (8));

} else {
var statearr_13519_13583 = state_13494__$1;
(statearr_13519_13583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (10))){
var inst_13485 = (state_13494[(2)]);
var state_13494__$1 = state_13494;
var statearr_13520_13584 = state_13494__$1;
(statearr_13520_13584[(2)] = inst_13485);

(statearr_13520_13584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (8))){
var inst_13468 = (state_13494[(7)]);
var tmp13517 = inst_13468;
var inst_13468__$1 = tmp13517;
var state_13494__$1 = (function (){var statearr_13523 = state_13494;
(statearr_13523[(7)] = inst_13468__$1);

return statearr_13523;
})();
var statearr_13524_13587 = state_13494__$1;
(statearr_13524_13587[(2)] = null);

(statearr_13524_13587[(1)] = (2));


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
var cljs$core$async$state_machine__11700__auto__ = null;
var cljs$core$async$state_machine__11700__auto____0 = (function (){
var statearr_13526 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13526[(0)] = cljs$core$async$state_machine__11700__auto__);

(statearr_13526[(1)] = (1));

return statearr_13526;
});
var cljs$core$async$state_machine__11700__auto____1 = (function (state_13494){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_13494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e13528){var ex__11703__auto__ = e13528;
var statearr_13529_13592 = state_13494;
(statearr_13529_13592[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_13494[(4)]))){
var statearr_13530_13593 = state_13494;
(statearr_13530_13593[(1)] = cljs.core.first.call(null,(state_13494[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13595 = state_13494;
state_13494 = G__13595;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$state_machine__11700__auto__ = function(state_13494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11700__auto____1.call(this,state_13494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11700__auto____0;
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11700__auto____1;
return cljs$core$async$state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_13532 = f__11784__auto__.call(null);
(statearr_13532[(6)] = c__11783__auto___13536);

return statearr_13532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__13535 = arguments.length;
switch (G__13535) {
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
var c__11783__auto___13618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_13580){
var state_val_13581 = (state_13580[(1)]);
if((state_val_13581 === (7))){
var inst_13576 = (state_13580[(2)]);
var state_13580__$1 = state_13580;
var statearr_13585_13619 = state_13580__$1;
(statearr_13585_13619[(2)] = inst_13576);

(statearr_13585_13619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13581 === (1))){
var inst_13539 = (new Array(n));
var inst_13540 = inst_13539;
var inst_13541 = (0);
var state_13580__$1 = (function (){var statearr_13586 = state_13580;
(statearr_13586[(7)] = inst_13540);

(statearr_13586[(8)] = inst_13541);

return statearr_13586;
})();
var statearr_13588_13620 = state_13580__$1;
(statearr_13588_13620[(2)] = null);

(statearr_13588_13620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13581 === (4))){
var inst_13544 = (state_13580[(9)]);
var inst_13544__$1 = (state_13580[(2)]);
var inst_13546 = (inst_13544__$1 == null);
var inst_13547 = cljs.core.not.call(null,inst_13546);
var state_13580__$1 = (function (){var statearr_13589 = state_13580;
(statearr_13589[(9)] = inst_13544__$1);

return statearr_13589;
})();
if(inst_13547){
var statearr_13590_13631 = state_13580__$1;
(statearr_13590_13631[(1)] = (5));

} else {
var statearr_13591_13633 = state_13580__$1;
(statearr_13591_13633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13581 === (15))){
var inst_13569 = (state_13580[(2)]);
var state_13580__$1 = state_13580;
var statearr_13594_13643 = state_13580__$1;
(statearr_13594_13643[(2)] = inst_13569);

(statearr_13594_13643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13581 === (13))){
var state_13580__$1 = state_13580;
var statearr_13596_13653 = state_13580__$1;
(statearr_13596_13653[(2)] = null);

(statearr_13596_13653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13581 === (6))){
var inst_13541 = (state_13580[(8)]);
var inst_13565 = (inst_13541 > (0));
var state_13580__$1 = state_13580;
if(cljs.core.truth_(inst_13565)){
var statearr_13597_13669 = state_13580__$1;
(statearr_13597_13669[(1)] = (12));

} else {
var statearr_13598_13670 = state_13580__$1;
(statearr_13598_13670[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13581 === (3))){
var inst_13578 = (state_13580[(2)]);
var state_13580__$1 = state_13580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13580__$1,inst_13578);
} else {
if((state_val_13581 === (12))){
var inst_13540 = (state_13580[(7)]);
var inst_13567 = cljs.core.vec.call(null,inst_13540);
var state_13580__$1 = state_13580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13580__$1,(15),out,inst_13567);
} else {
if((state_val_13581 === (2))){
var state_13580__$1 = state_13580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13580__$1,(4),ch);
} else {
if((state_val_13581 === (11))){
var inst_13559 = (state_13580[(2)]);
var inst_13560 = (new Array(n));
var inst_13540 = inst_13560;
var inst_13541 = (0);
var state_13580__$1 = (function (){var statearr_13599 = state_13580;
(statearr_13599[(10)] = inst_13559);

(statearr_13599[(7)] = inst_13540);

(statearr_13599[(8)] = inst_13541);

return statearr_13599;
})();
var statearr_13600_13674 = state_13580__$1;
(statearr_13600_13674[(2)] = null);

(statearr_13600_13674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13581 === (9))){
var inst_13540 = (state_13580[(7)]);
var inst_13557 = cljs.core.vec.call(null,inst_13540);
var state_13580__$1 = state_13580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13580__$1,(11),out,inst_13557);
} else {
if((state_val_13581 === (5))){
var inst_13540 = (state_13580[(7)]);
var inst_13541 = (state_13580[(8)]);
var inst_13544 = (state_13580[(9)]);
var inst_13551 = (state_13580[(11)]);
var inst_13550 = (inst_13540[inst_13541] = inst_13544);
var inst_13551__$1 = (inst_13541 + (1));
var inst_13552 = (inst_13551__$1 < n);
var state_13580__$1 = (function (){var statearr_13601 = state_13580;
(statearr_13601[(12)] = inst_13550);

(statearr_13601[(11)] = inst_13551__$1);

return statearr_13601;
})();
if(cljs.core.truth_(inst_13552)){
var statearr_13602_13678 = state_13580__$1;
(statearr_13602_13678[(1)] = (8));

} else {
var statearr_13603_13680 = state_13580__$1;
(statearr_13603_13680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13581 === (14))){
var inst_13572 = (state_13580[(2)]);
var inst_13574 = cljs.core.async.close_BANG_.call(null,out);
var state_13580__$1 = (function (){var statearr_13605 = state_13580;
(statearr_13605[(13)] = inst_13572);

return statearr_13605;
})();
var statearr_13606_13682 = state_13580__$1;
(statearr_13606_13682[(2)] = inst_13574);

(statearr_13606_13682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13581 === (10))){
var inst_13563 = (state_13580[(2)]);
var state_13580__$1 = state_13580;
var statearr_13607_13683 = state_13580__$1;
(statearr_13607_13683[(2)] = inst_13563);

(statearr_13607_13683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13581 === (8))){
var inst_13540 = (state_13580[(7)]);
var inst_13551 = (state_13580[(11)]);
var tmp13604 = inst_13540;
var inst_13540__$1 = tmp13604;
var inst_13541 = inst_13551;
var state_13580__$1 = (function (){var statearr_13608 = state_13580;
(statearr_13608[(7)] = inst_13540__$1);

(statearr_13608[(8)] = inst_13541);

return statearr_13608;
})();
var statearr_13609_13684 = state_13580__$1;
(statearr_13609_13684[(2)] = null);

(statearr_13609_13684[(1)] = (2));


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
var cljs$core$async$state_machine__11700__auto__ = null;
var cljs$core$async$state_machine__11700__auto____0 = (function (){
var statearr_13610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13610[(0)] = cljs$core$async$state_machine__11700__auto__);

(statearr_13610[(1)] = (1));

return statearr_13610;
});
var cljs$core$async$state_machine__11700__auto____1 = (function (state_13580){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_13580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e13611){var ex__11703__auto__ = e13611;
var statearr_13612_13687 = state_13580;
(statearr_13612_13687[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_13580[(4)]))){
var statearr_13613_13689 = state_13580;
(statearr_13613_13689[(1)] = cljs.core.first.call(null,(state_13580[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13691 = state_13580;
state_13580 = G__13691;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$state_machine__11700__auto__ = function(state_13580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11700__auto____1.call(this,state_13580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11700__auto____0;
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11700__auto____1;
return cljs$core$async$state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_13614 = f__11784__auto__.call(null);
(statearr_13614[(6)] = c__11783__auto___13618);

return statearr_13614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13617 = arguments.length;
switch (G__13617) {
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
var c__11783__auto___13713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11699__auto__ = (function (state_13671){
var state_val_13672 = (state_13671[(1)]);
if((state_val_13672 === (7))){
var inst_13665 = (state_13671[(2)]);
var state_13671__$1 = state_13671;
var statearr_13673_13714 = state_13671__$1;
(statearr_13673_13714[(2)] = inst_13665);

(statearr_13673_13714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (1))){
var inst_13621 = [];
var inst_13622 = inst_13621;
var inst_13623 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13671__$1 = (function (){var statearr_13675 = state_13671;
(statearr_13675[(7)] = inst_13622);

(statearr_13675[(8)] = inst_13623);

return statearr_13675;
})();
var statearr_13676_13715 = state_13671__$1;
(statearr_13676_13715[(2)] = null);

(statearr_13676_13715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (4))){
var inst_13626 = (state_13671[(9)]);
var inst_13626__$1 = (state_13671[(2)]);
var inst_13627 = (inst_13626__$1 == null);
var inst_13628 = cljs.core.not.call(null,inst_13627);
var state_13671__$1 = (function (){var statearr_13677 = state_13671;
(statearr_13677[(9)] = inst_13626__$1);

return statearr_13677;
})();
if(inst_13628){
var statearr_13679_13716 = state_13671__$1;
(statearr_13679_13716[(1)] = (5));

} else {
var statearr_13681_13717 = state_13671__$1;
(statearr_13681_13717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (15))){
var inst_13622 = (state_13671[(7)]);
var inst_13657 = cljs.core.vec.call(null,inst_13622);
var state_13671__$1 = state_13671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13671__$1,(18),out,inst_13657);
} else {
if((state_val_13672 === (13))){
var inst_13651 = (state_13671[(2)]);
var state_13671__$1 = state_13671;
var statearr_13685_13718 = state_13671__$1;
(statearr_13685_13718[(2)] = inst_13651);

(statearr_13685_13718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (6))){
var inst_13622 = (state_13671[(7)]);
var inst_13654 = inst_13622.length;
var inst_13655 = (inst_13654 > (0));
var state_13671__$1 = state_13671;
if(cljs.core.truth_(inst_13655)){
var statearr_13686_13719 = state_13671__$1;
(statearr_13686_13719[(1)] = (15));

} else {
var statearr_13688_13720 = state_13671__$1;
(statearr_13688_13720[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (17))){
var inst_13662 = (state_13671[(2)]);
var inst_13663 = cljs.core.async.close_BANG_.call(null,out);
var state_13671__$1 = (function (){var statearr_13690 = state_13671;
(statearr_13690[(10)] = inst_13662);

return statearr_13690;
})();
var statearr_13692_13721 = state_13671__$1;
(statearr_13692_13721[(2)] = inst_13663);

(statearr_13692_13721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (3))){
var inst_13667 = (state_13671[(2)]);
var state_13671__$1 = state_13671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13671__$1,inst_13667);
} else {
if((state_val_13672 === (12))){
var inst_13622 = (state_13671[(7)]);
var inst_13644 = cljs.core.vec.call(null,inst_13622);
var state_13671__$1 = state_13671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13671__$1,(14),out,inst_13644);
} else {
if((state_val_13672 === (2))){
var state_13671__$1 = state_13671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13671__$1,(4),ch);
} else {
if((state_val_13672 === (11))){
var inst_13622 = (state_13671[(7)]);
var inst_13626 = (state_13671[(9)]);
var inst_13630 = (state_13671[(11)]);
var inst_13640 = inst_13622.push(inst_13626);
var tmp13693 = inst_13622;
var inst_13622__$1 = tmp13693;
var inst_13623 = inst_13630;
var state_13671__$1 = (function (){var statearr_13694 = state_13671;
(statearr_13694[(12)] = inst_13640);

(statearr_13694[(7)] = inst_13622__$1);

(statearr_13694[(8)] = inst_13623);

return statearr_13694;
})();
var statearr_13695_13724 = state_13671__$1;
(statearr_13695_13724[(2)] = null);

(statearr_13695_13724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (9))){
var inst_13623 = (state_13671[(8)]);
var inst_13636 = cljs.core.keyword_identical_QMARK_.call(null,inst_13623,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_13671__$1 = state_13671;
var statearr_13696_13725 = state_13671__$1;
(statearr_13696_13725[(2)] = inst_13636);

(statearr_13696_13725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (5))){
var inst_13626 = (state_13671[(9)]);
var inst_13630 = (state_13671[(11)]);
var inst_13623 = (state_13671[(8)]);
var inst_13632 = (state_13671[(13)]);
var inst_13630__$1 = f.call(null,inst_13626);
var inst_13632__$1 = cljs.core._EQ_.call(null,inst_13630__$1,inst_13623);
var state_13671__$1 = (function (){var statearr_13697 = state_13671;
(statearr_13697[(11)] = inst_13630__$1);

(statearr_13697[(13)] = inst_13632__$1);

return statearr_13697;
})();
if(inst_13632__$1){
var statearr_13698_13728 = state_13671__$1;
(statearr_13698_13728[(1)] = (8));

} else {
var statearr_13699_13729 = state_13671__$1;
(statearr_13699_13729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (14))){
var inst_13626 = (state_13671[(9)]);
var inst_13630 = (state_13671[(11)]);
var inst_13646 = (state_13671[(2)]);
var inst_13647 = [];
var inst_13648 = inst_13647.push(inst_13626);
var inst_13622 = inst_13647;
var inst_13623 = inst_13630;
var state_13671__$1 = (function (){var statearr_13700 = state_13671;
(statearr_13700[(14)] = inst_13646);

(statearr_13700[(15)] = inst_13648);

(statearr_13700[(7)] = inst_13622);

(statearr_13700[(8)] = inst_13623);

return statearr_13700;
})();
var statearr_13701_13730 = state_13671__$1;
(statearr_13701_13730[(2)] = null);

(statearr_13701_13730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (16))){
var state_13671__$1 = state_13671;
var statearr_13702_13731 = state_13671__$1;
(statearr_13702_13731[(2)] = null);

(statearr_13702_13731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (10))){
var inst_13638 = (state_13671[(2)]);
var state_13671__$1 = state_13671;
if(cljs.core.truth_(inst_13638)){
var statearr_13703_13732 = state_13671__$1;
(statearr_13703_13732[(1)] = (11));

} else {
var statearr_13704_13733 = state_13671__$1;
(statearr_13704_13733[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (18))){
var inst_13659 = (state_13671[(2)]);
var state_13671__$1 = state_13671;
var statearr_13705_13734 = state_13671__$1;
(statearr_13705_13734[(2)] = inst_13659);

(statearr_13705_13734[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13672 === (8))){
var inst_13632 = (state_13671[(13)]);
var state_13671__$1 = state_13671;
var statearr_13706_13735 = state_13671__$1;
(statearr_13706_13735[(2)] = inst_13632);

(statearr_13706_13735[(1)] = (10));


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
var cljs$core$async$state_machine__11700__auto__ = null;
var cljs$core$async$state_machine__11700__auto____0 = (function (){
var statearr_13707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13707[(0)] = cljs$core$async$state_machine__11700__auto__);

(statearr_13707[(1)] = (1));

return statearr_13707;
});
var cljs$core$async$state_machine__11700__auto____1 = (function (state_13671){
while(true){
var ret_value__11701__auto__ = (function (){try{while(true){
var result__11702__auto__ = switch__11699__auto__.call(null,state_13671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11702__auto__;
}
break;
}
}catch (e13708){var ex__11703__auto__ = e13708;
var statearr_13709_13736 = state_13671;
(statearr_13709_13736[(2)] = ex__11703__auto__);


if(cljs.core.seq.call(null,(state_13671[(4)]))){
var statearr_13710_13737 = state_13671;
(statearr_13710_13737[(1)] = cljs.core.first.call(null,(state_13671[(4)])));

} else {
throw ex__11703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13740 = state_13671;
state_13671 = G__13740;
continue;
} else {
return ret_value__11701__auto__;
}
break;
}
});
cljs$core$async$state_machine__11700__auto__ = function(state_13671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11700__auto____1.call(this,state_13671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11700__auto____0;
cljs$core$async$state_machine__11700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11700__auto____1;
return cljs$core$async$state_machine__11700__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_13711 = f__11784__auto__.call(null);
(statearr_13711[(6)] = c__11783__auto___13713);

return statearr_13711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
