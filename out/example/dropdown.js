// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.dropdown');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('komponentit.dropdown');
goog.require('reagent.core');
goog.require('cljs.test');
goog.require('devcards.core');
goog.require('example.options');
goog.require('example.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$dropdown,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,[example.core.header(cljs.core.cst$sym$dropdown,"Dropdown"),"`[dropdown]` component uses by default `:div` and `:a` elements. These can be overriden using `:container-el`\nand `:toggle-el` options. Also three helper components are provided, which set these options:\n`[dropdown-a]` (same as default), `[dropdown-button]` and `[dropdown-li]`.\n\nDropdowns can be used for several use cases:\n\n- Linking to other pages\n- As select box\n\n## Options\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(new cljs.core.Var(function(){return komponentit.dropdown.dropdown;},cljs.core.cst$sym$komponentit$dropdown_SLASH_dropdown,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$komponentit$dropdown,cljs.core.cst$sym$dropdown,"/home/juho/Source/komponentit/src/cljs/komponentit/dropdown.cljs",15,1,93,93,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_], null)),"- `:text` Text for dropdown toggle element.\n- `:content` Used to pass in dropdown elements as collection of item-maps.\n- `:children` (replaces `:content`) Used to pass in dropdown elements as Reagent hiccup form. Most of other options\ndo not work with this option.\n- `:on-change` (Optional, supported by content) Called with item-map when dropdown item is selected.\n- `:value` (Optional, supported by content) Current value, marks list item with equivalent value as active.\n- `:close-on-click?` (Default `true`) Close dropdown when any item is selected.\n- `:caret?` (Default `true`) Whether to automatically append caret to text.\n\nHTML elements:\n\n- `:container-el` (Default `:div`) The element used to contain toggle element and dropdown list.\n- `:el` (Default `:a`) The toggle element type.\n\nCSS classes:\n\n- `:container-class` (Default `\"dropdown-container\"`)\n- `:open-class` (Default `\"open\"`)\n- `:dropdown-class` (Default `\"dropdown-menu\"`)\n- `:caret-class` (Default `\"caret\"`)\n- `:caret-up-class` (Default `\"caret\"`)\n- `:separator-class` (Default `\"divider\"`)\n- `:menu-item-class` (Default `\"dropdown-menu__item\"`)\n- `:menu-item-a-class` (Default `\"dropdown-menu__link\")\n- `:active-item-class` (Default `\"dropdown-menu__item--active\"`)\n\nProps:\n\nAny other React props can be passed to the created elements:\n\n- `:toggle-props`\n- `:container-props`\n- (Item option) `:props`\n- (Item option) `:link-props`",(cljs.core.truth_(komponentit.dropdown.dropdown)?komponentit.dropdown.dropdown.cljs$lang$test:null)]))))),"\n\n## Item maps\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(new cljs.core.Var(function(){return komponentit.dropdown.__GT_menu_item;},cljs.core.cst$sym$komponentit$dropdown_SLASH__DASH__GT_menu_DASH_item,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$komponentit$dropdown,cljs.core.cst$sym$_DASH__GT_menu_DASH_item,"/home/juho/Source/komponentit/src/cljs/komponentit/dropdown.cljs",18,1,14,14,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$open_QMARK_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$on_DASH_change,cljs.core.cst$sym$close_DASH_on_DASH_click_QMARK_,cljs.core.cst$sym$disabled,cljs.core.cst$sym$active_DASH_item_DASH_class,cljs.core.cst$sym$separator_DASH_class,cljs.core.cst$sym$menu_DASH_item_DASH_class,cljs.core.cst$sym$menu_DASH_item_DASH_a_DASH_class], null),cljs.core.cst$kw$or,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$active_DASH_item_DASH_class,"dropdown-menu__item--active",cljs.core.cst$sym$separator_DASH_class,"divider"], null),cljs.core.cst$kw$as,cljs.core.cst$sym$dropdown_DASH_opts], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$el,cljs.core.cst$sym$link_DASH_el,cljs.core.cst$sym$props,cljs.core.cst$sym$link_DASH_props,cljs.core.cst$sym$separator,cljs.core.cst$sym$key,cljs.core.cst$sym$text,cljs.core.cst$sym$value,cljs.core.cst$sym$href,cljs.core.cst$sym$on_DASH_click], null),cljs.core.cst$kw$or,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$el,cljs.core.cst$kw$li,cljs.core.cst$sym$link_DASH_el,cljs.core.cst$kw$a], null),cljs.core.cst$kw$as,cljs.core.cst$sym$item_DASH_opts], null)], null)),"- `:key` React key\n- `:value` (Optional) Current value\n- `:href` (Optional) A href\n- `:on-click` (Optional) callback\n- `:el` (Default: `:li`)\n- `:link-el` (Default: `:a`)\n- `:props` (Optional) React props to dropdown list item element\n- `:link-props` (Optional) React props to dropdown item element\n- `:text` Text",(cljs.core.truth_(komponentit.dropdown.__GT_menu_item)?komponentit.dropdown.__GT_menu_item.cljs$lang$test:null)]))))),"\n\n## Notes\n\nIf item doesn't have `:href` attribute, `:on-click` default action is prevented."].join(''),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$dropdown,cljs.core.cst$kw$navbar_DASH_links], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"navbar-links",cljs.core.cst$kw$documentation,"If you want to stay on this page, do not click on the items.",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.dropdown !== 'undefined') && (typeof example.dropdown.t_example$dropdown38176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.dropdown.t_example$dropdown38176 = (function (meta38177){
this.meta38177 = meta38177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.dropdown.t_example$dropdown38176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38178,meta38177__$1){
var self__ = this;
var _38178__$1 = this;
return (new example.dropdown.t_example$dropdown38176(meta38177__$1));
}));

