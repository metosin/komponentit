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
if((typeof example !== 'undefined') && (typeof example.dropdown !== 'undefined') && (typeof example.dropdown.t_example$dropdown32848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.dropdown.t_example$dropdown32848 = (function (meta32849){
this.meta32849 = meta32849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.dropdown.t_example$dropdown32848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32850,meta32849__$1){
var self__ = this;
var _32850__$1 = this;
return (new example.dropdown.t_example$dropdown32848(meta32849__$1));
}));

(example.dropdown.t_example$dropdown32848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32850){
var self__ = this;
var _32850__$1 = this;
return self__.meta32849;
}));

(example.dropdown.t_example$dropdown32848.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.dropdown.t_example$dropdown32848.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$navbar$navbar_DASH_default,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$navbar_DASH_nav,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#"], null),"Normal list item"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.dropdown.dropdown_li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"List item with dropdown",cljs.core.cst$kw$content,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$href,["#foo",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.cst$kw$text,["Option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)))], null)], null)], null)], null);
if(cljs.core.fn_QMARK_(v__31365__auto__)){
return (function (data_atom__31366__auto__,owner__31367__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__31365__auto__,data_atom__31366__auto__,owner__31367__auto__], null));
});
} else {
return reagent.core.as_element(v__31365__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(devcard_opts__31347__auto__))], 0))], 0));
}));

(example.dropdown.t_example$dropdown32848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32849], null);
}));

(example.dropdown.t_example$dropdown32848.cljs$lang$type = true);

(example.dropdown.t_example$dropdown32848.cljs$lang$ctorStr = "example.dropdown/t_example$dropdown32848");

(example.dropdown.t_example$dropdown32848.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.dropdown/t_example$dropdown32848");
}));

/**
 * Positional factory function for example.dropdown/t_example$dropdown32848.
 */
example.dropdown.__GT_t_example$dropdown32848 = (function example$dropdown$__GT_t_example$dropdown32848(meta32849){
return (new example.dropdown.t_example$dropdown32848(meta32849));
});

}

return (new example.dropdown.t_example$dropdown32848(null));
})()
,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$dropdown,cljs.core.cst$kw$selectbox], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"selectbox",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.dropdown !== 'undefined') && (typeof example.dropdown.t_example$dropdown32852 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.dropdown.t_example$dropdown32852 = (function (meta32853){
this.meta32853 = meta32853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.dropdown.t_example$dropdown32852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32854,meta32853__$1){
var self__ = this;
var _32854__$1 = this;
return (new example.dropdown.t_example$dropdown32852(meta32853__$1));
}));

(example.dropdown.t_example$dropdown32852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32854){
var self__ = this;
var _32854__$1 = this;
return self__.meta32853;
}));

(example.dropdown.t_example$dropdown32852.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.dropdown.t_example$dropdown32852.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.dropdown.dropdown_button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$text,"A button with dropdown",cljs.core.cst$kw$content,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$value,i,cljs.core.cst$kw$text,["Option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((5))),cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (p1__32851_SHARP_){
return cljs.core.reset_BANG_(value,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p1__32851_SHARP_));
})], null)], null);
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

(example.dropdown.t_example$dropdown32852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32853], null);
}));

(example.dropdown.t_example$dropdown32852.cljs$lang$type = true);

(example.dropdown.t_example$dropdown32852.cljs$lang$ctorStr = "example.dropdown/t_example$dropdown32852");

(example.dropdown.t_example$dropdown32852.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.dropdown/t_example$dropdown32852");
}));

/**
 * Positional factory function for example.dropdown/t_example$dropdown32852.
 */
example.dropdown.__GT_t_example$dropdown32852 = (function example$dropdown$__GT_t_example$dropdown32852(meta32853){
return (new example.dropdown.t_example$dropdown32852(meta32853));
});

}

return (new example.dropdown.t_example$dropdown32852(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$dropdown,cljs.core.cst$kw$link], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"link",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.dropdown !== 'undefined') && (typeof example.dropdown.t_example$dropdown32856 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.dropdown.t_example$dropdown32856 = (function (meta32857){
this.meta32857 = meta32857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.dropdown.t_example$dropdown32856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32858,meta32857__$1){
var self__ = this;
var _32858__$1 = this;
return (new example.dropdown.t_example$dropdown32856(meta32857__$1));
}));

(example.dropdown.t_example$dropdown32856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32858){
var self__ = this;
var _32858__$1 = this;
return self__.meta32857;
}));

(example.dropdown.t_example$dropdown32856.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.dropdown.t_example$dropdown32856.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.dropdown.dropdown_a,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$text,"A link with dropdown",cljs.core.cst$kw$content,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$value,i,cljs.core.cst$kw$text,["Option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((5))),cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (p1__32855_SHARP_){
return cljs.core.reset_BANG_(value,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p1__32855_SHARP_));
})], null)], null);
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

(example.dropdown.t_example$dropdown32856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32857], null);
}));

(example.dropdown.t_example$dropdown32856.cljs$lang$type = true);

