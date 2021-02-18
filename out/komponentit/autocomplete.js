// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.autocomplete');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('komponentit.util');
goog.require('komponentit.mixins');
goog.require('komponentit.highlight');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('komponentit.autosize');
komponentit.autocomplete._PLUS_create_item_index_PLUS_ = (-1);
komponentit.autocomplete.query_match_QMARK_ = (function komponentit$autocomplete$query_match_QMARK_(term_match_fn,item,query){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(term_match_fn,item),query);
});
komponentit.autocomplete.sub_query_match_QMARK_ = (function komponentit$autocomplete$sub_query_match_QMARK_(term_match_fn,item,query){
var m = cljs.core.group_by((function (p1__37297_SHARP_){
return cljs.core.boolean$((term_match_fn.cljs$core$IFn$_invoke$arity$2 ? term_match_fn.cljs$core$IFn$_invoke$arity$2(item,p1__37297_SHARP_) : term_match_fn.call(null,item,p1__37297_SHARP_)));
}),query);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,true),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,false)], null);
});
komponentit.autocomplete.default__GT_query = (function komponentit$autocomplete$default__GT_query(search){
var G__37298 = search;
var G__37298__$1 = (((G__37298 == null))?null:G__37298.toLowerCase());
var G__37298__$2 = (((G__37298__$1 == null))?null:G__37298__$1.split(/ /));
var G__37298__$3 = (((G__37298__$2 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,G__37298__$2));
if((G__37298__$3 == null)){
return null;
} else {
return cljs.core.vec(G__37298__$3);
}
});
komponentit.autocomplete.find_by_selection = (function komponentit$autocomplete$find_by_selection(results,selected_index){
return cljs.core.some((function (item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$komponentit$autocomplete_SLASH_i.cljs$core$IFn$_invoke$arity$1(item),selected_index)){
return item;
} else {
return null;
}
}),results);
});
/**
 * Fields can be either collection containing multiple key for map,
 * or a single key.
 * If collection is given, returned function will go through keys using some.
 */
komponentit.autocomplete.create_matcher_STAR_ = (function komponentit$autocomplete$create_matcher_STAR_(fields){
if(cljs.core.sequential_QMARK_(fields)){
return (function (item,term){
return cljs.core.some((function (field){
var G__37299 = item;
var G__37299__$1 = (((G__37299 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__37299,field));
if((G__37299__$1 == null)){
return null;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__37299__$1.toLowerCase().indexOf(term),(-1));
}
}),fields);
});
} else {
return (function (item,term){
var G__37300 = item;
var G__37300__$1 = (((G__37300 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__37300,fields));
if((G__37300__$1 == null)){
return null;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__37300__$1.toLowerCase().indexOf(term),(-1));
}
});
}
});


komponentit.autocomplete.close = (function komponentit$autocomplete$close(this$,opts){
reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$open_QMARK_,false], null));

return (komponentit.autocomplete.reset_search.cljs$core$IFn$_invoke$arity$2 ? komponentit.autocomplete.reset_search.cljs$core$IFn$_invoke$arity$2(this$,opts) : komponentit.autocomplete.reset_search.call(null,this$,opts));
});
komponentit.autocomplete.open = (function komponentit$autocomplete$open(this$,text){
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(reagent.core.state(this$)))){
return reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$open_QMARK_,true,cljs.core.cst$kw$initial_DASH_search,(((!(clojure.string.blank_QMARK_(text))))?text:null)], null));
} else {
return null;
}
});
komponentit.autocomplete.update_search = (function komponentit$autocomplete$update_search(this$,v,p__37301){
var map__37302 = p__37301;
var map__37302__$1 = (((((!((map__37302 == null))))?(((((map__37302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37302):map__37302);
var opts = map__37302__$1;
var __GT_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37302__$1,cljs.core.cst$kw$_DASH__GT_query);
var debounce_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37302__$1,cljs.core.cst$kw$debounce_DASH_timeout);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37302__$1,cljs.core.cst$kw$items);
var get_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37302__$1,cljs.core.cst$kw$get_DASH_items);
reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search,v,cljs.core.cst$kw$query,(__GT_query.cljs$core$IFn$_invoke$arity$1 ? __GT_query.cljs$core$IFn$_invoke$arity$1(v) : __GT_query.call(null,v))], null));

if(cljs.core.truth_(debounce_timeout)){
var timeout = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(reagent.core.state(this$));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(timeout,(function (current){
if(cljs.core.truth_(current)){
clearTimeout(current);
} else {
}

return setTimeout((function (_){
if(cljs.core.truth_(items)){
return reagent.core.set_state(this$,(komponentit.autocomplete.filter_results.cljs$core$IFn$_invoke$arity$2 ? komponentit.autocomplete.filter_results.cljs$core$IFn$_invoke$arity$2(this$,opts) : komponentit.autocomplete.filter_results.call(null,this$,opts)));
} else {
var G__37304 = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(reagent.core.state(this$));
var G__37305 = (function (new_items){
reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prepared_DASH_items,(komponentit.autocomplete.prepare_items.cljs$core$IFn$_invoke$arity$2 ? komponentit.autocomplete.prepare_items.cljs$core$IFn$_invoke$arity$2(new_items,opts) : komponentit.autocomplete.prepare_items.call(null,new_items,opts))], null));

return reagent.core.set_state(this$,(komponentit.autocomplete.filter_results.cljs$core$IFn$_invoke$arity$2 ? komponentit.autocomplete.filter_results.cljs$core$IFn$_invoke$arity$2(this$,opts) : komponentit.autocomplete.filter_results.call(null,this$,opts)));
});
return (get_items.cljs$core$IFn$_invoke$arity$2 ? get_items.cljs$core$IFn$_invoke$arity$2(G__37304,G__37305) : get_items.call(null,G__37304,G__37305));
}
}),debounce_timeout);
}));
} else {
if(cljs.core.truth_(items)){
return reagent.core.set_state(this$,(komponentit.autocomplete.filter_results.cljs$core$IFn$_invoke$arity$2 ? komponentit.autocomplete.filter_results.cljs$core$IFn$_invoke$arity$2(this$,opts) : komponentit.autocomplete.filter_results.call(null,this$,opts)));
} else {
var G__37306 = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(reagent.core.state(this$));
var G__37307 = (function (new_items){
reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prepared_DASH_items,(komponentit.autocomplete.prepare_items.cljs$core$IFn$_invoke$arity$2 ? komponentit.autocomplete.prepare_items.cljs$core$IFn$_invoke$arity$2(new_items,opts) : komponentit.autocomplete.prepare_items.call(null,new_items,opts))], null));

return reagent.core.set_state(this$,(komponentit.autocomplete.filter_results.cljs$core$IFn$_invoke$arity$2 ? komponentit.autocomplete.filter_results.cljs$core$IFn$_invoke$arity$2(this$,opts) : komponentit.autocomplete.filter_results.call(null,this$,opts)));
});
return (get_items.cljs$core$IFn$_invoke$arity$2 ? get_items.cljs$core$IFn$_invoke$arity$2(G__37306,G__37307) : get_items.call(null,G__37306,G__37307));
}
}
});
komponentit.autocomplete.reset_search = (function komponentit$autocomplete$reset_search(this$,p__37308){
var map__37309 = p__37308;
var map__37309__$1 = (((((!((map__37309 == null))))?(((((map__37309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37309):map__37309);
var opts = map__37309__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37309__$1,cljs.core.cst$kw$items);
var get_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37309__$1,cljs.core.cst$kw$get_DASH_items);
reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search,null,cljs.core.cst$kw$query,null], null));

if(cljs.core.truth_(items)){
return reagent.core.set_state(this$,(komponentit.autocomplete.filter_results.cljs$core$IFn$_invoke$arity$2 ? komponentit.autocomplete.filter_results.cljs$core$IFn$_invoke$arity$2(this$,opts) : komponentit.autocomplete.filter_results.call(null,this$,opts)));
} else {
var G__37311 = null;
var G__37312 = (function (new_items){
reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prepared_DASH_items,(komponentit.autocomplete.prepare_items.cljs$core$IFn$_invoke$arity$2 ? komponentit.autocomplete.prepare_items.cljs$core$IFn$_invoke$arity$2(new_items,opts) : komponentit.autocomplete.prepare_items.call(null,new_items,opts))], null));

return reagent.core.set_state(this$,(komponentit.autocomplete.filter_results.cljs$core$IFn$_invoke$arity$2 ? komponentit.autocomplete.filter_results.cljs$core$IFn$_invoke$arity$2(this$,opts) : komponentit.autocomplete.filter_results.call(null,this$,opts)));
});
return (get_items.cljs$core$IFn$_invoke$arity$2 ? get_items.cljs$core$IFn$_invoke$arity$2(G__37311,G__37312) : get_items.call(null,G__37311,G__37312));
}
});
komponentit.autocomplete.blur = (function komponentit$autocomplete$blur(this$,opts,e){
if(cljs.core.truth_(e.relatedTarget)){
komponentit.autocomplete.close(this$,opts);
} else {
}

return null;
});
komponentit.autocomplete.click = (function komponentit$autocomplete$click(this$,e){
(reagent.dom.dom_node(this$).getElementsByClassName("autocomplete__input")[(0)]).focus();

return null;
});
komponentit.autocomplete.focus = (function komponentit$autocomplete$focus(this$,search,text,e){
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(reagent.core.state(this$)))){
reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$search,""], null));
} else {
}

