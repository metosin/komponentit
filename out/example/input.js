// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.input');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('komponentit.input');
goog.require('komponentit.autosize');
goog.require('reagent.core');
goog.require('cljs.test');
goog.require('devcards.core');
goog.require('example.options');
goog.require('example.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,[example.core.header(cljs.core.cst$sym$input,"Inputs"),"Collection of input elements which only call `on-change` after small timeout, on\n`on-blur` event or when Enter is pressed. This allows good performance where\n`on-change` might trigger many re-renders."].join(''),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$text_DASH_input], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"text-input",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input32370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input32370 = (function (meta32371){
this.meta32371 = meta32371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input32370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32372,meta32371__$1){
var self__ = this;
var _32372__$1 = this;
return (new example.input.t_example$input32370(meta32371__$1));
}));

(example.input.t_example$input32370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32372){
var self__ = this;
var _32372__$1 = this;
return self__.meta32371;
}));

(example.input.t_example$input32370.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input32370.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.text,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (v){
console.log("on-change",v);

return cljs.core.reset_BANG_(value,v);
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

(example.input.t_example$input32370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32371], null);
}));

(example.input.t_example$input32370.cljs$lang$type = true);

(example.input.t_example$input32370.cljs$lang$ctorStr = "example.input/t_example$input32370");

(example.input.t_example$input32370.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input32370");
}));

/**
 * Positional factory function for example.input/t_example$input32370.
 */
example.input.__GT_t_example$input32370 = (function example$input$__GT_t_example$input32370(meta32371){
return (new example.input.t_example$input32370(meta32371));
});

}

return (new example.input.t_example$input32370(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Hello World"),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$autosize_DASH_input], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"autosize-input",cljs.core.cst$kw$documentation,"The input element is configurable with `:el` option so any element behaving like a\n  input is supported, like for example [autosize](#!/example.autosize) components",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input32374 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input32374 = (function (meta32375){
this.meta32375 = meta32375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input32374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32376,meta32375__$1){
var self__ = this;
var _32376__$1 = this;
return (new example.input.t_example$input32374(meta32375__$1));
}));

(example.input.t_example$input32374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32376){
var self__ = this;
var _32376__$1 = this;
return self__.meta32375;
}));

(example.input.t_example$input32374.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input32374.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$el,komponentit.autosize.input,cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (p1__32373_SHARP_){
return cljs.core.reset_BANG_(value,p1__32373_SHARP_);
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

(example.input.t_example$input32374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32375], null);
}));

(example.input.t_example$input32374.cljs$lang$type = true);

(example.input.t_example$input32374.cljs$lang$ctorStr = "example.input/t_example$input32374");

(example.input.t_example$input32374.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input32374");
}));

/**
 * Positional factory function for example.input/t_example$input32374.
 */
example.input.__GT_t_example$input32374 = (function example$input$__GT_t_example$input32374(meta32375){
return (new example.input.t_example$input32374(meta32375));
});

}

return (new example.input.t_example$input32374(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Hello"),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$number_DASH_input], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"number-input",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input32377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input32377 = (function (meta32378){
this.meta32378 = meta32378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input32377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32379,meta32378__$1){
var self__ = this;
var _32379__$1 = this;
return (new example.input.t_example$input32377(meta32378__$1));
}));

(example.input.t_example$input32377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32379){
var self__ = this;
var _32379__$1 = this;
return self__.meta32378;
}));

(example.input.t_example$input32377.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input32377.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Normal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.number,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(value,x);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Multiplier 100"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.number,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(value,x);
}),cljs.core.cst$kw$multiplier,(100)], null)], null)], null)], null);
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

(example.input.t_example$input32377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32378], null);
}));

(example.input.t_example$input32377.cljs$lang$type = true);

(example.input.t_example$input32377.cljs$lang$ctorStr = "example.input/t_example$input32377");

(example.input.t_example$input32377.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input32377");
}));

