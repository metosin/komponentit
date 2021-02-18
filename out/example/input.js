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
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input32351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input32351 = (function (meta32352){
this.meta32352 = meta32352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input32351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32353,meta32352__$1){
var self__ = this;
var _32353__$1 = this;
return (new example.input.t_example$input32351(meta32352__$1));
}));

(example.input.t_example$input32351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32353){
var self__ = this;
var _32353__$1 = this;
return self__.meta32352;
}));

(example.input.t_example$input32351.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input32351.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
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

(example.input.t_example$input32351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32352], null);
}));

(example.input.t_example$input32351.cljs$lang$type = true);

(example.input.t_example$input32351.cljs$lang$ctorStr = "example.input/t_example$input32351");

(example.input.t_example$input32351.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input32351");
}));

/**
 * Positional factory function for example.input/t_example$input32351.
 */
example.input.__GT_t_example$input32351 = (function example$input$__GT_t_example$input32351(meta32352){
return (new example.input.t_example$input32351(meta32352));
});

}

return (new example.input.t_example$input32351(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Hello World"),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$autosize_DASH_input], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"autosize-input",cljs.core.cst$kw$documentation,"The input element is configurable with `:el` option so any element behaving like a\n  input is supported, like for example [autosize](#!/example.autosize) components",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input32355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input32355 = (function (meta32356){
this.meta32356 = meta32356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input32355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32357,meta32356__$1){
var self__ = this;
var _32357__$1 = this;
return (new example.input.t_example$input32355(meta32356__$1));
}));

(example.input.t_example$input32355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32357){
var self__ = this;
var _32357__$1 = this;
return self__.meta32356;
}));

(example.input.t_example$input32355.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input32355.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$el,komponentit.autosize.input,cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (p1__32354_SHARP_){
return cljs.core.reset_BANG_(value,p1__32354_SHARP_);
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

(example.input.t_example$input32355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32356], null);
}));

(example.input.t_example$input32355.cljs$lang$type = true);

(example.input.t_example$input32355.cljs$lang$ctorStr = "example.input/t_example$input32355");

(example.input.t_example$input32355.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input32355");
}));

/**
 * Positional factory function for example.input/t_example$input32355.
 */
example.input.__GT_t_example$input32355 = (function example$input$__GT_t_example$input32355(meta32356){
return (new example.input.t_example$input32355(meta32356));
});

}

return (new example.input.t_example$input32355(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Hello"),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$number_DASH_input], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"number-input",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input32358 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input32358 = (function (meta32359){
this.meta32359 = meta32359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input32358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32360,meta32359__$1){
var self__ = this;
var _32360__$1 = this;
return (new example.input.t_example$input32358(meta32359__$1));
}));

(example.input.t_example$input32358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32360){
var self__ = this;
var _32360__$1 = this;
return self__.meta32359;
}));

(example.input.t_example$input32358.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input32358.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
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

(example.input.t_example$input32358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32359], null);
}));

(example.input.t_example$input32358.cljs$lang$type = true);

(example.input.t_example$input32358.cljs$lang$ctorStr = "example.input/t_example$input32358");

(example.input.t_example$input32358.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input32358");
}));

/**
 * Positional factory function for example.input/t_example$input32358.
 */
example.input.__GT_t_example$input32358 = (function example$input$__GT_t_example$input32358(meta32359){
return (new example.input.t_example$input32358(meta32359));
});

}

return (new example.input.t_example$input32358(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1((100)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$password_DASH_input], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"password-input",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input32361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input32361 = (function (meta32362){
this.meta32362 = meta32362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input32361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32363,meta32362__$1){
var self__ = this;
var _32363__$1 = this;
return (new example.input.t_example$input32361(meta32362__$1));
}));

(example.input.t_example$input32361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32363){
var self__ = this;
var _32363__$1 = this;
return self__.meta32362;
}));

(example.input.t_example$input32361.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input32361.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
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

(example.input.t_example$input32361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32362], null);
}));

(example.input.t_example$input32361.cljs$lang$type = true);

