// Compiled by ClojureScript 0.0-3291 {}
goog.provide('multi_client_ws.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('multi_client_ws.websockets');
if(typeof multi_client_ws.core.messages !== 'undefined'){
} else {
multi_client_ws.core.messages = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
multi_client_ws.core.message_list = (function multi_client_ws$core$message_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25519__auto__ = (function multi_client_ws$core$message_list_$_iter__31928(s__31929){
return (new cljs.core.LazySeq(null,(function (){
var s__31929__$1 = s__31929;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__31929__$1);
if(temp__4423__auto__){
var s__31929__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31929__$2)){
var c__25517__auto__ = cljs.core.chunk_first.call(null,s__31929__$2);
var size__25518__auto__ = cljs.core.count.call(null,c__25517__auto__);
var b__31931 = cljs.core.chunk_buffer.call(null,size__25518__auto__);
if((function (){var i__31930 = (0);
while(true){
if((i__31930 < size__25518__auto__)){
var vec__31934 = cljs.core._nth.call(null,c__25517__auto__,i__31930);
var i = cljs.core.nth.call(null,vec__31934,(0),null);
var message = cljs.core.nth.call(null,vec__31934,(1),null);
cljs.core.chunk_append.call(null,b__31931,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__31936 = (i__31930 + (1));
i__31930 = G__31936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31931),multi_client_ws$core$message_list_$_iter__31928.call(null,cljs.core.chunk_rest.call(null,s__31929__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31931),null);
}
} else {
var vec__31935 = cljs.core.first.call(null,s__31929__$2);
var i = cljs.core.nth.call(null,vec__31935,(0),null);
var message = cljs.core.nth.call(null,vec__31935,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),multi_client_ws$core$message_list_$_iter__31928.call(null,cljs.core.rest.call(null,s__31929__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25519__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,multi_client_ws.core.messages)));
})()], null);
});
multi_client_ws.core.value = reagent.core.atom.call(null,null);
multi_client_ws.core.message_input = (function multi_client_ws$core$message_input(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"cols","cols",-1914801295),(50),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"type in a message and press enter",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,multi_client_ws.core.value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31937_SHARP_){
return cljs.core.reset_BANG_.call(null,multi_client_ws.core.value,p1__31937_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__31938_SHARP_){
if(cljs.core._EQ_.call(null,p1__31938_SHARP_.keyCode,(187))){
multi_client_ws.websockets.send_transit_msg_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,multi_client_ws.core.value)], null));

return cljs.core.reset_BANG_.call(null,multi_client_ws.core.value,null);
} else {
return null;
}
})], null)], null);
});
});
multi_client_ws.core.home_page = (function multi_client_ws$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref.call(null,multi_client_ws.core.value)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"This is Coding Club!"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [multi_client_ws.core.message_list], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row>div.col-sm-12","div.row>div.col-sm-12",1607036239),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [multi_client_ws.core.message_input], null)], null)], null)], null);
});
multi_client_ws.core.update_messages_BANG_ = (function multi_client_ws$core$update_messages_BANG_(p__31940){
var map__31942 = p__31940;
var map__31942__$1 = ((cljs.core.seq_QMARK_.call(null,map__31942))?cljs.core.apply.call(null,cljs.core.hash_map,map__31942):map__31942);
var message = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return cljs.core.swap_BANG_.call(null,multi_client_ws.core.messages,((function (map__31942,map__31942__$1,message){
return (function (p1__31939_SHARP_){
return cljs.core.vec.call(null,cljs.core.take.call(null,(10),cljs.core.conj.call(null,p1__31939_SHARP_,message)));
});})(map__31942,map__31942__$1,message))
);
});
multi_client_ws.core.mount_components = (function multi_client_ws$core$mount_components(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return multi_client_ws.core.home_page;},new cljs.core.Symbol("multi-client-ws.core","home-page","multi-client-ws.core/home-page",978128108,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"multi-client-ws.core","multi-client-ws.core",-546349665,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src-cljs/multi_client_ws/core.cljs",16,1,30,30,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(multi_client_ws.core.home_page)?multi_client_ws.core.home_page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
multi_client_ws.core.init_BANG_ = (function multi_client_ws$core$init_BANG_(){
multi_client_ws.websockets.make_websocket_BANG_.call(null,[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/ws")].join(''),multi_client_ws.core.update_messages_BANG_);

return multi_client_ws.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map