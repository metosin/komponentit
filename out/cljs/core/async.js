// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26888 = arguments.length;
switch (G__26888) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26889 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26889 = (function (f,blockable,meta26890){
this.f = f;
this.blockable = blockable;
this.meta26890 = meta26890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26891,meta26890__$1){
var self__ = this;
var _26891__$1 = this;
return (new cljs.core.async.t_cljs$core$async26889(self__.f,self__.blockable,meta26890__$1));
}));

(cljs.core.async.t_cljs$core$async26889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26891){
var self__ = this;
var _26891__$1 = this;
return self__.meta26890;
}));

(cljs.core.async.t_cljs$core$async26889.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26889.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async26889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async26889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta26890], null);
}));

(cljs.core.async.t_cljs$core$async26889.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26889");

(cljs.core.async.t_cljs$core$async26889.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async26889");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26889.
 */
cljs.core.async.__GT_t_cljs$core$async26889 = (function cljs$core$async$__GT_t_cljs$core$async26889(f__$1,blockable__$1,meta26890){
return (new cljs.core.async.t_cljs$core$async26889(f__$1,blockable__$1,meta26890));
});

}

return (new cljs.core.async.t_cljs$core$async26889(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__26895 = arguments.length;
switch (G__26895) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__26898 = arguments.length;
switch (G__26898) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__26901 = arguments.length;
switch (G__26901) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_26903 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26903) : fn1.call(null,val_26903));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26903) : fn1.call(null,val_26903));
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26905 = arguments.length;
switch (G__26905) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___26907 = n;
var x_26908 = (0);
while(true){
if((x_26908 < n__4666__auto___26907)){
(a[x_26908] = (0));

var G__26909 = (x_26908 + (1));
x_26908 = G__26909;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__26910 = (i + (1));
i = G__26910;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26911 = (function (flag,meta26912){
this.flag = flag;
this.meta26912 = meta26912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26913,meta26912__$1){
var self__ = this;
var _26913__$1 = this;
return (new cljs.core.async.t_cljs$core$async26911(self__.flag,meta26912__$1));
}));

(cljs.core.async.t_cljs$core$async26911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26913){
var self__ = this;
var _26913__$1 = this;
return self__.meta26912;
}));

(cljs.core.async.t_cljs$core$async26911.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26911.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async26911.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26911.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta26912], null);
}));

(cljs.core.async.t_cljs$core$async26911.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26911");

(cljs.core.async.t_cljs$core$async26911.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async26911");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26911.
 */
cljs.core.async.__GT_t_cljs$core$async26911 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26911(flag__$1,meta26912){
return (new cljs.core.async.t_cljs$core$async26911(flag__$1,meta26912));
});

}

return (new cljs.core.async.t_cljs$core$async26911(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26914 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26914 = (function (flag,cb,meta26915){
this.flag = flag;
this.cb = cb;
this.meta26915 = meta26915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26916,meta26915__$1){
var self__ = this;
var _26916__$1 = this;
return (new cljs.core.async.t_cljs$core$async26914(self__.flag,self__.cb,meta26915__$1));
}));

(cljs.core.async.t_cljs$core$async26914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26916){
var self__ = this;
var _26916__$1 = this;
return self__.meta26915;
}));

(cljs.core.async.t_cljs$core$async26914.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async26914.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta26915], null);
}));

(cljs.core.async.t_cljs$core$async26914.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26914");

(cljs.core.async.t_cljs$core$async26914.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async26914");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26914.
 */
cljs.core.async.__GT_t_cljs$core$async26914 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26914(flag__$1,cb__$1,meta26915){
return (new cljs.core.async.t_cljs$core$async26914(flag__$1,cb__$1,meta26915));
});

}

