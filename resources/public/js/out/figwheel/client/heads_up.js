// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__25805__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25805__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__33001_33009 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__33002_33010 = null;
var count__33003_33011 = (0);
var i__33004_33012 = (0);
while(true){
if((i__33004_33012 < count__33003_33011)){
var k_33013 = cljs.core._nth.call(null,chunk__33002_33010,i__33004_33012);
e.setAttribute(cljs.core.name.call(null,k_33013),cljs.core.get.call(null,attrs,k_33013));

var G__33014 = seq__33001_33009;
var G__33015 = chunk__33002_33010;
var G__33016 = count__33003_33011;
var G__33017 = (i__33004_33012 + (1));
seq__33001_33009 = G__33014;
chunk__33002_33010 = G__33015;
count__33003_33011 = G__33016;
i__33004_33012 = G__33017;
continue;
} else {
var temp__4423__auto___33018 = cljs.core.seq.call(null,seq__33001_33009);
if(temp__4423__auto___33018){
var seq__33001_33019__$1 = temp__4423__auto___33018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33001_33019__$1)){
var c__25550__auto___33020 = cljs.core.chunk_first.call(null,seq__33001_33019__$1);
var G__33021 = cljs.core.chunk_rest.call(null,seq__33001_33019__$1);
var G__33022 = c__25550__auto___33020;
var G__33023 = cljs.core.count.call(null,c__25550__auto___33020);
var G__33024 = (0);
seq__33001_33009 = G__33021;
chunk__33002_33010 = G__33022;
count__33003_33011 = G__33023;
i__33004_33012 = G__33024;
continue;
} else {
var k_33025 = cljs.core.first.call(null,seq__33001_33019__$1);
e.setAttribute(cljs.core.name.call(null,k_33025),cljs.core.get.call(null,attrs,k_33025));

var G__33026 = cljs.core.next.call(null,seq__33001_33019__$1);
var G__33027 = null;
var G__33028 = (0);
var G__33029 = (0);
seq__33001_33009 = G__33026;
chunk__33002_33010 = G__33027;
count__33003_33011 = G__33028;
i__33004_33012 = G__33029;
continue;
}
} else {
}
}
break;
}

