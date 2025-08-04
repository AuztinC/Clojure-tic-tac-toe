// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__15576 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__15577 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__15577);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__15578 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__15579 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__15579);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__15578);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__15576);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__15584 = arguments.length;
switch (G__15584) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__15585 = ((cljs.core.map_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.call(null,vec__15585,(0),null);
var callback = cljs.core.nth.call(null,vec__15585,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__15593_15618 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__15594_15619 = null;
var count__15595_15620 = (0);
var i__15596_15621 = (0);
while(true){
if((i__15596_15621 < count__15595_15620)){
var vec__15605_15622 = cljs.core._nth.call(null,chunk__15594_15619,i__15596_15621);
var container_15623 = cljs.core.nth.call(null,vec__15605_15622,(0),null);
var comp_15624 = cljs.core.nth.call(null,vec__15605_15622,(1),null);
reagent.dom.re_render_component.call(null,comp_15624,container_15623);


var G__15626 = seq__15593_15618;
var G__15627 = chunk__15594_15619;
var G__15628 = count__15595_15620;
var G__15629 = (i__15596_15621 + (1));
seq__15593_15618 = G__15626;
chunk__15594_15619 = G__15627;
count__15595_15620 = G__15628;
i__15596_15621 = G__15629;
continue;
} else {
var temp__5825__auto___15630 = cljs.core.seq.call(null,seq__15593_15618);
if(temp__5825__auto___15630){
var seq__15593_15634__$1 = temp__5825__auto___15630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15593_15634__$1)){
var c__5548__auto___15636 = cljs.core.chunk_first.call(null,seq__15593_15634__$1);
var G__15637 = cljs.core.chunk_rest.call(null,seq__15593_15634__$1);
var G__15638 = c__5548__auto___15636;
var G__15639 = cljs.core.count.call(null,c__5548__auto___15636);
var G__15640 = (0);
seq__15593_15618 = G__15637;
chunk__15594_15619 = G__15638;
count__15595_15620 = G__15639;
i__15596_15621 = G__15640;
continue;
} else {
var vec__15612_15641 = cljs.core.first.call(null,seq__15593_15634__$1);
var container_15642 = cljs.core.nth.call(null,vec__15612_15641,(0),null);
var comp_15643 = cljs.core.nth.call(null,vec__15612_15641,(1),null);
reagent.dom.re_render_component.call(null,comp_15643,container_15642);


var G__15644 = cljs.core.next.call(null,seq__15593_15634__$1);
var G__15645 = null;
var G__15646 = (0);
var G__15647 = (0);
seq__15593_15618 = G__15644;
chunk__15594_15619 = G__15645;
count__15595_15620 = G__15646;
i__15596_15621 = G__15647;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
