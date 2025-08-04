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
var G__11853 = arguments.length;
switch (G__11853) {
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
var val_11859 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11859);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_11859);
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
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_11906){
var state_val_11907 = (state_11906[(1)]);
if((state_val_11907 === (7))){
var inst_11902 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11908_11934 = state_11906__$1;
(statearr_11908_11934[(2)] = inst_11902);

(statearr_11908_11934[(1)] = (3));


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
var statearr_11911_11942 = state_11906__$1;
(statearr_11911_11942[(1)] = (5));

} else {
var statearr_11912_11943 = state_11906__$1;
(statearr_11912_11943[(1)] = (6));

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
var statearr_11914_11946 = state_11906__$1;
(statearr_11914_11946[(2)] = null);

(statearr_11914_11946[(1)] = (2));


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
var statearr_11915_11950 = state_11906__$1;
(statearr_11915_11950[(1)] = (12));

} else {
var statearr_11916_11952 = state_11906__$1;
(statearr_11916_11952[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (9))){
var state_11906__$1 = state_11906;
var statearr_11917_11953 = state_11906__$1;
(statearr_11917_11953[(2)] = null);

(statearr_11917_11953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (5))){
var state_11906__$1 = state_11906;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11918_11954 = state_11906__$1;
(statearr_11918_11954[(1)] = (8));

} else {
var statearr_11919_11955 = state_11906__$1;
(statearr_11919_11955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (14))){
var inst_11900 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11920_11957 = state_11906__$1;
(statearr_11920_11957[(2)] = inst_11900);

(statearr_11920_11957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (10))){
var inst_11892 = (state_11906[(2)]);
var state_11906__$1 = state_11906;
var statearr_11921_11962 = state_11906__$1;
(statearr_11921_11962[(2)] = inst_11892);

(statearr_11921_11962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11907 === (8))){
var inst_11889 = cljs.core.async.close_BANG_.call(null,to);
var state_11906__$1 = state_11906;
var statearr_11922_11963 = state_11906__$1;
(statearr_11922_11963[(2)] = inst_11889);

(statearr_11922_11963[(1)] = (10));


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
var cljs$core$async$state_machine__11581__auto__ = null;
var cljs$core$async$state_machine__11581__auto____0 = (function (){
var statearr_11923 = [null,null,null,null,null,null,null,null];
(statearr_11923[(0)] = cljs$core$async$state_machine__11581__auto__);

(statearr_11923[(1)] = (1));

return statearr_11923;
});
var cljs$core$async$state_machine__11581__auto____1 = (function (state_11906){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_11906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e11924){var ex__11584__auto__ = e11924;
var statearr_11925_11966 = state_11906;
(statearr_11925_11966[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_11906[(4)]))){
var statearr_11926_11970 = state_11906;
(statearr_11926_11970[(1)] = cljs.core.first.call(null,(state_11906[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11981 = state_11906;
state_11906 = G__11981;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$state_machine__11581__auto__ = function(state_11906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11581__auto____1.call(this,state_11906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11581__auto____0;
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11581__auto____1;
return cljs$core$async$state_machine__11581__auto__;
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
var vec__11931 = p__11930;
var v = cljs.core.nth.call(null,vec__11931,(0),null);
var p = cljs.core.nth.call(null,vec__11931,(1),null);
var job = vec__11931;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11783__auto___12126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_11940){
var state_val_11941 = (state_11940[(1)]);
if((state_val_11941 === (1))){
var state_11940__$1 = state_11940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11940__$1,(2),res,v);
} else {
if((state_val_11941 === (2))){
var inst_11937 = (state_11940[(2)]);
var inst_11938 = cljs.core.async.close_BANG_.call(null,res);
var state_11940__$1 = (function (){var statearr_11945 = state_11940;
(statearr_11945[(7)] = inst_11937);

return statearr_11945;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11940__$1,inst_11938);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____0 = (function (){
var statearr_11947 = [null,null,null,null,null,null,null,null];
(statearr_11947[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__);

(statearr_11947[(1)] = (1));

return statearr_11947;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____1 = (function (state_11940){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_11940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e11948){var ex__11584__auto__ = e11948;
var statearr_11949_12129 = state_11940;
(statearr_11949_12129[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_11940[(4)]))){
var statearr_11951_12130 = state_11940;
(statearr_11951_12130[(1)] = cljs.core.first.call(null,(state_11940[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12131 = state_11940;
state_11940 = G__12131;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__ = function(state_11940){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____1.call(this,state_11940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_11956 = f__11784__auto__.call(null);
(statearr_11956[(6)] = c__11783__auto___12126);

return statearr_11956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__11958){
var vec__11959 = p__11958;
var v = cljs.core.nth.call(null,vec__11959,(0),null);
var p = cljs.core.nth.call(null,vec__11959,(1),null);
var job = vec__11959;
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
var G__11964_12135 = type;
var G__11964_12136__$1 = (((G__11964_12135 instanceof cljs.core.Keyword))?G__11964_12135.fqn:null);
switch (G__11964_12136__$1) {
case "compute":
var c__11783__auto___12139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12133,c__11783__auto___12139,G__11964_12135,G__11964_12136__$1,n__5616__auto___12132,jobs,results,process__$1,async){
return (function (){
var f__11784__auto__ = (function (){var switch__11580__auto__ = ((function (__12133,c__11783__auto___12139,G__11964_12135,G__11964_12136__$1,n__5616__auto___12132,jobs,results,process__$1,async){
return (function (state_11979){
var state_val_11980 = (state_11979[(1)]);
if((state_val_11980 === (1))){
var state_11979__$1 = state_11979;
var statearr_11982_12140 = state_11979__$1;
(statearr_11982_12140[(2)] = null);

(statearr_11982_12140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11980 === (2))){
var state_11979__$1 = state_11979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11979__$1,(4),jobs);
} else {
if((state_val_11980 === (3))){
var inst_11977 = (state_11979[(2)]);
var state_11979__$1 = state_11979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11979__$1,inst_11977);
} else {
if((state_val_11980 === (4))){
var inst_11968 = (state_11979[(2)]);
var inst_11969 = process__$1.call(null,inst_11968);
var state_11979__$1 = state_11979;
if(cljs.core.truth_(inst_11969)){
var statearr_11983_12147 = state_11979__$1;
(statearr_11983_12147[(1)] = (5));

} else {
var statearr_11984_12150 = state_11979__$1;
(statearr_11984_12150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11980 === (5))){
var state_11979__$1 = state_11979;
var statearr_11985_12168 = state_11979__$1;
(statearr_11985_12168[(2)] = null);

(statearr_11985_12168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11980 === (6))){
var state_11979__$1 = state_11979;
var statearr_11986_12171 = state_11979__$1;
(statearr_11986_12171[(2)] = null);

(statearr_11986_12171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11980 === (7))){
var inst_11975 = (state_11979[(2)]);
var state_11979__$1 = state_11979;
var statearr_11987_12172 = state_11979__$1;
(statearr_11987_12172[(2)] = inst_11975);

(statearr_11987_12172[(1)] = (3));


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
});})(__12133,c__11783__auto___12139,G__11964_12135,G__11964_12136__$1,n__5616__auto___12132,jobs,results,process__$1,async))
;
return ((function (__12133,switch__11580__auto__,c__11783__auto___12139,G__11964_12135,G__11964_12136__$1,n__5616__auto___12132,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____0 = (function (){
var statearr_11988 = [null,null,null,null,null,null,null];
(statearr_11988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__);

(statearr_11988[(1)] = (1));

return statearr_11988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____1 = (function (state_11979){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_11979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e11989){var ex__11584__auto__ = e11989;
var statearr_11990_12176 = state_11979;
(statearr_11990_12176[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_11979[(4)]))){
var statearr_11991_12178 = state_11979;
(statearr_11991_12178[(1)] = cljs.core.first.call(null,(state_11979[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12180 = state_11979;
state_11979 = G__12180;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__ = function(state_11979){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____1.call(this,state_11979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__;
})()
;})(__12133,switch__11580__auto__,c__11783__auto___12139,G__11964_12135,G__11964_12136__$1,n__5616__auto___12132,jobs,results,process__$1,async))
})();
var state__11785__auto__ = (function (){var statearr_11992 = f__11784__auto__.call(null);
(statearr_11992[(6)] = c__11783__auto___12139);

return statearr_11992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
});})(__12133,c__11783__auto___12139,G__11964_12135,G__11964_12136__$1,n__5616__auto___12132,jobs,results,process__$1,async))
);


break;
case "async":
var c__11783__auto___12183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12133,c__11783__auto___12183,G__11964_12135,G__11964_12136__$1,n__5616__auto___12132,jobs,results,process__$1,async){
return (function (){
var f__11784__auto__ = (function (){var switch__11580__auto__ = ((function (__12133,c__11783__auto___12183,G__11964_12135,G__11964_12136__$1,n__5616__auto___12132,jobs,results,process__$1,async){
return (function (state_12005){
var state_val_12006 = (state_12005[(1)]);
if((state_val_12006 === (1))){
var state_12005__$1 = state_12005;
var statearr_12007_12186 = state_12005__$1;
(statearr_12007_12186[(2)] = null);

(statearr_12007_12186[(1)] = (2));


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
var statearr_12008_12188 = state_12005__$1;
(statearr_12008_12188[(1)] = (5));

} else {
var statearr_12009_12189 = state_12005__$1;
(statearr_12009_12189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12006 === (5))){
var state_12005__$1 = state_12005;
var statearr_12010_12192 = state_12005__$1;
(statearr_12010_12192[(2)] = null);

(statearr_12010_12192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12006 === (6))){
var state_12005__$1 = state_12005;
var statearr_12011_12193 = state_12005__$1;
(statearr_12011_12193[(2)] = null);

(statearr_12011_12193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12006 === (7))){
var inst_12001 = (state_12005[(2)]);
var state_12005__$1 = state_12005;
var statearr_12012_12196 = state_12005__$1;
(statearr_12012_12196[(2)] = inst_12001);

(statearr_12012_12196[(1)] = (3));


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
});})(__12133,c__11783__auto___12183,G__11964_12135,G__11964_12136__$1,n__5616__auto___12132,jobs,results,process__$1,async))
;
return ((function (__12133,switch__11580__auto__,c__11783__auto___12183,G__11964_12135,G__11964_12136__$1,n__5616__auto___12132,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____0 = (function (){
var statearr_12013 = [null,null,null,null,null,null,null];
(statearr_12013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__);

(statearr_12013[(1)] = (1));

return statearr_12013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____1 = (function (state_12005){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_12005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e12014){var ex__11584__auto__ = e12014;
var statearr_12015_12200 = state_12005;
(statearr_12015_12200[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_12005[(4)]))){
var statearr_12016_12202 = state_12005;
(statearr_12016_12202[(1)] = cljs.core.first.call(null,(state_12005[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12205 = state_12005;
state_12005 = G__12205;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__ = function(state_12005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____1.call(this,state_12005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__;
})()
;})(__12133,switch__11580__auto__,c__11783__auto___12183,G__11964_12135,G__11964_12136__$1,n__5616__auto___12132,jobs,results,process__$1,async))
})();
var state__11785__auto__ = (function (){var statearr_12017 = f__11784__auto__.call(null);
(statearr_12017[(6)] = c__11783__auto___12183);

return statearr_12017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
});})(__12133,c__11783__auto___12183,G__11964_12135,G__11964_12136__$1,n__5616__auto___12132,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11964_12136__$1)].join('')));

}

var G__12206 = (__12133 + (1));
__12133 = G__12206;
continue;
} else {
}
break;
}

var c__11783__auto___12207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_12039){
var state_val_12040 = (state_12039[(1)]);
if((state_val_12040 === (7))){
var inst_12035 = (state_12039[(2)]);
var state_12039__$1 = state_12039;
var statearr_12041_12209 = state_12039__$1;
(statearr_12041_12209[(2)] = inst_12035);

(statearr_12041_12209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12040 === (1))){
var state_12039__$1 = state_12039;
var statearr_12042_12210 = state_12039__$1;
(statearr_12042_12210[(2)] = null);

(statearr_12042_12210[(1)] = (2));


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
var statearr_12044_12211 = state_12039__$1;
(statearr_12044_12211[(1)] = (5));

} else {
var statearr_12045_12212 = state_12039__$1;
(statearr_12045_12212[(1)] = (6));

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
var statearr_12048_12234 = state_12039__$1;
(statearr_12048_12234[(2)] = null);

(statearr_12048_12234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12040 === (5))){
var inst_12023 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12039__$1 = state_12039;
var statearr_12049_12237 = state_12039__$1;
(statearr_12049_12237[(2)] = inst_12023);

(statearr_12049_12237[(1)] = (7));


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
var cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____0 = (function (){
var statearr_12051 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__);

(statearr_12051[(1)] = (1));

return statearr_12051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____1 = (function (state_12039){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_12039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e12052){var ex__11584__auto__ = e12052;
var statearr_12053_12240 = state_12039;
(statearr_12053_12240[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_12039[(4)]))){
var statearr_12054_12242 = state_12039;
(statearr_12054_12242[(1)] = cljs.core.first.call(null,(state_12039[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12244 = state_12039;
state_12039 = G__12244;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__ = function(state_12039){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____1.call(this,state_12039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_12055 = f__11784__auto__.call(null);
(statearr_12055[(6)] = c__11783__auto___12207);

return statearr_12055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));


var c__11783__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_12093){
var state_val_12094 = (state_12093[(1)]);
if((state_val_12094 === (7))){
var inst_12089 = (state_12093[(2)]);
var state_12093__$1 = state_12093;
var statearr_12095_12248 = state_12093__$1;
(statearr_12095_12248[(2)] = inst_12089);

(statearr_12095_12248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (20))){
var state_12093__$1 = state_12093;
var statearr_12096_12251 = state_12093__$1;
(statearr_12096_12251[(2)] = null);

(statearr_12096_12251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (1))){
var state_12093__$1 = state_12093;
var statearr_12097_12252 = state_12093__$1;
(statearr_12097_12252[(2)] = null);

(statearr_12097_12252[(1)] = (2));


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
var statearr_12099_12255 = state_12093__$1;
(statearr_12099_12255[(1)] = (5));

} else {
var statearr_12100_12256 = state_12093__$1;
(statearr_12100_12256[(1)] = (6));

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
var statearr_12101_12259 = state_12093__$1;
(statearr_12101_12259[(2)] = inst_12084);

(statearr_12101_12259[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (13))){
var inst_12086 = (state_12093[(2)]);
var state_12093__$1 = (function (){var statearr_12102 = state_12093;
(statearr_12102[(9)] = inst_12086);

return statearr_12102;
})();
var statearr_12103_12261 = state_12093__$1;
(statearr_12103_12261[(2)] = null);

(statearr_12103_12261[(1)] = (2));


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
var statearr_12104_12265 = state_12093__$1;
(statearr_12104_12265[(1)] = (19));

} else {
var statearr_12105_12266 = state_12093__$1;
(statearr_12105_12266[(1)] = (20));

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
var statearr_12106_12269 = state_12093__$1;
(statearr_12106_12269[(2)] = null);

(statearr_12106_12269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (11))){
var inst_12068 = (state_12093[(2)]);
var state_12093__$1 = (function (){var statearr_12107 = state_12093;
(statearr_12107[(10)] = inst_12068);

return statearr_12107;
})();
var statearr_12108_12270 = state_12093__$1;
(statearr_12108_12270[(2)] = null);

(statearr_12108_12270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (9))){
var state_12093__$1 = state_12093;
var statearr_12109_12271 = state_12093__$1;
(statearr_12109_12271[(2)] = null);

(statearr_12109_12271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (5))){
var state_12093__$1 = state_12093;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12110_12272 = state_12093__$1;
(statearr_12110_12272[(1)] = (8));

} else {
var statearr_12111_12273 = state_12093__$1;
(statearr_12111_12273[(1)] = (9));

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
var statearr_12113_12281 = state_12093__$1;
(statearr_12113_12281[(1)] = (15));

} else {
var statearr_12114_12282 = state_12093__$1;
(statearr_12114_12282[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (16))){
var inst_12073 = (state_12093[(11)]);
var state_12093__$1 = state_12093;
var statearr_12115_12283 = state_12093__$1;
(statearr_12115_12283[(2)] = inst_12073);

(statearr_12115_12283[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (10))){
var inst_12065 = (state_12093[(2)]);
var state_12093__$1 = state_12093;
var statearr_12116_12285 = state_12093__$1;
(statearr_12116_12285[(2)] = inst_12065);

(statearr_12116_12285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (18))){
var inst_12076 = (state_12093[(2)]);
var state_12093__$1 = state_12093;
var statearr_12117_12287 = state_12093__$1;
(statearr_12117_12287[(2)] = inst_12076);

(statearr_12117_12287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12094 === (8))){
var inst_12062 = cljs.core.async.close_BANG_.call(null,to);
var state_12093__$1 = state_12093;
var statearr_12118_12290 = state_12093__$1;
(statearr_12118_12290[(2)] = inst_12062);

(statearr_12118_12290[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____0 = (function (){
var statearr_12119 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12119[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__);

(statearr_12119[(1)] = (1));

return statearr_12119;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____1 = (function (state_12093){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_12093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e12120){var ex__11584__auto__ = e12120;
var statearr_12121_12292 = state_12093;
(statearr_12121_12292[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_12093[(4)]))){
var statearr_12122_12293 = state_12093;
(statearr_12122_12293[(1)] = cljs.core.first.call(null,(state_12093[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12295 = state_12093;
state_12093 = G__12295;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__ = function(state_12093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____1.call(this,state_12093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11581__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11581__auto__;
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
var G__12137 = arguments.length;
switch (G__12137) {
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
var c__11783__auto___12332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_12169){
var state_val_12170 = (state_12169[(1)]);
if((state_val_12170 === (7))){
var inst_12164 = (state_12169[(2)]);
var state_12169__$1 = state_12169;
var statearr_12173_12334 = state_12169__$1;
(statearr_12173_12334[(2)] = inst_12164);

(statearr_12173_12334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12170 === (1))){
var state_12169__$1 = state_12169;
var statearr_12174_12337 = state_12169__$1;
(statearr_12174_12337[(2)] = null);

(statearr_12174_12337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12170 === (4))){
var inst_12143 = (state_12169[(7)]);
var inst_12143__$1 = (state_12169[(2)]);
var inst_12144 = (inst_12143__$1 == null);
var state_12169__$1 = (function (){var statearr_12175 = state_12169;
(statearr_12175[(7)] = inst_12143__$1);

return statearr_12175;
})();
if(cljs.core.truth_(inst_12144)){
var statearr_12177_12339 = state_12169__$1;
(statearr_12177_12339[(1)] = (5));

} else {
var statearr_12179_12341 = state_12169__$1;
(statearr_12179_12341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12170 === (13))){
var state_12169__$1 = state_12169;
var statearr_12181_12343 = state_12169__$1;
(statearr_12181_12343[(2)] = null);

(statearr_12181_12343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12170 === (6))){
var inst_12143 = (state_12169[(7)]);
var inst_12151 = p.call(null,inst_12143);
var state_12169__$1 = state_12169;
if(cljs.core.truth_(inst_12151)){
var statearr_12182_12345 = state_12169__$1;
(statearr_12182_12345[(1)] = (9));

} else {
var statearr_12184_12347 = state_12169__$1;
(statearr_12184_12347[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12170 === (3))){
var inst_12166 = (state_12169[(2)]);
var state_12169__$1 = state_12169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12169__$1,inst_12166);
} else {
if((state_val_12170 === (12))){
var state_12169__$1 = state_12169;
var statearr_12185_12350 = state_12169__$1;
(statearr_12185_12350[(2)] = null);

(statearr_12185_12350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12170 === (2))){
var state_12169__$1 = state_12169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12169__$1,(4),ch);
} else {
if((state_val_12170 === (11))){
var inst_12143 = (state_12169[(7)]);
var inst_12155 = (state_12169[(2)]);
var state_12169__$1 = state_12169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12169__$1,(8),inst_12155,inst_12143);
} else {
if((state_val_12170 === (9))){
var state_12169__$1 = state_12169;
var statearr_12187_12352 = state_12169__$1;
(statearr_12187_12352[(2)] = tc);

(statearr_12187_12352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12170 === (5))){
var inst_12146 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12148 = cljs.core.async.close_BANG_.call(null,fc);
var state_12169__$1 = (function (){var statearr_12190 = state_12169;
(statearr_12190[(8)] = inst_12146);

return statearr_12190;
})();
var statearr_12191_12356 = state_12169__$1;
(statearr_12191_12356[(2)] = inst_12148);

(statearr_12191_12356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12170 === (14))){
var inst_12162 = (state_12169[(2)]);
var state_12169__$1 = state_12169;
var statearr_12194_12357 = state_12169__$1;
(statearr_12194_12357[(2)] = inst_12162);

(statearr_12194_12357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12170 === (10))){
var state_12169__$1 = state_12169;
var statearr_12195_12358 = state_12169__$1;
(statearr_12195_12358[(2)] = fc);

(statearr_12195_12358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12170 === (8))){
var inst_12157 = (state_12169[(2)]);
var state_12169__$1 = state_12169;
if(cljs.core.truth_(inst_12157)){
var statearr_12197_12360 = state_12169__$1;
(statearr_12197_12360[(1)] = (12));

} else {
var statearr_12198_12361 = state_12169__$1;
(statearr_12198_12361[(1)] = (13));

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
var cljs$core$async$state_machine__11581__auto__ = null;
var cljs$core$async$state_machine__11581__auto____0 = (function (){
var statearr_12199 = [null,null,null,null,null,null,null,null,null];
(statearr_12199[(0)] = cljs$core$async$state_machine__11581__auto__);

(statearr_12199[(1)] = (1));

return statearr_12199;
});
var cljs$core$async$state_machine__11581__auto____1 = (function (state_12169){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_12169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e12201){var ex__11584__auto__ = e12201;
var statearr_12203_12362 = state_12169;
(statearr_12203_12362[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_12169[(4)]))){
var statearr_12204_12364 = state_12169;
(statearr_12204_12364[(1)] = cljs.core.first.call(null,(state_12169[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12366 = state_12169;
state_12169 = G__12366;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$state_machine__11581__auto__ = function(state_12169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11581__auto____1.call(this,state_12169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11581__auto____0;
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11581__auto____1;
return cljs$core$async$state_machine__11581__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_12208 = f__11784__auto__.call(null);
(statearr_12208[(6)] = c__11783__auto___12332);

return statearr_12208;
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
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_12235){
var state_val_12236 = (state_12235[(1)]);
if((state_val_12236 === (7))){
var inst_12230 = (state_12235[(2)]);
var state_12235__$1 = state_12235;
var statearr_12238_12367 = state_12235__$1;
(statearr_12238_12367[(2)] = inst_12230);

(statearr_12238_12367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12236 === (1))){
var inst_12213 = init;
var inst_12214 = inst_12213;
var state_12235__$1 = (function (){var statearr_12239 = state_12235;
(statearr_12239[(7)] = inst_12214);

return statearr_12239;
})();
var statearr_12241_12368 = state_12235__$1;
(statearr_12241_12368[(2)] = null);

(statearr_12241_12368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12236 === (4))){
var inst_12217 = (state_12235[(8)]);
var inst_12217__$1 = (state_12235[(2)]);
var inst_12218 = (inst_12217__$1 == null);
var state_12235__$1 = (function (){var statearr_12243 = state_12235;
(statearr_12243[(8)] = inst_12217__$1);

return statearr_12243;
})();
if(cljs.core.truth_(inst_12218)){
var statearr_12245_12369 = state_12235__$1;
(statearr_12245_12369[(1)] = (5));

} else {
var statearr_12246_12370 = state_12235__$1;
(statearr_12246_12370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12236 === (6))){
var inst_12214 = (state_12235[(7)]);
var inst_12217 = (state_12235[(8)]);
var inst_12221 = (state_12235[(9)]);
var inst_12221__$1 = f.call(null,inst_12214,inst_12217);
var inst_12222 = cljs.core.reduced_QMARK_.call(null,inst_12221__$1);
var state_12235__$1 = (function (){var statearr_12247 = state_12235;
(statearr_12247[(9)] = inst_12221__$1);

return statearr_12247;
})();
if(inst_12222){
var statearr_12249_12371 = state_12235__$1;
(statearr_12249_12371[(1)] = (8));

} else {
var statearr_12250_12372 = state_12235__$1;
(statearr_12250_12372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12236 === (3))){
var inst_12232 = (state_12235[(2)]);
var state_12235__$1 = state_12235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12235__$1,inst_12232);
} else {
if((state_val_12236 === (2))){
var state_12235__$1 = state_12235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12235__$1,(4),ch);
} else {
if((state_val_12236 === (9))){
var inst_12221 = (state_12235[(9)]);
var inst_12214 = inst_12221;
var state_12235__$1 = (function (){var statearr_12253 = state_12235;
(statearr_12253[(7)] = inst_12214);

return statearr_12253;
})();
var statearr_12254_12373 = state_12235__$1;
(statearr_12254_12373[(2)] = null);

(statearr_12254_12373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12236 === (5))){
var inst_12214 = (state_12235[(7)]);
var state_12235__$1 = state_12235;
var statearr_12257_12374 = state_12235__$1;
(statearr_12257_12374[(2)] = inst_12214);

(statearr_12257_12374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12236 === (10))){
var inst_12228 = (state_12235[(2)]);
var state_12235__$1 = state_12235;
var statearr_12258_12375 = state_12235__$1;
(statearr_12258_12375[(2)] = inst_12228);

(statearr_12258_12375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12236 === (8))){
var inst_12221 = (state_12235[(9)]);
var inst_12224 = cljs.core.deref.call(null,inst_12221);
var state_12235__$1 = state_12235;
var statearr_12260_12376 = state_12235__$1;
(statearr_12260_12376[(2)] = inst_12224);

(statearr_12260_12376[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__11581__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11581__auto____0 = (function (){
var statearr_12262 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12262[(0)] = cljs$core$async$reduce_$_state_machine__11581__auto__);

(statearr_12262[(1)] = (1));

return statearr_12262;
});
var cljs$core$async$reduce_$_state_machine__11581__auto____1 = (function (state_12235){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_12235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e12263){var ex__11584__auto__ = e12263;
var statearr_12264_12377 = state_12235;
(statearr_12264_12377[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_12235[(4)]))){
var statearr_12267_12378 = state_12235;
(statearr_12267_12378[(1)] = cljs.core.first.call(null,(state_12235[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12379 = state_12235;
state_12235 = G__12379;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11581__auto__ = function(state_12235){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11581__auto____1.call(this,state_12235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11581__auto____0;
cljs$core$async$reduce_$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11581__auto____1;
return cljs$core$async$reduce_$_state_machine__11581__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_12268 = f__11784__auto__.call(null);
(statearr_12268[(6)] = c__11783__auto__);

return statearr_12268;
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
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_12279){
var state_val_12280 = (state_12279[(1)]);
if((state_val_12280 === (1))){
var inst_12274 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_12279__$1 = state_12279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12279__$1,(2),inst_12274);
} else {
if((state_val_12280 === (2))){
var inst_12276 = (state_12279[(2)]);
var inst_12277 = f__$1.call(null,inst_12276);
var state_12279__$1 = state_12279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12279__$1,inst_12277);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11581__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11581__auto____0 = (function (){
var statearr_12284 = [null,null,null,null,null,null,null];
(statearr_12284[(0)] = cljs$core$async$transduce_$_state_machine__11581__auto__);

(statearr_12284[(1)] = (1));

return statearr_12284;
});
var cljs$core$async$transduce_$_state_machine__11581__auto____1 = (function (state_12279){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_12279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e12286){var ex__11584__auto__ = e12286;
var statearr_12288_12380 = state_12279;
(statearr_12288_12380[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_12279[(4)]))){
var statearr_12289_12381 = state_12279;
(statearr_12289_12381[(1)] = cljs.core.first.call(null,(state_12279[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12382 = state_12279;
state_12279 = G__12382;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11581__auto__ = function(state_12279){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11581__auto____1.call(this,state_12279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11581__auto____0;
cljs$core$async$transduce_$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11581__auto____1;
return cljs$core$async$transduce_$_state_machine__11581__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_12291 = f__11784__auto__.call(null);
(statearr_12291[(6)] = c__11783__auto__);

return statearr_12291;
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
var G__12296 = arguments.length;
switch (G__12296) {
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
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_12323){
var state_val_12324 = (state_12323[(1)]);
if((state_val_12324 === (7))){
var inst_12304 = (state_12323[(2)]);
var state_12323__$1 = state_12323;
var statearr_12325_12384 = state_12323__$1;
(statearr_12325_12384[(2)] = inst_12304);

(statearr_12325_12384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12324 === (1))){
var inst_12298 = cljs.core.seq.call(null,coll);
var inst_12299 = inst_12298;
var state_12323__$1 = (function (){var statearr_12326 = state_12323;
(statearr_12326[(7)] = inst_12299);

return statearr_12326;
})();
var statearr_12327_12388 = state_12323__$1;
(statearr_12327_12388[(2)] = null);

(statearr_12327_12388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12324 === (4))){
var inst_12299 = (state_12323[(7)]);
var inst_12302 = cljs.core.first.call(null,inst_12299);
var state_12323__$1 = state_12323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12323__$1,(7),ch,inst_12302);
} else {
if((state_val_12324 === (13))){
var inst_12316 = (state_12323[(2)]);
var state_12323__$1 = state_12323;
var statearr_12329_12389 = state_12323__$1;
(statearr_12329_12389[(2)] = inst_12316);

(statearr_12329_12389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12324 === (6))){
var inst_12307 = (state_12323[(2)]);
var state_12323__$1 = state_12323;
if(cljs.core.truth_(inst_12307)){
var statearr_12330_12390 = state_12323__$1;
(statearr_12330_12390[(1)] = (8));

} else {
var statearr_12331_12391 = state_12323__$1;
(statearr_12331_12391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12324 === (3))){
var inst_12320 = (state_12323[(2)]);
var state_12323__$1 = state_12323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12323__$1,inst_12320);
} else {
if((state_val_12324 === (12))){
var state_12323__$1 = state_12323;
var statearr_12333_12392 = state_12323__$1;
(statearr_12333_12392[(2)] = null);

(statearr_12333_12392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12324 === (2))){
var inst_12299 = (state_12323[(7)]);
var state_12323__$1 = state_12323;
if(cljs.core.truth_(inst_12299)){
var statearr_12335_12393 = state_12323__$1;
(statearr_12335_12393[(1)] = (4));

} else {
var statearr_12336_12394 = state_12323__$1;
(statearr_12336_12394[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12324 === (11))){
var inst_12313 = cljs.core.async.close_BANG_.call(null,ch);
var state_12323__$1 = state_12323;
var statearr_12338_12395 = state_12323__$1;
(statearr_12338_12395[(2)] = inst_12313);

(statearr_12338_12395[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12324 === (9))){
var state_12323__$1 = state_12323;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12340_12396 = state_12323__$1;
(statearr_12340_12396[(1)] = (11));

} else {
var statearr_12342_12397 = state_12323__$1;
(statearr_12342_12397[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12324 === (5))){
var inst_12299 = (state_12323[(7)]);
var state_12323__$1 = state_12323;
var statearr_12344_12398 = state_12323__$1;
(statearr_12344_12398[(2)] = inst_12299);

(statearr_12344_12398[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12324 === (10))){
var inst_12318 = (state_12323[(2)]);
var state_12323__$1 = state_12323;
var statearr_12346_12399 = state_12323__$1;
(statearr_12346_12399[(2)] = inst_12318);

(statearr_12346_12399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12324 === (8))){
var inst_12299 = (state_12323[(7)]);
var inst_12309 = cljs.core.next.call(null,inst_12299);
var inst_12299__$1 = inst_12309;
var state_12323__$1 = (function (){var statearr_12348 = state_12323;
(statearr_12348[(7)] = inst_12299__$1);

return statearr_12348;
})();
var statearr_12349_12400 = state_12323__$1;
(statearr_12349_12400[(2)] = null);

(statearr_12349_12400[(1)] = (2));


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
var cljs$core$async$state_machine__11581__auto__ = null;
var cljs$core$async$state_machine__11581__auto____0 = (function (){
var statearr_12351 = [null,null,null,null,null,null,null,null];
(statearr_12351[(0)] = cljs$core$async$state_machine__11581__auto__);

(statearr_12351[(1)] = (1));

return statearr_12351;
});
var cljs$core$async$state_machine__11581__auto____1 = (function (state_12323){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_12323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e12353){var ex__11584__auto__ = e12353;
var statearr_12354_12423 = state_12323;
(statearr_12354_12423[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_12323[(4)]))){
var statearr_12355_12427 = state_12323;
(statearr_12355_12427[(1)] = cljs.core.first.call(null,(state_12323[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12436 = state_12323;
state_12323 = G__12436;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$state_machine__11581__auto__ = function(state_12323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11581__auto____1.call(this,state_12323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11581__auto____0;
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11581__auto____1;
return cljs$core$async$state_machine__11581__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_12359 = f__11784__auto__.call(null);
(statearr_12359[(6)] = c__11783__auto__);

return statearr_12359;
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
var G__12365 = arguments.length;
switch (G__12365) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12483 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12483.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12519 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_12519.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12539 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_12539.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12542 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_12542.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12385 = (function (ch,cs,meta12386){
this.ch = ch;
this.cs = cs;
this.meta12386 = meta12386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12387,meta12386__$1){
var self__ = this;
var _12387__$1 = this;
return (new cljs.core.async.t_cljs$core$async12385(self__.ch,self__.cs,meta12386__$1));
}));

(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12387){
var self__ = this;
var _12387__$1 = this;
return self__.meta12386;
}));

(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12385.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12386","meta12386",-2031952366,null)], null);
}));

(cljs.core.async.t_cljs$core$async12385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12385");

(cljs.core.async.t_cljs$core$async12385.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12385.
 */
cljs.core.async.__GT_t_cljs$core$async12385 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12385(ch__$1,cs__$1,meta12386){
return (new cljs.core.async.t_cljs$core$async12385(ch__$1,cs__$1,meta12386));
});

}

return (new cljs.core.async.t_cljs$core$async12385(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_12540){
var state_val_12541 = (state_12540[(1)]);
if((state_val_12541 === (7))){
var inst_12535 = (state_12540[(2)]);
var state_12540__$1 = state_12540;
var statearr_12543_12628 = state_12540__$1;
(statearr_12543_12628[(2)] = inst_12535);

(statearr_12543_12628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (20))){
var inst_12437 = (state_12540[(7)]);
var inst_12449 = cljs.core.first.call(null,inst_12437);
var inst_12450 = cljs.core.nth.call(null,inst_12449,(0),null);
var inst_12452 = cljs.core.nth.call(null,inst_12449,(1),null);
var state_12540__$1 = (function (){var statearr_12544 = state_12540;
(statearr_12544[(8)] = inst_12450);

return statearr_12544;
})();
if(cljs.core.truth_(inst_12452)){
var statearr_12545_12629 = state_12540__$1;
(statearr_12545_12629[(1)] = (22));

} else {
var statearr_12546_12630 = state_12540__$1;
(statearr_12546_12630[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (27))){
var inst_12480 = (state_12540[(9)]);
var inst_12482 = (state_12540[(10)]);
var inst_12488 = (state_12540[(11)]);
var inst_12403 = (state_12540[(12)]);
var inst_12488__$1 = cljs.core._nth.call(null,inst_12480,inst_12482);
var inst_12489 = cljs.core.async.put_BANG_.call(null,inst_12488__$1,inst_12403,done);
var state_12540__$1 = (function (){var statearr_12547 = state_12540;
(statearr_12547[(11)] = inst_12488__$1);

return statearr_12547;
})();
if(cljs.core.truth_(inst_12489)){
var statearr_12548_12631 = state_12540__$1;
(statearr_12548_12631[(1)] = (30));

} else {
var statearr_12549_12632 = state_12540__$1;
(statearr_12549_12632[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (1))){
var state_12540__$1 = state_12540;
var statearr_12550_12633 = state_12540__$1;
(statearr_12550_12633[(2)] = null);

(statearr_12550_12633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (24))){
var inst_12437 = (state_12540[(7)]);
var inst_12457 = (state_12540[(2)]);
var inst_12458 = cljs.core.next.call(null,inst_12437);
var inst_12412 = inst_12458;
var inst_12413 = null;
var inst_12414 = (0);
var inst_12415 = (0);
var state_12540__$1 = (function (){var statearr_12551 = state_12540;
(statearr_12551[(13)] = inst_12457);

(statearr_12551[(14)] = inst_12412);

(statearr_12551[(15)] = inst_12413);

(statearr_12551[(16)] = inst_12414);

(statearr_12551[(17)] = inst_12415);

return statearr_12551;
})();
var statearr_12552_12634 = state_12540__$1;
(statearr_12552_12634[(2)] = null);

(statearr_12552_12634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (39))){
var state_12540__$1 = state_12540;
var statearr_12556_12635 = state_12540__$1;
(statearr_12556_12635[(2)] = null);

(statearr_12556_12635[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (4))){
var inst_12403 = (state_12540[(12)]);
var inst_12403__$1 = (state_12540[(2)]);
var inst_12404 = (inst_12403__$1 == null);
var state_12540__$1 = (function (){var statearr_12557 = state_12540;
(statearr_12557[(12)] = inst_12403__$1);

return statearr_12557;
})();
if(cljs.core.truth_(inst_12404)){
var statearr_12558_12636 = state_12540__$1;
(statearr_12558_12636[(1)] = (5));

} else {
var statearr_12559_12637 = state_12540__$1;
(statearr_12559_12637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (15))){
var inst_12415 = (state_12540[(17)]);
var inst_12412 = (state_12540[(14)]);
var inst_12413 = (state_12540[(15)]);
var inst_12414 = (state_12540[(16)]);
var inst_12432 = (state_12540[(2)]);
var inst_12433 = (inst_12415 + (1));
var tmp12553 = inst_12412;
var tmp12554 = inst_12413;
var tmp12555 = inst_12414;
var inst_12412__$1 = tmp12553;
var inst_12413__$1 = tmp12554;
var inst_12414__$1 = tmp12555;
var inst_12415__$1 = inst_12433;
var state_12540__$1 = (function (){var statearr_12560 = state_12540;
(statearr_12560[(18)] = inst_12432);

(statearr_12560[(14)] = inst_12412__$1);

(statearr_12560[(15)] = inst_12413__$1);

(statearr_12560[(16)] = inst_12414__$1);

(statearr_12560[(17)] = inst_12415__$1);

return statearr_12560;
})();
var statearr_12561_12638 = state_12540__$1;
(statearr_12561_12638[(2)] = null);

(statearr_12561_12638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (21))){
var inst_12461 = (state_12540[(2)]);
var state_12540__$1 = state_12540;
var statearr_12565_12639 = state_12540__$1;
(statearr_12565_12639[(2)] = inst_12461);

(statearr_12565_12639[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (31))){
var inst_12488 = (state_12540[(11)]);
var inst_12492 = cljs.core.async.untap_STAR_.call(null,m,inst_12488);
var state_12540__$1 = state_12540;
var statearr_12566_12640 = state_12540__$1;
(statearr_12566_12640[(2)] = inst_12492);

(statearr_12566_12640[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (32))){
var inst_12482 = (state_12540[(10)]);
var inst_12479 = (state_12540[(19)]);
var inst_12480 = (state_12540[(9)]);
var inst_12481 = (state_12540[(20)]);
var inst_12494 = (state_12540[(2)]);
var inst_12495 = (inst_12482 + (1));
var tmp12562 = inst_12479;
var tmp12563 = inst_12481;
var tmp12564 = inst_12480;
var inst_12479__$1 = tmp12562;
var inst_12480__$1 = tmp12564;
var inst_12481__$1 = tmp12563;
var inst_12482__$1 = inst_12495;
var state_12540__$1 = (function (){var statearr_12567 = state_12540;
(statearr_12567[(21)] = inst_12494);

(statearr_12567[(19)] = inst_12479__$1);

(statearr_12567[(9)] = inst_12480__$1);

(statearr_12567[(20)] = inst_12481__$1);

(statearr_12567[(10)] = inst_12482__$1);

return statearr_12567;
})();
var statearr_12568_12641 = state_12540__$1;
(statearr_12568_12641[(2)] = null);

(statearr_12568_12641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (40))){
var inst_12507 = (state_12540[(22)]);
var inst_12511 = cljs.core.async.untap_STAR_.call(null,m,inst_12507);
var state_12540__$1 = state_12540;
var statearr_12569_12642 = state_12540__$1;
(statearr_12569_12642[(2)] = inst_12511);

(statearr_12569_12642[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (33))){
var inst_12498 = (state_12540[(23)]);
var inst_12500 = cljs.core.chunked_seq_QMARK_.call(null,inst_12498);
var state_12540__$1 = state_12540;
if(inst_12500){
var statearr_12570_12647 = state_12540__$1;
(statearr_12570_12647[(1)] = (36));

} else {
var statearr_12571_12648 = state_12540__$1;
(statearr_12571_12648[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (13))){
var inst_12425 = (state_12540[(24)]);
var inst_12429 = cljs.core.async.close_BANG_.call(null,inst_12425);
var state_12540__$1 = state_12540;
var statearr_12572_12649 = state_12540__$1;
(statearr_12572_12649[(2)] = inst_12429);

(statearr_12572_12649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (22))){
var inst_12450 = (state_12540[(8)]);
var inst_12454 = cljs.core.async.close_BANG_.call(null,inst_12450);
var state_12540__$1 = state_12540;
var statearr_12573_12650 = state_12540__$1;
(statearr_12573_12650[(2)] = inst_12454);

(statearr_12573_12650[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (36))){
var inst_12498 = (state_12540[(23)]);
var inst_12502 = cljs.core.chunk_first.call(null,inst_12498);
var inst_12503 = cljs.core.chunk_rest.call(null,inst_12498);
var inst_12504 = cljs.core.count.call(null,inst_12502);
var inst_12479 = inst_12503;
var inst_12480 = inst_12502;
var inst_12481 = inst_12504;
var inst_12482 = (0);
var state_12540__$1 = (function (){var statearr_12574 = state_12540;
(statearr_12574[(19)] = inst_12479);

(statearr_12574[(9)] = inst_12480);

(statearr_12574[(20)] = inst_12481);

(statearr_12574[(10)] = inst_12482);

return statearr_12574;
})();
var statearr_12575_12654 = state_12540__$1;
(statearr_12575_12654[(2)] = null);

(statearr_12575_12654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (41))){
var inst_12498 = (state_12540[(23)]);
var inst_12513 = (state_12540[(2)]);
var inst_12514 = cljs.core.next.call(null,inst_12498);
var inst_12479 = inst_12514;
var inst_12480 = null;
var inst_12481 = (0);
var inst_12482 = (0);
var state_12540__$1 = (function (){var statearr_12576 = state_12540;
(statearr_12576[(25)] = inst_12513);

(statearr_12576[(19)] = inst_12479);

(statearr_12576[(9)] = inst_12480);

(statearr_12576[(20)] = inst_12481);

(statearr_12576[(10)] = inst_12482);

return statearr_12576;
})();
var statearr_12577_12657 = state_12540__$1;
(statearr_12577_12657[(2)] = null);

(statearr_12577_12657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (43))){
var state_12540__$1 = state_12540;
var statearr_12578_12658 = state_12540__$1;
(statearr_12578_12658[(2)] = null);

(statearr_12578_12658[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (29))){
var inst_12523 = (state_12540[(2)]);
var state_12540__$1 = state_12540;
var statearr_12579_12659 = state_12540__$1;
(statearr_12579_12659[(2)] = inst_12523);

(statearr_12579_12659[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (44))){
var inst_12532 = (state_12540[(2)]);
var state_12540__$1 = (function (){var statearr_12580 = state_12540;
(statearr_12580[(26)] = inst_12532);

return statearr_12580;
})();
var statearr_12581_12660 = state_12540__$1;
(statearr_12581_12660[(2)] = null);

(statearr_12581_12660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (6))){
var inst_12471 = (state_12540[(27)]);
var inst_12470 = cljs.core.deref.call(null,cs);
var inst_12471__$1 = cljs.core.keys.call(null,inst_12470);
var inst_12472 = cljs.core.count.call(null,inst_12471__$1);
var inst_12473 = cljs.core.reset_BANG_.call(null,dctr,inst_12472);
var inst_12478 = cljs.core.seq.call(null,inst_12471__$1);
var inst_12479 = inst_12478;
var inst_12480 = null;
var inst_12481 = (0);
var inst_12482 = (0);
var state_12540__$1 = (function (){var statearr_12582 = state_12540;
(statearr_12582[(27)] = inst_12471__$1);

(statearr_12582[(28)] = inst_12473);

(statearr_12582[(19)] = inst_12479);

(statearr_12582[(9)] = inst_12480);

(statearr_12582[(20)] = inst_12481);

(statearr_12582[(10)] = inst_12482);

return statearr_12582;
})();
var statearr_12583_12661 = state_12540__$1;
(statearr_12583_12661[(2)] = null);

(statearr_12583_12661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (28))){
var inst_12479 = (state_12540[(19)]);
var inst_12498 = (state_12540[(23)]);
var inst_12498__$1 = cljs.core.seq.call(null,inst_12479);
var state_12540__$1 = (function (){var statearr_12584 = state_12540;
(statearr_12584[(23)] = inst_12498__$1);

return statearr_12584;
})();
if(inst_12498__$1){
var statearr_12585_12662 = state_12540__$1;
(statearr_12585_12662[(1)] = (33));

} else {
var statearr_12586_12663 = state_12540__$1;
(statearr_12586_12663[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (25))){
var inst_12482 = (state_12540[(10)]);
var inst_12481 = (state_12540[(20)]);
var inst_12485 = (inst_12482 < inst_12481);
var inst_12486 = inst_12485;
var state_12540__$1 = state_12540;
if(cljs.core.truth_(inst_12486)){
var statearr_12587_12664 = state_12540__$1;
(statearr_12587_12664[(1)] = (27));

} else {
var statearr_12588_12665 = state_12540__$1;
(statearr_12588_12665[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (34))){
var state_12540__$1 = state_12540;
var statearr_12589_12666 = state_12540__$1;
(statearr_12589_12666[(2)] = null);

(statearr_12589_12666[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (17))){
var state_12540__$1 = state_12540;
var statearr_12590_12670 = state_12540__$1;
(statearr_12590_12670[(2)] = null);

(statearr_12590_12670[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (3))){
var inst_12537 = (state_12540[(2)]);
var state_12540__$1 = state_12540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12540__$1,inst_12537);
} else {
if((state_val_12541 === (12))){
var inst_12466 = (state_12540[(2)]);
var state_12540__$1 = state_12540;
var statearr_12591_12671 = state_12540__$1;
(statearr_12591_12671[(2)] = inst_12466);

(statearr_12591_12671[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (2))){
var state_12540__$1 = state_12540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12540__$1,(4),ch);
} else {
if((state_val_12541 === (23))){
var state_12540__$1 = state_12540;
var statearr_12592_12672 = state_12540__$1;
(statearr_12592_12672[(2)] = null);

(statearr_12592_12672[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (35))){
var inst_12521 = (state_12540[(2)]);
var state_12540__$1 = state_12540;
var statearr_12593_12673 = state_12540__$1;
(statearr_12593_12673[(2)] = inst_12521);

(statearr_12593_12673[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (19))){
var inst_12437 = (state_12540[(7)]);
var inst_12441 = cljs.core.chunk_first.call(null,inst_12437);
var inst_12442 = cljs.core.chunk_rest.call(null,inst_12437);
var inst_12443 = cljs.core.count.call(null,inst_12441);
var inst_12412 = inst_12442;
var inst_12413 = inst_12441;
var inst_12414 = inst_12443;
var inst_12415 = (0);
var state_12540__$1 = (function (){var statearr_12594 = state_12540;
(statearr_12594[(14)] = inst_12412);

(statearr_12594[(15)] = inst_12413);

(statearr_12594[(16)] = inst_12414);

(statearr_12594[(17)] = inst_12415);

return statearr_12594;
})();
var statearr_12595_12674 = state_12540__$1;
(statearr_12595_12674[(2)] = null);

(statearr_12595_12674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (11))){
var inst_12412 = (state_12540[(14)]);
var inst_12437 = (state_12540[(7)]);
var inst_12437__$1 = cljs.core.seq.call(null,inst_12412);
var state_12540__$1 = (function (){var statearr_12596 = state_12540;
(statearr_12596[(7)] = inst_12437__$1);

return statearr_12596;
})();
if(inst_12437__$1){
var statearr_12597_12675 = state_12540__$1;
(statearr_12597_12675[(1)] = (16));

} else {
var statearr_12598_12676 = state_12540__$1;
(statearr_12598_12676[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (9))){
var inst_12468 = (state_12540[(2)]);
var state_12540__$1 = state_12540;
var statearr_12599_12677 = state_12540__$1;
(statearr_12599_12677[(2)] = inst_12468);

(statearr_12599_12677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (5))){
var inst_12410 = cljs.core.deref.call(null,cs);
var inst_12411 = cljs.core.seq.call(null,inst_12410);
var inst_12412 = inst_12411;
var inst_12413 = null;
var inst_12414 = (0);
var inst_12415 = (0);
var state_12540__$1 = (function (){var statearr_12600 = state_12540;
(statearr_12600[(14)] = inst_12412);

(statearr_12600[(15)] = inst_12413);

(statearr_12600[(16)] = inst_12414);

(statearr_12600[(17)] = inst_12415);

return statearr_12600;
})();
var statearr_12601_12678 = state_12540__$1;
(statearr_12601_12678[(2)] = null);

(statearr_12601_12678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (14))){
var state_12540__$1 = state_12540;
var statearr_12602_12679 = state_12540__$1;
(statearr_12602_12679[(2)] = null);

(statearr_12602_12679[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (45))){
var inst_12529 = (state_12540[(2)]);
var state_12540__$1 = state_12540;
var statearr_12603_12680 = state_12540__$1;
(statearr_12603_12680[(2)] = inst_12529);

(statearr_12603_12680[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (26))){
var inst_12471 = (state_12540[(27)]);
var inst_12525 = (state_12540[(2)]);
var inst_12526 = cljs.core.seq.call(null,inst_12471);
var state_12540__$1 = (function (){var statearr_12604 = state_12540;
(statearr_12604[(29)] = inst_12525);

return statearr_12604;
})();
if(inst_12526){
var statearr_12605_12681 = state_12540__$1;
(statearr_12605_12681[(1)] = (42));

} else {
var statearr_12606_12682 = state_12540__$1;
(statearr_12606_12682[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (16))){
var inst_12437 = (state_12540[(7)]);
var inst_12439 = cljs.core.chunked_seq_QMARK_.call(null,inst_12437);
var state_12540__$1 = state_12540;
if(inst_12439){
var statearr_12607_12684 = state_12540__$1;
(statearr_12607_12684[(1)] = (19));

} else {
var statearr_12608_12685 = state_12540__$1;
(statearr_12608_12685[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (38))){
var inst_12517 = (state_12540[(2)]);
var state_12540__$1 = state_12540;
var statearr_12609_12688 = state_12540__$1;
(statearr_12609_12688[(2)] = inst_12517);

(statearr_12609_12688[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (30))){
var state_12540__$1 = state_12540;
var statearr_12610_12692 = state_12540__$1;
(statearr_12610_12692[(2)] = null);

(statearr_12610_12692[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (10))){
var inst_12413 = (state_12540[(15)]);
var inst_12415 = (state_12540[(17)]);
var inst_12424 = cljs.core._nth.call(null,inst_12413,inst_12415);
var inst_12425 = cljs.core.nth.call(null,inst_12424,(0),null);
var inst_12426 = cljs.core.nth.call(null,inst_12424,(1),null);
var state_12540__$1 = (function (){var statearr_12611 = state_12540;
(statearr_12611[(24)] = inst_12425);

return statearr_12611;
})();
if(cljs.core.truth_(inst_12426)){
var statearr_12612_12707 = state_12540__$1;
(statearr_12612_12707[(1)] = (13));

} else {
var statearr_12613_12710 = state_12540__$1;
(statearr_12613_12710[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (18))){
var inst_12464 = (state_12540[(2)]);
var state_12540__$1 = state_12540;
var statearr_12614_12714 = state_12540__$1;
(statearr_12614_12714[(2)] = inst_12464);

(statearr_12614_12714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (42))){
var state_12540__$1 = state_12540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12540__$1,(45),dchan);
} else {
if((state_val_12541 === (37))){
var inst_12498 = (state_12540[(23)]);
var inst_12507 = (state_12540[(22)]);
var inst_12403 = (state_12540[(12)]);
var inst_12507__$1 = cljs.core.first.call(null,inst_12498);
var inst_12508 = cljs.core.async.put_BANG_.call(null,inst_12507__$1,inst_12403,done);
var state_12540__$1 = (function (){var statearr_12615 = state_12540;
(statearr_12615[(22)] = inst_12507__$1);

return statearr_12615;
})();
if(cljs.core.truth_(inst_12508)){
var statearr_12616_12733 = state_12540__$1;
(statearr_12616_12733[(1)] = (39));

} else {
var statearr_12617_12738 = state_12540__$1;
(statearr_12617_12738[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12541 === (8))){
var inst_12415 = (state_12540[(17)]);
var inst_12414 = (state_12540[(16)]);
var inst_12417 = (inst_12415 < inst_12414);
var inst_12418 = inst_12417;
var state_12540__$1 = state_12540;
if(cljs.core.truth_(inst_12418)){
var statearr_12618_12758 = state_12540__$1;
(statearr_12618_12758[(1)] = (10));

} else {
var statearr_12619_12760 = state_12540__$1;
(statearr_12619_12760[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__11581__auto__ = null;
var cljs$core$async$mult_$_state_machine__11581__auto____0 = (function (){
var statearr_12620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12620[(0)] = cljs$core$async$mult_$_state_machine__11581__auto__);

(statearr_12620[(1)] = (1));

return statearr_12620;
});
var cljs$core$async$mult_$_state_machine__11581__auto____1 = (function (state_12540){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_12540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e12621){var ex__11584__auto__ = e12621;
var statearr_12622_12763 = state_12540;
(statearr_12622_12763[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_12540[(4)]))){
var statearr_12623_12764 = state_12540;
(statearr_12623_12764[(1)] = cljs.core.first.call(null,(state_12540[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12766 = state_12540;
state_12540 = G__12766;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11581__auto__ = function(state_12540){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11581__auto____1.call(this,state_12540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11581__auto____0;
cljs$core$async$mult_$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11581__auto____1;
return cljs$core$async$mult_$_state_machine__11581__auto__;
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

var cljs$core$async$Mix$admix_STAR_$dyn_12773 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_12773.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12778 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_12778.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12784 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12784.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12788 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_12788.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12791 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12791.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___12796 = arguments.length;
var i__5750__auto___12797 = (0);
while(true){
if((i__5750__auto___12797 < len__5749__auto___12796)){
args__5755__auto__.push((arguments[i__5750__auto___12797]));

var G__12798 = (i__5750__auto___12797 + (1));
i__5750__auto___12797 = G__12798;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12651){
var map__12652 = p__12651;
var map__12652__$1 = cljs.core.__destructure_map.call(null,map__12652);
var opts = map__12652__$1;
var statearr_12653_12801 = state;
(statearr_12653_12801[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_12655_12803 = state;
(statearr_12655_12803[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_12656_12806 = state;
(statearr_12656_12806[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12643){
var G__12644 = cljs.core.first.call(null,seq12643);
var seq12643__$1 = cljs.core.next.call(null,seq12643);
var G__12645 = cljs.core.first.call(null,seq12643__$1);
var seq12643__$2 = cljs.core.next.call(null,seq12643__$1);
var G__12646 = cljs.core.first.call(null,seq12643__$2);
var seq12643__$3 = cljs.core.next.call(null,seq12643__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12644,G__12645,G__12646,seq12643__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12667 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12668){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12668 = meta12668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12669,meta12668__$1){
var self__ = this;
var _12669__$1 = this;
return (new cljs.core.async.t_cljs$core$async12667(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12668__$1));
}));

(cljs.core.async.t_cljs$core$async12667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12669){
var self__ = this;
var _12669__$1 = this;
return self__.meta12668;
}));

(cljs.core.async.t_cljs$core$async12667.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12667.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12667.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12667.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12667.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12667.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12667.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12668","meta12668",1288947003,null)], null);
}));

(cljs.core.async.t_cljs$core$async12667.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12667");

(cljs.core.async.t_cljs$core$async12667.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12667");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12667.
 */
cljs.core.async.__GT_t_cljs$core$async12667 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12667(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12668){
return (new cljs.core.async.t_cljs$core$async12667(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12668));
});

}

return (new cljs.core.async.t_cljs$core$async12667(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11783__auto___12823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_12761){
var state_val_12762 = (state_12761[(1)]);
if((state_val_12762 === (7))){
var inst_12717 = (state_12761[(2)]);
var state_12761__$1 = state_12761;
if(cljs.core.truth_(inst_12717)){
var statearr_12765_12824 = state_12761__$1;
(statearr_12765_12824[(1)] = (8));

} else {
var statearr_12767_12825 = state_12761__$1;
(statearr_12767_12825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (20))){
var inst_12708 = (state_12761[(7)]);
var state_12761__$1 = state_12761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12761__$1,(23),out,inst_12708);
} else {
if((state_val_12762 === (1))){
var inst_12689 = calc_state.call(null);
var inst_12690 = cljs.core.__destructure_map.call(null,inst_12689);
var inst_12691 = cljs.core.get.call(null,inst_12690,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12693 = cljs.core.get.call(null,inst_12690,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12694 = cljs.core.get.call(null,inst_12690,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12695 = inst_12689;
var state_12761__$1 = (function (){var statearr_12769 = state_12761;
(statearr_12769[(8)] = inst_12691);

(statearr_12769[(9)] = inst_12693);

(statearr_12769[(10)] = inst_12694);

(statearr_12769[(11)] = inst_12695);

return statearr_12769;
})();
var statearr_12770_12827 = state_12761__$1;
(statearr_12770_12827[(2)] = null);

(statearr_12770_12827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (24))){
var inst_12698 = (state_12761[(12)]);
var inst_12695 = inst_12698;
var state_12761__$1 = (function (){var statearr_12771 = state_12761;
(statearr_12771[(11)] = inst_12695);

return statearr_12771;
})();
var statearr_12772_12830 = state_12761__$1;
(statearr_12772_12830[(2)] = null);

(statearr_12772_12830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (4))){
var inst_12708 = (state_12761[(7)]);
var inst_12711 = (state_12761[(13)]);
var inst_12706 = (state_12761[(2)]);
var inst_12708__$1 = cljs.core.nth.call(null,inst_12706,(0),null);
var inst_12709 = cljs.core.nth.call(null,inst_12706,(1),null);
var inst_12711__$1 = (inst_12708__$1 == null);
var state_12761__$1 = (function (){var statearr_12774 = state_12761;
(statearr_12774[(7)] = inst_12708__$1);

(statearr_12774[(14)] = inst_12709);

(statearr_12774[(13)] = inst_12711__$1);

return statearr_12774;
})();
if(cljs.core.truth_(inst_12711__$1)){
var statearr_12775_12831 = state_12761__$1;
(statearr_12775_12831[(1)] = (5));

} else {
var statearr_12776_12832 = state_12761__$1;
(statearr_12776_12832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (15))){
var inst_12699 = (state_12761[(15)]);
var inst_12731 = (state_12761[(16)]);
var inst_12731__$1 = cljs.core.empty_QMARK_.call(null,inst_12699);
var state_12761__$1 = (function (){var statearr_12777 = state_12761;
(statearr_12777[(16)] = inst_12731__$1);

return statearr_12777;
})();
if(inst_12731__$1){
var statearr_12779_12833 = state_12761__$1;
(statearr_12779_12833[(1)] = (17));

} else {
var statearr_12780_12834 = state_12761__$1;
(statearr_12780_12834[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (21))){
var inst_12698 = (state_12761[(12)]);
var inst_12695 = inst_12698;
var state_12761__$1 = (function (){var statearr_12781 = state_12761;
(statearr_12781[(11)] = inst_12695);

return statearr_12781;
})();
var statearr_12782_12838 = state_12761__$1;
(statearr_12782_12838[(2)] = null);

(statearr_12782_12838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (13))){
var inst_12724 = (state_12761[(2)]);
var inst_12725 = calc_state.call(null);
var inst_12695 = inst_12725;
var state_12761__$1 = (function (){var statearr_12783 = state_12761;
(statearr_12783[(17)] = inst_12724);

(statearr_12783[(11)] = inst_12695);

return statearr_12783;
})();
var statearr_12785_12839 = state_12761__$1;
(statearr_12785_12839[(2)] = null);

(statearr_12785_12839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (22))){
var inst_12753 = (state_12761[(2)]);
var state_12761__$1 = state_12761;
var statearr_12786_12840 = state_12761__$1;
(statearr_12786_12840[(2)] = inst_12753);

(statearr_12786_12840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (6))){
var inst_12709 = (state_12761[(14)]);
var inst_12715 = cljs.core._EQ_.call(null,inst_12709,change);
var state_12761__$1 = state_12761;
var statearr_12787_12841 = state_12761__$1;
(statearr_12787_12841[(2)] = inst_12715);

(statearr_12787_12841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (25))){
var state_12761__$1 = state_12761;
var statearr_12789_12842 = state_12761__$1;
(statearr_12789_12842[(2)] = null);

(statearr_12789_12842[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (17))){
var inst_12700 = (state_12761[(18)]);
var inst_12709 = (state_12761[(14)]);
var inst_12734 = inst_12700.call(null,inst_12709);
var inst_12735 = cljs.core.not.call(null,inst_12734);
var state_12761__$1 = state_12761;
var statearr_12790_12843 = state_12761__$1;
(statearr_12790_12843[(2)] = inst_12735);

(statearr_12790_12843[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (3))){
var inst_12757 = (state_12761[(2)]);
var state_12761__$1 = state_12761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12761__$1,inst_12757);
} else {
if((state_val_12762 === (12))){
var state_12761__$1 = state_12761;
var statearr_12792_12844 = state_12761__$1;
(statearr_12792_12844[(2)] = null);

(statearr_12792_12844[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (2))){
var inst_12695 = (state_12761[(11)]);
var inst_12698 = (state_12761[(12)]);
var inst_12698__$1 = cljs.core.__destructure_map.call(null,inst_12695);
var inst_12699 = cljs.core.get.call(null,inst_12698__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12700 = cljs.core.get.call(null,inst_12698__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12701 = cljs.core.get.call(null,inst_12698__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12761__$1 = (function (){var statearr_12793 = state_12761;
(statearr_12793[(12)] = inst_12698__$1);

(statearr_12793[(15)] = inst_12699);

(statearr_12793[(18)] = inst_12700);

return statearr_12793;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12761__$1,(4),inst_12701);
} else {
if((state_val_12762 === (23))){
var inst_12744 = (state_12761[(2)]);
var state_12761__$1 = state_12761;
if(cljs.core.truth_(inst_12744)){
var statearr_12794_12845 = state_12761__$1;
(statearr_12794_12845[(1)] = (24));

} else {
var statearr_12795_12846 = state_12761__$1;
(statearr_12795_12846[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (19))){
var inst_12739 = (state_12761[(2)]);
var state_12761__$1 = state_12761;
var statearr_12799_12847 = state_12761__$1;
(statearr_12799_12847[(2)] = inst_12739);

(statearr_12799_12847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (11))){
var inst_12709 = (state_12761[(14)]);
var inst_12721 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12709);
var state_12761__$1 = state_12761;
var statearr_12800_12848 = state_12761__$1;
(statearr_12800_12848[(2)] = inst_12721);

(statearr_12800_12848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (9))){
var inst_12699 = (state_12761[(15)]);
var inst_12709 = (state_12761[(14)]);
var inst_12728 = (state_12761[(19)]);
var inst_12728__$1 = inst_12699.call(null,inst_12709);
var state_12761__$1 = (function (){var statearr_12802 = state_12761;
(statearr_12802[(19)] = inst_12728__$1);

return statearr_12802;
})();
if(cljs.core.truth_(inst_12728__$1)){
var statearr_12804_12858 = state_12761__$1;
(statearr_12804_12858[(1)] = (14));

} else {
var statearr_12805_12861 = state_12761__$1;
(statearr_12805_12861[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (5))){
var inst_12711 = (state_12761[(13)]);
var state_12761__$1 = state_12761;
var statearr_12807_12872 = state_12761__$1;
(statearr_12807_12872[(2)] = inst_12711);

(statearr_12807_12872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (14))){
var inst_12728 = (state_12761[(19)]);
var state_12761__$1 = state_12761;
var statearr_12808_12878 = state_12761__$1;
(statearr_12808_12878[(2)] = inst_12728);

(statearr_12808_12878[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (26))){
var inst_12749 = (state_12761[(2)]);
var state_12761__$1 = state_12761;
var statearr_12809_12882 = state_12761__$1;
(statearr_12809_12882[(2)] = inst_12749);

(statearr_12809_12882[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (16))){
var inst_12741 = (state_12761[(2)]);
var state_12761__$1 = state_12761;
if(cljs.core.truth_(inst_12741)){
var statearr_12810_12890 = state_12761__$1;
(statearr_12810_12890[(1)] = (20));

} else {
var statearr_12811_12893 = state_12761__$1;
(statearr_12811_12893[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (10))){
var inst_12755 = (state_12761[(2)]);
var state_12761__$1 = state_12761;
var statearr_12812_12910 = state_12761__$1;
(statearr_12812_12910[(2)] = inst_12755);

(statearr_12812_12910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (18))){
var inst_12731 = (state_12761[(16)]);
var state_12761__$1 = state_12761;
var statearr_12813_12928 = state_12761__$1;
(statearr_12813_12928[(2)] = inst_12731);

(statearr_12813_12928[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12762 === (8))){
var inst_12708 = (state_12761[(7)]);
var inst_12719 = (inst_12708 == null);
var state_12761__$1 = state_12761;
if(cljs.core.truth_(inst_12719)){
var statearr_12814_12931 = state_12761__$1;
(statearr_12814_12931[(1)] = (11));

} else {
var statearr_12815_12932 = state_12761__$1;
(statearr_12815_12932[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__11581__auto__ = null;
var cljs$core$async$mix_$_state_machine__11581__auto____0 = (function (){
var statearr_12816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12816[(0)] = cljs$core$async$mix_$_state_machine__11581__auto__);

(statearr_12816[(1)] = (1));

return statearr_12816;
});
var cljs$core$async$mix_$_state_machine__11581__auto____1 = (function (state_12761){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_12761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e12817){var ex__11584__auto__ = e12817;
var statearr_12818_12935 = state_12761;
(statearr_12818_12935[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_12761[(4)]))){
var statearr_12819_12936 = state_12761;
(statearr_12819_12936[(1)] = cljs.core.first.call(null,(state_12761[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12938 = state_12761;
state_12761 = G__12938;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11581__auto__ = function(state_12761){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11581__auto____1.call(this,state_12761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11581__auto____0;
cljs$core$async$mix_$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11581__auto____1;
return cljs$core$async$mix_$_state_machine__11581__auto__;
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

var cljs$core$async$Pub$sub_STAR_$dyn_12945 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_12945.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12951 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_12951.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12956 = (function() {
var G__12957 = null;
var G__12957__1 = (function (p){
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
var G__12957__2 = (function (p,v){
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
G__12957 = function(p,v){
switch(arguments.length){
case 1:
return G__12957__1.call(this,p);
case 2:
return G__12957__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12957.cljs$core$IFn$_invoke$arity$1 = G__12957__1;
G__12957.cljs$core$IFn$_invoke$arity$2 = G__12957__2;
return G__12957;
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12956.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12956.call(null,p,v);
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
var G__12829 = arguments.length;
switch (G__12829) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12826_SHARP_){
if(cljs.core.truth_(p1__12826_SHARP_.call(null,topic))){
return p1__12826_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12826_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12835 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12836){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12836 = meta12836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12837,meta12836__$1){
var self__ = this;
var _12837__$1 = this;
return (new cljs.core.async.t_cljs$core$async12835(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12836__$1));
}));

(cljs.core.async.t_cljs$core$async12835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12837){
var self__ = this;
var _12837__$1 = this;
return self__.meta12836;
}));

(cljs.core.async.t_cljs$core$async12835.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12835.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12835.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12835.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12835.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12835.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12835.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12836","meta12836",-1295083366,null)], null);
}));

(cljs.core.async.t_cljs$core$async12835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12835");

(cljs.core.async.t_cljs$core$async12835.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12835.
 */
cljs.core.async.__GT_t_cljs$core$async12835 = (function cljs$core$async$__GT_t_cljs$core$async12835(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12836){
return (new cljs.core.async.t_cljs$core$async12835(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12836));
});

}

return (new cljs.core.async.t_cljs$core$async12835(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11783__auto___12990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_12929){
var state_val_12930 = (state_12929[(1)]);
if((state_val_12930 === (7))){
var inst_12924 = (state_12929[(2)]);
var state_12929__$1 = state_12929;
var statearr_12933_12991 = state_12929__$1;
(statearr_12933_12991[(2)] = inst_12924);

(statearr_12933_12991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (20))){
var state_12929__$1 = state_12929;
var statearr_12934_12993 = state_12929__$1;
(statearr_12934_12993[(2)] = null);

(statearr_12934_12993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (1))){
var state_12929__$1 = state_12929;
var statearr_12937_12995 = state_12929__$1;
(statearr_12937_12995[(2)] = null);

(statearr_12937_12995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (24))){
var inst_12906 = (state_12929[(7)]);
var inst_12916 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12906);
var state_12929__$1 = state_12929;
var statearr_12939_12996 = state_12929__$1;
(statearr_12939_12996[(2)] = inst_12916);

(statearr_12939_12996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (4))){
var inst_12851 = (state_12929[(8)]);
var inst_12851__$1 = (state_12929[(2)]);
var inst_12852 = (inst_12851__$1 == null);
var state_12929__$1 = (function (){var statearr_12940 = state_12929;
(statearr_12940[(8)] = inst_12851__$1);

return statearr_12940;
})();
if(cljs.core.truth_(inst_12852)){
var statearr_12941_12997 = state_12929__$1;
(statearr_12941_12997[(1)] = (5));

} else {
var statearr_12942_12998 = state_12929__$1;
(statearr_12942_12998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (15))){
var inst_12900 = (state_12929[(2)]);
var state_12929__$1 = state_12929;
var statearr_12943_12999 = state_12929__$1;
(statearr_12943_12999[(2)] = inst_12900);

(statearr_12943_12999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (21))){
var inst_12921 = (state_12929[(2)]);
var state_12929__$1 = (function (){var statearr_12944 = state_12929;
(statearr_12944[(9)] = inst_12921);

return statearr_12944;
})();
var statearr_12946_13000 = state_12929__$1;
(statearr_12946_13000[(2)] = null);

(statearr_12946_13000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (13))){
var inst_12879 = (state_12929[(10)]);
var inst_12881 = cljs.core.chunked_seq_QMARK_.call(null,inst_12879);
var state_12929__$1 = state_12929;
if(inst_12881){
var statearr_12947_13001 = state_12929__$1;
(statearr_12947_13001[(1)] = (16));

} else {
var statearr_12948_13003 = state_12929__$1;
(statearr_12948_13003[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (22))){
var inst_12913 = (state_12929[(2)]);
var state_12929__$1 = state_12929;
if(cljs.core.truth_(inst_12913)){
var statearr_12949_13008 = state_12929__$1;
(statearr_12949_13008[(1)] = (23));

} else {
var statearr_12950_13010 = state_12929__$1;
(statearr_12950_13010[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (6))){
var inst_12851 = (state_12929[(8)]);
var inst_12906 = (state_12929[(7)]);
var inst_12908 = (state_12929[(11)]);
var inst_12906__$1 = topic_fn.call(null,inst_12851);
var inst_12907 = cljs.core.deref.call(null,mults);
var inst_12908__$1 = cljs.core.get.call(null,inst_12907,inst_12906__$1);
var state_12929__$1 = (function (){var statearr_12952 = state_12929;
(statearr_12952[(7)] = inst_12906__$1);

(statearr_12952[(11)] = inst_12908__$1);

return statearr_12952;
})();
if(cljs.core.truth_(inst_12908__$1)){
var statearr_12953_13012 = state_12929__$1;
(statearr_12953_13012[(1)] = (19));

} else {
var statearr_12954_13013 = state_12929__$1;
(statearr_12954_13013[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (25))){
var inst_12918 = (state_12929[(2)]);
var state_12929__$1 = state_12929;
var statearr_12955_13014 = state_12929__$1;
(statearr_12955_13014[(2)] = inst_12918);

(statearr_12955_13014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (17))){
var inst_12879 = (state_12929[(10)]);
var inst_12889 = cljs.core.first.call(null,inst_12879);
var inst_12891 = cljs.core.async.muxch_STAR_.call(null,inst_12889);
var inst_12892 = cljs.core.async.close_BANG_.call(null,inst_12891);
var inst_12894 = cljs.core.next.call(null,inst_12879);
var inst_12863 = inst_12894;
var inst_12864 = null;
var inst_12865 = (0);
var inst_12866 = (0);
var state_12929__$1 = (function (){var statearr_12958 = state_12929;
(statearr_12958[(12)] = inst_12892);

(statearr_12958[(13)] = inst_12863);

(statearr_12958[(14)] = inst_12864);

(statearr_12958[(15)] = inst_12865);

(statearr_12958[(16)] = inst_12866);

return statearr_12958;
})();
var statearr_12959_13016 = state_12929__$1;
(statearr_12959_13016[(2)] = null);

(statearr_12959_13016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (3))){
var inst_12926 = (state_12929[(2)]);
var state_12929__$1 = state_12929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12929__$1,inst_12926);
} else {
if((state_val_12930 === (12))){
var inst_12902 = (state_12929[(2)]);
var state_12929__$1 = state_12929;
var statearr_12960_13030 = state_12929__$1;
(statearr_12960_13030[(2)] = inst_12902);

(statearr_12960_13030[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (2))){
var state_12929__$1 = state_12929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12929__$1,(4),ch);
} else {
if((state_val_12930 === (23))){
var state_12929__$1 = state_12929;
var statearr_12962_13045 = state_12929__$1;
(statearr_12962_13045[(2)] = null);

(statearr_12962_13045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (19))){
var inst_12908 = (state_12929[(11)]);
var inst_12851 = (state_12929[(8)]);
var inst_12911 = cljs.core.async.muxch_STAR_.call(null,inst_12908);
var state_12929__$1 = state_12929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12929__$1,(22),inst_12911,inst_12851);
} else {
if((state_val_12930 === (11))){
var inst_12863 = (state_12929[(13)]);
var inst_12879 = (state_12929[(10)]);
var inst_12879__$1 = cljs.core.seq.call(null,inst_12863);
var state_12929__$1 = (function (){var statearr_12963 = state_12929;
(statearr_12963[(10)] = inst_12879__$1);

return statearr_12963;
})();
if(inst_12879__$1){
var statearr_12964_13055 = state_12929__$1;
(statearr_12964_13055[(1)] = (13));

} else {
var statearr_12965_13056 = state_12929__$1;
(statearr_12965_13056[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (9))){
var inst_12904 = (state_12929[(2)]);
var state_12929__$1 = state_12929;
var statearr_12966_13057 = state_12929__$1;
(statearr_12966_13057[(2)] = inst_12904);

(statearr_12966_13057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (5))){
var inst_12859 = cljs.core.deref.call(null,mults);
var inst_12860 = cljs.core.vals.call(null,inst_12859);
var inst_12862 = cljs.core.seq.call(null,inst_12860);
var inst_12863 = inst_12862;
var inst_12864 = null;
var inst_12865 = (0);
var inst_12866 = (0);
var state_12929__$1 = (function (){var statearr_12967 = state_12929;
(statearr_12967[(13)] = inst_12863);

(statearr_12967[(14)] = inst_12864);

(statearr_12967[(15)] = inst_12865);

(statearr_12967[(16)] = inst_12866);

return statearr_12967;
})();
var statearr_12968_13060 = state_12929__$1;
(statearr_12968_13060[(2)] = null);

(statearr_12968_13060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (14))){
var state_12929__$1 = state_12929;
var statearr_12972_13062 = state_12929__$1;
(statearr_12972_13062[(2)] = null);

(statearr_12972_13062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (16))){
var inst_12879 = (state_12929[(10)]);
var inst_12884 = cljs.core.chunk_first.call(null,inst_12879);
var inst_12885 = cljs.core.chunk_rest.call(null,inst_12879);
var inst_12886 = cljs.core.count.call(null,inst_12884);
var inst_12863 = inst_12885;
var inst_12864 = inst_12884;
var inst_12865 = inst_12886;
var inst_12866 = (0);
var state_12929__$1 = (function (){var statearr_12973 = state_12929;
(statearr_12973[(13)] = inst_12863);

(statearr_12973[(14)] = inst_12864);

(statearr_12973[(15)] = inst_12865);

(statearr_12973[(16)] = inst_12866);

return statearr_12973;
})();
var statearr_12974_13065 = state_12929__$1;
(statearr_12974_13065[(2)] = null);

(statearr_12974_13065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (10))){
var inst_12864 = (state_12929[(14)]);
var inst_12866 = (state_12929[(16)]);
var inst_12863 = (state_12929[(13)]);
var inst_12865 = (state_12929[(15)]);
var inst_12871 = cljs.core._nth.call(null,inst_12864,inst_12866);
var inst_12873 = cljs.core.async.muxch_STAR_.call(null,inst_12871);
var inst_12874 = cljs.core.async.close_BANG_.call(null,inst_12873);
var inst_12875 = (inst_12866 + (1));
var tmp12969 = inst_12864;
var tmp12970 = inst_12865;
var tmp12971 = inst_12863;
var inst_12863__$1 = tmp12971;
var inst_12864__$1 = tmp12969;
var inst_12865__$1 = tmp12970;
var inst_12866__$1 = inst_12875;
var state_12929__$1 = (function (){var statearr_12975 = state_12929;
(statearr_12975[(17)] = inst_12874);

(statearr_12975[(13)] = inst_12863__$1);

(statearr_12975[(14)] = inst_12864__$1);

(statearr_12975[(15)] = inst_12865__$1);

(statearr_12975[(16)] = inst_12866__$1);

return statearr_12975;
})();
var statearr_12976_13069 = state_12929__$1;
(statearr_12976_13069[(2)] = null);

(statearr_12976_13069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (18))){
var inst_12897 = (state_12929[(2)]);
var state_12929__$1 = state_12929;
var statearr_12977_13070 = state_12929__$1;
(statearr_12977_13070[(2)] = inst_12897);

(statearr_12977_13070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12930 === (8))){
var inst_12866 = (state_12929[(16)]);
var inst_12865 = (state_12929[(15)]);
var inst_12868 = (inst_12866 < inst_12865);
var inst_12869 = inst_12868;
var state_12929__$1 = state_12929;
if(cljs.core.truth_(inst_12869)){
var statearr_12978_13071 = state_12929__$1;
(statearr_12978_13071[(1)] = (10));

} else {
var statearr_12979_13072 = state_12929__$1;
(statearr_12979_13072[(1)] = (11));

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
var cljs$core$async$state_machine__11581__auto__ = null;
var cljs$core$async$state_machine__11581__auto____0 = (function (){
var statearr_12980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12980[(0)] = cljs$core$async$state_machine__11581__auto__);

(statearr_12980[(1)] = (1));

return statearr_12980;
});
var cljs$core$async$state_machine__11581__auto____1 = (function (state_12929){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_12929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e12981){var ex__11584__auto__ = e12981;
var statearr_12982_13076 = state_12929;
(statearr_12982_13076[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_12929[(4)]))){
var statearr_12983_13077 = state_12929;
(statearr_12983_13077[(1)] = cljs.core.first.call(null,(state_12929[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13079 = state_12929;
state_12929 = G__13079;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$state_machine__11581__auto__ = function(state_12929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11581__auto____1.call(this,state_12929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11581__auto____0;
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11581__auto____1;
return cljs$core$async$state_machine__11581__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_12984 = f__11784__auto__.call(null);
(statearr_12984[(6)] = c__11783__auto___12990);

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
var G__12987 = arguments.length;
switch (G__12987) {
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
var G__12994 = arguments.length;
switch (G__12994) {
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
var c__11783__auto___13108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_13053){
var state_val_13054 = (state_13053[(1)]);
if((state_val_13054 === (7))){
var state_13053__$1 = state_13053;
var statearr_13058_13118 = state_13053__$1;
(statearr_13058_13118[(2)] = null);

(statearr_13058_13118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13054 === (1))){
var state_13053__$1 = state_13053;
var statearr_13059_13123 = state_13053__$1;
(statearr_13059_13123[(2)] = null);

(statearr_13059_13123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13054 === (4))){
var inst_13006 = (state_13053[(7)]);
var inst_13005 = (state_13053[(8)]);
var inst_13009 = (inst_13006 < inst_13005);
var state_13053__$1 = state_13053;
if(cljs.core.truth_(inst_13009)){
var statearr_13061_13128 = state_13053__$1;
(statearr_13061_13128[(1)] = (6));

} else {
var statearr_13063_13134 = state_13053__$1;
(statearr_13063_13134[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13054 === (15))){
var inst_13038 = (state_13053[(9)]);
var inst_13043 = cljs.core.apply.call(null,f,inst_13038);
var state_13053__$1 = state_13053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13053__$1,(17),out,inst_13043);
} else {
if((state_val_13054 === (13))){
var inst_13038 = (state_13053[(9)]);
var inst_13038__$1 = (state_13053[(2)]);
var inst_13039 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13038__$1);
var state_13053__$1 = (function (){var statearr_13064 = state_13053;
(statearr_13064[(9)] = inst_13038__$1);

return statearr_13064;
})();
if(cljs.core.truth_(inst_13039)){
var statearr_13066_13144 = state_13053__$1;
(statearr_13066_13144[(1)] = (14));

} else {
var statearr_13067_13145 = state_13053__$1;
(statearr_13067_13145[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13054 === (6))){
var state_13053__$1 = state_13053;
var statearr_13068_13146 = state_13053__$1;
(statearr_13068_13146[(2)] = null);

(statearr_13068_13146[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13054 === (17))){
var inst_13046 = (state_13053[(2)]);
var state_13053__$1 = (function (){var statearr_13074 = state_13053;
(statearr_13074[(10)] = inst_13046);

return statearr_13074;
})();
var statearr_13075_13148 = state_13053__$1;
(statearr_13075_13148[(2)] = null);

(statearr_13075_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13054 === (3))){
var inst_13051 = (state_13053[(2)]);
var state_13053__$1 = state_13053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13053__$1,inst_13051);
} else {
if((state_val_13054 === (12))){
var _ = (function (){var statearr_13078 = state_13053;
(statearr_13078[(4)] = cljs.core.rest.call(null,(state_13053[(4)])));

return statearr_13078;
})();
var state_13053__$1 = state_13053;
var ex13073 = (state_13053__$1[(2)]);
var statearr_13080_13153 = state_13053__$1;
(statearr_13080_13153[(5)] = ex13073);


if((ex13073 instanceof Object)){
var statearr_13082_13154 = state_13053__$1;
(statearr_13082_13154[(1)] = (11));

(statearr_13082_13154[(5)] = null);

} else {
throw ex13073;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13054 === (2))){
var inst_13004 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13005 = cnt;
var inst_13006 = (0);
var state_13053__$1 = (function (){var statearr_13084 = state_13053;
(statearr_13084[(11)] = inst_13004);

(statearr_13084[(8)] = inst_13005);

(statearr_13084[(7)] = inst_13006);

return statearr_13084;
})();
var statearr_13085_13157 = state_13053__$1;
(statearr_13085_13157[(2)] = null);

(statearr_13085_13157[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13054 === (11))){
var inst_13015 = (state_13053[(2)]);
var inst_13017 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13053__$1 = (function (){var statearr_13086 = state_13053;
(statearr_13086[(12)] = inst_13015);

return statearr_13086;
})();
var statearr_13087_13159 = state_13053__$1;
(statearr_13087_13159[(2)] = inst_13017);

(statearr_13087_13159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13054 === (9))){
var inst_13006 = (state_13053[(7)]);
var _ = (function (){var statearr_13088 = state_13053;
(statearr_13088[(4)] = cljs.core.cons.call(null,(12),(state_13053[(4)])));

return statearr_13088;
})();
var inst_13023 = chs__$1.call(null,inst_13006);
var inst_13024 = done.call(null,inst_13006);
var inst_13025 = cljs.core.async.take_BANG_.call(null,inst_13023,inst_13024);
var ___$1 = (function (){var statearr_13089 = state_13053;
(statearr_13089[(4)] = cljs.core.rest.call(null,(state_13053[(4)])));

return statearr_13089;
})();
var state_13053__$1 = state_13053;
var statearr_13090_13163 = state_13053__$1;
(statearr_13090_13163[(2)] = inst_13025);

(statearr_13090_13163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13054 === (5))){
var inst_13036 = (state_13053[(2)]);
var state_13053__$1 = (function (){var statearr_13091 = state_13053;
(statearr_13091[(13)] = inst_13036);

return statearr_13091;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13053__$1,(13),dchan);
} else {
if((state_val_13054 === (14))){
var inst_13041 = cljs.core.async.close_BANG_.call(null,out);
var state_13053__$1 = state_13053;
var statearr_13092_13164 = state_13053__$1;
(statearr_13092_13164[(2)] = inst_13041);

(statearr_13092_13164[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13054 === (16))){
var inst_13049 = (state_13053[(2)]);
var state_13053__$1 = state_13053;
var statearr_13093_13165 = state_13053__$1;
(statearr_13093_13165[(2)] = inst_13049);

(statearr_13093_13165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13054 === (10))){
var inst_13006 = (state_13053[(7)]);
var inst_13028 = (state_13053[(2)]);
var inst_13029 = (inst_13006 + (1));
var inst_13006__$1 = inst_13029;
var state_13053__$1 = (function (){var statearr_13094 = state_13053;
(statearr_13094[(14)] = inst_13028);

(statearr_13094[(7)] = inst_13006__$1);

return statearr_13094;
})();
var statearr_13095_13166 = state_13053__$1;
(statearr_13095_13166[(2)] = null);

(statearr_13095_13166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13054 === (8))){
var inst_13034 = (state_13053[(2)]);
var state_13053__$1 = state_13053;
var statearr_13096_13167 = state_13053__$1;
(statearr_13096_13167[(2)] = inst_13034);

(statearr_13096_13167[(1)] = (5));


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
var cljs$core$async$state_machine__11581__auto__ = null;
var cljs$core$async$state_machine__11581__auto____0 = (function (){
var statearr_13097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13097[(0)] = cljs$core$async$state_machine__11581__auto__);

(statearr_13097[(1)] = (1));

return statearr_13097;
});
var cljs$core$async$state_machine__11581__auto____1 = (function (state_13053){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_13053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e13098){var ex__11584__auto__ = e13098;
var statearr_13099_13170 = state_13053;
(statearr_13099_13170[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_13053[(4)]))){
var statearr_13100_13171 = state_13053;
(statearr_13100_13171[(1)] = cljs.core.first.call(null,(state_13053[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13173 = state_13053;
state_13053 = G__13173;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$state_machine__11581__auto__ = function(state_13053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11581__auto____1.call(this,state_13053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11581__auto____0;
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11581__auto____1;
return cljs$core$async$state_machine__11581__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_13101 = f__11784__auto__.call(null);
(statearr_13101[(6)] = c__11783__auto___13108);

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
var G__13105 = arguments.length;
switch (G__13105) {
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
var c__11783__auto___13183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_13142){
var state_val_13143 = (state_13142[(1)]);
if((state_val_13143 === (7))){
var inst_13117 = (state_13142[(7)]);
var inst_13119 = (state_13142[(8)]);
var inst_13117__$1 = (state_13142[(2)]);
var inst_13119__$1 = cljs.core.nth.call(null,inst_13117__$1,(0),null);
var inst_13120 = cljs.core.nth.call(null,inst_13117__$1,(1),null);
var inst_13121 = (inst_13119__$1 == null);
var state_13142__$1 = (function (){var statearr_13147 = state_13142;
(statearr_13147[(7)] = inst_13117__$1);

(statearr_13147[(8)] = inst_13119__$1);

(statearr_13147[(9)] = inst_13120);

return statearr_13147;
})();
if(cljs.core.truth_(inst_13121)){
var statearr_13149_13186 = state_13142__$1;
(statearr_13149_13186[(1)] = (8));

} else {
var statearr_13150_13187 = state_13142__$1;
(statearr_13150_13187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13143 === (1))){
var inst_13106 = cljs.core.vec.call(null,chs);
var inst_13107 = inst_13106;
var state_13142__$1 = (function (){var statearr_13151 = state_13142;
(statearr_13151[(10)] = inst_13107);

return statearr_13151;
})();
var statearr_13152_13195 = state_13142__$1;
(statearr_13152_13195[(2)] = null);

(statearr_13152_13195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13143 === (4))){
var inst_13107 = (state_13142[(10)]);
var state_13142__$1 = state_13142;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13142__$1,(7),inst_13107);
} else {
if((state_val_13143 === (6))){
var inst_13138 = (state_13142[(2)]);
var state_13142__$1 = state_13142;
var statearr_13155_13211 = state_13142__$1;
(statearr_13155_13211[(2)] = inst_13138);

(statearr_13155_13211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13143 === (3))){
var inst_13140 = (state_13142[(2)]);
var state_13142__$1 = state_13142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13142__$1,inst_13140);
} else {
if((state_val_13143 === (2))){
var inst_13107 = (state_13142[(10)]);
var inst_13110 = cljs.core.count.call(null,inst_13107);
var inst_13111 = (inst_13110 > (0));
var state_13142__$1 = state_13142;
if(cljs.core.truth_(inst_13111)){
var statearr_13158_13213 = state_13142__$1;
(statearr_13158_13213[(1)] = (4));

} else {
var statearr_13160_13214 = state_13142__$1;
(statearr_13160_13214[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13143 === (11))){
var inst_13107 = (state_13142[(10)]);
var inst_13130 = (state_13142[(2)]);
var tmp13156 = inst_13107;
var inst_13107__$1 = tmp13156;
var state_13142__$1 = (function (){var statearr_13161 = state_13142;
(statearr_13161[(11)] = inst_13130);

(statearr_13161[(10)] = inst_13107__$1);

return statearr_13161;
})();
var statearr_13162_13218 = state_13142__$1;
(statearr_13162_13218[(2)] = null);

(statearr_13162_13218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13143 === (9))){
var inst_13119 = (state_13142[(8)]);
var state_13142__$1 = state_13142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13142__$1,(11),out,inst_13119);
} else {
if((state_val_13143 === (5))){
var inst_13136 = cljs.core.async.close_BANG_.call(null,out);
var state_13142__$1 = state_13142;
var statearr_13168_13221 = state_13142__$1;
(statearr_13168_13221[(2)] = inst_13136);

(statearr_13168_13221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13143 === (10))){
var inst_13133 = (state_13142[(2)]);
var state_13142__$1 = state_13142;
var statearr_13169_13222 = state_13142__$1;
(statearr_13169_13222[(2)] = inst_13133);

(statearr_13169_13222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13143 === (8))){
var inst_13107 = (state_13142[(10)]);
var inst_13117 = (state_13142[(7)]);
var inst_13119 = (state_13142[(8)]);
var inst_13120 = (state_13142[(9)]);
var inst_13124 = (function (){var cs = inst_13107;
var vec__13113 = inst_13117;
var v = inst_13119;
var c = inst_13120;
return (function (p1__13103_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13103_SHARP_);
});
})();
var inst_13125 = cljs.core.filterv.call(null,inst_13124,inst_13107);
var inst_13107__$1 = inst_13125;
var state_13142__$1 = (function (){var statearr_13172 = state_13142;
(statearr_13172[(10)] = inst_13107__$1);

return statearr_13172;
})();
var statearr_13174_13225 = state_13142__$1;
(statearr_13174_13225[(2)] = null);

(statearr_13174_13225[(1)] = (2));


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
var cljs$core$async$state_machine__11581__auto__ = null;
var cljs$core$async$state_machine__11581__auto____0 = (function (){
var statearr_13175 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13175[(0)] = cljs$core$async$state_machine__11581__auto__);

(statearr_13175[(1)] = (1));

return statearr_13175;
});
var cljs$core$async$state_machine__11581__auto____1 = (function (state_13142){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_13142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e13176){var ex__11584__auto__ = e13176;
var statearr_13177_13231 = state_13142;
(statearr_13177_13231[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_13142[(4)]))){
var statearr_13178_13233 = state_13142;
(statearr_13178_13233[(1)] = cljs.core.first.call(null,(state_13142[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13235 = state_13142;
state_13142 = G__13235;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$state_machine__11581__auto__ = function(state_13142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11581__auto____1.call(this,state_13142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11581__auto____0;
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11581__auto____1;
return cljs$core$async$state_machine__11581__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_13179 = f__11784__auto__.call(null);
(statearr_13179[(6)] = c__11783__auto___13183);

return statearr_13179;
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
var G__13182 = arguments.length;
switch (G__13182) {
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
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_13210){
var state_val_13212 = (state_13210[(1)]);
if((state_val_13212 === (7))){
var inst_13191 = (state_13210[(7)]);
var inst_13191__$1 = (state_13210[(2)]);
var inst_13192 = (inst_13191__$1 == null);
var inst_13193 = cljs.core.not.call(null,inst_13192);
var state_13210__$1 = (function (){var statearr_13215 = state_13210;
(statearr_13215[(7)] = inst_13191__$1);

return statearr_13215;
})();
if(inst_13193){
var statearr_13216_13247 = state_13210__$1;
(statearr_13216_13247[(1)] = (8));

} else {
var statearr_13217_13248 = state_13210__$1;
(statearr_13217_13248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (1))){
var inst_13184 = (0);
var state_13210__$1 = (function (){var statearr_13219 = state_13210;
(statearr_13219[(8)] = inst_13184);

return statearr_13219;
})();
var statearr_13220_13249 = state_13210__$1;
(statearr_13220_13249[(2)] = null);

(statearr_13220_13249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (4))){
var state_13210__$1 = state_13210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13210__$1,(7),ch);
} else {
if((state_val_13212 === (6))){
var inst_13205 = (state_13210[(2)]);
var state_13210__$1 = state_13210;
var statearr_13223_13250 = state_13210__$1;
(statearr_13223_13250[(2)] = inst_13205);

(statearr_13223_13250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (3))){
var inst_13207 = (state_13210[(2)]);
var inst_13208 = cljs.core.async.close_BANG_.call(null,out);
var state_13210__$1 = (function (){var statearr_13224 = state_13210;
(statearr_13224[(9)] = inst_13207);

return statearr_13224;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13210__$1,inst_13208);
} else {
if((state_val_13212 === (2))){
var inst_13184 = (state_13210[(8)]);
var inst_13188 = (inst_13184 < n);
var state_13210__$1 = state_13210;
if(cljs.core.truth_(inst_13188)){
var statearr_13226_13251 = state_13210__$1;
(statearr_13226_13251[(1)] = (4));

} else {
var statearr_13227_13252 = state_13210__$1;
(statearr_13227_13252[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (11))){
var inst_13184 = (state_13210[(8)]);
var inst_13197 = (state_13210[(2)]);
var inst_13198 = (inst_13184 + (1));
var inst_13184__$1 = inst_13198;
var state_13210__$1 = (function (){var statearr_13228 = state_13210;
(statearr_13228[(10)] = inst_13197);

(statearr_13228[(8)] = inst_13184__$1);

return statearr_13228;
})();
var statearr_13229_13253 = state_13210__$1;
(statearr_13229_13253[(2)] = null);

(statearr_13229_13253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (9))){
var state_13210__$1 = state_13210;
var statearr_13230_13257 = state_13210__$1;
(statearr_13230_13257[(2)] = null);

(statearr_13230_13257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (5))){
var state_13210__$1 = state_13210;
var statearr_13232_13258 = state_13210__$1;
(statearr_13232_13258[(2)] = null);

(statearr_13232_13258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (10))){
var inst_13202 = (state_13210[(2)]);
var state_13210__$1 = state_13210;
var statearr_13234_13259 = state_13210__$1;
(statearr_13234_13259[(2)] = inst_13202);

(statearr_13234_13259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13212 === (8))){
var inst_13191 = (state_13210[(7)]);
var state_13210__$1 = state_13210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13210__$1,(11),out,inst_13191);
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
var cljs$core$async$state_machine__11581__auto__ = null;
var cljs$core$async$state_machine__11581__auto____0 = (function (){
var statearr_13236 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13236[(0)] = cljs$core$async$state_machine__11581__auto__);

(statearr_13236[(1)] = (1));

return statearr_13236;
});
var cljs$core$async$state_machine__11581__auto____1 = (function (state_13210){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_13210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e13237){var ex__11584__auto__ = e13237;
var statearr_13238_13260 = state_13210;
(statearr_13238_13260[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_13210[(4)]))){
var statearr_13239_13261 = state_13210;
(statearr_13239_13261[(1)] = cljs.core.first.call(null,(state_13210[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13262 = state_13210;
state_13210 = G__13262;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$state_machine__11581__auto__ = function(state_13210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11581__auto____1.call(this,state_13210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11581__auto____0;
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11581__auto____1;
return cljs$core$async$state_machine__11581__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_13240 = f__11784__auto__.call(null);
(statearr_13240[(6)] = c__11783__auto___13246);

return statearr_13240;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13243 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13243 = (function (f,ch,meta13244){
this.f = f;
this.ch = ch;
this.meta13244 = meta13244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13245,meta13244__$1){
var self__ = this;
var _13245__$1 = this;
return (new cljs.core.async.t_cljs$core$async13243(self__.f,self__.ch,meta13244__$1));
}));

(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13245){
var self__ = this;
var _13245__$1 = this;
return self__.meta13244;
}));

(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13254 = (function (f,ch,meta13244,_,fn1,meta13255){
this.f = f;
this.ch = ch;
this.meta13244 = meta13244;
this._ = _;
this.fn1 = fn1;
this.meta13255 = meta13255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13256,meta13255__$1){
var self__ = this;
var _13256__$1 = this;
return (new cljs.core.async.t_cljs$core$async13254(self__.f,self__.ch,self__.meta13244,self__._,self__.fn1,meta13255__$1));
}));

(cljs.core.async.t_cljs$core$async13254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13256){
var self__ = this;
var _13256__$1 = this;
return self__.meta13255;
}));

(cljs.core.async.t_cljs$core$async13254.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13254.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__13242_SHARP_){
return f1.call(null,(((p1__13242_SHARP_ == null))?null:self__.f.call(null,p1__13242_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async13254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13244","meta13244",1129005964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13243","cljs.core.async/t_cljs$core$async13243",-637828032,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13255","meta13255",249616257,null)], null);
}));

(cljs.core.async.t_cljs$core$async13254.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13254");

(cljs.core.async.t_cljs$core$async13254.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13254");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13254.
 */
cljs.core.async.__GT_t_cljs$core$async13254 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13254(f__$1,ch__$1,meta13244__$1,___$2,fn1__$1,meta13255){
return (new cljs.core.async.t_cljs$core$async13254(f__$1,ch__$1,meta13244__$1,___$2,fn1__$1,meta13255));
});

}

return (new cljs.core.async.t_cljs$core$async13254(self__.f,self__.ch,self__.meta13244,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13244","meta13244",1129005964,null)], null);
}));

(cljs.core.async.t_cljs$core$async13243.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13243");

(cljs.core.async.t_cljs$core$async13243.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13243");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13243.
 */
cljs.core.async.__GT_t_cljs$core$async13243 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13243(f__$1,ch__$1,meta13244){
return (new cljs.core.async.t_cljs$core$async13243(f__$1,ch__$1,meta13244));
});

}

return (new cljs.core.async.t_cljs$core$async13243(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_13291){
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
var statearr_13296_13316 = state_13291__$1;
(statearr_13296_13316[(1)] = (5));

} else {
var statearr_13297_13317 = state_13291__$1;
(statearr_13297_13317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13292 === (6))){
var inst_13273 = (state_13291[(7)]);
var inst_13278 = p.call(null,inst_13273);
var state_13291__$1 = state_13291;
if(cljs.core.truth_(inst_13278)){
var statearr_13298_13318 = state_13291__$1;
(statearr_13298_13318[(1)] = (8));

} else {
var statearr_13299_13319 = state_13291__$1;
(statearr_13299_13319[(1)] = (9));

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
var statearr_13300_13320 = state_13291__$1;
(statearr_13300_13320[(2)] = inst_13281);

(statearr_13300_13320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13292 === (9))){
var state_13291__$1 = state_13291;
var statearr_13301_13321 = state_13291__$1;
(statearr_13301_13321[(2)] = null);

(statearr_13301_13321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13292 === (5))){
var inst_13276 = cljs.core.async.close_BANG_.call(null,out);
var state_13291__$1 = state_13291;
var statearr_13302_13323 = state_13291__$1;
(statearr_13302_13323[(2)] = inst_13276);

(statearr_13302_13323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13292 === (10))){
var inst_13284 = (state_13291[(2)]);
var state_13291__$1 = (function (){var statearr_13303 = state_13291;
(statearr_13303[(8)] = inst_13284);

return statearr_13303;
})();
var statearr_13304_13336 = state_13291__$1;
(statearr_13304_13336[(2)] = null);

(statearr_13304_13336[(1)] = (2));


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
var cljs$core$async$state_machine__11581__auto__ = null;
var cljs$core$async$state_machine__11581__auto____0 = (function (){
var statearr_13305 = [null,null,null,null,null,null,null,null,null];
(statearr_13305[(0)] = cljs$core$async$state_machine__11581__auto__);

(statearr_13305[(1)] = (1));

return statearr_13305;
});
var cljs$core$async$state_machine__11581__auto____1 = (function (state_13291){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_13291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e13306){var ex__11584__auto__ = e13306;
var statearr_13307_13356 = state_13291;
(statearr_13307_13356[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_13291[(4)]))){
var statearr_13308_13361 = state_13291;
(statearr_13308_13361[(1)] = cljs.core.first.call(null,(state_13291[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13376 = state_13291;
state_13291 = G__13376;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$state_machine__11581__auto__ = function(state_13291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11581__auto____1.call(this,state_13291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11581__auto____0;
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11581__auto____1;
return cljs$core$async$state_machine__11581__auto__;
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
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_13388){
var state_val_13389 = (state_13388[(1)]);
if((state_val_13389 === (7))){
var inst_13384 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
var statearr_13391_13432 = state_13388__$1;
(statearr_13391_13432[(2)] = inst_13384);

(statearr_13391_13432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (20))){
var inst_13351 = (state_13388[(7)]);
var inst_13364 = (state_13388[(2)]);
var inst_13365 = cljs.core.next.call(null,inst_13351);
var inst_13337 = inst_13365;
var inst_13338 = null;
var inst_13339 = (0);
var inst_13340 = (0);
var state_13388__$1 = (function (){var statearr_13392 = state_13388;
(statearr_13392[(8)] = inst_13364);

(statearr_13392[(9)] = inst_13337);

(statearr_13392[(10)] = inst_13338);

(statearr_13392[(11)] = inst_13339);

(statearr_13392[(12)] = inst_13340);

return statearr_13392;
})();
var statearr_13393_13433 = state_13388__$1;
(statearr_13393_13433[(2)] = null);

(statearr_13393_13433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (1))){
var state_13388__$1 = state_13388;
var statearr_13394_13434 = state_13388__$1;
(statearr_13394_13434[(2)] = null);

(statearr_13394_13434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (4))){
var inst_13325 = (state_13388[(13)]);
var inst_13325__$1 = (state_13388[(2)]);
var inst_13326 = (inst_13325__$1 == null);
var state_13388__$1 = (function (){var statearr_13395 = state_13388;
(statearr_13395[(13)] = inst_13325__$1);

return statearr_13395;
})();
if(cljs.core.truth_(inst_13326)){
var statearr_13396_13436 = state_13388__$1;
(statearr_13396_13436[(1)] = (5));

} else {
var statearr_13397_13438 = state_13388__$1;
(statearr_13397_13438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (15))){
var state_13388__$1 = state_13388;
var statearr_13401_13439 = state_13388__$1;
(statearr_13401_13439[(2)] = null);

(statearr_13401_13439[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (21))){
var state_13388__$1 = state_13388;
var statearr_13402_13440 = state_13388__$1;
(statearr_13402_13440[(2)] = null);

(statearr_13402_13440[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (13))){
var inst_13340 = (state_13388[(12)]);
var inst_13337 = (state_13388[(9)]);
var inst_13338 = (state_13388[(10)]);
var inst_13339 = (state_13388[(11)]);
var inst_13347 = (state_13388[(2)]);
var inst_13348 = (inst_13340 + (1));
var tmp13398 = inst_13337;
var tmp13399 = inst_13338;
var tmp13400 = inst_13339;
var inst_13337__$1 = tmp13398;
var inst_13338__$1 = tmp13399;
var inst_13339__$1 = tmp13400;
var inst_13340__$1 = inst_13348;
var state_13388__$1 = (function (){var statearr_13403 = state_13388;
(statearr_13403[(14)] = inst_13347);

(statearr_13403[(9)] = inst_13337__$1);

(statearr_13403[(10)] = inst_13338__$1);

(statearr_13403[(11)] = inst_13339__$1);

(statearr_13403[(12)] = inst_13340__$1);

return statearr_13403;
})();
var statearr_13404_13442 = state_13388__$1;
(statearr_13404_13442[(2)] = null);

(statearr_13404_13442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (22))){
var state_13388__$1 = state_13388;
var statearr_13405_13444 = state_13388__$1;
(statearr_13405_13444[(2)] = null);

(statearr_13405_13444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (6))){
var inst_13325 = (state_13388[(13)]);
var inst_13334 = f.call(null,inst_13325);
var inst_13335 = cljs.core.seq.call(null,inst_13334);
var inst_13337 = inst_13335;
var inst_13338 = null;
var inst_13339 = (0);
var inst_13340 = (0);
var state_13388__$1 = (function (){var statearr_13406 = state_13388;
(statearr_13406[(9)] = inst_13337);

(statearr_13406[(10)] = inst_13338);

(statearr_13406[(11)] = inst_13339);

(statearr_13406[(12)] = inst_13340);

return statearr_13406;
})();
var statearr_13407_13445 = state_13388__$1;
(statearr_13407_13445[(2)] = null);

(statearr_13407_13445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (17))){
var inst_13351 = (state_13388[(7)]);
var inst_13355 = cljs.core.chunk_first.call(null,inst_13351);
var inst_13357 = cljs.core.chunk_rest.call(null,inst_13351);
var inst_13358 = cljs.core.count.call(null,inst_13355);
var inst_13337 = inst_13357;
var inst_13338 = inst_13355;
var inst_13339 = inst_13358;
var inst_13340 = (0);
var state_13388__$1 = (function (){var statearr_13408 = state_13388;
(statearr_13408[(9)] = inst_13337);

(statearr_13408[(10)] = inst_13338);

(statearr_13408[(11)] = inst_13339);

(statearr_13408[(12)] = inst_13340);

return statearr_13408;
})();
var statearr_13409_13448 = state_13388__$1;
(statearr_13409_13448[(2)] = null);

(statearr_13409_13448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (3))){
var inst_13386 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13388__$1,inst_13386);
} else {
if((state_val_13389 === (12))){
var inst_13373 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
var statearr_13410_13458 = state_13388__$1;
(statearr_13410_13458[(2)] = inst_13373);

(statearr_13410_13458[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (2))){
var state_13388__$1 = state_13388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13388__$1,(4),in$);
} else {
if((state_val_13389 === (23))){
var inst_13382 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
var statearr_13411_13473 = state_13388__$1;
(statearr_13411_13473[(2)] = inst_13382);

(statearr_13411_13473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (19))){
var inst_13368 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
var statearr_13412_13474 = state_13388__$1;
(statearr_13412_13474[(2)] = inst_13368);

(statearr_13412_13474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (11))){
var inst_13337 = (state_13388[(9)]);
var inst_13351 = (state_13388[(7)]);
var inst_13351__$1 = cljs.core.seq.call(null,inst_13337);
var state_13388__$1 = (function (){var statearr_13413 = state_13388;
(statearr_13413[(7)] = inst_13351__$1);

return statearr_13413;
})();
if(inst_13351__$1){
var statearr_13414_13477 = state_13388__$1;
(statearr_13414_13477[(1)] = (14));

} else {
var statearr_13415_13478 = state_13388__$1;
(statearr_13415_13478[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (9))){
var inst_13375 = (state_13388[(2)]);
var inst_13377 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13388__$1 = (function (){var statearr_13416 = state_13388;
(statearr_13416[(15)] = inst_13375);

return statearr_13416;
})();
if(cljs.core.truth_(inst_13377)){
var statearr_13417_13481 = state_13388__$1;
(statearr_13417_13481[(1)] = (21));

} else {
var statearr_13418_13483 = state_13388__$1;
(statearr_13418_13483[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (5))){
var inst_13328 = cljs.core.async.close_BANG_.call(null,out);
var state_13388__$1 = state_13388;
var statearr_13419_13486 = state_13388__$1;
(statearr_13419_13486[(2)] = inst_13328);

(statearr_13419_13486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (14))){
var inst_13351 = (state_13388[(7)]);
var inst_13353 = cljs.core.chunked_seq_QMARK_.call(null,inst_13351);
var state_13388__$1 = state_13388;
if(inst_13353){
var statearr_13420_13488 = state_13388__$1;
(statearr_13420_13488[(1)] = (17));

} else {
var statearr_13421_13489 = state_13388__$1;
(statearr_13421_13489[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (16))){
var inst_13371 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
var statearr_13422_13490 = state_13388__$1;
(statearr_13422_13490[(2)] = inst_13371);

(statearr_13422_13490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (10))){
var inst_13338 = (state_13388[(10)]);
var inst_13340 = (state_13388[(12)]);
var inst_13345 = cljs.core._nth.call(null,inst_13338,inst_13340);
var state_13388__$1 = state_13388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13388__$1,(13),out,inst_13345);
} else {
if((state_val_13389 === (18))){
var inst_13351 = (state_13388[(7)]);
var inst_13362 = cljs.core.first.call(null,inst_13351);
var state_13388__$1 = state_13388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13388__$1,(20),out,inst_13362);
} else {
if((state_val_13389 === (8))){
var inst_13340 = (state_13388[(12)]);
var inst_13339 = (state_13388[(11)]);
var inst_13342 = (inst_13340 < inst_13339);
var inst_13343 = inst_13342;
var state_13388__$1 = state_13388;
if(cljs.core.truth_(inst_13343)){
var statearr_13423_13496 = state_13388__$1;
(statearr_13423_13496[(1)] = (10));

} else {
var statearr_13424_13497 = state_13388__$1;
(statearr_13424_13497[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__11581__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11581__auto____0 = (function (){
var statearr_13425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13425[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11581__auto__);

(statearr_13425[(1)] = (1));

return statearr_13425;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11581__auto____1 = (function (state_13388){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_13388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e13426){var ex__11584__auto__ = e13426;
var statearr_13427_13501 = state_13388;
(statearr_13427_13501[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_13388[(4)]))){
var statearr_13428_13503 = state_13388;
(statearr_13428_13503[(1)] = cljs.core.first.call(null,(state_13388[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13506 = state_13388;
state_13388 = G__13506;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11581__auto__ = function(state_13388){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11581__auto____1.call(this,state_13388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11581__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11581__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11581__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_13429 = f__11784__auto__.call(null);
(statearr_13429[(6)] = c__11783__auto__);

return statearr_13429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));

return c__11783__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13431 = arguments.length;
switch (G__13431) {
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
var G__13437 = arguments.length;
switch (G__13437) {
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
var G__13443 = arguments.length;
switch (G__13443) {
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
var c__11783__auto___13514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_13471){
var state_val_13472 = (state_13471[(1)]);
if((state_val_13472 === (7))){
var inst_13466 = (state_13471[(2)]);
var state_13471__$1 = state_13471;
var statearr_13475_13521 = state_13471__$1;
(statearr_13475_13521[(2)] = inst_13466);

(statearr_13475_13521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13472 === (1))){
var inst_13446 = null;
var state_13471__$1 = (function (){var statearr_13476 = state_13471;
(statearr_13476[(7)] = inst_13446);

return statearr_13476;
})();
var statearr_13479_13531 = state_13471__$1;
(statearr_13479_13531[(2)] = null);

(statearr_13479_13531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13472 === (4))){
var inst_13450 = (state_13471[(8)]);
var inst_13450__$1 = (state_13471[(2)]);
var inst_13451 = (inst_13450__$1 == null);
var inst_13452 = cljs.core.not.call(null,inst_13451);
var state_13471__$1 = (function (){var statearr_13480 = state_13471;
(statearr_13480[(8)] = inst_13450__$1);

return statearr_13480;
})();
if(inst_13452){
var statearr_13482_13540 = state_13471__$1;
(statearr_13482_13540[(1)] = (5));

} else {
var statearr_13484_13543 = state_13471__$1;
(statearr_13484_13543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13472 === (6))){
var state_13471__$1 = state_13471;
var statearr_13485_13549 = state_13471__$1;
(statearr_13485_13549[(2)] = null);

(statearr_13485_13549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13472 === (3))){
var inst_13468 = (state_13471[(2)]);
var inst_13469 = cljs.core.async.close_BANG_.call(null,out);
var state_13471__$1 = (function (){var statearr_13487 = state_13471;
(statearr_13487[(9)] = inst_13468);

return statearr_13487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13471__$1,inst_13469);
} else {
if((state_val_13472 === (2))){
var state_13471__$1 = state_13471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13471__$1,(4),ch);
} else {
if((state_val_13472 === (11))){
var inst_13450 = (state_13471[(8)]);
var inst_13460 = (state_13471[(2)]);
var inst_13446 = inst_13450;
var state_13471__$1 = (function (){var statearr_13491 = state_13471;
(statearr_13491[(10)] = inst_13460);

(statearr_13491[(7)] = inst_13446);

return statearr_13491;
})();
var statearr_13492_13560 = state_13471__$1;
(statearr_13492_13560[(2)] = null);

(statearr_13492_13560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13472 === (9))){
var inst_13450 = (state_13471[(8)]);
var state_13471__$1 = state_13471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13471__$1,(11),out,inst_13450);
} else {
if((state_val_13472 === (5))){
var inst_13450 = (state_13471[(8)]);
var inst_13446 = (state_13471[(7)]);
var inst_13454 = cljs.core._EQ_.call(null,inst_13450,inst_13446);
var state_13471__$1 = state_13471;
if(inst_13454){
var statearr_13494_13563 = state_13471__$1;
(statearr_13494_13563[(1)] = (8));

} else {
var statearr_13495_13564 = state_13471__$1;
(statearr_13495_13564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13472 === (10))){
var inst_13463 = (state_13471[(2)]);
var state_13471__$1 = state_13471;
var statearr_13498_13567 = state_13471__$1;
(statearr_13498_13567[(2)] = inst_13463);

(statearr_13498_13567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13472 === (8))){
var inst_13446 = (state_13471[(7)]);
var tmp13493 = inst_13446;
var inst_13446__$1 = tmp13493;
var state_13471__$1 = (function (){var statearr_13499 = state_13471;
(statearr_13499[(7)] = inst_13446__$1);

return statearr_13499;
})();
var statearr_13500_13570 = state_13471__$1;
(statearr_13500_13570[(2)] = null);

(statearr_13500_13570[(1)] = (2));


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
var cljs$core$async$state_machine__11581__auto__ = null;
var cljs$core$async$state_machine__11581__auto____0 = (function (){
var statearr_13502 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13502[(0)] = cljs$core$async$state_machine__11581__auto__);

(statearr_13502[(1)] = (1));

return statearr_13502;
});
var cljs$core$async$state_machine__11581__auto____1 = (function (state_13471){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_13471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e13504){var ex__11584__auto__ = e13504;
var statearr_13505_13574 = state_13471;
(statearr_13505_13574[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_13471[(4)]))){
var statearr_13507_13575 = state_13471;
(statearr_13507_13575[(1)] = cljs.core.first.call(null,(state_13471[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13576 = state_13471;
state_13471 = G__13576;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$state_machine__11581__auto__ = function(state_13471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11581__auto____1.call(this,state_13471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11581__auto____0;
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11581__auto____1;
return cljs$core$async$state_machine__11581__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_13509 = f__11784__auto__.call(null);
(statearr_13509[(6)] = c__11783__auto___13514);

return statearr_13509;
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
var G__13512 = arguments.length;
switch (G__13512) {
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
var c__11783__auto___13596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_13557){
var state_val_13558 = (state_13557[(1)]);
if((state_val_13558 === (7))){
var inst_13553 = (state_13557[(2)]);
var state_13557__$1 = state_13557;
var statearr_13559_13597 = state_13557__$1;
(statearr_13559_13597[(2)] = inst_13553);

(statearr_13559_13597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (1))){
var inst_13515 = (new Array(n));
var inst_13516 = inst_13515;
var inst_13517 = (0);
var state_13557__$1 = (function (){var statearr_13561 = state_13557;
(statearr_13561[(7)] = inst_13516);

(statearr_13561[(8)] = inst_13517);

return statearr_13561;
})();
var statearr_13562_13607 = state_13557__$1;
(statearr_13562_13607[(2)] = null);

(statearr_13562_13607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (4))){
var inst_13520 = (state_13557[(9)]);
var inst_13520__$1 = (state_13557[(2)]);
var inst_13522 = (inst_13520__$1 == null);
var inst_13523 = cljs.core.not.call(null,inst_13522);
var state_13557__$1 = (function (){var statearr_13565 = state_13557;
(statearr_13565[(9)] = inst_13520__$1);

return statearr_13565;
})();
if(inst_13523){
var statearr_13566_13622 = state_13557__$1;
(statearr_13566_13622[(1)] = (5));

} else {
var statearr_13568_13627 = state_13557__$1;
(statearr_13568_13627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (15))){
var inst_13546 = (state_13557[(2)]);
var state_13557__$1 = state_13557;
var statearr_13569_13633 = state_13557__$1;
(statearr_13569_13633[(2)] = inst_13546);

(statearr_13569_13633[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (13))){
var state_13557__$1 = state_13557;
var statearr_13571_13646 = state_13557__$1;
(statearr_13571_13646[(2)] = null);

(statearr_13571_13646[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (6))){
var inst_13517 = (state_13557[(8)]);
var inst_13541 = (inst_13517 > (0));
var state_13557__$1 = state_13557;
if(cljs.core.truth_(inst_13541)){
var statearr_13572_13649 = state_13557__$1;
(statearr_13572_13649[(1)] = (12));

} else {
var statearr_13573_13650 = state_13557__$1;
(statearr_13573_13650[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (3))){
var inst_13555 = (state_13557[(2)]);
var state_13557__$1 = state_13557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13557__$1,inst_13555);
} else {
if((state_val_13558 === (12))){
var inst_13516 = (state_13557[(7)]);
var inst_13544 = cljs.core.vec.call(null,inst_13516);
var state_13557__$1 = state_13557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13557__$1,(15),out,inst_13544);
} else {
if((state_val_13558 === (2))){
var state_13557__$1 = state_13557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13557__$1,(4),ch);
} else {
if((state_val_13558 === (11))){
var inst_13534 = (state_13557[(2)]);
var inst_13535 = (new Array(n));
var inst_13516 = inst_13535;
var inst_13517 = (0);
var state_13557__$1 = (function (){var statearr_13577 = state_13557;
(statearr_13577[(10)] = inst_13534);

(statearr_13577[(7)] = inst_13516);

(statearr_13577[(8)] = inst_13517);

return statearr_13577;
})();
var statearr_13578_13653 = state_13557__$1;
(statearr_13578_13653[(2)] = null);

(statearr_13578_13653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (9))){
var inst_13516 = (state_13557[(7)]);
var inst_13532 = cljs.core.vec.call(null,inst_13516);
var state_13557__$1 = state_13557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13557__$1,(11),out,inst_13532);
} else {
if((state_val_13558 === (5))){
var inst_13516 = (state_13557[(7)]);
var inst_13517 = (state_13557[(8)]);
var inst_13520 = (state_13557[(9)]);
var inst_13526 = (state_13557[(11)]);
var inst_13525 = (inst_13516[inst_13517] = inst_13520);
var inst_13526__$1 = (inst_13517 + (1));
var inst_13527 = (inst_13526__$1 < n);
var state_13557__$1 = (function (){var statearr_13579 = state_13557;
(statearr_13579[(12)] = inst_13525);

(statearr_13579[(11)] = inst_13526__$1);

return statearr_13579;
})();
if(cljs.core.truth_(inst_13527)){
var statearr_13580_13658 = state_13557__$1;
(statearr_13580_13658[(1)] = (8));

} else {
var statearr_13581_13659 = state_13557__$1;
(statearr_13581_13659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (14))){
var inst_13550 = (state_13557[(2)]);
var inst_13551 = cljs.core.async.close_BANG_.call(null,out);
var state_13557__$1 = (function (){var statearr_13583 = state_13557;
(statearr_13583[(13)] = inst_13550);

return statearr_13583;
})();
var statearr_13584_13660 = state_13557__$1;
(statearr_13584_13660[(2)] = inst_13551);

(statearr_13584_13660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (10))){
var inst_13538 = (state_13557[(2)]);
var state_13557__$1 = state_13557;
var statearr_13585_13662 = state_13557__$1;
(statearr_13585_13662[(2)] = inst_13538);

(statearr_13585_13662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (8))){
var inst_13516 = (state_13557[(7)]);
var inst_13526 = (state_13557[(11)]);
var tmp13582 = inst_13516;
var inst_13516__$1 = tmp13582;
var inst_13517 = inst_13526;
var state_13557__$1 = (function (){var statearr_13586 = state_13557;
(statearr_13586[(7)] = inst_13516__$1);

(statearr_13586[(8)] = inst_13517);

return statearr_13586;
})();
var statearr_13587_13665 = state_13557__$1;
(statearr_13587_13665[(2)] = null);

(statearr_13587_13665[(1)] = (2));


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
var cljs$core$async$state_machine__11581__auto__ = null;
var cljs$core$async$state_machine__11581__auto____0 = (function (){
var statearr_13588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13588[(0)] = cljs$core$async$state_machine__11581__auto__);

(statearr_13588[(1)] = (1));

return statearr_13588;
});
var cljs$core$async$state_machine__11581__auto____1 = (function (state_13557){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_13557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e13589){var ex__11584__auto__ = e13589;
var statearr_13590_13669 = state_13557;
(statearr_13590_13669[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_13557[(4)]))){
var statearr_13591_13670 = state_13557;
(statearr_13591_13670[(1)] = cljs.core.first.call(null,(state_13557[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13671 = state_13557;
state_13557 = G__13671;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$state_machine__11581__auto__ = function(state_13557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11581__auto____1.call(this,state_13557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11581__auto____0;
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11581__auto____1;
return cljs$core$async$state_machine__11581__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_13592 = f__11784__auto__.call(null);
(statearr_13592[(6)] = c__11783__auto___13596);

return statearr_13592;
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
var G__13594 = arguments.length;
switch (G__13594) {
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
var c__11783__auto___13691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_13647){
var state_val_13648 = (state_13647[(1)]);
if((state_val_13648 === (7))){
var inst_13642 = (state_13647[(2)]);
var state_13647__$1 = state_13647;
var statearr_13651_13692 = state_13647__$1;
(statearr_13651_13692[(2)] = inst_13642);

(statearr_13651_13692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13648 === (1))){
var inst_13598 = [];
var inst_13599 = inst_13598;
var inst_13600 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13647__$1 = (function (){var statearr_13652 = state_13647;
(statearr_13652[(7)] = inst_13599);

(statearr_13652[(8)] = inst_13600);

return statearr_13652;
})();
var statearr_13654_13693 = state_13647__$1;
(statearr_13654_13693[(2)] = null);

(statearr_13654_13693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13648 === (4))){
var inst_13603 = (state_13647[(9)]);
var inst_13603__$1 = (state_13647[(2)]);
var inst_13604 = (inst_13603__$1 == null);
var inst_13605 = cljs.core.not.call(null,inst_13604);
var state_13647__$1 = (function (){var statearr_13655 = state_13647;
(statearr_13655[(9)] = inst_13603__$1);

return statearr_13655;
})();
if(inst_13605){
var statearr_13656_13694 = state_13647__$1;
(statearr_13656_13694[(1)] = (5));

} else {
var statearr_13657_13695 = state_13647__$1;
(statearr_13657_13695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13648 === (15))){
var inst_13599 = (state_13647[(7)]);
var inst_13634 = cljs.core.vec.call(null,inst_13599);
var state_13647__$1 = state_13647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13647__$1,(18),out,inst_13634);
} else {
if((state_val_13648 === (13))){
var inst_13628 = (state_13647[(2)]);
var state_13647__$1 = state_13647;
var statearr_13661_13696 = state_13647__$1;
(statearr_13661_13696[(2)] = inst_13628);

(statearr_13661_13696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13648 === (6))){
var inst_13599 = (state_13647[(7)]);
var inst_13630 = inst_13599.length;
var inst_13631 = (inst_13630 > (0));
var state_13647__$1 = state_13647;
if(cljs.core.truth_(inst_13631)){
var statearr_13663_13697 = state_13647__$1;
(statearr_13663_13697[(1)] = (15));

} else {
var statearr_13664_13698 = state_13647__$1;
(statearr_13664_13698[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13648 === (17))){
var inst_13639 = (state_13647[(2)]);
var inst_13640 = cljs.core.async.close_BANG_.call(null,out);
var state_13647__$1 = (function (){var statearr_13666 = state_13647;
(statearr_13666[(10)] = inst_13639);

return statearr_13666;
})();
var statearr_13667_13699 = state_13647__$1;
(statearr_13667_13699[(2)] = inst_13640);

(statearr_13667_13699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13648 === (3))){
var inst_13644 = (state_13647[(2)]);
var state_13647__$1 = state_13647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13647__$1,inst_13644);
} else {
if((state_val_13648 === (12))){
var inst_13599 = (state_13647[(7)]);
var inst_13619 = cljs.core.vec.call(null,inst_13599);
var state_13647__$1 = state_13647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13647__$1,(14),out,inst_13619);
} else {
if((state_val_13648 === (2))){
var state_13647__$1 = state_13647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13647__$1,(4),ch);
} else {
if((state_val_13648 === (11))){
var inst_13599 = (state_13647[(7)]);
var inst_13603 = (state_13647[(9)]);
var inst_13608 = (state_13647[(11)]);
var inst_13616 = inst_13599.push(inst_13603);
var tmp13668 = inst_13599;
var inst_13599__$1 = tmp13668;
var inst_13600 = inst_13608;
var state_13647__$1 = (function (){var statearr_13672 = state_13647;
(statearr_13672[(12)] = inst_13616);

(statearr_13672[(7)] = inst_13599__$1);

(statearr_13672[(8)] = inst_13600);

return statearr_13672;
})();
var statearr_13673_13700 = state_13647__$1;
(statearr_13673_13700[(2)] = null);

(statearr_13673_13700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13648 === (9))){
var inst_13600 = (state_13647[(8)]);
var inst_13612 = cljs.core.keyword_identical_QMARK_.call(null,inst_13600,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_13647__$1 = state_13647;
var statearr_13674_13701 = state_13647__$1;
(statearr_13674_13701[(2)] = inst_13612);

(statearr_13674_13701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13648 === (5))){
var inst_13603 = (state_13647[(9)]);
var inst_13608 = (state_13647[(11)]);
var inst_13600 = (state_13647[(8)]);
var inst_13609 = (state_13647[(13)]);
var inst_13608__$1 = f.call(null,inst_13603);
var inst_13609__$1 = cljs.core._EQ_.call(null,inst_13608__$1,inst_13600);
var state_13647__$1 = (function (){var statearr_13675 = state_13647;
(statearr_13675[(11)] = inst_13608__$1);

(statearr_13675[(13)] = inst_13609__$1);

return statearr_13675;
})();
if(inst_13609__$1){
var statearr_13676_13702 = state_13647__$1;
(statearr_13676_13702[(1)] = (8));

} else {
var statearr_13677_13703 = state_13647__$1;
(statearr_13677_13703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13648 === (14))){
var inst_13603 = (state_13647[(9)]);
var inst_13608 = (state_13647[(11)]);
var inst_13621 = (state_13647[(2)]);
var inst_13623 = [];
var inst_13624 = inst_13623.push(inst_13603);
var inst_13599 = inst_13623;
var inst_13600 = inst_13608;
var state_13647__$1 = (function (){var statearr_13678 = state_13647;
(statearr_13678[(14)] = inst_13621);

(statearr_13678[(15)] = inst_13624);

(statearr_13678[(7)] = inst_13599);

(statearr_13678[(8)] = inst_13600);

return statearr_13678;
})();
var statearr_13679_13704 = state_13647__$1;
(statearr_13679_13704[(2)] = null);

(statearr_13679_13704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13648 === (16))){
var state_13647__$1 = state_13647;
var statearr_13680_13705 = state_13647__$1;
(statearr_13680_13705[(2)] = null);

(statearr_13680_13705[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13648 === (10))){
var inst_13614 = (state_13647[(2)]);
var state_13647__$1 = state_13647;
if(cljs.core.truth_(inst_13614)){
var statearr_13681_13706 = state_13647__$1;
(statearr_13681_13706[(1)] = (11));

} else {
var statearr_13682_13707 = state_13647__$1;
(statearr_13682_13707[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13648 === (18))){
var inst_13636 = (state_13647[(2)]);
var state_13647__$1 = state_13647;
var statearr_13683_13708 = state_13647__$1;
(statearr_13683_13708[(2)] = inst_13636);

(statearr_13683_13708[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13648 === (8))){
var inst_13609 = (state_13647[(13)]);
var state_13647__$1 = state_13647;
var statearr_13684_13709 = state_13647__$1;
(statearr_13684_13709[(2)] = inst_13609);

(statearr_13684_13709[(1)] = (10));


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
var cljs$core$async$state_machine__11581__auto__ = null;
var cljs$core$async$state_machine__11581__auto____0 = (function (){
var statearr_13685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13685[(0)] = cljs$core$async$state_machine__11581__auto__);

(statearr_13685[(1)] = (1));

return statearr_13685;
});
var cljs$core$async$state_machine__11581__auto____1 = (function (state_13647){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_13647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e13686){var ex__11584__auto__ = e13686;
var statearr_13687_13710 = state_13647;
(statearr_13687_13710[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_13647[(4)]))){
var statearr_13688_13711 = state_13647;
(statearr_13688_13711[(1)] = cljs.core.first.call(null,(state_13647[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13712 = state_13647;
state_13647 = G__13712;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
cljs$core$async$state_machine__11581__auto__ = function(state_13647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11581__auto____1.call(this,state_13647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11581__auto____0;
cljs$core$async$state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11581__auto____1;
return cljs$core$async$state_machine__11581__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_13689 = f__11784__auto__.call(null);
(statearr_13689[(6)] = c__11783__auto___13691);

return statearr_13689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
