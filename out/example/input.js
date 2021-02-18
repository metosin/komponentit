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
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input37615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input37615 = (function (meta37616){
this.meta37616 = meta37616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input37615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37617,meta37616__$1){
var self__ = this;
var _37617__$1 = this;
return (new example.input.t_example$input37615(meta37616__$1));
}));

(example.input.t_example$input37615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37617){
var self__ = this;
var _37617__$1 = this;
return self__.meta37616;
}));

(example.input.t_example$input37615.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input37615.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.text,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (v){
console.log("on-change",v);

return cljs.core.reset_BANG_(value,v);
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

(example.input.t_example$input37615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37616], null);
}));

(example.input.t_example$input37615.cljs$lang$type = true);

(example.input.t_example$input37615.cljs$lang$ctorStr = "example.input/t_example$input37615");

(example.input.t_example$input37615.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input37615");
}));

/**
 * Positional factory function for example.input/t_example$input37615.
 */
example.input.__GT_t_example$input37615 = (function example$input$__GT_t_example$input37615(meta37616){
return (new example.input.t_example$input37615(meta37616));
});

}

return (new example.input.t_example$input37615(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Hello World"),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$autosize_DASH_input], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"autosize-input",cljs.core.cst$kw$documentation,"The input element is configurable with `:el` option so any element behaving like a\n  input is supported, like for example [autosize](#!/example.autosize) components",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input37619 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input37619 = (function (meta37620){
this.meta37620 = meta37620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input37619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37621,meta37620__$1){
var self__ = this;
var _37621__$1 = this;
return (new example.input.t_example$input37619(meta37620__$1));
}));

(example.input.t_example$input37619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37621){
var self__ = this;
var _37621__$1 = this;
return self__.meta37620;
}));

(example.input.t_example$input37619.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input37619.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$el,komponentit.autosize.input,cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (p1__37618_SHARP_){
return cljs.core.reset_BANG_(value,p1__37618_SHARP_);
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

(example.input.t_example$input37619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37620], null);
}));

(example.input.t_example$input37619.cljs$lang$type = true);

(example.input.t_example$input37619.cljs$lang$ctorStr = "example.input/t_example$input37619");

(example.input.t_example$input37619.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input37619");
}));

/**
 * Positional factory function for example.input/t_example$input37619.
 */
example.input.__GT_t_example$input37619 = (function example$input$__GT_t_example$input37619(meta37620){
return (new example.input.t_example$input37619(meta37620));
});

}

return (new example.input.t_example$input37619(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Hello"),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$number_DASH_input], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"number-input",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input37622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input37622 = (function (meta37623){
this.meta37623 = meta37623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input37622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37624,meta37623__$1){
var self__ = this;
var _37624__$1 = this;
return (new example.input.t_example$input37622(meta37623__$1));
}));

(example.input.t_example$input37622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37624){
var self__ = this;
var _37624__$1 = this;
return self__.meta37623;
}));

(example.input.t_example$input37622.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input37622.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Normal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.number,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(value,x);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Multiplier 100"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.number,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(value,x);
}),cljs.core.cst$kw$multiplier,(100)], null)], null)], null)], null);
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

(example.input.t_example$input37622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37623], null);
}));

(example.input.t_example$input37622.cljs$lang$type = true);

(example.input.t_example$input37622.cljs$lang$ctorStr = "example.input/t_example$input37622");

(example.input.t_example$input37622.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input37622");
}));

/**
 * Positional factory function for example.input/t_example$input37622.
 */
example.input.__GT_t_example$input37622 = (function example$input$__GT_t_example$input37622(meta37623){
return (new example.input.t_example$input37622(meta37623));
});

}