komponentit.autocomplete.open(this$,text);

return null;
});
komponentit.autocomplete.call_on_change = (function komponentit$autocomplete$call_on_change(this$,opts,e){
var map__37313 = reagent.core.state(this$);
var map__37313__$1 = (((((!((map__37313 == null))))?(((((map__37313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37313):map__37313);
var initial_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37313__$1,cljs.core.cst$kw$initial_DASH_search);
var v = e.target.value;
if(cljs.core.truth_(initial_search)){
return null;
} else {
return komponentit.autocomplete.update_search(this$,v,opts);
}
});
komponentit.autocomplete.select_value = (function komponentit$autocomplete$select_value(p__37315,this$,v){
var map__37316 = p__37315;
var map__37316__$1 = (((((!((map__37316 == null))))?(((((map__37316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37316):map__37316);
var opts = map__37316__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37316__$1,cljs.core.cst$kw$on_DASH_change);
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(v) : on_change.call(null,v));
} else {
}

return reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$initial_DASH_search,null,cljs.core.cst$kw$search,"",cljs.core.cst$kw$open_QMARK_,false], null));
});
komponentit.autocomplete.call_on_remove = (function komponentit$autocomplete$call_on_remove(p__37318,this$,v){
var map__37319 = p__37318;
var map__37319__$1 = (((((!((map__37319 == null))))?(((((map__37319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37319):map__37319);
var opts = map__37319__$1;
var on_remove = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37319__$1,cljs.core.cst$kw$on_DASH_remove);
if(cljs.core.truth_(on_remove)){
(on_remove.cljs$core$IFn$_invoke$arity$1 ? on_remove.cljs$core$IFn$_invoke$arity$1(v) : on_remove.call(null,v));
} else {
}

return reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search,"",cljs.core.cst$kw$open_QMARK_,false], null));
});
komponentit.autocomplete.call_on_create = (function komponentit$autocomplete$call_on_create(p__37321,this$,s){
var map__37322 = p__37321;
var map__37322__$1 = (((((!((map__37322 == null))))?(((((map__37322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37322):map__37322);
var opts = map__37322__$1;
var on_create = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37322__$1,cljs.core.cst$kw$on_DASH_create);
if(cljs.core.truth_(on_create)){
(on_create.cljs$core$IFn$_invoke$arity$1 ? on_create.cljs$core$IFn$_invoke$arity$1(s) : on_create.call(null,s));

return reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search,null,cljs.core.cst$kw$open_QMARK_,false], null));
} else {
return null;
}
});
komponentit.autocomplete.limit_selection = (function komponentit$autocomplete$limit_selection(n,selected,f,search,p__37324){
var map__37325 = p__37324;
var map__37325__$1 = (((((!((map__37325 == null))))?(((((map__37325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37325):map__37325);
var on_create = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37325__$1,cljs.core.cst$kw$on_DASH_create);
return komponentit.util.limit((cljs.core.truth_((function (){var and__4174__auto__ = on_create;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.seq(search);
} else {
return and__4174__auto__;
}
})())?komponentit.autocomplete._PLUS_create_item_index_PLUS_:(0)),n,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(selected) : f.call(null,selected)));
});
komponentit.autocomplete.update_selection = (function komponentit$autocomplete$update_selection(this$,f,opts,e){
e.preventDefault();

e.stopPropagation();

var map__37327 = reagent.core.state(this$);
var map__37327__$1 = (((((!((map__37327 == null))))?(((((map__37327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37327):map__37327);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37327__$1,cljs.core.cst$kw$selected);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37327__$1,cljs.core.cst$kw$search);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37327__$1,cljs.core.cst$kw$n);
return reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$selected,komponentit.autocomplete.limit_selection(n,selected,f,search,opts)], null));
});
komponentit.autocomplete.handle_enter = (function komponentit$autocomplete$handle_enter(this$,opts,e){
e.preventDefault();

e.stopPropagation();

var map__37329 = reagent.core.state(this$);
var map__37329__$1 = (((((!((map__37329 == null))))?(((((map__37329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37329):map__37329);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,cljs.core.cst$kw$results);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,cljs.core.cst$kw$selected);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,cljs.core.cst$kw$search);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(komponentit.autocomplete._PLUS_create_item_index_PLUS_,selected)){
return komponentit.autocomplete.call_on_create(opts,this$,search);
} else {
var temp__4657__auto__ = komponentit.autocomplete.find_by_selection(results,selected);
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
return komponentit.autocomplete.select_value(opts,this$,v);
} else {
return null;
}
}
});
komponentit.autocomplete.call_clear = (function komponentit$autocomplete$call_clear(p__37331,this$){
var map__37332 = p__37331;
var map__37332__$1 = (((((!((map__37332 == null))))?(((((map__37332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37332):map__37332);
var opts = map__37332__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37332__$1,cljs.core.cst$kw$on_DASH_change);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37332__$1,cljs.core.cst$kw$value);
if(cljs.core.truth_(cljs.core.cst$kw$on_DASH_remove.cljs$core$IFn$_invoke$arity$1(opts))){
return komponentit.autocomplete.call_on_remove(opts,this$,cljs.core.last(value));
} else {
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(null) : on_change.call(null,null));
} else {
}

return reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$initial_DASH_search,null,cljs.core.cst$kw$search,"",cljs.core.cst$kw$open_QMARK_,true], null));
}
});
komponentit.autocomplete.handle_backspace = (function komponentit$autocomplete$handle_backspace(this$,p__37334,e){
var map__37335 = p__37334;
var map__37335__$1 = (((((!((map__37335 == null))))?(((((map__37335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37335):map__37335);
var opts = map__37335__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37335__$1,cljs.core.cst$kw$on_DASH_change);
var map__37337 = reagent.core.state(this$);
var map__37337__$1 = (((((!((map__37337 == null))))?(((((map__37337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37337):map__37337);
var initial_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37337__$1,cljs.core.cst$kw$initial_DASH_search);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37337__$1,cljs.core.cst$kw$search);
if(cljs.core.seq(search)){
return null;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$on_DASH_remove.cljs$core$IFn$_invoke$arity$1(opts))){
return komponentit.autocomplete.call_on_remove(opts,this$,cljs.core.last(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(opts)));
} else {
if(cljs.core.truth_(initial_search)){
reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$initial_DASH_search,null,cljs.core.cst$kw$search,""], null));

if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(null) : on_change.call(null,null));
} else {
}

e.preventDefault();

return e.stopPropagation();
} else {
return null;
}
}
}
});
komponentit.autocomplete.key_down = (function komponentit$autocomplete$key_down(this$,text,opts,e){
komponentit.autocomplete.open(this$,text);

var G__37339 = e.key;
switch (G__37339) {
case "Enter":
return komponentit.autocomplete.handle_enter(this$,opts,e);

break;
case "Escape":
return komponentit.autocomplete.close(this$,opts);

break;
case "Backspace":
return komponentit.autocomplete.handle_backspace(this$,opts,e);

break;
case "ArrowUp":
return komponentit.autocomplete.update_selection(this$,cljs.core.dec,opts,e);

break;
case "ArrowDown":
return komponentit.autocomplete.update_selection(this$,cljs.core.inc,opts,e);

break;
default:
return null;

}
});
komponentit.autocomplete.prepare_items = (function komponentit$autocomplete$prepare_items(items,p__37341){
var map__37342 = p__37341;
var map__37342__$1 = (((((!((map__37342 == null))))?(((((map__37342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37342):map__37342);
var opts = map__37342__$1;
var prepare_xform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37342__$1,cljs.core.cst$kw$prepare_DASH_xform);
var map_to_seq = ((cljs.core.map_QMARK_(items))?cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (v){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.key(v),cljs.core.cst$kw$value,cljs.core.val(v)], null);
})):cljs.core.identity);
var prepare_xform__$1 = (function (){var or__4185__auto__ = prepare_xform;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.identity;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(map_to_seq,prepare_xform__$1),items);
});
komponentit.autocomplete.filter_results_SINGLEQUOTE_ = (function komponentit$autocomplete$filter_results_SINGLEQUOTE_(n,search_QMARK_,level,prepared_items,query,selected,p__37344){
var map__37345 = p__37344;
var map__37345__$1 = (((((!((map__37345 == null))))?(((((map__37345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37345):map__37345);
var opts = map__37345__$1;
var min_search_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,cljs.core.cst$kw$min_DASH_search_DASH_length);
var item__GT_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,cljs.core.cst$kw$item_DASH__GT_value);
var item__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,cljs.core.cst$kw$item_DASH__GT_text);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,cljs.core.cst$kw$item_DASH__GT_key);
var filter_current_out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,cljs.core.cst$kw$filter_DASH_current_DASH_out_QMARK_);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,cljs.core.cst$kw$value);
var max_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,cljs.core.cst$kw$max_DASH_results);
var item__GT_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,cljs.core.cst$kw$item_DASH__GT_items);
var term_match_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,cljs.core.cst$kw$term_DASH_match_DASH_fn);
var multiple_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,cljs.core.cst$kw$multiple_QMARK_);
var filter_subitems = (cljs.core.truth_(item__GT_items)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (item){
var temp__4655__auto__ = (item__GT_items.cljs$core$IFn$_invoke$arity$1 ? item__GT_items.cljs$core$IFn$_invoke$arity$1(item) : item__GT_items.call(null,item));
if(cljs.core.truth_(temp__4655__auto__)){
var subitems = temp__4655__auto__;
var vec__37347 = (cljs.core.truth_((function (){var and__4174__auto__ = search_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = term_match_fn;
if(cljs.core.truth_(and__4174__auto____$1)){
return query;
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())?komponentit.autocomplete.sub_query_match_QMARK_(term_match_fn,item,query):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,query], null));
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37347,(0),null);
var not_matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37347,(1),null);
var match_QMARK_ = cljs.core.boolean$(cljs.core.seq(matched));
var this_i = (cljs.core.truth_(cljs.core.cst$kw$selectable_QMARK_.cljs$core$IFn$_invoke$arity$2(item,true))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.inc):null);
var filtered_sub_items = (function (){var G__37350 = n;
var G__37351 = search_QMARK_;
var G__37352 = (level + (1));
var G__37353 = subitems;
var G__37354 = not_matched;
var G__37355 = selected;
var G__37356 = opts;
return (komponentit.autocomplete.filter_results_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$7 ? komponentit.autocomplete.filter_results_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$7(G__37350,G__37351,G__37352,G__37353,G__37354,G__37355,G__37356) : komponentit.autocomplete.filter_results_SINGLEQUOTE_.call(null,G__37350,G__37351,G__37352,G__37353,G__37354,G__37355,G__37356));
})();
var this_i__$1 = (cljs.core.truth_(cljs.core.cst$kw$selectable_QMARK_.cljs$core$IFn$_invoke$arity$2(item,true))?((cljs.core.seq(filtered_sub_items))?this_i:(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.dec);

return null;
})()
):null);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.cst$kw$komponentit$autocomplete_SLASH_full_DASH_match_QMARK_,cljs.core.not(not_matched),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$komponentit$autocomplete_SLASH_sub_DASH_items_DASH_match_QMARK_,cljs.core.seq(filtered_sub_items),cljs.core.cst$kw$komponentit$autocomplete_SLASH_i,this_i__$1], 0)),filtered_sub_items);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
}
})):cljs.core.identity);
var filter_search = (cljs.core.truth_((function (){var and__4174__auto__ = search_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = term_match_fn;
if(cljs.core.truth_(and__4174__auto____$1)){
return query;
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())?(cljs.core.truth_(item__GT_items)?cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (item){
var or__4185__auto__ = cljs.core.cst$kw$komponentit$autocomplete_SLASH_full_DASH_match_QMARK_.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = cljs.core.cst$kw$komponentit$autocomplete_SLASH_sub_DASH_items_DASH_match_QMARK_.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return komponentit.autocomplete.query_match_QMARK_(term_match_fn,item,query);
}
}
})):cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (item){
return komponentit.autocomplete.query_match_QMARK_(term_match_fn,item,query);
}))):cljs.core.identity);
var filter_current = (cljs.core.truth_(filter_current_out_QMARK_)?(function (){var value_set = cljs.core.set(value);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(multiple_QMARK_)?(function (item){
var G__37357 = (item__GT_value.cljs$core$IFn$_invoke$arity$1 ? item__GT_value.cljs$core$IFn$_invoke$arity$1(item) : item__GT_value.call(null,item));
return (value_set.cljs$core$IFn$_invoke$arity$1 ? value_set.cljs$core$IFn$_invoke$arity$1(G__37357) : value_set.call(null,G__37357));
}):(function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((item__GT_value.cljs$core$IFn$_invoke$arity$1 ? item__GT_value.cljs$core$IFn$_invoke$arity$1(item) : item__GT_value.call(null,item)),value);
})));
})():cljs.core.identity);
var limit = (cljs.core.truth_(max_results)?cljs.core.take.cljs$core$IFn$_invoke$arity$1(max_results):cljs.core.identity);
var add_index = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (v){
var G__37358 = v;
var G__37358__$1 = (cljs.core.truth_(((cljs.core.not(cljs.core.cst$kw$komponentit$autocomplete_SLASH_i.cljs$core$IFn$_invoke$arity$1(v)))?cljs.core.cst$kw$selectable_QMARK_.cljs$core$IFn$_invoke$arity$2(v,true):false))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37358,cljs.core.cst$kw$komponentit$autocomplete_SLASH_i,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.inc)):G__37358);
if(cljs.core.not(cljs.core.cst$kw$komponentit$autocomplete_SLASH_level.cljs$core$IFn$_invoke$arity$1(v))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37358__$1,cljs.core.cst$kw$komponentit$autocomplete_SLASH_level,level);
} else {
return G__37358__$1;
}
}));
var add_highlighted_str = (cljs.core.truth_((function (){var and__4174__auto__ = search_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.seq(query);
} else {
return and__4174__auto__;
}
})())?cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$komponentit$autocomplete_SLASH_text,komponentit.highlight.highlight_string.cljs$core$IFn$_invoke$arity$3((item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(v) : item__GT_text.call(null,v)),query,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$autocomplete__highlight,x], null);
})));
})):cljs.core.identity);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(filter_subitems,filter_search,filter_current,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([limit,add_index,add_highlighted_str], 0)),prepared_items);
});
komponentit.autocomplete.filter_results_top = (function komponentit$autocomplete$filter_results_top(prepared_items,query,selected,p__37359){
var map__37360 = p__37359;
var map__37360__$1 = (((((!((map__37360 == null))))?(((((map__37360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37360):map__37360);
var opts = map__37360__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37360__$1,cljs.core.cst$kw$value);
var term_match_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37360__$1,cljs.core.cst$kw$term_DASH_match_DASH_fn);
var multiple_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37360__$1,cljs.core.cst$kw$multiple_QMARK_);
var filter_current_out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37360__$1,cljs.core.cst$kw$filter_DASH_current_DASH_out_QMARK_);
var item__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37360__$1,cljs.core.cst$kw$item_DASH__GT_text);
var item__GT_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37360__$1,cljs.core.cst$kw$item_DASH__GT_value);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37360__$1,cljs.core.cst$kw$item_DASH__GT_key);
var min_search_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37360__$1,cljs.core.cst$kw$min_DASH_search_DASH_length);
var max_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37360__$1,cljs.core.cst$kw$max_DASH_results);
var n = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var search_QMARK_ = (function (){var or__4185__auto__ = (function (){var and__4174__auto__ = min_search_length;
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.count(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,query)) >= min_search_length);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.not(min_search_length);
}
})();
var results = komponentit.autocomplete.filter_results_SINGLEQUOTE_(n,search_QMARK_,(1),prepared_items,query,selected,opts);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$n,cljs.core.deref(n),cljs.core.cst$kw$selected,komponentit.autocomplete.limit_selection(cljs.core.deref(n),selected,cljs.core.identity,query,opts),cljs.core.cst$kw$results,results], null);
});
komponentit.autocomplete.filter_results = (function komponentit$autocomplete$filter_results(this$,opts){
var map__37362 = reagent.core.state(this$);
var map__37362__$1 = (((((!((map__37362 == null))))?(((((map__37362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37362):map__37362);
var prepared_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37362__$1,cljs.core.cst$kw$prepared_DASH_items);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37362__$1,cljs.core.cst$kw$query);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37362__$1,cljs.core.cst$kw$selected);
return komponentit.autocomplete.filter_results_top(prepared_items,query,selected,opts);
});
komponentit.autocomplete.choice_item_wrapper = (function komponentit$autocomplete$choice_item_wrapper(_){
var choice_item_el = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var choice_item_el_ref = (function (p1__37364_SHARP_){
return cljs.core.reset_BANG_(choice_item_el,p1__37364_SHARP_);
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"komponentit.autocomplete.choice_item_wrapper_class",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function komponentit$autocomplete$choice_item_wrapper_$_scroll_into_selected(this$){
var map__37365 = reagent.core.props(this$);
var map__37365__$1 = (((((!((map__37365 == null))))?(((((map__37365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37365):map__37365);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37365__$1,cljs.core.cst$kw$item);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37365__$1,cljs.core.cst$kw$selected);
var scroll_wrapper_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37365__$1,cljs.core.cst$kw$scroll_DASH_wrapper_DASH_el);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$komponentit$autocomplete_SLASH_i.cljs$core$IFn$_invoke$arity$1(item),selected)){
var and__4174__auto__ = cljs.core.deref(scroll_wrapper_el);
if(cljs.core.truth_(and__4174__auto__)){
return goog.style.scrollIntoContainerView(cljs.core.deref(choice_item_el),cljs.core.deref(scroll_wrapper_el),true);
} else {
return and__4174__auto__;
}
} else {
return null;
}
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function komponentit$autocomplete$choice_item_wrapper_$_scroll_into_selected(this$){
var map__37367 = reagent.core.props(this$);
var map__37367__$1 = (((((!((map__37367 == null))))?(((((map__37367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37367):map__37367);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37367__$1,cljs.core.cst$kw$item);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37367__$1,cljs.core.cst$kw$selected);
var scroll_wrapper_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37367__$1,cljs.core.cst$kw$scroll_DASH_wrapper_DASH_el);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$komponentit$autocomplete_SLASH_i.cljs$core$IFn$_invoke$arity$1(item),selected)){
var and__4174__auto__ = cljs.core.deref(scroll_wrapper_el);
if(cljs.core.truth_(and__4174__auto__)){
return goog.style.scrollIntoContainerView(cljs.core.deref(choice_item_el),cljs.core.deref(scroll_wrapper_el),true);
} else {
return and__4174__auto__;
}
} else {
return null;
}
}),cljs.core.cst$kw$reagent_DASH_render,(function komponentit$autocomplete$choice_item_wrapper_$_choice_item_render(p__37369){
var map__37370 = p__37369;
var map__37370__$1 = (((((!((map__37370 == null))))?(((((map__37370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37370):map__37370);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37370__$1,cljs.core.cst$kw$item);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37370__$1,cljs.core.cst$kw$selected);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37370__$1,cljs.core.cst$kw$opts);
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37370__$1,cljs.core.cst$kw$cb);
var scroll_wrapper_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37370__$1,cljs.core.cst$kw$scroll_DASH_wrapper_DASH_el);
var map__37372 = opts;
var map__37372__$1 = (((((!((map__37372 == null))))?(((((map__37372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37372):map__37372);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37372__$1,cljs.core.cst$kw$item_DASH__GT_key);
var item__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37372__$1,cljs.core.cst$kw$item_DASH__GT_text);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37372__$1,cljs.core.cst$kw$value);
var item__GT_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37372__$1,cljs.core.cst$kw$item_DASH__GT_value);
var item__GT_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37372__$1,cljs.core.cst$kw$item_DASH__GT_items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$autocomplete__item,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,(item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(item) : item__GT_key.call(null,item)),cljs.core.cst$kw$on_DASH_click,(function (___$1){
if(cljs.core.truth_(cb)){
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(item) : cb.call(null,item));
} else {
}

return null;
}),cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(item))," ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$komponentit$autocomplete_SLASH_i.cljs$core$IFn$_invoke$arity$1(item),selected))?"autocomplete__item--selected":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(item__GT_value.cljs$core$IFn$_invoke$arity$1 ? item__GT_value.cljs$core$IFn$_invoke$arity$1(item) : item__GT_value.call(null,item))))?"autocomplete__item--active":null))].join(''),cljs.core.cst$kw$ref,choice_item_el_ref], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(function (){var temp__4655__auto__ = cljs.core.cst$kw$komponentit$autocomplete_SLASH_level.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4655__auto__)){
var level = temp__4655__auto__;
return ["autocomplete__level-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)," "].join('');
} else {
return null;
}
})()], null),(function (){var or__4185__auto__ = cljs.core.cst$kw$komponentit$autocomplete_SLASH_text.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (item__GT_text.cljs$core$IFn$_invoke$arity$1 ? item__GT_text.cljs$core$IFn$_invoke$arity$1(item) : item__GT_text.call(null,item));
}
})()], null)], null)], null);
})], null));
});
komponentit.autocomplete.defaults = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$value_DASH__GT_text,cljs.core.get,cljs.core.cst$kw$item_DASH__GT_key,cljs.core.cst$kw$key,cljs.core.cst$kw$item_DASH__GT_text,cljs.core.cst$kw$value,cljs.core.cst$kw$value_DASH__GT_search,cljs.core.identity,cljs.core.cst$kw$_DASH__GT_query,komponentit.autocomplete.default__GT_query,cljs.core.cst$kw$no_DASH_results_DASH_text,"No results"], null);
komponentit.autocomplete.multiple_defaults = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(komponentit.autocomplete.defaults,cljs.core.cst$kw$multiple_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$item_DASH_removable_QMARK_,cljs.core.constantly(true)], 0));
komponentit.autocomplete.find_container = (function komponentit$autocomplete$find_container(el,p_QMARK_){
var el__$1 = el;
while(true){
if(cljs.core.truth_(el__$1)){
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(el__$1) : p_QMARK_.call(null,el__$1)))){
var rect = el__$1.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$top,rect.top,cljs.core.cst$kw$bottom,rect.bottom,cljs.core.cst$kw$left,rect.left,cljs.core.cst$kw$right,rect.right], null);
} else {
var G__37374 = el__$1.offsetParent;
el__$1 = G__37374;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$top,(0),cljs.core.cst$kw$right,window.innerWidth,cljs.core.cst$kw$bottom,window.innerHeight,cljs.core.cst$kw$left,(0)], null);
}
break;
}
});
komponentit.autocomplete.create_new_item = (function komponentit$autocomplete$create_new_item(search,selected,scroll_wrapper_el,p__37375){
var map__37376 = p__37375;
var map__37376__$1 = (((((!((map__37376 == null))))?(((((map__37376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37376):map__37376);
var opts = map__37376__$1;
var on_create = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37376__$1,cljs.core.cst$kw$on_DASH_create);
if(cljs.core.truth_((function (){var and__4174__auto__ = on_create;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.seq(search);
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autocomplete.choice_item_wrapper,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$komponentit$autocomplete_SLASH_i,komponentit.autocomplete._PLUS_create_item_index_PLUS_,cljs.core.cst$kw$komponentit$autocomplete_SLASH_text,["Add ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search),"..."].join('')], null),cljs.core.cst$kw$cb,(function (_){
return (on_create.cljs$core$IFn$_invoke$arity$1 ? on_create.cljs$core$IFn$_invoke$arity$1(search) : on_create.call(null,search));
}),cljs.core.cst$kw$selected,selected,cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$scroll_DASH_wrapper_DASH_el,scroll_wrapper_el], null)], null);
} else {
return null;
}
});
komponentit.autocomplete.autocomplete_contents_list = (function komponentit$autocomplete$autocomplete_contents_list(this$,results,selected,scroll_wrapper_el,p__37378){
var map__37379 = p__37378;
var map__37379__$1 = (((((!((map__37379 == null))))?(((((map__37379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37379):map__37379);
var opts = map__37379__$1;
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379__$1,cljs.core.cst$kw$item_DASH__GT_key);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var iter__4582__auto__ = (function komponentit$autocomplete$autocomplete_contents_list_$_iter__37381(s__37382){
return (new cljs.core.LazySeq(null,(function (){
var s__37382__$1 = s__37382;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__37382__$1);
if(temp__4657__auto__){
var s__37382__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37382__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37382__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37384 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37383 = (0);
while(true){
if((i__37383 < size__4581__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37383);
cljs.core.chunk_append(b__37384,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autocomplete.choice_item_wrapper,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$item,item,cljs.core.cst$kw$selected,selected,cljs.core.cst$kw$cb,((function (i__37383,item,c__4580__auto__,size__4581__auto__,b__37384,s__37382__$2,temp__4657__auto__,map__37379,map__37379__$1,opts,item__GT_key){
return (function (){
return komponentit.autocomplete.select_value(opts,this$,item);
});})(i__37383,item,c__4580__auto__,size__4581__auto__,b__37384,s__37382__$2,temp__4657__auto__,map__37379,map__37379__$1,opts,item__GT_key))
,cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$scroll_DASH_wrapper_DASH_el,scroll_wrapper_el], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(item) : item__GT_key.call(null,item))], null)));

var G__37385 = (i__37383 + (1));
i__37383 = G__37385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37384),komponentit$autocomplete$autocomplete_contents_list_$_iter__37381(cljs.core.chunk_rest(s__37382__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37384),null);
}
} else {
var item = cljs.core.first(s__37382__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autocomplete.choice_item_wrapper,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$item,item,cljs.core.cst$kw$selected,selected,cljs.core.cst$kw$cb,((function (item,s__37382__$2,temp__4657__auto__,map__37379,map__37379__$1,opts,item__GT_key){
return (function (){
return komponentit.autocomplete.select_value(opts,this$,item);
});})(item,s__37382__$2,temp__4657__auto__,map__37379,map__37379__$1,opts,item__GT_key))
,cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$scroll_DASH_wrapper_DASH_el,scroll_wrapper_el], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(item__GT_key.cljs$core$IFn$_invoke$arity$1 ? item__GT_key.cljs$core$IFn$_invoke$arity$1(item) : item__GT_key.call(null,item))], null)),komponentit$autocomplete$autocomplete_contents_list_$_iter__37381(cljs.core.rest(s__37382__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(results);
})()], null);
});
komponentit.autocomplete.autocomplete_contents_top = (function komponentit$autocomplete$autocomplete_contents_top(this$,results,selected,scroll_wrapper_el,p__37386){
var map__37387 = p__37386;
var map__37387__$1 = (((((!((map__37387 == null))))?(((((map__37387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37387):map__37387);
var opts = map__37387__$1;
var on_create = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37387__$1,cljs.core.cst$kw$on_DASH_create);
var no_results_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37387__$1,cljs.core.cst$kw$no_DASH_results_DASH_text);
if(cljs.core.seq(results)){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autocomplete.autocomplete_contents_list,this$,results,selected,scroll_wrapper_el,opts], null);
} else {
if(cljs.core.not(on_create)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$autocomplete__no_DASH_results,no_results_text], null);
} else {
return null;
}
}
});
komponentit.autocomplete.autocomplete_contents_wrapper = (function komponentit$autocomplete$autocomplete_contents_wrapper(parent,_,container_state,___$1,___$2,___$3,___$4){
var top_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var right_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var scroll_wrapper_el = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var scroll_wrapper_el_ref = (function (p1__37389_SHARP_){
return cljs.core.reset_BANG_(scroll_wrapper_el,p1__37389_SHARP_);
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"komponentit.autocomplete.autocomplete_contents_wrapper_class",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
var el = reagent.dom.dom_node(this$);
var rect = el.getBoundingClientRect();
var height = el.offsetHeight;
var top = rect.top;
var y_container = komponentit.autocomplete.find_container(el,(function (el__$1){
var style = window.getComputedStyle(el__$1);
var G__37391 = (function (){var or__4185__auto__ = style.getPropertyValue("overflow-y");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return style.getPropertyValue("overflow");
}
})();
var fexpr__37390 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["scroll",null,"hidden",null], null), null);
return (fexpr__37390.cljs$core$IFn$_invoke$arity$1 ? fexpr__37390.cljs$core$IFn$_invoke$arity$1(G__37391) : fexpr__37390.call(null,G__37391));
}));
var left = rect.left;
var width = el.offsetWidth;
var x_container = komponentit.autocomplete.find_container(el,(function (el__$1){
var style = window.getComputedStyle(el__$1);
var G__37393 = (function (){var or__4185__auto__ = style.getPropertyValue("overflow-x");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return style.getPropertyValue("overflow");
}
})();
var fexpr__37392 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["scroll",null,"hidden",null], null), null);
return (fexpr__37392.cljs$core$IFn$_invoke$arity$1 ? fexpr__37392.cljs$core$IFn$_invoke$arity$1(G__37393) : fexpr__37392.call(null,G__37393));
}));
cljs.core.reset_BANG_(top_QMARK_,((((top + height) > cljs.core.cst$kw$bottom.cljs$core$IFn$_invoke$arity$1(y_container))) && ((((top - cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(container_state)) - height) > cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(y_container)))));

return cljs.core.reset_BANG_(right_QMARK_,((((left + width) < cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(x_container))) && ((((left - cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(container_state)) - height) > cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(x_container)))));
}),cljs.core.cst$kw$reagent_DASH_render,(function (this$,results,container_state__$1,selected,search,p__37394){
var map__37395 = p__37394;
var map__37395__$1 = (((((!((map__37395 == null))))?(((((map__37395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37395):map__37395);
var opts = map__37395__$1;
var on_create = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37395__$1,cljs.core.cst$kw$on_DASH_create);
var multiple_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37395__$1,cljs.core.cst$kw$multiple_QMARK_);
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37395__$1,cljs.core.cst$kw$groups);
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37395__$1,cljs.core.cst$kw$item_DASH__GT_key);
var no_results_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37395__$1,cljs.core.cst$kw$no_DASH_results_DASH_text);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.mixins.window_event_listener,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (e){
if((!(goog.dom.contains(reagent.dom.dom_node(parent),e.target)))){
return komponentit.autocomplete.close(this$,opts);
} else {
return null;
}
}),cljs.core.cst$kw$on_DASH_key_DASH_down,(function (e){
var G__37397 = e.keyCode;
switch (G__37397) {
case (27):
return komponentit.autocomplete.close(this$,opts);

break;
default:
return null;

}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$autocomplete__dropdown,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[(cljs.core.truth_(cljs.core.deref(top_QMARK_))?"autocomplete__dropdown--above ":null),(cljs.core.truth_(cljs.core.deref(right_QMARK_))?"autocomplete__dropdown--left ":null)].join(''),cljs.core.cst$kw$style,(cljs.core.truth_(cljs.core.deref(top_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bottom,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(container_state__$1)),"px"].join('')], null):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$autocomplete__dropdown_DASH_content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,scroll_wrapper_el_ref], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autocomplete.create_new_item,search,selected,scroll_wrapper_el,opts], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autocomplete.autocomplete_contents_top,this$,results,selected,scroll_wrapper_el,opts], null)], null)], null)], null);
})], null));
});
/**
 * Save the container dimensions to component state.
 *   Container contains the input and dropdown.
 */
