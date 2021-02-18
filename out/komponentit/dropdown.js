// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.dropdown');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('komponentit.mixins');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.enable_console_print_BANG_();
/**
 * - `:key` React key
 * - `:value` (Optional) Current value
 * - `:href` (Optional) A href
 * - `:on-click` (Optional) callback
 * - `:el` (Default: `:li`)
 * - `:link-el` (Default: `:a`)
 * - `:props` (Optional) React props to dropdown list item element
 * - `:link-props` (Optional) React props to dropdown item element
 * - `:text` Text
 */
komponentit.dropdown.__GT_menu_item = (function komponentit$dropdown$__GT_menu_item(open_QMARK_,p__32266,p__32267){
var map__32268 = p__32266;
var map__32268__$1 = (((((!((map__32268 == null))))?(((((map__32268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32268):map__32268);
var dropdown_opts = map__32268__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32268__$1,cljs.core.cst$kw$on_DASH_change);
var close_on_click_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32268__$1,cljs.core.cst$kw$close_DASH_on_DASH_click_QMARK_);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32268__$1,cljs.core.cst$kw$disabled);
var active_item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32268__$1,cljs.core.cst$kw$active_DASH_item_DASH_class,"dropdown-menu__item--active");
var separator_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32268__$1,cljs.core.cst$kw$separator_DASH_class,"divider");
var menu_item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32268__$1,cljs.core.cst$kw$menu_DASH_item_DASH_class);
var menu_item_a_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32268__$1,cljs.core.cst$kw$menu_DASH_item_DASH_a_DASH_class);
var map__32269 = p__32267;
var map__32269__$1 = (((((!((map__32269 == null))))?(((((map__32269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32269):map__32269);
var item_opts = map__32269__$1;
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32269__$1,cljs.core.cst$kw$separator);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32269__$1,cljs.core.cst$kw$href);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32269__$1,cljs.core.cst$kw$text);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32269__$1,cljs.core.cst$kw$props);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32269__$1,cljs.core.cst$kw$el,cljs.core.cst$kw$li);
var link_el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32269__$1,cljs.core.cst$kw$link_DASH_el,cljs.core.cst$kw$a);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32269__$1,cljs.core.cst$kw$key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32269__$1,cljs.core.cst$kw$value);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32269__$1,cljs.core.cst$kw$on_DASH_click);
var link_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32269__$1,cljs.core.cst$kw$link_DASH_props);
var menu_item_class__$1 = (function (){var or__4185__auto__ = cljs.core.cst$kw$menu_DASH_item_DASH_class.cljs$core$IFn$_invoke$arity$1(item_opts);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = cljs.core.cst$kw$menu_DASH_item_DASH_class.cljs$core$IFn$_invoke$arity$1(dropdown_opts);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return "dropdown-menu__item";
}
}
})();
var menu_item_a_class__$1 = (function (){var or__4185__auto__ = cljs.core.cst$kw$menu_DASH_item_DASH_a_DASH_class.cljs$core$IFn$_invoke$arity$1(item_opts);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = cljs.core.cst$kw$menu_DASH_item_DASH_a_DASH_class.cljs$core$IFn$_invoke$arity$1(dropdown_opts);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return "dropdown-menu__link";
}
}
})();
if(cljs.core.truth_(separator)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,separator_class,cljs.core.cst$kw$key,key], null)], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,key,cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(props))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(menu_item_class__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__4174__auto__ = value;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(dropdown_opts),value);
} else {
return and__4174__auto__;
}
})())?active_item_class:null))].join('')], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [link_el,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link_props,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$href,(function (){var or__4185__auto__ = href;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "#";
}
})(),cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(link_props))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(menu_item_a_class__$1)].join(''),cljs.core.cst$kw$on_DASH_click,(function (e){
if(cljs.core.not(href)){
e.preventDefault();
} else {
}

if((!(close_on_click_QMARK_ === false))){
cljs.core.reset_BANG_(open_QMARK_,false);
} else {
}

if(cljs.core.truth_(on_click)){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(e) : on_click.call(null,e));
} else {
}

if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(item_opts) : on_change.call(null,item_opts));
} else {
}

