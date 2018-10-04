// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32351__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32352__i = 0, G__32352__a = new Array(arguments.length -  0);
while (G__32352__i < G__32352__a.length) {G__32352__a[G__32352__i] = arguments[G__32352__i + 0]; ++G__32352__i;}
  args = new cljs.core.IndexedSeq(G__32352__a,0);
} 
return G__32351__delegate.call(this,args);};
G__32351.cljs$lang$maxFixedArity = 0;
G__32351.cljs$lang$applyTo = (function (arglist__32353){
var args = cljs.core.seq(arglist__32353);
return G__32351__delegate(args);
});
G__32351.cljs$core$IFn$_invoke$arity$variadic = G__32351__delegate;
return G__32351;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32354){
var map__32356 = p__32354;
var map__32356__$1 = ((cljs.core.seq_QMARK_.call(null,map__32356))?cljs.core.apply.call(null,cljs.core.hash_map,map__32356):map__32356);
var message = cljs.core.get.call(null,map__32356__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32356__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24765__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24753__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24753__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24753__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28151__auto___32485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___32485,ch){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___32485,ch){
return (function (state_32459){
var state_val_32460 = (state_32459[(1)]);
if((state_val_32460 === (7))){
var inst_32455 = (state_32459[(2)]);
var state_32459__$1 = state_32459;
var statearr_32461_32486 = state_32459__$1;
(statearr_32461_32486[(2)] = inst_32455);

(statearr_32461_32486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (1))){
var state_32459__$1 = state_32459;
var statearr_32462_32487 = state_32459__$1;
(statearr_32462_32487[(2)] = null);

(statearr_32462_32487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (4))){
var inst_32423 = (state_32459[(7)]);
var inst_32423__$1 = (state_32459[(2)]);
var state_32459__$1 = (function (){var statearr_32463 = state_32459;
(statearr_32463[(7)] = inst_32423__$1);

return statearr_32463;
})();
if(cljs.core.truth_(inst_32423__$1)){
var statearr_32464_32488 = state_32459__$1;
(statearr_32464_32488[(1)] = (5));

} else {
var statearr_32465_32489 = state_32459__$1;
(statearr_32465_32489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (13))){
var state_32459__$1 = state_32459;
var statearr_32466_32490 = state_32459__$1;
(statearr_32466_32490[(2)] = null);

(statearr_32466_32490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (6))){
var state_32459__$1 = state_32459;
var statearr_32467_32491 = state_32459__$1;
(statearr_32467_32491[(2)] = null);

(statearr_32467_32491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (3))){
var inst_32457 = (state_32459[(2)]);
var state_32459__$1 = state_32459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32459__$1,inst_32457);
} else {
if((state_val_32460 === (12))){
var inst_32430 = (state_32459[(8)]);
var inst_32443 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32430);
var inst_32444 = cljs.core.first.call(null,inst_32443);
var inst_32445 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32444);
var inst_32446 = console.warn("Figwheel: Not loading code with warnings - ",inst_32445);
var state_32459__$1 = state_32459;
var statearr_32468_32492 = state_32459__$1;
(statearr_32468_32492[(2)] = inst_32446);

(statearr_32468_32492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (2))){
var state_32459__$1 = state_32459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32459__$1,(4),ch);
} else {
if((state_val_32460 === (11))){
var inst_32439 = (state_32459[(2)]);
var state_32459__$1 = state_32459;
var statearr_32469_32493 = state_32459__$1;
(statearr_32469_32493[(2)] = inst_32439);

(statearr_32469_32493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (9))){
var inst_32429 = (state_32459[(9)]);
var inst_32441 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32429,opts);
var state_32459__$1 = state_32459;
if(cljs.core.truth_(inst_32441)){
var statearr_32470_32494 = state_32459__$1;
(statearr_32470_32494[(1)] = (12));

} else {
var statearr_32471_32495 = state_32459__$1;
(statearr_32471_32495[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (5))){
var inst_32423 = (state_32459[(7)]);
var inst_32429 = (state_32459[(9)]);
var inst_32425 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32426 = (new cljs.core.PersistentArrayMap(null,2,inst_32425,null));
var inst_32427 = (new cljs.core.PersistentHashSet(null,inst_32426,null));
var inst_32428 = figwheel.client.focus_msgs.call(null,inst_32427,inst_32423);
var inst_32429__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32428);
var inst_32430 = cljs.core.first.call(null,inst_32428);
var inst_32431 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32429__$1,opts);
var state_32459__$1 = (function (){var statearr_32472 = state_32459;
(statearr_32472[(8)] = inst_32430);

(statearr_32472[(9)] = inst_32429__$1);

return statearr_32472;
})();
if(cljs.core.truth_(inst_32431)){
var statearr_32473_32496 = state_32459__$1;
(statearr_32473_32496[(1)] = (8));

} else {
var statearr_32474_32497 = state_32459__$1;
(statearr_32474_32497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (14))){
var inst_32449 = (state_32459[(2)]);
var state_32459__$1 = state_32459;
var statearr_32475_32498 = state_32459__$1;
(statearr_32475_32498[(2)] = inst_32449);

(statearr_32475_32498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (10))){
var inst_32451 = (state_32459[(2)]);
var state_32459__$1 = (function (){var statearr_32476 = state_32459;
(statearr_32476[(10)] = inst_32451);

return statearr_32476;
})();
var statearr_32477_32499 = state_32459__$1;
(statearr_32477_32499[(2)] = null);

(statearr_32477_32499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (8))){
var inst_32430 = (state_32459[(8)]);
var inst_32433 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32434 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32430);
var inst_32435 = cljs.core.async.timeout.call(null,(1000));
var inst_32436 = [inst_32434,inst_32435];
var inst_32437 = (new cljs.core.PersistentVector(null,2,(5),inst_32433,inst_32436,null));
var state_32459__$1 = state_32459;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32459__$1,(11),inst_32437);
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
});})(c__28151__auto___32485,ch))
;
return ((function (switch__28089__auto__,c__28151__auto___32485,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28090__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28090__auto____0 = (function (){
var statearr_32481 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32481[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28090__auto__);

(statearr_32481[(1)] = (1));

return statearr_32481;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28090__auto____1 = (function (state_32459){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_32459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e32482){if((e32482 instanceof Object)){
var ex__28093__auto__ = e32482;
var statearr_32483_32500 = state_32459;
(statearr_32483_32500[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32501 = state_32459;
state_32459 = G__32501;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28090__auto__ = function(state_32459){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28090__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28090__auto____1.call(this,state_32459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28090__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28090__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___32485,ch))
})();
var state__28153__auto__ = (function (){var statearr_32484 = f__28152__auto__.call(null);
(statearr_32484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___32485);

return statearr_32484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___32485,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32502_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32502_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_32509 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32509){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_32507 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_32508 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32507,_STAR_print_newline_STAR_32508,base_path_32509){
return (function() { 
var G__32510__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32510 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32511__i = 0, G__32511__a = new Array(arguments.length -  0);
while (G__32511__i < G__32511__a.length) {G__32511__a[G__32511__i] = arguments[G__32511__i + 0]; ++G__32511__i;}
  args = new cljs.core.IndexedSeq(G__32511__a,0);
} 
return G__32510__delegate.call(this,args);};
G__32510.cljs$lang$maxFixedArity = 0;
G__32510.cljs$lang$applyTo = (function (arglist__32512){
var args = cljs.core.seq(arglist__32512);
return G__32510__delegate(args);
});
G__32510.cljs$core$IFn$_invoke$arity$variadic = G__32510__delegate;
return G__32510;
})()
;})(_STAR_print_fn_STAR_32507,_STAR_print_newline_STAR_32508,base_path_32509))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32508;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32507;
}}catch (e32506){if((e32506 instanceof Error)){
var e = e32506;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32509], null));
} else {
var e = e32506;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32509))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32513){
var map__32518 = p__32513;
var map__32518__$1 = ((cljs.core.seq_QMARK_.call(null,map__32518))?cljs.core.apply.call(null,cljs.core.hash_map,map__32518):map__32518);
var opts = map__32518__$1;
var build_id = cljs.core.get.call(null,map__32518__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32518,map__32518__$1,opts,build_id){
return (function (p__32519){
var vec__32520 = p__32519;
var map__32521 = cljs.core.nth.call(null,vec__32520,(0),null);
var map__32521__$1 = ((cljs.core.seq_QMARK_.call(null,map__32521))?cljs.core.apply.call(null,cljs.core.hash_map,map__32521):map__32521);
var msg = map__32521__$1;
var msg_name = cljs.core.get.call(null,map__32521__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32520,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__32520,map__32521,map__32521__$1,msg,msg_name,_,map__32518,map__32518__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32520,map__32521,map__32521__$1,msg,msg_name,_,map__32518,map__32518__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32518,map__32518__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32525){
var vec__32526 = p__32525;
var map__32527 = cljs.core.nth.call(null,vec__32526,(0),null);
var map__32527__$1 = ((cljs.core.seq_QMARK_.call(null,map__32527))?cljs.core.apply.call(null,cljs.core.hash_map,map__32527):map__32527);
var msg = map__32527__$1;
var msg_name = cljs.core.get.call(null,map__32527__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32526,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32528){
var map__32536 = p__32528;
var map__32536__$1 = ((cljs.core.seq_QMARK_.call(null,map__32536))?cljs.core.apply.call(null,cljs.core.hash_map,map__32536):map__32536);
var on_compile_warning = cljs.core.get.call(null,map__32536__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32536__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32536,map__32536__$1,on_compile_warning,on_compile_fail){
return (function (p__32537){
var vec__32538 = p__32537;
var map__32539 = cljs.core.nth.call(null,vec__32538,(0),null);
var map__32539__$1 = ((cljs.core.seq_QMARK_.call(null,map__32539))?cljs.core.apply.call(null,cljs.core.hash_map,map__32539):map__32539);
var msg = map__32539__$1;
var msg_name = cljs.core.get.call(null,map__32539__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32538,(1));
var pred__32540 = cljs.core._EQ_;
var expr__32541 = msg_name;
if(cljs.core.truth_(pred__32540.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32541))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32540.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32541))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32536,map__32536__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto__,msg_hist,msg_names,msg){
return (function (state_32742){
var state_val_32743 = (state_32742[(1)]);
if((state_val_32743 === (7))){
var inst_32676 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32744_32785 = state_32742__$1;
(statearr_32744_32785[(2)] = inst_32676);

(statearr_32744_32785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (20))){
var inst_32704 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32742__$1 = state_32742;
if(cljs.core.truth_(inst_32704)){
var statearr_32745_32786 = state_32742__$1;
(statearr_32745_32786[(1)] = (22));

} else {
var statearr_32746_32787 = state_32742__$1;
(statearr_32746_32787[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (27))){
var inst_32716 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32717 = figwheel.client.heads_up.display_warning.call(null,inst_32716);
var state_32742__$1 = state_32742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32742__$1,(30),inst_32717);
} else {
if((state_val_32743 === (1))){
var inst_32664 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32742__$1 = state_32742;
if(cljs.core.truth_(inst_32664)){
var statearr_32747_32788 = state_32742__$1;
(statearr_32747_32788[(1)] = (2));

} else {
var statearr_32748_32789 = state_32742__$1;
(statearr_32748_32789[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (24))){
var inst_32732 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32749_32790 = state_32742__$1;
(statearr_32749_32790[(2)] = inst_32732);

(statearr_32749_32790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (4))){
var inst_32740 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32742__$1,inst_32740);
} else {
if((state_val_32743 === (15))){
var inst_32692 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32693 = figwheel.client.format_messages.call(null,inst_32692);
var inst_32694 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32695 = figwheel.client.heads_up.display_error.call(null,inst_32693,inst_32694);
var state_32742__$1 = state_32742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32742__$1,(18),inst_32695);
} else {
if((state_val_32743 === (21))){
var inst_32734 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32750_32791 = state_32742__$1;
(statearr_32750_32791[(2)] = inst_32734);

(statearr_32750_32791[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (31))){
var inst_32723 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32742__$1 = state_32742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32742__$1,(34),inst_32723);
} else {
if((state_val_32743 === (32))){
var state_32742__$1 = state_32742;
var statearr_32751_32792 = state_32742__$1;
(statearr_32751_32792[(2)] = null);

(statearr_32751_32792[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (33))){
var inst_32728 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32752_32793 = state_32742__$1;
(statearr_32752_32793[(2)] = inst_32728);

(statearr_32752_32793[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (13))){
var inst_32682 = (state_32742[(2)]);
var inst_32683 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32684 = figwheel.client.format_messages.call(null,inst_32683);
var inst_32685 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32686 = figwheel.client.heads_up.display_error.call(null,inst_32684,inst_32685);
var state_32742__$1 = (function (){var statearr_32753 = state_32742;
(statearr_32753[(7)] = inst_32682);

return statearr_32753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32742__$1,(14),inst_32686);
} else {
if((state_val_32743 === (22))){
var inst_32706 = figwheel.client.heads_up.clear.call(null);
var state_32742__$1 = state_32742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32742__$1,(25),inst_32706);
} else {
if((state_val_32743 === (29))){
var inst_32730 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32754_32794 = state_32742__$1;
(statearr_32754_32794[(2)] = inst_32730);

(statearr_32754_32794[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (6))){
var inst_32672 = figwheel.client.heads_up.clear.call(null);
var state_32742__$1 = state_32742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32742__$1,(9),inst_32672);
} else {
if((state_val_32743 === (28))){
var inst_32721 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32742__$1 = state_32742;
if(cljs.core.truth_(inst_32721)){
var statearr_32755_32795 = state_32742__$1;
(statearr_32755_32795[(1)] = (31));

} else {
var statearr_32756_32796 = state_32742__$1;
(statearr_32756_32796[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (25))){
var inst_32708 = (state_32742[(2)]);
var inst_32709 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32710 = figwheel.client.heads_up.display_warning.call(null,inst_32709);
var state_32742__$1 = (function (){var statearr_32757 = state_32742;
(statearr_32757[(8)] = inst_32708);

return statearr_32757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32742__$1,(26),inst_32710);
} else {
if((state_val_32743 === (34))){
var inst_32725 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32758_32797 = state_32742__$1;
(statearr_32758_32797[(2)] = inst_32725);

(statearr_32758_32797[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (17))){
var inst_32736 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32759_32798 = state_32742__$1;
(statearr_32759_32798[(2)] = inst_32736);

(statearr_32759_32798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (3))){
var inst_32678 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32742__$1 = state_32742;
if(cljs.core.truth_(inst_32678)){
var statearr_32760_32799 = state_32742__$1;
(statearr_32760_32799[(1)] = (10));

} else {
var statearr_32761_32800 = state_32742__$1;
(statearr_32761_32800[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (12))){
var inst_32738 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32762_32801 = state_32742__$1;
(statearr_32762_32801[(2)] = inst_32738);

(statearr_32762_32801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (2))){
var inst_32666 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32742__$1 = state_32742;
if(cljs.core.truth_(inst_32666)){
var statearr_32763_32802 = state_32742__$1;
(statearr_32763_32802[(1)] = (5));

} else {
var statearr_32764_32803 = state_32742__$1;
(statearr_32764_32803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (23))){
var inst_32714 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32742__$1 = state_32742;
if(cljs.core.truth_(inst_32714)){
var statearr_32765_32804 = state_32742__$1;
(statearr_32765_32804[(1)] = (27));

} else {
var statearr_32766_32805 = state_32742__$1;
(statearr_32766_32805[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (19))){
var inst_32701 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32702 = figwheel.client.heads_up.append_message.call(null,inst_32701);
var state_32742__$1 = state_32742;
var statearr_32767_32806 = state_32742__$1;
(statearr_32767_32806[(2)] = inst_32702);

(statearr_32767_32806[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (11))){
var inst_32690 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32742__$1 = state_32742;
if(cljs.core.truth_(inst_32690)){
var statearr_32768_32807 = state_32742__$1;
(statearr_32768_32807[(1)] = (15));

} else {
var statearr_32769_32808 = state_32742__$1;
(statearr_32769_32808[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (9))){
var inst_32674 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32770_32809 = state_32742__$1;
(statearr_32770_32809[(2)] = inst_32674);

(statearr_32770_32809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (5))){
var inst_32668 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32742__$1 = state_32742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32742__$1,(8),inst_32668);
} else {
if((state_val_32743 === (14))){
var inst_32688 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32771_32810 = state_32742__$1;
(statearr_32771_32810[(2)] = inst_32688);

(statearr_32771_32810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (26))){
var inst_32712 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32772_32811 = state_32742__$1;
(statearr_32772_32811[(2)] = inst_32712);

(statearr_32772_32811[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (16))){
var inst_32699 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32742__$1 = state_32742;
if(cljs.core.truth_(inst_32699)){
var statearr_32773_32812 = state_32742__$1;
(statearr_32773_32812[(1)] = (19));

} else {
var statearr_32774_32813 = state_32742__$1;
(statearr_32774_32813[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (30))){
var inst_32719 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32775_32814 = state_32742__$1;
(statearr_32775_32814[(2)] = inst_32719);

(statearr_32775_32814[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (10))){
var inst_32680 = figwheel.client.heads_up.clear.call(null);
var state_32742__$1 = state_32742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32742__$1,(13),inst_32680);
} else {
if((state_val_32743 === (18))){
var inst_32697 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32776_32815 = state_32742__$1;
(statearr_32776_32815[(2)] = inst_32697);

(statearr_32776_32815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (8))){
var inst_32670 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32777_32816 = state_32742__$1;
(statearr_32777_32816[(2)] = inst_32670);

(statearr_32777_32816[(1)] = (7));


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
});})(c__28151__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28089__auto__,c__28151__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28090__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28090__auto____0 = (function (){
var statearr_32781 = [null,null,null,null,null,null,null,null,null];
(statearr_32781[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28090__auto__);

(statearr_32781[(1)] = (1));

return statearr_32781;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28090__auto____1 = (function (state_32742){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_32742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e32782){if((e32782 instanceof Object)){
var ex__28093__auto__ = e32782;
var statearr_32783_32817 = state_32742;
(statearr_32783_32817[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32818 = state_32742;
state_32742 = G__32818;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28090__auto__ = function(state_32742){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28090__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28090__auto____1.call(this,state_32742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28090__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28090__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto__,msg_hist,msg_names,msg))
})();
var state__28153__auto__ = (function (){var statearr_32784 = f__28152__auto__.call(null);
(statearr_32784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_32784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__,msg_hist,msg_names,msg))
);

return c__28151__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28151__auto___32881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___32881,ch){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto___32881,ch){
return (function (state_32864){
var state_val_32865 = (state_32864[(1)]);
if((state_val_32865 === (1))){
var state_32864__$1 = state_32864;
var statearr_32866_32882 = state_32864__$1;
(statearr_32866_32882[(2)] = null);

(statearr_32866_32882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (2))){
var state_32864__$1 = state_32864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32864__$1,(4),ch);
} else {
if((state_val_32865 === (3))){
var inst_32862 = (state_32864[(2)]);
var state_32864__$1 = state_32864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32864__$1,inst_32862);
} else {
if((state_val_32865 === (4))){
var inst_32852 = (state_32864[(7)]);
var inst_32852__$1 = (state_32864[(2)]);
var state_32864__$1 = (function (){var statearr_32867 = state_32864;
(statearr_32867[(7)] = inst_32852__$1);

return statearr_32867;
})();
if(cljs.core.truth_(inst_32852__$1)){
var statearr_32868_32883 = state_32864__$1;
(statearr_32868_32883[(1)] = (5));

} else {
var statearr_32869_32884 = state_32864__$1;
(statearr_32869_32884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (5))){
var inst_32852 = (state_32864[(7)]);
var inst_32854 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32852);
var state_32864__$1 = state_32864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32864__$1,(8),inst_32854);
} else {
if((state_val_32865 === (6))){
var state_32864__$1 = state_32864;
var statearr_32870_32885 = state_32864__$1;
(statearr_32870_32885[(2)] = null);

(statearr_32870_32885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (7))){
var inst_32860 = (state_32864[(2)]);
var state_32864__$1 = state_32864;
var statearr_32871_32886 = state_32864__$1;
(statearr_32871_32886[(2)] = inst_32860);

(statearr_32871_32886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (8))){
var inst_32856 = (state_32864[(2)]);
var state_32864__$1 = (function (){var statearr_32872 = state_32864;
(statearr_32872[(8)] = inst_32856);

return statearr_32872;
})();
var statearr_32873_32887 = state_32864__$1;
(statearr_32873_32887[(2)] = null);

(statearr_32873_32887[(1)] = (2));


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
});})(c__28151__auto___32881,ch))
;
return ((function (switch__28089__auto__,c__28151__auto___32881,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28090__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28090__auto____0 = (function (){
var statearr_32877 = [null,null,null,null,null,null,null,null,null];
(statearr_32877[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28090__auto__);

(statearr_32877[(1)] = (1));

return statearr_32877;
});
var figwheel$client$heads_up_plugin_$_state_machine__28090__auto____1 = (function (state_32864){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_32864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e32878){if((e32878 instanceof Object)){
var ex__28093__auto__ = e32878;
var statearr_32879_32888 = state_32864;
(statearr_32879_32888[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32889 = state_32864;
state_32864 = G__32889;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28090__auto__ = function(state_32864){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28090__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28090__auto____1.call(this,state_32864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28090__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28090__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto___32881,ch))
})();
var state__28153__auto__ = (function (){var statearr_32880 = f__28152__auto__.call(null);
(statearr_32880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___32881);

return statearr_32880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___32881,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto__){
return (function (state_32910){
var state_val_32911 = (state_32910[(1)]);
if((state_val_32911 === (1))){
var inst_32905 = cljs.core.async.timeout.call(null,(3000));
var state_32910__$1 = state_32910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32910__$1,(2),inst_32905);
} else {
if((state_val_32911 === (2))){
var inst_32907 = (state_32910[(2)]);
var inst_32908 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32910__$1 = (function (){var statearr_32912 = state_32910;
(statearr_32912[(7)] = inst_32907);

return statearr_32912;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32910__$1,inst_32908);
} else {
return null;
}
}
});})(c__28151__auto__))
;
return ((function (switch__28089__auto__,c__28151__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28090__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28090__auto____0 = (function (){
var statearr_32916 = [null,null,null,null,null,null,null,null];
(statearr_32916[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28090__auto__);

(statearr_32916[(1)] = (1));

return statearr_32916;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28090__auto____1 = (function (state_32910){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_32910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e32917){if((e32917 instanceof Object)){
var ex__28093__auto__ = e32917;
var statearr_32918_32920 = state_32910;
(statearr_32918_32920[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32921 = state_32910;
state_32910 = G__32921;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28090__auto__ = function(state_32910){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28090__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28090__auto____1.call(this,state_32910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28090__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28090__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto__))
})();
var state__28153__auto__ = (function (){var statearr_32919 = f__28152__auto__.call(null);
(statearr_32919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_32919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__))
);

return c__28151__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32922){
var map__32928 = p__32922;
var map__32928__$1 = ((cljs.core.seq_QMARK_.call(null,map__32928))?cljs.core.apply.call(null,cljs.core.hash_map,map__32928):map__32928);
var ed = map__32928__$1;
var formatted_exception = cljs.core.get.call(null,map__32928__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32928__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32928__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32929_32933 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32930_32934 = null;
var count__32931_32935 = (0);
var i__32932_32936 = (0);
while(true){
if((i__32932_32936 < count__32931_32935)){
var msg_32937 = cljs.core._nth.call(null,chunk__32930_32934,i__32932_32936);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32937);

var G__32938 = seq__32929_32933;
var G__32939 = chunk__32930_32934;
var G__32940 = count__32931_32935;
var G__32941 = (i__32932_32936 + (1));
seq__32929_32933 = G__32938;
chunk__32930_32934 = G__32939;
count__32931_32935 = G__32940;
i__32932_32936 = G__32941;
continue;
} else {
var temp__4423__auto___32942 = cljs.core.seq.call(null,seq__32929_32933);
if(temp__4423__auto___32942){
var seq__32929_32943__$1 = temp__4423__auto___32942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32929_32943__$1)){
var c__25550__auto___32944 = cljs.core.chunk_first.call(null,seq__32929_32943__$1);
var G__32945 = cljs.core.chunk_rest.call(null,seq__32929_32943__$1);
var G__32946 = c__25550__auto___32944;
var G__32947 = cljs.core.count.call(null,c__25550__auto___32944);
var G__32948 = (0);
seq__32929_32933 = G__32945;
chunk__32930_32934 = G__32946;
count__32931_32935 = G__32947;
i__32932_32936 = G__32948;
continue;
} else {
var msg_32949 = cljs.core.first.call(null,seq__32929_32943__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32949);

var G__32950 = cljs.core.next.call(null,seq__32929_32943__$1);
var G__32951 = null;
var G__32952 = (0);
var G__32953 = (0);
seq__32929_32933 = G__32950;
chunk__32930_32934 = G__32951;
count__32931_32935 = G__32952;
i__32932_32936 = G__32953;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32954){
var map__32956 = p__32954;
var map__32956__$1 = ((cljs.core.seq_QMARK_.call(null,map__32956))?cljs.core.apply.call(null,cljs.core.hash_map,map__32956):map__32956);
var w = map__32956__$1;
var message = cljs.core.get.call(null,map__32956__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24753__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24753__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24753__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32963 = cljs.core.seq.call(null,plugins);
var chunk__32964 = null;
var count__32965 = (0);
var i__32966 = (0);
while(true){
if((i__32966 < count__32965)){
var vec__32967 = cljs.core._nth.call(null,chunk__32964,i__32966);
var k = cljs.core.nth.call(null,vec__32967,(0),null);
var plugin = cljs.core.nth.call(null,vec__32967,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32969 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32963,chunk__32964,count__32965,i__32966,pl_32969,vec__32967,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32969.call(null,msg_hist);
});})(seq__32963,chunk__32964,count__32965,i__32966,pl_32969,vec__32967,k,plugin))
);
} else {
}

var G__32970 = seq__32963;
var G__32971 = chunk__32964;
var G__32972 = count__32965;
var G__32973 = (i__32966 + (1));
seq__32963 = G__32970;
chunk__32964 = G__32971;
count__32965 = G__32972;
i__32966 = G__32973;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__32963);
if(temp__4423__auto__){
var seq__32963__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32963__$1)){
var c__25550__auto__ = cljs.core.chunk_first.call(null,seq__32963__$1);
var G__32974 = cljs.core.chunk_rest.call(null,seq__32963__$1);
var G__32975 = c__25550__auto__;
var G__32976 = cljs.core.count.call(null,c__25550__auto__);
var G__32977 = (0);
seq__32963 = G__32974;
chunk__32964 = G__32975;
count__32965 = G__32976;
i__32966 = G__32977;
continue;
} else {
var vec__32968 = cljs.core.first.call(null,seq__32963__$1);
var k = cljs.core.nth.call(null,vec__32968,(0),null);
var plugin = cljs.core.nth.call(null,vec__32968,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32978 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32963,chunk__32964,count__32965,i__32966,pl_32978,vec__32968,k,plugin,seq__32963__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32978.call(null,msg_hist);
});})(seq__32963,chunk__32964,count__32965,i__32966,pl_32978,vec__32968,k,plugin,seq__32963__$1,temp__4423__auto__))
);
} else {
}

var G__32979 = cljs.core.next.call(null,seq__32963__$1);
var G__32980 = null;
var G__32981 = (0);
var G__32982 = (0);
seq__32963 = G__32979;
chunk__32964 = G__32980;
count__32965 = G__32981;
i__32966 = G__32982;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__32984 = arguments.length;
switch (G__32984) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__25805__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25805__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32987){
var map__32988 = p__32987;
var map__32988__$1 = ((cljs.core.seq_QMARK_.call(null,map__32988))?cljs.core.apply.call(null,cljs.core.hash_map,map__32988):map__32988);
var opts = map__32988__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32986){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32986));
});

//# sourceMappingURL=client.js.map