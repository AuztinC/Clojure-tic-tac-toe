// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.apron.utilc');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.schema');
goog.require('clojure.edn');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cognitect.transit');
/**
 * Convenience.  Convert the form to EDN
 */
c3kit.apron.utilc.__GT_edn = (function c3kit$apron$utilc$__GT_edn(v){
var G__15197 = v;
if((G__15197 == null)){
return null;
} else {
return cljs.core.pr_str.call(null,G__15197);
}
});
/**
 * Convenience.  Convert the EDN string to a Clojure form
 */
c3kit.apron.utilc._LT__edn = (function c3kit$apron$utilc$_LT__edn(s){
return clojure.edn.read_string.call(null,s);
});
/**
 * Convert integer to a hex string
 */
c3kit.apron.utilc.__GT_hex = (function c3kit$apron$utilc$__GT_hex(n){
return n.toString((16));
});
/**
 * Convert hex string to an integer
 */
c3kit.apron.utilc._LT__hex = (function c3kit$apron$utilc$_LT__hex(hex){
return parseInt(hex,(16));
});
/**
 * Give a list of entities with unique :id's, return a map with the ids as keys and the entities as values
 */
c3kit.apron.utilc.index_by_id = (function c3kit$apron$utilc$index_by_id(entities){
return cljs.core.reduce.call(null,(function (p1__15216_SHARP_,p2__15220_SHARP_){
return cljs.core.assoc.call(null,p1__15216_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__15220_SHARP_),p2__15220_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,entities);
});
/**
 * Makes sure and entity has the keyword as the value of :kind
 */
c3kit.apron.utilc.keywordize_kind = (function c3kit$apron$utilc$keywordize_kind(entity){
var temp__5823__auto__ = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(temp__5823__auto__)){
var kind = temp__5823__auto__;
if((kind instanceof cljs.core.Keyword)){
return entity;
} else {
if(typeof kind === 'string'){
return cljs.core.assoc.call(null,entity,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.keyword.call(null,kind));
} else {
throw cljs.core.ex_info.call(null,"Invalid :kind type",entity);

}
}
} else {
throw cljs.core.ex_info.call(null,"Missing :kind",entity);
}
});
/**
 * Parse a string into a UUID or return nil if it's not a vlid UUID format
 */
c3kit.apron.utilc.__GT_uuid_or_nil = (function c3kit$apron$utilc$__GT_uuid_or_nil(uuid_str){
try{return c3kit.apron.schema.__GT_uuid.call(null,uuid_str);
}catch (e15229){var _ = e15229;
return null;
}});
c3kit.apron.utilc.transit_reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 2, ["f",parseFloat,"n",parseInt], null)], null));
c3kit.apron.utilc.transit_writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
/**
 * Convert data into transit string
 */
c3kit.apron.utilc.__GT_transit = (function c3kit$apron$utilc$__GT_transit(var_args){
var G__15231 = arguments.length;
switch (G__15231) {
case 3:
return c3kit.apron.utilc.__GT_transit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return c3kit.apron.utilc.__GT_transit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.utilc.__GT_transit.cljs$core$IFn$_invoke$arity$3 = (function (type,opts,data){
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,type,opts),data);
}));

(c3kit.apron.utilc.__GT_transit.cljs$core$IFn$_invoke$arity$1 = (function (data){
return cognitect.transit.write.call(null,c3kit.apron.utilc.transit_writer,data);
}));

(c3kit.apron.utilc.__GT_transit.cljs$lang$maxFixedArity = 3);

/**
 * Convert transit string into data
 */
c3kit.apron.utilc._LT__transit = (function c3kit$apron$utilc$_LT__transit(var_args){
var G__15241 = arguments.length;
switch (G__15241) {
case 3:
return c3kit.apron.utilc._LT__transit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return c3kit.apron.utilc._LT__transit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.utilc._LT__transit.cljs$core$IFn$_invoke$arity$3 = (function (type,opts,transit_str){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,type,opts),transit_str);
}));

(c3kit.apron.utilc._LT__transit.cljs$core$IFn$_invoke$arity$1 = (function (transit_str){
return cognitect.transit.read.call(null,c3kit.apron.utilc.transit_reader,transit_str);
}));

(c3kit.apron.utilc._LT__transit.cljs$lang$maxFixedArity = 3);

/**
 * Convert the clj data structure to JSON.
 *   Note: this transition may be lossy since some clj data types (keywords) have no JSON equivalent.
 */
c3kit.apron.utilc.__GT_json = (function c3kit$apron$utilc$__GT_json(v){
return JSON.stringify(cljs.core.clj__GT_js.call(null,v));
});
/**
 * Convert JSON into clj data structure.
 */
c3kit.apron.utilc._LT__json = (function c3kit$apron$utilc$_LT__json(v){
if(cljs.core.truth_((function (){var G__15245 = v;
if((G__15245 == null)){
return null;
} else {
return c3kit.apron.corec.not_blank_QMARK_.call(null,G__15245);
}
})())){
return cljs.core.js__GT_clj.call(null,JSON.parse(v));
} else {
return null;
}
});
/**
 * Convert JSON into clj data structure with all keys as keywords
 */
c3kit.apron.utilc._LT__json_kw = (function c3kit$apron$utilc$_LT__json_kw(v){
return clojure.walk.keywordize_keys.call(null,c3kit.apron.utilc._LT__json.call(null,v));
});
c3kit.apron.utilc.csv_maybe_quote = (function c3kit$apron$utilc$csv_maybe_quote(value){
if(cljs.core.truth_(cljs.core.re_find.call(null,/[,\"]/,value))){
return ["\"",clojure.string.replace.call(null,value,"\"","\"\""),"\""].join('');
} else {
return value;
}
});
c3kit.apron.utilc.cell__GT_csv = (function c3kit$apron$utilc$cell__GT_csv(cell){
return c3kit.apron.utilc.csv_maybe_quote.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell));
});
c3kit.apron.utilc.row__GT_csv = (function c3kit$apron$utilc$row__GT_csv(row){
return clojure.string.join.call(null,",",cljs.core.map.call(null,c3kit.apron.utilc.cell__GT_csv,row));
});
/**
 * Simple CSV generator for a list of lists
 */
c3kit.apron.utilc.__GT_csv = (function c3kit$apron$utilc$__GT_csv(rows){
return clojure.string.join.call(null,"\r\n",cljs.core.map.call(null,c3kit.apron.utilc.row__GT_csv,rows));
});
/**
 * Sanatize string into valid filename
 */
c3kit.apron.utilc.__GT_filename = (function c3kit$apron$utilc$__GT_filename(var_args){
var G__15260 = arguments.length;
switch (G__15260) {
case 1:
return c3kit.apron.utilc.__GT_filename.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.utilc.__GT_filename.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.utilc.__GT_filename.cljs$core$IFn$_invoke$arity$1 = (function (name){
return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),/[ -]/,"_"),/[',.-\/\\<>:\"\\|?*\[\]]/,"");
}));

(c3kit.apron.utilc.__GT_filename.cljs$core$IFn$_invoke$arity$2 = (function (name,ext){
return [c3kit.apron.utilc.__GT_filename.call(null,name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
}));

(c3kit.apron.utilc.__GT_filename.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=utilc.js.map
