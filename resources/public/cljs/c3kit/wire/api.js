// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.api');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.wire.apic');
goog.require('c3kit.wire.flash');
goog.require('c3kit.wire.flashc');
goog.require('c3kit.wire.js');
c3kit.wire.api.config = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"version","version",425292698),"undefined",new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973),c3kit.wire.js.redirect_BANG_,new cljs.core.Keyword(null,"ajax-prep-fn","ajax-prep-fn",1814062099),null,new cljs.core.Keyword(null,"ajax-on-unsuccessful-response","ajax-on-unsuccessful-response",-334902909),null,new cljs.core.Keyword(null,"ws-csrf-token","ws-csrf-token",-1873854868),null,new cljs.core.Keyword(null,"ws-on-reconnected","ws-on-reconnected",2030895392),null,new cljs.core.Keyword(null,"ws-uri-path","ws-uri-path",132764557),"/user/websocket"], null));
c3kit.wire.api.configure_BANG_ = (function c3kit$wire$api$configure_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___16502 = arguments.length;
var i__5750__auto___16504 = (0);
while(true){
if((i__5750__auto___16504 < len__5749__auto___16502)){
args__5755__auto__.push((arguments[i__5750__auto___16504]));

var G__16505 = (i__5750__auto___16504 + (1));
i__5750__auto___16504 = G__16505;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return c3kit.wire.api.configure_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(c3kit.wire.api.configure_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (options){
return cljs.core.swap_BANG_.call(null,c3kit.wire.api.config,cljs.core.merge,c3kit.apron.corec.__GT_options.call(null,options));
}));

(c3kit.wire.api.configure_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.wire.api.configure_BANG_.cljs$lang$applyTo = (function (seq16478){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16478));
}));

c3kit.wire.api.handle_payload = (function c3kit$wire$api$handle_payload(handler,payload){
try{return handler.call(null,payload);
}catch (e16499){var e = e16499;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.api",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AJAX handler error"], null);
}),null)),null,(65),null);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.api",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null);
}),null)),null,(66),null);

return c3kit.wire.flash.add_error_BANG_.call(null,"Oh no!  I choked on some data.  Doh!");
}});
c3kit.wire.api.redirect = (function c3kit$wire$api$redirect(uri){
var G__16508 = cljs.core.deref.call(null,c3kit.wire.api.config);
var G__16508__$1 = (((G__16508 == null))?null:new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973).cljs$core$IFn$_invoke$arity$1(G__16508));
if((G__16508__$1 == null)){
return null;
} else {
return c3kit.apron.corec.invoke.call(null,G__16508__$1,uri);
}
});
c3kit.wire.api.refresh_link = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.comp.call(null,c3kit.wire.js.redirect_BANG_,c3kit.wire.js.page_href)], null),"refresh"], null);
c3kit.wire.api.server_down_flash = c3kit.wire.flashc.create.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Server Maintenance - please wait a moment as we try to reconnect.",true);
c3kit.wire.api.new_version_flash = c3kit.wire.flashc.create.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),(new cljs.core.List(null,"There is a newer version of this app.  Please ",(new cljs.core.List(null,c3kit.wire.api.refresh_link,(new cljs.core.List(null,".",null,(1),null)),(2),null)),(3),null)),true);
c3kit.wire.api.forbidden_flash = c3kit.wire.flashc.create.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),(new cljs.core.List(null,"403 - Forbidden.  Please ",(new cljs.core.List(null,c3kit.wire.api.refresh_link,(new cljs.core.List(null,".",null,(1),null)),(2),null)),(3),null)),true);
c3kit.wire.api.new_version_BANG_ = (function c3kit$wire$api$new_version_BANG_(version){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.api",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["new version: ",version,", was: ",new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config))], null);
}),null)),null,(67),null);

return c3kit.wire.flash.add_BANG_.call(null,c3kit.wire.api.new_version_flash);
});
c3kit.wire.api.handle_api_response = (function c3kit$wire$api$handle_api_response(raw_response,p__16541){
var map__16543 = p__16541;
var map__16543__$1 = cljs.core.__destructure_map.call(null,map__16543);
var handler = cljs.core.get.call(null,map__16543__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var options = cljs.core.get.call(null,map__16543__$1,new cljs.core.Keyword(null,"options","options",99638489));
c3kit.wire.flash.remove_BANG_.call(null,c3kit.wire.api.server_down_flash);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"c3kit.wire.api",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["raw response: ",raw_response], null);
}),null)),null,(68),null);

var map__16550_16576 = c3kit.wire.apic.conform_response.call(null,raw_response);
var map__16550_16577__$1 = cljs.core.__destructure_map.call(null,map__16550_16576);
var status_16578 = cljs.core.get.call(null,map__16550_16577__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var flash_16579 = cljs.core.get.call(null,map__16550_16577__$1,new cljs.core.Keyword(null,"flash","flash",934660619));
var payload_16580 = cljs.core.get.call(null,map__16550_16577__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var version_16581 = cljs.core.get.call(null,map__16550_16577__$1,new cljs.core.Keyword(null,"version","version",425292698));
var uri_16582 = cljs.core.get.call(null,map__16550_16577__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
if(cljs.core.seq.call(null,flash_16579)){
cljs.core.run_BANG_.call(null,c3kit.wire.flash.add_BANG_,flash_16579);
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = version_16581;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.call(null,version_16581,new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config)));
} else {
return and__5023__auto__;
}
})())){
c3kit.wire.api.new_version_BANG_.call(null,version_16581);
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),status_16578)){
c3kit.wire.api.handle_payload.call(null,handler,payload_16580);
} else {
}

if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"redirect","redirect",-1975673286),status_16578)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"no-redirect","no-redirect",-1477036586).cljs$core$IFn$_invoke$arity$1(options))))){
c3kit.wire.api.redirect.call(null,uri_16582);
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930),status_16578)){
var G__16558_16587 = options;
var G__16558_16588__$1 = (((G__16558_16587 == null))?null:new cljs.core.Keyword(null,"on-fail","on-fail",-589260753).cljs$core$IFn$_invoke$arity$1(G__16558_16587));
if((G__16558_16588__$1 == null)){
} else {
c3kit.apron.corec.invoke.call(null,G__16558_16588__$1,payload_16580);
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_16578)){
var G__16559_16589 = options;
var G__16559_16590__$1 = (((G__16559_16589 == null))?null:new cljs.core.Keyword(null,"on-error","on-error",1728533530).cljs$core$IFn$_invoke$arity$1(G__16559_16589));
if((G__16559_16590__$1 == null)){
} else {
c3kit.apron.corec.invoke.call(null,G__16559_16590__$1,payload_16580);
}
} else {
}

var G__16563 = options;
var G__16563__$1 = (((G__16563 == null))?null:new cljs.core.Keyword(null,"after-all","after-all",-54883998).cljs$core$IFn$_invoke$arity$1(G__16563));
if((G__16563__$1 == null)){
return null;
} else {
return c3kit.apron.corec.invoke.call(null,G__16563__$1);
}
});

//# sourceMappingURL=api.js.map
