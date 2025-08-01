// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.spec_helper');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.wire.ajax');
goog.require('c3kit.wire.js');
goog.require('c3kit.wire.websocket');
goog.require('cljs.pprint');
goog.require('cljsjs.react.dom.test_utils');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('speclj.core');
goog.require('speclj.stub');
c3kit.apron.log.warn_BANG_.call(null);
c3kit.wire.spec_helper.pprint = cljs.pprint.pprint;
c3kit.wire.spec_helper.render_roots = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
c3kit.wire.spec_helper.unmount_render_roots = (function c3kit$wire$spec_helper$unmount_render_roots(){
var seq__18940_18944 = cljs.core.seq.call(null,cljs.core.deref.call(null,c3kit.wire.spec_helper.render_roots));
var chunk__18941_18945 = null;
var count__18942_18946 = (0);
var i__18943_18947 = (0);
while(true){
if((i__18943_18947 < count__18942_18946)){
var root_18948 = cljs.core._nth.call(null,chunk__18941_18945,i__18943_18947);
reagent.dom.unmount_component_at_node.call(null,root_18948);


var G__18949 = seq__18940_18944;
var G__18950 = chunk__18941_18945;
var G__18951 = count__18942_18946;
var G__18952 = (i__18943_18947 + (1));
seq__18940_18944 = G__18949;
chunk__18941_18945 = G__18950;
count__18942_18946 = G__18951;
i__18943_18947 = G__18952;
continue;
} else {
var temp__5825__auto___18953 = cljs.core.seq.call(null,seq__18940_18944);
if(temp__5825__auto___18953){
var seq__18940_18954__$1 = temp__5825__auto___18953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18940_18954__$1)){
var c__5548__auto___18956 = cljs.core.chunk_first.call(null,seq__18940_18954__$1);
var G__18957 = cljs.core.chunk_rest.call(null,seq__18940_18954__$1);
var G__18958 = c__5548__auto___18956;
var G__18959 = cljs.core.count.call(null,c__5548__auto___18956);
var G__18960 = (0);
seq__18940_18944 = G__18957;
chunk__18941_18945 = G__18958;
count__18942_18946 = G__18959;
i__18943_18947 = G__18960;
continue;
} else {
var root_18961 = cljs.core.first.call(null,seq__18940_18954__$1);
reagent.dom.unmount_component_at_node.call(null,root_18961);


var G__18963 = cljs.core.next.call(null,seq__18940_18954__$1);
var G__18964 = null;
var G__18965 = (0);
var G__18966 = (0);
seq__18940_18944 = G__18963;
chunk__18941_18945 = G__18964;
count__18942_18946 = G__18965;
i__18943_18947 = G__18966;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,c3kit.wire.spec_helper.render_roots,cljs.core.PersistentVector.EMPTY);
});
c3kit.wire.spec_helper.reset_dom_BANG_ = (function c3kit$wire$spec_helper$reset_dom_BANG_(content){
var body = document.body;
c3kit.wire.spec_helper.unmount_render_roots.call(null);

return (body.innerHTML = content);
});
c3kit.wire.spec_helper.with_clean_dom = (function c3kit$wire$spec_helper$with_clean_dom(var_args){
var G__18962 = arguments.length;
switch (G__18962) {
case 0:
return c3kit.wire.spec_helper.with_clean_dom.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.spec_helper.with_clean_dom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.with_clean_dom.cljs$core$IFn$_invoke$arity$0 = (function (){
return c3kit.wire.spec_helper.with_clean_dom.call(null,cljs.core.PersistentVector.EMPTY);
}));

(c3kit.wire.spec_helper.with_clean_dom.cljs$core$IFn$_invoke$arity$1 = (function (content){
return (new cljs.core.List(null,speclj.components.new_before.call(null,(function (){
return c3kit.wire.spec_helper.reset_dom_BANG_.call(null,content);
})),(new cljs.core.List(null,speclj.components.new_after.call(null,(function (){
return c3kit.wire.spec_helper.reset_dom_BANG_.call(null,content);
})),null,(1),null)),(2),null));
}));

(c3kit.wire.spec_helper.with_clean_dom.cljs$lang$maxFixedArity = 1);

c3kit.wire.spec_helper.with_root_dom = (function c3kit$wire$spec_helper$with_root_dom(){
return c3kit.wire.spec_helper.with_clean_dom.call(null,"<div id='root'/>");
});
c3kit.wire.spec_helper.select = (function c3kit$wire$spec_helper$select(var_args){
var G__18969 = arguments.length;
switch (G__18969) {
case 1:
return c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return c3kit.wire.spec_helper.select.call(null,document,selector);
}));

(c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
if(cljs.core.truth_(root)){
} else {
throw (new Error(["Assert failed: ",["select: can't select inside nil nodes. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''),"\n","root"].join('')));
}

if(typeof selector === 'string'){
} else {
throw (new Error(["Assert failed: ",["select: selector must be a string!: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''),"\n","(string? selector)"].join('')));
}

return root.querySelector(selector);
}));

(c3kit.wire.spec_helper.select.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.select_all = (function c3kit$wire$spec_helper$select_all(var_args){
var G__18973 = arguments.length;
switch (G__18973) {
case 1:
return c3kit.wire.spec_helper.select_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.select_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.select_all.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return c3kit.wire.spec_helper.select_all.call(null,document,sel);
}));

(c3kit.wire.spec_helper.select_all.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
if(cljs.core.truth_(root)){
} else {
throw (new Error(["Assert failed: ",["select-all: can't select inside nil nodes. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''),"\n","root"].join('')));
}

if(typeof selector === 'string'){
} else {
throw (new Error(["Assert failed: ",["select-all: selector must be a string!: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''),"\n","(string? selector)"].join('')));
}

var results = root.querySelectorAll(selector);
var slice = (function (p1__18971_SHARP_){
return Array.prototype.slice.call(p1__18971_SHARP_);
});
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,slice.call(null,results));
}));

(c3kit.wire.spec_helper.select_all.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.select_map = (function c3kit$wire$spec_helper$select_map(var_args){
var G__18976 = arguments.length;
switch (G__18976) {
case 2:
return c3kit.wire.spec_helper.select_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.select_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.select_map.cljs$core$IFn$_invoke$arity$2 = (function (f,selector){
return cljs.core.map.call(null,f,c3kit.wire.spec_helper.select_all.call(null,selector));
}));

(c3kit.wire.spec_helper.select_map.cljs$core$IFn$_invoke$arity$3 = (function (f,root,selector){
return cljs.core.map.call(null,f,c3kit.wire.spec_helper.select_all.call(null,root,selector));
}));

(c3kit.wire.spec_helper.select_map.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.count_all = (function c3kit$wire$spec_helper$count_all(var_args){
var G__18979 = arguments.length;
switch (G__18979) {
case 1:
return c3kit.wire.spec_helper.count_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.count_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.count_all.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return cljs.core.count.call(null,c3kit.wire.spec_helper.select_all.call(null,selector));
}));

(c3kit.wire.spec_helper.count_all.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return cljs.core.count.call(null,c3kit.wire.spec_helper.select_all.call(null,root,selector));
}));

(c3kit.wire.spec_helper.count_all.cljs$lang$maxFixedArity = 2);

/**
 * Use me to render components for testing.  Using reagent/render directly may work, but is not as good.
 */
c3kit.wire.spec_helper.render = (function c3kit$wire$spec_helper$render(var_args){
var G__18982 = arguments.length;
switch (G__18982) {
case 1:
return c3kit.wire.spec_helper.render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.render.cljs$core$IFn$_invoke$arity$1 = (function (component){
return c3kit.wire.spec_helper.render.call(null,component,c3kit.wire.spec_helper.select.call(null,"#root"));
}));

(c3kit.wire.spec_helper.render.cljs$core$IFn$_invoke$arity$2 = (function (component,root){
cljs.core.swap_BANG_.call(null,c3kit.wire.spec_helper.render_roots,cljs.core.conj,root);

(window.Slider = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return null;
})], null)));

(jwplayer = (function (elem_id){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"setup","setup",1987730512),c3kit.apron.corec.noop,new cljs.core.Keyword(null,"remove","remove",-131428414),c3kit.apron.corec.noop], null));
}));

try{return reagent.dom.render.call(null,component,root);
}catch (e18983){var e = e18983;
throw cljs.core.ex_info.call(null,"Render Error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),e], null));
}}));

(c3kit.wire.spec_helper.render.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.flush = (function c3kit$wire$spec_helper$flush(){
return reagent.core.flush.call(null);
});
c3kit.wire.spec_helper.simulator = ReactTestUtils.Simulate;
c3kit.wire.spec_helper.resolve_node = (function c3kit$wire$spec_helper$resolve_node(var_args){
var G__18986 = arguments.length;
switch (G__18986) {
case 2:
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2 = (function (action,thing){
if(typeof thing === 'string'){
var temp__5823__auto__ = c3kit.wire.spec_helper.select.call(null,thing);
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
return node;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)," - can't find node: ",thing].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"thing","thing",270525715),thing], null));
}
} else {
if(cljs.core.truth_(thing)){
return thing;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)," - node is nil"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"thing","thing",270525715),thing], null));
}
}
}));

(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3 = (function (action,root,selector){
if((root == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)," - root node is nil"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
} else {
}

var temp__5823__auto__ = c3kit.wire.spec_helper.select.call(null,root,selector);
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
return node;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)," - can't find child node: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
}
}));

