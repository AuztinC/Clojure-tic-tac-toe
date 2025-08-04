// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.ajax');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.wire.api');
goog.require('c3kit.wire.flash');
goog.require('c3kit.wire.js');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('reagent.core');
c3kit.wire.ajax.active_ajax_requests = reagent.core.atom.call(null,(0));
c3kit.wire.ajax.activity_QMARK_ = (function c3kit$wire$ajax$activity_QMARK_(){
return cljs.core.not_EQ_.call(null,(0),cljs.core.deref.call(null,c3kit.wire.ajax.active_ajax_requests));
});
c3kit.wire.ajax.server_down_QMARK_ = (function c3kit$wire$ajax$server_down_QMARK_(p__19183){
var map__19184 = p__19183;
var map__19184__$1 = cljs.core.__destructure_map.call(null,map__19184);
var error_code = cljs.core.get.call(null,map__19184__$1,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var status = cljs.core.get.call(null,map__19184__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var and__5023__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),error_code);
if(and__5023__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(502),null], null), null).call(null,status);
} else {
return and__5023__auto__;
}
});
c3kit.wire.ajax.handle_server_down = (function c3kit$wire$ajax$handle_server_down(ajax_call){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Appears that server is down.  Will retry after in a moment."], null);
}),null)),null,(69),null);

c3kit.wire.flash.add_BANG_.call(null,c3kit.wire.api.server_down_flash);

return c3kit.wire.js.timeout.call(null,(3000),(function (){
return c3kit.wire.ajax._do_ajax_request.call(null,ajax_call);
}));
});
c3kit.wire.ajax.handle_unexpected_response = (function c3kit$wire$ajax$handle_unexpected_response(response,ajax_call){
var temp__5823__auto__ = new cljs.core.Keyword(null,"on-http-error","on-http-error",268314602).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(ajax_call));
if(cljs.core.truth_(temp__5823__auto__)){
var on_http_error = temp__5823__auto__;
return on_http_error.call(null,response);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unexpected AJAX response: ",response,ajax_call], null);
}),null)),null,(72),null);
}
});
c3kit.wire.ajax.handle_unsuccessful_response = (function c3kit$wire$ajax$handle_unsuccessful_response(response,ajax_call){
if(cljs.core.truth_(c3kit.wire.ajax.server_down_QMARK_.call(null,response))){
return c3kit.wire.ajax.handle_server_down.call(null,ajax_call);
} else {
if(cljs.core._EQ_.call(null,(403),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
return c3kit.wire.flash.add_BANG_.call(null,c3kit.wire.api.forbidden_flash);
} else {
return c3kit.wire.ajax.handle_unexpected_response.call(null,response,ajax_call);

}
}
});
c3kit.wire.ajax.triage_response = (function c3kit$wire$ajax$triage_response(response,ajax_call){
if(cljs.core._EQ_.call(null,(200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
return c3kit.wire.api.handle_api_response.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response),ajax_call);
} else {
var temp__5823__auto__ = new cljs.core.Keyword(null,"ajax-on-unsuccessful-response","ajax-on-unsuccessful-response",-334902909).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config));
if(cljs.core.truth_(temp__5823__auto__)){
var handler = temp__5823__auto__;
return handler.call(null,response,ajax_call);
} else {
return c3kit.wire.ajax.handle_unsuccessful_response.call(null,response,ajax_call);
}

}
});
/**
 * Create a prep fn to add a CSRF header to each request
 *   (prep-csrf "X-CSRF-Token"] csrf-token)
 */
