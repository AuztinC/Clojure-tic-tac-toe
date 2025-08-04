// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__10067__auto___11878 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__11864_11879 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11865_11880 = description__10067__auto___11878;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11865_11880);

try{var seq__11866_11881 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__11864_11879,_STAR_parent_description_STAR__temp_val__11865_11880,description__10067__auto___11878){
return (function (it__10441__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__11874 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__11875 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__11875);

try{return it__10441__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__11874);
}});})(_STAR_parent_description_STAR__orig_val__11864_11879,_STAR_parent_description_STAR__temp_val__11865_11880,description__10067__auto___11878))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11864_11879,_STAR_parent_description_STAR__temp_val__11865_11880,description__10067__auto___11878){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__11864_11879,_STAR_parent_description_STAR__temp_val__11865_11880,description__10067__auto___11878))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__11864_11879,_STAR_parent_description_STAR__temp_val__11865_11880,description__10067__auto___11878){
return (function (it__10134__auto__){
var __GT_inspect_orig_val__11876 = tic_tac_toe.main.__GT_inspect;
var __GT_inspect_temp_val__11877 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"inspect","inspect",688794057),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.main.__GT_inspect = __GT_inspect_temp_val__11877);

try{return it__10134__auto__.call(null);
}finally {(tic_tac_toe.main.__GT_inspect = __GT_inspect_orig_val__11876);
}});})(_STAR_parent_description_STAR__orig_val__11864_11879,_STAR_parent_description_STAR__temp_val__11865_11880,description__10067__auto___11878))
),speclj.components.new_characteristic.call(null,"game container",((function (_STAR_parent_description_STAR__orig_val__11864_11879,_STAR_parent_description_STAR__temp_val__11865_11880,description__10067__auto___11878){
return (function (){
var value__10571__auto__ = "#main-container";
var node__10572__auto__ = c3kit.wire.spec_helper.select.call(null,value__10571__auto__);
if(cljs.core.truth_(node__10572__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10571__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10177__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10177__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11864_11879,_STAR_parent_description_STAR__temp_val__11865_11880,description__10067__auto___11878))
,false)],null)));
var chunk__11867_11882 = null;
var count__11868_11883 = (0);
var i__11869_11884 = (0);
while(true){
if((i__11869_11884 < count__11868_11883)){
var component__10068__auto___11885 = cljs.core._nth.call(null,chunk__11867_11882,i__11869_11884);
speclj.components.install.call(null,component__10068__auto___11885,description__10067__auto___11878);


var G__11886 = seq__11866_11881;
var G__11887 = chunk__11867_11882;
var G__11888 = count__11868_11883;
var G__11889 = (i__11869_11884 + (1));
seq__11866_11881 = G__11886;
chunk__11867_11882 = G__11887;
count__11868_11883 = G__11888;
i__11869_11884 = G__11889;
continue;
} else {
var temp__5825__auto___11890 = cljs.core.seq.call(null,seq__11866_11881);
if(temp__5825__auto___11890){
var seq__11866_11891__$1 = temp__5825__auto___11890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11866_11891__$1)){
var c__5548__auto___11892 = cljs.core.chunk_first.call(null,seq__11866_11891__$1);
var G__11893 = cljs.core.chunk_rest.call(null,seq__11866_11891__$1);
var G__11894 = c__5548__auto___11892;
var G__11895 = cljs.core.count.call(null,c__5548__auto___11892);
var G__11896 = (0);
seq__11866_11881 = G__11893;
chunk__11867_11882 = G__11894;
count__11868_11883 = G__11895;
i__11869_11884 = G__11896;
continue;
} else {
var component__10068__auto___11897 = cljs.core.first.call(null,seq__11866_11891__$1);
speclj.components.install.call(null,component__10068__auto___11897,description__10067__auto___11878);


var G__11898 = cljs.core.next.call(null,seq__11866_11891__$1);
var G__11899 = null;
var G__11900 = (0);
var G__11901 = (0);
seq__11866_11881 = G__11898;
chunk__11867_11882 = G__11899;
count__11868_11883 = G__11900;
i__11869_11884 = G__11901;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11864_11879);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10067__auto___11878);
}


//# sourceMappingURL=main_spec.js.map