/**
 * Positional factory function for example.input/t_example$input32377.
 */
example.input.__GT_t_example$input32377 = (function example$input$__GT_t_example$input32377(meta32378){
return (new example.input.t_example$input32377(meta32378));
});

}

return (new example.input.t_example$input32377(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1((100)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$password_DASH_input], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"password-input",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input32380 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input32380 = (function (meta32381){
this.meta32381 = meta32381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input32380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32382,meta32381__$1){
var self__ = this;
var _32382__$1 = this;
return (new example.input.t_example$input32380(meta32381__$1));
}));

(example.input.t_example$input32380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32382){
var self__ = this;
var _32382__$1 = this;
return self__.meta32381;
}));

(example.input.t_example$input32380.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input32380.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.password,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(value,x);
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

(example.input.t_example$input32380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32381], null);
}));

(example.input.t_example$input32380.cljs$lang$type = true);

(example.input.t_example$input32380.cljs$lang$ctorStr = "example.input/t_example$input32380");

(example.input.t_example$input32380.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input32380");
}));

/**
 * Positional factory function for example.input/t_example$input32380.
 */
example.input.__GT_t_example$input32380 = (function example$input$__GT_t_example$input32380(meta32381){
return (new example.input.t_example$input32380(meta32381));
});

}

return (new example.input.t_example$input32380(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Hello World"),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
example.input.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar vitae ex non tincidunt. Vivamus rutrum enim eget elit congue pulvinar. Ut eu sodales odio, sit amet pellentesque libero. Curabitur suscipit non urna non convallis. Nulla bibendum massa nec nunc feugiat mattis. Duis velit felis, mattis nec aliquam et, dictum ac ipsum. Praesent condimentum aliquam magna, vel molestie erat vulputate vel. Quisque nec imperdiet magna, nec ultricies nisl. Phasellus ac dui ante. Donec egestas, felis eu tincidunt feugiat, lacus est lacinia enim, quis egestas arcu velit et velit. Aenean nec felis vel quam tincidunt egestas sed a felis. Sed nibh tortor, ultricies vitae bibendum sit amet, dictum vel lorem. Duis venenatis orci euismod tempus iaculis. Quisque venenatis eget leo vel laoreet.\n\nSuspendisse id bibendum velit. Phasellus cursus mauris finibus diam tempor, a feugiat neque maximus. Pellentesque ultricies tellus et ex consectetur, a eleifend magna aliquam. In hac habitasse platea dictumst. Aliquam nibh nibh, malesuada eget augue et, varius eleifend erat. Aenean vel lectus ut tortor iaculis cursus id eget diam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$textarea], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"textarea",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input32383 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input32383 = (function (meta32384){
this.meta32384 = meta32384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input32383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32385,meta32384__$1){
var self__ = this;
var _32385__$1 = this;
return (new example.input.t_example$input32383(meta32384__$1));
}));

(example.input.t_example$input32383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32385){
var self__ = this;
var _32385__$1 = this;
return self__.meta32384;
}));

(example.input.t_example$input32383.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input32383.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(value,x);
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"200px"], null)], null)], null)], null);
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

(example.input.t_example$input32383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32384], null);
}));

(example.input.t_example$input32383.cljs$lang$type = true);

(example.input.t_example$input32383.cljs$lang$ctorStr = "example.input/t_example$input32383");

(example.input.t_example$input32383.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input32383");
}));

/**
 * Positional factory function for example.input/t_example$input32383.
 */
example.input.__GT_t_example$input32383 = (function example$input$__GT_t_example$input32383(meta32384){
return (new example.input.t_example$input32383(meta32384));
});

}

return (new example.input.t_example$input32383(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(example.input.lorem),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
example.input.safe_long = (function example$input$safe_long(s){
var i = cljs.core.long$(s);
if(cljs.core.truth_(isNaN(i))){
return s;
} else {
return i;
}
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$select], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"select",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input32386 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input32386 = (function (meta32387){
this.meta32387 = meta32387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input32386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32388,meta32387__$1){
var self__ = this;
var _32388__$1 = this;
return (new example.input.t_example$input32386(meta32387__$1));
}));

(example.input.t_example$input32386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32388){
var self__ = this;
var _32388__$1 = this;
return self__.meta32387;
}));