(example.input.t_example$input32361.cljs$lang$ctorStr = "example.input/t_example$input32361");

(example.input.t_example$input32361.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input32361");
}));

/**
 * Positional factory function for example.input/t_example$input32361.
 */
example.input.__GT_t_example$input32361 = (function example$input$__GT_t_example$input32361(meta32362){
return (new example.input.t_example$input32361(meta32362));
});

}

return (new example.input.t_example$input32361(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Hello World"),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
example.input.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar vitae ex non tincidunt. Vivamus rutrum enim eget elit congue pulvinar. Ut eu sodales odio, sit amet pellentesque libero. Curabitur suscipit non urna non convallis. Nulla bibendum massa nec nunc feugiat mattis. Duis velit felis, mattis nec aliquam et, dictum ac ipsum. Praesent condimentum aliquam magna, vel molestie erat vulputate vel. Quisque nec imperdiet magna, nec ultricies nisl. Phasellus ac dui ante. Donec egestas, felis eu tincidunt feugiat, lacus est lacinia enim, quis egestas arcu velit et velit. Aenean nec felis vel quam tincidunt egestas sed a felis. Sed nibh tortor, ultricies vitae bibendum sit amet, dictum vel lorem. Duis venenatis orci euismod tempus iaculis. Quisque venenatis eget leo vel laoreet.\n\nSuspendisse id bibendum velit. Phasellus cursus mauris finibus diam tempor, a feugiat neque maximus. Pellentesque ultricies tellus et ex consectetur, a eleifend magna aliquam. In hac habitasse platea dictumst. Aliquam nibh nibh, malesuada eget augue et, varius eleifend erat. Aenean vel lectus ut tortor iaculis cursus id eget diam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$textarea], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"textarea",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input32364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input32364 = (function (meta32365){
this.meta32365 = meta32365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input32364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32366,meta32365__$1){
var self__ = this;
var _32366__$1 = this;
return (new example.input.t_example$input32364(meta32365__$1));
}));

(example.input.t_example$input32364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32366){
var self__ = this;
var _32366__$1 = this;
return self__.meta32365;
}));

(example.input.t_example$input32364.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input32364.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
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

(example.input.t_example$input32364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32365], null);
}));

(example.input.t_example$input32364.cljs$lang$type = true);

(example.input.t_example$input32364.cljs$lang$ctorStr = "example.input/t_example$input32364");

(example.input.t_example$input32364.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input32364");
}));

/**
 * Positional factory function for example.input/t_example$input32364.
 */
example.input.__GT_t_example$input32364 = (function example$input$__GT_t_example$input32364(meta32365){
return (new example.input.t_example$input32364(meta32365));
});

}

return (new example.input.t_example$input32364(null));
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
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input32367 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input32367 = (function (meta32368){
this.meta32368 = meta32368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input32367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32369,meta32368__$1){
var self__ = this;
var _32369__$1 = this;
return (new example.input.t_example$input32367(meta32368__$1));
}));

(example.input.t_example$input32367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32369){
var self__ = this;
var _32369__$1 = this;
return self__.meta32368;
}));

(example.input.t_example$input32367.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input32367.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
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

(example.input.t_example$input32367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32368], null);
}));

(example.input.t_example$input32367.cljs$lang$type = true);

(example.input.t_example$input32367.cljs$lang$ctorStr = "example.input/t_example$input32367");

(example.input.t_example$input32367.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input32367");
}));

/**
 * Positional factory function for example.input/t_example$input32367.
 */
example.input.__GT_t_example$input32367 = (function example$input$__GT_t_example$input32367(meta32368){
return (new example.input.t_example$input32367(meta32368));
});

}

return (new example.input.t_example$input32367(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$select_DASH_boolean], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"select-boolean",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
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
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$checkbox], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"checkbox",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input32373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input32373 = (function (meta32374){
this.meta32374 = meta32374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input32373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32375,meta32374__$1){
var self__ = this;
var _32375__$1 = this;
return (new example.input.t_example$input32373(meta32374__$1));
}));