(example.dropdown.t_example$dropdown38176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38178){
var self__ = this;
var _38178__$1 = this;
return self__.meta38177;
}));

(example.dropdown.t_example$dropdown38176.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.dropdown.t_example$dropdown38176.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$navbar$navbar_DASH_default,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$navbar_DASH_nav,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#"], null),"Normal list item"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.dropdown.dropdown_li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"List item with dropdown",cljs.core.cst$kw$content,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$href,["#foo",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.cst$kw$text,["Option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)))], null)], null)], null)], null);
if(cljs.core.fn_QMARK_(v__36201__auto__)){
return (function (data_atom__36202__auto__,owner__36203__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__36201__auto__,data_atom__36202__auto__,owner__36203__auto__], null));
});
} else {
return reagent.core.as_element(v__36201__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(devcard_opts__36183__auto__))], 0))], 0));
}));

(example.dropdown.t_example$dropdown38176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta38177], null);
}));

(example.dropdown.t_example$dropdown38176.cljs$lang$type = true);

(example.dropdown.t_example$dropdown38176.cljs$lang$ctorStr = "example.dropdown/t_example$dropdown38176");

(example.dropdown.t_example$dropdown38176.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.dropdown/t_example$dropdown38176");
}));

/**
 * Positional factory function for example.dropdown/t_example$dropdown38176.
 */
example.dropdown.__GT_t_example$dropdown38176 = (function example$dropdown$__GT_t_example$dropdown38176(meta38177){
return (new example.dropdown.t_example$dropdown38176(meta38177));
});

}

return (new example.dropdown.t_example$dropdown38176(null));
})()
,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$dropdown,cljs.core.cst$kw$selectbox], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"selectbox",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.dropdown !== 'undefined') && (typeof example.dropdown.t_example$dropdown38180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.dropdown.t_example$dropdown38180 = (function (meta38181){
this.meta38181 = meta38181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.dropdown.t_example$dropdown38180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38182,meta38181__$1){
var self__ = this;
var _38182__$1 = this;
return (new example.dropdown.t_example$dropdown38180(meta38181__$1));
}));

(example.dropdown.t_example$dropdown38180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38182){
var self__ = this;
var _38182__$1 = this;
return self__.meta38181;
}));

(example.dropdown.t_example$dropdown38180.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.dropdown.t_example$dropdown38180.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.dropdown.dropdown_button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$text,"A button with dropdown",cljs.core.cst$kw$content,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$value,i,cljs.core.cst$kw$text,["Option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((5))),cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (p1__38179_SHARP_){
return cljs.core.reset_BANG_(value,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p1__38179_SHARP_));
})], null)], null);
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

(example.dropdown.t_example$dropdown38180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta38181], null);
}));

(example.dropdown.t_example$dropdown38180.cljs$lang$type = true);

(example.dropdown.t_example$dropdown38180.cljs$lang$ctorStr = "example.dropdown/t_example$dropdown38180");

(example.dropdown.t_example$dropdown38180.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.dropdown/t_example$dropdown38180");
}));

/**
 * Positional factory function for example.dropdown/t_example$dropdown38180.
 */
example.dropdown.__GT_t_example$dropdown38180 = (function example$dropdown$__GT_t_example$dropdown38180(meta38181){
return (new example.dropdown.t_example$dropdown38180(meta38181));
});

}

return (new example.dropdown.t_example$dropdown38180(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$dropdown,cljs.core.cst$kw$link], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"link",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.dropdown !== 'undefined') && (typeof example.dropdown.t_example$dropdown38184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.dropdown.t_example$dropdown38184 = (function (meta38185){
this.meta38185 = meta38185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.dropdown.t_example$dropdown38184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38186,meta38185__$1){
var self__ = this;
var _38186__$1 = this;
return (new example.dropdown.t_example$dropdown38184(meta38185__$1));
}));

(example.dropdown.t_example$dropdown38184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38186){
var self__ = this;
var _38186__$1 = this;
return self__.meta38185;
}));

(example.dropdown.t_example$dropdown38184.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.dropdown.t_example$dropdown38184.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.dropdown.dropdown_a,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$text,"A link with dropdown",cljs.core.cst$kw$content,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$value,i,cljs.core.cst$kw$text,["Option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((5))),cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (p1__38183_SHARP_){
return cljs.core.reset_BANG_(value,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p1__38183_SHARP_));
})], null)], null);
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

