// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string.StringBuffer');
cljs.pprint._STAR_out_STAR_ = null;
cljs.pprint.print = (function cljs$pprint$print(){
var argseq__25805__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__25805__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq37393){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37393));
});
cljs.pprint.println = (function cljs$pprint$println(){
var argseq__25805__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__25805__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq37394){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37394));
});
cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,(function (){var pred__37398 = cljs.core._EQ_;
var expr__37399 = c;
if(cljs.core.truth_(pred__37398.call(null,"\b",expr__37399))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__37398.call(null,"\t",expr__37399))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__37398.call(null,"\n",expr__37399))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__37398.call(null,"\f",expr__37399))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__37398.call(null,"\r",expr__37399))){
return "\\return";
} else {
if(cljs.core.truth_(pred__37398.call(null,"\"",expr__37399))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__37398.call(null,"\\",expr__37399))){
return "\\\\";
} else {
return [cljs.core.str("\\"),cljs.core.str(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(){
var argseq__25805__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__25805__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq37401){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37401));
});
cljs.pprint.prn = (function cljs$pprint$prn(){
var argseq__25805__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__25805__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq37402){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37402));
});
/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
var vec__37404 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__37404,(0),null);
var new_context = cljs.core.nth.call(null,vec__37404,(1),null);
var G__37405 = new_context;
var G__37406 = remainder;
var G__37407 = cljs.core.conj.call(null,acc,result);
context = G__37405;
lis__$1 = G__37406;
acc = G__37407;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__37409 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__37409,(0),null);
var new_context = cljs.core.nth.call(null,vec__37409,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__37410 = new_context;
var G__37411 = cljs.core.conj.call(null,acc,result);
context = G__37410;
acc = G__37411;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__37413 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__37413,(0),null);
var continue$ = cljs.core.nth.call(null,vec__37413,(1),null);
var new_context = cljs.core.nth.call(null,vec__37413,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__37414 = new_context;
var G__37415 = cljs.core.conj.call(null,acc,result);
context = G__37414;
acc = G__37415;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25519__auto__ = (function cljs$pprint$unzip_map_$_iter__37440(s__37441){
return (new cljs.core.LazySeq(null,(function (){
var s__37441__$1 = s__37441;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__37441__$1);
if(temp__4423__auto__){
var s__37441__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37441__$2)){
var c__25517__auto__ = cljs.core.chunk_first.call(null,s__37441__$2);
var size__25518__auto__ = cljs.core.count.call(null,c__25517__auto__);
var b__37443 = cljs.core.chunk_buffer.call(null,size__25518__auto__);
if((function (){var i__37442 = (0);
while(true){
if((i__37442 < size__25518__auto__)){
var vec__37448 = cljs.core._nth.call(null,c__25517__auto__,i__37442);
var k = cljs.core.nth.call(null,vec__37448,(0),null);
var vec__37449 = cljs.core.nth.call(null,vec__37448,(1),null);
var v1 = cljs.core.nth.call(null,vec__37449,(0),null);
var v2 = cljs.core.nth.call(null,vec__37449,(1),null);
cljs.core.chunk_append.call(null,b__37443,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__37464 = (i__37442 + (1));
i__37442 = G__37464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37443),cljs$pprint$unzip_map_$_iter__37440.call(null,cljs.core.chunk_rest.call(null,s__37441__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37443),null);
}
} else {
var vec__37450 = cljs.core.first.call(null,s__37441__$2);
var k = cljs.core.nth.call(null,vec__37450,(0),null);
var vec__37451 = cljs.core.nth.call(null,vec__37450,(1),null);
var v1 = cljs.core.nth.call(null,vec__37451,(0),null);
var v2 = cljs.core.nth.call(null,vec__37451,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__37440.call(null,cljs.core.rest.call(null,s__37441__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25519__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25519__auto__ = (function cljs$pprint$unzip_map_$_iter__37452(s__37453){
return (new cljs.core.LazySeq(null,(function (){
var s__37453__$1 = s__37453;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__37453__$1);
if(temp__4423__auto__){
var s__37453__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37453__$2)){
var c__25517__auto__ = cljs.core.chunk_first.call(null,s__37453__$2);
var size__25518__auto__ = cljs.core.count.call(null,c__25517__auto__);
var b__37455 = cljs.core.chunk_buffer.call(null,size__25518__auto__);
if((function (){var i__37454 = (0);
while(true){
if((i__37454 < size__25518__auto__)){
var vec__37460 = cljs.core._nth.call(null,c__25517__auto__,i__37454);
var k = cljs.core.nth.call(null,vec__37460,(0),null);
var vec__37461 = cljs.core.nth.call(null,vec__37460,(1),null);
var v1 = cljs.core.nth.call(null,vec__37461,(0),null);
var v2 = cljs.core.nth.call(null,vec__37461,(1),null);
cljs.core.chunk_append.call(null,b__37455,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__37465 = (i__37454 + (1));
i__37454 = G__37465;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37455),cljs$pprint$unzip_map_$_iter__37452.call(null,cljs.core.chunk_rest.call(null,s__37453__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37455),null);
}
} else {
var vec__37462 = cljs.core.first.call(null,s__37453__$2);
var k = cljs.core.nth.call(null,vec__37462,(0),null);
var vec__37463 = cljs.core.nth.call(null,vec__37462,(1),null);
var v1 = cljs.core.nth.call(null,vec__37463,(0),null);
var v2 = cljs.core.nth.call(null,vec__37463,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__37452.call(null,cljs.core.rest.call(null,s__37453__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25519__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25519__auto__ = (function cljs$pprint$tuple_map_$_iter__37474(s__37475){
return (new cljs.core.LazySeq(null,(function (){
var s__37475__$1 = s__37475;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__37475__$1);
if(temp__4423__auto__){
var s__37475__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37475__$2)){
var c__25517__auto__ = cljs.core.chunk_first.call(null,s__37475__$2);
var size__25518__auto__ = cljs.core.count.call(null,c__25517__auto__);
var b__37477 = cljs.core.chunk_buffer.call(null,size__25518__auto__);
if((function (){var i__37476 = (0);
while(true){
if((i__37476 < size__25518__auto__)){
var vec__37480 = cljs.core._nth.call(null,c__25517__auto__,i__37476);
var k = cljs.core.nth.call(null,vec__37480,(0),null);
var v = cljs.core.nth.call(null,vec__37480,(1),null);
cljs.core.chunk_append.call(null,b__37477,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__37482 = (i__37476 + (1));
i__37476 = G__37482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37477),cljs$pprint$tuple_map_$_iter__37474.call(null,cljs.core.chunk_rest.call(null,s__37475__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37477),null);
}
} else {
var vec__37481 = cljs.core.first.call(null,s__37475__$2);
var k = cljs.core.nth.call(null,vec__37481,(0),null);
var v = cljs.core.nth.call(null,vec__37481,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__37474.call(null,cljs.core.rest.call(null,s__37475__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25519__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
var G__37483 = (n - (1));
n = G__37483;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.call(null,n,len)) || (!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))){
return cljs.core.subs.call(null,s,n);
} else {
var G__37484 = (n + (1));
n = G__37484;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.fromArray([val], true));
var pos = (0);
while(true){
if((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos))))){
return pos;
} else {
var G__37485 = (pos + (1));
pos = G__37485;
continue;
}
break;
}
});

cljs.pprint.IPrettyFlush = (function (){var obj37487 = {};
return obj37487;
})();

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((function (){var and__24753__auto__ = pp;
if(and__24753__auto__){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1;
} else {
return and__24753__auto__;
}
})()){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__25401__auto__ = (((pp == null))?null:pp);
return (function (){var or__24765__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__25401__auto__)]);
if(or__24765__auto__){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = (cljs.pprint._ppflush["_"]);
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
})().call(null,pp);
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(){
var G__37490 = arguments.length;
switch (G__37490) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if(typeof cljs.pprint.t37491 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t37491 = (function (writer,max_columns,fields,meta37492){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta37492 = meta37492;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t37491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_37493,meta37492__$1){
var self__ = this;
var _37493__$1 = this;
return (new cljs.pprint.t37491(self__.writer,self__.max_columns,self__.fields,meta37492__$1));
});})(fields))
;

cljs.pprint.t37491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_37493){
var self__ = this;
var _37493__$1 = this;
return self__.meta37492;
});})(fields))
;

cljs.pprint.t37491.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t37491.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

cljs.pprint.t37491.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__37494 = cljs.core._EQ_;
var expr__37495 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__37494.call(null,String,expr__37495))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__37494,expr__37495,this$__$1,fields){
return (function (p1__37488_SHARP_){
return cljs.core._EQ_.call(null,p1__37488_SHARP_,"\n");
});})(s,nl,pred__37494,expr__37495,this$__$1,fields))
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_(pred__37494.call(null,Number,expr__37495))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37495)].join('')));
}
}
});})(fields))
;

cljs.pprint.t37491.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta37492","meta37492",-818133393,null)], null);
});})(fields))
;

cljs.pprint.t37491.cljs$lang$type = true;

cljs.pprint.t37491.cljs$lang$ctorStr = "cljs.pprint/t37491";

cljs.pprint.t37491.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.pprint/t37491");
});})(fields))
;

cljs.pprint.__GT_t37491 = ((function (fields){
return (function cljs$pprint$__GT_t37491(writer__$1,max_columns__$1,fields__$1,meta37492){
return (new cljs.pprint.t37491(writer__$1,max_columns__$1,fields__$1,meta37492));
});})(fields))
;

}

