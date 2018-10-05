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
if(typeof cljs.core.async.t34041 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34041 = (function (fn_handler,f,meta34042){
this.fn_handler = fn_handler;
this.f = f;
this.meta34042 = meta34042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34043,meta34042__$1){
var self__ = this;
var _34043__$1 = this;
return (new cljs.core.async.t34041(self__.fn_handler,self__.f,meta34042__$1));
});

cljs.core.async.t34041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34043){
var self__ = this;
var _34043__$1 = this;
return self__.meta34042;
});

cljs.core.async.t34041.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t34041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t34041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta34042","meta34042",1391956996,null)], null);
});

cljs.core.async.t34041.cljs$lang$type = true;

cljs.core.async.t34041.cljs$lang$ctorStr = "cljs.core.async/t34041";

cljs.core.async.t34041.cljs$lang$ctorPrWriter = (function (this__25350__auto__,writer__25351__auto__,opt__25352__auto__){
return cljs.core._write.call(null,writer__25351__auto__,"cljs.core.async/t34041");
});

cljs.core.async.__GT_t34041 = (function cljs$core$async$fn_handler_$___GT_t34041(fn_handler__$1,f__$1,meta34042){
return (new cljs.core.async.t34041(fn_handler__$1,f__$1,meta34042));
});

}

return (new cljs.core.async.t34041(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34045 = buff;
if(G__34045){
var bit__25445__auto__ = null;
if(cljs.core.truth_((function (){var or__24771__auto__ = bit__25445__auto__;
if(cljs.core.truth_(or__24771__auto__)){
return or__24771__auto__;
} else {
return G__34045.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__34045.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34045);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34045);
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
var G__34047 = arguments.length;
switch (G__34047) {
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
var G__34050 = arguments.length;
switch (G__34050) {
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
var val_34052 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34052);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34052,ret){
return (function (){
return fn1.call(null,val_34052);
});})(val_34052,ret))
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
var G__34054 = arguments.length;
switch (G__34054) {
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
var n__25656__auto___34056 = n;
var x_34057 = (0);
while(true){
if((x_34057 < n__25656__auto___34056)){
(a[x_34057] = (0));

var G__34058 = (x_34057 + (1));
x_34057 = G__34058;
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

var G__34059 = (i + (1));
i = G__34059;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t34063 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34063 = (function (alt_flag,flag,meta34064){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta34064 = meta34064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34065,meta34064__$1){
var self__ = this;
var _34065__$1 = this;
return (new cljs.core.async.t34063(self__.alt_flag,self__.flag,meta34064__$1));
});})(flag))
;

cljs.core.async.t34063.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34065){
var self__ = this;
var _34065__$1 = this;
return self__.meta34064;
});})(flag))
;

cljs.core.async.t34063.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t34063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t34063.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34064","meta34064",925596681,null)], null);
});})(flag))
;

cljs.core.async.t34063.cljs$lang$type = true;

cljs.core.async.t34063.cljs$lang$ctorStr = "cljs.core.async/t34063";

cljs.core.async.t34063.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25350__auto__,writer__25351__auto__,opt__25352__auto__){
return cljs.core._write.call(null,writer__25351__auto__,"cljs.core.async/t34063");
});})(flag))
;

cljs.core.async.__GT_t34063 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t34063(alt_flag__$1,flag__$1,meta34064){
return (new cljs.core.async.t34063(alt_flag__$1,flag__$1,meta34064));
});})(flag))
;

}

return (new cljs.core.async.t34063(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t34069 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34069 = (function (alt_handler,flag,cb,meta34070){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta34070 = meta34070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34071,meta34070__$1){
var self__ = this;
var _34071__$1 = this;
return (new cljs.core.async.t34069(self__.alt_handler,self__.flag,self__.cb,meta34070__$1));
});

cljs.core.async.t34069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34071){
var self__ = this;
var _34071__$1 = this;
return self__.meta34070;
});

cljs.core.async.t34069.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t34069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t34069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34070","meta34070",1585069966,null)], null);
});

cljs.core.async.t34069.cljs$lang$type = true;

cljs.core.async.t34069.cljs$lang$ctorStr = "cljs.core.async/t34069";

cljs.core.async.t34069.cljs$lang$ctorPrWriter = (function (this__25350__auto__,writer__25351__auto__,opt__25352__auto__){
return cljs.core._write.call(null,writer__25351__auto__,"cljs.core.async/t34069");
});

cljs.core.async.__GT_t34069 = (function cljs$core$async$alt_handler_$___GT_t34069(alt_handler__$1,flag__$1,cb__$1,meta34070){
return (new cljs.core.async.t34069(alt_handler__$1,flag__$1,cb__$1,meta34070));
});

}

