// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33244_33256 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33245_33257 = null;
var count__33246_33258 = (0);
var i__33247_33259 = (0);
while(true){
if((i__33247_33259 < count__33246_33258)){
var f_33260 = cljs.core._nth.call(null,chunk__33245_33257,i__33247_33259);
cljs.core.println.call(null,"  ",f_33260);

var G__33261 = seq__33244_33256;
var G__33262 = chunk__33245_33257;
var G__33263 = count__33246_33258;
var G__33264 = (i__33247_33259 + (1));
seq__33244_33256 = G__33261;
chunk__33245_33257 = G__33262;
count__33246_33258 = G__33263;
i__33247_33259 = G__33264;
continue;
} else {
var temp__4423__auto___33265 = cljs.core.seq.call(null,seq__33244_33256);
if(temp__4423__auto___33265){
var seq__33244_33266__$1 = temp__4423__auto___33265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33244_33266__$1)){
var c__25550__auto___33267 = cljs.core.chunk_first.call(null,seq__33244_33266__$1);
var G__33268 = cljs.core.chunk_rest.call(null,seq__33244_33266__$1);
var G__33269 = c__25550__auto___33267;
var G__33270 = cljs.core.count.call(null,c__25550__auto___33267);
var G__33271 = (0);
seq__33244_33256 = G__33268;
chunk__33245_33257 = G__33269;
count__33246_33258 = G__33270;
i__33247_33259 = G__33271;
continue;
} else {
var f_33272 = cljs.core.first.call(null,seq__33244_33266__$1);
cljs.core.println.call(null,"  ",f_33272);

var G__33273 = cljs.core.next.call(null,seq__33244_33266__$1);
var G__33274 = null;
var G__33275 = (0);
var G__33276 = (0);
seq__33244_33256 = G__33273;
chunk__33245_33257 = G__33274;
count__33246_33258 = G__33275;
i__33247_33259 = G__33276;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33277 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24765__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33277);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33277)))?cljs.core.second.call(null,arglists_33277):arglists_33277));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33248 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33249 = null;
var count__33250 = (0);
var i__33251 = (0);
while(true){
if((i__33251 < count__33250)){
var vec__33252 = cljs.core._nth.call(null,chunk__33249,i__33251);
var name = cljs.core.nth.call(null,vec__33252,(0),null);
var map__33253 = cljs.core.nth.call(null,vec__33252,(1),null);
var map__33253__$1 = ((cljs.core.seq_QMARK_.call(null,map__33253))?cljs.core.apply.call(null,cljs.core.hash_map,map__33253):map__33253);
var doc = cljs.core.get.call(null,map__33253__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33253__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33278 = seq__33248;
var G__33279 = chunk__33249;
var G__33280 = count__33250;
var G__33281 = (i__33251 + (1));
seq__33248 = G__33278;
chunk__33249 = G__33279;
count__33250 = G__33280;
i__33251 = G__33281;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__33248);
if(temp__4423__auto__){
var seq__33248__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33248__$1)){
var c__25550__auto__ = cljs.core.chunk_first.call(null,seq__33248__$1);
var G__33282 = cljs.core.chunk_rest.call(null,seq__33248__$1);
var G__33283 = c__25550__auto__;
var G__33284 = cljs.core.count.call(null,c__25550__auto__);
var G__33285 = (0);
seq__33248 = G__33282;
chunk__33249 = G__33283;
count__33250 = G__33284;
i__33251 = G__33285;
continue;
} else {
var vec__33254 = cljs.core.first.call(null,seq__33248__$1);
var name = cljs.core.nth.call(null,vec__33254,(0),null);
var map__33255 = cljs.core.nth.call(null,vec__33254,(1),null);
var map__33255__$1 = ((cljs.core.seq_QMARK_.call(null,map__33255))?cljs.core.apply.call(null,cljs.core.hash_map,map__33255):map__33255);
var doc = cljs.core.get.call(null,map__33255__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33255__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33286 = cljs.core.next.call(null,seq__33248__$1);
var G__33287 = null;
var G__33288 = (0);
var G__33289 = (0);
seq__33248 = G__33286;
chunk__33249 = G__33287;
count__33250 = G__33288;
i__33251 = G__33289;
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
}
});

//# sourceMappingURL=repl.js.map