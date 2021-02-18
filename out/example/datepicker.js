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
if((typeof example !== 'undefined') && (typeof example.datepicker !== 'undefined') && (typeof example.datepicker.t_example$datepicker32653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.datepicker.t_example$datepicker32653 = (function (meta32654){
this.meta32654 = meta32654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.datepicker.t_example$datepicker32653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32655,meta32654__$1){
var self__ = this;
var _32655__$1 = this;
return (new example.datepicker.t_example$datepicker32653(meta32654__$1));
}));

(example.datepicker.t_example$datepicker32653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32655){
var self__ = this;
var _32655__$1 = this;
return self__.meta32654;
}));

(example.datepicker.t_example$datepicker32653.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.datepicker.t_example$datepicker32653.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.table,cljs.core.deref(state),(function (k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,k,v);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$disabled,cljs.core.cst$kw$bool], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clearable_QMARK_,cljs.core.cst$kw$bool], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$week_DASH_numbers_QMARK_,cljs.core.cst$kw$bool], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$date_DASH_format,cljs.core.cst$kw$string], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.datepicker.date,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(state),cljs.core.cst$kw$date,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$date_DASH_format], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$date,x);
}),cljs.core.cst$kw$i18n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$date_DASH_format,cljs.core.cst$kw$date_DASH_format.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null)], 0))], null)], null);
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

(example.datepicker.t_example$datepicker32653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32654], null);
}));

(example.datepicker.t_example$datepicker32653.cljs$lang$type = true);

(example.datepicker.t_example$datepicker32653.cljs$lang$ctorStr = "example.datepicker/t_example$datepicker32653");

(example.datepicker.t_example$datepicker32653.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.datepicker/t_example$datepicker32653");
}));

/**
 * Positional factory function for example.datepicker/t_example$datepicker32653.
 */
example.datepicker.__GT_t_example$datepicker32653 = (function example$datepicker$__GT_t_example$datepicker32653(meta32654){
return (new example.datepicker.t_example$datepicker32653(meta32654));
});

}

return (new example.datepicker.t_example$datepicker32653(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$date,null,cljs.core.cst$kw$disabled,false,cljs.core.cst$kw$clearable_QMARK_,false,cljs.core.cst$kw$week_DASH_numbers_QMARK_,true,cljs.core.cst$kw$date_DASH_format,"d.M.yyyy"], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$datepicker,cljs.core.cst$kw$datepicker_DASH_min_DASH_and_DASH_max], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"datepicker-min-and-max",cljs.core.cst$kw$documentation,"The selectable date can be limited with min and max dates.",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.datepicker !== 'undefined') && (typeof example.datepicker.t_example$datepicker32656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.datepicker.t_example$datepicker32656 = (function (meta32657){
this.meta32657 = meta32657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.datepicker.t_example$datepicker32656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32658,meta32657__$1){
var self__ = this;
var _32658__$1 = this;
return (new example.datepicker.t_example$datepicker32656(meta32657__$1));
}));

(example.datepicker.t_example$datepicker32656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32658){
var self__ = this;
var _32658__$1 = this;
return self__.meta32657;
}));

(example.datepicker.t_example$datepicker32656.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.datepicker.t_example$datepicker32656.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (date,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.datepicker.date,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,cljs.core.deref(date),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(date,x);
}),cljs.core.cst$kw$min_DASH_date,(new goog.date.Date((2015),(9),(10))),cljs.core.cst$kw$max_DASH_date,(new goog.date.Date((2015),(9),(20)))], null)], null);
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

(example.datepicker.t_example$datepicker32656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32657], null);
}));

(example.datepicker.t_example$datepicker32656.cljs$lang$type = true);

(example.datepicker.t_example$datepicker32656.cljs$lang$ctorStr = "example.datepicker/t_example$datepicker32656");

(example.datepicker.t_example$datepicker32656.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.datepicker/t_example$datepicker32656");
}));

/**
 * Positional factory function for example.datepicker/t_example$datepicker32656.
 */
example.datepicker.__GT_t_example$datepicker32656 = (function example$datepicker$__GT_t_example$datepicker32656(meta32657){
return (new example.datepicker.t_example$datepicker32656(meta32657));
});

}

return (new example.datepicker.t_example$datepicker32656(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1((new goog.date.Date((2015),(9),(15)))),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$datepicker,cljs.core.cst$kw$datepicker_DASH_min_DASH_and_DASH_max_DASH_two_DASH_fields], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"datepicker-min-and-max-two-fields",cljs.core.cst$kw$documentation,"The min and max dates can be se reactively based on other inputs.",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.datepicker !== 'undefined') && (typeof example.datepicker.t_example$datepicker32659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.datepicker.t_example$datepicker32659 = (function (meta32660){
this.meta32660 = meta32660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.datepicker.t_example$datepicker32659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32661,meta32660__$1){
var self__ = this;
var _32661__$1 = this;
return (new example.datepicker.t_example$datepicker32659(meta32660__$1));
}));

(example.datepicker.t_example$datepicker32659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32661){
var self__ = this;
var _32661__$1 = this;
return self__.meta32660;
}));