return (new example.input.t_example$input37622(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1((100)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$password_DASH_input], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"password-input",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input37625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input37625 = (function (meta37626){
this.meta37626 = meta37626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input37625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37627,meta37626__$1){
var self__ = this;
var _37627__$1 = this;
return (new example.input.t_example$input37625(meta37626__$1));
}));

(example.input.t_example$input37625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37627){
var self__ = this;
var _37627__$1 = this;
return self__.meta37626;
}));

(example.input.t_example$input37625.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input37625.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.password,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(value,x);
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

(example.input.t_example$input37625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37626], null);
}));

(example.input.t_example$input37625.cljs$lang$type = true);

(example.input.t_example$input37625.cljs$lang$ctorStr = "example.input/t_example$input37625");

(example.input.t_example$input37625.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input37625");
}));

/**
 * Positional factory function for example.input/t_example$input37625.
 */
example.input.__GT_t_example$input37625 = (function example$input$__GT_t_example$input37625(meta37626){
return (new example.input.t_example$input37625(meta37626));
});

}

return (new example.input.t_example$input37625(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Hello World"),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
example.input.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar vitae ex non tincidunt. Vivamus rutrum enim eget elit congue pulvinar. Ut eu sodales odio, sit amet pellentesque libero. Curabitur suscipit non urna non convallis. Nulla bibendum massa nec nunc feugiat mattis. Duis velit felis, mattis nec aliquam et, dictum ac ipsum. Praesent condimentum aliquam magna, vel molestie erat vulputate vel. Quisque nec imperdiet magna, nec ultricies nisl. Phasellus ac dui ante. Donec egestas, felis eu tincidunt feugiat, lacus est lacinia enim, quis egestas arcu velit et velit. Aenean nec felis vel quam tincidunt egestas sed a felis. Sed nibh tortor, ultricies vitae bibendum sit amet, dictum vel lorem. Duis venenatis orci euismod tempus iaculis. Quisque venenatis eget leo vel laoreet.\n\nSuspendisse id bibendum velit. Phasellus cursus mauris finibus diam tempor, a feugiat neque maximus. Pellentesque ultricies tellus et ex consectetur, a eleifend magna aliquam. In hac habitasse platea dictumst. Aliquam nibh nibh, malesuada eget augue et, varius eleifend erat. Aenean vel lectus ut tortor iaculis cursus id eget diam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$textarea], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"textarea",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input37628 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input37628 = (function (meta37629){
this.meta37629 = meta37629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input37628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37630,meta37629__$1){
var self__ = this;
var _37630__$1 = this;
return (new example.input.t_example$input37628(meta37629__$1));
}));

(example.input.t_example$input37628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37630){
var self__ = this;
var _37630__$1 = this;
return self__.meta37629;
}));

(example.input.t_example$input37628.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input37628.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(value,x);
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"200px"], null)], null)], null)], null);
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

(example.input.t_example$input37628.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37629], null);
}));

(example.input.t_example$input37628.cljs$lang$type = true);

(example.input.t_example$input37628.cljs$lang$ctorStr = "example.input/t_example$input37628");

(example.input.t_example$input37628.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input37628");
}));

/**
 * Positional factory function for example.input/t_example$input37628.
 */
example.input.__GT_t_example$input37628 = (function example$input$__GT_t_example$input37628(meta37629){
return (new example.input.t_example$input37628(meta37629));
});

}

return (new example.input.t_example$input37628(null));
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
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input37631 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input37631 = (function (meta37632){
this.meta37632 = meta37632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input37631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37633,meta37632__$1){
var self__ = this;
var _37633__$1 = this;
return (new example.input.t_example$input37631(meta37632__$1));
}));

(example.input.t_example$input37631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37633){
var self__ = this;
var _37633__$1 = this;
return self__.meta37632;
}));

(example.input.t_example$input37631.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input37631.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.select,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(value,x);
}),cljs.core.cst$kw$options,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(1),cljs.core.cst$kw$text,"Option 1"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(2),cljs.core.cst$kw$text,"Option 2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(3),cljs.core.cst$kw$text,"Option 3"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"foo",cljs.core.cst$kw$text,"Option foo"], null)], null),cljs.core.cst$kw$empty_DASH_option_QMARK_,true,cljs.core.cst$kw$value_DASH_fn,example.input.safe_long], null)], null)], null);
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