(example.input.t_example$input32386.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input32386.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.select,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(value,x);
}),cljs.core.cst$kw$options,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(1),cljs.core.cst$kw$text,"Option 1"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(2),cljs.core.cst$kw$text,"Option 2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(3),cljs.core.cst$kw$text,"Option 3"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"foo",cljs.core.cst$kw$text,"Option foo"], null)], null),cljs.core.cst$kw$empty_DASH_option_QMARK_,true,cljs.core.cst$kw$value_DASH_fn,example.input.safe_long], null)], null)], null);
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

(example.input.t_example$input32386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32387], null);
}));

(example.input.t_example$input32386.cljs$lang$type = true);

(example.input.t_example$input32386.cljs$lang$ctorStr = "example.input/t_example$input32386");

(example.input.t_example$input32386.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input32386");
}));

/**
 * Positional factory function for example.input/t_example$input32386.
 */
example.input.__GT_t_example$input32386 = (function example$input$__GT_t_example$input32386(meta32387){
return (new example.input.t_example$input32386(meta32387));
});

}

return (new example.input.t_example$input32386(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$select_DASH_boolean], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"select-boolean",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input32389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input32389 = (function (meta32390){
this.meta32390 = meta32390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input32389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32391,meta32390__$1){
var self__ = this;
var _32391__$1 = this;
return (new example.input.t_example$input32389(meta32390__$1));
}));

(example.input.t_example$input32389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32391){
var self__ = this;
var _32391__$1 = this;
return self__.meta32390;
}));

(example.input.t_example$input32389.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input32389.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.select,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(value,x);
}),cljs.core.cst$kw$options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,true,cljs.core.cst$kw$text,"Option true"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,false,cljs.core.cst$kw$text,"Option false"], null)], null),cljs.core.cst$kw$value_DASH_fn,new cljs.core.PersistentArrayMap(null, 2, ["true",true,"false",false], null)], null)], null)], null);
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

(example.input.t_example$input32389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32390], null);
}));

(example.input.t_example$input32389.cljs$lang$type = true);

(example.input.t_example$input32389.cljs$lang$ctorStr = "example.input/t_example$input32389");

(example.input.t_example$input32389.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input32389");
}));

/**
 * Positional factory function for example.input/t_example$input32389.
 */
example.input.__GT_t_example$input32389 = (function example$input$__GT_t_example$input32389(meta32390){
return (new example.input.t_example$input32389(meta32390));
});

}

return (new example.input.t_example$input32389(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$checkbox], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"checkbox",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input32392 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input32392 = (function (meta32393){
this.meta32393 = meta32393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input32392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32394,meta32393__$1){
var self__ = this;
var _32394__$1 = this;
return (new example.input.t_example$input32392(meta32393__$1));
}));

(example.input.t_example$input32392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32394){
var self__ = this;
var _32394__$1 = this;
return self__.meta32393;
}));

(example.input.t_example$input32392.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input32392.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.checkbox,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(value,x);
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

(example.input.t_example$input32392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32393], null);
}));

(example.input.t_example$input32392.cljs$lang$type = true);

(example.input.t_example$input32392.cljs$lang$ctorStr = "example.input/t_example$input32392");

(example.input.t_example$input32392.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input32392");
}));

/**
 * Positional factory function for example.input/t_example$input32392.
 */
example.input.__GT_t_example$input32392 = (function example$input$__GT_t_example$input32392(meta32393){
return (new example.input.t_example$input32392(meta32393));
});

}