(c3kit.wire.spec_helper.resolve_node.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.assoc_key_event = (function c3kit$wire$spec_helper$assoc_key_event(m,code,key){
return cljs.core.assoc.call(null,m,code,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));
});
c3kit.wire.spec_helper.keypresses = cljs.core.reduce_kv.call(null,c3kit.wire.spec_helper.assoc_key_event,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([c3kit.wire.js.TAB,c3kit.wire.js.DIGIT5,c3kit.wire.js.DIGIT6,c3kit.wire.js.ENTER,c3kit.wire.js.UP,c3kit.wire.js.DIGIT1,c3kit.wire.js.DIGIT3,c3kit.wire.js.DIGIT0,c3kit.wire.js.DIGIT2,c3kit.wire.js.ESC,c3kit.wire.js.DIGIT4,c3kit.wire.js.DIGIT9,c3kit.wire.js.RIGHT,c3kit.wire.js.DIGIT7,c3kit.wire.js.LEFT,c3kit.wire.js.DIGIT8,c3kit.wire.js.DOWN],["Tab","5","6","Enter","ArrowUp","1","3","0","2","Escape","4","9","ArrowRight","7","ArrowLeft","8","ArrowDown"]));
c3kit.wire.spec_helper.simulate = (function c3kit$wire$spec_helper$simulate(var_args){
var G__18989 = arguments.length;
switch (G__18989) {
case 3:
return c3kit.wire.spec_helper.simulate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return c3kit.wire.spec_helper.simulate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.simulate.cljs$core$IFn$_invoke$arity$3 = (function (event_name,thing,event_data){
var node = c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"simulate","simulate",-486863853),thing);
var event_fn = c3kit.wire.js.o_get.call(null,c3kit.wire.spec_helper.simulator,event_name);
if(cljs.core.truth_(event_fn)){
} else {
throw cljs.core.ex_info.call(null,["simulate - event doesn't exist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_name)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"thing","thing",270525715),thing,new cljs.core.Keyword(null,"event-name","event-name",927259778),event_name,new cljs.core.Keyword(null,"event-data","event-data",-1726012139),event_data], null));
}

return event_fn.call(null,node,cljs.core.clj__GT_js.call(null,event_data));
}));

(c3kit.wire.spec_helper.simulate.cljs$core$IFn$_invoke$arity$4 = (function (event_name,root,selector,event_data){
return c3kit.wire.spec_helper.simulate.call(null,event_name,c3kit.wire.spec_helper.resolve_node.call(null,root,selector),event_data);
}));

(c3kit.wire.spec_helper.simulate.cljs$lang$maxFixedArity = 4);

c3kit.wire.spec_helper.simulate_BANG_ = (function c3kit$wire$spec_helper$simulate_BANG_(var_args){
var G__18992 = arguments.length;
switch (G__18992) {
case 3:
return c3kit.wire.spec_helper.simulate_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return c3kit.wire.spec_helper.simulate_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.simulate_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (event_name,thing,event_data){
c3kit.wire.spec_helper.simulate.call(null,event_name,thing,event_data);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.simulate_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (event_name,root,selector,event_data){
c3kit.wire.spec_helper.simulate.call(null,event_name,root,selector,event_data);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.simulate_BANG_.cljs$lang$maxFixedArity = 4);

c3kit.wire.spec_helper.key_down = (function c3kit$wire$spec_helper$key_down(var_args){
var G__18995 = arguments.length;
switch (G__18995) {
case 2:
return c3kit.wire.spec_helper.key_down.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.key_down.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.key_down.cljs$core$IFn$_invoke$arity$2 = (function (thing,key_code){
return c3kit.wire.spec_helper.simulator.keyDown.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"key-down","key-down",998681515),thing),cljs.core.get.call(null,c3kit.wire.spec_helper.keypresses,key_code,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),key_code,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_code)], null))));
}));