var seq__33005_33030 = cljs.core.seq.call(null,children);
var chunk__33006_33031 = null;
var count__33007_33032 = (0);
var i__33008_33033 = (0);
while(true){
if((i__33008_33033 < count__33007_33032)){
var ch_33034 = cljs.core._nth.call(null,chunk__33006_33031,i__33008_33033);
e.appendChild(ch_33034);

var G__33035 = seq__33005_33030;
var G__33036 = chunk__33006_33031;
var G__33037 = count__33007_33032;
var G__33038 = (i__33008_33033 + (1));
seq__33005_33030 = G__33035;
chunk__33006_33031 = G__33036;
count__33007_33032 = G__33037;
i__33008_33033 = G__33038;
continue;
} else {
var temp__4423__auto___33039 = cljs.core.seq.call(null,seq__33005_33030);
if(temp__4423__auto___33039){
var seq__33005_33040__$1 = temp__4423__auto___33039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33005_33040__$1)){
var c__25550__auto___33041 = cljs.core.chunk_first.call(null,seq__33005_33040__$1);
var G__33042 = cljs.core.chunk_rest.call(null,seq__33005_33040__$1);
var G__33043 = c__25550__auto___33041;
var G__33044 = cljs.core.count.call(null,c__25550__auto___33041);
var G__33045 = (0);
seq__33005_33030 = G__33042;
chunk__33006_33031 = G__33043;
count__33007_33032 = G__33044;
i__33008_33033 = G__33045;
continue;
} else {
var ch_33046 = cljs.core.first.call(null,seq__33005_33040__$1);
e.appendChild(ch_33046);

var G__33047 = cljs.core.next.call(null,seq__33005_33040__$1);
var G__33048 = null;
var G__33049 = (0);
var G__33050 = (0);
seq__33005_33030 = G__33047;
chunk__33006_33031 = G__33048;
count__33007_33032 = G__33049;
i__33008_33033 = G__33050;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq32998){
var G__32999 = cljs.core.first.call(null,seq32998);
var seq32998__$1 = cljs.core.next.call(null,seq32998);
var G__33000 = cljs.core.first.call(null,seq32998__$1);
var seq32998__$2 = cljs.core.next.call(null,seq32998__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__32999,G__33000,seq32998__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__25660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25664__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__25660__auto__,prefer_table__25661__auto__,method_cache__25662__auto__,cached_hierarchy__25663__auto__,hierarchy__25664__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__25660__auto__,prefer_table__25661__auto__,method_cache__25662__auto__,cached_hierarchy__25663__auto__,hierarchy__25664__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25664__auto__,method_table__25660__auto__,prefer_table__25661__auto__,method_cache__25662__auto__,cached_hierarchy__25663__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_33051 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_33051.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_33051.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_33051.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_33051);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__33052,st_map){
var map__33056 = p__33052;
var map__33056__$1 = ((cljs.core.seq_QMARK_.call(null,map__33056))?cljs.core.apply.call(null,cljs.core.hash_map,map__33056):map__33056);
var container_el = cljs.core.get.call(null,map__33056__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__33056,map__33056__$1,container_el){
return (function (p__33057){
var vec__33058 = p__33057;
var k = cljs.core.nth.call(null,vec__33058,(0),null);
var v = cljs.core.nth.call(null,vec__33058,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__33056,map__33056__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__33059,dom_str){
var map__33061 = p__33059;
var map__33061__$1 = ((cljs.core.seq_QMARK_.call(null,map__33061))?cljs.core.apply.call(null,cljs.core.hash_map,map__33061):map__33061);
var c = map__33061__$1;
var content_area_el = cljs.core.get.call(null,map__33061__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__33062){
var map__33064 = p__33062;
var map__33064__$1 = ((cljs.core.seq_QMARK_.call(null,map__33064))?cljs.core.apply.call(null,cljs.core.hash_map,map__33064):map__33064);
var content_area_el = cljs.core.get.call(null,map__33064__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto__){
return (function (state_33106){
var state_val_33107 = (state_33106[(1)]);
if((state_val_33107 === (1))){
var inst_33091 = (state_33106[(7)]);
var inst_33091__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33092 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33093 = ["10px","10px","100%","68px","1.0"];
var inst_33094 = cljs.core.PersistentHashMap.fromArrays(inst_33092,inst_33093);
var inst_33095 = cljs.core.merge.call(null,inst_33094,style);
var inst_33096 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33091__$1,inst_33095);
var inst_33097 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33091__$1,msg);
var inst_33098 = cljs.core.async.timeout.call(null,(300));
var state_33106__$1 = (function (){var statearr_33108 = state_33106;
(statearr_33108[(8)] = inst_33096);

(statearr_33108[(7)] = inst_33091__$1);

(statearr_33108[(9)] = inst_33097);

return statearr_33108;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33106__$1,(2),inst_33098);
} else {
if((state_val_33107 === (2))){
var inst_33091 = (state_33106[(7)]);
var inst_33100 = (state_33106[(2)]);
var inst_33101 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_33102 = ["auto"];
var inst_33103 = cljs.core.PersistentHashMap.fromArrays(inst_33101,inst_33102);
var inst_33104 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33091,inst_33103);
var state_33106__$1 = (function (){var statearr_33109 = state_33106;
(statearr_33109[(10)] = inst_33100);

return statearr_33109;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33106__$1,inst_33104);
} else {
return null;
}
}
});})(c__28151__auto__))
;
return ((function (switch__28089__auto__,c__28151__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__28090__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__28090__auto____0 = (function (){
var statearr_33113 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33113[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__28090__auto__);

(statearr_33113[(1)] = (1));

return statearr_33113;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__28090__auto____1 = (function (state_33106){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_33106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e33114){if((e33114 instanceof Object)){
var ex__28093__auto__ = e33114;
var statearr_33115_33117 = state_33106;
(statearr_33115_33117[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33118 = state_33106;
state_33106 = G__33118;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__28090__auto__ = function(state_33106){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28090__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28090__auto____1.call(this,state_33106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__28090__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__28090__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto__))
})();
var state__28153__auto__ = (function (){var statearr_33116 = f__28152__auto__.call(null);
(statearr_33116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_33116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__))
);

return c__28151__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4421__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__33120 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__33120,(0),null);
var ln = cljs.core.nth.call(null,vec__33120,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__33123 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__33123,(0),null);
var file_line = cljs.core.nth.call(null,vec__33123,(1),null);
var file_column = cljs.core.nth.call(null,vec__33123,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__33123,file_name,file_line,file_column){
return (function (p1__33121_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__33121_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__33123,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__24765__auto__ = file_line;
if(cljs.core.truth_(or__24765__auto__)){
return or__24765__auto__;
} else {
var and__24753__auto__ = cause;
if(cljs.core.truth_(and__24753__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__24753__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__33125 = figwheel.client.heads_up.ensure_container.call(null);
var map__33125__$1 = ((cljs.core.seq_QMARK_.call(null,map__33125))?cljs.core.apply.call(null,cljs.core.hash_map,map__33125):map__33125);
var content_area_el = cljs.core.get.call(null,map__33125__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto__){
return (function (state_33172){
var state_val_33173 = (state_33172[(1)]);
if((state_val_33173 === (1))){
var inst_33155 = (state_33172[(7)]);
var inst_33155__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33156 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33157 = ["0.0"];
var inst_33158 = cljs.core.PersistentHashMap.fromArrays(inst_33156,inst_33157);
var inst_33159 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33155__$1,inst_33158);
var inst_33160 = cljs.core.async.timeout.call(null,(300));
var state_33172__$1 = (function (){var statearr_33174 = state_33172;
(statearr_33174[(7)] = inst_33155__$1);

(statearr_33174[(8)] = inst_33159);

return statearr_33174;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33172__$1,(2),inst_33160);
} else {
if((state_val_33173 === (2))){
var inst_33155 = (state_33172[(7)]);
var inst_33162 = (state_33172[(2)]);
var inst_33163 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_33164 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_33165 = cljs.core.PersistentHashMap.fromArrays(inst_33163,inst_33164);
var inst_33166 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33155,inst_33165);
var inst_33167 = cljs.core.async.timeout.call(null,(200));
var state_33172__$1 = (function (){var statearr_33175 = state_33172;
(statearr_33175[(9)] = inst_33166);

(statearr_33175[(10)] = inst_33162);

return statearr_33175;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33172__$1,(3),inst_33167);
} else {
if((state_val_33173 === (3))){
var inst_33155 = (state_33172[(7)]);
var inst_33169 = (state_33172[(2)]);
var inst_33170 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33155,"");
var state_33172__$1 = (function (){var statearr_33176 = state_33172;
(statearr_33176[(11)] = inst_33169);

return statearr_33176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33172__$1,inst_33170);
} else {
return null;
}
}
}
});})(c__28151__auto__))
;
return ((function (switch__28089__auto__,c__28151__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__28090__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__28090__auto____0 = (function (){
var statearr_33180 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33180[(0)] = figwheel$client$heads_up$clear_$_state_machine__28090__auto__);

(statearr_33180[(1)] = (1));

return statearr_33180;
});
var figwheel$client$heads_up$clear_$_state_machine__28090__auto____1 = (function (state_33172){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_33172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e33181){if((e33181 instanceof Object)){
var ex__28093__auto__ = e33181;
var statearr_33182_33184 = state_33172;
(statearr_33182_33184[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33185 = state_33172;
state_33172 = G__33185;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__28090__auto__ = function(state_33172){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__28090__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__28090__auto____1.call(this,state_33172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__28090__auto____0;
figwheel$client$heads_up$clear_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__28090__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto__))
})();
var state__28153__auto__ = (function (){var statearr_33183 = f__28152__auto__.call(null);
(statearr_33183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_33183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__))
);

return c__28151__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__){
return (function (){
var f__28152__auto__ = (function (){var switch__28089__auto__ = ((function (c__28151__auto__){
return (function (state_33217){
var state_val_33218 = (state_33217[(1)]);
if((state_val_33218 === (1))){
var inst_33207 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_33217__$1 = state_33217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33217__$1,(2),inst_33207);
} else {
if((state_val_33218 === (2))){
var inst_33209 = (state_33217[(2)]);
var inst_33210 = cljs.core.async.timeout.call(null,(400));
var state_33217__$1 = (function (){var statearr_33219 = state_33217;
(statearr_33219[(7)] = inst_33209);

return statearr_33219;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33217__$1,(3),inst_33210);
} else {
if((state_val_33218 === (3))){
var inst_33212 = (state_33217[(2)]);
var inst_33213 = figwheel.client.heads_up.clear.call(null);
var state_33217__$1 = (function (){var statearr_33220 = state_33217;
(statearr_33220[(8)] = inst_33212);

return statearr_33220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33217__$1,(4),inst_33213);
} else {
if((state_val_33218 === (4))){
var inst_33215 = (state_33217[(2)]);
var state_33217__$1 = state_33217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33217__$1,inst_33215);
} else {
return null;
}
}
}
}
});})(c__28151__auto__))
;
return ((function (switch__28089__auto__,c__28151__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__28090__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__28090__auto____0 = (function (){
var statearr_33224 = [null,null,null,null,null,null,null,null,null];
(statearr_33224[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__28090__auto__);

(statearr_33224[(1)] = (1));

return statearr_33224;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__28090__auto____1 = (function (state_33217){
while(true){
var ret_value__28091__auto__ = (function (){try{while(true){
var result__28092__auto__ = switch__28089__auto__.call(null,state_33217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28092__auto__;
}
break;
}
}catch (e33225){if((e33225 instanceof Object)){
var ex__28093__auto__ = e33225;
var statearr_33226_33228 = state_33217;
(statearr_33226_33228[(5)] = ex__28093__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33229 = state_33217;
state_33217 = G__33229;
continue;
} else {
return ret_value__28091__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__28090__auto__ = function(state_33217){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28090__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28090__auto____1.call(this,state_33217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__28090__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__28090__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__28090__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__28090__auto__;
})()
;})(switch__28089__auto__,c__28151__auto__))
})();
var state__28153__auto__ = (function (){var statearr_33227 = f__28152__auto__.call(null);
(statearr_33227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_33227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__))
);

return c__28151__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map