return (new cljs.pprint.t37491(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;

/**
* @constructor
* @param {*} parent
* @param {*} section
* @param {*} start_col
* @param {*} indent
* @param {*} done_nl
* @param {*} intra_block_nl
* @param {*} prefix
* @param {*} per_line_prefix
* @param {*} suffix
* @param {*} logical_block_callback
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25360__auto__,k__25361__auto__){
var self__ = this;
var this__25360__auto____$1 = this;
return cljs.core._lookup.call(null,this__25360__auto____$1,k__25361__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25362__auto__,k37499,else__25363__auto__){
var self__ = this;
var this__25362__auto____$1 = this;
var G__37501 = (((k37499 instanceof cljs.core.Keyword))?k37499.fqn:null);
switch (G__37501) {
case "suffix":
return self__.suffix;

break;
case "indent":
return self__.indent;

break;
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "done-nl":
return self__.done_nl;

break;
case "start-col":
return self__.start_col;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37499,else__25363__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25374__auto__,writer__25375__auto__,opts__25376__auto__){
var self__ = this;
var this__25374__auto____$1 = this;
var pr_pair__25377__auto__ = ((function (this__25374__auto____$1){
return (function (keyval__25378__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,cljs.core.pr_writer,""," ","",opts__25376__auto__,keyval__25378__auto__);
});})(this__25374__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,pr_pair__25377__auto__,"#cljs.pprint.logical-block{",", ","}",opts__25376__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25358__auto__){
var self__ = this;
var this__25358__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25354__auto__){
var self__ = this;
var this__25354__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25364__auto__){
var self__ = this;
var this__25364__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25355__auto__){
var self__ = this;
var this__25355__auto____$1 = this;
var h__25181__auto__ = self__.__hash;
if(!((h__25181__auto__ == null))){
return h__25181__auto__;
} else {
var h__25181__auto____$1 = cljs.core.hash_imap.call(null,this__25355__auto____$1);
self__.__hash = h__25181__auto____$1;

return h__25181__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25356__auto__,other__25357__auto__){
var self__ = this;
var this__25356__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24753__auto__ = other__25357__auto__;
if(cljs.core.truth_(and__24753__auto__)){
var and__24753__auto____$1 = (this__25356__auto____$1.constructor === other__25357__auto__.constructor);
if(and__24753__auto____$1){
return cljs.core.equiv_map.call(null,this__25356__auto____$1,other__25357__auto__);
} else {
return and__24753__auto____$1;
}
} else {
return and__24753__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25369__auto__,k__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__25370__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25369__auto____$1),self__.__meta),k__25370__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25370__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25367__auto__,k__25368__auto__,G__37498){
var self__ = this;
var this__25367__auto____$1 = this;
var pred__37502 = cljs.core.keyword_identical_QMARK_;
var expr__37503 = k__25368__auto__;
if(cljs.core.truth_(pred__37502.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__37503))){
return (new cljs.pprint.logical_block(G__37498,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37502.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__37503))){
return (new cljs.pprint.logical_block(self__.parent,G__37498,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37502.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__37503))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__37498,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37502.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__37503))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__37498,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37502.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__37503))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__37498,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37502.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__37503))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__37498,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37502.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__37503))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__37498,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37502.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__37503))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__37498,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37502.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__37503))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__37498,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37502.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__37503))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__37498,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25368__auto__,G__37498),null));
}
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

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25372__auto__){
var self__ = this;
var this__25372__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25359__auto__,G__37498){
var self__ = this;
var this__25359__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__37498,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25365__auto__,entry__25366__auto__){
var self__ = this;
var this__25365__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25366__auto__)){
return cljs.core._assoc.call(null,this__25365__auto____$1,cljs.core._nth.call(null,entry__25366__auto__,(0)),cljs.core._nth.call(null,entry__25366__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25365__auto____$1,entry__25366__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__25394__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__25394__auto__,writer__25395__auto__){
return cljs.core._write.call(null,writer__25395__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__37500){
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__37500),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__37500),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__37500),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__37500),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__37500),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__37500),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__37500),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__37500),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__37500),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__37500),null,cljs.core.dissoc.call(null,G__37500,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__37506 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__37506;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
}
});

/**
* @constructor
* @param {*} type_tag
* @param {*} data
* @param {*} trailing_white_space
* @param {*} start_pos
* @param {*} end_pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25360__auto__,k__25361__auto__){
var self__ = this;
var this__25360__auto____$1 = this;
return cljs.core._lookup.call(null,this__25360__auto____$1,k__25361__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25362__auto__,k37508,else__25363__auto__){
var self__ = this;
var this__25362__auto____$1 = this;
var G__37510 = (((k37508 instanceof cljs.core.Keyword))?k37508.fqn:null);
switch (G__37510) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37508,else__25363__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25374__auto__,writer__25375__auto__,opts__25376__auto__){
var self__ = this;
var this__25374__auto____$1 = this;
var pr_pair__25377__auto__ = ((function (this__25374__auto____$1){
return (function (keyval__25378__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,cljs.core.pr_writer,""," ","",opts__25376__auto__,keyval__25378__auto__);
});})(this__25374__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,pr_pair__25377__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__25376__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25358__auto__){
var self__ = this;
var this__25358__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25354__auto__){
var self__ = this;
var this__25354__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25364__auto__){
var self__ = this;
var this__25364__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25355__auto__){
var self__ = this;
var this__25355__auto____$1 = this;
var h__25181__auto__ = self__.__hash;
if(!((h__25181__auto__ == null))){
return h__25181__auto__;
} else {
var h__25181__auto____$1 = cljs.core.hash_imap.call(null,this__25355__auto____$1);
self__.__hash = h__25181__auto____$1;

return h__25181__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25356__auto__,other__25357__auto__){
var self__ = this;
var this__25356__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24753__auto__ = other__25357__auto__;
if(cljs.core.truth_(and__24753__auto__)){
var and__24753__auto____$1 = (this__25356__auto____$1.constructor === other__25357__auto__.constructor);
if(and__24753__auto____$1){
return cljs.core.equiv_map.call(null,this__25356__auto____$1,other__25357__auto__);
} else {
return and__24753__auto____$1;
}
} else {
return and__24753__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25369__auto__,k__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__25370__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25369__auto____$1),self__.__meta),k__25370__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25370__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25367__auto__,k__25368__auto__,G__37507){
var self__ = this;
var this__25367__auto____$1 = this;
var pred__37511 = cljs.core.keyword_identical_QMARK_;
var expr__37512 = k__25368__auto__;
if(cljs.core.truth_(pred__37511.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__37512))){
return (new cljs.pprint.buffer_blob(G__37507,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37511.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__37512))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__37507,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37511.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__37512))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__37507,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37511.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__37512))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__37507,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37511.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__37512))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__37507,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25368__auto__,G__37507),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25372__auto__){
var self__ = this;
var this__25372__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25359__auto__,G__37507){
var self__ = this;
var this__25359__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__37507,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25365__auto__,entry__25366__auto__){
var self__ = this;
var this__25365__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25366__auto__)){
return cljs.core._assoc.call(null,this__25365__auto____$1,cljs.core._nth.call(null,entry__25366__auto__,(0)),cljs.core._nth.call(null,entry__25366__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25365__auto____$1,entry__25366__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__25394__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__25394__auto__,writer__25395__auto__){
return cljs.core._write.call(null,writer__25395__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__37509){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__37509),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__37509),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__37509),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__37509),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__37509),null,cljs.core.dissoc.call(null,G__37509,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__36678__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__36678__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
* @param {*} type_tag
* @param {*} type
* @param {*} logical_block
* @param {*} start_pos
* @param {*} end_pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25360__auto__,k__25361__auto__){
var self__ = this;
var this__25360__auto____$1 = this;
return cljs.core._lookup.call(null,this__25360__auto____$1,k__25361__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25362__auto__,k37516,else__25363__auto__){
var self__ = this;
var this__25362__auto____$1 = this;
var G__37518 = (((k37516 instanceof cljs.core.Keyword))?k37516.fqn:null);
switch (G__37518) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37516,else__25363__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25374__auto__,writer__25375__auto__,opts__25376__auto__){
var self__ = this;
var this__25374__auto____$1 = this;
var pr_pair__25377__auto__ = ((function (this__25374__auto____$1){
return (function (keyval__25378__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,cljs.core.pr_writer,""," ","",opts__25376__auto__,keyval__25378__auto__);
});})(this__25374__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,pr_pair__25377__auto__,"#cljs.pprint.nl-t{",", ","}",opts__25376__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25358__auto__){
var self__ = this;
var this__25358__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25354__auto__){
var self__ = this;
var this__25354__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25364__auto__){
var self__ = this;
var this__25364__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25355__auto__){
var self__ = this;
var this__25355__auto____$1 = this;
var h__25181__auto__ = self__.__hash;
if(!((h__25181__auto__ == null))){
return h__25181__auto__;
} else {
var h__25181__auto____$1 = cljs.core.hash_imap.call(null,this__25355__auto____$1);
self__.__hash = h__25181__auto____$1;

return h__25181__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25356__auto__,other__25357__auto__){
var self__ = this;
var this__25356__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24753__auto__ = other__25357__auto__;
if(cljs.core.truth_(and__24753__auto__)){
var and__24753__auto____$1 = (this__25356__auto____$1.constructor === other__25357__auto__.constructor);
if(and__24753__auto____$1){
return cljs.core.equiv_map.call(null,this__25356__auto____$1,other__25357__auto__);
} else {
return and__24753__auto____$1;
}
} else {
return and__24753__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25369__auto__,k__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__25370__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25369__auto____$1),self__.__meta),k__25370__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25370__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25367__auto__,k__25368__auto__,G__37515){
var self__ = this;
var this__25367__auto____$1 = this;
var pred__37519 = cljs.core.keyword_identical_QMARK_;
var expr__37520 = k__25368__auto__;
if(cljs.core.truth_(pred__37519.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__37520))){
return (new cljs.pprint.nl_t(G__37515,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37519.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__37520))){
return (new cljs.pprint.nl_t(self__.type_tag,G__37515,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37519.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__37520))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__37515,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37519.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__37520))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__37515,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37519.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__37520))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__37515,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25368__auto__,G__37515),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25372__auto__){
var self__ = this;
var this__25372__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25359__auto__,G__37515){
var self__ = this;
var this__25359__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__37515,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25365__auto__,entry__25366__auto__){
var self__ = this;
var this__25365__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25366__auto__)){
return cljs.core._assoc.call(null,this__25365__auto____$1,cljs.core._nth.call(null,entry__25366__auto__,(0)),cljs.core._nth.call(null,entry__25366__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25365__auto____$1,entry__25366__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__25394__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__25394__auto__,writer__25395__auto__){
return cljs.core._write.call(null,writer__25395__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__37517){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__37517),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__37517),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__37517),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__37517),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__37517),null,cljs.core.dissoc.call(null,G__37517,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__36678__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__36678__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
* @param {*} type_tag
* @param {*} logical_block
* @param {*} start_pos
* @param {*} end_pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25360__auto__,k__25361__auto__){
var self__ = this;
var this__25360__auto____$1 = this;
return cljs.core._lookup.call(null,this__25360__auto____$1,k__25361__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25362__auto__,k37524,else__25363__auto__){
var self__ = this;
var this__25362__auto____$1 = this;
var G__37526 = (((k37524 instanceof cljs.core.Keyword))?k37524.fqn:null);
switch (G__37526) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37524,else__25363__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25374__auto__,writer__25375__auto__,opts__25376__auto__){
var self__ = this;
var this__25374__auto____$1 = this;
var pr_pair__25377__auto__ = ((function (this__25374__auto____$1){
return (function (keyval__25378__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,cljs.core.pr_writer,""," ","",opts__25376__auto__,keyval__25378__auto__);
});})(this__25374__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,pr_pair__25377__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__25376__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25358__auto__){
var self__ = this;
var this__25358__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25354__auto__){
var self__ = this;
var this__25354__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25364__auto__){
var self__ = this;
var this__25364__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25355__auto__){
var self__ = this;
var this__25355__auto____$1 = this;
var h__25181__auto__ = self__.__hash;
if(!((h__25181__auto__ == null))){
return h__25181__auto__;
} else {
var h__25181__auto____$1 = cljs.core.hash_imap.call(null,this__25355__auto____$1);
self__.__hash = h__25181__auto____$1;

return h__25181__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25356__auto__,other__25357__auto__){
var self__ = this;
var this__25356__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24753__auto__ = other__25357__auto__;
if(cljs.core.truth_(and__24753__auto__)){
var and__24753__auto____$1 = (this__25356__auto____$1.constructor === other__25357__auto__.constructor);
if(and__24753__auto____$1){
return cljs.core.equiv_map.call(null,this__25356__auto____$1,other__25357__auto__);
} else {
return and__24753__auto____$1;
}
} else {
return and__24753__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25369__auto__,k__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__25370__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25369__auto____$1),self__.__meta),k__25370__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25370__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25367__auto__,k__25368__auto__,G__37523){
var self__ = this;
var this__25367__auto____$1 = this;
var pred__37527 = cljs.core.keyword_identical_QMARK_;
var expr__37528 = k__25368__auto__;
if(cljs.core.truth_(pred__37527.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__37528))){
return (new cljs.pprint.start_block_t(G__37523,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37527.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__37528))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__37523,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37527.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__37528))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__37523,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37527.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__37528))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__37523,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25368__auto__,G__37523),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25372__auto__){
var self__ = this;
var this__25372__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25359__auto__,G__37523){
var self__ = this;
var this__25359__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__37523,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25365__auto__,entry__25366__auto__){
var self__ = this;
var this__25365__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25366__auto__)){
return cljs.core._assoc.call(null,this__25365__auto____$1,cljs.core._nth.call(null,entry__25366__auto__,(0)),cljs.core._nth.call(null,entry__25366__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25365__auto____$1,entry__25366__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__25394__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__25394__auto__,writer__25395__auto__){
return cljs.core._write.call(null,writer__25395__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__37525){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__37525),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__37525),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__37525),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__37525),null,cljs.core.dissoc.call(null,G__37525,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__36678__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__36678__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
* @param {*} type_tag
* @param {*} logical_block
* @param {*} start_pos
* @param {*} end_pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25360__auto__,k__25361__auto__){
var self__ = this;
var this__25360__auto____$1 = this;
return cljs.core._lookup.call(null,this__25360__auto____$1,k__25361__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25362__auto__,k37532,else__25363__auto__){
var self__ = this;
var this__25362__auto____$1 = this;
var G__37534 = (((k37532 instanceof cljs.core.Keyword))?k37532.fqn:null);
switch (G__37534) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37532,else__25363__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25374__auto__,writer__25375__auto__,opts__25376__auto__){
var self__ = this;
var this__25374__auto____$1 = this;
var pr_pair__25377__auto__ = ((function (this__25374__auto____$1){
return (function (keyval__25378__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,cljs.core.pr_writer,""," ","",opts__25376__auto__,keyval__25378__auto__);
});})(this__25374__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,pr_pair__25377__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__25376__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25358__auto__){
var self__ = this;
var this__25358__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25354__auto__){
var self__ = this;
var this__25354__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25364__auto__){
var self__ = this;
var this__25364__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25355__auto__){
var self__ = this;
var this__25355__auto____$1 = this;
var h__25181__auto__ = self__.__hash;
if(!((h__25181__auto__ == null))){
return h__25181__auto__;
} else {
var h__25181__auto____$1 = cljs.core.hash_imap.call(null,this__25355__auto____$1);
self__.__hash = h__25181__auto____$1;

return h__25181__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25356__auto__,other__25357__auto__){
var self__ = this;
var this__25356__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24753__auto__ = other__25357__auto__;
if(cljs.core.truth_(and__24753__auto__)){
var and__24753__auto____$1 = (this__25356__auto____$1.constructor === other__25357__auto__.constructor);
if(and__24753__auto____$1){
return cljs.core.equiv_map.call(null,this__25356__auto____$1,other__25357__auto__);
} else {
return and__24753__auto____$1;
}
} else {
return and__24753__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25369__auto__,k__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__25370__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25369__auto____$1),self__.__meta),k__25370__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25370__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25367__auto__,k__25368__auto__,G__37531){
var self__ = this;
var this__25367__auto____$1 = this;
var pred__37535 = cljs.core.keyword_identical_QMARK_;
var expr__37536 = k__25368__auto__;
if(cljs.core.truth_(pred__37535.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__37536))){
return (new cljs.pprint.end_block_t(G__37531,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37535.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__37536))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__37531,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37535.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__37536))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__37531,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37535.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__37536))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__37531,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25368__auto__,G__37531),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25372__auto__){
var self__ = this;
var this__25372__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25359__auto__,G__37531){
var self__ = this;
var this__25359__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__37531,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25365__auto__,entry__25366__auto__){
var self__ = this;
var this__25365__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25366__auto__)){
return cljs.core._assoc.call(null,this__25365__auto____$1,cljs.core._nth.call(null,entry__25366__auto__,(0)),cljs.core._nth.call(null,entry__25366__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25365__auto____$1,entry__25366__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__25394__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__25394__auto__,writer__25395__auto__){
return cljs.core._write.call(null,writer__25395__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__37533){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__37533),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__37533),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__37533),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__37533),null,cljs.core.dissoc.call(null,G__37533,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__36678__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__36678__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
* @param {*} type_tag
* @param {*} logical_block
* @param {*} relative_to
* @param {*} offset
* @param {*} start_pos
* @param {*} end_pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25360__auto__,k__25361__auto__){
var self__ = this;
var this__25360__auto____$1 = this;
return cljs.core._lookup.call(null,this__25360__auto____$1,k__25361__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25362__auto__,k37540,else__25363__auto__){
var self__ = this;
var this__25362__auto____$1 = this;
var G__37542 = (((k37540 instanceof cljs.core.Keyword))?k37540.fqn:null);
switch (G__37542) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37540,else__25363__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25374__auto__,writer__25375__auto__,opts__25376__auto__){
var self__ = this;
var this__25374__auto____$1 = this;
var pr_pair__25377__auto__ = ((function (this__25374__auto____$1){
return (function (keyval__25378__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,cljs.core.pr_writer,""," ","",opts__25376__auto__,keyval__25378__auto__);
});})(this__25374__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,pr_pair__25377__auto__,"#cljs.pprint.indent-t{",", ","}",opts__25376__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25358__auto__){
var self__ = this;
var this__25358__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25354__auto__){
var self__ = this;
var this__25354__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25364__auto__){
var self__ = this;
var this__25364__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25355__auto__){
var self__ = this;
var this__25355__auto____$1 = this;
var h__25181__auto__ = self__.__hash;
if(!((h__25181__auto__ == null))){
return h__25181__auto__;
} else {
var h__25181__auto____$1 = cljs.core.hash_imap.call(null,this__25355__auto____$1);
self__.__hash = h__25181__auto____$1;

return h__25181__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25356__auto__,other__25357__auto__){
var self__ = this;
var this__25356__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24753__auto__ = other__25357__auto__;
if(cljs.core.truth_(and__24753__auto__)){
var and__24753__auto____$1 = (this__25356__auto____$1.constructor === other__25357__auto__.constructor);
if(and__24753__auto____$1){
return cljs.core.equiv_map.call(null,this__25356__auto____$1,other__25357__auto__);
} else {
return and__24753__auto____$1;
}
} else {
return and__24753__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25369__auto__,k__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__25370__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25369__auto____$1),self__.__meta),k__25370__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25370__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25367__auto__,k__25368__auto__,G__37539){
var self__ = this;
var this__25367__auto____$1 = this;
var pred__37543 = cljs.core.keyword_identical_QMARK_;
var expr__37544 = k__25368__auto__;
if(cljs.core.truth_(pred__37543.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__37544))){
return (new cljs.pprint.indent_t(G__37539,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37543.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__37544))){
return (new cljs.pprint.indent_t(self__.type_tag,G__37539,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37543.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__37544))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__37539,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37543.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__37544))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__37539,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37543.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__37544))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__37539,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37543.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__37544))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__37539,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25368__auto__,G__37539),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25372__auto__){
var self__ = this;
var this__25372__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25359__auto__,G__37539){
var self__ = this;
var this__25359__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__37539,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25365__auto__,entry__25366__auto__){
var self__ = this;
var this__25365__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25366__auto__)){
return cljs.core._assoc.call(null,this__25365__auto____$1,cljs.core._nth.call(null,entry__25366__auto__,(0)),cljs.core._nth.call(null,entry__25366__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25365__auto____$1,entry__25366__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__25394__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__25394__auto__,writer__25395__auto__){
return cljs.core._write.call(null,writer__25395__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__37541){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__37541),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__37541),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__37541),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__37541),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__37541),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__37541),null,cljs.core.dissoc.call(null,G__37541,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__36678__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__36678__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__25660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25664__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__25660__auto__,prefer_table__25661__auto__,method_cache__25662__auto__,cached_hierarchy__25663__auto__,hierarchy__25664__auto__){
return (function (p1__37548_SHARP_,p2__37547_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__37547_SHARP_);
});})(method_table__25660__auto__,prefer_table__25661__auto__,method_cache__25662__auto__,cached_hierarchy__25663__auto__,hierarchy__25664__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25664__auto__,method_table__25660__auto__,prefer_table__25661__auto__,method_cache__25662__auto__,cached_hierarchy__25663__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__4423__auto___37549 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4423__auto___37549)){
var cb_37550 = temp__4423__auto___37549;
cb_37550.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__4423__auto___37551 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__4423__auto___37551)){
var prefix_37552 = temp__4423__auto___37551;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_37552);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__4423__auto___37553 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4423__auto___37553)){
var cb_37554 = temp__4423__auto___37553;
cb_37554.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}

var temp__4423__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__4423__auto__)){
var suffix = temp__4423__auto__;
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__37555 = cljs.core._EQ_;
var expr__37556 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__37555.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__37556))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__37555.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__37556))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37556)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__24765__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__24765__auto__){
return or__24765__auto__;
} else {
var and__24753__auto__ = !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889)));
if(and__24753__auto__){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__24753__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__4421__auto___37558 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4421__auto___37558)){
var tws_37559 = temp__4421__auto___37558;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_37559);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__37564 = cljs.core.seq.call(null,tokens);
var chunk__37565 = null;
var count__37566 = (0);
var i__37567 = (0);
while(true){
if((i__37567 < count__37566)){
var token = cljs.core._nth.call(null,chunk__37565,i__37567);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__4421__auto___37568 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4421__auto___37568)){
var tws_37569 = temp__4421__auto___37568;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_37569);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_37570 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__24753__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__24753__auto__)){
return tws_37570;
} else {
return and__24753__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_37570);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}

var G__37571 = seq__37564;
var G__37572 = chunk__37565;
var G__37573 = count__37566;
var G__37574 = (i__37567 + (1));
seq__37564 = G__37571;
chunk__37565 = G__37572;
count__37566 = G__37573;
i__37567 = G__37574;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__37564);
if(temp__4423__auto__){
var seq__37564__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37564__$1)){
var c__25550__auto__ = cljs.core.chunk_first.call(null,seq__37564__$1);
var G__37575 = cljs.core.chunk_rest.call(null,seq__37564__$1);
var G__37576 = c__25550__auto__;
var G__37577 = cljs.core.count.call(null,c__25550__auto__);
var G__37578 = (0);
seq__37564 = G__37575;
chunk__37565 = G__37576;
count__37566 = G__37577;
i__37567 = G__37578;
continue;
} else {
var token = cljs.core.first.call(null,seq__37564__$1);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__4421__auto___37579 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4421__auto___37579)){
var tws_37580 = temp__4421__auto___37579;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_37580);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_37581 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__24753__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__24753__auto__)){
return tws_37581;
} else {
return and__24753__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_37581);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}

var G__37582 = cljs.core.next.call(null,seq__37564__$1);
var G__37583 = null;
var G__37584 = (0);
var G__37585 = (0);
seq__37564 = G__37582;
chunk__37565 = G__37583;
count__37566 = G__37584;
i__37567 = G__37585;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__24765__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__24753__auto__ = miser_width;
if(cljs.core.truth_(and__24753__auto__)){
var and__24753__auto____$1 = maxcol;
if(cljs.core.truth_(and__24753__auto____$1)){
var and__24753__auto____$2 = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__24753__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__24753__auto____$2;
}
} else {
return and__24753__auto____$1;
}
} else {
return and__24753__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__25660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25664__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__25660__auto__,prefer_table__25661__auto__,method_cache__25662__auto__,cached_hierarchy__25663__auto__,hierarchy__25664__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__25660__auto__,prefer_table__25661__auto__,method_cache__25662__auto__,cached_hierarchy__25663__auto__,hierarchy__25664__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25664__auto__,method_table__25660__auto__,prefer_table__25661__auto__,method_cache__25662__auto__,cached_hierarchy__25663__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__24765__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection));
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__37586_SHARP_){
return cljs.core.not.call(null,(function (){var and__24753__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__37586_SHARP_);
if(cljs.core.truth_(and__24753__auto__)){
return cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__37586_SHARP_),lb);
} else {
return and__24753__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__37587_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__37587_SHARP_);
return cljs.core.not.call(null,(function (){var and__24753__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__37587_SHARP_);
if(cljs.core.truth_(and__24753__auto__)){
var or__24765__auto__ = cljs.core._EQ_.call(null,nl_lb,lb);
if(or__24765__auto__){
return or__24765__auto__;
} else {
return cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb);
}
} else {
return and__24753__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__37588 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__37588;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var istr_37589 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_37589);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__37590_SHARP_){
return cljs.core.not.call(null,cljs.pprint.nl_t_QMARK_.call(null,p1__37590_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__37593 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__37593,(0),null);
var b = cljs.core.nth.call(null,vec__37593,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__37594 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__37594,(0),null);
var remainder = cljs.core.nth.call(null,vec__37594,(1),null);
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = cljs$pprint$write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if(!((buffer === new_buffer))){
var G__37595 = new_buffer;
buffer = G__37595;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__4421__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4421__auto__)){
var buf = temp__4421__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__4423__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4423__auto__)){
var tws = temp__4423__auto__;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
var oldpos_37604 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_37605 = (oldpos_37604 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_37605);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_37604,newpos_37605));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__37600_37606 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__37601_37607 = null;
var count__37602_37608 = (0);
var i__37603_37609 = (0);
while(true){
if((i__37603_37609 < count__37602_37608)){
var l_37610__$1 = cljs.core._nth.call(null,chunk__37601_37607,i__37603_37609);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_37610__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var G__37611 = seq__37600_37606;
var G__37612 = chunk__37601_37607;
var G__37613 = count__37602_37608;
var G__37614 = (i__37603_37609 + (1));
seq__37600_37606 = G__37611;
chunk__37601_37607 = G__37612;
count__37602_37608 = G__37613;
i__37603_37609 = G__37614;
continue;
} else {
var temp__4423__auto___37615 = cljs.core.seq.call(null,seq__37600_37606);
if(temp__4423__auto___37615){
var seq__37600_37616__$1 = temp__4423__auto___37615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37600_37616__$1)){
var c__25550__auto___37617 = cljs.core.chunk_first.call(null,seq__37600_37616__$1);
var G__37618 = cljs.core.chunk_rest.call(null,seq__37600_37616__$1);
var G__37619 = c__25550__auto___37617;
var G__37620 = cljs.core.count.call(null,c__25550__auto___37617);
var G__37621 = (0);
seq__37600_37606 = G__37618;
chunk__37601_37607 = G__37619;
count__37602_37608 = G__37620;
i__37603_37609 = G__37621;
continue;
} else {
var l_37622__$1 = cljs.core.first.call(null,seq__37600_37616__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_37622__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var G__37623 = cljs.core.next.call(null,seq__37600_37616__$1);
var G__37624 = null;
var G__37625 = (0);
var G__37626 = (0);
seq__37600_37606 = G__37623;
chunk__37601_37607 = G__37624;
count__37602_37608 = G__37625;
i__37603_37609 = G__37626;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t37633 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t37633 = (function (pretty_writer,writer,max_columns,miser_width,lb,fields,meta37634){
this.pretty_writer = pretty_writer;
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta37634 = meta37634;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t37633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_37635,meta37634__$1){
var self__ = this;
var _37635__$1 = this;
return (new cljs.pprint.t37633(self__.pretty_writer,self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta37634__$1));
});})(lb,fields))
;

cljs.pprint.t37633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_37635){
var self__ = this;
var _37635__$1 = this;
return self__.meta37634;
});})(lb,fields))
;

cljs.pprint.t37633.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t37633.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__37636 = cljs.core._EQ_;
var expr__37637 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__37636.call(null,String,expr__37637))){
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,cljs.core.count.call(null,s));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_(pred__37636.call(null,Number,expr__37637))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37637)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t37633.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

cljs.pprint.t37633.prototype.cljs$pprint$IPrettyFlush$ = true;

cljs.pprint.t37633.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens.call(null,this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t37633.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pretty-writer","pretty-writer",417697260,null),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta37634","meta37634",-741477431,null)], null);
});})(lb,fields))
;

cljs.pprint.t37633.cljs$lang$type = true;

cljs.pprint.t37633.cljs$lang$ctorStr = "cljs.pprint/t37633";

cljs.pprint.t37633.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.pprint/t37633");
});})(lb,fields))
;

cljs.pprint.__GT_t37633 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t37633(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta37634){
return (new cljs.pprint.t37633(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta37634));
});})(lb,fields))
;

}

return (new cljs.pprint.t37633(cljs$pprint$pretty_writer,writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

var temp__4423__auto___37639 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4423__auto___37639)){
var cb_37640 = temp__4423__auto___37639;
cb_37640.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

var temp__4423__auto___37641 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4423__auto___37641)){
var cb_37642 = temp__4423__auto___37641;
cb_37642.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_37643 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_37644 = (oldpos_37643 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_37644);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_37643,newpos_37644));
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__37648 = cljs.core._EQ_;
var expr__37649 = relative_to;
if(cljs.core.truth_(pred__37648.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__37649))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__37648.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__37649))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37649)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base*
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.write_option_table = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"right-margin","right-margin",-810413306),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956),new cljs.core.Keyword(null,"radix","radix",857016463),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"readably","readably",1129599760),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"pretty","pretty",-1916372486),new cljs.core.Keyword(null,"base","base",185279322)],[new cljs.core.Var(function(){return cljs.pprint._STAR_print_miser_width_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-miser-width*","cljs.pprint/*print-miser-width*",1588913450,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-miser-width*","*print-miser-width*",1206624211,null),"resources/public/js/out/cljs/pprint.cljs",21,1,true,633,638,cljs.core.List.EMPTY,"The column at which to enter miser style. Depending on the dispatch table,\nmiser style add newlines in more places to try to keep lines short allowing for further\nlevels of nesting.",(cljs.core.truth_(cljs.pprint._STAR_print_miser_width_STAR_)?cljs.pprint._STAR_print_miser_width_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_right_margin_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-right-margin*","cljs.pprint/*print-right-margin*",-56183119,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-right-margin*","*print-right-margin*",-437272454,null),"resources/public/js/out/cljs/pprint.cljs",22,1,true,626,631,cljs.core.List.EMPTY,"Pretty printing will try to avoid anything going beyond this column.\nSet it to nil to have pprint let the line be arbitrarily long. This will ignore all\nnon-mandatory newlines.",(cljs.core.truth_(cljs.pprint._STAR_print_right_margin_STAR_)?cljs.pprint._STAR_print_right_margin_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_circle_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-circle*","cljs.pprint/*print-circle*",1606185849,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-circle*","*print-circle*",1148404994,null),"resources/public/js/out/cljs/pprint.cljs",15,1,true,647,650,cljs.core.List.EMPTY,"Mark circular structures (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_circle_STAR_)?cljs.pprint._STAR_print_circle_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_lines_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-lines*","cljs.pprint/*print-lines*",534683484,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-lines*","*print-lines*",75920659,null),"resources/public/js/out/cljs/pprint.cljs",14,1,true,641,644,cljs.core.List.EMPTY,"Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_lines_STAR_)?cljs.pprint._STAR_print_lines_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_suppress_namespaces_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-suppress-namespaces*","cljs.pprint/*print-suppress-namespaces*",1649488204,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-suppress-namespaces*","*print-suppress-namespaces*",1795828355,null),"resources/public/js/out/cljs/pprint.cljs",28,1,true,658,662,cljs.core.List.EMPTY,"Don't print namespaces with symbols. This is particularly useful when\npretty printing the results of macro expansions",(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)?cljs.pprint._STAR_print_suppress_namespaces_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_radix_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-radix*","cljs.pprint/*print-radix*",1558253641,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-radix*","*print-radix*",1168517744,null),"resources/public/js/out/cljs/pprint.cljs",14,1,true,666,671,cljs.core.List.EMPTY,"Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,\nor 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the\nradix specifier is in the form #XXr where XX is the decimal value of *print-base* ",(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?cljs.pprint._STAR_print_radix_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_level_STAR_;},new cljs.core.Symbol("cljs.core","*print-level*","cljs.core/*print-level*",65848482,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),"cljs/core.cljs",16,1,true,87,97,cljs.core.List.EMPTY,"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",(cljs.core.truth_(cljs.core._STAR_print_level_STAR_)?cljs.core._STAR_print_level_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_readably_STAR_;},new cljs.core.Symbol("cljs.core","*print-readably*","cljs.core/*print-readably*",-354670250,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),"cljs/core.cljs",19,1,true,55,61,cljs.core.List.EMPTY,"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",(cljs.core.truth_(cljs.core._STAR_print_readably_STAR_)?cljs.core._STAR_print_readably_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pprint_dispatch_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-pprint-dispatch*","cljs.pprint/*print-pprint-dispatch*",-1820734013,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-pprint-dispatch*","*print-pprint-dispatch*",-1709114492,null),"resources/public/js/out/cljs/pprint.cljs",25,1,true,620,624,cljs.core.List.EMPTY,"The pretty print dispatch function. Use with-pprint-dispatch or\nset-pprint-dispatch to modify.",(cljs.core.truth_(cljs.pprint._STAR_print_pprint_dispatch_STAR_)?cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_length_STAR_;},new cljs.core.Symbol("cljs.core","*print-length*","cljs.core/*print-length*",-20766927,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),"cljs/core.cljs",17,1,true,79,85,cljs.core.List.EMPTY,"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",(cljs.core.truth_(cljs.core._STAR_print_length_STAR_)?cljs.core._STAR_print_length_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pretty_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-pretty*","cljs.pprint/*print-pretty*",-762636861,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-pretty*","*print-pretty*",726795140,null),"resources/public/js/out/cljs/pprint.cljs",16,1,true,616,618,cljs.core.List.EMPTY,"Bind to true if you want write to use pretty printing",(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)?cljs.pprint._STAR_print_pretty_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_base_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-base*","cljs.pprint/*print-base*",1887526790,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-base*","*print-base*",2037937791,null),"resources/public/js/out/cljs/pprint.cljs",13,1,true,673,676,cljs.core.List.EMPTY,"The base to use for printing integers and rationals.",(cljs.core.truth_(cljs.pprint._STAR_print_base_STAR_)?cljs.pprint._STAR_print_base_STAR_.cljs$lang$test:null)]))]);
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__37651_SHARP_){
var temp__4423__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__37651_SHARP_));
if(cljs.core.truth_(temp__4423__auto__)){
var v = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__37651_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__24753__auto__ = (function (){var G__37655 = x;
if(G__37655){
var bit__25439__auto__ = (G__37655.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__25439__auto__) || (G__37655.cljs$core$IDeref$)){
return true;
} else {
if((!G__37655.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__37655);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__37655);
}
})();
if(and__24753__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__24753__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface.
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__24753__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__24753__auto__)){
var and__24753__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__24753__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__24753__auto____$1;
}
} else {
return and__24753__auto__;
}
})();
if(cljs.core.not.call(null,cljs.pprint._STAR_print_pretty_STAR_)){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 * Keyword              Meaning                              Default value
 * :stream              Writer for output or nil             true (indicates *out*)
 * :base                Base to use for writing rationals    Current value of *print-base*
 * :circle*             If true, mark circular structures    Current value of *print-circle*
 * :length              Maximum elements to show in sublists Current value of *print-length*
 * :level               Maximum depth                        Current value of *print-level*
 * :lines*              Maximum lines of output              Current value of *print-lines*
 * :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 * :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 * :pretty              If true, do pretty printing          Current value of *print-pretty*
 * :radix               If true, prepend a radix specifier   Current value of *print-radix*
 * :readably*           If true, print readably              Current value of *print-readably*
 * :right-margin        The column for the right margin      Current value of *print-right-margin*
 * :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 * * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(){
var argseq__25805__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25805__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR_37658 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_37659 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_37660 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_37661 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_37662 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_37663 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_37664 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_37665 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_37666 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_37667 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_37668 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_37669 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__36661__auto___37672 = base_writer;
var new_writer__36662__auto___37673 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__36661__auto___37672));
var _STAR_out_STAR_37670_37674 = cljs.pprint._STAR_out_STAR_;
cljs.pprint._STAR_out_STAR_ = ((new_writer__36662__auto___37673)?cljs.pprint.make_pretty_writer.call(null,base_writer__36661__auto___37672,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__36661__auto___37672);

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_out_STAR_ = _STAR_out_STAR_37670_37674;
}} else {
var _STAR_out_STAR_37671_37675 = cljs.pprint._STAR_out_STAR_;
cljs.pprint._STAR_out_STAR_ = base_writer;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.pprint._STAR_out_STAR_ = _STAR_out_STAR_37671_37675;
}}

if(optval === true){
cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_37669;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_37668;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_37667;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_37666;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_37665;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_37664;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_37663;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_37662;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_37661;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_37660;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_37659;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_37658;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq37656){
var G__37657 = cljs.core.first.call(null,seq37656);
var seq37656__$1 = cljs.core.next.call(null,seq37656);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__37657,seq37656__$1);
});
cljs.pprint.pprint = (function cljs$pprint$pprint(){
var G__37677 = arguments.length;
switch (G__37677) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_37678 = cljs.pprint._STAR_out_STAR_;
cljs.pprint._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.call(null,object,cljs.pprint._STAR_out_STAR_);

return cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join(''));
}finally {cljs.pprint._STAR_out_STAR_ = _STAR_out_STAR_37678;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__36661__auto__ = writer;
var new_writer__36662__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__36661__auto__));
var _STAR_out_STAR_37679 = cljs.pprint._STAR_out_STAR_;
cljs.pprint._STAR_out_STAR_ = ((new_writer__36662__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__36661__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__36661__auto__);

try{var _STAR_print_pretty_STAR_37680_37682 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_37680_37682;
}
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.pprint._STAR_out_STAR_)))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_out_STAR_ = _STAR_out_STAR_37679;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;
cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error([cljs.core.str("Bad argument: "),cljs.core.str(arg),cljs.core.str(". It must be one of "),cljs.core.str(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__24753__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__24753__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__24753__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 * newline is :linear, :miser, :fill, or :mandatory.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl.call(null,cljs.pprint._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent.call(null,cljs.pprint._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 * (let [results [46 38 22]]
 * (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 * (count results) results))
 * 
 * Prints via *print-fn*:
 * There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(){
var argseq__25805__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25805__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq37683){
var G__37684 = cljs.core.first.call(null,seq37683);
var seq37683__$1 = cljs.core.next.call(null,seq37683);
var G__37685 = cljs.core.first.call(null,seq37683__$1);
var seq37683__$2 = cljs.core.next.call(null,seq37683__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__37684,G__37685,seq37683__$2);
});
cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str(message),cljs.core.str("\n"),cljs.core.str(cljs.pprint._STAR_format_str_STAR_),cljs.core.str("\n"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),cljs.core.str("^"),cljs.core.str("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
* @param {*} seq
* @param {*} rest
* @param {*} pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25360__auto__,k__25361__auto__){
var self__ = this;
var this__25360__auto____$1 = this;
return cljs.core._lookup.call(null,this__25360__auto____$1,k__25361__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25362__auto__,k37687,else__25363__auto__){
var self__ = this;
var this__25362__auto____$1 = this;
var G__37689 = (((k37687 instanceof cljs.core.Keyword))?k37687.fqn:null);
switch (G__37689) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37687,else__25363__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25374__auto__,writer__25375__auto__,opts__25376__auto__){
var self__ = this;
var this__25374__auto____$1 = this;
var pr_pair__25377__auto__ = ((function (this__25374__auto____$1){
return (function (keyval__25378__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,cljs.core.pr_writer,""," ","",opts__25376__auto__,keyval__25378__auto__);
});})(this__25374__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,pr_pair__25377__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__25376__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25358__auto__){
var self__ = this;
var this__25358__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25354__auto__){
var self__ = this;
var this__25354__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25364__auto__){
var self__ = this;
var this__25364__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25355__auto__){
var self__ = this;
var this__25355__auto____$1 = this;
var h__25181__auto__ = self__.__hash;
if(!((h__25181__auto__ == null))){
return h__25181__auto__;
} else {
var h__25181__auto____$1 = cljs.core.hash_imap.call(null,this__25355__auto____$1);
self__.__hash = h__25181__auto____$1;

return h__25181__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25356__auto__,other__25357__auto__){
var self__ = this;
var this__25356__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24753__auto__ = other__25357__auto__;
if(cljs.core.truth_(and__24753__auto__)){
var and__24753__auto____$1 = (this__25356__auto____$1.constructor === other__25357__auto__.constructor);
if(and__24753__auto____$1){
return cljs.core.equiv_map.call(null,this__25356__auto____$1,other__25357__auto__);
} else {
return and__24753__auto____$1;
}
} else {
return and__24753__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25369__auto__,k__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__25370__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25369__auto____$1),self__.__meta),k__25370__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25370__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25367__auto__,k__25368__auto__,G__37686){
var self__ = this;
var this__25367__auto____$1 = this;
var pred__37690 = cljs.core.keyword_identical_QMARK_;
var expr__37691 = k__25368__auto__;
if(cljs.core.truth_(pred__37690.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__37691))){
return (new cljs.pprint.arg_navigator(G__37686,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37690.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__37691))){
return (new cljs.pprint.arg_navigator(self__.seq,G__37686,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37690.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__37691))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__37686,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25368__auto__,G__37686),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25372__auto__){
var self__ = this;
var this__25372__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25359__auto__,G__37686){
var self__ = this;
var this__25359__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__37686,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25365__auto__,entry__25366__auto__){
var self__ = this;
var this__25365__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25366__auto__)){
return cljs.core._assoc.call(null,this__25365__auto____$1,cljs.core._nth.call(null,entry__25366__auto__,(0)),cljs.core._nth.call(null,entry__25366__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25365__auto____$1,entry__25366__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__25394__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__25394__auto__,writer__25395__auto__){
return cljs.core._write.call(null,writer__25395__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__37688){
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__37688),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__37688),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__37688),null,cljs.core.dissoc.call(null,G__37688,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__37695 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__37695,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__37695,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
* @param {*} func
* @param {*} def
* @param {*} params
* @param {*} offset
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25360__auto__,k__25361__auto__){
var self__ = this;
var this__25360__auto____$1 = this;
return cljs.core._lookup.call(null,this__25360__auto____$1,k__25361__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25362__auto__,k37697,else__25363__auto__){
var self__ = this;
var this__25362__auto____$1 = this;
var G__37699 = (((k37697 instanceof cljs.core.Keyword))?k37697.fqn:null);
switch (G__37699) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37697,else__25363__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25374__auto__,writer__25375__auto__,opts__25376__auto__){
var self__ = this;
var this__25374__auto____$1 = this;
var pr_pair__25377__auto__ = ((function (this__25374__auto____$1){
return (function (keyval__25378__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,cljs.core.pr_writer,""," ","",opts__25376__auto__,keyval__25378__auto__);
});})(this__25374__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25375__auto__,pr_pair__25377__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__25376__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25358__auto__){
var self__ = this;
var this__25358__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25354__auto__){
var self__ = this;
var this__25354__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25364__auto__){
var self__ = this;
var this__25364__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25355__auto__){
var self__ = this;
var this__25355__auto____$1 = this;
var h__25181__auto__ = self__.__hash;
if(!((h__25181__auto__ == null))){
return h__25181__auto__;
} else {
var h__25181__auto____$1 = cljs.core.hash_imap.call(null,this__25355__auto____$1);
self__.__hash = h__25181__auto____$1;

return h__25181__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25356__auto__,other__25357__auto__){
var self__ = this;
var this__25356__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24753__auto__ = other__25357__auto__;
if(cljs.core.truth_(and__24753__auto__)){
var and__24753__auto____$1 = (this__25356__auto____$1.constructor === other__25357__auto__.constructor);
if(and__24753__auto____$1){
return cljs.core.equiv_map.call(null,this__25356__auto____$1,other__25357__auto__);
} else {
return and__24753__auto____$1;
}
} else {
return and__24753__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25369__auto__,k__25370__auto__){
var self__ = this;
var this__25369__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__25370__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25369__auto____$1),self__.__meta),k__25370__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25370__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25367__auto__,k__25368__auto__,G__37696){
var self__ = this;
var this__25367__auto____$1 = this;
var pred__37700 = cljs.core.keyword_identical_QMARK_;
var expr__37701 = k__25368__auto__;
if(cljs.core.truth_(pred__37700.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__37701))){
return (new cljs.pprint.compiled_directive(G__37696,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37700.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__37701))){
return (new cljs.pprint.compiled_directive(self__.func,G__37696,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37700.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__37701))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__37696,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37700.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__37701))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__37696,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25368__auto__,G__37696),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25372__auto__){
var self__ = this;
var this__25372__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25359__auto__,G__37696){
var self__ = this;
var this__25359__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__37696,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25365__auto__,entry__25366__auto__){
var self__ = this;
var this__25365__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25366__auto__)){
return cljs.core._assoc.call(null,this__25365__auto____$1,cljs.core._nth.call(null,entry__25366__auto__,(0)),cljs.core._nth.call(null,entry__25366__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25365__auto____$1,entry__25366__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__25394__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__25394__auto__,writer__25395__auto__){
return cljs.core._write.call(null,writer__25395__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__37698){
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__37698),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__37698),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__37698),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__37698),null,cljs.core.dissoc.call(null,G__37698,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__37704,navigator){
var vec__37708 = p__37704;
var param = cljs.core.nth.call(null,vec__37708,(0),null);
var vec__37709 = cljs.core.nth.call(null,vec__37708,(1),null);
var raw_val = cljs.core.nth.call(null,vec__37709,(0),null);
var offset = cljs.core.nth.call(null,vec__37709,(1),null);
var vec__37710 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__37710,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__37710,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__37712 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__37712,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__37712,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str(n),cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__24765__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return [cljs.core.str("#"),cljs.core.str(cljs.pprint._STAR_print_base_STAR_),cljs.core.str("r")].join('');
}
})():null)),cljs.core.str(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__37714 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__37714,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__37714,(1),null);
var base_output = (function (){var or__24765__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str(chars),cljs.core.str(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str(base_output),cljs.core.str(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__37715_SHARP_){
if((p1__37715_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__37715_SHARP_,base),cljs.core.quot.call(null,p1__37715_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (xlated_val){
return (function (p1__37716_SHARP_){
if((p1__37716_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__37716_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__37716_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__37719 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__37719,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__37719,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_.call(null,arg))){
var neg_37720 = (arg < (0));
var pos_arg_37721 = ((neg_37720)?(- arg):arg);
var raw_str_37722 = cljs.pprint.opt_base_str.call(null,base,pos_arg_37721);
var group_str_37723 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_37720,pos_arg_37721,raw_str_37722,vec__37719,arg,arg_navigator__$1){
return (function (p1__37717_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__37717_SHARP_);
});})(neg_37720,pos_arg_37721,raw_str_37722,vec__37719,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_37722));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_37722);
var signed_str_37724 = ((neg_37720)?[cljs.core.str("-"),cljs.core.str(group_str_37723)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?[cljs.core.str("+"),cljs.core.str(group_str_37723)].join(''):group_str_37723
));
var padded_str_37725 = (((signed_str_37724.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_37724.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str(signed_str_37724)].join(''):signed_str_37724);
cljs.pprint.print.call(null,padded_str_37725);
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 * offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),cljs.core.str((((!(cljs.core.empty_QMARK_.call(null,this$))) && (!(cljs.core.empty_QMARK_.call(null,acc))))?", ":null)),cljs.core.str(this$),cljs.core.str((((!(cljs.core.empty_QMARK_.call(null,this$))) && (((pos + offset) > (0))))?[cljs.core.str(" "),cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__37726 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str(this$),cljs.core.str(" "),cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__37727 = (pos - (1));
var G__37728 = cljs.core.first.call(null,remainder);
var G__37729 = cljs.core.next.call(null,remainder);
acc = G__37726;
pos = G__37727;
this$ = G__37728;
remainder = G__37729;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__37731 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__37731,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__37731,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_37732 = (((arg < (0)))?(- arg):arg);
var parts_37733 = cljs.pprint.remainders.call(null,(1000),abs_arg_37732);
if((cljs.core.count.call(null,parts_37733) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_37734 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_37733);
var full_str_37735 = cljs.pprint.add_english_scales.call(null,parts_strs_37734,(0));
cljs.pprint.print.call(null,[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str(full_str_37735)].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 * Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__37737 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__37737,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__37737,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_37738 = (((arg < (0)))?(- arg):arg);
var parts_37739 = cljs.pprint.remainders.call(null,(1000),abs_arg_37738);
if((cljs.core.count.call(null,parts_37739) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_37740 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_37739));
var head_str_37741 = cljs.pprint.add_english_scales.call(null,parts_strs_37740,(1));
var tail_str_37742 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_37739));
cljs.pprint.print.call(null,[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str((((!(cljs.core.empty_QMARK_.call(null,head_str_37741))) && (!(cljs.core.empty_QMARK_.call(null,tail_str_37742))))?[cljs.core.str(head_str_37741),cljs.core.str(", "),cljs.core.str(tail_str_37742)].join(''):((!(cljs.core.empty_QMARK_.call(null,head_str_37741)))?[cljs.core.str(head_str_37741),cljs.core.str("th")].join(''):tail_str_37742
)))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_37743 = cljs.core.rem.call(null,arg,(100));
var not_teens_37744 = (((11) < low_two_digits_37743)) || (((19) > low_two_digits_37743));
var low_digit_37745 = cljs.core.rem.call(null,low_two_digits_37743,(10));
cljs.pprint.print.call(null,((((low_digit_37745 === (1))) && (not_teens_37744))?"st":((((low_digit_37745 === (2))) && (not_teens_37744))?"nd":((((low_digit_37745 === (3))) && (not_teens_37744))?"rd":"th"
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__37747 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__37747,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__37747,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_37748 = cljs.pprint.remainders.call(null,(10),arg);
var acc_37749 = cljs.core.PersistentVector.EMPTY;
var pos_37750 = (cljs.core.count.call(null,digits_37748) - (1));
var digits_37751__$1 = digits_37748;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_37751__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_37749));
} else {
var digit_37752 = cljs.core.first.call(null,digits_37751__$1);
var G__37753 = ((cljs.core._EQ_.call(null,(0),digit_37752))?acc_37749:cljs.core.conj.call(null,acc_37749,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_37750),(digit_37752 - (1)))));
var G__37754 = (pos_37750 - (1));
var G__37755 = cljs.core.next.call(null,digits_37751__$1);
acc_37749 = G__37753;
pos_37750 = G__37754;
digits_37751__$1 = G__37755;
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__37757 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__37757,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__37757,(1),null);
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?[cljs.core.str("Control-"),cljs.core.str(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__37762 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__37762,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__37762,(1),null);
var pred__37763_37766 = cljs.core._EQ_;
var expr__37764_37767 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__37763_37766.call(null,"o",expr__37764_37767))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__37763_37766.call(null,"u",expr__37764_37767))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__37763_37766.call(null,null,expr__37764_37767))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37764_37767)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__37769 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__37769,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__37769,(1),null);
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__37772 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__37772,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__37772,(1),null);
var vec__37773 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__37773,(0),null);
var offsets = cljs.core.nth.call(null,vec__37773,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,[cljs.core.str(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str((cljs.core.count.call(null,s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.call(null,s,(0),dotloc)),cljs.core.str(cljs.core.subs.call(null,s,(dotloc + (1))))].join(''),[cljs.core.str((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.call(null,s,(0),(1))),cljs.core.str(cljs.core.subs.call(null,s,(2),exploc))].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__37775 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__37775,(0),null);
var e = cljs.core.nth.call(null,vec__37775,(1),null);
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = ((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+")))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 * and no other characters. Return a string containing one or more
 * decimal digits containing a decimal number one larger than the input
 * string. The output string will always be the same length as the input
 * string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
var G__37776 = (i - (1));
i = G__37776;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__24765__auto__ = d;
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__25077__auto__ = (2);
var y__25078__auto__ = w;
return ((x__25077__auto__ > y__25078__auto__) ? x__25077__auto__ : y__25078__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__25077__auto__ = (e + (1));
var y__25078__auto__ = (w__$1 - (1));
return ((x__25077__auto__ > y__25078__auto__) ? x__25077__auto__ : y__25078__auto__);
})():(w__$1 + e)
));
var vec__37778 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("0"),cljs.core.str(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__37778,(0),null);
var e1 = cljs.core.nth.call(null,vec__37778,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__37778,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__37778,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > cljs.core.count.call(null,result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__37780 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__37780,(0),null);
var e1 = cljs.core.nth.call(null,vec__37780,(1),null);
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str(m1),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str(cljs.core.subs.call(null,m,(0),loc)),cljs.core.str("."),cljs.core.str(cljs.core.subs.call(null,m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
return [cljs.core.str(cljs.core.subs.call(null,m,(0),k)),cljs.core.str("."),cljs.core.str(cljs.core.subs.call(null,m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__37785 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__37785,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__37785,(1),null);
var vec__37786 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__37786,(0),null);
var abs = cljs.core.nth.call(null,vec__37786,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__37787 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__37787,(0),null);
var exp = cljs.core.nth.call(null,vec__37787,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__24765__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp));
var vec__37788 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__37788,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__37788,(1),null);
var expanded = cljs.core.nth.call(null,vec__37788,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__24753__auto__ = w;
if(cljs.core.truth_(and__24753__auto__)){
var and__24753__auto____$1 = d;
if(cljs.core.truth_(and__24753__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__24753__auto____$1;
}
} else {
return and__24753__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_37789 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_37790 = (cljs.core.truth_(add_sign)?(len_37789 + (1)):len_37789);
var prepend_zero_37791__$1 = (prepend_zero) && (!((signed_len_37790 >= w)));
var append_zero_37792__$1 = (append_zero) && (!((signed_len_37790 >= w)));
var full_len_37793 = (((prepend_zero_37791__$1) || (append_zero_37792__$1))?(signed_len_37790 + (1)):signed_len_37790);
if(cljs.core.truth_((function (){var and__24753__auto__ = (full_len_37793 > w);
if(and__24753__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__24753__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_37793),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero_37791__$1)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero_37792__$1)?"0":null))].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero)?"0":null))].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__37800 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__37800,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__37800,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__37802_37806 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__37803_37807 = G__37802_37806;
var mantissa_37808 = cljs.core.nth.call(null,vec__37803_37807,(0),null);
var exp_37809 = cljs.core.nth.call(null,vec__37803_37807,(1),null);
var G__37802_37810__$1 = G__37802_37806;
while(true){
var vec__37804_37811 = G__37802_37810__$1;
var mantissa_37812__$1 = cljs.core.nth.call(null,vec__37804_37811,(0),null);
var exp_37813__$1 = cljs.core.nth.call(null,vec__37804_37811,(1),null);
var w_37814 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_37815 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_37816 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_37817 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_37818 = (function (){var or__24765__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return "E";
}
})();
var add_sign_37819 = (function (){var or__24765__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_37820 = (k_37817 <= (0));
var scaled_exp_37821 = (exp_37813__$1 - (k_37817 - (1)));
var scaled_exp_str_37822 = [cljs.core.str(Math.abs(scaled_exp_37821))].join('');
var scaled_exp_str_37823__$1 = [cljs.core.str(expchar_37818),cljs.core.str((((scaled_exp_37821 < (0)))?"-":"+")),cljs.core.str((cljs.core.truth_(e_37816)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_37816 - cljs.core.count.call(null,scaled_exp_str_37822)),"0")):null)),cljs.core.str(scaled_exp_str_37822)].join('');
var exp_width_37824 = cljs.core.count.call(null,scaled_exp_str_37823__$1);
var base_mantissa_width_37825 = cljs.core.count.call(null,mantissa_37812__$1);
var scaled_mantissa_37826 = [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_37817),"0"))),cljs.core.str(mantissa_37812__$1),cljs.core.str((cljs.core.truth_(d_37815)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_37815 - (base_mantissa_width_37825 - (1))) - (((k_37817 < (0)))?(- k_37817):(0))),"0")):null))].join('');
var w_mantissa_37827 = (cljs.core.truth_(w_37814)?(w_37814 - exp_width_37824):null);
var vec__37805_37828 = cljs.pprint.round_str.call(null,scaled_mantissa_37826,(0),((cljs.core._EQ_.call(null,k_37817,(0)))?(d_37815 - (1)):(((k_37817 > (0)))?d_37815:(((k_37817 < (0)))?(d_37815 - (1)):null))),(cljs.core.truth_(w_mantissa_37827)?(w_mantissa_37827 - (cljs.core.truth_(add_sign_37819)?(1):(0))):null));
var rounded_mantissa_37829 = cljs.core.nth.call(null,vec__37805_37828,(0),null);
var __37830 = cljs.core.nth.call(null,vec__37805_37828,(1),null);
var incr_exp_37831 = cljs.core.nth.call(null,vec__37805_37828,(2),null);
var full_mantissa_37832 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_37829,k_37817);
var append_zero_37833 = (cljs.core._EQ_.call(null,k_37817,cljs.core.count.call(null,rounded_mantissa_37829))) && ((d_37815 == null));
if(cljs.core.not.call(null,incr_exp_37831)){
if(cljs.core.truth_(w_37814)){
var len_37834 = (cljs.core.count.call(null,full_mantissa_37832) + exp_width_37824);
var signed_len_37835 = (cljs.core.truth_(add_sign_37819)?(len_37834 + (1)):len_37834);
var prepend_zero_37836__$1 = (prepend_zero_37820) && (!(cljs.core._EQ_.call(null,signed_len_37835,w_37814)));
var full_len_37837 = ((prepend_zero_37836__$1)?(signed_len_37835 + (1)):signed_len_37835);
var append_zero_37838__$1 = (append_zero_37833) && ((full_len_37837 < w_37814));
if(cljs.core.truth_((function (){var and__24753__auto__ = (function (){var or__24765__auto__ = (full_len_37837 > w_37814);
if(or__24765__auto__){
return or__24765__auto__;
} else {
var and__24753__auto__ = e_37816;
if(cljs.core.truth_(and__24753__auto__)){
return ((exp_width_37824 - (2)) > e_37816);
} else {
return and__24753__auto__;
}
}
})();
if(cljs.core.truth_(and__24753__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__24753__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_37814,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_37814 - full_len_37837) - ((append_zero_37838__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign_37819)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_37836__$1)?"0":null)),cljs.core.str(full_mantissa_37832),cljs.core.str(((append_zero_37838__$1)?"0":null)),cljs.core.str(scaled_exp_str_37823__$1)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str((cljs.core.truth_(add_sign_37819)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_37820)?"0":null)),cljs.core.str(full_mantissa_37832),cljs.core.str(((append_zero_37833)?"0":null)),cljs.core.str(scaled_exp_str_37823__$1)].join(''));
}
} else {
var G__37839 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_37829,(exp_37813__$1 + (1))], null);
G__37802_37810__$1 = G__37839;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__37842 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__37842,(0),null);
var _ = cljs.core.nth.call(null,vec__37842,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__37843 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__37843,(0),null);
var exp = cljs.core.nth.call(null,vec__37843,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__25077__auto__ = cljs.core.count.call(null,mantissa);
var y__25078__auto__ = (function (){var x__25084__auto__ = n;
var y__25085__auto__ = (7);
return ((x__25084__auto__ < y__25085__auto__) ? x__25084__auto__ : y__25085__auto__);
})();
return ((x__25077__auto__ > y__25078__auto__) ? x__25077__auto__ : y__25078__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__37847 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__37847,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__37847,(1),null);
var vec__37848 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__37848,(0),null);
var exp = cljs.core.nth.call(null,vec__37848,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__24765__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return (arg < (0));
}
})();
var vec__37849 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__37849,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__37849,(1),null);
var expanded = cljs.core.nth.call(null,vec__37849,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),cljs.core.str(fixed_repr)].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[cljs.core.str((cljs.core.truth_((function (){var and__24753__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__24753__auto__)){
return add_sign;
} else {
return and__24753__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_((function (){var and__24753__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__24753__auto__){
return add_sign;
} else {
return and__24753__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(full_repr)].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__37851 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__37851,(0),null);
var navigator = cljs.core.nth.call(null,vec__37851,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__37853 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__37853,(0),null);
var navigator = cljs.core.nth.call(null,vec__37853,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__37855 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__37855,(0),null);
var navigator = cljs.core.nth.call(null,vec__37855,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__37858 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__37858,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__37858,(1),null);
var vec__37859 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__37859,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__37859,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__24765__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__24765__auto__){
return or__24765__auto__;
} else {
var and__24753__auto__ = max_count;
if(cljs.core.truth_(and__24753__auto__)){
return (count >= max_count);
} else {
return and__24753__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__37860 = (count + (1));
var G__37861 = iter_result;
var G__37862 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__37860;
args__$1 = G__37861;
last_pos = G__37862;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__37865 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__37865,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__37865,(1),null);
var vec__37866 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__37866,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__37866,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__24765__auto__ = (cljs.core.empty_QMARK_.call(null,arg_list__$1)) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__24765__auto__){
return or__24765__auto__;
} else {
var and__24753__auto__ = max_count;
if(cljs.core.truth_(and__24753__auto__)){
return (count >= max_count);
} else {
return and__24753__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__37867 = (count + (1));
var G__37868 = cljs.core.next.call(null,arg_list__$1);
count = G__37867;
arg_list__$1 = G__37868;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__37870 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__37870,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__37870,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__24765__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__24765__auto__){
return or__24765__auto__;
} else {
var and__24753__auto__ = max_count;
if(cljs.core.truth_(and__24753__auto__)){
return (count >= max_count);
} else {
return and__24753__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__37871 = (count + (1));
var G__37872 = iter_result;
var G__37873 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__37871;
navigator__$2 = G__37872;
last_pos = G__37873;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__37876 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__37876,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__37876,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__24765__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__24765__auto__){
return or__24765__auto__;
} else {
var and__24753__auto__ = max_count;
if(cljs.core.truth_(and__24753__auto__)){
return (count >= max_count);
} else {
return and__24753__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__37877 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__37877,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__37877,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__37878 = (count + (1));
var G__37879 = navigator__$3;
count = G__37878;
navigator__$2 = G__37879;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
var vec__37882 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_37883 = cljs.pprint._STAR_out_STAR_;
cljs.pprint._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),[cljs.core.str(sb)].join('')], null);
}finally {cljs.pprint._STAR_out_STAR_ = _STAR_out_STAR_37883;
}})();
var iter_result = cljs.core.nth.call(null,vec__37882,(0),null);
var result_str = cljs.core.nth.call(null,vec__37882,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__37884 = cljs.core.next.call(null,clauses__$1);
var G__37885 = cljs.core.conj.call(null,acc,result_str);
var G__37886 = iter_result;
clauses__$1 = G__37884;
acc = G__37885;
navigator__$1 = G__37886;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__37891 = (function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4423__auto__)){
var else$ = temp__4423__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__37892 = cljs.core.nth.call(null,vec__37891,(0),null);
var eol_str = cljs.core.nth.call(null,vec__37892,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__37891,(1),null);
var navigator__$1 = (function (){var or__24765__auto__ = new_navigator;
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return navigator;
}
})();
var vec__37893 = (function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4423__auto__)){
var p = temp__4423__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__37893,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__37893,(1),null);
var navigator__$2 = (function (){var or__24765__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__24765__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__24765__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.pprint._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__37894 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__37894,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__37894,(1),null);
var slots = (function (){var x__25077__auto__ = (1);
var y__25078__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__25077__auto__ > y__25078__auto__) ? x__25077__auto__ : y__25078__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__25077__auto__ = minpad;
var y__25078__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__25077__auto__ > y__25078__auto__) ? x__25077__auto__ : y__25078__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__24753__auto__ = eol_str;
if(cljs.core.truth_(and__24753__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.pprint._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__24753__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_37895__$1 = slots;
var extra_pad_37896__$1 = extra_pad;
var strs_37897__$1 = strs;
var pad_only_37898 = (function (){var or__24765__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return (cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_37897__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_37897__$1)){
cljs.pprint.print.call(null,[cljs.core.str(((cljs.core.not.call(null,pad_only_37898))?cljs.core.first.call(null,strs_37897__$1):null)),cljs.core.str((cljs.core.truth_((function (){var or__24765__auto__ = pad_only_37898;
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = cljs.core.next.call(null,strs_37897__$1);
if(or__24765__auto____$1){
return or__24765__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str((((extra_pad_37896__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__37899 = (slots_37895__$1 - (1));
var G__37900 = (extra_pad_37896__$1 - (1));
var G__37901 = (cljs.core.truth_(pad_only_37898)?strs_37897__$1:cljs.core.next.call(null,strs_37897__$1));
var G__37902 = false;
slots_37895__$1 = G__37899;
extra_pad_37896__$1 = G__37900;
strs_37897__$1 = G__37901;
pad_only_37898 = G__37902;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t37909 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t37909 = (function (downcase_writer,writer,meta37910){
this.downcase_writer = downcase_writer;
this.writer = writer;
this.meta37910 = meta37910;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t37909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37911,meta37910__$1){
var self__ = this;
var _37911__$1 = this;
return (new cljs.pprint.t37909(self__.downcase_writer,self__.writer,meta37910__$1));
});

cljs.pprint.t37909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37911){
var self__ = this;
var _37911__$1 = this;
return self__.meta37910;
});

cljs.pprint.t37909.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t37909.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__37912 = cljs.core._EQ_;
var expr__37913 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__37912.call(null,String,expr__37913))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__37912.call(null,Number,expr__37913))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37913)].join('')));
}
}
});

cljs.pprint.t37909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"downcase-writer","downcase-writer",37286911,null),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta37910","meta37910",1755573564,null)], null);
});

cljs.pprint.t37909.cljs$lang$type = true;

cljs.pprint.t37909.cljs$lang$ctorStr = "cljs.pprint/t37909";

cljs.pprint.t37909.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.pprint/t37909");
});

cljs.pprint.__GT_t37909 = (function cljs$pprint$downcase_writer_$___GT_t37909(downcase_writer__$1,writer__$1,meta37910){
return (new cljs.pprint.t37909(downcase_writer__$1,writer__$1,meta37910));
});

}

return (new cljs.pprint.t37909(cljs$pprint$downcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t37921 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t37921 = (function (upcase_writer,writer,meta37922){
this.upcase_writer = upcase_writer;
this.writer = writer;
this.meta37922 = meta37922;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t37921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37923,meta37922__$1){
var self__ = this;
var _37923__$1 = this;
return (new cljs.pprint.t37921(self__.upcase_writer,self__.writer,meta37922__$1));
});

cljs.pprint.t37921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37923){
var self__ = this;
var _37923__$1 = this;
return self__.meta37922;
});

cljs.pprint.t37921.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t37921.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__37924 = cljs.core._EQ_;
var expr__37925 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__37924.call(null,String,expr__37925))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__37924.call(null,Number,expr__37925))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37925)].join('')));
}
}
});

cljs.pprint.t37921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"upcase-writer","upcase-writer",51077317,null),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta37922","meta37922",1861672300,null)], null);
});

cljs.pprint.t37921.cljs$lang$type = true;

cljs.pprint.t37921.cljs$lang$ctorStr = "cljs.pprint/t37921";

cljs.pprint.t37921.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.pprint/t37921");
});

cljs.pprint.__GT_t37921 = (function cljs$pprint$upcase_writer_$___GT_t37921(upcase_writer__$1,writer__$1,meta37922){
return (new cljs.pprint.t37921(upcase_writer__$1,writer__$1,meta37922));
});

}

return (new cljs.pprint.t37921(cljs$pprint$upcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.is_letter_QMARK_ = (function cljs$pprint$is_letter_QMARK_(s){
return cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 52, ["T",null,"d",null,"n",null,"K",null,"z",null,"w",null,"s",null,"f",null,"e",null,"Q",null,"q",null,"L",null,"p",null,"j",null,"x",null,"G",null,"J",null,"v",null,"M",null,"S",null,"Y",null,"Z",null,"H",null,"E",null,"R",null,"C",null,"F",null,"B",null,"a",null,"P",null,"t",null,"V",null,"U",null,"O",null,"i",null,"k",null,"b",null,"r",null,"y",null,"g",null,"X",null,"l",null,"N",null,"u",null,"A",null,"h",null,"I",null,"m",null,"W",null,"D",null,"o",null,"c",null], null), null).call(null,s));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 * first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__24753__auto__ = first_QMARK_;
if(cljs.core.truth_(and__24753__auto__)){
var and__24753__auto____$1 = f;
if(cljs.core.truth_(and__24753__auto____$1)){
return cljs.pprint.is_letter_QMARK_.call(null,f);
} else {
return and__24753__auto____$1;
}
} else {
return and__24753__auto__;
}
})())?[cljs.core.str(clojure.string.upper_case.call(null,f)),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__24753__auto__ = m;
if(cljs.core.truth_(and__24753__auto__)){
return (m.index + (1));
} else {
return and__24753__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.call(null,s__$2,(0),offset)),cljs.core.str(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset)))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
cljs.pprint.is_whitespace_QMARK_ = (function cljs$pprint$is_whitespace_QMARK_(s){
return cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"\n",null], null), null).call(null,s));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
if(typeof cljs.pprint.t37933 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t37933 = (function (capitalize_word_writer,writer,last_was_whitespace_QMARK_,meta37934){
this.capitalize_word_writer = capitalize_word_writer;
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta37934 = meta37934;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t37933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_37935,meta37934__$1){
var self__ = this;
var _37935__$1 = this;
return (new cljs.pprint.t37933(self__.capitalize_word_writer,self__.writer,self__.last_was_whitespace_QMARK_,meta37934__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t37933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_37935){
var self__ = this;
var _37935__$1 = this;
return self__.meta37934;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t37933.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t37933.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__37936 = cljs.core._EQ_;
var expr__37937 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__37936.call(null,String,expr__37937))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,cljs.pprint.is_whitespace_QMARK_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__37936.call(null,Number,expr__37937))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,cljs.pprint.is_whitespace_QMARK_.call(null,c));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37937)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t37933.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"capitalize-word-writer","capitalize-word-writer",196688059,null),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta37934","meta37934",-1630352297,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t37933.cljs$lang$type = true;

cljs.pprint.t37933.cljs$lang$ctorStr = "cljs.pprint/t37933";

cljs.pprint.t37933.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.pprint/t37933");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t37933 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t37933(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta37934){
return (new cljs.pprint.t37933(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta37934));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t37933(cljs$pprint$capitalize_word_writer,writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if(typeof cljs.pprint.t37945 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t37945 = (function (init_cap_writer,writer,capped,meta37946){
this.init_cap_writer = init_cap_writer;
this.writer = writer;
this.capped = capped;
this.meta37946 = meta37946;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t37945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_37947,meta37946__$1){
var self__ = this;
var _37947__$1 = this;
return (new cljs.pprint.t37945(self__.init_cap_writer,self__.writer,self__.capped,meta37946__$1));
});})(capped))
;

cljs.pprint.t37945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_37947){
var self__ = this;
var _37947__$1 = this;
return self__.meta37946;
});})(capped))
;

cljs.pprint.t37945.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

cljs.pprint.t37945.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__37948 = cljs.core._EQ_;
var expr__37949 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__37948.call(null,String,expr__37949))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__24753__auto__ = m;
if(cljs.core.truth_(and__24753__auto__)){
return m.index;
} else {
return and__24753__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.str(cljs.core.subs.call(null,s,(0),offset)),cljs.core.str(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset))),cljs.core.str(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
if(cljs.core.truth_(pred__37948.call(null,Number,expr__37949))){
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__24753__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__24753__auto__){
return cljs.pprint.is_letter_QMARK_.call(null,c);
} else {
return and__24753__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37949)].join('')));
}
}
});})(capped))
;

cljs.pprint.t37945.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"init-cap-writer","init-cap-writer",-861558336,null),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta37946","meta37946",1869098179,null)], null);
});})(capped))
;

cljs.pprint.t37945.cljs$lang$type = true;

cljs.pprint.t37945.cljs$lang$ctorStr = "cljs.pprint/t37945";

cljs.pprint.t37945.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cljs.pprint/t37945");
});})(capped))
;

cljs.pprint.__GT_t37945 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t37945(init_cap_writer__$1,writer__$1,capped__$1,meta37946){
return (new cljs.pprint.t37945(init_cap_writer__$1,writer__$1,capped__$1,meta37946));
});})(capped))
;

}

return (new cljs.pprint.t37945(cljs$pprint$init_cap_writer,writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_37952 = cljs.pprint._STAR_out_STAR_;
cljs.pprint._STAR_out_STAR_ = make_writer.call(null,cljs.pprint._STAR_out_STAR_);

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.pprint._STAR_out_STAR_ = _STAR_out_STAR_37952;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 * (defn print-table [aseq column-width]
 * (binding [*out* (get-pretty-writer *out*)]
 * (doseq [row aseq]
 * (doseq [col row]
 * (cl-format true "~4D~7,vT" col column-width))
 * (prn))))
 * 
 * Now when you run:
 * 
 * user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 * 1      1       1
 * 2      4       8
 * 3      9      27
 * 4     16      64
 * 5     25     125
 * 6     36     216
 * 7     49     343
 * 8     64     512
 * 9     81     729
 * 10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((function (){var G__37954 = cljs.pprint._STAR_out_STAR_;
if(G__37954){
var bit__25439__auto__ = (G__37954.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__25439__auto__) || (G__37954.cljs$core$IDeref$)){
return true;
} else {
if((!G__37954.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__37954);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__37954);
}
})()){
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.pprint._STAR_out_STAR_))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_37955 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_37956 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_37957 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.pprint._STAR_out_STAR_))));
var space_count_37958 = (((current_37957 < colnum_37955))?(colnum_37955 - current_37957):((cljs.core._EQ_.call(null,colinc_37956,(0)))?(0):(colinc_37956 - cljs.core.rem.call(null,(current_37957 - colnum_37955),colinc_37956))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_37958," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_37959 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_37960 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_37961 = (colrel_37959 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.pprint._STAR_out_STAR_)))));
var offset_37962 = (((colinc_37960 > (0)))?cljs.core.rem.call(null,start_col_37961,colinc_37960):(0));
var space_count_37963 = (colrel_37959 + ((cljs.core._EQ_.call(null,(0),offset_37962))?(0):(colinc_37960 - offset_37962)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_37963," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__37967 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__37967,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__37967,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_37968_37970 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_37969_37971 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_37969_37971;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_37968_37970;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent.call(null,relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__37972_SHARP_,p2__37973_SHARP_,p3__37974_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__37972_SHARP_,p2__37973_SHARP_,p3__37974_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__37975_SHARP_,p2__37976_SHARP_,p3__37977_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__37975_SHARP_,p2__37976_SHARP_,p3__37977_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__37978_SHARP_,p2__37979_SHARP_,p3__37980_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__37978_SHARP_,p2__37979_SHARP_,p3__37980_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__37981_SHARP_,p2__37982_SHARP_,p3__37983_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__37981_SHARP_,p2__37982_SHARP_,p3__37983_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__37984_SHARP_,p2__37985_SHARP_,p3__37986_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__37984_SHARP_,p2__37985_SHARP_,p3__37986_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__37987_SHARP_,p2__37988_SHARP_,p3__37989_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__37987_SHARP_,p2__37988_SHARP_,p3__37989_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__37990_SHARP_,p2__37991_SHARP_,p3__37992_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__37990_SHARP_),p1__37990_SHARP_,p2__37991_SHARP_,p3__37992_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__24753__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__24753__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__24753__auto__;
}
})())){
return (function (p1__37993_SHARP_,p2__37994_SHARP_,p3__37995_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__37993_SHARP_,p2__37994_SHARP_,p3__37995_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__37996_SHARP_,p2__37997_SHARP_,p3__37998_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__37996_SHARP_,p2__37997_SHARP_,p3__37998_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__37999_SHARP_,p2__38000_SHARP_,p3__38001_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__37999_SHARP_,p2__38000_SHARP_,p3__38001_SHARP_);
});
} else {
return (function (p1__38002_SHARP_,p2__38003_SHARP_,p3__38004_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__38002_SHARP_,p2__38003_SHARP_,p3__38004_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__38014 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__38014,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__38014,(1),null);
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__25650__auto___38020 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_38021 = (0);
while(true){
if((i_38021 < n__25650__auto___38020)){
cljs.pprint.prn.call(null);

var G__38022 = (i_38021 + (1));
i_38021 = G__38022;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_38023 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_38023 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__25650__auto___38024 = (cnt_38023 - (1));
var i_38025 = (0);
while(true){
if((i_38025 < n__25650__auto___38024)){
cljs.pprint.prn.call(null);

var G__38026 = (i_38025 + (1));
i_38025 = G__38026;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__25650__auto___38027 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_38028 = (0);
while(true){
if((i_38028 < n__25650__auto___38027)){
cljs.pprint.print.call(null,"\f");

var G__38029 = (i_38028 + (1));
i_38028 = G__38029;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__38005_SHARP_,p2__38006_SHARP_,p3__38007_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__38005_SHARP_,p2__38006_SHARP_,p3__38007_SHARP_);
});
} else {
return (function (p1__38008_SHARP_,p2__38009_SHARP_,p3__38010_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__38008_SHARP_,p2__38009_SHARP_,p3__38010_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__38015 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__38015,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__38015,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__38016 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__38016,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__38016,(1),null);
var vec__38017 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__38017,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__38017,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__24753__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__24753__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__24753__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__38011_SHARP_,p2__38012_SHARP_,p3__38013_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__38011_SHARP_,p2__38012_SHARP_,p3__38013_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__24753__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__24753__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__24753__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__24753__auto__ = arg1;
if(cljs.core.truth_(and__24753__auto__)){
var and__24753__auto____$1 = arg2;
if(cljs.core.truth_(and__24753__auto____$1)){
return arg3;
} else {
return and__24753__auto____$1;
}
} else {
return and__24753__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__24753__auto__ = arg1;
if(cljs.core.truth_(and__24753__auto__)){
return arg2;
} else {
return and__24753__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__24765__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__38018 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__38018,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__38018,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__38019 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__38019,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__38019,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__38030){
var vec__38032 = p__38030;
var s = cljs.core.nth.call(null,vec__38032,(0),null);
var offset = cljs.core.nth.call(null,vec__38032,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__38032,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 * representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__38033){
var vec__38035 = p__38033;
var p = cljs.core.nth.call(null,vec__38035,(0),null);
var offset = cljs.core.nth.call(null,vec__38035,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0)))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0)))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):(((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0)))))?cljs.core.nth.call(null,p,(1)):parseInt(p)
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__38038){
var vec__38039 = p__38038;
var s__$1 = cljs.core.nth.call(null,vec__38039,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__38039,(1),null);
var flags = cljs.core.nth.call(null,vec__38039,(2),null);
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,[cljs.core.str("Flag \""),cljs.core.str(cljs.core.first.call(null,s__$1)),cljs.core.str("\" appears more than once in a directive")].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__24753__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__24753__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__24753__auto__;
}
})())){
cljs.pprint.format_error.call(null,[cljs.core.str("\"@\" is an illegal flag for format directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__24753__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__24753__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__24753__auto__;
}
})())){
cljs.pprint.format_error.call(null,[cljs.core.str("\":\" is an illegal flag for format directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__24753__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__24753__auto__){
var and__24753__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__24753__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__24753__auto____$1;
}
} else {
return and__24753__auto__;
}
})())){
return cljs.pprint.format_error.call(null,[cljs.core.str("Cannot combine \"@\" and \":\" flags for format directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),(function (){var x__25084__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__25085__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__25084__auto__ < y__25085__auto__) ? x__25084__auto__ : y__25085__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__38040_SHARP_,p2__38041_SHARP_){
var val = cljs.core.first.call(null,p1__38040_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__38041_SHARP_)),cljs.core.type.call(null,val))))){
return cljs.pprint.format_error.call(null,[cljs.core.str("Parameter "),cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,p2__38041_SHARP_))),cljs.core.str(" has bad type in directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\": "),cljs.core.str(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__38040_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__25519__auto__ = (function cljs$pprint$map_params_$_iter__38057(s__38058){
return (new cljs.core.LazySeq(null,(function (){
var s__38058__$1 = s__38058;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__38058__$1);
if(temp__4423__auto__){
var s__38058__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38058__$2)){
var c__25517__auto__ = cljs.core.chunk_first.call(null,s__38058__$2);
var size__25518__auto__ = cljs.core.count.call(null,c__25517__auto__);
var b__38060 = cljs.core.chunk_buffer.call(null,size__25518__auto__);
if((function (){var i__38059 = (0);
while(true){
if((i__38059 < size__25518__auto__)){
var vec__38065 = cljs.core._nth.call(null,c__25517__auto__,i__38059);
var name = cljs.core.nth.call(null,vec__38065,(0),null);
var vec__38066 = cljs.core.nth.call(null,vec__38065,(1),null);
var default$ = cljs.core.nth.call(null,vec__38066,(0),null);
cljs.core.chunk_append.call(null,b__38060,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__38069 = (i__38059 + (1));
i__38059 = G__38069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38060),cljs$pprint$map_params_$_iter__38057.call(null,cljs.core.chunk_rest.call(null,s__38058__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38060),null);
}
} else {
var vec__38067 = cljs.core.first.call(null,s__38058__$2);
var name = cljs.core.nth.call(null,vec__38067,(0),null);
var vec__38068 = cljs.core.nth.call(null,vec__38067,(1),null);
var default$ = cljs.core.nth.call(null,vec__38068,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__38057.call(null,cljs.core.rest.call(null,s__38058__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25519__auto__.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__38042_SHARP_,p2__38043_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__38042_SHARP_,p2__38043_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__38044_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__38044_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__38074 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__38074,(0),null);
var vec__38075 = cljs.core.nth.call(null,vec__38074,(1),null);
var rest = cljs.core.nth.call(null,vec__38075,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__38075,(1),null);
var vec__38076 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__38076,(0),null);
var vec__38077 = cljs.core.nth.call(null,vec__38076,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__38077,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__38077,(1),null);
var flags = cljs.core.nth.call(null,vec__38077,(2),null);
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,[cljs.core.str("Directive \""),cljs.core.str(directive),cljs.core.str("\" is undefined")].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.call(null,"\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__24753__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__24753__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__24753__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__38079 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__38079,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__38079,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__38084){
var vec__38085 = p__38084;
var clause_map = cljs.core.nth.call(null,vec__38085,(0),null);
var saw_else = cljs.core.nth.call(null,vec__38085,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__38085,(2),null);
var vec__38086 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__38086,(0),null);
var vec__38087 = cljs.core.nth.call(null,vec__38086,(1),null);
var type = cljs.core.nth.call(null,vec__38087,(0),null);
var right_params = cljs.core.nth.call(null,vec__38087,(1),null);
var else_params = cljs.core.nth.call(null,vec__38087,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__38087,(3),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap.fromArray([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params], true, false)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_38091 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR_38091){
return (function (p__38092){
var vec__38093 = p__38092;
var s = cljs.core.nth.call(null,vec__38093,(0),null);
var offset = cljs.core.nth.call(null,vec__38093,(1),null);
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_38091))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_38091;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__24765__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = cljs.core.some.call(null,cljs$pprint$needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__24765__auto____$1)){
return or__24765__auto____$1;
} else {
return cljs.core.some.call(null,cljs$pprint$needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__38094 = cljs.core.next.call(null,format__$1);
format__$1 = G__38094;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(){
var G__38096 = arguments.length;
switch (G__38096) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not.call(null,stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__24753__auto__ = cljs.pprint.needs_pretty.call(null,format);
if(cljs.core.truth_(and__24753__auto__)){
return cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream));
} else {
return and__24753__auto__;
}
})())?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
var _STAR_out_STAR_38097 = cljs.pprint._STAR_out_STAR_;
cljs.pprint._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return [cljs.core.str(sb)].join('');
} else {
if(stream === true){
return cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.pprint._STAR_out_STAR_ = _STAR_out_STAR_38097;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__38098 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__38098,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__38098,(1),null);
var vec__38099 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__38099,(0),null);
var offsets = cljs.core.nth.call(null,vec__38099,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;
cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value.
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__24753__auto__ = macro_char;
if(cljs.core.truth_(and__24753__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__24753__auto__;
}
})())){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38104_38107 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38105_38108 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,"(",null,")");

var length_count38106_38109 = (0);
var alis_38110__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count38106_38109 < cljs.core._STAR_print_length_STAR_))){
if(alis_38110__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_38110__$1));

if(cljs.core.next.call(null,alis_38110__$1)){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__38111 = (length_count38106_38109 + (1));
var G__38112 = cljs.core.next.call(null,alis_38110__$1);
length_count38106_38109 = G__38111;
alis_38110__$1 = G__38112;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38105_38108;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38104_38107;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38116_38119 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38117_38120 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,"[",null,"]");

var length_count38118_38121 = (0);
var aseq_38122 = cljs.core.seq.call(null,avec);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count38118_38121 < cljs.core._STAR_print_length_STAR_))){
if(aseq_38122){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_38122));

if(cljs.core.next.call(null,aseq_38122)){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__38123 = (length_count38118_38121 + (1));
var G__38124 = cljs.core.next.call(null,aseq_38122);
length_count38118_38121 = G__38123;
aseq_38122 = G__38124;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38117_38120;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38116_38119;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__36723__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__){
return (function() { 
var G__38125__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38125 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38126__i = 0, G__38126__a = new Array(arguments.length -  0);
while (G__38126__i < G__38126__a.length) {G__38126__a[G__38126__i] = arguments[G__38126__i + 0]; ++G__38126__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38126__a,0);
} 
return G__38125__delegate.call(this,args__36725__auto__);};
G__38125.cljs$lang$maxFixedArity = 0;
G__38125.cljs$lang$applyTo = (function (arglist__38127){
var args__36725__auto__ = cljs.core.seq(arglist__38127);
return G__38125__delegate(args__36725__auto__);
});
G__38125.cljs$core$IFn$_invoke$arity$variadic = G__38125__delegate;
return G__38125;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38133_38138 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38134_38139 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,"{",null,"}");

var length_count38135_38140 = (0);
var aseq_38141 = cljs.core.seq.call(null,amap);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count38135_38140 < cljs.core._STAR_print_length_STAR_))){
if(aseq_38141){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38136_38142 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38137_38143 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_38141));

cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_38141)));

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38137_38143;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38136_38142;
}}


if(cljs.core.next.call(null,aseq_38141)){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__38144 = (length_count38135_38140 + (1));
var G__38145 = cljs.core.next.call(null,aseq_38141);
length_count38135_38140 = G__38144;
aseq_38141 = G__38145;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38134_38139;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38133_38138;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__36723__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__){
return (function() { 
var G__38146__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38146 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38147__i = 0, G__38147__a = new Array(arguments.length -  0);
while (G__38147__i < G__38147__a.length) {G__38147__a[G__38147__i] = arguments[G__38147__i + 0]; ++G__38147__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38147__a,0);
} 
return G__38146__delegate.call(this,args__36725__auto__);};
G__38146.cljs$lang$maxFixedArity = 0;
G__38146.cljs$lang$applyTo = (function (arglist__38148){
var args__36725__auto__ = cljs.core.seq(arglist__38148);
return G__38146__delegate(args__36725__auto__);
});
G__38146.cljs$core$IFn$_invoke$arity$variadic = G__38146__delegate;
return G__38146;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__24765__auto__ = (function (){var temp__4423__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__4423__auto__)){
var match = temp__4423__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = [cljs.core.str("#<"),cljs.core.str(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),cljs.core.str("@"),cljs.core.str(goog.getUid(o)),cljs.core.str(": ")].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38153_38157 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38154_38158 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out.call(null,(((function (){var and__24753__auto__ = (function (){var G__38156 = o;
if(G__38156){
var bit__25439__auto__ = (G__38156.cljs$lang$protocol_mask$partition1$ & (1));
if((bit__25439__auto__) || (G__38156.cljs$core$IPending$)){
return true;
} else {
if((!G__38156.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,G__38156);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,G__38156);
}
})();
if(and__24753__auto__){
return !(cljs.core._realized_QMARK_.call(null,o));
} else {
return and__24753__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):new cljs.core.Keyword(null,"else","else",-1508377146)));

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38154_38158;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38153_38157;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__36723__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__){
return (function() { 
var G__38159__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38159 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38160__i = 0, G__38160__a = new Array(arguments.length -  0);
while (G__38160__i < G__38160__a.length) {G__38160__a[G__38160__i] = arguments[G__38160__i + 0]; ++G__38160__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38160__a,0);
} 
return G__38159__delegate.call(this,args__36725__auto__);};
G__38159.cljs$lang$maxFixedArity = 0;
G__38159.cljs$lang$applyTo = (function (arglist__38161){
var args__36725__auto__ = cljs.core.seq(arglist__38161);
return G__38159__delegate(args__36725__auto__);
});
G__38159.cljs$core$IFn$_invoke$arity$variadic = G__38159__delegate;
return G__38159;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if((function (){var G__38163 = obj;
if(G__38163){
var bit__25439__auto__ = (G__38163.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__25439__auto__) || (G__38163.cljs$core$IDeref$)){
return true;
} else {
if((!G__38163.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__38163);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__38163);
}
})()){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__25660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25664__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25664__auto__,method_table__25660__auto__,prefer_table__25661__auto__,method_cache__25662__auto__,cached_hierarchy__25663__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
var vec__38172 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__38172,(0),null);
var end = cljs.core.nth.call(null,vec__38172,(1),null);
var vec__38173 = reference;
var keyw = cljs.core.nth.call(null,vec__38173,(0),null);
var args = cljs.core.nthnext.call(null,vec__38173,(1));
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38174_38180 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38175_38181 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,start,null,end);

(function (){var format_in__36723__auto__ = "~w~:i";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38174_38180,_STAR_current_length_STAR_38175_38181,vec__38172,start,end,vec__38173,keyw,args){
return (function() { 
var G__38182__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38182 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38183__i = 0, G__38183__a = new Array(arguments.length -  0);
while (G__38183__i < G__38183__a.length) {G__38183__a[G__38183__i] = arguments[G__38183__i + 0]; ++G__38183__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38183__a,0);
} 
return G__38182__delegate.call(this,args__36725__auto__);};
G__38182.cljs$lang$maxFixedArity = 0;
G__38182.cljs$lang$applyTo = (function (arglist__38184){
var args__36725__auto__ = cljs.core.seq(arglist__38184);
return G__38182__delegate(args__36725__auto__);
});
G__38182.cljs$core$IFn$_invoke$arity$variadic = G__38182__delegate;
return G__38182;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38174_38180,_STAR_current_length_STAR_38175_38181,vec__38172,start,end,vec__38173,keyw,args))
})().call(null,keyw);

var args_38185__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_38185__$1)){
(function (){var format_in__36723__auto__ = " ";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (args_38185__$1,format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38174_38180,_STAR_current_length_STAR_38175_38181,vec__38172,start,end,vec__38173,keyw,args){
return (function() { 
var G__38186__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38186 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38187__i = 0, G__38187__a = new Array(arguments.length -  0);
while (G__38187__i < G__38187__a.length) {G__38187__a[G__38187__i] = arguments[G__38187__i + 0]; ++G__38187__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38187__a,0);
} 
return G__38186__delegate.call(this,args__36725__auto__);};
G__38186.cljs$lang$maxFixedArity = 0;
G__38186.cljs$lang$applyTo = (function (arglist__38188){
var args__36725__auto__ = cljs.core.seq(arglist__38188);
return G__38186__delegate(args__36725__auto__);
});
G__38186.cljs$core$IFn$_invoke$arity$variadic = G__38186__delegate;
return G__38186;
})()
;
;})(args_38185__$1,format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38174_38180,_STAR_current_length_STAR_38175_38181,vec__38172,start,end,vec__38173,keyw,args))
})().call(null);

var arg_38189 = cljs.core.first.call(null,args_38185__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_38189)){
var vec__38176_38190 = cljs.pprint.brackets.call(null,arg_38189);
var start_38191__$1 = cljs.core.nth.call(null,vec__38176_38190,(0),null);
var end_38192__$1 = cljs.core.nth.call(null,vec__38176_38190,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38177_38193 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38178_38194 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,start_38191__$1,null,end_38192__$1);

if((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_38189),(3))) && ((cljs.core.second.call(null,arg_38189) instanceof cljs.core.Keyword))){
var vec__38179_38195 = arg_38189;
var ns_38196 = cljs.core.nth.call(null,vec__38179_38195,(0),null);
var kw_38197 = cljs.core.nth.call(null,vec__38179_38195,(1),null);
var lis_38198 = cljs.core.nth.call(null,vec__38179_38195,(2),null);
(function (){var format_in__36723__auto__ = "~w ~w ";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (args_38185__$1,format_in__36723__auto__,cf__36724__auto__,vec__38179_38195,ns_38196,kw_38197,lis_38198,_STAR_current_level_STAR_38177_38193,_STAR_current_length_STAR_38178_38194,vec__38176_38190,start_38191__$1,end_38192__$1,arg_38189,_STAR_current_level_STAR_38174_38180,_STAR_current_length_STAR_38175_38181,vec__38172,start,end,vec__38173,keyw,args){
return (function() { 
var G__38199__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38199 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38200__i = 0, G__38200__a = new Array(arguments.length -  0);
while (G__38200__i < G__38200__a.length) {G__38200__a[G__38200__i] = arguments[G__38200__i + 0]; ++G__38200__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38200__a,0);
} 
return G__38199__delegate.call(this,args__36725__auto__);};
G__38199.cljs$lang$maxFixedArity = 0;
G__38199.cljs$lang$applyTo = (function (arglist__38201){
var args__36725__auto__ = cljs.core.seq(arglist__38201);
return G__38199__delegate(args__36725__auto__);
});
G__38199.cljs$core$IFn$_invoke$arity$variadic = G__38199__delegate;
return G__38199;
})()
;
;})(args_38185__$1,format_in__36723__auto__,cf__36724__auto__,vec__38179_38195,ns_38196,kw_38197,lis_38198,_STAR_current_level_STAR_38177_38193,_STAR_current_length_STAR_38178_38194,vec__38176_38190,start_38191__$1,end_38192__$1,arg_38189,_STAR_current_level_STAR_38174_38180,_STAR_current_length_STAR_38175_38181,vec__38172,start,end,vec__38173,keyw,args))
})().call(null,ns_38196,kw_38197);

if(cljs.core.sequential_QMARK_.call(null,lis_38198)){
(function (){var format_in__36723__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_38198))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (args_38185__$1,format_in__36723__auto__,cf__36724__auto__,vec__38179_38195,ns_38196,kw_38197,lis_38198,_STAR_current_level_STAR_38177_38193,_STAR_current_length_STAR_38178_38194,vec__38176_38190,start_38191__$1,end_38192__$1,arg_38189,_STAR_current_level_STAR_38174_38180,_STAR_current_length_STAR_38175_38181,vec__38172,start,end,vec__38173,keyw,args){
return (function() { 
var G__38202__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38202 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38203__i = 0, G__38203__a = new Array(arguments.length -  0);
while (G__38203__i < G__38203__a.length) {G__38203__a[G__38203__i] = arguments[G__38203__i + 0]; ++G__38203__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38203__a,0);
} 
return G__38202__delegate.call(this,args__36725__auto__);};
G__38202.cljs$lang$maxFixedArity = 0;
G__38202.cljs$lang$applyTo = (function (arglist__38204){
var args__36725__auto__ = cljs.core.seq(arglist__38204);
return G__38202__delegate(args__36725__auto__);
});
G__38202.cljs$core$IFn$_invoke$arity$variadic = G__38202__delegate;
return G__38202;
})()
;
;})(args_38185__$1,format_in__36723__auto__,cf__36724__auto__,vec__38179_38195,ns_38196,kw_38197,lis_38198,_STAR_current_level_STAR_38177_38193,_STAR_current_length_STAR_38178_38194,vec__38176_38190,start_38191__$1,end_38192__$1,arg_38189,_STAR_current_level_STAR_38174_38180,_STAR_current_length_STAR_38175_38181,vec__38172,start,end,vec__38173,keyw,args))
})().call(null,lis_38198);
} else {
cljs.pprint.write_out.call(null,lis_38198);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__36723__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (args_38185__$1,format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38177_38193,_STAR_current_length_STAR_38178_38194,vec__38176_38190,start_38191__$1,end_38192__$1,arg_38189,_STAR_current_level_STAR_38174_38180,_STAR_current_length_STAR_38175_38181,vec__38172,start,end,vec__38173,keyw,args){
return (function() { 
var G__38205__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38205 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38206__i = 0, G__38206__a = new Array(arguments.length -  0);
while (G__38206__i < G__38206__a.length) {G__38206__a[G__38206__i] = arguments[G__38206__i + 0]; ++G__38206__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38206__a,0);
} 
return G__38205__delegate.call(this,args__36725__auto__);};
G__38205.cljs$lang$maxFixedArity = 0;
G__38205.cljs$lang$applyTo = (function (arglist__38207){
var args__36725__auto__ = cljs.core.seq(arglist__38207);
return G__38205__delegate(args__36725__auto__);
});
G__38205.cljs$core$IFn$_invoke$arity$variadic = G__38205__delegate;
return G__38205;
})()
;
;})(args_38185__$1,format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38177_38193,_STAR_current_length_STAR_38178_38194,vec__38176_38190,start_38191__$1,end_38192__$1,arg_38189,_STAR_current_level_STAR_38174_38180,_STAR_current_length_STAR_38175_38181,vec__38172,start,end,vec__38173,keyw,args))
})(),arg_38189);
}

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38178_38194;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38177_38193;
}}


if(cljs.core.next.call(null,args_38185__$1)){
(function (){var format_in__36723__auto__ = "~_";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (args_38185__$1,format_in__36723__auto__,cf__36724__auto__,vec__38176_38190,start_38191__$1,end_38192__$1,arg_38189,_STAR_current_level_STAR_38174_38180,_STAR_current_length_STAR_38175_38181,vec__38172,start,end,vec__38173,keyw,args){
return (function() { 
var G__38208__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38208 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38209__i = 0, G__38209__a = new Array(arguments.length -  0);
while (G__38209__i < G__38209__a.length) {G__38209__a[G__38209__i] = arguments[G__38209__i + 0]; ++G__38209__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38209__a,0);
} 
return G__38208__delegate.call(this,args__36725__auto__);};
G__38208.cljs$lang$maxFixedArity = 0;
G__38208.cljs$lang$applyTo = (function (arglist__38210){
var args__36725__auto__ = cljs.core.seq(arglist__38210);
return G__38208__delegate(args__36725__auto__);
});
G__38208.cljs$core$IFn$_invoke$arity$variadic = G__38208__delegate;
return G__38208;
})()
;
;})(args_38185__$1,format_in__36723__auto__,cf__36724__auto__,vec__38176_38190,start_38191__$1,end_38192__$1,arg_38189,_STAR_current_level_STAR_38174_38180,_STAR_current_length_STAR_38175_38181,vec__38172,start,end,vec__38173,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_38189);

if(cljs.core.next.call(null,args_38185__$1)){
(function (){var format_in__36723__auto__ = "~:_";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (args_38185__$1,format_in__36723__auto__,cf__36724__auto__,arg_38189,_STAR_current_level_STAR_38174_38180,_STAR_current_length_STAR_38175_38181,vec__38172,start,end,vec__38173,keyw,args){
return (function() { 
var G__38211__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38211 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38212__i = 0, G__38212__a = new Array(arguments.length -  0);
while (G__38212__i < G__38212__a.length) {G__38212__a[G__38212__i] = arguments[G__38212__i + 0]; ++G__38212__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38212__a,0);
} 
return G__38211__delegate.call(this,args__36725__auto__);};
G__38211.cljs$lang$maxFixedArity = 0;
G__38211.cljs$lang$applyTo = (function (arglist__38213){
var args__36725__auto__ = cljs.core.seq(arglist__38213);
return G__38211__delegate(args__36725__auto__);
});
G__38211.cljs$core$IFn$_invoke$arity$variadic = G__38211__delegate;
return G__38211;
})()
;
;})(args_38185__$1,format_in__36723__auto__,cf__36724__auto__,arg_38189,_STAR_current_level_STAR_38174_38180,_STAR_current_length_STAR_38175_38181,vec__38172,start,end,vec__38173,keyw,args))
})().call(null);
} else {
}
}

var G__38214 = cljs.core.next.call(null,args_38185__$1);
args_38185__$1 = G__38214;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38175_38181;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38174_38180;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
var vec__38220 = alis;
var ns_sym = cljs.core.nth.call(null,vec__38220,(0),null);
var ns_name = cljs.core.nth.call(null,vec__38220,(1),null);
var stuff = cljs.core.nthnext.call(null,vec__38220,(2));
var vec__38221 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__38221,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__38221,(1),null);
var vec__38222 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__38222,(0),null);
var references = cljs.core.nth.call(null,vec__38222,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38223_38225 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38224_38226 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,"(",null,")");

(function (){var format_in__36723__auto__ = "~w ~1I~@_~w";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38223_38225,_STAR_current_length_STAR_38224_38226,vec__38220,ns_sym,ns_name,stuff,vec__38221,doc_str,stuff__$1,vec__38222,attr_map,references){
return (function() { 
var G__38227__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38227 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38228__i = 0, G__38228__a = new Array(arguments.length -  0);
while (G__38228__i < G__38228__a.length) {G__38228__a[G__38228__i] = arguments[G__38228__i + 0]; ++G__38228__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38228__a,0);
} 
return G__38227__delegate.call(this,args__36725__auto__);};
G__38227.cljs$lang$maxFixedArity = 0;
G__38227.cljs$lang$applyTo = (function (arglist__38229){
var args__36725__auto__ = cljs.core.seq(arglist__38229);
return G__38227__delegate(args__36725__auto__);
});
G__38227.cljs$core$IFn$_invoke$arity$variadic = G__38227__delegate;
return G__38227;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38223_38225,_STAR_current_length_STAR_38224_38226,vec__38220,ns_sym,ns_name,stuff,vec__38221,doc_str,stuff__$1,vec__38222,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__24765__auto__ = doc_str;
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = attr_map;
if(cljs.core.truth_(or__24765__auto____$1)){
return or__24765__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__36723__auto__ = "~@:_";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38223_38225,_STAR_current_length_STAR_38224_38226,vec__38220,ns_sym,ns_name,stuff,vec__38221,doc_str,stuff__$1,vec__38222,attr_map,references){
return (function() { 
var G__38230__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38230 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38231__i = 0, G__38231__a = new Array(arguments.length -  0);
while (G__38231__i < G__38231__a.length) {G__38231__a[G__38231__i] = arguments[G__38231__i + 0]; ++G__38231__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38231__a,0);
} 
return G__38230__delegate.call(this,args__36725__auto__);};
G__38230.cljs$lang$maxFixedArity = 0;
G__38230.cljs$lang$applyTo = (function (arglist__38232){
var args__36725__auto__ = cljs.core.seq(arglist__38232);
return G__38230__delegate(args__36725__auto__);
});
G__38230.cljs$core$IFn$_invoke$arity$variadic = G__38230__delegate;
return G__38230;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38223_38225,_STAR_current_length_STAR_38224_38226,vec__38220,ns_sym,ns_name,stuff,vec__38221,doc_str,stuff__$1,vec__38222,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__24765__auto__ = attr_map;
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__36723__auto__ = "~w~:[~;~:@_~]";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38223_38225,_STAR_current_length_STAR_38224_38226,vec__38220,ns_sym,ns_name,stuff,vec__38221,doc_str,stuff__$1,vec__38222,attr_map,references){
return (function() { 
var G__38233__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38233 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38234__i = 0, G__38234__a = new Array(arguments.length -  0);
while (G__38234__i < G__38234__a.length) {G__38234__a[G__38234__i] = arguments[G__38234__i + 0]; ++G__38234__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38234__a,0);
} 
return G__38233__delegate.call(this,args__36725__auto__);};
G__38233.cljs$lang$maxFixedArity = 0;
G__38233.cljs$lang$applyTo = (function (arglist__38235){
var args__36725__auto__ = cljs.core.seq(arglist__38235);
return G__38233__delegate(args__36725__auto__);
});
G__38233.cljs$core$IFn$_invoke$arity$variadic = G__38233__delegate;
return G__38233;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38223_38225,_STAR_current_length_STAR_38224_38226,vec__38220,ns_sym,ns_name,stuff,vec__38221,doc_str,stuff__$1,vec__38222,attr_map,references))
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_38236__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_38236__$1));

var temp__4423__auto___38237 = cljs.core.next.call(null,references_38236__$1);
if(temp__4423__auto___38237){
var references_38238__$2 = temp__4423__auto___38237;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__38239 = references_38238__$2;
references_38236__$1 = G__38239;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38224_38226;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38223_38225;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__36723__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__){
return (function() { 
var G__38240__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38240 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38241__i = 0, G__38241__a = new Array(arguments.length -  0);
while (G__38241__i < G__38241__a.length) {G__38241__a[G__38241__i] = arguments[G__38241__i + 0]; ++G__38241__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38241__a,0);
} 
return G__38240__delegate.call(this,args__36725__auto__);};
G__38240.cljs$lang$maxFixedArity = 0;
G__38240.cljs$lang$applyTo = (function (arglist__38242){
var args__36725__auto__ = cljs.core.seq(arglist__38242);
return G__38240__delegate(args__36725__auto__);
});
G__38240.cljs$core$IFn$_invoke$arity$variadic = G__38240__delegate;
return G__38240;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__36723__auto__ = " ~_";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__){
return (function() { 
var G__38243__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38243 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38244__i = 0, G__38244__a = new Array(arguments.length -  0);
while (G__38244__i < G__38244__a.length) {G__38244__a[G__38244__i] = arguments[G__38244__i + 0]; ++G__38244__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38244__a,0);
} 
return G__38243__delegate.call(this,args__36725__auto__);};
G__38243.cljs$lang$maxFixedArity = 0;
G__38243.cljs$lang$applyTo = (function (arglist__38245){
var args__36725__auto__ = cljs.core.seq(arglist__38245);
return G__38243__delegate(args__36725__auto__);
});
G__38243.cljs$core$IFn$_invoke$arity$variadic = G__38243__delegate;
return G__38243;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__))
})().call(null);
} else {
(function (){var format_in__36723__auto__ = " ~@_";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__){
return (function() { 
var G__38246__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38246 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38247__i = 0, G__38247__a = new Array(arguments.length -  0);
while (G__38247__i < G__38247__a.length) {G__38247__a[G__38247__i] = arguments[G__38247__i + 0]; ++G__38247__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38247__a,0);
} 
return G__38246__delegate.call(this,args__36725__auto__);};
G__38246.cljs$lang$maxFixedArity = 0;
G__38246.cljs$lang$applyTo = (function (arglist__38248){
var args__36725__auto__ = cljs.core.seq(arglist__38248);
return G__38246__delegate(args__36725__auto__);
});
G__38246.cljs$core$IFn$_invoke$arity$variadic = G__38246__delegate;
return G__38246;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__))
})().call(null);
}

return (function (){var format_in__36723__auto__ = "~{~w~^ ~_~}";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__){
return (function() { 
var G__38249__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38249 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38250__i = 0, G__38250__a = new Array(arguments.length -  0);
while (G__38250__i < G__38250__a.length) {G__38250__a[G__38250__i] = arguments[G__38250__i + 0]; ++G__38250__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38250__a,0);
} 
return G__38249__delegate.call(this,args__36725__auto__);};
G__38249.cljs$lang$maxFixedArity = 0;
G__38249.cljs$lang$applyTo = (function (arglist__38251){
var args__36725__auto__ = cljs.core.seq(arglist__38251);
return G__38249__delegate(args__36725__auto__);
});
G__38249.cljs$core$IFn$_invoke$arity$variadic = G__38249__delegate;
return G__38249;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__36723__auto__ = " ~_~{~w~^ ~_~}";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__){
return (function() { 
var G__38252__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38252 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38253__i = 0, G__38253__a = new Array(arguments.length -  0);
while (G__38253__i < G__38253__a.length) {G__38253__a[G__38253__i] = arguments[G__38253__i + 0]; ++G__38253__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38253__a,0);
} 
return G__38252__delegate.call(this,args__36725__auto__);};
G__38252.cljs$lang$maxFixedArity = 0;
G__38252.cljs$lang$applyTo = (function (arglist__38254){
var args__36725__auto__ = cljs.core.seq(arglist__38254);
return G__38252__delegate(args__36725__auto__);
});
G__38252.cljs$core$IFn$_invoke$arity$variadic = G__38252__delegate;
return G__38252;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__38260 = alis;
var defn_sym = cljs.core.nth.call(null,vec__38260,(0),null);
var defn_name = cljs.core.nth.call(null,vec__38260,(1),null);
var stuff = cljs.core.nthnext.call(null,vec__38260,(2));
var vec__38261 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__38261,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__38261,(1),null);
var vec__38262 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__38262,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__38262,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38263_38265 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38264_38266 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,"(",null,")");

(function (){var format_in__36723__auto__ = "~w ~1I~@_~w";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38263_38265,_STAR_current_length_STAR_38264_38266,vec__38260,defn_sym,defn_name,stuff,vec__38261,doc_str,stuff__$1,vec__38262,attr_map,stuff__$2){
return (function() { 
var G__38267__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38267 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38268__i = 0, G__38268__a = new Array(arguments.length -  0);
while (G__38268__i < G__38268__a.length) {G__38268__a[G__38268__i] = arguments[G__38268__i + 0]; ++G__38268__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38268__a,0);
} 
return G__38267__delegate.call(this,args__36725__auto__);};
G__38267.cljs$lang$maxFixedArity = 0;
G__38267.cljs$lang$applyTo = (function (arglist__38269){
var args__36725__auto__ = cljs.core.seq(arglist__38269);
return G__38267__delegate(args__36725__auto__);
});
G__38267.cljs$core$IFn$_invoke$arity$variadic = G__38267__delegate;
return G__38267;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38263_38265,_STAR_current_length_STAR_38264_38266,vec__38260,defn_sym,defn_name,stuff,vec__38261,doc_str,stuff__$1,vec__38262,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__36723__auto__ = " ~_~w";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38263_38265,_STAR_current_length_STAR_38264_38266,vec__38260,defn_sym,defn_name,stuff,vec__38261,doc_str,stuff__$1,vec__38262,attr_map,stuff__$2){
return (function() { 
var G__38270__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38270 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38271__i = 0, G__38271__a = new Array(arguments.length -  0);
while (G__38271__i < G__38271__a.length) {G__38271__a[G__38271__i] = arguments[G__38271__i + 0]; ++G__38271__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38271__a,0);
} 
return G__38270__delegate.call(this,args__36725__auto__);};
G__38270.cljs$lang$maxFixedArity = 0;
G__38270.cljs$lang$applyTo = (function (arglist__38272){
var args__36725__auto__ = cljs.core.seq(arglist__38272);
return G__38270__delegate(args__36725__auto__);
});
G__38270.cljs$core$IFn$_invoke$arity$variadic = G__38270__delegate;
return G__38270;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38263_38265,_STAR_current_length_STAR_38264_38266,vec__38260,defn_sym,defn_name,stuff,vec__38261,doc_str,stuff__$1,vec__38262,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__36723__auto__ = " ~_~w";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38263_38265,_STAR_current_length_STAR_38264_38266,vec__38260,defn_sym,defn_name,stuff,vec__38261,doc_str,stuff__$1,vec__38262,attr_map,stuff__$2){
return (function() { 
var G__38273__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38273 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38274__i = 0, G__38274__a = new Array(arguments.length -  0);
while (G__38274__i < G__38274__a.length) {G__38274__a[G__38274__i] = arguments[G__38274__i + 0]; ++G__38274__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38274__a,0);
} 
return G__38273__delegate.call(this,args__36725__auto__);};
G__38273.cljs$lang$maxFixedArity = 0;
G__38273.cljs$lang$applyTo = (function (arglist__38275){
var args__36725__auto__ = cljs.core.seq(arglist__38275);
return G__38273__delegate(args__36725__auto__);
});
G__38273.cljs$core$IFn$_invoke$arity$variadic = G__38273__delegate;
return G__38273;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38263_38265,_STAR_current_length_STAR_38264_38266,vec__38260,defn_sym,defn_name,stuff,vec__38261,doc_str,stuff__$1,vec__38262,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__24765__auto__ = doc_str;
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__24765__auto__ = doc_str;
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38264_38266;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38263_38265;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38281_38286 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38282_38287 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,"[",null,"]");

var length_count38283_38288 = (0);
var binding_38289 = binding_vec;
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count38283_38288 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq.call(null,binding_38289)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38284_38290 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38285_38291 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_38289));

if(cljs.core.next.call(null,binding_38289)){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_38289));
} else {
}

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38285_38291;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38284_38290;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_38289))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__38292 = (length_count38283_38288 + (1));
var G__38293 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_38289));
length_count38283_38288 = G__38292;
binding_38289 = G__38293;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38282_38287;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38281_38286;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38296_38298 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38297_38299 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,"(",null,")");

if((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis)))){
(function (){var format_in__36723__auto__ = "~w ~1I~@_";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38296_38298,_STAR_current_length_STAR_38297_38299,base_sym){
return (function() { 
var G__38300__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38300 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38301__i = 0, G__38301__a = new Array(arguments.length -  0);
while (G__38301__i < G__38301__a.length) {G__38301__a[G__38301__i] = arguments[G__38301__i + 0]; ++G__38301__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38301__a,0);
} 
return G__38300__delegate.call(this,args__36725__auto__);};
G__38300.cljs$lang$maxFixedArity = 0;
G__38300.cljs$lang$applyTo = (function (arglist__38302){
var args__36725__auto__ = cljs.core.seq(arglist__38302);
return G__38300__delegate(args__36725__auto__);
});
G__38300.cljs$core$IFn$_invoke$arity$variadic = G__38300__delegate;
return G__38300;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38296_38298,_STAR_current_length_STAR_38297_38299,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__36723__auto__ = " ~_~{~w~^ ~_~}";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38296_38298,_STAR_current_length_STAR_38297_38299,base_sym){
return (function() { 
var G__38303__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38303 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38304__i = 0, G__38304__a = new Array(arguments.length -  0);
while (G__38304__i < G__38304__a.length) {G__38304__a[G__38304__i] = arguments[G__38304__i + 0]; ++G__38304__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38304__a,0);
} 
return G__38303__delegate.call(this,args__36725__auto__);};
G__38303.cljs$lang$maxFixedArity = 0;
G__38303.cljs$lang$applyTo = (function (arglist__38305){
var args__36725__auto__ = cljs.core.seq(arglist__38305);
return G__38303__delegate(args__36725__auto__);
});
G__38303.cljs$core$IFn$_invoke$arity$variadic = G__38303__delegate;
return G__38303;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38296_38298,_STAR_current_length_STAR_38297_38299,base_sym))
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38297_38299;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38296_38298;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__36723__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__){
return (function() { 
var G__38306__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38306 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38307__i = 0, G__38307__a = new Array(arguments.length -  0);
while (G__38307__i < G__38307__a.length) {G__38307__a[G__38307__i] = arguments[G__38307__i + 0]; ++G__38307__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38307__a,0);
} 
return G__38306__delegate.call(this,args__36725__auto__);};
G__38306.cljs$lang$maxFixedArity = 0;
G__38306.cljs$lang$applyTo = (function (arglist__38308){
var args__36725__auto__ = cljs.core.seq(arglist__38308);
return G__38306__delegate(args__36725__auto__);
});
G__38306.cljs$core$IFn$_invoke$arity$variadic = G__38306__delegate;
return G__38306;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38314_38319 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38315_38320 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count38316_38321 = (0);
var alis_38322__$1 = cljs.core.next.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count38316_38321 < cljs.core._STAR_print_length_STAR_))){
if(alis_38322__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38317_38323 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38318_38324 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_38322__$1));

if(cljs.core.next.call(null,alis_38322__$1)){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_38322__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38318_38324;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38317_38323;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_38322__$1))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__38325 = (length_count38316_38321 + (1));
var G__38326 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_38322__$1));
length_count38316_38321 = G__38325;
alis_38322__$1 = G__38326;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38315_38320;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38314_38319;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38332_38337 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38333_38338 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.call(null,(function (){var format_in__36723__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38332_38337,_STAR_current_length_STAR_38333_38338){
return (function() { 
var G__38339__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38339 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38340__i = 0, G__38340__a = new Array(arguments.length -  0);
while (G__38340__i < G__38340__a.length) {G__38340__a[G__38340__i] = arguments[G__38340__i + 0]; ++G__38340__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38340__a,0);
} 
return G__38339__delegate.call(this,args__36725__auto__);};
G__38339.cljs$lang$maxFixedArity = 0;
G__38339.cljs$lang$applyTo = (function (arglist__38341){
var args__36725__auto__ = cljs.core.seq(arglist__38341);
return G__38339__delegate(args__36725__auto__);
});
G__38339.cljs$core$IFn$_invoke$arity$variadic = G__38339__delegate;
return G__38339;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__,_STAR_current_level_STAR_38332_38337,_STAR_current_length_STAR_38333_38338))
})(),alis);

var length_count38334_38342 = (0);
var alis_38343__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count38334_38342 < cljs.core._STAR_print_length_STAR_))){
if(alis_38343__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38335_38344 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38336_38345 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_38343__$1));

if(cljs.core.next.call(null,alis_38343__$1)){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_38343__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38336_38345;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38335_38344;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_38343__$1))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__38346 = (length_count38334_38342 + (1));
var G__38347 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_38343__$1));
length_count38334_38342 = G__38346;
alis_38343__$1 = G__38347;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38333_38338;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38332_38337;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
var _STAR_symbol_map_STAR_38351 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,args),"%"], true, false):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR_38351,args,nlis){
return (function (p1__38348_SHARP_,p2__38349_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__38348_SHARP_,[cljs.core.str("%"),cljs.core.str(p2__38349_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_38351,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));

try{return (function (){var format_in__36723__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__36724__auto__ = ((typeof format_in__36723__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__36723__auto__):format_in__36723__auto__);
return ((function (format_in__36723__auto__,cf__36724__auto__,_STAR_symbol_map_STAR_38351,args,nlis){
return (function() { 
var G__38352__delegate = function (args__36725__auto__){
var navigator__36726__auto__ = cljs.pprint.init_navigator.call(null,args__36725__auto__);
return cljs.pprint.execute_format.call(null,cf__36724__auto__,navigator__36726__auto__);
};
var G__38352 = function (var_args){
var args__36725__auto__ = null;
if (arguments.length > 0) {
var G__38353__i = 0, G__38353__a = new Array(arguments.length -  0);
while (G__38353__i < G__38353__a.length) {G__38353__a[G__38353__i] = arguments[G__38353__i + 0]; ++G__38353__i;}
  args__36725__auto__ = new cljs.core.IndexedSeq(G__38353__a,0);
} 
return G__38352__delegate.call(this,args__36725__auto__);};
G__38352.cljs$lang$maxFixedArity = 0;
G__38352.cljs$lang$applyTo = (function (arglist__38354){
var args__36725__auto__ = cljs.core.seq(arglist__38354);
return G__38352__delegate(args__36725__auto__);
});
G__38352.cljs$core$IFn$_invoke$arity$variadic = G__38352__delegate;
return G__38352;
})()
;
;})(format_in__36723__auto__,cf__36724__auto__,_STAR_symbol_map_STAR_38351,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_38351;
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_38358_38361 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_38359_38362 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.pprint._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count38360_38363 = (0);
var alis_38364__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count38360_38363 < cljs.core._STAR_print_length_STAR_))){
if(alis_38364__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_38364__$1));

if(cljs.core.next.call(null,alis_38364__$1)){
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__38365 = (length_count38360_38363 + (1));
var G__38366 = cljs.core.next.call(null,alis_38364__$1);
length_count38360_38363 = G__38365;
alis_38364__$1 = G__38366;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.pprint._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.pprint._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_38359_38362;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_38358_38361;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__25519__auto__ = (function cljs$pprint$two_forms_$_iter__38371(s__38372){
return (new cljs.core.LazySeq(null,(function (){
var s__38372__$1 = s__38372;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__38372__$1);
if(temp__4423__auto__){
var s__38372__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38372__$2)){
var c__25517__auto__ = cljs.core.chunk_first.call(null,s__38372__$2);
var size__25518__auto__ = cljs.core.count.call(null,c__25517__auto__);
var b__38374 = cljs.core.chunk_buffer.call(null,size__25518__auto__);
if((function (){var i__38373 = (0);
while(true){
if((i__38373 < size__25518__auto__)){
var x = cljs.core._nth.call(null,c__25517__auto__,i__38373);
cljs.core.chunk_append.call(null,b__38374,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__38375 = (i__38373 + (1));
i__38373 = G__38375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38374),cljs$pprint$two_forms_$_iter__38371.call(null,cljs.core.chunk_rest.call(null,s__38372__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38374),null);
}
} else {
var x = cljs.core.first.call(null,s__38372__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__38371.call(null,cljs.core.rest.call(null,s__38372__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25519__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
return (function (p1__38376_SHARP_){
var vec__38378 = p1__38376_SHARP_;
var s = cljs.core.nth.call(null,vec__38378,(0),null);
var f = cljs.core.nth.call(null,vec__38378,(1),null);
if(cljs.core.not.call(null,(function (){var or__24765__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__38376_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__4421__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__4421__auto__)){
var special_form = temp__4421__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__4421__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__4421__auto__)){
var arg_num = temp__4421__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__25660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25664__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25664__auto__,method_table__25660__auto__,prefer_table__25661__auto__,method_cache__25662__auto__,cached_hierarchy__25663__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__25077__auto__ = (0);
var y__25078__auto__ = (width - cljs.core.count.call(null,s));
return ((x__25077__auto__ > y__25078__auto__) ? x__25077__auto__ : y__25078__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(){
var G__38383 = arguments.length;
switch (G__38383) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_38384 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,((function (_STAR_print_newline_STAR_38384){
return (function (k){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,[cljs.core.str(k)].join('')),cljs.core.map.call(null,((function (_STAR_print_newline_STAR_38384){
return (function (p1__38379_SHARP_){
return cljs.core.count.call(null,[cljs.core.str(cljs.core.get.call(null,p1__38379_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_38384))
,rows));
});})(_STAR_print_newline_STAR_38384))
,ks);
var spacers = cljs.core.map.call(null,((function (widths,_STAR_print_newline_STAR_38384){
return (function (p1__38380_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__38380_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_38384))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_38384){
return (function (leader,divider,trailer,row){
return [cljs.core.str(leader),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__25519__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_38384){
return (function cljs$pprint$iter__38385(s__38386){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_38384){
return (function (){
var s__38386__$1 = s__38386;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__38386__$1);
if(temp__4423__auto__){
var s__38386__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38386__$2)){
var c__25517__auto__ = cljs.core.chunk_first.call(null,s__38386__$2);
var size__25518__auto__ = cljs.core.count.call(null,c__25517__auto__);
var b__38388 = cljs.core.chunk_buffer.call(null,size__25518__auto__);
if((function (){var i__38387 = (0);
while(true){
if((i__38387 < size__25518__auto__)){
var vec__38391 = cljs.core._nth.call(null,c__25517__auto__,i__38387);
var col = cljs.core.nth.call(null,vec__38391,(0),null);
var width = cljs.core.nth.call(null,vec__38391,(1),null);
cljs.core.chunk_append.call(null,b__38388,cljs.pprint.add_padding.call(null,width,[cljs.core.str(col)].join('')));

var G__38398 = (i__38387 + (1));
i__38387 = G__38398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38388),cljs$pprint$iter__38385.call(null,cljs.core.chunk_rest.call(null,s__38386__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38388),null);
}
} else {
var vec__38392 = cljs.core.first.call(null,s__38386__$2);
var col = cljs.core.nth.call(null,vec__38392,(0),null);
var width = cljs.core.nth.call(null,vec__38392,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,[cljs.core.str(col)].join('')),cljs$pprint$iter__38385.call(null,cljs.core.rest.call(null,s__38386__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_38384))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_38384))
;
return iter__25519__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__25519__auto__,widths,spacers,_STAR_print_newline_STAR_38384){
return (function (p1__38381_SHARP_){
return cljs.core.get.call(null,row,p1__38381_SHARP_);
});})(iter__25519__auto__,widths,spacers,_STAR_print_newline_STAR_38384))
,ks),widths));
})()))),cljs.core.str(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_38384))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__38393 = cljs.core.seq.call(null,rows);
var chunk__38394 = null;
var count__38395 = (0);
var i__38396 = (0);
while(true){
if((i__38396 < count__38395)){
var row = cljs.core._nth.call(null,chunk__38394,i__38396);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));

var G__38399 = seq__38393;
var G__38400 = chunk__38394;
var G__38401 = count__38395;
var G__38402 = (i__38396 + (1));
seq__38393 = G__38399;
chunk__38394 = G__38400;
count__38395 = G__38401;
i__38396 = G__38402;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__38393);
if(temp__4423__auto__){
var seq__38393__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38393__$1)){
var c__25550__auto__ = cljs.core.chunk_first.call(null,seq__38393__$1);
var G__38403 = cljs.core.chunk_rest.call(null,seq__38393__$1);
var G__38404 = c__25550__auto__;
var G__38405 = cljs.core.count.call(null,c__25550__auto__);
var G__38406 = (0);
seq__38393 = G__38403;
chunk__38394 = G__38404;
count__38395 = G__38405;
i__38396 = G__38406;
continue;
} else {
var row = cljs.core.first.call(null,seq__38393__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));

var G__38407 = cljs.core.next.call(null,seq__38393__$1);
var G__38408 = null;
var G__38409 = (0);
var G__38410 = (0);
seq__38393 = G__38407;
chunk__38394 = G__38408;
count__38395 = G__38409;
i__38396 = G__38410;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38384;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=pprint.js.map