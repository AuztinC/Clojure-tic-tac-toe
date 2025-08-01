// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.flashc');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.schema');
c3kit.wire.flashc.flash_schema = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ignore","ignore",-1631542033)], null),new cljs.core.Keyword(null,"persist","persist",815289548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (p1__15272_SHARP_){
var or__5025__auto__ = p1__15272_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.new_uuid.call(null));
}
})], null)], null);
c3kit.wire.flashc.conform_BANG_ = (function c3kit$wire$flashc$conform_BANG_(flash){
return c3kit.apron.schema.conform_BANG_.call(null,c3kit.wire.flashc.flash_schema,flash);
});
c3kit.wire.flashc.create = (function c3kit$wire$flashc$create(var_args){
var G__15281 = arguments.length;
switch (G__15281) {
case 2:
return c3kit.wire.flashc.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.flashc.create.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.flashc.create.cljs$core$IFn$_invoke$arity$2 = (function (class$,txt){
return c3kit.wire.flashc.create.call(null,class$,txt,false);
}));

(c3kit.wire.flashc.create.cljs$core$IFn$_invoke$arity$3 = (function (class$,txt,persist){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"level","level",1290497552),class$,new cljs.core.Keyword(null,"text","text",-1790561697),txt,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.new_uuid.call(null)),new cljs.core.Keyword(null,"persist","persist",815289548),persist], null);
}));

(c3kit.wire.flashc.create.cljs$lang$maxFixedArity = 3);

c3kit.wire.flashc.error = (function c3kit$wire$flashc$error(txt){
return c3kit.wire.flashc.create.call(null,new cljs.core.Keyword(null,"error","error",-978969032),txt);
});
c3kit.wire.flashc.warn = (function c3kit$wire$flashc$warn(txt){
return c3kit.wire.flashc.create.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),txt);
});
c3kit.wire.flashc.success = (function c3kit$wire$flashc$success(txt){
return c3kit.wire.flashc.create.call(null,new cljs.core.Keyword(null,"success","success",1890645906),txt);
});
c3kit.wire.flashc.success_QMARK_ = (function c3kit$wire$flashc$success_QMARK_(flash){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(flash));
});
c3kit.wire.flashc.warn_QMARK_ = (function c3kit$wire$flashc$warn_QMARK_(flash){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(flash));
});
c3kit.wire.flashc.error_QMARK_ = (function c3kit$wire$flashc$error_QMARK_(flash){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(flash));
});
c3kit.wire.flashc.text = (function c3kit$wire$flashc$text(flash){
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(flash);
});
c3kit.wire.flashc.level = (function c3kit$wire$flashc$level(flash){
return new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(flash);
});
c3kit.wire.flashc.id = (function c3kit$wire$flashc$id(flash){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(flash);
});
c3kit.wire.flashc.flash_class = (function c3kit$wire$flashc$flash_class(flash){
if(c3kit.wire.flashc.error_QMARK_.call(null,flash)){
return "error";
} else {
if(c3kit.wire.flashc.warn_QMARK_.call(null,flash)){
return "warn";
} else {
return "success";

}
}
});

//# sourceMappingURL=flashc.js.map