return (new example.input.t_example$input32392(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$str_DASH__GT_number_DASH_test], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"str->number-test",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,1.1,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,1"),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32395){var t__31051__auto__ = e32395;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,1.1,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,10"),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32396){var t__31051__auto__ = e32396;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,1.11,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,11"),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32397){var t__31051__auto__ = e32397;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,0.11,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1(",11"),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32398){var t__31051__auto__ = e32398;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,10.0012,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("10,0012"),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32399){var t__31051__auto__ = e32399;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
var opts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__31006__auto___32445 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0",opts),null,(1),null)),(2),null));
var result__31007__auto___32446 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32445);
if(cljs.core.truth_(result__31007__auto___32446)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32445),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32445),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32400){var t__31051__auto___32447 = e32400;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32447,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32448 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,0",opts),null,(1),null)),(2),null));
var result__31007__auto___32449 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32448);
if(cljs.core.truth_(result__31007__auto___32449)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32448),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32448),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32401){var t__31051__auto___32450 = e32401;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32450,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32451 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50",opts),null,(1),null)),(2),null));
var result__31007__auto___32452 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32451);
if(cljs.core.truth_(result__31007__auto___32452)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32451),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32451),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32402){var t__31051__auto___32453 = e32402;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32453,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32454 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,cljs.core.long$(komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0012",opts)),null,(1),null)),(2),null));
var result__31007__auto___32455 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32454);
if(cljs.core.truth_(result__31007__auto___32455)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32454),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32454),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32403){var t__31051__auto___32456 = e32403;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,t__31051__auto___32456,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32457 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(" \t10.50",opts),null,(1),null)),(2),null));
var result__31007__auto___32458 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32457);
if(cljs.core.truth_(result__31007__auto___32458)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32457),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32457),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32404){var t__31051__auto___32459 = e32404;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32459,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32460 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50abc",opts),null,(1),null)),(2),null));
var result__31007__auto___32461 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32460);
if(cljs.core.truth_(result__31007__auto___32461)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32460),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32460),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32405){var t__31051__auto___32462 = e32405;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32462,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32463 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,50",opts),null,(1),null)),(2),null));
var result__31007__auto___32464 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32463);
if(cljs.core.truth_(result__31007__auto___32464)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32463),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32463),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32406){var t__31051__auto___32465 = e32406;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32465,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32466 = (new cljs.core.List(null,1050.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.505",opts),null,(1),null)),(2),null));
var result__31007__auto___32467 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32466);
if(cljs.core.truth_(result__31007__auto___32467)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32466),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32466),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32407){var t__31051__auto___32468 = e32407;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32468,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32469 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10",opts),null,(1),null)),(2),null));
var result__31007__auto___32470 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32469);
if(cljs.core.truth_(result__31007__auto___32470)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32469),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32469),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32408){var t__31051__auto___32471 = e32408;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32471,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32472 = (new cljs.core.List(null,(1000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10 000",opts),null,(1),null)),(2),null));
var result__31007__auto___32473 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32472);
if(cljs.core.truth_(result__31007__auto___32473)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32472),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32472),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32409){var t__31051__auto___32474 = e32409;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32474,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32475 = (new cljs.core.List(null,(100000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("1 000 000",opts),null,(1),null)),(2),null));
var result__31007__auto___32476 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32475);
if(cljs.core.truth_(result__31007__auto___32476)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32475),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32475),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32410){var t__31051__auto___32477 = e32410;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32477,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32478 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(".10",opts),null,(1),null)),(2),null));
var result__31007__auto___32479 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32478);
if(cljs.core.truth_(result__31007__auto___32479)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32478),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32478),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32411){var t__31051__auto___32480 = e32411;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32480,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32481 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(",10",opts),null,(1),null)),(2),null));
var result__31007__auto___32482 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32481);
if(cljs.core.truth_(result__31007__auto___32482)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32481),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32481),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32412){var t__31051__auto___32483 = e32412;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32483,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32484 = (new cljs.core.List(null,(-1055),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("-10,55",opts),null,(1),null)),(2),null));
var result__31007__auto___32485 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32484);
if(cljs.core.truth_(result__31007__auto___32485)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32484),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32484),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32413){var t__31051__auto___32486 = e32413;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32486,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32487 = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("",opts),null,(1),null)),(2),null));
var result__31007__auto___32488 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32487);
if(cljs.core.truth_(result__31007__auto___32488)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32487),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32487),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32414){var t__31051__auto___32489 = e32414;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32489,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto__ = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("  \t",opts),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32415){var t__31051__auto__ = e32415;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,15.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("15.5"),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32416){var t__31051__auto__ = e32416;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,15.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null)),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32417){var t__31051__auto__ = e32417;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,(-10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("\u201310"),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32418){var t__31051__auto__ = e32418;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,(-10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("\u221210"),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32419){var t__31051__auto__ = e32419;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}})], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