(example.dropdown.t_example$dropdown32856.cljs$lang$ctorStr = "example.dropdown/t_example$dropdown32856");

(example.dropdown.t_example$dropdown32856.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.dropdown/t_example$dropdown32856");
}));

/**
 * Positional factory function for example.dropdown/t_example$dropdown32856.
 */
example.dropdown.__GT_t_example$dropdown32856 = (function example$dropdown$__GT_t_example$dropdown32856(meta32857){
return (new example.dropdown.t_example$dropdown32856(meta32857));
});

}

return (new example.dropdown.t_example$dropdown32856(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$dropdown,cljs.core.cst$kw$selectbox_DASH_2], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"selectbox-2",cljs.core.cst$kw$documentation,"List items with on-click handlers",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.dropdown !== 'undefined') && (typeof example.dropdown.t_example$dropdown32859 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.dropdown.t_example$dropdown32859 = (function (meta32860){
this.meta32860 = meta32860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.dropdown.t_example$dropdown32859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32861,meta32860__$1){
var self__ = this;
var _32861__$1 = this;
return (new example.dropdown.t_example$dropdown32859(meta32860__$1));
}));

(example.dropdown.t_example$dropdown32859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32861){
var self__ = this;
var _32861__$1 = this;
return self__.meta32860;
}));

(example.dropdown.t_example$dropdown32859.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.dropdown.t_example$dropdown32859.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.dropdown.dropdown_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"A button with dropdown",cljs.core.cst$kw$content,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$on_DASH_click,(function (){
return alert(["Option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));
}),cljs.core.cst$kw$text,["Option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)))], null)], null);
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

(example.dropdown.t_example$dropdown32859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32860], null);
}));

(example.dropdown.t_example$dropdown32859.cljs$lang$type = true);

(example.dropdown.t_example$dropdown32859.cljs$lang$ctorStr = "example.dropdown/t_example$dropdown32859");

(example.dropdown.t_example$dropdown32859.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.dropdown/t_example$dropdown32859");
}));

/**
 * Positional factory function for example.dropdown/t_example$dropdown32859.
 */
example.dropdown.__GT_t_example$dropdown32859 = (function example$dropdown$__GT_t_example$dropdown32859(meta32860){
return (new example.dropdown.t_example$dropdown32859(meta32860));
});

}

return (new example.dropdown.t_example$dropdown32859(null));
})()
,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$dropdown,cljs.core.cst$kw$options], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"options",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.dropdown !== 'undefined') && (typeof example.dropdown.t_example$dropdown32863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.dropdown.t_example$dropdown32863 = (function (meta32864){
this.meta32864 = meta32864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.dropdown.t_example$dropdown32863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32865,meta32864__$1){
var self__ = this;
var _32865__$1 = this;
return (new example.dropdown.t_example$dropdown32863(meta32864__$1));
}));

(example.dropdown.t_example$dropdown32863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32865){
var self__ = this;
var _32865__$1 = this;
return self__.meta32864;
}));

(example.dropdown.t_example$dropdown32863.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.dropdown.t_example$dropdown32863.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (options,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.table,cljs.core.deref(options),(function (k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(options,cljs.core.assoc,k,v);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.cst$kw$string], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$close_DASH_on_DASH_click_QMARK_,cljs.core.cst$kw$bool], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$caret_QMARK_,cljs.core.cst$kw$bool], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.dropdown.dropdown_button,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$text,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)),cljs.core.cst$kw$content,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$value,i,cljs.core.cst$kw$text,["Option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((5))),cljs.core.cst$kw$value,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)),cljs.core.cst$kw$on_DASH_change,(function (p1__32862_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(options,cljs.core.assoc,cljs.core.cst$kw$value,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p1__32862_SHARP_));
}),cljs.core.cst$kw$close_DASH_on_DASH_click_QMARK_,cljs.core.cst$kw$close_DASH_on_DASH_click_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)),cljs.core.cst$kw$caret_QMARK_,cljs.core.cst$kw$caret_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options))], null)], null)], null);
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

(example.dropdown.t_example$dropdown32863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32864], null);
}));

(example.dropdown.t_example$dropdown32863.cljs$lang$type = true);

(example.dropdown.t_example$dropdown32863.cljs$lang$ctorStr = "example.dropdown/t_example$dropdown32863");

(example.dropdown.t_example$dropdown32863.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.dropdown/t_example$dropdown32863");
}));

/**
 * Positional factory function for example.dropdown/t_example$dropdown32863.
 */
example.dropdown.__GT_t_example$dropdown32863 = (function example$dropdown$__GT_t_example$dropdown32863(meta32864){
return (new example.dropdown.t_example$dropdown32863(meta32864));
});

}

return (new example.dropdown.t_example$dropdown32863(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$text,"A dropdown button",cljs.core.cst$kw$close_DASH_on_DASH_click_QMARK_,true,cljs.core.cst$kw$caret_QMARK_,true,cljs.core.cst$kw$value,null], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