(c3kit.wire.spec_helper.key_down.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,key_code){
return c3kit.wire.spec_helper.key_down.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"key-down","key-down",998681515),root,selector),key_code);
}));

(c3kit.wire.spec_helper.key_down.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.key_down_BANG_ = (function c3kit$wire$spec_helper$key_down_BANG_(var_args){
var G__18998 = arguments.length;
switch (G__18998) {
case 2:
return c3kit.wire.spec_helper.key_down_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.key_down_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.key_down_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,key_code){
c3kit.wire.spec_helper.key_down.call(null,thing,key_code);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.key_down_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,key_code){
c3kit.wire.spec_helper.key_down.call(null,root,selector,key_code);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.key_down_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.key_up = (function c3kit$wire$spec_helper$key_up(var_args){
var G__19001 = arguments.length;
switch (G__19001) {
case 2:
return c3kit.wire.spec_helper.key_up.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.key_up.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.key_up.cljs$core$IFn$_invoke$arity$2 = (function (thing,key){
return c3kit.wire.spec_helper.simulator.keyUp.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"key-up","key-up",715914997),thing),cljs.core.get.call(null,c3kit.wire.spec_helper.keypresses,key));
}));

(c3kit.wire.spec_helper.key_up.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,key){
return c3kit.wire.spec_helper.key_up.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"key-up","key-up",715914997),root,selector),key);
}));

(c3kit.wire.spec_helper.key_up.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.key_up_BANG_ = (function c3kit$wire$spec_helper$key_up_BANG_(var_args){
var G__19004 = arguments.length;
switch (G__19004) {
case 2:
return c3kit.wire.spec_helper.key_up_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.key_up_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.key_up_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,key){
c3kit.wire.spec_helper.key_up.call(null,thing,key);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.key_up_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,key){
c3kit.wire.spec_helper.key_up.call(null,root,selector,key);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.key_up_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.key_press = (function c3kit$wire$spec_helper$key_press(var_args){
var G__19007 = arguments.length;
switch (G__19007) {
case 2:
return c3kit.wire.spec_helper.key_press.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.key_press.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.key_press.cljs$core$IFn$_invoke$arity$2 = (function (thing,key){
return c3kit.wire.spec_helper.simulator.keyPress.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"key-press","key-press",850740112),thing),cljs.core.get.call(null,c3kit.wire.spec_helper.keypresses,key));
}));

(c3kit.wire.spec_helper.key_press.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,key){
return c3kit.wire.spec_helper.key_press.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"key-press","key-press",850740112),root,selector),key);
}));

(c3kit.wire.spec_helper.key_press.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.key_press_BANG_ = (function c3kit$wire$spec_helper$key_press_BANG_(var_args){
var G__19010 = arguments.length;
switch (G__19010) {
case 2:
return c3kit.wire.spec_helper.key_press_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.key_press_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.key_press_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,key){
c3kit.wire.spec_helper.key_press.call(null,thing,key);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.key_press_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,key){
c3kit.wire.spec_helper.key_press.call(null,root,selector,key);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.key_press_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.touch_end = (function c3kit$wire$spec_helper$touch_end(var_args){
var G__19013 = arguments.length;
switch (G__19013) {
case 1:
return c3kit.wire.spec_helper.touch_end.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.touch_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.touch_end.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.simulator.touchend.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"touchend","touchend",-1574059019),thing));
}));

(c3kit.wire.spec_helper.touch_end.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.touch_end.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"touchend","touchend",-1574059019),root,selector));
}));

(c3kit.wire.spec_helper.touch_end.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.touch_end_BANG_ = (function c3kit$wire$spec_helper$touch_end_BANG_(var_args){
var G__19016 = arguments.length;
switch (G__19016) {
case 1:
return c3kit.wire.spec_helper.touch_end_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.touch_end_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.touch_end_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.touch_end.call(null,thing);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.touch_end_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.touch_end.call(null,root,selector);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.touch_end_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.touch_start = (function c3kit$wire$spec_helper$touch_start(var_args){
var G__19019 = arguments.length;
switch (G__19019) {
case 1:
return c3kit.wire.spec_helper.touch_start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.touch_start.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.touch_start.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.simulator.touchstart.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"touchstart","touchstart",369858804),thing));
}));

(c3kit.wire.spec_helper.touch_start.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.touch_start.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"touchstart","touchstart",369858804),root,selector));
}));

(c3kit.wire.spec_helper.touch_start.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.touch_start_BANG_ = (function c3kit$wire$spec_helper$touch_start_BANG_(var_args){
var G__19022 = arguments.length;
switch (G__19022) {
case 1:
return c3kit.wire.spec_helper.touch_start_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.touch_start_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.touch_start_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.touch_start.call(null,thing);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.touch_start_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.touch_start.call(null,root,selector);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.touch_start_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.click = (function c3kit$wire$spec_helper$click(var_args){
var G__19024 = arguments.length;
switch (G__19024) {
case 1:
return c3kit.wire.spec_helper.click.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.click.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.click.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.simulator.click.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"click","click",1912301393),thing));
}));

(c3kit.wire.spec_helper.click.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.click.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"click","click",1912301393),root,selector));
}));

(c3kit.wire.spec_helper.click.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.click_BANG_ = (function c3kit$wire$spec_helper$click_BANG_(var_args){
var G__19027 = arguments.length;
switch (G__19027) {
case 1:
return c3kit.wire.spec_helper.click_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.click_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.click_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.click.call(null,thing);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.click_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.click.call(null,root,selector);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.click_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_enter = (function c3kit$wire$spec_helper$mouse_enter(var_args){
var G__19031 = arguments.length;
switch (G__19031) {
case 1:
return c3kit.wire.spec_helper.mouse_enter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_enter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_enter.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.simulator.mouseEnter.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"mouse-enter","mouse-enter",678856303),thing));
}));

(c3kit.wire.spec_helper.mouse_enter.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.mouse_enter.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"mouse-enter","mouse-enter",678856303),root,selector));
}));

