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
var seq__33262_33274 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33263_33275 = null;
var count__33264_33276 = (0);
var i__33265_33277 = (0);
while(true){
if((i__33265_33277 < count__33264_33276)){
var f_33278 = cljs.core._nth.call(null,chunk__33263_33275,i__33265_33277);
cljs.core.println.call(null,"  ",f_33278);

var G__33279 = seq__33262_33274;
var G__33280 = chunk__33263_33275;
var G__33281 = count__33264_33276;
var G__33282 = (i__33265_33277 + (1));
seq__33262_33274 = G__33279;
chunk__33263_33275 = G__33280;
count__33264_33276 = G__33281;
i__33265_33277 = G__33282;
continue;
} else {
var temp__4423__auto___33283 = cljs.core.seq.call(null,seq__33262_33274);
if(temp__4423__auto___33283){
var seq__33262_33284__$1 = temp__4423__auto___33283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33262_33284__$1)){
var c__25556__auto___33285 = cljs.core.chunk_first.call(null,seq__33262_33284__$1);
var G__33286 = cljs.core.chunk_rest.call(null,seq__33262_33284__$1);
var G__33287 = c__25556__auto___33285;
var G__33288 = cljs.core.count.call(null,c__25556__auto___33285);
var G__33289 = (0);
seq__33262_33274 = G__33286;
chunk__33263_33275 = G__33287;
count__33264_33276 = G__33288;
i__33265_33277 = G__33289;
continue;
} else {
var f_33290 = cljs.core.first.call(null,seq__33262_33284__$1);
cljs.core.println.call(null,"  ",f_33290);

var G__33291 = cljs.core.next.call(null,seq__33262_33284__$1);
var G__33292 = null;
var G__33293 = (0);
var G__33294 = (0);
seq__33262_33274 = G__33291;
chunk__33263_33275 = G__33292;
count__33264_33276 = G__33293;
i__33265_33277 = G__33294;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33295 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24771__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24771__auto__)){
return or__24771__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33295);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33295)))?cljs.core.second.call(null,arglists_33295):arglists_33295));
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
var seq__33266 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33267 = null;
var count__33268 = (0);
var i__33269 = (0);
while(true){
if((i__33269 < count__33268)){
var vec__33270 = cljs.core._nth.call(null,chunk__33267,i__33269);
var name = cljs.core.nth.call(null,vec__33270,(0),null);
var map__33271 = cljs.core.nth.call(null,vec__33270,(1),null);
var map__33271__$1 = ((cljs.core.seq_QMARK_.call(null,map__33271))?cljs.core.apply.call(null,cljs.core.hash_map,map__33271):map__33271);
var doc = cljs.core.get.call(null,map__33271__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33271__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33296 = seq__33266;
var G__33297 = chunk__33267;
var G__33298 = count__33268;
var G__33299 = (i__33269 + (1));
seq__33266 = G__33296;
chunk__33267 = G__33297;
count__33268 = G__33298;
i__33269 = G__33299;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__33266);
if(temp__4423__auto__){
var seq__33266__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33266__$1)){
var c__25556__auto__ = cljs.core.chunk_first.call(null,seq__33266__$1);
var G__33300 = cljs.core.chunk_rest.call(null,seq__33266__$1);
var G__33301 = c__25556__auto__;
var G__33302 = cljs.core.count.call(null,c__25556__auto__);
var G__33303 = (0);
seq__33266 = G__33300;
chunk__33267 = G__33301;
count__33268 = G__33302;
i__33269 = G__33303;
continue;
} else {
var vec__33272 = cljs.core.first.call(null,seq__33266__$1);
var name = cljs.core.nth.call(null,vec__33272,(0),null);
var map__33273 = cljs.core.nth.call(null,vec__33272,(1),null);
var map__33273__$1 = ((cljs.core.seq_QMARK_.call(null,map__33273))?cljs.core.apply.call(null,cljs.core.hash_map,map__33273):map__33273);
var doc = cljs.core.get.call(null,map__33273__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33273__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33304 = cljs.core.next.call(null,seq__33266__$1);
var G__33305 = null;
var G__33306 = (0);
var G__33307 = (0);
seq__33266 = G__33304;
chunk__33267 = G__33305;
count__33268 = G__33306;
i__33269 = G__33307;
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