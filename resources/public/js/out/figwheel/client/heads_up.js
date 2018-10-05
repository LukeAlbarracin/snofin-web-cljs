// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__25811__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25811__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__33019_33027 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__33020_33028 = null;
var count__33021_33029 = (0);
var i__33022_33030 = (0);
while(true){
if((i__33022_33030 < count__33021_33029)){
var k_33031 = cljs.core._nth.call(null,chunk__33020_33028,i__33022_33030);
e.setAttribute(cljs.core.name.call(null,k_33031),cljs.core.get.call(null,attrs,k_33031));

var G__33032 = seq__33019_33027;
var G__33033 = chunk__33020_33028;
var G__33034 = count__33021_33029;
var G__33035 = (i__33022_33030 + (1));
seq__33019_33027 = G__33032;
chunk__33020_33028 = G__33033;
count__33021_33029 = G__33034;
i__33022_33030 = G__33035;
continue;
} else {
var temp__4423__auto___33036 = cljs.core.seq.call(null,seq__33019_33027);
if(temp__4423__auto___33036){
var seq__33019_33037__$1 = temp__4423__auto___33036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33019_33037__$1)){
var c__25556__auto___33038 = cljs.core.chunk_first.call(null,seq__33019_33037__$1);
var G__33039 = cljs.core.chunk_rest.call(null,seq__33019_33037__$1);
var G__33040 = c__25556__auto___33038;
var G__33041 = cljs.core.count.call(null,c__25556__auto___33038);
var G__33042 = (0);
seq__33019_33027 = G__33039;
chunk__33020_33028 = G__33040;
count__33021_33029 = G__33041;
i__33022_33030 = G__33042;
continue;
} else {
var k_33043 = cljs.core.first.call(null,seq__33019_33037__$1);
e.setAttribute(cljs.core.name.call(null,k_33043),cljs.core.get.call(null,attrs,k_33043));

var G__33044 = cljs.core.next.call(null,seq__33019_33037__$1);
var G__33045 = null;
var G__33046 = (0);
var G__33047 = (0);
seq__33019_33027 = G__33044;
chunk__33020_33028 = G__33045;
count__33021_33029 = G__33046;
i__33022_33030 = G__33047;
continue;
}
} else {
}
}
break;
}