(c3kit.wire.spec_helper.mouse_enter.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_enter_BANG_ = (function c3kit$wire$spec_helper$mouse_enter_BANG_(var_args){
var G__19034 = arguments.length;
switch (G__19034) {
case 1:
return c3kit.wire.spec_helper.mouse_enter_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_enter_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_enter_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.mouse_enter.call(null,thing);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.mouse_enter_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.mouse_enter.call(null,root,selector);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.mouse_enter_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_up = (function c3kit$wire$spec_helper$mouse_up(var_args){
var G__19037 = arguments.length;
switch (G__19037) {
case 1:
return c3kit.wire.spec_helper.mouse_up.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_up.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_up.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.simulator.mouseUp.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),thing));
}));

(c3kit.wire.spec_helper.mouse_up.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.mouse_up.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),root,selector));
}));

(c3kit.wire.spec_helper.mouse_up.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_up_BANG_ = (function c3kit$wire$spec_helper$mouse_up_BANG_(var_args){
var G__19040 = arguments.length;
switch (G__19040) {
case 1:
return c3kit.wire.spec_helper.mouse_up_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_up_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_up_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.mouse_up.call(null,thing);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.mouse_up_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.mouse_up.call(null,root,selector);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.mouse_up_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_move = (function c3kit$wire$spec_helper$mouse_move(var_args){
var G__19043 = arguments.length;
switch (G__19043) {
case 1:
return c3kit.wire.spec_helper.mouse_move.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_move.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.simulator.mouseMove.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),thing));
}));

(c3kit.wire.spec_helper.mouse_move.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.mouse_move.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),root,selector));
}));

(c3kit.wire.spec_helper.mouse_move.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_move_BANG_ = (function c3kit$wire$spec_helper$mouse_move_BANG_(var_args){
var G__19046 = arguments.length;
switch (G__19046) {
case 1:
return c3kit.wire.spec_helper.mouse_move_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_move_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_move_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.mouse_move.call(null,thing);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.mouse_move_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.mouse_move.call(null,root,selector);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.mouse_move_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_down = (function c3kit$wire$spec_helper$mouse_down(var_args){
var G__19049 = arguments.length;
switch (G__19049) {
case 1:
return c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.mouse_down.call(null,thing,(0));
}));

(c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$2 = (function (thing,button){
var node = c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),thing);
return c3kit.wire.spec_helper.simulator.mouseDown.call(null,node,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"button","button",1456579943),button,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),(1)], null)));
}));

(c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$3 = (function (root,button,selector){
return c3kit.wire.spec_helper.mouse_down.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),root,selector),button);
}));

(c3kit.wire.spec_helper.mouse_down.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.mouse_down_BANG_ = (function c3kit$wire$spec_helper$mouse_down_BANG_(var_args){
var G__19052 = arguments.length;
switch (G__19052) {
case 1:
return c3kit.wire.spec_helper.mouse_down_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_down_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_down_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.mouse_down.call(null,thing);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.mouse_down_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.mouse_down.call(null,root,selector);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.mouse_down_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_leave = (function c3kit$wire$spec_helper$mouse_leave(var_args){
var G__19054 = arguments.length;
switch (G__19054) {
case 1:
return c3kit.wire.spec_helper.mouse_leave.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_leave.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_leave.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.simulator.mouseLeave.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"mouse-leave","mouse-leave",135558349),thing));
}));

(c3kit.wire.spec_helper.mouse_leave.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.mouse_leave.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"mouse-leave","mouse-leave",135558349),root,selector));
}));

