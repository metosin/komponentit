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
var G__37517 = (new goog.date.DateTime());
G__37517.add((new goog.date.Interval(interval,x)));

return G__37517;
});
example.timeago.ago = (function example$timeago$ago(x,interval){
var G__37518 = (new goog.date.DateTime());
G__37518.add((new goog.date.Interval(interval,x)).getInverse());

return G__37518;
});
example.timeago.example_data = (function example$timeago$example_data(){
return new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_1_DASH_minute,example.timeago.in$((45),goog.date.Interval.SECONDS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_5_DASH_minutes,example.timeago.in$((5),goog.date.Interval.MINUTES)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_1_DASH_hour,example.timeago.in$((46),goog.date.Interval.MINUTES)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_5_DASH_hours,example.timeago.in$((5),goog.date.Interval.HOURS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_1_DASH_day,example.timeago.in$((23),goog.date.Interval.HOURS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_5_DASH_days,example.timeago.in$((5),goog.date.Interval.DAYS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_1_DASH_month,example.timeago.in$((27),goog.date.Interval.DAYS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_5_DASH_months,example.timeago.in$((5),goog.date.Interval.MONTHS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_1_DASH_year,example.timeago.in$((12),goog.date.Interval.MONTHS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_5_DASH_years,example.timeago.in$((5),goog.date.Interval.YEARS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$now,(new goog.date.DateTime())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1_DASH_minute,example.timeago.ago((45),goog.date.Interval.SECONDS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$5_DASH_minutes,example.timeago.ago((5),goog.date.Interval.MINUTES)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1_DASH_hour,example.timeago.ago((45),goog.date.Interval.MINUTES)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$5_DASH_hours,example.timeago.ago((5),goog.date.Interval.HOURS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1_DASH_day,example.timeago.ago((22),goog.date.Interval.HOURS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$5_DASH_days,example.timeago.ago((5),goog.date.Interval.DAYS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1_DASH_month,example.timeago.ago((26),goog.date.Interval.DAYS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$5_DASH_months,example.timeago.ago((5),goog.date.Interval.MONTHS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1_DASH_year,example.timeago.ago((11),goog.date.Interval.MONTHS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$5_DASH_years,example.timeago.ago((5),goog.date.Interval.YEARS)], null)], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$timeago,cljs.core.cst$kw$timeago_DASH_example], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"timeago-example",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.timeago !== 'undefined') && (typeof example.timeago.t_example$timeago37519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.timeago.t_example$timeago37519 = (function (meta37520){
this.meta37520 = meta37520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.timeago.t_example$timeago37519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37521,meta37520__$1){
var self__ = this;
var _37521__$1 = this;
return (new example.timeago.t_example$timeago37519(meta37520__$1));
}));

(example.timeago.t_example$timeago37519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37521){
var self__ = this;
var _37521__$1 = this;
return self__.meta37520;
}));

(example.timeago.t_example$timeago37519.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.timeago.t_example$timeago37519.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var iter__4582__auto__ = (function example$timeago$iter__37522(s__37523){
return (new cljs.core.LazySeq(null,(function (){
var s__37523__$1 = s__37523;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__37523__$1);
if(temp__4657__auto__){
var s__37523__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37523__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37523__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37525 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37524 = (0);
while(true){
if((i__37524 < size__4581__auto__)){
var vec__37526 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37524);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37526,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37526,(1),null);
cljs.core.chunk_append(b__37525,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,cljs.core.name(k),": "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.timeago.timeago,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,v], null)], null)], null));

var G__37532 = (i__37524 + (1));
i__37524 = G__37532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37525),example$timeago$iter__37522(cljs.core.chunk_rest(s__37523__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37525),null);
}
} else {
var vec__37529 = cljs.core.first(s__37523__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37529,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37529,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,cljs.core.name(k),": "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.timeago.timeago,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,v], null)], null)], null),example$timeago$iter__37522(cljs.core.rest(s__37523__$2)));
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
if(cljs.core.fn_QMARK_(v__36201__auto__)){
return (function (data_atom__36202__auto__,owner__36203__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__36201__auto__,data_atom__36202__auto__,owner__36203__auto__], null));
});
} else {
return reagent.core.as_element(v__36201__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(devcard_opts__36183__auto__))], 0))], 0));
}));

(example.timeago.t_example$timeago37519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37520], null);
}));

(example.timeago.t_example$timeago37519.cljs$lang$type = true);

(example.timeago.t_example$timeago37519.cljs$lang$ctorStr = "example.timeago/t_example$timeago37519");

(example.timeago.t_example$timeago37519.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.timeago/t_example$timeago37519");
}));

/**
 * Positional factory function for example.timeago/t_example$timeago37519.
 */
example.timeago.__GT_t_example$timeago37519 = (function example$timeago$__GT_t_example$timeago37519(meta37520){
return (new example.timeago.t_example$timeago37519(meta37520));
});

}

return (new example.timeago.t_example$timeago37519(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(example.timeago.example_data()),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