var seq__33023_33048 = cljs.core.seq.call(null,children);
var chunk__33024_33049 = null;
var count__33025_33050 = (0);
var i__33026_33051 = (0);
while(true){
if((i__33026_33051 < count__33025_33050)){
var ch_33052 = cljs.core._nth.call(null,chunk__33024_33049,i__33026_33051);
e.appendChild(ch_33052);

var G__33053 = seq__33023_33048;
var G__33054 = chunk__33024_33049;
var G__33055 = count__33025_33050;
var G__33056 = (i__33026_33051 + (1));
seq__33023_33048 = G__33053;
chunk__33024_33049 = G__33054;
count__33025_33050 = G__33055;
i__33026_33051 = G__33056;
continue;
} else {
var temp__4423__auto___33057 = cljs.core.seq.call(null,seq__33023_33048);
if(temp__4423__auto___33057){
var seq__33023_33058__$1 = temp__4423__auto___33057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33023_33058__$1)){
var c__25556__auto___33059 = cljs.core.chunk_first.call(null,seq__33023_33058__$1);
var G__33060 = cljs.core.chunk_rest.call(null,seq__33023_33058__$1);
var G__33061 = c__25556__auto___33059;
var G__33062 = cljs.core.count.call(null,c__25556__auto___33059);
var G__33063 = (0);
seq__33023_33048 = G__33060;
chunk__33024_33049 = G__33061;
count__33025_33050 = G__33062;
i__33026_33051 = G__33063;
continue;
} else {
var ch_33064 = cljs.core.first.call(null,seq__33023_33058__$1);
e.appendChild(ch_33064);

var G__33065 = cljs.core.next.call(null,seq__33023_33058__$1);
var G__33066 = null;
var G__33067 = (0);
var G__33068 = (0);
seq__33023_33048 = G__33065;
chunk__33024_33049 = G__33066;
count__33025_33050 = G__33067;
i__33026_33051 = G__33068;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq33016){
var G__33017 = cljs.core.first.call(null,seq33016);
var seq33016__$1 = cljs.core.next.call(null,seq33016);
var G__33018 = cljs.core.first.call(null,seq33016__$1);
var seq33016__$2 = cljs.core.next.call(null,seq33016__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__33017,G__33018,seq33016__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__25666__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25667__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25668__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25669__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25670__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__25666__auto__,prefer_table__25667__auto__,method_cache__25668__auto__,cached_hierarchy__25669__auto__,hierarchy__25670__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__25666__auto__,prefer_table__25667__auto__,method_cache__25668__auto__,cached_hierarchy__25669__auto__,hierarchy__25670__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25670__auto__,method_table__25666__auto__,prefer_table__25667__auto__,method_cache__25668__auto__,cached_hierarchy__25669__auto__));
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
var el_33069 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_33069.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_33069.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_33069.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_33069);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__33070,st_map){
var map__33074 = p__33070;
var map__33074__$1 = ((cljs.core.seq_QMARK_.call(null,map__33074))?cljs.core.apply.call(null,cljs.core.hash_map,map__33074):map__33074);
var container_el = cljs.core.get.call(null,map__33074__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__33074,map__33074__$1,container_el){
return (function (p__33075){
var vec__33076 = p__33075;
var k = cljs.core.nth.call(null,vec__33076,(0),null);
var v = cljs.core.nth.call(null,vec__33076,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__33074,map__33074__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__33077,dom_str){
var map__33079 = p__33077;
var map__33079__$1 = ((cljs.core.seq_QMARK_.call(null,map__33079))?cljs.core.apply.call(null,cljs.core.hash_map,map__33079):map__33079);
var c = map__33079__$1;
var content_area_el = cljs.core.get.call(null,map__33079__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__33080){
var map__33082 = p__33080;
var map__33082__$1 = ((cljs.core.seq_QMARK_.call(null,map__33082))?cljs.core.apply.call(null,cljs.core.hash_map,map__33082):map__33082);
var content_area_el = cljs.core.get.call(null,map__33082__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__28169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto__){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto__){
return (function (state_33124){
var state_val_33125 = (state_33124[(1)]);
if((state_val_33125 === (1))){
var inst_33109 = (state_33124[(7)]);
var inst_33109__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33110 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33111 = ["10px","10px","100%","68px","1.0"];
var inst_33112 = cljs.core.PersistentHashMap.fromArrays(inst_33110,inst_33111);
var inst_33113 = cljs.core.merge.call(null,inst_33112,style);
var inst_33114 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33109__$1,inst_33113);
var inst_33115 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33109__$1,msg);
var inst_33116 = cljs.core.async.timeout.call(null,(300));
var state_33124__$1 = (function (){var statearr_33126 = state_33124;
(statearr_33126[(8)] = inst_33114);

(statearr_33126[(7)] = inst_33109__$1);

(statearr_33126[(9)] = inst_33115);

return statearr_33126;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33124__$1,(2),inst_33116);
} else {
if((state_val_33125 === (2))){
var inst_33109 = (state_33124[(7)]);
var inst_33118 = (state_33124[(2)]);
var inst_33119 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_33120 = ["auto"];
var inst_33121 = cljs.core.PersistentHashMap.fromArrays(inst_33119,inst_33120);
var inst_33122 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33109,inst_33121);
var state_33124__$1 = (function (){var statearr_33127 = state_33124;
(statearr_33127[(10)] = inst_33118);

return statearr_33127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33124__$1,inst_33122);
} else {
return null;
}
}
});})(c__28169__auto__))
;
return ((function (switch__28107__auto__,c__28169__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__28108__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__28108__auto____0 = (function (){
var statearr_33131 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33131[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__28108__auto__);

(statearr_33131[(1)] = (1));

return statearr_33131;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__28108__auto____1 = (function (state_33124){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_33124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e33132){if((e33132 instanceof Object)){
var ex__28111__auto__ = e33132;
var statearr_33133_33135 = state_33124;
(statearr_33133_33135[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33136 = state_33124;
state_33124 = G__33136;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__28108__auto__ = function(state_33124){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28108__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28108__auto____1.call(this,state_33124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__28108__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__28108__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto__))
})();
var state__28171__auto__ = (function (){var statearr_33134 = f__28170__auto__.call(null);
(statearr_33134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto__);

return statearr_33134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto__))
);

return c__28169__auto__;
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
var vec__33138 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__33138,(0),null);
var ln = cljs.core.nth.call(null,vec__33138,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__33141 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__33141,(0),null);
var file_line = cljs.core.nth.call(null,vec__33141,(1),null);
var file_column = cljs.core.nth.call(null,vec__33141,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__33141,file_name,file_line,file_column){
return (function (p1__33139_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__33139_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__33141,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__24771__auto__ = file_line;
if(cljs.core.truth_(or__24771__auto__)){
return or__24771__auto__;
} else {
var and__24759__auto__ = cause;
if(cljs.core.truth_(and__24759__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__24759__auto__;
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
var map__33143 = figwheel.client.heads_up.ensure_container.call(null);
var map__33143__$1 = ((cljs.core.seq_QMARK_.call(null,map__33143))?cljs.core.apply.call(null,cljs.core.hash_map,map__33143):map__33143);
var content_area_el = cljs.core.get.call(null,map__33143__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__28169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto__){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto__){
return (function (state_33190){
var state_val_33191 = (state_33190[(1)]);
if((state_val_33191 === (1))){
var inst_33173 = (state_33190[(7)]);
var inst_33173__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33174 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33175 = ["0.0"];
var inst_33176 = cljs.core.PersistentHashMap.fromArrays(inst_33174,inst_33175);
var inst_33177 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33173__$1,inst_33176);
var inst_33178 = cljs.core.async.timeout.call(null,(300));
var state_33190__$1 = (function (){var statearr_33192 = state_33190;
(statearr_33192[(7)] = inst_33173__$1);

(statearr_33192[(8)] = inst_33177);

return statearr_33192;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33190__$1,(2),inst_33178);
} else {
if((state_val_33191 === (2))){
var inst_33173 = (state_33190[(7)]);
var inst_33180 = (state_33190[(2)]);
var inst_33181 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_33182 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_33183 = cljs.core.PersistentHashMap.fromArrays(inst_33181,inst_33182);
var inst_33184 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33173,inst_33183);
var inst_33185 = cljs.core.async.timeout.call(null,(200));
var state_33190__$1 = (function (){var statearr_33193 = state_33190;
(statearr_33193[(9)] = inst_33184);

(statearr_33193[(10)] = inst_33180);

return statearr_33193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33190__$1,(3),inst_33185);
} else {
if((state_val_33191 === (3))){
var inst_33173 = (state_33190[(7)]);
var inst_33187 = (state_33190[(2)]);
var inst_33188 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33173,"");
var state_33190__$1 = (function (){var statearr_33194 = state_33190;
(statearr_33194[(11)] = inst_33187);

return statearr_33194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33190__$1,inst_33188);
} else {
return null;
}
}
}
});})(c__28169__auto__))
;
return ((function (switch__28107__auto__,c__28169__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__28108__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__28108__auto____0 = (function (){
var statearr_33198 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33198[(0)] = figwheel$client$heads_up$clear_$_state_machine__28108__auto__);

(statearr_33198[(1)] = (1));

return statearr_33198;
});
var figwheel$client$heads_up$clear_$_state_machine__28108__auto____1 = (function (state_33190){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_33190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e33199){if((e33199 instanceof Object)){
var ex__28111__auto__ = e33199;
var statearr_33200_33202 = state_33190;
(statearr_33200_33202[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33203 = state_33190;
state_33190 = G__33203;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__28108__auto__ = function(state_33190){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__28108__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__28108__auto____1.call(this,state_33190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__28108__auto____0;
figwheel$client$heads_up$clear_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__28108__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto__))
})();
var state__28171__auto__ = (function (){var statearr_33201 = f__28170__auto__.call(null);
(statearr_33201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto__);

return statearr_33201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto__))
);

return c__28169__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__28169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28169__auto__){
return (function (){
var f__28170__auto__ = (function (){var switch__28107__auto__ = ((function (c__28169__auto__){
return (function (state_33235){
var state_val_33236 = (state_33235[(1)]);
if((state_val_33236 === (1))){
var inst_33225 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_33235__$1 = state_33235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33235__$1,(2),inst_33225);
} else {
if((state_val_33236 === (2))){
var inst_33227 = (state_33235[(2)]);
var inst_33228 = cljs.core.async.timeout.call(null,(400));
var state_33235__$1 = (function (){var statearr_33237 = state_33235;
(statearr_33237[(7)] = inst_33227);

return statearr_33237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33235__$1,(3),inst_33228);
} else {
if((state_val_33236 === (3))){
var inst_33230 = (state_33235[(2)]);
var inst_33231 = figwheel.client.heads_up.clear.call(null);
var state_33235__$1 = (function (){var statearr_33238 = state_33235;
(statearr_33238[(8)] = inst_33230);

return statearr_33238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33235__$1,(4),inst_33231);
} else {
if((state_val_33236 === (4))){
var inst_33233 = (state_33235[(2)]);
var state_33235__$1 = state_33235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33235__$1,inst_33233);
} else {
return null;
}
}
}
}
});})(c__28169__auto__))
;
return ((function (switch__28107__auto__,c__28169__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__28108__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__28108__auto____0 = (function (){
var statearr_33242 = [null,null,null,null,null,null,null,null,null];
(statearr_33242[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__28108__auto__);

(statearr_33242[(1)] = (1));

return statearr_33242;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__28108__auto____1 = (function (state_33235){
while(true){
var ret_value__28109__auto__ = (function (){try{while(true){
var result__28110__auto__ = switch__28107__auto__.call(null,state_33235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28110__auto__;
}
break;
}
}catch (e33243){if((e33243 instanceof Object)){
var ex__28111__auto__ = e33243;
var statearr_33244_33246 = state_33235;
(statearr_33244_33246[(5)] = ex__28111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33247 = state_33235;
state_33235 = G__33247;
continue;
} else {
return ret_value__28109__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__28108__auto__ = function(state_33235){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28108__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28108__auto____1.call(this,state_33235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__28108__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__28108__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__28108__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__28108__auto__;
})()
;})(switch__28107__auto__,c__28169__auto__))
})();
var state__28171__auto__ = (function (){var statearr_33245 = f__28170__auto__.call(null);
(statearr_33245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28169__auto__);

return statearr_33245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28171__auto__);
});})(c__28169__auto__))
);

return c__28169__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map