return null;
}),cljs.core.cst$kw$disabled,disabled], null)], 0)),text], null)], null);

}
});
komponentit.dropdown.toggle = (function komponentit$dropdown$toggle(open_QMARK_,e){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);

return null;
});
komponentit.dropdown.caret_SINGLEQUOTE_ = (function komponentit$dropdown$caret_SINGLEQUOTE_(open_QMARK_,p__32272){
var map__32273 = p__32272;
var map__32273__$1 = (((((!((map__32273 == null))))?(((((map__32273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32273):map__32273);
var caret_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32273__$1,cljs.core.cst$kw$caret_QMARK_);
var caret_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32273__$1,cljs.core.cst$kw$caret_DASH_class,"caret");
var caret_up_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32273__$1,cljs.core.cst$kw$caret_DASH_up_DASH_class,"caret");
if((!(caret_QMARK_ === false))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.deref(open_QMARK_))?caret_up_class:caret_class)], null)], null)], null);
} else {
return null;
}
});
komponentit.dropdown.dropdown_SINGLEQUOTE_ = (function komponentit$dropdown$dropdown_SINGLEQUOTE_(open_QMARK_,ref,dropdown,p__32275){
var map__32276 = p__32275;
var map__32276__$1 = (((((!((map__32276 == null))))?(((((map__32276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32276):map__32276);
var props = map__32276__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32276__$1,cljs.core.cst$kw$text);
var a_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32276__$1,cljs.core.cst$kw$a_DASH_class);
var container_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32276__$1,cljs.core.cst$kw$container_DASH_class,"dropdown-container");
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32276__$1,cljs.core.cst$kw$el,cljs.core.cst$kw$a);
var button_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32276__$1,cljs.core.cst$kw$button_DASH_class);
var toggle_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32276__$1,cljs.core.cst$kw$toggle_DASH_props);
var open_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32276__$1,cljs.core.cst$kw$open_DASH_class,"open");
var container_el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32276__$1,cljs.core.cst$kw$container_DASH_el,cljs.core.cst$kw$div);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32276__$1,cljs.core.cst$kw$class);
var li_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32276__$1,cljs.core.cst$kw$li_DASH_class);
var toggle_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32276__$1,cljs.core.cst$kw$toggle_DASH_class,"dropdown-toggle");
return null;
});
/**
 * - `:text` Text for dropdown toggle element.
 * - `:content` Used to pass in dropdown elements as collection of item-maps.
 * - `:children` (replaces `:content`) Used to pass in dropdown elements as Reagent hiccup form. Most of other options
 * do not work with this option.
 * - `:on-change` (Optional, supported by content) Called with item-map when dropdown item is selected.
 * - `:value` (Optional, supported by content) Current value, marks list item with equivalent value as active.
 * - `:close-on-click?` (Default `true`) Close dropdown when any item is selected.
 * - `:caret?` (Default `true`) Whether to automatically append caret to text.
 * 
 * HTML elements:
 * 
 * - `:container-el` (Default `:div`) The element used to contain toggle element and dropdown list.
 * - `:el` (Default `:a`) The toggle element type.
 * 
 * CSS classes:
 * 
 * - `:container-class` (Default `"dropdown-container"`)
 * - `:open-class` (Default `"open"`)
 * - `:dropdown-class` (Default `"dropdown-menu"`)
 * - `:caret-class` (Default `"caret"`)
 * - `:caret-up-class` (Default `"caret"`)
 * - `:separator-class` (Default `"divider"`)
 * - `:menu-item-class` (Default `"dropdown-menu__item"`)
 * - `:menu-item-a-class` (Default `"dropdown-menu__link")
 * - `:active-item-class` (Default `"dropdown-menu__item--active"`)
 * 
 * Props:
 * 
 * Any other React props can be passed to the created elements:
 * 
 * - `:toggle-props`
 * - `:container-props`
 * - (Item option) `:props`
 * - (Item option) `:link-props`
 */