(example.input.t_example$input37631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37632], null);
}));

(example.input.t_example$input37631.cljs$lang$type = true);

(example.input.t_example$input37631.cljs$lang$ctorStr = "example.input/t_example$input37631");

(example.input.t_example$input37631.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input37631");
}));

/**
 * Positional factory function for example.input/t_example$input37631.
 */
example.input.__GT_t_example$input37631 = (function example$input$__GT_t_example$input37631(meta37632){
return (new example.input.t_example$input37631(meta37632));
});

}

return (new example.input.t_example$input37631(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$select_DASH_boolean], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"select-boolean",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input37634 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input37634 = (function (meta37635){
this.meta37635 = meta37635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input37634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37636,meta37635__$1){
var self__ = this;
var _37636__$1 = this;
return (new example.input.t_example$input37634(meta37635__$1));
}));

(example.input.t_example$input37634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37636){
var self__ = this;
var _37636__$1 = this;
return self__.meta37635;
}));

(example.input.t_example$input37634.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input37634.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.select,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(value,x);
}),cljs.core.cst$kw$options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,true,cljs.core.cst$kw$text,"Option true"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,false,cljs.core.cst$kw$text,"Option false"], null)], null),cljs.core.cst$kw$value_DASH_fn,new cljs.core.PersistentArrayMap(null, 2, ["true",true,"false",false], null)], null)], null)], null);
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

(example.input.t_example$input37634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37635], null);
}));

(example.input.t_example$input37634.cljs$lang$type = true);

(example.input.t_example$input37634.cljs$lang$ctorStr = "example.input/t_example$input37634");

(example.input.t_example$input37634.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input37634");
}));

/**
 * Positional factory function for example.input/t_example$input37634.
 */
example.input.__GT_t_example$input37634 = (function example$input$__GT_t_example$input37634(meta37635){
return (new example.input.t_example$input37634(meta37635));
});

}

return (new example.input.t_example$input37634(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$checkbox], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"checkbox",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.input !== 'undefined') && (typeof example.input.t_example$input37637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.input.t_example$input37637 = (function (meta37638){
this.meta37638 = meta37638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.input.t_example$input37637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37639,meta37638__$1){
var self__ = this;
var _37639__$1 = this;
return (new example.input.t_example$input37637(meta37638__$1));
}));

(example.input.t_example$input37637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37639){
var self__ = this;
var _37639__$1 = this;
return self__.meta37638;
}));

(example.input.t_example$input37637.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.input.t_example$input37637.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.checkbox,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (x){
return cljs.core.reset_BANG_(value,x);
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

(example.input.t_example$input37637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37638], null);
}));

(example.input.t_example$input37637.cljs$lang$type = true);

(example.input.t_example$input37637.cljs$lang$ctorStr = "example.input/t_example$input37637");

(example.input.t_example$input37637.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.input/t_example$input37637");
}));

/**
 * Positional factory function for example.input/t_example$input37637.
 */
example.input.__GT_t_example$input37637 = (function example$input$__GT_t_example$input37637(meta37638){
return (new example.input.t_example$input37637(meta37638));
});

}

