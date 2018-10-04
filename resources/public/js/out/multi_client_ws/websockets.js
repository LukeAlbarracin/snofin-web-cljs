// Compiled by ClojureScript 0.0-3291 {}
goog.provide('multi_client_ws.websockets');
goog.require('cljs.core');
goog.require('cognitect.transit');
if(typeof multi_client_ws.websockets.ws_chan !== 'undefined'){
} else {
multi_client_ws.websockets.ws_chan = cljs.core.atom.call(null,null);
}
multi_client_ws.websockets.json_reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
multi_client_ws.websockets.json_writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
multi_client_ws.websockets.receive_transit_msg_BANG_ = (function multi_client_ws$websockets$receive_transit_msg_BANG_(update_fn){
return (function (msg){
return update_fn.call(null,cognitect.transit.read.call(null,multi_client_ws.websockets.json_reader,msg.data));
});
});
multi_client_ws.websockets.send_transit_msg_BANG_ = (function multi_client_ws$websockets$send_transit_msg_BANG_(msg){
if(cljs.core.truth_(cljs.core.deref.call(null,multi_client_ws.websockets.ws_chan))){
return cljs.core.deref.call(null,multi_client_ws.websockets.ws_chan).send(cognitect.transit.write.call(null,multi_client_ws.websockets.json_writer,msg));
} else {
throw (new Error("Websocket is not available!"));
}
});
multi_client_ws.websockets.make_websocket_BANG_ = (function multi_client_ws$websockets$make_websocket_BANG_(url,receive_handler){
cljs.core.println.call(null,"attempting to connect websocket");

var temp__4421__auto__ = (new WebSocket(url));
if(cljs.core.truth_(temp__4421__auto__)){
var chan = temp__4421__auto__;
chan.onmessage = multi_client_ws.websockets.receive_transit_msg_BANG_.call(null,receive_handler);

cljs.core.reset_BANG_.call(null,multi_client_ws.websockets.ws_chan,chan);

return cljs.core.println.call(null,"Websocket connection established with: ",url);
} else {
throw (new Error("Websocket connection failed!"));
}
});

//# sourceMappingURL=websockets.js.map