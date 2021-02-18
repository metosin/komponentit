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
var G__31108 = arguments.length;
switch (G__31108) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31109 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31109 = (function (f,blockable,meta31110){
this.f = f;
this.blockable = blockable;
this.meta31110 = meta31110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31111,meta31110__$1){
var self__ = this;
var _31111__$1 = this;
return (new cljs.core.async.t_cljs$core$async31109(self__.f,self__.blockable,meta31110__$1));
}));

(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31111){
var self__ = this;
var _31111__$1 = this;
return self__.meta31110;
}));

(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta31110], null);
}));

(cljs.core.async.t_cljs$core$async31109.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31109");

(cljs.core.async.t_cljs$core$async31109.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31109");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31109.
 */
cljs.core.async.__GT_t_cljs$core$async31109 = (function cljs$core$async$__GT_t_cljs$core$async31109(f__$1,blockable__$1,meta31110){
return (new cljs.core.async.t_cljs$core$async31109(f__$1,blockable__$1,meta31110));
});

}

return (new cljs.core.async.t_cljs$core$async31109(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31115 = arguments.length;
switch (G__31115) {
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
var G__31118 = arguments.length;
switch (G__31118) {
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
var G__31121 = arguments.length;
switch (G__31121) {
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
var val_31123 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31123) : fn1.call(null,val_31123));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31123) : fn1.call(null,val_31123));
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
var G__31125 = arguments.length;
switch (G__31125) {
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
var n__4666__auto___31127 = n;
var x_31128 = (0);
while(true){
if((x_31128 < n__4666__auto___31127)){
(a[x_31128] = (0));

var G__31129 = (x_31128 + (1));
x_31128 = G__31129;
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

var G__31130 = (i + (1));
i = G__31130;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31131 = (function (flag,meta31132){
this.flag = flag;
this.meta31132 = meta31132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31133,meta31132__$1){
var self__ = this;
var _31133__$1 = this;
return (new cljs.core.async.t_cljs$core$async31131(self__.flag,meta31132__$1));
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31133){
var self__ = this;
var _31133__$1 = this;
return self__.meta31132;
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta31132], null);
}));

(cljs.core.async.t_cljs$core$async31131.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31131");

(cljs.core.async.t_cljs$core$async31131.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31131");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31131.
 */
cljs.core.async.__GT_t_cljs$core$async31131 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31131(flag__$1,meta31132){
return (new cljs.core.async.t_cljs$core$async31131(flag__$1,meta31132));
});

}

return (new cljs.core.async.t_cljs$core$async31131(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31134 = (function (flag,cb,meta31135){
this.flag = flag;
this.cb = cb;
this.meta31135 = meta31135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31136,meta31135__$1){
var self__ = this;
var _31136__$1 = this;
return (new cljs.core.async.t_cljs$core$async31134(self__.flag,self__.cb,meta31135__$1));
}));

(cljs.core.async.t_cljs$core$async31134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31136){
var self__ = this;
var _31136__$1 = this;
return self__.meta31135;
}));

(cljs.core.async.t_cljs$core$async31134.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31134.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta31135], null);
}));

(cljs.core.async.t_cljs$core$async31134.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31134");

(cljs.core.async.t_cljs$core$async31134.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31134");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31134.
 */
cljs.core.async.__GT_t_cljs$core$async31134 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31134(flag__$1,cb__$1,meta31135){
return (new cljs.core.async.t_cljs$core$async31134(flag__$1,cb__$1,meta31135));
});

}