komponentit.autocomplete.update_el_dimensions = (function komponentit$autocomplete$update_el_dimensions(this$){
var el = reagent.dom.dom_node(this$);
return reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,el.offsetWidth,cljs.core.cst$kw$height,el.offsetHeight], null));
});
/**
 * Focus the input element if autocomplete is open.
 */
komponentit.autocomplete.focus_input = (function komponentit$autocomplete$focus_input(this$){
if(cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(reagent.core.state(this$)))){
var G__37399 = this$;
var G__37399__$1 = (((G__37399 == null))?null:reagent.dom.dom_node(G__37399));
var G__37399__$2 = (((G__37399__$1 == null))?null:G__37399__$1.getElementsByTagName("input"));
var G__37399__$3 = (((G__37399__$2 == null))?null:G__37399__$2.item((0)));
if((G__37399__$3 == null)){
return null;
} else {
return G__37399__$3.focus();
}
} else {
return null;
}
});
komponentit.autocomplete.initial_state = (function komponentit$autocomplete$initial_state(p__37400,defaults,this$){
var map__37401 = p__37400;
var map__37401__$1 = (((((!((map__37401 == null))))?(((((map__37401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37401):map__37401);
var opts = map__37401__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37401__$1,cljs.core.cst$kw$items);
var prepared_items = (cljs.core.truth_(items)?komponentit.autocomplete.prepare_items(items,opts):null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$selected,cljs.core.cst$kw$prepared_DASH_items,cljs.core.cst$kw$width,cljs.core.cst$kw$search,cljs.core.cst$kw$open_QMARK_,cljs.core.cst$kw$timeout,cljs.core.cst$kw$items,cljs.core.cst$kw$query,cljs.core.cst$kw$height],[(0),prepared_items,null,null,false,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),(function (){var or__4185__auto__ = items;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})(),null,null]),komponentit.autocomplete.filter_results_top(prepared_items,null,(0),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,opts], 0)))], 0));
});
komponentit.autocomplete.will_receive_props = (function komponentit$autocomplete$will_receive_props(this$,p__37403){
var vec__37404 = p__37403;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37404,(0),null);
var map__37407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37404,(1),null);
var map__37407__$1 = (((((!((map__37407 == null))))?(((((map__37407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37407):map__37407);
var opts = map__37407__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37407__$1,cljs.core.cst$kw$items);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37407__$1,cljs.core.cst$kw$query);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)),items)){
return null;
} else {
reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$items,items], null));

reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prepared_DASH_items,komponentit.autocomplete.prepare_items(items,opts)], null));

return komponentit.autocomplete.reset_search(this$,opts);
}
});
komponentit.autocomplete.did_update = (function komponentit$autocomplete$did_update(this$,old_argv){
komponentit.autocomplete.update_el_dimensions(this$);

return komponentit.autocomplete.focus_input(this$);
});
komponentit.autocomplete.did_mount = (function komponentit$autocomplete$did_mount(opts,this$){
komponentit.autocomplete.update_el_dimensions(this$);

return komponentit.autocomplete.focus_input(this$);
});
komponentit.autocomplete.build_options = (function komponentit$autocomplete$build_options(opts,defaults,this$){
if(cljs.core.truth_(cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(opts))){
console.warn("komponentit.autocomplete/autocomplete :cb options is deprecated, use :on-change instead.");
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$create.cljs$core$IFn$_invoke$arity$1(opts))){
console.warn("komponentit.autocomplete/autocomplete :create options is deprecated, use :on-create instead.");
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$remove_DASH_cb.cljs$core$IFn$_invoke$arity$1(opts))){
console.warn("komponentit.autocomplete/autocomplete :remove-cb options is deprecated, use :on-remove instead.");
} else {
}

var map__37409 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,opts], 0));
var map__37409__$1 = (((((!((map__37409 == null))))?(((((map__37409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37409):map__37409);
var opts__$1 = map__37409__$1;
var item__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409__$1,cljs.core.cst$kw$item_DASH__GT_key);
var item__GT_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409__$1,cljs.core.cst$kw$item_DASH__GT_value);
var opts__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$item_DASH__GT_value,item__GT_key,cljs.core.cst$kw$term_DASH_match_DASH_fn,(cljs.core.truth_(cljs.core.cst$kw$search_DASH_fields.cljs$core$IFn$_invoke$arity$1(opts__$1))?komponentit.autocomplete.create_matcher_STAR_(cljs.core.cst$kw$search_DASH_fields.cljs$core$IFn$_invoke$arity$1(opts__$1)):null),cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.cst$kw$on_DASH_create,cljs.core.cst$kw$create.cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.cst$kw$on_DASH_remove,cljs.core.cst$kw$remove_DASH_cb.cljs$core$IFn$_invoke$arity$1(opts__$1)], null),opts__$1], 0));
return opts__$2;
});
komponentit.autocomplete.autocomplete_input = (function komponentit$autocomplete$autocomplete_input(opts,text,this$){
var map__37411 = opts;
var map__37411__$1 = (((((!((map__37411 == null))))?(((((map__37411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37411):map__37411);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37411__$1,cljs.core.cst$kw$placeholder);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37411__$1,cljs.core.cst$kw$disabled);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37411__$1,cljs.core.cst$kw$on_DASH_blur);
var auto_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37411__$1,cljs.core.cst$kw$auto_DASH_focus);
var map__37412 = reagent.core.state(this$);
var map__37412__$1 = (((((!((map__37412 == null))))?(((((map__37412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37412):map__37412);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37412__$1,cljs.core.cst$kw$open_QMARK_);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37412__$1,cljs.core.cst$kw$search);
var initial_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37412__$1,cljs.core.cst$kw$initial_DASH_search);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.input,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$auto_DASH_complete,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$disabled,cljs.core.cst$kw$on_DASH_focus,cljs.core.cst$kw$value,cljs.core.cst$kw$on_DASH_blur,cljs.core.cst$kw$type,cljs.core.cst$kw$class,cljs.core.cst$kw$auto_DASH_focus,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$on_DASH_key_DASH_down],["off",placeholder,disabled,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(komponentit.autocomplete.focus,this$,search,text),(cljs.core.truth_(open_QMARK_)?(cljs.core.truth_(initial_search)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(initial_search):cljs.core.str.cljs$core$IFn$_invoke$arity$1(search)):text),(function (e){
komponentit.autocomplete.blur(this$,opts,e);

if(cljs.core.truth_(on_blur)){
return (on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(e) : on_blur.call(null,e));
} else {
return null;
}
}),"text","autocomplete__input",auto_focus,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(komponentit.autocomplete.call_on_change,this$,opts),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(komponentit.autocomplete.key_down,this$,text,opts)])], null);
});
komponentit.autocomplete.selected_items = (function komponentit$autocomplete$selected_items(opts,this$){
var map__37415 = opts;
var map__37415__$1 = (((((!((map__37415 == null))))?(((((map__37415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37415):map__37415);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37415__$1,cljs.core.cst$kw$value);
var item_removable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37415__$1,cljs.core.cst$kw$item_DASH_removable_QMARK_);
var value__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37415__$1,cljs.core.cst$kw$value_DASH__GT_text);
var map__37416 = reagent.core.state(this$);
var map__37416__$1 = (((((!((map__37416 == null))))?(((((map__37416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37416):map__37416);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37416__$1,cljs.core.cst$kw$items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$autocomplete__selected_DASH_items,(function (){var iter__4582__auto__ = (function komponentit$autocomplete$selected_items_$_iter__37419(s__37420){
return (new cljs.core.LazySeq(null,(function (){
var s__37420__$1 = s__37420;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__37420__$1);
if(temp__4657__auto__){
var s__37420__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37420__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37420__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37422 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37421 = (0);
while(true){
if((i__37421 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37421);
cljs.core.chunk_append(b__37422,(function (){var removable_QMARK_ = (item_removable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? item_removable_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : item_removable_QMARK_.call(null,x));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$autocomplete__selected_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$autocomplete__item_DASH_text,(value__GT_text.cljs$core$IFn$_invoke$arity$2 ? value__GT_text.cljs$core$IFn$_invoke$arity$2(items,x) : value__GT_text.call(null,items,x))], null),(cljs.core.truth_(removable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$autocomplete__remove_DASH_item_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__37421,removable_QMARK_,x,c__4580__auto__,size__4581__auto__,b__37422,s__37420__$2,temp__4657__auto__,map__37415,map__37415__$1,value,item_removable_QMARK_,value__GT_text,map__37416,map__37416__$1,items){
return (function (e){
komponentit.autocomplete.call_on_remove(opts,this$,x);

return null;
});})(i__37421,removable_QMARK_,x,c__4580__auto__,size__4581__auto__,b__37422,s__37420__$2,temp__4657__auto__,map__37415,map__37415__$1,value,item_removable_QMARK_,value__GT_text,map__37416,map__37416__$1,items))
], null),"\u00D7"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null));
})());

var G__37423 = (i__37421 + (1));
i__37421 = G__37423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37422),komponentit$autocomplete$selected_items_$_iter__37419(cljs.core.chunk_rest(s__37420__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37422),null);
}
} else {
var x = cljs.core.first(s__37420__$2);
return cljs.core.cons((function (){var removable_QMARK_ = (item_removable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? item_removable_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : item_removable_QMARK_.call(null,x));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$autocomplete__selected_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$autocomplete__item_DASH_text,(value__GT_text.cljs$core$IFn$_invoke$arity$2 ? value__GT_text.cljs$core$IFn$_invoke$arity$2(items,x) : value__GT_text.call(null,items,x))], null),(cljs.core.truth_(removable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$autocomplete__remove_DASH_item_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (removable_QMARK_,x,s__37420__$2,temp__4657__auto__,map__37415,map__37415__$1,value,item_removable_QMARK_,value__GT_text,map__37416,map__37416__$1,items){
return (function (e){
komponentit.autocomplete.call_on_remove(opts,this$,x);

return null;
});})(removable_QMARK_,x,s__37420__$2,temp__4657__auto__,map__37415,map__37415__$1,value,item_removable_QMARK_,value__GT_text,map__37416,map__37416__$1,items))
], null),"\u00D7"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null));
})(),komponentit$autocomplete$selected_items_$_iter__37419(cljs.core.rest(s__37420__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
});
komponentit.autocomplete.autocomplete_clear = (function komponentit$autocomplete$autocomplete_clear(this$,p__37424){
var map__37425 = p__37424;
var map__37425__$1 = (((((!((map__37425 == null))))?(((((map__37425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37425):map__37425);
var opts = map__37425__$1;
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37425__$1,cljs.core.cst$kw$disabled);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37425__$1,cljs.core.cst$kw$value);
if(cljs.core.truth_(((cljs.core.coll_QMARK_(value))?cljs.core.seq(value):value))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$autocomplete__clear_DASH_button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$disabled,disabled,cljs.core.cst$kw$on_DASH_click,(function (e){
komponentit.autocomplete.call_clear(opts,this$);

komponentit.autocomplete.focus_input(this$);

e.stopPropagation();

return e.preventDefault();
})], null)], null);
} else {
return null;
}
});
/**
 * :value - (required) IDeref or value
 * :on-change - (required) Function [item]
 * :on-blur - Input :on-blur
 * :on-create - Create a new item. Function [value]
 * :items
 * :max-results
 * :value->search
 * :value->text
 * :item->key
 * :item->value
 * :item-removable? - predicate function to determine if item is removable
 * :term-match-fn
 * :search-fields
 * :min-search-length - Required number of characters in search string before results are filtered.
 * :->query
 * :groups
 * :filter-current-out?
 * :debounce-timeout
 * 
 * Localization
 * :placeholder
 * :no-results-text
 * 
 * Style
 * :ctrl-class
 * :disabled
 */
komponentit.autocomplete.autocomplete = (function komponentit$autocomplete$autocomplete(opts){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$display_DASH_name,"komponentit.autocomplete.autocomplete_class",cljs.core.cst$kw$get_DASH_initial_DASH_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(komponentit.autocomplete.initial_state,opts,komponentit.autocomplete.defaults),cljs.core.cst$kw$component_DASH_will_DASH_receive_DASH_props,komponentit.autocomplete.will_receive_props,cljs.core.cst$kw$component_DASH_did_DASH_update,komponentit.autocomplete.did_update,cljs.core.cst$kw$component_DASH_did_DASH_mount,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(komponentit.autocomplete.did_mount,opts),cljs.core.cst$kw$render,(function (this$){
var opts__$1 = reagent.core.props(this$);
var map__37427 = reagent.core.state(this$);
var map__37427__$1 = (((((!((map__37427 == null))))?(((((map__37427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37427):map__37427);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37427__$1,cljs.core.cst$kw$items);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37427__$1,cljs.core.cst$kw$open_QMARK_);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37427__$1,cljs.core.cst$kw$results);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37427__$1,cljs.core.cst$kw$search);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37427__$1,cljs.core.cst$kw$selected);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37427__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37427__$1,cljs.core.cst$kw$height);
var map__37428 = komponentit.autocomplete.build_options(opts__$1,komponentit.autocomplete.defaults,this$);
var map__37428__$1 = (((((!((map__37428 == null))))?(((((map__37428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37428):map__37428);
var opts__$2 = map__37428__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37428__$1,cljs.core.cst$kw$value);
var value__GT_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37428__$1,cljs.core.cst$kw$value_DASH__GT_text);
var control_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37428__$1,cljs.core.cst$kw$control_DASH_class);
var container_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37428__$1,cljs.core.cst$kw$container_DASH_class);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37428__$1,cljs.core.cst$kw$disabled);
var text = (value__GT_text.cljs$core$IFn$_invoke$arity$2 ? value__GT_text.cljs$core$IFn$_invoke$arity$2(items,value) : value__GT_text.call(null,items,value));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$autocomplete$autocomplete_DASH__DASH_single,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,container_class], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$autocomplete__control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(control_class)," ",(cljs.core.truth_(open_QMARK_)?"autocomplete__control--open ":null),(cljs.core.truth_(disabled)?"autocomplete__control--disabled ":null),(cljs.core.truth_(value)?"autocomplete__control--value ":null)].join(''),cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(komponentit.autocomplete.click,this$)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autocomplete.autocomplete_input,opts__$2,text,this$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autocomplete.autocomplete_clear,this$,opts__$2], null)], null),(cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autocomplete.autocomplete_contents_wrapper,this$,results,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height], null),selected,search,opts__$2], null):null)], null);
})], null));
});
/**
 * :value - (required) IDeref or value
 * :on-change - (required) Function [item]
 * :on-remove - Called when item is removed [value]
 * :on-blur - Input :on-blur. Might be useful for form pristine handling.
 * :items
 * :max-results
 * :value->search
 * :value->text
 * :item->key
 * :item->value
 * :item-removable? - predicate function to determine if item is non-removable
 * :term-match-fn
 * :search-fields
 * :min-search-length - Required number of characters in search string before results are filtered.
 * :->query
 * :groups
 * :filter-current-out?
 * :debounce-timeout
 * 
 * Localization
 * :placeholder
 * :no-results-text
 * 
 * Style
 * :ctrl-class
 * :disabled
 */
