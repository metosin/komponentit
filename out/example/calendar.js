// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.calendar');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('komponentit.calendar');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('example.options');
goog.require('example.core');
goog.require('goog.date.Date');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$calendar,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,example.core.header(cljs.core.cst$sym$calendar,"Calendar"),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$calendar,cljs.core.cst$kw$calendar], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"calendar",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.calendar !== 'undefined') && (typeof example.calendar.t_example$calendar38146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.calendar.t_example$calendar38146 = (function (meta38147){
this.meta38147 = meta38147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.calendar.t_example$calendar38146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38148,meta38147__$1){
var self__ = this;
var _38148__$1 = this;
return (new example.calendar.t_example$calendar38146(meta38147__$1));
}));

(example.calendar.t_example$calendar38146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38148){
var self__ = this;
var _38148__$1 = this;
return self__.meta38147;
}));

(example.calendar.t_example$calendar38146.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.calendar.t_example$calendar38146.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (date,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.calendar,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"Foo",cljs.core.cst$kw$value,cljs.core.deref(date),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(date,x);
})], null)], null)], null);
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

(example.calendar.t_example$calendar38146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta38147], null);
}));

(example.calendar.t_example$calendar38146.cljs$lang$type = true);

(example.calendar.t_example$calendar38146.cljs$lang$ctorStr = "example.calendar/t_example$calendar38146");

(example.calendar.t_example$calendar38146.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.calendar/t_example$calendar38146");
}));

/**
 * Positional factory function for example.calendar/t_example$calendar38146.
 */
example.calendar.__GT_t_example$calendar38146 = (function example$calendar$__GT_t_example$calendar38146(meta38147){
return (new example.calendar.t_example$calendar38146(meta38147));
});

}

return (new example.calendar.t_example$calendar38146(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$calendar,cljs.core.cst$kw$date_DASH_range], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"date-range",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.calendar !== 'undefined') && (typeof example.calendar.t_example$calendar38150 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.calendar.t_example$calendar38150 = (function (meta38151){
this.meta38151 = meta38151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.calendar.t_example$calendar38150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38152,meta38151__$1){
var self__ = this;
var _38152__$1 = this;
return (new example.calendar.t_example$calendar38150(meta38151__$1));
}));

(example.calendar.t_example$calendar38150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38152){
var self__ = this;
var _38152__$1 = this;
return self__.meta38151;
}));

(example.calendar.t_example$calendar38150.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.calendar.t_example$calendar38150.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.table,cljs.core.deref(state),(function (k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,k,v);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$week_DASH_numbers_QMARK_,cljs.core.cst$kw$bool], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$quicklist_QMARK_,cljs.core.cst$kw$bool], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$date_DASH_input_QMARK_,cljs.core.cst$kw$bool], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.date_range,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$start,cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$end,cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_change,(function (p1__38149_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,p1__38149_SHARP_);
}),cljs.core.cst$kw$week_DASH_numbers_QMARK_,cljs.core.cst$kw$week_DASH_numbers_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$quicklist_QMARK_,cljs.core.cst$kw$quicklist_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$date_DASH_input_QMARK_,cljs.core.cst$kw$date_DASH_input_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (___$1){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$start,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,null], 0));

return null;
})], null),"Reset"], null)], null);
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

(example.calendar.t_example$calendar38150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta38151], null);
}));

(example.calendar.t_example$calendar38150.cljs$lang$type = true);

(example.calendar.t_example$calendar38150.cljs$lang$ctorStr = "example.calendar/t_example$calendar38150");

(example.calendar.t_example$calendar38150.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.calendar/t_example$calendar38150");
}));

/**
 * Positional factory function for example.calendar/t_example$calendar38150.
 */
example.calendar.__GT_t_example$calendar38150 = (function example$calendar$__GT_t_example$calendar38150(meta38151){
return (new example.calendar.t_example$calendar38150(meta38151));
});

}

return (new example.calendar.t_example$calendar38150(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,null,cljs.core.cst$kw$end,null], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
