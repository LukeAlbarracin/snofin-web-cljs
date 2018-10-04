// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__31718_31722 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__31719_31723 = null;
var count__31720_31724 = (0);
var i__31721_31725 = (0);
while(true){
if((i__31721_31725 < count__31720_31724)){
var k_31726 = cljs.core._nth.call(null,chunk__31719_31723,i__31721_31725);
var v_31727 = (b[k_31726]);
(a[k_31726] = v_31727);

var G__31728 = seq__31718_31722;
var G__31729 = chunk__31719_31723;
var G__31730 = count__31720_31724;
var G__31731 = (i__31721_31725 + (1));
seq__31718_31722 = G__31728;
chunk__31719_31723 = G__31729;
count__31720_31724 = G__31730;
i__31721_31725 = G__31731;
continue;
} else {
var temp__4423__auto___31732 = cljs.core.seq.call(null,seq__31718_31722);
if(temp__4423__auto___31732){
var seq__31718_31733__$1 = temp__4423__auto___31732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31718_31733__$1)){
var c__25550__auto___31734 = cljs.core.chunk_first.call(null,seq__31718_31733__$1);
var G__31735 = cljs.core.chunk_rest.call(null,seq__31718_31733__$1);
var G__31736 = c__25550__auto___31734;
var G__31737 = cljs.core.count.call(null,c__25550__auto___31734);
var G__31738 = (0);
seq__31718_31722 = G__31735;
chunk__31719_31723 = G__31736;
count__31720_31724 = G__31737;
i__31721_31725 = G__31738;
continue;
} else {
var k_31739 = cljs.core.first.call(null,seq__31718_31733__$1);
var v_31740 = (b[k_31739]);
(a[k_31739] = v_31740);

var G__31741 = cljs.core.next.call(null,seq__31718_31733__$1);
var G__31742 = null;
var G__31743 = (0);
var G__31744 = (0);
seq__31718_31722 = G__31741;
chunk__31719_31723 = G__31742;
count__31720_31724 = G__31743;
i__31721_31725 = G__31744;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var G__31746 = arguments.length;
switch (G__31746) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__31748 = (i + (2));
var G__31749 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__31748;
ret = G__31749;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__31750_31754 = cljs.core.seq.call(null,v);
var chunk__31751_31755 = null;
var count__31752_31756 = (0);
var i__31753_31757 = (0);
while(true){
if((i__31753_31757 < count__31752_31756)){
var x_31758 = cljs.core._nth.call(null,chunk__31751_31755,i__31753_31757);
ret.push(x_31758);

var G__31759 = seq__31750_31754;
var G__31760 = chunk__31751_31755;
var G__31761 = count__31752_31756;
var G__31762 = (i__31753_31757 + (1));
seq__31750_31754 = G__31759;
chunk__31751_31755 = G__31760;
count__31752_31756 = G__31761;
i__31753_31757 = G__31762;
continue;
} else {
var temp__4423__auto___31763 = cljs.core.seq.call(null,seq__31750_31754);
if(temp__4423__auto___31763){
var seq__31750_31764__$1 = temp__4423__auto___31763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31750_31764__$1)){
var c__25550__auto___31765 = cljs.core.chunk_first.call(null,seq__31750_31764__$1);
var G__31766 = cljs.core.chunk_rest.call(null,seq__31750_31764__$1);
var G__31767 = c__25550__auto___31765;
var G__31768 = cljs.core.count.call(null,c__25550__auto___31765);
var G__31769 = (0);
seq__31750_31754 = G__31766;
chunk__31751_31755 = G__31767;
count__31752_31756 = G__31768;
i__31753_31757 = G__31769;
continue;
} else {
var x_31770 = cljs.core.first.call(null,seq__31750_31764__$1);
ret.push(x_31770);

var G__31771 = cljs.core.next.call(null,seq__31750_31764__$1);
var G__31772 = null;
var G__31773 = (0);
var G__31774 = (0);
seq__31750_31754 = G__31771;
chunk__31751_31755 = G__31772;
count__31752_31756 = G__31773;
i__31753_31757 = G__31774;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__31775_31779 = cljs.core.seq.call(null,v);
var chunk__31776_31780 = null;
var count__31777_31781 = (0);
var i__31778_31782 = (0);
while(true){
if((i__31778_31782 < count__31777_31781)){
var x_31783 = cljs.core._nth.call(null,chunk__31776_31780,i__31778_31782);
ret.push(x_31783);

var G__31784 = seq__31775_31779;
var G__31785 = chunk__31776_31780;
var G__31786 = count__31777_31781;
var G__31787 = (i__31778_31782 + (1));
seq__31775_31779 = G__31784;
chunk__31776_31780 = G__31785;
count__31777_31781 = G__31786;
i__31778_31782 = G__31787;
continue;
} else {
var temp__4423__auto___31788 = cljs.core.seq.call(null,seq__31775_31779);
if(temp__4423__auto___31788){
var seq__31775_31789__$1 = temp__4423__auto___31788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31775_31789__$1)){
var c__25550__auto___31790 = cljs.core.chunk_first.call(null,seq__31775_31789__$1);
var G__31791 = cljs.core.chunk_rest.call(null,seq__31775_31789__$1);
var G__31792 = c__25550__auto___31790;
var G__31793 = cljs.core.count.call(null,c__25550__auto___31790);
var G__31794 = (0);
seq__31775_31779 = G__31791;
chunk__31776_31780 = G__31792;
count__31777_31781 = G__31793;
i__31778_31782 = G__31794;
continue;
} else {
var x_31795 = cljs.core.first.call(null,seq__31775_31789__$1);
ret.push(x_31795);

var G__31796 = cljs.core.next.call(null,seq__31775_31789__$1);
var G__31797 = null;
var G__31798 = (0);
var G__31799 = (0);
seq__31775_31779 = G__31796;
chunk__31776_31780 = G__31797;
count__31777_31781 = G__31798;
i__31778_31782 = G__31799;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__31800_31804 = cljs.core.seq.call(null,v);
var chunk__31801_31805 = null;
var count__31802_31806 = (0);
var i__31803_31807 = (0);
while(true){
if((i__31803_31807 < count__31802_31806)){
var x_31808 = cljs.core._nth.call(null,chunk__31801_31805,i__31803_31807);
ret.push(x_31808);

var G__31809 = seq__31800_31804;
var G__31810 = chunk__31801_31805;
var G__31811 = count__31802_31806;
var G__31812 = (i__31803_31807 + (1));
seq__31800_31804 = G__31809;
chunk__31801_31805 = G__31810;
count__31802_31806 = G__31811;
i__31803_31807 = G__31812;
continue;
} else {
var temp__4423__auto___31813 = cljs.core.seq.call(null,seq__31800_31804);
if(temp__4423__auto___31813){
var seq__31800_31814__$1 = temp__4423__auto___31813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31800_31814__$1)){
var c__25550__auto___31815 = cljs.core.chunk_first.call(null,seq__31800_31814__$1);
var G__31816 = cljs.core.chunk_rest.call(null,seq__31800_31814__$1);
var G__31817 = c__25550__auto___31815;
var G__31818 = cljs.core.count.call(null,c__25550__auto___31815);
var G__31819 = (0);
seq__31800_31804 = G__31816;
chunk__31801_31805 = G__31817;
count__31802_31806 = G__31818;
i__31803_31807 = G__31819;
continue;
} else {
var x_31820 = cljs.core.first.call(null,seq__31800_31814__$1);
ret.push(x_31820);

var G__31821 = cljs.core.next.call(null,seq__31800_31814__$1);
var G__31822 = null;
var G__31823 = (0);
var G__31824 = (0);
seq__31800_31804 = G__31821;
chunk__31801_31805 = G__31822;
count__31802_31806 = G__31823;
i__31803_31807 = G__31824;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var G__31826 = arguments.length;
switch (G__31826) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__31827 = obj;
G__31827.push(kfn.call(null,k),vfn.call(null,v));

return G__31827;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x31828 = cljs.core.clone.call(null,handlers);
x31828.forEach = ((function (x31828,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__31829 = cljs.core.seq.call(null,coll);
var chunk__31830 = null;
var count__31831 = (0);
var i__31832 = (0);
while(true){
if((i__31832 < count__31831)){
var vec__31833 = cljs.core._nth.call(null,chunk__31830,i__31832);
var k = cljs.core.nth.call(null,vec__31833,(0),null);
var v = cljs.core.nth.call(null,vec__31833,(1),null);
f.call(null,v,k);

var G__31836 = seq__31829;
var G__31837 = chunk__31830;
var G__31838 = count__31831;
var G__31839 = (i__31832 + (1));
seq__31829 = G__31836;
chunk__31830 = G__31837;
count__31831 = G__31838;
i__31832 = G__31839;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__31829);
if(temp__4423__auto__){
var seq__31829__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31829__$1)){
var c__25550__auto__ = cljs.core.chunk_first.call(null,seq__31829__$1);
var G__31840 = cljs.core.chunk_rest.call(null,seq__31829__$1);
var G__31841 = c__25550__auto__;
var G__31842 = cljs.core.count.call(null,c__25550__auto__);
var G__31843 = (0);
seq__31829 = G__31840;
chunk__31830 = G__31841;
count__31831 = G__31842;
i__31832 = G__31843;
continue;
} else {
var vec__31834 = cljs.core.first.call(null,seq__31829__$1);
var k = cljs.core.nth.call(null,vec__31834,(0),null);
var v = cljs.core.nth.call(null,vec__31834,(1),null);
f.call(null,v,k);

var G__31844 = cljs.core.next.call(null,seq__31829__$1);
var G__31845 = null;
var G__31846 = (0);
var G__31847 = (0);
seq__31829 = G__31844;
chunk__31830 = G__31845;
count__31831 = G__31846;
i__31832 = G__31847;
continue;
}
} else {
return null;
}
}
break;
}
});})(x31828,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x31828;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var G__31849 = arguments.length;
switch (G__31849) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t31850 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t31850 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta31851){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta31851 = meta31851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t31850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31852,meta31851__$1){
var self__ = this;
var _31852__$1 = this;
return (new cognitect.transit.t31850(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta31851__$1));
});

cognitect.transit.t31850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31852){
var self__ = this;
var _31852__$1 = this;
return self__.meta31851;
});

cognitect.transit.t31850.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t31850.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t31850.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t31850.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t31850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta31851","meta31851",-1429102165,null)], null);
});

cognitect.transit.t31850.cljs$lang$type = true;

cognitect.transit.t31850.cljs$lang$ctorStr = "cognitect.transit/t31850";

cognitect.transit.t31850.cljs$lang$ctorPrWriter = (function (this__25344__auto__,writer__25345__auto__,opt__25346__auto__){
return cljs.core._write.call(null,writer__25345__auto__,"cognitect.transit/t31850");
});

cognitect.transit.__GT_t31850 = (function cognitect$transit$__GT_t31850(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta31851){
return (new cognitect.transit.t31850(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta31851));
});

}

return (new cognitect.transit.t31850(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map