(example.input.t_example$input32373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32375){
var self__ = this;
var _32375__$1 = this;
return self__.meta32374;
}));

(example.input.t_example$input32373.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input32373.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
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

(example.input.t_example$input32373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32374], null);
}));

(example.input.t_example$input32373.cljs$lang$type = true);

(example.input.t_example$input32373.cljs$lang$ctorStr = "example.input/t_example$input32373");

(example.input.t_example$input32373.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input32373");
}));

/**
 * Positional factory function for example.input/t_example$input32373.
 */
example.input.__GT_t_example$input32373 = (function example$input$__GT_t_example$input32373(meta32374){
return (new example.input.t_example$input32373(meta32374));
});

}

return (new example.input.t_example$input32373(null));
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
}catch (e32376){var t__31051__auto__ = e32376;
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
}catch (e32377){var t__31051__auto__ = e32377;
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
}catch (e32378){var t__31051__auto__ = e32378;
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
}catch (e32379){var t__31051__auto__ = e32379;
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
}catch (e32380){var t__31051__auto__ = e32380;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
var opts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__31006__auto___32426 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0",opts),null,(1),null)),(2),null));
var result__31007__auto___32427 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32426);
if(cljs.core.truth_(result__31007__auto___32427)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32426),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32426),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32381){var t__31051__auto___32428 = e32381;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32428,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32429 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,0",opts),null,(1),null)),(2),null));
var result__31007__auto___32430 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32429);
if(cljs.core.truth_(result__31007__auto___32430)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32429),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32429),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32382){var t__31051__auto___32431 = e32382;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32431,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32432 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50",opts),null,(1),null)),(2),null));
var result__31007__auto___32433 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32432);
if(cljs.core.truth_(result__31007__auto___32433)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32432),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32432),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32383){var t__31051__auto___32434 = e32383;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32434,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32435 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,cljs.core.long$(komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0012",opts)),null,(1),null)),(2),null));
var result__31007__auto___32436 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32435);
if(cljs.core.truth_(result__31007__auto___32436)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32435),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32435),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32384){var t__31051__auto___32437 = e32384;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,t__31051__auto___32437,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32438 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(" \t10.50",opts),null,(1),null)),(2),null));
var result__31007__auto___32439 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32438);
if(cljs.core.truth_(result__31007__auto___32439)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32438),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32438),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32385){var t__31051__auto___32440 = e32385;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32440,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32441 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50abc",opts),null,(1),null)),(2),null));
var result__31007__auto___32442 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32441);
if(cljs.core.truth_(result__31007__auto___32442)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32441),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32441),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32386){var t__31051__auto___32443 = e32386;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32443,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32444 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,50",opts),null,(1),null)),(2),null));
var result__31007__auto___32445 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32444);
if(cljs.core.truth_(result__31007__auto___32445)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32444),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32444),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32387){var t__31051__auto___32446 = e32387;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32446,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32447 = (new cljs.core.List(null,1050.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.505",opts),null,(1),null)),(2),null));
var result__31007__auto___32448 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32447);
if(cljs.core.truth_(result__31007__auto___32448)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32447),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32447),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32388){var t__31051__auto___32449 = e32388;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32449,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32450 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10",opts),null,(1),null)),(2),null));
var result__31007__auto___32451 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32450);
if(cljs.core.truth_(result__31007__auto___32451)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32450),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32450),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32389){var t__31051__auto___32452 = e32389;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32452,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32453 = (new cljs.core.List(null,(1000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10 000",opts),null,(1),null)),(2),null));
var result__31007__auto___32454 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32453);
if(cljs.core.truth_(result__31007__auto___32454)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32453),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32453),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32390){var t__31051__auto___32455 = e32390;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32455,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32456 = (new cljs.core.List(null,(100000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("1 000 000",opts),null,(1),null)),(2),null));
var result__31007__auto___32457 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32456);
if(cljs.core.truth_(result__31007__auto___32457)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32456),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32456),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32391){var t__31051__auto___32458 = e32391;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32458,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32459 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(".10",opts),null,(1),null)),(2),null));
var result__31007__auto___32460 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32459);
if(cljs.core.truth_(result__31007__auto___32460)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32459),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32459),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32392){var t__31051__auto___32461 = e32392;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32461,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32462 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(",10",opts),null,(1),null)),(2),null));
var result__31007__auto___32463 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32462);
if(cljs.core.truth_(result__31007__auto___32463)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32462),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32462),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32393){var t__31051__auto___32464 = e32393;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32464,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32465 = (new cljs.core.List(null,(-1055),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("-10,55",opts),null,(1),null)),(2),null));
var result__31007__auto___32466 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32465);
if(cljs.core.truth_(result__31007__auto___32466)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32465),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32465),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32394){var t__31051__auto___32467 = e32394;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32467,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32468 = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("",opts),null,(1),null)),(2),null));
var result__31007__auto___32469 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32468);
if(cljs.core.truth_(result__31007__auto___32469)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32468),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32468),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32395){var t__31051__auto___32470 = e32395;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32470,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto__ = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("  \t",opts),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32396){var t__31051__auto__ = e32396;
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
}catch (e32397){var t__31051__auto__ = e32397;
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
}catch (e32398){var t__31051__auto__ = e32398;
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
}catch (e32399){var t__31051__auto__ = e32399;
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
}catch (e32400){var t__31051__auto__ = e32400;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}})], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

