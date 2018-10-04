// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t34023 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34023 = (function (fn_handler,f,meta34024){
this.fn_handler = fn_handler;
this.f = f;
this.meta34024 = meta34024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34025,meta34024__$1){
var self__ = this;
var _34025__$1 = this;
return (new cljs.core.async.t34023(self__.fn_handler,self__.f,meta34024__$1));
});

cljs.core.async.t34023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34025){
var self__ = this;
var _34025__$1 = this;
return self__.meta34024;
});

cljs.core.async.t34023.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t34023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t34023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta34024","meta34024",-388980461,null)], null);
});

cljs.core.async.t34023.cljs$lang$type = true;

cljs.core.async.t34023.cljs$lang$ctorStr = "cljs.core.async/t34023";

cljs.core.async.t34023.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.core.async/t34023");
});

cljs.core.async.__GT_t34023 = (function cljs$core$async$fn_handler_$___GT_t34023(fn_handler__$1,f__$1,meta34024){
return (new cljs.core.async.t34023(fn_handler__$1,f__$1,meta34024));
});

}

return (new cljs.core.async.t34023(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__34027 = buff;
if(G__34027){
var bit__25439__auto__ = null;
if(cljs.core.truth_((function (){var or__24765__auto__ = bit__25439__auto__;
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return G__34027.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__34027.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34027);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34027);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__34029 = arguments.length;
switch (G__34029) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__34032 = arguments.length;
switch (G__34032) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34034 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34034);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34034,ret){
return (function (){
return fn1.call(null,val_34034);
});})(val_34034,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__34036 = arguments.length;
switch (G__34036) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25650__auto___34038 = n;
var x_34039 = (0);
while(true){
if((x_34039 < n__25650__auto___34038)){
(a[x_34039] = (0));

var G__34040 = (x_34039 + (1));
x_34039 = G__34040;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__34041 = (i + (1));
i = G__34041;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t34045 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34045 = (function (alt_flag,flag,meta34046){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta34046 = meta34046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34047,meta34046__$1){
var self__ = this;
var _34047__$1 = this;
return (new cljs.core.async.t34045(self__.alt_flag,self__.flag,meta34046__$1));
});})(flag))
;

cljs.core.async.t34045.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34047){
var self__ = this;
var _34047__$1 = this;
return self__.meta34046;
});})(flag))
;

cljs.core.async.t34045.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t34045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t34045.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34046","meta34046",1152176476,null)], null);
});})(flag))
;

cljs.core.async.t34045.cljs$lang$type = true;

cljs.core.async.t34045.cljs$lang$ctorStr = "cljs.core.async/t34045";

cljs.core.async.t34045.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.core.async/t34045");
});})(flag))
;

cljs.core.async.__GT_t34045 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t34045(alt_flag__$1,flag__$1,meta34046){
return (new cljs.core.async.t34045(alt_flag__$1,flag__$1,meta34046));
});})(flag))
;

}

return (new cljs.core.async.t34045(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t34051 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34051 = (function (alt_handler,flag,cb,meta34052){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta34052 = meta34052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34053,meta34052__$1){
var self__ = this;
var _34053__$1 = this;
return (new cljs.core.async.t34051(self__.alt_handler,self__.flag,self__.cb,meta34052__$1));
});

cljs.core.async.t34051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34053){
var self__ = this;
var _34053__$1 = this;
return self__.meta34052;
});

cljs.core.async.t34051.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t34051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t34051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34052","meta34052",1306445307,null)], null);
});

cljs.core.async.t34051.cljs$lang$type = true;

cljs.core.async.t34051.cljs$lang$ctorStr = "cljs.core.async/t34051";

cljs.core.async.t34051.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.core.async/t34051");
});

cljs.core.async.__GT_t34051 = (function cljs$core$async$alt_handler_$___GT_t34051(alt_handler__$1,flag__$1,cb__$1,meta34052){
return (new cljs.core.async.t34051(alt_handler__$1,flag__$1,cb__$1,meta34052));
});

}