return (new example.input.t_example$input37637(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$str_DASH__GT_number_DASH_test], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"str->number-test",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,1.1,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,1"),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37640){var t__35779__auto__ = e37640;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,1.1,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,10"),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37641){var t__35779__auto__ = e37641;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,1.11,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,11"),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37642){var t__35779__auto__ = e37642;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,0.11,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1(",11"),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37643){var t__35779__auto__ = e37643;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,10.0012,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("10,0012"),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37644){var t__35779__auto__ = e37644;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
var opts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__35734__auto___37690 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0",opts),null,(1),null)),(2),null));
var result__35735__auto___37691 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37690);
if(cljs.core.truth_(result__35735__auto___37691)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37690),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37690),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37645){var t__35779__auto___37692 = e37645;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37692,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37693 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,0",opts),null,(1),null)),(2),null));
var result__35735__auto___37694 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37693);
if(cljs.core.truth_(result__35735__auto___37694)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37693),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37693),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37646){var t__35779__auto___37695 = e37646;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37695,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37696 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50",opts),null,(1),null)),(2),null));
var result__35735__auto___37697 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37696);
if(cljs.core.truth_(result__35735__auto___37697)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37696),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37696),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37647){var t__35779__auto___37698 = e37647;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37698,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37699 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,cljs.core.long$(komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0012",opts)),null,(1),null)),(2),null));
var result__35735__auto___37700 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37699);
if(cljs.core.truth_(result__35735__auto___37700)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37699),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37699),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37648){var t__35779__auto___37701 = e37648;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,t__35779__auto___37701,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37702 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(" \t10.50",opts),null,(1),null)),(2),null));
var result__35735__auto___37703 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37702);
if(cljs.core.truth_(result__35735__auto___37703)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37702),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37702),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37649){var t__35779__auto___37704 = e37649;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37704,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37705 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50abc",opts),null,(1),null)),(2),null));
var result__35735__auto___37706 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37705);
if(cljs.core.truth_(result__35735__auto___37706)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37705),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37705),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37650){var t__35779__auto___37707 = e37650;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37707,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37708 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,50",opts),null,(1),null)),(2),null));
var result__35735__auto___37709 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37708);
if(cljs.core.truth_(result__35735__auto___37709)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37708),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37708),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37651){var t__35779__auto___37710 = e37651;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37710,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37711 = (new cljs.core.List(null,1050.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.505",opts),null,(1),null)),(2),null));
var result__35735__auto___37712 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37711);
if(cljs.core.truth_(result__35735__auto___37712)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37711),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37711),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37652){var t__35779__auto___37713 = e37652;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37713,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37714 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10",opts),null,(1),null)),(2),null));
var result__35735__auto___37715 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37714);
if(cljs.core.truth_(result__35735__auto___37715)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37714),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37714),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37653){var t__35779__auto___37716 = e37653;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37716,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37717 = (new cljs.core.List(null,(1000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10 000",opts),null,(1),null)),(2),null));
var result__35735__auto___37718 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37717);
if(cljs.core.truth_(result__35735__auto___37718)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37717),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37717),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37654){var t__35779__auto___37719 = e37654;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37719,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37720 = (new cljs.core.List(null,(100000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("1 000 000",opts),null,(1),null)),(2),null));
var result__35735__auto___37721 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37720);
if(cljs.core.truth_(result__35735__auto___37721)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37720),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37720),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37655){var t__35779__auto___37722 = e37655;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37722,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37723 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(".10",opts),null,(1),null)),(2),null));
var result__35735__auto___37724 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37723);
if(cljs.core.truth_(result__35735__auto___37724)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37723),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37723),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37656){var t__35779__auto___37725 = e37656;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37725,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37726 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(",10",opts),null,(1),null)),(2),null));
var result__35735__auto___37727 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37726);
if(cljs.core.truth_(result__35735__auto___37727)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37726),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37726),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37657){var t__35779__auto___37728 = e37657;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37728,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37729 = (new cljs.core.List(null,(-1055),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("-10,55",opts),null,(1),null)),(2),null));
var result__35735__auto___37730 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37729);
if(cljs.core.truth_(result__35735__auto___37730)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37729),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37729),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37658){var t__35779__auto___37731 = e37658;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37731,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37732 = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("",opts),null,(1),null)),(2),null));
var result__35735__auto___37733 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37732);
if(cljs.core.truth_(result__35735__auto___37733)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37732),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37732),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37659){var t__35779__auto___37734 = e37659;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37734,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto__ = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("  \t",opts),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37660){var t__35779__auto__ = e37660;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,15.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("15.5"),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37661){var t__35779__auto__ = e37661;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,15.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null)),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37662){var t__35779__auto__ = e37662;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,(-10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("\u201310"),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37663){var t__35779__auto__ = e37663;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,(-10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("\u221210"),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37664){var t__35779__auto__ = e37664;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}})], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