example.input.str__GT_number_test = (function example$input$str__GT_number_test(){
return cljs.test.test_var(example.input.str__GT_number_test.cljs$lang$var);
});
example.input.str__GT_number_test.cljs$lang$test = (function (){
try{var values__31006__auto___32471 = (new cljs.core.List(null,1.1,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,1"),null,(1),null)),(2),null));
var result__31007__auto___32472 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32471);
if(cljs.core.truth_(result__31007__auto___32472)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32471),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32471),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32401){var t__31051__auto___32473 = e32401;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,t__31051__auto___32473,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32474 = (new cljs.core.List(null,1.1,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,10"),null,(1),null)),(2),null));
var result__31007__auto___32475 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32474);
if(cljs.core.truth_(result__31007__auto___32475)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32474),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32474),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32402){var t__31051__auto___32476 = e32402;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,t__31051__auto___32476,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32477 = (new cljs.core.List(null,1.11,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,11"),null,(1),null)),(2),null));
var result__31007__auto___32478 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32477);
if(cljs.core.truth_(result__31007__auto___32478)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32477),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32477),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32403){var t__31051__auto___32479 = e32403;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,t__31051__auto___32479,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32480 = (new cljs.core.List(null,0.11,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1(",11"),null,(1),null)),(2),null));
var result__31007__auto___32481 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32480);
if(cljs.core.truth_(result__31007__auto___32481)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32480),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32480),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32404){var t__31051__auto___32482 = e32404;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,t__31051__auto___32482,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32483 = (new cljs.core.List(null,10.0012,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("10,0012"),null,(1),null)),(2),null));
var result__31007__auto___32484 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32483);
if(cljs.core.truth_(result__31007__auto___32484)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32483),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32483),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32405){var t__31051__auto___32485 = e32405;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,t__31051__auto___32485,cljs.core.cst$kw$message,null], null));
}
var opts_32486 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__31006__auto___32487 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0",opts_32486),null,(1),null)),(2),null));
var result__31007__auto___32488 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32487);
if(cljs.core.truth_(result__31007__auto___32488)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32487),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32487),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32406){var t__31051__auto___32489 = e32406;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32489,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32490 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,0",opts_32486),null,(1),null)),(2),null));
var result__31007__auto___32491 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32490);
if(cljs.core.truth_(result__31007__auto___32491)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32490),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32490),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32407){var t__31051__auto___32492 = e32407;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32492,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32493 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50",opts_32486),null,(1),null)),(2),null));
var result__31007__auto___32494 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32493);
if(cljs.core.truth_(result__31007__auto___32494)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32493),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32493),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32408){var t__31051__auto___32495 = e32408;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32495,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32496 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,cljs.core.long$(komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0012",opts_32486)),null,(1),null)),(2),null));
var result__31007__auto___32497 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32496);
if(cljs.core.truth_(result__31007__auto___32497)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32496),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32496),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32409){var t__31051__auto___32498 = e32409;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,t__31051__auto___32498,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32499 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(" \t10.50",opts_32486),null,(1),null)),(2),null));
var result__31007__auto___32500 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32499);
if(cljs.core.truth_(result__31007__auto___32500)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32499),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32499),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32410){var t__31051__auto___32501 = e32410;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32501,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32502 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50abc",opts_32486),null,(1),null)),(2),null));
var result__31007__auto___32503 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32502);
if(cljs.core.truth_(result__31007__auto___32503)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32502),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32502),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32411){var t__31051__auto___32504 = e32411;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32504,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32505 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,50",opts_32486),null,(1),null)),(2),null));
var result__31007__auto___32506 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32505);
if(cljs.core.truth_(result__31007__auto___32506)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32505),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32505),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32412){var t__31051__auto___32507 = e32412;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32507,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32508 = (new cljs.core.List(null,1050.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.505",opts_32486),null,(1),null)),(2),null));
var result__31007__auto___32509 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32508);
if(cljs.core.truth_(result__31007__auto___32509)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32508),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32508),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32413){var t__31051__auto___32510 = e32413;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32510,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32511 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10",opts_32486),null,(1),null)),(2),null));
var result__31007__auto___32512 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32511);
if(cljs.core.truth_(result__31007__auto___32512)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32511),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32511),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32414){var t__31051__auto___32513 = e32414;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32513,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32514 = (new cljs.core.List(null,(1000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10 000",opts_32486),null,(1),null)),(2),null));
var result__31007__auto___32515 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32514);
if(cljs.core.truth_(result__31007__auto___32515)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32514),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32514),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32415){var t__31051__auto___32516 = e32415;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32516,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32517 = (new cljs.core.List(null,(100000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("1 000 000",opts_32486),null,(1),null)),(2),null));
var result__31007__auto___32518 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32517);
if(cljs.core.truth_(result__31007__auto___32518)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32517),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32517),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32416){var t__31051__auto___32519 = e32416;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32519,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32520 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(".10",opts_32486),null,(1),null)),(2),null));
var result__31007__auto___32521 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32520);
if(cljs.core.truth_(result__31007__auto___32521)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32520),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32520),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32417){var t__31051__auto___32522 = e32417;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32522,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32523 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(",10",opts_32486),null,(1),null)),(2),null));
var result__31007__auto___32524 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32523);
if(cljs.core.truth_(result__31007__auto___32524)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32523),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32523),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32418){var t__31051__auto___32525 = e32418;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32525,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32526 = (new cljs.core.List(null,(-1055),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("-10,55",opts_32486),null,(1),null)),(2),null));
var result__31007__auto___32527 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32526);
if(cljs.core.truth_(result__31007__auto___32527)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32526),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32526),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32419){var t__31051__auto___32528 = e32419;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32528,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32529 = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("",opts_32486),null,(1),null)),(2),null));
var result__31007__auto___32530 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32529);
if(cljs.core.truth_(result__31007__auto___32530)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32529),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32529),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32420){var t__31051__auto___32531 = e32420;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32531,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32532 = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("  \t",opts_32486),null,(1),null)),(2),null));
var result__31007__auto___32533 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32532);
if(cljs.core.truth_(result__31007__auto___32533)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32532),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32532),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32421){var t__31051__auto___32534 = e32421;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32534,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32535 = (new cljs.core.List(null,15.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("15.5"),null,(1),null)),(2),null));
var result__31007__auto___32536 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32535);
if(cljs.core.truth_(result__31007__auto___32536)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32535),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32535),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32422){var t__31051__auto___32537 = e32422;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,t__31051__auto___32537,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32538 = (new cljs.core.List(null,15.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null)),null,(1),null)),(2),null));
var result__31007__auto___32539 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32538);
if(cljs.core.truth_(result__31007__auto___32539)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32538),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32538),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32423){var t__31051__auto___32540 = e32423;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,t__31051__auto___32540,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32541 = (new cljs.core.List(null,(-10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("\u201310"),null,(1),null)),(2),null));
var result__31007__auto___32542 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32541);
if(cljs.core.truth_(result__31007__auto___32542)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32541),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32541),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32424){var t__31051__auto___32543 = e32424;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,t__31051__auto___32543,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto__ = (new cljs.core.List(null,(-10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("\u221210"),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32425){var t__31051__auto__ = e32425;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}});

(example.input.str__GT_number_test.cljs$lang$var = new cljs.core.Var(function(){return example.input.str__GT_number_test;},cljs.core.cst$sym$example$input_SLASH_str_DASH__GT_number_DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$example$input,cljs.core.cst$sym$str_DASH__GT_number_DASH_test,"/home/juho/Source/komponentit/example-src/cljs/example/input.cljs",29,1,121,121,cljs.core.List.EMPTY,null,(cljs.core.truth_(example.input.str__GT_number_test)?example.input.str__GT_number_test.cljs$lang$test:null)])));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$number_DASH__GT_str_DASH_test], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"number->str-test",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
var opts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__31006__auto___32576 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts),null,(1),null)),(2),null));
var result__31007__auto___32577 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32576);
if(cljs.core.truth_(result__31007__auto___32577)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32576),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32576),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32544){var t__31051__auto___32578 = e32544;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32578,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32579 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts),null,(1),null)),(2),null));
var result__31007__auto___32580 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32579);
if(cljs.core.truth_(result__31007__auto___32580)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32579),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32579),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32545){var t__31051__auto___32581 = e32545;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32581,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32582 = (new cljs.core.List(null,"-10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1000),opts),null,(1),null)),(2),null));
var result__31007__auto___32583 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32582);
if(cljs.core.truth_(result__31007__auto___32583)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32582),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32582),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32546){var t__31051__auto___32584 = e32546;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32584,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32585 = (new cljs.core.List(null,"-10.45",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1045),opts),null,(1),null)),(2),null));
var result__31007__auto___32586 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32585);
if(cljs.core.truth_(result__31007__auto___32586)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32585),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32585),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32547){var t__31051__auto___32587 = e32547;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32587,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32588 = (new cljs.core.List(null,"1",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((100),opts),null,(1),null)),(2),null));
var result__31007__auto___32589 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32588);
if(cljs.core.truth_(result__31007__auto___32589)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32588),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32588),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32548){var t__31051__auto___32590 = e32548;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32590,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto__ = (new cljs.core.List(null,"",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(null,opts),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32549){var t__31051__auto__ = e32549;
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
}catch (e32550){var t__31051__auto__ = e32550;
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
}catch (e32551){var t__31051__auto__ = e32551;
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
}catch (e32552){var t__31051__auto__ = e32552;
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
}catch (e32553){var t__31051__auto__ = e32553;
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
}catch (e32554){var t__31051__auto__ = e32554;
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
}catch (e32555){var t__31051__auto__ = e32555;
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
}catch (e32556){var t__31051__auto__ = e32556;
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
}catch (e32557){var t__31051__auto__ = e32557;
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
}catch (e32558){var t__31051__auto__ = e32558;
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
}catch (e32559){var t__31051__auto__ = e32559;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}})], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