komponentit.dropdown.dropdown = (function komponentit$dropdown$dropdown(_){
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (p__32278){
var map__32279 = p__32278;
var map__32279__$1 = (((((!((map__32279 == null))))?(((((map__32279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32279):map__32279);
var props = map__32279__$1;
var container_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32279__$1,cljs.core.cst$kw$container_DASH_props);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32279__$1,cljs.core.cst$kw$text);
var a_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32279__$1,cljs.core.cst$kw$a_DASH_class);
var container_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32279__$1,cljs.core.cst$kw$container_DASH_class,"dropdown-container");
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32279__$1,cljs.core.cst$kw$children);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32279__$1,cljs.core.cst$kw$el,cljs.core.cst$kw$a);
var button_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32279__$1,cljs.core.cst$kw$button_DASH_class);
var toggle_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32279__$1,cljs.core.cst$kw$toggle_DASH_props);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32279__$1,cljs.core.cst$kw$content);
var open_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32279__$1,cljs.core.cst$kw$open_DASH_class,"open");
var dropdown_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32279__$1,cljs.core.cst$kw$dropdown_DASH_class,"dropdown-menu");
var container_el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32279__$1,cljs.core.cst$kw$container_DASH_el,cljs.core.cst$kw$div);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32279__$1,cljs.core.cst$kw$class);
var li_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32279__$1,cljs.core.cst$kw$li_DASH_class);
var toggle_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32279__$1,cljs.core.cst$kw$toggle_DASH_class,"dropdown-toggle");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(container_class)){
} else {
}

if(cljs.core.truth_(li_class)){
} else {
}

if(cljs.core.truth_(a_class)){
} else {
}

if(cljs.core.truth_(button_class)){
} else {
}
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [container_el,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_class)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(open_QMARK_))?open_class:null))].join('')], null)], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggle_props,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(toggle_props))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(toggle_class)].join(''),cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(komponentit.dropdown.toggle,open_QMARK_),cljs.core.cst$kw$aria_DASH_haspopup,true,cljs.core.cst$kw$aria_DASH_expanded,cljs.core.deref(open_QMARK_)], null)], 0)),text,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.dropdown.caret_SINGLEQUOTE_,open_QMARK_,props], null)], null),(cljs.core.truth_(cljs.core.deref(open_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.mixins.window_event_listener,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (e){
if((!(goog.dom.contains(reagent.dom.dom_node(reagent.core.current_component()),e.target)))){
return cljs.core.reset_BANG_(open_QMARK_,false);
} else {
return null;
}
}),cljs.core.cst$kw$on_DASH_key_DASH_down,(function (e){
var G__32281 = e.keyCode;
switch (G__32281) {
case (27):
return cljs.core.reset_BANG_(open_QMARK_,false);

break;
default:
return null;

}
})], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,dropdown_class], null)], null),(cljs.core.truth_(children)?children:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(komponentit.dropdown.__GT_menu_item,open_QMARK_,props),content)))], null):null)], null);
});
});
komponentit.dropdown.dropdown_li = (function komponentit$dropdown$dropdown_li(opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.dropdown.dropdown,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$container_DASH_el,cljs.core.cst$kw$li,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$el,cljs.core.cst$kw$a], 0))], null);
});
komponentit.dropdown.dropdown_button = (function komponentit$dropdown$dropdown_button(opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.dropdown.dropdown,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$el,cljs.core.cst$kw$button)], null);
});
komponentit.dropdown.dropdown_a = (function komponentit$dropdown$dropdown_a(opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.dropdown.dropdown,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$el,cljs.core.cst$kw$a)], null);
});