(c3kit.wire.spec_helper.mouse_leave.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_leave_BANG_ = (function c3kit$wire$spec_helper$mouse_leave_BANG_(var_args){
var G__19058 = arguments.length;
switch (G__19058) {
case 1:
return c3kit.wire.spec_helper.mouse_leave_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_leave_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_leave_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.mouse_leave.call(null,thing);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.mouse_leave_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.mouse_leave.call(null,root,selector);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.mouse_leave_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.drag = (function c3kit$wire$spec_helper$drag(var_args){
var G__19060 = arguments.length;
switch (G__19060) {
case 2:
return c3kit.wire.spec_helper.drag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
return c3kit.wire.spec_helper.simulator.drag.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"drag","drag",449951290),thing),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataTransfer","dataTransfer",-1320237730),data_transfer], null)));
}));

(c3kit.wire.spec_helper.drag.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"drag","drag",449951290),root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_BANG_ = (function c3kit$wire$spec_helper$drag_BANG_(var_args){
var G__19063 = arguments.length;
switch (G__19063) {
case 2:
return c3kit.wire.spec_helper.drag_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
c3kit.wire.spec_helper.drag.call(null,thing,data_transfer);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.drag_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
c3kit.wire.spec_helper.drag.call(null,root,selector,data_transfer);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.drag_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_start = (function c3kit$wire$spec_helper$drag_start(var_args){
var G__19067 = arguments.length;
switch (G__19067) {
case 2:
return c3kit.wire.spec_helper.drag_start.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_start.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_start.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
return c3kit.wire.spec_helper.simulator.dragStart.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"drag-start","drag-start",292353430),thing),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataTransfer","dataTransfer",-1320237730),data_transfer], null)));
}));

(c3kit.wire.spec_helper.drag_start.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag_start.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"drag-start","drag-start",292353430),root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag_start.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_start_BANG_ = (function c3kit$wire$spec_helper$drag_start_BANG_(var_args){
var G__19070 = arguments.length;
switch (G__19070) {
case 2:
return c3kit.wire.spec_helper.drag_start_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_start_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_start_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
c3kit.wire.spec_helper.drag_start.call(null,thing,data_transfer);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.drag_start_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
c3kit.wire.spec_helper.drag_start.call(null,root,selector,data_transfer);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.drag_start_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_enter = (function c3kit$wire$spec_helper$drag_enter(var_args){
var G__19073 = arguments.length;
switch (G__19073) {
case 2:
return c3kit.wire.spec_helper.drag_enter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_enter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_enter.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
return c3kit.wire.spec_helper.simulator.dragEnter.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"drag-enter","drag-enter",-124379803),thing),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataTransfer","dataTransfer",-1320237730),data_transfer], null)));
}));

(c3kit.wire.spec_helper.drag_enter.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag_enter.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"drag-enter","drag-enter",-124379803),root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag_enter.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_enter_BANG_ = (function c3kit$wire$spec_helper$drag_enter_BANG_(var_args){
var G__19075 = arguments.length;
switch (G__19075) {
case 2:
return c3kit.wire.spec_helper.drag_enter_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_enter_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_enter_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
c3kit.wire.spec_helper.drag_enter.call(null,thing,data_transfer);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.drag_enter_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
c3kit.wire.spec_helper.drag_enter.call(null,root,selector,data_transfer);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.drag_enter_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_leave = (function c3kit$wire$spec_helper$drag_leave(var_args){
var G__19079 = arguments.length;
switch (G__19079) {
case 2:
return c3kit.wire.spec_helper.drag_leave.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_leave.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_leave.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
return c3kit.wire.spec_helper.simulator.dragLeave.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"drag-leave","drag-leave",1267853781),thing),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataTransfer","dataTransfer",-1320237730),data_transfer], null)));
}));

(c3kit.wire.spec_helper.drag_leave.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag_leave.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"drag-leave","drag-leave",1267853781),root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag_leave.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_leave_BANG_ = (function c3kit$wire$spec_helper$drag_leave_BANG_(var_args){
var G__19081 = arguments.length;
switch (G__19081) {
case 2:
return c3kit.wire.spec_helper.drag_leave_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_leave_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_leave_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
c3kit.wire.spec_helper.drag_leave.call(null,thing,data_transfer);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.drag_leave_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
c3kit.wire.spec_helper.drag_leave.call(null,root,selector,data_transfer);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.drag_leave_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_end = (function c3kit$wire$spec_helper$drag_end(var_args){
var G__19085 = arguments.length;
switch (G__19085) {
case 2:
return c3kit.wire.spec_helper.drag_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_end.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_end.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
return c3kit.wire.spec_helper.simulator.dragEnd.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888),thing),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataTransfer","dataTransfer",-1320237730),data_transfer], null)));
}));

(c3kit.wire.spec_helper.drag_end.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag_end.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888),root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag_end.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_end_BANG_ = (function c3kit$wire$spec_helper$drag_end_BANG_(var_args){
var G__19088 = arguments.length;
switch (G__19088) {
case 2:
return c3kit.wire.spec_helper.drag_end_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_end_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_end_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
c3kit.wire.spec_helper.drag_end.call(null,thing,data_transfer);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.drag_end_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
c3kit.wire.spec_helper.drag_end.call(null,root,selector,data_transfer);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.drag_end_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_over = (function c3kit$wire$spec_helper$drag_over(var_args){
var G__19091 = arguments.length;
switch (G__19091) {
case 2:
return c3kit.wire.spec_helper.drag_over.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_over.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_over.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
return c3kit.wire.spec_helper.simulator.dragOver.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"drag-over","drag-over",-1988310515),thing),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataTransfer","dataTransfer",-1320237730),data_transfer], null)));
}));

(c3kit.wire.spec_helper.drag_over.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag_over.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"drag-over","drag-over",-1988310515),root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag_over.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_over_BANG_ = (function c3kit$wire$spec_helper$drag_over_BANG_(var_args){
var G__19093 = arguments.length;
switch (G__19093) {
case 2:
return c3kit.wire.spec_helper.drag_over_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_over_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_over_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
c3kit.wire.spec_helper.drag_over.call(null,thing,data_transfer);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.drag_over_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
c3kit.wire.spec_helper.drag_over.call(null,root,selector,data_transfer);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.drag_over_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.on_drop = (function c3kit$wire$spec_helper$on_drop(var_args){
var G__19097 = arguments.length;
switch (G__19097) {
case 2:
return c3kit.wire.spec_helper.on_drop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.on_drop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.on_drop.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
return c3kit.wire.spec_helper.simulator.drop.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),thing),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataTransfer","dataTransfer",-1320237730),data_transfer], null)));
}));

(c3kit.wire.spec_helper.on_drop.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.on_drop.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.on_drop.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.on_drop_BANG_ = (function c3kit$wire$spec_helper$on_drop_BANG_(var_args){
var G__19100 = arguments.length;
switch (G__19100) {
case 2:
return c3kit.wire.spec_helper.on_drop_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.on_drop_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.on_drop_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
c3kit.wire.spec_helper.on_drop.call(null,thing,data_transfer);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.on_drop_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
c3kit.wire.spec_helper.on_drop.call(null,root,selector,data_transfer);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.on_drop_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.focus = (function c3kit$wire$spec_helper$focus(var_args){
var G__19103 = arguments.length;
switch (G__19103) {
case 1:
return c3kit.wire.spec_helper.focus.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.focus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.focus.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.simulator.focus.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"focus","focus",234677911),thing));
}));

(c3kit.wire.spec_helper.focus.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.focus.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"focus","focus",234677911),root,selector));
}));

(c3kit.wire.spec_helper.focus.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.focus_BANG_ = (function c3kit$wire$spec_helper$focus_BANG_(var_args){
var G__19106 = arguments.length;
switch (G__19106) {
case 1:
return c3kit.wire.spec_helper.focus_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.focus_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.focus_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.focus.call(null,thing);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.focus_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.focus.call(null,root,selector);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.focus_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.blur = (function c3kit$wire$spec_helper$blur(var_args){
var G__19109 = arguments.length;
switch (G__19109) {
case 1:
return c3kit.wire.spec_helper.blur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.blur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.blur.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.simulator.blur.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"blur","blur",-453500461),thing));
}));

(c3kit.wire.spec_helper.blur.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.blur.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"blur","blur",-453500461),root,selector));
}));

(c3kit.wire.spec_helper.blur.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.blur_BANG_ = (function c3kit$wire$spec_helper$blur_BANG_(var_args){
var G__19112 = arguments.length;
switch (G__19112) {
case 1:
return c3kit.wire.spec_helper.blur_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.blur_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.blur_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.blur.call(null,thing);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.blur_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.blur.call(null,root,selector);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.blur_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.change = (function c3kit$wire$spec_helper$change(var_args){
var G__19115 = arguments.length;
switch (G__19115) {
case 1:
return c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.simulator.change.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),thing),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),thing], null));
}));

