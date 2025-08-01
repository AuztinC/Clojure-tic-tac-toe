// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.platform');
goog.require('cljs.core');
goog.require('clojure.string');
speclj.platform.endl = "\n";
speclj.platform.file_separator = "/";
speclj.platform.source_file_regex = /.*\.clj(c|s)/;
speclj.platform.re_QMARK_ = (function speclj$platform$re_QMARK_(obj){
return (obj instanceof RegExp);
});
speclj.platform.bound_by_should_invoke_QMARK_ = (function speclj$platform$bound_by_should_invoke_QMARK_(){
return speclj.platform._STAR_bound_by_should_invoke_STAR_;
});
speclj.platform.throwable = Object;
speclj.platform.exception = Error;
speclj.platform.difference_greater_than_delta_QMARK_ = (function speclj$platform$difference_greater_than_delta_QMARK_(expected,actual,delta){
return (cljs.core.abs.call(null,(expected - actual)) > cljs.core.abs.call(null,delta));
});
speclj.platform.failure_source_str = (function speclj$platform$failure_source_str(e){
if(cljs.core.truth_(e.fileName)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.fileName),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = e.lineNumber;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "?";
}
})())].join('');
} else {
if(cljs.core.truth_(e.stack)){
return clojure.string.trim.call(null,cljs.core.nth.call(null,clojure.string.split_lines.call(null,e.stack),cljs.core.count.call(null,clojure.string.split_lines.call(null,e.message))));
} else {
return "unkown-file:?";

}
}
});
speclj.platform.error_message = (function speclj$platform$error_message(e){
return e.message;
});
speclj.platform.error_str = (function speclj$platform$error_str(e){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e);
});
speclj.platform.stack_trace = (function speclj$platform$stack_trace(e){
return cljs.core.rest.call(null,clojure.string.split_lines.call(null,(function (){var or__5025__auto__ = e.stack;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return e.toString();
}
})()));
});
speclj.platform.cause = (function speclj$platform$cause(e){
return e.cause;
});
speclj.platform.print_stack_trace = (function speclj$platform$print_stack_trace(e){
return cljs.core.println.call(null,(function (){var or__5025__auto__ = e.stack;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "missing stack trace";
}
})());
});
speclj.platform.elide_level_QMARK_ = (function speclj$platform$elide_level_QMARK_(_stack_element){
return false;
});
speclj.platform.type_name = (function speclj$platform$type_name(t){
if(cljs.core.truth_(t)){
return t.name;
} else {
return "nil";
}
});
speclj.platform.format_seconds = (function speclj$platform$format_seconds(secs){
return secs.toFixed((5));
});
speclj.platform.current_time = (function speclj$platform$current_time(){
return (new Date()).getTime();
});
speclj.platform.secs_since = (function speclj$platform$secs_since(start){
return (((new Date()).getTime() - start) / 1000.0);
});
(cljs.core._STAR_print_fn_STAR_ = (function (thing){
return console.log(thing);
}));
speclj.platform.dynamically_invoke = (function speclj$platform$dynamically_invoke(ns_name,fn_name){
var code = [clojure.string.replace.call(null,ns_name,"-","_"),".",clojure.string.replace.call(null,fn_name,"-","_"),"();"].join('');
return eval(code);
});
speclj.platform.get_name = (function speclj$platform$get_name(ns){
return ns.name();
});

//# sourceMappingURL=platform.js.map
