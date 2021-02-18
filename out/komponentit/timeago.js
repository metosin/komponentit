// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.timeago');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('goog.date.DateTime');
komponentit.timeago.humanize_duration = (function komponentit$timeago$humanize_duration(ms){
var seconds = (ms / (1000));
var future_QMARK_ = (seconds < (0));
var seconds__$1 = Math.abs(seconds);
var minutes = (seconds__$1 / (60));
var hours = (minutes / (60));
var days = (hours / (24));
var months = ((days * (4800)) / (146097));
var years = (months / (12));
if((seconds__$1 < (45))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ss,(seconds__$1 | (0)),future_QMARK_], null);
} else {
if((minutes <= (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$m,(1),future_QMARK_], null);
} else {
if((minutes < (45))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mm,(minutes | (0)),future_QMARK_], null);
} else {
if((hours <= (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,(1),future_QMARK_], null);
} else {
if((hours < (22))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hh,(hours | (0)),future_QMARK_], null);
} else {
if((days <= (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$d,(1),future_QMARK_], null);
} else {
if((days < (26))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dd,(days | (0)),future_QMARK_], null);
} else {
if((months <= (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$M,(1),future_QMARK_], null);
} else {
if((months < (11))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$MM,(months | (0)),future_QMARK_], null);
} else {
if((years <= (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,(1),future_QMARK_], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$yy,(years | (0)),future_QMARK_], null);

}
}
}
}
}
}
}
}
}
}
});
komponentit.timeago.default_format = (function komponentit$timeago$default_format(k,v,future_QMARK_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37506 = k;
var G__37506__$1 = (((G__37506 instanceof cljs.core.Keyword))?G__37506.fqn:null);
switch (G__37506__$1) {
case "ss":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," seconds"].join('');

break;
case "m":
return "minute";

break;
case "mm":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," minutes"].join('');

break;
case "h":
return "hour";

break;
case "hh":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," hours"].join('');

break;
case "d":
return "day";

break;
case "dd":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," days"].join('');

break;
case "M":
return "month";

break;
case "MM":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," months"].join('');

break;
case "y":
return "year";

break;
case "yy":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," years"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37506__$1)].join('')));

}
})()),(cljs.core.truth_(future_QMARK_)?" from now":" ago")].join('');
});
komponentit.timeago.minute_ms = ((60) * (1000));
komponentit.timeago.hour_ms = ((60) * komponentit.timeago.minute_ms);
komponentit.timeago.day_ms = ((24) * komponentit.timeago.hour_ms);
/**
 * - value
 * - format-fn - Default function to localize data to English.
 */
komponentit.timeago.timeago = (function komponentit$timeago$timeago(_){
var now = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((new goog.date.DateTime()));
var timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var tick_fn = (function komponentit$timeago$timeago_$_tick_fn(this$){
if(cljs.core.truth_(cljs.core.deref(timeout))){
clearTimeout(cljs.core.deref(timeout));
} else {
}

cljs.core.reset_BANG_(now,(new goog.date.DateTime()));

var ms = (cljs.core.deref(now) - cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)));
var period = (((ms < komponentit.timeago.minute_ms))?(1000):(((ms < komponentit.timeago.hour_ms))?komponentit.timeago.minute_ms:(((ms < komponentit.timeago.day_ms))?komponentit.timeago.hour_ms:null
)));
if(cljs.core.truth_(period)){
return setTimeout((function (){
return komponentit$timeago$timeago_$_tick_fn(this$);
}),period);
} else {
return null;
}
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display_DASH_name,"komponentit.timeago.timeago",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
return tick_fn(this$);
}),cljs.core.cst$kw$component_DASH_will_DASH_unmount,(function (this$){
if(cljs.core.truth_(cljs.core.deref(timeout))){
return clearTimeout(cljs.core.deref(timeout));
} else {
return null;
}
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$,p__37508){
var vec__37509 = p__37508;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37509,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37509,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(prev_props),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)))){
return tick_fn(this$);
} else {
return null;
}
}),cljs.core.cst$kw$reagent_DASH_render,(function (p__37512){
var map__37513 = p__37512;
var map__37513__$1 = (((((!((map__37513 == null))))?(((((map__37513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37513):map__37513);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37513__$1,cljs.core.cst$kw$value);
var format_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37513__$1,cljs.core.cst$kw$format_DASH_fn,komponentit.timeago.default_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(format_fn,komponentit.timeago.humanize_duration((cljs.core.deref(now) - value)))], null);
})], null));
});