komponentit.autocomplete.multiple_autocomplete = (function komponentit$autocomplete$multiple_autocomplete(opts){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$display_DASH_name,"komponentit.autocomplete.multiple_autocomplete_class",cljs.core.cst$kw$get_DASH_initial_DASH_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(komponentit.autocomplete.initial_state,opts,komponentit.autocomplete.multiple_defaults),cljs.core.cst$kw$component_DASH_will_DASH_receive_DASH_props,komponentit.autocomplete.will_receive_props,cljs.core.cst$kw$component_DASH_did_DASH_update,komponentit.autocomplete.did_update,cljs.core.cst$kw$component_DASH_did_DASH_mount,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(komponentit.autocomplete.did_mount,opts),cljs.core.cst$kw$render,(function (this$){
var opts__$1 = reagent.core.props(this$);
var map__37431 = reagent.core.state(this$);
var map__37431__$1 = (((((!((map__37431 == null))))?(((((map__37431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37431):map__37431);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,cljs.core.cst$kw$open_QMARK_);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,cljs.core.cst$kw$results);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,cljs.core.cst$kw$search);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,cljs.core.cst$kw$selected);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,cljs.core.cst$kw$height);
var map__37432 = komponentit.autocomplete.build_options(opts__$1,komponentit.autocomplete.multiple_defaults,this$);
var map__37432__$1 = (((((!((map__37432 == null))))?(((((map__37432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37432):map__37432);
var opts__$2 = map__37432__$1;
var control_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37432__$1,cljs.core.cst$kw$control_DASH_class);
var container_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37432__$1,cljs.core.cst$kw$container_DASH_class);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37432__$1,cljs.core.cst$kw$disabled);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37432__$1,cljs.core.cst$kw$value);
var text = "";
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$autocomplete,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,container_class], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$autocomplete__control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(control_class)," ",(cljs.core.truth_(open_QMARK_)?"autocomplete__control--open ":null),(cljs.core.truth_(disabled)?"autocomplete__control--disabled ":null),(cljs.core.truth_(value)?"autocomplete__control__value ":null)].join(''),cljs.core.cst$kw$on_DASH_click,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(komponentit.autocomplete.click,this$)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autocomplete.selected_items,opts__$2,this$], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autocomplete.autocomplete_input,opts__$2,text,this$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autocomplete.autocomplete_clear,opts__$2], null)], null),(cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autocomplete.autocomplete_contents_wrapper,this$,results,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height], null),selected,search,opts__$2], null):null)], null);
})], null));
});