(c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$2 = (function (thing,value){
var node = c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),thing);
if(cljs.core._EQ_.call(null,"file",node.type)){
return c3kit.wire.spec_helper.simulator.change.call(null,node,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"files","files",-472457450),value], null)], null)));
} else {
(node.value = value);

return c3kit.wire.spec_helper.change.call(null,node);
}
}));

(c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,value){
return c3kit.wire.spec_helper.change.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),root,selector),value);
}));

(c3kit.wire.spec_helper.change.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.change_BANG_ = (function c3kit$wire$spec_helper$change_BANG_(var_args){
var G__19118 = arguments.length;
switch (G__19118) {
case 2:
return c3kit.wire.spec_helper.change_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.change_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.change_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,value){
c3kit.wire.spec_helper.change.call(null,thing,value);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.change_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,value){
c3kit.wire.spec_helper.change.call(null,root,selector,value);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.change_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.check_box = (function c3kit$wire$spec_helper$check_box(var_args){
var G__19120 = arguments.length;
switch (G__19120) {
case 2:
return c3kit.wire.spec_helper.check_box.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.check_box.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.check_box.cljs$core$IFn$_invoke$arity$2 = (function (thing,value){
var node = c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"check-box","check-box",-1306386988),thing);
(node.checked = value);

return c3kit.wire.spec_helper.change.call(null,node);
}));

(c3kit.wire.spec_helper.check_box.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,value){
return c3kit.wire.spec_helper.check_box.call(null,c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"check-box","check-box",-1306386988),root,selector),value);
}));

(c3kit.wire.spec_helper.check_box.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.check_box_BANG_ = (function c3kit$wire$spec_helper$check_box_BANG_(var_args){
var G__19124 = arguments.length;
switch (G__19124) {
case 2:
return c3kit.wire.spec_helper.check_box_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.check_box_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.check_box_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,value){
c3kit.wire.spec_helper.check_box.call(null,thing,value);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.check_box_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,value){
c3kit.wire.spec_helper.check_box.call(null,root,selector,value);

return c3kit.wire.spec_helper.flush.call(null);
}));

(c3kit.wire.spec_helper.check_box_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Throws exception if the node doesn't exist.
 */
c3kit.wire.spec_helper.text_BANG_ = (function c3kit$wire$spec_helper$text_BANG_(var_args){
var G__19127 = arguments.length;
switch (G__19127) {
case 1:
return c3kit.wire.spec_helper.text_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.text_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.text_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),thing).innerText;
}));

(c3kit.wire.spec_helper.text_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),root,selector).innerText;
}));

(c3kit.wire.spec_helper.text_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Return nil if the node doesn't exist.
 */
c3kit.wire.spec_helper.text = (function c3kit$wire$spec_helper$text(var_args){
var G__19130 = arguments.length;
switch (G__19130) {
case 0:
return c3kit.wire.spec_helper.text.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.spec_helper.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return c3kit.wire.js.node_text.call(null,c3kit.wire.js.doc_body.call(null));
}));

(c3kit.wire.spec_helper.text.cljs$core$IFn$_invoke$arity$1 = (function (selector_or_elem){
if(typeof selector_or_elem === 'string'){
var G__19131 = c3kit.wire.spec_helper.select.call(null,selector_or_elem);
if((G__19131 == null)){
return null;
} else {
return c3kit.wire.js.node_text.call(null,G__19131);
}
} else {
if((selector_or_elem == null)){
return null;
} else {
return c3kit.wire.js.node_text.call(null,selector_or_elem);

}
}
}));

(c3kit.wire.spec_helper.text.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
var G__19132 = c3kit.wire.spec_helper.select.call(null,root,selector);
if((G__19132 == null)){
return null;
} else {
return c3kit.wire.js.node_text.call(null,G__19132);
}
}));

(c3kit.wire.spec_helper.text.cljs$lang$maxFixedArity = 2);

/**
 * Throws exception if the node doesn't exist.
 */
c3kit.wire.spec_helper.html_BANG_ = (function c3kit$wire$spec_helper$html_BANG_(var_args){
var G__19135 = arguments.length;
switch (G__19135) {
case 1:
return c3kit.wire.spec_helper.html_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.html_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.html_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"html","html",-998796897),thing).innerHTML;
}));

(c3kit.wire.spec_helper.html_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"html","html",-998796897),root,selector).innerHTML;
}));

(c3kit.wire.spec_helper.html_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Return nil if the node doesn't exist.
 */
c3kit.wire.spec_helper.html = (function c3kit$wire$spec_helper$html(var_args){
var G__19138 = arguments.length;
switch (G__19138) {
case 0:
return c3kit.wire.spec_helper.html.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.spec_helper.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return document.body.innerHTML;
}));

(c3kit.wire.spec_helper.html.cljs$core$IFn$_invoke$arity$1 = (function (selector_or_elem){
if(typeof selector_or_elem === 'string'){
var temp__5825__auto__ = c3kit.wire.spec_helper.select.call(null,selector_or_elem);
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
return e.innerHTML;
} else {
return null;
}
} else {
if((selector_or_elem == null)){
return null;
} else {
return selector_or_elem.innerHTML;

}
}
}));

(c3kit.wire.spec_helper.html.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
var temp__5825__auto__ = c3kit.wire.spec_helper.select.call(null,root,selector);
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
return e.innerHTML;
} else {
return null;
}
}));

(c3kit.wire.spec_helper.html.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.class_name = (function c3kit$wire$spec_helper$class_name(var_args){
var G__19141 = arguments.length;
switch (G__19141) {
case 1:
return c3kit.wire.spec_helper.class_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.class_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.class_name.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"class-name","class-name",945142584),thing).className;
}));

(c3kit.wire.spec_helper.class_name.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"class-name","class-name",945142584),root,selector).className;
}));

(c3kit.wire.spec_helper.class_name.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.tag_name = (function c3kit$wire$spec_helper$tag_name(var_args){
var G__19144 = arguments.length;
switch (G__19144) {
case 1:
return c3kit.wire.spec_helper.tag_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.tag_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.tag_name.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"tag-name","tag-name",-1615615357),thing).tagName;
}));

(c3kit.wire.spec_helper.tag_name.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"tag-name","tag-name",-1615615357),root,selector).tagName;
}));

