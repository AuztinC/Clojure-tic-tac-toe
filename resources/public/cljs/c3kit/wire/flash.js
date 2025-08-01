// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.flash');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.wire.flashc');
goog.require('c3kit.wire.js');
goog.require('c3kit.wire.util');
goog.require('reagent.core');
c3kit.wire.flash.flash_timeout_millis = cljs.core.atom.call(null,(5000));
c3kit.wire.flash.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
c3kit.wire.flash.clear_BANG_ = (function c3kit$wire$flash$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,c3kit.wire.flash.state,cljs.core.PersistentArrayMap.EMPTY);
});
c3kit.wire.flash.first_msg = (function c3kit$wire$flash$first_msg(){
return c3kit.wire.flashc.text.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,c3kit.wire.flash.state)));
});
c3kit.wire.flash.last_msg = (function c3kit$wire$flash$last_msg(){
return c3kit.wire.flashc.text.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,c3kit.wire.flash.state)));
});
c3kit.wire.flash.all_msg = (function c3kit$wire$flash$all_msg(){
return cljs.core.map.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.deref.call(null,c3kit.wire.flash.state));
});
c3kit.wire.flash.flash_EQ_ = (function c3kit$wire$flash$flash_EQ_(f1,f2){
return cljs.core._EQ_.call(null,c3kit.wire.flashc.id.call(null,f1),c3kit.wire.flashc.id.call(null,f2));
});
c3kit.wire.flash.do_flash_remove = (function c3kit$wire$flash$do_flash_remove(flashes,flash){
return cljs.core.remove.call(null,cljs.core.partial.call(null,c3kit.wire.flash.flash_EQ_,flash),flashes);
});
c3kit.wire.flash.remove_BANG_ = (function c3kit$wire$flash$remove_BANG_(flash){
return cljs.core.swap_BANG_.call(null,c3kit.wire.flash.state,c3kit.wire.flash.do_flash_remove,flash);
});
c3kit.wire.flash.active_QMARK_ = (function c3kit$wire$flash$active_QMARK_(flash){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,c3kit.wire.flash.flash_EQ_,flash),cljs.core.deref.call(null,c3kit.wire.flash.state)))){
return true;
} else {
return false;
}
});
c3kit.wire.flash.add_no_dups = (function c3kit$wire$flash$add_no_dups(flashes,flash){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,c3kit.wire.flash.flash_EQ_,flash),flashes))){
return flashes;
} else {
return c3kit.apron.corec.conjv.call(null,flashes,flash);
}
});
c3kit.wire.flash.add_BANG_ = (function c3kit$wire$flash$add_BANG_(f){
var f__$1 = c3kit.wire.flashc.conform_BANG_.call(null,f);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.flash",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["adding flash: ",f__$1], null);
}),null)),null,(64),null);

cljs.core.swap_BANG_.call(null,c3kit.wire.flash.state,c3kit.wire.flash.add_no_dups,f__$1);

if(cljs.core.truth_(new cljs.core.Keyword(null,"persist","persist",815289548).cljs$core$IFn$_invoke$arity$1(f__$1))){
} else {
c3kit.wire.js.timeout.call(null,cljs.core.deref.call(null,c3kit.wire.flash.flash_timeout_millis),(function (){
return c3kit.wire.flash.remove_BANG_.call(null,f__$1);
}));
}

return f__$1;
});
c3kit.wire.flash.add_success_BANG_ = (function c3kit$wire$flash$add_success_BANG_(msg){
return c3kit.wire.flash.add_BANG_.call(null,c3kit.wire.flashc.success.call(null,msg));
});
c3kit.wire.flash.add_warn_BANG_ = (function c3kit$wire$flash$add_warn_BANG_(msg){
return c3kit.wire.flash.add_BANG_.call(null,c3kit.wire.flashc.warn.call(null,msg));
});
c3kit.wire.flash.add_error_BANG_ = (function c3kit$wire$flash$add_error_BANG_(msg){
return c3kit.wire.flash.add_BANG_.call(null,c3kit.wire.flashc.error.call(null,msg));
});
c3kit.wire.flash.flash_message = (function c3kit$wire$flash$flash_message(flash){
var text = c3kit.wire.flashc.text.call(null,flash);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flash-message","div.flash-message",1688944932),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),c3kit.wire.flashc.flash_class.call(null,flash)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return c3kit.wire.flash.remove_BANG_.call(null,flash);
})], null),"\u2715"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flash-message-text","span.flash-message-text",1293125790),((cljs.core.seq_QMARK_.call(null,text))?c3kit.wire.util.with_react_keys.call(null,text):text)], null)], null)], null)], null);
});
c3kit.wire.flash.flash_root = (function c3kit$wire$flash$flash_root(){
var temp__5825__auto__ = cljs.core.seq.call(null,cljs.core.deref.call(null,c3kit.wire.flash.state));
if(temp__5825__auto__){
var flashes = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flash-root","div.flash-root",-1425229719),(function (){var iter__5503__auto__ = (function c3kit$wire$flash$flash_root_$_iter__16249(s__16250){
return (new cljs.core.LazySeq(null,(function (){
var s__16250__$1 = s__16250;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__16250__$1);
if(temp__5825__auto____$1){
var s__16250__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16250__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__16250__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__16252 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__16251 = (0);
while(true){
if((i__16251 < size__5502__auto__)){
var f = cljs.core._nth.call(null,c__5501__auto__,i__16251);
cljs.core.chunk_append.call(null,b__16252,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c3kit.wire.flash.flash_message,f], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c3kit.wire.flashc.id.call(null,f)], null)));

var G__16262 = (i__16251 + (1));
i__16251 = G__16262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16252),c3kit$wire$flash$flash_root_$_iter__16249.call(null,cljs.core.chunk_rest.call(null,s__16250__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16252),null);
}
} else {
var f = cljs.core.first.call(null,s__16250__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c3kit.wire.flash.flash_message,f], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c3kit.wire.flashc.id.call(null,f)], null)),c3kit$wire$flash$flash_root_$_iter__16249.call(null,cljs.core.rest.call(null,s__16250__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,flashes);
})()], null);
} else {
return null;
}
});

//# sourceMappingURL=flash.js.map
