// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.util');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('goog.dom');
goog.require('goog.dom.forms');
c3kit.wire.util.errors__GT_strings = (function c3kit$wire$util$errors__GT_strings(errors){
return cljs.core.map.call(null,(function (p__14103){
var vec__14104 = p__14103;
var field = cljs.core.nth.call(null,vec__14104,(0),null);
var error = cljs.core.nth.call(null,vec__14104,(1),null);
return [cljs.core.name.call(null,field)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join('');
}),errors);
});
c3kit.wire.util._PLUS_class_if = (function c3kit$wire$util$_PLUS_class_if(var_args){
var G__14109 = arguments.length;
switch (G__14109) {
case 2:
return c3kit.wire.util._PLUS_class_if.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.util._PLUS_class_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.util._PLUS_class_if.cljs$core$IFn$_invoke$arity$2 = (function (condition,class_name){
return c3kit.wire.util._PLUS_class_if.call(null,cljs.core.PersistentArrayMap.EMPTY,condition,class_name);
}));

(c3kit.wire.util._PLUS_class_if.cljs$core$IFn$_invoke$arity$3 = (function (attributes,condition,class_name){
var attributes__$1 = (function (){var or__5025__auto__ = attributes;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var class_name__$1 = cljs.core.name.call(null,class_name);
if(cljs.core.truth_(condition)){
var temp__5823__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attributes__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var class_value = temp__5823__auto__;
return cljs.core.assoc.call(null,attributes__$1,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_value)," ",class_name__$1].join(''));
} else {
return cljs.core.assoc.call(null,attributes__$1,new cljs.core.Keyword(null,"class","class",-2030961996),class_name__$1);
}
} else {
return attributes__$1;
}
}));

(c3kit.wire.util._PLUS_class_if.cljs$lang$maxFixedArity = 3);

c3kit.wire.util.__GT_css_class = (function c3kit$wire$util$__GT_css_class(var_args){
var args__5755__auto__ = [];
var len__5749__auto___14127 = arguments.length;
var i__5750__auto___14128 = (0);
while(true){
if((i__5750__auto___14128 < len__5749__auto___14127)){
args__5755__auto__.push((arguments[i__5750__auto___14128]));

var G__14130 = (i__5750__auto___14128 + (1));
i__5750__auto___14128 = G__14130;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return c3kit.wire.util.__GT_css_class.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(c3kit.wire.util.__GT_css_class.cljs$core$IFn$_invoke$arity$variadic = (function (classes){
return clojure.string.join.call(null," ",cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,classes)));
}));

(c3kit.wire.util.__GT_css_class.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.wire.util.__GT_css_class.cljs$lang$applyTo = (function (seq14118){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14118));
}));

c3kit.wire.util.id_counter = cljs.core.atom.call(null,(0));
c3kit.wire.util.uid = (function c3kit$wire$util$uid(){
var result = ["A_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.util.id_counter))].join('');
cljs.core.swap_BANG_.call(null,c3kit.wire.util.id_counter,cljs.core.inc);

return result;
});
c3kit.wire.util.with_react_keys = (function c3kit$wire$util$with_react_keys(col){
return c3kit.apron.corec.map_all.call(null,(function (p__14129){
var vec__14131 = p__14129;
var n = cljs.core.nth.call(null,vec__14131,(0),null);
var i = cljs.core.nth.call(null,vec__14131,(1),null);
if((((!((n == null))))?(((((n.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === n.cljs$core$IWithMeta$))))?true:(((!n.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,n):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,n))){
var m = cljs.core.meta.call(null,n);
if(cljs.core.truth_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return cljs.core.with_meta.call(null,n,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"key","key",-1516042587),i));
}
} else {
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}
}),cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,col,cljs.core.range.call(null))));
});
c3kit.wire.util.keyed_list = (function c3kit$wire$util$keyed_list(var_args){
var args__5755__auto__ = [];
var len__5749__auto___14174 = arguments.length;
var i__5750__auto___14176 = (0);
while(true){
if((i__5750__auto___14176 < len__5749__auto___14174)){
args__5755__auto__.push((arguments[i__5750__auto___14176]));

var G__14177 = (i__5750__auto___14176 + (1));
i__5750__auto___14176 = G__14177;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return c3kit.wire.util.keyed_list.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(c3kit.wire.util.keyed_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return c3kit.wire.util.with_react_keys.call(null,args);
}));

(c3kit.wire.util.keyed_list.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.wire.util.keyed_list.cljs$lang$applyTo = (function (seq14152){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14152));
}));

c3kit.wire.util.next_key = (function (){var k = cljs.core.atom.call(null,(0));
return (function (){
return cljs.core.swap_BANG_.call(null,k,cljs.core.inc);
});
})();
c3kit.wire.util.with_nested_react_keys = (function c3kit$wire$util$with_nested_react_keys(tree){
return clojure.walk.postwalk.call(null,(function (node){
if(cljs.core.vector_QMARK_.call(null,node)){
return cljs.core.with_meta.call(null,node,cljs.core.assoc.call(null,cljs.core.meta.call(null,node),new cljs.core.Keyword(null,"key","key",-1516042587),c3kit.wire.util.next_key.call(null)));
} else {
return node;
}
}),tree);
});
/**
 * Used to keep track of cursor state.
 *   Usage: (defonce flash (reagent/cursor (a/atom-observer ratom) [:flash]))
 */
c3kit.wire.util.atom_observer = (function c3kit$wire$util$atom_observer(state){
return (function() {
var G__14183 = null;
var G__14183__1 = (function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path);
});
var G__14183__2 = (function (path,value){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.util",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["updating atom:",path,value], null);
}),null)),null,(36),null);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,value);
});
G__14183 = function(path,value){
switch(arguments.length){
case 1:
return G__14183__1.call(this,path);
case 2:
return G__14183__2.call(this,path,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14183.cljs$core$IFn$_invoke$arity$1 = G__14183__1;
G__14183.cljs$core$IFn$_invoke$arity$2 = G__14183__2;
return G__14183;
})()
});
c3kit.wire.util.watch_atom = (function c3kit$wire$util$watch_atom(key,atom){
return cljs.core.add_watch.call(null,atom,key,(function (k,r,o,n){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.util",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["updating atom ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null);
}),null)),null,(37),null);
}));
});
/**
 * Given an if of a form element, loads all the inputs and returns a map {:keyword value}.
 */
c3kit.wire.util.form_data = (function c3kit$wire$util$form_data(form){
var form_map = goog.dom.forms.getFormDataMap(goog.dom.getElement(cljs.core.name.call(null,form)));
return cljs.core.reduce.call(null,(function (result,key){
var value = form_map.get(key);
if(cljs.core.truth_((function (){var and__5023__auto__ = value;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,value));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.call(null,result,cljs.core.keyword.call(null,key),cljs.core.first.call(null,value));
} else {
return cljs.core.assoc.call(null,result,cljs.core.keyword.call(null,key),value);
}
}),cljs.core.PersistentArrayMap.EMPTY,form_map.getKeys());
});

//# sourceMappingURL=util.js.map