(c3kit.wire.spec_helper.tag_name.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.href = (function c3kit$wire$spec_helper$href(var_args){
var G__19147 = arguments.length;
switch (G__19147) {
case 1:
return c3kit.wire.spec_helper.href.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.href.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"href","href",-793805698),thing).href;
}));

(c3kit.wire.spec_helper.href.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"href","href",-793805698),root,selector).href;
}));

(c3kit.wire.spec_helper.href.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.id = (function c3kit$wire$spec_helper$id(var_args){
var G__19150 = arguments.length;
switch (G__19150) {
case 1:
return c3kit.wire.spec_helper.id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.id.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),thing).id;
}));

(c3kit.wire.spec_helper.id.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),root,selector).id;
}));

(c3kit.wire.spec_helper.id.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.value = (function c3kit$wire$spec_helper$value(var_args){
var G__19153 = arguments.length;
switch (G__19153) {
case 1:
return c3kit.wire.spec_helper.value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.value.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"value","value",305978217),thing).value;
}));

(c3kit.wire.spec_helper.value.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"value","value",305978217),root,selector).value;
}));

(c3kit.wire.spec_helper.value.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.placeholder = (function c3kit$wire$spec_helper$placeholder(var_args){
var G__19155 = arguments.length;
switch (G__19155) {
case 1:
return c3kit.wire.spec_helper.placeholder.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.placeholder.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.placeholder.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),thing).placeholder;
}));

(c3kit.wire.spec_helper.placeholder.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),root,selector).placeholder;
}));

(c3kit.wire.spec_helper.placeholder.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.checked_QMARK_ = (function c3kit$wire$spec_helper$checked_QMARK_(var_args){
var G__19158 = arguments.length;
switch (G__19158) {
case 1:
return c3kit.wire.spec_helper.checked_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.checked_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.checked_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091),thing).checked;
}));

(c3kit.wire.spec_helper.checked_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091),root,selector).checked;
}));

(c3kit.wire.spec_helper.checked_QMARK_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.disabled_QMARK_ = (function c3kit$wire$spec_helper$disabled_QMARK_(var_args){
var G__19162 = arguments.length;
switch (G__19162) {
case 1:
return c3kit.wire.spec_helper.disabled_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.disabled_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.disabled_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),thing).disabled;
}));

(c3kit.wire.spec_helper.disabled_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),root,selector).disabled;
}));

(c3kit.wire.spec_helper.disabled_QMARK_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.readonly_QMARK_ = (function c3kit$wire$spec_helper$readonly_QMARK_(var_args){
var G__19165 = arguments.length;
switch (G__19165) {
case 1:
return c3kit.wire.spec_helper.readonly_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.readonly_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.readonly_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"readonly?","readonly?",988057827),thing).readOnly;
}));

(c3kit.wire.spec_helper.readonly_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"readonly?","readonly?",988057827),root,selector).readOnly;
}));

(c3kit.wire.spec_helper.readonly_QMARK_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.src = (function c3kit$wire$spec_helper$src(var_args){
var G__19168 = arguments.length;
switch (G__19168) {
case 1:
return c3kit.wire.spec_helper.src.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.src.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.src.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),thing).src;
}));

(c3kit.wire.spec_helper.src.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),root,selector).src;
}));

(c3kit.wire.spec_helper.src.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.alt = (function c3kit$wire$spec_helper$alt(var_args){
var G__19171 = arguments.length;
switch (G__19171) {
case 1:
return c3kit.wire.spec_helper.alt.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.alt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.alt.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"alt","alt",-3214426),thing).alt;
}));

(c3kit.wire.spec_helper.alt.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"alt","alt",-3214426),root,selector).alt;
}));

(c3kit.wire.spec_helper.alt.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.style = (function c3kit$wire$spec_helper$style(var_args){
var G__19173 = arguments.length;
switch (G__19173) {
case 1:
return c3kit.wire.spec_helper.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.style.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),thing).style;
}));

(c3kit.wire.spec_helper.style.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),root,selector).style;
}));