(example.dropdown.t_example$dropdown38184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta38185], null);
}));

(example.dropdown.t_example$dropdown38184.cljs$lang$type = true);

(example.dropdown.t_example$dropdown38184.cljs$lang$ctorStr = "example.dropdown/t_example$dropdown38184");

(example.dropdown.t_example$dropdown38184.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.dropdown/t_example$dropdown38184");
}));

/**
 * Positional factory function for example.dropdown/t_example$dropdown38184.
 */
example.dropdown.__GT_t_example$dropdown38184 = (function example$dropdown$__GT_t_example$dropdown38184(meta38185){
return (new example.dropdown.t_example$dropdown38184(meta38185));
});

}

return (new example.dropdown.t_example$dropdown38184(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$dropdown,cljs.core.cst$kw$selectbox_DASH_2], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"selectbox-2",cljs.core.cst$kw$documentation,"List items with on-click handlers",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.dropdown !== 'undefined') && (typeof example.dropdown.t_example$dropdown38187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.dropdown.t_example$dropdown38187 = (function (meta38188){
this.meta38188 = meta38188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.dropdown.t_example$dropdown38187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38189,meta38188__$1){
var self__ = this;
var _38189__$1 = this;
return (new example.dropdown.t_example$dropdown38187(meta38188__$1));
}));

(example.dropdown.t_example$dropdown38187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38189){
var self__ = this;
var _38189__$1 = this;
return self__.meta38188;
}));

(example.dropdown.t_example$dropdown38187.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.dropdown.t_example$dropdown38187.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.dropdown.dropdown_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"A button with dropdown",cljs.core.cst$kw$content,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$on_DASH_click,(function (){
return alert(["Option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));
}),cljs.core.cst$kw$text,["Option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)))], null)], null);
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

(example.dropdown.t_example$dropdown38187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta38188], null);
}));

(example.dropdown.t_example$dropdown38187.cljs$lang$type = true);

(example.dropdown.t_example$dropdown38187.cljs$lang$ctorStr = "example.dropdown/t_example$dropdown38187");

(example.dropdown.t_example$dropdown38187.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.dropdown/t_example$dropdown38187");
}));

/**
 * Positional factory function for example.dropdown/t_example$dropdown38187.
 */
example.dropdown.__GT_t_example$dropdown38187 = (function example$dropdown$__GT_t_example$dropdown38187(meta38188){
return (new example.dropdown.t_example$dropdown38187(meta38188));
});

}

return (new example.dropdown.t_example$dropdown38187(null));
})()
,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$dropdown,cljs.core.cst$kw$options], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"options",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.dropdown !== 'undefined') && (typeof example.dropdown.t_example$dropdown38191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.dropdown.t_example$dropdown38191 = (function (meta38192){
this.meta38192 = meta38192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.dropdown.t_example$dropdown38191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38193,meta38192__$1){
var self__ = this;
var _38193__$1 = this;
return (new example.dropdown.t_example$dropdown38191(meta38192__$1));
}));

(example.dropdown.t_example$dropdown38191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38193){
var self__ = this;
var _38193__$1 = this;
return self__.meta38192;
}));

(example.dropdown.t_example$dropdown38191.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.dropdown.t_example$dropdown38191.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (options,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.table,cljs.core.deref(options),(function (k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(options,cljs.core.assoc,k,v);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.cst$kw$string], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$close_DASH_on_DASH_click_QMARK_,cljs.core.cst$kw$bool], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$caret_QMARK_,cljs.core.cst$kw$bool], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.dropdown.dropdown_button,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$text,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)),cljs.core.cst$kw$content,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$value,i,cljs.core.cst$kw$text,["Option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((5))),cljs.core.cst$kw$value,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)),cljs.core.cst$kw$on_DASH_change,(function (p1__38190_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(options,cljs.core.assoc,cljs.core.cst$kw$value,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p1__38190_SHARP_));
}),cljs.core.cst$kw$close_DASH_on_DASH_click_QMARK_,cljs.core.cst$kw$close_DASH_on_DASH_click_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)),cljs.core.cst$kw$caret_QMARK_,cljs.core.cst$kw$caret_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options))], null)], null)], null);
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

(example.dropdown.t_example$dropdown38191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta38192], null);
}));

(example.dropdown.t_example$dropdown38191.cljs$lang$type = true);

(example.dropdown.t_example$dropdown38191.cljs$lang$ctorStr = "example.dropdown/t_example$dropdown38191");

(example.dropdown.t_example$dropdown38191.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.dropdown/t_example$dropdown38191");
}));

/**
 * Positional factory function for example.dropdown/t_example$dropdown38191.
 */
example.dropdown.__GT_t_example$dropdown38191 = (function example$dropdown$__GT_t_example$dropdown38191(meta38192){
return (new example.dropdown.t_example$dropdown38191(meta38192));
});

}

return (new example.dropdown.t_example$dropdown38191(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$text,"A dropdown button",cljs.core.cst$kw$close_DASH_on_DASH_click_QMARK_,true,cljs.core.cst$kw$caret_QMARK_,true,cljs.core.cst$kw$value,null], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