return (new cljs.core.async.t_cljs$core$async26914(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26917_SHARP_){
var G__26919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26917_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26919) : fret.call(null,G__26919));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26918_SHARP_){
var G__26920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26918_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26920) : fret.call(null,G__26920));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26921 = (i + (1));
i = G__26921;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__4795__auto__ = [];
var len__4789__auto___26927 = arguments.length;
var i__4790__auto___26928 = (0);
while(true){
if((i__4790__auto___26928 < len__4789__auto___26927)){
args__4795__auto__.push((arguments[i__4790__auto___26928]));

var G__26929 = (i__4790__auto___26928 + (1));
i__4790__auto___26928 = G__26929;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26924){
var map__26925 = p__26924;
var map__26925__$1 = (((((!((map__26925 == null))))?(((((map__26925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26925):map__26925);
var opts = map__26925__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26922){
var G__26923 = cljs.core.first(seq26922);
var seq26922__$1 = cljs.core.next(seq26922);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26923,seq26922__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__26931 = arguments.length;
switch (G__26931) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26842__auto___26977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_26955){
var state_val_26956 = (state_26955[(1)]);
if((state_val_26956 === (7))){
var inst_26951 = (state_26955[(2)]);
var state_26955__$1 = state_26955;
var statearr_26957_26978 = state_26955__$1;
(statearr_26957_26978[(2)] = inst_26951);

(statearr_26957_26978[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26956 === (1))){
var state_26955__$1 = state_26955;
var statearr_26958_26979 = state_26955__$1;
(statearr_26958_26979[(2)] = null);

(statearr_26958_26979[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26956 === (4))){
var inst_26934 = (state_26955[(7)]);
var inst_26934__$1 = (state_26955[(2)]);
var inst_26935 = (inst_26934__$1 == null);
var state_26955__$1 = (function (){var statearr_26959 = state_26955;
(statearr_26959[(7)] = inst_26934__$1);

return statearr_26959;
})();
if(cljs.core.truth_(inst_26935)){
var statearr_26960_26980 = state_26955__$1;
(statearr_26960_26980[(1)] = (5));

} else {
var statearr_26961_26981 = state_26955__$1;
(statearr_26961_26981[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26956 === (13))){
var state_26955__$1 = state_26955;
var statearr_26962_26982 = state_26955__$1;
(statearr_26962_26982[(2)] = null);

(statearr_26962_26982[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26956 === (6))){
var inst_26934 = (state_26955[(7)]);
var state_26955__$1 = state_26955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26955__$1,(11),to,inst_26934);
} else {
if((state_val_26956 === (3))){
var inst_26953 = (state_26955[(2)]);
var state_26955__$1 = state_26955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26955__$1,inst_26953);
} else {
if((state_val_26956 === (12))){
var state_26955__$1 = state_26955;
var statearr_26963_26983 = state_26955__$1;
(statearr_26963_26983[(2)] = null);

(statearr_26963_26983[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26956 === (2))){
var state_26955__$1 = state_26955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26955__$1,(4),from);
} else {
if((state_val_26956 === (11))){
var inst_26944 = (state_26955[(2)]);
var state_26955__$1 = state_26955;
if(cljs.core.truth_(inst_26944)){
var statearr_26964_26984 = state_26955__$1;
(statearr_26964_26984[(1)] = (12));

} else {
var statearr_26965_26985 = state_26955__$1;
(statearr_26965_26985[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26956 === (9))){
var state_26955__$1 = state_26955;
var statearr_26966_26986 = state_26955__$1;
(statearr_26966_26986[(2)] = null);

(statearr_26966_26986[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26956 === (5))){
var state_26955__$1 = state_26955;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26967_26987 = state_26955__$1;
(statearr_26967_26987[(1)] = (8));

} else {
var statearr_26968_26988 = state_26955__$1;
(statearr_26968_26988[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26956 === (14))){
var inst_26949 = (state_26955[(2)]);
var state_26955__$1 = state_26955;
var statearr_26969_26989 = state_26955__$1;
(statearr_26969_26989[(2)] = inst_26949);

(statearr_26969_26989[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26956 === (10))){
var inst_26941 = (state_26955[(2)]);
var state_26955__$1 = state_26955;
var statearr_26970_26990 = state_26955__$1;
(statearr_26970_26990[(2)] = inst_26941);

(statearr_26970_26990[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26956 === (8))){
var inst_26938 = cljs.core.async.close_BANG_(to);
var state_26955__$1 = state_26955;
var statearr_26971_26991 = state_26955__$1;
(statearr_26971_26991[(2)] = inst_26938);

(statearr_26971_26991[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__26738__auto__ = null;
var cljs$core$async$state_machine__26738__auto____0 = (function (){
var statearr_26972 = [null,null,null,null,null,null,null,null];
(statearr_26972[(0)] = cljs$core$async$state_machine__26738__auto__);

(statearr_26972[(1)] = (1));

return statearr_26972;
});
var cljs$core$async$state_machine__26738__auto____1 = (function (state_26955){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_26955);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e26973){if((e26973 instanceof Object)){
var ex__26741__auto__ = e26973;
var statearr_26974_26992 = state_26955;
(statearr_26974_26992[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26955);

return cljs.core.cst$kw$recur;
} else {
throw e26973;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__26993 = state_26955;
state_26955 = G__26993;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$state_machine__26738__auto__ = function(state_26955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26738__auto____1.call(this,state_26955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26738__auto____0;
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26738__auto____1;
return cljs$core$async$state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_26975 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_26975[(6)] = c__26842__auto___26977);

return statearr_26975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__26994){
var vec__26995 = p__26994;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26995,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26995,(1),null);
var job = vec__26995;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__26842__auto___27166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_27002){
var state_val_27003 = (state_27002[(1)]);
if((state_val_27003 === (1))){
var state_27002__$1 = state_27002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27002__$1,(2),res,v);
} else {
if((state_val_27003 === (2))){
var inst_26999 = (state_27002[(2)]);
var inst_27000 = cljs.core.async.close_BANG_(res);
var state_27002__$1 = (function (){var statearr_27004 = state_27002;
(statearr_27004[(7)] = inst_26999);

return statearr_27004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27002__$1,inst_27000);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____0 = (function (){
var statearr_27005 = [null,null,null,null,null,null,null,null];
(statearr_27005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__);

(statearr_27005[(1)] = (1));

return statearr_27005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____1 = (function (state_27002){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_27002);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e27006){if((e27006 instanceof Object)){
var ex__26741__auto__ = e27006;
var statearr_27007_27167 = state_27002;
(statearr_27007_27167[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27002);

return cljs.core.cst$kw$recur;
} else {
throw e27006;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__27168 = state_27002;
state_27002 = G__27168;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__ = function(state_27002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____1.call(this,state_27002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_27008 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_27008[(6)] = c__26842__auto___27166);

return statearr_27008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__27009){
var vec__27010 = p__27009;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27010,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27010,(1),null);
var job = vec__27010;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___27169 = n;
var __27170 = (0);
while(true){
if((__27170 < n__4666__auto___27169)){
var G__27013_27171 = type;
var G__27013_27172__$1 = (((G__27013_27171 instanceof cljs.core.Keyword))?G__27013_27171.fqn:null);
switch (G__27013_27172__$1) {
case "compute":
var c__26842__auto___27174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27170,c__26842__auto___27174,G__27013_27171,G__27013_27172__$1,n__4666__auto___27169,jobs,results,process,async){
return (function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = ((function (__27170,c__26842__auto___27174,G__27013_27171,G__27013_27172__$1,n__4666__auto___27169,jobs,results,process,async){
return (function (state_27026){
var state_val_27027 = (state_27026[(1)]);
if((state_val_27027 === (1))){
var state_27026__$1 = state_27026;
var statearr_27028_27175 = state_27026__$1;
(statearr_27028_27175[(2)] = null);

(statearr_27028_27175[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27027 === (2))){
var state_27026__$1 = state_27026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27026__$1,(4),jobs);
} else {
if((state_val_27027 === (3))){
var inst_27024 = (state_27026[(2)]);
var state_27026__$1 = state_27026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27026__$1,inst_27024);
} else {
if((state_val_27027 === (4))){
var inst_27016 = (state_27026[(2)]);
var inst_27017 = process(inst_27016);
var state_27026__$1 = state_27026;
if(cljs.core.truth_(inst_27017)){
var statearr_27029_27176 = state_27026__$1;
(statearr_27029_27176[(1)] = (5));

} else {
var statearr_27030_27177 = state_27026__$1;
(statearr_27030_27177[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27027 === (5))){
var state_27026__$1 = state_27026;
var statearr_27031_27178 = state_27026__$1;
(statearr_27031_27178[(2)] = null);

(statearr_27031_27178[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27027 === (6))){
var state_27026__$1 = state_27026;
var statearr_27032_27179 = state_27026__$1;
(statearr_27032_27179[(2)] = null);

(statearr_27032_27179[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27027 === (7))){
var inst_27022 = (state_27026[(2)]);
var state_27026__$1 = state_27026;
var statearr_27033_27180 = state_27026__$1;
(statearr_27033_27180[(2)] = inst_27022);

(statearr_27033_27180[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__27170,c__26842__auto___27174,G__27013_27171,G__27013_27172__$1,n__4666__auto___27169,jobs,results,process,async))
;
return ((function (__27170,switch__26737__auto__,c__26842__auto___27174,G__27013_27171,G__27013_27172__$1,n__4666__auto___27169,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____0 = (function (){
var statearr_27034 = [null,null,null,null,null,null,null];
(statearr_27034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__);

(statearr_27034[(1)] = (1));

return statearr_27034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____1 = (function (state_27026){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_27026);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e27035){if((e27035 instanceof Object)){
var ex__26741__auto__ = e27035;
var statearr_27036_27181 = state_27026;
(statearr_27036_27181[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27026);

return cljs.core.cst$kw$recur;
} else {
throw e27035;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__27182 = state_27026;
state_27026 = G__27182;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__ = function(state_27026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____1.call(this,state_27026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__;
})()
;})(__27170,switch__26737__auto__,c__26842__auto___27174,G__27013_27171,G__27013_27172__$1,n__4666__auto___27169,jobs,results,process,async))
})();
var state__26844__auto__ = (function (){var statearr_27037 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_27037[(6)] = c__26842__auto___27174);

return statearr_27037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
});})(__27170,c__26842__auto___27174,G__27013_27171,G__27013_27172__$1,n__4666__auto___27169,jobs,results,process,async))
);


break;
case "async":
var c__26842__auto___27183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27170,c__26842__auto___27183,G__27013_27171,G__27013_27172__$1,n__4666__auto___27169,jobs,results,process,async){
return (function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = ((function (__27170,c__26842__auto___27183,G__27013_27171,G__27013_27172__$1,n__4666__auto___27169,jobs,results,process,async){
return (function (state_27050){
var state_val_27051 = (state_27050[(1)]);
if((state_val_27051 === (1))){
var state_27050__$1 = state_27050;
var statearr_27052_27184 = state_27050__$1;
(statearr_27052_27184[(2)] = null);

(statearr_27052_27184[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27051 === (2))){
var state_27050__$1 = state_27050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27050__$1,(4),jobs);
} else {
if((state_val_27051 === (3))){
var inst_27048 = (state_27050[(2)]);
var state_27050__$1 = state_27050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27050__$1,inst_27048);
} else {
if((state_val_27051 === (4))){
var inst_27040 = (state_27050[(2)]);
var inst_27041 = async(inst_27040);
var state_27050__$1 = state_27050;
if(cljs.core.truth_(inst_27041)){
var statearr_27053_27185 = state_27050__$1;
(statearr_27053_27185[(1)] = (5));

} else {
var statearr_27054_27186 = state_27050__$1;
(statearr_27054_27186[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27051 === (5))){
var state_27050__$1 = state_27050;
var statearr_27055_27187 = state_27050__$1;
(statearr_27055_27187[(2)] = null);

(statearr_27055_27187[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27051 === (6))){
var state_27050__$1 = state_27050;
var statearr_27056_27188 = state_27050__$1;
(statearr_27056_27188[(2)] = null);

(statearr_27056_27188[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27051 === (7))){
var inst_27046 = (state_27050[(2)]);
var state_27050__$1 = state_27050;
var statearr_27057_27189 = state_27050__$1;
(statearr_27057_27189[(2)] = inst_27046);

(statearr_27057_27189[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__27170,c__26842__auto___27183,G__27013_27171,G__27013_27172__$1,n__4666__auto___27169,jobs,results,process,async))
;
return ((function (__27170,switch__26737__auto__,c__26842__auto___27183,G__27013_27171,G__27013_27172__$1,n__4666__auto___27169,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____0 = (function (){
var statearr_27058 = [null,null,null,null,null,null,null];
(statearr_27058[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__);

(statearr_27058[(1)] = (1));

return statearr_27058;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____1 = (function (state_27050){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_27050);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e27059){if((e27059 instanceof Object)){
var ex__26741__auto__ = e27059;
var statearr_27060_27190 = state_27050;
(statearr_27060_27190[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27050);

return cljs.core.cst$kw$recur;
} else {
throw e27059;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__27191 = state_27050;
state_27050 = G__27191;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__ = function(state_27050){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____1.call(this,state_27050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__;
})()
;})(__27170,switch__26737__auto__,c__26842__auto___27183,G__27013_27171,G__27013_27172__$1,n__4666__auto___27169,jobs,results,process,async))
})();
var state__26844__auto__ = (function (){var statearr_27061 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_27061[(6)] = c__26842__auto___27183);

return statearr_27061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
});})(__27170,c__26842__auto___27183,G__27013_27171,G__27013_27172__$1,n__4666__auto___27169,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27013_27172__$1)].join('')));

}

var G__27192 = (__27170 + (1));
__27170 = G__27192;
continue;
} else {
}
break;
}

var c__26842__auto___27193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_27083){
var state_val_27084 = (state_27083[(1)]);
if((state_val_27084 === (1))){
var state_27083__$1 = state_27083;
var statearr_27085_27194 = state_27083__$1;
(statearr_27085_27194[(2)] = null);

(statearr_27085_27194[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27084 === (2))){
var state_27083__$1 = state_27083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27083__$1,(4),from);
} else {
if((state_val_27084 === (3))){
var inst_27081 = (state_27083[(2)]);
var state_27083__$1 = state_27083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27083__$1,inst_27081);
} else {
if((state_val_27084 === (4))){
var inst_27064 = (state_27083[(7)]);
var inst_27064__$1 = (state_27083[(2)]);
var inst_27065 = (inst_27064__$1 == null);
var state_27083__$1 = (function (){var statearr_27086 = state_27083;
(statearr_27086[(7)] = inst_27064__$1);

return statearr_27086;
})();
if(cljs.core.truth_(inst_27065)){
var statearr_27087_27195 = state_27083__$1;
(statearr_27087_27195[(1)] = (5));

} else {
var statearr_27088_27196 = state_27083__$1;
(statearr_27088_27196[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27084 === (5))){
var inst_27067 = cljs.core.async.close_BANG_(jobs);
var state_27083__$1 = state_27083;
var statearr_27089_27197 = state_27083__$1;
(statearr_27089_27197[(2)] = inst_27067);

(statearr_27089_27197[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27084 === (6))){
var inst_27064 = (state_27083[(7)]);
var inst_27069 = (state_27083[(8)]);
var inst_27069__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_27070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27071 = [inst_27064,inst_27069__$1];
var inst_27072 = (new cljs.core.PersistentVector(null,2,(5),inst_27070,inst_27071,null));
var state_27083__$1 = (function (){var statearr_27090 = state_27083;
(statearr_27090[(8)] = inst_27069__$1);

return statearr_27090;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27083__$1,(8),jobs,inst_27072);
} else {
if((state_val_27084 === (7))){
var inst_27079 = (state_27083[(2)]);
var state_27083__$1 = state_27083;
var statearr_27091_27198 = state_27083__$1;
(statearr_27091_27198[(2)] = inst_27079);

(statearr_27091_27198[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27084 === (8))){
var inst_27069 = (state_27083[(8)]);
var inst_27074 = (state_27083[(2)]);
var state_27083__$1 = (function (){var statearr_27092 = state_27083;
(statearr_27092[(9)] = inst_27074);

return statearr_27092;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27083__$1,(9),results,inst_27069);
} else {
if((state_val_27084 === (9))){
var inst_27076 = (state_27083[(2)]);
var state_27083__$1 = (function (){var statearr_27093 = state_27083;
(statearr_27093[(10)] = inst_27076);

return statearr_27093;
})();
var statearr_27094_27199 = state_27083__$1;
(statearr_27094_27199[(2)] = null);

(statearr_27094_27199[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____0 = (function (){
var statearr_27095 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27095[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__);

(statearr_27095[(1)] = (1));

return statearr_27095;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____1 = (function (state_27083){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_27083);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e27096){if((e27096 instanceof Object)){
var ex__26741__auto__ = e27096;
var statearr_27097_27200 = state_27083;
(statearr_27097_27200[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27083);

return cljs.core.cst$kw$recur;
} else {
throw e27096;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__27201 = state_27083;
state_27083 = G__27201;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__ = function(state_27083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____1.call(this,state_27083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_27098 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_27098[(6)] = c__26842__auto___27193);

return statearr_27098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
}));


var c__26842__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_27136){
var state_val_27137 = (state_27136[(1)]);
if((state_val_27137 === (7))){
var inst_27132 = (state_27136[(2)]);
var state_27136__$1 = state_27136;
var statearr_27138_27202 = state_27136__$1;
(statearr_27138_27202[(2)] = inst_27132);

(statearr_27138_27202[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27137 === (20))){
var state_27136__$1 = state_27136;
var statearr_27139_27203 = state_27136__$1;
(statearr_27139_27203[(2)] = null);

(statearr_27139_27203[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27137 === (1))){
var state_27136__$1 = state_27136;
var statearr_27140_27204 = state_27136__$1;
(statearr_27140_27204[(2)] = null);

(statearr_27140_27204[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27137 === (4))){
var inst_27101 = (state_27136[(7)]);
var inst_27101__$1 = (state_27136[(2)]);
var inst_27102 = (inst_27101__$1 == null);
var state_27136__$1 = (function (){var statearr_27141 = state_27136;
(statearr_27141[(7)] = inst_27101__$1);

return statearr_27141;
})();
if(cljs.core.truth_(inst_27102)){
var statearr_27142_27205 = state_27136__$1;
(statearr_27142_27205[(1)] = (5));

} else {
var statearr_27143_27206 = state_27136__$1;
(statearr_27143_27206[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27137 === (15))){
var inst_27114 = (state_27136[(8)]);
var state_27136__$1 = state_27136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27136__$1,(18),to,inst_27114);
} else {
if((state_val_27137 === (21))){
var inst_27127 = (state_27136[(2)]);
var state_27136__$1 = state_27136;
var statearr_27144_27207 = state_27136__$1;
(statearr_27144_27207[(2)] = inst_27127);

(statearr_27144_27207[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27137 === (13))){
var inst_27129 = (state_27136[(2)]);
var state_27136__$1 = (function (){var statearr_27145 = state_27136;
(statearr_27145[(9)] = inst_27129);

return statearr_27145;
})();
var statearr_27146_27208 = state_27136__$1;
(statearr_27146_27208[(2)] = null);

(statearr_27146_27208[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27137 === (6))){
var inst_27101 = (state_27136[(7)]);
var state_27136__$1 = state_27136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27136__$1,(11),inst_27101);
} else {
if((state_val_27137 === (17))){
var inst_27122 = (state_27136[(2)]);
var state_27136__$1 = state_27136;
if(cljs.core.truth_(inst_27122)){
var statearr_27147_27209 = state_27136__$1;
(statearr_27147_27209[(1)] = (19));

} else {
var statearr_27148_27210 = state_27136__$1;
(statearr_27148_27210[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27137 === (3))){
var inst_27134 = (state_27136[(2)]);
var state_27136__$1 = state_27136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27136__$1,inst_27134);
} else {
if((state_val_27137 === (12))){
var inst_27111 = (state_27136[(10)]);
var state_27136__$1 = state_27136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27136__$1,(14),inst_27111);
} else {
if((state_val_27137 === (2))){
var state_27136__$1 = state_27136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27136__$1,(4),results);
} else {
if((state_val_27137 === (19))){
var state_27136__$1 = state_27136;
var statearr_27149_27211 = state_27136__$1;
(statearr_27149_27211[(2)] = null);

(statearr_27149_27211[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27137 === (11))){
var inst_27111 = (state_27136[(2)]);
var state_27136__$1 = (function (){var statearr_27150 = state_27136;
(statearr_27150[(10)] = inst_27111);

return statearr_27150;
})();
var statearr_27151_27212 = state_27136__$1;
(statearr_27151_27212[(2)] = null);

(statearr_27151_27212[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27137 === (9))){
var state_27136__$1 = state_27136;
var statearr_27152_27213 = state_27136__$1;
(statearr_27152_27213[(2)] = null);

(statearr_27152_27213[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27137 === (5))){
var state_27136__$1 = state_27136;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27153_27214 = state_27136__$1;
(statearr_27153_27214[(1)] = (8));

} else {
var statearr_27154_27215 = state_27136__$1;
(statearr_27154_27215[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27137 === (14))){
var inst_27114 = (state_27136[(8)]);
var inst_27114__$1 = (state_27136[(2)]);
var inst_27115 = (inst_27114__$1 == null);
var inst_27116 = cljs.core.not(inst_27115);
var state_27136__$1 = (function (){var statearr_27155 = state_27136;
(statearr_27155[(8)] = inst_27114__$1);

return statearr_27155;
})();
if(inst_27116){
var statearr_27156_27216 = state_27136__$1;
(statearr_27156_27216[(1)] = (15));

} else {
var statearr_27157_27217 = state_27136__$1;
(statearr_27157_27217[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27137 === (16))){
var state_27136__$1 = state_27136;
var statearr_27158_27218 = state_27136__$1;
(statearr_27158_27218[(2)] = false);

(statearr_27158_27218[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27137 === (10))){
var inst_27108 = (state_27136[(2)]);
var state_27136__$1 = state_27136;
var statearr_27159_27219 = state_27136__$1;
(statearr_27159_27219[(2)] = inst_27108);

(statearr_27159_27219[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27137 === (18))){
var inst_27119 = (state_27136[(2)]);
var state_27136__$1 = state_27136;
var statearr_27160_27220 = state_27136__$1;
(statearr_27160_27220[(2)] = inst_27119);

(statearr_27160_27220[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27137 === (8))){
var inst_27105 = cljs.core.async.close_BANG_(to);
var state_27136__$1 = state_27136;
var statearr_27161_27221 = state_27136__$1;
(statearr_27161_27221[(2)] = inst_27105);

(statearr_27161_27221[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____0 = (function (){
var statearr_27162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27162[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__);

(statearr_27162[(1)] = (1));

return statearr_27162;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____1 = (function (state_27136){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_27136);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e27163){if((e27163 instanceof Object)){
var ex__26741__auto__ = e27163;
var statearr_27164_27222 = state_27136;
(statearr_27164_27222[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27136);

return cljs.core.cst$kw$recur;
} else {
throw e27163;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__27223 = state_27136;
state_27136 = G__27223;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__ = function(state_27136){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____1.call(this,state_27136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_27165 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_27165[(6)] = c__26842__auto__);

return statearr_27165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
}));

return c__26842__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27225 = arguments.length;
switch (G__27225) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__27228 = arguments.length;
switch (G__27228) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__27231 = arguments.length;
switch (G__27231) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__26842__auto___27280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_27257){
var state_val_27258 = (state_27257[(1)]);
if((state_val_27258 === (7))){
var inst_27253 = (state_27257[(2)]);
var state_27257__$1 = state_27257;
var statearr_27259_27281 = state_27257__$1;
(statearr_27259_27281[(2)] = inst_27253);

(statearr_27259_27281[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27258 === (1))){
var state_27257__$1 = state_27257;
var statearr_27260_27282 = state_27257__$1;
(statearr_27260_27282[(2)] = null);

(statearr_27260_27282[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27258 === (4))){
var inst_27234 = (state_27257[(7)]);
var inst_27234__$1 = (state_27257[(2)]);
var inst_27235 = (inst_27234__$1 == null);
var state_27257__$1 = (function (){var statearr_27261 = state_27257;
(statearr_27261[(7)] = inst_27234__$1);

return statearr_27261;
})();
if(cljs.core.truth_(inst_27235)){
var statearr_27262_27283 = state_27257__$1;
(statearr_27262_27283[(1)] = (5));

} else {
var statearr_27263_27284 = state_27257__$1;
(statearr_27263_27284[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27258 === (13))){
var state_27257__$1 = state_27257;
var statearr_27264_27285 = state_27257__$1;
(statearr_27264_27285[(2)] = null);

(statearr_27264_27285[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27258 === (6))){
var inst_27234 = (state_27257[(7)]);
var inst_27240 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27234) : p.call(null,inst_27234));
var state_27257__$1 = state_27257;
if(cljs.core.truth_(inst_27240)){
var statearr_27265_27286 = state_27257__$1;
(statearr_27265_27286[(1)] = (9));

} else {
var statearr_27266_27287 = state_27257__$1;
(statearr_27266_27287[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27258 === (3))){
var inst_27255 = (state_27257[(2)]);
var state_27257__$1 = state_27257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27257__$1,inst_27255);
} else {
if((state_val_27258 === (12))){
var state_27257__$1 = state_27257;
var statearr_27267_27288 = state_27257__$1;
(statearr_27267_27288[(2)] = null);

(statearr_27267_27288[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27258 === (2))){
var state_27257__$1 = state_27257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27257__$1,(4),ch);
} else {
if((state_val_27258 === (11))){
var inst_27234 = (state_27257[(7)]);
var inst_27244 = (state_27257[(2)]);
var state_27257__$1 = state_27257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27257__$1,(8),inst_27244,inst_27234);
} else {
if((state_val_27258 === (9))){
var state_27257__$1 = state_27257;
var statearr_27268_27289 = state_27257__$1;
(statearr_27268_27289[(2)] = tc);

(statearr_27268_27289[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27258 === (5))){
var inst_27237 = cljs.core.async.close_BANG_(tc);
var inst_27238 = cljs.core.async.close_BANG_(fc);
var state_27257__$1 = (function (){var statearr_27269 = state_27257;
(statearr_27269[(8)] = inst_27237);

return statearr_27269;
})();
var statearr_27270_27290 = state_27257__$1;
(statearr_27270_27290[(2)] = inst_27238);

(statearr_27270_27290[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27258 === (14))){
var inst_27251 = (state_27257[(2)]);
var state_27257__$1 = state_27257;
var statearr_27271_27291 = state_27257__$1;
(statearr_27271_27291[(2)] = inst_27251);

(statearr_27271_27291[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27258 === (10))){
var state_27257__$1 = state_27257;
var statearr_27272_27292 = state_27257__$1;
(statearr_27272_27292[(2)] = fc);

(statearr_27272_27292[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27258 === (8))){
var inst_27246 = (state_27257[(2)]);
var state_27257__$1 = state_27257;
if(cljs.core.truth_(inst_27246)){
var statearr_27273_27293 = state_27257__$1;
(statearr_27273_27293[(1)] = (12));

} else {
var statearr_27274_27294 = state_27257__$1;
(statearr_27274_27294[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__26738__auto__ = null;
var cljs$core$async$state_machine__26738__auto____0 = (function (){
var statearr_27275 = [null,null,null,null,null,null,null,null,null];
(statearr_27275[(0)] = cljs$core$async$state_machine__26738__auto__);

(statearr_27275[(1)] = (1));

return statearr_27275;
});
var cljs$core$async$state_machine__26738__auto____1 = (function (state_27257){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_27257);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e27276){if((e27276 instanceof Object)){
var ex__26741__auto__ = e27276;
var statearr_27277_27295 = state_27257;
(statearr_27277_27295[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27257);

return cljs.core.cst$kw$recur;
} else {
throw e27276;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__27296 = state_27257;
state_27257 = G__27296;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$state_machine__26738__auto__ = function(state_27257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26738__auto____1.call(this,state_27257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26738__auto____0;
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26738__auto____1;
return cljs$core$async$state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_27278 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_27278[(6)] = c__26842__auto___27280);

return statearr_27278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
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
var c__26842__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_27317){
var state_val_27318 = (state_27317[(1)]);
if((state_val_27318 === (7))){
var inst_27313 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27319_27337 = state_27317__$1;
(statearr_27319_27337[(2)] = inst_27313);

(statearr_27319_27337[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27318 === (1))){
var inst_27297 = init;
var state_27317__$1 = (function (){var statearr_27320 = state_27317;
(statearr_27320[(7)] = inst_27297);

return statearr_27320;
})();
var statearr_27321_27338 = state_27317__$1;
(statearr_27321_27338[(2)] = null);

(statearr_27321_27338[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27318 === (4))){
var inst_27300 = (state_27317[(8)]);
var inst_27300__$1 = (state_27317[(2)]);
var inst_27301 = (inst_27300__$1 == null);
var state_27317__$1 = (function (){var statearr_27322 = state_27317;
(statearr_27322[(8)] = inst_27300__$1);

return statearr_27322;
})();
if(cljs.core.truth_(inst_27301)){
var statearr_27323_27339 = state_27317__$1;
(statearr_27323_27339[(1)] = (5));

} else {
var statearr_27324_27340 = state_27317__$1;
(statearr_27324_27340[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27318 === (6))){
var inst_27304 = (state_27317[(9)]);
var inst_27300 = (state_27317[(8)]);
var inst_27297 = (state_27317[(7)]);
var inst_27304__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_27297,inst_27300) : f.call(null,inst_27297,inst_27300));
var inst_27305 = cljs.core.reduced_QMARK_(inst_27304__$1);
var state_27317__$1 = (function (){var statearr_27325 = state_27317;
(statearr_27325[(9)] = inst_27304__$1);

return statearr_27325;
})();
if(inst_27305){
var statearr_27326_27341 = state_27317__$1;
(statearr_27326_27341[(1)] = (8));

} else {
var statearr_27327_27342 = state_27317__$1;
(statearr_27327_27342[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27318 === (3))){
var inst_27315 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27317__$1,inst_27315);
} else {
if((state_val_27318 === (2))){
var state_27317__$1 = state_27317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27317__$1,(4),ch);
} else {
if((state_val_27318 === (9))){
var inst_27304 = (state_27317[(9)]);
var inst_27297 = inst_27304;
var state_27317__$1 = (function (){var statearr_27328 = state_27317;
(statearr_27328[(7)] = inst_27297);

return statearr_27328;
})();
var statearr_27329_27343 = state_27317__$1;
(statearr_27329_27343[(2)] = null);

(statearr_27329_27343[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27318 === (5))){
var inst_27297 = (state_27317[(7)]);
var state_27317__$1 = state_27317;
var statearr_27330_27344 = state_27317__$1;
(statearr_27330_27344[(2)] = inst_27297);

(statearr_27330_27344[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27318 === (10))){
var inst_27311 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
var statearr_27331_27345 = state_27317__$1;
(statearr_27331_27345[(2)] = inst_27311);

(statearr_27331_27345[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27318 === (8))){
var inst_27304 = (state_27317[(9)]);
var inst_27307 = cljs.core.deref(inst_27304);
var state_27317__$1 = state_27317;
var statearr_27332_27346 = state_27317__$1;
(statearr_27332_27346[(2)] = inst_27307);

(statearr_27332_27346[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$reduce_$_state_machine__26738__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26738__auto____0 = (function (){
var statearr_27333 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27333[(0)] = cljs$core$async$reduce_$_state_machine__26738__auto__);

(statearr_27333[(1)] = (1));

return statearr_27333;
});
var cljs$core$async$reduce_$_state_machine__26738__auto____1 = (function (state_27317){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_27317);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e27334){if((e27334 instanceof Object)){
var ex__26741__auto__ = e27334;
var statearr_27335_27347 = state_27317;
(statearr_27335_27347[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27317);

return cljs.core.cst$kw$recur;
} else {
throw e27334;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__27348 = state_27317;
state_27317 = G__27348;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26738__auto__ = function(state_27317){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26738__auto____1.call(this,state_27317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26738__auto____0;
cljs$core$async$reduce_$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26738__auto____1;
return cljs$core$async$reduce_$_state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_27336 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_27336[(6)] = c__26842__auto__);

return statearr_27336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
}));

return c__26842__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__26842__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_27354){
var state_val_27355 = (state_27354[(1)]);
if((state_val_27355 === (1))){
var inst_27349 = cljs.core.async.reduce(f__$1,init,ch);
var state_27354__$1 = state_27354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27354__$1,(2),inst_27349);
} else {
if((state_val_27355 === (2))){
var inst_27351 = (state_27354[(2)]);
var inst_27352 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_27351) : f__$1.call(null,inst_27351));
var state_27354__$1 = state_27354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27354__$1,inst_27352);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26738__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26738__auto____0 = (function (){
var statearr_27356 = [null,null,null,null,null,null,null];
(statearr_27356[(0)] = cljs$core$async$transduce_$_state_machine__26738__auto__);

(statearr_27356[(1)] = (1));

return statearr_27356;
});
var cljs$core$async$transduce_$_state_machine__26738__auto____1 = (function (state_27354){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_27354);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e27357){if((e27357 instanceof Object)){
var ex__26741__auto__ = e27357;
var statearr_27358_27360 = state_27354;
(statearr_27358_27360[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27354);

return cljs.core.cst$kw$recur;
} else {
throw e27357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__27361 = state_27354;
state_27354 = G__27361;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26738__auto__ = function(state_27354){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26738__auto____1.call(this,state_27354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26738__auto____0;
cljs$core$async$transduce_$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26738__auto____1;
return cljs$core$async$transduce_$_state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_27359 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_27359[(6)] = c__26842__auto__);

return statearr_27359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
}));

return c__26842__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27363 = arguments.length;
switch (G__27363) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26842__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_27388){
var state_val_27389 = (state_27388[(1)]);
if((state_val_27389 === (7))){
var inst_27370 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
var statearr_27390_27411 = state_27388__$1;
(statearr_27390_27411[(2)] = inst_27370);

(statearr_27390_27411[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27389 === (1))){
var inst_27364 = cljs.core.seq(coll);
var inst_27365 = inst_27364;
var state_27388__$1 = (function (){var statearr_27391 = state_27388;
(statearr_27391[(7)] = inst_27365);

return statearr_27391;
})();
var statearr_27392_27412 = state_27388__$1;
(statearr_27392_27412[(2)] = null);

(statearr_27392_27412[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27389 === (4))){
var inst_27365 = (state_27388[(7)]);
var inst_27368 = cljs.core.first(inst_27365);
var state_27388__$1 = state_27388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27388__$1,(7),ch,inst_27368);
} else {
if((state_val_27389 === (13))){
var inst_27382 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
var statearr_27393_27413 = state_27388__$1;
(statearr_27393_27413[(2)] = inst_27382);

(statearr_27393_27413[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27389 === (6))){
var inst_27373 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
if(cljs.core.truth_(inst_27373)){
var statearr_27394_27414 = state_27388__$1;
(statearr_27394_27414[(1)] = (8));

} else {
var statearr_27395_27415 = state_27388__$1;
(statearr_27395_27415[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27389 === (3))){
var inst_27386 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27388__$1,inst_27386);
} else {
if((state_val_27389 === (12))){
var state_27388__$1 = state_27388;
var statearr_27396_27416 = state_27388__$1;
(statearr_27396_27416[(2)] = null);

(statearr_27396_27416[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27389 === (2))){
var inst_27365 = (state_27388[(7)]);
var state_27388__$1 = state_27388;
if(cljs.core.truth_(inst_27365)){
var statearr_27397_27417 = state_27388__$1;
(statearr_27397_27417[(1)] = (4));

} else {
var statearr_27398_27418 = state_27388__$1;
(statearr_27398_27418[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27389 === (11))){
var inst_27379 = cljs.core.async.close_BANG_(ch);
var state_27388__$1 = state_27388;
var statearr_27399_27419 = state_27388__$1;
(statearr_27399_27419[(2)] = inst_27379);

(statearr_27399_27419[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27389 === (9))){
var state_27388__$1 = state_27388;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27400_27420 = state_27388__$1;
(statearr_27400_27420[(1)] = (11));

} else {
var statearr_27401_27421 = state_27388__$1;
(statearr_27401_27421[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27389 === (5))){
var inst_27365 = (state_27388[(7)]);
var state_27388__$1 = state_27388;
var statearr_27402_27422 = state_27388__$1;
(statearr_27402_27422[(2)] = inst_27365);

(statearr_27402_27422[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27389 === (10))){
var inst_27384 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
var statearr_27403_27423 = state_27388__$1;
(statearr_27403_27423[(2)] = inst_27384);

(statearr_27403_27423[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27389 === (8))){
var inst_27365 = (state_27388[(7)]);
var inst_27375 = cljs.core.next(inst_27365);
var inst_27365__$1 = inst_27375;
var state_27388__$1 = (function (){var statearr_27404 = state_27388;
(statearr_27404[(7)] = inst_27365__$1);

return statearr_27404;
})();
var statearr_27405_27424 = state_27388__$1;
(statearr_27405_27424[(2)] = null);

(statearr_27405_27424[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__26738__auto__ = null;
var cljs$core$async$state_machine__26738__auto____0 = (function (){
var statearr_27406 = [null,null,null,null,null,null,null,null];
(statearr_27406[(0)] = cljs$core$async$state_machine__26738__auto__);

(statearr_27406[(1)] = (1));

return statearr_27406;
});
var cljs$core$async$state_machine__26738__auto____1 = (function (state_27388){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_27388);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e27407){if((e27407 instanceof Object)){
var ex__26741__auto__ = e27407;
var statearr_27408_27425 = state_27388;
(statearr_27408_27425[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27388);

return cljs.core.cst$kw$recur;
} else {
throw e27407;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__27426 = state_27388;
state_27388 = G__27426;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$state_machine__26738__auto__ = function(state_27388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26738__auto____1.call(this,state_27388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26738__auto____0;
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26738__auto____1;
return cljs$core$async$state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_27409 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_27409[(6)] = c__26842__auto__);

return statearr_27409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
}));

return c__26842__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27427 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27427 = (function (ch,cs,meta27428){
this.ch = ch;
this.cs = cs;
this.meta27428 = meta27428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27429,meta27428__$1){
var self__ = this;
var _27429__$1 = this;
return (new cljs.core.async.t_cljs$core$async27427(self__.ch,self__.cs,meta27428__$1));
}));

(cljs.core.async.t_cljs$core$async27427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27429){
var self__ = this;
var _27429__$1 = this;
return self__.meta27428;
}));

(cljs.core.async.t_cljs$core$async27427.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27427.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27427.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27427.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27427.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27427.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta27428], null);
}));

(cljs.core.async.t_cljs$core$async27427.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27427");

(cljs.core.async.t_cljs$core$async27427.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async27427");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27427.
 */
cljs.core.async.__GT_t_cljs$core$async27427 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27427(ch__$1,cs__$1,meta27428){
return (new cljs.core.async.t_cljs$core$async27427(ch__$1,cs__$1,meta27428));
});

}

return (new cljs.core.async.t_cljs$core$async27427(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__26842__auto___27649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_27564){
var state_val_27565 = (state_27564[(1)]);
if((state_val_27565 === (7))){
var inst_27560 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27566_27650 = state_27564__$1;
(statearr_27566_27650[(2)] = inst_27560);

(statearr_27566_27650[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (20))){
var inst_27463 = (state_27564[(7)]);
var inst_27475 = cljs.core.first(inst_27463);
var inst_27476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27475,(0),null);
var inst_27477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27475,(1),null);
var state_27564__$1 = (function (){var statearr_27567 = state_27564;
(statearr_27567[(8)] = inst_27476);

return statearr_27567;
})();
if(cljs.core.truth_(inst_27477)){
var statearr_27568_27651 = state_27564__$1;
(statearr_27568_27651[(1)] = (22));

} else {
var statearr_27569_27652 = state_27564__$1;
(statearr_27569_27652[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (27))){
var inst_27512 = (state_27564[(9)]);
var inst_27432 = (state_27564[(10)]);
var inst_27505 = (state_27564[(11)]);
var inst_27507 = (state_27564[(12)]);
var inst_27512__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27505,inst_27507);
var inst_27513 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27512__$1,inst_27432,done);
var state_27564__$1 = (function (){var statearr_27570 = state_27564;
(statearr_27570[(9)] = inst_27512__$1);

return statearr_27570;
})();
if(cljs.core.truth_(inst_27513)){
var statearr_27571_27653 = state_27564__$1;
(statearr_27571_27653[(1)] = (30));

} else {
var statearr_27572_27654 = state_27564__$1;
(statearr_27572_27654[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (1))){
var state_27564__$1 = state_27564;
var statearr_27573_27655 = state_27564__$1;
(statearr_27573_27655[(2)] = null);

(statearr_27573_27655[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (24))){
var inst_27463 = (state_27564[(7)]);
var inst_27482 = (state_27564[(2)]);
var inst_27483 = cljs.core.next(inst_27463);
var inst_27441 = inst_27483;
var inst_27442 = null;
var inst_27443 = (0);
var inst_27444 = (0);
var state_27564__$1 = (function (){var statearr_27574 = state_27564;
(statearr_27574[(13)] = inst_27443);

(statearr_27574[(14)] = inst_27482);

(statearr_27574[(15)] = inst_27444);

(statearr_27574[(16)] = inst_27441);

(statearr_27574[(17)] = inst_27442);

return statearr_27574;
})();
var statearr_27575_27656 = state_27564__$1;
(statearr_27575_27656[(2)] = null);

(statearr_27575_27656[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (39))){
var state_27564__$1 = state_27564;
var statearr_27579_27657 = state_27564__$1;
(statearr_27579_27657[(2)] = null);

(statearr_27579_27657[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (4))){
var inst_27432 = (state_27564[(10)]);
var inst_27432__$1 = (state_27564[(2)]);
var inst_27433 = (inst_27432__$1 == null);
var state_27564__$1 = (function (){var statearr_27580 = state_27564;
(statearr_27580[(10)] = inst_27432__$1);

return statearr_27580;
})();
if(cljs.core.truth_(inst_27433)){
var statearr_27581_27658 = state_27564__$1;
(statearr_27581_27658[(1)] = (5));

} else {
var statearr_27582_27659 = state_27564__$1;
(statearr_27582_27659[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (15))){
var inst_27443 = (state_27564[(13)]);
var inst_27444 = (state_27564[(15)]);
var inst_27441 = (state_27564[(16)]);
var inst_27442 = (state_27564[(17)]);
var inst_27459 = (state_27564[(2)]);
var inst_27460 = (inst_27444 + (1));
var tmp27576 = inst_27443;
var tmp27577 = inst_27441;
var tmp27578 = inst_27442;
var inst_27441__$1 = tmp27577;
var inst_27442__$1 = tmp27578;
var inst_27443__$1 = tmp27576;
var inst_27444__$1 = inst_27460;
var state_27564__$1 = (function (){var statearr_27583 = state_27564;
(statearr_27583[(13)] = inst_27443__$1);

(statearr_27583[(18)] = inst_27459);

(statearr_27583[(15)] = inst_27444__$1);

(statearr_27583[(16)] = inst_27441__$1);

(statearr_27583[(17)] = inst_27442__$1);

return statearr_27583;
})();
var statearr_27584_27660 = state_27564__$1;
(statearr_27584_27660[(2)] = null);

(statearr_27584_27660[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (21))){
var inst_27486 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27588_27661 = state_27564__$1;
(statearr_27588_27661[(2)] = inst_27486);

(statearr_27588_27661[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (31))){
var inst_27512 = (state_27564[(9)]);
var inst_27516 = done(null);
var inst_27517 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27512);
var state_27564__$1 = (function (){var statearr_27589 = state_27564;
(statearr_27589[(19)] = inst_27516);

return statearr_27589;
})();
var statearr_27590_27662 = state_27564__$1;
(statearr_27590_27662[(2)] = inst_27517);

(statearr_27590_27662[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (32))){
var inst_27506 = (state_27564[(20)]);
var inst_27504 = (state_27564[(21)]);
var inst_27505 = (state_27564[(11)]);
var inst_27507 = (state_27564[(12)]);
var inst_27519 = (state_27564[(2)]);
var inst_27520 = (inst_27507 + (1));
var tmp27585 = inst_27506;
var tmp27586 = inst_27504;
var tmp27587 = inst_27505;
var inst_27504__$1 = tmp27586;
var inst_27505__$1 = tmp27587;
var inst_27506__$1 = tmp27585;
var inst_27507__$1 = inst_27520;
var state_27564__$1 = (function (){var statearr_27591 = state_27564;
(statearr_27591[(20)] = inst_27506__$1);

(statearr_27591[(22)] = inst_27519);

(statearr_27591[(21)] = inst_27504__$1);

(statearr_27591[(11)] = inst_27505__$1);

(statearr_27591[(12)] = inst_27507__$1);

return statearr_27591;
})();
var statearr_27592_27663 = state_27564__$1;
(statearr_27592_27663[(2)] = null);

(statearr_27592_27663[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (40))){
var inst_27532 = (state_27564[(23)]);
var inst_27536 = done(null);
var inst_27537 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27532);
var state_27564__$1 = (function (){var statearr_27593 = state_27564;
(statearr_27593[(24)] = inst_27536);

return statearr_27593;
})();
var statearr_27594_27664 = state_27564__$1;
(statearr_27594_27664[(2)] = inst_27537);

(statearr_27594_27664[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (33))){
var inst_27523 = (state_27564[(25)]);
var inst_27525 = cljs.core.chunked_seq_QMARK_(inst_27523);
var state_27564__$1 = state_27564;
if(inst_27525){
var statearr_27595_27665 = state_27564__$1;
(statearr_27595_27665[(1)] = (36));

} else {
var statearr_27596_27666 = state_27564__$1;
(statearr_27596_27666[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (13))){
var inst_27453 = (state_27564[(26)]);
var inst_27456 = cljs.core.async.close_BANG_(inst_27453);
var state_27564__$1 = state_27564;
var statearr_27597_27667 = state_27564__$1;
(statearr_27597_27667[(2)] = inst_27456);

(statearr_27597_27667[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (22))){
var inst_27476 = (state_27564[(8)]);
var inst_27479 = cljs.core.async.close_BANG_(inst_27476);
var state_27564__$1 = state_27564;
var statearr_27598_27668 = state_27564__$1;
(statearr_27598_27668[(2)] = inst_27479);

(statearr_27598_27668[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (36))){
var inst_27523 = (state_27564[(25)]);
var inst_27527 = cljs.core.chunk_first(inst_27523);
var inst_27528 = cljs.core.chunk_rest(inst_27523);
var inst_27529 = cljs.core.count(inst_27527);
var inst_27504 = inst_27528;
var inst_27505 = inst_27527;
var inst_27506 = inst_27529;
var inst_27507 = (0);
var state_27564__$1 = (function (){var statearr_27599 = state_27564;
(statearr_27599[(20)] = inst_27506);

(statearr_27599[(21)] = inst_27504);

(statearr_27599[(11)] = inst_27505);

(statearr_27599[(12)] = inst_27507);

return statearr_27599;
})();
var statearr_27600_27669 = state_27564__$1;
(statearr_27600_27669[(2)] = null);

(statearr_27600_27669[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (41))){
var inst_27523 = (state_27564[(25)]);
var inst_27539 = (state_27564[(2)]);
var inst_27540 = cljs.core.next(inst_27523);
var inst_27504 = inst_27540;
var inst_27505 = null;
var inst_27506 = (0);
var inst_27507 = (0);
var state_27564__$1 = (function (){var statearr_27601 = state_27564;
(statearr_27601[(20)] = inst_27506);

(statearr_27601[(21)] = inst_27504);

(statearr_27601[(27)] = inst_27539);

(statearr_27601[(11)] = inst_27505);

(statearr_27601[(12)] = inst_27507);

return statearr_27601;
})();
var statearr_27602_27670 = state_27564__$1;
(statearr_27602_27670[(2)] = null);

(statearr_27602_27670[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (43))){
var state_27564__$1 = state_27564;
var statearr_27603_27671 = state_27564__$1;
(statearr_27603_27671[(2)] = null);

(statearr_27603_27671[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (29))){
var inst_27548 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27604_27672 = state_27564__$1;
(statearr_27604_27672[(2)] = inst_27548);

(statearr_27604_27672[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (44))){
var inst_27557 = (state_27564[(2)]);
var state_27564__$1 = (function (){var statearr_27605 = state_27564;
(statearr_27605[(28)] = inst_27557);

return statearr_27605;
})();
var statearr_27606_27673 = state_27564__$1;
(statearr_27606_27673[(2)] = null);

(statearr_27606_27673[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (6))){
var inst_27496 = (state_27564[(29)]);
var inst_27495 = cljs.core.deref(cs);
var inst_27496__$1 = cljs.core.keys(inst_27495);
var inst_27497 = cljs.core.count(inst_27496__$1);
var inst_27498 = cljs.core.reset_BANG_(dctr,inst_27497);
var inst_27503 = cljs.core.seq(inst_27496__$1);
var inst_27504 = inst_27503;
var inst_27505 = null;
var inst_27506 = (0);
var inst_27507 = (0);
var state_27564__$1 = (function (){var statearr_27607 = state_27564;
(statearr_27607[(30)] = inst_27498);

(statearr_27607[(20)] = inst_27506);

(statearr_27607[(29)] = inst_27496__$1);

(statearr_27607[(21)] = inst_27504);

(statearr_27607[(11)] = inst_27505);

(statearr_27607[(12)] = inst_27507);

return statearr_27607;
})();
var statearr_27608_27674 = state_27564__$1;
(statearr_27608_27674[(2)] = null);

(statearr_27608_27674[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (28))){
var inst_27523 = (state_27564[(25)]);
var inst_27504 = (state_27564[(21)]);
var inst_27523__$1 = cljs.core.seq(inst_27504);
var state_27564__$1 = (function (){var statearr_27609 = state_27564;
(statearr_27609[(25)] = inst_27523__$1);

return statearr_27609;
})();
if(inst_27523__$1){
var statearr_27610_27675 = state_27564__$1;
(statearr_27610_27675[(1)] = (33));

} else {
var statearr_27611_27676 = state_27564__$1;
(statearr_27611_27676[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (25))){
var inst_27506 = (state_27564[(20)]);
var inst_27507 = (state_27564[(12)]);
var inst_27509 = (inst_27507 < inst_27506);
var inst_27510 = inst_27509;
var state_27564__$1 = state_27564;
if(cljs.core.truth_(inst_27510)){
var statearr_27612_27677 = state_27564__$1;
(statearr_27612_27677[(1)] = (27));

} else {
var statearr_27613_27678 = state_27564__$1;
(statearr_27613_27678[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (34))){
var state_27564__$1 = state_27564;
var statearr_27614_27679 = state_27564__$1;
(statearr_27614_27679[(2)] = null);

(statearr_27614_27679[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (17))){
var state_27564__$1 = state_27564;
var statearr_27615_27680 = state_27564__$1;
(statearr_27615_27680[(2)] = null);

(statearr_27615_27680[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (3))){
var inst_27562 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27564__$1,inst_27562);
} else {
if((state_val_27565 === (12))){
var inst_27491 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27616_27681 = state_27564__$1;
(statearr_27616_27681[(2)] = inst_27491);

(statearr_27616_27681[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (2))){
var state_27564__$1 = state_27564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27564__$1,(4),ch);
} else {
if((state_val_27565 === (23))){
var state_27564__$1 = state_27564;
var statearr_27617_27682 = state_27564__$1;
(statearr_27617_27682[(2)] = null);

(statearr_27617_27682[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (35))){
var inst_27546 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27618_27683 = state_27564__$1;
(statearr_27618_27683[(2)] = inst_27546);

(statearr_27618_27683[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (19))){
var inst_27463 = (state_27564[(7)]);
var inst_27467 = cljs.core.chunk_first(inst_27463);
var inst_27468 = cljs.core.chunk_rest(inst_27463);
var inst_27469 = cljs.core.count(inst_27467);
var inst_27441 = inst_27468;
var inst_27442 = inst_27467;
var inst_27443 = inst_27469;
var inst_27444 = (0);
var state_27564__$1 = (function (){var statearr_27619 = state_27564;
(statearr_27619[(13)] = inst_27443);

(statearr_27619[(15)] = inst_27444);

(statearr_27619[(16)] = inst_27441);

(statearr_27619[(17)] = inst_27442);

return statearr_27619;
})();
var statearr_27620_27684 = state_27564__$1;
(statearr_27620_27684[(2)] = null);

(statearr_27620_27684[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (11))){
var inst_27463 = (state_27564[(7)]);
var inst_27441 = (state_27564[(16)]);
var inst_27463__$1 = cljs.core.seq(inst_27441);
var state_27564__$1 = (function (){var statearr_27621 = state_27564;
(statearr_27621[(7)] = inst_27463__$1);

return statearr_27621;
})();
if(inst_27463__$1){
var statearr_27622_27685 = state_27564__$1;
(statearr_27622_27685[(1)] = (16));

} else {
var statearr_27623_27686 = state_27564__$1;
(statearr_27623_27686[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (9))){
var inst_27493 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27624_27687 = state_27564__$1;
(statearr_27624_27687[(2)] = inst_27493);

(statearr_27624_27687[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (5))){
var inst_27439 = cljs.core.deref(cs);
var inst_27440 = cljs.core.seq(inst_27439);
var inst_27441 = inst_27440;
var inst_27442 = null;
var inst_27443 = (0);
var inst_27444 = (0);
var state_27564__$1 = (function (){var statearr_27625 = state_27564;
(statearr_27625[(13)] = inst_27443);

(statearr_27625[(15)] = inst_27444);

(statearr_27625[(16)] = inst_27441);

(statearr_27625[(17)] = inst_27442);

return statearr_27625;
})();
var statearr_27626_27688 = state_27564__$1;
(statearr_27626_27688[(2)] = null);

(statearr_27626_27688[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (14))){
var state_27564__$1 = state_27564;
var statearr_27627_27689 = state_27564__$1;
(statearr_27627_27689[(2)] = null);

(statearr_27627_27689[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (45))){
var inst_27554 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27628_27690 = state_27564__$1;
(statearr_27628_27690[(2)] = inst_27554);

(statearr_27628_27690[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (26))){
var inst_27496 = (state_27564[(29)]);
var inst_27550 = (state_27564[(2)]);
var inst_27551 = cljs.core.seq(inst_27496);
var state_27564__$1 = (function (){var statearr_27629 = state_27564;
(statearr_27629[(31)] = inst_27550);

return statearr_27629;
})();
if(inst_27551){
var statearr_27630_27691 = state_27564__$1;
(statearr_27630_27691[(1)] = (42));

} else {
var statearr_27631_27692 = state_27564__$1;
(statearr_27631_27692[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (16))){
var inst_27463 = (state_27564[(7)]);
var inst_27465 = cljs.core.chunked_seq_QMARK_(inst_27463);
var state_27564__$1 = state_27564;
if(inst_27465){
var statearr_27632_27693 = state_27564__$1;
(statearr_27632_27693[(1)] = (19));

} else {
var statearr_27633_27694 = state_27564__$1;
(statearr_27633_27694[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (38))){
var inst_27543 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27634_27695 = state_27564__$1;
(statearr_27634_27695[(2)] = inst_27543);

(statearr_27634_27695[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (30))){
var state_27564__$1 = state_27564;
var statearr_27635_27696 = state_27564__$1;
(statearr_27635_27696[(2)] = null);

(statearr_27635_27696[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (10))){
var inst_27444 = (state_27564[(15)]);
var inst_27442 = (state_27564[(17)]);
var inst_27452 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27442,inst_27444);
var inst_27453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27452,(0),null);
var inst_27454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27452,(1),null);
var state_27564__$1 = (function (){var statearr_27636 = state_27564;
(statearr_27636[(26)] = inst_27453);

return statearr_27636;
})();
if(cljs.core.truth_(inst_27454)){
var statearr_27637_27697 = state_27564__$1;
(statearr_27637_27697[(1)] = (13));

} else {
var statearr_27638_27698 = state_27564__$1;
(statearr_27638_27698[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (18))){
var inst_27489 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27639_27699 = state_27564__$1;
(statearr_27639_27699[(2)] = inst_27489);

(statearr_27639_27699[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (42))){
var state_27564__$1 = state_27564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27564__$1,(45),dchan);
} else {
if((state_val_27565 === (37))){
var inst_27523 = (state_27564[(25)]);
var inst_27432 = (state_27564[(10)]);
var inst_27532 = (state_27564[(23)]);
var inst_27532__$1 = cljs.core.first(inst_27523);
var inst_27533 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27532__$1,inst_27432,done);
var state_27564__$1 = (function (){var statearr_27640 = state_27564;
(statearr_27640[(23)] = inst_27532__$1);

return statearr_27640;
})();
if(cljs.core.truth_(inst_27533)){
var statearr_27641_27700 = state_27564__$1;
(statearr_27641_27700[(1)] = (39));

} else {
var statearr_27642_27701 = state_27564__$1;
(statearr_27642_27701[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27565 === (8))){
var inst_27443 = (state_27564[(13)]);
var inst_27444 = (state_27564[(15)]);
var inst_27446 = (inst_27444 < inst_27443);
var inst_27447 = inst_27446;
var state_27564__$1 = state_27564;
if(cljs.core.truth_(inst_27447)){
var statearr_27643_27702 = state_27564__$1;
(statearr_27643_27702[(1)] = (10));

} else {
var statearr_27644_27703 = state_27564__$1;
(statearr_27644_27703[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mult_$_state_machine__26738__auto__ = null;
var cljs$core$async$mult_$_state_machine__26738__auto____0 = (function (){
var statearr_27645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27645[(0)] = cljs$core$async$mult_$_state_machine__26738__auto__);

(statearr_27645[(1)] = (1));

return statearr_27645;
});
var cljs$core$async$mult_$_state_machine__26738__auto____1 = (function (state_27564){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_27564);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e27646){if((e27646 instanceof Object)){
var ex__26741__auto__ = e27646;
var statearr_27647_27704 = state_27564;
(statearr_27647_27704[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27564);

return cljs.core.cst$kw$recur;
} else {
throw e27646;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__27705 = state_27564;
state_27564 = G__27705;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26738__auto__ = function(state_27564){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26738__auto____1.call(this,state_27564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26738__auto____0;
cljs$core$async$mult_$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26738__auto____1;
return cljs$core$async$mult_$_state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_27648 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_27648[(6)] = c__26842__auto___27649);

return statearr_27648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
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
var G__27707 = arguments.length;
switch (G__27707) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27719 = arguments.length;
var i__4790__auto___27720 = (0);
while(true){
if((i__4790__auto___27720 < len__4789__auto___27719)){
args__4795__auto__.push((arguments[i__4790__auto___27720]));

var G__27721 = (i__4790__auto___27720 + (1));
i__4790__auto___27720 = G__27721;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27713){
var map__27714 = p__27713;
var map__27714__$1 = (((((!((map__27714 == null))))?(((((map__27714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27714):map__27714);
var opts = map__27714__$1;
var statearr_27716_27722 = state;
(statearr_27716_27722[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts((function (val){
var statearr_27717_27723 = state;
(statearr_27717_27723[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_27718_27724 = state;
(statearr_27718_27724[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27709){
var G__27710 = cljs.core.first(seq27709);
var seq27709__$1 = cljs.core.next(seq27709);
var G__27711 = cljs.core.first(seq27709__$1);
var seq27709__$2 = cljs.core.next(seq27709__$1);
var G__27712 = cljs.core.first(seq27709__$2);
var seq27709__$3 = cljs.core.next(seq27709__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27710,G__27711,G__27712,seq27709__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27725 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27725 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27726){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27726 = meta27726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27727,meta27726__$1){
var self__ = this;
var _27727__$1 = this;
return (new cljs.core.async.t_cljs$core$async27725(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27726__$1));
}));

(cljs.core.async.t_cljs$core$async27725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27727){
var self__ = this;
var _27727__$1 = this;
return self__.meta27726;
}));

(cljs.core.async.t_cljs$core$async27725.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27725.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async27725.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27725.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async27725.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async27725.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async27725.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async27725.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async27725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta27726], null);
}));

(cljs.core.async.t_cljs$core$async27725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27725");

(cljs.core.async.t_cljs$core$async27725.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async27725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27725.
 */
cljs.core.async.__GT_t_cljs$core$async27725 = (function cljs$core$async$mix_$___GT_t_cljs$core$async27725(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27726){
return (new cljs.core.async.t_cljs$core$async27725(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27726));
});

}

return (new cljs.core.async.t_cljs$core$async27725(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26842__auto___27889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_27829){
var state_val_27830 = (state_27829[(1)]);
if((state_val_27830 === (7))){
var inst_27744 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27831_27890 = state_27829__$1;
(statearr_27831_27890[(2)] = inst_27744);

(statearr_27831_27890[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (20))){
var inst_27756 = (state_27829[(7)]);
var state_27829__$1 = state_27829;
var statearr_27832_27891 = state_27829__$1;
(statearr_27832_27891[(2)] = inst_27756);

(statearr_27832_27891[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (27))){
var state_27829__$1 = state_27829;
var statearr_27833_27892 = state_27829__$1;
(statearr_27833_27892[(2)] = null);

(statearr_27833_27892[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (1))){
var inst_27731 = (state_27829[(8)]);
var inst_27731__$1 = calc_state();
var inst_27733 = (inst_27731__$1 == null);
var inst_27734 = cljs.core.not(inst_27733);
var state_27829__$1 = (function (){var statearr_27834 = state_27829;
(statearr_27834[(8)] = inst_27731__$1);

return statearr_27834;
})();
if(inst_27734){
var statearr_27835_27893 = state_27829__$1;
(statearr_27835_27893[(1)] = (2));

} else {
var statearr_27836_27894 = state_27829__$1;
(statearr_27836_27894[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (24))){
var inst_27803 = (state_27829[(9)]);
var inst_27780 = (state_27829[(10)]);
var inst_27789 = (state_27829[(11)]);
var inst_27803__$1 = (inst_27780.cljs$core$IFn$_invoke$arity$1 ? inst_27780.cljs$core$IFn$_invoke$arity$1(inst_27789) : inst_27780.call(null,inst_27789));
var state_27829__$1 = (function (){var statearr_27837 = state_27829;
(statearr_27837[(9)] = inst_27803__$1);

return statearr_27837;
})();
if(cljs.core.truth_(inst_27803__$1)){
var statearr_27838_27895 = state_27829__$1;
(statearr_27838_27895[(1)] = (29));

} else {
var statearr_27839_27896 = state_27829__$1;
(statearr_27839_27896[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (4))){
var inst_27747 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
if(cljs.core.truth_(inst_27747)){
var statearr_27840_27897 = state_27829__$1;
(statearr_27840_27897[(1)] = (8));

} else {
var statearr_27841_27898 = state_27829__$1;
(statearr_27841_27898[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (15))){
var inst_27774 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
if(cljs.core.truth_(inst_27774)){
var statearr_27842_27899 = state_27829__$1;
(statearr_27842_27899[(1)] = (19));

} else {
var statearr_27843_27900 = state_27829__$1;
(statearr_27843_27900[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (21))){
var inst_27779 = (state_27829[(12)]);
var inst_27779__$1 = (state_27829[(2)]);
var inst_27780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27779__$1,cljs.core.cst$kw$solos);
var inst_27781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27779__$1,cljs.core.cst$kw$mutes);
var inst_27782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27779__$1,cljs.core.cst$kw$reads);
var state_27829__$1 = (function (){var statearr_27844 = state_27829;
(statearr_27844[(13)] = inst_27781);

(statearr_27844[(10)] = inst_27780);

(statearr_27844[(12)] = inst_27779__$1);

return statearr_27844;
})();
return cljs.core.async.ioc_alts_BANG_(state_27829__$1,(22),inst_27782);
} else {
if((state_val_27830 === (31))){
var inst_27811 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
if(cljs.core.truth_(inst_27811)){
var statearr_27845_27901 = state_27829__$1;
(statearr_27845_27901[(1)] = (32));

} else {
var statearr_27846_27902 = state_27829__$1;
(statearr_27846_27902[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (32))){
var inst_27788 = (state_27829[(14)]);
var state_27829__$1 = state_27829;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27829__$1,(35),out,inst_27788);
} else {
if((state_val_27830 === (33))){
var inst_27779 = (state_27829[(12)]);
var inst_27756 = inst_27779;
var state_27829__$1 = (function (){var statearr_27847 = state_27829;
(statearr_27847[(7)] = inst_27756);

return statearr_27847;
})();
var statearr_27848_27903 = state_27829__$1;
(statearr_27848_27903[(2)] = null);

(statearr_27848_27903[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (13))){
var inst_27756 = (state_27829[(7)]);
var inst_27763 = inst_27756.cljs$lang$protocol_mask$partition0$;
var inst_27764 = (inst_27763 & (64));
var inst_27765 = inst_27756.cljs$core$ISeq$;
var inst_27766 = (cljs.core.PROTOCOL_SENTINEL === inst_27765);
var inst_27767 = ((inst_27764) || (inst_27766));
var state_27829__$1 = state_27829;
if(cljs.core.truth_(inst_27767)){
var statearr_27849_27904 = state_27829__$1;
(statearr_27849_27904[(1)] = (16));

} else {
var statearr_27850_27905 = state_27829__$1;
(statearr_27850_27905[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (22))){
var inst_27788 = (state_27829[(14)]);
var inst_27789 = (state_27829[(11)]);
var inst_27787 = (state_27829[(2)]);
var inst_27788__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27787,(0),null);
var inst_27789__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27787,(1),null);
var inst_27790 = (inst_27788__$1 == null);
var inst_27791 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27789__$1,change);
var inst_27792 = ((inst_27790) || (inst_27791));
var state_27829__$1 = (function (){var statearr_27851 = state_27829;
(statearr_27851[(14)] = inst_27788__$1);

(statearr_27851[(11)] = inst_27789__$1);

return statearr_27851;
})();
if(cljs.core.truth_(inst_27792)){
var statearr_27852_27906 = state_27829__$1;
(statearr_27852_27906[(1)] = (23));

} else {
var statearr_27853_27907 = state_27829__$1;
(statearr_27853_27907[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (36))){
var inst_27779 = (state_27829[(12)]);
var inst_27756 = inst_27779;
var state_27829__$1 = (function (){var statearr_27854 = state_27829;
(statearr_27854[(7)] = inst_27756);

return statearr_27854;
})();
var statearr_27855_27908 = state_27829__$1;
(statearr_27855_27908[(2)] = null);

(statearr_27855_27908[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (29))){
var inst_27803 = (state_27829[(9)]);
var state_27829__$1 = state_27829;
var statearr_27856_27909 = state_27829__$1;
(statearr_27856_27909[(2)] = inst_27803);

(statearr_27856_27909[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (6))){
var state_27829__$1 = state_27829;
var statearr_27857_27910 = state_27829__$1;
(statearr_27857_27910[(2)] = false);

(statearr_27857_27910[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (28))){
var inst_27799 = (state_27829[(2)]);
var inst_27800 = calc_state();
var inst_27756 = inst_27800;
var state_27829__$1 = (function (){var statearr_27858 = state_27829;
(statearr_27858[(7)] = inst_27756);

(statearr_27858[(15)] = inst_27799);

return statearr_27858;
})();
var statearr_27859_27911 = state_27829__$1;
(statearr_27859_27911[(2)] = null);

(statearr_27859_27911[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (25))){
var inst_27825 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27860_27912 = state_27829__$1;
(statearr_27860_27912[(2)] = inst_27825);

(statearr_27860_27912[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (34))){
var inst_27823 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27861_27913 = state_27829__$1;
(statearr_27861_27913[(2)] = inst_27823);

(statearr_27861_27913[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (17))){
var state_27829__$1 = state_27829;
var statearr_27862_27914 = state_27829__$1;
(statearr_27862_27914[(2)] = false);

(statearr_27862_27914[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (3))){
var state_27829__$1 = state_27829;
var statearr_27863_27915 = state_27829__$1;
(statearr_27863_27915[(2)] = false);

(statearr_27863_27915[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (12))){
var inst_27827 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27829__$1,inst_27827);
} else {
if((state_val_27830 === (2))){
var inst_27731 = (state_27829[(8)]);
var inst_27736 = inst_27731.cljs$lang$protocol_mask$partition0$;
var inst_27737 = (inst_27736 & (64));
var inst_27738 = inst_27731.cljs$core$ISeq$;
var inst_27739 = (cljs.core.PROTOCOL_SENTINEL === inst_27738);
var inst_27740 = ((inst_27737) || (inst_27739));
var state_27829__$1 = state_27829;
if(cljs.core.truth_(inst_27740)){
var statearr_27864_27916 = state_27829__$1;
(statearr_27864_27916[(1)] = (5));

} else {
var statearr_27865_27917 = state_27829__$1;
(statearr_27865_27917[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (23))){
var inst_27788 = (state_27829[(14)]);
var inst_27794 = (inst_27788 == null);
var state_27829__$1 = state_27829;
if(cljs.core.truth_(inst_27794)){
var statearr_27866_27918 = state_27829__$1;
(statearr_27866_27918[(1)] = (26));

} else {
var statearr_27867_27919 = state_27829__$1;
(statearr_27867_27919[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (35))){
var inst_27814 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
if(cljs.core.truth_(inst_27814)){
var statearr_27868_27920 = state_27829__$1;
(statearr_27868_27920[(1)] = (36));

} else {
var statearr_27869_27921 = state_27829__$1;
(statearr_27869_27921[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (19))){
var inst_27756 = (state_27829[(7)]);
var inst_27776 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27756);
var state_27829__$1 = state_27829;
var statearr_27870_27922 = state_27829__$1;
(statearr_27870_27922[(2)] = inst_27776);

(statearr_27870_27922[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (11))){
var inst_27756 = (state_27829[(7)]);
var inst_27760 = (inst_27756 == null);
var inst_27761 = cljs.core.not(inst_27760);
var state_27829__$1 = state_27829;
if(inst_27761){
var statearr_27871_27923 = state_27829__$1;
(statearr_27871_27923[(1)] = (13));

} else {
var statearr_27872_27924 = state_27829__$1;
(statearr_27872_27924[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (9))){
var inst_27731 = (state_27829[(8)]);
var state_27829__$1 = state_27829;
var statearr_27873_27925 = state_27829__$1;
(statearr_27873_27925[(2)] = inst_27731);

(statearr_27873_27925[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (5))){
var state_27829__$1 = state_27829;
var statearr_27874_27926 = state_27829__$1;
(statearr_27874_27926[(2)] = true);

(statearr_27874_27926[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (14))){
var state_27829__$1 = state_27829;
var statearr_27875_27927 = state_27829__$1;
(statearr_27875_27927[(2)] = false);

(statearr_27875_27927[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (26))){
var inst_27789 = (state_27829[(11)]);
var inst_27796 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_27789);
var state_27829__$1 = state_27829;
var statearr_27876_27928 = state_27829__$1;
(statearr_27876_27928[(2)] = inst_27796);

(statearr_27876_27928[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (16))){
var state_27829__$1 = state_27829;
var statearr_27877_27929 = state_27829__$1;
(statearr_27877_27929[(2)] = true);

(statearr_27877_27929[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (38))){
var inst_27819 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27878_27930 = state_27829__$1;
(statearr_27878_27930[(2)] = inst_27819);

(statearr_27878_27930[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (30))){
var inst_27781 = (state_27829[(13)]);
var inst_27780 = (state_27829[(10)]);
var inst_27789 = (state_27829[(11)]);
var inst_27806 = cljs.core.empty_QMARK_(inst_27780);
var inst_27807 = (inst_27781.cljs$core$IFn$_invoke$arity$1 ? inst_27781.cljs$core$IFn$_invoke$arity$1(inst_27789) : inst_27781.call(null,inst_27789));
var inst_27808 = cljs.core.not(inst_27807);
var inst_27809 = ((inst_27806) && (inst_27808));
var state_27829__$1 = state_27829;
var statearr_27879_27931 = state_27829__$1;
(statearr_27879_27931[(2)] = inst_27809);

(statearr_27879_27931[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (10))){
var inst_27731 = (state_27829[(8)]);
var inst_27752 = (state_27829[(2)]);
var inst_27753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27752,cljs.core.cst$kw$solos);
var inst_27754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27752,cljs.core.cst$kw$mutes);
var inst_27755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27752,cljs.core.cst$kw$reads);
var inst_27756 = inst_27731;
var state_27829__$1 = (function (){var statearr_27880 = state_27829;
(statearr_27880[(16)] = inst_27753);

(statearr_27880[(7)] = inst_27756);

(statearr_27880[(17)] = inst_27755);

(statearr_27880[(18)] = inst_27754);

return statearr_27880;
})();
var statearr_27881_27932 = state_27829__$1;
(statearr_27881_27932[(2)] = null);

(statearr_27881_27932[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (18))){
var inst_27771 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27882_27933 = state_27829__$1;
(statearr_27882_27933[(2)] = inst_27771);

(statearr_27882_27933[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (37))){
var state_27829__$1 = state_27829;
var statearr_27883_27934 = state_27829__$1;
(statearr_27883_27934[(2)] = null);

(statearr_27883_27934[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27830 === (8))){
var inst_27731 = (state_27829[(8)]);
var inst_27749 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27731);
var state_27829__$1 = state_27829;
var statearr_27884_27935 = state_27829__$1;
(statearr_27884_27935[(2)] = inst_27749);

(statearr_27884_27935[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__26738__auto__ = null;
var cljs$core$async$mix_$_state_machine__26738__auto____0 = (function (){
var statearr_27885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27885[(0)] = cljs$core$async$mix_$_state_machine__26738__auto__);

(statearr_27885[(1)] = (1));

return statearr_27885;
});
var cljs$core$async$mix_$_state_machine__26738__auto____1 = (function (state_27829){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_27829);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e27886){if((e27886 instanceof Object)){
var ex__26741__auto__ = e27886;
var statearr_27887_27936 = state_27829;
(statearr_27887_27936[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27829);

return cljs.core.cst$kw$recur;
} else {
throw e27886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__27937 = state_27829;
state_27829 = G__27937;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26738__auto__ = function(state_27829){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26738__auto____1.call(this,state_27829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26738__auto____0;
cljs$core$async$mix_$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26738__auto____1;
return cljs$core$async$mix_$_state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_27888 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_27888[(6)] = c__26842__auto___27889);

return statearr_27888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27939 = arguments.length;
switch (G__27939) {
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
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
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
var G__27943 = arguments.length;
switch (G__27943) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__27941_SHARP_){
if(cljs.core.truth_((p1__27941_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27941_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__27941_SHARP_.call(null,topic)))){
return p1__27941_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27941_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27944 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27945){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27945 = meta27945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27946,meta27945__$1){
var self__ = this;
var _27946__$1 = this;
return (new cljs.core.async.t_cljs$core$async27944(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27945__$1));
}));

(cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27946){
var self__ = this;
var _27946__$1 = this;
return self__.meta27945;
}));

(cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta27945], null);
}));

(cljs.core.async.t_cljs$core$async27944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27944");

(cljs.core.async.t_cljs$core$async27944.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async27944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27944.
 */
cljs.core.async.__GT_t_cljs$core$async27944 = (function cljs$core$async$__GT_t_cljs$core$async27944(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27945){
return (new cljs.core.async.t_cljs$core$async27944(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27945));
});

}

return (new cljs.core.async.t_cljs$core$async27944(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26842__auto___28064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_28018){
var state_val_28019 = (state_28018[(1)]);
if((state_val_28019 === (7))){
var inst_28014 = (state_28018[(2)]);
var state_28018__$1 = state_28018;
var statearr_28020_28065 = state_28018__$1;
(statearr_28020_28065[(2)] = inst_28014);

(statearr_28020_28065[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (20))){
var state_28018__$1 = state_28018;
var statearr_28021_28066 = state_28018__$1;
(statearr_28021_28066[(2)] = null);

(statearr_28021_28066[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (1))){
var state_28018__$1 = state_28018;
var statearr_28022_28067 = state_28018__$1;
(statearr_28022_28067[(2)] = null);

(statearr_28022_28067[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (24))){
var inst_27997 = (state_28018[(7)]);
var inst_28006 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_27997);
var state_28018__$1 = state_28018;
var statearr_28023_28068 = state_28018__$1;
(statearr_28023_28068[(2)] = inst_28006);

(statearr_28023_28068[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (4))){
var inst_27949 = (state_28018[(8)]);
var inst_27949__$1 = (state_28018[(2)]);
var inst_27950 = (inst_27949__$1 == null);
var state_28018__$1 = (function (){var statearr_28024 = state_28018;
(statearr_28024[(8)] = inst_27949__$1);

return statearr_28024;
})();
if(cljs.core.truth_(inst_27950)){
var statearr_28025_28069 = state_28018__$1;
(statearr_28025_28069[(1)] = (5));

} else {
var statearr_28026_28070 = state_28018__$1;
(statearr_28026_28070[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (15))){
var inst_27991 = (state_28018[(2)]);
var state_28018__$1 = state_28018;
var statearr_28027_28071 = state_28018__$1;
(statearr_28027_28071[(2)] = inst_27991);

(statearr_28027_28071[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (21))){
var inst_28011 = (state_28018[(2)]);
var state_28018__$1 = (function (){var statearr_28028 = state_28018;
(statearr_28028[(9)] = inst_28011);

return statearr_28028;
})();
var statearr_28029_28072 = state_28018__$1;
(statearr_28029_28072[(2)] = null);

(statearr_28029_28072[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (13))){
var inst_27973 = (state_28018[(10)]);
var inst_27975 = cljs.core.chunked_seq_QMARK_(inst_27973);
var state_28018__$1 = state_28018;
if(inst_27975){
var statearr_28030_28073 = state_28018__$1;
(statearr_28030_28073[(1)] = (16));

} else {
var statearr_28031_28074 = state_28018__$1;
(statearr_28031_28074[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (22))){
var inst_28003 = (state_28018[(2)]);
var state_28018__$1 = state_28018;
if(cljs.core.truth_(inst_28003)){
var statearr_28032_28075 = state_28018__$1;
(statearr_28032_28075[(1)] = (23));

} else {
var statearr_28033_28076 = state_28018__$1;
(statearr_28033_28076[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (6))){
var inst_27949 = (state_28018[(8)]);
var inst_27997 = (state_28018[(7)]);
var inst_27999 = (state_28018[(11)]);
var inst_27997__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_27949) : topic_fn.call(null,inst_27949));
var inst_27998 = cljs.core.deref(mults);
var inst_27999__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27998,inst_27997__$1);
var state_28018__$1 = (function (){var statearr_28034 = state_28018;
(statearr_28034[(7)] = inst_27997__$1);

(statearr_28034[(11)] = inst_27999__$1);

return statearr_28034;
})();
if(cljs.core.truth_(inst_27999__$1)){
var statearr_28035_28077 = state_28018__$1;
(statearr_28035_28077[(1)] = (19));

} else {
var statearr_28036_28078 = state_28018__$1;
(statearr_28036_28078[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (25))){
var inst_28008 = (state_28018[(2)]);
var state_28018__$1 = state_28018;
var statearr_28037_28079 = state_28018__$1;
(statearr_28037_28079[(2)] = inst_28008);

(statearr_28037_28079[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (17))){
var inst_27973 = (state_28018[(10)]);
var inst_27982 = cljs.core.first(inst_27973);
var inst_27983 = cljs.core.async.muxch_STAR_(inst_27982);
var inst_27984 = cljs.core.async.close_BANG_(inst_27983);
var inst_27985 = cljs.core.next(inst_27973);
var inst_27959 = inst_27985;
var inst_27960 = null;
var inst_27961 = (0);
var inst_27962 = (0);
var state_28018__$1 = (function (){var statearr_28038 = state_28018;
(statearr_28038[(12)] = inst_27984);

(statearr_28038[(13)] = inst_27961);

(statearr_28038[(14)] = inst_27959);

(statearr_28038[(15)] = inst_27962);

(statearr_28038[(16)] = inst_27960);

return statearr_28038;
})();
var statearr_28039_28080 = state_28018__$1;
(statearr_28039_28080[(2)] = null);

(statearr_28039_28080[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (3))){
var inst_28016 = (state_28018[(2)]);
var state_28018__$1 = state_28018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28018__$1,inst_28016);
} else {
if((state_val_28019 === (12))){
var inst_27993 = (state_28018[(2)]);
var state_28018__$1 = state_28018;
var statearr_28040_28081 = state_28018__$1;
(statearr_28040_28081[(2)] = inst_27993);

(statearr_28040_28081[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (2))){
var state_28018__$1 = state_28018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28018__$1,(4),ch);
} else {
if((state_val_28019 === (23))){
var state_28018__$1 = state_28018;
var statearr_28041_28082 = state_28018__$1;
(statearr_28041_28082[(2)] = null);

(statearr_28041_28082[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (19))){
var inst_27949 = (state_28018[(8)]);
var inst_27999 = (state_28018[(11)]);
var inst_28001 = cljs.core.async.muxch_STAR_(inst_27999);
var state_28018__$1 = state_28018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28018__$1,(22),inst_28001,inst_27949);
} else {
if((state_val_28019 === (11))){
var inst_27973 = (state_28018[(10)]);
var inst_27959 = (state_28018[(14)]);
var inst_27973__$1 = cljs.core.seq(inst_27959);
var state_28018__$1 = (function (){var statearr_28042 = state_28018;
(statearr_28042[(10)] = inst_27973__$1);

return statearr_28042;
})();
if(inst_27973__$1){
var statearr_28043_28083 = state_28018__$1;
(statearr_28043_28083[(1)] = (13));

} else {
var statearr_28044_28084 = state_28018__$1;
(statearr_28044_28084[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (9))){
var inst_27995 = (state_28018[(2)]);
var state_28018__$1 = state_28018;
var statearr_28045_28085 = state_28018__$1;
(statearr_28045_28085[(2)] = inst_27995);

(statearr_28045_28085[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (5))){
var inst_27956 = cljs.core.deref(mults);
var inst_27957 = cljs.core.vals(inst_27956);
var inst_27958 = cljs.core.seq(inst_27957);
var inst_27959 = inst_27958;
var inst_27960 = null;
var inst_27961 = (0);
var inst_27962 = (0);
var state_28018__$1 = (function (){var statearr_28046 = state_28018;
(statearr_28046[(13)] = inst_27961);

(statearr_28046[(14)] = inst_27959);

(statearr_28046[(15)] = inst_27962);

(statearr_28046[(16)] = inst_27960);

return statearr_28046;
})();
var statearr_28047_28086 = state_28018__$1;
(statearr_28047_28086[(2)] = null);

(statearr_28047_28086[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (14))){
var state_28018__$1 = state_28018;
var statearr_28051_28087 = state_28018__$1;
(statearr_28051_28087[(2)] = null);

(statearr_28051_28087[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (16))){
var inst_27973 = (state_28018[(10)]);
var inst_27977 = cljs.core.chunk_first(inst_27973);
var inst_27978 = cljs.core.chunk_rest(inst_27973);
var inst_27979 = cljs.core.count(inst_27977);
var inst_27959 = inst_27978;
var inst_27960 = inst_27977;
var inst_27961 = inst_27979;
var inst_27962 = (0);
var state_28018__$1 = (function (){var statearr_28052 = state_28018;
(statearr_28052[(13)] = inst_27961);

(statearr_28052[(14)] = inst_27959);

(statearr_28052[(15)] = inst_27962);

(statearr_28052[(16)] = inst_27960);

return statearr_28052;
})();
var statearr_28053_28088 = state_28018__$1;
(statearr_28053_28088[(2)] = null);

(statearr_28053_28088[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (10))){
var inst_27961 = (state_28018[(13)]);
var inst_27959 = (state_28018[(14)]);
var inst_27962 = (state_28018[(15)]);
var inst_27960 = (state_28018[(16)]);
var inst_27967 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27960,inst_27962);
var inst_27968 = cljs.core.async.muxch_STAR_(inst_27967);
var inst_27969 = cljs.core.async.close_BANG_(inst_27968);
var inst_27970 = (inst_27962 + (1));
var tmp28048 = inst_27961;
var tmp28049 = inst_27959;
var tmp28050 = inst_27960;
var inst_27959__$1 = tmp28049;
var inst_27960__$1 = tmp28050;
var inst_27961__$1 = tmp28048;
var inst_27962__$1 = inst_27970;
var state_28018__$1 = (function (){var statearr_28054 = state_28018;
(statearr_28054[(17)] = inst_27969);

(statearr_28054[(13)] = inst_27961__$1);

(statearr_28054[(14)] = inst_27959__$1);

(statearr_28054[(15)] = inst_27962__$1);

(statearr_28054[(16)] = inst_27960__$1);

return statearr_28054;
})();
var statearr_28055_28089 = state_28018__$1;
(statearr_28055_28089[(2)] = null);

(statearr_28055_28089[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (18))){
var inst_27988 = (state_28018[(2)]);
var state_28018__$1 = state_28018;
var statearr_28056_28090 = state_28018__$1;
(statearr_28056_28090[(2)] = inst_27988);

(statearr_28056_28090[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28019 === (8))){
var inst_27961 = (state_28018[(13)]);
var inst_27962 = (state_28018[(15)]);
var inst_27964 = (inst_27962 < inst_27961);
var inst_27965 = inst_27964;
var state_28018__$1 = state_28018;
if(cljs.core.truth_(inst_27965)){
var statearr_28057_28091 = state_28018__$1;
(statearr_28057_28091[(1)] = (10));

} else {
var statearr_28058_28092 = state_28018__$1;
(statearr_28058_28092[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__26738__auto__ = null;
var cljs$core$async$state_machine__26738__auto____0 = (function (){
var statearr_28059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28059[(0)] = cljs$core$async$state_machine__26738__auto__);

(statearr_28059[(1)] = (1));

return statearr_28059;
});
var cljs$core$async$state_machine__26738__auto____1 = (function (state_28018){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_28018);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e28060){if((e28060 instanceof Object)){
var ex__26741__auto__ = e28060;
var statearr_28061_28093 = state_28018;
(statearr_28061_28093[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28018);

return cljs.core.cst$kw$recur;
} else {
throw e28060;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__28094 = state_28018;
state_28018 = G__28094;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$state_machine__26738__auto__ = function(state_28018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26738__auto____1.call(this,state_28018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26738__auto____0;
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26738__auto____1;
return cljs$core$async$state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_28062 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_28062[(6)] = c__26842__auto___28064);

return statearr_28062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
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
var G__28096 = arguments.length;
switch (G__28096) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28099 = arguments.length;
switch (G__28099) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__28102 = arguments.length;
switch (G__28102) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__26842__auto___28169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_28141){
var state_val_28142 = (state_28141[(1)]);
if((state_val_28142 === (7))){
var state_28141__$1 = state_28141;
var statearr_28143_28170 = state_28141__$1;
(statearr_28143_28170[(2)] = null);

(statearr_28143_28170[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28142 === (1))){
var state_28141__$1 = state_28141;
var statearr_28144_28171 = state_28141__$1;
(statearr_28144_28171[(2)] = null);

(statearr_28144_28171[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28142 === (4))){
var inst_28105 = (state_28141[(7)]);
var inst_28107 = (inst_28105 < cnt);
var state_28141__$1 = state_28141;
if(cljs.core.truth_(inst_28107)){
var statearr_28145_28172 = state_28141__$1;
(statearr_28145_28172[(1)] = (6));

} else {
var statearr_28146_28173 = state_28141__$1;
(statearr_28146_28173[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28142 === (15))){
var inst_28137 = (state_28141[(2)]);
var state_28141__$1 = state_28141;
var statearr_28147_28174 = state_28141__$1;
(statearr_28147_28174[(2)] = inst_28137);

(statearr_28147_28174[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28142 === (13))){
var inst_28130 = cljs.core.async.close_BANG_(out);
var state_28141__$1 = state_28141;
var statearr_28148_28175 = state_28141__$1;
(statearr_28148_28175[(2)] = inst_28130);

(statearr_28148_28175[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28142 === (6))){
var state_28141__$1 = state_28141;
var statearr_28149_28176 = state_28141__$1;
(statearr_28149_28176[(2)] = null);

(statearr_28149_28176[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28142 === (3))){
var inst_28139 = (state_28141[(2)]);
var state_28141__$1 = state_28141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28141__$1,inst_28139);
} else {
if((state_val_28142 === (12))){
var inst_28127 = (state_28141[(8)]);
var inst_28127__$1 = (state_28141[(2)]);
var inst_28128 = cljs.core.some(cljs.core.nil_QMARK_,inst_28127__$1);
var state_28141__$1 = (function (){var statearr_28150 = state_28141;
(statearr_28150[(8)] = inst_28127__$1);

return statearr_28150;
})();
if(cljs.core.truth_(inst_28128)){
var statearr_28151_28177 = state_28141__$1;
(statearr_28151_28177[(1)] = (13));

} else {
var statearr_28152_28178 = state_28141__$1;
(statearr_28152_28178[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28142 === (2))){
var inst_28104 = cljs.core.reset_BANG_(dctr,cnt);
var inst_28105 = (0);
var state_28141__$1 = (function (){var statearr_28153 = state_28141;
(statearr_28153[(9)] = inst_28104);

(statearr_28153[(7)] = inst_28105);

return statearr_28153;
})();
var statearr_28154_28179 = state_28141__$1;
(statearr_28154_28179[(2)] = null);

(statearr_28154_28179[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28142 === (11))){
var inst_28105 = (state_28141[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_28141,(10),Object,null,(9));
var inst_28114 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_28105) : chs__$1.call(null,inst_28105));
var inst_28115 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_28105) : done.call(null,inst_28105));
var inst_28116 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_28114,inst_28115);
var state_28141__$1 = state_28141;
var statearr_28155_28180 = state_28141__$1;
(statearr_28155_28180[(2)] = inst_28116);


cljs.core.async.impl.ioc_helpers.process_exception(state_28141__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_28142 === (9))){
var inst_28105 = (state_28141[(7)]);
var inst_28118 = (state_28141[(2)]);
var inst_28119 = (inst_28105 + (1));
var inst_28105__$1 = inst_28119;
var state_28141__$1 = (function (){var statearr_28156 = state_28141;
(statearr_28156[(10)] = inst_28118);

(statearr_28156[(7)] = inst_28105__$1);

return statearr_28156;
})();
var statearr_28157_28181 = state_28141__$1;
(statearr_28157_28181[(2)] = null);

(statearr_28157_28181[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28142 === (5))){
var inst_28125 = (state_28141[(2)]);
var state_28141__$1 = (function (){var statearr_28158 = state_28141;
(statearr_28158[(11)] = inst_28125);

return statearr_28158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28141__$1,(12),dchan);
} else {
if((state_val_28142 === (14))){
var inst_28127 = (state_28141[(8)]);
var inst_28132 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_28127);
var state_28141__$1 = state_28141;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28141__$1,(16),out,inst_28132);
} else {
if((state_val_28142 === (16))){
var inst_28134 = (state_28141[(2)]);
var state_28141__$1 = (function (){var statearr_28159 = state_28141;
(statearr_28159[(12)] = inst_28134);

return statearr_28159;
})();
var statearr_28160_28182 = state_28141__$1;
(statearr_28160_28182[(2)] = null);

(statearr_28160_28182[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28142 === (10))){
var inst_28109 = (state_28141[(2)]);
var inst_28110 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_28141__$1 = (function (){var statearr_28161 = state_28141;
(statearr_28161[(13)] = inst_28109);

return statearr_28161;
})();
var statearr_28162_28183 = state_28141__$1;
(statearr_28162_28183[(2)] = inst_28110);


cljs.core.async.impl.ioc_helpers.process_exception(state_28141__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_28142 === (8))){
var inst_28123 = (state_28141[(2)]);
var state_28141__$1 = state_28141;
var statearr_28163_28184 = state_28141__$1;
(statearr_28163_28184[(2)] = inst_28123);

(statearr_28163_28184[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__26738__auto__ = null;
var cljs$core$async$state_machine__26738__auto____0 = (function (){
var statearr_28164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28164[(0)] = cljs$core$async$state_machine__26738__auto__);

(statearr_28164[(1)] = (1));

return statearr_28164;
});
var cljs$core$async$state_machine__26738__auto____1 = (function (state_28141){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_28141);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e28165){if((e28165 instanceof Object)){
var ex__26741__auto__ = e28165;
var statearr_28166_28185 = state_28141;
(statearr_28166_28185[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28141);

return cljs.core.cst$kw$recur;
} else {
throw e28165;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__28186 = state_28141;
state_28141 = G__28186;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$state_machine__26738__auto__ = function(state_28141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26738__auto____1.call(this,state_28141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26738__auto____0;
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26738__auto____1;
return cljs$core$async$state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_28167 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_28167[(6)] = c__26842__auto___28169);

return statearr_28167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
}));


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
var G__28189 = arguments.length;
switch (G__28189) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26842__auto___28243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_28221){
var state_val_28222 = (state_28221[(1)]);
if((state_val_28222 === (7))){
var inst_28200 = (state_28221[(7)]);
var inst_28201 = (state_28221[(8)]);
var inst_28200__$1 = (state_28221[(2)]);
var inst_28201__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28200__$1,(0),null);
var inst_28202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28200__$1,(1),null);
var inst_28203 = (inst_28201__$1 == null);
var state_28221__$1 = (function (){var statearr_28223 = state_28221;
(statearr_28223[(9)] = inst_28202);

(statearr_28223[(7)] = inst_28200__$1);

(statearr_28223[(8)] = inst_28201__$1);

return statearr_28223;
})();
if(cljs.core.truth_(inst_28203)){
var statearr_28224_28244 = state_28221__$1;
(statearr_28224_28244[(1)] = (8));

} else {
var statearr_28225_28245 = state_28221__$1;
(statearr_28225_28245[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28222 === (1))){
var inst_28190 = cljs.core.vec(chs);
var inst_28191 = inst_28190;
var state_28221__$1 = (function (){var statearr_28226 = state_28221;
(statearr_28226[(10)] = inst_28191);

return statearr_28226;
})();
var statearr_28227_28246 = state_28221__$1;
(statearr_28227_28246[(2)] = null);

(statearr_28227_28246[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28222 === (4))){
var inst_28191 = (state_28221[(10)]);
var state_28221__$1 = state_28221;
return cljs.core.async.ioc_alts_BANG_(state_28221__$1,(7),inst_28191);
} else {
if((state_val_28222 === (6))){
var inst_28217 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28228_28247 = state_28221__$1;
(statearr_28228_28247[(2)] = inst_28217);

(statearr_28228_28247[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28222 === (3))){
var inst_28219 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28221__$1,inst_28219);
} else {
if((state_val_28222 === (2))){
var inst_28191 = (state_28221[(10)]);
var inst_28193 = cljs.core.count(inst_28191);
var inst_28194 = (inst_28193 > (0));
var state_28221__$1 = state_28221;
if(cljs.core.truth_(inst_28194)){
var statearr_28230_28248 = state_28221__$1;
(statearr_28230_28248[(1)] = (4));

} else {
var statearr_28231_28249 = state_28221__$1;
(statearr_28231_28249[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28222 === (11))){
var inst_28191 = (state_28221[(10)]);
var inst_28210 = (state_28221[(2)]);
var tmp28229 = inst_28191;
var inst_28191__$1 = tmp28229;
var state_28221__$1 = (function (){var statearr_28232 = state_28221;
(statearr_28232[(10)] = inst_28191__$1);

(statearr_28232[(11)] = inst_28210);

return statearr_28232;
})();
var statearr_28233_28250 = state_28221__$1;
(statearr_28233_28250[(2)] = null);

(statearr_28233_28250[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28222 === (9))){
var inst_28201 = (state_28221[(8)]);
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28221__$1,(11),out,inst_28201);
} else {
if((state_val_28222 === (5))){
var inst_28215 = cljs.core.async.close_BANG_(out);
var state_28221__$1 = state_28221;
var statearr_28234_28251 = state_28221__$1;
(statearr_28234_28251[(2)] = inst_28215);

(statearr_28234_28251[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28222 === (10))){
var inst_28213 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28235_28252 = state_28221__$1;
(statearr_28235_28252[(2)] = inst_28213);

(statearr_28235_28252[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28222 === (8))){
var inst_28202 = (state_28221[(9)]);
var inst_28191 = (state_28221[(10)]);
var inst_28200 = (state_28221[(7)]);
var inst_28201 = (state_28221[(8)]);
var inst_28205 = (function (){var cs = inst_28191;
var vec__28196 = inst_28200;
var v = inst_28201;
var c = inst_28202;
return (function (p1__28187_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__28187_SHARP_);
});
})();
var inst_28206 = cljs.core.filterv(inst_28205,inst_28191);
var inst_28191__$1 = inst_28206;
var state_28221__$1 = (function (){var statearr_28236 = state_28221;
(statearr_28236[(10)] = inst_28191__$1);

return statearr_28236;
})();
var statearr_28237_28253 = state_28221__$1;
(statearr_28237_28253[(2)] = null);

(statearr_28237_28253[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__26738__auto__ = null;
var cljs$core$async$state_machine__26738__auto____0 = (function (){
var statearr_28238 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28238[(0)] = cljs$core$async$state_machine__26738__auto__);

(statearr_28238[(1)] = (1));

return statearr_28238;
});
var cljs$core$async$state_machine__26738__auto____1 = (function (state_28221){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_28221);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e28239){if((e28239 instanceof Object)){
var ex__26741__auto__ = e28239;
var statearr_28240_28254 = state_28221;
(statearr_28240_28254[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28221);

return cljs.core.cst$kw$recur;
} else {
throw e28239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__28255 = state_28221;
state_28221 = G__28255;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$state_machine__26738__auto__ = function(state_28221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26738__auto____1.call(this,state_28221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26738__auto____0;
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26738__auto____1;
return cljs$core$async$state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_28241 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_28241[(6)] = c__26842__auto___28243);

return statearr_28241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28257 = arguments.length;
switch (G__28257) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26842__auto___28302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_28281){
var state_val_28282 = (state_28281[(1)]);
if((state_val_28282 === (7))){
var inst_28263 = (state_28281[(7)]);
var inst_28263__$1 = (state_28281[(2)]);
var inst_28264 = (inst_28263__$1 == null);
var inst_28265 = cljs.core.not(inst_28264);
var state_28281__$1 = (function (){var statearr_28283 = state_28281;
(statearr_28283[(7)] = inst_28263__$1);

return statearr_28283;
})();
if(inst_28265){
var statearr_28284_28303 = state_28281__$1;
(statearr_28284_28303[(1)] = (8));

} else {
var statearr_28285_28304 = state_28281__$1;
(statearr_28285_28304[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28282 === (1))){
var inst_28258 = (0);
var state_28281__$1 = (function (){var statearr_28286 = state_28281;
(statearr_28286[(8)] = inst_28258);

return statearr_28286;
})();
var statearr_28287_28305 = state_28281__$1;
(statearr_28287_28305[(2)] = null);

(statearr_28287_28305[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28282 === (4))){
var state_28281__$1 = state_28281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28281__$1,(7),ch);
} else {
if((state_val_28282 === (6))){
var inst_28276 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
var statearr_28288_28306 = state_28281__$1;
(statearr_28288_28306[(2)] = inst_28276);

(statearr_28288_28306[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28282 === (3))){
var inst_28278 = (state_28281[(2)]);
var inst_28279 = cljs.core.async.close_BANG_(out);
var state_28281__$1 = (function (){var statearr_28289 = state_28281;
(statearr_28289[(9)] = inst_28278);

return statearr_28289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28281__$1,inst_28279);
} else {
if((state_val_28282 === (2))){
var inst_28258 = (state_28281[(8)]);
var inst_28260 = (inst_28258 < n);
var state_28281__$1 = state_28281;
if(cljs.core.truth_(inst_28260)){
var statearr_28290_28307 = state_28281__$1;
(statearr_28290_28307[(1)] = (4));

} else {
var statearr_28291_28308 = state_28281__$1;
(statearr_28291_28308[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28282 === (11))){
var inst_28258 = (state_28281[(8)]);
var inst_28268 = (state_28281[(2)]);
var inst_28269 = (inst_28258 + (1));
var inst_28258__$1 = inst_28269;
var state_28281__$1 = (function (){var statearr_28292 = state_28281;
(statearr_28292[(10)] = inst_28268);

(statearr_28292[(8)] = inst_28258__$1);

return statearr_28292;
})();
var statearr_28293_28309 = state_28281__$1;
(statearr_28293_28309[(2)] = null);

(statearr_28293_28309[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28282 === (9))){
var state_28281__$1 = state_28281;
var statearr_28294_28310 = state_28281__$1;
(statearr_28294_28310[(2)] = null);

(statearr_28294_28310[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28282 === (5))){
var state_28281__$1 = state_28281;
var statearr_28295_28311 = state_28281__$1;
(statearr_28295_28311[(2)] = null);

(statearr_28295_28311[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28282 === (10))){
var inst_28273 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
var statearr_28296_28312 = state_28281__$1;
(statearr_28296_28312[(2)] = inst_28273);

(statearr_28296_28312[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28282 === (8))){
var inst_28263 = (state_28281[(7)]);
var state_28281__$1 = state_28281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28281__$1,(11),out,inst_28263);
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
var cljs$core$async$state_machine__26738__auto__ = null;
var cljs$core$async$state_machine__26738__auto____0 = (function (){
var statearr_28297 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28297[(0)] = cljs$core$async$state_machine__26738__auto__);

(statearr_28297[(1)] = (1));

return statearr_28297;
});
var cljs$core$async$state_machine__26738__auto____1 = (function (state_28281){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_28281);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e28298){if((e28298 instanceof Object)){
var ex__26741__auto__ = e28298;
var statearr_28299_28313 = state_28281;
(statearr_28299_28313[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28281);

return cljs.core.cst$kw$recur;
} else {
throw e28298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__28314 = state_28281;
state_28281 = G__28314;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$state_machine__26738__auto__ = function(state_28281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26738__auto____1.call(this,state_28281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26738__auto____0;
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26738__auto____1;
return cljs$core$async$state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_28300 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_28300[(6)] = c__26842__auto___28302);

return statearr_28300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28316 = (function (f,ch,meta28317){
this.f = f;
this.ch = ch;
this.meta28317 = meta28317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28318,meta28317__$1){
var self__ = this;
var _28318__$1 = this;
return (new cljs.core.async.t_cljs$core$async28316(self__.f,self__.ch,meta28317__$1));
}));

(cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28318){
var self__ = this;
var _28318__$1 = this;
return self__.meta28317;
}));

(cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28319 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28319 = (function (f,ch,meta28317,_,fn1,meta28320){
this.f = f;
this.ch = ch;
this.meta28317 = meta28317;
this._ = _;
this.fn1 = fn1;
this.meta28320 = meta28320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28321,meta28320__$1){
var self__ = this;
var _28321__$1 = this;
return (new cljs.core.async.t_cljs$core$async28319(self__.f,self__.ch,self__.meta28317,self__._,self__.fn1,meta28320__$1));
}));

(cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28321){
var self__ = this;
var _28321__$1 = this;
return self__.meta28320;
}));

(cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__28315_SHARP_){
var G__28322 = (((p1__28315_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__28315_SHARP_) : self__.f.call(null,p1__28315_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28322) : f1.call(null,G__28322));
});
}));

(cljs.core.async.t_cljs$core$async28319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28317,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async28316], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta28320], null);
}));

(cljs.core.async.t_cljs$core$async28319.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28319");

(cljs.core.async.t_cljs$core$async28319.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async28319");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28319.
 */
cljs.core.async.__GT_t_cljs$core$async28319 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28319(f__$1,ch__$1,meta28317__$1,___$2,fn1__$1,meta28320){
return (new cljs.core.async.t_cljs$core$async28319(f__$1,ch__$1,meta28317__$1,___$2,fn1__$1,meta28320));
});

}

return (new cljs.core.async.t_cljs$core$async28319(self__.f,self__.ch,self__.meta28317,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__28323 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28323) : self__.f.call(null,G__28323));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28316.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28317], null);
}));

(cljs.core.async.t_cljs$core$async28316.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28316");

(cljs.core.async.t_cljs$core$async28316.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async28316");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28316.
 */
cljs.core.async.__GT_t_cljs$core$async28316 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28316(f__$1,ch__$1,meta28317){
return (new cljs.core.async.t_cljs$core$async28316(f__$1,ch__$1,meta28317));
});

}

return (new cljs.core.async.t_cljs$core$async28316(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28324 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28324 = (function (f,ch,meta28325){
this.f = f;
this.ch = ch;
this.meta28325 = meta28325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28326,meta28325__$1){
var self__ = this;
var _28326__$1 = this;
return (new cljs.core.async.t_cljs$core$async28324(self__.f,self__.ch,meta28325__$1));
}));

(cljs.core.async.t_cljs$core$async28324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28326){
var self__ = this;
var _28326__$1 = this;
return self__.meta28325;
}));

(cljs.core.async.t_cljs$core$async28324.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28324.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28324.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28324.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28324.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28324.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async28324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28325], null);
}));

(cljs.core.async.t_cljs$core$async28324.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28324");

(cljs.core.async.t_cljs$core$async28324.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async28324");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28324.
 */
cljs.core.async.__GT_t_cljs$core$async28324 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28324(f__$1,ch__$1,meta28325){
return (new cljs.core.async.t_cljs$core$async28324(f__$1,ch__$1,meta28325));
});

}

return (new cljs.core.async.t_cljs$core$async28324(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28327 = (function (p,ch,meta28328){
this.p = p;
this.ch = ch;
this.meta28328 = meta28328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28329,meta28328__$1){
var self__ = this;
var _28329__$1 = this;
return (new cljs.core.async.t_cljs$core$async28327(self__.p,self__.ch,meta28328__$1));
}));

(cljs.core.async.t_cljs$core$async28327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28329){
var self__ = this;
var _28329__$1 = this;
return self__.meta28328;
}));

(cljs.core.async.t_cljs$core$async28327.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28327.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28327.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28327.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28328], null);
}));

(cljs.core.async.t_cljs$core$async28327.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28327");

(cljs.core.async.t_cljs$core$async28327.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async28327");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28327.
 */
cljs.core.async.__GT_t_cljs$core$async28327 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28327(p__$1,ch__$1,meta28328){
return (new cljs.core.async.t_cljs$core$async28327(p__$1,ch__$1,meta28328));
});

}

return (new cljs.core.async.t_cljs$core$async28327(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28331 = arguments.length;
switch (G__28331) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26842__auto___28371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_28352){
var state_val_28353 = (state_28352[(1)]);
if((state_val_28353 === (7))){
var inst_28348 = (state_28352[(2)]);
var state_28352__$1 = state_28352;
var statearr_28354_28372 = state_28352__$1;
(statearr_28354_28372[(2)] = inst_28348);

(statearr_28354_28372[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28353 === (1))){
var state_28352__$1 = state_28352;
var statearr_28355_28373 = state_28352__$1;
(statearr_28355_28373[(2)] = null);

(statearr_28355_28373[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28353 === (4))){
var inst_28334 = (state_28352[(7)]);
var inst_28334__$1 = (state_28352[(2)]);
var inst_28335 = (inst_28334__$1 == null);
var state_28352__$1 = (function (){var statearr_28356 = state_28352;
(statearr_28356[(7)] = inst_28334__$1);

return statearr_28356;
})();
if(cljs.core.truth_(inst_28335)){
var statearr_28357_28374 = state_28352__$1;
(statearr_28357_28374[(1)] = (5));

} else {
var statearr_28358_28375 = state_28352__$1;
(statearr_28358_28375[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28353 === (6))){
var inst_28334 = (state_28352[(7)]);
var inst_28339 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28334) : p.call(null,inst_28334));
var state_28352__$1 = state_28352;
if(cljs.core.truth_(inst_28339)){
var statearr_28359_28376 = state_28352__$1;
(statearr_28359_28376[(1)] = (8));

} else {
var statearr_28360_28377 = state_28352__$1;
(statearr_28360_28377[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28353 === (3))){
var inst_28350 = (state_28352[(2)]);
var state_28352__$1 = state_28352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28352__$1,inst_28350);
} else {
if((state_val_28353 === (2))){
var state_28352__$1 = state_28352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28352__$1,(4),ch);
} else {
if((state_val_28353 === (11))){
var inst_28342 = (state_28352[(2)]);
var state_28352__$1 = state_28352;
var statearr_28361_28378 = state_28352__$1;
(statearr_28361_28378[(2)] = inst_28342);

(statearr_28361_28378[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28353 === (9))){
var state_28352__$1 = state_28352;
var statearr_28362_28379 = state_28352__$1;
(statearr_28362_28379[(2)] = null);

(statearr_28362_28379[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28353 === (5))){
var inst_28337 = cljs.core.async.close_BANG_(out);
var state_28352__$1 = state_28352;
var statearr_28363_28380 = state_28352__$1;
(statearr_28363_28380[(2)] = inst_28337);

(statearr_28363_28380[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28353 === (10))){
var inst_28345 = (state_28352[(2)]);
var state_28352__$1 = (function (){var statearr_28364 = state_28352;
(statearr_28364[(8)] = inst_28345);

return statearr_28364;
})();
var statearr_28365_28381 = state_28352__$1;
(statearr_28365_28381[(2)] = null);

(statearr_28365_28381[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28353 === (8))){
var inst_28334 = (state_28352[(7)]);
var state_28352__$1 = state_28352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28352__$1,(11),out,inst_28334);
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
var cljs$core$async$state_machine__26738__auto__ = null;
var cljs$core$async$state_machine__26738__auto____0 = (function (){
var statearr_28366 = [null,null,null,null,null,null,null,null,null];
(statearr_28366[(0)] = cljs$core$async$state_machine__26738__auto__);

(statearr_28366[(1)] = (1));

return statearr_28366;
});
var cljs$core$async$state_machine__26738__auto____1 = (function (state_28352){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_28352);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e28367){if((e28367 instanceof Object)){
var ex__26741__auto__ = e28367;
var statearr_28368_28382 = state_28352;
(statearr_28368_28382[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28352);

return cljs.core.cst$kw$recur;
} else {
throw e28367;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__28383 = state_28352;
state_28352 = G__28383;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$state_machine__26738__auto__ = function(state_28352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26738__auto____1.call(this,state_28352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26738__auto____0;
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26738__auto____1;
return cljs$core$async$state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_28369 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_28369[(6)] = c__26842__auto___28371);

return statearr_28369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28385 = arguments.length;
switch (G__28385) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26842__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_28448){
var state_val_28449 = (state_28448[(1)]);
if((state_val_28449 === (7))){
var inst_28444 = (state_28448[(2)]);
var state_28448__$1 = state_28448;
var statearr_28450_28488 = state_28448__$1;
(statearr_28450_28488[(2)] = inst_28444);

(statearr_28450_28488[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (20))){
var inst_28414 = (state_28448[(7)]);
var inst_28425 = (state_28448[(2)]);
var inst_28426 = cljs.core.next(inst_28414);
var inst_28400 = inst_28426;
var inst_28401 = null;
var inst_28402 = (0);
var inst_28403 = (0);
var state_28448__$1 = (function (){var statearr_28451 = state_28448;
(statearr_28451[(8)] = inst_28402);

(statearr_28451[(9)] = inst_28425);

(statearr_28451[(10)] = inst_28403);

(statearr_28451[(11)] = inst_28401);

(statearr_28451[(12)] = inst_28400);

return statearr_28451;
})();
var statearr_28452_28489 = state_28448__$1;
(statearr_28452_28489[(2)] = null);

(statearr_28452_28489[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (1))){
var state_28448__$1 = state_28448;
var statearr_28453_28490 = state_28448__$1;
(statearr_28453_28490[(2)] = null);

(statearr_28453_28490[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (4))){
var inst_28389 = (state_28448[(13)]);
var inst_28389__$1 = (state_28448[(2)]);
var inst_28390 = (inst_28389__$1 == null);
var state_28448__$1 = (function (){var statearr_28454 = state_28448;
(statearr_28454[(13)] = inst_28389__$1);

return statearr_28454;
})();
if(cljs.core.truth_(inst_28390)){
var statearr_28455_28491 = state_28448__$1;
(statearr_28455_28491[(1)] = (5));

} else {
var statearr_28456_28492 = state_28448__$1;
(statearr_28456_28492[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (15))){
var state_28448__$1 = state_28448;
var statearr_28460_28493 = state_28448__$1;
(statearr_28460_28493[(2)] = null);

(statearr_28460_28493[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (21))){
var state_28448__$1 = state_28448;
var statearr_28461_28494 = state_28448__$1;
(statearr_28461_28494[(2)] = null);

(statearr_28461_28494[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (13))){
var inst_28402 = (state_28448[(8)]);
var inst_28403 = (state_28448[(10)]);
var inst_28401 = (state_28448[(11)]);
var inst_28400 = (state_28448[(12)]);
var inst_28410 = (state_28448[(2)]);
var inst_28411 = (inst_28403 + (1));
var tmp28457 = inst_28402;
var tmp28458 = inst_28401;
var tmp28459 = inst_28400;
var inst_28400__$1 = tmp28459;
var inst_28401__$1 = tmp28458;
var inst_28402__$1 = tmp28457;
var inst_28403__$1 = inst_28411;
var state_28448__$1 = (function (){var statearr_28462 = state_28448;
(statearr_28462[(8)] = inst_28402__$1);

(statearr_28462[(10)] = inst_28403__$1);

(statearr_28462[(11)] = inst_28401__$1);

(statearr_28462[(12)] = inst_28400__$1);

(statearr_28462[(14)] = inst_28410);

return statearr_28462;
})();
var statearr_28463_28495 = state_28448__$1;
(statearr_28463_28495[(2)] = null);

(statearr_28463_28495[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (22))){
var state_28448__$1 = state_28448;
var statearr_28464_28496 = state_28448__$1;
(statearr_28464_28496[(2)] = null);

(statearr_28464_28496[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (6))){
var inst_28389 = (state_28448[(13)]);
var inst_28398 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28389) : f.call(null,inst_28389));
var inst_28399 = cljs.core.seq(inst_28398);
var inst_28400 = inst_28399;
var inst_28401 = null;
var inst_28402 = (0);
var inst_28403 = (0);
var state_28448__$1 = (function (){var statearr_28465 = state_28448;
(statearr_28465[(8)] = inst_28402);

(statearr_28465[(10)] = inst_28403);

(statearr_28465[(11)] = inst_28401);

(statearr_28465[(12)] = inst_28400);

return statearr_28465;
})();
var statearr_28466_28497 = state_28448__$1;
(statearr_28466_28497[(2)] = null);

(statearr_28466_28497[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (17))){
var inst_28414 = (state_28448[(7)]);
var inst_28418 = cljs.core.chunk_first(inst_28414);
var inst_28419 = cljs.core.chunk_rest(inst_28414);
var inst_28420 = cljs.core.count(inst_28418);
var inst_28400 = inst_28419;
var inst_28401 = inst_28418;
var inst_28402 = inst_28420;
var inst_28403 = (0);
var state_28448__$1 = (function (){var statearr_28467 = state_28448;
(statearr_28467[(8)] = inst_28402);

(statearr_28467[(10)] = inst_28403);

(statearr_28467[(11)] = inst_28401);

(statearr_28467[(12)] = inst_28400);

return statearr_28467;
})();
var statearr_28468_28498 = state_28448__$1;
(statearr_28468_28498[(2)] = null);

(statearr_28468_28498[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (3))){
var inst_28446 = (state_28448[(2)]);
var state_28448__$1 = state_28448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28448__$1,inst_28446);
} else {
if((state_val_28449 === (12))){
var inst_28434 = (state_28448[(2)]);
var state_28448__$1 = state_28448;
var statearr_28469_28499 = state_28448__$1;
(statearr_28469_28499[(2)] = inst_28434);

(statearr_28469_28499[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (2))){
var state_28448__$1 = state_28448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28448__$1,(4),in$);
} else {
if((state_val_28449 === (23))){
var inst_28442 = (state_28448[(2)]);
var state_28448__$1 = state_28448;
var statearr_28470_28500 = state_28448__$1;
(statearr_28470_28500[(2)] = inst_28442);

(statearr_28470_28500[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (19))){
var inst_28429 = (state_28448[(2)]);
var state_28448__$1 = state_28448;
var statearr_28471_28501 = state_28448__$1;
(statearr_28471_28501[(2)] = inst_28429);

(statearr_28471_28501[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (11))){
var inst_28414 = (state_28448[(7)]);
var inst_28400 = (state_28448[(12)]);
var inst_28414__$1 = cljs.core.seq(inst_28400);
var state_28448__$1 = (function (){var statearr_28472 = state_28448;
(statearr_28472[(7)] = inst_28414__$1);

return statearr_28472;
})();
if(inst_28414__$1){
var statearr_28473_28502 = state_28448__$1;
(statearr_28473_28502[(1)] = (14));

} else {
var statearr_28474_28503 = state_28448__$1;
(statearr_28474_28503[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (9))){
var inst_28436 = (state_28448[(2)]);
var inst_28437 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_28448__$1 = (function (){var statearr_28475 = state_28448;
(statearr_28475[(15)] = inst_28436);

return statearr_28475;
})();
if(cljs.core.truth_(inst_28437)){
var statearr_28476_28504 = state_28448__$1;
(statearr_28476_28504[(1)] = (21));

} else {
var statearr_28477_28505 = state_28448__$1;
(statearr_28477_28505[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (5))){
var inst_28392 = cljs.core.async.close_BANG_(out);
var state_28448__$1 = state_28448;
var statearr_28478_28506 = state_28448__$1;
(statearr_28478_28506[(2)] = inst_28392);

(statearr_28478_28506[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (14))){
var inst_28414 = (state_28448[(7)]);
var inst_28416 = cljs.core.chunked_seq_QMARK_(inst_28414);
var state_28448__$1 = state_28448;
if(inst_28416){
var statearr_28479_28507 = state_28448__$1;
(statearr_28479_28507[(1)] = (17));

} else {
var statearr_28480_28508 = state_28448__$1;
(statearr_28480_28508[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (16))){
var inst_28432 = (state_28448[(2)]);
var state_28448__$1 = state_28448;
var statearr_28481_28509 = state_28448__$1;
(statearr_28481_28509[(2)] = inst_28432);

(statearr_28481_28509[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28449 === (10))){
var inst_28403 = (state_28448[(10)]);
var inst_28401 = (state_28448[(11)]);
var inst_28408 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28401,inst_28403);
var state_28448__$1 = state_28448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28448__$1,(13),out,inst_28408);
} else {
if((state_val_28449 === (18))){
var inst_28414 = (state_28448[(7)]);
var inst_28423 = cljs.core.first(inst_28414);
var state_28448__$1 = state_28448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28448__$1,(20),out,inst_28423);
} else {
if((state_val_28449 === (8))){
var inst_28402 = (state_28448[(8)]);
var inst_28403 = (state_28448[(10)]);
var inst_28405 = (inst_28403 < inst_28402);
var inst_28406 = inst_28405;
var state_28448__$1 = state_28448;
if(cljs.core.truth_(inst_28406)){
var statearr_28482_28510 = state_28448__$1;
(statearr_28482_28510[(1)] = (10));

} else {
var statearr_28483_28511 = state_28448__$1;
(statearr_28483_28511[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mapcat_STAR__$_state_machine__26738__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26738__auto____0 = (function (){
var statearr_28484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28484[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26738__auto__);

(statearr_28484[(1)] = (1));

return statearr_28484;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26738__auto____1 = (function (state_28448){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_28448);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e28485){if((e28485 instanceof Object)){
var ex__26741__auto__ = e28485;
var statearr_28486_28512 = state_28448;
(statearr_28486_28512[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28448);

return cljs.core.cst$kw$recur;
} else {
throw e28485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__28513 = state_28448;
state_28448 = G__28513;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26738__auto__ = function(state_28448){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26738__auto____1.call(this,state_28448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26738__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26738__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_28487 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_28487[(6)] = c__26842__auto__);

return statearr_28487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
}));

return c__26842__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28515 = arguments.length;
switch (G__28515) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28518 = arguments.length;
switch (G__28518) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28521 = arguments.length;
switch (G__28521) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26842__auto___28568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_28545){
var state_val_28546 = (state_28545[(1)]);
if((state_val_28546 === (7))){
var inst_28540 = (state_28545[(2)]);
var state_28545__$1 = state_28545;
var statearr_28547_28569 = state_28545__$1;
(statearr_28547_28569[(2)] = inst_28540);

(statearr_28547_28569[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28546 === (1))){
var inst_28522 = null;
var state_28545__$1 = (function (){var statearr_28548 = state_28545;
(statearr_28548[(7)] = inst_28522);

return statearr_28548;
})();
var statearr_28549_28570 = state_28545__$1;
(statearr_28549_28570[(2)] = null);

(statearr_28549_28570[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28546 === (4))){
var inst_28525 = (state_28545[(8)]);
var inst_28525__$1 = (state_28545[(2)]);
var inst_28526 = (inst_28525__$1 == null);
var inst_28527 = cljs.core.not(inst_28526);
var state_28545__$1 = (function (){var statearr_28550 = state_28545;
(statearr_28550[(8)] = inst_28525__$1);

return statearr_28550;
})();
if(inst_28527){
var statearr_28551_28571 = state_28545__$1;
(statearr_28551_28571[(1)] = (5));

} else {
var statearr_28552_28572 = state_28545__$1;
(statearr_28552_28572[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28546 === (6))){
var state_28545__$1 = state_28545;
var statearr_28553_28573 = state_28545__$1;
(statearr_28553_28573[(2)] = null);

(statearr_28553_28573[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28546 === (3))){
var inst_28542 = (state_28545[(2)]);
var inst_28543 = cljs.core.async.close_BANG_(out);
var state_28545__$1 = (function (){var statearr_28554 = state_28545;
(statearr_28554[(9)] = inst_28542);

return statearr_28554;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28545__$1,inst_28543);
} else {
if((state_val_28546 === (2))){
var state_28545__$1 = state_28545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28545__$1,(4),ch);
} else {
if((state_val_28546 === (11))){
var inst_28525 = (state_28545[(8)]);
var inst_28534 = (state_28545[(2)]);
var inst_28522 = inst_28525;
var state_28545__$1 = (function (){var statearr_28555 = state_28545;
(statearr_28555[(7)] = inst_28522);

(statearr_28555[(10)] = inst_28534);

return statearr_28555;
})();
var statearr_28556_28574 = state_28545__$1;
(statearr_28556_28574[(2)] = null);

(statearr_28556_28574[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28546 === (9))){
var inst_28525 = (state_28545[(8)]);
var state_28545__$1 = state_28545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28545__$1,(11),out,inst_28525);
} else {
if((state_val_28546 === (5))){
var inst_28522 = (state_28545[(7)]);
var inst_28525 = (state_28545[(8)]);
var inst_28529 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28525,inst_28522);
var state_28545__$1 = state_28545;
if(inst_28529){
var statearr_28558_28575 = state_28545__$1;
(statearr_28558_28575[(1)] = (8));

} else {
var statearr_28559_28576 = state_28545__$1;
(statearr_28559_28576[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28546 === (10))){
var inst_28537 = (state_28545[(2)]);
var state_28545__$1 = state_28545;
var statearr_28560_28577 = state_28545__$1;
(statearr_28560_28577[(2)] = inst_28537);

(statearr_28560_28577[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28546 === (8))){
var inst_28522 = (state_28545[(7)]);
var tmp28557 = inst_28522;
var inst_28522__$1 = tmp28557;
var state_28545__$1 = (function (){var statearr_28561 = state_28545;
(statearr_28561[(7)] = inst_28522__$1);

return statearr_28561;
})();
var statearr_28562_28578 = state_28545__$1;
(statearr_28562_28578[(2)] = null);

(statearr_28562_28578[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__26738__auto__ = null;
var cljs$core$async$state_machine__26738__auto____0 = (function (){
var statearr_28563 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28563[(0)] = cljs$core$async$state_machine__26738__auto__);

(statearr_28563[(1)] = (1));

return statearr_28563;
});
var cljs$core$async$state_machine__26738__auto____1 = (function (state_28545){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_28545);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e28564){if((e28564 instanceof Object)){
var ex__26741__auto__ = e28564;
var statearr_28565_28579 = state_28545;
(statearr_28565_28579[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28545);

return cljs.core.cst$kw$recur;
} else {
throw e28564;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__28580 = state_28545;
state_28545 = G__28580;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$state_machine__26738__auto__ = function(state_28545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26738__auto____1.call(this,state_28545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26738__auto____0;
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26738__auto____1;
return cljs$core$async$state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_28566 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_28566[(6)] = c__26842__auto___28568);

return statearr_28566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28582 = arguments.length;
switch (G__28582) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26842__auto___28648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_28620){
var state_val_28621 = (state_28620[(1)]);
if((state_val_28621 === (7))){
var inst_28616 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
var statearr_28622_28649 = state_28620__$1;
(statearr_28622_28649[(2)] = inst_28616);

(statearr_28622_28649[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (1))){
var inst_28583 = (new Array(n));
var inst_28584 = inst_28583;
var inst_28585 = (0);
var state_28620__$1 = (function (){var statearr_28623 = state_28620;
(statearr_28623[(7)] = inst_28585);

(statearr_28623[(8)] = inst_28584);

return statearr_28623;
})();
var statearr_28624_28650 = state_28620__$1;
(statearr_28624_28650[(2)] = null);

(statearr_28624_28650[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (4))){
var inst_28588 = (state_28620[(9)]);
var inst_28588__$1 = (state_28620[(2)]);
var inst_28589 = (inst_28588__$1 == null);
var inst_28590 = cljs.core.not(inst_28589);
var state_28620__$1 = (function (){var statearr_28625 = state_28620;
(statearr_28625[(9)] = inst_28588__$1);

return statearr_28625;
})();
if(inst_28590){
var statearr_28626_28651 = state_28620__$1;
(statearr_28626_28651[(1)] = (5));

} else {
var statearr_28627_28652 = state_28620__$1;
(statearr_28627_28652[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (15))){
var inst_28610 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
var statearr_28628_28653 = state_28620__$1;
(statearr_28628_28653[(2)] = inst_28610);

(statearr_28628_28653[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (13))){
var state_28620__$1 = state_28620;
var statearr_28629_28654 = state_28620__$1;
(statearr_28629_28654[(2)] = null);

(statearr_28629_28654[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (6))){
var inst_28585 = (state_28620[(7)]);
var inst_28606 = (inst_28585 > (0));
var state_28620__$1 = state_28620;
if(cljs.core.truth_(inst_28606)){
var statearr_28630_28655 = state_28620__$1;
(statearr_28630_28655[(1)] = (12));

} else {
var statearr_28631_28656 = state_28620__$1;
(statearr_28631_28656[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (3))){
var inst_28618 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28620__$1,inst_28618);
} else {
if((state_val_28621 === (12))){
var inst_28584 = (state_28620[(8)]);
var inst_28608 = cljs.core.vec(inst_28584);
var state_28620__$1 = state_28620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28620__$1,(15),out,inst_28608);
} else {
if((state_val_28621 === (2))){
var state_28620__$1 = state_28620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28620__$1,(4),ch);
} else {
if((state_val_28621 === (11))){
var inst_28600 = (state_28620[(2)]);
var inst_28601 = (new Array(n));
var inst_28584 = inst_28601;
var inst_28585 = (0);
var state_28620__$1 = (function (){var statearr_28632 = state_28620;
(statearr_28632[(10)] = inst_28600);

(statearr_28632[(7)] = inst_28585);

(statearr_28632[(8)] = inst_28584);

return statearr_28632;
})();
var statearr_28633_28657 = state_28620__$1;
(statearr_28633_28657[(2)] = null);

(statearr_28633_28657[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (9))){
var inst_28584 = (state_28620[(8)]);
var inst_28598 = cljs.core.vec(inst_28584);
var state_28620__$1 = state_28620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28620__$1,(11),out,inst_28598);
} else {
if((state_val_28621 === (5))){
var inst_28588 = (state_28620[(9)]);
var inst_28585 = (state_28620[(7)]);
var inst_28584 = (state_28620[(8)]);
var inst_28593 = (state_28620[(11)]);
var inst_28592 = (inst_28584[inst_28585] = inst_28588);
var inst_28593__$1 = (inst_28585 + (1));
var inst_28594 = (inst_28593__$1 < n);
var state_28620__$1 = (function (){var statearr_28634 = state_28620;
(statearr_28634[(12)] = inst_28592);

(statearr_28634[(11)] = inst_28593__$1);

return statearr_28634;
})();
if(cljs.core.truth_(inst_28594)){
var statearr_28635_28658 = state_28620__$1;
(statearr_28635_28658[(1)] = (8));

} else {
var statearr_28636_28659 = state_28620__$1;
(statearr_28636_28659[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (14))){
var inst_28613 = (state_28620[(2)]);
var inst_28614 = cljs.core.async.close_BANG_(out);
var state_28620__$1 = (function (){var statearr_28638 = state_28620;
(statearr_28638[(13)] = inst_28613);

return statearr_28638;
})();
var statearr_28639_28660 = state_28620__$1;
(statearr_28639_28660[(2)] = inst_28614);

(statearr_28639_28660[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (10))){
var inst_28604 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
var statearr_28640_28661 = state_28620__$1;
(statearr_28640_28661[(2)] = inst_28604);

(statearr_28640_28661[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28621 === (8))){
var inst_28584 = (state_28620[(8)]);
var inst_28593 = (state_28620[(11)]);
var tmp28637 = inst_28584;
var inst_28584__$1 = tmp28637;
var inst_28585 = inst_28593;
var state_28620__$1 = (function (){var statearr_28641 = state_28620;
(statearr_28641[(7)] = inst_28585);

(statearr_28641[(8)] = inst_28584__$1);

return statearr_28641;
})();
var statearr_28642_28662 = state_28620__$1;
(statearr_28642_28662[(2)] = null);

(statearr_28642_28662[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__26738__auto__ = null;
var cljs$core$async$state_machine__26738__auto____0 = (function (){
var statearr_28643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28643[(0)] = cljs$core$async$state_machine__26738__auto__);

(statearr_28643[(1)] = (1));

return statearr_28643;
});
var cljs$core$async$state_machine__26738__auto____1 = (function (state_28620){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_28620);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e28644){if((e28644 instanceof Object)){
var ex__26741__auto__ = e28644;
var statearr_28645_28663 = state_28620;
(statearr_28645_28663[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28620);

return cljs.core.cst$kw$recur;
} else {
throw e28644;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__28664 = state_28620;
state_28620 = G__28664;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$state_machine__26738__auto__ = function(state_28620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26738__auto____1.call(this,state_28620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26738__auto____0;
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26738__auto____1;
return cljs$core$async$state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_28646 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_28646[(6)] = c__26842__auto___28648);

return statearr_28646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28666 = arguments.length;
switch (G__28666) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26842__auto___28736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26843__auto__ = (function (){var switch__26737__auto__ = (function (state_28708){
var state_val_28709 = (state_28708[(1)]);
if((state_val_28709 === (7))){
var inst_28704 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28710_28737 = state_28708__$1;
(statearr_28710_28737[(2)] = inst_28704);

(statearr_28710_28737[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28709 === (1))){
var inst_28667 = [];
var inst_28668 = inst_28667;
var inst_28669 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_28708__$1 = (function (){var statearr_28711 = state_28708;
(statearr_28711[(7)] = inst_28668);

(statearr_28711[(8)] = inst_28669);

return statearr_28711;
})();
var statearr_28712_28738 = state_28708__$1;
(statearr_28712_28738[(2)] = null);

(statearr_28712_28738[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28709 === (4))){
var inst_28672 = (state_28708[(9)]);
var inst_28672__$1 = (state_28708[(2)]);
var inst_28673 = (inst_28672__$1 == null);
var inst_28674 = cljs.core.not(inst_28673);
var state_28708__$1 = (function (){var statearr_28713 = state_28708;
(statearr_28713[(9)] = inst_28672__$1);

return statearr_28713;
})();
if(inst_28674){
var statearr_28714_28739 = state_28708__$1;
(statearr_28714_28739[(1)] = (5));

} else {
var statearr_28715_28740 = state_28708__$1;
(statearr_28715_28740[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28709 === (15))){
var inst_28698 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28716_28741 = state_28708__$1;
(statearr_28716_28741[(2)] = inst_28698);

(statearr_28716_28741[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28709 === (13))){
var state_28708__$1 = state_28708;
var statearr_28717_28742 = state_28708__$1;
(statearr_28717_28742[(2)] = null);

(statearr_28717_28742[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28709 === (6))){
var inst_28668 = (state_28708[(7)]);
var inst_28693 = inst_28668.length;
var inst_28694 = (inst_28693 > (0));
var state_28708__$1 = state_28708;
if(cljs.core.truth_(inst_28694)){
var statearr_28718_28743 = state_28708__$1;
(statearr_28718_28743[(1)] = (12));

} else {
var statearr_28719_28744 = state_28708__$1;
(statearr_28719_28744[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28709 === (3))){
var inst_28706 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28708__$1,inst_28706);
} else {
if((state_val_28709 === (12))){
var inst_28668 = (state_28708[(7)]);
var inst_28696 = cljs.core.vec(inst_28668);
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28708__$1,(15),out,inst_28696);
} else {
if((state_val_28709 === (2))){
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28708__$1,(4),ch);
} else {
if((state_val_28709 === (11))){
var inst_28676 = (state_28708[(10)]);
var inst_28672 = (state_28708[(9)]);
var inst_28686 = (state_28708[(2)]);
var inst_28687 = [];
var inst_28688 = inst_28687.push(inst_28672);
var inst_28668 = inst_28687;
var inst_28669 = inst_28676;
var state_28708__$1 = (function (){var statearr_28720 = state_28708;
(statearr_28720[(7)] = inst_28668);

(statearr_28720[(11)] = inst_28686);

(statearr_28720[(12)] = inst_28688);

(statearr_28720[(8)] = inst_28669);

return statearr_28720;
})();
var statearr_28721_28745 = state_28708__$1;
(statearr_28721_28745[(2)] = null);

(statearr_28721_28745[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28709 === (9))){
var inst_28668 = (state_28708[(7)]);
var inst_28684 = cljs.core.vec(inst_28668);
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28708__$1,(11),out,inst_28684);
} else {
if((state_val_28709 === (5))){
var inst_28669 = (state_28708[(8)]);
var inst_28676 = (state_28708[(10)]);
var inst_28672 = (state_28708[(9)]);
var inst_28676__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28672) : f.call(null,inst_28672));
var inst_28677 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28676__$1,inst_28669);
var inst_28678 = cljs.core.keyword_identical_QMARK_(inst_28669,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_28679 = ((inst_28677) || (inst_28678));
var state_28708__$1 = (function (){var statearr_28722 = state_28708;
(statearr_28722[(10)] = inst_28676__$1);

return statearr_28722;
})();
if(cljs.core.truth_(inst_28679)){
var statearr_28723_28746 = state_28708__$1;
(statearr_28723_28746[(1)] = (8));

} else {
var statearr_28724_28747 = state_28708__$1;
(statearr_28724_28747[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28709 === (14))){
var inst_28701 = (state_28708[(2)]);
var inst_28702 = cljs.core.async.close_BANG_(out);
var state_28708__$1 = (function (){var statearr_28726 = state_28708;
(statearr_28726[(13)] = inst_28701);

return statearr_28726;
})();
var statearr_28727_28748 = state_28708__$1;
(statearr_28727_28748[(2)] = inst_28702);

(statearr_28727_28748[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28709 === (10))){
var inst_28691 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28728_28749 = state_28708__$1;
(statearr_28728_28749[(2)] = inst_28691);

(statearr_28728_28749[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28709 === (8))){
var inst_28668 = (state_28708[(7)]);
var inst_28676 = (state_28708[(10)]);
var inst_28672 = (state_28708[(9)]);
var inst_28681 = inst_28668.push(inst_28672);
var tmp28725 = inst_28668;
var inst_28668__$1 = tmp28725;
var inst_28669 = inst_28676;
var state_28708__$1 = (function (){var statearr_28729 = state_28708;
(statearr_28729[(7)] = inst_28668__$1);

(statearr_28729[(14)] = inst_28681);

(statearr_28729[(8)] = inst_28669);

return statearr_28729;
})();
var statearr_28730_28750 = state_28708__$1;
(statearr_28730_28750[(2)] = null);

(statearr_28730_28750[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__26738__auto__ = null;
var cljs$core$async$state_machine__26738__auto____0 = (function (){
var statearr_28731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28731[(0)] = cljs$core$async$state_machine__26738__auto__);

(statearr_28731[(1)] = (1));

return statearr_28731;
});
var cljs$core$async$state_machine__26738__auto____1 = (function (state_28708){
while(true){
var ret_value__26739__auto__ = (function (){try{while(true){
var result__26740__auto__ = switch__26737__auto__(state_28708);
if(cljs.core.keyword_identical_QMARK_(result__26740__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26740__auto__;
}
break;
}
}catch (e28732){if((e28732 instanceof Object)){
var ex__26741__auto__ = e28732;
var statearr_28733_28751 = state_28708;
(statearr_28733_28751[(5)] = ex__26741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28708);

return cljs.core.cst$kw$recur;
} else {
throw e28732;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26739__auto__,cljs.core.cst$kw$recur)){
var G__28752 = state_28708;
state_28708 = G__28752;
continue;
} else {
return ret_value__26739__auto__;
}
break;
}
});
cljs$core$async$state_machine__26738__auto__ = function(state_28708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26738__auto____1.call(this,state_28708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26738__auto____0;
cljs$core$async$state_machine__26738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26738__auto____1;
return cljs$core$async$state_machine__26738__auto__;
})()
})();
var state__26844__auto__ = (function (){var statearr_28734 = (f__26843__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26843__auto__.cljs$core$IFn$_invoke$arity$0() : f__26843__auto__.call(null));
(statearr_28734[(6)] = c__26842__auto___28736);

return statearr_28734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26844__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