return (new cljs.core.async.t_cljs$core$async31134(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31137_SHARP_){
var G__31139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31137_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31139) : fret.call(null,G__31139));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31138_SHARP_){
var G__31140 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31138_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31140) : fret.call(null,G__31140));
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
var G__31141 = (i + (1));
i = G__31141;
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
var len__4789__auto___31147 = arguments.length;
var i__4790__auto___31148 = (0);
while(true){
if((i__4790__auto___31148 < len__4789__auto___31147)){
args__4795__auto__.push((arguments[i__4790__auto___31148]));

var G__31149 = (i__4790__auto___31148 + (1));
i__4790__auto___31148 = G__31149;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31144){
var map__31145 = p__31144;
var map__31145__$1 = (((((!((map__31145 == null))))?(((((map__31145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31145):map__31145);
var opts = map__31145__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31142){
var G__31143 = cljs.core.first(seq31142);
var seq31142__$1 = cljs.core.next(seq31142);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31143,seq31142__$1);
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
var G__31151 = arguments.length;
switch (G__31151) {
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
var c__29194__auto___31197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_31175){
var state_val_31176 = (state_31175[(1)]);
if((state_val_31176 === (7))){
var inst_31171 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
var statearr_31177_31198 = state_31175__$1;
(statearr_31177_31198[(2)] = inst_31171);

(statearr_31177_31198[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31176 === (1))){
var state_31175__$1 = state_31175;
var statearr_31178_31199 = state_31175__$1;
(statearr_31178_31199[(2)] = null);

(statearr_31178_31199[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31176 === (4))){
var inst_31154 = (state_31175[(7)]);
var inst_31154__$1 = (state_31175[(2)]);
var inst_31155 = (inst_31154__$1 == null);
var state_31175__$1 = (function (){var statearr_31179 = state_31175;
(statearr_31179[(7)] = inst_31154__$1);

return statearr_31179;
})();
if(cljs.core.truth_(inst_31155)){
var statearr_31180_31200 = state_31175__$1;
(statearr_31180_31200[(1)] = (5));

} else {
var statearr_31181_31201 = state_31175__$1;
(statearr_31181_31201[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31176 === (13))){
var state_31175__$1 = state_31175;
var statearr_31182_31202 = state_31175__$1;
(statearr_31182_31202[(2)] = null);

(statearr_31182_31202[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31176 === (6))){
var inst_31154 = (state_31175[(7)]);
var state_31175__$1 = state_31175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31175__$1,(11),to,inst_31154);
} else {
if((state_val_31176 === (3))){
var inst_31173 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31175__$1,inst_31173);
} else {
if((state_val_31176 === (12))){
var state_31175__$1 = state_31175;
var statearr_31183_31203 = state_31175__$1;
(statearr_31183_31203[(2)] = null);

(statearr_31183_31203[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31176 === (2))){
var state_31175__$1 = state_31175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31175__$1,(4),from);
} else {
if((state_val_31176 === (11))){
var inst_31164 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
if(cljs.core.truth_(inst_31164)){
var statearr_31184_31204 = state_31175__$1;
(statearr_31184_31204[(1)] = (12));

} else {
var statearr_31185_31205 = state_31175__$1;
(statearr_31185_31205[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31176 === (9))){
var state_31175__$1 = state_31175;
var statearr_31186_31206 = state_31175__$1;
(statearr_31186_31206[(2)] = null);

(statearr_31186_31206[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31176 === (5))){
var state_31175__$1 = state_31175;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31187_31207 = state_31175__$1;
(statearr_31187_31207[(1)] = (8));

} else {
var statearr_31188_31208 = state_31175__$1;
(statearr_31188_31208[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31176 === (14))){
var inst_31169 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
var statearr_31189_31209 = state_31175__$1;
(statearr_31189_31209[(2)] = inst_31169);

(statearr_31189_31209[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31176 === (10))){
var inst_31161 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
var statearr_31190_31210 = state_31175__$1;
(statearr_31190_31210[(2)] = inst_31161);

(statearr_31190_31210[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31176 === (8))){
var inst_31158 = cljs.core.async.close_BANG_(to);
var state_31175__$1 = state_31175;
var statearr_31191_31211 = state_31175__$1;
(statearr_31191_31211[(2)] = inst_31158);

(statearr_31191_31211[(1)] = (10));


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
var cljs$core$async$state_machine__29006__auto__ = null;
var cljs$core$async$state_machine__29006__auto____0 = (function (){
var statearr_31192 = [null,null,null,null,null,null,null,null];
(statearr_31192[(0)] = cljs$core$async$state_machine__29006__auto__);

(statearr_31192[(1)] = (1));

return statearr_31192;
});
var cljs$core$async$state_machine__29006__auto____1 = (function (state_31175){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_31175);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e31193){if((e31193 instanceof Object)){
var ex__29009__auto__ = e31193;
var statearr_31194_31212 = state_31175;
(statearr_31194_31212[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31175);

return cljs.core.cst$kw$recur;
} else {
throw e31193;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__31213 = state_31175;
state_31175 = G__31213;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$state_machine__29006__auto__ = function(state_31175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29006__auto____1.call(this,state_31175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29006__auto____0;
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29006__auto____1;
return cljs$core$async$state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_31195 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_31195[(6)] = c__29194__auto___31197);

return statearr_31195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
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
var process = (function (p__31214){
var vec__31215 = p__31214;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31215,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31215,(1),null);
var job = vec__31215;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29194__auto___31386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_31222){
var state_val_31223 = (state_31222[(1)]);
if((state_val_31223 === (1))){
var state_31222__$1 = state_31222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31222__$1,(2),res,v);
} else {
if((state_val_31223 === (2))){
var inst_31219 = (state_31222[(2)]);
var inst_31220 = cljs.core.async.close_BANG_(res);
var state_31222__$1 = (function (){var statearr_31224 = state_31222;
(statearr_31224[(7)] = inst_31219);

return statearr_31224;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31222__$1,inst_31220);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____0 = (function (){
var statearr_31225 = [null,null,null,null,null,null,null,null];
(statearr_31225[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__);

(statearr_31225[(1)] = (1));

return statearr_31225;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____1 = (function (state_31222){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_31222);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e31226){if((e31226 instanceof Object)){
var ex__29009__auto__ = e31226;
var statearr_31227_31387 = state_31222;
(statearr_31227_31387[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31222);

return cljs.core.cst$kw$recur;
} else {
throw e31226;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__31388 = state_31222;
state_31222 = G__31388;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__ = function(state_31222){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____1.call(this,state_31222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_31228 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_31228[(6)] = c__29194__auto___31386);

return statearr_31228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31229){
var vec__31230 = p__31229;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31230,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31230,(1),null);
var job = vec__31230;
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
var n__4666__auto___31389 = n;
var __31390 = (0);
while(true){
if((__31390 < n__4666__auto___31389)){
var G__31233_31391 = type;
var G__31233_31392__$1 = (((G__31233_31391 instanceof cljs.core.Keyword))?G__31233_31391.fqn:null);
switch (G__31233_31392__$1) {
case "compute":
var c__29194__auto___31394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31390,c__29194__auto___31394,G__31233_31391,G__31233_31392__$1,n__4666__auto___31389,jobs,results,process,async){
return (function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = ((function (__31390,c__29194__auto___31394,G__31233_31391,G__31233_31392__$1,n__4666__auto___31389,jobs,results,process,async){
return (function (state_31246){
var state_val_31247 = (state_31246[(1)]);
if((state_val_31247 === (1))){
var state_31246__$1 = state_31246;
var statearr_31248_31395 = state_31246__$1;
(statearr_31248_31395[(2)] = null);

(statearr_31248_31395[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31247 === (2))){
var state_31246__$1 = state_31246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31246__$1,(4),jobs);
} else {
if((state_val_31247 === (3))){
var inst_31244 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31246__$1,inst_31244);
} else {
if((state_val_31247 === (4))){
var inst_31236 = (state_31246[(2)]);
var inst_31237 = process(inst_31236);
var state_31246__$1 = state_31246;
if(cljs.core.truth_(inst_31237)){
var statearr_31249_31396 = state_31246__$1;
(statearr_31249_31396[(1)] = (5));

} else {
var statearr_31250_31397 = state_31246__$1;
(statearr_31250_31397[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31247 === (5))){
var state_31246__$1 = state_31246;
var statearr_31251_31398 = state_31246__$1;
(statearr_31251_31398[(2)] = null);

(statearr_31251_31398[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31247 === (6))){
var state_31246__$1 = state_31246;
var statearr_31252_31399 = state_31246__$1;
(statearr_31252_31399[(2)] = null);

(statearr_31252_31399[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31247 === (7))){
var inst_31242 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
var statearr_31253_31400 = state_31246__$1;
(statearr_31253_31400[(2)] = inst_31242);

(statearr_31253_31400[(1)] = (3));


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
});})(__31390,c__29194__auto___31394,G__31233_31391,G__31233_31392__$1,n__4666__auto___31389,jobs,results,process,async))
;
return ((function (__31390,switch__29005__auto__,c__29194__auto___31394,G__31233_31391,G__31233_31392__$1,n__4666__auto___31389,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____0 = (function (){
var statearr_31254 = [null,null,null,null,null,null,null];
(statearr_31254[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__);

(statearr_31254[(1)] = (1));

return statearr_31254;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____1 = (function (state_31246){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_31246);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e31255){if((e31255 instanceof Object)){
var ex__29009__auto__ = e31255;
var statearr_31256_31401 = state_31246;
(statearr_31256_31401[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31246);

return cljs.core.cst$kw$recur;
} else {
throw e31255;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__31402 = state_31246;
state_31246 = G__31402;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__ = function(state_31246){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____1.call(this,state_31246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__;
})()
;})(__31390,switch__29005__auto__,c__29194__auto___31394,G__31233_31391,G__31233_31392__$1,n__4666__auto___31389,jobs,results,process,async))
})();
var state__29196__auto__ = (function (){var statearr_31257 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_31257[(6)] = c__29194__auto___31394);

return statearr_31257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
});})(__31390,c__29194__auto___31394,G__31233_31391,G__31233_31392__$1,n__4666__auto___31389,jobs,results,process,async))
);


break;
case "async":
var c__29194__auto___31403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31390,c__29194__auto___31403,G__31233_31391,G__31233_31392__$1,n__4666__auto___31389,jobs,results,process,async){
return (function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = ((function (__31390,c__29194__auto___31403,G__31233_31391,G__31233_31392__$1,n__4666__auto___31389,jobs,results,process,async){
return (function (state_31270){
var state_val_31271 = (state_31270[(1)]);
if((state_val_31271 === (1))){
var state_31270__$1 = state_31270;
var statearr_31272_31404 = state_31270__$1;
(statearr_31272_31404[(2)] = null);

(statearr_31272_31404[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31271 === (2))){
var state_31270__$1 = state_31270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31270__$1,(4),jobs);
} else {
if((state_val_31271 === (3))){
var inst_31268 = (state_31270[(2)]);
var state_31270__$1 = state_31270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31270__$1,inst_31268);
} else {
if((state_val_31271 === (4))){
var inst_31260 = (state_31270[(2)]);
var inst_31261 = async(inst_31260);
var state_31270__$1 = state_31270;
if(cljs.core.truth_(inst_31261)){
var statearr_31273_31405 = state_31270__$1;
(statearr_31273_31405[(1)] = (5));

} else {
var statearr_31274_31406 = state_31270__$1;
(statearr_31274_31406[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31271 === (5))){
var state_31270__$1 = state_31270;
var statearr_31275_31407 = state_31270__$1;
(statearr_31275_31407[(2)] = null);

(statearr_31275_31407[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31271 === (6))){
var state_31270__$1 = state_31270;
var statearr_31276_31408 = state_31270__$1;
(statearr_31276_31408[(2)] = null);

(statearr_31276_31408[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31271 === (7))){
var inst_31266 = (state_31270[(2)]);
var state_31270__$1 = state_31270;
var statearr_31277_31409 = state_31270__$1;
(statearr_31277_31409[(2)] = inst_31266);

(statearr_31277_31409[(1)] = (3));


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
});})(__31390,c__29194__auto___31403,G__31233_31391,G__31233_31392__$1,n__4666__auto___31389,jobs,results,process,async))
;
return ((function (__31390,switch__29005__auto__,c__29194__auto___31403,G__31233_31391,G__31233_31392__$1,n__4666__auto___31389,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____0 = (function (){
var statearr_31278 = [null,null,null,null,null,null,null];
(statearr_31278[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__);

(statearr_31278[(1)] = (1));

return statearr_31278;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____1 = (function (state_31270){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_31270);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e31279){if((e31279 instanceof Object)){
var ex__29009__auto__ = e31279;
var statearr_31280_31410 = state_31270;
(statearr_31280_31410[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31270);

return cljs.core.cst$kw$recur;
} else {
throw e31279;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__31411 = state_31270;
state_31270 = G__31411;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__ = function(state_31270){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____1.call(this,state_31270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__;
})()
;})(__31390,switch__29005__auto__,c__29194__auto___31403,G__31233_31391,G__31233_31392__$1,n__4666__auto___31389,jobs,results,process,async))
})();
var state__29196__auto__ = (function (){var statearr_31281 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_31281[(6)] = c__29194__auto___31403);

return statearr_31281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
});})(__31390,c__29194__auto___31403,G__31233_31391,G__31233_31392__$1,n__4666__auto___31389,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31233_31392__$1)].join('')));

}

var G__31412 = (__31390 + (1));
__31390 = G__31412;
continue;
} else {
}
break;
}

var c__29194__auto___31413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_31303){
var state_val_31304 = (state_31303[(1)]);
if((state_val_31304 === (1))){
var state_31303__$1 = state_31303;
var statearr_31305_31414 = state_31303__$1;
(statearr_31305_31414[(2)] = null);

(statearr_31305_31414[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31304 === (2))){
var state_31303__$1 = state_31303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31303__$1,(4),from);
} else {
if((state_val_31304 === (3))){
var inst_31301 = (state_31303[(2)]);
var state_31303__$1 = state_31303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31303__$1,inst_31301);
} else {
if((state_val_31304 === (4))){
var inst_31284 = (state_31303[(7)]);
var inst_31284__$1 = (state_31303[(2)]);
var inst_31285 = (inst_31284__$1 == null);
var state_31303__$1 = (function (){var statearr_31306 = state_31303;
(statearr_31306[(7)] = inst_31284__$1);

return statearr_31306;
})();
if(cljs.core.truth_(inst_31285)){
var statearr_31307_31415 = state_31303__$1;
(statearr_31307_31415[(1)] = (5));

} else {
var statearr_31308_31416 = state_31303__$1;
(statearr_31308_31416[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31304 === (5))){
var inst_31287 = cljs.core.async.close_BANG_(jobs);
var state_31303__$1 = state_31303;
var statearr_31309_31417 = state_31303__$1;
(statearr_31309_31417[(2)] = inst_31287);

(statearr_31309_31417[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31304 === (6))){
var inst_31289 = (state_31303[(8)]);
var inst_31284 = (state_31303[(7)]);
var inst_31289__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31290 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31291 = [inst_31284,inst_31289__$1];
var inst_31292 = (new cljs.core.PersistentVector(null,2,(5),inst_31290,inst_31291,null));
var state_31303__$1 = (function (){var statearr_31310 = state_31303;
(statearr_31310[(8)] = inst_31289__$1);

return statearr_31310;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31303__$1,(8),jobs,inst_31292);
} else {
if((state_val_31304 === (7))){
var inst_31299 = (state_31303[(2)]);
var state_31303__$1 = state_31303;
var statearr_31311_31418 = state_31303__$1;
(statearr_31311_31418[(2)] = inst_31299);

(statearr_31311_31418[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31304 === (8))){
var inst_31289 = (state_31303[(8)]);
var inst_31294 = (state_31303[(2)]);
var state_31303__$1 = (function (){var statearr_31312 = state_31303;
(statearr_31312[(9)] = inst_31294);

return statearr_31312;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31303__$1,(9),results,inst_31289);
} else {
if((state_val_31304 === (9))){
var inst_31296 = (state_31303[(2)]);
var state_31303__$1 = (function (){var statearr_31313 = state_31303;
(statearr_31313[(10)] = inst_31296);

return statearr_31313;
})();
var statearr_31314_31419 = state_31303__$1;
(statearr_31314_31419[(2)] = null);

(statearr_31314_31419[(1)] = (2));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____0 = (function (){
var statearr_31315 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__);

(statearr_31315[(1)] = (1));

return statearr_31315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____1 = (function (state_31303){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_31303);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e31316){if((e31316 instanceof Object)){
var ex__29009__auto__ = e31316;
var statearr_31317_31420 = state_31303;
(statearr_31317_31420[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31303);

return cljs.core.cst$kw$recur;
} else {
throw e31316;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__31421 = state_31303;
state_31303 = G__31421;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__ = function(state_31303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____1.call(this,state_31303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_31318 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_31318[(6)] = c__29194__auto___31413);

return statearr_31318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
}));


var c__29194__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_31356){
var state_val_31357 = (state_31356[(1)]);
if((state_val_31357 === (7))){
var inst_31352 = (state_31356[(2)]);
var state_31356__$1 = state_31356;
var statearr_31358_31422 = state_31356__$1;
(statearr_31358_31422[(2)] = inst_31352);

(statearr_31358_31422[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31357 === (20))){
var state_31356__$1 = state_31356;
var statearr_31359_31423 = state_31356__$1;
(statearr_31359_31423[(2)] = null);

(statearr_31359_31423[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31357 === (1))){
var state_31356__$1 = state_31356;
var statearr_31360_31424 = state_31356__$1;
(statearr_31360_31424[(2)] = null);

(statearr_31360_31424[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31357 === (4))){
var inst_31321 = (state_31356[(7)]);
var inst_31321__$1 = (state_31356[(2)]);
var inst_31322 = (inst_31321__$1 == null);
var state_31356__$1 = (function (){var statearr_31361 = state_31356;
(statearr_31361[(7)] = inst_31321__$1);

return statearr_31361;
})();
if(cljs.core.truth_(inst_31322)){
var statearr_31362_31425 = state_31356__$1;
(statearr_31362_31425[(1)] = (5));

} else {
var statearr_31363_31426 = state_31356__$1;
(statearr_31363_31426[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31357 === (15))){
var inst_31334 = (state_31356[(8)]);
var state_31356__$1 = state_31356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31356__$1,(18),to,inst_31334);
} else {
if((state_val_31357 === (21))){
var inst_31347 = (state_31356[(2)]);
var state_31356__$1 = state_31356;
var statearr_31364_31427 = state_31356__$1;
(statearr_31364_31427[(2)] = inst_31347);

(statearr_31364_31427[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31357 === (13))){
var inst_31349 = (state_31356[(2)]);
var state_31356__$1 = (function (){var statearr_31365 = state_31356;
(statearr_31365[(9)] = inst_31349);

return statearr_31365;
})();
var statearr_31366_31428 = state_31356__$1;
(statearr_31366_31428[(2)] = null);

(statearr_31366_31428[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31357 === (6))){
var inst_31321 = (state_31356[(7)]);
var state_31356__$1 = state_31356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31356__$1,(11),inst_31321);
} else {
if((state_val_31357 === (17))){
var inst_31342 = (state_31356[(2)]);
var state_31356__$1 = state_31356;
if(cljs.core.truth_(inst_31342)){
var statearr_31367_31429 = state_31356__$1;
(statearr_31367_31429[(1)] = (19));

} else {
var statearr_31368_31430 = state_31356__$1;
(statearr_31368_31430[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31357 === (3))){
var inst_31354 = (state_31356[(2)]);
var state_31356__$1 = state_31356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31356__$1,inst_31354);
} else {
if((state_val_31357 === (12))){
var inst_31331 = (state_31356[(10)]);
var state_31356__$1 = state_31356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31356__$1,(14),inst_31331);
} else {
if((state_val_31357 === (2))){
var state_31356__$1 = state_31356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31356__$1,(4),results);
} else {
if((state_val_31357 === (19))){
var state_31356__$1 = state_31356;
var statearr_31369_31431 = state_31356__$1;
(statearr_31369_31431[(2)] = null);

(statearr_31369_31431[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31357 === (11))){
var inst_31331 = (state_31356[(2)]);
var state_31356__$1 = (function (){var statearr_31370 = state_31356;
(statearr_31370[(10)] = inst_31331);

return statearr_31370;
})();
var statearr_31371_31432 = state_31356__$1;
(statearr_31371_31432[(2)] = null);

(statearr_31371_31432[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31357 === (9))){
var state_31356__$1 = state_31356;
var statearr_31372_31433 = state_31356__$1;
(statearr_31372_31433[(2)] = null);

(statearr_31372_31433[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31357 === (5))){
var state_31356__$1 = state_31356;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31373_31434 = state_31356__$1;
(statearr_31373_31434[(1)] = (8));

} else {
var statearr_31374_31435 = state_31356__$1;
(statearr_31374_31435[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31357 === (14))){
var inst_31334 = (state_31356[(8)]);
var inst_31334__$1 = (state_31356[(2)]);
var inst_31335 = (inst_31334__$1 == null);
var inst_31336 = cljs.core.not(inst_31335);
var state_31356__$1 = (function (){var statearr_31375 = state_31356;
(statearr_31375[(8)] = inst_31334__$1);

return statearr_31375;
})();
if(inst_31336){
var statearr_31376_31436 = state_31356__$1;
(statearr_31376_31436[(1)] = (15));

} else {
var statearr_31377_31437 = state_31356__$1;
(statearr_31377_31437[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31357 === (16))){
var state_31356__$1 = state_31356;
var statearr_31378_31438 = state_31356__$1;
(statearr_31378_31438[(2)] = false);

(statearr_31378_31438[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31357 === (10))){
var inst_31328 = (state_31356[(2)]);
var state_31356__$1 = state_31356;
var statearr_31379_31439 = state_31356__$1;
(statearr_31379_31439[(2)] = inst_31328);

(statearr_31379_31439[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31357 === (18))){
var inst_31339 = (state_31356[(2)]);
var state_31356__$1 = state_31356;
var statearr_31380_31440 = state_31356__$1;
(statearr_31380_31440[(2)] = inst_31339);

(statearr_31380_31440[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31357 === (8))){
var inst_31325 = cljs.core.async.close_BANG_(to);
var state_31356__$1 = state_31356;
var statearr_31381_31441 = state_31356__$1;
(statearr_31381_31441[(2)] = inst_31325);

(statearr_31381_31441[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____0 = (function (){
var statearr_31382 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31382[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__);

(statearr_31382[(1)] = (1));

return statearr_31382;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____1 = (function (state_31356){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_31356);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e31383){if((e31383 instanceof Object)){
var ex__29009__auto__ = e31383;
var statearr_31384_31442 = state_31356;
(statearr_31384_31442[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31356);

return cljs.core.cst$kw$recur;
} else {
throw e31383;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__31443 = state_31356;
state_31356 = G__31443;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__ = function(state_31356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____1.call(this,state_31356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_31385 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_31385[(6)] = c__29194__auto__);

return statearr_31385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
}));

return c__29194__auto__;
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
var G__31445 = arguments.length;
switch (G__31445) {
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
var G__31448 = arguments.length;
switch (G__31448) {
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
var G__31451 = arguments.length;
switch (G__31451) {
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
var c__29194__auto___31500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_31477){
var state_val_31478 = (state_31477[(1)]);
if((state_val_31478 === (7))){
var inst_31473 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31479_31501 = state_31477__$1;
(statearr_31479_31501[(2)] = inst_31473);

(statearr_31479_31501[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31478 === (1))){
var state_31477__$1 = state_31477;
var statearr_31480_31502 = state_31477__$1;
(statearr_31480_31502[(2)] = null);

(statearr_31480_31502[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31478 === (4))){
var inst_31454 = (state_31477[(7)]);
var inst_31454__$1 = (state_31477[(2)]);
var inst_31455 = (inst_31454__$1 == null);
var state_31477__$1 = (function (){var statearr_31481 = state_31477;
(statearr_31481[(7)] = inst_31454__$1);

return statearr_31481;
})();
if(cljs.core.truth_(inst_31455)){
var statearr_31482_31503 = state_31477__$1;
(statearr_31482_31503[(1)] = (5));

} else {
var statearr_31483_31504 = state_31477__$1;
(statearr_31483_31504[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31478 === (13))){
var state_31477__$1 = state_31477;
var statearr_31484_31505 = state_31477__$1;
(statearr_31484_31505[(2)] = null);

(statearr_31484_31505[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31478 === (6))){
var inst_31454 = (state_31477[(7)]);
var inst_31460 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31454) : p.call(null,inst_31454));
var state_31477__$1 = state_31477;
if(cljs.core.truth_(inst_31460)){
var statearr_31485_31506 = state_31477__$1;
(statearr_31485_31506[(1)] = (9));

} else {
var statearr_31486_31507 = state_31477__$1;
(statearr_31486_31507[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31478 === (3))){
var inst_31475 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31477__$1,inst_31475);
} else {
if((state_val_31478 === (12))){
var state_31477__$1 = state_31477;
var statearr_31487_31508 = state_31477__$1;
(statearr_31487_31508[(2)] = null);

(statearr_31487_31508[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31478 === (2))){
var state_31477__$1 = state_31477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31477__$1,(4),ch);
} else {
if((state_val_31478 === (11))){
var inst_31454 = (state_31477[(7)]);
var inst_31464 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31477__$1,(8),inst_31464,inst_31454);
} else {
if((state_val_31478 === (9))){
var state_31477__$1 = state_31477;
var statearr_31488_31509 = state_31477__$1;
(statearr_31488_31509[(2)] = tc);

(statearr_31488_31509[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31478 === (5))){
var inst_31457 = cljs.core.async.close_BANG_(tc);
var inst_31458 = cljs.core.async.close_BANG_(fc);
var state_31477__$1 = (function (){var statearr_31489 = state_31477;
(statearr_31489[(8)] = inst_31457);

return statearr_31489;
})();
var statearr_31490_31510 = state_31477__$1;
(statearr_31490_31510[(2)] = inst_31458);

(statearr_31490_31510[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31478 === (14))){
var inst_31471 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31491_31511 = state_31477__$1;
(statearr_31491_31511[(2)] = inst_31471);

(statearr_31491_31511[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31478 === (10))){
var state_31477__$1 = state_31477;
var statearr_31492_31512 = state_31477__$1;
(statearr_31492_31512[(2)] = fc);

(statearr_31492_31512[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31478 === (8))){
var inst_31466 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
if(cljs.core.truth_(inst_31466)){
var statearr_31493_31513 = state_31477__$1;
(statearr_31493_31513[(1)] = (12));

} else {
var statearr_31494_31514 = state_31477__$1;
(statearr_31494_31514[(1)] = (13));

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
var cljs$core$async$state_machine__29006__auto__ = null;
var cljs$core$async$state_machine__29006__auto____0 = (function (){
var statearr_31495 = [null,null,null,null,null,null,null,null,null];
(statearr_31495[(0)] = cljs$core$async$state_machine__29006__auto__);

(statearr_31495[(1)] = (1));

return statearr_31495;
});
var cljs$core$async$state_machine__29006__auto____1 = (function (state_31477){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_31477);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e31496){if((e31496 instanceof Object)){
var ex__29009__auto__ = e31496;
var statearr_31497_31515 = state_31477;
(statearr_31497_31515[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31477);

return cljs.core.cst$kw$recur;
} else {
throw e31496;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__31516 = state_31477;
state_31477 = G__31516;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$state_machine__29006__auto__ = function(state_31477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29006__auto____1.call(this,state_31477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29006__auto____0;
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29006__auto____1;
return cljs$core$async$state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_31498 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_31498[(6)] = c__29194__auto___31500);

return statearr_31498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
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
var c__29194__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_31537){
var state_val_31538 = (state_31537[(1)]);
if((state_val_31538 === (7))){
var inst_31533 = (state_31537[(2)]);
var state_31537__$1 = state_31537;
var statearr_31539_31557 = state_31537__$1;
(statearr_31539_31557[(2)] = inst_31533);

(statearr_31539_31557[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31538 === (1))){
var inst_31517 = init;
var state_31537__$1 = (function (){var statearr_31540 = state_31537;
(statearr_31540[(7)] = inst_31517);

return statearr_31540;
})();
var statearr_31541_31558 = state_31537__$1;
(statearr_31541_31558[(2)] = null);

(statearr_31541_31558[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31538 === (4))){
var inst_31520 = (state_31537[(8)]);
var inst_31520__$1 = (state_31537[(2)]);
var inst_31521 = (inst_31520__$1 == null);
var state_31537__$1 = (function (){var statearr_31542 = state_31537;
(statearr_31542[(8)] = inst_31520__$1);

return statearr_31542;
})();
if(cljs.core.truth_(inst_31521)){
var statearr_31543_31559 = state_31537__$1;
(statearr_31543_31559[(1)] = (5));

} else {
var statearr_31544_31560 = state_31537__$1;
(statearr_31544_31560[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31538 === (6))){
var inst_31524 = (state_31537[(9)]);
var inst_31520 = (state_31537[(8)]);
var inst_31517 = (state_31537[(7)]);
var inst_31524__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31517,inst_31520) : f.call(null,inst_31517,inst_31520));
var inst_31525 = cljs.core.reduced_QMARK_(inst_31524__$1);
var state_31537__$1 = (function (){var statearr_31545 = state_31537;
(statearr_31545[(9)] = inst_31524__$1);

return statearr_31545;
})();
if(inst_31525){
var statearr_31546_31561 = state_31537__$1;
(statearr_31546_31561[(1)] = (8));

} else {
var statearr_31547_31562 = state_31537__$1;
(statearr_31547_31562[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31538 === (3))){
var inst_31535 = (state_31537[(2)]);
var state_31537__$1 = state_31537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31537__$1,inst_31535);
} else {
if((state_val_31538 === (2))){
var state_31537__$1 = state_31537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31537__$1,(4),ch);
} else {
if((state_val_31538 === (9))){
var inst_31524 = (state_31537[(9)]);
var inst_31517 = inst_31524;
var state_31537__$1 = (function (){var statearr_31548 = state_31537;
(statearr_31548[(7)] = inst_31517);

return statearr_31548;
})();
var statearr_31549_31563 = state_31537__$1;
(statearr_31549_31563[(2)] = null);

(statearr_31549_31563[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31538 === (5))){
var inst_31517 = (state_31537[(7)]);
var state_31537__$1 = state_31537;
var statearr_31550_31564 = state_31537__$1;
(statearr_31550_31564[(2)] = inst_31517);

(statearr_31550_31564[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31538 === (10))){
var inst_31531 = (state_31537[(2)]);
var state_31537__$1 = state_31537;
var statearr_31551_31565 = state_31537__$1;
(statearr_31551_31565[(2)] = inst_31531);

(statearr_31551_31565[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31538 === (8))){
var inst_31524 = (state_31537[(9)]);
var inst_31527 = cljs.core.deref(inst_31524);
var state_31537__$1 = state_31537;
var statearr_31552_31566 = state_31537__$1;
(statearr_31552_31566[(2)] = inst_31527);

(statearr_31552_31566[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29006__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29006__auto____0 = (function (){
var statearr_31553 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31553[(0)] = cljs$core$async$reduce_$_state_machine__29006__auto__);

(statearr_31553[(1)] = (1));

return statearr_31553;
});
var cljs$core$async$reduce_$_state_machine__29006__auto____1 = (function (state_31537){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_31537);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e31554){if((e31554 instanceof Object)){
var ex__29009__auto__ = e31554;
var statearr_31555_31567 = state_31537;
(statearr_31555_31567[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31537);

return cljs.core.cst$kw$recur;
} else {
throw e31554;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__31568 = state_31537;
state_31537 = G__31568;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29006__auto__ = function(state_31537){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29006__auto____1.call(this,state_31537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29006__auto____0;
cljs$core$async$reduce_$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29006__auto____1;
return cljs$core$async$reduce_$_state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_31556 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_31556[(6)] = c__29194__auto__);

return statearr_31556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
}));

return c__29194__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29194__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_31574){
var state_val_31575 = (state_31574[(1)]);
if((state_val_31575 === (1))){
var inst_31569 = cljs.core.async.reduce(f__$1,init,ch);
var state_31574__$1 = state_31574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31574__$1,(2),inst_31569);
} else {
if((state_val_31575 === (2))){
var inst_31571 = (state_31574[(2)]);
var inst_31572 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31571) : f__$1.call(null,inst_31571));
var state_31574__$1 = state_31574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31574__$1,inst_31572);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29006__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29006__auto____0 = (function (){
var statearr_31576 = [null,null,null,null,null,null,null];
(statearr_31576[(0)] = cljs$core$async$transduce_$_state_machine__29006__auto__);

(statearr_31576[(1)] = (1));

return statearr_31576;
});
var cljs$core$async$transduce_$_state_machine__29006__auto____1 = (function (state_31574){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_31574);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e31577){if((e31577 instanceof Object)){
var ex__29009__auto__ = e31577;
var statearr_31578_31580 = state_31574;
(statearr_31578_31580[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31574);

return cljs.core.cst$kw$recur;
} else {
throw e31577;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__31581 = state_31574;
state_31574 = G__31581;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29006__auto__ = function(state_31574){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29006__auto____1.call(this,state_31574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29006__auto____0;
cljs$core$async$transduce_$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29006__auto____1;
return cljs$core$async$transduce_$_state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_31579 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_31579[(6)] = c__29194__auto__);

return statearr_31579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
}));

return c__29194__auto__;
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
var G__31583 = arguments.length;
switch (G__31583) {
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
var c__29194__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_31608){
var state_val_31609 = (state_31608[(1)]);
if((state_val_31609 === (7))){
var inst_31590 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31610_31631 = state_31608__$1;
(statearr_31610_31631[(2)] = inst_31590);

(statearr_31610_31631[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31609 === (1))){
var inst_31584 = cljs.core.seq(coll);
var inst_31585 = inst_31584;
var state_31608__$1 = (function (){var statearr_31611 = state_31608;
(statearr_31611[(7)] = inst_31585);

return statearr_31611;
})();
var statearr_31612_31632 = state_31608__$1;
(statearr_31612_31632[(2)] = null);

(statearr_31612_31632[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31609 === (4))){
var inst_31585 = (state_31608[(7)]);
var inst_31588 = cljs.core.first(inst_31585);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31608__$1,(7),ch,inst_31588);
} else {
if((state_val_31609 === (13))){
var inst_31602 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31613_31633 = state_31608__$1;
(statearr_31613_31633[(2)] = inst_31602);

(statearr_31613_31633[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31609 === (6))){
var inst_31593 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
if(cljs.core.truth_(inst_31593)){
var statearr_31614_31634 = state_31608__$1;
(statearr_31614_31634[(1)] = (8));

} else {
var statearr_31615_31635 = state_31608__$1;
(statearr_31615_31635[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31609 === (3))){
var inst_31606 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31608__$1,inst_31606);
} else {
if((state_val_31609 === (12))){
var state_31608__$1 = state_31608;
var statearr_31616_31636 = state_31608__$1;
(statearr_31616_31636[(2)] = null);

(statearr_31616_31636[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31609 === (2))){
var inst_31585 = (state_31608[(7)]);
var state_31608__$1 = state_31608;
if(cljs.core.truth_(inst_31585)){
var statearr_31617_31637 = state_31608__$1;
(statearr_31617_31637[(1)] = (4));

} else {
var statearr_31618_31638 = state_31608__$1;
(statearr_31618_31638[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31609 === (11))){
var inst_31599 = cljs.core.async.close_BANG_(ch);
var state_31608__$1 = state_31608;
var statearr_31619_31639 = state_31608__$1;
(statearr_31619_31639[(2)] = inst_31599);

(statearr_31619_31639[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31609 === (9))){
var state_31608__$1 = state_31608;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31620_31640 = state_31608__$1;
(statearr_31620_31640[(1)] = (11));

} else {
var statearr_31621_31641 = state_31608__$1;
(statearr_31621_31641[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31609 === (5))){
var inst_31585 = (state_31608[(7)]);
var state_31608__$1 = state_31608;
var statearr_31622_31642 = state_31608__$1;
(statearr_31622_31642[(2)] = inst_31585);

(statearr_31622_31642[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31609 === (10))){
var inst_31604 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31623_31643 = state_31608__$1;
(statearr_31623_31643[(2)] = inst_31604);

(statearr_31623_31643[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31609 === (8))){
var inst_31585 = (state_31608[(7)]);
var inst_31595 = cljs.core.next(inst_31585);
var inst_31585__$1 = inst_31595;
var state_31608__$1 = (function (){var statearr_31624 = state_31608;
(statearr_31624[(7)] = inst_31585__$1);

return statearr_31624;
})();
var statearr_31625_31644 = state_31608__$1;
(statearr_31625_31644[(2)] = null);

(statearr_31625_31644[(1)] = (2));


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
var cljs$core$async$state_machine__29006__auto__ = null;
var cljs$core$async$state_machine__29006__auto____0 = (function (){
var statearr_31626 = [null,null,null,null,null,null,null,null];
(statearr_31626[(0)] = cljs$core$async$state_machine__29006__auto__);

(statearr_31626[(1)] = (1));

return statearr_31626;
});
var cljs$core$async$state_machine__29006__auto____1 = (function (state_31608){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_31608);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e31627){if((e31627 instanceof Object)){
var ex__29009__auto__ = e31627;
var statearr_31628_31645 = state_31608;
(statearr_31628_31645[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31608);

return cljs.core.cst$kw$recur;
} else {
throw e31627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__31646 = state_31608;
state_31608 = G__31646;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$state_machine__29006__auto__ = function(state_31608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29006__auto____1.call(this,state_31608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29006__auto____0;
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29006__auto____1;
return cljs$core$async$state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_31629 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_31629[(6)] = c__29194__auto__);

return statearr_31629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
}));

return c__29194__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31647 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31647 = (function (ch,cs,meta31648){
this.ch = ch;
this.cs = cs;
this.meta31648 = meta31648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31649,meta31648__$1){
var self__ = this;
var _31649__$1 = this;
return (new cljs.core.async.t_cljs$core$async31647(self__.ch,self__.cs,meta31648__$1));
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31649){
var self__ = this;
var _31649__$1 = this;
return self__.meta31648;
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta31648], null);
}));

(cljs.core.async.t_cljs$core$async31647.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31647");

(cljs.core.async.t_cljs$core$async31647.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31647");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31647.
 */
cljs.core.async.__GT_t_cljs$core$async31647 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31647(ch__$1,cs__$1,meta31648){
return (new cljs.core.async.t_cljs$core$async31647(ch__$1,cs__$1,meta31648));
});

}

return (new cljs.core.async.t_cljs$core$async31647(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29194__auto___31869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_31784){
var state_val_31785 = (state_31784[(1)]);
if((state_val_31785 === (7))){
var inst_31780 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31786_31870 = state_31784__$1;
(statearr_31786_31870[(2)] = inst_31780);

(statearr_31786_31870[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (20))){
var inst_31683 = (state_31784[(7)]);
var inst_31695 = cljs.core.first(inst_31683);
var inst_31696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31695,(0),null);
var inst_31697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31695,(1),null);
var state_31784__$1 = (function (){var statearr_31787 = state_31784;
(statearr_31787[(8)] = inst_31696);

return statearr_31787;
})();
if(cljs.core.truth_(inst_31697)){
var statearr_31788_31871 = state_31784__$1;
(statearr_31788_31871[(1)] = (22));

} else {
var statearr_31789_31872 = state_31784__$1;
(statearr_31789_31872[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (27))){
var inst_31652 = (state_31784[(9)]);
var inst_31725 = (state_31784[(10)]);
var inst_31732 = (state_31784[(11)]);
var inst_31727 = (state_31784[(12)]);
var inst_31732__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31725,inst_31727);
var inst_31733 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31732__$1,inst_31652,done);
var state_31784__$1 = (function (){var statearr_31790 = state_31784;
(statearr_31790[(11)] = inst_31732__$1);

return statearr_31790;
})();
if(cljs.core.truth_(inst_31733)){
var statearr_31791_31873 = state_31784__$1;
(statearr_31791_31873[(1)] = (30));

} else {
var statearr_31792_31874 = state_31784__$1;
(statearr_31792_31874[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (1))){
var state_31784__$1 = state_31784;
var statearr_31793_31875 = state_31784__$1;
(statearr_31793_31875[(2)] = null);

(statearr_31793_31875[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (24))){
var inst_31683 = (state_31784[(7)]);
var inst_31702 = (state_31784[(2)]);
var inst_31703 = cljs.core.next(inst_31683);
var inst_31661 = inst_31703;
var inst_31662 = null;
var inst_31663 = (0);
var inst_31664 = (0);
var state_31784__$1 = (function (){var statearr_31794 = state_31784;
(statearr_31794[(13)] = inst_31664);

(statearr_31794[(14)] = inst_31702);

(statearr_31794[(15)] = inst_31661);

(statearr_31794[(16)] = inst_31663);

(statearr_31794[(17)] = inst_31662);

return statearr_31794;
})();
var statearr_31795_31876 = state_31784__$1;
(statearr_31795_31876[(2)] = null);

(statearr_31795_31876[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (39))){
var state_31784__$1 = state_31784;
var statearr_31799_31877 = state_31784__$1;
(statearr_31799_31877[(2)] = null);

(statearr_31799_31877[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (4))){
var inst_31652 = (state_31784[(9)]);
var inst_31652__$1 = (state_31784[(2)]);
var inst_31653 = (inst_31652__$1 == null);
var state_31784__$1 = (function (){var statearr_31800 = state_31784;
(statearr_31800[(9)] = inst_31652__$1);

return statearr_31800;
})();
if(cljs.core.truth_(inst_31653)){
var statearr_31801_31878 = state_31784__$1;
(statearr_31801_31878[(1)] = (5));

} else {
var statearr_31802_31879 = state_31784__$1;
(statearr_31802_31879[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (15))){
var inst_31664 = (state_31784[(13)]);
var inst_31661 = (state_31784[(15)]);
var inst_31663 = (state_31784[(16)]);
var inst_31662 = (state_31784[(17)]);
var inst_31679 = (state_31784[(2)]);
var inst_31680 = (inst_31664 + (1));
var tmp31796 = inst_31661;
var tmp31797 = inst_31663;
var tmp31798 = inst_31662;
var inst_31661__$1 = tmp31796;
var inst_31662__$1 = tmp31798;
var inst_31663__$1 = tmp31797;
var inst_31664__$1 = inst_31680;
var state_31784__$1 = (function (){var statearr_31803 = state_31784;
(statearr_31803[(13)] = inst_31664__$1);

(statearr_31803[(18)] = inst_31679);

(statearr_31803[(15)] = inst_31661__$1);

(statearr_31803[(16)] = inst_31663__$1);

(statearr_31803[(17)] = inst_31662__$1);

return statearr_31803;
})();
var statearr_31804_31880 = state_31784__$1;
(statearr_31804_31880[(2)] = null);

(statearr_31804_31880[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (21))){
var inst_31706 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31808_31881 = state_31784__$1;
(statearr_31808_31881[(2)] = inst_31706);

(statearr_31808_31881[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (31))){
var inst_31732 = (state_31784[(11)]);
var inst_31736 = done(null);
var inst_31737 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31732);
var state_31784__$1 = (function (){var statearr_31809 = state_31784;
(statearr_31809[(19)] = inst_31736);

return statearr_31809;
})();
var statearr_31810_31882 = state_31784__$1;
(statearr_31810_31882[(2)] = inst_31737);

(statearr_31810_31882[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (32))){
var inst_31725 = (state_31784[(10)]);
var inst_31724 = (state_31784[(20)]);
var inst_31727 = (state_31784[(12)]);
var inst_31726 = (state_31784[(21)]);
var inst_31739 = (state_31784[(2)]);
var inst_31740 = (inst_31727 + (1));
var tmp31805 = inst_31725;
var tmp31806 = inst_31724;
var tmp31807 = inst_31726;
var inst_31724__$1 = tmp31806;
var inst_31725__$1 = tmp31805;
var inst_31726__$1 = tmp31807;
var inst_31727__$1 = inst_31740;
var state_31784__$1 = (function (){var statearr_31811 = state_31784;
(statearr_31811[(10)] = inst_31725__$1);

(statearr_31811[(22)] = inst_31739);

(statearr_31811[(20)] = inst_31724__$1);

(statearr_31811[(12)] = inst_31727__$1);

(statearr_31811[(21)] = inst_31726__$1);

return statearr_31811;
})();
var statearr_31812_31883 = state_31784__$1;
(statearr_31812_31883[(2)] = null);

(statearr_31812_31883[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (40))){
var inst_31752 = (state_31784[(23)]);
var inst_31756 = done(null);
var inst_31757 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31752);
var state_31784__$1 = (function (){var statearr_31813 = state_31784;
(statearr_31813[(24)] = inst_31756);

return statearr_31813;
})();
var statearr_31814_31884 = state_31784__$1;
(statearr_31814_31884[(2)] = inst_31757);

(statearr_31814_31884[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (33))){
var inst_31743 = (state_31784[(25)]);
var inst_31745 = cljs.core.chunked_seq_QMARK_(inst_31743);
var state_31784__$1 = state_31784;
if(inst_31745){
var statearr_31815_31885 = state_31784__$1;
(statearr_31815_31885[(1)] = (36));

} else {
var statearr_31816_31886 = state_31784__$1;
(statearr_31816_31886[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (13))){
var inst_31673 = (state_31784[(26)]);
var inst_31676 = cljs.core.async.close_BANG_(inst_31673);
var state_31784__$1 = state_31784;
var statearr_31817_31887 = state_31784__$1;
(statearr_31817_31887[(2)] = inst_31676);

(statearr_31817_31887[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (22))){
var inst_31696 = (state_31784[(8)]);
var inst_31699 = cljs.core.async.close_BANG_(inst_31696);
var state_31784__$1 = state_31784;
var statearr_31818_31888 = state_31784__$1;
(statearr_31818_31888[(2)] = inst_31699);

(statearr_31818_31888[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (36))){
var inst_31743 = (state_31784[(25)]);
var inst_31747 = cljs.core.chunk_first(inst_31743);
var inst_31748 = cljs.core.chunk_rest(inst_31743);
var inst_31749 = cljs.core.count(inst_31747);
var inst_31724 = inst_31748;
var inst_31725 = inst_31747;
var inst_31726 = inst_31749;
var inst_31727 = (0);
var state_31784__$1 = (function (){var statearr_31819 = state_31784;
(statearr_31819[(10)] = inst_31725);

(statearr_31819[(20)] = inst_31724);

(statearr_31819[(12)] = inst_31727);

(statearr_31819[(21)] = inst_31726);

return statearr_31819;
})();
var statearr_31820_31889 = state_31784__$1;
(statearr_31820_31889[(2)] = null);

(statearr_31820_31889[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (41))){
var inst_31743 = (state_31784[(25)]);
var inst_31759 = (state_31784[(2)]);
var inst_31760 = cljs.core.next(inst_31743);
var inst_31724 = inst_31760;
var inst_31725 = null;
var inst_31726 = (0);
var inst_31727 = (0);
var state_31784__$1 = (function (){var statearr_31821 = state_31784;
(statearr_31821[(10)] = inst_31725);

(statearr_31821[(27)] = inst_31759);

(statearr_31821[(20)] = inst_31724);

(statearr_31821[(12)] = inst_31727);

(statearr_31821[(21)] = inst_31726);

return statearr_31821;
})();
var statearr_31822_31890 = state_31784__$1;
(statearr_31822_31890[(2)] = null);

(statearr_31822_31890[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (43))){
var state_31784__$1 = state_31784;
var statearr_31823_31891 = state_31784__$1;
(statearr_31823_31891[(2)] = null);

(statearr_31823_31891[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (29))){
var inst_31768 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31824_31892 = state_31784__$1;
(statearr_31824_31892[(2)] = inst_31768);

(statearr_31824_31892[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (44))){
var inst_31777 = (state_31784[(2)]);
var state_31784__$1 = (function (){var statearr_31825 = state_31784;
(statearr_31825[(28)] = inst_31777);

return statearr_31825;
})();
var statearr_31826_31893 = state_31784__$1;
(statearr_31826_31893[(2)] = null);

(statearr_31826_31893[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (6))){
var inst_31716 = (state_31784[(29)]);
var inst_31715 = cljs.core.deref(cs);
var inst_31716__$1 = cljs.core.keys(inst_31715);
var inst_31717 = cljs.core.count(inst_31716__$1);
var inst_31718 = cljs.core.reset_BANG_(dctr,inst_31717);
var inst_31723 = cljs.core.seq(inst_31716__$1);
var inst_31724 = inst_31723;
var inst_31725 = null;
var inst_31726 = (0);
var inst_31727 = (0);
var state_31784__$1 = (function (){var statearr_31827 = state_31784;
(statearr_31827[(10)] = inst_31725);

(statearr_31827[(29)] = inst_31716__$1);

(statearr_31827[(20)] = inst_31724);

(statearr_31827[(12)] = inst_31727);

(statearr_31827[(30)] = inst_31718);

(statearr_31827[(21)] = inst_31726);

return statearr_31827;
})();
var statearr_31828_31894 = state_31784__$1;
(statearr_31828_31894[(2)] = null);

(statearr_31828_31894[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (28))){
var inst_31724 = (state_31784[(20)]);
var inst_31743 = (state_31784[(25)]);
var inst_31743__$1 = cljs.core.seq(inst_31724);
var state_31784__$1 = (function (){var statearr_31829 = state_31784;
(statearr_31829[(25)] = inst_31743__$1);

return statearr_31829;
})();
if(inst_31743__$1){
var statearr_31830_31895 = state_31784__$1;
(statearr_31830_31895[(1)] = (33));

} else {
var statearr_31831_31896 = state_31784__$1;
(statearr_31831_31896[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (25))){
var inst_31727 = (state_31784[(12)]);
var inst_31726 = (state_31784[(21)]);
var inst_31729 = (inst_31727 < inst_31726);
var inst_31730 = inst_31729;
var state_31784__$1 = state_31784;
if(cljs.core.truth_(inst_31730)){
var statearr_31832_31897 = state_31784__$1;
(statearr_31832_31897[(1)] = (27));

} else {
var statearr_31833_31898 = state_31784__$1;
(statearr_31833_31898[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (34))){
var state_31784__$1 = state_31784;
var statearr_31834_31899 = state_31784__$1;
(statearr_31834_31899[(2)] = null);

(statearr_31834_31899[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (17))){
var state_31784__$1 = state_31784;
var statearr_31835_31900 = state_31784__$1;
(statearr_31835_31900[(2)] = null);

(statearr_31835_31900[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (3))){
var inst_31782 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31784__$1,inst_31782);
} else {
if((state_val_31785 === (12))){
var inst_31711 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31836_31901 = state_31784__$1;
(statearr_31836_31901[(2)] = inst_31711);

(statearr_31836_31901[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (2))){
var state_31784__$1 = state_31784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31784__$1,(4),ch);
} else {
if((state_val_31785 === (23))){
var state_31784__$1 = state_31784;
var statearr_31837_31902 = state_31784__$1;
(statearr_31837_31902[(2)] = null);

(statearr_31837_31902[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (35))){
var inst_31766 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31838_31903 = state_31784__$1;
(statearr_31838_31903[(2)] = inst_31766);

(statearr_31838_31903[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (19))){
var inst_31683 = (state_31784[(7)]);
var inst_31687 = cljs.core.chunk_first(inst_31683);
var inst_31688 = cljs.core.chunk_rest(inst_31683);
var inst_31689 = cljs.core.count(inst_31687);
var inst_31661 = inst_31688;
var inst_31662 = inst_31687;
var inst_31663 = inst_31689;
var inst_31664 = (0);
var state_31784__$1 = (function (){var statearr_31839 = state_31784;
(statearr_31839[(13)] = inst_31664);

(statearr_31839[(15)] = inst_31661);

(statearr_31839[(16)] = inst_31663);

(statearr_31839[(17)] = inst_31662);

return statearr_31839;
})();
var statearr_31840_31904 = state_31784__$1;
(statearr_31840_31904[(2)] = null);

(statearr_31840_31904[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (11))){
var inst_31661 = (state_31784[(15)]);
var inst_31683 = (state_31784[(7)]);
var inst_31683__$1 = cljs.core.seq(inst_31661);
var state_31784__$1 = (function (){var statearr_31841 = state_31784;
(statearr_31841[(7)] = inst_31683__$1);

return statearr_31841;
})();
if(inst_31683__$1){
var statearr_31842_31905 = state_31784__$1;
(statearr_31842_31905[(1)] = (16));

} else {
var statearr_31843_31906 = state_31784__$1;
(statearr_31843_31906[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (9))){
var inst_31713 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31844_31907 = state_31784__$1;
(statearr_31844_31907[(2)] = inst_31713);

(statearr_31844_31907[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (5))){
var inst_31659 = cljs.core.deref(cs);
var inst_31660 = cljs.core.seq(inst_31659);
var inst_31661 = inst_31660;
var inst_31662 = null;
var inst_31663 = (0);
var inst_31664 = (0);
var state_31784__$1 = (function (){var statearr_31845 = state_31784;
(statearr_31845[(13)] = inst_31664);

(statearr_31845[(15)] = inst_31661);

(statearr_31845[(16)] = inst_31663);

(statearr_31845[(17)] = inst_31662);

return statearr_31845;
})();
var statearr_31846_31908 = state_31784__$1;
(statearr_31846_31908[(2)] = null);

(statearr_31846_31908[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (14))){
var state_31784__$1 = state_31784;
var statearr_31847_31909 = state_31784__$1;
(statearr_31847_31909[(2)] = null);

(statearr_31847_31909[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (45))){
var inst_31774 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31848_31910 = state_31784__$1;
(statearr_31848_31910[(2)] = inst_31774);

(statearr_31848_31910[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (26))){
var inst_31716 = (state_31784[(29)]);
var inst_31770 = (state_31784[(2)]);
var inst_31771 = cljs.core.seq(inst_31716);
var state_31784__$1 = (function (){var statearr_31849 = state_31784;
(statearr_31849[(31)] = inst_31770);

return statearr_31849;
})();
if(inst_31771){
var statearr_31850_31911 = state_31784__$1;
(statearr_31850_31911[(1)] = (42));

} else {
var statearr_31851_31912 = state_31784__$1;
(statearr_31851_31912[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (16))){
var inst_31683 = (state_31784[(7)]);
var inst_31685 = cljs.core.chunked_seq_QMARK_(inst_31683);
var state_31784__$1 = state_31784;
if(inst_31685){
var statearr_31852_31913 = state_31784__$1;
(statearr_31852_31913[(1)] = (19));

} else {
var statearr_31853_31914 = state_31784__$1;
(statearr_31853_31914[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (38))){
var inst_31763 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31854_31915 = state_31784__$1;
(statearr_31854_31915[(2)] = inst_31763);

(statearr_31854_31915[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (30))){
var state_31784__$1 = state_31784;
var statearr_31855_31916 = state_31784__$1;
(statearr_31855_31916[(2)] = null);

(statearr_31855_31916[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (10))){
var inst_31664 = (state_31784[(13)]);
var inst_31662 = (state_31784[(17)]);
var inst_31672 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31662,inst_31664);
var inst_31673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31672,(0),null);
var inst_31674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31672,(1),null);
var state_31784__$1 = (function (){var statearr_31856 = state_31784;
(statearr_31856[(26)] = inst_31673);

return statearr_31856;
})();
if(cljs.core.truth_(inst_31674)){
var statearr_31857_31917 = state_31784__$1;
(statearr_31857_31917[(1)] = (13));

} else {
var statearr_31858_31918 = state_31784__$1;
(statearr_31858_31918[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (18))){
var inst_31709 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31859_31919 = state_31784__$1;
(statearr_31859_31919[(2)] = inst_31709);

(statearr_31859_31919[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (42))){
var state_31784__$1 = state_31784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31784__$1,(45),dchan);
} else {
if((state_val_31785 === (37))){
var inst_31752 = (state_31784[(23)]);
var inst_31652 = (state_31784[(9)]);
var inst_31743 = (state_31784[(25)]);
var inst_31752__$1 = cljs.core.first(inst_31743);
var inst_31753 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31752__$1,inst_31652,done);
var state_31784__$1 = (function (){var statearr_31860 = state_31784;
(statearr_31860[(23)] = inst_31752__$1);

return statearr_31860;
})();
if(cljs.core.truth_(inst_31753)){
var statearr_31861_31920 = state_31784__$1;
(statearr_31861_31920[(1)] = (39));

} else {
var statearr_31862_31921 = state_31784__$1;
(statearr_31862_31921[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31785 === (8))){
var inst_31664 = (state_31784[(13)]);
var inst_31663 = (state_31784[(16)]);
var inst_31666 = (inst_31664 < inst_31663);
var inst_31667 = inst_31666;
var state_31784__$1 = state_31784;
if(cljs.core.truth_(inst_31667)){
var statearr_31863_31922 = state_31784__$1;
(statearr_31863_31922[(1)] = (10));

} else {
var statearr_31864_31923 = state_31784__$1;
(statearr_31864_31923[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29006__auto__ = null;
var cljs$core$async$mult_$_state_machine__29006__auto____0 = (function (){
var statearr_31865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31865[(0)] = cljs$core$async$mult_$_state_machine__29006__auto__);

(statearr_31865[(1)] = (1));

return statearr_31865;
});
var cljs$core$async$mult_$_state_machine__29006__auto____1 = (function (state_31784){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_31784);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e31866){if((e31866 instanceof Object)){
var ex__29009__auto__ = e31866;
var statearr_31867_31924 = state_31784;
(statearr_31867_31924[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31784);

return cljs.core.cst$kw$recur;
} else {
throw e31866;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__31925 = state_31784;
state_31784 = G__31925;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29006__auto__ = function(state_31784){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29006__auto____1.call(this,state_31784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29006__auto____0;
cljs$core$async$mult_$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29006__auto____1;
return cljs$core$async$mult_$_state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_31868 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_31868[(6)] = c__29194__auto___31869);

return statearr_31868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
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
var G__31927 = arguments.length;
switch (G__31927) {
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
var len__4789__auto___31939 = arguments.length;
var i__4790__auto___31940 = (0);
while(true){
if((i__4790__auto___31940 < len__4789__auto___31939)){
args__4795__auto__.push((arguments[i__4790__auto___31940]));

var G__31941 = (i__4790__auto___31940 + (1));
i__4790__auto___31940 = G__31941;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31933){
var map__31934 = p__31933;
var map__31934__$1 = (((((!((map__31934 == null))))?(((((map__31934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31934):map__31934);
var opts = map__31934__$1;
var statearr_31936_31942 = state;
(statearr_31936_31942[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31937_31943 = state;
(statearr_31937_31943[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31938_31944 = state;
(statearr_31938_31944[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31929){
var G__31930 = cljs.core.first(seq31929);
var seq31929__$1 = cljs.core.next(seq31929);
var G__31931 = cljs.core.first(seq31929__$1);
var seq31929__$2 = cljs.core.next(seq31929__$1);
var G__31932 = cljs.core.first(seq31929__$2);
var seq31929__$3 = cljs.core.next(seq31929__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31930,G__31931,G__31932,seq31929__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31945 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31945 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31946){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31946 = meta31946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31947,meta31946__$1){
var self__ = this;
var _31947__$1 = this;
return (new cljs.core.async.t_cljs$core$async31945(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31946__$1));
}));

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31947){
var self__ = this;
var _31947__$1 = this;
return self__.meta31946;
}));

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta31946], null);
}));

(cljs.core.async.t_cljs$core$async31945.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31945");

(cljs.core.async.t_cljs$core$async31945.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31945");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31945.
 */
cljs.core.async.__GT_t_cljs$core$async31945 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31945(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31946){
return (new cljs.core.async.t_cljs$core$async31945(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31946));
});

}

return (new cljs.core.async.t_cljs$core$async31945(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29194__auto___32109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_32049){
var state_val_32050 = (state_32049[(1)]);
if((state_val_32050 === (7))){
var inst_31964 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
var statearr_32051_32110 = state_32049__$1;
(statearr_32051_32110[(2)] = inst_31964);

(statearr_32051_32110[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (20))){
var inst_31976 = (state_32049[(7)]);
var state_32049__$1 = state_32049;
var statearr_32052_32111 = state_32049__$1;
(statearr_32052_32111[(2)] = inst_31976);

(statearr_32052_32111[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (27))){
var state_32049__$1 = state_32049;
var statearr_32053_32112 = state_32049__$1;
(statearr_32053_32112[(2)] = null);

(statearr_32053_32112[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (1))){
var inst_31951 = (state_32049[(8)]);
var inst_31951__$1 = calc_state();
var inst_31953 = (inst_31951__$1 == null);
var inst_31954 = cljs.core.not(inst_31953);
var state_32049__$1 = (function (){var statearr_32054 = state_32049;
(statearr_32054[(8)] = inst_31951__$1);

return statearr_32054;
})();
if(inst_31954){
var statearr_32055_32113 = state_32049__$1;
(statearr_32055_32113[(1)] = (2));

} else {
var statearr_32056_32114 = state_32049__$1;
(statearr_32056_32114[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (24))){
var inst_32000 = (state_32049[(9)]);
var inst_32009 = (state_32049[(10)]);
var inst_32023 = (state_32049[(11)]);
var inst_32023__$1 = (inst_32000.cljs$core$IFn$_invoke$arity$1 ? inst_32000.cljs$core$IFn$_invoke$arity$1(inst_32009) : inst_32000.call(null,inst_32009));
var state_32049__$1 = (function (){var statearr_32057 = state_32049;
(statearr_32057[(11)] = inst_32023__$1);

return statearr_32057;
})();
if(cljs.core.truth_(inst_32023__$1)){
var statearr_32058_32115 = state_32049__$1;
(statearr_32058_32115[(1)] = (29));

} else {
var statearr_32059_32116 = state_32049__$1;
(statearr_32059_32116[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (4))){
var inst_31967 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
if(cljs.core.truth_(inst_31967)){
var statearr_32060_32117 = state_32049__$1;
(statearr_32060_32117[(1)] = (8));

} else {
var statearr_32061_32118 = state_32049__$1;
(statearr_32061_32118[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (15))){
var inst_31994 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
if(cljs.core.truth_(inst_31994)){
var statearr_32062_32119 = state_32049__$1;
(statearr_32062_32119[(1)] = (19));

} else {
var statearr_32063_32120 = state_32049__$1;
(statearr_32063_32120[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (21))){
var inst_31999 = (state_32049[(12)]);
var inst_31999__$1 = (state_32049[(2)]);
var inst_32000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31999__$1,cljs.core.cst$kw$solos);
var inst_32001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31999__$1,cljs.core.cst$kw$mutes);
var inst_32002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31999__$1,cljs.core.cst$kw$reads);
var state_32049__$1 = (function (){var statearr_32064 = state_32049;
(statearr_32064[(9)] = inst_32000);

(statearr_32064[(12)] = inst_31999__$1);

(statearr_32064[(13)] = inst_32001);

return statearr_32064;
})();
return cljs.core.async.ioc_alts_BANG_(state_32049__$1,(22),inst_32002);
} else {
if((state_val_32050 === (31))){
var inst_32031 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
if(cljs.core.truth_(inst_32031)){
var statearr_32065_32121 = state_32049__$1;
(statearr_32065_32121[(1)] = (32));

} else {
var statearr_32066_32122 = state_32049__$1;
(statearr_32066_32122[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (32))){
var inst_32008 = (state_32049[(14)]);
var state_32049__$1 = state_32049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32049__$1,(35),out,inst_32008);
} else {
if((state_val_32050 === (33))){
var inst_31999 = (state_32049[(12)]);
var inst_31976 = inst_31999;
var state_32049__$1 = (function (){var statearr_32067 = state_32049;
(statearr_32067[(7)] = inst_31976);

return statearr_32067;
})();
var statearr_32068_32123 = state_32049__$1;
(statearr_32068_32123[(2)] = null);

(statearr_32068_32123[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (13))){
var inst_31976 = (state_32049[(7)]);
var inst_31983 = inst_31976.cljs$lang$protocol_mask$partition0$;
var inst_31984 = (inst_31983 & (64));
var inst_31985 = inst_31976.cljs$core$ISeq$;
var inst_31986 = (cljs.core.PROTOCOL_SENTINEL === inst_31985);
var inst_31987 = ((inst_31984) || (inst_31986));
var state_32049__$1 = state_32049;
if(cljs.core.truth_(inst_31987)){
var statearr_32069_32124 = state_32049__$1;
(statearr_32069_32124[(1)] = (16));

} else {
var statearr_32070_32125 = state_32049__$1;
(statearr_32070_32125[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (22))){
var inst_32009 = (state_32049[(10)]);
var inst_32008 = (state_32049[(14)]);
var inst_32007 = (state_32049[(2)]);
var inst_32008__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32007,(0),null);
var inst_32009__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32007,(1),null);
var inst_32010 = (inst_32008__$1 == null);
var inst_32011 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32009__$1,change);
var inst_32012 = ((inst_32010) || (inst_32011));
var state_32049__$1 = (function (){var statearr_32071 = state_32049;
(statearr_32071[(10)] = inst_32009__$1);

(statearr_32071[(14)] = inst_32008__$1);

return statearr_32071;
})();
if(cljs.core.truth_(inst_32012)){
var statearr_32072_32126 = state_32049__$1;
(statearr_32072_32126[(1)] = (23));

} else {
var statearr_32073_32127 = state_32049__$1;
(statearr_32073_32127[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (36))){
var inst_31999 = (state_32049[(12)]);
var inst_31976 = inst_31999;
var state_32049__$1 = (function (){var statearr_32074 = state_32049;
(statearr_32074[(7)] = inst_31976);

return statearr_32074;
})();
var statearr_32075_32128 = state_32049__$1;
(statearr_32075_32128[(2)] = null);

(statearr_32075_32128[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (29))){
var inst_32023 = (state_32049[(11)]);
var state_32049__$1 = state_32049;
var statearr_32076_32129 = state_32049__$1;
(statearr_32076_32129[(2)] = inst_32023);

(statearr_32076_32129[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (6))){
var state_32049__$1 = state_32049;
var statearr_32077_32130 = state_32049__$1;
(statearr_32077_32130[(2)] = false);

(statearr_32077_32130[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (28))){
var inst_32019 = (state_32049[(2)]);
var inst_32020 = calc_state();
var inst_31976 = inst_32020;
var state_32049__$1 = (function (){var statearr_32078 = state_32049;
(statearr_32078[(7)] = inst_31976);

(statearr_32078[(15)] = inst_32019);

return statearr_32078;
})();
var statearr_32079_32131 = state_32049__$1;
(statearr_32079_32131[(2)] = null);

(statearr_32079_32131[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (25))){
var inst_32045 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
var statearr_32080_32132 = state_32049__$1;
(statearr_32080_32132[(2)] = inst_32045);

(statearr_32080_32132[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (34))){
var inst_32043 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
var statearr_32081_32133 = state_32049__$1;
(statearr_32081_32133[(2)] = inst_32043);

(statearr_32081_32133[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (17))){
var state_32049__$1 = state_32049;
var statearr_32082_32134 = state_32049__$1;
(statearr_32082_32134[(2)] = false);

(statearr_32082_32134[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (3))){
var state_32049__$1 = state_32049;
var statearr_32083_32135 = state_32049__$1;
(statearr_32083_32135[(2)] = false);

(statearr_32083_32135[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (12))){
var inst_32047 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32049__$1,inst_32047);
} else {
if((state_val_32050 === (2))){
var inst_31951 = (state_32049[(8)]);
var inst_31956 = inst_31951.cljs$lang$protocol_mask$partition0$;
var inst_31957 = (inst_31956 & (64));
var inst_31958 = inst_31951.cljs$core$ISeq$;
var inst_31959 = (cljs.core.PROTOCOL_SENTINEL === inst_31958);
var inst_31960 = ((inst_31957) || (inst_31959));
var state_32049__$1 = state_32049;
if(cljs.core.truth_(inst_31960)){
var statearr_32084_32136 = state_32049__$1;
(statearr_32084_32136[(1)] = (5));

} else {
var statearr_32085_32137 = state_32049__$1;
(statearr_32085_32137[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (23))){
var inst_32008 = (state_32049[(14)]);
var inst_32014 = (inst_32008 == null);
var state_32049__$1 = state_32049;
if(cljs.core.truth_(inst_32014)){
var statearr_32086_32138 = state_32049__$1;
(statearr_32086_32138[(1)] = (26));

} else {
var statearr_32087_32139 = state_32049__$1;
(statearr_32087_32139[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (35))){
var inst_32034 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
if(cljs.core.truth_(inst_32034)){
var statearr_32088_32140 = state_32049__$1;
(statearr_32088_32140[(1)] = (36));

} else {
var statearr_32089_32141 = state_32049__$1;
(statearr_32089_32141[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (19))){
var inst_31976 = (state_32049[(7)]);
var inst_31996 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31976);
var state_32049__$1 = state_32049;
var statearr_32090_32142 = state_32049__$1;
(statearr_32090_32142[(2)] = inst_31996);

(statearr_32090_32142[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (11))){
var inst_31976 = (state_32049[(7)]);
var inst_31980 = (inst_31976 == null);
var inst_31981 = cljs.core.not(inst_31980);
var state_32049__$1 = state_32049;
if(inst_31981){
var statearr_32091_32143 = state_32049__$1;
(statearr_32091_32143[(1)] = (13));

} else {
var statearr_32092_32144 = state_32049__$1;
(statearr_32092_32144[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (9))){
var inst_31951 = (state_32049[(8)]);
var state_32049__$1 = state_32049;
var statearr_32093_32145 = state_32049__$1;
(statearr_32093_32145[(2)] = inst_31951);

(statearr_32093_32145[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (5))){
var state_32049__$1 = state_32049;
var statearr_32094_32146 = state_32049__$1;
(statearr_32094_32146[(2)] = true);

(statearr_32094_32146[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (14))){
var state_32049__$1 = state_32049;
var statearr_32095_32147 = state_32049__$1;
(statearr_32095_32147[(2)] = false);

(statearr_32095_32147[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (26))){
var inst_32009 = (state_32049[(10)]);
var inst_32016 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32009);
var state_32049__$1 = state_32049;
var statearr_32096_32148 = state_32049__$1;
(statearr_32096_32148[(2)] = inst_32016);

(statearr_32096_32148[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (16))){
var state_32049__$1 = state_32049;
var statearr_32097_32149 = state_32049__$1;
(statearr_32097_32149[(2)] = true);

(statearr_32097_32149[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (38))){
var inst_32039 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
var statearr_32098_32150 = state_32049__$1;
(statearr_32098_32150[(2)] = inst_32039);

(statearr_32098_32150[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (30))){
var inst_32000 = (state_32049[(9)]);
var inst_32009 = (state_32049[(10)]);
var inst_32001 = (state_32049[(13)]);
var inst_32026 = cljs.core.empty_QMARK_(inst_32000);
var inst_32027 = (inst_32001.cljs$core$IFn$_invoke$arity$1 ? inst_32001.cljs$core$IFn$_invoke$arity$1(inst_32009) : inst_32001.call(null,inst_32009));
var inst_32028 = cljs.core.not(inst_32027);
var inst_32029 = ((inst_32026) && (inst_32028));
var state_32049__$1 = state_32049;
var statearr_32099_32151 = state_32049__$1;
(statearr_32099_32151[(2)] = inst_32029);

(statearr_32099_32151[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (10))){
var inst_31951 = (state_32049[(8)]);
var inst_31972 = (state_32049[(2)]);
var inst_31973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31972,cljs.core.cst$kw$solos);
var inst_31974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31972,cljs.core.cst$kw$mutes);
var inst_31975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31972,cljs.core.cst$kw$reads);
var inst_31976 = inst_31951;
var state_32049__$1 = (function (){var statearr_32100 = state_32049;
(statearr_32100[(16)] = inst_31975);

(statearr_32100[(7)] = inst_31976);

(statearr_32100[(17)] = inst_31974);

(statearr_32100[(18)] = inst_31973);

return statearr_32100;
})();
var statearr_32101_32152 = state_32049__$1;
(statearr_32101_32152[(2)] = null);

(statearr_32101_32152[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (18))){
var inst_31991 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
var statearr_32102_32153 = state_32049__$1;
(statearr_32102_32153[(2)] = inst_31991);

(statearr_32102_32153[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (37))){
var state_32049__$1 = state_32049;
var statearr_32103_32154 = state_32049__$1;
(statearr_32103_32154[(2)] = null);

(statearr_32103_32154[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32050 === (8))){
var inst_31951 = (state_32049[(8)]);
var inst_31969 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31951);
var state_32049__$1 = state_32049;
var statearr_32104_32155 = state_32049__$1;
(statearr_32104_32155[(2)] = inst_31969);

(statearr_32104_32155[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__29006__auto__ = null;
var cljs$core$async$mix_$_state_machine__29006__auto____0 = (function (){
var statearr_32105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32105[(0)] = cljs$core$async$mix_$_state_machine__29006__auto__);

(statearr_32105[(1)] = (1));

return statearr_32105;
});
var cljs$core$async$mix_$_state_machine__29006__auto____1 = (function (state_32049){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_32049);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e32106){if((e32106 instanceof Object)){
var ex__29009__auto__ = e32106;
var statearr_32107_32156 = state_32049;
(statearr_32107_32156[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32049);

return cljs.core.cst$kw$recur;
} else {
throw e32106;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__32157 = state_32049;
state_32049 = G__32157;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29006__auto__ = function(state_32049){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29006__auto____1.call(this,state_32049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29006__auto____0;
cljs$core$async$mix_$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29006__auto____1;
return cljs$core$async$mix_$_state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_32108 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_32108[(6)] = c__29194__auto___32109);

return statearr_32108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
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
var G__32159 = arguments.length;
switch (G__32159) {
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
var G__32163 = arguments.length;
switch (G__32163) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32161_SHARP_){
if(cljs.core.truth_((p1__32161_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32161_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32161_SHARP_.call(null,topic)))){
return p1__32161_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32161_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32164 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32165){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32165 = meta32165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32166,meta32165__$1){
var self__ = this;
var _32166__$1 = this;
return (new cljs.core.async.t_cljs$core$async32164(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32165__$1));
}));

(cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32166){
var self__ = this;
var _32166__$1 = this;
return self__.meta32165;
}));

(cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta32165], null);
}));

(cljs.core.async.t_cljs$core$async32164.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32164");

(cljs.core.async.t_cljs$core$async32164.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32164");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32164.
 */
cljs.core.async.__GT_t_cljs$core$async32164 = (function cljs$core$async$__GT_t_cljs$core$async32164(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32165){
return (new cljs.core.async.t_cljs$core$async32164(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32165));
});

}

return (new cljs.core.async.t_cljs$core$async32164(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29194__auto___32284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_32238){
var state_val_32239 = (state_32238[(1)]);
if((state_val_32239 === (7))){
var inst_32234 = (state_32238[(2)]);
var state_32238__$1 = state_32238;
var statearr_32240_32285 = state_32238__$1;
(statearr_32240_32285[(2)] = inst_32234);

(statearr_32240_32285[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (20))){
var state_32238__$1 = state_32238;
var statearr_32241_32286 = state_32238__$1;
(statearr_32241_32286[(2)] = null);

(statearr_32241_32286[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (1))){
var state_32238__$1 = state_32238;
var statearr_32242_32287 = state_32238__$1;
(statearr_32242_32287[(2)] = null);

(statearr_32242_32287[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (24))){
var inst_32217 = (state_32238[(7)]);
var inst_32226 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32217);
var state_32238__$1 = state_32238;
var statearr_32243_32288 = state_32238__$1;
(statearr_32243_32288[(2)] = inst_32226);

(statearr_32243_32288[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (4))){
var inst_32169 = (state_32238[(8)]);
var inst_32169__$1 = (state_32238[(2)]);
var inst_32170 = (inst_32169__$1 == null);
var state_32238__$1 = (function (){var statearr_32244 = state_32238;
(statearr_32244[(8)] = inst_32169__$1);

return statearr_32244;
})();
if(cljs.core.truth_(inst_32170)){
var statearr_32245_32289 = state_32238__$1;
(statearr_32245_32289[(1)] = (5));

} else {
var statearr_32246_32290 = state_32238__$1;
(statearr_32246_32290[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (15))){
var inst_32211 = (state_32238[(2)]);
var state_32238__$1 = state_32238;
var statearr_32247_32291 = state_32238__$1;
(statearr_32247_32291[(2)] = inst_32211);

(statearr_32247_32291[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (21))){
var inst_32231 = (state_32238[(2)]);
var state_32238__$1 = (function (){var statearr_32248 = state_32238;
(statearr_32248[(9)] = inst_32231);

return statearr_32248;
})();
var statearr_32249_32292 = state_32238__$1;
(statearr_32249_32292[(2)] = null);

(statearr_32249_32292[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (13))){
var inst_32193 = (state_32238[(10)]);
var inst_32195 = cljs.core.chunked_seq_QMARK_(inst_32193);
var state_32238__$1 = state_32238;
if(inst_32195){
var statearr_32250_32293 = state_32238__$1;
(statearr_32250_32293[(1)] = (16));

} else {
var statearr_32251_32294 = state_32238__$1;
(statearr_32251_32294[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (22))){
var inst_32223 = (state_32238[(2)]);
var state_32238__$1 = state_32238;
if(cljs.core.truth_(inst_32223)){
var statearr_32252_32295 = state_32238__$1;
(statearr_32252_32295[(1)] = (23));

} else {
var statearr_32253_32296 = state_32238__$1;
(statearr_32253_32296[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (6))){
var inst_32217 = (state_32238[(7)]);
var inst_32219 = (state_32238[(11)]);
var inst_32169 = (state_32238[(8)]);
var inst_32217__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32169) : topic_fn.call(null,inst_32169));
var inst_32218 = cljs.core.deref(mults);
var inst_32219__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32218,inst_32217__$1);
var state_32238__$1 = (function (){var statearr_32254 = state_32238;
(statearr_32254[(7)] = inst_32217__$1);

(statearr_32254[(11)] = inst_32219__$1);

return statearr_32254;
})();
if(cljs.core.truth_(inst_32219__$1)){
var statearr_32255_32297 = state_32238__$1;
(statearr_32255_32297[(1)] = (19));

} else {
var statearr_32256_32298 = state_32238__$1;
(statearr_32256_32298[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (25))){
var inst_32228 = (state_32238[(2)]);
var state_32238__$1 = state_32238;
var statearr_32257_32299 = state_32238__$1;
(statearr_32257_32299[(2)] = inst_32228);

(statearr_32257_32299[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (17))){
var inst_32193 = (state_32238[(10)]);
var inst_32202 = cljs.core.first(inst_32193);
var inst_32203 = cljs.core.async.muxch_STAR_(inst_32202);
var inst_32204 = cljs.core.async.close_BANG_(inst_32203);
var inst_32205 = cljs.core.next(inst_32193);
var inst_32179 = inst_32205;
var inst_32180 = null;
var inst_32181 = (0);
var inst_32182 = (0);
var state_32238__$1 = (function (){var statearr_32258 = state_32238;
(statearr_32258[(12)] = inst_32204);

(statearr_32258[(13)] = inst_32179);

(statearr_32258[(14)] = inst_32181);

(statearr_32258[(15)] = inst_32182);

(statearr_32258[(16)] = inst_32180);

return statearr_32258;
})();
var statearr_32259_32300 = state_32238__$1;
(statearr_32259_32300[(2)] = null);

(statearr_32259_32300[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (3))){
var inst_32236 = (state_32238[(2)]);
var state_32238__$1 = state_32238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32238__$1,inst_32236);
} else {
if((state_val_32239 === (12))){
var inst_32213 = (state_32238[(2)]);
var state_32238__$1 = state_32238;
var statearr_32260_32301 = state_32238__$1;
(statearr_32260_32301[(2)] = inst_32213);

(statearr_32260_32301[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (2))){
var state_32238__$1 = state_32238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32238__$1,(4),ch);
} else {
if((state_val_32239 === (23))){
var state_32238__$1 = state_32238;
var statearr_32261_32302 = state_32238__$1;
(statearr_32261_32302[(2)] = null);

(statearr_32261_32302[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (19))){
var inst_32219 = (state_32238[(11)]);
var inst_32169 = (state_32238[(8)]);
var inst_32221 = cljs.core.async.muxch_STAR_(inst_32219);
var state_32238__$1 = state_32238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32238__$1,(22),inst_32221,inst_32169);
} else {
if((state_val_32239 === (11))){
var inst_32179 = (state_32238[(13)]);
var inst_32193 = (state_32238[(10)]);
var inst_32193__$1 = cljs.core.seq(inst_32179);
var state_32238__$1 = (function (){var statearr_32262 = state_32238;
(statearr_32262[(10)] = inst_32193__$1);

return statearr_32262;
})();
if(inst_32193__$1){
var statearr_32263_32303 = state_32238__$1;
(statearr_32263_32303[(1)] = (13));

} else {
var statearr_32264_32304 = state_32238__$1;
(statearr_32264_32304[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (9))){
var inst_32215 = (state_32238[(2)]);
var state_32238__$1 = state_32238;
var statearr_32265_32305 = state_32238__$1;
(statearr_32265_32305[(2)] = inst_32215);

(statearr_32265_32305[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (5))){
var inst_32176 = cljs.core.deref(mults);
var inst_32177 = cljs.core.vals(inst_32176);
var inst_32178 = cljs.core.seq(inst_32177);
var inst_32179 = inst_32178;
var inst_32180 = null;
var inst_32181 = (0);
var inst_32182 = (0);
var state_32238__$1 = (function (){var statearr_32266 = state_32238;
(statearr_32266[(13)] = inst_32179);

(statearr_32266[(14)] = inst_32181);

(statearr_32266[(15)] = inst_32182);

(statearr_32266[(16)] = inst_32180);

return statearr_32266;
})();
var statearr_32267_32306 = state_32238__$1;
(statearr_32267_32306[(2)] = null);

(statearr_32267_32306[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (14))){
var state_32238__$1 = state_32238;
var statearr_32271_32307 = state_32238__$1;
(statearr_32271_32307[(2)] = null);

(statearr_32271_32307[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (16))){
var inst_32193 = (state_32238[(10)]);
var inst_32197 = cljs.core.chunk_first(inst_32193);
var inst_32198 = cljs.core.chunk_rest(inst_32193);
var inst_32199 = cljs.core.count(inst_32197);
var inst_32179 = inst_32198;
var inst_32180 = inst_32197;
var inst_32181 = inst_32199;
var inst_32182 = (0);
var state_32238__$1 = (function (){var statearr_32272 = state_32238;
(statearr_32272[(13)] = inst_32179);

(statearr_32272[(14)] = inst_32181);

(statearr_32272[(15)] = inst_32182);

(statearr_32272[(16)] = inst_32180);

return statearr_32272;
})();
var statearr_32273_32308 = state_32238__$1;
(statearr_32273_32308[(2)] = null);

(statearr_32273_32308[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (10))){
var inst_32179 = (state_32238[(13)]);
var inst_32181 = (state_32238[(14)]);
var inst_32182 = (state_32238[(15)]);
var inst_32180 = (state_32238[(16)]);
var inst_32187 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32180,inst_32182);
var inst_32188 = cljs.core.async.muxch_STAR_(inst_32187);
var inst_32189 = cljs.core.async.close_BANG_(inst_32188);
var inst_32190 = (inst_32182 + (1));
var tmp32268 = inst_32179;
var tmp32269 = inst_32181;
var tmp32270 = inst_32180;
var inst_32179__$1 = tmp32268;
var inst_32180__$1 = tmp32270;
var inst_32181__$1 = tmp32269;
var inst_32182__$1 = inst_32190;
var state_32238__$1 = (function (){var statearr_32274 = state_32238;
(statearr_32274[(13)] = inst_32179__$1);

(statearr_32274[(14)] = inst_32181__$1);

(statearr_32274[(15)] = inst_32182__$1);

(statearr_32274[(17)] = inst_32189);

(statearr_32274[(16)] = inst_32180__$1);

return statearr_32274;
})();
var statearr_32275_32309 = state_32238__$1;
(statearr_32275_32309[(2)] = null);

(statearr_32275_32309[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (18))){
var inst_32208 = (state_32238[(2)]);
var state_32238__$1 = state_32238;
var statearr_32276_32310 = state_32238__$1;
(statearr_32276_32310[(2)] = inst_32208);

(statearr_32276_32310[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32239 === (8))){
var inst_32181 = (state_32238[(14)]);
var inst_32182 = (state_32238[(15)]);
var inst_32184 = (inst_32182 < inst_32181);
var inst_32185 = inst_32184;
var state_32238__$1 = state_32238;
if(cljs.core.truth_(inst_32185)){
var statearr_32277_32311 = state_32238__$1;
(statearr_32277_32311[(1)] = (10));

} else {
var statearr_32278_32312 = state_32238__$1;
(statearr_32278_32312[(1)] = (11));

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
var cljs$core$async$state_machine__29006__auto__ = null;
var cljs$core$async$state_machine__29006__auto____0 = (function (){
var statearr_32279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32279[(0)] = cljs$core$async$state_machine__29006__auto__);

(statearr_32279[(1)] = (1));

return statearr_32279;
});
var cljs$core$async$state_machine__29006__auto____1 = (function (state_32238){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_32238);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e32280){if((e32280 instanceof Object)){
var ex__29009__auto__ = e32280;
var statearr_32281_32313 = state_32238;
(statearr_32281_32313[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32238);

return cljs.core.cst$kw$recur;
} else {
throw e32280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__32314 = state_32238;
state_32238 = G__32314;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$state_machine__29006__auto__ = function(state_32238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29006__auto____1.call(this,state_32238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29006__auto____0;
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29006__auto____1;
return cljs$core$async$state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_32282 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_32282[(6)] = c__29194__auto___32284);

return statearr_32282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
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
var G__32316 = arguments.length;
switch (G__32316) {
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
var G__32319 = arguments.length;
switch (G__32319) {
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
var G__32322 = arguments.length;
switch (G__32322) {
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
var c__29194__auto___32389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_32361){
var state_val_32362 = (state_32361[(1)]);
if((state_val_32362 === (7))){
var state_32361__$1 = state_32361;
var statearr_32363_32390 = state_32361__$1;
(statearr_32363_32390[(2)] = null);

(statearr_32363_32390[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32362 === (1))){
var state_32361__$1 = state_32361;
var statearr_32364_32391 = state_32361__$1;
(statearr_32364_32391[(2)] = null);

(statearr_32364_32391[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32362 === (4))){
var inst_32325 = (state_32361[(7)]);
var inst_32327 = (inst_32325 < cnt);
var state_32361__$1 = state_32361;
if(cljs.core.truth_(inst_32327)){
var statearr_32365_32392 = state_32361__$1;
(statearr_32365_32392[(1)] = (6));

} else {
var statearr_32366_32393 = state_32361__$1;
(statearr_32366_32393[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32362 === (15))){
var inst_32357 = (state_32361[(2)]);
var state_32361__$1 = state_32361;
var statearr_32367_32394 = state_32361__$1;
(statearr_32367_32394[(2)] = inst_32357);

(statearr_32367_32394[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32362 === (13))){
var inst_32350 = cljs.core.async.close_BANG_(out);
var state_32361__$1 = state_32361;
var statearr_32368_32395 = state_32361__$1;
(statearr_32368_32395[(2)] = inst_32350);

(statearr_32368_32395[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32362 === (6))){
var state_32361__$1 = state_32361;
var statearr_32369_32396 = state_32361__$1;
(statearr_32369_32396[(2)] = null);

(statearr_32369_32396[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32362 === (3))){
var inst_32359 = (state_32361[(2)]);
var state_32361__$1 = state_32361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32361__$1,inst_32359);
} else {
if((state_val_32362 === (12))){
var inst_32347 = (state_32361[(8)]);
var inst_32347__$1 = (state_32361[(2)]);
var inst_32348 = cljs.core.some(cljs.core.nil_QMARK_,inst_32347__$1);
var state_32361__$1 = (function (){var statearr_32370 = state_32361;
(statearr_32370[(8)] = inst_32347__$1);

return statearr_32370;
})();
if(cljs.core.truth_(inst_32348)){
var statearr_32371_32397 = state_32361__$1;
(statearr_32371_32397[(1)] = (13));

} else {
var statearr_32372_32398 = state_32361__$1;
(statearr_32372_32398[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32362 === (2))){
var inst_32324 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32325 = (0);
var state_32361__$1 = (function (){var statearr_32373 = state_32361;
(statearr_32373[(7)] = inst_32325);

(statearr_32373[(9)] = inst_32324);

return statearr_32373;
})();
var statearr_32374_32399 = state_32361__$1;
(statearr_32374_32399[(2)] = null);

(statearr_32374_32399[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32362 === (11))){
var inst_32325 = (state_32361[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32361,(10),Object,null,(9));
var inst_32334 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32325) : chs__$1.call(null,inst_32325));
var inst_32335 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32325) : done.call(null,inst_32325));
var inst_32336 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32334,inst_32335);
var state_32361__$1 = state_32361;
var statearr_32375_32400 = state_32361__$1;
(statearr_32375_32400[(2)] = inst_32336);


cljs.core.async.impl.ioc_helpers.process_exception(state_32361__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_32362 === (9))){
var inst_32325 = (state_32361[(7)]);
var inst_32338 = (state_32361[(2)]);
var inst_32339 = (inst_32325 + (1));
var inst_32325__$1 = inst_32339;
var state_32361__$1 = (function (){var statearr_32376 = state_32361;
(statearr_32376[(7)] = inst_32325__$1);

(statearr_32376[(10)] = inst_32338);

return statearr_32376;
})();
var statearr_32377_32401 = state_32361__$1;
(statearr_32377_32401[(2)] = null);

(statearr_32377_32401[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32362 === (5))){
var inst_32345 = (state_32361[(2)]);
var state_32361__$1 = (function (){var statearr_32378 = state_32361;
(statearr_32378[(11)] = inst_32345);

return statearr_32378;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32361__$1,(12),dchan);
} else {
if((state_val_32362 === (14))){
var inst_32347 = (state_32361[(8)]);
var inst_32352 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32347);
var state_32361__$1 = state_32361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32361__$1,(16),out,inst_32352);
} else {
if((state_val_32362 === (16))){
var inst_32354 = (state_32361[(2)]);
var state_32361__$1 = (function (){var statearr_32379 = state_32361;
(statearr_32379[(12)] = inst_32354);

return statearr_32379;
})();
var statearr_32380_32402 = state_32361__$1;
(statearr_32380_32402[(2)] = null);

(statearr_32380_32402[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32362 === (10))){
var inst_32329 = (state_32361[(2)]);
var inst_32330 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32361__$1 = (function (){var statearr_32381 = state_32361;
(statearr_32381[(13)] = inst_32329);

return statearr_32381;
})();
var statearr_32382_32403 = state_32361__$1;
(statearr_32382_32403[(2)] = inst_32330);


cljs.core.async.impl.ioc_helpers.process_exception(state_32361__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_32362 === (8))){
var inst_32343 = (state_32361[(2)]);
var state_32361__$1 = state_32361;
var statearr_32383_32404 = state_32361__$1;
(statearr_32383_32404[(2)] = inst_32343);

(statearr_32383_32404[(1)] = (5));


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
var cljs$core$async$state_machine__29006__auto__ = null;
var cljs$core$async$state_machine__29006__auto____0 = (function (){
var statearr_32384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32384[(0)] = cljs$core$async$state_machine__29006__auto__);

(statearr_32384[(1)] = (1));

return statearr_32384;
});
var cljs$core$async$state_machine__29006__auto____1 = (function (state_32361){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_32361);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e32385){if((e32385 instanceof Object)){
var ex__29009__auto__ = e32385;
var statearr_32386_32405 = state_32361;
(statearr_32386_32405[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32361);

return cljs.core.cst$kw$recur;
} else {
throw e32385;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__32406 = state_32361;
state_32361 = G__32406;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$state_machine__29006__auto__ = function(state_32361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29006__auto____1.call(this,state_32361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29006__auto____0;
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29006__auto____1;
return cljs$core$async$state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_32387 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_32387[(6)] = c__29194__auto___32389);

return statearr_32387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
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
var G__32409 = arguments.length;
switch (G__32409) {
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
var c__29194__auto___32463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_32441){
var state_val_32442 = (state_32441[(1)]);
if((state_val_32442 === (7))){
var inst_32420 = (state_32441[(7)]);
var inst_32421 = (state_32441[(8)]);
var inst_32420__$1 = (state_32441[(2)]);
var inst_32421__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32420__$1,(0),null);
var inst_32422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32420__$1,(1),null);
var inst_32423 = (inst_32421__$1 == null);
var state_32441__$1 = (function (){var statearr_32443 = state_32441;
(statearr_32443[(7)] = inst_32420__$1);

(statearr_32443[(8)] = inst_32421__$1);

(statearr_32443[(9)] = inst_32422);

return statearr_32443;
})();
if(cljs.core.truth_(inst_32423)){
var statearr_32444_32464 = state_32441__$1;
(statearr_32444_32464[(1)] = (8));

} else {
var statearr_32445_32465 = state_32441__$1;
(statearr_32445_32465[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32442 === (1))){
var inst_32410 = cljs.core.vec(chs);
var inst_32411 = inst_32410;
var state_32441__$1 = (function (){var statearr_32446 = state_32441;
(statearr_32446[(10)] = inst_32411);

return statearr_32446;
})();
var statearr_32447_32466 = state_32441__$1;
(statearr_32447_32466[(2)] = null);

(statearr_32447_32466[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32442 === (4))){
var inst_32411 = (state_32441[(10)]);
var state_32441__$1 = state_32441;
return cljs.core.async.ioc_alts_BANG_(state_32441__$1,(7),inst_32411);
} else {
if((state_val_32442 === (6))){
var inst_32437 = (state_32441[(2)]);
var state_32441__$1 = state_32441;
var statearr_32448_32467 = state_32441__$1;
(statearr_32448_32467[(2)] = inst_32437);

(statearr_32448_32467[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32442 === (3))){
var inst_32439 = (state_32441[(2)]);
var state_32441__$1 = state_32441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32441__$1,inst_32439);
} else {
if((state_val_32442 === (2))){
var inst_32411 = (state_32441[(10)]);
var inst_32413 = cljs.core.count(inst_32411);
var inst_32414 = (inst_32413 > (0));
var state_32441__$1 = state_32441;
if(cljs.core.truth_(inst_32414)){
var statearr_32450_32468 = state_32441__$1;
(statearr_32450_32468[(1)] = (4));

} else {
var statearr_32451_32469 = state_32441__$1;
(statearr_32451_32469[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32442 === (11))){
var inst_32411 = (state_32441[(10)]);
var inst_32430 = (state_32441[(2)]);
var tmp32449 = inst_32411;
var inst_32411__$1 = tmp32449;
var state_32441__$1 = (function (){var statearr_32452 = state_32441;
(statearr_32452[(10)] = inst_32411__$1);

(statearr_32452[(11)] = inst_32430);

return statearr_32452;
})();
var statearr_32453_32470 = state_32441__$1;
(statearr_32453_32470[(2)] = null);

(statearr_32453_32470[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32442 === (9))){
var inst_32421 = (state_32441[(8)]);
var state_32441__$1 = state_32441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32441__$1,(11),out,inst_32421);
} else {
if((state_val_32442 === (5))){
var inst_32435 = cljs.core.async.close_BANG_(out);
var state_32441__$1 = state_32441;
var statearr_32454_32471 = state_32441__$1;
(statearr_32454_32471[(2)] = inst_32435);

(statearr_32454_32471[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32442 === (10))){
var inst_32433 = (state_32441[(2)]);
var state_32441__$1 = state_32441;
var statearr_32455_32472 = state_32441__$1;
(statearr_32455_32472[(2)] = inst_32433);

(statearr_32455_32472[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32442 === (8))){
var inst_32411 = (state_32441[(10)]);
var inst_32420 = (state_32441[(7)]);
var inst_32421 = (state_32441[(8)]);
var inst_32422 = (state_32441[(9)]);
var inst_32425 = (function (){var cs = inst_32411;
var vec__32416 = inst_32420;
var v = inst_32421;
var c = inst_32422;
return (function (p1__32407_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32407_SHARP_);
});
})();
var inst_32426 = cljs.core.filterv(inst_32425,inst_32411);
var inst_32411__$1 = inst_32426;
var state_32441__$1 = (function (){var statearr_32456 = state_32441;
(statearr_32456[(10)] = inst_32411__$1);

return statearr_32456;
})();
var statearr_32457_32473 = state_32441__$1;
(statearr_32457_32473[(2)] = null);

(statearr_32457_32473[(1)] = (2));


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
var cljs$core$async$state_machine__29006__auto__ = null;
var cljs$core$async$state_machine__29006__auto____0 = (function (){
var statearr_32458 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32458[(0)] = cljs$core$async$state_machine__29006__auto__);

(statearr_32458[(1)] = (1));

return statearr_32458;
});
var cljs$core$async$state_machine__29006__auto____1 = (function (state_32441){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_32441);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e32459){if((e32459 instanceof Object)){
var ex__29009__auto__ = e32459;
var statearr_32460_32474 = state_32441;
(statearr_32460_32474[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32441);

return cljs.core.cst$kw$recur;
} else {
throw e32459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__32475 = state_32441;
state_32441 = G__32475;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$state_machine__29006__auto__ = function(state_32441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29006__auto____1.call(this,state_32441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29006__auto____0;
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29006__auto____1;
return cljs$core$async$state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_32461 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_32461[(6)] = c__29194__auto___32463);

return statearr_32461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
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
var G__32477 = arguments.length;
switch (G__32477) {
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
var c__29194__auto___32522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_32501){
var state_val_32502 = (state_32501[(1)]);
if((state_val_32502 === (7))){
var inst_32483 = (state_32501[(7)]);
var inst_32483__$1 = (state_32501[(2)]);
var inst_32484 = (inst_32483__$1 == null);
var inst_32485 = cljs.core.not(inst_32484);
var state_32501__$1 = (function (){var statearr_32503 = state_32501;
(statearr_32503[(7)] = inst_32483__$1);

return statearr_32503;
})();
if(inst_32485){
var statearr_32504_32523 = state_32501__$1;
(statearr_32504_32523[(1)] = (8));

} else {
var statearr_32505_32524 = state_32501__$1;
(statearr_32505_32524[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32502 === (1))){
var inst_32478 = (0);
var state_32501__$1 = (function (){var statearr_32506 = state_32501;
(statearr_32506[(8)] = inst_32478);

return statearr_32506;
})();
var statearr_32507_32525 = state_32501__$1;
(statearr_32507_32525[(2)] = null);

(statearr_32507_32525[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32502 === (4))){
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32501__$1,(7),ch);
} else {
if((state_val_32502 === (6))){
var inst_32496 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
var statearr_32508_32526 = state_32501__$1;
(statearr_32508_32526[(2)] = inst_32496);

(statearr_32508_32526[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32502 === (3))){
var inst_32498 = (state_32501[(2)]);
var inst_32499 = cljs.core.async.close_BANG_(out);
var state_32501__$1 = (function (){var statearr_32509 = state_32501;
(statearr_32509[(9)] = inst_32498);

return statearr_32509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32501__$1,inst_32499);
} else {
if((state_val_32502 === (2))){
var inst_32478 = (state_32501[(8)]);
var inst_32480 = (inst_32478 < n);
var state_32501__$1 = state_32501;
if(cljs.core.truth_(inst_32480)){
var statearr_32510_32527 = state_32501__$1;
(statearr_32510_32527[(1)] = (4));

} else {
var statearr_32511_32528 = state_32501__$1;
(statearr_32511_32528[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32502 === (11))){
var inst_32478 = (state_32501[(8)]);
var inst_32488 = (state_32501[(2)]);
var inst_32489 = (inst_32478 + (1));
var inst_32478__$1 = inst_32489;
var state_32501__$1 = (function (){var statearr_32512 = state_32501;
(statearr_32512[(8)] = inst_32478__$1);

(statearr_32512[(10)] = inst_32488);

return statearr_32512;
})();
var statearr_32513_32529 = state_32501__$1;
(statearr_32513_32529[(2)] = null);

(statearr_32513_32529[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32502 === (9))){
var state_32501__$1 = state_32501;
var statearr_32514_32530 = state_32501__$1;
(statearr_32514_32530[(2)] = null);

(statearr_32514_32530[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32502 === (5))){
var state_32501__$1 = state_32501;
var statearr_32515_32531 = state_32501__$1;
(statearr_32515_32531[(2)] = null);

(statearr_32515_32531[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32502 === (10))){
var inst_32493 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
var statearr_32516_32532 = state_32501__$1;
(statearr_32516_32532[(2)] = inst_32493);

(statearr_32516_32532[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32502 === (8))){
var inst_32483 = (state_32501[(7)]);
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32501__$1,(11),out,inst_32483);
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
var cljs$core$async$state_machine__29006__auto__ = null;
var cljs$core$async$state_machine__29006__auto____0 = (function (){
var statearr_32517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32517[(0)] = cljs$core$async$state_machine__29006__auto__);

(statearr_32517[(1)] = (1));

return statearr_32517;
});
var cljs$core$async$state_machine__29006__auto____1 = (function (state_32501){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_32501);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e32518){if((e32518 instanceof Object)){
var ex__29009__auto__ = e32518;
var statearr_32519_32533 = state_32501;
(statearr_32519_32533[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32501);

return cljs.core.cst$kw$recur;
} else {
throw e32518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__32534 = state_32501;
state_32501 = G__32534;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$state_machine__29006__auto__ = function(state_32501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29006__auto____1.call(this,state_32501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29006__auto____0;
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29006__auto____1;
return cljs$core$async$state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_32520 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_32520[(6)] = c__29194__auto___32522);

return statearr_32520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32536 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32536 = (function (f,ch,meta32537){
this.f = f;
this.ch = ch;
this.meta32537 = meta32537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32538,meta32537__$1){
var self__ = this;
var _32538__$1 = this;
return (new cljs.core.async.t_cljs$core$async32536(self__.f,self__.ch,meta32537__$1));
}));

(cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32538){
var self__ = this;
var _32538__$1 = this;
return self__.meta32537;
}));

(cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32539 = (function (f,ch,meta32537,_,fn1,meta32540){
this.f = f;
this.ch = ch;
this.meta32537 = meta32537;
this._ = _;
this.fn1 = fn1;
this.meta32540 = meta32540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32541,meta32540__$1){
var self__ = this;
var _32541__$1 = this;
return (new cljs.core.async.t_cljs$core$async32539(self__.f,self__.ch,self__.meta32537,self__._,self__.fn1,meta32540__$1));
}));

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32541){
var self__ = this;
var _32541__$1 = this;
return self__.meta32540;
}));

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32535_SHARP_){
var G__32542 = (((p1__32535_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32535_SHARP_) : self__.f.call(null,p1__32535_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32542) : f1.call(null,G__32542));
});
}));

(cljs.core.async.t_cljs$core$async32539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32537,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async32536], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta32540], null);
}));

(cljs.core.async.t_cljs$core$async32539.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32539");

(cljs.core.async.t_cljs$core$async32539.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32539");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32539.
 */
cljs.core.async.__GT_t_cljs$core$async32539 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32539(f__$1,ch__$1,meta32537__$1,___$2,fn1__$1,meta32540){
return (new cljs.core.async.t_cljs$core$async32539(f__$1,ch__$1,meta32537__$1,___$2,fn1__$1,meta32540));
});

}

return (new cljs.core.async.t_cljs$core$async32539(self__.f,self__.ch,self__.meta32537,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32543 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32543) : self__.f.call(null,G__32543));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32537], null);
}));

(cljs.core.async.t_cljs$core$async32536.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32536");

(cljs.core.async.t_cljs$core$async32536.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32536");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32536.
 */
cljs.core.async.__GT_t_cljs$core$async32536 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32536(f__$1,ch__$1,meta32537){
return (new cljs.core.async.t_cljs$core$async32536(f__$1,ch__$1,meta32537));
});

}

return (new cljs.core.async.t_cljs$core$async32536(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32544 = (function (f,ch,meta32545){
this.f = f;
this.ch = ch;
this.meta32545 = meta32545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32546,meta32545__$1){
var self__ = this;
var _32546__$1 = this;
return (new cljs.core.async.t_cljs$core$async32544(self__.f,self__.ch,meta32545__$1));
}));

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32546){
var self__ = this;
var _32546__$1 = this;
return self__.meta32545;
}));

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32545], null);
}));

(cljs.core.async.t_cljs$core$async32544.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32544");

(cljs.core.async.t_cljs$core$async32544.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32544");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32544.
 */
cljs.core.async.__GT_t_cljs$core$async32544 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32544(f__$1,ch__$1,meta32545){
return (new cljs.core.async.t_cljs$core$async32544(f__$1,ch__$1,meta32545));
});

}

return (new cljs.core.async.t_cljs$core$async32544(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32547 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32547 = (function (p,ch,meta32548){
this.p = p;
this.ch = ch;
this.meta32548 = meta32548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32549,meta32548__$1){
var self__ = this;
var _32549__$1 = this;
return (new cljs.core.async.t_cljs$core$async32547(self__.p,self__.ch,meta32548__$1));
}));

(cljs.core.async.t_cljs$core$async32547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32549){
var self__ = this;
var _32549__$1 = this;
return self__.meta32548;
}));

(cljs.core.async.t_cljs$core$async32547.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32547.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32547.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32547.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32547.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32547.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32547.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32548], null);
}));

(cljs.core.async.t_cljs$core$async32547.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32547");

(cljs.core.async.t_cljs$core$async32547.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32547");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32547.
 */
cljs.core.async.__GT_t_cljs$core$async32547 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32547(p__$1,ch__$1,meta32548){
return (new cljs.core.async.t_cljs$core$async32547(p__$1,ch__$1,meta32548));
});

}

return (new cljs.core.async.t_cljs$core$async32547(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32551 = arguments.length;
switch (G__32551) {
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
var c__29194__auto___32591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_32572){
var state_val_32573 = (state_32572[(1)]);
if((state_val_32573 === (7))){
var inst_32568 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
var statearr_32574_32592 = state_32572__$1;
(statearr_32574_32592[(2)] = inst_32568);

(statearr_32574_32592[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32573 === (1))){
var state_32572__$1 = state_32572;
var statearr_32575_32593 = state_32572__$1;
(statearr_32575_32593[(2)] = null);

(statearr_32575_32593[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32573 === (4))){
var inst_32554 = (state_32572[(7)]);
var inst_32554__$1 = (state_32572[(2)]);
var inst_32555 = (inst_32554__$1 == null);
var state_32572__$1 = (function (){var statearr_32576 = state_32572;
(statearr_32576[(7)] = inst_32554__$1);

return statearr_32576;
})();
if(cljs.core.truth_(inst_32555)){
var statearr_32577_32594 = state_32572__$1;
(statearr_32577_32594[(1)] = (5));

} else {
var statearr_32578_32595 = state_32572__$1;
(statearr_32578_32595[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32573 === (6))){
var inst_32554 = (state_32572[(7)]);
var inst_32559 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32554) : p.call(null,inst_32554));
var state_32572__$1 = state_32572;
if(cljs.core.truth_(inst_32559)){
var statearr_32579_32596 = state_32572__$1;
(statearr_32579_32596[(1)] = (8));

} else {
var statearr_32580_32597 = state_32572__$1;
(statearr_32580_32597[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32573 === (3))){
var inst_32570 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32572__$1,inst_32570);
} else {
if((state_val_32573 === (2))){
var state_32572__$1 = state_32572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32572__$1,(4),ch);
} else {
if((state_val_32573 === (11))){
var inst_32562 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
var statearr_32581_32598 = state_32572__$1;
(statearr_32581_32598[(2)] = inst_32562);

(statearr_32581_32598[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32573 === (9))){
var state_32572__$1 = state_32572;
var statearr_32582_32599 = state_32572__$1;
(statearr_32582_32599[(2)] = null);

(statearr_32582_32599[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32573 === (5))){
var inst_32557 = cljs.core.async.close_BANG_(out);
var state_32572__$1 = state_32572;
var statearr_32583_32600 = state_32572__$1;
(statearr_32583_32600[(2)] = inst_32557);

(statearr_32583_32600[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32573 === (10))){
var inst_32565 = (state_32572[(2)]);
var state_32572__$1 = (function (){var statearr_32584 = state_32572;
(statearr_32584[(8)] = inst_32565);

return statearr_32584;
})();
var statearr_32585_32601 = state_32572__$1;
(statearr_32585_32601[(2)] = null);

(statearr_32585_32601[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32573 === (8))){
var inst_32554 = (state_32572[(7)]);
var state_32572__$1 = state_32572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32572__$1,(11),out,inst_32554);
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
var cljs$core$async$state_machine__29006__auto__ = null;
var cljs$core$async$state_machine__29006__auto____0 = (function (){
var statearr_32586 = [null,null,null,null,null,null,null,null,null];
(statearr_32586[(0)] = cljs$core$async$state_machine__29006__auto__);

(statearr_32586[(1)] = (1));

return statearr_32586;
});
var cljs$core$async$state_machine__29006__auto____1 = (function (state_32572){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_32572);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e32587){if((e32587 instanceof Object)){
var ex__29009__auto__ = e32587;
var statearr_32588_32602 = state_32572;
(statearr_32588_32602[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32572);

return cljs.core.cst$kw$recur;
} else {
throw e32587;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__32603 = state_32572;
state_32572 = G__32603;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$state_machine__29006__auto__ = function(state_32572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29006__auto____1.call(this,state_32572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29006__auto____0;
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29006__auto____1;
return cljs$core$async$state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_32589 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_32589[(6)] = c__29194__auto___32591);

return statearr_32589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32605 = arguments.length;
switch (G__32605) {
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
var c__29194__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_32668){
var state_val_32669 = (state_32668[(1)]);
if((state_val_32669 === (7))){
var inst_32664 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
var statearr_32670_32708 = state_32668__$1;
(statearr_32670_32708[(2)] = inst_32664);

(statearr_32670_32708[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (20))){
var inst_32634 = (state_32668[(7)]);
var inst_32645 = (state_32668[(2)]);
var inst_32646 = cljs.core.next(inst_32634);
var inst_32620 = inst_32646;
var inst_32621 = null;
var inst_32622 = (0);
var inst_32623 = (0);
var state_32668__$1 = (function (){var statearr_32671 = state_32668;
(statearr_32671[(8)] = inst_32621);

(statearr_32671[(9)] = inst_32620);

(statearr_32671[(10)] = inst_32645);

(statearr_32671[(11)] = inst_32623);

(statearr_32671[(12)] = inst_32622);

return statearr_32671;
})();
var statearr_32672_32709 = state_32668__$1;
(statearr_32672_32709[(2)] = null);

(statearr_32672_32709[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (1))){
var state_32668__$1 = state_32668;
var statearr_32673_32710 = state_32668__$1;
(statearr_32673_32710[(2)] = null);

(statearr_32673_32710[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (4))){
var inst_32609 = (state_32668[(13)]);
var inst_32609__$1 = (state_32668[(2)]);
var inst_32610 = (inst_32609__$1 == null);
var state_32668__$1 = (function (){var statearr_32674 = state_32668;
(statearr_32674[(13)] = inst_32609__$1);

return statearr_32674;
})();
if(cljs.core.truth_(inst_32610)){
var statearr_32675_32711 = state_32668__$1;
(statearr_32675_32711[(1)] = (5));

} else {
var statearr_32676_32712 = state_32668__$1;
(statearr_32676_32712[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (15))){
var state_32668__$1 = state_32668;
var statearr_32680_32713 = state_32668__$1;
(statearr_32680_32713[(2)] = null);

(statearr_32680_32713[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (21))){
var state_32668__$1 = state_32668;
var statearr_32681_32714 = state_32668__$1;
(statearr_32681_32714[(2)] = null);

(statearr_32681_32714[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (13))){
var inst_32621 = (state_32668[(8)]);
var inst_32620 = (state_32668[(9)]);
var inst_32623 = (state_32668[(11)]);
var inst_32622 = (state_32668[(12)]);
var inst_32630 = (state_32668[(2)]);
var inst_32631 = (inst_32623 + (1));
var tmp32677 = inst_32621;
var tmp32678 = inst_32620;
var tmp32679 = inst_32622;
var inst_32620__$1 = tmp32678;
var inst_32621__$1 = tmp32677;
var inst_32622__$1 = tmp32679;
var inst_32623__$1 = inst_32631;
var state_32668__$1 = (function (){var statearr_32682 = state_32668;
(statearr_32682[(8)] = inst_32621__$1);

(statearr_32682[(9)] = inst_32620__$1);

(statearr_32682[(11)] = inst_32623__$1);

(statearr_32682[(14)] = inst_32630);

(statearr_32682[(12)] = inst_32622__$1);

return statearr_32682;
})();
var statearr_32683_32715 = state_32668__$1;
(statearr_32683_32715[(2)] = null);

(statearr_32683_32715[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (22))){
var state_32668__$1 = state_32668;
var statearr_32684_32716 = state_32668__$1;
(statearr_32684_32716[(2)] = null);

(statearr_32684_32716[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (6))){
var inst_32609 = (state_32668[(13)]);
var inst_32618 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32609) : f.call(null,inst_32609));
var inst_32619 = cljs.core.seq(inst_32618);
var inst_32620 = inst_32619;
var inst_32621 = null;
var inst_32622 = (0);
var inst_32623 = (0);
var state_32668__$1 = (function (){var statearr_32685 = state_32668;
(statearr_32685[(8)] = inst_32621);

(statearr_32685[(9)] = inst_32620);

(statearr_32685[(11)] = inst_32623);

(statearr_32685[(12)] = inst_32622);

return statearr_32685;
})();
var statearr_32686_32717 = state_32668__$1;
(statearr_32686_32717[(2)] = null);

(statearr_32686_32717[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (17))){
var inst_32634 = (state_32668[(7)]);
var inst_32638 = cljs.core.chunk_first(inst_32634);
var inst_32639 = cljs.core.chunk_rest(inst_32634);
var inst_32640 = cljs.core.count(inst_32638);
var inst_32620 = inst_32639;
var inst_32621 = inst_32638;
var inst_32622 = inst_32640;
var inst_32623 = (0);
var state_32668__$1 = (function (){var statearr_32687 = state_32668;
(statearr_32687[(8)] = inst_32621);

(statearr_32687[(9)] = inst_32620);

(statearr_32687[(11)] = inst_32623);

(statearr_32687[(12)] = inst_32622);

return statearr_32687;
})();
var statearr_32688_32718 = state_32668__$1;
(statearr_32688_32718[(2)] = null);

(statearr_32688_32718[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (3))){
var inst_32666 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32668__$1,inst_32666);
} else {
if((state_val_32669 === (12))){
var inst_32654 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
var statearr_32689_32719 = state_32668__$1;
(statearr_32689_32719[(2)] = inst_32654);

(statearr_32689_32719[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (2))){
var state_32668__$1 = state_32668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32668__$1,(4),in$);
} else {
if((state_val_32669 === (23))){
var inst_32662 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
var statearr_32690_32720 = state_32668__$1;
(statearr_32690_32720[(2)] = inst_32662);

(statearr_32690_32720[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (19))){
var inst_32649 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
var statearr_32691_32721 = state_32668__$1;
(statearr_32691_32721[(2)] = inst_32649);

(statearr_32691_32721[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (11))){
var inst_32620 = (state_32668[(9)]);
var inst_32634 = (state_32668[(7)]);
var inst_32634__$1 = cljs.core.seq(inst_32620);
var state_32668__$1 = (function (){var statearr_32692 = state_32668;
(statearr_32692[(7)] = inst_32634__$1);

return statearr_32692;
})();
if(inst_32634__$1){
var statearr_32693_32722 = state_32668__$1;
(statearr_32693_32722[(1)] = (14));

} else {
var statearr_32694_32723 = state_32668__$1;
(statearr_32694_32723[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (9))){
var inst_32656 = (state_32668[(2)]);
var inst_32657 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32668__$1 = (function (){var statearr_32695 = state_32668;
(statearr_32695[(15)] = inst_32656);

return statearr_32695;
})();
if(cljs.core.truth_(inst_32657)){
var statearr_32696_32724 = state_32668__$1;
(statearr_32696_32724[(1)] = (21));

} else {
var statearr_32697_32725 = state_32668__$1;
(statearr_32697_32725[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (5))){
var inst_32612 = cljs.core.async.close_BANG_(out);
var state_32668__$1 = state_32668;
var statearr_32698_32726 = state_32668__$1;
(statearr_32698_32726[(2)] = inst_32612);

(statearr_32698_32726[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (14))){
var inst_32634 = (state_32668[(7)]);
var inst_32636 = cljs.core.chunked_seq_QMARK_(inst_32634);
var state_32668__$1 = state_32668;
if(inst_32636){
var statearr_32699_32727 = state_32668__$1;
(statearr_32699_32727[(1)] = (17));

} else {
var statearr_32700_32728 = state_32668__$1;
(statearr_32700_32728[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (16))){
var inst_32652 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
var statearr_32701_32729 = state_32668__$1;
(statearr_32701_32729[(2)] = inst_32652);

(statearr_32701_32729[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32669 === (10))){
var inst_32621 = (state_32668[(8)]);
var inst_32623 = (state_32668[(11)]);
var inst_32628 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32621,inst_32623);
var state_32668__$1 = state_32668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32668__$1,(13),out,inst_32628);
} else {
if((state_val_32669 === (18))){
var inst_32634 = (state_32668[(7)]);
var inst_32643 = cljs.core.first(inst_32634);
var state_32668__$1 = state_32668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32668__$1,(20),out,inst_32643);
} else {
if((state_val_32669 === (8))){
var inst_32623 = (state_32668[(11)]);
var inst_32622 = (state_32668[(12)]);
var inst_32625 = (inst_32623 < inst_32622);
var inst_32626 = inst_32625;
var state_32668__$1 = state_32668;
if(cljs.core.truth_(inst_32626)){
var statearr_32702_32730 = state_32668__$1;
(statearr_32702_32730[(1)] = (10));

} else {
var statearr_32703_32731 = state_32668__$1;
(statearr_32703_32731[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29006__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29006__auto____0 = (function (){
var statearr_32704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32704[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29006__auto__);

(statearr_32704[(1)] = (1));

return statearr_32704;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29006__auto____1 = (function (state_32668){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_32668);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e32705){if((e32705 instanceof Object)){
var ex__29009__auto__ = e32705;
var statearr_32706_32732 = state_32668;
(statearr_32706_32732[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32668);

return cljs.core.cst$kw$recur;
} else {
throw e32705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__32733 = state_32668;
state_32668 = G__32733;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29006__auto__ = function(state_32668){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29006__auto____1.call(this,state_32668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29006__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29006__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_32707 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_32707[(6)] = c__29194__auto__);

return statearr_32707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
}));

return c__29194__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32735 = arguments.length;
switch (G__32735) {
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
var G__32738 = arguments.length;
switch (G__32738) {
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
var G__32741 = arguments.length;
switch (G__32741) {
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
var c__29194__auto___32788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_32765){
var state_val_32766 = (state_32765[(1)]);
if((state_val_32766 === (7))){
var inst_32760 = (state_32765[(2)]);
var state_32765__$1 = state_32765;
var statearr_32767_32789 = state_32765__$1;
(statearr_32767_32789[(2)] = inst_32760);

(statearr_32767_32789[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32766 === (1))){
var inst_32742 = null;
var state_32765__$1 = (function (){var statearr_32768 = state_32765;
(statearr_32768[(7)] = inst_32742);

return statearr_32768;
})();
var statearr_32769_32790 = state_32765__$1;
(statearr_32769_32790[(2)] = null);

(statearr_32769_32790[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32766 === (4))){
var inst_32745 = (state_32765[(8)]);
var inst_32745__$1 = (state_32765[(2)]);
var inst_32746 = (inst_32745__$1 == null);
var inst_32747 = cljs.core.not(inst_32746);
var state_32765__$1 = (function (){var statearr_32770 = state_32765;
(statearr_32770[(8)] = inst_32745__$1);

return statearr_32770;
})();
if(inst_32747){
var statearr_32771_32791 = state_32765__$1;
(statearr_32771_32791[(1)] = (5));

} else {
var statearr_32772_32792 = state_32765__$1;
(statearr_32772_32792[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32766 === (6))){
var state_32765__$1 = state_32765;
var statearr_32773_32793 = state_32765__$1;
(statearr_32773_32793[(2)] = null);

(statearr_32773_32793[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32766 === (3))){
var inst_32762 = (state_32765[(2)]);
var inst_32763 = cljs.core.async.close_BANG_(out);
var state_32765__$1 = (function (){var statearr_32774 = state_32765;
(statearr_32774[(9)] = inst_32762);

return statearr_32774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32765__$1,inst_32763);
} else {
if((state_val_32766 === (2))){
var state_32765__$1 = state_32765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32765__$1,(4),ch);
} else {
if((state_val_32766 === (11))){
var inst_32745 = (state_32765[(8)]);
var inst_32754 = (state_32765[(2)]);
var inst_32742 = inst_32745;
var state_32765__$1 = (function (){var statearr_32775 = state_32765;
(statearr_32775[(10)] = inst_32754);

(statearr_32775[(7)] = inst_32742);

return statearr_32775;
})();
var statearr_32776_32794 = state_32765__$1;
(statearr_32776_32794[(2)] = null);

(statearr_32776_32794[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32766 === (9))){
var inst_32745 = (state_32765[(8)]);
var state_32765__$1 = state_32765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32765__$1,(11),out,inst_32745);
} else {
if((state_val_32766 === (5))){
var inst_32742 = (state_32765[(7)]);
var inst_32745 = (state_32765[(8)]);
var inst_32749 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32745,inst_32742);
var state_32765__$1 = state_32765;
if(inst_32749){
var statearr_32778_32795 = state_32765__$1;
(statearr_32778_32795[(1)] = (8));

} else {
var statearr_32779_32796 = state_32765__$1;
(statearr_32779_32796[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32766 === (10))){
var inst_32757 = (state_32765[(2)]);
var state_32765__$1 = state_32765;
var statearr_32780_32797 = state_32765__$1;
(statearr_32780_32797[(2)] = inst_32757);

(statearr_32780_32797[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32766 === (8))){
var inst_32742 = (state_32765[(7)]);
var tmp32777 = inst_32742;
var inst_32742__$1 = tmp32777;
var state_32765__$1 = (function (){var statearr_32781 = state_32765;
(statearr_32781[(7)] = inst_32742__$1);

return statearr_32781;
})();
var statearr_32782_32798 = state_32765__$1;
(statearr_32782_32798[(2)] = null);

(statearr_32782_32798[(1)] = (2));


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
var cljs$core$async$state_machine__29006__auto__ = null;
var cljs$core$async$state_machine__29006__auto____0 = (function (){
var statearr_32783 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32783[(0)] = cljs$core$async$state_machine__29006__auto__);

(statearr_32783[(1)] = (1));

return statearr_32783;
});
var cljs$core$async$state_machine__29006__auto____1 = (function (state_32765){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_32765);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e32784){if((e32784 instanceof Object)){
var ex__29009__auto__ = e32784;
var statearr_32785_32799 = state_32765;
(statearr_32785_32799[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32765);

return cljs.core.cst$kw$recur;
} else {
throw e32784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__32800 = state_32765;
state_32765 = G__32800;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$state_machine__29006__auto__ = function(state_32765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29006__auto____1.call(this,state_32765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29006__auto____0;
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29006__auto____1;
return cljs$core$async$state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_32786 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_32786[(6)] = c__29194__auto___32788);

return statearr_32786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32802 = arguments.length;
switch (G__32802) {
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
var c__29194__auto___32868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_32840){
var state_val_32841 = (state_32840[(1)]);
if((state_val_32841 === (7))){
var inst_32836 = (state_32840[(2)]);
var state_32840__$1 = state_32840;
var statearr_32842_32869 = state_32840__$1;
(statearr_32842_32869[(2)] = inst_32836);

(statearr_32842_32869[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32841 === (1))){
var inst_32803 = (new Array(n));
var inst_32804 = inst_32803;
var inst_32805 = (0);
var state_32840__$1 = (function (){var statearr_32843 = state_32840;
(statearr_32843[(7)] = inst_32804);

(statearr_32843[(8)] = inst_32805);

return statearr_32843;
})();
var statearr_32844_32870 = state_32840__$1;
(statearr_32844_32870[(2)] = null);

(statearr_32844_32870[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32841 === (4))){
var inst_32808 = (state_32840[(9)]);
var inst_32808__$1 = (state_32840[(2)]);
var inst_32809 = (inst_32808__$1 == null);
var inst_32810 = cljs.core.not(inst_32809);
var state_32840__$1 = (function (){var statearr_32845 = state_32840;
(statearr_32845[(9)] = inst_32808__$1);

return statearr_32845;
})();
if(inst_32810){
var statearr_32846_32871 = state_32840__$1;
(statearr_32846_32871[(1)] = (5));

} else {
var statearr_32847_32872 = state_32840__$1;
(statearr_32847_32872[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32841 === (15))){
var inst_32830 = (state_32840[(2)]);
var state_32840__$1 = state_32840;
var statearr_32848_32873 = state_32840__$1;
(statearr_32848_32873[(2)] = inst_32830);

(statearr_32848_32873[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32841 === (13))){
var state_32840__$1 = state_32840;
var statearr_32849_32874 = state_32840__$1;
(statearr_32849_32874[(2)] = null);

(statearr_32849_32874[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32841 === (6))){
var inst_32805 = (state_32840[(8)]);
var inst_32826 = (inst_32805 > (0));
var state_32840__$1 = state_32840;
if(cljs.core.truth_(inst_32826)){
var statearr_32850_32875 = state_32840__$1;
(statearr_32850_32875[(1)] = (12));

} else {
var statearr_32851_32876 = state_32840__$1;
(statearr_32851_32876[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32841 === (3))){
var inst_32838 = (state_32840[(2)]);
var state_32840__$1 = state_32840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32840__$1,inst_32838);
} else {
if((state_val_32841 === (12))){
var inst_32804 = (state_32840[(7)]);
var inst_32828 = cljs.core.vec(inst_32804);
var state_32840__$1 = state_32840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32840__$1,(15),out,inst_32828);
} else {
if((state_val_32841 === (2))){
var state_32840__$1 = state_32840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32840__$1,(4),ch);
} else {
if((state_val_32841 === (11))){
var inst_32820 = (state_32840[(2)]);
var inst_32821 = (new Array(n));
var inst_32804 = inst_32821;
var inst_32805 = (0);
var state_32840__$1 = (function (){var statearr_32852 = state_32840;
(statearr_32852[(10)] = inst_32820);

(statearr_32852[(7)] = inst_32804);

(statearr_32852[(8)] = inst_32805);

return statearr_32852;
})();
var statearr_32853_32877 = state_32840__$1;
(statearr_32853_32877[(2)] = null);

(statearr_32853_32877[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32841 === (9))){
var inst_32804 = (state_32840[(7)]);
var inst_32818 = cljs.core.vec(inst_32804);
var state_32840__$1 = state_32840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32840__$1,(11),out,inst_32818);
} else {
if((state_val_32841 === (5))){
var inst_32813 = (state_32840[(11)]);
var inst_32808 = (state_32840[(9)]);
var inst_32804 = (state_32840[(7)]);
var inst_32805 = (state_32840[(8)]);
var inst_32812 = (inst_32804[inst_32805] = inst_32808);
var inst_32813__$1 = (inst_32805 + (1));
var inst_32814 = (inst_32813__$1 < n);
var state_32840__$1 = (function (){var statearr_32854 = state_32840;
(statearr_32854[(12)] = inst_32812);

(statearr_32854[(11)] = inst_32813__$1);

return statearr_32854;
})();
if(cljs.core.truth_(inst_32814)){
var statearr_32855_32878 = state_32840__$1;
(statearr_32855_32878[(1)] = (8));

} else {
var statearr_32856_32879 = state_32840__$1;
(statearr_32856_32879[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32841 === (14))){
var inst_32833 = (state_32840[(2)]);
var inst_32834 = cljs.core.async.close_BANG_(out);
var state_32840__$1 = (function (){var statearr_32858 = state_32840;
(statearr_32858[(13)] = inst_32833);

return statearr_32858;
})();
var statearr_32859_32880 = state_32840__$1;
(statearr_32859_32880[(2)] = inst_32834);

(statearr_32859_32880[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32841 === (10))){
var inst_32824 = (state_32840[(2)]);
var state_32840__$1 = state_32840;
var statearr_32860_32881 = state_32840__$1;
(statearr_32860_32881[(2)] = inst_32824);

(statearr_32860_32881[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32841 === (8))){
var inst_32813 = (state_32840[(11)]);
var inst_32804 = (state_32840[(7)]);
var tmp32857 = inst_32804;
var inst_32804__$1 = tmp32857;
var inst_32805 = inst_32813;
var state_32840__$1 = (function (){var statearr_32861 = state_32840;
(statearr_32861[(7)] = inst_32804__$1);

(statearr_32861[(8)] = inst_32805);

return statearr_32861;
})();
var statearr_32862_32882 = state_32840__$1;
(statearr_32862_32882[(2)] = null);

(statearr_32862_32882[(1)] = (2));


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
var cljs$core$async$state_machine__29006__auto__ = null;
var cljs$core$async$state_machine__29006__auto____0 = (function (){
var statearr_32863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32863[(0)] = cljs$core$async$state_machine__29006__auto__);

(statearr_32863[(1)] = (1));

return statearr_32863;
});
var cljs$core$async$state_machine__29006__auto____1 = (function (state_32840){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_32840);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e32864){if((e32864 instanceof Object)){
var ex__29009__auto__ = e32864;
var statearr_32865_32883 = state_32840;
(statearr_32865_32883[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32840);

return cljs.core.cst$kw$recur;
} else {
throw e32864;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__32884 = state_32840;
state_32840 = G__32884;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$state_machine__29006__auto__ = function(state_32840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29006__auto____1.call(this,state_32840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29006__auto____0;
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29006__auto____1;
return cljs$core$async$state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_32866 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_32866[(6)] = c__29194__auto___32868);

return statearr_32866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32886 = arguments.length;
switch (G__32886) {
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
var c__29194__auto___32956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29195__auto__ = (function (){var switch__29005__auto__ = (function (state_32928){
var state_val_32929 = (state_32928[(1)]);
if((state_val_32929 === (7))){
var inst_32924 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
var statearr_32930_32957 = state_32928__$1;
(statearr_32930_32957[(2)] = inst_32924);

(statearr_32930_32957[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32929 === (1))){
var inst_32887 = [];
var inst_32888 = inst_32887;
var inst_32889 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_32928__$1 = (function (){var statearr_32931 = state_32928;
(statearr_32931[(7)] = inst_32888);

(statearr_32931[(8)] = inst_32889);

return statearr_32931;
})();
var statearr_32932_32958 = state_32928__$1;
(statearr_32932_32958[(2)] = null);

(statearr_32932_32958[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32929 === (4))){
var inst_32892 = (state_32928[(9)]);
var inst_32892__$1 = (state_32928[(2)]);
var inst_32893 = (inst_32892__$1 == null);
var inst_32894 = cljs.core.not(inst_32893);
var state_32928__$1 = (function (){var statearr_32933 = state_32928;
(statearr_32933[(9)] = inst_32892__$1);

return statearr_32933;
})();
if(inst_32894){
var statearr_32934_32959 = state_32928__$1;
(statearr_32934_32959[(1)] = (5));

} else {
var statearr_32935_32960 = state_32928__$1;
(statearr_32935_32960[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32929 === (15))){
var inst_32918 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
var statearr_32936_32961 = state_32928__$1;
(statearr_32936_32961[(2)] = inst_32918);

(statearr_32936_32961[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32929 === (13))){
var state_32928__$1 = state_32928;
var statearr_32937_32962 = state_32928__$1;
(statearr_32937_32962[(2)] = null);

(statearr_32937_32962[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32929 === (6))){
var inst_32888 = (state_32928[(7)]);
var inst_32913 = inst_32888.length;
var inst_32914 = (inst_32913 > (0));
var state_32928__$1 = state_32928;
if(cljs.core.truth_(inst_32914)){
var statearr_32938_32963 = state_32928__$1;
(statearr_32938_32963[(1)] = (12));

} else {
var statearr_32939_32964 = state_32928__$1;
(statearr_32939_32964[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32929 === (3))){
var inst_32926 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32928__$1,inst_32926);
} else {
if((state_val_32929 === (12))){
var inst_32888 = (state_32928[(7)]);
var inst_32916 = cljs.core.vec(inst_32888);
var state_32928__$1 = state_32928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32928__$1,(15),out,inst_32916);
} else {
if((state_val_32929 === (2))){
var state_32928__$1 = state_32928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32928__$1,(4),ch);
} else {
if((state_val_32929 === (11))){
var inst_32892 = (state_32928[(9)]);
var inst_32896 = (state_32928[(10)]);
var inst_32906 = (state_32928[(2)]);
var inst_32907 = [];
var inst_32908 = inst_32907.push(inst_32892);
var inst_32888 = inst_32907;
var inst_32889 = inst_32896;
var state_32928__$1 = (function (){var statearr_32940 = state_32928;
(statearr_32940[(7)] = inst_32888);

(statearr_32940[(11)] = inst_32908);

(statearr_32940[(8)] = inst_32889);

(statearr_32940[(12)] = inst_32906);

return statearr_32940;
})();
var statearr_32941_32965 = state_32928__$1;
(statearr_32941_32965[(2)] = null);

(statearr_32941_32965[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32929 === (9))){
var inst_32888 = (state_32928[(7)]);
var inst_32904 = cljs.core.vec(inst_32888);
var state_32928__$1 = state_32928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32928__$1,(11),out,inst_32904);
} else {
if((state_val_32929 === (5))){
var inst_32892 = (state_32928[(9)]);
var inst_32889 = (state_32928[(8)]);
var inst_32896 = (state_32928[(10)]);
var inst_32896__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32892) : f.call(null,inst_32892));
var inst_32897 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32896__$1,inst_32889);
var inst_32898 = cljs.core.keyword_identical_QMARK_(inst_32889,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_32899 = ((inst_32897) || (inst_32898));
var state_32928__$1 = (function (){var statearr_32942 = state_32928;
(statearr_32942[(10)] = inst_32896__$1);

return statearr_32942;
})();
if(cljs.core.truth_(inst_32899)){
var statearr_32943_32966 = state_32928__$1;
(statearr_32943_32966[(1)] = (8));

} else {
var statearr_32944_32967 = state_32928__$1;
(statearr_32944_32967[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32929 === (14))){
var inst_32921 = (state_32928[(2)]);
var inst_32922 = cljs.core.async.close_BANG_(out);
var state_32928__$1 = (function (){var statearr_32946 = state_32928;
(statearr_32946[(13)] = inst_32921);

return statearr_32946;
})();
var statearr_32947_32968 = state_32928__$1;
(statearr_32947_32968[(2)] = inst_32922);

(statearr_32947_32968[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32929 === (10))){
var inst_32911 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
var statearr_32948_32969 = state_32928__$1;
(statearr_32948_32969[(2)] = inst_32911);

(statearr_32948_32969[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32929 === (8))){
var inst_32892 = (state_32928[(9)]);
var inst_32888 = (state_32928[(7)]);
var inst_32896 = (state_32928[(10)]);
var inst_32901 = inst_32888.push(inst_32892);
var tmp32945 = inst_32888;
var inst_32888__$1 = tmp32945;
var inst_32889 = inst_32896;
var state_32928__$1 = (function (){var statearr_32949 = state_32928;
(statearr_32949[(7)] = inst_32888__$1);

(statearr_32949[(8)] = inst_32889);

(statearr_32949[(14)] = inst_32901);

return statearr_32949;
})();
var statearr_32950_32970 = state_32928__$1;
(statearr_32950_32970[(2)] = null);

(statearr_32950_32970[(1)] = (2));


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
var cljs$core$async$state_machine__29006__auto__ = null;
var cljs$core$async$state_machine__29006__auto____0 = (function (){
var statearr_32951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32951[(0)] = cljs$core$async$state_machine__29006__auto__);

(statearr_32951[(1)] = (1));

return statearr_32951;
});
var cljs$core$async$state_machine__29006__auto____1 = (function (state_32928){
while(true){
var ret_value__29007__auto__ = (function (){try{while(true){
var result__29008__auto__ = switch__29005__auto__(state_32928);
if(cljs.core.keyword_identical_QMARK_(result__29008__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29008__auto__;
}
break;
}
}catch (e32952){if((e32952 instanceof Object)){
var ex__29009__auto__ = e32952;
var statearr_32953_32971 = state_32928;
(statearr_32953_32971[(5)] = ex__29009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32928);

return cljs.core.cst$kw$recur;
} else {
throw e32952;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29007__auto__,cljs.core.cst$kw$recur)){
var G__32972 = state_32928;
state_32928 = G__32972;
continue;
} else {
return ret_value__29007__auto__;
}
break;
}
});
cljs$core$async$state_machine__29006__auto__ = function(state_32928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29006__auto____1.call(this,state_32928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29006__auto____0;
cljs$core$async$state_machine__29006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29006__auto____1;
return cljs$core$async$state_machine__29006__auto__;
})()
})();
var state__29196__auto__ = (function (){var statearr_32954 = (f__29195__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29195__auto__.cljs$core$IFn$_invoke$arity$0() : f__29195__auto__.call(null));
(statearr_32954[(6)] = c__29194__auto___32956);

return statearr_32954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29196__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