example.input.number__GT_str_test = (function example$input$number__GT_str_test(){
return cljs.test.test_var(example.input.number__GT_str_test.cljs$lang$var);
});
example.input.number__GT_str_test.cljs$lang$test = (function (){
var opts_32591 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__31006__auto___32592 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts_32591),null,(1),null)),(2),null));
var result__31007__auto___32593 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32592);
if(cljs.core.truth_(result__31007__auto___32593)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32592),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32592),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32560){var t__31051__auto___32594 = e32560;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32594,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32595 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts_32591),null,(1),null)),(2),null));
var result__31007__auto___32596 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32595);
if(cljs.core.truth_(result__31007__auto___32596)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32595),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32595),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32561){var t__31051__auto___32597 = e32561;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32597,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32598 = (new cljs.core.List(null,"-10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1000),opts_32591),null,(1),null)),(2),null));
var result__31007__auto___32599 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32598);
if(cljs.core.truth_(result__31007__auto___32599)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32598),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32598),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32562){var t__31051__auto___32600 = e32562;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32600,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32601 = (new cljs.core.List(null,"-10.45",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1045),opts_32591),null,(1),null)),(2),null));
var result__31007__auto___32602 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32601);
if(cljs.core.truth_(result__31007__auto___32602)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32601),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32601),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32563){var t__31051__auto___32603 = e32563;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32603,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32604 = (new cljs.core.List(null,"1",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((100),opts_32591),null,(1),null)),(2),null));
var result__31007__auto___32605 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32604);
if(cljs.core.truth_(result__31007__auto___32605)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32604),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32604),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32564){var t__31051__auto___32606 = e32564;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32606,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32607 = (new cljs.core.List(null,"",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(null,opts_32591),null,(1),null)),(2),null));
var result__31007__auto___32608 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32607);
if(cljs.core.truth_(result__31007__auto___32608)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32607),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32607),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32565){var t__31051__auto___32609 = e32565;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32609,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32610 = (new cljs.core.List(null,"10.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null)),null,(1),null)),(2),null));
var result__31007__auto___32611 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32610);
if(cljs.core.truth_(result__31007__auto___32611)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32610),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32610),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32566){var t__31051__auto___32612 = e32566;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,t__31051__auto___32612,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32613 = (new cljs.core.List(null,"10.00",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32614 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32613);
if(cljs.core.truth_(result__31007__auto___32614)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32613),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32613),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32567){var t__31051__auto___32615 = e32567;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32615,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32616 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32617 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32616);
if(cljs.core.truth_(result__31007__auto___32617)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32616),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32616),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32568){var t__31051__auto___32618 = e32568;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32618,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32619 = (new cljs.core.List(null,"10.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32620 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32619);
if(cljs.core.truth_(result__31007__auto___32620)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32619),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32619),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32569){var t__31051__auto___32621 = e32569;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32621,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32622 = (new cljs.core.List(null,"10.50",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32623 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32622);
if(cljs.core.truth_(result__31007__auto___32623)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32622),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32622),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32570){var t__31051__auto___32624 = e32570;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32624,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32625 = (new cljs.core.List(null,"10.55",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32626 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32625);
if(cljs.core.truth_(result__31007__auto___32626)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32625),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32625),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32571){var t__31051__auto___32627 = e32571;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32627,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32628 = (new cljs.core.List(null,"10.55",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32629 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32628);
if(cljs.core.truth_(result__31007__auto___32629)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32628),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32628),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32572){var t__31051__auto___32630 = e32572;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32630,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32631 = (new cljs.core.List(null,"10.00",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32632 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32631);
if(cljs.core.truth_(result__31007__auto___32632)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32631),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32631),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32573){var t__31051__auto___32633 = e32573;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32633,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32634 = (new cljs.core.List(null,"15.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$1(15.5),null,(1),null)),(2),null));
var result__31007__auto___32635 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32634);
if(cljs.core.truth_(result__31007__auto___32635)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32634),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32634),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32574){var t__31051__auto___32636 = e32574;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,t__31051__auto___32636,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto__ = (new cljs.core.List(null,"15,5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null)),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32575){var t__31051__auto__ = e32575;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}});

(example.input.number__GT_str_test.cljs$lang$var = new cljs.core.Var(function(){return example.input.number__GT_str_test;},cljs.core.cst$sym$example$input_SLASH_number_DASH__GT_str_DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$example$input,cljs.core.cst$sym$number_DASH__GT_str_DASH_test,"/home/juho/Source/komponentit/example-src/cljs/example/input.cljs",29,1,161,161,cljs.core.List.EMPTY,null,(cljs.core.truth_(example.input.number__GT_str_test)?example.input.number__GT_str_test.cljs$lang$test:null)])));
