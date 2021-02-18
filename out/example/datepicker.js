// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.datepicker');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('komponentit.datepicker');
goog.require('komponentit.timepicker');
goog.require('example.options');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('example.core');
goog.require('goog.date.Date');
goog.require('goog.date.UtcDateTime');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$datepicker,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,example.core.header(cljs.core.cst$sym$datepicker,"Datepicker"),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$datepicker,cljs.core.cst$kw$datepicker_DASH_disabled], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"datepicker-disabled",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.datepicker !== 'undefined') && (typeof example.datepicker.t_example$datepicker37917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.datepicker.t_example$datepicker37917 = (function (meta37918){
this.meta37918 = meta37918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.datepicker.t_example$datepicker37917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37919,meta37918__$1){
var self__ = this;
var _37919__$1 = this;
return (new example.datepicker.t_example$datepicker37917(meta37918__$1));
}));

(example.datepicker.t_example$datepicker37917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37919){
var self__ = this;
var _37919__$1 = this;
return self__.meta37918;
}));

(example.datepicker.t_example$datepicker37917.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.datepicker.t_example$datepicker37917.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.table,cljs.core.deref(state),(function (k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,k,v);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$disabled,cljs.core.cst$kw$bool], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clearable_QMARK_,cljs.core.cst$kw$bool], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$week_DASH_numbers_QMARK_,cljs.core.cst$kw$bool], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$date_DASH_format,cljs.core.cst$kw$string], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.datepicker.date,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(state),cljs.core.cst$kw$date,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$date_DASH_format], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$date,x);
}),cljs.core.cst$kw$i18n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$date_DASH_format,cljs.core.cst$kw$date_DASH_format.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null)], 0))], null)], null);
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

(example.datepicker.t_example$datepicker37917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37918], null);
}));

(example.datepicker.t_example$datepicker37917.cljs$lang$type = true);

(example.datepicker.t_example$datepicker37917.cljs$lang$ctorStr = "example.datepicker/t_example$datepicker37917");

(example.datepicker.t_example$datepicker37917.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.datepicker/t_example$datepicker37917");
}));

/**
 * Positional factory function for example.datepicker/t_example$datepicker37917.
 */
example.datepicker.__GT_t_example$datepicker37917 = (function example$datepicker$__GT_t_example$datepicker37917(meta37918){
return (new example.datepicker.t_example$datepicker37917(meta37918));
});

}

return (new example.datepicker.t_example$datepicker37917(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$date,null,cljs.core.cst$kw$disabled,false,cljs.core.cst$kw$clearable_QMARK_,false,cljs.core.cst$kw$week_DASH_numbers_QMARK_,true,cljs.core.cst$kw$date_DASH_format,"d.M.yyyy"], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$datepicker,cljs.core.cst$kw$datepicker_DASH_min_DASH_and_DASH_max], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"datepicker-min-and-max",cljs.core.cst$kw$documentation,"The selectable date can be limited with min and max dates.",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.datepicker !== 'undefined') && (typeof example.datepicker.t_example$datepicker37920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.datepicker.t_example$datepicker37920 = (function (meta37921){
this.meta37921 = meta37921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.datepicker.t_example$datepicker37920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37922,meta37921__$1){
var self__ = this;
var _37922__$1 = this;
return (new example.datepicker.t_example$datepicker37920(meta37921__$1));
}));

(example.datepicker.t_example$datepicker37920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37922){
var self__ = this;
var _37922__$1 = this;
return self__.meta37921;
}));

(example.datepicker.t_example$datepicker37920.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.datepicker.t_example$datepicker37920.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (date,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.datepicker.date,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,cljs.core.deref(date),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(date,x);
}),cljs.core.cst$kw$min_DASH_date,(new goog.date.Date((2015),(9),(10))),cljs.core.cst$kw$max_DASH_date,(new goog.date.Date((2015),(9),(20)))], null)], null);
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

(example.datepicker.t_example$datepicker37920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37921], null);
}));

(example.datepicker.t_example$datepicker37920.cljs$lang$type = true);

(example.datepicker.t_example$datepicker37920.cljs$lang$ctorStr = "example.datepicker/t_example$datepicker37920");

(example.datepicker.t_example$datepicker37920.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.datepicker/t_example$datepicker37920");
}));

/**
 * Positional factory function for example.datepicker/t_example$datepicker37920.
 */
example.datepicker.__GT_t_example$datepicker37920 = (function example$datepicker$__GT_t_example$datepicker37920(meta37921){
return (new example.datepicker.t_example$datepicker37920(meta37921));
});

}

return (new example.datepicker.t_example$datepicker37920(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1((new goog.date.Date((2015),(9),(15)))),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$datepicker,cljs.core.cst$kw$datepicker_DASH_min_DASH_and_DASH_max_DASH_two_DASH_fields], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"datepicker-min-and-max-two-fields",cljs.core.cst$kw$documentation,"The min and max dates can be se reactively based on other inputs.",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.datepicker !== 'undefined') && (typeof example.datepicker.t_example$datepicker37923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.datepicker.t_example$datepicker37923 = (function (meta37924){
this.meta37924 = meta37924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.datepicker.t_example$datepicker37923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37925,meta37924__$1){
var self__ = this;
var _37925__$1 = this;
return (new example.datepicker.t_example$datepicker37923(meta37924__$1));
}));

