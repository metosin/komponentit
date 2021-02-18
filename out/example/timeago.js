// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.timeago');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('komponentit.timeago');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('clojure.string');
goog.require('example.core');
goog.require('goog.date.DateTime');
goog.require('goog.date.Interval');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$timeago,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,[example.core.header(cljs.core.cst$sym$timeago,"Timeago"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(new cljs.core.Var(function(){return komponentit.timeago.timeago;},cljs.core.cst$sym$komponentit$timeago_SLASH_timeago,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$komponentit$timeago,cljs.core.cst$sym$timeago,"/home/juho/Source/komponentit/src/cljs/komponentit/timeago.cljs",14,1,49,49,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_], null)),"- value\n- format-fn - Default function to localize data to English.",(cljs.core.truth_(komponentit.timeago.timeago)?komponentit.timeago.timeago.cljs$lang$test:null)])))))].join(''),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
example.timeago.in$ = (function example$timeago$in(x,interval){
var G__32272 = (new goog.date.DateTime());
G__32272.add((new goog.date.Interval(interval,x)));

return G__32272;
});
example.timeago.ago = (function example$timeago$ago(x,interval){
var G__32273 = (new goog.date.DateTime());
G__32273.add((new goog.date.Interval(interval,x)).getInverse());

return G__32273;
});
example.timeago.example_data = (function example$timeago$example_data(){
return new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_1_DASH_minute,example.timeago.in$((45),goog.date.Interval.SECONDS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_5_DASH_minutes,example.timeago.in$((5),goog.date.Interval.MINUTES)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_1_DASH_hour,example.timeago.in$((46),goog.date.Interval.MINUTES)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_5_DASH_hours,example.timeago.in$((5),goog.date.Interval.HOURS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_1_DASH_day,example.timeago.in$((23),goog.date.Interval.HOURS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_5_DASH_days,example.timeago.in$((5),goog.date.Interval.DAYS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_1_DASH_month,example.timeago.in$((27),goog.date.Interval.DAYS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_5_DASH_months,example.timeago.in$((5),goog.date.Interval.MONTHS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_1_DASH_year,example.timeago.in$((12),goog.date.Interval.MONTHS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_5_DASH_years,example.timeago.in$((5),goog.date.Interval.YEARS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$now,(new goog.date.DateTime())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1_DASH_minute,example.timeago.ago((45),goog.date.Interval.SECONDS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$5_DASH_minutes,example.timeago.ago((5),goog.date.Interval.MINUTES)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1_DASH_hour,example.timeago.ago((45),goog.date.Interval.MINUTES)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$5_DASH_hours,example.timeago.ago((5),goog.date.Interval.HOURS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1_DASH_day,example.timeago.ago((22),goog.date.Interval.HOURS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$5_DASH_days,example.timeago.ago((5),goog.date.Interval.DAYS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1_DASH_month,example.timeago.ago((26),goog.date.Interval.DAYS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$5_DASH_months,example.timeago.ago((5),goog.date.Interval.MONTHS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1_DASH_year,example.timeago.ago((11),goog.date.Interval.MONTHS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$5_DASH_years,example.timeago.ago((5),goog.date.Interval.YEARS)], null)], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$timeago,cljs.core.cst$kw$timeago_DASH_example], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"timeago-example",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.timeago !== 'undefined') && (typeof example.timeago.t_example$timeago32274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.timeago.t_example$timeago32274 = (function (meta32275){
this.meta32275 = meta32275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.timeago.t_example$timeago32274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32276,meta32275__$1){
var self__ = this;
var _32276__$1 = this;
return (new example.timeago.t_example$timeago32274(meta32275__$1));
}));

(example.timeago.t_example$timeago32274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32276){
var self__ = this;
var _32276__$1 = this;
return self__.meta32275;
}));

(example.timeago.t_example$timeago32274.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.timeago.t_example$timeago32274.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var iter__4582__auto__ = (function example$timeago$iter__32277(s__32278){
return (new cljs.core.LazySeq(null,(function (){
var s__32278__$1 = s__32278;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__32278__$1);
if(temp__4657__auto__){
var s__32278__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32278__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__32278__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__32280 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__32279 = (0);
while(true){
if((i__32279 < size__4581__auto__)){
var vec__32281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__32279);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32281,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32281,(1),null);
cljs.core.chunk_append(b__32280,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,cljs.core.name(k),": "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.timeago.timeago,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,v], null)], null)], null));

var G__32287 = (i__32279 + (1));
i__32279 = G__32287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32280),example$timeago$iter__32277(cljs.core.chunk_rest(s__32278__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32280),null);
}
} else {
var vec__32284 = cljs.core.first(s__32278__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32284,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32284,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,cljs.core.name(k),": "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.timeago.timeago,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,v], null)], null)], null),example$timeago$iter__32277(cljs.core.rest(s__32278__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(value));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(value,example.timeago.example_data());
})], null),"Reset data"], null)], null);
});
if(cljs.core.fn_QMARK_(v__31365__auto__)){
return (function (data_atom__31366__auto__,owner__31367__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__31365__auto__,data_atom__31366__auto__,owner__31367__auto__], null));
});
} else {
return reagent.core.as_element(v__31365__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(devcard_opts__31347__auto__))], 0))], 0));
}));

(example.timeago.t_example$timeago32274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32275], null);
}));

(example.timeago.t_example$timeago32274.cljs$lang$type = true);

(example.timeago.t_example$timeago32274.cljs$lang$ctorStr = "example.timeago/t_example$timeago32274");

(example.timeago.t_example$timeago32274.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.timeago/t_example$timeago32274");
}));

/**
 * Positional factory function for example.timeago/t_example$timeago32274.
 */
example.timeago.__GT_t_example$timeago32274 = (function example$timeago$__GT_t_example$timeago32274(meta32275){
return (new example.timeago.t_example$timeago32274(meta32275));
});

}

return (new example.timeago.t_example$timeago32274(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(example.timeago.example_data()),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