c3kit.wire.ajax.prep_csrf = (function c3kit$wire$ajax$prep_csrf(header,token){
return (function (ajax_call){
return cljs.core.assoc_in.call(null,ajax_call,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"headers","headers",-835030129),header], null),token);
});
});
c3kit.wire.ajax.params_key = (function c3kit$wire$ajax$params_key(ajax_call){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["HEAD",null,"GET",null], null), null).call(null,new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(ajax_call)))){
return new cljs.core.Keyword(null,"query-params","query-params",900640534);
} else {
var G__19198 = new cljs.core.Keyword(null,"params-type","params-type",1941495334).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(ajax_call));
if(cljs.core._EQ_.call(null,null,G__19198)){
return new cljs.core.Keyword(null,"transit-params","transit-params",357261095);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transit","transit",359458387),G__19198)){
return new cljs.core.Keyword(null,"transit-params","transit-params",357261095);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),G__19198)){
return new cljs.core.Keyword(null,"query-params","query-params",900640534);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),G__19198)){
return new cljs.core.Keyword(null,"form-params","form-params",1884296467);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edn","edn",1317840885),G__19198)){
return new cljs.core.Keyword(null,"edn-params","edn-params",894273052);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"json","json",1279968570),G__19198)){
return new cljs.core.Keyword(null,"json-params","json-params",-1112693596);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"multipart","multipart",1158197946),G__19198)){
return new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19198)].join('')));

}
}
}
}
}
}
}
}
});
c3kit.wire.ajax.pass_through_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)], null);
c3kit.wire.ajax.request_map = (function c3kit$wire$ajax$request_map(ajax_call){
var prep = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"ajax-prep-fn","ajax-prep-fn",1814062099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.identity;
}
})();
var map__19203 = prep.call(null,ajax_call);
var map__19203__$1 = cljs.core.__destructure_map.call(null,map__19203);
var ajax_call__$1 = map__19203__$1;
var options = cljs.core.get.call(null,map__19203__$1,new cljs.core.Keyword(null,"options","options",99638489));
var params = cljs.core.get.call(null,map__19203__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__19212 = cljs.core.select_keys.call(null,options,c3kit.wire.ajax.pass_through_keys);
if(cljs.core.truth_(params)){
return cljs.core.assoc.call(null,G__19212,c3kit.wire.ajax.params_key.call(null,ajax_call__$1),params);
} else {
return G__19212;
}
});
c3kit.wire.ajax._do_ajax_request = (function c3kit$wire$ajax$_do_ajax_request(p__19215){
var map__19216 = p__19215;
var map__19216__$1 = cljs.core.__destructure_map.call(null,map__19216);
var ajax_call = map__19216__$1;
var method = cljs.core.get.call(null,map__19216__$1,new cljs.core.Keyword(null,"method","method",55703592));
var method_fn = cljs.core.get.call(null,map__19216__$1,new cljs.core.Keyword(null,"method-fn","method-fn",1314848696));
var url = cljs.core.get.call(null,map__19216__$1,new cljs.core.Keyword(null,"url","url",276297046));
var params = cljs.core.get.call(null,map__19216__$1,new cljs.core.Keyword(null,"params","params",710516235));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",method,url,params], null);
}),null)),null,(75),null);