return (new cljs.core.async.t34069(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34072_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34072_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34073_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34073_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24771__auto__ = wport;
if(cljs.core.truth_(or__24771__auto__)){
return or__24771__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34074 = (i + (1));
i = G__34074;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24771__auto__ = ret;
if(cljs.core.truth_(or__24771__auto__)){
return or__24771__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__24759__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24759__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24759__auto__;
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
var argseq__25811__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25811__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34077){
var map__34078 = p__34077;
var map__34078__$1 = ((cljs.core.seq_QMARK_.call(null,map__34078))?cljs.core.apply.call(null,cljs.core.hash_map,map__34078):map__34078);
var opts = map__34078__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34075){
var G__34076 = cljs.core.first.call(null,seq34075);
var seq34075__$1 = cljs.core.next.call(null,seq34075);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34076,seq34075__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__34080 = arguments.length;
switch (G__34080) {
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
var c__28169__auto___34129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___34129){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___34129){
return (function (state_34104){
var state_val_34105 = (state_34104[(1)]);
if((state_val_34105 === (7))){
var inst_34100 = (state_34104[(2)]);
var state_34104__$1 = state_34104;
var statearr_34106_34130 = state_34104__$1;
(statearr_34106_34130[(2)] = inst_34100);

(statearr_34106_34130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34105 === (1))){
var state_34104__$1 = state_34104;
var statearr_34107_34131 = state_34104__$1;
(statearr_34107_34131[(2)] = null);

(statearr_34107_34131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34105 === (4))){
var inst_34083 = (state_34104[(7)]);
var inst_34083__$1 = (state_34104[(2)]);
var inst_34084 = (inst_34083__$1 == null);
var state_34104__$1 = (function (){var statearr_34108 = state_34104;
(statearr_34108[(7)] = inst_34083__$1);

return statearr_34108;
})();
if(cljs.core.truth_(inst_34084)){
var statearr_34109_34132 = state_34104__$1;
(statearr_34109_34132[(1)] = (5));

} else {
var statearr_34110_34133 = state_34104__$1;
(statearr_34110_34133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34105 === (13))){
var state_34104__$1 = state_34104;
var statearr_34111_34134 = state_34104__$1;
(statearr_34111_34134[(2)] = null);

(statearr_34111_34134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34105 === (6))){
var inst_34083 = (state_34104[(7)]);
var state_34104__$1 = state_34104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34104__$1,(11),to,inst_34083);
} else {
if((state_val_34105 === (3))){
var inst_34102 = (state_34104[(2)]);
var state_34104__$1 = state_34104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34104__$1,inst_34102);
} else {
if((state_val_34105 === (12))){
var state_34104__$1 = state_34104;
var statearr_34112_34135 = state_34104__$1;
(statearr_34112_34135[(2)] = null);

(statearr_34112_34135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34105 === (2))){
var state_34104__$1 = state_34104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34104__$1,(4),from);
} else {
if((state_val_34105 === (11))){
var inst_34093 = (state_34104[(2)]);
var state_34104__$1 = state_34104;
if(cljs.core.truth_(inst_34093)){
var statearr_34113_34136 = state_34104__$1;
(statearr_34113_34136[(1)] = (12));

} else {
var statearr_34114_34137 = state_34104__$1;
(statearr_34114_34137[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34105 === (9))){
var state_34104__$1 = state_34104;
var statearr_34115_34138 = state_34104__$1;
(statearr_34115_34138[(2)] = null);

(statearr_34115_34138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34105 === (5))){
var state_34104__$1 = state_34104;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34116_34139 = state_34104__$1;
(statearr_34116_34139[(1)] = (8));

} else {
var statearr_34117_34140 = state_34104__$1;
(statearr_34117_34140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34105 === (14))){
var inst_34098 = (state_34104[(2)]);
var state_34104__$1 = state_34104;
var statearr_34118_34141 = state_34104__$1;
(statearr_34118_34141[(2)] = inst_34098);

(statearr_34118_34141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34105 === (10))){
var inst_34090 = (state_34104[(2)]);
var state_34104__$1 = state_34104;
var statearr_34119_34142 = state_34104__$1;
(statearr_34119_34142[(2)] = inst_34090);

(statearr_34119_34142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34105 === (8))){
var inst_34087 = cljs.core.async.close_BANG_.call(null,to);
var state_34104__$1 = state_34104;
var statearr_34120_34143 = state_34104__$1;
(statearr_34120_34143[(2)] = inst_34087);

(statearr_34120_34143[(1)] = (10));


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
});})(c__28169__auto___34129))
;
return ((function (switch__28107__auto__,c__28169__auto___34129){
return (function() {
var cljs$core$async$state_machine__28108__auto__ = null;
var cljs$core$async$state_machine__28108__auto____0 = (function (){
var statearr_34124 = [null,null,null,null,null,null,null,null];
(statearr_34124[(0)] = cljs$core$async$state_machine__28108__auto__);

(statearr_34124[(1)] = (1));

return statearr_34124;
});
var cljs$core$async$state_machine__28108__auto____1 = (function (state_34104){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_34104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e34125){if((e34125 instanceof Object)){
var ex__28111__auto__ = e34125;
var statearr_34126_34144 = state_34104;
(statearr_34126_34144[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34145 = state_34104;
state_34104 = G__34145;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$state_machine__28108__auto__ = function(state_34104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28108__auto____1.call(this,state_34104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28108__auto____0;
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28108__auto____1;
return cljs$core$async$state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___34129))
})();
var state__28171__auto__ = (function (){var statearr_34127 = f__28170__auto__.call(null);
(statearr_34127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___34129);

return statearr_34127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___34129))
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
return (function (p__34329){
var vec__34330 = p__34329;
var v = cljs.core.nth.call(null,vec__34330,(0),null);
var p = cljs.core.nth.call(null,vec__34330,(1),null);
var job = vec__34330;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28169__auto___34512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___34512,res,vec__34330,v,p,job,jobs,results){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___34512,res,vec__34330,v,p,job,jobs,results){
return (function (state_34335){
var state_val_34336 = (state_34335[(1)]);
if((state_val_34336 === (1))){
var state_34335__$1 = state_34335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34335__$1,(2),res,v);
} else {
if((state_val_34336 === (2))){
var inst_34332 = (state_34335[(2)]);
var inst_34333 = cljs.core.async.close_BANG_.call(null,res);
var state_34335__$1 = (function (){var statearr_34337 = state_34335;
(statearr_34337[(7)] = inst_34332);

return statearr_34337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34335__$1,inst_34333);
} else {
return null;
}
}
});})(c__28169__auto___34512,res,vec__34330,v,p,job,jobs,results))
;
return ((function (switch__28107__auto__,c__28169__auto___34512,res,vec__34330,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____0 = (function (){
var statearr_34341 = [null,null,null,null,null,null,null,null];
(statearr_34341[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__);

(statearr_34341[(1)] = (1));

return statearr_34341;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____1 = (function (state_34335){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_34335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e34342){if((e34342 instanceof Object)){
var ex__28111__auto__ = e34342;
var statearr_34343_34513 = state_34335;
(statearr_34343_34513[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34514 = state_34335;
state_34335 = G__34514;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__ = function(state_34335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____1.call(this,state_34335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___34512,res,vec__34330,v,p,job,jobs,results))
})();
var state__28171__auto__ = (function (){var statearr_34344 = f__28170__auto__.call(null);
(statearr_34344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___34512);

return statearr_34344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___34512,res,vec__34330,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34345){
var vec__34346 = p__34345;
var v = cljs.core.nth.call(null,vec__34346,(0),null);
var p = cljs.core.nth.call(null,vec__34346,(1),null);
var job = vec__34346;
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
var n__25656__auto___34515 = n;
var __34516 = (0);
while(true){
if((__34516 < n__25656__auto___34515)){
var G__34347_34517 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34347_34517) {
case "compute":
var c__28169__auto___34519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34516,c__28169__auto___34519,G__34347_34517,n__25656__auto___34515,jobs,results,process,async){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (__34516,c__28169__auto___34519,G__34347_34517,n__25656__auto___34515,jobs,results,process,async){
return (function (state_34360){
var state_val_34361 = (state_34360[(1)]);
if((state_val_34361 === (1))){
var state_34360__$1 = state_34360;
var statearr_34362_34520 = state_34360__$1;
(statearr_34362_34520[(2)] = null);

(statearr_34362_34520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34361 === (2))){
var state_34360__$1 = state_34360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34360__$1,(4),jobs);
} else {
if((state_val_34361 === (3))){
var inst_34358 = (state_34360[(2)]);
var state_34360__$1 = state_34360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34360__$1,inst_34358);
} else {
if((state_val_34361 === (4))){
var inst_34350 = (state_34360[(2)]);
var inst_34351 = process.call(null,inst_34350);
var state_34360__$1 = state_34360;
if(cljs.core.truth_(inst_34351)){
var statearr_34363_34521 = state_34360__$1;
(statearr_34363_34521[(1)] = (5));

} else {
var statearr_34364_34522 = state_34360__$1;
(statearr_34364_34522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34361 === (5))){
var state_34360__$1 = state_34360;
var statearr_34365_34523 = state_34360__$1;
(statearr_34365_34523[(2)] = null);

(statearr_34365_34523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34361 === (6))){
var state_34360__$1 = state_34360;
var statearr_34366_34524 = state_34360__$1;
(statearr_34366_34524[(2)] = null);

(statearr_34366_34524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34361 === (7))){
var inst_34356 = (state_34360[(2)]);
var state_34360__$1 = state_34360;
var statearr_34367_34525 = state_34360__$1;
(statearr_34367_34525[(2)] = inst_34356);

(statearr_34367_34525[(1)] = (3));


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
});})(__34516,c__28169__auto___34519,G__34347_34517,n__25656__auto___34515,jobs,results,process,async))
;
return ((function (__34516,switch__28107__auto__,c__28169__auto___34519,G__34347_34517,n__25656__auto___34515,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____0 = (function (){
var statearr_34371 = [null,null,null,null,null,null,null];
(statearr_34371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__);

(statearr_34371[(1)] = (1));

return statearr_34371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____1 = (function (state_34360){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_34360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e34372){if((e34372 instanceof Object)){
var ex__28111__auto__ = e34372;
var statearr_34373_34526 = state_34360;
(statearr_34373_34526[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34527 = state_34360;
state_34360 = G__34527;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__ = function(state_34360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____1.call(this,state_34360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__;
})()
;})(__34516,switch__28107__auto__,c__28169__auto___34519,G__34347_34517,n__25656__auto___34515,jobs,results,process,async))
})();
var state__28171__auto__ = (function (){var statearr_34374 = f__28170__auto__.call(null);
(statearr_34374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___34519);

return statearr_34374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(__34516,c__28169__auto___34519,G__34347_34517,n__25656__auto___34515,jobs,results,process,async))
);


break;
case "async":
var c__28169__auto___34528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34516,c__28169__auto___34528,G__34347_34517,n__25656__auto___34515,jobs,results,process,async){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (__34516,c__28169__auto___34528,G__34347_34517,n__25656__auto___34515,jobs,results,process,async){
return (function (state_34387){
var state_val_34388 = (state_34387[(1)]);
if((state_val_34388 === (1))){
var state_34387__$1 = state_34387;
var statearr_34389_34529 = state_34387__$1;
(statearr_34389_34529[(2)] = null);

(statearr_34389_34529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (2))){
var state_34387__$1 = state_34387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34387__$1,(4),jobs);
} else {
if((state_val_34388 === (3))){
var inst_34385 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34387__$1,inst_34385);
} else {
if((state_val_34388 === (4))){
var inst_34377 = (state_34387[(2)]);
var inst_34378 = async.call(null,inst_34377);
var state_34387__$1 = state_34387;
if(cljs.core.truth_(inst_34378)){
var statearr_34390_34530 = state_34387__$1;
(statearr_34390_34530[(1)] = (5));

} else {
var statearr_34391_34531 = state_34387__$1;
(statearr_34391_34531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (5))){
var state_34387__$1 = state_34387;
var statearr_34392_34532 = state_34387__$1;
(statearr_34392_34532[(2)] = null);

(statearr_34392_34532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (6))){
var state_34387__$1 = state_34387;
var statearr_34393_34533 = state_34387__$1;
(statearr_34393_34533[(2)] = null);

(statearr_34393_34533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (7))){
var inst_34383 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
var statearr_34394_34534 = state_34387__$1;
(statearr_34394_34534[(2)] = inst_34383);

(statearr_34394_34534[(1)] = (3));


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
});})(__34516,c__28169__auto___34528,G__34347_34517,n__25656__auto___34515,jobs,results,process,async))
;
return ((function (__34516,switch__28107__auto__,c__28169__auto___34528,G__34347_34517,n__25656__auto___34515,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____0 = (function (){
var statearr_34398 = [null,null,null,null,null,null,null];
(statearr_34398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__);

(statearr_34398[(1)] = (1));

return statearr_34398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____1 = (function (state_34387){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_34387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e34399){if((e34399 instanceof Object)){
var ex__28111__auto__ = e34399;
var statearr_34400_34535 = state_34387;
(statearr_34400_34535[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34536 = state_34387;
state_34387 = G__34536;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__ = function(state_34387){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____1.call(this,state_34387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__;
})()
;})(__34516,switch__28107__auto__,c__28169__auto___34528,G__34347_34517,n__25656__auto___34515,jobs,results,process,async))
})();
var state__28171__auto__ = (function (){var statearr_34401 = f__28170__auto__.call(null);
(statearr_34401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___34528);

return statearr_34401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(__34516,c__28169__auto___34528,G__34347_34517,n__25656__auto___34515,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34537 = (__34516 + (1));
__34516 = G__34537;
continue;
} else {
}
break;
}

var c__28169__auto___34538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___34538,jobs,results,process,async){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___34538,jobs,results,process,async){
return (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34425_34539 = state_34423__$1;
(statearr_34425_34539[(2)] = null);

(statearr_34425_34539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (2))){
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34423__$1,(4),from);
} else {
if((state_val_34424 === (3))){
var inst_34421 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34423__$1,inst_34421);
} else {
if((state_val_34424 === (4))){
var inst_34404 = (state_34423[(7)]);
var inst_34404__$1 = (state_34423[(2)]);
var inst_34405 = (inst_34404__$1 == null);
var state_34423__$1 = (function (){var statearr_34426 = state_34423;
(statearr_34426[(7)] = inst_34404__$1);

return statearr_34426;
})();
if(cljs.core.truth_(inst_34405)){
var statearr_34427_34540 = state_34423__$1;
(statearr_34427_34540[(1)] = (5));

} else {
var statearr_34428_34541 = state_34423__$1;
(statearr_34428_34541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var inst_34407 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34423__$1 = state_34423;
var statearr_34429_34542 = state_34423__$1;
(statearr_34429_34542[(2)] = inst_34407);

(statearr_34429_34542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (6))){
var inst_34409 = (state_34423[(8)]);
var inst_34404 = (state_34423[(7)]);
var inst_34409__$1 = cljs.core.async.chan.call(null,(1));
var inst_34410 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34411 = [inst_34404,inst_34409__$1];
var inst_34412 = (new cljs.core.PersistentVector(null,2,(5),inst_34410,inst_34411,null));
var state_34423__$1 = (function (){var statearr_34430 = state_34423;
(statearr_34430[(8)] = inst_34409__$1);

return statearr_34430;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34423__$1,(8),jobs,inst_34412);
} else {
if((state_val_34424 === (7))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34431_34543 = state_34423__$1;
(statearr_34431_34543[(2)] = inst_34419);

(statearr_34431_34543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34409 = (state_34423[(8)]);
var inst_34414 = (state_34423[(2)]);
var state_34423__$1 = (function (){var statearr_34432 = state_34423;
(statearr_34432[(9)] = inst_34414);

return statearr_34432;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34423__$1,(9),results,inst_34409);
} else {
if((state_val_34424 === (9))){
var inst_34416 = (state_34423[(2)]);
var state_34423__$1 = (function (){var statearr_34433 = state_34423;
(statearr_34433[(10)] = inst_34416);

return statearr_34433;
})();
var statearr_34434_34544 = state_34423__$1;
(statearr_34434_34544[(2)] = null);

(statearr_34434_34544[(1)] = (2));


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
});})(c__28169__auto___34538,jobs,results,process,async))
;
return ((function (switch__28107__auto__,c__28169__auto___34538,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____0 = (function (){
var statearr_34438 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34438[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__);

(statearr_34438[(1)] = (1));

return statearr_34438;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____1 = (function (state_34423){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_34423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e34439){if((e34439 instanceof Object)){
var ex__28111__auto__ = e34439;
var statearr_34440_34545 = state_34423;
(statearr_34440_34545[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34546 = state_34423;
state_34423 = G__34546;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__ = function(state_34423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____1.call(this,state_34423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___34538,jobs,results,process,async))
})();
var state__28171__auto__ = (function (){var statearr_34441 = f__28170__auto__.call(null);
(statearr_34441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___34538);

return statearr_34441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___34538,jobs,results,process,async))
);


var c__28169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto__,jobs,results,process,async){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto__,jobs,results,process,async){
return (function (state_34479){
var state_val_34480 = (state_34479[(1)]);
if((state_val_34480 === (7))){
var inst_34475 = (state_34479[(2)]);
var state_34479__$1 = state_34479;
var statearr_34481_34547 = state_34479__$1;
(statearr_34481_34547[(2)] = inst_34475);

(statearr_34481_34547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (20))){
var state_34479__$1 = state_34479;
var statearr_34482_34548 = state_34479__$1;
(statearr_34482_34548[(2)] = null);

(statearr_34482_34548[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (1))){
var state_34479__$1 = state_34479;
var statearr_34483_34549 = state_34479__$1;
(statearr_34483_34549[(2)] = null);

(statearr_34483_34549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (4))){
var inst_34444 = (state_34479[(7)]);
var inst_34444__$1 = (state_34479[(2)]);
var inst_34445 = (inst_34444__$1 == null);
var state_34479__$1 = (function (){var statearr_34484 = state_34479;
(statearr_34484[(7)] = inst_34444__$1);

return statearr_34484;
})();
if(cljs.core.truth_(inst_34445)){
var statearr_34485_34550 = state_34479__$1;
(statearr_34485_34550[(1)] = (5));

} else {
var statearr_34486_34551 = state_34479__$1;
(statearr_34486_34551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (15))){
var inst_34457 = (state_34479[(8)]);
var state_34479__$1 = state_34479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34479__$1,(18),to,inst_34457);
} else {
if((state_val_34480 === (21))){
var inst_34470 = (state_34479[(2)]);
var state_34479__$1 = state_34479;
var statearr_34487_34552 = state_34479__$1;
(statearr_34487_34552[(2)] = inst_34470);

(statearr_34487_34552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (13))){
var inst_34472 = (state_34479[(2)]);
var state_34479__$1 = (function (){var statearr_34488 = state_34479;
(statearr_34488[(9)] = inst_34472);

return statearr_34488;
})();
var statearr_34489_34553 = state_34479__$1;
(statearr_34489_34553[(2)] = null);

(statearr_34489_34553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (6))){
var inst_34444 = (state_34479[(7)]);
var state_34479__$1 = state_34479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34479__$1,(11),inst_34444);
} else {
if((state_val_34480 === (17))){
var inst_34465 = (state_34479[(2)]);
var state_34479__$1 = state_34479;
if(cljs.core.truth_(inst_34465)){
var statearr_34490_34554 = state_34479__$1;
(statearr_34490_34554[(1)] = (19));

} else {
var statearr_34491_34555 = state_34479__$1;
(statearr_34491_34555[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (3))){
var inst_34477 = (state_34479[(2)]);
var state_34479__$1 = state_34479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34479__$1,inst_34477);
} else {
if((state_val_34480 === (12))){
var inst_34454 = (state_34479[(10)]);
var state_34479__$1 = state_34479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34479__$1,(14),inst_34454);
} else {
if((state_val_34480 === (2))){
var state_34479__$1 = state_34479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34479__$1,(4),results);
} else {
if((state_val_34480 === (19))){
var state_34479__$1 = state_34479;
var statearr_34492_34556 = state_34479__$1;
(statearr_34492_34556[(2)] = null);

(statearr_34492_34556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (11))){
var inst_34454 = (state_34479[(2)]);
var state_34479__$1 = (function (){var statearr_34493 = state_34479;
(statearr_34493[(10)] = inst_34454);

return statearr_34493;
})();
var statearr_34494_34557 = state_34479__$1;
(statearr_34494_34557[(2)] = null);

(statearr_34494_34557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (9))){
var state_34479__$1 = state_34479;
var statearr_34495_34558 = state_34479__$1;
(statearr_34495_34558[(2)] = null);

(statearr_34495_34558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (5))){
var state_34479__$1 = state_34479;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34496_34559 = state_34479__$1;
(statearr_34496_34559[(1)] = (8));

} else {
var statearr_34497_34560 = state_34479__$1;
(statearr_34497_34560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (14))){
var inst_34457 = (state_34479[(8)]);
var inst_34459 = (state_34479[(11)]);
var inst_34457__$1 = (state_34479[(2)]);
var inst_34458 = (inst_34457__$1 == null);
var inst_34459__$1 = cljs.core.not.call(null,inst_34458);
var state_34479__$1 = (function (){var statearr_34498 = state_34479;
(statearr_34498[(8)] = inst_34457__$1);

(statearr_34498[(11)] = inst_34459__$1);

return statearr_34498;
})();
if(inst_34459__$1){
var statearr_34499_34561 = state_34479__$1;
(statearr_34499_34561[(1)] = (15));

} else {
var statearr_34500_34562 = state_34479__$1;
(statearr_34500_34562[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (16))){
var inst_34459 = (state_34479[(11)]);
var state_34479__$1 = state_34479;
var statearr_34501_34563 = state_34479__$1;
(statearr_34501_34563[(2)] = inst_34459);

(statearr_34501_34563[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (10))){
var inst_34451 = (state_34479[(2)]);
var state_34479__$1 = state_34479;
var statearr_34502_34564 = state_34479__$1;
(statearr_34502_34564[(2)] = inst_34451);

(statearr_34502_34564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (18))){
var inst_34462 = (state_34479[(2)]);
var state_34479__$1 = state_34479;
var statearr_34503_34565 = state_34479__$1;
(statearr_34503_34565[(2)] = inst_34462);

(statearr_34503_34565[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (8))){
var inst_34448 = cljs.core.async.close_BANG_.call(null,to);
var state_34479__$1 = state_34479;
var statearr_34504_34566 = state_34479__$1;
(statearr_34504_34566[(2)] = inst_34448);

(statearr_34504_34566[(1)] = (10));


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
});})(c__28169__auto__,jobs,results,process,async))
;
return ((function (switch__28107__auto__,c__28169__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____0 = (function (){
var statearr_34508 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__);

(statearr_34508[(1)] = (1));

return statearr_34508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____1 = (function (state_34479){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_34479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e34509){if((e34509 instanceof Object)){
var ex__28111__auto__ = e34509;
var statearr_34510_34567 = state_34479;
(statearr_34510_34567[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34568 = state_34479;
state_34479 = G__34568;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__ = function(state_34479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____1.call(this,state_34479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28108__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto__,jobs,results,process,async))
})();
var state__28171__auto__ = (function (){var statearr_34511 = f__28170__auto__.call(null);
(statearr_34511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto__);

return statearr_34511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto__,jobs,results,process,async))
);

return c__28169__auto__;
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
var G__34570 = arguments.length;
switch (G__34570) {
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
var G__34573 = arguments.length;
switch (G__34573) {
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
var G__34576 = arguments.length;
switch (G__34576) {
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
var c__28169__auto___34628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___34628,tc,fc){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___34628,tc,fc){
return (function (state_34602){
var state_val_34603 = (state_34602[(1)]);
if((state_val_34603 === (7))){
var inst_34598 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
var statearr_34604_34629 = state_34602__$1;
(statearr_34604_34629[(2)] = inst_34598);

(statearr_34604_34629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (1))){
var state_34602__$1 = state_34602;
var statearr_34605_34630 = state_34602__$1;
(statearr_34605_34630[(2)] = null);

(statearr_34605_34630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (4))){
var inst_34579 = (state_34602[(7)]);
var inst_34579__$1 = (state_34602[(2)]);
var inst_34580 = (inst_34579__$1 == null);
var state_34602__$1 = (function (){var statearr_34606 = state_34602;
(statearr_34606[(7)] = inst_34579__$1);

return statearr_34606;
})();
if(cljs.core.truth_(inst_34580)){
var statearr_34607_34631 = state_34602__$1;
(statearr_34607_34631[(1)] = (5));

} else {
var statearr_34608_34632 = state_34602__$1;
(statearr_34608_34632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (13))){
var state_34602__$1 = state_34602;
var statearr_34609_34633 = state_34602__$1;
(statearr_34609_34633[(2)] = null);

(statearr_34609_34633[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (6))){
var inst_34579 = (state_34602[(7)]);
var inst_34585 = p.call(null,inst_34579);
var state_34602__$1 = state_34602;
if(cljs.core.truth_(inst_34585)){
var statearr_34610_34634 = state_34602__$1;
(statearr_34610_34634[(1)] = (9));

} else {
var statearr_34611_34635 = state_34602__$1;
(statearr_34611_34635[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (3))){
var inst_34600 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34602__$1,inst_34600);
} else {
if((state_val_34603 === (12))){
var state_34602__$1 = state_34602;
var statearr_34612_34636 = state_34602__$1;
(statearr_34612_34636[(2)] = null);

(statearr_34612_34636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (2))){
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34602__$1,(4),ch);
} else {
if((state_val_34603 === (11))){
var inst_34579 = (state_34602[(7)]);
var inst_34589 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34602__$1,(8),inst_34589,inst_34579);
} else {
if((state_val_34603 === (9))){
var state_34602__$1 = state_34602;
var statearr_34613_34637 = state_34602__$1;
(statearr_34613_34637[(2)] = tc);

(statearr_34613_34637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (5))){
var inst_34582 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34583 = cljs.core.async.close_BANG_.call(null,fc);
var state_34602__$1 = (function (){var statearr_34614 = state_34602;
(statearr_34614[(8)] = inst_34582);

return statearr_34614;
})();
var statearr_34615_34638 = state_34602__$1;
(statearr_34615_34638[(2)] = inst_34583);

(statearr_34615_34638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (14))){
var inst_34596 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
var statearr_34616_34639 = state_34602__$1;
(statearr_34616_34639[(2)] = inst_34596);

(statearr_34616_34639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (10))){
var state_34602__$1 = state_34602;
var statearr_34617_34640 = state_34602__$1;
(statearr_34617_34640[(2)] = fc);

(statearr_34617_34640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (8))){
var inst_34591 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
if(cljs.core.truth_(inst_34591)){
var statearr_34618_34641 = state_34602__$1;
(statearr_34618_34641[(1)] = (12));

} else {
var statearr_34619_34642 = state_34602__$1;
(statearr_34619_34642[(1)] = (13));

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
});})(c__28169__auto___34628,tc,fc))
;
return ((function (switch__28107__auto__,c__28169__auto___34628,tc,fc){
return (function() {
var cljs$core$async$state_machine__28108__auto__ = null;
var cljs$core$async$state_machine__28108__auto____0 = (function (){
var statearr_34623 = [null,null,null,null,null,null,null,null,null];
(statearr_34623[(0)] = cljs$core$async$state_machine__28108__auto__);

(statearr_34623[(1)] = (1));

return statearr_34623;
});
var cljs$core$async$state_machine__28108__auto____1 = (function (state_34602){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_34602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e34624){if((e34624 instanceof Object)){
var ex__28111__auto__ = e34624;
var statearr_34625_34643 = state_34602;
(statearr_34625_34643[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34644 = state_34602;
state_34602 = G__34644;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$state_machine__28108__auto__ = function(state_34602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28108__auto____1.call(this,state_34602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28108__auto____0;
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28108__auto____1;
return cljs$core$async$state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___34628,tc,fc))
})();
var state__28171__auto__ = (function (){var statearr_34626 = f__28170__auto__.call(null);
(statearr_34626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___34628);

return statearr_34626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___34628,tc,fc))
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
var c__28169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto__){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto__){
return (function (state_34691){
var state_val_34692 = (state_34691[(1)]);
if((state_val_34692 === (1))){
var inst_34677 = init;
var state_34691__$1 = (function (){var statearr_34693 = state_34691;
(statearr_34693[(7)] = inst_34677);

return statearr_34693;
})();
var statearr_34694_34709 = state_34691__$1;
(statearr_34694_34709[(2)] = null);

(statearr_34694_34709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (2))){
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34691__$1,(4),ch);
} else {
if((state_val_34692 === (3))){
var inst_34689 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34691__$1,inst_34689);
} else {
if((state_val_34692 === (4))){
var inst_34680 = (state_34691[(8)]);
var inst_34680__$1 = (state_34691[(2)]);
var inst_34681 = (inst_34680__$1 == null);
var state_34691__$1 = (function (){var statearr_34695 = state_34691;
(statearr_34695[(8)] = inst_34680__$1);

return statearr_34695;
})();
if(cljs.core.truth_(inst_34681)){
var statearr_34696_34710 = state_34691__$1;
(statearr_34696_34710[(1)] = (5));

} else {
var statearr_34697_34711 = state_34691__$1;
(statearr_34697_34711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (5))){
var inst_34677 = (state_34691[(7)]);
var state_34691__$1 = state_34691;
var statearr_34698_34712 = state_34691__$1;
(statearr_34698_34712[(2)] = inst_34677);

(statearr_34698_34712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (6))){
var inst_34677 = (state_34691[(7)]);
var inst_34680 = (state_34691[(8)]);
var inst_34684 = f.call(null,inst_34677,inst_34680);
var inst_34677__$1 = inst_34684;
var state_34691__$1 = (function (){var statearr_34699 = state_34691;
(statearr_34699[(7)] = inst_34677__$1);

return statearr_34699;
})();
var statearr_34700_34713 = state_34691__$1;
(statearr_34700_34713[(2)] = null);

(statearr_34700_34713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (7))){
var inst_34687 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
var statearr_34701_34714 = state_34691__$1;
(statearr_34701_34714[(2)] = inst_34687);

(statearr_34701_34714[(1)] = (3));


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
});})(c__28169__auto__))
;
return ((function (switch__28107__auto__,c__28169__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28108__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28108__auto____0 = (function (){
var statearr_34705 = [null,null,null,null,null,null,null,null,null];
(statearr_34705[(0)] = cljs$core$async$reduce_$_state_machine__28108__auto__);

(statearr_34705[(1)] = (1));

return statearr_34705;
});
var cljs$core$async$reduce_$_state_machine__28108__auto____1 = (function (state_34691){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_34691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e34706){if((e34706 instanceof Object)){
var ex__28111__auto__ = e34706;
var statearr_34707_34715 = state_34691;
(statearr_34707_34715[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34716 = state_34691;
state_34691 = G__34716;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28108__auto__ = function(state_34691){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28108__auto____1.call(this,state_34691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28108__auto____0;
cljs$core$async$reduce_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28108__auto____1;
return cljs$core$async$reduce_$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto__))
})();
var state__28171__auto__ = (function (){var statearr_34708 = f__28170__auto__.call(null);
(statearr_34708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto__);

return statearr_34708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto__))
);

return c__28169__auto__;
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
var G__34718 = arguments.length;
switch (G__34718) {
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
var c__28169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto__){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto__){
return (function (state_34743){
var state_val_34744 = (state_34743[(1)]);
if((state_val_34744 === (7))){
var inst_34725 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34745_34769 = state_34743__$1;
(statearr_34745_34769[(2)] = inst_34725);

(statearr_34745_34769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (1))){
var inst_34719 = cljs.core.seq.call(null,coll);
var inst_34720 = inst_34719;
var state_34743__$1 = (function (){var statearr_34746 = state_34743;
(statearr_34746[(7)] = inst_34720);

return statearr_34746;
})();
var statearr_34747_34770 = state_34743__$1;
(statearr_34747_34770[(2)] = null);

(statearr_34747_34770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (4))){
var inst_34720 = (state_34743[(7)]);
var inst_34723 = cljs.core.first.call(null,inst_34720);
var state_34743__$1 = state_34743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34743__$1,(7),ch,inst_34723);
} else {
if((state_val_34744 === (13))){
var inst_34737 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34748_34771 = state_34743__$1;
(statearr_34748_34771[(2)] = inst_34737);

(statearr_34748_34771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (6))){
var inst_34728 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
if(cljs.core.truth_(inst_34728)){
var statearr_34749_34772 = state_34743__$1;
(statearr_34749_34772[(1)] = (8));

} else {
var statearr_34750_34773 = state_34743__$1;
(statearr_34750_34773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (3))){
var inst_34741 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34743__$1,inst_34741);
} else {
if((state_val_34744 === (12))){
var state_34743__$1 = state_34743;
var statearr_34751_34774 = state_34743__$1;
(statearr_34751_34774[(2)] = null);

(statearr_34751_34774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (2))){
var inst_34720 = (state_34743[(7)]);
var state_34743__$1 = state_34743;
if(cljs.core.truth_(inst_34720)){
var statearr_34752_34775 = state_34743__$1;
(statearr_34752_34775[(1)] = (4));

} else {
var statearr_34753_34776 = state_34743__$1;
(statearr_34753_34776[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (11))){
var inst_34734 = cljs.core.async.close_BANG_.call(null,ch);
var state_34743__$1 = state_34743;
var statearr_34754_34777 = state_34743__$1;
(statearr_34754_34777[(2)] = inst_34734);

(statearr_34754_34777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (9))){
var state_34743__$1 = state_34743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34755_34778 = state_34743__$1;
(statearr_34755_34778[(1)] = (11));

} else {
var statearr_34756_34779 = state_34743__$1;
(statearr_34756_34779[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (5))){
var inst_34720 = (state_34743[(7)]);
var state_34743__$1 = state_34743;
var statearr_34757_34780 = state_34743__$1;
(statearr_34757_34780[(2)] = inst_34720);

(statearr_34757_34780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (10))){
var inst_34739 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34758_34781 = state_34743__$1;
(statearr_34758_34781[(2)] = inst_34739);

(statearr_34758_34781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (8))){
var inst_34720 = (state_34743[(7)]);
var inst_34730 = cljs.core.next.call(null,inst_34720);
var inst_34720__$1 = inst_34730;
var state_34743__$1 = (function (){var statearr_34759 = state_34743;
(statearr_34759[(7)] = inst_34720__$1);

return statearr_34759;
})();
var statearr_34760_34782 = state_34743__$1;
(statearr_34760_34782[(2)] = null);

(statearr_34760_34782[(1)] = (2));


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
});})(c__28169__auto__))
;
return ((function (switch__28107__auto__,c__28169__auto__){
return (function() {
var cljs$core$async$state_machine__28108__auto__ = null;
var cljs$core$async$state_machine__28108__auto____0 = (function (){
var statearr_34764 = [null,null,null,null,null,null,null,null];
(statearr_34764[(0)] = cljs$core$async$state_machine__28108__auto__);

(statearr_34764[(1)] = (1));

return statearr_34764;
});
var cljs$core$async$state_machine__28108__auto____1 = (function (state_34743){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_34743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e34765){if((e34765 instanceof Object)){
var ex__28111__auto__ = e34765;
var statearr_34766_34783 = state_34743;
(statearr_34766_34783[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34784 = state_34743;
state_34743 = G__34784;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$state_machine__28108__auto__ = function(state_34743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28108__auto____1.call(this,state_34743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28108__auto____0;
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28108__auto____1;
return cljs$core$async$state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto__))
})();
var state__28171__auto__ = (function (){var statearr_34767 = f__28170__auto__.call(null);
(statearr_34767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto__);

return statearr_34767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto__))
);

return c__28169__auto__;
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

cljs.core.async.Mux = (function (){var obj34786 = {};
return obj34786;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__24759__auto__ = _;
if(and__24759__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__24759__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25407__auto__ = (((_ == null))?null:_);
return (function (){var or__24771__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25407__auto__)]);
if(or__24771__auto__){
return or__24771__auto__;
} else {
var or__24771__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__24771__auto____$1){
return or__24771__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj34788 = {};
return obj34788;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__24759__auto__ = m;
if(and__24759__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__24759__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25407__auto__ = (((m == null))?null:m);
return (function (){var or__24771__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25407__auto__)]);
if(or__24771__auto__){
return or__24771__auto__;
} else {
var or__24771__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__24771__auto____$1){
return or__24771__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__24759__auto__ = m;
if(and__24759__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__24759__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25407__auto__ = (((m == null))?null:m);
return (function (){var or__24771__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25407__auto__)]);
if(or__24771__auto__){
return or__24771__auto__;
} else {
var or__24771__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__24771__auto____$1){
return or__24771__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__24759__auto__ = m;
if(and__24759__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__24759__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25407__auto__ = (((m == null))?null:m);
return (function (){var or__24771__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25407__auto__)]);
if(or__24771__auto__){
return or__24771__auto__;
} else {
var or__24771__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__24771__auto____$1){
return or__24771__auto____$1;
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
if(typeof cljs.core.async.t35010 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35010 = (function (mult,ch,cs,meta35011){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta35011 = meta35011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35012,meta35011__$1){
var self__ = this;
var _35012__$1 = this;
return (new cljs.core.async.t35010(self__.mult,self__.ch,self__.cs,meta35011__$1));
});})(cs))
;

cljs.core.async.t35010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35012){
var self__ = this;
var _35012__$1 = this;
return self__.meta35011;
});})(cs))
;

cljs.core.async.t35010.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t35010.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t35010.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t35010.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t35010.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t35010.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t35010.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35011","meta35011",969699168,null)], null);
});})(cs))
;

cljs.core.async.t35010.cljs$lang$type = true;

cljs.core.async.t35010.cljs$lang$ctorStr = "cljs.core.async/t35010";

cljs.core.async.t35010.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25350__auto__,writer__25351__auto__,opt__25352__auto__){
return cljs.core._write.call(null,writer__25351__auto__,"cljs.core.async/t35010");
});})(cs))
;

cljs.core.async.__GT_t35010 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t35010(mult__$1,ch__$1,cs__$1,meta35011){
return (new cljs.core.async.t35010(mult__$1,ch__$1,cs__$1,meta35011));
});})(cs))
;

}

return (new cljs.core.async.t35010(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28169__auto___35231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___35231,cs,m,dchan,dctr,done){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___35231,cs,m,dchan,dctr,done){
return (function (state_35143){
var state_val_35144 = (state_35143[(1)]);
if((state_val_35144 === (7))){
var inst_35139 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35145_35232 = state_35143__$1;
(statearr_35145_35232[(2)] = inst_35139);

(statearr_35145_35232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (20))){
var inst_35044 = (state_35143[(7)]);
var inst_35054 = cljs.core.first.call(null,inst_35044);
var inst_35055 = cljs.core.nth.call(null,inst_35054,(0),null);
var inst_35056 = cljs.core.nth.call(null,inst_35054,(1),null);
var state_35143__$1 = (function (){var statearr_35146 = state_35143;
(statearr_35146[(8)] = inst_35055);

return statearr_35146;
})();
if(cljs.core.truth_(inst_35056)){
var statearr_35147_35233 = state_35143__$1;
(statearr_35147_35233[(1)] = (22));

} else {
var statearr_35148_35234 = state_35143__$1;
(statearr_35148_35234[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (27))){
var inst_35015 = (state_35143[(9)]);
var inst_35084 = (state_35143[(10)]);
var inst_35086 = (state_35143[(11)]);
var inst_35091 = (state_35143[(12)]);
var inst_35091__$1 = cljs.core._nth.call(null,inst_35084,inst_35086);
var inst_35092 = cljs.core.async.put_BANG_.call(null,inst_35091__$1,inst_35015,done);
var state_35143__$1 = (function (){var statearr_35149 = state_35143;
(statearr_35149[(12)] = inst_35091__$1);

return statearr_35149;
})();
if(cljs.core.truth_(inst_35092)){
var statearr_35150_35235 = state_35143__$1;
(statearr_35150_35235[(1)] = (30));

} else {
var statearr_35151_35236 = state_35143__$1;
(statearr_35151_35236[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (1))){
var state_35143__$1 = state_35143;
var statearr_35152_35237 = state_35143__$1;
(statearr_35152_35237[(2)] = null);

(statearr_35152_35237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (24))){
var inst_35044 = (state_35143[(7)]);
var inst_35061 = (state_35143[(2)]);
var inst_35062 = cljs.core.next.call(null,inst_35044);
var inst_35024 = inst_35062;
var inst_35025 = null;
var inst_35026 = (0);
var inst_35027 = (0);
var state_35143__$1 = (function (){var statearr_35153 = state_35143;
(statearr_35153[(13)] = inst_35026);

(statearr_35153[(14)] = inst_35061);

(statearr_35153[(15)] = inst_35027);

(statearr_35153[(16)] = inst_35024);

(statearr_35153[(17)] = inst_35025);

return statearr_35153;
})();
var statearr_35154_35238 = state_35143__$1;
(statearr_35154_35238[(2)] = null);

(statearr_35154_35238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (39))){
var state_35143__$1 = state_35143;
var statearr_35158_35239 = state_35143__$1;
(statearr_35158_35239[(2)] = null);

(statearr_35158_35239[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (4))){
var inst_35015 = (state_35143[(9)]);
var inst_35015__$1 = (state_35143[(2)]);
var inst_35016 = (inst_35015__$1 == null);
var state_35143__$1 = (function (){var statearr_35159 = state_35143;
(statearr_35159[(9)] = inst_35015__$1);

return statearr_35159;
})();
if(cljs.core.truth_(inst_35016)){
var statearr_35160_35240 = state_35143__$1;
(statearr_35160_35240[(1)] = (5));

} else {
var statearr_35161_35241 = state_35143__$1;
(statearr_35161_35241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (15))){
var inst_35026 = (state_35143[(13)]);
var inst_35027 = (state_35143[(15)]);
var inst_35024 = (state_35143[(16)]);
var inst_35025 = (state_35143[(17)]);
var inst_35040 = (state_35143[(2)]);
var inst_35041 = (inst_35027 + (1));
var tmp35155 = inst_35026;
var tmp35156 = inst_35024;
var tmp35157 = inst_35025;
var inst_35024__$1 = tmp35156;
var inst_35025__$1 = tmp35157;
var inst_35026__$1 = tmp35155;
var inst_35027__$1 = inst_35041;
var state_35143__$1 = (function (){var statearr_35162 = state_35143;
(statearr_35162[(13)] = inst_35026__$1);

(statearr_35162[(15)] = inst_35027__$1);

(statearr_35162[(18)] = inst_35040);

(statearr_35162[(16)] = inst_35024__$1);

(statearr_35162[(17)] = inst_35025__$1);

return statearr_35162;
})();
var statearr_35163_35242 = state_35143__$1;
(statearr_35163_35242[(2)] = null);

(statearr_35163_35242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (21))){
var inst_35065 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35167_35243 = state_35143__$1;
(statearr_35167_35243[(2)] = inst_35065);

(statearr_35167_35243[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (31))){
var inst_35091 = (state_35143[(12)]);
var inst_35095 = done.call(null,null);
var inst_35096 = cljs.core.async.untap_STAR_.call(null,m,inst_35091);
var state_35143__$1 = (function (){var statearr_35168 = state_35143;
(statearr_35168[(19)] = inst_35095);

return statearr_35168;
})();
var statearr_35169_35244 = state_35143__$1;
(statearr_35169_35244[(2)] = inst_35096);

(statearr_35169_35244[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (32))){
var inst_35083 = (state_35143[(20)]);
var inst_35084 = (state_35143[(10)]);
var inst_35086 = (state_35143[(11)]);
var inst_35085 = (state_35143[(21)]);
var inst_35098 = (state_35143[(2)]);
var inst_35099 = (inst_35086 + (1));
var tmp35164 = inst_35083;
var tmp35165 = inst_35084;
var tmp35166 = inst_35085;
var inst_35083__$1 = tmp35164;
var inst_35084__$1 = tmp35165;
var inst_35085__$1 = tmp35166;
var inst_35086__$1 = inst_35099;
var state_35143__$1 = (function (){var statearr_35170 = state_35143;
(statearr_35170[(20)] = inst_35083__$1);

(statearr_35170[(10)] = inst_35084__$1);

(statearr_35170[(22)] = inst_35098);

(statearr_35170[(11)] = inst_35086__$1);

(statearr_35170[(21)] = inst_35085__$1);

return statearr_35170;
})();
var statearr_35171_35245 = state_35143__$1;
(statearr_35171_35245[(2)] = null);

(statearr_35171_35245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (40))){
var inst_35111 = (state_35143[(23)]);
var inst_35115 = done.call(null,null);
var inst_35116 = cljs.core.async.untap_STAR_.call(null,m,inst_35111);
var state_35143__$1 = (function (){var statearr_35172 = state_35143;
(statearr_35172[(24)] = inst_35115);

return statearr_35172;
})();
var statearr_35173_35246 = state_35143__$1;
(statearr_35173_35246[(2)] = inst_35116);

(statearr_35173_35246[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (33))){
var inst_35102 = (state_35143[(25)]);
var inst_35104 = cljs.core.chunked_seq_QMARK_.call(null,inst_35102);
var state_35143__$1 = state_35143;
if(inst_35104){
var statearr_35174_35247 = state_35143__$1;
(statearr_35174_35247[(1)] = (36));

} else {
var statearr_35175_35248 = state_35143__$1;
(statearr_35175_35248[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (13))){
var inst_35034 = (state_35143[(26)]);
var inst_35037 = cljs.core.async.close_BANG_.call(null,inst_35034);
var state_35143__$1 = state_35143;
var statearr_35176_35249 = state_35143__$1;
(statearr_35176_35249[(2)] = inst_35037);

(statearr_35176_35249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (22))){
var inst_35055 = (state_35143[(8)]);
var inst_35058 = cljs.core.async.close_BANG_.call(null,inst_35055);
var state_35143__$1 = state_35143;
var statearr_35177_35250 = state_35143__$1;
(statearr_35177_35250[(2)] = inst_35058);

(statearr_35177_35250[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (36))){
var inst_35102 = (state_35143[(25)]);
var inst_35106 = cljs.core.chunk_first.call(null,inst_35102);
var inst_35107 = cljs.core.chunk_rest.call(null,inst_35102);
var inst_35108 = cljs.core.count.call(null,inst_35106);
var inst_35083 = inst_35107;
var inst_35084 = inst_35106;
var inst_35085 = inst_35108;
var inst_35086 = (0);
var state_35143__$1 = (function (){var statearr_35178 = state_35143;
(statearr_35178[(20)] = inst_35083);

(statearr_35178[(10)] = inst_35084);

(statearr_35178[(11)] = inst_35086);

(statearr_35178[(21)] = inst_35085);

return statearr_35178;
})();
var statearr_35179_35251 = state_35143__$1;
(statearr_35179_35251[(2)] = null);

(statearr_35179_35251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (41))){
var inst_35102 = (state_35143[(25)]);
var inst_35118 = (state_35143[(2)]);
var inst_35119 = cljs.core.next.call(null,inst_35102);
var inst_35083 = inst_35119;
var inst_35084 = null;
var inst_35085 = (0);
var inst_35086 = (0);
var state_35143__$1 = (function (){var statearr_35180 = state_35143;
(statearr_35180[(20)] = inst_35083);

(statearr_35180[(10)] = inst_35084);

(statearr_35180[(27)] = inst_35118);

(statearr_35180[(11)] = inst_35086);

(statearr_35180[(21)] = inst_35085);

return statearr_35180;
})();
var statearr_35181_35252 = state_35143__$1;
(statearr_35181_35252[(2)] = null);

(statearr_35181_35252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (43))){
var state_35143__$1 = state_35143;
var statearr_35182_35253 = state_35143__$1;
(statearr_35182_35253[(2)] = null);

(statearr_35182_35253[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (29))){
var inst_35127 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35183_35254 = state_35143__$1;
(statearr_35183_35254[(2)] = inst_35127);

(statearr_35183_35254[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (44))){
var inst_35136 = (state_35143[(2)]);
var state_35143__$1 = (function (){var statearr_35184 = state_35143;
(statearr_35184[(28)] = inst_35136);

return statearr_35184;
})();
var statearr_35185_35255 = state_35143__$1;
(statearr_35185_35255[(2)] = null);

(statearr_35185_35255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (6))){
var inst_35075 = (state_35143[(29)]);
var inst_35074 = cljs.core.deref.call(null,cs);
var inst_35075__$1 = cljs.core.keys.call(null,inst_35074);
var inst_35076 = cljs.core.count.call(null,inst_35075__$1);
var inst_35077 = cljs.core.reset_BANG_.call(null,dctr,inst_35076);
var inst_35082 = cljs.core.seq.call(null,inst_35075__$1);
var inst_35083 = inst_35082;
var inst_35084 = null;
var inst_35085 = (0);
var inst_35086 = (0);
var state_35143__$1 = (function (){var statearr_35186 = state_35143;
(statearr_35186[(20)] = inst_35083);

(statearr_35186[(30)] = inst_35077);

(statearr_35186[(10)] = inst_35084);

(statearr_35186[(11)] = inst_35086);

(statearr_35186[(29)] = inst_35075__$1);

(statearr_35186[(21)] = inst_35085);

return statearr_35186;
})();
var statearr_35187_35256 = state_35143__$1;
(statearr_35187_35256[(2)] = null);

(statearr_35187_35256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (28))){
var inst_35083 = (state_35143[(20)]);
var inst_35102 = (state_35143[(25)]);
var inst_35102__$1 = cljs.core.seq.call(null,inst_35083);
var state_35143__$1 = (function (){var statearr_35188 = state_35143;
(statearr_35188[(25)] = inst_35102__$1);

return statearr_35188;
})();
if(inst_35102__$1){
var statearr_35189_35257 = state_35143__$1;
(statearr_35189_35257[(1)] = (33));

} else {
var statearr_35190_35258 = state_35143__$1;
(statearr_35190_35258[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (25))){
var inst_35086 = (state_35143[(11)]);
var inst_35085 = (state_35143[(21)]);
var inst_35088 = (inst_35086 < inst_35085);
var inst_35089 = inst_35088;
var state_35143__$1 = state_35143;
if(cljs.core.truth_(inst_35089)){
var statearr_35191_35259 = state_35143__$1;
(statearr_35191_35259[(1)] = (27));

} else {
var statearr_35192_35260 = state_35143__$1;
(statearr_35192_35260[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (34))){
var state_35143__$1 = state_35143;
var statearr_35193_35261 = state_35143__$1;
(statearr_35193_35261[(2)] = null);

(statearr_35193_35261[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (17))){
var state_35143__$1 = state_35143;
var statearr_35194_35262 = state_35143__$1;
(statearr_35194_35262[(2)] = null);

(statearr_35194_35262[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (3))){
var inst_35141 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35143__$1,inst_35141);
} else {
if((state_val_35144 === (12))){
var inst_35070 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35195_35263 = state_35143__$1;
(statearr_35195_35263[(2)] = inst_35070);

(statearr_35195_35263[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (2))){
var state_35143__$1 = state_35143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35143__$1,(4),ch);
} else {
if((state_val_35144 === (23))){
var state_35143__$1 = state_35143;
var statearr_35196_35264 = state_35143__$1;
(statearr_35196_35264[(2)] = null);

(statearr_35196_35264[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (35))){
var inst_35125 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35197_35265 = state_35143__$1;
(statearr_35197_35265[(2)] = inst_35125);

(statearr_35197_35265[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (19))){
var inst_35044 = (state_35143[(7)]);
var inst_35048 = cljs.core.chunk_first.call(null,inst_35044);
var inst_35049 = cljs.core.chunk_rest.call(null,inst_35044);
var inst_35050 = cljs.core.count.call(null,inst_35048);
var inst_35024 = inst_35049;
var inst_35025 = inst_35048;
var inst_35026 = inst_35050;
var inst_35027 = (0);
var state_35143__$1 = (function (){var statearr_35198 = state_35143;
(statearr_35198[(13)] = inst_35026);

(statearr_35198[(15)] = inst_35027);

(statearr_35198[(16)] = inst_35024);

(statearr_35198[(17)] = inst_35025);

return statearr_35198;
})();
var statearr_35199_35266 = state_35143__$1;
(statearr_35199_35266[(2)] = null);

(statearr_35199_35266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (11))){
var inst_35044 = (state_35143[(7)]);
var inst_35024 = (state_35143[(16)]);
var inst_35044__$1 = cljs.core.seq.call(null,inst_35024);
var state_35143__$1 = (function (){var statearr_35200 = state_35143;
(statearr_35200[(7)] = inst_35044__$1);

return statearr_35200;
})();
if(inst_35044__$1){
var statearr_35201_35267 = state_35143__$1;
(statearr_35201_35267[(1)] = (16));

} else {
var statearr_35202_35268 = state_35143__$1;
(statearr_35202_35268[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (9))){
var inst_35072 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35203_35269 = state_35143__$1;
(statearr_35203_35269[(2)] = inst_35072);

(statearr_35203_35269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (5))){
var inst_35022 = cljs.core.deref.call(null,cs);
var inst_35023 = cljs.core.seq.call(null,inst_35022);
var inst_35024 = inst_35023;
var inst_35025 = null;
var inst_35026 = (0);
var inst_35027 = (0);
var state_35143__$1 = (function (){var statearr_35204 = state_35143;
(statearr_35204[(13)] = inst_35026);

(statearr_35204[(15)] = inst_35027);

(statearr_35204[(16)] = inst_35024);

(statearr_35204[(17)] = inst_35025);

return statearr_35204;
})();
var statearr_35205_35270 = state_35143__$1;
(statearr_35205_35270[(2)] = null);

(statearr_35205_35270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (14))){
var state_35143__$1 = state_35143;
var statearr_35206_35271 = state_35143__$1;
(statearr_35206_35271[(2)] = null);

(statearr_35206_35271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (45))){
var inst_35133 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35207_35272 = state_35143__$1;
(statearr_35207_35272[(2)] = inst_35133);

(statearr_35207_35272[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (26))){
var inst_35075 = (state_35143[(29)]);
var inst_35129 = (state_35143[(2)]);
var inst_35130 = cljs.core.seq.call(null,inst_35075);
var state_35143__$1 = (function (){var statearr_35208 = state_35143;
(statearr_35208[(31)] = inst_35129);

return statearr_35208;
})();
if(inst_35130){
var statearr_35209_35273 = state_35143__$1;
(statearr_35209_35273[(1)] = (42));

} else {
var statearr_35210_35274 = state_35143__$1;
(statearr_35210_35274[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (16))){
var inst_35044 = (state_35143[(7)]);
var inst_35046 = cljs.core.chunked_seq_QMARK_.call(null,inst_35044);
var state_35143__$1 = state_35143;
if(inst_35046){
var statearr_35211_35275 = state_35143__$1;
(statearr_35211_35275[(1)] = (19));

} else {
var statearr_35212_35276 = state_35143__$1;
(statearr_35212_35276[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (38))){
var inst_35122 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35213_35277 = state_35143__$1;
(statearr_35213_35277[(2)] = inst_35122);

(statearr_35213_35277[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (30))){
var state_35143__$1 = state_35143;
var statearr_35214_35278 = state_35143__$1;
(statearr_35214_35278[(2)] = null);

(statearr_35214_35278[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (10))){
var inst_35027 = (state_35143[(15)]);
var inst_35025 = (state_35143[(17)]);
var inst_35033 = cljs.core._nth.call(null,inst_35025,inst_35027);
var inst_35034 = cljs.core.nth.call(null,inst_35033,(0),null);
var inst_35035 = cljs.core.nth.call(null,inst_35033,(1),null);
var state_35143__$1 = (function (){var statearr_35215 = state_35143;
(statearr_35215[(26)] = inst_35034);

return statearr_35215;
})();
if(cljs.core.truth_(inst_35035)){
var statearr_35216_35279 = state_35143__$1;
(statearr_35216_35279[(1)] = (13));

} else {
var statearr_35217_35280 = state_35143__$1;
(statearr_35217_35280[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (18))){
var inst_35068 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35218_35281 = state_35143__$1;
(statearr_35218_35281[(2)] = inst_35068);

(statearr_35218_35281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (42))){
var state_35143__$1 = state_35143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35143__$1,(45),dchan);
} else {
if((state_val_35144 === (37))){
var inst_35015 = (state_35143[(9)]);
var inst_35102 = (state_35143[(25)]);
var inst_35111 = (state_35143[(23)]);
var inst_35111__$1 = cljs.core.first.call(null,inst_35102);
var inst_35112 = cljs.core.async.put_BANG_.call(null,inst_35111__$1,inst_35015,done);
var state_35143__$1 = (function (){var statearr_35219 = state_35143;
(statearr_35219[(23)] = inst_35111__$1);

return statearr_35219;
})();
if(cljs.core.truth_(inst_35112)){
var statearr_35220_35282 = state_35143__$1;
(statearr_35220_35282[(1)] = (39));

} else {
var statearr_35221_35283 = state_35143__$1;
(statearr_35221_35283[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (8))){
var inst_35026 = (state_35143[(13)]);
var inst_35027 = (state_35143[(15)]);
var inst_35029 = (inst_35027 < inst_35026);
var inst_35030 = inst_35029;
var state_35143__$1 = state_35143;
if(cljs.core.truth_(inst_35030)){
var statearr_35222_35284 = state_35143__$1;
(statearr_35222_35284[(1)] = (10));

} else {
var statearr_35223_35285 = state_35143__$1;
(statearr_35223_35285[(1)] = (11));

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
});})(c__28169__auto___35231,cs,m,dchan,dctr,done))
;
return ((function (switch__28107__auto__,c__28169__auto___35231,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28108__auto__ = null;
var cljs$core$async$mult_$_state_machine__28108__auto____0 = (function (){
var statearr_35227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35227[(0)] = cljs$core$async$mult_$_state_machine__28108__auto__);

(statearr_35227[(1)] = (1));

return statearr_35227;
});
var cljs$core$async$mult_$_state_machine__28108__auto____1 = (function (state_35143){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_35143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e35228){if((e35228 instanceof Object)){
var ex__28111__auto__ = e35228;
var statearr_35229_35286 = state_35143;
(statearr_35229_35286[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35287 = state_35143;
state_35143 = G__35287;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28108__auto__ = function(state_35143){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28108__auto____1.call(this,state_35143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28108__auto____0;
cljs$core$async$mult_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28108__auto____1;
return cljs$core$async$mult_$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___35231,cs,m,dchan,dctr,done))
})();
var state__28171__auto__ = (function (){var statearr_35230 = f__28170__auto__.call(null);
(statearr_35230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___35231);

return statearr_35230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___35231,cs,m,dchan,dctr,done))
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
var G__35289 = arguments.length;
switch (G__35289) {
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

cljs.core.async.Mix = (function (){var obj35292 = {};
return obj35292;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__24759__auto__ = m;
if(and__24759__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__24759__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25407__auto__ = (((m == null))?null:m);
return (function (){var or__24771__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25407__auto__)]);
if(or__24771__auto__){
return or__24771__auto__;
} else {
var or__24771__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__24771__auto____$1){
return or__24771__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__24759__auto__ = m;
if(and__24759__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__24759__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25407__auto__ = (((m == null))?null:m);
return (function (){var or__24771__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25407__auto__)]);
if(or__24771__auto__){
return or__24771__auto__;
} else {
var or__24771__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__24771__auto____$1){
return or__24771__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__24759__auto__ = m;
if(and__24759__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__24759__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25407__auto__ = (((m == null))?null:m);
return (function (){var or__24771__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25407__auto__)]);
if(or__24771__auto__){
return or__24771__auto__;
} else {
var or__24771__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__24771__auto____$1){
return or__24771__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__24759__auto__ = m;
if(and__24759__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__24759__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25407__auto__ = (((m == null))?null:m);
return (function (){var or__24771__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25407__auto__)]);
if(or__24771__auto__){
return or__24771__auto__;
} else {
var or__24771__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__24771__auto____$1){
return or__24771__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__24759__auto__ = m;
if(and__24759__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__24759__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25407__auto__ = (((m == null))?null:m);
return (function (){var or__24771__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25407__auto__)]);
if(or__24771__auto__){
return or__24771__auto__;
} else {
var or__24771__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__24771__auto____$1){
return or__24771__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__25811__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25811__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35297){
var map__35298 = p__35297;
var map__35298__$1 = ((cljs.core.seq_QMARK_.call(null,map__35298))?cljs.core.apply.call(null,cljs.core.hash_map,map__35298):map__35298);
var opts = map__35298__$1;
var statearr_35299_35302 = state;
(statearr_35299_35302[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__35298,map__35298__$1,opts){
return (function (val){
var statearr_35300_35303 = state;
(statearr_35300_35303[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35298,map__35298__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_35301_35304 = state;
(statearr_35301_35304[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35293){
var G__35294 = cljs.core.first.call(null,seq35293);
var seq35293__$1 = cljs.core.next.call(null,seq35293);
var G__35295 = cljs.core.first.call(null,seq35293__$1);
var seq35293__$2 = cljs.core.next.call(null,seq35293__$1);
var G__35296 = cljs.core.first.call(null,seq35293__$2);
var seq35293__$3 = cljs.core.next.call(null,seq35293__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35294,G__35295,G__35296,seq35293__$3);
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
if(typeof cljs.core.async.t35424 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35424 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35425){
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
this.meta35425 = meta35425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35426,meta35425__$1){
var self__ = this;
var _35426__$1 = this;
return (new cljs.core.async.t35424(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35425__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35426){
var self__ = this;
var _35426__$1 = this;
return self__.meta35425;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35424.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t35424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35424.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t35424.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35424.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35424.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35424.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35424.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t35424.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35425","meta35425",1562716440,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35424.cljs$lang$type = true;

cljs.core.async.t35424.cljs$lang$ctorStr = "cljs.core.async/t35424";

cljs.core.async.t35424.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25350__auto__,writer__25351__auto__,opt__25352__auto__){
return cljs.core._write.call(null,writer__25351__auto__,"cljs.core.async/t35424");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t35424 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t35424(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35425){
return (new cljs.core.async.t35424(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35425));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t35424(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28169__auto___35543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___35543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___35543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35496){
var state_val_35497 = (state_35496[(1)]);
if((state_val_35497 === (7))){
var inst_35440 = (state_35496[(7)]);
var inst_35445 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35440);
var state_35496__$1 = state_35496;
var statearr_35498_35544 = state_35496__$1;
(statearr_35498_35544[(2)] = inst_35445);

(statearr_35498_35544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (20))){
var inst_35455 = (state_35496[(8)]);
var state_35496__$1 = state_35496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35496__$1,(23),out,inst_35455);
} else {
if((state_val_35497 === (1))){
var inst_35430 = (state_35496[(9)]);
var inst_35430__$1 = calc_state.call(null);
var inst_35431 = cljs.core.seq_QMARK_.call(null,inst_35430__$1);
var state_35496__$1 = (function (){var statearr_35499 = state_35496;
(statearr_35499[(9)] = inst_35430__$1);

return statearr_35499;
})();
if(inst_35431){
var statearr_35500_35545 = state_35496__$1;
(statearr_35500_35545[(1)] = (2));

} else {
var statearr_35501_35546 = state_35496__$1;
(statearr_35501_35546[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (24))){
var inst_35448 = (state_35496[(10)]);
var inst_35440 = inst_35448;
var state_35496__$1 = (function (){var statearr_35502 = state_35496;
(statearr_35502[(7)] = inst_35440);

return statearr_35502;
})();
var statearr_35503_35547 = state_35496__$1;
(statearr_35503_35547[(2)] = null);

(statearr_35503_35547[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (4))){
var inst_35430 = (state_35496[(9)]);
var inst_35436 = (state_35496[(2)]);
var inst_35437 = cljs.core.get.call(null,inst_35436,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35438 = cljs.core.get.call(null,inst_35436,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35439 = cljs.core.get.call(null,inst_35436,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35440 = inst_35430;
var state_35496__$1 = (function (){var statearr_35504 = state_35496;
(statearr_35504[(11)] = inst_35439);

(statearr_35504[(7)] = inst_35440);

(statearr_35504[(12)] = inst_35437);

(statearr_35504[(13)] = inst_35438);

return statearr_35504;
})();
var statearr_35505_35548 = state_35496__$1;
(statearr_35505_35548[(2)] = null);

(statearr_35505_35548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (15))){
var state_35496__$1 = state_35496;
var statearr_35506_35549 = state_35496__$1;
(statearr_35506_35549[(2)] = null);

(statearr_35506_35549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (21))){
var inst_35448 = (state_35496[(10)]);
var inst_35440 = inst_35448;
var state_35496__$1 = (function (){var statearr_35507 = state_35496;
(statearr_35507[(7)] = inst_35440);

return statearr_35507;
})();
var statearr_35508_35550 = state_35496__$1;
(statearr_35508_35550[(2)] = null);

(statearr_35508_35550[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (13))){
var inst_35492 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
var statearr_35509_35551 = state_35496__$1;
(statearr_35509_35551[(2)] = inst_35492);

(statearr_35509_35551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (22))){
var inst_35490 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
var statearr_35510_35552 = state_35496__$1;
(statearr_35510_35552[(2)] = inst_35490);

(statearr_35510_35552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (6))){
var inst_35494 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35496__$1,inst_35494);
} else {
if((state_val_35497 === (25))){
var state_35496__$1 = state_35496;
var statearr_35511_35553 = state_35496__$1;
(statearr_35511_35553[(2)] = null);

(statearr_35511_35553[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (17))){
var inst_35470 = (state_35496[(14)]);
var state_35496__$1 = state_35496;
var statearr_35512_35554 = state_35496__$1;
(statearr_35512_35554[(2)] = inst_35470);

(statearr_35512_35554[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (3))){
var inst_35430 = (state_35496[(9)]);
var state_35496__$1 = state_35496;
var statearr_35513_35555 = state_35496__$1;
(statearr_35513_35555[(2)] = inst_35430);

(statearr_35513_35555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (12))){
var inst_35456 = (state_35496[(15)]);
var inst_35470 = (state_35496[(14)]);
var inst_35449 = (state_35496[(16)]);
var inst_35470__$1 = inst_35449.call(null,inst_35456);
var state_35496__$1 = (function (){var statearr_35514 = state_35496;
(statearr_35514[(14)] = inst_35470__$1);

return statearr_35514;
})();
if(cljs.core.truth_(inst_35470__$1)){
var statearr_35515_35556 = state_35496__$1;
(statearr_35515_35556[(1)] = (17));

} else {
var statearr_35516_35557 = state_35496__$1;
(statearr_35516_35557[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (2))){
var inst_35430 = (state_35496[(9)]);
var inst_35433 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35430);
var state_35496__$1 = state_35496;
var statearr_35517_35558 = state_35496__$1;
(statearr_35517_35558[(2)] = inst_35433);

(statearr_35517_35558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (23))){
var inst_35481 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
if(cljs.core.truth_(inst_35481)){
var statearr_35518_35559 = state_35496__$1;
(statearr_35518_35559[(1)] = (24));

} else {
var statearr_35519_35560 = state_35496__$1;
(statearr_35519_35560[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (19))){
var inst_35478 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
if(cljs.core.truth_(inst_35478)){
var statearr_35520_35561 = state_35496__$1;
(statearr_35520_35561[(1)] = (20));

} else {
var statearr_35521_35562 = state_35496__$1;
(statearr_35521_35562[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (11))){
var inst_35455 = (state_35496[(8)]);
var inst_35461 = (inst_35455 == null);
var state_35496__$1 = state_35496;
if(cljs.core.truth_(inst_35461)){
var statearr_35522_35563 = state_35496__$1;
(statearr_35522_35563[(1)] = (14));

} else {
var statearr_35523_35564 = state_35496__$1;
(statearr_35523_35564[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (9))){
var inst_35448 = (state_35496[(10)]);
var inst_35448__$1 = (state_35496[(2)]);
var inst_35449 = cljs.core.get.call(null,inst_35448__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35450 = cljs.core.get.call(null,inst_35448__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35451 = cljs.core.get.call(null,inst_35448__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35496__$1 = (function (){var statearr_35524 = state_35496;
(statearr_35524[(17)] = inst_35450);

(statearr_35524[(16)] = inst_35449);

(statearr_35524[(10)] = inst_35448__$1);

return statearr_35524;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35496__$1,(10),inst_35451);
} else {
if((state_val_35497 === (5))){
var inst_35440 = (state_35496[(7)]);
var inst_35443 = cljs.core.seq_QMARK_.call(null,inst_35440);
var state_35496__$1 = state_35496;
if(inst_35443){
var statearr_35525_35565 = state_35496__$1;
(statearr_35525_35565[(1)] = (7));

} else {
var statearr_35526_35566 = state_35496__$1;
(statearr_35526_35566[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (14))){
var inst_35456 = (state_35496[(15)]);
var inst_35463 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35456);
var state_35496__$1 = state_35496;
var statearr_35527_35567 = state_35496__$1;
(statearr_35527_35567[(2)] = inst_35463);

(statearr_35527_35567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (26))){
var inst_35486 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
var statearr_35528_35568 = state_35496__$1;
(statearr_35528_35568[(2)] = inst_35486);

(statearr_35528_35568[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (16))){
var inst_35466 = (state_35496[(2)]);
var inst_35467 = calc_state.call(null);
var inst_35440 = inst_35467;
var state_35496__$1 = (function (){var statearr_35529 = state_35496;
(statearr_35529[(7)] = inst_35440);

(statearr_35529[(18)] = inst_35466);

return statearr_35529;
})();
var statearr_35530_35569 = state_35496__$1;
(statearr_35530_35569[(2)] = null);

(statearr_35530_35569[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (10))){
var inst_35456 = (state_35496[(15)]);
var inst_35455 = (state_35496[(8)]);
var inst_35454 = (state_35496[(2)]);
var inst_35455__$1 = cljs.core.nth.call(null,inst_35454,(0),null);
var inst_35456__$1 = cljs.core.nth.call(null,inst_35454,(1),null);
var inst_35457 = (inst_35455__$1 == null);
var inst_35458 = cljs.core._EQ_.call(null,inst_35456__$1,change);
var inst_35459 = (inst_35457) || (inst_35458);
var state_35496__$1 = (function (){var statearr_35531 = state_35496;
(statearr_35531[(15)] = inst_35456__$1);

(statearr_35531[(8)] = inst_35455__$1);

return statearr_35531;
})();
if(cljs.core.truth_(inst_35459)){
var statearr_35532_35570 = state_35496__$1;
(statearr_35532_35570[(1)] = (11));

} else {
var statearr_35533_35571 = state_35496__$1;
(statearr_35533_35571[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (18))){
var inst_35450 = (state_35496[(17)]);
var inst_35456 = (state_35496[(15)]);
var inst_35449 = (state_35496[(16)]);
var inst_35473 = cljs.core.empty_QMARK_.call(null,inst_35449);
var inst_35474 = inst_35450.call(null,inst_35456);
var inst_35475 = cljs.core.not.call(null,inst_35474);
var inst_35476 = (inst_35473) && (inst_35475);
var state_35496__$1 = state_35496;
var statearr_35534_35572 = state_35496__$1;
(statearr_35534_35572[(2)] = inst_35476);

(statearr_35534_35572[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (8))){
var inst_35440 = (state_35496[(7)]);
var state_35496__$1 = state_35496;
var statearr_35535_35573 = state_35496__$1;
(statearr_35535_35573[(2)] = inst_35440);

(statearr_35535_35573[(1)] = (9));


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
});})(c__28169__auto___35543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28107__auto__,c__28169__auto___35543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28108__auto__ = null;
var cljs$core$async$mix_$_state_machine__28108__auto____0 = (function (){
var statearr_35539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35539[(0)] = cljs$core$async$mix_$_state_machine__28108__auto__);

(statearr_35539[(1)] = (1));

return statearr_35539;
});
var cljs$core$async$mix_$_state_machine__28108__auto____1 = (function (state_35496){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_35496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e35540){if((e35540 instanceof Object)){
var ex__28111__auto__ = e35540;
var statearr_35541_35574 = state_35496;
(statearr_35541_35574[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35575 = state_35496;
state_35496 = G__35575;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28108__auto__ = function(state_35496){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28108__auto____1.call(this,state_35496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28108__auto____0;
cljs$core$async$mix_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28108__auto____1;
return cljs$core$async$mix_$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___35543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28171__auto__ = (function (){var statearr_35542 = f__28170__auto__.call(null);
(statearr_35542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___35543);

return statearr_35542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___35543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj35577 = {};
return obj35577;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__24759__auto__ = p;
if(and__24759__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__24759__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25407__auto__ = (((p == null))?null:p);
return (function (){var or__24771__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25407__auto__)]);
if(or__24771__auto__){
return or__24771__auto__;
} else {
var or__24771__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__24771__auto____$1){
return or__24771__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__24759__auto__ = p;
if(and__24759__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__24759__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25407__auto__ = (((p == null))?null:p);
return (function (){var or__24771__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25407__auto__)]);
if(or__24771__auto__){
return or__24771__auto__;
} else {
var or__24771__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__24771__auto____$1){
return or__24771__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__35579 = arguments.length;
switch (G__35579) {
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
if((function (){var and__24759__auto__ = p;
if(and__24759__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__24759__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25407__auto__ = (((p == null))?null:p);
return (function (){var or__24771__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25407__auto__)]);
if(or__24771__auto__){
return or__24771__auto__;
} else {
var or__24771__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__24771__auto____$1){
return or__24771__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__24759__auto__ = p;
if(and__24759__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__24759__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25407__auto__ = (((p == null))?null:p);
return (function (){var or__24771__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25407__auto__)]);
if(or__24771__auto__){
return or__24771__auto__;
} else {
var or__24771__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__24771__auto____$1){
return or__24771__auto____$1;
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
var G__35583 = arguments.length;
switch (G__35583) {
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
var or__24771__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24771__auto__)){
return or__24771__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24771__auto__,mults){
return (function (p1__35581_SHARP_){
if(cljs.core.truth_(p1__35581_SHARP_.call(null,topic))){
return p1__35581_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35581_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24771__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t35584 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35584 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35585){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35585 = meta35585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35586,meta35585__$1){
var self__ = this;
var _35586__$1 = this;
return (new cljs.core.async.t35584(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35585__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t35584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35586){
var self__ = this;
var _35586__$1 = this;
return self__.meta35585;
});})(mults,ensure_mult))
;

cljs.core.async.t35584.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t35584.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t35584.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t35584.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t35584.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t35584.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t35584.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t35584.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35585","meta35585",-642856004,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t35584.cljs$lang$type = true;

cljs.core.async.t35584.cljs$lang$ctorStr = "cljs.core.async/t35584";

cljs.core.async.t35584.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25350__auto__,writer__25351__auto__,opt__25352__auto__){
return cljs.core._write.call(null,writer__25351__auto__,"cljs.core.async/t35584");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t35584 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t35584(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35585){
return (new cljs.core.async.t35584(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35585));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t35584(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28169__auto___35707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___35707,mults,ensure_mult,p){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___35707,mults,ensure_mult,p){
return (function (state_35658){
var state_val_35659 = (state_35658[(1)]);
if((state_val_35659 === (7))){
var inst_35654 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35660_35708 = state_35658__$1;
(statearr_35660_35708[(2)] = inst_35654);

(statearr_35660_35708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (20))){
var state_35658__$1 = state_35658;
var statearr_35661_35709 = state_35658__$1;
(statearr_35661_35709[(2)] = null);

(statearr_35661_35709[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (1))){
var state_35658__$1 = state_35658;
var statearr_35662_35710 = state_35658__$1;
(statearr_35662_35710[(2)] = null);

(statearr_35662_35710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (24))){
var inst_35637 = (state_35658[(7)]);
var inst_35646 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35637);
var state_35658__$1 = state_35658;
var statearr_35663_35711 = state_35658__$1;
(statearr_35663_35711[(2)] = inst_35646);

(statearr_35663_35711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (4))){
var inst_35589 = (state_35658[(8)]);
var inst_35589__$1 = (state_35658[(2)]);
var inst_35590 = (inst_35589__$1 == null);
var state_35658__$1 = (function (){var statearr_35664 = state_35658;
(statearr_35664[(8)] = inst_35589__$1);

return statearr_35664;
})();
if(cljs.core.truth_(inst_35590)){
var statearr_35665_35712 = state_35658__$1;
(statearr_35665_35712[(1)] = (5));

} else {
var statearr_35666_35713 = state_35658__$1;
(statearr_35666_35713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (15))){
var inst_35631 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35667_35714 = state_35658__$1;
(statearr_35667_35714[(2)] = inst_35631);

(statearr_35667_35714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (21))){
var inst_35651 = (state_35658[(2)]);
var state_35658__$1 = (function (){var statearr_35668 = state_35658;
(statearr_35668[(9)] = inst_35651);

return statearr_35668;
})();
var statearr_35669_35715 = state_35658__$1;
(statearr_35669_35715[(2)] = null);

(statearr_35669_35715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (13))){
var inst_35613 = (state_35658[(10)]);
var inst_35615 = cljs.core.chunked_seq_QMARK_.call(null,inst_35613);
var state_35658__$1 = state_35658;
if(inst_35615){
var statearr_35670_35716 = state_35658__$1;
(statearr_35670_35716[(1)] = (16));

} else {
var statearr_35671_35717 = state_35658__$1;
(statearr_35671_35717[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (22))){
var inst_35643 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
if(cljs.core.truth_(inst_35643)){
var statearr_35672_35718 = state_35658__$1;
(statearr_35672_35718[(1)] = (23));

} else {
var statearr_35673_35719 = state_35658__$1;
(statearr_35673_35719[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (6))){
var inst_35637 = (state_35658[(7)]);
var inst_35639 = (state_35658[(11)]);
var inst_35589 = (state_35658[(8)]);
var inst_35637__$1 = topic_fn.call(null,inst_35589);
var inst_35638 = cljs.core.deref.call(null,mults);
var inst_35639__$1 = cljs.core.get.call(null,inst_35638,inst_35637__$1);
var state_35658__$1 = (function (){var statearr_35674 = state_35658;
(statearr_35674[(7)] = inst_35637__$1);

(statearr_35674[(11)] = inst_35639__$1);

return statearr_35674;
})();
if(cljs.core.truth_(inst_35639__$1)){
var statearr_35675_35720 = state_35658__$1;
(statearr_35675_35720[(1)] = (19));

} else {
var statearr_35676_35721 = state_35658__$1;
(statearr_35676_35721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (25))){
var inst_35648 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35677_35722 = state_35658__$1;
(statearr_35677_35722[(2)] = inst_35648);

(statearr_35677_35722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (17))){
var inst_35613 = (state_35658[(10)]);
var inst_35622 = cljs.core.first.call(null,inst_35613);
var inst_35623 = cljs.core.async.muxch_STAR_.call(null,inst_35622);
var inst_35624 = cljs.core.async.close_BANG_.call(null,inst_35623);
var inst_35625 = cljs.core.next.call(null,inst_35613);
var inst_35599 = inst_35625;
var inst_35600 = null;
var inst_35601 = (0);
var inst_35602 = (0);
var state_35658__$1 = (function (){var statearr_35678 = state_35658;
(statearr_35678[(12)] = inst_35600);

(statearr_35678[(13)] = inst_35602);

(statearr_35678[(14)] = inst_35624);

(statearr_35678[(15)] = inst_35601);

(statearr_35678[(16)] = inst_35599);

return statearr_35678;
})();
var statearr_35679_35723 = state_35658__$1;
(statearr_35679_35723[(2)] = null);

(statearr_35679_35723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (3))){
var inst_35656 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35658__$1,inst_35656);
} else {
if((state_val_35659 === (12))){
var inst_35633 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35680_35724 = state_35658__$1;
(statearr_35680_35724[(2)] = inst_35633);

(statearr_35680_35724[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (2))){
var state_35658__$1 = state_35658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35658__$1,(4),ch);
} else {
if((state_val_35659 === (23))){
var state_35658__$1 = state_35658;
var statearr_35681_35725 = state_35658__$1;
(statearr_35681_35725[(2)] = null);

(statearr_35681_35725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (19))){
var inst_35639 = (state_35658[(11)]);
var inst_35589 = (state_35658[(8)]);
var inst_35641 = cljs.core.async.muxch_STAR_.call(null,inst_35639);
var state_35658__$1 = state_35658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35658__$1,(22),inst_35641,inst_35589);
} else {
if((state_val_35659 === (11))){
var inst_35613 = (state_35658[(10)]);
var inst_35599 = (state_35658[(16)]);
var inst_35613__$1 = cljs.core.seq.call(null,inst_35599);
var state_35658__$1 = (function (){var statearr_35682 = state_35658;
(statearr_35682[(10)] = inst_35613__$1);

return statearr_35682;
})();
if(inst_35613__$1){
var statearr_35683_35726 = state_35658__$1;
(statearr_35683_35726[(1)] = (13));

} else {
var statearr_35684_35727 = state_35658__$1;
(statearr_35684_35727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (9))){
var inst_35635 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35685_35728 = state_35658__$1;
(statearr_35685_35728[(2)] = inst_35635);

(statearr_35685_35728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (5))){
var inst_35596 = cljs.core.deref.call(null,mults);
var inst_35597 = cljs.core.vals.call(null,inst_35596);
var inst_35598 = cljs.core.seq.call(null,inst_35597);
var inst_35599 = inst_35598;
var inst_35600 = null;
var inst_35601 = (0);
var inst_35602 = (0);
var state_35658__$1 = (function (){var statearr_35686 = state_35658;
(statearr_35686[(12)] = inst_35600);

(statearr_35686[(13)] = inst_35602);

(statearr_35686[(15)] = inst_35601);

(statearr_35686[(16)] = inst_35599);

return statearr_35686;
})();
var statearr_35687_35729 = state_35658__$1;
(statearr_35687_35729[(2)] = null);

(statearr_35687_35729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (14))){
var state_35658__$1 = state_35658;
var statearr_35691_35730 = state_35658__$1;
(statearr_35691_35730[(2)] = null);

(statearr_35691_35730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (16))){
var inst_35613 = (state_35658[(10)]);
var inst_35617 = cljs.core.chunk_first.call(null,inst_35613);
var inst_35618 = cljs.core.chunk_rest.call(null,inst_35613);
var inst_35619 = cljs.core.count.call(null,inst_35617);
var inst_35599 = inst_35618;
var inst_35600 = inst_35617;
var inst_35601 = inst_35619;
var inst_35602 = (0);
var state_35658__$1 = (function (){var statearr_35692 = state_35658;
(statearr_35692[(12)] = inst_35600);

(statearr_35692[(13)] = inst_35602);

(statearr_35692[(15)] = inst_35601);

(statearr_35692[(16)] = inst_35599);

return statearr_35692;
})();
var statearr_35693_35731 = state_35658__$1;
(statearr_35693_35731[(2)] = null);

(statearr_35693_35731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (10))){
var inst_35600 = (state_35658[(12)]);
var inst_35602 = (state_35658[(13)]);
var inst_35601 = (state_35658[(15)]);
var inst_35599 = (state_35658[(16)]);
var inst_35607 = cljs.core._nth.call(null,inst_35600,inst_35602);
var inst_35608 = cljs.core.async.muxch_STAR_.call(null,inst_35607);
var inst_35609 = cljs.core.async.close_BANG_.call(null,inst_35608);
var inst_35610 = (inst_35602 + (1));
var tmp35688 = inst_35600;
var tmp35689 = inst_35601;
var tmp35690 = inst_35599;
var inst_35599__$1 = tmp35690;
var inst_35600__$1 = tmp35688;
var inst_35601__$1 = tmp35689;
var inst_35602__$1 = inst_35610;
var state_35658__$1 = (function (){var statearr_35694 = state_35658;
(statearr_35694[(12)] = inst_35600__$1);

(statearr_35694[(13)] = inst_35602__$1);

(statearr_35694[(15)] = inst_35601__$1);

(statearr_35694[(17)] = inst_35609);

(statearr_35694[(16)] = inst_35599__$1);

return statearr_35694;
})();
var statearr_35695_35732 = state_35658__$1;
(statearr_35695_35732[(2)] = null);

(statearr_35695_35732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (18))){
var inst_35628 = (state_35658[(2)]);
var state_35658__$1 = state_35658;
var statearr_35696_35733 = state_35658__$1;
(statearr_35696_35733[(2)] = inst_35628);

(statearr_35696_35733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35659 === (8))){
var inst_35602 = (state_35658[(13)]);
var inst_35601 = (state_35658[(15)]);
var inst_35604 = (inst_35602 < inst_35601);
var inst_35605 = inst_35604;
var state_35658__$1 = state_35658;
if(cljs.core.truth_(inst_35605)){
var statearr_35697_35734 = state_35658__$1;
(statearr_35697_35734[(1)] = (10));

} else {
var statearr_35698_35735 = state_35658__$1;
(statearr_35698_35735[(1)] = (11));

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
});})(c__28169__auto___35707,mults,ensure_mult,p))
;
return ((function (switch__28107__auto__,c__28169__auto___35707,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28108__auto__ = null;
var cljs$core$async$state_machine__28108__auto____0 = (function (){
var statearr_35702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35702[(0)] = cljs$core$async$state_machine__28108__auto__);

(statearr_35702[(1)] = (1));

return statearr_35702;
});
var cljs$core$async$state_machine__28108__auto____1 = (function (state_35658){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_35658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e35703){if((e35703 instanceof Object)){
var ex__28111__auto__ = e35703;
var statearr_35704_35736 = state_35658;
(statearr_35704_35736[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35737 = state_35658;
state_35658 = G__35737;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$state_machine__28108__auto__ = function(state_35658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28108__auto____1.call(this,state_35658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28108__auto____0;
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28108__auto____1;
return cljs$core$async$state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___35707,mults,ensure_mult,p))
})();
var state__28171__auto__ = (function (){var statearr_35705 = f__28170__auto__.call(null);
(statearr_35705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___35707);

return statearr_35705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___35707,mults,ensure_mult,p))
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
var G__35739 = arguments.length;
switch (G__35739) {
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
var G__35742 = arguments.length;
switch (G__35742) {
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
var G__35745 = arguments.length;
switch (G__35745) {
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
var c__28169__auto___35815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___35815,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___35815,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35784){
var state_val_35785 = (state_35784[(1)]);
if((state_val_35785 === (7))){
var state_35784__$1 = state_35784;
var statearr_35786_35816 = state_35784__$1;
(statearr_35786_35816[(2)] = null);

(statearr_35786_35816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (1))){
var state_35784__$1 = state_35784;
var statearr_35787_35817 = state_35784__$1;
(statearr_35787_35817[(2)] = null);

(statearr_35787_35817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (4))){
var inst_35748 = (state_35784[(7)]);
var inst_35750 = (inst_35748 < cnt);
var state_35784__$1 = state_35784;
if(cljs.core.truth_(inst_35750)){
var statearr_35788_35818 = state_35784__$1;
(statearr_35788_35818[(1)] = (6));

} else {
var statearr_35789_35819 = state_35784__$1;
(statearr_35789_35819[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (15))){
var inst_35780 = (state_35784[(2)]);
var state_35784__$1 = state_35784;
var statearr_35790_35820 = state_35784__$1;
(statearr_35790_35820[(2)] = inst_35780);

(statearr_35790_35820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (13))){
var inst_35773 = cljs.core.async.close_BANG_.call(null,out);
var state_35784__$1 = state_35784;
var statearr_35791_35821 = state_35784__$1;
(statearr_35791_35821[(2)] = inst_35773);

(statearr_35791_35821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (6))){
var state_35784__$1 = state_35784;
var statearr_35792_35822 = state_35784__$1;
(statearr_35792_35822[(2)] = null);

(statearr_35792_35822[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (3))){
var inst_35782 = (state_35784[(2)]);
var state_35784__$1 = state_35784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35784__$1,inst_35782);
} else {
if((state_val_35785 === (12))){
var inst_35770 = (state_35784[(8)]);
var inst_35770__$1 = (state_35784[(2)]);
var inst_35771 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35770__$1);
var state_35784__$1 = (function (){var statearr_35793 = state_35784;
(statearr_35793[(8)] = inst_35770__$1);

return statearr_35793;
})();
if(cljs.core.truth_(inst_35771)){
var statearr_35794_35823 = state_35784__$1;
(statearr_35794_35823[(1)] = (13));

} else {
var statearr_35795_35824 = state_35784__$1;
(statearr_35795_35824[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (2))){
var inst_35747 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35748 = (0);
var state_35784__$1 = (function (){var statearr_35796 = state_35784;
(statearr_35796[(9)] = inst_35747);

(statearr_35796[(7)] = inst_35748);

return statearr_35796;
})();
var statearr_35797_35825 = state_35784__$1;
(statearr_35797_35825[(2)] = null);

(statearr_35797_35825[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (11))){
var inst_35748 = (state_35784[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35784,(10),Object,null,(9));
var inst_35757 = chs__$1.call(null,inst_35748);
var inst_35758 = done.call(null,inst_35748);
var inst_35759 = cljs.core.async.take_BANG_.call(null,inst_35757,inst_35758);
var state_35784__$1 = state_35784;
var statearr_35798_35826 = state_35784__$1;
(statearr_35798_35826[(2)] = inst_35759);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35784__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (9))){
var inst_35748 = (state_35784[(7)]);
var inst_35761 = (state_35784[(2)]);
var inst_35762 = (inst_35748 + (1));
var inst_35748__$1 = inst_35762;
var state_35784__$1 = (function (){var statearr_35799 = state_35784;
(statearr_35799[(10)] = inst_35761);

(statearr_35799[(7)] = inst_35748__$1);

return statearr_35799;
})();
var statearr_35800_35827 = state_35784__$1;
(statearr_35800_35827[(2)] = null);

(statearr_35800_35827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (5))){
var inst_35768 = (state_35784[(2)]);
var state_35784__$1 = (function (){var statearr_35801 = state_35784;
(statearr_35801[(11)] = inst_35768);

return statearr_35801;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35784__$1,(12),dchan);
} else {
if((state_val_35785 === (14))){
var inst_35770 = (state_35784[(8)]);
var inst_35775 = cljs.core.apply.call(null,f,inst_35770);
var state_35784__$1 = state_35784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35784__$1,(16),out,inst_35775);
} else {
if((state_val_35785 === (16))){
var inst_35777 = (state_35784[(2)]);
var state_35784__$1 = (function (){var statearr_35802 = state_35784;
(statearr_35802[(12)] = inst_35777);

return statearr_35802;
})();
var statearr_35803_35828 = state_35784__$1;
(statearr_35803_35828[(2)] = null);

(statearr_35803_35828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (10))){
var inst_35752 = (state_35784[(2)]);
var inst_35753 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35784__$1 = (function (){var statearr_35804 = state_35784;
(statearr_35804[(13)] = inst_35752);

return statearr_35804;
})();
var statearr_35805_35829 = state_35784__$1;
(statearr_35805_35829[(2)] = inst_35753);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35784__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35785 === (8))){
var inst_35766 = (state_35784[(2)]);
var state_35784__$1 = state_35784;
var statearr_35806_35830 = state_35784__$1;
(statearr_35806_35830[(2)] = inst_35766);

(statearr_35806_35830[(1)] = (5));


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
});})(c__28169__auto___35815,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28107__auto__,c__28169__auto___35815,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28108__auto__ = null;
var cljs$core$async$state_machine__28108__auto____0 = (function (){
var statearr_35810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35810[(0)] = cljs$core$async$state_machine__28108__auto__);

(statearr_35810[(1)] = (1));

return statearr_35810;
});
var cljs$core$async$state_machine__28108__auto____1 = (function (state_35784){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_35784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e35811){if((e35811 instanceof Object)){
var ex__28111__auto__ = e35811;
var statearr_35812_35831 = state_35784;
(statearr_35812_35831[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35832 = state_35784;
state_35784 = G__35832;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$state_machine__28108__auto__ = function(state_35784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28108__auto____1.call(this,state_35784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28108__auto____0;
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28108__auto____1;
return cljs$core$async$state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___35815,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28171__auto__ = (function (){var statearr_35813 = f__28170__auto__.call(null);
(statearr_35813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___35815);

return statearr_35813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___35815,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35835 = arguments.length;
switch (G__35835) {
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
var c__28169__auto___35890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___35890,out){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___35890,out){
return (function (state_35865){
var state_val_35866 = (state_35865[(1)]);
if((state_val_35866 === (7))){
var inst_35845 = (state_35865[(7)]);
var inst_35844 = (state_35865[(8)]);
var inst_35844__$1 = (state_35865[(2)]);
var inst_35845__$1 = cljs.core.nth.call(null,inst_35844__$1,(0),null);
var inst_35846 = cljs.core.nth.call(null,inst_35844__$1,(1),null);
var inst_35847 = (inst_35845__$1 == null);
var state_35865__$1 = (function (){var statearr_35867 = state_35865;
(statearr_35867[(7)] = inst_35845__$1);

(statearr_35867[(8)] = inst_35844__$1);

(statearr_35867[(9)] = inst_35846);

return statearr_35867;
})();
if(cljs.core.truth_(inst_35847)){
var statearr_35868_35891 = state_35865__$1;
(statearr_35868_35891[(1)] = (8));

} else {
var statearr_35869_35892 = state_35865__$1;
(statearr_35869_35892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35866 === (1))){
var inst_35836 = cljs.core.vec.call(null,chs);
var inst_35837 = inst_35836;
var state_35865__$1 = (function (){var statearr_35870 = state_35865;
(statearr_35870[(10)] = inst_35837);

return statearr_35870;
})();
var statearr_35871_35893 = state_35865__$1;
(statearr_35871_35893[(2)] = null);

(statearr_35871_35893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35866 === (4))){
var inst_35837 = (state_35865[(10)]);
var state_35865__$1 = state_35865;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35865__$1,(7),inst_35837);
} else {
if((state_val_35866 === (6))){
var inst_35861 = (state_35865[(2)]);
var state_35865__$1 = state_35865;
var statearr_35872_35894 = state_35865__$1;
(statearr_35872_35894[(2)] = inst_35861);

(statearr_35872_35894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35866 === (3))){
var inst_35863 = (state_35865[(2)]);
var state_35865__$1 = state_35865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35865__$1,inst_35863);
} else {
if((state_val_35866 === (2))){
var inst_35837 = (state_35865[(10)]);
var inst_35839 = cljs.core.count.call(null,inst_35837);
var inst_35840 = (inst_35839 > (0));
var state_35865__$1 = state_35865;
if(cljs.core.truth_(inst_35840)){
var statearr_35874_35895 = state_35865__$1;
(statearr_35874_35895[(1)] = (4));

} else {
var statearr_35875_35896 = state_35865__$1;
(statearr_35875_35896[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35866 === (11))){
var inst_35837 = (state_35865[(10)]);
var inst_35854 = (state_35865[(2)]);
var tmp35873 = inst_35837;
var inst_35837__$1 = tmp35873;
var state_35865__$1 = (function (){var statearr_35876 = state_35865;
(statearr_35876[(10)] = inst_35837__$1);

(statearr_35876[(11)] = inst_35854);

return statearr_35876;
})();
var statearr_35877_35897 = state_35865__$1;
(statearr_35877_35897[(2)] = null);

(statearr_35877_35897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35866 === (9))){
var inst_35845 = (state_35865[(7)]);
var state_35865__$1 = state_35865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35865__$1,(11),out,inst_35845);
} else {
if((state_val_35866 === (5))){
var inst_35859 = cljs.core.async.close_BANG_.call(null,out);
var state_35865__$1 = state_35865;
var statearr_35878_35898 = state_35865__$1;
(statearr_35878_35898[(2)] = inst_35859);

(statearr_35878_35898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35866 === (10))){
var inst_35857 = (state_35865[(2)]);
var state_35865__$1 = state_35865;
var statearr_35879_35899 = state_35865__$1;
(statearr_35879_35899[(2)] = inst_35857);

(statearr_35879_35899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35866 === (8))){
var inst_35845 = (state_35865[(7)]);
var inst_35844 = (state_35865[(8)]);
var inst_35837 = (state_35865[(10)]);
var inst_35846 = (state_35865[(9)]);
var inst_35849 = (function (){var cs = inst_35837;
var vec__35842 = inst_35844;
var v = inst_35845;
var c = inst_35846;
return ((function (cs,vec__35842,v,c,inst_35845,inst_35844,inst_35837,inst_35846,state_val_35866,c__28169__auto___35890,out){
return (function (p1__35833_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35833_SHARP_);
});
;})(cs,vec__35842,v,c,inst_35845,inst_35844,inst_35837,inst_35846,state_val_35866,c__28169__auto___35890,out))
})();
var inst_35850 = cljs.core.filterv.call(null,inst_35849,inst_35837);
var inst_35837__$1 = inst_35850;
var state_35865__$1 = (function (){var statearr_35880 = state_35865;
(statearr_35880[(10)] = inst_35837__$1);

return statearr_35880;
})();
var statearr_35881_35900 = state_35865__$1;
(statearr_35881_35900[(2)] = null);

(statearr_35881_35900[(1)] = (2));


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
});})(c__28169__auto___35890,out))
;
return ((function (switch__28107__auto__,c__28169__auto___35890,out){
return (function() {
var cljs$core$async$state_machine__28108__auto__ = null;
var cljs$core$async$state_machine__28108__auto____0 = (function (){
var statearr_35885 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35885[(0)] = cljs$core$async$state_machine__28108__auto__);

(statearr_35885[(1)] = (1));

return statearr_35885;
});
var cljs$core$async$state_machine__28108__auto____1 = (function (state_35865){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_35865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e35886){if((e35886 instanceof Object)){
var ex__28111__auto__ = e35886;
var statearr_35887_35901 = state_35865;
(statearr_35887_35901[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35902 = state_35865;
state_35865 = G__35902;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$state_machine__28108__auto__ = function(state_35865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28108__auto____1.call(this,state_35865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28108__auto____0;
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28108__auto____1;
return cljs$core$async$state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___35890,out))
})();
var state__28171__auto__ = (function (){var statearr_35888 = f__28170__auto__.call(null);
(statearr_35888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___35890);

return statearr_35888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___35890,out))
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
var G__35904 = arguments.length;
switch (G__35904) {
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
var c__28169__auto___35952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___35952,out){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___35952,out){
return (function (state_35928){
var state_val_35929 = (state_35928[(1)]);
if((state_val_35929 === (7))){
var inst_35910 = (state_35928[(7)]);
var inst_35910__$1 = (state_35928[(2)]);
var inst_35911 = (inst_35910__$1 == null);
var inst_35912 = cljs.core.not.call(null,inst_35911);
var state_35928__$1 = (function (){var statearr_35930 = state_35928;
(statearr_35930[(7)] = inst_35910__$1);

return statearr_35930;
})();
if(inst_35912){
var statearr_35931_35953 = state_35928__$1;
(statearr_35931_35953[(1)] = (8));

} else {
var statearr_35932_35954 = state_35928__$1;
(statearr_35932_35954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (1))){
var inst_35905 = (0);
var state_35928__$1 = (function (){var statearr_35933 = state_35928;
(statearr_35933[(8)] = inst_35905);

return statearr_35933;
})();
var statearr_35934_35955 = state_35928__$1;
(statearr_35934_35955[(2)] = null);

(statearr_35934_35955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (4))){
var state_35928__$1 = state_35928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35928__$1,(7),ch);
} else {
if((state_val_35929 === (6))){
var inst_35923 = (state_35928[(2)]);
var state_35928__$1 = state_35928;
var statearr_35935_35956 = state_35928__$1;
(statearr_35935_35956[(2)] = inst_35923);

(statearr_35935_35956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (3))){
var inst_35925 = (state_35928[(2)]);
var inst_35926 = cljs.core.async.close_BANG_.call(null,out);
var state_35928__$1 = (function (){var statearr_35936 = state_35928;
(statearr_35936[(9)] = inst_35925);

return statearr_35936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35928__$1,inst_35926);
} else {
if((state_val_35929 === (2))){
var inst_35905 = (state_35928[(8)]);
var inst_35907 = (inst_35905 < n);
var state_35928__$1 = state_35928;
if(cljs.core.truth_(inst_35907)){
var statearr_35937_35957 = state_35928__$1;
(statearr_35937_35957[(1)] = (4));

} else {
var statearr_35938_35958 = state_35928__$1;
(statearr_35938_35958[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (11))){
var inst_35905 = (state_35928[(8)]);
var inst_35915 = (state_35928[(2)]);
var inst_35916 = (inst_35905 + (1));
var inst_35905__$1 = inst_35916;
var state_35928__$1 = (function (){var statearr_35939 = state_35928;
(statearr_35939[(8)] = inst_35905__$1);

(statearr_35939[(10)] = inst_35915);

return statearr_35939;
})();
var statearr_35940_35959 = state_35928__$1;
(statearr_35940_35959[(2)] = null);

(statearr_35940_35959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (9))){
var state_35928__$1 = state_35928;
var statearr_35941_35960 = state_35928__$1;
(statearr_35941_35960[(2)] = null);

(statearr_35941_35960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (5))){
var state_35928__$1 = state_35928;
var statearr_35942_35961 = state_35928__$1;
(statearr_35942_35961[(2)] = null);

(statearr_35942_35961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (10))){
var inst_35920 = (state_35928[(2)]);
var state_35928__$1 = state_35928;
var statearr_35943_35962 = state_35928__$1;
(statearr_35943_35962[(2)] = inst_35920);

(statearr_35943_35962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (8))){
var inst_35910 = (state_35928[(7)]);
var state_35928__$1 = state_35928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35928__$1,(11),out,inst_35910);
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
});})(c__28169__auto___35952,out))
;
return ((function (switch__28107__auto__,c__28169__auto___35952,out){
return (function() {
var cljs$core$async$state_machine__28108__auto__ = null;
var cljs$core$async$state_machine__28108__auto____0 = (function (){
var statearr_35947 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35947[(0)] = cljs$core$async$state_machine__28108__auto__);

(statearr_35947[(1)] = (1));

return statearr_35947;
});
var cljs$core$async$state_machine__28108__auto____1 = (function (state_35928){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_35928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e35948){if((e35948 instanceof Object)){
var ex__28111__auto__ = e35948;
var statearr_35949_35963 = state_35928;
(statearr_35949_35963[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35964 = state_35928;
state_35928 = G__35964;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$state_machine__28108__auto__ = function(state_35928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28108__auto____1.call(this,state_35928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28108__auto____0;
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28108__auto____1;
return cljs$core$async$state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___35952,out))
})();
var state__28171__auto__ = (function (){var statearr_35950 = f__28170__auto__.call(null);
(statearr_35950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___35952);

return statearr_35950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___35952,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t35972 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35972 = (function (map_LT_,f,ch,meta35973){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35973 = meta35973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35974,meta35973__$1){
var self__ = this;
var _35974__$1 = this;
return (new cljs.core.async.t35972(self__.map_LT_,self__.f,self__.ch,meta35973__$1));
});

cljs.core.async.t35972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35974){
var self__ = this;
var _35974__$1 = this;
return self__.meta35973;
});

cljs.core.async.t35972.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35972.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35972.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t35972.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35972.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t35975 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35975 = (function (map_LT_,f,ch,meta35973,_,fn1,meta35976){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35973 = meta35973;
this._ = _;
this.fn1 = fn1;
this.meta35976 = meta35976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35977,meta35976__$1){
var self__ = this;
var _35977__$1 = this;
return (new cljs.core.async.t35975(self__.map_LT_,self__.f,self__.ch,self__.meta35973,self__._,self__.fn1,meta35976__$1));
});})(___$1))
;

cljs.core.async.t35975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35977){
var self__ = this;
var _35977__$1 = this;
return self__.meta35976;
});})(___$1))
;

cljs.core.async.t35975.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t35975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35965_SHARP_){
return f1.call(null,(((p1__35965_SHARP_ == null))?null:self__.f.call(null,p1__35965_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t35975.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35973","meta35973",1435628092,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35976","meta35976",1607887584,null)], null);
});})(___$1))
;

cljs.core.async.t35975.cljs$lang$type = true;

cljs.core.async.t35975.cljs$lang$ctorStr = "cljs.core.async/t35975";

cljs.core.async.t35975.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25350__auto__,writer__25351__auto__,opt__25352__auto__){
return cljs.core._write.call(null,writer__25351__auto__,"cljs.core.async/t35975");
});})(___$1))
;

cljs.core.async.__GT_t35975 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t35975(map_LT___$1,f__$1,ch__$1,meta35973__$1,___$2,fn1__$1,meta35976){
return (new cljs.core.async.t35975(map_LT___$1,f__$1,ch__$1,meta35973__$1,___$2,fn1__$1,meta35976));
});})(___$1))
;

}

return (new cljs.core.async.t35975(self__.map_LT_,self__.f,self__.ch,self__.meta35973,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24759__auto__ = ret;
if(cljs.core.truth_(and__24759__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24759__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t35972.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35972.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t35972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35973","meta35973",1435628092,null)], null);
});

cljs.core.async.t35972.cljs$lang$type = true;

cljs.core.async.t35972.cljs$lang$ctorStr = "cljs.core.async/t35972";

cljs.core.async.t35972.cljs$lang$ctorPrWriter = (function (this__25350__auto__,writer__25351__auto__,opt__25352__auto__){
return cljs.core._write.call(null,writer__25351__auto__,"cljs.core.async/t35972");
});

cljs.core.async.__GT_t35972 = (function cljs$core$async$map_LT__$___GT_t35972(map_LT___$1,f__$1,ch__$1,meta35973){
return (new cljs.core.async.t35972(map_LT___$1,f__$1,ch__$1,meta35973));
});

}

return (new cljs.core.async.t35972(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t35981 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35981 = (function (map_GT_,f,ch,meta35982){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta35982 = meta35982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35983,meta35982__$1){
var self__ = this;
var _35983__$1 = this;
return (new cljs.core.async.t35981(self__.map_GT_,self__.f,self__.ch,meta35982__$1));
});

cljs.core.async.t35981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35983){
var self__ = this;
var _35983__$1 = this;
return self__.meta35982;
});

cljs.core.async.t35981.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35981.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35981.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35981.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t35981.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35981.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t35981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35982","meta35982",1768292828,null)], null);
});

cljs.core.async.t35981.cljs$lang$type = true;

cljs.core.async.t35981.cljs$lang$ctorStr = "cljs.core.async/t35981";

cljs.core.async.t35981.cljs$lang$ctorPrWriter = (function (this__25350__auto__,writer__25351__auto__,opt__25352__auto__){
return cljs.core._write.call(null,writer__25351__auto__,"cljs.core.async/t35981");
});

cljs.core.async.__GT_t35981 = (function cljs$core$async$map_GT__$___GT_t35981(map_GT___$1,f__$1,ch__$1,meta35982){
return (new cljs.core.async.t35981(map_GT___$1,f__$1,ch__$1,meta35982));
});

}

return (new cljs.core.async.t35981(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t35987 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35987 = (function (filter_GT_,p,ch,meta35988){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta35988 = meta35988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35989,meta35988__$1){
var self__ = this;
var _35989__$1 = this;
return (new cljs.core.async.t35987(self__.filter_GT_,self__.p,self__.ch,meta35988__$1));
});

cljs.core.async.t35987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35989){
var self__ = this;
var _35989__$1 = this;
return self__.meta35988;
});

cljs.core.async.t35987.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35987.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t35987.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t35987.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t35987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35988","meta35988",1745650911,null)], null);
});

cljs.core.async.t35987.cljs$lang$type = true;

cljs.core.async.t35987.cljs$lang$ctorStr = "cljs.core.async/t35987";

cljs.core.async.t35987.cljs$lang$ctorPrWriter = (function (this__25350__auto__,writer__25351__auto__,opt__25352__auto__){
return cljs.core._write.call(null,writer__25351__auto__,"cljs.core.async/t35987");
});

cljs.core.async.__GT_t35987 = (function cljs$core$async$filter_GT__$___GT_t35987(filter_GT___$1,p__$1,ch__$1,meta35988){
return (new cljs.core.async.t35987(filter_GT___$1,p__$1,ch__$1,meta35988));
});

}

return (new cljs.core.async.t35987(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35991 = arguments.length;
switch (G__35991) {
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
var c__28169__auto___36034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___36034,out){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___36034,out){
return (function (state_36012){
var state_val_36013 = (state_36012[(1)]);
if((state_val_36013 === (7))){
var inst_36008 = (state_36012[(2)]);
var state_36012__$1 = state_36012;
var statearr_36014_36035 = state_36012__$1;
(statearr_36014_36035[(2)] = inst_36008);

(statearr_36014_36035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (1))){
var state_36012__$1 = state_36012;
var statearr_36015_36036 = state_36012__$1;
(statearr_36015_36036[(2)] = null);

(statearr_36015_36036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (4))){
var inst_35994 = (state_36012[(7)]);
var inst_35994__$1 = (state_36012[(2)]);
var inst_35995 = (inst_35994__$1 == null);
var state_36012__$1 = (function (){var statearr_36016 = state_36012;
(statearr_36016[(7)] = inst_35994__$1);

return statearr_36016;
})();
if(cljs.core.truth_(inst_35995)){
var statearr_36017_36037 = state_36012__$1;
(statearr_36017_36037[(1)] = (5));

} else {
var statearr_36018_36038 = state_36012__$1;
(statearr_36018_36038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (6))){
var inst_35994 = (state_36012[(7)]);
var inst_35999 = p.call(null,inst_35994);
var state_36012__$1 = state_36012;
if(cljs.core.truth_(inst_35999)){
var statearr_36019_36039 = state_36012__$1;
(statearr_36019_36039[(1)] = (8));

} else {
var statearr_36020_36040 = state_36012__$1;
(statearr_36020_36040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (3))){
var inst_36010 = (state_36012[(2)]);
var state_36012__$1 = state_36012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36012__$1,inst_36010);
} else {
if((state_val_36013 === (2))){
var state_36012__$1 = state_36012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36012__$1,(4),ch);
} else {
if((state_val_36013 === (11))){
var inst_36002 = (state_36012[(2)]);
var state_36012__$1 = state_36012;
var statearr_36021_36041 = state_36012__$1;
(statearr_36021_36041[(2)] = inst_36002);

(statearr_36021_36041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (9))){
var state_36012__$1 = state_36012;
var statearr_36022_36042 = state_36012__$1;
(statearr_36022_36042[(2)] = null);

(statearr_36022_36042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (5))){
var inst_35997 = cljs.core.async.close_BANG_.call(null,out);
var state_36012__$1 = state_36012;
var statearr_36023_36043 = state_36012__$1;
(statearr_36023_36043[(2)] = inst_35997);

(statearr_36023_36043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (10))){
var inst_36005 = (state_36012[(2)]);
var state_36012__$1 = (function (){var statearr_36024 = state_36012;
(statearr_36024[(8)] = inst_36005);

return statearr_36024;
})();
var statearr_36025_36044 = state_36012__$1;
(statearr_36025_36044[(2)] = null);

(statearr_36025_36044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (8))){
var inst_35994 = (state_36012[(7)]);
var state_36012__$1 = state_36012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36012__$1,(11),out,inst_35994);
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
});})(c__28169__auto___36034,out))
;
return ((function (switch__28107__auto__,c__28169__auto___36034,out){
return (function() {
var cljs$core$async$state_machine__28108__auto__ = null;
var cljs$core$async$state_machine__28108__auto____0 = (function (){
var statearr_36029 = [null,null,null,null,null,null,null,null,null];
(statearr_36029[(0)] = cljs$core$async$state_machine__28108__auto__);

(statearr_36029[(1)] = (1));

return statearr_36029;
});
var cljs$core$async$state_machine__28108__auto____1 = (function (state_36012){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_36012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e36030){if((e36030 instanceof Object)){
var ex__28111__auto__ = e36030;
var statearr_36031_36045 = state_36012;
(statearr_36031_36045[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36046 = state_36012;
state_36012 = G__36046;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$state_machine__28108__auto__ = function(state_36012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28108__auto____1.call(this,state_36012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28108__auto____0;
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28108__auto____1;
return cljs$core$async$state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___36034,out))
})();
var state__28171__auto__ = (function (){var statearr_36032 = f__28170__auto__.call(null);
(statearr_36032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___36034);

return statearr_36032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___36034,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__36048 = arguments.length;
switch (G__36048) {
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
var c__28169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto__){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto__){
return (function (state_36215){
var state_val_36216 = (state_36215[(1)]);
if((state_val_36216 === (7))){
var inst_36211 = (state_36215[(2)]);
var state_36215__$1 = state_36215;
var statearr_36217_36258 = state_36215__$1;
(statearr_36217_36258[(2)] = inst_36211);

(statearr_36217_36258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (20))){
var inst_36181 = (state_36215[(7)]);
var inst_36192 = (state_36215[(2)]);
var inst_36193 = cljs.core.next.call(null,inst_36181);
var inst_36167 = inst_36193;
var inst_36168 = null;
var inst_36169 = (0);
var inst_36170 = (0);
var state_36215__$1 = (function (){var statearr_36218 = state_36215;
(statearr_36218[(8)] = inst_36167);

(statearr_36218[(9)] = inst_36169);

(statearr_36218[(10)] = inst_36168);

(statearr_36218[(11)] = inst_36192);

(statearr_36218[(12)] = inst_36170);

return statearr_36218;
})();
var statearr_36219_36259 = state_36215__$1;
(statearr_36219_36259[(2)] = null);

(statearr_36219_36259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (1))){
var state_36215__$1 = state_36215;
var statearr_36220_36260 = state_36215__$1;
(statearr_36220_36260[(2)] = null);

(statearr_36220_36260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (4))){
var inst_36156 = (state_36215[(13)]);
var inst_36156__$1 = (state_36215[(2)]);
var inst_36157 = (inst_36156__$1 == null);
var state_36215__$1 = (function (){var statearr_36221 = state_36215;
(statearr_36221[(13)] = inst_36156__$1);

return statearr_36221;
})();
if(cljs.core.truth_(inst_36157)){
var statearr_36222_36261 = state_36215__$1;
(statearr_36222_36261[(1)] = (5));

} else {
var statearr_36223_36262 = state_36215__$1;
(statearr_36223_36262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (15))){
var state_36215__$1 = state_36215;
var statearr_36227_36263 = state_36215__$1;
(statearr_36227_36263[(2)] = null);

(statearr_36227_36263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (21))){
var state_36215__$1 = state_36215;
var statearr_36228_36264 = state_36215__$1;
(statearr_36228_36264[(2)] = null);

(statearr_36228_36264[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (13))){
var inst_36167 = (state_36215[(8)]);
var inst_36169 = (state_36215[(9)]);
var inst_36168 = (state_36215[(10)]);
var inst_36170 = (state_36215[(12)]);
var inst_36177 = (state_36215[(2)]);
var inst_36178 = (inst_36170 + (1));
var tmp36224 = inst_36167;
var tmp36225 = inst_36169;
var tmp36226 = inst_36168;
var inst_36167__$1 = tmp36224;
var inst_36168__$1 = tmp36226;
var inst_36169__$1 = tmp36225;
var inst_36170__$1 = inst_36178;
var state_36215__$1 = (function (){var statearr_36229 = state_36215;
(statearr_36229[(8)] = inst_36167__$1);

(statearr_36229[(14)] = inst_36177);

(statearr_36229[(9)] = inst_36169__$1);

(statearr_36229[(10)] = inst_36168__$1);

(statearr_36229[(12)] = inst_36170__$1);

return statearr_36229;
})();
var statearr_36230_36265 = state_36215__$1;
(statearr_36230_36265[(2)] = null);

(statearr_36230_36265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (22))){
var state_36215__$1 = state_36215;
var statearr_36231_36266 = state_36215__$1;
(statearr_36231_36266[(2)] = null);

(statearr_36231_36266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (6))){
var inst_36156 = (state_36215[(13)]);
var inst_36165 = f.call(null,inst_36156);
var inst_36166 = cljs.core.seq.call(null,inst_36165);
var inst_36167 = inst_36166;
var inst_36168 = null;
var inst_36169 = (0);
var inst_36170 = (0);
var state_36215__$1 = (function (){var statearr_36232 = state_36215;
(statearr_36232[(8)] = inst_36167);

(statearr_36232[(9)] = inst_36169);

(statearr_36232[(10)] = inst_36168);

(statearr_36232[(12)] = inst_36170);

return statearr_36232;
})();
var statearr_36233_36267 = state_36215__$1;
(statearr_36233_36267[(2)] = null);

(statearr_36233_36267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (17))){
var inst_36181 = (state_36215[(7)]);
var inst_36185 = cljs.core.chunk_first.call(null,inst_36181);
var inst_36186 = cljs.core.chunk_rest.call(null,inst_36181);
var inst_36187 = cljs.core.count.call(null,inst_36185);
var inst_36167 = inst_36186;
var inst_36168 = inst_36185;
var inst_36169 = inst_36187;
var inst_36170 = (0);
var state_36215__$1 = (function (){var statearr_36234 = state_36215;
(statearr_36234[(8)] = inst_36167);

(statearr_36234[(9)] = inst_36169);

(statearr_36234[(10)] = inst_36168);

(statearr_36234[(12)] = inst_36170);

return statearr_36234;
})();
var statearr_36235_36268 = state_36215__$1;
(statearr_36235_36268[(2)] = null);

(statearr_36235_36268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (3))){
var inst_36213 = (state_36215[(2)]);
var state_36215__$1 = state_36215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36215__$1,inst_36213);
} else {
if((state_val_36216 === (12))){
var inst_36201 = (state_36215[(2)]);
var state_36215__$1 = state_36215;
var statearr_36236_36269 = state_36215__$1;
(statearr_36236_36269[(2)] = inst_36201);

(statearr_36236_36269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (2))){
var state_36215__$1 = state_36215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36215__$1,(4),in$);
} else {
if((state_val_36216 === (23))){
var inst_36209 = (state_36215[(2)]);
var state_36215__$1 = state_36215;
var statearr_36237_36270 = state_36215__$1;
(statearr_36237_36270[(2)] = inst_36209);

(statearr_36237_36270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (19))){
var inst_36196 = (state_36215[(2)]);
var state_36215__$1 = state_36215;
var statearr_36238_36271 = state_36215__$1;
(statearr_36238_36271[(2)] = inst_36196);

(statearr_36238_36271[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (11))){
var inst_36181 = (state_36215[(7)]);
var inst_36167 = (state_36215[(8)]);
var inst_36181__$1 = cljs.core.seq.call(null,inst_36167);
var state_36215__$1 = (function (){var statearr_36239 = state_36215;
(statearr_36239[(7)] = inst_36181__$1);

return statearr_36239;
})();
if(inst_36181__$1){
var statearr_36240_36272 = state_36215__$1;
(statearr_36240_36272[(1)] = (14));

} else {
var statearr_36241_36273 = state_36215__$1;
(statearr_36241_36273[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (9))){
var inst_36203 = (state_36215[(2)]);
var inst_36204 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36215__$1 = (function (){var statearr_36242 = state_36215;
(statearr_36242[(15)] = inst_36203);

return statearr_36242;
})();
if(cljs.core.truth_(inst_36204)){
var statearr_36243_36274 = state_36215__$1;
(statearr_36243_36274[(1)] = (21));

} else {
var statearr_36244_36275 = state_36215__$1;
(statearr_36244_36275[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (5))){
var inst_36159 = cljs.core.async.close_BANG_.call(null,out);
var state_36215__$1 = state_36215;
var statearr_36245_36276 = state_36215__$1;
(statearr_36245_36276[(2)] = inst_36159);

(statearr_36245_36276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (14))){
var inst_36181 = (state_36215[(7)]);
var inst_36183 = cljs.core.chunked_seq_QMARK_.call(null,inst_36181);
var state_36215__$1 = state_36215;
if(inst_36183){
var statearr_36246_36277 = state_36215__$1;
(statearr_36246_36277[(1)] = (17));

} else {
var statearr_36247_36278 = state_36215__$1;
(statearr_36247_36278[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (16))){
var inst_36199 = (state_36215[(2)]);
var state_36215__$1 = state_36215;
var statearr_36248_36279 = state_36215__$1;
(statearr_36248_36279[(2)] = inst_36199);

(statearr_36248_36279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36216 === (10))){
var inst_36168 = (state_36215[(10)]);
var inst_36170 = (state_36215[(12)]);
var inst_36175 = cljs.core._nth.call(null,inst_36168,inst_36170);
var state_36215__$1 = state_36215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36215__$1,(13),out,inst_36175);
} else {
if((state_val_36216 === (18))){
var inst_36181 = (state_36215[(7)]);
var inst_36190 = cljs.core.first.call(null,inst_36181);
var state_36215__$1 = state_36215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36215__$1,(20),out,inst_36190);
} else {
if((state_val_36216 === (8))){
var inst_36169 = (state_36215[(9)]);
var inst_36170 = (state_36215[(12)]);
var inst_36172 = (inst_36170 < inst_36169);
var inst_36173 = inst_36172;
var state_36215__$1 = state_36215;
if(cljs.core.truth_(inst_36173)){
var statearr_36249_36280 = state_36215__$1;
(statearr_36249_36280[(1)] = (10));

} else {
var statearr_36250_36281 = state_36215__$1;
(statearr_36250_36281[(1)] = (11));

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
});})(c__28169__auto__))
;
return ((function (switch__28107__auto__,c__28169__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28108__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28108__auto____0 = (function (){
var statearr_36254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36254[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28108__auto__);

(statearr_36254[(1)] = (1));

return statearr_36254;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28108__auto____1 = (function (state_36215){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_36215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e36255){if((e36255 instanceof Object)){
var ex__28111__auto__ = e36255;
var statearr_36256_36282 = state_36215;
(statearr_36256_36282[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36283 = state_36215;
state_36215 = G__36283;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28108__auto__ = function(state_36215){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28108__auto____1.call(this,state_36215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28108__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28108__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto__))
})();
var state__28171__auto__ = (function (){var statearr_36257 = f__28170__auto__.call(null);
(statearr_36257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto__);

return statearr_36257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto__))
);

return c__28169__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__36285 = arguments.length;
switch (G__36285) {
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
var G__36288 = arguments.length;
switch (G__36288) {
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
var G__36291 = arguments.length;
switch (G__36291) {
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
var c__28169__auto___36341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___36341,out){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___36341,out){
return (function (state_36315){
var state_val_36316 = (state_36315[(1)]);
if((state_val_36316 === (7))){
var inst_36310 = (state_36315[(2)]);
var state_36315__$1 = state_36315;
var statearr_36317_36342 = state_36315__$1;
(statearr_36317_36342[(2)] = inst_36310);

(statearr_36317_36342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (1))){
var inst_36292 = null;
var state_36315__$1 = (function (){var statearr_36318 = state_36315;
(statearr_36318[(7)] = inst_36292);

return statearr_36318;
})();
var statearr_36319_36343 = state_36315__$1;
(statearr_36319_36343[(2)] = null);

(statearr_36319_36343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (4))){
var inst_36295 = (state_36315[(8)]);
var inst_36295__$1 = (state_36315[(2)]);
var inst_36296 = (inst_36295__$1 == null);
var inst_36297 = cljs.core.not.call(null,inst_36296);
var state_36315__$1 = (function (){var statearr_36320 = state_36315;
(statearr_36320[(8)] = inst_36295__$1);

return statearr_36320;
})();
if(inst_36297){
var statearr_36321_36344 = state_36315__$1;
(statearr_36321_36344[(1)] = (5));

} else {
var statearr_36322_36345 = state_36315__$1;
(statearr_36322_36345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (6))){
var state_36315__$1 = state_36315;
var statearr_36323_36346 = state_36315__$1;
(statearr_36323_36346[(2)] = null);

(statearr_36323_36346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (3))){
var inst_36312 = (state_36315[(2)]);
var inst_36313 = cljs.core.async.close_BANG_.call(null,out);
var state_36315__$1 = (function (){var statearr_36324 = state_36315;
(statearr_36324[(9)] = inst_36312);

return statearr_36324;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36315__$1,inst_36313);
} else {
if((state_val_36316 === (2))){
var state_36315__$1 = state_36315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36315__$1,(4),ch);
} else {
if((state_val_36316 === (11))){
var inst_36295 = (state_36315[(8)]);
var inst_36304 = (state_36315[(2)]);
var inst_36292 = inst_36295;
var state_36315__$1 = (function (){var statearr_36325 = state_36315;
(statearr_36325[(10)] = inst_36304);

(statearr_36325[(7)] = inst_36292);

return statearr_36325;
})();
var statearr_36326_36347 = state_36315__$1;
(statearr_36326_36347[(2)] = null);

(statearr_36326_36347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (9))){
var inst_36295 = (state_36315[(8)]);
var state_36315__$1 = state_36315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36315__$1,(11),out,inst_36295);
} else {
if((state_val_36316 === (5))){
var inst_36295 = (state_36315[(8)]);
var inst_36292 = (state_36315[(7)]);
var inst_36299 = cljs.core._EQ_.call(null,inst_36295,inst_36292);
var state_36315__$1 = state_36315;
if(inst_36299){
var statearr_36328_36348 = state_36315__$1;
(statearr_36328_36348[(1)] = (8));

} else {
var statearr_36329_36349 = state_36315__$1;
(statearr_36329_36349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (10))){
var inst_36307 = (state_36315[(2)]);
var state_36315__$1 = state_36315;
var statearr_36330_36350 = state_36315__$1;
(statearr_36330_36350[(2)] = inst_36307);

(statearr_36330_36350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36316 === (8))){
var inst_36292 = (state_36315[(7)]);
var tmp36327 = inst_36292;
var inst_36292__$1 = tmp36327;
var state_36315__$1 = (function (){var statearr_36331 = state_36315;
(statearr_36331[(7)] = inst_36292__$1);

return statearr_36331;
})();
var statearr_36332_36351 = state_36315__$1;
(statearr_36332_36351[(2)] = null);

(statearr_36332_36351[(1)] = (2));


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
});})(c__28169__auto___36341,out))
;
return ((function (switch__28107__auto__,c__28169__auto___36341,out){
return (function() {
var cljs$core$async$state_machine__28108__auto__ = null;
var cljs$core$async$state_machine__28108__auto____0 = (function (){
var statearr_36336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36336[(0)] = cljs$core$async$state_machine__28108__auto__);

(statearr_36336[(1)] = (1));

return statearr_36336;
});
var cljs$core$async$state_machine__28108__auto____1 = (function (state_36315){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_36315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e36337){if((e36337 instanceof Object)){
var ex__28111__auto__ = e36337;
var statearr_36338_36352 = state_36315;
(statearr_36338_36352[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36353 = state_36315;
state_36315 = G__36353;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$state_machine__28108__auto__ = function(state_36315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28108__auto____1.call(this,state_36315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28108__auto____0;
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28108__auto____1;
return cljs$core$async$state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___36341,out))
})();
var state__28171__auto__ = (function (){var statearr_36339 = f__28170__auto__.call(null);
(statearr_36339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___36341);

return statearr_36339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___36341,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__36355 = arguments.length;
switch (G__36355) {
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
var c__28169__auto___36424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___36424,out){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___36424,out){
return (function (state_36393){
var state_val_36394 = (state_36393[(1)]);
if((state_val_36394 === (7))){
var inst_36389 = (state_36393[(2)]);
var state_36393__$1 = state_36393;
var statearr_36395_36425 = state_36393__$1;
(statearr_36395_36425[(2)] = inst_36389);

(statearr_36395_36425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (1))){
var inst_36356 = (new Array(n));
var inst_36357 = inst_36356;
var inst_36358 = (0);
var state_36393__$1 = (function (){var statearr_36396 = state_36393;
(statearr_36396[(7)] = inst_36357);

(statearr_36396[(8)] = inst_36358);

return statearr_36396;
})();
var statearr_36397_36426 = state_36393__$1;
(statearr_36397_36426[(2)] = null);

(statearr_36397_36426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (4))){
var inst_36361 = (state_36393[(9)]);
var inst_36361__$1 = (state_36393[(2)]);
var inst_36362 = (inst_36361__$1 == null);
var inst_36363 = cljs.core.not.call(null,inst_36362);
var state_36393__$1 = (function (){var statearr_36398 = state_36393;
(statearr_36398[(9)] = inst_36361__$1);

return statearr_36398;
})();
if(inst_36363){
var statearr_36399_36427 = state_36393__$1;
(statearr_36399_36427[(1)] = (5));

} else {
var statearr_36400_36428 = state_36393__$1;
(statearr_36400_36428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (15))){
var inst_36383 = (state_36393[(2)]);
var state_36393__$1 = state_36393;
var statearr_36401_36429 = state_36393__$1;
(statearr_36401_36429[(2)] = inst_36383);

(statearr_36401_36429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (13))){
var state_36393__$1 = state_36393;
var statearr_36402_36430 = state_36393__$1;
(statearr_36402_36430[(2)] = null);

(statearr_36402_36430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (6))){
var inst_36358 = (state_36393[(8)]);
var inst_36379 = (inst_36358 > (0));
var state_36393__$1 = state_36393;
if(cljs.core.truth_(inst_36379)){
var statearr_36403_36431 = state_36393__$1;
(statearr_36403_36431[(1)] = (12));

} else {
var statearr_36404_36432 = state_36393__$1;
(statearr_36404_36432[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (3))){
var inst_36391 = (state_36393[(2)]);
var state_36393__$1 = state_36393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36393__$1,inst_36391);
} else {
if((state_val_36394 === (12))){
var inst_36357 = (state_36393[(7)]);
var inst_36381 = cljs.core.vec.call(null,inst_36357);
var state_36393__$1 = state_36393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36393__$1,(15),out,inst_36381);
} else {
if((state_val_36394 === (2))){
var state_36393__$1 = state_36393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36393__$1,(4),ch);
} else {
if((state_val_36394 === (11))){
var inst_36373 = (state_36393[(2)]);
var inst_36374 = (new Array(n));
var inst_36357 = inst_36374;
var inst_36358 = (0);
var state_36393__$1 = (function (){var statearr_36405 = state_36393;
(statearr_36405[(10)] = inst_36373);

(statearr_36405[(7)] = inst_36357);

(statearr_36405[(8)] = inst_36358);

return statearr_36405;
})();
var statearr_36406_36433 = state_36393__$1;
(statearr_36406_36433[(2)] = null);

(statearr_36406_36433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (9))){
var inst_36357 = (state_36393[(7)]);
var inst_36371 = cljs.core.vec.call(null,inst_36357);
var state_36393__$1 = state_36393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36393__$1,(11),out,inst_36371);
} else {
if((state_val_36394 === (5))){
var inst_36357 = (state_36393[(7)]);
var inst_36366 = (state_36393[(11)]);
var inst_36358 = (state_36393[(8)]);
var inst_36361 = (state_36393[(9)]);
var inst_36365 = (inst_36357[inst_36358] = inst_36361);
var inst_36366__$1 = (inst_36358 + (1));
var inst_36367 = (inst_36366__$1 < n);
var state_36393__$1 = (function (){var statearr_36407 = state_36393;
(statearr_36407[(11)] = inst_36366__$1);

(statearr_36407[(12)] = inst_36365);

return statearr_36407;
})();
if(cljs.core.truth_(inst_36367)){
var statearr_36408_36434 = state_36393__$1;
(statearr_36408_36434[(1)] = (8));

} else {
var statearr_36409_36435 = state_36393__$1;
(statearr_36409_36435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (14))){
var inst_36386 = (state_36393[(2)]);
var inst_36387 = cljs.core.async.close_BANG_.call(null,out);
var state_36393__$1 = (function (){var statearr_36411 = state_36393;
(statearr_36411[(13)] = inst_36386);

return statearr_36411;
})();
var statearr_36412_36436 = state_36393__$1;
(statearr_36412_36436[(2)] = inst_36387);

(statearr_36412_36436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (10))){
var inst_36377 = (state_36393[(2)]);
var state_36393__$1 = state_36393;
var statearr_36413_36437 = state_36393__$1;
(statearr_36413_36437[(2)] = inst_36377);

(statearr_36413_36437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (8))){
var inst_36357 = (state_36393[(7)]);
var inst_36366 = (state_36393[(11)]);
var tmp36410 = inst_36357;
var inst_36357__$1 = tmp36410;
var inst_36358 = inst_36366;
var state_36393__$1 = (function (){var statearr_36414 = state_36393;
(statearr_36414[(7)] = inst_36357__$1);

(statearr_36414[(8)] = inst_36358);

return statearr_36414;
})();
var statearr_36415_36438 = state_36393__$1;
(statearr_36415_36438[(2)] = null);

(statearr_36415_36438[(1)] = (2));


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
});})(c__28169__auto___36424,out))
;
return ((function (switch__28107__auto__,c__28169__auto___36424,out){
return (function() {
var cljs$core$async$state_machine__28108__auto__ = null;
var cljs$core$async$state_machine__28108__auto____0 = (function (){
var statearr_36419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36419[(0)] = cljs$core$async$state_machine__28108__auto__);

(statearr_36419[(1)] = (1));

return statearr_36419;
});
var cljs$core$async$state_machine__28108__auto____1 = (function (state_36393){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_36393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e36420){if((e36420 instanceof Object)){
var ex__28111__auto__ = e36420;
var statearr_36421_36439 = state_36393;
(statearr_36421_36439[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36440 = state_36393;
state_36393 = G__36440;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$state_machine__28108__auto__ = function(state_36393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28108__auto____1.call(this,state_36393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28108__auto____0;
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28108__auto____1;
return cljs$core$async$state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___36424,out))
})();
var state__28171__auto__ = (function (){var statearr_36422 = f__28170__auto__.call(null);
(statearr_36422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___36424);

return statearr_36422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___36424,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__36442 = arguments.length;
switch (G__36442) {
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
var c__28169__auto___36515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___36515,out){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___36515,out){
return (function (state_36484){
var state_val_36485 = (state_36484[(1)]);
if((state_val_36485 === (7))){
var inst_36480 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
var statearr_36486_36516 = state_36484__$1;
(statearr_36486_36516[(2)] = inst_36480);

(statearr_36486_36516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (1))){
var inst_36443 = [];
var inst_36444 = inst_36443;
var inst_36445 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36484__$1 = (function (){var statearr_36487 = state_36484;
(statearr_36487[(7)] = inst_36445);

(statearr_36487[(8)] = inst_36444);

return statearr_36487;
})();
var statearr_36488_36517 = state_36484__$1;
(statearr_36488_36517[(2)] = null);

(statearr_36488_36517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (4))){
var inst_36448 = (state_36484[(9)]);
var inst_36448__$1 = (state_36484[(2)]);
var inst_36449 = (inst_36448__$1 == null);
var inst_36450 = cljs.core.not.call(null,inst_36449);
var state_36484__$1 = (function (){var statearr_36489 = state_36484;
(statearr_36489[(9)] = inst_36448__$1);

return statearr_36489;
})();
if(inst_36450){
var statearr_36490_36518 = state_36484__$1;
(statearr_36490_36518[(1)] = (5));

} else {
var statearr_36491_36519 = state_36484__$1;
(statearr_36491_36519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (15))){
var inst_36474 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
var statearr_36492_36520 = state_36484__$1;
(statearr_36492_36520[(2)] = inst_36474);

(statearr_36492_36520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (13))){
var state_36484__$1 = state_36484;
var statearr_36493_36521 = state_36484__$1;
(statearr_36493_36521[(2)] = null);

(statearr_36493_36521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (6))){
var inst_36444 = (state_36484[(8)]);
var inst_36469 = inst_36444.length;
var inst_36470 = (inst_36469 > (0));
var state_36484__$1 = state_36484;
if(cljs.core.truth_(inst_36470)){
var statearr_36494_36522 = state_36484__$1;
(statearr_36494_36522[(1)] = (12));

} else {
var statearr_36495_36523 = state_36484__$1;
(statearr_36495_36523[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (3))){
var inst_36482 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36484__$1,inst_36482);
} else {
if((state_val_36485 === (12))){
var inst_36444 = (state_36484[(8)]);
var inst_36472 = cljs.core.vec.call(null,inst_36444);
var state_36484__$1 = state_36484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36484__$1,(15),out,inst_36472);
} else {
if((state_val_36485 === (2))){
var state_36484__$1 = state_36484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36484__$1,(4),ch);
} else {
if((state_val_36485 === (11))){
var inst_36452 = (state_36484[(10)]);
var inst_36448 = (state_36484[(9)]);
var inst_36462 = (state_36484[(2)]);
var inst_36463 = [];
var inst_36464 = inst_36463.push(inst_36448);
var inst_36444 = inst_36463;
var inst_36445 = inst_36452;
var state_36484__$1 = (function (){var statearr_36496 = state_36484;
(statearr_36496[(7)] = inst_36445);

(statearr_36496[(8)] = inst_36444);

(statearr_36496[(11)] = inst_36462);

(statearr_36496[(12)] = inst_36464);

return statearr_36496;
})();
var statearr_36497_36524 = state_36484__$1;
(statearr_36497_36524[(2)] = null);

(statearr_36497_36524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (9))){
var inst_36444 = (state_36484[(8)]);
var inst_36460 = cljs.core.vec.call(null,inst_36444);
var state_36484__$1 = state_36484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36484__$1,(11),out,inst_36460);
} else {
if((state_val_36485 === (5))){
var inst_36445 = (state_36484[(7)]);
var inst_36452 = (state_36484[(10)]);
var inst_36448 = (state_36484[(9)]);
var inst_36452__$1 = f.call(null,inst_36448);
var inst_36453 = cljs.core._EQ_.call(null,inst_36452__$1,inst_36445);
var inst_36454 = cljs.core.keyword_identical_QMARK_.call(null,inst_36445,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36455 = (inst_36453) || (inst_36454);
var state_36484__$1 = (function (){var statearr_36498 = state_36484;
(statearr_36498[(10)] = inst_36452__$1);

return statearr_36498;
})();
if(cljs.core.truth_(inst_36455)){
var statearr_36499_36525 = state_36484__$1;
(statearr_36499_36525[(1)] = (8));

} else {
var statearr_36500_36526 = state_36484__$1;
(statearr_36500_36526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (14))){
var inst_36477 = (state_36484[(2)]);
var inst_36478 = cljs.core.async.close_BANG_.call(null,out);
var state_36484__$1 = (function (){var statearr_36502 = state_36484;
(statearr_36502[(13)] = inst_36477);

return statearr_36502;
})();
var statearr_36503_36527 = state_36484__$1;
(statearr_36503_36527[(2)] = inst_36478);

(statearr_36503_36527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (10))){
var inst_36467 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
var statearr_36504_36528 = state_36484__$1;
(statearr_36504_36528[(2)] = inst_36467);

(statearr_36504_36528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (8))){
var inst_36444 = (state_36484[(8)]);
var inst_36452 = (state_36484[(10)]);
var inst_36448 = (state_36484[(9)]);
var inst_36457 = inst_36444.push(inst_36448);
var tmp36501 = inst_36444;
var inst_36444__$1 = tmp36501;
var inst_36445 = inst_36452;
var state_36484__$1 = (function (){var statearr_36505 = state_36484;
(statearr_36505[(7)] = inst_36445);

(statearr_36505[(8)] = inst_36444__$1);

(statearr_36505[(14)] = inst_36457);

return statearr_36505;
})();
var statearr_36506_36529 = state_36484__$1;
(statearr_36506_36529[(2)] = null);

(statearr_36506_36529[(1)] = (2));


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
});})(c__28169__auto___36515,out))
;
return ((function (switch__28107__auto__,c__28169__auto___36515,out){
return (function() {
var cljs$core$async$state_machine__28108__auto__ = null;
var cljs$core$async$state_machine__28108__auto____0 = (function (){
var statearr_36510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36510[(0)] = cljs$core$async$state_machine__28108__auto__);

(statearr_36510[(1)] = (1));

return statearr_36510;
});
var cljs$core$async$state_machine__28108__auto____1 = (function (state_36484){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_36484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e36511){if((e36511 instanceof Object)){
var ex__28111__auto__ = e36511;
var statearr_36512_36530 = state_36484;
(statearr_36512_36530[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36531 = state_36484;
state_36484 = G__36531;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
cljs$core$async$state_machine__28108__auto__ = function(state_36484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28108__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28108__auto____1.call(this,state_36484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28108__auto____0;
cljs$core$async$state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28108__auto____1;
return cljs$core$async$state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___36515,out))
})();
var state__28171__auto__ = (function (){var statearr_36513 = f__28170__auto__.call(null);
(statearr_36513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___36515);

return statearr_36513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___36515,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map