(example.datepicker.t_example$datepicker32659.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.datepicker.t_example$datepicker32659.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Start"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.datepicker.date,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$start,x);
}),cljs.core.cst$kw$max_DASH_date,cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"End"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.datepicker.date,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$end,x);
}),cljs.core.cst$kw$min_DASH_date,cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null)], null);
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

(example.datepicker.t_example$datepicker32659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32660], null);
}));

(example.datepicker.t_example$datepicker32659.cljs$lang$type = true);

(example.datepicker.t_example$datepicker32659.cljs$lang$ctorStr = "example.datepicker/t_example$datepicker32659");

(example.datepicker.t_example$datepicker32659.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.datepicker/t_example$datepicker32659");
}));

/**
 * Positional factory function for example.datepicker/t_example$datepicker32659.
 */
example.datepicker.__GT_t_example$datepicker32659 = (function example$datepicker$__GT_t_example$datepicker32659(meta32660){
return (new example.datepicker.t_example$datepicker32659(meta32660));
});

}

return (new example.datepicker.t_example$datepicker32659(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,(new goog.date.Date((2015),(9),(22))),cljs.core.cst$kw$end,(new goog.date.Date((2015),(9),(25)))], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$datepicker,cljs.core.cst$kw$clearable], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"clearable",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.datepicker !== 'undefined') && (typeof example.datepicker.t_example$datepicker32662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.datepicker.t_example$datepicker32662 = (function (meta32663){
this.meta32663 = meta32663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.datepicker.t_example$datepicker32662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32664,meta32663__$1){
var self__ = this;
var _32664__$1 = this;
return (new example.datepicker.t_example$datepicker32662(meta32663__$1));
}));

(example.datepicker.t_example$datepicker32662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32664){
var self__ = this;
var _32664__$1 = this;
return self__.meta32663;
}));

(example.datepicker.t_example$datepicker32662.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.datepicker.t_example$datepicker32662.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (date,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.datepicker.date,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.deref(date),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(date,x);
}),cljs.core.cst$kw$clearable_QMARK_,true], null)], null);
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

(example.datepicker.t_example$datepicker32662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32663], null);
}));

(example.datepicker.t_example$datepicker32662.cljs$lang$type = true);

(example.datepicker.t_example$datepicker32662.cljs$lang$ctorStr = "example.datepicker/t_example$datepicker32662");

(example.datepicker.t_example$datepicker32662.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.datepicker/t_example$datepicker32662");
}));

/**
 * Positional factory function for example.datepicker/t_example$datepicker32662.
 */
example.datepicker.__GT_t_example$datepicker32662 = (function example$datepicker$__GT_t_example$datepicker32662(meta32663){
return (new example.datepicker.t_example$datepicker32662(meta32663));
});

}

return (new example.datepicker.t_example$datepicker32662(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$datepicker,cljs.core.cst$kw$date_DASH_and_DASH_time], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"date-and-time",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.datepicker !== 'undefined') && (typeof example.datepicker.t_example$datepicker32665 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.datepicker.t_example$datepicker32665 = (function (meta32666){
this.meta32666 = meta32666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.datepicker.t_example$datepicker32665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32667,meta32666__$1){
var self__ = this;
var _32667__$1 = this;
return (new example.datepicker.t_example$datepicker32665(meta32666__$1));
}));

(example.datepicker.t_example$datepicker32665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32667){
var self__ = this;
var _32667__$1 = this;
return self__.meta32666;
}));

(example.datepicker.t_example$datepicker32665.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.datepicker.t_example$datepicker32665.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (date,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.datepicker.date,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.deref(date),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(date,(cljs.core.truth_(x)?(function (){var G__32668 = (cljs.core.truth_(cljs.core.deref(date))?cljs.core.deref(date).clone():(new goog.date.UtcDateTime()));
G__32668.setYear(x.getYear());

G__32668.setMonth(x.getMonth());

G__32668.setDate(x.getDate());

return G__32668;
})():null));
}),cljs.core.cst$kw$clearable_QMARK_,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.timepicker.timepicker,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref(date),cljs.core.cst$kw$on_DASH_select,(function (x){
return cljs.core.reset_BANG_(date,x);
})], null)], null)], null);
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

(example.datepicker.t_example$datepicker32665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32666], null);
}));

(example.datepicker.t_example$datepicker32665.cljs$lang$type = true);

(example.datepicker.t_example$datepicker32665.cljs$lang$ctorStr = "example.datepicker/t_example$datepicker32665");

(example.datepicker.t_example$datepicker32665.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.datepicker/t_example$datepicker32665");
}));

/**
 * Positional factory function for example.datepicker/t_example$datepicker32665.
 */
example.datepicker.__GT_t_example$datepicker32665 = (function example$datepicker$__GT_t_example$datepicker32665(meta32666){
return (new example.datepicker.t_example$datepicker32665(meta32666));
});

}

return (new example.datepicker.t_example$datepicker32665(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1((new goog.date.UtcDateTime())),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
