// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.config');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('speclj.platform');
speclj.config.default_reporters = cljs.core.atom.call(null,null);
speclj.config.active_reporters = (function speclj$config$active_reporters(){
if(cljs.core.truth_(speclj.config._STAR_reporters_STAR_)){
return speclj.config._STAR_reporters_STAR_;
} else {
var temp__5823__auto__ = cljs.core.deref.call(null,speclj.config.default_reporters);
if(cljs.core.truth_(temp__5823__auto__)){
var reporters = temp__5823__auto__;
return reporters;
} else {
throw (new Error("*reporters* is unbound and no default value has been provided"));
}
}
});
speclj.config.default_runner = cljs.core.atom.call(null,null);
speclj.config.default_runner_fn = cljs.core.atom.call(null,null);
speclj.config.active_runner = (function speclj$config$active_runner(){
if(cljs.core.truth_(speclj.config._STAR_runner_STAR_)){
return speclj.config._STAR_runner_STAR_;
} else {
var temp__5823__auto__ = cljs.core.deref.call(null,speclj.config.default_runner);
if(cljs.core.truth_(temp__5823__auto__)){
var runner = temp__5823__auto__;
return runner;
} else {
throw (new Error("*runner* is unbound and no default value has been provided"));
}
}
});
goog.exportSymbol('speclj.config.active_runner', speclj.config.active_runner);
speclj.config._STAR_omit_pending_QMARK__STAR_ = false;
speclj.config._STAR_color_QMARK__STAR_ = false;
speclj.config._STAR_full_stack_trace_QMARK__STAR_ = false;
speclj.config._STAR_tag_filter_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include","include",153360230),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"exclude","exclude",-1230250334),cljs.core.PersistentHashSet.EMPTY], null);
speclj.config.default_config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["spec"], null),new cljs.core.Keyword(null,"runner","runner",1945441304),"standard",new cljs.core.Keyword(null,"reporters","reporters",-373999166),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["progress"], null),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"omit-pending","omit-pending",-1591740250),false], null);
speclj.config.config_bindings = (function speclj$config$config_bindings(){
throw "Not Supported in ClojureScript";
});
speclj.config.load_runner = (function speclj$config$load_runner(name){
try{return speclj.platform.dynamically_invoke.call(null,["speclj.run.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),["new-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-runner"].join(''));
}catch (e6742){var e = e6742;
throw (new Error(["Failed to load runner: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),e));
}});
speclj.config.load_reporter_by_name = (function speclj$config$load_reporter_by_name(name){
try{return speclj.platform.dynamically_invoke.call(null,["speclj.report.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),["new-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-reporter"].join(''));
}catch (e6743){var e = e6743;
throw (new Error(["Failed to load reporter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),e));
}});
speclj.config.load_reporter_by_name_QMARK_ = (function speclj$config$load_reporter_by_name_QMARK_(name_or_object){
return typeof name_or_object === 'string';
});
speclj.config.load_reporter = (function speclj$config$load_reporter(name_or_object){
var G__6744 = name_or_object;
if(speclj.config.load_reporter_by_name_QMARK_.call(null,name_or_object)){
return speclj.config.load_reporter_by_name.call(null,G__6744);
} else {
return G__6744;
}
});
speclj.config.parse_tag = (function speclj$config$parse_tag(tag){
var tag__$1 = cljs.core.name.call(null,tag);
if(clojure.string.starts_with_QMARK_.call(null,tag__$1,"~")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945),clojure.string.replace.call(null,tag__$1,/^~/,"")], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"includes","includes",-438304563),tag__$1], null);
}
});
speclj.config.with_tag = (function speclj$config$with_tag(tag_filter,tag){
var vec__6745 = speclj.config.parse_tag.call(null,tag);
var flag = cljs.core.nth.call(null,vec__6745,(0),null);
var value = cljs.core.nth.call(null,vec__6745,(1),null);
return cljs.core.update.call(null,tag_filter,flag,cljs.core.conj,cljs.core.keyword.call(null,value));
});
speclj.config.parse_tags = (function speclj$config$parse_tags(tags){
return cljs.core.reduce.call(null,speclj.config.with_tag,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"includes","includes",-438304563),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"excludes","excludes",-1791725945),cljs.core.PersistentHashSet.EMPTY], null),tags);
});
speclj.config.config_mappings = (function speclj$config$config_mappings(_){
throw "Not Supported in ClojureScript";
});
/**
 * Runs the given function with all the configurations set.  Useful in cljs because config-mappings can't be used.
 */
speclj.config.with_config = (function speclj$config$with_config(config,action){
var _STAR_runner_STAR__orig_val__6748 = speclj.config._STAR_runner_STAR_;
var _STAR_reporters_STAR__orig_val__6749 = speclj.config._STAR_reporters_STAR_;
var _STAR_specs_STAR__orig_val__6750 = speclj.config._STAR_specs_STAR_;
var _STAR_color_QMARK__STAR__orig_val__6751 = speclj.config._STAR_color_QMARK__STAR_;
var _STAR_omit_pending_QMARK__STAR__orig_val__6752 = speclj.config._STAR_omit_pending_QMARK__STAR_;
var _STAR_full_stack_trace_QMARK__STAR__orig_val__6753 = speclj.config._STAR_full_stack_trace_QMARK__STAR_;
var _STAR_tag_filter_STAR__orig_val__6754 = speclj.config._STAR_tag_filter_STAR_;
var _STAR_runner_STAR__temp_val__6755 = (cljs.core.truth_(new cljs.core.Keyword(null,"runner","runner",1945441304).cljs$core$IFn$_invoke$arity$1(config))?speclj.config.load_runner.call(null,new cljs.core.Keyword(null,"runner","runner",1945441304).cljs$core$IFn$_invoke$arity$1(config)):speclj.config.active_runner.call(null));
var _STAR_reporters_STAR__temp_val__6756 = (cljs.core.truth_(new cljs.core.Keyword(null,"reporters","reporters",-373999166).cljs$core$IFn$_invoke$arity$1(config))?cljs.core.mapv.call(null,speclj.config.load_reporter,new cljs.core.Keyword(null,"reporters","reporters",-373999166).cljs$core$IFn$_invoke$arity$1(config)):speclj.config.active_reporters.call(null));
var _STAR_specs_STAR__temp_val__6757 = new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_color_QMARK__STAR__temp_val__6758 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_omit_pending_QMARK__STAR__temp_val__6759 = new cljs.core.Keyword(null,"omit-pending","omit-pending",-1591740250).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_full_stack_trace_QMARK__STAR__temp_val__6760 = (!((new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394).cljs$core$IFn$_invoke$arity$1(config) == null)));
var _STAR_tag_filter_STAR__temp_val__6761 = speclj.config.parse_tags.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(config));
(speclj.config._STAR_runner_STAR_ = _STAR_runner_STAR__temp_val__6755);

(speclj.config._STAR_reporters_STAR_ = _STAR_reporters_STAR__temp_val__6756);

(speclj.config._STAR_specs_STAR_ = _STAR_specs_STAR__temp_val__6757);

(speclj.config._STAR_color_QMARK__STAR_ = _STAR_color_QMARK__STAR__temp_val__6758);

(speclj.config._STAR_omit_pending_QMARK__STAR_ = _STAR_omit_pending_QMARK__STAR__temp_val__6759);

(speclj.config._STAR_full_stack_trace_QMARK__STAR_ = _STAR_full_stack_trace_QMARK__STAR__temp_val__6760);

(speclj.config._STAR_tag_filter_STAR_ = _STAR_tag_filter_STAR__temp_val__6761);

try{return action.call(null);
}finally {(speclj.config._STAR_tag_filter_STAR_ = _STAR_tag_filter_STAR__orig_val__6754);

(speclj.config._STAR_full_stack_trace_QMARK__STAR_ = _STAR_full_stack_trace_QMARK__STAR__orig_val__6753);

(speclj.config._STAR_omit_pending_QMARK__STAR_ = _STAR_omit_pending_QMARK__STAR__orig_val__6752);

(speclj.config._STAR_color_QMARK__STAR_ = _STAR_color_QMARK__STAR__orig_val__6751);

(speclj.config._STAR_specs_STAR_ = _STAR_specs_STAR__orig_val__6750);

(speclj.config._STAR_reporters_STAR_ = _STAR_reporters_STAR__orig_val__6749);

(speclj.config._STAR_runner_STAR_ = _STAR_runner_STAR__orig_val__6748);
}});

//# sourceMappingURL=config.js.map