example.input.str__GT_number_test = (function example$input$str__GT_number_test(){
return cljs.test.test_var(example.input.str__GT_number_test.cljs$lang$var);
});
example.input.str__GT_number_test.cljs$lang$test = (function (){
try{var values__31006__auto___32490 = (new cljs.core.List(null,1.1,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,1"),null,(1),null)),(2),null));
var result__31007__auto___32491 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32490);
if(cljs.core.truth_(result__31007__auto___32491)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32490),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32490),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32420){var t__31051__auto___32492 = e32420;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,t__31051__auto___32492,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32493 = (new cljs.core.List(null,1.1,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,10"),null,(1),null)),(2),null));
var result__31007__auto___32494 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32493);
if(cljs.core.truth_(result__31007__auto___32494)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32493),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32493),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32421){var t__31051__auto___32495 = e32421;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,t__31051__auto___32495,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32496 = (new cljs.core.List(null,1.11,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,11"),null,(1),null)),(2),null));
var result__31007__auto___32497 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32496);
if(cljs.core.truth_(result__31007__auto___32497)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32496),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32496),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32422){var t__31051__auto___32498 = e32422;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,t__31051__auto___32498,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32499 = (new cljs.core.List(null,0.11,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1(",11"),null,(1),null)),(2),null));
var result__31007__auto___32500 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32499);
if(cljs.core.truth_(result__31007__auto___32500)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32499),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32499),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32423){var t__31051__auto___32501 = e32423;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,t__31051__auto___32501,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32502 = (new cljs.core.List(null,10.0012,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("10,0012"),null,(1),null)),(2),null));
var result__31007__auto___32503 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32502);
if(cljs.core.truth_(result__31007__auto___32503)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32502),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32502),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32424){var t__31051__auto___32504 = e32424;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,t__31051__auto___32504,cljs.core.cst$kw$message,null], null));
}
var opts_32505 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__31006__auto___32506 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0",opts_32505),null,(1),null)),(2),null));
var result__31007__auto___32507 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32506);
if(cljs.core.truth_(result__31007__auto___32507)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32506),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32506),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32425){var t__31051__auto___32508 = e32425;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32508,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32509 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,0",opts_32505),null,(1),null)),(2),null));
var result__31007__auto___32510 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32509);
if(cljs.core.truth_(result__31007__auto___32510)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32509),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32509),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32426){var t__31051__auto___32511 = e32426;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32511,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32512 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50",opts_32505),null,(1),null)),(2),null));
var result__31007__auto___32513 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32512);
if(cljs.core.truth_(result__31007__auto___32513)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32512),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32512),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32427){var t__31051__auto___32514 = e32427;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32514,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32515 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,cljs.core.long$(komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0012",opts_32505)),null,(1),null)),(2),null));
var result__31007__auto___32516 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32515);
if(cljs.core.truth_(result__31007__auto___32516)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32515),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32515),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32428){var t__31051__auto___32517 = e32428;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,t__31051__auto___32517,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32518 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(" \t10.50",opts_32505),null,(1),null)),(2),null));
var result__31007__auto___32519 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32518);
if(cljs.core.truth_(result__31007__auto___32519)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32518),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32518),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32429){var t__31051__auto___32520 = e32429;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32520,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32521 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50abc",opts_32505),null,(1),null)),(2),null));
var result__31007__auto___32522 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32521);
if(cljs.core.truth_(result__31007__auto___32522)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32521),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32521),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32430){var t__31051__auto___32523 = e32430;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32523,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32524 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,50",opts_32505),null,(1),null)),(2),null));
var result__31007__auto___32525 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32524);
if(cljs.core.truth_(result__31007__auto___32525)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32524),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32524),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32431){var t__31051__auto___32526 = e32431;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32526,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32527 = (new cljs.core.List(null,1050.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.505",opts_32505),null,(1),null)),(2),null));
var result__31007__auto___32528 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32527);
if(cljs.core.truth_(result__31007__auto___32528)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32527),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32527),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32432){var t__31051__auto___32529 = e32432;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32529,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32530 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10",opts_32505),null,(1),null)),(2),null));
var result__31007__auto___32531 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32530);
if(cljs.core.truth_(result__31007__auto___32531)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32530),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32530),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32433){var t__31051__auto___32532 = e32433;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32532,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32533 = (new cljs.core.List(null,(1000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10 000",opts_32505),null,(1),null)),(2),null));
var result__31007__auto___32534 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32533);
if(cljs.core.truth_(result__31007__auto___32534)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32533),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32533),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32434){var t__31051__auto___32535 = e32434;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32535,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32536 = (new cljs.core.List(null,(100000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("1 000 000",opts_32505),null,(1),null)),(2),null));
var result__31007__auto___32537 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32536);
if(cljs.core.truth_(result__31007__auto___32537)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32536),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32536),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32435){var t__31051__auto___32538 = e32435;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32538,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32539 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(".10",opts_32505),null,(1),null)),(2),null));
var result__31007__auto___32540 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32539);
if(cljs.core.truth_(result__31007__auto___32540)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32539),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32539),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32436){var t__31051__auto___32541 = e32436;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32541,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32542 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(",10",opts_32505),null,(1),null)),(2),null));
var result__31007__auto___32543 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32542);
if(cljs.core.truth_(result__31007__auto___32543)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32542),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32542),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32437){var t__31051__auto___32544 = e32437;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32544,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32545 = (new cljs.core.List(null,(-1055),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("-10,55",opts_32505),null,(1),null)),(2),null));
var result__31007__auto___32546 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32545);
if(cljs.core.truth_(result__31007__auto___32546)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32545),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32545),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32438){var t__31051__auto___32547 = e32438;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32547,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32548 = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("",opts_32505),null,(1),null)),(2),null));
var result__31007__auto___32549 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32548);
if(cljs.core.truth_(result__31007__auto___32549)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32548),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32548),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32439){var t__31051__auto___32550 = e32439;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32550,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32551 = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("  \t",opts_32505),null,(1),null)),(2),null));
var result__31007__auto___32552 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32551);
if(cljs.core.truth_(result__31007__auto___32552)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32551),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32551),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32440){var t__31051__auto___32553 = e32440;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32553,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32554 = (new cljs.core.List(null,15.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("15.5"),null,(1),null)),(2),null));
var result__31007__auto___32555 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32554);
if(cljs.core.truth_(result__31007__auto___32555)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32554),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32554),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32441){var t__31051__auto___32556 = e32441;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,t__31051__auto___32556,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32557 = (new cljs.core.List(null,15.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null)),null,(1),null)),(2),null));
var result__31007__auto___32558 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32557);
if(cljs.core.truth_(result__31007__auto___32558)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32557),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32557),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32442){var t__31051__auto___32559 = e32442;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,t__31051__auto___32559,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32560 = (new cljs.core.List(null,(-10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("\u201310"),null,(1),null)),(2),null));
var result__31007__auto___32561 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32560);
if(cljs.core.truth_(result__31007__auto___32561)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32560),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32560),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32443){var t__31051__auto___32562 = e32443;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,t__31051__auto___32562,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto__ = (new cljs.core.List(null,(-10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("\u221210"),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32444){var t__31051__auto__ = e32444;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}});

(example.input.str__GT_number_test.cljs$lang$var = new cljs.core.Var(function(){return example.input.str__GT_number_test;},cljs.core.cst$sym$example$input_SLASH_str_DASH__GT_number_DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$example$input,cljs.core.cst$sym$str_DASH__GT_number_DASH_test,"/home/juho/Source/komponentit/example-src/cljs/example/input.cljs",29,1,121,121,cljs.core.List.EMPTY,null,(cljs.core.truth_(example.input.str__GT_number_test)?example.input.str__GT_number_test.cljs$lang$test:null)])));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$number_DASH__GT_str_DASH_test], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"number->str-test",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
var opts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__31006__auto___32595 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts),null,(1),null)),(2),null));
var result__31007__auto___32596 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32595);
if(cljs.core.truth_(result__31007__auto___32596)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32595),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32595),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32563){var t__31051__auto___32597 = e32563;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32597,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32598 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts),null,(1),null)),(2),null));
var result__31007__auto___32599 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32598);
if(cljs.core.truth_(result__31007__auto___32599)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32598),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32598),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32564){var t__31051__auto___32600 = e32564;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32600,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32601 = (new cljs.core.List(null,"-10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1000),opts),null,(1),null)),(2),null));
var result__31007__auto___32602 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32601);
if(cljs.core.truth_(result__31007__auto___32602)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32601),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32601),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32565){var t__31051__auto___32603 = e32565;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32603,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32604 = (new cljs.core.List(null,"-10.45",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1045),opts),null,(1),null)),(2),null));
var result__31007__auto___32605 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32604);
if(cljs.core.truth_(result__31007__auto___32605)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32604),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32604),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32566){var t__31051__auto___32606 = e32566;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32606,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32607 = (new cljs.core.List(null,"1",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((100),opts),null,(1),null)),(2),null));
var result__31007__auto___32608 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32607);
if(cljs.core.truth_(result__31007__auto___32608)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32607),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32607),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32567){var t__31051__auto___32609 = e32567;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32609,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto__ = (new cljs.core.List(null,"",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(null,opts),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32568){var t__31051__auto__ = e32568;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,"10.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null)),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32569){var t__31051__auto__ = e32569;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,"10.00",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32570){var t__31051__auto__ = e32570;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32571){var t__31051__auto__ = e32571;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,"10.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32572){var t__31051__auto__ = e32572;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,"10.50",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32573){var t__31051__auto__ = e32573;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,"10.55",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32574){var t__31051__auto__ = e32574;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,"10.55",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32575){var t__31051__auto__ = e32575;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,"10.00",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32576){var t__31051__auto__ = e32576;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,"15.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$1(15.5),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32577){var t__31051__auto__ = e32577;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__31006__auto__ = (new cljs.core.List(null,"15,5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null)),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32578){var t__31051__auto__ = e32578;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}})], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

