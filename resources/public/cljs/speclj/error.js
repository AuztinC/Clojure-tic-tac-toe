// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.error');
goog.require('cljs.core');
speclj.error.pending = new cljs.core.Keyword("speclj.core","spec-pending","speclj.core/spec-pending",1858486198);
speclj.error.failure = new cljs.core.Keyword("speclj.core","spec-failure","speclj.core/spec-failure",1599553639);
speclj.error.ex_data_type_QMARK_ = (function speclj$error$ex_data_type_QMARK_(e,type){
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,e)));
});
speclj.error.pending_QMARK_ = (function speclj$error$pending_QMARK_(e){
return speclj.error.ex_data_type_QMARK_.call(null,e,speclj.error.pending);
});
speclj.error.failure_QMARK_ = (function speclj$error$failure_QMARK_(e){
return speclj.error.ex_data_type_QMARK_.call(null,e,speclj.error.failure);
});

//# sourceMappingURL=error.js.map