example.input.str__GT_number_test = (function example$input$str__GT_number_test(){
return cljs.test.test_var(example.input.str__GT_number_test.cljs$lang$var);
});
example.input.str__GT_number_test.cljs$lang$test = (function (){
try{var values__35734__auto___37735 = (new cljs.core.List(null,1.1,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,1"),null,(1),null)),(2),null));
var result__35735__auto___37736 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37735);
if(cljs.core.truth_(result__35735__auto___37736)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37735),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37735),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37665){var t__35779__auto___37737 = e37665;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,t__35779__auto___37737,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37738 = (new cljs.core.List(null,1.1,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,10"),null,(1),null)),(2),null));
var result__35735__auto___37739 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37738);
if(cljs.core.truth_(result__35735__auto___37739)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37738),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37738),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37666){var t__35779__auto___37740 = e37666;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,t__35779__auto___37740,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37741 = (new cljs.core.List(null,1.11,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,11"),null,(1),null)),(2),null));
var result__35735__auto___37742 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37741);
if(cljs.core.truth_(result__35735__auto___37742)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37741),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37741),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37667){var t__35779__auto___37743 = e37667;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,t__35779__auto___37743,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37744 = (new cljs.core.List(null,0.11,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1(",11"),null,(1),null)),(2),null));
var result__35735__auto___37745 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37744);
if(cljs.core.truth_(result__35735__auto___37745)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37744),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37744),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37668){var t__35779__auto___37746 = e37668;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,t__35779__auto___37746,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37747 = (new cljs.core.List(null,10.0012,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("10,0012"),null,(1),null)),(2),null));
var result__35735__auto___37748 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37747);
if(cljs.core.truth_(result__35735__auto___37748)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37747),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37747),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37669){var t__35779__auto___37749 = e37669;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,t__35779__auto___37749,cljs.core.cst$kw$message,null], null));
}
var opts_37750 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__35734__auto___37751 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0",opts_37750),null,(1),null)),(2),null));
var result__35735__auto___37752 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37751);
if(cljs.core.truth_(result__35735__auto___37752)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37751),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37751),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37670){var t__35779__auto___37753 = e37670;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37753,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37754 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,0",opts_37750),null,(1),null)),(2),null));
var result__35735__auto___37755 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37754);
if(cljs.core.truth_(result__35735__auto___37755)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37754),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37754),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37671){var t__35779__auto___37756 = e37671;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37756,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37757 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50",opts_37750),null,(1),null)),(2),null));
var result__35735__auto___37758 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37757);
if(cljs.core.truth_(result__35735__auto___37758)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37757),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37757),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37672){var t__35779__auto___37759 = e37672;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37759,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37760 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,cljs.core.long$(komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0012",opts_37750)),null,(1),null)),(2),null));
var result__35735__auto___37761 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37760);
if(cljs.core.truth_(result__35735__auto___37761)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37760),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37760),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37673){var t__35779__auto___37762 = e37673;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,t__35779__auto___37762,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37763 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(" \t10.50",opts_37750),null,(1),null)),(2),null));
var result__35735__auto___37764 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37763);
if(cljs.core.truth_(result__35735__auto___37764)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37763),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37763),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37674){var t__35779__auto___37765 = e37674;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37765,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37766 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50abc",opts_37750),null,(1),null)),(2),null));
var result__35735__auto___37767 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37766);
if(cljs.core.truth_(result__35735__auto___37767)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37766),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37766),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37675){var t__35779__auto___37768 = e37675;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37768,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37769 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,50",opts_37750),null,(1),null)),(2),null));
var result__35735__auto___37770 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37769);
if(cljs.core.truth_(result__35735__auto___37770)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37769),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37769),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37676){var t__35779__auto___37771 = e37676;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37771,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37772 = (new cljs.core.List(null,1050.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.505",opts_37750),null,(1),null)),(2),null));
var result__35735__auto___37773 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37772);
if(cljs.core.truth_(result__35735__auto___37773)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37772),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37772),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37677){var t__35779__auto___37774 = e37677;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37774,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37775 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10",opts_37750),null,(1),null)),(2),null));
var result__35735__auto___37776 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37775);
if(cljs.core.truth_(result__35735__auto___37776)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37775),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37775),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37678){var t__35779__auto___37777 = e37678;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37777,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37778 = (new cljs.core.List(null,(1000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10 000",opts_37750),null,(1),null)),(2),null));
var result__35735__auto___37779 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37778);
if(cljs.core.truth_(result__35735__auto___37779)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37778),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37778),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37679){var t__35779__auto___37780 = e37679;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37780,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37781 = (new cljs.core.List(null,(100000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("1 000 000",opts_37750),null,(1),null)),(2),null));
var result__35735__auto___37782 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37781);
if(cljs.core.truth_(result__35735__auto___37782)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37781),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37781),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37680){var t__35779__auto___37783 = e37680;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37783,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37784 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(".10",opts_37750),null,(1),null)),(2),null));
var result__35735__auto___37785 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37784);
if(cljs.core.truth_(result__35735__auto___37785)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37784),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37784),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37681){var t__35779__auto___37786 = e37681;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37786,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37787 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(",10",opts_37750),null,(1),null)),(2),null));
var result__35735__auto___37788 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37787);
if(cljs.core.truth_(result__35735__auto___37788)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37787),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37787),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37682){var t__35779__auto___37789 = e37682;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37789,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37790 = (new cljs.core.List(null,(-1055),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("-10,55",opts_37750),null,(1),null)),(2),null));
var result__35735__auto___37791 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37790);
if(cljs.core.truth_(result__35735__auto___37791)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37790),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37790),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37683){var t__35779__auto___37792 = e37683;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37792,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37793 = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("",opts_37750),null,(1),null)),(2),null));
var result__35735__auto___37794 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37793);
if(cljs.core.truth_(result__35735__auto___37794)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37793),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37793),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37684){var t__35779__auto___37795 = e37684;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37795,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37796 = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("  \t",opts_37750),null,(1),null)),(2),null));
var result__35735__auto___37797 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37796);
if(cljs.core.truth_(result__35735__auto___37797)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37796),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37796),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37685){var t__35779__auto___37798 = e37685;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37798,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37799 = (new cljs.core.List(null,15.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("15.5"),null,(1),null)),(2),null));
var result__35735__auto___37800 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37799);
if(cljs.core.truth_(result__35735__auto___37800)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37799),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37799),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37686){var t__35779__auto___37801 = e37686;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,t__35779__auto___37801,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37802 = (new cljs.core.List(null,15.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null)),null,(1),null)),(2),null));
var result__35735__auto___37803 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37802);
if(cljs.core.truth_(result__35735__auto___37803)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37802),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37802),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37687){var t__35779__auto___37804 = e37687;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,t__35779__auto___37804,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37805 = (new cljs.core.List(null,(-10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("\u201310"),null,(1),null)),(2),null));
var result__35735__auto___37806 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37805);
if(cljs.core.truth_(result__35735__auto___37806)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37805),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37805),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37688){var t__35779__auto___37807 = e37688;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,t__35779__auto___37807,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto__ = (new cljs.core.List(null,(-10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("\u221210"),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37689){var t__35779__auto__ = e37689;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}});

(example.input.str__GT_number_test.cljs$lang$var = new cljs.core.Var(function(){return example.input.str__GT_number_test;},cljs.core.cst$sym$example$input_SLASH_str_DASH__GT_number_DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$example$input,cljs.core.cst$sym$str_DASH__GT_number_DASH_test,"/home/juho/Source/komponentit/example-src/cljs/example/input.cljs",29,1,121,121,cljs.core.List.EMPTY,null,(cljs.core.truth_(example.input.str__GT_number_test)?example.input.str__GT_number_test.cljs$lang$test:null)])));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$input,cljs.core.cst$kw$number_DASH__GT_str_DASH_test], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"number->str-test",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
var opts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__35734__auto___37840 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts),null,(1),null)),(2),null));
var result__35735__auto___37841 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37840);
if(cljs.core.truth_(result__35735__auto___37841)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37840),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37840),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37808){var t__35779__auto___37842 = e37808;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37842,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37843 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts),null,(1),null)),(2),null));
var result__35735__auto___37844 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37843);
if(cljs.core.truth_(result__35735__auto___37844)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37843),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37843),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37809){var t__35779__auto___37845 = e37809;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37845,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37846 = (new cljs.core.List(null,"-10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1000),opts),null,(1),null)),(2),null));
var result__35735__auto___37847 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37846);
if(cljs.core.truth_(result__35735__auto___37847)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37846),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37846),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37810){var t__35779__auto___37848 = e37810;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37848,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37849 = (new cljs.core.List(null,"-10.45",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1045),opts),null,(1),null)),(2),null));
var result__35735__auto___37850 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37849);
if(cljs.core.truth_(result__35735__auto___37850)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37849),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37849),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37811){var t__35779__auto___37851 = e37811;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37851,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37852 = (new cljs.core.List(null,"1",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((100),opts),null,(1),null)),(2),null));
var result__35735__auto___37853 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37852);
if(cljs.core.truth_(result__35735__auto___37853)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37852),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37852),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37812){var t__35779__auto___37854 = e37812;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37854,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto__ = (new cljs.core.List(null,"",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(null,opts),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37813){var t__35779__auto__ = e37813;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,"10.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null)),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37814){var t__35779__auto__ = e37814;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,"10.00",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37815){var t__35779__auto__ = e37815;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37816){var t__35779__auto__ = e37816;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,"10.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37817){var t__35779__auto__ = e37817;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,"10.50",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37818){var t__35779__auto__ = e37818;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,"10.55",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37819){var t__35779__auto__ = e37819;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,"10.55",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37820){var t__35779__auto__ = e37820;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,"10.00",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37821){var t__35779__auto__ = e37821;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,"15.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$1(15.5),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37822){var t__35779__auto__ = e37822;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}}),(function (){
try{var values__35734__auto__ = (new cljs.core.List(null,"15,5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null)),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37823){var t__35779__auto__ = e37823;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}})], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

example.input.number__GT_str_test = (function example$input$number__GT_str_test(){
return cljs.test.test_var(example.input.number__GT_str_test.cljs$lang$var);
});
example.input.number__GT_str_test.cljs$lang$test = (function (){
var opts_37855 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__35734__auto___37856 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts_37855),null,(1),null)),(2),null));
var result__35735__auto___37857 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37856);
if(cljs.core.truth_(result__35735__auto___37857)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37856),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37856),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37824){var t__35779__auto___37858 = e37824;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37858,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37859 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts_37855),null,(1),null)),(2),null));
var result__35735__auto___37860 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37859);
if(cljs.core.truth_(result__35735__auto___37860)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37859),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37859),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37825){var t__35779__auto___37861 = e37825;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37861,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37862 = (new cljs.core.List(null,"-10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1000),opts_37855),null,(1),null)),(2),null));
var result__35735__auto___37863 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37862);
if(cljs.core.truth_(result__35735__auto___37863)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37862),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37862),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37826){var t__35779__auto___37864 = e37826;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37864,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37865 = (new cljs.core.List(null,"-10.45",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1045),opts_37855),null,(1),null)),(2),null));
var result__35735__auto___37866 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37865);
if(cljs.core.truth_(result__35735__auto___37866)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37865),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37865),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37827){var t__35779__auto___37867 = e37827;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37867,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37868 = (new cljs.core.List(null,"1",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((100),opts_37855),null,(1),null)),(2),null));
var result__35735__auto___37869 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37868);
if(cljs.core.truth_(result__35735__auto___37869)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37868),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37868),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37828){var t__35779__auto___37870 = e37828;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37870,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37871 = (new cljs.core.List(null,"",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(null,opts_37855),null,(1),null)),(2),null));
var result__35735__auto___37872 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37871);
if(cljs.core.truth_(result__35735__auto___37872)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37871),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37871),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37829){var t__35779__auto___37873 = e37829;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37873,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37874 = (new cljs.core.List(null,"10.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null)),null,(1),null)),(2),null));
var result__35735__auto___37875 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37874);
if(cljs.core.truth_(result__35735__auto___37875)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37874),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37874),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37830){var t__35779__auto___37876 = e37830;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,t__35779__auto___37876,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37877 = (new cljs.core.List(null,"10.00",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto___37878 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37877);
if(cljs.core.truth_(result__35735__auto___37878)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37877),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37877),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37831){var t__35779__auto___37879 = e37831;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto___37879,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37880 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto___37881 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37880);
if(cljs.core.truth_(result__35735__auto___37881)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37880),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37880),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37832){var t__35779__auto___37882 = e37832;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto___37882,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37883 = (new cljs.core.List(null,"10.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto___37884 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37883);
if(cljs.core.truth_(result__35735__auto___37884)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37883),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37883),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37833){var t__35779__auto___37885 = e37833;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto___37885,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37886 = (new cljs.core.List(null,"10.50",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto___37887 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37886);
if(cljs.core.truth_(result__35735__auto___37887)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37886),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37886),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37834){var t__35779__auto___37888 = e37834;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto___37888,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37889 = (new cljs.core.List(null,"10.55",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto___37890 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37889);
if(cljs.core.truth_(result__35735__auto___37890)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37889),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37889),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37835){var t__35779__auto___37891 = e37835;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto___37891,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37892 = (new cljs.core.List(null,"10.55",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto___37893 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37892);
if(cljs.core.truth_(result__35735__auto___37893)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37892),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37892),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37836){var t__35779__auto___37894 = e37836;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto___37894,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37895 = (new cljs.core.List(null,"10.00",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto___37896 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37895);
if(cljs.core.truth_(result__35735__auto___37896)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37895),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37895),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37837){var t__35779__auto___37897 = e37837;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto___37897,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37898 = (new cljs.core.List(null,"15.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$1(15.5),null,(1),null)),(2),null));
var result__35735__auto___37899 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37898);
if(cljs.core.truth_(result__35735__auto___37899)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37898),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37898),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37838){var t__35779__auto___37900 = e37838;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,t__35779__auto___37900,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto__ = (new cljs.core.List(null,"15,5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null)),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37839){var t__35779__auto__ = e37839;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}});

(example.input.number__GT_str_test.cljs$lang$var = new cljs.core.Var(function(){return example.input.number__GT_str_test;},cljs.core.cst$sym$example$input_SLASH_number_DASH__GT_str_DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$example$input,cljs.core.cst$sym$number_DASH__GT_str_DASH_test,"/home/juho/Source/komponentit/example-src/cljs/example/input.cljs",29,1,161,161,cljs.core.List.EMPTY,null,(cljs.core.truth_(example.input.number__GT_str_test)?example.input.number__GT_str_test.cljs$lang$test:null)])));