(example.datepicker.t_example$datepicker37923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37925){
var self__ = this;
var _37925__$1 = this;
return self__.meta37924;
}));

(example.datepicker.t_example$datepicker37923.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.datepicker.t_example$datepicker37923.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Start"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.datepicker.date,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$start,x);
}),cljs.core.cst$kw$max_DASH_date,cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"End"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.datepicker.date,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$end,x);
}),cljs.core.cst$kw$min_DASH_date,cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null)], null);
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

(example.datepicker.t_example$datepicker37923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37924], null);
}));

(example.datepicker.t_example$datepicker37923.cljs$lang$type = true);

(example.datepicker.t_example$datepicker37923.cljs$lang$ctorStr = "example.datepicker/t_example$datepicker37923");

(example.datepicker.t_example$datepicker37923.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.datepicker/t_example$datepicker37923");
}));

/**
 * Positional factory function for example.datepicker/t_example$datepicker37923.
 */
example.datepicker.__GT_t_example$datepicker37923 = (function example$datepicker$__GT_t_example$datepicker37923(meta37924){
return (new example.datepicker.t_example$datepicker37923(meta37924));
});

}

return (new example.datepicker.t_example$datepicker37923(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,(new goog.date.Date((2015),(9),(22))),cljs.core.cst$kw$end,(new goog.date.Date((2015),(9),(25)))], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$datepicker,cljs.core.cst$kw$clearable], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"clearable",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.datepicker !== 'undefined') && (typeof example.datepicker.t_example$datepicker37926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.datepicker.t_example$datepicker37926 = (function (meta37927){
this.meta37927 = meta37927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.datepicker.t_example$datepicker37926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37928,meta37927__$1){
var self__ = this;
var _37928__$1 = this;
return (new example.datepicker.t_example$datepicker37926(meta37927__$1));
}));

(example.datepicker.t_example$datepicker37926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37928){
var self__ = this;
var _37928__$1 = this;
return self__.meta37927;
}));

(example.datepicker.t_example$datepicker37926.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.datepicker.t_example$datepicker37926.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (date,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.datepicker.date,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.deref(date),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(date,x);
}),cljs.core.cst$kw$clearable_QMARK_,true], null)], null);
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

(example.datepicker.t_example$datepicker37926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37927], null);
}));

(example.datepicker.t_example$datepicker37926.cljs$lang$type = true);

(example.datepicker.t_example$datepicker37926.cljs$lang$ctorStr = "example.datepicker/t_example$datepicker37926");

(example.datepicker.t_example$datepicker37926.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.datepicker/t_example$datepicker37926");
}));

/**
 * Positional factory function for example.datepicker/t_example$datepicker37926.
 */
example.datepicker.__GT_t_example$datepicker37926 = (function example$datepicker$__GT_t_example$datepicker37926(meta37927){
return (new example.datepicker.t_example$datepicker37926(meta37927));
});

}

return (new example.datepicker.t_example$datepicker37926(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$datepicker,cljs.core.cst$kw$date_DASH_and_DASH_time], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"date-and-time",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.datepicker !== 'undefined') && (typeof example.datepicker.t_example$datepicker37929 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.datepicker.t_example$datepicker37929 = (function (meta37930){
this.meta37930 = meta37930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.datepicker.t_example$datepicker37929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37931,meta37930__$1){
var self__ = this;
var _37931__$1 = this;
return (new example.datepicker.t_example$datepicker37929(meta37930__$1));
}));

(example.datepicker.t_example$datepicker37929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37931){
var self__ = this;
var _37931__$1 = this;
return self__.meta37930;
}));

(example.datepicker.t_example$datepicker37929.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.datepicker.t_example$datepicker37929.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (date,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.datepicker.date,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.deref(date),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(date,(cljs.core.truth_(x)?(function (){var G__37932 = (cljs.core.truth_(cljs.core.deref(date))?cljs.core.deref(date).clone():(new goog.date.UtcDateTime()));
G__37932.setYear(x.getYear());

G__37932.setMonth(x.getMonth());

G__37932.setDate(x.getDate());

return G__37932;
})():null));
}),cljs.core.cst$kw$clearable_QMARK_,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.timepicker.timepicker,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref(date),cljs.core.cst$kw$on_DASH_select,(function (x){
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

(example.datepicker.t_example$datepicker37929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37930], null);
}));

(example.datepicker.t_example$datepicker37929.cljs$lang$type = true);

(example.datepicker.t_example$datepicker37929.cljs$lang$ctorStr = "example.datepicker/t_example$datepicker37929");

(example.datepicker.t_example$datepicker37929.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.datepicker/t_example$datepicker37929");
}));

/**
 * Positional factory function for example.datepicker/t_example$datepicker37929.
 */
example.datepicker.__GT_t_example$datepicker37929 = (function example$datepicker$__GT_t_example$datepicker37929(meta37930){
return (new example.datepicker.t_example$datepicker37929(meta37930));
});

}

return (new example.datepicker.t_example$datepicker37929(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1((new goog.date.UtcDateTime())),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
