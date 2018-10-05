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
var G__32369__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32370__i = 0, G__32370__a = new Array(arguments.length -  0);
while (G__32370__i < G__32370__a.length) {G__32370__a[G__32370__i] = arguments[G__32370__i + 0]; ++G__32370__i;}
  args = new cljs.core.IndexedSeq(G__32370__a,0);
} 
return G__32369__delegate.call(this,args);};
G__32369.cljs$lang$maxFixedArity = 0;
G__32369.cljs$lang$applyTo = (function (arglist__32371){
var args = cljs.core.seq(arglist__32371);
return G__32369__delegate(args);
});
G__32369.cljs$core$IFn$_invoke$arity$variadic = G__32369__delegate;
return G__32369;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32372){
var map__32374 = p__32372;
var map__32374__$1 = ((cljs.core.seq_QMARK_.call(null,map__32374))?cljs.core.apply.call(null,cljs.core.hash_map,map__32374):map__32374);
var message = cljs.core.get.call(null,map__32374__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32374__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24771__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24771__auto__)){
return or__24771__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24759__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24759__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24759__auto__;
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
var c__28169__auto___32503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___32503,ch){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___32503,ch){
return (function (state_32477){
var state_val_32478 = (state_32477[(1)]);
if((state_val_32478 === (7))){
var inst_32473 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32479_32504 = state_32477__$1;
(statearr_32479_32504[(2)] = inst_32473);

(statearr_32479_32504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (1))){
var state_32477__$1 = state_32477;
var statearr_32480_32505 = state_32477__$1;
(statearr_32480_32505[(2)] = null);

(statearr_32480_32505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (4))){
var inst_32441 = (state_32477[(7)]);
var inst_32441__$1 = (state_32477[(2)]);
var state_32477__$1 = (function (){var statearr_32481 = state_32477;
(statearr_32481[(7)] = inst_32441__$1);

return statearr_32481;
})();
if(cljs.core.truth_(inst_32441__$1)){
var statearr_32482_32506 = state_32477__$1;
(statearr_32482_32506[(1)] = (5));

} else {
var statearr_32483_32507 = state_32477__$1;
(statearr_32483_32507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (13))){
var state_32477__$1 = state_32477;
var statearr_32484_32508 = state_32477__$1;
(statearr_32484_32508[(2)] = null);

(statearr_32484_32508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (6))){
var state_32477__$1 = state_32477;
var statearr_32485_32509 = state_32477__$1;
(statearr_32485_32509[(2)] = null);

(statearr_32485_32509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (3))){
var inst_32475 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32477__$1,inst_32475);
} else {
if((state_val_32478 === (12))){
var inst_32448 = (state_32477[(8)]);
var inst_32461 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32448);
var inst_32462 = cljs.core.first.call(null,inst_32461);
var inst_32463 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32462);
var inst_32464 = console.warn("Figwheel: Not loading code with warnings - ",inst_32463);
var state_32477__$1 = state_32477;
var statearr_32486_32510 = state_32477__$1;
(statearr_32486_32510[(2)] = inst_32464);

(statearr_32486_32510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (2))){
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32477__$1,(4),ch);
} else {
if((state_val_32478 === (11))){
var inst_32457 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32487_32511 = state_32477__$1;
(statearr_32487_32511[(2)] = inst_32457);

(statearr_32487_32511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (9))){
var inst_32447 = (state_32477[(9)]);
var inst_32459 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32447,opts);
var state_32477__$1 = state_32477;
if(cljs.core.truth_(inst_32459)){
var statearr_32488_32512 = state_32477__$1;
(statearr_32488_32512[(1)] = (12));

} else {
var statearr_32489_32513 = state_32477__$1;
(statearr_32489_32513[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (5))){
var inst_32441 = (state_32477[(7)]);
var inst_32447 = (state_32477[(9)]);
var inst_32443 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32444 = (new cljs.core.PersistentArrayMap(null,2,inst_32443,null));
var inst_32445 = (new cljs.core.PersistentHashSet(null,inst_32444,null));
var inst_32446 = figwheel.client.focus_msgs.call(null,inst_32445,inst_32441);
var inst_32447__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32446);
var inst_32448 = cljs.core.first.call(null,inst_32446);
var inst_32449 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32447__$1,opts);
var state_32477__$1 = (function (){var statearr_32490 = state_32477;
(statearr_32490[(8)] = inst_32448);

(statearr_32490[(9)] = inst_32447__$1);

return statearr_32490;
})();
if(cljs.core.truth_(inst_32449)){
var statearr_32491_32514 = state_32477__$1;
(statearr_32491_32514[(1)] = (8));

} else {
var statearr_32492_32515 = state_32477__$1;
(statearr_32492_32515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (14))){
var inst_32467 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32493_32516 = state_32477__$1;
(statearr_32493_32516[(2)] = inst_32467);

(statearr_32493_32516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (10))){
var inst_32469 = (state_32477[(2)]);
var state_32477__$1 = (function (){var statearr_32494 = state_32477;
(statearr_32494[(10)] = inst_32469);

return statearr_32494;
})();
var statearr_32495_32517 = state_32477__$1;
(statearr_32495_32517[(2)] = null);

(statearr_32495_32517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (8))){
var inst_32448 = (state_32477[(8)]);
var inst_32451 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32452 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32448);
var inst_32453 = cljs.core.async.timeout.call(null,(1000));
var inst_32454 = [inst_32452,inst_32453];
var inst_32455 = (new cljs.core.PersistentVector(null,2,(5),inst_32451,inst_32454,null));
var state_32477__$1 = state_32477;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32477__$1,(11),inst_32455);
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
});})(c__28169__auto___32503,ch))
;
return ((function (switch__28107__auto__,c__28169__auto___32503,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28108__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28108__auto____0 = (function (){
var statearr_32499 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32499[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28108__auto__);

(statearr_32499[(1)] = (1));

return statearr_32499;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28108__auto____1 = (function (state_32477){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_32477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e32500){if((e32500 instanceof Object)){
var ex__28111__auto__ = e32500;
var statearr_32501_32518 = state_32477;
(statearr_32501_32518[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32519 = state_32477;
state_32477 = G__32519;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28108__auto__ = function(state_32477){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28108__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28108__auto____1.call(this,state_32477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28108__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28108__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___32503,ch))
})();
var state__28171__auto__ = (function (){var statearr_32502 = f__28170__auto__.call(null);
(statearr_32502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___32503);

return statearr_32502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___32503,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32520_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32520_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_32527 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32527){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_32525 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_32526 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32525,_STAR_print_newline_STAR_32526,base_path_32527){
return (function() { 
var G__32528__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32529__i = 0, G__32529__a = new Array(arguments.length -  0);
while (G__32529__i < G__32529__a.length) {G__32529__a[G__32529__i] = arguments[G__32529__i + 0]; ++G__32529__i;}
  args = new cljs.core.IndexedSeq(G__32529__a,0);
} 
return G__32528__delegate.call(this,args);};
G__32528.cljs$lang$maxFixedArity = 0;
G__32528.cljs$lang$applyTo = (function (arglist__32530){
var args = cljs.core.seq(arglist__32530);
return G__32528__delegate(args);
});
G__32528.cljs$core$IFn$_invoke$arity$variadic = G__32528__delegate;
return G__32528;
})()
;})(_STAR_print_fn_STAR_32525,_STAR_print_newline_STAR_32526,base_path_32527))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32526;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32525;
}}catch (e32524){if((e32524 instanceof Error)){
var e = e32524;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32527], null));
} else {
var e = e32524;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32527))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32531){
var map__32536 = p__32531;
var map__32536__$1 = ((cljs.core.seq_QMARK_.call(null,map__32536))?cljs.core.apply.call(null,cljs.core.hash_map,map__32536):map__32536);
var opts = map__32536__$1;
var build_id = cljs.core.get.call(null,map__32536__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32536,map__32536__$1,opts,build_id){
return (function (p__32537){
var vec__32538 = p__32537;
var map__32539 = cljs.core.nth.call(null,vec__32538,(0),null);
var map__32539__$1 = ((cljs.core.seq_QMARK_.call(null,map__32539))?cljs.core.apply.call(null,cljs.core.hash_map,map__32539):map__32539);
var msg = map__32539__$1;
var msg_name = cljs.core.get.call(null,map__32539__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32538,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__32538,map__32539,map__32539__$1,msg,msg_name,_,map__32536,map__32536__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32538,map__32539,map__32539__$1,msg,msg_name,_,map__32536,map__32536__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32536,map__32536__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32543){
var vec__32544 = p__32543;
var map__32545 = cljs.core.nth.call(null,vec__32544,(0),null);
var map__32545__$1 = ((cljs.core.seq_QMARK_.call(null,map__32545))?cljs.core.apply.call(null,cljs.core.hash_map,map__32545):map__32545);
var msg = map__32545__$1;
var msg_name = cljs.core.get.call(null,map__32545__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32544,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32546){
var map__32554 = p__32546;
var map__32554__$1 = ((cljs.core.seq_QMARK_.call(null,map__32554))?cljs.core.apply.call(null,cljs.core.hash_map,map__32554):map__32554);
var on_compile_warning = cljs.core.get.call(null,map__32554__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32554__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32554,map__32554__$1,on_compile_warning,on_compile_fail){
return (function (p__32555){
var vec__32556 = p__32555;
var map__32557 = cljs.core.nth.call(null,vec__32556,(0),null);
var map__32557__$1 = ((cljs.core.seq_QMARK_.call(null,map__32557))?cljs.core.apply.call(null,cljs.core.hash_map,map__32557):map__32557);
var msg = map__32557__$1;
var msg_name = cljs.core.get.call(null,map__32557__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32556,(1));
var pred__32558 = cljs.core._EQ_;
var expr__32559 = msg_name;
if(cljs.core.truth_(pred__32558.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32559))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32558.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32559))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32554,map__32554__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto__,msg_hist,msg_names,msg){
return (function (state_32760){
var state_val_32761 = (state_32760[(1)]);
if((state_val_32761 === (7))){
var inst_32694 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32762_32803 = state_32760__$1;
(statearr_32762_32803[(2)] = inst_32694);

(statearr_32762_32803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (20))){
var inst_32722 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32760__$1 = state_32760;
if(cljs.core.truth_(inst_32722)){
var statearr_32763_32804 = state_32760__$1;
(statearr_32763_32804[(1)] = (22));

} else {
var statearr_32764_32805 = state_32760__$1;
(statearr_32764_32805[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (27))){
var inst_32734 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32735 = figwheel.client.heads_up.display_warning.call(null,inst_32734);
var state_32760__$1 = state_32760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32760__$1,(30),inst_32735);
} else {
if((state_val_32761 === (1))){
var inst_32682 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32760__$1 = state_32760;
if(cljs.core.truth_(inst_32682)){
var statearr_32765_32806 = state_32760__$1;
(statearr_32765_32806[(1)] = (2));

} else {
var statearr_32766_32807 = state_32760__$1;
(statearr_32766_32807[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (24))){
var inst_32750 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32767_32808 = state_32760__$1;
(statearr_32767_32808[(2)] = inst_32750);

(statearr_32767_32808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (4))){
var inst_32758 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32760__$1,inst_32758);
} else {
if((state_val_32761 === (15))){
var inst_32710 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32711 = figwheel.client.format_messages.call(null,inst_32710);
var inst_32712 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32713 = figwheel.client.heads_up.display_error.call(null,inst_32711,inst_32712);
var state_32760__$1 = state_32760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32760__$1,(18),inst_32713);
} else {
if((state_val_32761 === (21))){
var inst_32752 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32768_32809 = state_32760__$1;
(statearr_32768_32809[(2)] = inst_32752);

(statearr_32768_32809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (31))){
var inst_32741 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32760__$1 = state_32760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32760__$1,(34),inst_32741);
} else {
if((state_val_32761 === (32))){
var state_32760__$1 = state_32760;
var statearr_32769_32810 = state_32760__$1;
(statearr_32769_32810[(2)] = null);

(statearr_32769_32810[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (33))){
var inst_32746 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32770_32811 = state_32760__$1;
(statearr_32770_32811[(2)] = inst_32746);

(statearr_32770_32811[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (13))){
var inst_32700 = (state_32760[(2)]);
var inst_32701 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32702 = figwheel.client.format_messages.call(null,inst_32701);
var inst_32703 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32704 = figwheel.client.heads_up.display_error.call(null,inst_32702,inst_32703);
var state_32760__$1 = (function (){var statearr_32771 = state_32760;
(statearr_32771[(7)] = inst_32700);

return statearr_32771;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32760__$1,(14),inst_32704);
} else {
if((state_val_32761 === (22))){
var inst_32724 = figwheel.client.heads_up.clear.call(null);
var state_32760__$1 = state_32760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32760__$1,(25),inst_32724);
} else {
if((state_val_32761 === (29))){
var inst_32748 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32772_32812 = state_32760__$1;
(statearr_32772_32812[(2)] = inst_32748);

(statearr_32772_32812[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (6))){
var inst_32690 = figwheel.client.heads_up.clear.call(null);
var state_32760__$1 = state_32760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32760__$1,(9),inst_32690);
} else {
if((state_val_32761 === (28))){
var inst_32739 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32760__$1 = state_32760;
if(cljs.core.truth_(inst_32739)){
var statearr_32773_32813 = state_32760__$1;
(statearr_32773_32813[(1)] = (31));

} else {
var statearr_32774_32814 = state_32760__$1;
(statearr_32774_32814[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (25))){
var inst_32726 = (state_32760[(2)]);
var inst_32727 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32728 = figwheel.client.heads_up.display_warning.call(null,inst_32727);
var state_32760__$1 = (function (){var statearr_32775 = state_32760;
(statearr_32775[(8)] = inst_32726);

return statearr_32775;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32760__$1,(26),inst_32728);
} else {
if((state_val_32761 === (34))){
var inst_32743 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32776_32815 = state_32760__$1;
(statearr_32776_32815[(2)] = inst_32743);

(statearr_32776_32815[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (17))){
var inst_32754 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32777_32816 = state_32760__$1;
(statearr_32777_32816[(2)] = inst_32754);

(statearr_32777_32816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (3))){
var inst_32696 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32760__$1 = state_32760;
if(cljs.core.truth_(inst_32696)){
var statearr_32778_32817 = state_32760__$1;
(statearr_32778_32817[(1)] = (10));

} else {
var statearr_32779_32818 = state_32760__$1;
(statearr_32779_32818[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (12))){
var inst_32756 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32780_32819 = state_32760__$1;
(statearr_32780_32819[(2)] = inst_32756);

(statearr_32780_32819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (2))){
var inst_32684 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32760__$1 = state_32760;
if(cljs.core.truth_(inst_32684)){
var statearr_32781_32820 = state_32760__$1;
(statearr_32781_32820[(1)] = (5));

} else {
var statearr_32782_32821 = state_32760__$1;
(statearr_32782_32821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (23))){
var inst_32732 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32760__$1 = state_32760;
if(cljs.core.truth_(inst_32732)){
var statearr_32783_32822 = state_32760__$1;
(statearr_32783_32822[(1)] = (27));

} else {
var statearr_32784_32823 = state_32760__$1;
(statearr_32784_32823[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (19))){
var inst_32719 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32720 = figwheel.client.heads_up.append_message.call(null,inst_32719);
var state_32760__$1 = state_32760;
var statearr_32785_32824 = state_32760__$1;
(statearr_32785_32824[(2)] = inst_32720);

(statearr_32785_32824[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (11))){
var inst_32708 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32760__$1 = state_32760;
if(cljs.core.truth_(inst_32708)){
var statearr_32786_32825 = state_32760__$1;
(statearr_32786_32825[(1)] = (15));

} else {
var statearr_32787_32826 = state_32760__$1;
(statearr_32787_32826[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (9))){
var inst_32692 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32788_32827 = state_32760__$1;
(statearr_32788_32827[(2)] = inst_32692);

(statearr_32788_32827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (5))){
var inst_32686 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32760__$1 = state_32760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32760__$1,(8),inst_32686);
} else {
if((state_val_32761 === (14))){
var inst_32706 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32789_32828 = state_32760__$1;
(statearr_32789_32828[(2)] = inst_32706);

(statearr_32789_32828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (26))){
var inst_32730 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32790_32829 = state_32760__$1;
(statearr_32790_32829[(2)] = inst_32730);

(statearr_32790_32829[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (16))){
var inst_32717 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32760__$1 = state_32760;
if(cljs.core.truth_(inst_32717)){
var statearr_32791_32830 = state_32760__$1;
(statearr_32791_32830[(1)] = (19));

} else {
var statearr_32792_32831 = state_32760__$1;
(statearr_32792_32831[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (30))){
var inst_32737 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32793_32832 = state_32760__$1;
(statearr_32793_32832[(2)] = inst_32737);

(statearr_32793_32832[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (10))){
var inst_32698 = figwheel.client.heads_up.clear.call(null);
var state_32760__$1 = state_32760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32760__$1,(13),inst_32698);
} else {
if((state_val_32761 === (18))){
var inst_32715 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32794_32833 = state_32760__$1;
(statearr_32794_32833[(2)] = inst_32715);

(statearr_32794_32833[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (8))){
var inst_32688 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32795_32834 = state_32760__$1;
(statearr_32795_32834[(2)] = inst_32688);

(statearr_32795_32834[(1)] = (7));


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
});})(c__28169__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28107__auto__,c__28169__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28108__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28108__auto____0 = (function (){
var statearr_32799 = [null,null,null,null,null,null,null,null,null];
(statearr_32799[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28108__auto__);

(statearr_32799[(1)] = (1));

return statearr_32799;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28108__auto____1 = (function (state_32760){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_32760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e32800){if((e32800 instanceof Object)){
var ex__28111__auto__ = e32800;
var statearr_32801_32835 = state_32760;
(statearr_32801_32835[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32836 = state_32760;
state_32760 = G__32836;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28108__auto__ = function(state_32760){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28108__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28108__auto____1.call(this,state_32760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28108__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28108__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto__,msg_hist,msg_names,msg))
})();
var state__28171__auto__ = (function (){var statearr_32802 = f__28170__auto__.call(null);
(statearr_32802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto__);

return statearr_32802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto__,msg_hist,msg_names,msg))
);

return c__28169__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28169__auto___32899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto___32899,ch){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto___32899,ch){
return (function (state_32882){
var state_val_32883 = (state_32882[(1)]);
if((state_val_32883 === (1))){
var state_32882__$1 = state_32882;
var statearr_32884_32900 = state_32882__$1;
(statearr_32884_32900[(2)] = null);

(statearr_32884_32900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (2))){
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32882__$1,(4),ch);
} else {
if((state_val_32883 === (3))){
var inst_32880 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32882__$1,inst_32880);
} else {
if((state_val_32883 === (4))){
var inst_32870 = (state_32882[(7)]);
var inst_32870__$1 = (state_32882[(2)]);
var state_32882__$1 = (function (){var statearr_32885 = state_32882;
(statearr_32885[(7)] = inst_32870__$1);

return statearr_32885;
})();
if(cljs.core.truth_(inst_32870__$1)){
var statearr_32886_32901 = state_32882__$1;
(statearr_32886_32901[(1)] = (5));

} else {
var statearr_32887_32902 = state_32882__$1;
(statearr_32887_32902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (5))){
var inst_32870 = (state_32882[(7)]);
var inst_32872 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32870);
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32882__$1,(8),inst_32872);
} else {
if((state_val_32883 === (6))){
var state_32882__$1 = state_32882;
var statearr_32888_32903 = state_32882__$1;
(statearr_32888_32903[(2)] = null);

(statearr_32888_32903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (7))){
var inst_32878 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32889_32904 = state_32882__$1;
(statearr_32889_32904[(2)] = inst_32878);

(statearr_32889_32904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (8))){
var inst_32874 = (state_32882[(2)]);
var state_32882__$1 = (function (){var statearr_32890 = state_32882;
(statearr_32890[(8)] = inst_32874);

return statearr_32890;
})();
var statearr_32891_32905 = state_32882__$1;
(statearr_32891_32905[(2)] = null);

(statearr_32891_32905[(1)] = (2));


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
});})(c__28169__auto___32899,ch))
;
return ((function (switch__28107__auto__,c__28169__auto___32899,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28108__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28108__auto____0 = (function (){
var statearr_32895 = [null,null,null,null,null,null,null,null,null];
(statearr_32895[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28108__auto__);

(statearr_32895[(1)] = (1));

return statearr_32895;
});
var figwheel$client$heads_up_plugin_$_state_machine__28108__auto____1 = (function (state_32882){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_32882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e32896){if((e32896 instanceof Object)){
var ex__28111__auto__ = e32896;
var statearr_32897_32906 = state_32882;
(statearr_32897_32906[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32907 = state_32882;
state_32882 = G__32907;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28108__auto__ = function(state_32882){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28108__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28108__auto____1.call(this,state_32882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28108__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28108__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto___32899,ch))
})();
var state__28171__auto__ = (function (){var statearr_32898 = f__28170__auto__.call(null);
(statearr_32898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto___32899);

return statearr_32898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto___32899,ch))
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
var c__28169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto__){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto__){
return (function (state_32928){
var state_val_32929 = (state_32928[(1)]);
if((state_val_32929 === (1))){
var inst_32923 = cljs.core.async.timeout.call(null,(3000));
var state_32928__$1 = state_32928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32928__$1,(2),inst_32923);
} else {
if((state_val_32929 === (2))){
var inst_32925 = (state_32928[(2)]);
var inst_32926 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32928__$1 = (function (){var statearr_32930 = state_32928;
(statearr_32930[(7)] = inst_32925);

return statearr_32930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32928__$1,inst_32926);
} else {
return null;
}
}
});})(c__28169__auto__))
;
return ((function (switch__28107__auto__,c__28169__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28108__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28108__auto____0 = (function (){
var statearr_32934 = [null,null,null,null,null,null,null,null];
(statearr_32934[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28108__auto__);

(statearr_32934[(1)] = (1));

return statearr_32934;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28108__auto____1 = (function (state_32928){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_32928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e32935){if((e32935 instanceof Object)){
var ex__28111__auto__ = e32935;
var statearr_32936_32938 = state_32928;
(statearr_32936_32938[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32939 = state_32928;
state_32928 = G__32939;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28108__auto__ = function(state_32928){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28108__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28108__auto____1.call(this,state_32928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28108__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28108__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto__))
})();
var state__28171__auto__ = (function (){var statearr_32937 = f__28170__auto__.call(null);
(statearr_32937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto__);

return statearr_32937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto__))
);

return c__28169__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32940){
var map__32946 = p__32940;
var map__32946__$1 = ((cljs.core.seq_QMARK_.call(null,map__32946))?cljs.core.apply.call(null,cljs.core.hash_map,map__32946):map__32946);
var ed = map__32946__$1;
var formatted_exception = cljs.core.get.call(null,map__32946__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32946__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32946__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32947_32951 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32948_32952 = null;
var count__32949_32953 = (0);
var i__32950_32954 = (0);
while(true){
if((i__32950_32954 < count__32949_32953)){
var msg_32955 = cljs.core._nth.call(null,chunk__32948_32952,i__32950_32954);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32955);

var G__32956 = seq__32947_32951;
var G__32957 = chunk__32948_32952;
var G__32958 = count__32949_32953;
var G__32959 = (i__32950_32954 + (1));
seq__32947_32951 = G__32956;
chunk__32948_32952 = G__32957;
count__32949_32953 = G__32958;
i__32950_32954 = G__32959;
continue;
} else {
var temp__4423__auto___32960 = cljs.core.seq.call(null,seq__32947_32951);
if(temp__4423__auto___32960){
var seq__32947_32961__$1 = temp__4423__auto___32960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32947_32961__$1)){
var c__25556__auto___32962 = cljs.core.chunk_first.call(null,seq__32947_32961__$1);
var G__32963 = cljs.core.chunk_rest.call(null,seq__32947_32961__$1);
var G__32964 = c__25556__auto___32962;
var G__32965 = cljs.core.count.call(null,c__25556__auto___32962);
var G__32966 = (0);
seq__32947_32951 = G__32963;
chunk__32948_32952 = G__32964;
count__32949_32953 = G__32965;
i__32950_32954 = G__32966;
continue;
} else {
var msg_32967 = cljs.core.first.call(null,seq__32947_32961__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32967);

var G__32968 = cljs.core.next.call(null,seq__32947_32961__$1);
var G__32969 = null;
var G__32970 = (0);
var G__32971 = (0);
seq__32947_32951 = G__32968;
chunk__32948_32952 = G__32969;
count__32949_32953 = G__32970;
i__32950_32954 = G__32971;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32972){
var map__32974 = p__32972;
var map__32974__$1 = ((cljs.core.seq_QMARK_.call(null,map__32974))?cljs.core.apply.call(null,cljs.core.hash_map,map__32974):map__32974);
var w = map__32974__$1;
var message = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__24759__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24759__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24759__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32981 = cljs.core.seq.call(null,plugins);
var chunk__32982 = null;
var count__32983 = (0);
var i__32984 = (0);
while(true){
if((i__32984 < count__32983)){
var vec__32985 = cljs.core._nth.call(null,chunk__32982,i__32984);
var k = cljs.core.nth.call(null,vec__32985,(0),null);
var plugin = cljs.core.nth.call(null,vec__32985,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32987 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32981,chunk__32982,count__32983,i__32984,pl_32987,vec__32985,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32987.call(null,msg_hist);
});})(seq__32981,chunk__32982,count__32983,i__32984,pl_32987,vec__32985,k,plugin))
);
} else {
}

var G__32988 = seq__32981;
var G__32989 = chunk__32982;
var G__32990 = count__32983;
var G__32991 = (i__32984 + (1));
seq__32981 = G__32988;
chunk__32982 = G__32989;
count__32983 = G__32990;
i__32984 = G__32991;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__32981);
if(temp__4423__auto__){
var seq__32981__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32981__$1)){
var c__25556__auto__ = cljs.core.chunk_first.call(null,seq__32981__$1);
var G__32992 = cljs.core.chunk_rest.call(null,seq__32981__$1);
var G__32993 = c__25556__auto__;
var G__32994 = cljs.core.count.call(null,c__25556__auto__);
var G__32995 = (0);
seq__32981 = G__32992;
chunk__32982 = G__32993;
count__32983 = G__32994;
i__32984 = G__32995;
continue;
} else {
var vec__32986 = cljs.core.first.call(null,seq__32981__$1);
var k = cljs.core.nth.call(null,vec__32986,(0),null);
var plugin = cljs.core.nth.call(null,vec__32986,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32996 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32981,chunk__32982,count__32983,i__32984,pl_32996,vec__32986,k,plugin,seq__32981__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32996.call(null,msg_hist);
});})(seq__32981,chunk__32982,count__32983,i__32984,pl_32996,vec__32986,k,plugin,seq__32981__$1,temp__4423__auto__))
);
} else {
}

var G__32997 = cljs.core.next.call(null,seq__32981__$1);
var G__32998 = null;
var G__32999 = (0);
var G__33000 = (0);
seq__32981 = G__32997;
chunk__32982 = G__32998;
count__32983 = G__32999;
i__32984 = G__33000;
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
var G__33002 = arguments.length;
switch (G__33002) {
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
var argseq__25811__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25811__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33005){
var map__33006 = p__33005;
var map__33006__$1 = ((cljs.core.seq_QMARK_.call(null,map__33006))?cljs.core.apply.call(null,cljs.core.hash_map,map__33006):map__33006);
var opts = map__33006__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33004){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33004));
});

//# sourceMappingURL=client.js.map