return (new cljs.core.async.t34051(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34054_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34054_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34055_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34055_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24765__auto__ = wport;
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34056 = (i + (1));
i = G__34056;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24765__auto__ = ret;
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__24753__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24753__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24753__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__25805__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25805__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34059){
var map__34060 = p__34059;
var map__34060__$1 = ((cljs.core.seq_QMARK_.call(null,map__34060))?cljs.core.apply.call(null,cljs.core.hash_map,map__34060):map__34060);
var opts = map__34060__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34057){
var G__34058 = cljs.core.first.call(null,seq34057);
var seq34057__$1 = cljs.core.next.call(null,seq34057);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34058,seq34057__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__34062 = arguments.length;
switch (G__34062) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28151__auto___34111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___34111){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___34111){
return (function (state_34086){
var state_val_34087 = (state_34086[(1)]);
if((state_val_34087 === (7))){
var inst_34082 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
var statearr_34088_34112 = state_34086__$1;
(statearr_34088_34112[(2)] = inst_34082);

(statearr_34088_34112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (1))){
var state_34086__$1 = state_34086;
var statearr_34089_34113 = state_34086__$1;
(statearr_34089_34113[(2)] = null);

(statearr_34089_34113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (4))){
var inst_34065 = (state_34086[(7)]);
var inst_34065__$1 = (state_34086[(2)]);
var inst_34066 = (inst_34065__$1 == null);
var state_34086__$1 = (function (){var statearr_34090 = state_34086;
(statearr_34090[(7)] = inst_34065__$1);

return statearr_34090;
})();
if(cljs.core.truth_(inst_34066)){
var statearr_34091_34114 = state_34086__$1;
(statearr_34091_34114[(1)] = (5));

} else {
var statearr_34092_34115 = state_34086__$1;
(statearr_34092_34115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (13))){
var state_34086__$1 = state_34086;
var statearr_34093_34116 = state_34086__$1;
(statearr_34093_34116[(2)] = null);

(statearr_34093_34116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (6))){
var inst_34065 = (state_34086[(7)]);
var state_34086__$1 = state_34086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34086__$1,(11),to,inst_34065);
} else {
if((state_val_34087 === (3))){
var inst_34084 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34086__$1,inst_34084);
} else {
if((state_val_34087 === (12))){
var state_34086__$1 = state_34086;
var statearr_34094_34117 = state_34086__$1;
(statearr_34094_34117[(2)] = null);

(statearr_34094_34117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (2))){
var state_34086__$1 = state_34086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34086__$1,(4),from);
} else {
if((state_val_34087 === (11))){
var inst_34075 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
if(cljs.core.truth_(inst_34075)){
var statearr_34095_34118 = state_34086__$1;
(statearr_34095_34118[(1)] = (12));

} else {
var statearr_34096_34119 = state_34086__$1;
(statearr_34096_34119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (9))){
var state_34086__$1 = state_34086;
var statearr_34097_34120 = state_34086__$1;
(statearr_34097_34120[(2)] = null);

(statearr_34097_34120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (5))){
var state_34086__$1 = state_34086;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34098_34121 = state_34086__$1;
(statearr_34098_34121[(1)] = (8));

} else {
var statearr_34099_34122 = state_34086__$1;
(statearr_34099_34122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (14))){
var inst_34080 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
var statearr_34100_34123 = state_34086__$1;
(statearr_34100_34123[(2)] = inst_34080);

(statearr_34100_34123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (10))){
var inst_34072 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
var statearr_34101_34124 = state_34086__$1;
(statearr_34101_34124[(2)] = inst_34072);

(statearr_34101_34124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (8))){
var inst_34069 = cljs.core.async.close_BANG_.call(null,to);
var state_34086__$1 = state_34086;
var statearr_34102_34125 = state_34086__$1;
(statearr_34102_34125[(2)] = inst_34069);

(statearr_34102_34125[(1)] = (10));


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
});})(c__28151__auto___34111))
;
return ((function (switch__28089__auto__,c__28151__auto___34111){
return (function() {
var cljs$core$async$state_machine__28090__auto__ = null;
var cljs$core$async$state_machine__28090__auto____0 = (function (){
var statearr_34106 = [null,null,null,null,null,null,null,null];
(statearr_34106[(0)] = cljs$core$async$state_machine__28090__auto__);

(statearr_34106[(1)] = (1));

return statearr_34106;
});
var cljs$core$async$state_machine__28090__auto____1 = (function (state_34086){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_34086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e34107){if((e34107 instanceof Object)){
var ex__28093__auto__ = e34107;
var statearr_34108_34126 = state_34086;
(statearr_34108_34126[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34127 = state_34086;
state_34086 = G__34127;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$state_machine__28090__auto__ = function(state_34086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28090__auto____1.call(this,state_34086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28090__auto____0;
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28090__auto____1;
return cljs$core$async$state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___34111))
})();
var state__28153__auto__ = (function (){var statearr_34109 = f__28152__auto__.call(null);
(statearr_34109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___34111);

return statearr_34109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___34111))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34311){
var vec__34312 = p__34311;
var v = cljs.core.nth.call(null,vec__34312,(0),null);
var p = cljs.core.nth.call(null,vec__34312,(1),null);
var job = vec__34312;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28151__auto___34494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___34494,res,vec__34312,v,p,job,jobs,results){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___34494,res,vec__34312,v,p,job,jobs,results){
return (function (state_34317){
var state_val_34318 = (state_34317[(1)]);
if((state_val_34318 === (1))){
var state_34317__$1 = state_34317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34317__$1,(2),res,v);
} else {
if((state_val_34318 === (2))){
var inst_34314 = (state_34317[(2)]);
var inst_34315 = cljs.core.async.close_BANG_.call(null,res);
var state_34317__$1 = (function (){var statearr_34319 = state_34317;
(statearr_34319[(7)] = inst_34314);

return statearr_34319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34317__$1,inst_34315);
} else {
return null;
}
}
});})(c__28151__auto___34494,res,vec__34312,v,p,job,jobs,results))
;
return ((function (switch__28089__auto__,c__28151__auto___34494,res,vec__34312,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____0 = (function (){
var statearr_34323 = [null,null,null,null,null,null,null,null];
(statearr_34323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__);

(statearr_34323[(1)] = (1));

return statearr_34323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____1 = (function (state_34317){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_34317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e34324){if((e34324 instanceof Object)){
var ex__28093__auto__ = e34324;
var statearr_34325_34495 = state_34317;
(statearr_34325_34495[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34496 = state_34317;
state_34317 = G__34496;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__ = function(state_34317){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____1.call(this,state_34317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___34494,res,vec__34312,v,p,job,jobs,results))
})();
var state__28153__auto__ = (function (){var statearr_34326 = f__28152__auto__.call(null);
(statearr_34326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___34494);

return statearr_34326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___34494,res,vec__34312,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34327){
var vec__34328 = p__34327;
var v = cljs.core.nth.call(null,vec__34328,(0),null);
var p = cljs.core.nth.call(null,vec__34328,(1),null);
var job = vec__34328;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25650__auto___34497 = n;
var __34498 = (0);
while(true){
if((__34498 < n__25650__auto___34497)){
var G__34329_34499 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34329_34499) {
case "compute":
var c__28151__auto___34501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34498,c__28151__auto___34501,G__34329_34499,n__25650__auto___34497,jobs,results,process,async){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (__34498,c__28151__auto___34501,G__34329_34499,n__25650__auto___34497,jobs,results,process,async){
return (function (state_34342){
var state_val_34343 = (state_34342[(1)]);
if((state_val_34343 === (1))){
var state_34342__$1 = state_34342;
var statearr_34344_34502 = state_34342__$1;
(statearr_34344_34502[(2)] = null);

(statearr_34344_34502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (2))){
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34342__$1,(4),jobs);
} else {
if((state_val_34343 === (3))){
var inst_34340 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34342__$1,inst_34340);
} else {
if((state_val_34343 === (4))){
var inst_34332 = (state_34342[(2)]);
var inst_34333 = process.call(null,inst_34332);
var state_34342__$1 = state_34342;
if(cljs.core.truth_(inst_34333)){
var statearr_34345_34503 = state_34342__$1;
(statearr_34345_34503[(1)] = (5));

} else {
var statearr_34346_34504 = state_34342__$1;
(statearr_34346_34504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (5))){
var state_34342__$1 = state_34342;
var statearr_34347_34505 = state_34342__$1;
(statearr_34347_34505[(2)] = null);

(statearr_34347_34505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (6))){
var state_34342__$1 = state_34342;
var statearr_34348_34506 = state_34342__$1;
(statearr_34348_34506[(2)] = null);

(statearr_34348_34506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (7))){
var inst_34338 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34349_34507 = state_34342__$1;
(statearr_34349_34507[(2)] = inst_34338);

(statearr_34349_34507[(1)] = (3));


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
});})(__34498,c__28151__auto___34501,G__34329_34499,n__25650__auto___34497,jobs,results,process,async))
;
return ((function (__34498,switch__28089__auto__,c__28151__auto___34501,G__34329_34499,n__25650__auto___34497,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____0 = (function (){
var statearr_34353 = [null,null,null,null,null,null,null];
(statearr_34353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__);

(statearr_34353[(1)] = (1));

return statearr_34353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____1 = (function (state_34342){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_34342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e34354){if((e34354 instanceof Object)){
var ex__28093__auto__ = e34354;
var statearr_34355_34508 = state_34342;
(statearr_34355_34508[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34509 = state_34342;
state_34342 = G__34509;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__ = function(state_34342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____1.call(this,state_34342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__;
})()
;})(__34498,switch__28089__auto__,c__28151__auto___34501,G__34329_34499,n__25650__auto___34497,jobs,results,process,async))
})();
var state__28153__auto__ = (function (){var statearr_34356 = f__28152__auto__.call(null);
(statearr_34356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___34501);

return statearr_34356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(__34498,c__28151__auto___34501,G__34329_34499,n__25650__auto___34497,jobs,results,process,async))
);


break;
case "async":
var c__28151__auto___34510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34498,c__28151__auto___34510,G__34329_34499,n__25650__auto___34497,jobs,results,process,async){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (__34498,c__28151__auto___34510,G__34329_34499,n__25650__auto___34497,jobs,results,process,async){
return (function (state_34369){
var state_val_34370 = (state_34369[(1)]);
if((state_val_34370 === (1))){
var state_34369__$1 = state_34369;
var statearr_34371_34511 = state_34369__$1;
(statearr_34371_34511[(2)] = null);

(statearr_34371_34511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (2))){
var state_34369__$1 = state_34369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34369__$1,(4),jobs);
} else {
if((state_val_34370 === (3))){
var inst_34367 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34369__$1,inst_34367);
} else {
if((state_val_34370 === (4))){
var inst_34359 = (state_34369[(2)]);
var inst_34360 = async.call(null,inst_34359);
var state_34369__$1 = state_34369;
if(cljs.core.truth_(inst_34360)){
var statearr_34372_34512 = state_34369__$1;
(statearr_34372_34512[(1)] = (5));

} else {
var statearr_34373_34513 = state_34369__$1;
(statearr_34373_34513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (5))){
var state_34369__$1 = state_34369;
var statearr_34374_34514 = state_34369__$1;
(statearr_34374_34514[(2)] = null);

(statearr_34374_34514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (6))){
var state_34369__$1 = state_34369;
var statearr_34375_34515 = state_34369__$1;
(statearr_34375_34515[(2)] = null);

(statearr_34375_34515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (7))){
var inst_34365 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34376_34516 = state_34369__$1;
(statearr_34376_34516[(2)] = inst_34365);

(statearr_34376_34516[(1)] = (3));


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
});})(__34498,c__28151__auto___34510,G__34329_34499,n__25650__auto___34497,jobs,results,process,async))
;
return ((function (__34498,switch__28089__auto__,c__28151__auto___34510,G__34329_34499,n__25650__auto___34497,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____0 = (function (){
var statearr_34380 = [null,null,null,null,null,null,null];
(statearr_34380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__);

(statearr_34380[(1)] = (1));

return statearr_34380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____1 = (function (state_34369){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_34369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e34381){if((e34381 instanceof Object)){
var ex__28093__auto__ = e34381;
var statearr_34382_34517 = state_34369;
(statearr_34382_34517[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34518 = state_34369;
state_34369 = G__34518;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__ = function(state_34369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____1.call(this,state_34369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__;
})()
;})(__34498,switch__28089__auto__,c__28151__auto___34510,G__34329_34499,n__25650__auto___34497,jobs,results,process,async))
})();
var state__28153__auto__ = (function (){var statearr_34383 = f__28152__auto__.call(null);
(statearr_34383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___34510);

return statearr_34383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(__34498,c__28151__auto___34510,G__34329_34499,n__25650__auto___34497,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34519 = (__34498 + (1));
__34498 = G__34519;
continue;
} else {
}
break;
}

var c__28151__auto___34520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___34520,jobs,results,process,async){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___34520,jobs,results,process,async){
return (function (state_34405){
var state_val_34406 = (state_34405[(1)]);
if((state_val_34406 === (1))){
var state_34405__$1 = state_34405;
var statearr_34407_34521 = state_34405__$1;
(statearr_34407_34521[(2)] = null);

(statearr_34407_34521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (2))){
var state_34405__$1 = state_34405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34405__$1,(4),from);
} else {
if((state_val_34406 === (3))){
var inst_34403 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34405__$1,inst_34403);
} else {
if((state_val_34406 === (4))){
var inst_34386 = (state_34405[(7)]);
var inst_34386__$1 = (state_34405[(2)]);
var inst_34387 = (inst_34386__$1 == null);
var state_34405__$1 = (function (){var statearr_34408 = state_34405;
(statearr_34408[(7)] = inst_34386__$1);

return statearr_34408;
})();
if(cljs.core.truth_(inst_34387)){
var statearr_34409_34522 = state_34405__$1;
(statearr_34409_34522[(1)] = (5));

} else {
var statearr_34410_34523 = state_34405__$1;
(statearr_34410_34523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (5))){
var inst_34389 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34405__$1 = state_34405;
var statearr_34411_34524 = state_34405__$1;
(statearr_34411_34524[(2)] = inst_34389);

(statearr_34411_34524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (6))){
var inst_34391 = (state_34405[(8)]);
var inst_34386 = (state_34405[(7)]);
var inst_34391__$1 = cljs.core.async.chan.call(null,(1));
var inst_34392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34393 = [inst_34386,inst_34391__$1];
var inst_34394 = (new cljs.core.PersistentVector(null,2,(5),inst_34392,inst_34393,null));
var state_34405__$1 = (function (){var statearr_34412 = state_34405;
(statearr_34412[(8)] = inst_34391__$1);

return statearr_34412;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34405__$1,(8),jobs,inst_34394);
} else {
if((state_val_34406 === (7))){
var inst_34401 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
var statearr_34413_34525 = state_34405__$1;
(statearr_34413_34525[(2)] = inst_34401);

(statearr_34413_34525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (8))){
var inst_34391 = (state_34405[(8)]);
var inst_34396 = (state_34405[(2)]);
var state_34405__$1 = (function (){var statearr_34414 = state_34405;
(statearr_34414[(9)] = inst_34396);

return statearr_34414;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34405__$1,(9),results,inst_34391);
} else {
if((state_val_34406 === (9))){
var inst_34398 = (state_34405[(2)]);
var state_34405__$1 = (function (){var statearr_34415 = state_34405;
(statearr_34415[(10)] = inst_34398);

return statearr_34415;
})();
var statearr_34416_34526 = state_34405__$1;
(statearr_34416_34526[(2)] = null);

(statearr_34416_34526[(1)] = (2));


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
});})(c__28151__auto___34520,jobs,results,process,async))
;
return ((function (switch__28089__auto__,c__28151__auto___34520,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____0 = (function (){
var statearr_34420 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__);

(statearr_34420[(1)] = (1));

return statearr_34420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____1 = (function (state_34405){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_34405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e34421){if((e34421 instanceof Object)){
var ex__28093__auto__ = e34421;
var statearr_34422_34527 = state_34405;
(statearr_34422_34527[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34528 = state_34405;
state_34405 = G__34528;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__ = function(state_34405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____1.call(this,state_34405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___34520,jobs,results,process,async))
})();
var state__28153__auto__ = (function (){var statearr_34423 = f__28152__auto__.call(null);
(statearr_34423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___34520);

return statearr_34423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___34520,jobs,results,process,async))
);


var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__,jobs,results,process,async){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto__,jobs,results,process,async){
return (function (state_34461){
var state_val_34462 = (state_34461[(1)]);
if((state_val_34462 === (7))){
var inst_34457 = (state_34461[(2)]);
var state_34461__$1 = state_34461;
var statearr_34463_34529 = state_34461__$1;
(statearr_34463_34529[(2)] = inst_34457);

(statearr_34463_34529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (20))){
var state_34461__$1 = state_34461;
var statearr_34464_34530 = state_34461__$1;
(statearr_34464_34530[(2)] = null);

(statearr_34464_34530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (1))){
var state_34461__$1 = state_34461;
var statearr_34465_34531 = state_34461__$1;
(statearr_34465_34531[(2)] = null);

(statearr_34465_34531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (4))){
var inst_34426 = (state_34461[(7)]);
var inst_34426__$1 = (state_34461[(2)]);
var inst_34427 = (inst_34426__$1 == null);
var state_34461__$1 = (function (){var statearr_34466 = state_34461;
(statearr_34466[(7)] = inst_34426__$1);

return statearr_34466;
})();
if(cljs.core.truth_(inst_34427)){
var statearr_34467_34532 = state_34461__$1;
(statearr_34467_34532[(1)] = (5));

} else {
var statearr_34468_34533 = state_34461__$1;
(statearr_34468_34533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (15))){
var inst_34439 = (state_34461[(8)]);
var state_34461__$1 = state_34461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34461__$1,(18),to,inst_34439);
} else {
if((state_val_34462 === (21))){
var inst_34452 = (state_34461[(2)]);
var state_34461__$1 = state_34461;
var statearr_34469_34534 = state_34461__$1;
(statearr_34469_34534[(2)] = inst_34452);

(statearr_34469_34534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (13))){
var inst_34454 = (state_34461[(2)]);
var state_34461__$1 = (function (){var statearr_34470 = state_34461;
(statearr_34470[(9)] = inst_34454);

return statearr_34470;
})();
var statearr_34471_34535 = state_34461__$1;
(statearr_34471_34535[(2)] = null);

(statearr_34471_34535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (6))){
var inst_34426 = (state_34461[(7)]);
var state_34461__$1 = state_34461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34461__$1,(11),inst_34426);
} else {
if((state_val_34462 === (17))){
var inst_34447 = (state_34461[(2)]);
var state_34461__$1 = state_34461;
if(cljs.core.truth_(inst_34447)){
var statearr_34472_34536 = state_34461__$1;
(statearr_34472_34536[(1)] = (19));

} else {
var statearr_34473_34537 = state_34461__$1;
(statearr_34473_34537[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (3))){
var inst_34459 = (state_34461[(2)]);
var state_34461__$1 = state_34461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34461__$1,inst_34459);
} else {
if((state_val_34462 === (12))){
var inst_34436 = (state_34461[(10)]);
var state_34461__$1 = state_34461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34461__$1,(14),inst_34436);
} else {
if((state_val_34462 === (2))){
var state_34461__$1 = state_34461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34461__$1,(4),results);
} else {
if((state_val_34462 === (19))){
var state_34461__$1 = state_34461;
var statearr_34474_34538 = state_34461__$1;
(statearr_34474_34538[(2)] = null);

(statearr_34474_34538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (11))){
var inst_34436 = (state_34461[(2)]);
var state_34461__$1 = (function (){var statearr_34475 = state_34461;
(statearr_34475[(10)] = inst_34436);

return statearr_34475;
})();
var statearr_34476_34539 = state_34461__$1;
(statearr_34476_34539[(2)] = null);

(statearr_34476_34539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (9))){
var state_34461__$1 = state_34461;
var statearr_34477_34540 = state_34461__$1;
(statearr_34477_34540[(2)] = null);

(statearr_34477_34540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (5))){
var state_34461__$1 = state_34461;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34478_34541 = state_34461__$1;
(statearr_34478_34541[(1)] = (8));

} else {
var statearr_34479_34542 = state_34461__$1;
(statearr_34479_34542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (14))){
var inst_34439 = (state_34461[(8)]);
var inst_34441 = (state_34461[(11)]);
var inst_34439__$1 = (state_34461[(2)]);
var inst_34440 = (inst_34439__$1 == null);
var inst_34441__$1 = cljs.core.not.call(null,inst_34440);
var state_34461__$1 = (function (){var statearr_34480 = state_34461;
(statearr_34480[(8)] = inst_34439__$1);

(statearr_34480[(11)] = inst_34441__$1);

return statearr_34480;
})();
if(inst_34441__$1){
var statearr_34481_34543 = state_34461__$1;
(statearr_34481_34543[(1)] = (15));

} else {
var statearr_34482_34544 = state_34461__$1;
(statearr_34482_34544[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (16))){
var inst_34441 = (state_34461[(11)]);
var state_34461__$1 = state_34461;
var statearr_34483_34545 = state_34461__$1;
(statearr_34483_34545[(2)] = inst_34441);

(statearr_34483_34545[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (10))){
var inst_34433 = (state_34461[(2)]);
var state_34461__$1 = state_34461;
var statearr_34484_34546 = state_34461__$1;
(statearr_34484_34546[(2)] = inst_34433);

(statearr_34484_34546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (18))){
var inst_34444 = (state_34461[(2)]);
var state_34461__$1 = state_34461;
var statearr_34485_34547 = state_34461__$1;
(statearr_34485_34547[(2)] = inst_34444);

(statearr_34485_34547[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (8))){
var inst_34430 = cljs.core.async.close_BANG_.call(null,to);
var state_34461__$1 = state_34461;
var statearr_34486_34548 = state_34461__$1;
(statearr_34486_34548[(2)] = inst_34430);

(statearr_34486_34548[(1)] = (10));


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
});})(c__28151__auto__,jobs,results,process,async))
;
return ((function (switch__28089__auto__,c__28151__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____0 = (function (){
var statearr_34490 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34490[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__);

(statearr_34490[(1)] = (1));

return statearr_34490;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____1 = (function (state_34461){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_34461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e34491){if((e34491 instanceof Object)){
var ex__28093__auto__ = e34491;
var statearr_34492_34549 = state_34461;
(statearr_34492_34549[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34550 = state_34461;
state_34461 = G__34550;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__ = function(state_34461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____1.call(this,state_34461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28090__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto__,jobs,results,process,async))
})();
var state__28153__auto__ = (function (){var statearr_34493 = f__28152__auto__.call(null);
(statearr_34493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_34493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__,jobs,results,process,async))
);

return c__28151__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__34552 = arguments.length;
switch (G__34552) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__34555 = arguments.length;
switch (G__34555) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__34558 = arguments.length;
switch (G__34558) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28151__auto___34610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___34610,tc,fc){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___34610,tc,fc){
return (function (state_34584){
var state_val_34585 = (state_34584[(1)]);
if((state_val_34585 === (7))){
var inst_34580 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34586_34611 = state_34584__$1;
(statearr_34586_34611[(2)] = inst_34580);

(statearr_34586_34611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (1))){
var state_34584__$1 = state_34584;
var statearr_34587_34612 = state_34584__$1;
(statearr_34587_34612[(2)] = null);

(statearr_34587_34612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (4))){
var inst_34561 = (state_34584[(7)]);
var inst_34561__$1 = (state_34584[(2)]);
var inst_34562 = (inst_34561__$1 == null);
var state_34584__$1 = (function (){var statearr_34588 = state_34584;
(statearr_34588[(7)] = inst_34561__$1);

return statearr_34588;
})();
if(cljs.core.truth_(inst_34562)){
var statearr_34589_34613 = state_34584__$1;
(statearr_34589_34613[(1)] = (5));

} else {
var statearr_34590_34614 = state_34584__$1;
(statearr_34590_34614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (13))){
var state_34584__$1 = state_34584;
var statearr_34591_34615 = state_34584__$1;
(statearr_34591_34615[(2)] = null);

(statearr_34591_34615[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (6))){
var inst_34561 = (state_34584[(7)]);
var inst_34567 = p.call(null,inst_34561);
var state_34584__$1 = state_34584;
if(cljs.core.truth_(inst_34567)){
var statearr_34592_34616 = state_34584__$1;
(statearr_34592_34616[(1)] = (9));

} else {
var statearr_34593_34617 = state_34584__$1;
(statearr_34593_34617[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (3))){
var inst_34582 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34584__$1,inst_34582);
} else {
if((state_val_34585 === (12))){
var state_34584__$1 = state_34584;
var statearr_34594_34618 = state_34584__$1;
(statearr_34594_34618[(2)] = null);

(statearr_34594_34618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (2))){
var state_34584__$1 = state_34584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34584__$1,(4),ch);
} else {
if((state_val_34585 === (11))){
var inst_34561 = (state_34584[(7)]);
var inst_34571 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34584__$1,(8),inst_34571,inst_34561);
} else {
if((state_val_34585 === (9))){
var state_34584__$1 = state_34584;
var statearr_34595_34619 = state_34584__$1;
(statearr_34595_34619[(2)] = tc);

(statearr_34595_34619[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (5))){
var inst_34564 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34565 = cljs.core.async.close_BANG_.call(null,fc);
var state_34584__$1 = (function (){var statearr_34596 = state_34584;
(statearr_34596[(8)] = inst_34564);

return statearr_34596;
})();
var statearr_34597_34620 = state_34584__$1;
(statearr_34597_34620[(2)] = inst_34565);

(statearr_34597_34620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (14))){
var inst_34578 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34598_34621 = state_34584__$1;
(statearr_34598_34621[(2)] = inst_34578);

(statearr_34598_34621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (10))){
var state_34584__$1 = state_34584;
var statearr_34599_34622 = state_34584__$1;
(statearr_34599_34622[(2)] = fc);

(statearr_34599_34622[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (8))){
var inst_34573 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
if(cljs.core.truth_(inst_34573)){
var statearr_34600_34623 = state_34584__$1;
(statearr_34600_34623[(1)] = (12));

} else {
var statearr_34601_34624 = state_34584__$1;
(statearr_34601_34624[(1)] = (13));

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
});})(c__28151__auto___34610,tc,fc))
;
return ((function (switch__28089__auto__,c__28151__auto___34610,tc,fc){
return (function() {
var cljs$core$async$state_machine__28090__auto__ = null;
var cljs$core$async$state_machine__28090__auto____0 = (function (){
var statearr_34605 = [null,null,null,null,null,null,null,null,null];
(statearr_34605[(0)] = cljs$core$async$state_machine__28090__auto__);

(statearr_34605[(1)] = (1));

return statearr_34605;
});
var cljs$core$async$state_machine__28090__auto____1 = (function (state_34584){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_34584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e34606){if((e34606 instanceof Object)){
var ex__28093__auto__ = e34606;
var statearr_34607_34625 = state_34584;
(statearr_34607_34625[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34626 = state_34584;
state_34584 = G__34626;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$state_machine__28090__auto__ = function(state_34584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28090__auto____1.call(this,state_34584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28090__auto____0;
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28090__auto____1;
return cljs$core$async$state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___34610,tc,fc))
})();
var state__28153__auto__ = (function (){var statearr_34608 = f__28152__auto__.call(null);
(statearr_34608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___34610);

return statearr_34608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___34610,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto__){
return (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (1))){
var inst_34659 = init;
var state_34673__$1 = (function (){var statearr_34675 = state_34673;
(statearr_34675[(7)] = inst_34659);

return statearr_34675;
})();
var statearr_34676_34691 = state_34673__$1;
(statearr_34676_34691[(2)] = null);

(statearr_34676_34691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (2))){
var state_34673__$1 = state_34673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34673__$1,(4),ch);
} else {
if((state_val_34674 === (3))){
var inst_34671 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34673__$1,inst_34671);
} else {
if((state_val_34674 === (4))){
var inst_34662 = (state_34673[(8)]);
var inst_34662__$1 = (state_34673[(2)]);
var inst_34663 = (inst_34662__$1 == null);
var state_34673__$1 = (function (){var statearr_34677 = state_34673;
(statearr_34677[(8)] = inst_34662__$1);

return statearr_34677;
})();
if(cljs.core.truth_(inst_34663)){
var statearr_34678_34692 = state_34673__$1;
(statearr_34678_34692[(1)] = (5));

} else {
var statearr_34679_34693 = state_34673__$1;
(statearr_34679_34693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34659 = (state_34673[(7)]);
var state_34673__$1 = state_34673;
var statearr_34680_34694 = state_34673__$1;
(statearr_34680_34694[(2)] = inst_34659);

(statearr_34680_34694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34659 = (state_34673[(7)]);
var inst_34662 = (state_34673[(8)]);
var inst_34666 = f.call(null,inst_34659,inst_34662);
var inst_34659__$1 = inst_34666;
var state_34673__$1 = (function (){var statearr_34681 = state_34673;
(statearr_34681[(7)] = inst_34659__$1);

return statearr_34681;
})();
var statearr_34682_34695 = state_34673__$1;
(statearr_34682_34695[(2)] = null);

(statearr_34682_34695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34683_34696 = state_34673__$1;
(statearr_34683_34696[(2)] = inst_34669);

(statearr_34683_34696[(1)] = (3));


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
});})(c__28151__auto__))
;
return ((function (switch__28089__auto__,c__28151__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28090__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28090__auto____0 = (function (){
var statearr_34687 = [null,null,null,null,null,null,null,null,null];
(statearr_34687[(0)] = cljs$core$async$reduce_$_state_machine__28090__auto__);

(statearr_34687[(1)] = (1));

return statearr_34687;
});
var cljs$core$async$reduce_$_state_machine__28090__auto____1 = (function (state_34673){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_34673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e34688){if((e34688 instanceof Object)){
var ex__28093__auto__ = e34688;
var statearr_34689_34697 = state_34673;
(statearr_34689_34697[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34698 = state_34673;
state_34673 = G__34698;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28090__auto__ = function(state_34673){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28090__auto____1.call(this,state_34673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28090__auto____0;
cljs$core$async$reduce_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28090__auto____1;
return cljs$core$async$reduce_$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto__))
})();
var state__28153__auto__ = (function (){var statearr_34690 = f__28152__auto__.call(null);
(statearr_34690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_34690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__))
);

return c__28151__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__34700 = arguments.length;
switch (G__34700) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto__){
return (function (state_34725){
var state_val_34726 = (state_34725[(1)]);
if((state_val_34726 === (7))){
var inst_34707 = (state_34725[(2)]);
var state_34725__$1 = state_34725;
var statearr_34727_34751 = state_34725__$1;
(statearr_34727_34751[(2)] = inst_34707);

(statearr_34727_34751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (1))){
var inst_34701 = cljs.core.seq.call(null,coll);
var inst_34702 = inst_34701;
var state_34725__$1 = (function (){var statearr_34728 = state_34725;
(statearr_34728[(7)] = inst_34702);

return statearr_34728;
})();
var statearr_34729_34752 = state_34725__$1;
(statearr_34729_34752[(2)] = null);

(statearr_34729_34752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (4))){
var inst_34702 = (state_34725[(7)]);
var inst_34705 = cljs.core.first.call(null,inst_34702);
var state_34725__$1 = state_34725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34725__$1,(7),ch,inst_34705);
} else {
if((state_val_34726 === (13))){
var inst_34719 = (state_34725[(2)]);
var state_34725__$1 = state_34725;
var statearr_34730_34753 = state_34725__$1;
(statearr_34730_34753[(2)] = inst_34719);

(statearr_34730_34753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (6))){
var inst_34710 = (state_34725[(2)]);
var state_34725__$1 = state_34725;
if(cljs.core.truth_(inst_34710)){
var statearr_34731_34754 = state_34725__$1;
(statearr_34731_34754[(1)] = (8));

} else {
var statearr_34732_34755 = state_34725__$1;
(statearr_34732_34755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (3))){
var inst_34723 = (state_34725[(2)]);
var state_34725__$1 = state_34725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34725__$1,inst_34723);
} else {
if((state_val_34726 === (12))){
var state_34725__$1 = state_34725;
var statearr_34733_34756 = state_34725__$1;
(statearr_34733_34756[(2)] = null);

(statearr_34733_34756[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (2))){
var inst_34702 = (state_34725[(7)]);
var state_34725__$1 = state_34725;
if(cljs.core.truth_(inst_34702)){
var statearr_34734_34757 = state_34725__$1;
(statearr_34734_34757[(1)] = (4));

} else {
var statearr_34735_34758 = state_34725__$1;
(statearr_34735_34758[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (11))){
var inst_34716 = cljs.core.async.close_BANG_.call(null,ch);
var state_34725__$1 = state_34725;
var statearr_34736_34759 = state_34725__$1;
(statearr_34736_34759[(2)] = inst_34716);

(statearr_34736_34759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (9))){
var state_34725__$1 = state_34725;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34737_34760 = state_34725__$1;
(statearr_34737_34760[(1)] = (11));

} else {
var statearr_34738_34761 = state_34725__$1;
(statearr_34738_34761[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (5))){
var inst_34702 = (state_34725[(7)]);
var state_34725__$1 = state_34725;
var statearr_34739_34762 = state_34725__$1;
(statearr_34739_34762[(2)] = inst_34702);

(statearr_34739_34762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (10))){
var inst_34721 = (state_34725[(2)]);
var state_34725__$1 = state_34725;
var statearr_34740_34763 = state_34725__$1;
(statearr_34740_34763[(2)] = inst_34721);

(statearr_34740_34763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (8))){
var inst_34702 = (state_34725[(7)]);
var inst_34712 = cljs.core.next.call(null,inst_34702);
var inst_34702__$1 = inst_34712;
var state_34725__$1 = (function (){var statearr_34741 = state_34725;
(statearr_34741[(7)] = inst_34702__$1);

return statearr_34741;
})();
var statearr_34742_34764 = state_34725__$1;
(statearr_34742_34764[(2)] = null);

(statearr_34742_34764[(1)] = (2));


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
});})(c__28151__auto__))
;
return ((function (switch__28089__auto__,c__28151__auto__){
return (function() {
var cljs$core$async$state_machine__28090__auto__ = null;
var cljs$core$async$state_machine__28090__auto____0 = (function (){
var statearr_34746 = [null,null,null,null,null,null,null,null];
(statearr_34746[(0)] = cljs$core$async$state_machine__28090__auto__);

(statearr_34746[(1)] = (1));

return statearr_34746;
});
var cljs$core$async$state_machine__28090__auto____1 = (function (state_34725){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_34725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e34747){if((e34747 instanceof Object)){
var ex__28093__auto__ = e34747;
var statearr_34748_34765 = state_34725;
(statearr_34748_34765[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34766 = state_34725;
state_34725 = G__34766;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$state_machine__28090__auto__ = function(state_34725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28090__auto____1.call(this,state_34725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28090__auto____0;
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28090__auto____1;
return cljs$core$async$state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto__))
})();
var state__28153__auto__ = (function (){var statearr_34749 = f__28152__auto__.call(null);
(statearr_34749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_34749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__))
);

return c__28151__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj34768 = {};
return obj34768;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__24753__auto__ = _;
if(and__24753__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__24753__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25401__auto__ = (((_ == null))?null:_);
return (function (){var or__24765__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25401__auto__)]);
if(or__24765__auto__){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj34770 = {};
return obj34770;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__24753__auto__ = m;
if(and__24753__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__24753__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25401__auto__ = (((m == null))?null:m);
return (function (){var or__24765__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25401__auto__)]);
if(or__24765__auto__){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__24753__auto__ = m;
if(and__24753__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__24753__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25401__auto__ = (((m == null))?null:m);
return (function (){var or__24765__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25401__auto__)]);
if(or__24765__auto__){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__24753__auto__ = m;
if(and__24753__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__24753__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25401__auto__ = (((m == null))?null:m);
return (function (){var or__24765__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25401__auto__)]);
if(or__24765__auto__){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t34992 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34992 = (function (mult,ch,cs,meta34993){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta34993 = meta34993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34994,meta34993__$1){
var self__ = this;
var _34994__$1 = this;
return (new cljs.core.async.t34992(self__.mult,self__.ch,self__.cs,meta34993__$1));
});})(cs))
;

cljs.core.async.t34992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34994){
var self__ = this;
var _34994__$1 = this;
return self__.meta34993;
});})(cs))
;

cljs.core.async.t34992.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34992.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t34992.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t34992.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t34992.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t34992.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t34992.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34993","meta34993",1535045745,null)], null);
});})(cs))
;

cljs.core.async.t34992.cljs$lang$type = true;

cljs.core.async.t34992.cljs$lang$ctorStr = "cljs.core.async/t34992";

cljs.core.async.t34992.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.core.async/t34992");
});})(cs))
;

cljs.core.async.__GT_t34992 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t34992(mult__$1,ch__$1,cs__$1,meta34993){
return (new cljs.core.async.t34992(mult__$1,ch__$1,cs__$1,meta34993));
});})(cs))
;

}

return (new cljs.core.async.t34992(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28151__auto___35213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___35213,cs,m,dchan,dctr,done){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___35213,cs,m,dchan,dctr,done){
return (function (state_35125){
var state_val_35126 = (state_35125[(1)]);
if((state_val_35126 === (7))){
var inst_35121 = (state_35125[(2)]);
var state_35125__$1 = state_35125;
var statearr_35127_35214 = state_35125__$1;
(statearr_35127_35214[(2)] = inst_35121);

(statearr_35127_35214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (20))){
var inst_35026 = (state_35125[(7)]);
var inst_35036 = cljs.core.first.call(null,inst_35026);
var inst_35037 = cljs.core.nth.call(null,inst_35036,(0),null);
var inst_35038 = cljs.core.nth.call(null,inst_35036,(1),null);
var state_35125__$1 = (function (){var statearr_35128 = state_35125;
(statearr_35128[(8)] = inst_35037);

return statearr_35128;
})();
if(cljs.core.truth_(inst_35038)){
var statearr_35129_35215 = state_35125__$1;
(statearr_35129_35215[(1)] = (22));

} else {
var statearr_35130_35216 = state_35125__$1;
(statearr_35130_35216[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (27))){
var inst_34997 = (state_35125[(9)]);
var inst_35068 = (state_35125[(10)]);
var inst_35073 = (state_35125[(11)]);
var inst_35066 = (state_35125[(12)]);
var inst_35073__$1 = cljs.core._nth.call(null,inst_35066,inst_35068);
var inst_35074 = cljs.core.async.put_BANG_.call(null,inst_35073__$1,inst_34997,done);
var state_35125__$1 = (function (){var statearr_35131 = state_35125;
(statearr_35131[(11)] = inst_35073__$1);

return statearr_35131;
})();
if(cljs.core.truth_(inst_35074)){
var statearr_35132_35217 = state_35125__$1;
(statearr_35132_35217[(1)] = (30));

} else {
var statearr_35133_35218 = state_35125__$1;
(statearr_35133_35218[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (1))){
var state_35125__$1 = state_35125;
var statearr_35134_35219 = state_35125__$1;
(statearr_35134_35219[(2)] = null);

(statearr_35134_35219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (24))){
var inst_35026 = (state_35125[(7)]);
var inst_35043 = (state_35125[(2)]);
var inst_35044 = cljs.core.next.call(null,inst_35026);
var inst_35006 = inst_35044;
var inst_35007 = null;
var inst_35008 = (0);
var inst_35009 = (0);
var state_35125__$1 = (function (){var statearr_35135 = state_35125;
(statearr_35135[(13)] = inst_35008);

(statearr_35135[(14)] = inst_35006);

(statearr_35135[(15)] = inst_35009);

(statearr_35135[(16)] = inst_35007);

(statearr_35135[(17)] = inst_35043);

return statearr_35135;
})();
var statearr_35136_35220 = state_35125__$1;
(statearr_35136_35220[(2)] = null);

(statearr_35136_35220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (39))){
var state_35125__$1 = state_35125;
var statearr_35140_35221 = state_35125__$1;
(statearr_35140_35221[(2)] = null);

(statearr_35140_35221[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (4))){
var inst_34997 = (state_35125[(9)]);
var inst_34997__$1 = (state_35125[(2)]);
var inst_34998 = (inst_34997__$1 == null);
var state_35125__$1 = (function (){var statearr_35141 = state_35125;
(statearr_35141[(9)] = inst_34997__$1);

return statearr_35141;
})();
if(cljs.core.truth_(inst_34998)){
var statearr_35142_35222 = state_35125__$1;
(statearr_35142_35222[(1)] = (5));

} else {
var statearr_35143_35223 = state_35125__$1;
(statearr_35143_35223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (15))){
var inst_35008 = (state_35125[(13)]);
var inst_35006 = (state_35125[(14)]);
var inst_35009 = (state_35125[(15)]);
var inst_35007 = (state_35125[(16)]);
var inst_35022 = (state_35125[(2)]);
var inst_35023 = (inst_35009 + (1));
var tmp35137 = inst_35008;
var tmp35138 = inst_35006;
var tmp35139 = inst_35007;
var inst_35006__$1 = tmp35138;
var inst_35007__$1 = tmp35139;
var inst_35008__$1 = tmp35137;
var inst_35009__$1 = inst_35023;
var state_35125__$1 = (function (){var statearr_35144 = state_35125;
(statearr_35144[(13)] = inst_35008__$1);

(statearr_35144[(14)] = inst_35006__$1);

(statearr_35144[(15)] = inst_35009__$1);

(statearr_35144[(16)] = inst_35007__$1);

(statearr_35144[(18)] = inst_35022);

return statearr_35144;
})();
var statearr_35145_35224 = state_35125__$1;
(statearr_35145_35224[(2)] = null);

(statearr_35145_35224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (21))){
var inst_35047 = (state_35125[(2)]);
var state_35125__$1 = state_35125;
var statearr_35149_35225 = state_35125__$1;
(statearr_35149_35225[(2)] = inst_35047);

(statearr_35149_35225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (31))){
var inst_35073 = (state_35125[(11)]);
var inst_35077 = done.call(null,null);
var inst_35078 = cljs.core.async.untap_STAR_.call(null,m,inst_35073);
var state_35125__$1 = (function (){var statearr_35150 = state_35125;
(statearr_35150[(19)] = inst_35077);

return statearr_35150;
})();
var statearr_35151_35226 = state_35125__$1;
(statearr_35151_35226[(2)] = inst_35078);

(statearr_35151_35226[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (32))){
var inst_35067 = (state_35125[(20)]);
var inst_35068 = (state_35125[(10)]);
var inst_35065 = (state_35125[(21)]);
var inst_35066 = (state_35125[(12)]);
var inst_35080 = (state_35125[(2)]);
var inst_35081 = (inst_35068 + (1));
var tmp35146 = inst_35067;
var tmp35147 = inst_35065;
var tmp35148 = inst_35066;
var inst_35065__$1 = tmp35147;
var inst_35066__$1 = tmp35148;
var inst_35067__$1 = tmp35146;
var inst_35068__$1 = inst_35081;
var state_35125__$1 = (function (){var statearr_35152 = state_35125;
(statearr_35152[(20)] = inst_35067__$1);

(statearr_35152[(22)] = inst_35080);

(statearr_35152[(10)] = inst_35068__$1);

(statearr_35152[(21)] = inst_35065__$1);

(statearr_35152[(12)] = inst_35066__$1);

return statearr_35152;
})();
var statearr_35153_35227 = state_35125__$1;
(statearr_35153_35227[(2)] = null);

(statearr_35153_35227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (40))){
var inst_35093 = (state_35125[(23)]);
var inst_35097 = done.call(null,null);
var inst_35098 = cljs.core.async.untap_STAR_.call(null,m,inst_35093);
var state_35125__$1 = (function (){var statearr_35154 = state_35125;
(statearr_35154[(24)] = inst_35097);

return statearr_35154;
})();
var statearr_35155_35228 = state_35125__$1;
(statearr_35155_35228[(2)] = inst_35098);

(statearr_35155_35228[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (33))){
var inst_35084 = (state_35125[(25)]);
var inst_35086 = cljs.core.chunked_seq_QMARK_.call(null,inst_35084);
var state_35125__$1 = state_35125;
if(inst_35086){
var statearr_35156_35229 = state_35125__$1;
(statearr_35156_35229[(1)] = (36));

} else {
var statearr_35157_35230 = state_35125__$1;
(statearr_35157_35230[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (13))){
var inst_35016 = (state_35125[(26)]);
var inst_35019 = cljs.core.async.close_BANG_.call(null,inst_35016);
var state_35125__$1 = state_35125;
var statearr_35158_35231 = state_35125__$1;
(statearr_35158_35231[(2)] = inst_35019);

(statearr_35158_35231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (22))){
var inst_35037 = (state_35125[(8)]);
var inst_35040 = cljs.core.async.close_BANG_.call(null,inst_35037);
var state_35125__$1 = state_35125;
var statearr_35159_35232 = state_35125__$1;
(statearr_35159_35232[(2)] = inst_35040);

(statearr_35159_35232[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (36))){
var inst_35084 = (state_35125[(25)]);
var inst_35088 = cljs.core.chunk_first.call(null,inst_35084);
var inst_35089 = cljs.core.chunk_rest.call(null,inst_35084);
var inst_35090 = cljs.core.count.call(null,inst_35088);
var inst_35065 = inst_35089;
var inst_35066 = inst_35088;
var inst_35067 = inst_35090;
var inst_35068 = (0);
var state_35125__$1 = (function (){var statearr_35160 = state_35125;
(statearr_35160[(20)] = inst_35067);

(statearr_35160[(10)] = inst_35068);

(statearr_35160[(21)] = inst_35065);

(statearr_35160[(12)] = inst_35066);

return statearr_35160;
})();
var statearr_35161_35233 = state_35125__$1;
(statearr_35161_35233[(2)] = null);

(statearr_35161_35233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (41))){
var inst_35084 = (state_35125[(25)]);
var inst_35100 = (state_35125[(2)]);
var inst_35101 = cljs.core.next.call(null,inst_35084);
var inst_35065 = inst_35101;
var inst_35066 = null;
var inst_35067 = (0);
var inst_35068 = (0);
var state_35125__$1 = (function (){var statearr_35162 = state_35125;
(statearr_35162[(20)] = inst_35067);

(statearr_35162[(10)] = inst_35068);

(statearr_35162[(21)] = inst_35065);

(statearr_35162[(12)] = inst_35066);

(statearr_35162[(27)] = inst_35100);

return statearr_35162;
})();
var statearr_35163_35234 = state_35125__$1;
(statearr_35163_35234[(2)] = null);

(statearr_35163_35234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (43))){
var state_35125__$1 = state_35125;
var statearr_35164_35235 = state_35125__$1;
(statearr_35164_35235[(2)] = null);

(statearr_35164_35235[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (29))){
var inst_35109 = (state_35125[(2)]);
var state_35125__$1 = state_35125;
var statearr_35165_35236 = state_35125__$1;
(statearr_35165_35236[(2)] = inst_35109);

(statearr_35165_35236[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (44))){
var inst_35118 = (state_35125[(2)]);
var state_35125__$1 = (function (){var statearr_35166 = state_35125;
(statearr_35166[(28)] = inst_35118);

return statearr_35166;
})();
var statearr_35167_35237 = state_35125__$1;
(statearr_35167_35237[(2)] = null);

(statearr_35167_35237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (6))){
var inst_35057 = (state_35125[(29)]);
var inst_35056 = cljs.core.deref.call(null,cs);
var inst_35057__$1 = cljs.core.keys.call(null,inst_35056);
var inst_35058 = cljs.core.count.call(null,inst_35057__$1);
var inst_35059 = cljs.core.reset_BANG_.call(null,dctr,inst_35058);
var inst_35064 = cljs.core.seq.call(null,inst_35057__$1);
var inst_35065 = inst_35064;
var inst_35066 = null;
var inst_35067 = (0);
var inst_35068 = (0);
var state_35125__$1 = (function (){var statearr_35168 = state_35125;
(statearr_35168[(20)] = inst_35067);

(statearr_35168[(29)] = inst_35057__$1);

(statearr_35168[(10)] = inst_35068);

(statearr_35168[(21)] = inst_35065);

(statearr_35168[(30)] = inst_35059);

(statearr_35168[(12)] = inst_35066);

return statearr_35168;
})();
var statearr_35169_35238 = state_35125__$1;
(statearr_35169_35238[(2)] = null);

(statearr_35169_35238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (28))){
var inst_35084 = (state_35125[(25)]);
var inst_35065 = (state_35125[(21)]);
var inst_35084__$1 = cljs.core.seq.call(null,inst_35065);
var state_35125__$1 = (function (){var statearr_35170 = state_35125;
(statearr_35170[(25)] = inst_35084__$1);

return statearr_35170;
})();
if(inst_35084__$1){
var statearr_35171_35239 = state_35125__$1;
(statearr_35171_35239[(1)] = (33));

} else {
var statearr_35172_35240 = state_35125__$1;
(statearr_35172_35240[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (25))){
var inst_35067 = (state_35125[(20)]);
var inst_35068 = (state_35125[(10)]);
var inst_35070 = (inst_35068 < inst_35067);
var inst_35071 = inst_35070;
var state_35125__$1 = state_35125;
if(cljs.core.truth_(inst_35071)){
var statearr_35173_35241 = state_35125__$1;
(statearr_35173_35241[(1)] = (27));

} else {
var statearr_35174_35242 = state_35125__$1;
(statearr_35174_35242[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (34))){
var state_35125__$1 = state_35125;
var statearr_35175_35243 = state_35125__$1;
(statearr_35175_35243[(2)] = null);

(statearr_35175_35243[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (17))){
var state_35125__$1 = state_35125;
var statearr_35176_35244 = state_35125__$1;
(statearr_35176_35244[(2)] = null);

(statearr_35176_35244[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (3))){
var inst_35123 = (state_35125[(2)]);
var state_35125__$1 = state_35125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35125__$1,inst_35123);
} else {
if((state_val_35126 === (12))){
var inst_35052 = (state_35125[(2)]);
var state_35125__$1 = state_35125;
var statearr_35177_35245 = state_35125__$1;
(statearr_35177_35245[(2)] = inst_35052);

(statearr_35177_35245[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (2))){
var state_35125__$1 = state_35125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35125__$1,(4),ch);
} else {
if((state_val_35126 === (23))){
var state_35125__$1 = state_35125;
var statearr_35178_35246 = state_35125__$1;
(statearr_35178_35246[(2)] = null);

(statearr_35178_35246[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (35))){
var inst_35107 = (state_35125[(2)]);
var state_35125__$1 = state_35125;
var statearr_35179_35247 = state_35125__$1;
(statearr_35179_35247[(2)] = inst_35107);

(statearr_35179_35247[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (19))){
var inst_35026 = (state_35125[(7)]);
var inst_35030 = cljs.core.chunk_first.call(null,inst_35026);
var inst_35031 = cljs.core.chunk_rest.call(null,inst_35026);
var inst_35032 = cljs.core.count.call(null,inst_35030);
var inst_35006 = inst_35031;
var inst_35007 = inst_35030;
var inst_35008 = inst_35032;
var inst_35009 = (0);
var state_35125__$1 = (function (){var statearr_35180 = state_35125;
(statearr_35180[(13)] = inst_35008);

(statearr_35180[(14)] = inst_35006);

(statearr_35180[(15)] = inst_35009);

(statearr_35180[(16)] = inst_35007);

return statearr_35180;
})();
var statearr_35181_35248 = state_35125__$1;
(statearr_35181_35248[(2)] = null);

(statearr_35181_35248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (11))){
var inst_35026 = (state_35125[(7)]);
var inst_35006 = (state_35125[(14)]);
var inst_35026__$1 = cljs.core.seq.call(null,inst_35006);
var state_35125__$1 = (function (){var statearr_35182 = state_35125;
(statearr_35182[(7)] = inst_35026__$1);

return statearr_35182;
})();
if(inst_35026__$1){
var statearr_35183_35249 = state_35125__$1;
(statearr_35183_35249[(1)] = (16));

} else {
var statearr_35184_35250 = state_35125__$1;
(statearr_35184_35250[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (9))){
var inst_35054 = (state_35125[(2)]);
var state_35125__$1 = state_35125;
var statearr_35185_35251 = state_35125__$1;
(statearr_35185_35251[(2)] = inst_35054);

(statearr_35185_35251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (5))){
var inst_35004 = cljs.core.deref.call(null,cs);
var inst_35005 = cljs.core.seq.call(null,inst_35004);
var inst_35006 = inst_35005;
var inst_35007 = null;
var inst_35008 = (0);
var inst_35009 = (0);
var state_35125__$1 = (function (){var statearr_35186 = state_35125;
(statearr_35186[(13)] = inst_35008);

(statearr_35186[(14)] = inst_35006);

(statearr_35186[(15)] = inst_35009);

(statearr_35186[(16)] = inst_35007);

return statearr_35186;
})();
var statearr_35187_35252 = state_35125__$1;
(statearr_35187_35252[(2)] = null);

(statearr_35187_35252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (14))){
var state_35125__$1 = state_35125;
var statearr_35188_35253 = state_35125__$1;
(statearr_35188_35253[(2)] = null);

(statearr_35188_35253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (45))){
var inst_35115 = (state_35125[(2)]);
var state_35125__$1 = state_35125;
var statearr_35189_35254 = state_35125__$1;
(statearr_35189_35254[(2)] = inst_35115);

(statearr_35189_35254[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (26))){
var inst_35057 = (state_35125[(29)]);
var inst_35111 = (state_35125[(2)]);
var inst_35112 = cljs.core.seq.call(null,inst_35057);
var state_35125__$1 = (function (){var statearr_35190 = state_35125;
(statearr_35190[(31)] = inst_35111);

return statearr_35190;
})();
if(inst_35112){
var statearr_35191_35255 = state_35125__$1;
(statearr_35191_35255[(1)] = (42));

} else {
var statearr_35192_35256 = state_35125__$1;
(statearr_35192_35256[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (16))){
var inst_35026 = (state_35125[(7)]);
var inst_35028 = cljs.core.chunked_seq_QMARK_.call(null,inst_35026);
var state_35125__$1 = state_35125;
if(inst_35028){
var statearr_35193_35257 = state_35125__$1;
(statearr_35193_35257[(1)] = (19));

} else {
var statearr_35194_35258 = state_35125__$1;
(statearr_35194_35258[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (38))){
var inst_35104 = (state_35125[(2)]);
var state_35125__$1 = state_35125;
var statearr_35195_35259 = state_35125__$1;
(statearr_35195_35259[(2)] = inst_35104);

(statearr_35195_35259[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (30))){
var state_35125__$1 = state_35125;
var statearr_35196_35260 = state_35125__$1;
(statearr_35196_35260[(2)] = null);

(statearr_35196_35260[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (10))){
var inst_35009 = (state_35125[(15)]);
var inst_35007 = (state_35125[(16)]);
var inst_35015 = cljs.core._nth.call(null,inst_35007,inst_35009);
var inst_35016 = cljs.core.nth.call(null,inst_35015,(0),null);
var inst_35017 = cljs.core.nth.call(null,inst_35015,(1),null);
var state_35125__$1 = (function (){var statearr_35197 = state_35125;
(statearr_35197[(26)] = inst_35016);

return statearr_35197;
})();
if(cljs.core.truth_(inst_35017)){
var statearr_35198_35261 = state_35125__$1;
(statearr_35198_35261[(1)] = (13));

} else {
var statearr_35199_35262 = state_35125__$1;
(statearr_35199_35262[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (18))){
var inst_35050 = (state_35125[(2)]);
var state_35125__$1 = state_35125;
var statearr_35200_35263 = state_35125__$1;
(statearr_35200_35263[(2)] = inst_35050);

(statearr_35200_35263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (42))){
var state_35125__$1 = state_35125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35125__$1,(45),dchan);
} else {
if((state_val_35126 === (37))){
var inst_34997 = (state_35125[(9)]);
var inst_35093 = (state_35125[(23)]);
var inst_35084 = (state_35125[(25)]);
var inst_35093__$1 = cljs.core.first.call(null,inst_35084);
var inst_35094 = cljs.core.async.put_BANG_.call(null,inst_35093__$1,inst_34997,done);
var state_35125__$1 = (function (){var statearr_35201 = state_35125;
(statearr_35201[(23)] = inst_35093__$1);

return statearr_35201;
})();
if(cljs.core.truth_(inst_35094)){
var statearr_35202_35264 = state_35125__$1;
(statearr_35202_35264[(1)] = (39));

} else {
var statearr_35203_35265 = state_35125__$1;
(statearr_35203_35265[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (8))){
var inst_35008 = (state_35125[(13)]);
var inst_35009 = (state_35125[(15)]);
var inst_35011 = (inst_35009 < inst_35008);
var inst_35012 = inst_35011;
var state_35125__$1 = state_35125;
if(cljs.core.truth_(inst_35012)){
var statearr_35204_35266 = state_35125__$1;
(statearr_35204_35266[(1)] = (10));

} else {
var statearr_35205_35267 = state_35125__$1;
(statearr_35205_35267[(1)] = (11));

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
});})(c__28151__auto___35213,cs,m,dchan,dctr,done))
;
return ((function (switch__28089__auto__,c__28151__auto___35213,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28090__auto__ = null;
var cljs$core$async$mult_$_state_machine__28090__auto____0 = (function (){
var statearr_35209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35209[(0)] = cljs$core$async$mult_$_state_machine__28090__auto__);

(statearr_35209[(1)] = (1));

return statearr_35209;
});
var cljs$core$async$mult_$_state_machine__28090__auto____1 = (function (state_35125){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_35125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e35210){if((e35210 instanceof Object)){
var ex__28093__auto__ = e35210;
var statearr_35211_35268 = state_35125;
(statearr_35211_35268[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35269 = state_35125;
state_35125 = G__35269;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28090__auto__ = function(state_35125){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28090__auto____1.call(this,state_35125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28090__auto____0;
cljs$core$async$mult_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28090__auto____1;
return cljs$core$async$mult_$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___35213,cs,m,dchan,dctr,done))
})();
var state__28153__auto__ = (function (){var statearr_35212 = f__28152__auto__.call(null);
(statearr_35212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___35213);

return statearr_35212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___35213,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__35271 = arguments.length;
switch (G__35271) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
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

cljs.core.async.Mix = (function (){var obj35274 = {};
return obj35274;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__24753__auto__ = m;
if(and__24753__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__24753__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25401__auto__ = (((m == null))?null:m);
return (function (){var or__24765__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25401__auto__)]);
if(or__24765__auto__){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__24753__auto__ = m;
if(and__24753__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__24753__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25401__auto__ = (((m == null))?null:m);
return (function (){var or__24765__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25401__auto__)]);
if(or__24765__auto__){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__24753__auto__ = m;
if(and__24753__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__24753__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25401__auto__ = (((m == null))?null:m);
return (function (){var or__24765__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25401__auto__)]);
if(or__24765__auto__){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__24753__auto__ = m;
if(and__24753__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__24753__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25401__auto__ = (((m == null))?null:m);
return (function (){var or__24765__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25401__auto__)]);
if(or__24765__auto__){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__24753__auto__ = m;
if(and__24753__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__24753__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25401__auto__ = (((m == null))?null:m);
return (function (){var or__24765__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25401__auto__)]);
if(or__24765__auto__){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__25805__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25805__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35279){
var map__35280 = p__35279;
var map__35280__$1 = ((cljs.core.seq_QMARK_.call(null,map__35280))?cljs.core.apply.call(null,cljs.core.hash_map,map__35280):map__35280);
var opts = map__35280__$1;
var statearr_35281_35284 = state;
(statearr_35281_35284[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__35280,map__35280__$1,opts){
return (function (val){
var statearr_35282_35285 = state;
(statearr_35282_35285[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35280,map__35280__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_35283_35286 = state;
(statearr_35283_35286[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35275){
var G__35276 = cljs.core.first.call(null,seq35275);
var seq35275__$1 = cljs.core.next.call(null,seq35275);
var G__35277 = cljs.core.first.call(null,seq35275__$1);
var seq35275__$2 = cljs.core.next.call(null,seq35275__$1);
var G__35278 = cljs.core.first.call(null,seq35275__$2);
var seq35275__$3 = cljs.core.next.call(null,seq35275__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35276,G__35277,G__35278,seq35275__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t35406 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35406 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35407){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35407 = meta35407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35408,meta35407__$1){
var self__ = this;
var _35408__$1 = this;
return (new cljs.core.async.t35406(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35407__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35408){
var self__ = this;
var _35408__$1 = this;
return self__.meta35407;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35406.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t35406.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35406.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t35406.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35406.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35406.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35406.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35406.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35406.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35407","meta35407",2103456320,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35406.cljs$lang$type = true;

cljs.core.async.t35406.cljs$lang$ctorStr = "cljs.core.async/t35406";

cljs.core.async.t35406.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.core.async/t35406");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t35406 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t35406(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35407){
return (new cljs.core.async.t35406(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35407));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t35406(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28151__auto___35525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___35525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___35525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35478){
var state_val_35479 = (state_35478[(1)]);
if((state_val_35479 === (7))){
var inst_35422 = (state_35478[(7)]);
var inst_35427 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35422);
var state_35478__$1 = state_35478;
var statearr_35480_35526 = state_35478__$1;
(statearr_35480_35526[(2)] = inst_35427);

(statearr_35480_35526[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (20))){
var inst_35437 = (state_35478[(8)]);
var state_35478__$1 = state_35478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35478__$1,(23),out,inst_35437);
} else {
if((state_val_35479 === (1))){
var inst_35412 = (state_35478[(9)]);
var inst_35412__$1 = calc_state.call(null);
var inst_35413 = cljs.core.seq_QMARK_.call(null,inst_35412__$1);
var state_35478__$1 = (function (){var statearr_35481 = state_35478;
(statearr_35481[(9)] = inst_35412__$1);

return statearr_35481;
})();
if(inst_35413){
var statearr_35482_35527 = state_35478__$1;
(statearr_35482_35527[(1)] = (2));

} else {
var statearr_35483_35528 = state_35478__$1;
(statearr_35483_35528[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (24))){
var inst_35430 = (state_35478[(10)]);
var inst_35422 = inst_35430;
var state_35478__$1 = (function (){var statearr_35484 = state_35478;
(statearr_35484[(7)] = inst_35422);

return statearr_35484;
})();
var statearr_35485_35529 = state_35478__$1;
(statearr_35485_35529[(2)] = null);

(statearr_35485_35529[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (4))){
var inst_35412 = (state_35478[(9)]);
var inst_35418 = (state_35478[(2)]);
var inst_35419 = cljs.core.get.call(null,inst_35418,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35420 = cljs.core.get.call(null,inst_35418,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35421 = cljs.core.get.call(null,inst_35418,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35422 = inst_35412;
var state_35478__$1 = (function (){var statearr_35486 = state_35478;
(statearr_35486[(11)] = inst_35419);

(statearr_35486[(7)] = inst_35422);

(statearr_35486[(12)] = inst_35421);

(statearr_35486[(13)] = inst_35420);

return statearr_35486;
})();
var statearr_35487_35530 = state_35478__$1;
(statearr_35487_35530[(2)] = null);

(statearr_35487_35530[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (15))){
var state_35478__$1 = state_35478;
var statearr_35488_35531 = state_35478__$1;
(statearr_35488_35531[(2)] = null);

(statearr_35488_35531[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (21))){
var inst_35430 = (state_35478[(10)]);
var inst_35422 = inst_35430;
var state_35478__$1 = (function (){var statearr_35489 = state_35478;
(statearr_35489[(7)] = inst_35422);

return statearr_35489;
})();
var statearr_35490_35532 = state_35478__$1;
(statearr_35490_35532[(2)] = null);

(statearr_35490_35532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (13))){
var inst_35474 = (state_35478[(2)]);
var state_35478__$1 = state_35478;
var statearr_35491_35533 = state_35478__$1;
(statearr_35491_35533[(2)] = inst_35474);

(statearr_35491_35533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (22))){
var inst_35472 = (state_35478[(2)]);
var state_35478__$1 = state_35478;
var statearr_35492_35534 = state_35478__$1;
(statearr_35492_35534[(2)] = inst_35472);

(statearr_35492_35534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (6))){
var inst_35476 = (state_35478[(2)]);
var state_35478__$1 = state_35478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35478__$1,inst_35476);
} else {
if((state_val_35479 === (25))){
var state_35478__$1 = state_35478;
var statearr_35493_35535 = state_35478__$1;
(statearr_35493_35535[(2)] = null);

(statearr_35493_35535[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (17))){
var inst_35452 = (state_35478[(14)]);
var state_35478__$1 = state_35478;
var statearr_35494_35536 = state_35478__$1;
(statearr_35494_35536[(2)] = inst_35452);

(statearr_35494_35536[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (3))){
var inst_35412 = (state_35478[(9)]);
var state_35478__$1 = state_35478;
var statearr_35495_35537 = state_35478__$1;
(statearr_35495_35537[(2)] = inst_35412);

(statearr_35495_35537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (12))){
var inst_35431 = (state_35478[(15)]);
var inst_35452 = (state_35478[(14)]);
var inst_35438 = (state_35478[(16)]);
var inst_35452__$1 = inst_35431.call(null,inst_35438);
var state_35478__$1 = (function (){var statearr_35496 = state_35478;
(statearr_35496[(14)] = inst_35452__$1);

return statearr_35496;
})();
if(cljs.core.truth_(inst_35452__$1)){
var statearr_35497_35538 = state_35478__$1;
(statearr_35497_35538[(1)] = (17));

} else {
var statearr_35498_35539 = state_35478__$1;
(statearr_35498_35539[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (2))){
var inst_35412 = (state_35478[(9)]);
var inst_35415 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35412);
var state_35478__$1 = state_35478;
var statearr_35499_35540 = state_35478__$1;
(statearr_35499_35540[(2)] = inst_35415);

(statearr_35499_35540[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (23))){
var inst_35463 = (state_35478[(2)]);
var state_35478__$1 = state_35478;
if(cljs.core.truth_(inst_35463)){
var statearr_35500_35541 = state_35478__$1;
(statearr_35500_35541[(1)] = (24));

} else {
var statearr_35501_35542 = state_35478__$1;
(statearr_35501_35542[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (19))){
var inst_35460 = (state_35478[(2)]);
var state_35478__$1 = state_35478;
if(cljs.core.truth_(inst_35460)){
var statearr_35502_35543 = state_35478__$1;
(statearr_35502_35543[(1)] = (20));

} else {
var statearr_35503_35544 = state_35478__$1;
(statearr_35503_35544[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (11))){
var inst_35437 = (state_35478[(8)]);
var inst_35443 = (inst_35437 == null);
var state_35478__$1 = state_35478;
if(cljs.core.truth_(inst_35443)){
var statearr_35504_35545 = state_35478__$1;
(statearr_35504_35545[(1)] = (14));

} else {
var statearr_35505_35546 = state_35478__$1;
(statearr_35505_35546[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (9))){
var inst_35430 = (state_35478[(10)]);
var inst_35430__$1 = (state_35478[(2)]);
var inst_35431 = cljs.core.get.call(null,inst_35430__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35432 = cljs.core.get.call(null,inst_35430__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35433 = cljs.core.get.call(null,inst_35430__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35478__$1 = (function (){var statearr_35506 = state_35478;
(statearr_35506[(15)] = inst_35431);

(statearr_35506[(10)] = inst_35430__$1);

(statearr_35506[(17)] = inst_35432);

return statearr_35506;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35478__$1,(10),inst_35433);
} else {
if((state_val_35479 === (5))){
var inst_35422 = (state_35478[(7)]);
var inst_35425 = cljs.core.seq_QMARK_.call(null,inst_35422);
var state_35478__$1 = state_35478;
if(inst_35425){
var statearr_35507_35547 = state_35478__$1;
(statearr_35507_35547[(1)] = (7));

} else {
var statearr_35508_35548 = state_35478__$1;
(statearr_35508_35548[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (14))){
var inst_35438 = (state_35478[(16)]);
var inst_35445 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35438);
var state_35478__$1 = state_35478;
var statearr_35509_35549 = state_35478__$1;
(statearr_35509_35549[(2)] = inst_35445);

(statearr_35509_35549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (26))){
var inst_35468 = (state_35478[(2)]);
var state_35478__$1 = state_35478;
var statearr_35510_35550 = state_35478__$1;
(statearr_35510_35550[(2)] = inst_35468);

(statearr_35510_35550[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (16))){
var inst_35448 = (state_35478[(2)]);
var inst_35449 = calc_state.call(null);
var inst_35422 = inst_35449;
var state_35478__$1 = (function (){var statearr_35511 = state_35478;
(statearr_35511[(7)] = inst_35422);

(statearr_35511[(18)] = inst_35448);

return statearr_35511;
})();
var statearr_35512_35551 = state_35478__$1;
(statearr_35512_35551[(2)] = null);

(statearr_35512_35551[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (10))){
var inst_35437 = (state_35478[(8)]);
var inst_35438 = (state_35478[(16)]);
var inst_35436 = (state_35478[(2)]);
var inst_35437__$1 = cljs.core.nth.call(null,inst_35436,(0),null);
var inst_35438__$1 = cljs.core.nth.call(null,inst_35436,(1),null);
var inst_35439 = (inst_35437__$1 == null);
var inst_35440 = cljs.core._EQ_.call(null,inst_35438__$1,change);
var inst_35441 = (inst_35439) || (inst_35440);
var state_35478__$1 = (function (){var statearr_35513 = state_35478;
(statearr_35513[(8)] = inst_35437__$1);

(statearr_35513[(16)] = inst_35438__$1);

return statearr_35513;
})();
if(cljs.core.truth_(inst_35441)){
var statearr_35514_35552 = state_35478__$1;
(statearr_35514_35552[(1)] = (11));

} else {
var statearr_35515_35553 = state_35478__$1;
(statearr_35515_35553[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (18))){
var inst_35431 = (state_35478[(15)]);
var inst_35432 = (state_35478[(17)]);
var inst_35438 = (state_35478[(16)]);
var inst_35455 = cljs.core.empty_QMARK_.call(null,inst_35431);
var inst_35456 = inst_35432.call(null,inst_35438);
var inst_35457 = cljs.core.not.call(null,inst_35456);
var inst_35458 = (inst_35455) && (inst_35457);
var state_35478__$1 = state_35478;
var statearr_35516_35554 = state_35478__$1;
(statearr_35516_35554[(2)] = inst_35458);

(statearr_35516_35554[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35479 === (8))){
var inst_35422 = (state_35478[(7)]);
var state_35478__$1 = state_35478;
var statearr_35517_35555 = state_35478__$1;
(statearr_35517_35555[(2)] = inst_35422);

(statearr_35517_35555[(1)] = (9));


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
});})(c__28151__auto___35525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28089__auto__,c__28151__auto___35525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28090__auto__ = null;
var cljs$core$async$mix_$_state_machine__28090__auto____0 = (function (){
var statearr_35521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35521[(0)] = cljs$core$async$mix_$_state_machine__28090__auto__);

(statearr_35521[(1)] = (1));

return statearr_35521;
});
var cljs$core$async$mix_$_state_machine__28090__auto____1 = (function (state_35478){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_35478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e35522){if((e35522 instanceof Object)){
var ex__28093__auto__ = e35522;
var statearr_35523_35556 = state_35478;
(statearr_35523_35556[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35557 = state_35478;
state_35478 = G__35557;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28090__auto__ = function(state_35478){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28090__auto____1.call(this,state_35478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28090__auto____0;
cljs$core$async$mix_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28090__auto____1;
return cljs$core$async$mix_$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___35525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28153__auto__ = (function (){var statearr_35524 = f__28152__auto__.call(null);
(statearr_35524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___35525);

return statearr_35524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___35525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
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

cljs.core.async.Pub = (function (){var obj35559 = {};
return obj35559;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__24753__auto__ = p;
if(and__24753__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__24753__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25401__auto__ = (((p == null))?null:p);
return (function (){var or__24765__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25401__auto__)]);
if(or__24765__auto__){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__24753__auto__ = p;
if(and__24753__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__24753__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25401__auto__ = (((p == null))?null:p);
return (function (){var or__24765__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25401__auto__)]);
if(or__24765__auto__){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__35561 = arguments.length;
switch (G__35561) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__24753__auto__ = p;
if(and__24753__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__24753__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25401__auto__ = (((p == null))?null:p);
return (function (){var or__24765__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25401__auto__)]);
if(or__24765__auto__){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__24753__auto__ = p;
if(and__24753__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__24753__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25401__auto__ = (((p == null))?null:p);
return (function (){var or__24765__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25401__auto__)]);
if(or__24765__auto__){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__35565 = arguments.length;
switch (G__35565) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24765__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24765__auto__,mults){
return (function (p1__35563_SHARP_){
if(cljs.core.truth_(p1__35563_SHARP_.call(null,topic))){
return p1__35563_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35563_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24765__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t35566 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35566 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35567){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35567 = meta35567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35568,meta35567__$1){
var self__ = this;
var _35568__$1 = this;
return (new cljs.core.async.t35566(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35567__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t35566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35568){
var self__ = this;
var _35568__$1 = this;
return self__.meta35567;
});})(mults,ensure_mult))
;

cljs.core.async.t35566.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t35566.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t35566.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t35566.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t35566.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t35566.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t35566.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t35566.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35567","meta35567",1259356344,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t35566.cljs$lang$type = true;

cljs.core.async.t35566.cljs$lang$ctorStr = "cljs.core.async/t35566";

cljs.core.async.t35566.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.core.async/t35566");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t35566 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t35566(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35567){
return (new cljs.core.async.t35566(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35567));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t35566(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28151__auto___35689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___35689,mults,ensure_mult,p){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___35689,mults,ensure_mult,p){
return (function (state_35640){
var state_val_35641 = (state_35640[(1)]);
if((state_val_35641 === (7))){
var inst_35636 = (state_35640[(2)]);
var state_35640__$1 = state_35640;
var statearr_35642_35690 = state_35640__$1;
(statearr_35642_35690[(2)] = inst_35636);

(statearr_35642_35690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (20))){
var state_35640__$1 = state_35640;
var statearr_35643_35691 = state_35640__$1;
(statearr_35643_35691[(2)] = null);

(statearr_35643_35691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (1))){
var state_35640__$1 = state_35640;
var statearr_35644_35692 = state_35640__$1;
(statearr_35644_35692[(2)] = null);

(statearr_35644_35692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (24))){
var inst_35619 = (state_35640[(7)]);
var inst_35628 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35619);
var state_35640__$1 = state_35640;
var statearr_35645_35693 = state_35640__$1;
(statearr_35645_35693[(2)] = inst_35628);

(statearr_35645_35693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (4))){
var inst_35571 = (state_35640[(8)]);
var inst_35571__$1 = (state_35640[(2)]);
var inst_35572 = (inst_35571__$1 == null);
var state_35640__$1 = (function (){var statearr_35646 = state_35640;
(statearr_35646[(8)] = inst_35571__$1);

return statearr_35646;
})();
if(cljs.core.truth_(inst_35572)){
var statearr_35647_35694 = state_35640__$1;
(statearr_35647_35694[(1)] = (5));

} else {
var statearr_35648_35695 = state_35640__$1;
(statearr_35648_35695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (15))){
var inst_35613 = (state_35640[(2)]);
var state_35640__$1 = state_35640;
var statearr_35649_35696 = state_35640__$1;
(statearr_35649_35696[(2)] = inst_35613);

(statearr_35649_35696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (21))){
var inst_35633 = (state_35640[(2)]);
var state_35640__$1 = (function (){var statearr_35650 = state_35640;
(statearr_35650[(9)] = inst_35633);

return statearr_35650;
})();
var statearr_35651_35697 = state_35640__$1;
(statearr_35651_35697[(2)] = null);

(statearr_35651_35697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (13))){
var inst_35595 = (state_35640[(10)]);
var inst_35597 = cljs.core.chunked_seq_QMARK_.call(null,inst_35595);
var state_35640__$1 = state_35640;
if(inst_35597){
var statearr_35652_35698 = state_35640__$1;
(statearr_35652_35698[(1)] = (16));

} else {
var statearr_35653_35699 = state_35640__$1;
(statearr_35653_35699[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (22))){
var inst_35625 = (state_35640[(2)]);
var state_35640__$1 = state_35640;
if(cljs.core.truth_(inst_35625)){
var statearr_35654_35700 = state_35640__$1;
(statearr_35654_35700[(1)] = (23));

} else {
var statearr_35655_35701 = state_35640__$1;
(statearr_35655_35701[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (6))){
var inst_35571 = (state_35640[(8)]);
var inst_35621 = (state_35640[(11)]);
var inst_35619 = (state_35640[(7)]);
var inst_35619__$1 = topic_fn.call(null,inst_35571);
var inst_35620 = cljs.core.deref.call(null,mults);
var inst_35621__$1 = cljs.core.get.call(null,inst_35620,inst_35619__$1);
var state_35640__$1 = (function (){var statearr_35656 = state_35640;
(statearr_35656[(11)] = inst_35621__$1);

(statearr_35656[(7)] = inst_35619__$1);

return statearr_35656;
})();
if(cljs.core.truth_(inst_35621__$1)){
var statearr_35657_35702 = state_35640__$1;
(statearr_35657_35702[(1)] = (19));

} else {
var statearr_35658_35703 = state_35640__$1;
(statearr_35658_35703[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (25))){
var inst_35630 = (state_35640[(2)]);
var state_35640__$1 = state_35640;
var statearr_35659_35704 = state_35640__$1;
(statearr_35659_35704[(2)] = inst_35630);

(statearr_35659_35704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (17))){
var inst_35595 = (state_35640[(10)]);
var inst_35604 = cljs.core.first.call(null,inst_35595);
var inst_35605 = cljs.core.async.muxch_STAR_.call(null,inst_35604);
var inst_35606 = cljs.core.async.close_BANG_.call(null,inst_35605);
var inst_35607 = cljs.core.next.call(null,inst_35595);
var inst_35581 = inst_35607;
var inst_35582 = null;
var inst_35583 = (0);
var inst_35584 = (0);
var state_35640__$1 = (function (){var statearr_35660 = state_35640;
(statearr_35660[(12)] = inst_35581);

(statearr_35660[(13)] = inst_35582);

(statearr_35660[(14)] = inst_35583);

(statearr_35660[(15)] = inst_35584);

(statearr_35660[(16)] = inst_35606);

return statearr_35660;
})();
var statearr_35661_35705 = state_35640__$1;
(statearr_35661_35705[(2)] = null);

(statearr_35661_35705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (3))){
var inst_35638 = (state_35640[(2)]);
var state_35640__$1 = state_35640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35640__$1,inst_35638);
} else {
if((state_val_35641 === (12))){
var inst_35615 = (state_35640[(2)]);
var state_35640__$1 = state_35640;
var statearr_35662_35706 = state_35640__$1;
(statearr_35662_35706[(2)] = inst_35615);

(statearr_35662_35706[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (2))){
var state_35640__$1 = state_35640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35640__$1,(4),ch);
} else {
if((state_val_35641 === (23))){
var state_35640__$1 = state_35640;
var statearr_35663_35707 = state_35640__$1;
(statearr_35663_35707[(2)] = null);

(statearr_35663_35707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (19))){
var inst_35571 = (state_35640[(8)]);
var inst_35621 = (state_35640[(11)]);
var inst_35623 = cljs.core.async.muxch_STAR_.call(null,inst_35621);
var state_35640__$1 = state_35640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35640__$1,(22),inst_35623,inst_35571);
} else {
if((state_val_35641 === (11))){
var inst_35581 = (state_35640[(12)]);
var inst_35595 = (state_35640[(10)]);
var inst_35595__$1 = cljs.core.seq.call(null,inst_35581);
var state_35640__$1 = (function (){var statearr_35664 = state_35640;
(statearr_35664[(10)] = inst_35595__$1);

return statearr_35664;
})();
if(inst_35595__$1){
var statearr_35665_35708 = state_35640__$1;
(statearr_35665_35708[(1)] = (13));

} else {
var statearr_35666_35709 = state_35640__$1;
(statearr_35666_35709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (9))){
var inst_35617 = (state_35640[(2)]);
var state_35640__$1 = state_35640;
var statearr_35667_35710 = state_35640__$1;
(statearr_35667_35710[(2)] = inst_35617);

(statearr_35667_35710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (5))){
var inst_35578 = cljs.core.deref.call(null,mults);
var inst_35579 = cljs.core.vals.call(null,inst_35578);
var inst_35580 = cljs.core.seq.call(null,inst_35579);
var inst_35581 = inst_35580;
var inst_35582 = null;
var inst_35583 = (0);
var inst_35584 = (0);
var state_35640__$1 = (function (){var statearr_35668 = state_35640;
(statearr_35668[(12)] = inst_35581);

(statearr_35668[(13)] = inst_35582);

(statearr_35668[(14)] = inst_35583);

(statearr_35668[(15)] = inst_35584);

return statearr_35668;
})();
var statearr_35669_35711 = state_35640__$1;
(statearr_35669_35711[(2)] = null);

(statearr_35669_35711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (14))){
var state_35640__$1 = state_35640;
var statearr_35673_35712 = state_35640__$1;
(statearr_35673_35712[(2)] = null);

(statearr_35673_35712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (16))){
var inst_35595 = (state_35640[(10)]);
var inst_35599 = cljs.core.chunk_first.call(null,inst_35595);
var inst_35600 = cljs.core.chunk_rest.call(null,inst_35595);
var inst_35601 = cljs.core.count.call(null,inst_35599);
var inst_35581 = inst_35600;
var inst_35582 = inst_35599;
var inst_35583 = inst_35601;
var inst_35584 = (0);
var state_35640__$1 = (function (){var statearr_35674 = state_35640;
(statearr_35674[(12)] = inst_35581);

(statearr_35674[(13)] = inst_35582);

(statearr_35674[(14)] = inst_35583);

(statearr_35674[(15)] = inst_35584);

return statearr_35674;
})();
var statearr_35675_35713 = state_35640__$1;
(statearr_35675_35713[(2)] = null);

(statearr_35675_35713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (10))){
var inst_35581 = (state_35640[(12)]);
var inst_35582 = (state_35640[(13)]);
var inst_35583 = (state_35640[(14)]);
var inst_35584 = (state_35640[(15)]);
var inst_35589 = cljs.core._nth.call(null,inst_35582,inst_35584);
var inst_35590 = cljs.core.async.muxch_STAR_.call(null,inst_35589);
var inst_35591 = cljs.core.async.close_BANG_.call(null,inst_35590);
var inst_35592 = (inst_35584 + (1));
var tmp35670 = inst_35581;
var tmp35671 = inst_35582;
var tmp35672 = inst_35583;
var inst_35581__$1 = tmp35670;
var inst_35582__$1 = tmp35671;
var inst_35583__$1 = tmp35672;
var inst_35584__$1 = inst_35592;
var state_35640__$1 = (function (){var statearr_35676 = state_35640;
(statearr_35676[(12)] = inst_35581__$1);

(statearr_35676[(13)] = inst_35582__$1);

(statearr_35676[(14)] = inst_35583__$1);

(statearr_35676[(15)] = inst_35584__$1);

(statearr_35676[(17)] = inst_35591);

return statearr_35676;
})();
var statearr_35677_35714 = state_35640__$1;
(statearr_35677_35714[(2)] = null);

(statearr_35677_35714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (18))){
var inst_35610 = (state_35640[(2)]);
var state_35640__$1 = state_35640;
var statearr_35678_35715 = state_35640__$1;
(statearr_35678_35715[(2)] = inst_35610);

(statearr_35678_35715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35641 === (8))){
var inst_35583 = (state_35640[(14)]);
var inst_35584 = (state_35640[(15)]);
var inst_35586 = (inst_35584 < inst_35583);
var inst_35587 = inst_35586;
var state_35640__$1 = state_35640;
if(cljs.core.truth_(inst_35587)){
var statearr_35679_35716 = state_35640__$1;
(statearr_35679_35716[(1)] = (10));

} else {
var statearr_35680_35717 = state_35640__$1;
(statearr_35680_35717[(1)] = (11));

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
});})(c__28151__auto___35689,mults,ensure_mult,p))
;
return ((function (switch__28089__auto__,c__28151__auto___35689,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28090__auto__ = null;
var cljs$core$async$state_machine__28090__auto____0 = (function (){
var statearr_35684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35684[(0)] = cljs$core$async$state_machine__28090__auto__);

(statearr_35684[(1)] = (1));

return statearr_35684;
});
var cljs$core$async$state_machine__28090__auto____1 = (function (state_35640){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_35640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e35685){if((e35685 instanceof Object)){
var ex__28093__auto__ = e35685;
var statearr_35686_35718 = state_35640;
(statearr_35686_35718[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35719 = state_35640;
state_35640 = G__35719;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$state_machine__28090__auto__ = function(state_35640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28090__auto____1.call(this,state_35640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28090__auto____0;
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28090__auto____1;
return cljs$core$async$state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___35689,mults,ensure_mult,p))
})();
var state__28153__auto__ = (function (){var statearr_35687 = f__28152__auto__.call(null);
(statearr_35687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___35689);

return statearr_35687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___35689,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__35721 = arguments.length;
switch (G__35721) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__35724 = arguments.length;
switch (G__35724) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__35727 = arguments.length;
switch (G__35727) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28151__auto___35797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___35797,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___35797,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35766){
var state_val_35767 = (state_35766[(1)]);
if((state_val_35767 === (7))){
var state_35766__$1 = state_35766;
var statearr_35768_35798 = state_35766__$1;
(statearr_35768_35798[(2)] = null);

(statearr_35768_35798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (1))){
var state_35766__$1 = state_35766;
var statearr_35769_35799 = state_35766__$1;
(statearr_35769_35799[(2)] = null);

(statearr_35769_35799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (4))){
var inst_35730 = (state_35766[(7)]);
var inst_35732 = (inst_35730 < cnt);
var state_35766__$1 = state_35766;
if(cljs.core.truth_(inst_35732)){
var statearr_35770_35800 = state_35766__$1;
(statearr_35770_35800[(1)] = (6));

} else {
var statearr_35771_35801 = state_35766__$1;
(statearr_35771_35801[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (15))){
var inst_35762 = (state_35766[(2)]);
var state_35766__$1 = state_35766;
var statearr_35772_35802 = state_35766__$1;
(statearr_35772_35802[(2)] = inst_35762);

(statearr_35772_35802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (13))){
var inst_35755 = cljs.core.async.close_BANG_.call(null,out);
var state_35766__$1 = state_35766;
var statearr_35773_35803 = state_35766__$1;
(statearr_35773_35803[(2)] = inst_35755);

(statearr_35773_35803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (6))){
var state_35766__$1 = state_35766;
var statearr_35774_35804 = state_35766__$1;
(statearr_35774_35804[(2)] = null);

(statearr_35774_35804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (3))){
var inst_35764 = (state_35766[(2)]);
var state_35766__$1 = state_35766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35766__$1,inst_35764);
} else {
if((state_val_35767 === (12))){
var inst_35752 = (state_35766[(8)]);
var inst_35752__$1 = (state_35766[(2)]);
var inst_35753 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35752__$1);
var state_35766__$1 = (function (){var statearr_35775 = state_35766;
(statearr_35775[(8)] = inst_35752__$1);

return statearr_35775;
})();
if(cljs.core.truth_(inst_35753)){
var statearr_35776_35805 = state_35766__$1;
(statearr_35776_35805[(1)] = (13));

} else {
var statearr_35777_35806 = state_35766__$1;
(statearr_35777_35806[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (2))){
var inst_35729 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35730 = (0);
var state_35766__$1 = (function (){var statearr_35778 = state_35766;
(statearr_35778[(7)] = inst_35730);

(statearr_35778[(9)] = inst_35729);

return statearr_35778;
})();
var statearr_35779_35807 = state_35766__$1;
(statearr_35779_35807[(2)] = null);

(statearr_35779_35807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (11))){
var inst_35730 = (state_35766[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35766,(10),Object,null,(9));
var inst_35739 = chs__$1.call(null,inst_35730);
var inst_35740 = done.call(null,inst_35730);
var inst_35741 = cljs.core.async.take_BANG_.call(null,inst_35739,inst_35740);
var state_35766__$1 = state_35766;
var statearr_35780_35808 = state_35766__$1;
(statearr_35780_35808[(2)] = inst_35741);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35766__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (9))){
var inst_35730 = (state_35766[(7)]);
var inst_35743 = (state_35766[(2)]);
var inst_35744 = (inst_35730 + (1));
var inst_35730__$1 = inst_35744;
var state_35766__$1 = (function (){var statearr_35781 = state_35766;
(statearr_35781[(7)] = inst_35730__$1);

(statearr_35781[(10)] = inst_35743);

return statearr_35781;
})();
var statearr_35782_35809 = state_35766__$1;
(statearr_35782_35809[(2)] = null);

(statearr_35782_35809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (5))){
var inst_35750 = (state_35766[(2)]);
var state_35766__$1 = (function (){var statearr_35783 = state_35766;
(statearr_35783[(11)] = inst_35750);

return statearr_35783;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35766__$1,(12),dchan);
} else {
if((state_val_35767 === (14))){
var inst_35752 = (state_35766[(8)]);
var inst_35757 = cljs.core.apply.call(null,f,inst_35752);
var state_35766__$1 = state_35766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35766__$1,(16),out,inst_35757);
} else {
if((state_val_35767 === (16))){
var inst_35759 = (state_35766[(2)]);
var state_35766__$1 = (function (){var statearr_35784 = state_35766;
(statearr_35784[(12)] = inst_35759);

return statearr_35784;
})();
var statearr_35785_35810 = state_35766__$1;
(statearr_35785_35810[(2)] = null);

(statearr_35785_35810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (10))){
var inst_35734 = (state_35766[(2)]);
var inst_35735 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35766__$1 = (function (){var statearr_35786 = state_35766;
(statearr_35786[(13)] = inst_35734);

return statearr_35786;
})();
var statearr_35787_35811 = state_35766__$1;
(statearr_35787_35811[(2)] = inst_35735);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35766__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (8))){
var inst_35748 = (state_35766[(2)]);
var state_35766__$1 = state_35766;
var statearr_35788_35812 = state_35766__$1;
(statearr_35788_35812[(2)] = inst_35748);

(statearr_35788_35812[(1)] = (5));


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
});})(c__28151__auto___35797,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28089__auto__,c__28151__auto___35797,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28090__auto__ = null;
var cljs$core$async$state_machine__28090__auto____0 = (function (){
var statearr_35792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35792[(0)] = cljs$core$async$state_machine__28090__auto__);

(statearr_35792[(1)] = (1));

return statearr_35792;
});
var cljs$core$async$state_machine__28090__auto____1 = (function (state_35766){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_35766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e35793){if((e35793 instanceof Object)){
var ex__28093__auto__ = e35793;
var statearr_35794_35813 = state_35766;
(statearr_35794_35813[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35814 = state_35766;
state_35766 = G__35814;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$state_machine__28090__auto__ = function(state_35766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28090__auto____1.call(this,state_35766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28090__auto____0;
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28090__auto____1;
return cljs$core$async$state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___35797,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28153__auto__ = (function (){var statearr_35795 = f__28152__auto__.call(null);
(statearr_35795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___35797);

return statearr_35795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___35797,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__35817 = arguments.length;
switch (G__35817) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28151__auto___35872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___35872,out){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___35872,out){
return (function (state_35847){
var state_val_35848 = (state_35847[(1)]);
if((state_val_35848 === (7))){
var inst_35826 = (state_35847[(7)]);
var inst_35827 = (state_35847[(8)]);
var inst_35826__$1 = (state_35847[(2)]);
var inst_35827__$1 = cljs.core.nth.call(null,inst_35826__$1,(0),null);
var inst_35828 = cljs.core.nth.call(null,inst_35826__$1,(1),null);
var inst_35829 = (inst_35827__$1 == null);
var state_35847__$1 = (function (){var statearr_35849 = state_35847;
(statearr_35849[(7)] = inst_35826__$1);

(statearr_35849[(9)] = inst_35828);

(statearr_35849[(8)] = inst_35827__$1);

return statearr_35849;
})();
if(cljs.core.truth_(inst_35829)){
var statearr_35850_35873 = state_35847__$1;
(statearr_35850_35873[(1)] = (8));

} else {
var statearr_35851_35874 = state_35847__$1;
(statearr_35851_35874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (1))){
var inst_35818 = cljs.core.vec.call(null,chs);
var inst_35819 = inst_35818;
var state_35847__$1 = (function (){var statearr_35852 = state_35847;
(statearr_35852[(10)] = inst_35819);

return statearr_35852;
})();
var statearr_35853_35875 = state_35847__$1;
(statearr_35853_35875[(2)] = null);

(statearr_35853_35875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (4))){
var inst_35819 = (state_35847[(10)]);
var state_35847__$1 = state_35847;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35847__$1,(7),inst_35819);
} else {
if((state_val_35848 === (6))){
var inst_35843 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35854_35876 = state_35847__$1;
(statearr_35854_35876[(2)] = inst_35843);

(statearr_35854_35876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (3))){
var inst_35845 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35847__$1,inst_35845);
} else {
if((state_val_35848 === (2))){
var inst_35819 = (state_35847[(10)]);
var inst_35821 = cljs.core.count.call(null,inst_35819);
var inst_35822 = (inst_35821 > (0));
var state_35847__$1 = state_35847;
if(cljs.core.truth_(inst_35822)){
var statearr_35856_35877 = state_35847__$1;
(statearr_35856_35877[(1)] = (4));

} else {
var statearr_35857_35878 = state_35847__$1;
(statearr_35857_35878[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (11))){
var inst_35819 = (state_35847[(10)]);
var inst_35836 = (state_35847[(2)]);
var tmp35855 = inst_35819;
var inst_35819__$1 = tmp35855;
var state_35847__$1 = (function (){var statearr_35858 = state_35847;
(statearr_35858[(10)] = inst_35819__$1);

(statearr_35858[(11)] = inst_35836);

return statearr_35858;
})();
var statearr_35859_35879 = state_35847__$1;
(statearr_35859_35879[(2)] = null);

(statearr_35859_35879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (9))){
var inst_35827 = (state_35847[(8)]);
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35847__$1,(11),out,inst_35827);
} else {
if((state_val_35848 === (5))){
var inst_35841 = cljs.core.async.close_BANG_.call(null,out);
var state_35847__$1 = state_35847;
var statearr_35860_35880 = state_35847__$1;
(statearr_35860_35880[(2)] = inst_35841);

(statearr_35860_35880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (10))){
var inst_35839 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35861_35881 = state_35847__$1;
(statearr_35861_35881[(2)] = inst_35839);

(statearr_35861_35881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (8))){
var inst_35819 = (state_35847[(10)]);
var inst_35826 = (state_35847[(7)]);
var inst_35828 = (state_35847[(9)]);
var inst_35827 = (state_35847[(8)]);
var inst_35831 = (function (){var cs = inst_35819;
var vec__35824 = inst_35826;
var v = inst_35827;
var c = inst_35828;
return ((function (cs,vec__35824,v,c,inst_35819,inst_35826,inst_35828,inst_35827,state_val_35848,c__28151__auto___35872,out){
return (function (p1__35815_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35815_SHARP_);
});
;})(cs,vec__35824,v,c,inst_35819,inst_35826,inst_35828,inst_35827,state_val_35848,c__28151__auto___35872,out))
})();
var inst_35832 = cljs.core.filterv.call(null,inst_35831,inst_35819);
var inst_35819__$1 = inst_35832;
var state_35847__$1 = (function (){var statearr_35862 = state_35847;
(statearr_35862[(10)] = inst_35819__$1);

return statearr_35862;
})();
var statearr_35863_35882 = state_35847__$1;
(statearr_35863_35882[(2)] = null);

(statearr_35863_35882[(1)] = (2));


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
});})(c__28151__auto___35872,out))
;
return ((function (switch__28089__auto__,c__28151__auto___35872,out){
return (function() {
var cljs$core$async$state_machine__28090__auto__ = null;
var cljs$core$async$state_machine__28090__auto____0 = (function (){
var statearr_35867 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35867[(0)] = cljs$core$async$state_machine__28090__auto__);

(statearr_35867[(1)] = (1));

return statearr_35867;
});
var cljs$core$async$state_machine__28090__auto____1 = (function (state_35847){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_35847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e35868){if((e35868 instanceof Object)){
var ex__28093__auto__ = e35868;
var statearr_35869_35883 = state_35847;
(statearr_35869_35883[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35884 = state_35847;
state_35847 = G__35884;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$state_machine__28090__auto__ = function(state_35847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28090__auto____1.call(this,state_35847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28090__auto____0;
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28090__auto____1;
return cljs$core$async$state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___35872,out))
})();
var state__28153__auto__ = (function (){var statearr_35870 = f__28152__auto__.call(null);
(statearr_35870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___35872);

return statearr_35870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___35872,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__35886 = arguments.length;
switch (G__35886) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28151__auto___35934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___35934,out){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___35934,out){
return (function (state_35910){
var state_val_35911 = (state_35910[(1)]);
if((state_val_35911 === (7))){
var inst_35892 = (state_35910[(7)]);
var inst_35892__$1 = (state_35910[(2)]);
var inst_35893 = (inst_35892__$1 == null);
var inst_35894 = cljs.core.not.call(null,inst_35893);
var state_35910__$1 = (function (){var statearr_35912 = state_35910;
(statearr_35912[(7)] = inst_35892__$1);

return statearr_35912;
})();
if(inst_35894){
var statearr_35913_35935 = state_35910__$1;
(statearr_35913_35935[(1)] = (8));

} else {
var statearr_35914_35936 = state_35910__$1;
(statearr_35914_35936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (1))){
var inst_35887 = (0);
var state_35910__$1 = (function (){var statearr_35915 = state_35910;
(statearr_35915[(8)] = inst_35887);

return statearr_35915;
})();
var statearr_35916_35937 = state_35910__$1;
(statearr_35916_35937[(2)] = null);

(statearr_35916_35937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (4))){
var state_35910__$1 = state_35910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35910__$1,(7),ch);
} else {
if((state_val_35911 === (6))){
var inst_35905 = (state_35910[(2)]);
var state_35910__$1 = state_35910;
var statearr_35917_35938 = state_35910__$1;
(statearr_35917_35938[(2)] = inst_35905);

(statearr_35917_35938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (3))){
var inst_35907 = (state_35910[(2)]);
var inst_35908 = cljs.core.async.close_BANG_.call(null,out);
var state_35910__$1 = (function (){var statearr_35918 = state_35910;
(statearr_35918[(9)] = inst_35907);

return statearr_35918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35910__$1,inst_35908);
} else {
if((state_val_35911 === (2))){
var inst_35887 = (state_35910[(8)]);
var inst_35889 = (inst_35887 < n);
var state_35910__$1 = state_35910;
if(cljs.core.truth_(inst_35889)){
var statearr_35919_35939 = state_35910__$1;
(statearr_35919_35939[(1)] = (4));

} else {
var statearr_35920_35940 = state_35910__$1;
(statearr_35920_35940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (11))){
var inst_35887 = (state_35910[(8)]);
var inst_35897 = (state_35910[(2)]);
var inst_35898 = (inst_35887 + (1));
var inst_35887__$1 = inst_35898;
var state_35910__$1 = (function (){var statearr_35921 = state_35910;
(statearr_35921[(8)] = inst_35887__$1);

(statearr_35921[(10)] = inst_35897);

return statearr_35921;
})();
var statearr_35922_35941 = state_35910__$1;
(statearr_35922_35941[(2)] = null);

(statearr_35922_35941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (9))){
var state_35910__$1 = state_35910;
var statearr_35923_35942 = state_35910__$1;
(statearr_35923_35942[(2)] = null);

(statearr_35923_35942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (5))){
var state_35910__$1 = state_35910;
var statearr_35924_35943 = state_35910__$1;
(statearr_35924_35943[(2)] = null);

(statearr_35924_35943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (10))){
var inst_35902 = (state_35910[(2)]);
var state_35910__$1 = state_35910;
var statearr_35925_35944 = state_35910__$1;
(statearr_35925_35944[(2)] = inst_35902);

(statearr_35925_35944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35911 === (8))){
var inst_35892 = (state_35910[(7)]);
var state_35910__$1 = state_35910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35910__$1,(11),out,inst_35892);
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
});})(c__28151__auto___35934,out))
;
return ((function (switch__28089__auto__,c__28151__auto___35934,out){
return (function() {
var cljs$core$async$state_machine__28090__auto__ = null;
var cljs$core$async$state_machine__28090__auto____0 = (function (){
var statearr_35929 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35929[(0)] = cljs$core$async$state_machine__28090__auto__);

(statearr_35929[(1)] = (1));

return statearr_35929;
});
var cljs$core$async$state_machine__28090__auto____1 = (function (state_35910){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_35910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e35930){if((e35930 instanceof Object)){
var ex__28093__auto__ = e35930;
var statearr_35931_35945 = state_35910;
(statearr_35931_35945[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35946 = state_35910;
state_35910 = G__35946;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$state_machine__28090__auto__ = function(state_35910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28090__auto____1.call(this,state_35910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28090__auto____0;
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28090__auto____1;
return cljs$core$async$state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___35934,out))
})();
var state__28153__auto__ = (function (){var statearr_35932 = f__28152__auto__.call(null);
(statearr_35932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___35934);

return statearr_35932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___35934,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t35954 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35954 = (function (map_LT_,f,ch,meta35955){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35955 = meta35955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35956,meta35955__$1){
var self__ = this;
var _35956__$1 = this;
return (new cljs.core.async.t35954(self__.map_LT_,self__.f,self__.ch,meta35955__$1));
});

cljs.core.async.t35954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35956){
var self__ = this;
var _35956__$1 = this;
return self__.meta35955;
});

cljs.core.async.t35954.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35954.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35954.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t35954.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35954.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t35957 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35957 = (function (map_LT_,f,ch,meta35955,_,fn1,meta35958){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35955 = meta35955;
this._ = _;
this.fn1 = fn1;
this.meta35958 = meta35958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35959,meta35958__$1){
var self__ = this;
var _35959__$1 = this;
return (new cljs.core.async.t35957(self__.map_LT_,self__.f,self__.ch,self__.meta35955,self__._,self__.fn1,meta35958__$1));
});})(___$1))
;

cljs.core.async.t35957.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35959){
var self__ = this;
var _35959__$1 = this;
return self__.meta35958;
});})(___$1))
;

cljs.core.async.t35957.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t35957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35947_SHARP_){
return f1.call(null,(((p1__35947_SHARP_ == null))?null:self__.f.call(null,p1__35947_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t35957.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35955","meta35955",984139158,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35958","meta35958",-1731721344,null)], null);
});})(___$1))
;

cljs.core.async.t35957.cljs$lang$type = true;

cljs.core.async.t35957.cljs$lang$ctorStr = "cljs.core.async/t35957";

cljs.core.async.t35957.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.core.async/t35957");
});})(___$1))
;

cljs.core.async.__GT_t35957 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t35957(map_LT___$1,f__$1,ch__$1,meta35955__$1,___$2,fn1__$1,meta35958){
return (new cljs.core.async.t35957(map_LT___$1,f__$1,ch__$1,meta35955__$1,___$2,fn1__$1,meta35958));
});})(___$1))
;

}

return (new cljs.core.async.t35957(self__.map_LT_,self__.f,self__.ch,self__.meta35955,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24753__auto__ = ret;
if(cljs.core.truth_(and__24753__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24753__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t35954.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35954.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t35954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35955","meta35955",984139158,null)], null);
});

cljs.core.async.t35954.cljs$lang$type = true;

cljs.core.async.t35954.cljs$lang$ctorStr = "cljs.core.async/t35954";

cljs.core.async.t35954.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.core.async/t35954");
});

cljs.core.async.__GT_t35954 = (function cljs$core$async$map_LT__$___GT_t35954(map_LT___$1,f__$1,ch__$1,meta35955){
return (new cljs.core.async.t35954(map_LT___$1,f__$1,ch__$1,meta35955));
});

}

return (new cljs.core.async.t35954(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t35963 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35963 = (function (map_GT_,f,ch,meta35964){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta35964 = meta35964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35965,meta35964__$1){
var self__ = this;
var _35965__$1 = this;
return (new cljs.core.async.t35963(self__.map_GT_,self__.f,self__.ch,meta35964__$1));
});

cljs.core.async.t35963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35965){
var self__ = this;
var _35965__$1 = this;
return self__.meta35964;
});

cljs.core.async.t35963.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35963.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35963.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35963.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t35963.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35963.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t35963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35964","meta35964",-2055903425,null)], null);
});

cljs.core.async.t35963.cljs$lang$type = true;

cljs.core.async.t35963.cljs$lang$ctorStr = "cljs.core.async/t35963";

cljs.core.async.t35963.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.core.async/t35963");
});

cljs.core.async.__GT_t35963 = (function cljs$core$async$map_GT__$___GT_t35963(map_GT___$1,f__$1,ch__$1,meta35964){
return (new cljs.core.async.t35963(map_GT___$1,f__$1,ch__$1,meta35964));
});

}

return (new cljs.core.async.t35963(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t35969 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35969 = (function (filter_GT_,p,ch,meta35970){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta35970 = meta35970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35971,meta35970__$1){
var self__ = this;
var _35971__$1 = this;
return (new cljs.core.async.t35969(self__.filter_GT_,self__.p,self__.ch,meta35970__$1));
});

cljs.core.async.t35969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35971){
var self__ = this;
var _35971__$1 = this;
return self__.meta35970;
});

cljs.core.async.t35969.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35969.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t35969.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t35969.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t35969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35970","meta35970",2089893995,null)], null);
});

cljs.core.async.t35969.cljs$lang$type = true;

cljs.core.async.t35969.cljs$lang$ctorStr = "cljs.core.async/t35969";

cljs.core.async.t35969.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.core.async/t35969");
});

cljs.core.async.__GT_t35969 = (function cljs$core$async$filter_GT__$___GT_t35969(filter_GT___$1,p__$1,ch__$1,meta35970){
return (new cljs.core.async.t35969(filter_GT___$1,p__$1,ch__$1,meta35970));
});

}

return (new cljs.core.async.t35969(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__35973 = arguments.length;
switch (G__35973) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28151__auto___36016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___36016,out){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___36016,out){
return (function (state_35994){
var state_val_35995 = (state_35994[(1)]);
if((state_val_35995 === (7))){
var inst_35990 = (state_35994[(2)]);
var state_35994__$1 = state_35994;
var statearr_35996_36017 = state_35994__$1;
(statearr_35996_36017[(2)] = inst_35990);

(statearr_35996_36017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (1))){
var state_35994__$1 = state_35994;
var statearr_35997_36018 = state_35994__$1;
(statearr_35997_36018[(2)] = null);

(statearr_35997_36018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (4))){
var inst_35976 = (state_35994[(7)]);
var inst_35976__$1 = (state_35994[(2)]);
var inst_35977 = (inst_35976__$1 == null);
var state_35994__$1 = (function (){var statearr_35998 = state_35994;
(statearr_35998[(7)] = inst_35976__$1);

return statearr_35998;
})();
if(cljs.core.truth_(inst_35977)){
var statearr_35999_36019 = state_35994__$1;
(statearr_35999_36019[(1)] = (5));

} else {
var statearr_36000_36020 = state_35994__$1;
(statearr_36000_36020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (6))){
var inst_35976 = (state_35994[(7)]);
var inst_35981 = p.call(null,inst_35976);
var state_35994__$1 = state_35994;
if(cljs.core.truth_(inst_35981)){
var statearr_36001_36021 = state_35994__$1;
(statearr_36001_36021[(1)] = (8));

} else {
var statearr_36002_36022 = state_35994__$1;
(statearr_36002_36022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (3))){
var inst_35992 = (state_35994[(2)]);
var state_35994__$1 = state_35994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35994__$1,inst_35992);
} else {
if((state_val_35995 === (2))){
var state_35994__$1 = state_35994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35994__$1,(4),ch);
} else {
if((state_val_35995 === (11))){
var inst_35984 = (state_35994[(2)]);
var state_35994__$1 = state_35994;
var statearr_36003_36023 = state_35994__$1;
(statearr_36003_36023[(2)] = inst_35984);

(statearr_36003_36023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (9))){
var state_35994__$1 = state_35994;
var statearr_36004_36024 = state_35994__$1;
(statearr_36004_36024[(2)] = null);

(statearr_36004_36024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (5))){
var inst_35979 = cljs.core.async.close_BANG_.call(null,out);
var state_35994__$1 = state_35994;
var statearr_36005_36025 = state_35994__$1;
(statearr_36005_36025[(2)] = inst_35979);

(statearr_36005_36025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (10))){
var inst_35987 = (state_35994[(2)]);
var state_35994__$1 = (function (){var statearr_36006 = state_35994;
(statearr_36006[(8)] = inst_35987);

return statearr_36006;
})();
var statearr_36007_36026 = state_35994__$1;
(statearr_36007_36026[(2)] = null);

(statearr_36007_36026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35995 === (8))){
var inst_35976 = (state_35994[(7)]);
var state_35994__$1 = state_35994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35994__$1,(11),out,inst_35976);
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
});})(c__28151__auto___36016,out))
;
return ((function (switch__28089__auto__,c__28151__auto___36016,out){
return (function() {
var cljs$core$async$state_machine__28090__auto__ = null;
var cljs$core$async$state_machine__28090__auto____0 = (function (){
var statearr_36011 = [null,null,null,null,null,null,null,null,null];
(statearr_36011[(0)] = cljs$core$async$state_machine__28090__auto__);

(statearr_36011[(1)] = (1));

return statearr_36011;
});
var cljs$core$async$state_machine__28090__auto____1 = (function (state_35994){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_35994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e36012){if((e36012 instanceof Object)){
var ex__28093__auto__ = e36012;
var statearr_36013_36027 = state_35994;
(statearr_36013_36027[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36028 = state_35994;
state_35994 = G__36028;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$state_machine__28090__auto__ = function(state_35994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28090__auto____1.call(this,state_35994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28090__auto____0;
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28090__auto____1;
return cljs$core$async$state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___36016,out))
})();
var state__28153__auto__ = (function (){var statearr_36014 = f__28152__auto__.call(null);
(statearr_36014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___36016);

return statearr_36014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___36016,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__36030 = arguments.length;
switch (G__36030) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto__){
return (function (state_36197){
var state_val_36198 = (state_36197[(1)]);
if((state_val_36198 === (7))){
var inst_36193 = (state_36197[(2)]);
var state_36197__$1 = state_36197;
var statearr_36199_36240 = state_36197__$1;
(statearr_36199_36240[(2)] = inst_36193);

(statearr_36199_36240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (20))){
var inst_36163 = (state_36197[(7)]);
var inst_36174 = (state_36197[(2)]);
var inst_36175 = cljs.core.next.call(null,inst_36163);
var inst_36149 = inst_36175;
var inst_36150 = null;
var inst_36151 = (0);
var inst_36152 = (0);
var state_36197__$1 = (function (){var statearr_36200 = state_36197;
(statearr_36200[(8)] = inst_36152);

(statearr_36200[(9)] = inst_36150);

(statearr_36200[(10)] = inst_36174);

(statearr_36200[(11)] = inst_36149);

(statearr_36200[(12)] = inst_36151);

return statearr_36200;
})();
var statearr_36201_36241 = state_36197__$1;
(statearr_36201_36241[(2)] = null);

(statearr_36201_36241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (1))){
var state_36197__$1 = state_36197;
var statearr_36202_36242 = state_36197__$1;
(statearr_36202_36242[(2)] = null);

(statearr_36202_36242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (4))){
var inst_36138 = (state_36197[(13)]);
var inst_36138__$1 = (state_36197[(2)]);
var inst_36139 = (inst_36138__$1 == null);
var state_36197__$1 = (function (){var statearr_36203 = state_36197;
(statearr_36203[(13)] = inst_36138__$1);

return statearr_36203;
})();
if(cljs.core.truth_(inst_36139)){
var statearr_36204_36243 = state_36197__$1;
(statearr_36204_36243[(1)] = (5));

} else {
var statearr_36205_36244 = state_36197__$1;
(statearr_36205_36244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (15))){
var state_36197__$1 = state_36197;
var statearr_36209_36245 = state_36197__$1;
(statearr_36209_36245[(2)] = null);

(statearr_36209_36245[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (21))){
var state_36197__$1 = state_36197;
var statearr_36210_36246 = state_36197__$1;
(statearr_36210_36246[(2)] = null);

(statearr_36210_36246[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (13))){
var inst_36152 = (state_36197[(8)]);
var inst_36150 = (state_36197[(9)]);
var inst_36149 = (state_36197[(11)]);
var inst_36151 = (state_36197[(12)]);
var inst_36159 = (state_36197[(2)]);
var inst_36160 = (inst_36152 + (1));
var tmp36206 = inst_36150;
var tmp36207 = inst_36149;
var tmp36208 = inst_36151;
var inst_36149__$1 = tmp36207;
var inst_36150__$1 = tmp36206;
var inst_36151__$1 = tmp36208;
var inst_36152__$1 = inst_36160;
var state_36197__$1 = (function (){var statearr_36211 = state_36197;
(statearr_36211[(8)] = inst_36152__$1);

(statearr_36211[(9)] = inst_36150__$1);

(statearr_36211[(14)] = inst_36159);

(statearr_36211[(11)] = inst_36149__$1);

(statearr_36211[(12)] = inst_36151__$1);

return statearr_36211;
})();
var statearr_36212_36247 = state_36197__$1;
(statearr_36212_36247[(2)] = null);

(statearr_36212_36247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (22))){
var state_36197__$1 = state_36197;
var statearr_36213_36248 = state_36197__$1;
(statearr_36213_36248[(2)] = null);

(statearr_36213_36248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (6))){
var inst_36138 = (state_36197[(13)]);
var inst_36147 = f.call(null,inst_36138);
var inst_36148 = cljs.core.seq.call(null,inst_36147);
var inst_36149 = inst_36148;
var inst_36150 = null;
var inst_36151 = (0);
var inst_36152 = (0);
var state_36197__$1 = (function (){var statearr_36214 = state_36197;
(statearr_36214[(8)] = inst_36152);

(statearr_36214[(9)] = inst_36150);

(statearr_36214[(11)] = inst_36149);

(statearr_36214[(12)] = inst_36151);

return statearr_36214;
})();
var statearr_36215_36249 = state_36197__$1;
(statearr_36215_36249[(2)] = null);

(statearr_36215_36249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (17))){
var inst_36163 = (state_36197[(7)]);
var inst_36167 = cljs.core.chunk_first.call(null,inst_36163);
var inst_36168 = cljs.core.chunk_rest.call(null,inst_36163);
var inst_36169 = cljs.core.count.call(null,inst_36167);
var inst_36149 = inst_36168;
var inst_36150 = inst_36167;
var inst_36151 = inst_36169;
var inst_36152 = (0);
var state_36197__$1 = (function (){var statearr_36216 = state_36197;
(statearr_36216[(8)] = inst_36152);

(statearr_36216[(9)] = inst_36150);

(statearr_36216[(11)] = inst_36149);

(statearr_36216[(12)] = inst_36151);

return statearr_36216;
})();
var statearr_36217_36250 = state_36197__$1;
(statearr_36217_36250[(2)] = null);

(statearr_36217_36250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (3))){
var inst_36195 = (state_36197[(2)]);
var state_36197__$1 = state_36197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36197__$1,inst_36195);
} else {
if((state_val_36198 === (12))){
var inst_36183 = (state_36197[(2)]);
var state_36197__$1 = state_36197;
var statearr_36218_36251 = state_36197__$1;
(statearr_36218_36251[(2)] = inst_36183);

(statearr_36218_36251[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (2))){
var state_36197__$1 = state_36197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36197__$1,(4),in$);
} else {
if((state_val_36198 === (23))){
var inst_36191 = (state_36197[(2)]);
var state_36197__$1 = state_36197;
var statearr_36219_36252 = state_36197__$1;
(statearr_36219_36252[(2)] = inst_36191);

(statearr_36219_36252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (19))){
var inst_36178 = (state_36197[(2)]);
var state_36197__$1 = state_36197;
var statearr_36220_36253 = state_36197__$1;
(statearr_36220_36253[(2)] = inst_36178);

(statearr_36220_36253[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (11))){
var inst_36163 = (state_36197[(7)]);
var inst_36149 = (state_36197[(11)]);
var inst_36163__$1 = cljs.core.seq.call(null,inst_36149);
var state_36197__$1 = (function (){var statearr_36221 = state_36197;
(statearr_36221[(7)] = inst_36163__$1);

return statearr_36221;
})();
if(inst_36163__$1){
var statearr_36222_36254 = state_36197__$1;
(statearr_36222_36254[(1)] = (14));

} else {
var statearr_36223_36255 = state_36197__$1;
(statearr_36223_36255[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (9))){
var inst_36185 = (state_36197[(2)]);
var inst_36186 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36197__$1 = (function (){var statearr_36224 = state_36197;
(statearr_36224[(15)] = inst_36185);

return statearr_36224;
})();
if(cljs.core.truth_(inst_36186)){
var statearr_36225_36256 = state_36197__$1;
(statearr_36225_36256[(1)] = (21));

} else {
var statearr_36226_36257 = state_36197__$1;
(statearr_36226_36257[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (5))){
var inst_36141 = cljs.core.async.close_BANG_.call(null,out);
var state_36197__$1 = state_36197;
var statearr_36227_36258 = state_36197__$1;
(statearr_36227_36258[(2)] = inst_36141);

(statearr_36227_36258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (14))){
var inst_36163 = (state_36197[(7)]);
var inst_36165 = cljs.core.chunked_seq_QMARK_.call(null,inst_36163);
var state_36197__$1 = state_36197;
if(inst_36165){
var statearr_36228_36259 = state_36197__$1;
(statearr_36228_36259[(1)] = (17));

} else {
var statearr_36229_36260 = state_36197__$1;
(statearr_36229_36260[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (16))){
var inst_36181 = (state_36197[(2)]);
var state_36197__$1 = state_36197;
var statearr_36230_36261 = state_36197__$1;
(statearr_36230_36261[(2)] = inst_36181);

(statearr_36230_36261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (10))){
var inst_36152 = (state_36197[(8)]);
var inst_36150 = (state_36197[(9)]);
var inst_36157 = cljs.core._nth.call(null,inst_36150,inst_36152);
var state_36197__$1 = state_36197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36197__$1,(13),out,inst_36157);
} else {
if((state_val_36198 === (18))){
var inst_36163 = (state_36197[(7)]);
var inst_36172 = cljs.core.first.call(null,inst_36163);
var state_36197__$1 = state_36197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36197__$1,(20),out,inst_36172);
} else {
if((state_val_36198 === (8))){
var inst_36152 = (state_36197[(8)]);
var inst_36151 = (state_36197[(12)]);
var inst_36154 = (inst_36152 < inst_36151);
var inst_36155 = inst_36154;
var state_36197__$1 = state_36197;
if(cljs.core.truth_(inst_36155)){
var statearr_36231_36262 = state_36197__$1;
(statearr_36231_36262[(1)] = (10));

} else {
var statearr_36232_36263 = state_36197__$1;
(statearr_36232_36263[(1)] = (11));

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
});})(c__28151__auto__))
;
return ((function (switch__28089__auto__,c__28151__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28090__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28090__auto____0 = (function (){
var statearr_36236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36236[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28090__auto__);

(statearr_36236[(1)] = (1));

return statearr_36236;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28090__auto____1 = (function (state_36197){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_36197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e36237){if((e36237 instanceof Object)){
var ex__28093__auto__ = e36237;
var statearr_36238_36264 = state_36197;
(statearr_36238_36264[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36265 = state_36197;
state_36197 = G__36265;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28090__auto__ = function(state_36197){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28090__auto____1.call(this,state_36197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28090__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28090__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto__))
})();
var state__28153__auto__ = (function (){var statearr_36239 = f__28152__auto__.call(null);
(statearr_36239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_36239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__))
);

return c__28151__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__36267 = arguments.length;
switch (G__36267) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__36270 = arguments.length;
switch (G__36270) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__36273 = arguments.length;
switch (G__36273) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28151__auto___36323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___36323,out){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___36323,out){
return (function (state_36297){
var state_val_36298 = (state_36297[(1)]);
if((state_val_36298 === (7))){
var inst_36292 = (state_36297[(2)]);
var state_36297__$1 = state_36297;
var statearr_36299_36324 = state_36297__$1;
(statearr_36299_36324[(2)] = inst_36292);

(statearr_36299_36324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36298 === (1))){
var inst_36274 = null;
var state_36297__$1 = (function (){var statearr_36300 = state_36297;
(statearr_36300[(7)] = inst_36274);

return statearr_36300;
})();
var statearr_36301_36325 = state_36297__$1;
(statearr_36301_36325[(2)] = null);

(statearr_36301_36325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36298 === (4))){
var inst_36277 = (state_36297[(8)]);
var inst_36277__$1 = (state_36297[(2)]);
var inst_36278 = (inst_36277__$1 == null);
var inst_36279 = cljs.core.not.call(null,inst_36278);
var state_36297__$1 = (function (){var statearr_36302 = state_36297;
(statearr_36302[(8)] = inst_36277__$1);

return statearr_36302;
})();
if(inst_36279){
var statearr_36303_36326 = state_36297__$1;
(statearr_36303_36326[(1)] = (5));

} else {
var statearr_36304_36327 = state_36297__$1;
(statearr_36304_36327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36298 === (6))){
var state_36297__$1 = state_36297;
var statearr_36305_36328 = state_36297__$1;
(statearr_36305_36328[(2)] = null);

(statearr_36305_36328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36298 === (3))){
var inst_36294 = (state_36297[(2)]);
var inst_36295 = cljs.core.async.close_BANG_.call(null,out);
var state_36297__$1 = (function (){var statearr_36306 = state_36297;
(statearr_36306[(9)] = inst_36294);

return statearr_36306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36297__$1,inst_36295);
} else {
if((state_val_36298 === (2))){
var state_36297__$1 = state_36297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36297__$1,(4),ch);
} else {
if((state_val_36298 === (11))){
var inst_36277 = (state_36297[(8)]);
var inst_36286 = (state_36297[(2)]);
var inst_36274 = inst_36277;
var state_36297__$1 = (function (){var statearr_36307 = state_36297;
(statearr_36307[(10)] = inst_36286);

(statearr_36307[(7)] = inst_36274);

return statearr_36307;
})();
var statearr_36308_36329 = state_36297__$1;
(statearr_36308_36329[(2)] = null);

(statearr_36308_36329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36298 === (9))){
var inst_36277 = (state_36297[(8)]);
var state_36297__$1 = state_36297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36297__$1,(11),out,inst_36277);
} else {
if((state_val_36298 === (5))){
var inst_36277 = (state_36297[(8)]);
var inst_36274 = (state_36297[(7)]);
var inst_36281 = cljs.core._EQ_.call(null,inst_36277,inst_36274);
var state_36297__$1 = state_36297;
if(inst_36281){
var statearr_36310_36330 = state_36297__$1;
(statearr_36310_36330[(1)] = (8));

} else {
var statearr_36311_36331 = state_36297__$1;
(statearr_36311_36331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36298 === (10))){
var inst_36289 = (state_36297[(2)]);
var state_36297__$1 = state_36297;
var statearr_36312_36332 = state_36297__$1;
(statearr_36312_36332[(2)] = inst_36289);

(statearr_36312_36332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36298 === (8))){
var inst_36274 = (state_36297[(7)]);
var tmp36309 = inst_36274;
var inst_36274__$1 = tmp36309;
var state_36297__$1 = (function (){var statearr_36313 = state_36297;
(statearr_36313[(7)] = inst_36274__$1);

return statearr_36313;
})();
var statearr_36314_36333 = state_36297__$1;
(statearr_36314_36333[(2)] = null);

(statearr_36314_36333[(1)] = (2));


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
});})(c__28151__auto___36323,out))
;
return ((function (switch__28089__auto__,c__28151__auto___36323,out){
return (function() {
var cljs$core$async$state_machine__28090__auto__ = null;
var cljs$core$async$state_machine__28090__auto____0 = (function (){
var statearr_36318 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36318[(0)] = cljs$core$async$state_machine__28090__auto__);

(statearr_36318[(1)] = (1));

return statearr_36318;
});
var cljs$core$async$state_machine__28090__auto____1 = (function (state_36297){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_36297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e36319){if((e36319 instanceof Object)){
var ex__28093__auto__ = e36319;
var statearr_36320_36334 = state_36297;
(statearr_36320_36334[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36335 = state_36297;
state_36297 = G__36335;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$state_machine__28090__auto__ = function(state_36297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28090__auto____1.call(this,state_36297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28090__auto____0;
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28090__auto____1;
return cljs$core$async$state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___36323,out))
})();
var state__28153__auto__ = (function (){var statearr_36321 = f__28152__auto__.call(null);
(statearr_36321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___36323);

return statearr_36321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___36323,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__36337 = arguments.length;
switch (G__36337) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28151__auto___36406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___36406,out){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___36406,out){
return (function (state_36375){
var state_val_36376 = (state_36375[(1)]);
if((state_val_36376 === (7))){
var inst_36371 = (state_36375[(2)]);
var state_36375__$1 = state_36375;
var statearr_36377_36407 = state_36375__$1;
(statearr_36377_36407[(2)] = inst_36371);

(statearr_36377_36407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (1))){
var inst_36338 = (new Array(n));
var inst_36339 = inst_36338;
var inst_36340 = (0);
var state_36375__$1 = (function (){var statearr_36378 = state_36375;
(statearr_36378[(7)] = inst_36339);

(statearr_36378[(8)] = inst_36340);

return statearr_36378;
})();
var statearr_36379_36408 = state_36375__$1;
(statearr_36379_36408[(2)] = null);

(statearr_36379_36408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (4))){
var inst_36343 = (state_36375[(9)]);
var inst_36343__$1 = (state_36375[(2)]);
var inst_36344 = (inst_36343__$1 == null);
var inst_36345 = cljs.core.not.call(null,inst_36344);
var state_36375__$1 = (function (){var statearr_36380 = state_36375;
(statearr_36380[(9)] = inst_36343__$1);

return statearr_36380;
})();
if(inst_36345){
var statearr_36381_36409 = state_36375__$1;
(statearr_36381_36409[(1)] = (5));

} else {
var statearr_36382_36410 = state_36375__$1;
(statearr_36382_36410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (15))){
var inst_36365 = (state_36375[(2)]);
var state_36375__$1 = state_36375;
var statearr_36383_36411 = state_36375__$1;
(statearr_36383_36411[(2)] = inst_36365);

(statearr_36383_36411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (13))){
var state_36375__$1 = state_36375;
var statearr_36384_36412 = state_36375__$1;
(statearr_36384_36412[(2)] = null);

(statearr_36384_36412[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (6))){
var inst_36340 = (state_36375[(8)]);
var inst_36361 = (inst_36340 > (0));
var state_36375__$1 = state_36375;
if(cljs.core.truth_(inst_36361)){
var statearr_36385_36413 = state_36375__$1;
(statearr_36385_36413[(1)] = (12));

} else {
var statearr_36386_36414 = state_36375__$1;
(statearr_36386_36414[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (3))){
var inst_36373 = (state_36375[(2)]);
var state_36375__$1 = state_36375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36375__$1,inst_36373);
} else {
if((state_val_36376 === (12))){
var inst_36339 = (state_36375[(7)]);
var inst_36363 = cljs.core.vec.call(null,inst_36339);
var state_36375__$1 = state_36375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36375__$1,(15),out,inst_36363);
} else {
if((state_val_36376 === (2))){
var state_36375__$1 = state_36375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36375__$1,(4),ch);
} else {
if((state_val_36376 === (11))){
var inst_36355 = (state_36375[(2)]);
var inst_36356 = (new Array(n));
var inst_36339 = inst_36356;
var inst_36340 = (0);
var state_36375__$1 = (function (){var statearr_36387 = state_36375;
(statearr_36387[(7)] = inst_36339);

(statearr_36387[(10)] = inst_36355);

(statearr_36387[(8)] = inst_36340);

return statearr_36387;
})();
var statearr_36388_36415 = state_36375__$1;
(statearr_36388_36415[(2)] = null);

(statearr_36388_36415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (9))){
var inst_36339 = (state_36375[(7)]);
var inst_36353 = cljs.core.vec.call(null,inst_36339);
var state_36375__$1 = state_36375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36375__$1,(11),out,inst_36353);
} else {
if((state_val_36376 === (5))){
var inst_36339 = (state_36375[(7)]);
var inst_36348 = (state_36375[(11)]);
var inst_36340 = (state_36375[(8)]);
var inst_36343 = (state_36375[(9)]);
var inst_36347 = (inst_36339[inst_36340] = inst_36343);
var inst_36348__$1 = (inst_36340 + (1));
var inst_36349 = (inst_36348__$1 < n);
var state_36375__$1 = (function (){var statearr_36389 = state_36375;
(statearr_36389[(12)] = inst_36347);

(statearr_36389[(11)] = inst_36348__$1);

return statearr_36389;
})();
if(cljs.core.truth_(inst_36349)){
var statearr_36390_36416 = state_36375__$1;
(statearr_36390_36416[(1)] = (8));

} else {
var statearr_36391_36417 = state_36375__$1;
(statearr_36391_36417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (14))){
var inst_36368 = (state_36375[(2)]);
var inst_36369 = cljs.core.async.close_BANG_.call(null,out);
var state_36375__$1 = (function (){var statearr_36393 = state_36375;
(statearr_36393[(13)] = inst_36368);

return statearr_36393;
})();
var statearr_36394_36418 = state_36375__$1;
(statearr_36394_36418[(2)] = inst_36369);

(statearr_36394_36418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (10))){
var inst_36359 = (state_36375[(2)]);
var state_36375__$1 = state_36375;
var statearr_36395_36419 = state_36375__$1;
(statearr_36395_36419[(2)] = inst_36359);

(statearr_36395_36419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (8))){
var inst_36339 = (state_36375[(7)]);
var inst_36348 = (state_36375[(11)]);
var tmp36392 = inst_36339;
var inst_36339__$1 = tmp36392;
var inst_36340 = inst_36348;
var state_36375__$1 = (function (){var statearr_36396 = state_36375;
(statearr_36396[(7)] = inst_36339__$1);

(statearr_36396[(8)] = inst_36340);

return statearr_36396;
})();
var statearr_36397_36420 = state_36375__$1;
(statearr_36397_36420[(2)] = null);

(statearr_36397_36420[(1)] = (2));


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
});})(c__28151__auto___36406,out))
;
return ((function (switch__28089__auto__,c__28151__auto___36406,out){
return (function() {
var cljs$core$async$state_machine__28090__auto__ = null;
var cljs$core$async$state_machine__28090__auto____0 = (function (){
var statearr_36401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36401[(0)] = cljs$core$async$state_machine__28090__auto__);

(statearr_36401[(1)] = (1));

return statearr_36401;
});
var cljs$core$async$state_machine__28090__auto____1 = (function (state_36375){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_36375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e36402){if((e36402 instanceof Object)){
var ex__28093__auto__ = e36402;
var statearr_36403_36421 = state_36375;
(statearr_36403_36421[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36422 = state_36375;
state_36375 = G__36422;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$state_machine__28090__auto__ = function(state_36375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28090__auto____1.call(this,state_36375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28090__auto____0;
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28090__auto____1;
return cljs$core$async$state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___36406,out))
})();
var state__28153__auto__ = (function (){var statearr_36404 = f__28152__auto__.call(null);
(statearr_36404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___36406);

return statearr_36404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___36406,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__36424 = arguments.length;
switch (G__36424) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28151__auto___36497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___36497,out){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___36497,out){
return (function (state_36466){
var state_val_36467 = (state_36466[(1)]);
if((state_val_36467 === (7))){
var inst_36462 = (state_36466[(2)]);
var state_36466__$1 = state_36466;
var statearr_36468_36498 = state_36466__$1;
(statearr_36468_36498[(2)] = inst_36462);

(statearr_36468_36498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (1))){
var inst_36425 = [];
var inst_36426 = inst_36425;
var inst_36427 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36466__$1 = (function (){var statearr_36469 = state_36466;
(statearr_36469[(7)] = inst_36426);

(statearr_36469[(8)] = inst_36427);

return statearr_36469;
})();
var statearr_36470_36499 = state_36466__$1;
(statearr_36470_36499[(2)] = null);

(statearr_36470_36499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (4))){
var inst_36430 = (state_36466[(9)]);
var inst_36430__$1 = (state_36466[(2)]);
var inst_36431 = (inst_36430__$1 == null);
var inst_36432 = cljs.core.not.call(null,inst_36431);
var state_36466__$1 = (function (){var statearr_36471 = state_36466;
(statearr_36471[(9)] = inst_36430__$1);

return statearr_36471;
})();
if(inst_36432){
var statearr_36472_36500 = state_36466__$1;
(statearr_36472_36500[(1)] = (5));

} else {
var statearr_36473_36501 = state_36466__$1;
(statearr_36473_36501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (15))){
var inst_36456 = (state_36466[(2)]);
var state_36466__$1 = state_36466;
var statearr_36474_36502 = state_36466__$1;
(statearr_36474_36502[(2)] = inst_36456);

(statearr_36474_36502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (13))){
var state_36466__$1 = state_36466;
var statearr_36475_36503 = state_36466__$1;
(statearr_36475_36503[(2)] = null);

(statearr_36475_36503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (6))){
var inst_36426 = (state_36466[(7)]);
var inst_36451 = inst_36426.length;
var inst_36452 = (inst_36451 > (0));
var state_36466__$1 = state_36466;
if(cljs.core.truth_(inst_36452)){
var statearr_36476_36504 = state_36466__$1;
(statearr_36476_36504[(1)] = (12));

} else {
var statearr_36477_36505 = state_36466__$1;
(statearr_36477_36505[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (3))){
var inst_36464 = (state_36466[(2)]);
var state_36466__$1 = state_36466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36466__$1,inst_36464);
} else {
if((state_val_36467 === (12))){
var inst_36426 = (state_36466[(7)]);
var inst_36454 = cljs.core.vec.call(null,inst_36426);
var state_36466__$1 = state_36466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36466__$1,(15),out,inst_36454);
} else {
if((state_val_36467 === (2))){
var state_36466__$1 = state_36466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36466__$1,(4),ch);
} else {
if((state_val_36467 === (11))){
var inst_36430 = (state_36466[(9)]);
var inst_36434 = (state_36466[(10)]);
var inst_36444 = (state_36466[(2)]);
var inst_36445 = [];
var inst_36446 = inst_36445.push(inst_36430);
var inst_36426 = inst_36445;
var inst_36427 = inst_36434;
var state_36466__$1 = (function (){var statearr_36478 = state_36466;
(statearr_36478[(7)] = inst_36426);

(statearr_36478[(11)] = inst_36444);

(statearr_36478[(12)] = inst_36446);

(statearr_36478[(8)] = inst_36427);

return statearr_36478;
})();
var statearr_36479_36506 = state_36466__$1;
(statearr_36479_36506[(2)] = null);

(statearr_36479_36506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (9))){
var inst_36426 = (state_36466[(7)]);
var inst_36442 = cljs.core.vec.call(null,inst_36426);
var state_36466__$1 = state_36466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36466__$1,(11),out,inst_36442);
} else {
if((state_val_36467 === (5))){
var inst_36430 = (state_36466[(9)]);
var inst_36434 = (state_36466[(10)]);
var inst_36427 = (state_36466[(8)]);
var inst_36434__$1 = f.call(null,inst_36430);
var inst_36435 = cljs.core._EQ_.call(null,inst_36434__$1,inst_36427);
var inst_36436 = cljs.core.keyword_identical_QMARK_.call(null,inst_36427,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36437 = (inst_36435) || (inst_36436);
var state_36466__$1 = (function (){var statearr_36480 = state_36466;
(statearr_36480[(10)] = inst_36434__$1);

return statearr_36480;
})();
if(cljs.core.truth_(inst_36437)){
var statearr_36481_36507 = state_36466__$1;
(statearr_36481_36507[(1)] = (8));

} else {
var statearr_36482_36508 = state_36466__$1;
(statearr_36482_36508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (14))){
var inst_36459 = (state_36466[(2)]);
var inst_36460 = cljs.core.async.close_BANG_.call(null,out);
var state_36466__$1 = (function (){var statearr_36484 = state_36466;
(statearr_36484[(13)] = inst_36459);

return statearr_36484;
})();
var statearr_36485_36509 = state_36466__$1;
(statearr_36485_36509[(2)] = inst_36460);

(statearr_36485_36509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (10))){
var inst_36449 = (state_36466[(2)]);
var state_36466__$1 = state_36466;
var statearr_36486_36510 = state_36466__$1;
(statearr_36486_36510[(2)] = inst_36449);

(statearr_36486_36510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (8))){
var inst_36426 = (state_36466[(7)]);
var inst_36430 = (state_36466[(9)]);
var inst_36434 = (state_36466[(10)]);
var inst_36439 = inst_36426.push(inst_36430);
var tmp36483 = inst_36426;
var inst_36426__$1 = tmp36483;
var inst_36427 = inst_36434;
var state_36466__$1 = (function (){var statearr_36487 = state_36466;
(statearr_36487[(7)] = inst_36426__$1);

(statearr_36487[(14)] = inst_36439);

(statearr_36487[(8)] = inst_36427);

return statearr_36487;
})();
var statearr_36488_36511 = state_36466__$1;
(statearr_36488_36511[(2)] = null);

(statearr_36488_36511[(1)] = (2));


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
});})(c__28151__auto___36497,out))
;
return ((function (switch__28089__auto__,c__28151__auto___36497,out){
return (function() {
var cljs$core$async$state_machine__28090__auto__ = null;
var cljs$core$async$state_machine__28090__auto____0 = (function (){
var statearr_36492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36492[(0)] = cljs$core$async$state_machine__28090__auto__);

(statearr_36492[(1)] = (1));

return statearr_36492;
});
var cljs$core$async$state_machine__28090__auto____1 = (function (state_36466){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_36466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e36493){if((e36493 instanceof Object)){
var ex__28093__auto__ = e36493;
var statearr_36494_36512 = state_36466;
(statearr_36494_36512[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36513 = state_36466;
state_36466 = G__36513;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
cljs$core$async$state_machine__28090__auto__ = function(state_36466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28090__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28090__auto____1.call(this,state_36466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28090__auto____0;
cljs$core$async$state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28090__auto____1;
return cljs$core$async$state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___36497,out))
})();
var state__28153__auto__ = (function (){var statearr_36495 = f__28152__auto__.call(null);
(statearr_36495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___36497);

return statearr_36495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___36497,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map