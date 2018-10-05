// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__33328_SHARP_,p2__33329_SHARP_){
var and__24759__auto__ = p1__33328_SHARP_;
if(cljs.core.truth_(and__24759__auto__)){
return p2__33329_SHARP_;
} else {
return and__24759__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24771__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24771__auto__){
return or__24771__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__24771__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__24771__auto__){
return or__24771__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__24771__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__24771__auto__)){
return or__24771__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__25666__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25667__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25668__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25669__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25670__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25670__auto__,method_table__25666__auto__,prefer_table__25667__auto__,method_cache__25668__auto__,cached_hierarchy__25669__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__33330){
var map__33331 = p__33330;
var map__33331__$1 = ((cljs.core.seq_QMARK_.call(null,map__33331))?cljs.core.apply.call(null,cljs.core.hash_map,map__33331):map__33331);
var file = cljs.core.get.call(null,map__33331__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__33332){
var map__33333 = p__33332;
var map__33333__$1 = ((cljs.core.seq_QMARK_.call(null,map__33333))?cljs.core.apply.call(null,cljs.core.hash_map,map__33333):map__33333);
var namespace = cljs.core.get.call(null,map__33333__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__25666__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25667__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25668__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25669__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25670__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25670__auto__,method_table__25666__auto__,prefer_table__25667__auto__,method_cache__25668__auto__,cached_hierarchy__25669__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e33334){if((e33334 instanceof Error)){
var e = e33334;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33334;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__33336 = arguments.length;
switch (G__33336) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33338,callback){
var map__33340 = p__33338;
var map__33340__$1 = ((cljs.core.seq_QMARK_.call(null,map__33340))?cljs.core.apply.call(null,cljs.core.hash_map,map__33340):map__33340);
var file_msg = map__33340__$1;
var request_url = cljs.core.get.call(null,map__33340__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33340,map__33340__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33340,map__33340__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33341){
var map__33343 = p__33341;
var map__33343__$1 = ((cljs.core.seq_QMARK_.call(null,map__33343))?cljs.core.apply.call(null,cljs.core.hash_map,map__33343):map__33343);
var file_msg = map__33343__$1;
var namespace = cljs.core.get.call(null,map__33343__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__33343__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__24771__auto__ = meta_data;
if(cljs.core.truth_(or__24771__auto__)){
return or__24771__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__24759__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__24759__auto__){
var or__24771__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__24771__auto__)){
return or__24771__auto__;
} else {
var or__24771__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__24771__auto____$1)){
return or__24771__auto____$1;
} else {
var and__24759__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__24759__auto____$1){
var or__24771__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__24771__auto____$2){
return or__24771__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__24759__auto____$1;
}
}
}
} else {
return and__24759__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33344,callback){
var map__33346 = p__33344;
var map__33346__$1 = ((cljs.core.seq_QMARK_.call(null,map__33346))?cljs.core.apply.call(null,cljs.core.hash_map,map__33346):map__33346);
var file_msg = map__33346__$1;
var request_url = cljs.core.get.call(null,map__33346__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33346__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28169__auto___33433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___33433,out){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___33433,out){
return (function (state_33415){
var state_val_33416 = (state_33415[(1)]);
if((state_val_33416 === (1))){
var inst_33393 = cljs.core.nth.call(null,files,(0),null);
var inst_33394 = cljs.core.nthnext.call(null,files,(1));
var inst_33395 = files;
var state_33415__$1 = (function (){var statearr_33417 = state_33415;
(statearr_33417[(7)] = inst_33395);

(statearr_33417[(8)] = inst_33393);

(statearr_33417[(9)] = inst_33394);

return statearr_33417;
})();
var statearr_33418_33434 = state_33415__$1;
(statearr_33418_33434[(2)] = null);

(statearr_33418_33434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (2))){
var inst_33398 = (state_33415[(10)]);
var inst_33395 = (state_33415[(7)]);
var inst_33398__$1 = cljs.core.nth.call(null,inst_33395,(0),null);
var inst_33399 = cljs.core.nthnext.call(null,inst_33395,(1));
var inst_33400 = (inst_33398__$1 == null);
var inst_33401 = cljs.core.not.call(null,inst_33400);
var state_33415__$1 = (function (){var statearr_33419 = state_33415;
(statearr_33419[(11)] = inst_33399);

(statearr_33419[(10)] = inst_33398__$1);

return statearr_33419;
})();
if(inst_33401){
var statearr_33420_33435 = state_33415__$1;
(statearr_33420_33435[(1)] = (4));

} else {
var statearr_33421_33436 = state_33415__$1;
(statearr_33421_33436[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (3))){
var inst_33413 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33415__$1,inst_33413);
} else {
if((state_val_33416 === (4))){
var inst_33398 = (state_33415[(10)]);
var inst_33403 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33398);
var state_33415__$1 = state_33415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33415__$1,(7),inst_33403);
} else {
if((state_val_33416 === (5))){
var inst_33409 = cljs.core.async.close_BANG_.call(null,out);
var state_33415__$1 = state_33415;
var statearr_33422_33437 = state_33415__$1;
(statearr_33422_33437[(2)] = inst_33409);

(statearr_33422_33437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (6))){
var inst_33411 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33423_33438 = state_33415__$1;
(statearr_33423_33438[(2)] = inst_33411);

(statearr_33423_33438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (7))){
var inst_33399 = (state_33415[(11)]);
var inst_33405 = (state_33415[(2)]);
var inst_33406 = cljs.core.async.put_BANG_.call(null,out,inst_33405);
var inst_33395 = inst_33399;
var state_33415__$1 = (function (){var statearr_33424 = state_33415;
(statearr_33424[(12)] = inst_33406);

(statearr_33424[(7)] = inst_33395);

return statearr_33424;
})();
var statearr_33425_33439 = state_33415__$1;
(statearr_33425_33439[(2)] = null);

(statearr_33425_33439[(1)] = (2));


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
});})(c__28169__auto___33433,out))
;
return ((function (switch__28107__auto__,c__28169__auto___33433,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28108__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28108__auto____0 = (function (){
var statearr_33429 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33429[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28108__auto__);

(statearr_33429[(1)] = (1));

return statearr_33429;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28108__auto____1 = (function (state_33415){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_33415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e33430){if((e33430 instanceof Object)){
var ex__28111__auto__ = e33430;
var statearr_33431_33440 = state_33415;
(statearr_33431_33440[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33441 = state_33415;
state_33415 = G__33441;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28108__auto__ = function(state_33415){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28108__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28108__auto____1.call(this,state_33415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28108__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28108__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___33433,out))
})();
var state__28171__auto__ = (function (){var statearr_33432 = f__28170__auto__.call(null);
(statearr_33432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___33433);

return statearr_33432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___33433,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__33442,p__33443){
var map__33446 = p__33442;
var map__33446__$1 = ((cljs.core.seq_QMARK_.call(null,map__33446))?cljs.core.apply.call(null,cljs.core.hash_map,map__33446):map__33446);
var opts = map__33446__$1;
var url_rewriter = cljs.core.get.call(null,map__33446__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__33447 = p__33443;
var map__33447__$1 = ((cljs.core.seq_QMARK_.call(null,map__33447))?cljs.core.apply.call(null,cljs.core.hash_map,map__33447):map__33447);
var file_msg = map__33447__$1;
var file = cljs.core.get.call(null,map__33447__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33448){
var map__33451 = p__33448;
var map__33451__$1 = ((cljs.core.seq_QMARK_.call(null,map__33451))?cljs.core.apply.call(null,cljs.core.hash_map,map__33451):map__33451);
var eval_body__$1 = cljs.core.get.call(null,map__33451__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33451__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24759__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24759__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24759__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e33452){var e = e33452;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33457,p__33458){
var map__33660 = p__33457;
var map__33660__$1 = ((cljs.core.seq_QMARK_.call(null,map__33660))?cljs.core.apply.call(null,cljs.core.hash_map,map__33660):map__33660);
var opts = map__33660__$1;
var before_jsload = cljs.core.get.call(null,map__33660__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33660__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__33660__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__33661 = p__33458;
var map__33661__$1 = ((cljs.core.seq_QMARK_.call(null,map__33661))?cljs.core.apply.call(null,cljs.core.hash_map,map__33661):map__33661);
var msg = map__33661__$1;
var files = cljs.core.get.call(null,map__33661__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__28169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files){
return (function (state_33786){
var state_val_33787 = (state_33786[(1)]);
if((state_val_33787 === (7))){
var inst_33676 = (state_33786[(7)]);
var inst_33674 = (state_33786[(8)]);
var inst_33675 = (state_33786[(9)]);
var inst_33673 = (state_33786[(10)]);
var inst_33681 = cljs.core._nth.call(null,inst_33674,inst_33676);
var inst_33682 = figwheel.client.file_reloading.eval_body.call(null,inst_33681);
var inst_33683 = (inst_33676 + (1));
var tmp33788 = inst_33674;
var tmp33789 = inst_33675;
var tmp33790 = inst_33673;
var inst_33673__$1 = tmp33790;
var inst_33674__$1 = tmp33788;
var inst_33675__$1 = tmp33789;
var inst_33676__$1 = inst_33683;
var state_33786__$1 = (function (){var statearr_33791 = state_33786;
(statearr_33791[(7)] = inst_33676__$1);

(statearr_33791[(11)] = inst_33682);

(statearr_33791[(8)] = inst_33674__$1);

(statearr_33791[(9)] = inst_33675__$1);

(statearr_33791[(10)] = inst_33673__$1);

return statearr_33791;
})();
var statearr_33792_33861 = state_33786__$1;
(statearr_33792_33861[(2)] = null);

(statearr_33792_33861[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (20))){
var inst_33722 = (state_33786[(12)]);
var inst_33719 = (state_33786[(13)]);
var inst_33723 = (state_33786[(14)]);
var inst_33725 = (state_33786[(15)]);
var inst_33718 = (state_33786[(16)]);
var inst_33728 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33730 = (function (){var all_files = inst_33718;
var files_SINGLEQUOTE_ = inst_33719;
var res_SINGLEQUOTE_ = inst_33722;
var res = inst_33723;
var files_not_loaded = inst_33725;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33722,inst_33719,inst_33723,inst_33725,inst_33718,inst_33728,state_val_33787,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files){
return (function (p__33729){
var map__33793 = p__33729;
var map__33793__$1 = ((cljs.core.seq_QMARK_.call(null,map__33793))?cljs.core.apply.call(null,cljs.core.hash_map,map__33793):map__33793);
var namespace = cljs.core.get.call(null,map__33793__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33793__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33722,inst_33719,inst_33723,inst_33725,inst_33718,inst_33728,state_val_33787,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files))
})();
var inst_33731 = cljs.core.map.call(null,inst_33730,inst_33723);
var inst_33732 = cljs.core.pr_str.call(null,inst_33731);
var inst_33733 = figwheel.client.utils.log.call(null,inst_33732);
var inst_33734 = (function (){var all_files = inst_33718;
var files_SINGLEQUOTE_ = inst_33719;
var res_SINGLEQUOTE_ = inst_33722;
var res = inst_33723;
var files_not_loaded = inst_33725;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33722,inst_33719,inst_33723,inst_33725,inst_33718,inst_33728,inst_33730,inst_33731,inst_33732,inst_33733,state_val_33787,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33722,inst_33719,inst_33723,inst_33725,inst_33718,inst_33728,inst_33730,inst_33731,inst_33732,inst_33733,state_val_33787,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files))
})();
var inst_33735 = setTimeout(inst_33734,(10));
var state_33786__$1 = (function (){var statearr_33794 = state_33786;
(statearr_33794[(17)] = inst_33733);

(statearr_33794[(18)] = inst_33728);

return statearr_33794;
})();
var statearr_33795_33862 = state_33786__$1;
(statearr_33795_33862[(2)] = inst_33735);

(statearr_33795_33862[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (27))){
var inst_33745 = (state_33786[(19)]);
var state_33786__$1 = state_33786;
var statearr_33796_33863 = state_33786__$1;
(statearr_33796_33863[(2)] = inst_33745);

(statearr_33796_33863[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (1))){
var inst_33665 = (state_33786[(20)]);
var inst_33662 = before_jsload.call(null,files);
var inst_33663 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33664 = (function (){return ((function (inst_33665,inst_33662,inst_33663,state_val_33787,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files){
return (function (p1__33453_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33453_SHARP_);
});
;})(inst_33665,inst_33662,inst_33663,state_val_33787,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files))
})();
var inst_33665__$1 = cljs.core.filter.call(null,inst_33664,files);
var inst_33666 = cljs.core.not_empty.call(null,inst_33665__$1);
var state_33786__$1 = (function (){var statearr_33797 = state_33786;
(statearr_33797[(21)] = inst_33663);

(statearr_33797[(22)] = inst_33662);

(statearr_33797[(20)] = inst_33665__$1);

return statearr_33797;
})();
if(cljs.core.truth_(inst_33666)){
var statearr_33798_33864 = state_33786__$1;
(statearr_33798_33864[(1)] = (2));

} else {
var statearr_33799_33865 = state_33786__$1;
(statearr_33799_33865[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (24))){
var state_33786__$1 = state_33786;
var statearr_33800_33866 = state_33786__$1;
(statearr_33800_33866[(2)] = null);

(statearr_33800_33866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (4))){
var inst_33710 = (state_33786[(2)]);
var inst_33711 = (function (){return ((function (inst_33710,state_val_33787,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files){
return (function (p1__33454_SHARP_){
var and__24759__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33454_SHARP_);
if(cljs.core.truth_(and__24759__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33454_SHARP_));
} else {
return and__24759__auto__;
}
});
;})(inst_33710,state_val_33787,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files))
})();
var inst_33712 = cljs.core.filter.call(null,inst_33711,files);
var state_33786__$1 = (function (){var statearr_33801 = state_33786;
(statearr_33801[(23)] = inst_33710);

(statearr_33801[(24)] = inst_33712);

return statearr_33801;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_33802_33867 = state_33786__$1;
(statearr_33802_33867[(1)] = (16));

} else {
var statearr_33803_33868 = state_33786__$1;
(statearr_33803_33868[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (15))){
var inst_33700 = (state_33786[(2)]);
var state_33786__$1 = state_33786;
var statearr_33804_33869 = state_33786__$1;
(statearr_33804_33869[(2)] = inst_33700);

(statearr_33804_33869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (21))){
var state_33786__$1 = state_33786;
var statearr_33805_33870 = state_33786__$1;
(statearr_33805_33870[(2)] = null);

(statearr_33805_33870[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (31))){
var inst_33753 = (state_33786[(25)]);
var inst_33763 = (state_33786[(2)]);
var inst_33764 = cljs.core.not_empty.call(null,inst_33753);
var state_33786__$1 = (function (){var statearr_33806 = state_33786;
(statearr_33806[(26)] = inst_33763);

return statearr_33806;
})();
if(cljs.core.truth_(inst_33764)){
var statearr_33807_33871 = state_33786__$1;
(statearr_33807_33871[(1)] = (32));

} else {
var statearr_33808_33872 = state_33786__$1;
(statearr_33808_33872[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (32))){
var inst_33753 = (state_33786[(25)]);
var inst_33766 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33753);
var inst_33767 = cljs.core.pr_str.call(null,inst_33766);
var inst_33768 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_33767)].join('');
var inst_33769 = figwheel.client.utils.log.call(null,inst_33768);
var state_33786__$1 = state_33786;
var statearr_33809_33873 = state_33786__$1;
(statearr_33809_33873[(2)] = inst_33769);

(statearr_33809_33873[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (33))){
var state_33786__$1 = state_33786;
var statearr_33810_33874 = state_33786__$1;
(statearr_33810_33874[(2)] = null);

(statearr_33810_33874[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (13))){
var inst_33686 = (state_33786[(27)]);
var inst_33690 = cljs.core.chunk_first.call(null,inst_33686);
var inst_33691 = cljs.core.chunk_rest.call(null,inst_33686);
var inst_33692 = cljs.core.count.call(null,inst_33690);
var inst_33673 = inst_33691;
var inst_33674 = inst_33690;
var inst_33675 = inst_33692;
var inst_33676 = (0);
var state_33786__$1 = (function (){var statearr_33811 = state_33786;
(statearr_33811[(7)] = inst_33676);

(statearr_33811[(8)] = inst_33674);

(statearr_33811[(9)] = inst_33675);

(statearr_33811[(10)] = inst_33673);

return statearr_33811;
})();
var statearr_33812_33875 = state_33786__$1;
(statearr_33812_33875[(2)] = null);

(statearr_33812_33875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (22))){
var inst_33725 = (state_33786[(15)]);
var inst_33738 = (state_33786[(2)]);
var inst_33739 = cljs.core.not_empty.call(null,inst_33725);
var state_33786__$1 = (function (){var statearr_33813 = state_33786;
(statearr_33813[(28)] = inst_33738);

return statearr_33813;
})();
if(cljs.core.truth_(inst_33739)){
var statearr_33814_33876 = state_33786__$1;
(statearr_33814_33876[(1)] = (23));

} else {
var statearr_33815_33877 = state_33786__$1;
(statearr_33815_33877[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (36))){
var state_33786__$1 = state_33786;
var statearr_33816_33878 = state_33786__$1;
(statearr_33816_33878[(2)] = null);

(statearr_33816_33878[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (29))){
var inst_33752 = (state_33786[(29)]);
var inst_33757 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33752);
var inst_33758 = cljs.core.pr_str.call(null,inst_33757);
var inst_33759 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33758)].join('');
var inst_33760 = figwheel.client.utils.log.call(null,inst_33759);
var state_33786__$1 = state_33786;
var statearr_33817_33879 = state_33786__$1;
(statearr_33817_33879[(2)] = inst_33760);

(statearr_33817_33879[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (6))){
var inst_33707 = (state_33786[(2)]);
var state_33786__$1 = state_33786;
var statearr_33818_33880 = state_33786__$1;
(statearr_33818_33880[(2)] = inst_33707);

(statearr_33818_33880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (28))){
var inst_33752 = (state_33786[(29)]);
var inst_33751 = (state_33786[(2)]);
var inst_33752__$1 = cljs.core.get.call(null,inst_33751,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33753 = cljs.core.get.call(null,inst_33751,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_33754 = cljs.core.get.call(null,inst_33751,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33755 = cljs.core.not_empty.call(null,inst_33752__$1);
var state_33786__$1 = (function (){var statearr_33819 = state_33786;
(statearr_33819[(30)] = inst_33754);

(statearr_33819[(29)] = inst_33752__$1);

(statearr_33819[(25)] = inst_33753);

return statearr_33819;
})();
if(cljs.core.truth_(inst_33755)){
var statearr_33820_33881 = state_33786__$1;
(statearr_33820_33881[(1)] = (29));

} else {
var statearr_33821_33882 = state_33786__$1;
(statearr_33821_33882[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (25))){
var inst_33784 = (state_33786[(2)]);
var state_33786__$1 = state_33786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33786__$1,inst_33784);
} else {
if((state_val_33787 === (34))){
var inst_33754 = (state_33786[(30)]);
var inst_33772 = (state_33786[(2)]);
var inst_33773 = cljs.core.not_empty.call(null,inst_33754);
var state_33786__$1 = (function (){var statearr_33822 = state_33786;
(statearr_33822[(31)] = inst_33772);

return statearr_33822;
})();
if(cljs.core.truth_(inst_33773)){
var statearr_33823_33883 = state_33786__$1;
(statearr_33823_33883[(1)] = (35));

} else {
var statearr_33824_33884 = state_33786__$1;
(statearr_33824_33884[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (17))){
var inst_33712 = (state_33786[(24)]);
var state_33786__$1 = state_33786;
var statearr_33825_33885 = state_33786__$1;
(statearr_33825_33885[(2)] = inst_33712);

(statearr_33825_33885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (3))){
var state_33786__$1 = state_33786;
var statearr_33826_33886 = state_33786__$1;
(statearr_33826_33886[(2)] = null);

(statearr_33826_33886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (12))){
var inst_33703 = (state_33786[(2)]);
var state_33786__$1 = state_33786;
var statearr_33827_33887 = state_33786__$1;
(statearr_33827_33887[(2)] = inst_33703);

(statearr_33827_33887[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (2))){
var inst_33665 = (state_33786[(20)]);
var inst_33672 = cljs.core.seq.call(null,inst_33665);
var inst_33673 = inst_33672;
var inst_33674 = null;
var inst_33675 = (0);
var inst_33676 = (0);
var state_33786__$1 = (function (){var statearr_33828 = state_33786;
(statearr_33828[(7)] = inst_33676);

(statearr_33828[(8)] = inst_33674);

(statearr_33828[(9)] = inst_33675);

(statearr_33828[(10)] = inst_33673);

return statearr_33828;
})();
var statearr_33829_33888 = state_33786__$1;
(statearr_33829_33888[(2)] = null);

(statearr_33829_33888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (23))){
var inst_33722 = (state_33786[(12)]);
var inst_33745 = (state_33786[(19)]);
var inst_33719 = (state_33786[(13)]);
var inst_33723 = (state_33786[(14)]);
var inst_33725 = (state_33786[(15)]);
var inst_33718 = (state_33786[(16)]);
var inst_33741 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33744 = (function (){var all_files = inst_33718;
var files_SINGLEQUOTE_ = inst_33719;
var res_SINGLEQUOTE_ = inst_33722;
var res = inst_33723;
var files_not_loaded = inst_33725;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33722,inst_33745,inst_33719,inst_33723,inst_33725,inst_33718,inst_33741,state_val_33787,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files){
return (function (p__33743){
var map__33830 = p__33743;
var map__33830__$1 = ((cljs.core.seq_QMARK_.call(null,map__33830))?cljs.core.apply.call(null,cljs.core.hash_map,map__33830):map__33830);
var meta_data = cljs.core.get.call(null,map__33830__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33722,inst_33745,inst_33719,inst_33723,inst_33725,inst_33718,inst_33741,state_val_33787,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files))
})();
var inst_33745__$1 = cljs.core.group_by.call(null,inst_33744,inst_33725);
var inst_33746 = cljs.core.seq_QMARK_.call(null,inst_33745__$1);
var state_33786__$1 = (function (){var statearr_33831 = state_33786;
(statearr_33831[(19)] = inst_33745__$1);

(statearr_33831[(32)] = inst_33741);

return statearr_33831;
})();
if(inst_33746){
var statearr_33832_33889 = state_33786__$1;
(statearr_33832_33889[(1)] = (26));

} else {
var statearr_33833_33890 = state_33786__$1;
(statearr_33833_33890[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (35))){
var inst_33754 = (state_33786[(30)]);
var inst_33775 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33754);
var inst_33776 = cljs.core.pr_str.call(null,inst_33775);
var inst_33777 = [cljs.core.str("not required: "),cljs.core.str(inst_33776)].join('');
var inst_33778 = figwheel.client.utils.log.call(null,inst_33777);
var state_33786__$1 = state_33786;
var statearr_33834_33891 = state_33786__$1;
(statearr_33834_33891[(2)] = inst_33778);

(statearr_33834_33891[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (19))){
var inst_33722 = (state_33786[(12)]);
var inst_33719 = (state_33786[(13)]);
var inst_33723 = (state_33786[(14)]);
var inst_33718 = (state_33786[(16)]);
var inst_33722__$1 = (state_33786[(2)]);
var inst_33723__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33722__$1);
var inst_33724 = (function (){var all_files = inst_33718;
var files_SINGLEQUOTE_ = inst_33719;
var res_SINGLEQUOTE_ = inst_33722__$1;
var res = inst_33723__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_33722,inst_33719,inst_33723,inst_33718,inst_33722__$1,inst_33723__$1,state_val_33787,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files){
return (function (p1__33456_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33456_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_33722,inst_33719,inst_33723,inst_33718,inst_33722__$1,inst_33723__$1,state_val_33787,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files))
})();
var inst_33725 = cljs.core.filter.call(null,inst_33724,inst_33722__$1);
var inst_33726 = cljs.core.not_empty.call(null,inst_33723__$1);
var state_33786__$1 = (function (){var statearr_33835 = state_33786;
(statearr_33835[(12)] = inst_33722__$1);

(statearr_33835[(14)] = inst_33723__$1);

(statearr_33835[(15)] = inst_33725);

return statearr_33835;
})();
if(cljs.core.truth_(inst_33726)){
var statearr_33836_33892 = state_33786__$1;
(statearr_33836_33892[(1)] = (20));

} else {
var statearr_33837_33893 = state_33786__$1;
(statearr_33837_33893[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (11))){
var state_33786__$1 = state_33786;
var statearr_33838_33894 = state_33786__$1;
(statearr_33838_33894[(2)] = null);

(statearr_33838_33894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (9))){
var inst_33705 = (state_33786[(2)]);
var state_33786__$1 = state_33786;
var statearr_33839_33895 = state_33786__$1;
(statearr_33839_33895[(2)] = inst_33705);

(statearr_33839_33895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (5))){
var inst_33676 = (state_33786[(7)]);
var inst_33675 = (state_33786[(9)]);
var inst_33678 = (inst_33676 < inst_33675);
var inst_33679 = inst_33678;
var state_33786__$1 = state_33786;
if(cljs.core.truth_(inst_33679)){
var statearr_33840_33896 = state_33786__$1;
(statearr_33840_33896[(1)] = (7));

} else {
var statearr_33841_33897 = state_33786__$1;
(statearr_33841_33897[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (14))){
var inst_33686 = (state_33786[(27)]);
var inst_33695 = cljs.core.first.call(null,inst_33686);
var inst_33696 = figwheel.client.file_reloading.eval_body.call(null,inst_33695);
var inst_33697 = cljs.core.next.call(null,inst_33686);
var inst_33673 = inst_33697;
var inst_33674 = null;
var inst_33675 = (0);
var inst_33676 = (0);
var state_33786__$1 = (function (){var statearr_33842 = state_33786;
(statearr_33842[(7)] = inst_33676);

(statearr_33842[(8)] = inst_33674);

(statearr_33842[(9)] = inst_33675);

(statearr_33842[(10)] = inst_33673);

(statearr_33842[(33)] = inst_33696);

return statearr_33842;
})();
var statearr_33843_33898 = state_33786__$1;
(statearr_33843_33898[(2)] = null);

(statearr_33843_33898[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (26))){
var inst_33745 = (state_33786[(19)]);
var inst_33748 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33745);
var state_33786__$1 = state_33786;
var statearr_33844_33899 = state_33786__$1;
(statearr_33844_33899[(2)] = inst_33748);

(statearr_33844_33899[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (16))){
var inst_33712 = (state_33786[(24)]);
var inst_33714 = (function (){var all_files = inst_33712;
return ((function (all_files,inst_33712,state_val_33787,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files){
return (function (p1__33455_SHARP_){
return cljs.core.update_in.call(null,p1__33455_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_33712,state_val_33787,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files))
})();
var inst_33715 = cljs.core.map.call(null,inst_33714,inst_33712);
var state_33786__$1 = state_33786;
var statearr_33845_33900 = state_33786__$1;
(statearr_33845_33900[(2)] = inst_33715);

(statearr_33845_33900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (30))){
var state_33786__$1 = state_33786;
var statearr_33846_33901 = state_33786__$1;
(statearr_33846_33901[(2)] = null);

(statearr_33846_33901[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (10))){
var inst_33686 = (state_33786[(27)]);
var inst_33688 = cljs.core.chunked_seq_QMARK_.call(null,inst_33686);
var state_33786__$1 = state_33786;
if(inst_33688){
var statearr_33847_33902 = state_33786__$1;
(statearr_33847_33902[(1)] = (13));

} else {
var statearr_33848_33903 = state_33786__$1;
(statearr_33848_33903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (18))){
var inst_33719 = (state_33786[(13)]);
var inst_33718 = (state_33786[(16)]);
var inst_33718__$1 = (state_33786[(2)]);
var inst_33719__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_33718__$1);
var inst_33720 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33719__$1);
var state_33786__$1 = (function (){var statearr_33849 = state_33786;
(statearr_33849[(13)] = inst_33719__$1);

(statearr_33849[(16)] = inst_33718__$1);

return statearr_33849;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33786__$1,(19),inst_33720);
} else {
if((state_val_33787 === (37))){
var inst_33781 = (state_33786[(2)]);
var state_33786__$1 = state_33786;
var statearr_33850_33904 = state_33786__$1;
(statearr_33850_33904[(2)] = inst_33781);

(statearr_33850_33904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (8))){
var inst_33673 = (state_33786[(10)]);
var inst_33686 = (state_33786[(27)]);
var inst_33686__$1 = cljs.core.seq.call(null,inst_33673);
var state_33786__$1 = (function (){var statearr_33851 = state_33786;
(statearr_33851[(27)] = inst_33686__$1);

return statearr_33851;
})();
if(inst_33686__$1){
var statearr_33852_33905 = state_33786__$1;
(statearr_33852_33905[(1)] = (10));

} else {
var statearr_33853_33906 = state_33786__$1;
(statearr_33853_33906[(1)] = (11));

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
});})(c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files))
;
return ((function (switch__28107__auto__,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28108__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28108__auto____0 = (function (){
var statearr_33857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33857[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28108__auto__);

(statearr_33857[(1)] = (1));

return statearr_33857;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28108__auto____1 = (function (state_33786){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_33786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e33858){if((e33858 instanceof Object)){
var ex__28111__auto__ = e33858;
var statearr_33859_33907 = state_33786;
(statearr_33859_33907[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33908 = state_33786;
state_33786 = G__33908;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28108__auto__ = function(state_33786){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28108__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28108__auto____1.call(this,state_33786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28108__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28108__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files))
})();
var state__28171__auto__ = (function (){var statearr_33860 = f__28170__auto__.call(null);
(statearr_33860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto__);

return statearr_33860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto__,map__33660,map__33660__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33661,map__33661__$1,msg,files))
);

return c__28169__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33911,link){
var map__33913 = p__33911;
var map__33913__$1 = ((cljs.core.seq_QMARK_.call(null,map__33913))?cljs.core.apply.call(null,cljs.core.hash_map,map__33913):map__33913);
var file = cljs.core.get.call(null,map__33913__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__33913,map__33913__$1,file){
return (function (p1__33909_SHARP_,p2__33910_SHARP_){
if(cljs.core._EQ_.call(null,p1__33909_SHARP_,p2__33910_SHARP_)){
return p1__33909_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__33913,map__33913__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33917){
var map__33918 = p__33917;
var map__33918__$1 = ((cljs.core.seq_QMARK_.call(null,map__33918))?cljs.core.apply.call(null,cljs.core.hash_map,map__33918):map__33918);
var match_length = cljs.core.get.call(null,map__33918__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33918__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33914_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33914_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__33920 = arguments.length;
switch (G__33920) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33922){
var map__33924 = p__33922;
var map__33924__$1 = ((cljs.core.seq_QMARK_.call(null,map__33924))?cljs.core.apply.call(null,cljs.core.hash_map,map__33924):map__33924);
var f_data = map__33924__$1;
var file = cljs.core.get.call(null,map__33924__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__33924__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__24771__auto__ = request_url;
if(cljs.core.truth_(or__24771__auto__)){
return or__24771__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33925,files_msg){
var map__33947 = p__33925;
var map__33947__$1 = ((cljs.core.seq_QMARK_.call(null,map__33947))?cljs.core.apply.call(null,cljs.core.hash_map,map__33947):map__33947);
var opts = map__33947__$1;
var on_cssload = cljs.core.get.call(null,map__33947__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33948_33968 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__33949_33969 = null;
var count__33950_33970 = (0);
var i__33951_33971 = (0);
while(true){
if((i__33951_33971 < count__33950_33970)){
var f_33972 = cljs.core._nth.call(null,chunk__33949_33969,i__33951_33971);
figwheel.client.file_reloading.reload_css_file.call(null,f_33972);

var G__33973 = seq__33948_33968;
var G__33974 = chunk__33949_33969;
var G__33975 = count__33950_33970;
var G__33976 = (i__33951_33971 + (1));
seq__33948_33968 = G__33973;
chunk__33949_33969 = G__33974;
count__33950_33970 = G__33975;
i__33951_33971 = G__33976;
continue;
} else {
var temp__4423__auto___33977 = cljs.core.seq.call(null,seq__33948_33968);
if(temp__4423__auto___33977){
var seq__33948_33978__$1 = temp__4423__auto___33977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33948_33978__$1)){
var c__25556__auto___33979 = cljs.core.chunk_first.call(null,seq__33948_33978__$1);
var G__33980 = cljs.core.chunk_rest.call(null,seq__33948_33978__$1);
var G__33981 = c__25556__auto___33979;
var G__33982 = cljs.core.count.call(null,c__25556__auto___33979);
var G__33983 = (0);
seq__33948_33968 = G__33980;
chunk__33949_33969 = G__33981;
count__33950_33970 = G__33982;
i__33951_33971 = G__33983;
continue;
} else {
var f_33984 = cljs.core.first.call(null,seq__33948_33978__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33984);

var G__33985 = cljs.core.next.call(null,seq__33948_33978__$1);
var G__33986 = null;
var G__33987 = (0);
var G__33988 = (0);
seq__33948_33968 = G__33985;
chunk__33949_33969 = G__33986;
count__33950_33970 = G__33987;
i__33951_33971 = G__33988;
continue;
}
} else {
}
}
break;
}

var c__28169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto__,map__33947,map__33947__$1,opts,on_cssload){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto__,map__33947,map__33947__$1,opts,on_cssload){
return (function (state_33958){
var state_val_33959 = (state_33958[(1)]);
if((state_val_33959 === (1))){
var inst_33952 = cljs.core.async.timeout.call(null,(100));
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33958__$1,(2),inst_33952);
} else {
if((state_val_33959 === (2))){
var inst_33954 = (state_33958[(2)]);
var inst_33955 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_33956 = on_cssload.call(null,inst_33955);
var state_33958__$1 = (function (){var statearr_33960 = state_33958;
(statearr_33960[(7)] = inst_33954);

return statearr_33960;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33958__$1,inst_33956);
} else {
return null;
}
}
});})(c__28169__auto__,map__33947,map__33947__$1,opts,on_cssload))
;
return ((function (switch__28107__auto__,c__28169__auto__,map__33947,map__33947__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28108__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28108__auto____0 = (function (){
var statearr_33964 = [null,null,null,null,null,null,null,null];
(statearr_33964[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__28108__auto__);

(statearr_33964[(1)] = (1));

return statearr_33964;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28108__auto____1 = (function (state_33958){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_33958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e33965){if((e33965 instanceof Object)){
var ex__28111__auto__ = e33965;
var statearr_33966_33989 = state_33958;
(statearr_33966_33989[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33990 = state_33958;
state_33958 = G__33990;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__28108__auto__ = function(state_33958){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28108__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28108__auto____1.call(this,state_33958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28108__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28108__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto__,map__33947,map__33947__$1,opts,on_cssload))
})();
var state__28171__auto__ = (function (){var statearr_33967 = f__28170__auto__.call(null);
(statearr_33967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto__);

return statearr_33967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto__,map__33947,map__33947__$1,opts,on_cssload))
);

return c__28169__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map