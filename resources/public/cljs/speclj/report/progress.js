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
var G__7022 = cljs.core.deref.call(null,context.parent);
var G__7023 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(context.name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
context = G__7022;
name = G__7023;
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

var G__7032 = (i + (1));
i = G__7032;
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

var seq__7028 = cljs.core.seq.call(null,pending_results);
var chunk__7029 = null;
var count__7030 = (0);
var i__7031 = (0);
while(true){
if((i__7031 < count__7030)){
var result = cljs.core._nth.call(null,chunk__7029,i__7031);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.yellow.call(null,["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name.call(null,result.characteristic))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message.call(null,result.exception))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",speclj.platform.failure_source_str.call(null,result.exception)].join('')));


var G__7105 = seq__7028;
var G__7106 = chunk__7029;
var G__7107 = count__7030;
var G__7108 = (i__7031 + (1));
seq__7028 = G__7105;
chunk__7029 = G__7106;
count__7030 = G__7107;
i__7031 = G__7108;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__7028);
if(temp__5825__auto__){
var seq__7028__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7028__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__7028__$1);
var G__7111 = cljs.core.chunk_rest.call(null,seq__7028__$1);
var G__7112 = c__5548__auto__;
var G__7113 = cljs.core.count.call(null,c__5548__auto__);
var G__7114 = (0);
seq__7028 = G__7111;
chunk__7029 = G__7112;
count__7030 = G__7113;
i__7031 = G__7114;
continue;
} else {
var result = cljs.core.first.call(null,seq__7028__$1);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.yellow.call(null,["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name.call(null,result.characteristic))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message.call(null,result.exception))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",speclj.platform.failure_source_str.call(null,result.exception)].join('')));


var G__7115 = cljs.core.next.call(null,seq__7028__$1);
var G__7116 = null;
var G__7117 = (0);
var G__7118 = (0);
seq__7028 = G__7115;
chunk__7029 = G__7116;
count__7030 = G__7117;
i__7031 = G__7118;
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

var seq__7084_7163 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.iterate.call(null,cljs.core.inc,(1)),error_results)));
var chunk__7085_7164 = null;
var count__7086_7165 = (0);
var i__7087_7166 = (0);
while(true){
if((i__7087_7166 < count__7086_7165)){
var vec__7142_7169 = cljs.core._nth.call(null,chunk__7085_7164,i__7087_7166);
var number_7170 = cljs.core.nth.call(null,vec__7142_7169,(0),null);
var result_7171 = cljs.core.nth.call(null,vec__7142_7169,(1),null);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.indent.call(null,(1),number_7170,") ",speclj.reporting.red.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_7171.exception))));

cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.reporting.stack_trace_str.call(null,result_7171.exception))));


var G__7172 = seq__7084_7163;
var G__7173 = chunk__7085_7164;
var G__7174 = count__7086_7165;
var G__7175 = (i__7087_7166 + (1));
seq__7084_7163 = G__7172;
chunk__7085_7164 = G__7173;
count__7086_7165 = G__7174;
i__7087_7166 = G__7175;
continue;
} else {
var temp__5825__auto___7176 = cljs.core.seq.call(null,seq__7084_7163);
if(temp__5825__auto___7176){
var seq__7084_7177__$1 = temp__5825__auto___7176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7084_7177__$1)){
var c__5548__auto___7178 = cljs.core.chunk_first.call(null,seq__7084_7177__$1);
var G__7179 = cljs.core.chunk_rest.call(null,seq__7084_7177__$1);
var G__7180 = c__5548__auto___7178;
var G__7181 = cljs.core.count.call(null,c__5548__auto___7178);
var G__7182 = (0);
seq__7084_7163 = G__7179;
chunk__7085_7164 = G__7180;
count__7086_7165 = G__7181;
i__7087_7166 = G__7182;
continue;
} else {
var vec__7156_7183 = cljs.core.first.call(null,seq__7084_7177__$1);
var number_7184 = cljs.core.nth.call(null,vec__7156_7183,(0),null);
var result_7185 = cljs.core.nth.call(null,vec__7156_7183,(1),null);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.indent.call(null,(1),number_7184,") ",speclj.reporting.red.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_7185.exception))));

cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.reporting.stack_trace_str.call(null,result_7185.exception))));


var G__7186 = cljs.core.next.call(null,seq__7084_7177__$1);
var G__7187 = null;
var G__7188 = (0);
var G__7189 = (0);
seq__7084_7163 = G__7186;
chunk__7085_7164 = G__7187;
count__7086_7165 = G__7188;
i__7087_7166 = G__7189;
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
