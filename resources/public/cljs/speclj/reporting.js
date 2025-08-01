// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.sum_by = (function speclj$reporting$sum_by(f,coll){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,coll));
});
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return speclj.reporting.sum_by.call(null,(function (p1__6775_SHARP_){
return p1__6775_SHARP_.seconds;
}),results);
});
speclj.reporting.tally_assertions = (function speclj$reporting$tally_assertions(results){
return speclj.reporting.sum_by.call(null,(function (p1__6778_SHARP_){
return p1__6778_SHARP_.assertions;
}),results);
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_6801 = (function (reporter,message){
var x__5373__auto__ = (((reporter == null))?null:reporter);
var m__5374__auto__ = (speclj.reporting.report_message[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,reporter,message);
} else {
var m__5372__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_6801.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_6803 = (function (this$,description){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_description[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,description);
} else {
var m__5372__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_6803.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_6808 = (function (this$,result){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,result);
} else {
var m__5372__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_6808.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_6810 = (function (this$,result){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,result);
} else {
var m__5372__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_6810.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_6811 = (function (this$,result){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,result);
} else {
var m__5372__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_6811.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_6812 = (function (this$,results){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,results);
} else {
var m__5372__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_6812.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_6817 = (function (this$,exception){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_error[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,exception);
} else {
var m__5372__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_6817.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,_reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__6804 = cljs.core.seq.call(null,reporters);
var chunk__6805 = null;
var count__6806 = (0);
var i__6807 = (0);
while(true){
if((i__6807 < count__6806)){
var reporter = cljs.core._nth.call(null,chunk__6805,i__6807);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6819 = seq__6804;
var G__6820 = chunk__6805;
var G__6821 = count__6806;
var G__6822 = (i__6807 + (1));
seq__6804 = G__6819;
chunk__6805 = G__6820;
count__6806 = G__6821;
i__6807 = G__6822;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6804);
if(temp__5825__auto__){
var seq__6804__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6804__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6804__$1);
var G__6823 = cljs.core.chunk_rest.call(null,seq__6804__$1);
var G__6824 = c__5548__auto__;
var G__6825 = cljs.core.count.call(null,c__5548__auto__);
var G__6826 = (0);
seq__6804 = G__6823;
chunk__6805 = G__6824;
count__6806 = G__6825;
i__6807 = G__6826;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6804__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6827 = cljs.core.next.call(null,seq__6804__$1);
var G__6828 = null;
var G__6829 = (0);
var G__6830 = (0);
seq__6804 = G__6827;
chunk__6805 = G__6828;
count__6806 = G__6829;
i__6807 = G__6830;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__6813 = cljs.core.seq.call(null,reporters);
var chunk__6814 = null;
var count__6815 = (0);
var i__6816 = (0);
while(true){
if((i__6816 < count__6815)){
var reporter = cljs.core._nth.call(null,chunk__6814,i__6816);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6836 = seq__6813;
var G__6837 = chunk__6814;
var G__6838 = count__6815;
var G__6839 = (i__6816 + (1));
seq__6813 = G__6836;
chunk__6814 = G__6837;
count__6815 = G__6838;
i__6816 = G__6839;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6813);
if(temp__5825__auto__){
var seq__6813__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6813__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6813__$1);
var G__6840 = cljs.core.chunk_rest.call(null,seq__6813__$1);
var G__6841 = c__5548__auto__;
var G__6842 = cljs.core.count.call(null,c__5548__auto__);
var G__6843 = (0);
seq__6813 = G__6840;
chunk__6814 = G__6841;
count__6815 = G__6842;
i__6816 = G__6843;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6813__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6844 = cljs.core.next.call(null,seq__6813__$1);
var G__6845 = null;
var G__6846 = (0);
var G__6847 = (0);
seq__6813 = G__6844;
chunk__6814 = G__6845;
count__6815 = G__6846;
i__6816 = G__6847;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__6832 = cljs.core.seq.call(null,reporters);
var chunk__6833 = null;
var count__6834 = (0);
var i__6835 = (0);
while(true){
if((i__6835 < count__6834)){
var reporter = cljs.core._nth.call(null,chunk__6833,i__6835);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6854 = seq__6832;
var G__6855 = chunk__6833;
var G__6856 = count__6834;
var G__6857 = (i__6835 + (1));
seq__6832 = G__6854;
chunk__6833 = G__6855;
count__6834 = G__6856;
i__6835 = G__6857;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6832);
if(temp__5825__auto__){
var seq__6832__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6832__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6832__$1);
var G__6858 = cljs.core.chunk_rest.call(null,seq__6832__$1);
var G__6859 = c__5548__auto__;
var G__6860 = cljs.core.count.call(null,c__5548__auto__);
var G__6861 = (0);
seq__6832 = G__6858;
chunk__6833 = G__6859;
count__6834 = G__6860;
i__6835 = G__6861;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6832__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6863 = cljs.core.next.call(null,seq__6832__$1);
var G__6864 = null;
var G__6865 = (0);
var G__6866 = (0);
seq__6832 = G__6863;
chunk__6833 = G__6864;
count__6834 = G__6865;
i__6835 = G__6866;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__6849 = cljs.core.seq.call(null,reporters);
var chunk__6850 = null;
var count__6851 = (0);
var i__6852 = (0);
while(true){
if((i__6852 < count__6851)){
var reporter = cljs.core._nth.call(null,chunk__6850,i__6852);
speclj.reporting.report_error.call(null,reporter,result);


var G__6868 = seq__6849;
var G__6869 = chunk__6850;
var G__6870 = count__6851;
var G__6871 = (i__6852 + (1));
seq__6849 = G__6868;
chunk__6850 = G__6869;
count__6851 = G__6870;
i__6852 = G__6871;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6849);
if(temp__5825__auto__){
var seq__6849__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6849__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6849__$1);
var G__6872 = cljs.core.chunk_rest.call(null,seq__6849__$1);
var G__6873 = c__5548__auto__;
var G__6874 = cljs.core.count.call(null,c__5548__auto__);
var G__6875 = (0);
seq__6849 = G__6872;
chunk__6850 = G__6873;
count__6851 = G__6874;
i__6852 = G__6875;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6849__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__6876 = cljs.core.next.call(null,seq__6849__$1);
var G__6877 = null;
var G__6878 = (0);
var G__6879 = (0);
seq__6849 = G__6876;
chunk__6850 = G__6877;
count__6851 = G__6878;
i__6852 = G__6879;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_6886 = speclj.platform.stack_trace.call(null,exception);
var elides_6888 = (0);
while(true){
if(cljs.core.seq.call(null,levels_6886)){
var level_6890 = cljs.core.first.call(null,levels_6886);
if(speclj.platform.elide_level_QMARK_.call(null,level_6890)){
var G__6891 = cljs.core.rest.call(null,levels_6886);
var G__6892 = (elides_6888 + (1));
levels_6886 = G__6891;
elides_6888 = G__6892;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_6888);

cljs.core.println.call(null,"\tat",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_6890));

var G__6893 = cljs.core.rest.call(null,levels_6886);
var G__6894 = (0);
levels_6886 = G__6893;
elides_6888 = G__6894;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_6888);
}
break;
}

var temp__5825__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5825__auto__)){
var cause = temp__5825__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,speclj.platform.error_str.call(null,exception));
} else {
cljs.core.println.call(null,speclj.platform.error_str.call(null,exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6881_6895 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6882_6896 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6883_6897 = true;
var _STAR_print_fn_STAR__temp_val__6884_6898 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6883_6897);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6884_6898);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6882_6896);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6881_6895);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5755__auto__ = [];
var len__5749__auto___6901 = arguments.length;
var i__5750__auto___6902 = (0);
while(true){
if((i__5750__auto___6902 < len__5749__auto___6901)){
args__5755__auto__.push((arguments[i__5750__auto___6902]));

var G__6903 = (i__5750__auto___6902 + (1));
i__5750__auto___6902 = G__6903;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__6885_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6885_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq6887){
var G__6889 = cljs.core.first.call(null,seq6887);
var seq6887__$1 = cljs.core.next.call(null,seq6887);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6889,seq6887__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5755__auto__ = [];
var len__5749__auto___6908 = arguments.length;
var i__5750__auto___6909 = (0);
while(true){
if((i__5750__auto___6909 < len__5749__auto___6908)){
args__5755__auto__.push((arguments[i__5750__auto___6909]));

var G__6910 = (i__5750__auto___6909 + (1));
i__5750__auto___6909 = G__6910;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq6899){
var G__6900 = cljs.core.first.call(null,seq6899);
var seq6899__$1 = cljs.core.next.call(null,seq6899);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6900,seq6899__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__6904 = cljs.core.seq.call(null,reporters);
var chunk__6905 = null;
var count__6906 = (0);
var i__6907 = (0);
while(true){
if((i__6907 < count__6906)){
var reporter = cljs.core._nth.call(null,chunk__6905,i__6907);
speclj.reporting.report_description.call(null,reporter,description);


var G__6915 = seq__6904;
var G__6916 = chunk__6905;
var G__6917 = count__6906;
var G__6918 = (i__6907 + (1));
seq__6904 = G__6915;
chunk__6905 = G__6916;
count__6906 = G__6917;
i__6907 = G__6918;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6904);
if(temp__5825__auto__){
var seq__6904__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6904__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6904__$1);
var G__6919 = cljs.core.chunk_rest.call(null,seq__6904__$1);
var G__6920 = c__5548__auto__;
var G__6921 = cljs.core.count.call(null,c__5548__auto__);
var G__6922 = (0);
seq__6904 = G__6919;
chunk__6905 = G__6920;
count__6906 = G__6921;
i__6907 = G__6922;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6904__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__6923 = cljs.core.next.call(null,seq__6904__$1);
var G__6924 = null;
var G__6925 = (0);
var G__6926 = (0);
seq__6904 = G__6923;
chunk__6905 = G__6924;
count__6906 = G__6925;
i__6907 = G__6926;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__6911 = cljs.core.seq.call(null,reporters);
var chunk__6912 = null;
var count__6913 = (0);
var i__6914 = (0);
while(true){
if((i__6914 < count__6913)){
var reporter = cljs.core._nth.call(null,chunk__6912,i__6914);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6931 = seq__6911;
var G__6932 = chunk__6912;
var G__6933 = count__6913;
var G__6934 = (i__6914 + (1));
seq__6911 = G__6931;
chunk__6912 = G__6932;
count__6913 = G__6933;
i__6914 = G__6934;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6911);
if(temp__5825__auto__){
var seq__6911__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6911__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6911__$1);
var G__6935 = cljs.core.chunk_rest.call(null,seq__6911__$1);
var G__6936 = c__5548__auto__;
var G__6937 = cljs.core.count.call(null,c__5548__auto__);
var G__6938 = (0);
seq__6911 = G__6935;
chunk__6912 = G__6936;
count__6913 = G__6937;
i__6914 = G__6938;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6911__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6939 = cljs.core.next.call(null,seq__6911__$1);
var G__6940 = null;
var G__6941 = (0);
var G__6942 = (0);
seq__6911 = G__6939;
chunk__6912 = G__6940;
count__6913 = G__6941;
i__6914 = G__6942;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__6927 = cljs.core.seq.call(null,reporters);
var chunk__6928 = null;
var count__6929 = (0);
var i__6930 = (0);
while(true){
if((i__6930 < count__6929)){
var reporter = cljs.core._nth.call(null,chunk__6928,i__6930);
speclj.reporting.report_message.call(null,reporter,message);


var G__6955 = seq__6927;
var G__6956 = chunk__6928;
var G__6957 = count__6929;
var G__6958 = (i__6930 + (1));
seq__6927 = G__6955;
chunk__6928 = G__6956;
count__6929 = G__6957;
i__6930 = G__6958;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6927);
if(temp__5825__auto__){
var seq__6927__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6927__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6927__$1);
var G__6959 = cljs.core.chunk_rest.call(null,seq__6927__$1);
var G__6960 = c__5548__auto__;
var G__6961 = cljs.core.count.call(null,c__5548__auto__);
var G__6962 = (0);
seq__6927 = G__6959;
chunk__6928 = G__6960;
count__6929 = G__6961;
i__6930 = G__6962;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6927__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__6963 = cljs.core.next.call(null,seq__6927__$1);
var G__6964 = null;
var G__6965 = (0);
var G__6966 = (0);
seq__6927 = G__6963;
chunk__6928 = G__6964;
count__6929 = G__6965;
i__6930 = G__6966;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__6947 = cljs.core.seq.call(null,reporters);
var chunk__6948 = null;
var count__6949 = (0);
var i__6950 = (0);
while(true){
if((i__6950 < count__6949)){
var reporter = cljs.core._nth.call(null,chunk__6948,i__6950);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6967 = seq__6947;
var G__6968 = chunk__6948;
var G__6969 = count__6949;
var G__6970 = (i__6950 + (1));
seq__6947 = G__6967;
chunk__6948 = G__6968;
count__6949 = G__6969;
i__6950 = G__6970;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6947);
if(temp__5825__auto__){
var seq__6947__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6947__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6947__$1);
var G__6971 = cljs.core.chunk_rest.call(null,seq__6947__$1);
var G__6972 = c__5548__auto__;
var G__6973 = cljs.core.count.call(null,c__5548__auto__);
var G__6974 = (0);
seq__6947 = G__6971;
chunk__6948 = G__6972;
count__6949 = G__6973;
i__6950 = G__6974;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6947__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6975 = cljs.core.next.call(null,seq__6947__$1);
var G__6976 = null;
var G__6977 = (0);
var G__6978 = (0);
seq__6947 = G__6975;
chunk__6948 = G__6976;
count__6949 = G__6977;
i__6950 = G__6978;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