(c3kit.wire.spec_helper.style.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.print_html = (function c3kit$wire$spec_helper$print_html(){
return cljs.core.println.call(null,"HTML: ",c3kit.wire.spec_helper.html.call(null));
});
c3kit.wire.spec_helper.print_error = (function c3kit$wire$spec_helper$print_error(e,file,line,col){
cljs.core.println.call(null,"********* JS ERROR *********");

cljs.core.println.call(null,"\t",e);

cljs.core.println.call(null,"\t",clojure.string.join.call(null,":",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [file,line,col], null)));

return cljs.core.println.call(null,"****************************");
});
c3kit.wire.spec_helper.print_js_errors = (function c3kit$wire$spec_helper$print_js_errors(){
return (window.onerror = c3kit.wire.spec_helper.print_error);
});
c3kit.wire.spec_helper.stub_ajax = (function c3kit$wire$spec_helper$stub_ajax(){
return speclj.components.new_around.call(null,(function (it__18523__auto__){
var post_BANG__orig_val__19176 = c3kit.wire.ajax.post_BANG_;
var get_BANG__orig_val__19177 = c3kit.wire.ajax.get_BANG_;
var post_BANG__temp_val__19178 = speclj.stub.stub.call(null,new cljs.core.Keyword("ajax","post!","ajax/post!",-369377915),cljs.core.PersistentArrayMap.EMPTY);
var get_BANG__temp_val__19179 = speclj.stub.stub.call(null,new cljs.core.Keyword("ajax","get!","ajax/get!",1836236045),cljs.core.PersistentArrayMap.EMPTY);
(c3kit.wire.ajax.post_BANG_ = post_BANG__temp_val__19178);

(c3kit.wire.ajax.get_BANG_ = get_BANG__temp_val__19179);

try{return it__18523__auto__.call(null);
}finally {(c3kit.wire.ajax.get_BANG_ = get_BANG__orig_val__19177);

(c3kit.wire.ajax.post_BANG_ = post_BANG__orig_val__19176);
}}));
});
c3kit.wire.spec_helper.last_ajax_post_url = (function c3kit$wire$spec_helper$last_ajax_post_url(){
var temp__5825__auto__ = speclj.stub.last_invocation_of.call(null,new cljs.core.Keyword("ajax","post!","ajax/post!",-369377915));
if(cljs.core.truth_(temp__5825__auto__)){
var args = temp__5825__auto__;
return cljs.core.first.call(null,args);
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ajax_get_url = (function c3kit$wire$spec_helper$last_ajax_get_url(){
var temp__5825__auto__ = speclj.stub.last_invocation_of.call(null,new cljs.core.Keyword("ajax","get!","ajax/get!",1836236045));
if(cljs.core.truth_(temp__5825__auto__)){
var args = temp__5825__auto__;
return cljs.core.first.call(null,args);
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ajax_post_params = (function c3kit$wire$spec_helper$last_ajax_post_params(){
var temp__5825__auto__ = speclj.stub.last_invocation_of.call(null,new cljs.core.Keyword("ajax","post!","ajax/post!",-369377915));
if(cljs.core.truth_(temp__5825__auto__)){
var args = temp__5825__auto__;
return cljs.core.second.call(null,args);
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ajax_get_params = (function c3kit$wire$spec_helper$last_ajax_get_params(){
var temp__5825__auto__ = speclj.stub.last_invocation_of.call(null,new cljs.core.Keyword("ajax","get!","ajax/get!",1836236045));
if(cljs.core.truth_(temp__5825__auto__)){
var args = temp__5825__auto__;
return cljs.core.second.call(null,args);
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ajax_post_handler = (function c3kit$wire$spec_helper$last_ajax_post_handler(){
var temp__5825__auto__ = speclj.stub.last_invocation_of.call(null,new cljs.core.Keyword("ajax","post!","ajax/post!",-369377915));
if(cljs.core.truth_(temp__5825__auto__)){
var args = temp__5825__auto__;
return cljs.core.nth.call(null,args,(2));
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ajax_get_handler = (function c3kit$wire$spec_helper$last_ajax_get_handler(){
var temp__5825__auto__ = speclj.stub.last_invocation_of.call(null,new cljs.core.Keyword("ajax","get!","ajax/get!",1836236045));
if(cljs.core.truth_(temp__5825__auto__)){
var args = temp__5825__auto__;
return cljs.core.nth.call(null,args,(2));
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ajax_post_options = (function c3kit$wire$spec_helper$last_ajax_post_options(){
var temp__5825__auto__ = speclj.stub.last_invocation_of.call(null,new cljs.core.Keyword("ajax","post!","ajax/post!",-369377915));
if(cljs.core.truth_(temp__5825__auto__)){
var args = temp__5825__auto__;
return c3kit.apron.corec.__GT_options.call(null,cljs.core.drop.call(null,(3),args));
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ajax_get_options = (function c3kit$wire$spec_helper$last_ajax_get_options(){
var temp__5825__auto__ = speclj.stub.last_invocation_of.call(null,new cljs.core.Keyword("ajax","get!","ajax/get!",1836236045));
if(cljs.core.truth_(temp__5825__auto__)){
var args = temp__5825__auto__;
return c3kit.apron.corec.__GT_options.call(null,cljs.core.drop.call(null,(3),args));
} else {
return null;
}
});
c3kit.wire.spec_helper.invoke_last_ajax_post_handler = (function c3kit$wire$spec_helper$invoke_last_ajax_post_handler(payload){
var G__19180 = c3kit.wire.spec_helper.last_ajax_post_handler.call(null);
if((G__19180 == null)){
return null;
} else {
return c3kit.apron.corec.invoke.call(null,G__19180,payload);
}
});
c3kit.wire.spec_helper.invoke_last_ajax_get_handler = (function c3kit$wire$spec_helper$invoke_last_ajax_get_handler(payload){
var G__19181 = c3kit.wire.spec_helper.last_ajax_get_handler.call(null);
if((G__19181 == null)){
return null;
} else {
return c3kit.apron.corec.invoke.call(null,G__19181,payload);
}
});
c3kit.wire.spec_helper.stub_ws = (function c3kit$wire$spec_helper$stub_ws(){
return speclj.components.new_around.call(null,(function (it__18523__auto__){
var call_BANG__orig_val__19182 = c3kit.wire.websocket.call_BANG_;
var call_BANG__temp_val__19183 = speclj.stub.stub.call(null,new cljs.core.Keyword("ws","call!","ws/call!",1190060416),cljs.core.PersistentArrayMap.EMPTY);
(c3kit.wire.websocket.call_BANG_ = call_BANG__temp_val__19183);

try{return it__18523__auto__.call(null);
}finally {(c3kit.wire.websocket.call_BANG_ = call_BANG__orig_val__19182);
}}));
});
c3kit.wire.spec_helper.last_ws_call_id = (function c3kit$wire$spec_helper$last_ws_call_id(){
var temp__5825__auto__ = speclj.stub.last_invocation_of.call(null,new cljs.core.Keyword("ws","call!","ws/call!",1190060416));
if(cljs.core.truth_(temp__5825__auto__)){
var args = temp__5825__auto__;
return cljs.core.first.call(null,args);
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ws_call_params = (function c3kit$wire$spec_helper$last_ws_call_params(){
var temp__5825__auto__ = speclj.stub.last_invocation_of.call(null,new cljs.core.Keyword("ws","call!","ws/call!",1190060416));
if(cljs.core.truth_(temp__5825__auto__)){
var args = temp__5825__auto__;
return cljs.core.second.call(null,args);
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ws_call_handler = (function c3kit$wire$spec_helper$last_ws_call_handler(){
var temp__5825__auto__ = speclj.stub.last_invocation_of.call(null,new cljs.core.Keyword("ws","call!","ws/call!",1190060416));
if(cljs.core.truth_(temp__5825__auto__)){
var args = temp__5825__auto__;
return cljs.core.nth.call(null,args,(2));
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ws_call_options = (function c3kit$wire$spec_helper$last_ws_call_options(){
var temp__5825__auto__ = speclj.stub.last_invocation_of.call(null,new cljs.core.Keyword("ws","call!","ws/call!",1190060416));
if(cljs.core.truth_(temp__5825__auto__)){
var args = temp__5825__auto__;
return c3kit.apron.corec.__GT_options.call(null,cljs.core.drop.call(null,(3),args));
} else {
return null;
}
});
c3kit.wire.spec_helper.invoke_last_ws_call_handler = (function c3kit$wire$spec_helper$invoke_last_ws_call_handler(payload){
var G__19184 = c3kit.wire.spec_helper.last_ws_call_handler.call(null);
if((G__19184 == null)){
return null;
} else {
return c3kit.apron.corec.invoke.call(null,G__19184,payload);
}
});

//# sourceMappingURL=spec_helper.js.map
