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
return cljs.core.reduce.call(null,(function (p1__33310_SHARP_,p2__33311_SHARP_){
var and__24753__auto__ = p1__33310_SHARP_;
if(cljs.core.truth_(and__24753__auto__)){
return p2__33311_SHARP_;
} else {
return and__24753__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24765__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24765__auto__){
return or__24765__auto__;
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
if(cljs.core.truth_((function (){var or__24765__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__24765__auto__){
return or__24765__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__24765__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__25660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25664__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25664__auto__,method_table__25660__auto__,prefer_table__25661__auto__,method_cache__25662__auto__,cached_hierarchy__25663__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__33312){
var map__33313 = p__33312;
var map__33313__$1 = ((cljs.core.seq_QMARK_.call(null,map__33313))?cljs.core.apply.call(null,cljs.core.hash_map,map__33313):map__33313);
var file = cljs.core.get.call(null,map__33313__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__33314){
var map__33315 = p__33314;
var map__33315__$1 = ((cljs.core.seq_QMARK_.call(null,map__33315))?cljs.core.apply.call(null,cljs.core.hash_map,map__33315):map__33315);
var namespace = cljs.core.get.call(null,map__33315__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__25660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25664__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25664__auto__,method_table__25660__auto__,prefer_table__25661__auto__,method_cache__25662__auto__,cached_hierarchy__25663__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e33316){if((e33316 instanceof Error)){
var e = e33316;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33316;

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
var G__33318 = arguments.length;
switch (G__33318) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33320,callback){
var map__33322 = p__33320;
var map__33322__$1 = ((cljs.core.seq_QMARK_.call(null,map__33322))?cljs.core.apply.call(null,cljs.core.hash_map,map__33322):map__33322);
var file_msg = map__33322__$1;
var request_url = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33322,map__33322__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33322,map__33322__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33323){
var map__33325 = p__33323;
var map__33325__$1 = ((cljs.core.seq_QMARK_.call(null,map__33325))?cljs.core.apply.call(null,cljs.core.hash_map,map__33325):map__33325);
var file_msg = map__33325__$1;
var namespace = cljs.core.get.call(null,map__33325__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__33325__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__24765__auto__ = meta_data;
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__24753__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__24753__auto__){
var or__24765__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
var or__24765__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__24765__auto____$1)){
return or__24765__auto____$1;
} else {
var and__24753__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__24753__auto____$1){
var or__24765__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__24765__auto____$2){
return or__24765__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__24753__auto____$1;
}
}
}
} else {
return and__24753__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33326,callback){
var map__33328 = p__33326;
var map__33328__$1 = ((cljs.core.seq_QMARK_.call(null,map__33328))?cljs.core.apply.call(null,cljs.core.hash_map,map__33328):map__33328);
var file_msg = map__33328__$1;
var request_url = cljs.core.get.call(null,map__33328__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33328__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28151__auto___33415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___33415,out){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___33415,out){
return (function (state_33397){
var state_val_33398 = (state_33397[(1)]);
if((state_val_33398 === (1))){
var inst_33375 = cljs.core.nth.call(null,files,(0),null);
var inst_33376 = cljs.core.nthnext.call(null,files,(1));
var inst_33377 = files;
var state_33397__$1 = (function (){var statearr_33399 = state_33397;
(statearr_33399[(7)] = inst_33375);

(statearr_33399[(8)] = inst_33377);

(statearr_33399[(9)] = inst_33376);

return statearr_33399;
})();
var statearr_33400_33416 = state_33397__$1;
(statearr_33400_33416[(2)] = null);

(statearr_33400_33416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (2))){
var inst_33377 = (state_33397[(8)]);
var inst_33380 = (state_33397[(10)]);
var inst_33380__$1 = cljs.core.nth.call(null,inst_33377,(0),null);
var inst_33381 = cljs.core.nthnext.call(null,inst_33377,(1));
var inst_33382 = (inst_33380__$1 == null);
var inst_33383 = cljs.core.not.call(null,inst_33382);
var state_33397__$1 = (function (){var statearr_33401 = state_33397;
(statearr_33401[(10)] = inst_33380__$1);

(statearr_33401[(11)] = inst_33381);

return statearr_33401;
})();
if(inst_33383){
var statearr_33402_33417 = state_33397__$1;
(statearr_33402_33417[(1)] = (4));

} else {
var statearr_33403_33418 = state_33397__$1;
(statearr_33403_33418[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (3))){
var inst_33395 = (state_33397[(2)]);
var state_33397__$1 = state_33397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33397__$1,inst_33395);
} else {
if((state_val_33398 === (4))){
var inst_33380 = (state_33397[(10)]);
var inst_33385 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33380);
var state_33397__$1 = state_33397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33397__$1,(7),inst_33385);
} else {
if((state_val_33398 === (5))){
var inst_33391 = cljs.core.async.close_BANG_.call(null,out);
var state_33397__$1 = state_33397;
var statearr_33404_33419 = state_33397__$1;
(statearr_33404_33419[(2)] = inst_33391);

(statearr_33404_33419[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (6))){
var inst_33393 = (state_33397[(2)]);
var state_33397__$1 = state_33397;
var statearr_33405_33420 = state_33397__$1;
(statearr_33405_33420[(2)] = inst_33393);

(statearr_33405_33420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (7))){
var inst_33381 = (state_33397[(11)]);
var inst_33387 = (state_33397[(2)]);
var inst_33388 = cljs.core.async.put_BANG_.call(null,out,inst_33387);
var inst_33377 = inst_33381;
var state_33397__$1 = (function (){var statearr_33406 = state_33397;
(statearr_33406[(8)] = inst_33377);

(statearr_33406[(12)] = inst_33388);

return statearr_33406;
})();
var statearr_33407_33421 = state_33397__$1;
(statearr_33407_33421[(2)] = null);

(statearr_33407_33421[(1)] = (2));


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
});})(c__28151__auto___33415,out))
;
return ((function (switch__28089__auto__,c__28151__auto___33415,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28090__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28090__auto____0 = (function (){
var statearr_33411 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33411[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28090__auto__);

(statearr_33411[(1)] = (1));

return statearr_33411;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28090__auto____1 = (function (state_33397){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_33397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e33412){if((e33412 instanceof Object)){
var ex__28093__auto__ = e33412;
var statearr_33413_33422 = state_33397;
(statearr_33413_33422[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33423 = state_33397;
state_33397 = G__33423;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28090__auto__ = function(state_33397){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28090__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28090__auto____1.call(this,state_33397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28090__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28090__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___33415,out))
})();
var state__28153__auto__ = (function (){var statearr_33414 = f__28152__auto__.call(null);
(statearr_33414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___33415);

return statearr_33414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___33415,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__33424,p__33425){
var map__33428 = p__33424;
var map__33428__$1 = ((cljs.core.seq_QMARK_.call(null,map__33428))?cljs.core.apply.call(null,cljs.core.hash_map,map__33428):map__33428);
var opts = map__33428__$1;
var url_rewriter = cljs.core.get.call(null,map__33428__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__33429 = p__33425;
var map__33429__$1 = ((cljs.core.seq_QMARK_.call(null,map__33429))?cljs.core.apply.call(null,cljs.core.hash_map,map__33429):map__33429);
var file_msg = map__33429__$1;
var file = cljs.core.get.call(null,map__33429__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33430){
var map__33433 = p__33430;
var map__33433__$1 = ((cljs.core.seq_QMARK_.call(null,map__33433))?cljs.core.apply.call(null,cljs.core.hash_map,map__33433):map__33433);
var eval_body__$1 = cljs.core.get.call(null,map__33433__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33433__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24753__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24753__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24753__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e33434){var e = e33434;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33439,p__33440){
var map__33642 = p__33439;
var map__33642__$1 = ((cljs.core.seq_QMARK_.call(null,map__33642))?cljs.core.apply.call(null,cljs.core.hash_map,map__33642):map__33642);
var opts = map__33642__$1;
var before_jsload = cljs.core.get.call(null,map__33642__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33642__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__33642__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__33643 = p__33440;
var map__33643__$1 = ((cljs.core.seq_QMARK_.call(null,map__33643))?cljs.core.apply.call(null,cljs.core.hash_map,map__33643):map__33643);
var msg = map__33643__$1;
var files = cljs.core.get.call(null,map__33643__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files){
return (function (state_33768){
var state_val_33769 = (state_33768[(1)]);
if((state_val_33769 === (7))){
var inst_33656 = (state_33768[(7)]);
var inst_33655 = (state_33768[(8)]);
var inst_33658 = (state_33768[(9)]);
var inst_33657 = (state_33768[(10)]);
var inst_33663 = cljs.core._nth.call(null,inst_33656,inst_33658);
var inst_33664 = figwheel.client.file_reloading.eval_body.call(null,inst_33663);
var inst_33665 = (inst_33658 + (1));
var tmp33770 = inst_33656;
var tmp33771 = inst_33655;
var tmp33772 = inst_33657;
var inst_33655__$1 = tmp33771;
var inst_33656__$1 = tmp33770;
var inst_33657__$1 = tmp33772;
var inst_33658__$1 = inst_33665;
var state_33768__$1 = (function (){var statearr_33773 = state_33768;
(statearr_33773[(7)] = inst_33656__$1);

(statearr_33773[(11)] = inst_33664);

(statearr_33773[(8)] = inst_33655__$1);

(statearr_33773[(9)] = inst_33658__$1);

(statearr_33773[(10)] = inst_33657__$1);

return statearr_33773;
})();
var statearr_33774_33843 = state_33768__$1;
(statearr_33774_33843[(2)] = null);

(statearr_33774_33843[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (20))){
var inst_33704 = (state_33768[(12)]);
var inst_33700 = (state_33768[(13)]);
var inst_33705 = (state_33768[(14)]);
var inst_33707 = (state_33768[(15)]);
var inst_33701 = (state_33768[(16)]);
var inst_33710 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33712 = (function (){var all_files = inst_33700;
var files_SINGLEQUOTE_ = inst_33701;
var res_SINGLEQUOTE_ = inst_33704;
var res = inst_33705;
var files_not_loaded = inst_33707;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33704,inst_33700,inst_33705,inst_33707,inst_33701,inst_33710,state_val_33769,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files){
return (function (p__33711){
var map__33775 = p__33711;
var map__33775__$1 = ((cljs.core.seq_QMARK_.call(null,map__33775))?cljs.core.apply.call(null,cljs.core.hash_map,map__33775):map__33775);
var namespace = cljs.core.get.call(null,map__33775__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33775__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33704,inst_33700,inst_33705,inst_33707,inst_33701,inst_33710,state_val_33769,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files))
})();
var inst_33713 = cljs.core.map.call(null,inst_33712,inst_33705);
var inst_33714 = cljs.core.pr_str.call(null,inst_33713);
var inst_33715 = figwheel.client.utils.log.call(null,inst_33714);
var inst_33716 = (function (){var all_files = inst_33700;
var files_SINGLEQUOTE_ = inst_33701;
var res_SINGLEQUOTE_ = inst_33704;
var res = inst_33705;
var files_not_loaded = inst_33707;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33704,inst_33700,inst_33705,inst_33707,inst_33701,inst_33710,inst_33712,inst_33713,inst_33714,inst_33715,state_val_33769,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33704,inst_33700,inst_33705,inst_33707,inst_33701,inst_33710,inst_33712,inst_33713,inst_33714,inst_33715,state_val_33769,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files))
})();
var inst_33717 = setTimeout(inst_33716,(10));
var state_33768__$1 = (function (){var statearr_33776 = state_33768;
(statearr_33776[(17)] = inst_33715);

(statearr_33776[(18)] = inst_33710);

return statearr_33776;
})();
var statearr_33777_33844 = state_33768__$1;
(statearr_33777_33844[(2)] = inst_33717);

(statearr_33777_33844[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (27))){
var inst_33727 = (state_33768[(19)]);
var state_33768__$1 = state_33768;
var statearr_33778_33845 = state_33768__$1;
(statearr_33778_33845[(2)] = inst_33727);

(statearr_33778_33845[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (1))){
var inst_33647 = (state_33768[(20)]);
var inst_33644 = before_jsload.call(null,files);
var inst_33645 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33646 = (function (){return ((function (inst_33647,inst_33644,inst_33645,state_val_33769,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files){
return (function (p1__33435_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33435_SHARP_);
});
;})(inst_33647,inst_33644,inst_33645,state_val_33769,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files))
})();
var inst_33647__$1 = cljs.core.filter.call(null,inst_33646,files);
var inst_33648 = cljs.core.not_empty.call(null,inst_33647__$1);
var state_33768__$1 = (function (){var statearr_33779 = state_33768;
(statearr_33779[(20)] = inst_33647__$1);

(statearr_33779[(21)] = inst_33645);

(statearr_33779[(22)] = inst_33644);

return statearr_33779;
})();
if(cljs.core.truth_(inst_33648)){
var statearr_33780_33846 = state_33768__$1;
(statearr_33780_33846[(1)] = (2));

} else {
var statearr_33781_33847 = state_33768__$1;
(statearr_33781_33847[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (24))){
var state_33768__$1 = state_33768;
var statearr_33782_33848 = state_33768__$1;
(statearr_33782_33848[(2)] = null);

(statearr_33782_33848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (4))){
var inst_33692 = (state_33768[(2)]);
var inst_33693 = (function (){return ((function (inst_33692,state_val_33769,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files){
return (function (p1__33436_SHARP_){
var and__24753__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33436_SHARP_);
if(cljs.core.truth_(and__24753__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33436_SHARP_));
} else {
return and__24753__auto__;
}
});
;})(inst_33692,state_val_33769,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files))
})();
var inst_33694 = cljs.core.filter.call(null,inst_33693,files);
var state_33768__$1 = (function (){var statearr_33783 = state_33768;
(statearr_33783[(23)] = inst_33692);

(statearr_33783[(24)] = inst_33694);

return statearr_33783;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_33784_33849 = state_33768__$1;
(statearr_33784_33849[(1)] = (16));

} else {
var statearr_33785_33850 = state_33768__$1;
(statearr_33785_33850[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (15))){
var inst_33682 = (state_33768[(2)]);
var state_33768__$1 = state_33768;
var statearr_33786_33851 = state_33768__$1;
(statearr_33786_33851[(2)] = inst_33682);

(statearr_33786_33851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (21))){
var state_33768__$1 = state_33768;
var statearr_33787_33852 = state_33768__$1;
(statearr_33787_33852[(2)] = null);

(statearr_33787_33852[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (31))){
var inst_33735 = (state_33768[(25)]);
var inst_33745 = (state_33768[(2)]);
var inst_33746 = cljs.core.not_empty.call(null,inst_33735);
var state_33768__$1 = (function (){var statearr_33788 = state_33768;
(statearr_33788[(26)] = inst_33745);

return statearr_33788;
})();
if(cljs.core.truth_(inst_33746)){
var statearr_33789_33853 = state_33768__$1;
(statearr_33789_33853[(1)] = (32));

} else {
var statearr_33790_33854 = state_33768__$1;
(statearr_33790_33854[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (32))){
var inst_33735 = (state_33768[(25)]);
var inst_33748 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33735);
var inst_33749 = cljs.core.pr_str.call(null,inst_33748);
var inst_33750 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_33749)].join('');
var inst_33751 = figwheel.client.utils.log.call(null,inst_33750);
var state_33768__$1 = state_33768;
var statearr_33791_33855 = state_33768__$1;
(statearr_33791_33855[(2)] = inst_33751);

(statearr_33791_33855[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (33))){
var state_33768__$1 = state_33768;
var statearr_33792_33856 = state_33768__$1;
(statearr_33792_33856[(2)] = null);

(statearr_33792_33856[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (13))){
var inst_33668 = (state_33768[(27)]);
var inst_33672 = cljs.core.chunk_first.call(null,inst_33668);
var inst_33673 = cljs.core.chunk_rest.call(null,inst_33668);
var inst_33674 = cljs.core.count.call(null,inst_33672);
var inst_33655 = inst_33673;
var inst_33656 = inst_33672;
var inst_33657 = inst_33674;
var inst_33658 = (0);
var state_33768__$1 = (function (){var statearr_33793 = state_33768;
(statearr_33793[(7)] = inst_33656);

(statearr_33793[(8)] = inst_33655);

(statearr_33793[(9)] = inst_33658);

(statearr_33793[(10)] = inst_33657);

return statearr_33793;
})();
var statearr_33794_33857 = state_33768__$1;
(statearr_33794_33857[(2)] = null);

(statearr_33794_33857[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (22))){
var inst_33707 = (state_33768[(15)]);
var inst_33720 = (state_33768[(2)]);
var inst_33721 = cljs.core.not_empty.call(null,inst_33707);
var state_33768__$1 = (function (){var statearr_33795 = state_33768;
(statearr_33795[(28)] = inst_33720);

return statearr_33795;
})();
if(cljs.core.truth_(inst_33721)){
var statearr_33796_33858 = state_33768__$1;
(statearr_33796_33858[(1)] = (23));

} else {
var statearr_33797_33859 = state_33768__$1;
(statearr_33797_33859[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (36))){
var state_33768__$1 = state_33768;
var statearr_33798_33860 = state_33768__$1;
(statearr_33798_33860[(2)] = null);

(statearr_33798_33860[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (29))){
var inst_33734 = (state_33768[(29)]);
var inst_33739 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33734);
var inst_33740 = cljs.core.pr_str.call(null,inst_33739);
var inst_33741 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33740)].join('');
var inst_33742 = figwheel.client.utils.log.call(null,inst_33741);
var state_33768__$1 = state_33768;
var statearr_33799_33861 = state_33768__$1;
(statearr_33799_33861[(2)] = inst_33742);

(statearr_33799_33861[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (6))){
var inst_33689 = (state_33768[(2)]);
var state_33768__$1 = state_33768;
var statearr_33800_33862 = state_33768__$1;
(statearr_33800_33862[(2)] = inst_33689);

(statearr_33800_33862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (28))){
var inst_33734 = (state_33768[(29)]);
var inst_33733 = (state_33768[(2)]);
var inst_33734__$1 = cljs.core.get.call(null,inst_33733,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33735 = cljs.core.get.call(null,inst_33733,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_33736 = cljs.core.get.call(null,inst_33733,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33737 = cljs.core.not_empty.call(null,inst_33734__$1);
var state_33768__$1 = (function (){var statearr_33801 = state_33768;
(statearr_33801[(29)] = inst_33734__$1);

(statearr_33801[(30)] = inst_33736);

(statearr_33801[(25)] = inst_33735);

return statearr_33801;
})();
if(cljs.core.truth_(inst_33737)){
var statearr_33802_33863 = state_33768__$1;
(statearr_33802_33863[(1)] = (29));

} else {
var statearr_33803_33864 = state_33768__$1;
(statearr_33803_33864[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (25))){
var inst_33766 = (state_33768[(2)]);
var state_33768__$1 = state_33768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33768__$1,inst_33766);
} else {
if((state_val_33769 === (34))){
var inst_33736 = (state_33768[(30)]);
var inst_33754 = (state_33768[(2)]);
var inst_33755 = cljs.core.not_empty.call(null,inst_33736);
var state_33768__$1 = (function (){var statearr_33804 = state_33768;
(statearr_33804[(31)] = inst_33754);

return statearr_33804;
})();
if(cljs.core.truth_(inst_33755)){
var statearr_33805_33865 = state_33768__$1;
(statearr_33805_33865[(1)] = (35));

} else {
var statearr_33806_33866 = state_33768__$1;
(statearr_33806_33866[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (17))){
var inst_33694 = (state_33768[(24)]);
var state_33768__$1 = state_33768;
var statearr_33807_33867 = state_33768__$1;
(statearr_33807_33867[(2)] = inst_33694);

(statearr_33807_33867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (3))){
var state_33768__$1 = state_33768;
var statearr_33808_33868 = state_33768__$1;
(statearr_33808_33868[(2)] = null);

(statearr_33808_33868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (12))){
var inst_33685 = (state_33768[(2)]);
var state_33768__$1 = state_33768;
var statearr_33809_33869 = state_33768__$1;
(statearr_33809_33869[(2)] = inst_33685);

(statearr_33809_33869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (2))){
var inst_33647 = (state_33768[(20)]);
var inst_33654 = cljs.core.seq.call(null,inst_33647);
var inst_33655 = inst_33654;
var inst_33656 = null;
var inst_33657 = (0);
var inst_33658 = (0);
var state_33768__$1 = (function (){var statearr_33810 = state_33768;
(statearr_33810[(7)] = inst_33656);

(statearr_33810[(8)] = inst_33655);

(statearr_33810[(9)] = inst_33658);

(statearr_33810[(10)] = inst_33657);

return statearr_33810;
})();
var statearr_33811_33870 = state_33768__$1;
(statearr_33811_33870[(2)] = null);

(statearr_33811_33870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (23))){
var inst_33704 = (state_33768[(12)]);
var inst_33727 = (state_33768[(19)]);
var inst_33700 = (state_33768[(13)]);
var inst_33705 = (state_33768[(14)]);
var inst_33707 = (state_33768[(15)]);
var inst_33701 = (state_33768[(16)]);
var inst_33723 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33726 = (function (){var all_files = inst_33700;
var files_SINGLEQUOTE_ = inst_33701;
var res_SINGLEQUOTE_ = inst_33704;
var res = inst_33705;
var files_not_loaded = inst_33707;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33704,inst_33727,inst_33700,inst_33705,inst_33707,inst_33701,inst_33723,state_val_33769,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files){
return (function (p__33725){
var map__33812 = p__33725;
var map__33812__$1 = ((cljs.core.seq_QMARK_.call(null,map__33812))?cljs.core.apply.call(null,cljs.core.hash_map,map__33812):map__33812);
var meta_data = cljs.core.get.call(null,map__33812__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33704,inst_33727,inst_33700,inst_33705,inst_33707,inst_33701,inst_33723,state_val_33769,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files))
})();
var inst_33727__$1 = cljs.core.group_by.call(null,inst_33726,inst_33707);
var inst_33728 = cljs.core.seq_QMARK_.call(null,inst_33727__$1);
var state_33768__$1 = (function (){var statearr_33813 = state_33768;
(statearr_33813[(32)] = inst_33723);

(statearr_33813[(19)] = inst_33727__$1);

return statearr_33813;
})();
if(inst_33728){
var statearr_33814_33871 = state_33768__$1;
(statearr_33814_33871[(1)] = (26));

} else {
var statearr_33815_33872 = state_33768__$1;
(statearr_33815_33872[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (35))){
var inst_33736 = (state_33768[(30)]);
var inst_33757 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33736);
var inst_33758 = cljs.core.pr_str.call(null,inst_33757);
var inst_33759 = [cljs.core.str("not required: "),cljs.core.str(inst_33758)].join('');
var inst_33760 = figwheel.client.utils.log.call(null,inst_33759);
var state_33768__$1 = state_33768;
var statearr_33816_33873 = state_33768__$1;
(statearr_33816_33873[(2)] = inst_33760);

(statearr_33816_33873[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (19))){
var inst_33704 = (state_33768[(12)]);
var inst_33700 = (state_33768[(13)]);
var inst_33705 = (state_33768[(14)]);
var inst_33701 = (state_33768[(16)]);
var inst_33704__$1 = (state_33768[(2)]);
var inst_33705__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33704__$1);
var inst_33706 = (function (){var all_files = inst_33700;
var files_SINGLEQUOTE_ = inst_33701;
var res_SINGLEQUOTE_ = inst_33704__$1;
var res = inst_33705__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_33704,inst_33700,inst_33705,inst_33701,inst_33704__$1,inst_33705__$1,state_val_33769,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files){
return (function (p1__33438_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33438_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_33704,inst_33700,inst_33705,inst_33701,inst_33704__$1,inst_33705__$1,state_val_33769,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files))
})();
var inst_33707 = cljs.core.filter.call(null,inst_33706,inst_33704__$1);
var inst_33708 = cljs.core.not_empty.call(null,inst_33705__$1);
var state_33768__$1 = (function (){var statearr_33817 = state_33768;
(statearr_33817[(12)] = inst_33704__$1);

(statearr_33817[(14)] = inst_33705__$1);

(statearr_33817[(15)] = inst_33707);

return statearr_33817;
})();
if(cljs.core.truth_(inst_33708)){
var statearr_33818_33874 = state_33768__$1;
(statearr_33818_33874[(1)] = (20));

} else {
var statearr_33819_33875 = state_33768__$1;
(statearr_33819_33875[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (11))){
var state_33768__$1 = state_33768;
var statearr_33820_33876 = state_33768__$1;
(statearr_33820_33876[(2)] = null);

(statearr_33820_33876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (9))){
var inst_33687 = (state_33768[(2)]);
var state_33768__$1 = state_33768;
var statearr_33821_33877 = state_33768__$1;
(statearr_33821_33877[(2)] = inst_33687);

(statearr_33821_33877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (5))){
var inst_33658 = (state_33768[(9)]);
var inst_33657 = (state_33768[(10)]);
var inst_33660 = (inst_33658 < inst_33657);
var inst_33661 = inst_33660;
var state_33768__$1 = state_33768;
if(cljs.core.truth_(inst_33661)){
var statearr_33822_33878 = state_33768__$1;
(statearr_33822_33878[(1)] = (7));

} else {
var statearr_33823_33879 = state_33768__$1;
(statearr_33823_33879[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (14))){
var inst_33668 = (state_33768[(27)]);
var inst_33677 = cljs.core.first.call(null,inst_33668);
var inst_33678 = figwheel.client.file_reloading.eval_body.call(null,inst_33677);
var inst_33679 = cljs.core.next.call(null,inst_33668);
var inst_33655 = inst_33679;
var inst_33656 = null;
var inst_33657 = (0);
var inst_33658 = (0);
var state_33768__$1 = (function (){var statearr_33824 = state_33768;
(statearr_33824[(7)] = inst_33656);

(statearr_33824[(8)] = inst_33655);

(statearr_33824[(9)] = inst_33658);

(statearr_33824[(10)] = inst_33657);

(statearr_33824[(33)] = inst_33678);

return statearr_33824;
})();
var statearr_33825_33880 = state_33768__$1;
(statearr_33825_33880[(2)] = null);

(statearr_33825_33880[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (26))){
var inst_33727 = (state_33768[(19)]);
var inst_33730 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33727);
var state_33768__$1 = state_33768;
var statearr_33826_33881 = state_33768__$1;
(statearr_33826_33881[(2)] = inst_33730);

(statearr_33826_33881[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (16))){
var inst_33694 = (state_33768[(24)]);
var inst_33696 = (function (){var all_files = inst_33694;
return ((function (all_files,inst_33694,state_val_33769,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files){
return (function (p1__33437_SHARP_){
return cljs.core.update_in.call(null,p1__33437_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_33694,state_val_33769,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files))
})();
var inst_33697 = cljs.core.map.call(null,inst_33696,inst_33694);
var state_33768__$1 = state_33768;
var statearr_33827_33882 = state_33768__$1;
(statearr_33827_33882[(2)] = inst_33697);

(statearr_33827_33882[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (30))){
var state_33768__$1 = state_33768;
var statearr_33828_33883 = state_33768__$1;
(statearr_33828_33883[(2)] = null);

(statearr_33828_33883[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (10))){
var inst_33668 = (state_33768[(27)]);
var inst_33670 = cljs.core.chunked_seq_QMARK_.call(null,inst_33668);
var state_33768__$1 = state_33768;
if(inst_33670){
var statearr_33829_33884 = state_33768__$1;
(statearr_33829_33884[(1)] = (13));

} else {
var statearr_33830_33885 = state_33768__$1;
(statearr_33830_33885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (18))){
var inst_33700 = (state_33768[(13)]);
var inst_33701 = (state_33768[(16)]);
var inst_33700__$1 = (state_33768[(2)]);
var inst_33701__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_33700__$1);
var inst_33702 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33701__$1);
var state_33768__$1 = (function (){var statearr_33831 = state_33768;
(statearr_33831[(13)] = inst_33700__$1);

(statearr_33831[(16)] = inst_33701__$1);

return statearr_33831;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33768__$1,(19),inst_33702);
} else {
if((state_val_33769 === (37))){
var inst_33763 = (state_33768[(2)]);
var state_33768__$1 = state_33768;
var statearr_33832_33886 = state_33768__$1;
(statearr_33832_33886[(2)] = inst_33763);

(statearr_33832_33886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33769 === (8))){
var inst_33655 = (state_33768[(8)]);
var inst_33668 = (state_33768[(27)]);
var inst_33668__$1 = cljs.core.seq.call(null,inst_33655);
var state_33768__$1 = (function (){var statearr_33833 = state_33768;
(statearr_33833[(27)] = inst_33668__$1);

return statearr_33833;
})();
if(inst_33668__$1){
var statearr_33834_33887 = state_33768__$1;
(statearr_33834_33887[(1)] = (10));

} else {
var statearr_33835_33888 = state_33768__$1;
(statearr_33835_33888[(1)] = (11));

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
});})(c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files))
;
return ((function (switch__28089__auto__,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28090__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28090__auto____0 = (function (){
var statearr_33839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33839[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28090__auto__);

(statearr_33839[(1)] = (1));

return statearr_33839;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28090__auto____1 = (function (state_33768){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_33768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e33840){if((e33840 instanceof Object)){
var ex__28093__auto__ = e33840;
var statearr_33841_33889 = state_33768;
(statearr_33841_33889[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33890 = state_33768;
state_33768 = G__33890;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28090__auto__ = function(state_33768){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28090__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28090__auto____1.call(this,state_33768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28090__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28090__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files))
})();
var state__28153__auto__ = (function (){var statearr_33842 = f__28152__auto__.call(null);
(statearr_33842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_33842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__,map__33642,map__33642__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33643,map__33643__$1,msg,files))
);

return c__28151__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33893,link){
var map__33895 = p__33893;
var map__33895__$1 = ((cljs.core.seq_QMARK_.call(null,map__33895))?cljs.core.apply.call(null,cljs.core.hash_map,map__33895):map__33895);
var file = cljs.core.get.call(null,map__33895__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__33895,map__33895__$1,file){
return (function (p1__33891_SHARP_,p2__33892_SHARP_){
if(cljs.core._EQ_.call(null,p1__33891_SHARP_,p2__33892_SHARP_)){
return p1__33891_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__33895,map__33895__$1,file))
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
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33899){
var map__33900 = p__33899;
var map__33900__$1 = ((cljs.core.seq_QMARK_.call(null,map__33900))?cljs.core.apply.call(null,cljs.core.hash_map,map__33900):map__33900);
var match_length = cljs.core.get.call(null,map__33900__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33900__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33896_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33896_SHARP_);
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
var G__33902 = arguments.length;
switch (G__33902) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33904){
var map__33906 = p__33904;
var map__33906__$1 = ((cljs.core.seq_QMARK_.call(null,map__33906))?cljs.core.apply.call(null,cljs.core.hash_map,map__33906):map__33906);
var f_data = map__33906__$1;
var file = cljs.core.get.call(null,map__33906__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__33906__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__24765__auto__ = request_url;
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33907,files_msg){
var map__33929 = p__33907;
var map__33929__$1 = ((cljs.core.seq_QMARK_.call(null,map__33929))?cljs.core.apply.call(null,cljs.core.hash_map,map__33929):map__33929);
var opts = map__33929__$1;
var on_cssload = cljs.core.get.call(null,map__33929__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33930_33950 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__33931_33951 = null;
var count__33932_33952 = (0);
var i__33933_33953 = (0);
while(true){
if((i__33933_33953 < count__33932_33952)){
var f_33954 = cljs.core._nth.call(null,chunk__33931_33951,i__33933_33953);
figwheel.client.file_reloading.reload_css_file.call(null,f_33954);

var G__33955 = seq__33930_33950;
var G__33956 = chunk__33931_33951;
var G__33957 = count__33932_33952;
var G__33958 = (i__33933_33953 + (1));
seq__33930_33950 = G__33955;
chunk__33931_33951 = G__33956;
count__33932_33952 = G__33957;
i__33933_33953 = G__33958;
continue;
} else {
var temp__4423__auto___33959 = cljs.core.seq.call(null,seq__33930_33950);
if(temp__4423__auto___33959){
var seq__33930_33960__$1 = temp__4423__auto___33959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33930_33960__$1)){
var c__25550__auto___33961 = cljs.core.chunk_first.call(null,seq__33930_33960__$1);
var G__33962 = cljs.core.chunk_rest.call(null,seq__33930_33960__$1);
var G__33963 = c__25550__auto___33961;
var G__33964 = cljs.core.count.call(null,c__25550__auto___33961);
var G__33965 = (0);
seq__33930_33950 = G__33962;
chunk__33931_33951 = G__33963;
count__33932_33952 = G__33964;
i__33933_33953 = G__33965;
continue;
} else {
var f_33966 = cljs.core.first.call(null,seq__33930_33960__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33966);

var G__33967 = cljs.core.next.call(null,seq__33930_33960__$1);
var G__33968 = null;
var G__33969 = (0);
var G__33970 = (0);
seq__33930_33950 = G__33967;
chunk__33931_33951 = G__33968;
count__33932_33952 = G__33969;
i__33933_33953 = G__33970;
continue;
}
} else {
}
}
break;
}

var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__,map__33929,map__33929__$1,opts,on_cssload){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto__,map__33929,map__33929__$1,opts,on_cssload){
return (function (state_33940){
var state_val_33941 = (state_33940[(1)]);
if((state_val_33941 === (1))){
var inst_33934 = cljs.core.async.timeout.call(null,(100));
var state_33940__$1 = state_33940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33940__$1,(2),inst_33934);
} else {
if((state_val_33941 === (2))){
var inst_33936 = (state_33940[(2)]);
var inst_33937 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_33938 = on_cssload.call(null,inst_33937);
var state_33940__$1 = (function (){var statearr_33942 = state_33940;
(statearr_33942[(7)] = inst_33936);

return statearr_33942;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33940__$1,inst_33938);
} else {
return null;
}
}
});})(c__28151__auto__,map__33929,map__33929__$1,opts,on_cssload))
;
return ((function (switch__28089__auto__,c__28151__auto__,map__33929,map__33929__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28090__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28090__auto____0 = (function (){
var statearr_33946 = [null,null,null,null,null,null,null,null];
(statearr_33946[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__28090__auto__);

(statearr_33946[(1)] = (1));

return statearr_33946;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28090__auto____1 = (function (state_33940){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_33940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e33947){if((e33947 instanceof Object)){
var ex__28093__auto__ = e33947;
var statearr_33948_33971 = state_33940;
(statearr_33948_33971[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33972 = state_33940;
state_33940 = G__33972;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__28090__auto__ = function(state_33940){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28090__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28090__auto____1.call(this,state_33940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28090__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28090__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto__,map__33929,map__33929__$1,opts,on_cssload))
})();
var state__28153__auto__ = (function (){var statearr_33949 = f__28152__auto__.call(null);
(statearr_33949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_33949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__,map__33929,map__33929__$1,opts,on_cssload))
);

return c__28151__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map