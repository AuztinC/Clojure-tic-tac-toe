// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.report.progress');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('speclj.config');
goog.require('speclj.error');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
speclj.report.progress.full_name = (function speclj$report$progress$full_name(characteristic){
var context = cljs.core.deref.call(null,characteristic.parent);
var name = characteristic.name;
while(true){
if(cljs.core.truth_(context)){
var G__6989 = cljs.core.deref.call(null,context.parent);
var G__6990 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(context.name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
context = G__6989;
name = G__6990;
continue;
} else {
return name;
}
break;
}
});
speclj.report.progress.print_failure = (function speclj$report$progress$print_failure(id,result){
var characteristic = result.characteristic;
var failure = result.failure;
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.indent.call(null,(1),id,") ",speclj.report.progress.full_name.call(null,characteristic)));

cljs.core.println.call(null,speclj.reporting.red.call(null,speclj.reporting.indent.call(null,2.5,speclj.platform.error_message.call(null,failure))));

if(speclj.error.failure_QMARK_.call(null,failure)){
return cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.platform.failure_source_str.call(null,failure))));
} else {
return cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.reporting.stack_trace_str.call(null,failure))));
}
});
speclj.report.progress.print_failures = (function speclj$report$progress$print_failures(failures){
if(cljs.core.seq.call(null,failures)){
cljs.core.println.call(null);

cljs.core.println.call(null,"Failures:");
} else {
}

var n__5616__auto__ = cljs.core.count.call(null,failures);
var i = (0);
while(true){
if((i < n__5616__auto__)){
speclj.report.progress.print_failure.call(null,(i + (1)),cljs.core.nth.call(null,failures,i));

var G__7005 = (i + (1));
i = G__7005;
continue;
} else {
return null;
}
break;
}
});
speclj.report.progress.print_pendings = (function speclj$report$progress$print_pendings(pending_results){
if(cljs.core.truth_(speclj.config._STAR_omit_pending_QMARK__STAR_)){
return null;
} else {
if(cljs.core.seq.call(null,pending_results)){
cljs.core.println.call(null);

cljs.core.println.call(null,"Pending:");
} else {
}

var seq__6993 = cljs.core.seq.call(null,pending_results);
var chunk__6994 = null;
var count__6995 = (0);
var i__6996 = (0);
while(true){
if((i__6996 < count__6995)){
var result = cljs.core._nth.call(null,chunk__6994,i__6996);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.yellow.call(null,["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name.call(null,result.characteristic))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message.call(null,result.exception))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",speclj.platform.failure_source_str.call(null,result.exception)].join('')));


var G__7021 = seq__6993;
var G__7022 = chunk__6994;
var G__7023 = count__6995;
var G__7024 = (i__6996 + (1));
seq__6993 = G__7021;
chunk__6994 = G__7022;
count__6995 = G__7023;
i__6996 = G__7024;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6993);
if(temp__5825__auto__){
var seq__6993__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6993__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6993__$1);
var G__7025 = cljs.core.chunk_rest.call(null,seq__6993__$1);
var G__7026 = c__5548__auto__;
var G__7027 = cljs.core.count.call(null,c__5548__auto__);
var G__7028 = (0);
seq__6993 = G__7025;
chunk__6994 = G__7026;
count__6995 = G__7027;
i__6996 = G__7028;
continue;
} else {
var result = cljs.core.first.call(null,seq__6993__$1);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.yellow.call(null,["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name.call(null,result.characteristic))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message.call(null,result.exception))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",speclj.platform.failure_source_str.call(null,result.exception)].join('')));


var G__7037 = cljs.core.next.call(null,seq__6993__$1);
var G__7038 = null;
var G__7039 = (0);
var G__7040 = (0);
seq__6993 = G__7037;
chunk__6994 = G__7038;
count__6995 = G__7039;
i__6996 = G__7040;
continue;
}
} else {
return null;
}
}
break;
}
}
});
speclj.report.progress.print_errors = (function speclj$report$progress$print_errors(error_results){
if(cljs.core.seq.call(null,error_results)){
cljs.core.println.call(null);

cljs.core.println.call(null,"Errors:");
} else {
}

var seq__7008_7059 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.iterate.call(null,cljs.core.inc,(1)),error_results)));
var chunk__7009_7060 = null;
var count__7010_7061 = (0);
var i__7011_7062 = (0);
while(true){
if((i__7011_7062 < count__7010_7061)){
var vec__7041_7063 = cljs.core._nth.call(null,chunk__7009_7060,i__7011_7062);
var number_7064 = cljs.core.nth.call(null,vec__7041_7063,(0),null);
var result_7065 = cljs.core.nth.call(null,vec__7041_7063,(1),null);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.indent.call(null,(1),number_7064,") ",speclj.reporting.red.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_7065.exception))));

cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.reporting.stack_trace_str.call(null,result_7065.exception))));


var G__7082 = seq__7008_7059;
var G__7083 = chunk__7009_7060;
var G__7084 = count__7010_7061;
var G__7085 = (i__7011_7062 + (1));
seq__7008_7059 = G__7082;
chunk__7009_7060 = G__7083;
count__7010_7061 = G__7084;
i__7011_7062 = G__7085;
continue;
} else {
var temp__5825__auto___7086 = cljs.core.seq.call(null,seq__7008_7059);
if(temp__5825__auto___7086){
var seq__7008_7091__$1 = temp__5825__auto___7086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7008_7091__$1)){
var c__5548__auto___7096 = cljs.core.chunk_first.call(null,seq__7008_7091__$1);
var G__7100 = cljs.core.chunk_rest.call(null,seq__7008_7091__$1);
var G__7101 = c__5548__auto___7096;
var G__7102 = cljs.core.count.call(null,c__5548__auto___7096);
var G__7103 = (0);
seq__7008_7059 = G__7100;
chunk__7009_7060 = G__7101;
count__7010_7061 = G__7102;
i__7011_7062 = G__7103;
continue;
} else {
var vec__7046_7108 = cljs.core.first.call(null,seq__7008_7091__$1);
var number_7109 = cljs.core.nth.call(null,vec__7046_7108,(0),null);
var result_7110 = cljs.core.nth.call(null,vec__7046_7108,(1),null);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.indent.call(null,(1),number_7109,") ",speclj.reporting.red.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_7110.exception))));

cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.reporting.stack_trace_str.call(null,result_7110.exception))));


var G__7114 = cljs.core.next.call(null,seq__7008_7091__$1);
var G__7115 = null;
var G__7116 = (0);
var G__7117 = (0);
seq__7008_7059 = G__7114;
chunk__7009_7060 = G__7115;
count__7010_7061 = G__7116;
i__7011_7062 = G__7117;
continue;
}
} else {
}
}
break;
}

