// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.timepicker');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('komponentit.timepicker');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('goog.date.UtcDateTime');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$timepicker,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"# Work in progress",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$timepicker,cljs.core.cst$kw$timepicker], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"timepicker",cljs.core.cst$kw$documentation,"The Date object is updated on input blur event or when enter is pressed.",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.timepicker !== 'undefined') && (typeof example.timepicker.t_example$timepicker37129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.timepicker.t_example$timepicker37129 = (function (meta37130){
this.meta37130 = meta37130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.timepicker.t_example$timepicker37129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37131,meta37130__$1){
var self__ = this;
var _37131__$1 = this;
return (new example.timepicker.t_example$timepicker37129(meta37130__$1));
}));

(example.timepicker.t_example$timepicker37129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37131){
var self__ = this;
var _37131__$1 = this;
return self__.meta37130;
}));

(example.timepicker.t_example$timepicker37129.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.timepicker.t_example$timepicker37129.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (datetime,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.timepicker.timepicker,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.deref(datetime),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(datetime,x);
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

(example.timepicker.t_example$timepicker37129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37130], null);
}));

(example.timepicker.t_example$timepicker37129.cljs$lang$type = true);

(example.timepicker.t_example$timepicker37129.cljs$lang$ctorStr = "example.timepicker/t_example$timepicker37129");

(example.timepicker.t_example$timepicker37129.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.timepicker/t_example$timepicker37129");
}));

/**
 * Positional factory function for example.timepicker/t_example$timepicker37129.
 */
example.timepicker.__GT_t_example$timepicker37129 = (function example$timepicker$__GT_t_example$timepicker37129(meta37130){
return (new example.timepicker.t_example$timepicker37129(meta37130));
});

}

return (new example.timepicker.t_example$timepicker37129(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1((new goog.date.UtcDateTime())),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