var c__11783__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11784__auto__ = (function (){var switch__11580__auto__ = (function (state_19237){
var state_val_19238 = (state_19237[(1)]);
if((state_val_19238 === (1))){
var inst_19223 = (state_19237[(7)]);
var inst_19221 = cljs.core.swap_BANG_.call(null,c3kit.wire.ajax.active_ajax_requests,cljs.core.inc);
var inst_19223__$1 = c3kit.wire.ajax.request_map.call(null,ajax_call);
var inst_19224 = method_fn.call(null,url,inst_19223__$1);
var state_19237__$1 = (function (){var statearr_19253 = state_19237;
(statearr_19253[(8)] = inst_19221);

(statearr_19253[(7)] = inst_19223__$1);

return statearr_19253;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19237__$1,(2),inst_19224);
} else {
if((state_val_19238 === (2))){
var inst_19223 = (state_19237[(7)]);
var inst_19226 = (state_19237[(2)]);
var inst_19227 = cljs.core.__destructure_map.call(null,inst_19226);
var inst_19228 = cljs.core.get.call(null,inst_19227,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var inst_19229 = cljs.core.get.call(null,inst_19227,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_19230 = cljs.core.get.call(null,inst_19227,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_19231 = (function (){var request = inst_19223;
var map__19222 = inst_19227;
var response = inst_19227;
var error_code = inst_19228;
var status = inst_19229;
var body = inst_19230;
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [">",method,url,error_code,status,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(body)], null);
});
})();
var inst_19232 = (new cljs.core.Delay(inst_19231,null));
var inst_19233 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_19232,null,(76),null);
var inst_19234 = c3kit.wire.ajax.triage_response.call(null,inst_19227,ajax_call);
var inst_19235 = cljs.core.swap_BANG_.call(null,c3kit.wire.ajax.active_ajax_requests,cljs.core.dec);
var state_19237__$1 = (function (){var statearr_19254 = state_19237;
(statearr_19254[(9)] = inst_19233);

(statearr_19254[(10)] = inst_19234);

return statearr_19254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19237__$1,inst_19235);
} else {
return null;
}
}
});
return (function() {
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__11581__auto__ = null;
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__11581__auto____0 = (function (){
var statearr_19255 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19255[(0)] = c3kit$wire$ajax$_do_ajax_request_$_state_machine__11581__auto__);

(statearr_19255[(1)] = (1));

return statearr_19255;
});
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__11581__auto____1 = (function (state_19237){
while(true){
var ret_value__11582__auto__ = (function (){try{while(true){
var result__11583__auto__ = switch__11580__auto__.call(null,state_19237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11583__auto__;
}
break;
}
}catch (e19256){var ex__11584__auto__ = e19256;
var statearr_19257_19277 = state_19237;
(statearr_19257_19277[(2)] = ex__11584__auto__);


if(cljs.core.seq.call(null,(state_19237[(4)]))){
var statearr_19258_19278 = state_19237;
(statearr_19258_19278[(1)] = cljs.core.first.call(null,(state_19237[(4)])));

} else {
throw ex__11584__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19279 = state_19237;
state_19237 = G__19279;
continue;
} else {
return ret_value__11582__auto__;
}
break;
}
});
c3kit$wire$ajax$_do_ajax_request_$_state_machine__11581__auto__ = function(state_19237){
switch(arguments.length){
case 0:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__11581__auto____0.call(this);
case 1:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__11581__auto____1.call(this,state_19237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
c3kit$wire$ajax$_do_ajax_request_$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$0 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__11581__auto____0;
c3kit$wire$ajax$_do_ajax_request_$_state_machine__11581__auto__.cljs$core$IFn$_invoke$arity$1 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__11581__auto____1;
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__11581__auto__;
})()
})();
var state__11785__auto__ = (function (){var statearr_19259 = f__11784__auto__.call(null);
(statearr_19259[(6)] = c__11783__auto__);

return statearr_19259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11785__auto__);
}));

return c__11783__auto__;
});
c3kit.wire.ajax.build_ajax_call = (function c3kit$wire$ajax$build_ajax_call(method,method_fn,url,params,handler,opt_args){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"options","options",99638489),c3kit.apron.corec.__GT_options.call(null,opt_args),new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"method-fn","method-fn",1314848696),method_fn,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null);
});
c3kit.wire.ajax._method_parts = (function c3kit$wire$ajax$_method_parts(method){
var G__19268 = method;
var G__19268__$1 = (((G__19268 instanceof cljs.core.Keyword))?G__19268.fqn:null);
switch (G__19268__$1) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GET",cljs_http.client.get], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["POST",cljs_http.client.post], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19268__$1)].join('')));

}
});
c3kit.wire.ajax.get_BANG_ = (function c3kit$wire$ajax$get_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19286 = arguments.length;
var i__5750__auto___19288 = (0);
while(true){
if((i__5750__auto___19288 < len__5749__auto___19286)){
args__5755__auto__.push((arguments[i__5750__auto___19288]));

var G__19292 = (i__5750__auto___19288 + (1));
i__5750__auto___19288 = G__19292;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return c3kit.wire.ajax.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(c3kit.wire.ajax.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,params,handler,opt_args){
return c3kit.wire.ajax._do_ajax_request.call(null,c3kit.wire.ajax.build_ajax_call.call(null,"GET",cljs_http.client.get,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.get_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.ajax.get_BANG_.cljs$lang$applyTo = (function (seq19269){
var G__19270 = cljs.core.first.call(null,seq19269);
var seq19269__$1 = cljs.core.next.call(null,seq19269);
var G__19271 = cljs.core.first.call(null,seq19269__$1);
var seq19269__$2 = cljs.core.next.call(null,seq19269__$1);
var G__19272 = cljs.core.first.call(null,seq19269__$2);
var seq19269__$3 = cljs.core.next.call(null,seq19269__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19270,G__19271,G__19272,seq19269__$3);
}));

c3kit.wire.ajax.post_BANG_ = (function c3kit$wire$ajax$post_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19293 = arguments.length;
var i__5750__auto___19294 = (0);
while(true){
if((i__5750__auto___19294 < len__5749__auto___19293)){
args__5755__auto__.push((arguments[i__5750__auto___19294]));

var G__19295 = (i__5750__auto___19294 + (1));
i__5750__auto___19294 = G__19295;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return c3kit.wire.ajax.post_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(c3kit.wire.ajax.post_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,params,handler,opt_args){
return c3kit.wire.ajax._do_ajax_request.call(null,c3kit.wire.ajax.build_ajax_call.call(null,"POST",cljs_http.client.post,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.post_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.ajax.post_BANG_.cljs$lang$applyTo = (function (seq19273){
var G__19274 = cljs.core.first.call(null,seq19273);
var seq19273__$1 = cljs.core.next.call(null,seq19273);
var G__19275 = cljs.core.first.call(null,seq19273__$1);
var seq19273__$2 = cljs.core.next.call(null,seq19273__$1);
var G__19276 = cljs.core.first.call(null,seq19273__$2);
var seq19273__$3 = cljs.core.next.call(null,seq19273__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19274,G__19275,G__19276,seq19273__$3);
}));

c3kit.wire.ajax.request_BANG_ = (function c3kit$wire$ajax$request_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19296 = arguments.length;
var i__5750__auto___19297 = (0);
while(true){
if((i__5750__auto___19297 < len__5749__auto___19296)){
args__5755__auto__.push((arguments[i__5750__auto___19297]));

var G__19298 = (i__5750__auto___19297 + (1));
i__5750__auto___19297 = G__19298;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return c3kit.wire.ajax.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(c3kit.wire.ajax.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (method,url,params,handler,opt_args){
var method_name = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var method_fn = (function() { 
var G__19299__delegate = function (url__$1,p__19287){
var vec__19289 = p__19287;
var req = cljs.core.nth.call(null,vec__19289,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url__$1], null)));
};
var G__19299 = function (url__$1,var_args){
var p__19287 = null;
if (arguments.length > 1) {
var G__19300__i = 0, G__19300__a = new Array(arguments.length -  1);
while (G__19300__i < G__19300__a.length) {G__19300__a[G__19300__i] = arguments[G__19300__i + 1]; ++G__19300__i;}
  p__19287 = new cljs.core.IndexedSeq(G__19300__a,0,null);
} 
return G__19299__delegate.call(this,url__$1,p__19287);};
G__19299.cljs$lang$maxFixedArity = 1;
G__19299.cljs$lang$applyTo = (function (arglist__19301){
var url__$1 = cljs.core.first(arglist__19301);
var p__19287 = cljs.core.rest(arglist__19301);
return G__19299__delegate(url__$1,p__19287);
});
G__19299.cljs$core$IFn$_invoke$arity$variadic = G__19299__delegate;
return G__19299;
})()
;
return c3kit.wire.ajax._do_ajax_request.call(null,c3kit.wire.ajax.build_ajax_call.call(null,method_name,method_fn,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.request_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(c3kit.wire.ajax.request_BANG_.cljs$lang$applyTo = (function (seq19280){
var G__19281 = cljs.core.first.call(null,seq19280);
var seq19280__$1 = cljs.core.next.call(null,seq19280);
var G__19282 = cljs.core.first.call(null,seq19280__$1);
var seq19280__$2 = cljs.core.next.call(null,seq19280__$1);
var G__19283 = cljs.core.first.call(null,seq19280__$2);
var seq19280__$3 = cljs.core.next.call(null,seq19280__$2);
var G__19284 = cljs.core.first.call(null,seq19280__$3);
var seq19280__$4 = cljs.core.next.call(null,seq19280__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19281,G__19282,G__19283,G__19284,seq19280__$4);
}));


//# sourceMappingURL=ajax.js.map
