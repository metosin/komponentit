// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.filepicker');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('komponentit.filepicker');
goog.require('example.options');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('example.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$filepicker,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,example.core.header(cljs.core.cst$sym$filepicker,"Filepicker"),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$filepicker,cljs.core.cst$kw$filepicker], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"filepicker",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.filepicker !== 'undefined') && (typeof example.filepicker.t_example$filepicker32251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.filepicker.t_example$filepicker32251 = (function (meta32252){
this.meta32252 = meta32252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.filepicker.t_example$filepicker32251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32253,meta32252__$1){
var self__ = this;
var _32253__$1 = this;
return (new example.filepicker.t_example$filepicker32251(meta32252__$1));
}));

(example.filepicker.t_example$filepicker32251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32253){
var self__ = this;
var _32253__$1 = this;
return self__.meta32252;
}));

(example.filepicker.t_example$filepicker32251.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.filepicker.t_example$filepicker32251.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.table,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),(function (k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,cljs.core.cst$kw$options,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,v], 0));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_select_DASH_label,cljs.core.cst$kw$string], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clearable_QMARK_,cljs.core.cst$kw$bool], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$iec_QMARK_,cljs.core.cst$kw$bool], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$string], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.filepicker.filepicker,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_select,(function (p1__32250_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$value,p1__32250_SHARP_);
})], null)], 0))], null)], null);
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

(example.filepicker.t_example$filepicker32251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32252], null);
}));

(example.filepicker.t_example$filepicker32251.cljs$lang$type = true);

(example.filepicker.t_example$filepicker32251.cljs$lang$ctorStr = "example.filepicker/t_example$filepicker32251");

(example.filepicker.t_example$filepicker32251.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.filepicker/t_example$filepicker32251");
}));

/**
 * Positional factory function for example.filepicker/t_example$filepicker32251.
 */
example.filepicker.__GT_t_example$filepicker32251 = (function example$filepicker$__GT_t_example$filepicker32251(meta32252){
return (new example.filepicker.t_example$filepicker32251(meta32252));
});

}

return (new example.filepicker.t_example$filepicker32251(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,null,cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file_DASH_select_DASH_label,"Select a file",cljs.core.cst$kw$clearable_QMARK_,false,cljs.core.cst$kw$iec_QMARK_,false,cljs.core.cst$kw$locale,"en-US"], null)], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
example.filepicker.clear_button = (function example$filepicker$clear_button(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$files,cljs.core.PersistentVector.EMPTY);

return null;
})], null),"Empty"], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$filepicker,cljs.core.cst$kw$drag_DASH_and_DASH_drop], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"drag-and-drop",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.filepicker !== 'undefined') && (typeof example.filepicker.t_example$filepicker32255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.filepicker.t_example$filepicker32255 = (function (meta32256){
this.meta32256 = meta32256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.filepicker.t_example$filepicker32255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32257,meta32256__$1){
var self__ = this;
var _32257__$1 = this;
return (new example.filepicker.t_example$filepicker32255(meta32256__$1));
}));

(example.filepicker.t_example$filepicker32255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32257){
var self__ = this;
var _32257__$1 = this;
return self__.meta32256;
}));

(example.filepicker.t_example$filepicker32255.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.filepicker.t_example$filepicker32255.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([komponentit.filepicker.drop_area(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_file_DASH_drop,(function (files){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,cljs.core.cst$kw$files,cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([files], 0));
}),cljs.core.cst$kw$on_DASH_active_DASH_change,(function (p1__32254_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$active_QMARK_,p1__32254_SHARP_);
})], null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"40px",cljs.core.cst$kw$border,(cljs.core.truth_(cljs.core.cst$kw$active_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"2px dotted #888":"2px dotted #ccc")], null)], null)], 0)),"Drop a file here",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.filepicker.clear_button,state], null)], null)], null);
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

(example.filepicker.t_example$filepicker32255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32256], null);
}));

(example.filepicker.t_example$filepicker32255.cljs$lang$type = true);

(example.filepicker.t_example$filepicker32255.cljs$lang$ctorStr = "example.filepicker/t_example$filepicker32255");

(example.filepicker.t_example$filepicker32255.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.filepicker/t_example$filepicker32255");
}));

/**
 * Positional factory function for example.filepicker/t_example$filepicker32255.
 */
example.filepicker.__GT_t_example$filepicker32255 = (function example$filepicker$__GT_t_example$filepicker32255(meta32256){
return (new example.filepicker.t_example$filepicker32255(meta32256));
});

}

return (new example.filepicker.t_example$filepicker32255(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$files,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$active_QMARK_,false], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