example.input.number__GT_str_test = (function example$input$number__GT_str_test(){
return cljs.test.test_var(example.input.number__GT_str_test.cljs$lang$var);
});
example.input.number__GT_str_test.cljs$lang$test = (function (){
var opts_32610 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__31006__auto___32611 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts_32610),null,(1),null)),(2),null));
var result__31007__auto___32612 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32611);
if(cljs.core.truth_(result__31007__auto___32612)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32611),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32611),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32579){var t__31051__auto___32613 = e32579;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32613,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32614 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts_32610),null,(1),null)),(2),null));
var result__31007__auto___32615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32614);
if(cljs.core.truth_(result__31007__auto___32615)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32614),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32614),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32580){var t__31051__auto___32616 = e32580;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32616,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32617 = (new cljs.core.List(null,"-10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1000),opts_32610),null,(1),null)),(2),null));
var result__31007__auto___32618 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32617);
if(cljs.core.truth_(result__31007__auto___32618)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32617),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32617),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32581){var t__31051__auto___32619 = e32581;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32619,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32620 = (new cljs.core.List(null,"-10.45",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1045),opts_32610),null,(1),null)),(2),null));
var result__31007__auto___32621 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32620);
if(cljs.core.truth_(result__31007__auto___32621)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32620),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32620),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32582){var t__31051__auto___32622 = e32582;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32622,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32623 = (new cljs.core.List(null,"1",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((100),opts_32610),null,(1),null)),(2),null));
var result__31007__auto___32624 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32623);
if(cljs.core.truth_(result__31007__auto___32624)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32623),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32623),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32583){var t__31051__auto___32625 = e32583;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32625,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32626 = (new cljs.core.List(null,"",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(null,opts_32610),null,(1),null)),(2),null));
var result__31007__auto___32627 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32626);
if(cljs.core.truth_(result__31007__auto___32627)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32626),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32626),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32584){var t__31051__auto___32628 = e32584;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32628,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32629 = (new cljs.core.List(null,"10.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null)),null,(1),null)),(2),null));
var result__31007__auto___32630 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32629);
if(cljs.core.truth_(result__31007__auto___32630)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32629),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32629),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32585){var t__31051__auto___32631 = e32585;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,t__31051__auto___32631,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32632 = (new cljs.core.List(null,"10.00",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32633 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32632);
if(cljs.core.truth_(result__31007__auto___32633)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32632),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32632),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32586){var t__31051__auto___32634 = e32586;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32634,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32635 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32636 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32635);
if(cljs.core.truth_(result__31007__auto___32636)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32635),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32635),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32587){var t__31051__auto___32637 = e32587;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32637,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32638 = (new cljs.core.List(null,"10.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32639 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32638);
if(cljs.core.truth_(result__31007__auto___32639)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32638),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32638),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32588){var t__31051__auto___32640 = e32588;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32640,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32641 = (new cljs.core.List(null,"10.50",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32642 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32641);
if(cljs.core.truth_(result__31007__auto___32642)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32641),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32641),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32589){var t__31051__auto___32643 = e32589;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32643,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32644 = (new cljs.core.List(null,"10.55",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32645 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32644);
if(cljs.core.truth_(result__31007__auto___32645)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32644),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32644),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32590){var t__31051__auto___32646 = e32590;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32646,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32647 = (new cljs.core.List(null,"10.55",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32648 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32647);
if(cljs.core.truth_(result__31007__auto___32648)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32647),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32647),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32591){var t__31051__auto___32649 = e32591;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32649,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32650 = (new cljs.core.List(null,"10.00",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32651 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32650);
if(cljs.core.truth_(result__31007__auto___32651)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32650),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32650),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32592){var t__31051__auto___32652 = e32592;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32652,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32653 = (new cljs.core.List(null,"15.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$1(15.5),null,(1),null)),(2),null));
var result__31007__auto___32654 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32653);
if(cljs.core.truth_(result__31007__auto___32654)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32653),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32653),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32593){var t__31051__auto___32655 = e32593;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,t__31051__auto___32655,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto__ = (new cljs.core.List(null,"15,5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null)),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32594){var t__31051__auto__ = e32594;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}});

(example.input.number__GT_str_test.cljs$lang$var = new cljs.core.Var(function(){return example.input.number__GT_str_test;},cljs.core.cst$sym$example$input_SLASH_number_DASH__GT_str_DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$example$input,cljs.core.cst$sym$number_DASH__GT_str_DASH_test,"/home/juho/Source/komponentit/example-src/cljs/example/input.cljs",29,1,161,161,cljs.core.List.EMPTY,null,(cljs.core.truth_(example.input.number__GT_str_test)?example.input.number__GT_str_test.cljs$lang$test:null)])));