return cljs.core.flush.call(null);
});
speclj.report.progress.print_duration = (function speclj$report$progress$print_duration(results){
cljs.core.println.call(null);

return cljs.core.println.call(null,"Finished in",speclj.platform.format_seconds.call(null,speclj.reporting.tally_time.call(null,results)),"seconds");
});
speclj.report.progress.color_fn_for = (function speclj$report$progress$color_fn_for(result_map){
if(cljs.core.not_EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(result_map),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result_map))))){
return speclj.reporting.red;
} else {
if(cljs.core.not_EQ_.call(null,(0),cljs.core.count.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(result_map)))){
return speclj.reporting.yellow;
} else {
return speclj.reporting.green;

}
}
});
speclj.report.progress.apply_pending_tally = (function speclj$report$progress$apply_pending_tally(report,tally){
if((new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(tally) > (0))){
return cljs.core.conj.call(null,report,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(tally))," pending"].join(''));
} else {
return report;
}
});
speclj.report.progress.apply_error_tally = (function speclj$report$progress$apply_error_tally(report,tally){
if((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(tally) > (0))){
return cljs.core.conj.call(null,report,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(tally))," errors"].join(''));
} else {
return report;
}
});
speclj.report.progress.describe_counts_for = (function speclj$report$progress$describe_counts_for(result_map){
var tally = cljs.core.zipmap.call(null,cljs.core.keys.call(null,result_map),cljs.core.map.call(null,cljs.core.count,cljs.core.vals.call(null,result_map)));
var always_on_counts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,tally)))," examples"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(tally))," failures"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.reporting.tally_assertions.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(result_map),new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(result_map))))," assertions"].join('')], null);
return clojure.string.join.call(null,", ",speclj.report.progress.apply_error_tally.call(null,speclj.report.progress.apply_pending_tally.call(null,always_on_counts,tally),tally));
});
speclj.report.progress.print_tally = (function speclj$report$progress$print_tally(result_map){
var color_fn = speclj.report.progress.color_fn_for.call(null,result_map);
return cljs.core.println.call(null,color_fn.call(null,speclj.report.progress.describe_counts_for.call(null,result_map)));
});
speclj.report.progress.print_summary = (function speclj$report$progress$print_summary(results){
var result_map = speclj.results.categorize.call(null,results);
speclj.report.progress.print_failures.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(result_map));

speclj.report.progress.print_pendings.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(result_map));

speclj.report.progress.print_errors.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result_map));

speclj.report.progress.print_duration.call(null,results);

return speclj.report.progress.print_tally.call(null,result_map);
});

/**
* @constructor
 * @implements {speclj.reporting.Reporter}
*/
speclj.report.progress.ProgressReporter = (function (){
});
(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_message$arity$2 = (function (_this,message){
var self__ = this;
var _this__$1 = this;
cljs.core.println.call(null,message);

return cljs.core.flush.call(null);
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_description$arity$2 = (function (_this,_description){
var self__ = this;
var _this__$1 = this;
return null;
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_pass$arity$2 = (function (_this,_result){
var self__ = this;
var _this__$1 = this;
cljs.core.print.call(null,speclj.reporting.green.call(null,"."));

return cljs.core.flush.call(null);
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_pending$arity$2 = (function (_this,_result){
var self__ = this;
var _this__$1 = this;
cljs.core.print.call(null,speclj.reporting.yellow.call(null,"*"));

return cljs.core.flush.call(null);
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_fail$arity$2 = (function (_this,_result){
var self__ = this;
var _this__$1 = this;
cljs.core.print.call(null,speclj.reporting.red.call(null,"F"));

return cljs.core.flush.call(null);
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_error$arity$2 = (function (_this,_result){
var self__ = this;
var _this__$1 = this;
cljs.core.print.call(null,speclj.reporting.red.call(null,"E"));

return cljs.core.flush.call(null);
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_runs$arity$2 = (function (_this,results){
var self__ = this;
var _this__$1 = this;
cljs.core.println.call(null);

return speclj.report.progress.print_summary.call(null,results);
}));

(speclj.report.progress.ProgressReporter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(speclj.report.progress.ProgressReporter.cljs$lang$type = true);

(speclj.report.progress.ProgressReporter.cljs$lang$ctorStr = "speclj.report.progress/ProgressReporter");

(speclj.report.progress.ProgressReporter.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"speclj.report.progress/ProgressReporter");
}));

/**
 * Positional factory function for speclj.report.progress/ProgressReporter.
 */
speclj.report.progress.__GT_ProgressReporter = (function speclj$report$progress$__GT_ProgressReporter(){
return (new speclj.report.progress.ProgressReporter());
});

speclj.report.progress.new_progress_reporter = (function speclj$report$progress$new_progress_reporter(){
return (new speclj.report.progress.ProgressReporter());
});
goog.exportSymbol('speclj.report.progress.new_progress_reporter', speclj.report.progress.new_progress_reporter);
cljs.core.reset_BANG_.call(null,speclj.config.default_reporters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [speclj.report.progress.new_progress_reporter.call(null)], null));

//# sourceMappingURL=progress.js.map
