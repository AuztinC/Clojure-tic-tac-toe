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
return speclj.reporting.sum_by.call(null,(function (p1__6786_SHARP_){
return p1__6786_SHARP_.seconds;
}),results);
});
speclj.reporting.tally_assertions = (function speclj$reporting$tally_assertions(results){
return speclj.reporting.sum_by.call(null,(function (p1__6787_SHARP_){
return p1__6787_SHARP_.assertions;
}),results);
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_6802 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_6802.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_6804 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_6804.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_6805 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_6805.call(null,this$,result);
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

var speclj$reporting$Reporter$report_fail$dyn_6812 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_6812.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_6813 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_6813.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_6819 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_6819.call(null,this$,exception);
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
var seq__6806 = cljs.core.seq.call(null,reporters);
var chunk__6807 = null;
var count__6808 = (0);
var i__6809 = (0);
while(true){
if((i__6809 < count__6808)){
var reporter = cljs.core._nth.call(null,chunk__6807,i__6809);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6821 = seq__6806;
var G__6822 = chunk__6807;
var G__6823 = count__6808;
var G__6824 = (i__6809 + (1));
seq__6806 = G__6821;
chunk__6807 = G__6822;
count__6808 = G__6823;
i__6809 = G__6824;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6806);
if(temp__5825__auto__){
var seq__6806__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6806__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6806__$1);
var G__6826 = cljs.core.chunk_rest.call(null,seq__6806__$1);
var G__6827 = c__5548__auto__;
var G__6828 = cljs.core.count.call(null,c__5548__auto__);
var G__6829 = (0);
seq__6806 = G__6826;
chunk__6807 = G__6827;
count__6808 = G__6828;
i__6809 = G__6829;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6806__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6830 = cljs.core.next.call(null,seq__6806__$1);
var G__6831 = null;
var G__6832 = (0);
var G__6833 = (0);
seq__6806 = G__6830;
chunk__6807 = G__6831;
count__6808 = G__6832;
i__6809 = G__6833;
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
var seq__6815 = cljs.core.seq.call(null,reporters);
var chunk__6816 = null;
var count__6817 = (0);
var i__6818 = (0);
while(true){
if((i__6818 < count__6817)){
var reporter = cljs.core._nth.call(null,chunk__6816,i__6818);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6839 = seq__6815;
var G__6840 = chunk__6816;
var G__6841 = count__6817;
var G__6842 = (i__6818 + (1));
seq__6815 = G__6839;
chunk__6816 = G__6840;
count__6817 = G__6841;
i__6818 = G__6842;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6815);
if(temp__5825__auto__){
var seq__6815__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6815__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6815__$1);
var G__6843 = cljs.core.chunk_rest.call(null,seq__6815__$1);
var G__6844 = c__5548__auto__;
var G__6845 = cljs.core.count.call(null,c__5548__auto__);
var G__6846 = (0);
seq__6815 = G__6843;
chunk__6816 = G__6844;
count__6817 = G__6845;
i__6818 = G__6846;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6815__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6847 = cljs.core.next.call(null,seq__6815__$1);
var G__6848 = null;
var G__6849 = (0);
var G__6850 = (0);
seq__6815 = G__6847;
chunk__6816 = G__6848;
count__6817 = G__6849;
i__6818 = G__6850;
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
var seq__6835 = cljs.core.seq.call(null,reporters);
var chunk__6836 = null;
var count__6837 = (0);
var i__6838 = (0);
while(true){
if((i__6838 < count__6837)){
var reporter = cljs.core._nth.call(null,chunk__6836,i__6838);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6856 = seq__6835;
var G__6857 = chunk__6836;
var G__6858 = count__6837;
var G__6859 = (i__6838 + (1));
seq__6835 = G__6856;
chunk__6836 = G__6857;
count__6837 = G__6858;
i__6838 = G__6859;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6835);
if(temp__5825__auto__){
var seq__6835__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6835__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6835__$1);
var G__6860 = cljs.core.chunk_rest.call(null,seq__6835__$1);
var G__6861 = c__5548__auto__;
var G__6862 = cljs.core.count.call(null,c__5548__auto__);
var G__6863 = (0);
seq__6835 = G__6860;
chunk__6836 = G__6861;
count__6837 = G__6862;
i__6838 = G__6863;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6835__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6864 = cljs.core.next.call(null,seq__6835__$1);
var G__6865 = null;
var G__6866 = (0);
var G__6867 = (0);
seq__6835 = G__6864;
chunk__6836 = G__6865;
count__6837 = G__6866;
i__6838 = G__6867;
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
var seq__6852 = cljs.core.seq.call(null,reporters);
var chunk__6853 = null;
var count__6854 = (0);
var i__6855 = (0);
while(true){
if((i__6855 < count__6854)){
var reporter = cljs.core._nth.call(null,chunk__6853,i__6855);
speclj.reporting.report_error.call(null,reporter,result);


var G__6869 = seq__6852;
var G__6870 = chunk__6853;
var G__6871 = count__6854;
var G__6872 = (i__6855 + (1));
seq__6852 = G__6869;
chunk__6853 = G__6870;
count__6854 = G__6871;
i__6855 = G__6872;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6852);
if(temp__5825__auto__){
var seq__6852__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6852__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6852__$1);
var G__6873 = cljs.core.chunk_rest.call(null,seq__6852__$1);
var G__6874 = c__5548__auto__;
var G__6875 = cljs.core.count.call(null,c__5548__auto__);
var G__6876 = (0);
seq__6852 = G__6873;
chunk__6853 = G__6874;
count__6854 = G__6875;
i__6855 = G__6876;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6852__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__6877 = cljs.core.next.call(null,seq__6852__$1);
var G__6878 = null;
var G__6879 = (0);
var G__6880 = (0);
seq__6852 = G__6877;
chunk__6853 = G__6878;
count__6854 = G__6879;
i__6855 = G__6880;
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
var levels_6881 = speclj.platform.stack_trace.call(null,exception);
var elides_6882 = (0);
while(true){
if(cljs.core.seq.call(null,levels_6881)){
var level_6883 = cljs.core.first.call(null,levels_6881);
if(speclj.platform.elide_level_QMARK_.call(null,level_6883)){
var G__6884 = cljs.core.rest.call(null,levels_6881);
var G__6885 = (elides_6882 + (1));
levels_6881 = G__6884;
elides_6882 = G__6885;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_6882);

cljs.core.println.call(null,"\tat",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_6883));

var G__6886 = cljs.core.rest.call(null,levels_6881);
var G__6887 = (0);
levels_6881 = G__6886;
elides_6882 = G__6887;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_6882);
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
var _STAR_print_newline_STAR__orig_val__6888_6893 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6889_6894 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6890_6895 = true;
var _STAR_print_fn_STAR__temp_val__6891_6896 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6890_6895);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6891_6896);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6889_6894);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6888_6893);
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__6892_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6892_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq6897){
var G__6898 = cljs.core.first.call(null,seq6897);
var seq6897__$1 = cljs.core.next.call(null,seq6897);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6898,seq6897__$1);
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


var G__6935 = seq__6911;
var G__6936 = chunk__6912;
var G__6937 = count__6913;
var G__6938 = (i__6914 + (1));
seq__6911 = G__6935;
chunk__6912 = G__6936;
count__6913 = G__6937;
i__6914 = G__6938;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6911);
if(temp__5825__auto__){
var seq__6911__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6911__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6911__$1);
var G__6939 = cljs.core.chunk_rest.call(null,seq__6911__$1);
var G__6940 = c__5548__auto__;
var G__6941 = cljs.core.count.call(null,c__5548__auto__);
var G__6942 = (0);
seq__6911 = G__6939;
chunk__6912 = G__6940;
count__6913 = G__6941;
i__6914 = G__6942;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6911__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6943 = cljs.core.next.call(null,seq__6911__$1);
var G__6944 = null;
var G__6945 = (0);
var G__6946 = (0);
seq__6911 = G__6943;
chunk__6912 = G__6944;
count__6913 = G__6945;
i__6914 = G__6946;
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
var seq__6931 = cljs.core.seq.call(null,reporters);
var chunk__6932 = null;
var count__6933 = (0);
var i__6934 = (0);
while(true){
if((i__6934 < count__6933)){
var reporter = cljs.core._nth.call(null,chunk__6932,i__6934);
speclj.reporting.report_message.call(null,reporter,message);


var G__6955 = seq__6931;
var G__6956 = chunk__6932;
var G__6957 = count__6933;
var G__6958 = (i__6934 + (1));
seq__6931 = G__6955;
chunk__6932 = G__6956;
count__6933 = G__6957;
i__6934 = G__6958;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6931);
if(temp__5825__auto__){
var seq__6931__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6931__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6931__$1);
var G__6959 = cljs.core.chunk_rest.call(null,seq__6931__$1);
var G__6960 = c__5548__auto__;
var G__6961 = cljs.core.count.call(null,c__5548__auto__);
var G__6962 = (0);
seq__6931 = G__6959;
chunk__6932 = G__6960;
count__6933 = G__6961;
i__6934 = G__6962;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6931__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__6963 = cljs.core.next.call(null,seq__6931__$1);
var G__6964 = null;
var G__6965 = (0);
var G__6966 = (0);
seq__6931 = G__6963;
chunk__6932 = G__6964;
count__6933 = G__6965;
i__6934 = G__6966;
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
var seq__6951 = cljs.core.seq.call(null,reporters);
var chunk__6952 = null;
var count__6953 = (0);
var i__6954 = (0);
while(true){
if((i__6954 < count__6953)){
var reporter = cljs.core._nth.call(null,chunk__6952,i__6954);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6967 = seq__6951;
var G__6968 = chunk__6952;
var G__6969 = count__6953;
var G__6970 = (i__6954 + (1));
seq__6951 = G__6967;
chunk__6952 = G__6968;
count__6953 = G__6969;
i__6954 = G__6970;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6951);
if(temp__5825__auto__){
var seq__6951__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6951__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6951__$1);
var G__6971 = cljs.core.chunk_rest.call(null,seq__6951__$1);
var G__6972 = c__5548__auto__;
var G__6973 = cljs.core.count.call(null,c__5548__auto__);
var G__6974 = (0);
seq__6951 = G__6971;
chunk__6952 = G__6972;
count__6953 = G__6973;
i__6954 = G__6974;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6951__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6975 = cljs.core.next.call(null,seq__6951__$1);
var G__6976 = null;
var G__6977 = (0);
var G__6978 = (0);
seq__6951 = G__6975;
chunk__6952 = G__6976;
count__6953 = G__6977;
i__6954 = G__6978;
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
