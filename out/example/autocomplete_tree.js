// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.autocomplete_tree');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('komponentit.autocomplete');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('clojure.string');
goog.require('cljs.test');
example.autocomplete_tree.tree_data = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Foo",cljs.core.cst$kw$selectable_QMARK_,false,cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$name,"Bar",cljs.core.cst$kw$selectable_QMARK_,false,cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$name,"System Module",cljs.core.cst$kw$price,(1380)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(4),cljs.core.cst$kw$name,"ABC",cljs.core.cst$kw$price,(1340)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(5),cljs.core.cst$kw$name,"Ooooo",cljs.core.cst$kw$selectable_QMARK_,false,cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(6),cljs.core.cst$kw$name,"asdasd",cljs.core.cst$kw$price,(9000)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(7),cljs.core.cst$kw$name,"Bar",cljs.core.cst$kw$selectable_QMARK_,false,cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(8),cljs.core.cst$kw$name,"A",cljs.core.cst$kw$selectable_QMARK_,false,cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(9),cljs.core.cst$kw$name,"Foo",cljs.core.cst$kw$price,(50000)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(10),cljs.core.cst$kw$name,"Lorem ipsum",cljs.core.cst$kw$price,(90)], null)], null);
example.autocomplete_tree.tree_items_by_id = (function example$autocomplete_tree$tree_items_by_id(by_id,items,path){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (by_id__$1,item){
var item__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$path,path);
var G__38108 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(by_id__$1,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item__$1),item__$1);
var G__38109 = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(item__$1);
var G__38110 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item__$1));
return (example.autocomplete_tree.tree_items_by_id.cljs$core$IFn$_invoke$arity$3 ? example.autocomplete_tree.tree_items_by_id.cljs$core$IFn$_invoke$arity$3(G__38108,G__38109,G__38110) : example.autocomplete_tree.tree_items_by_id.call(null,G__38108,G__38109,G__38110));
}),by_id,items);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$autocomplete_tree,cljs.core.cst$kw$tree_DASH_autocomplete], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"tree-autocomplete",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.autocomplete_tree !== 'undefined') && (typeof example.autocomplete_tree.t_example$autocomplete_tree38111 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.autocomplete_tree.t_example$autocomplete_tree38111 = (function (meta38112){
this.meta38112 = meta38112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.autocomplete_tree.t_example$autocomplete_tree38111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38113,meta38112__$1){
var self__ = this;
var _38113__$1 = this;
return (new example.autocomplete_tree.t_example$autocomplete_tree38111(meta38112__$1));
}));

(example.autocomplete_tree.t_example$autocomplete_tree38111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38113){
var self__ = this;
var _38113__$1 = this;
return self__.meta38112;
}));

(example.autocomplete_tree.t_example$autocomplete_tree38111.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.autocomplete_tree.t_example$autocomplete_tree38111.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autocomplete.autocomplete,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$cb,cljs.core.cst$kw$item_DASH__GT_text,cljs.core.cst$kw$search_DASH_fields,cljs.core.cst$kw$item_DASH__GT_key,cljs.core.cst$kw$value,cljs.core.cst$kw$item_DASH__GT_items,cljs.core.cst$kw$value_DASH__GT_text,cljs.core.cst$kw$debounce_DASH_timeout,cljs.core.cst$kw$items],[(function (item){
return cljs.core.reset_BANG_(value,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item));
}),(function (item){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$komponentit$autocomplete_SLASH_i.cljs$core$IFn$_invoke$arity$1(item))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item)),")"].join('');
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name], null),cljs.core.cst$kw$id,cljs.core.deref(value),cljs.core.cst$kw$items,(function (items,id){
if(cljs.core.truth_(id)){
var items_by_id = example.autocomplete_tree.tree_items_by_id(cljs.core.PersistentArrayMap.EMPTY,items,cljs.core.PersistentVector.EMPTY);
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_by_id,id);
if(cljs.core.truth_(temp__4655__auto__)){
var map__38114 = temp__4655__auto__;
var map__38114__$1 = (((((!((map__38114 == null))))?(((((map__38114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38114):map__38114);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38114__$1,cljs.core.cst$kw$id);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38114__$1,cljs.core.cst$kw$name);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38114__$1,cljs.core.cst$kw$path);
var path__$1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" > ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,items_by_id),path));
return [((cljs.core.seq(path__$1))?[path__$1," > "].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id__$1),")"].join('');
} else {
return ["Unknown item, ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
}
} else {
return null;
}
}),(250),example.autocomplete_tree.tree_data])], null);
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

(example.autocomplete_tree.t_example$autocomplete_tree38111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta38112], null);
}));

(example.autocomplete_tree.t_example$autocomplete_tree38111.cljs$lang$type = true);

(example.autocomplete_tree.t_example$autocomplete_tree38111.cljs$lang$ctorStr = "example.autocomplete-tree/t_example$autocomplete_tree38111");

(example.autocomplete_tree.t_example$autocomplete_tree38111.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.autocomplete-tree/t_example$autocomplete_tree38111");
}));

/**
 * Positional factory function for example.autocomplete-tree/t_example$autocomplete_tree38111.
 */
example.autocomplete_tree.__GT_t_example$autocomplete_tree38111 = (function example$autocomplete_tree$__GT_t_example$autocomplete_tree38111(meta38112){
return (new example.autocomplete_tree.t_example$autocomplete_tree38111(meta38112));
});

}

return (new example.autocomplete_tree.t_example$autocomplete_tree38111(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
example.autocomplete_tree.create_tree = (function example$autocomplete_tree$create_tree(index,n,depth){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.inc);
var item = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$name,["Option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null);
if((depth > (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$items,(function (){var G__38116 = index;
var G__38117 = ((n - (2)) / (2));
var G__38118 = (depth - (1));
return (example.autocomplete_tree.create_tree.cljs$core$IFn$_invoke$arity$3 ? example.autocomplete_tree.create_tree.cljs$core$IFn$_invoke$arity$3(G__38116,G__38117,G__38118) : example.autocomplete_tree.create_tree.call(null,G__38116,G__38117,G__38118));
})());
} else {
return item;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((((depth > (0)))?(2):n))));
});
example.autocomplete_tree.tree_data_large = example.autocomplete_tree.create_tree(cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),(1000),(4));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$autocomplete_tree,cljs.core.cst$kw$tree_DASH_autocomplete_DASH_lots_DASH_of_DASH_items], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"tree-autocomplete-lots-of-items",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.autocomplete_tree !== 'undefined') && (typeof example.autocomplete_tree.t_example$autocomplete_tree38119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.autocomplete_tree.t_example$autocomplete_tree38119 = (function (meta38120){
this.meta38120 = meta38120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.autocomplete_tree.t_example$autocomplete_tree38119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38121,meta38120__$1){
var self__ = this;
var _38121__$1 = this;
return (new example.autocomplete_tree.t_example$autocomplete_tree38119(meta38120__$1));
}));

(example.autocomplete_tree.t_example$autocomplete_tree38119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38121){
var self__ = this;
var _38121__$1 = this;
return self__.meta38120;
}));

(example.autocomplete_tree.t_example$autocomplete_tree38119.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.autocomplete_tree.t_example$autocomplete_tree38119.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (value,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autocomplete.autocomplete,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$cb,cljs.core.cst$kw$item_DASH__GT_text,cljs.core.cst$kw$search_DASH_fields,cljs.core.cst$kw$item_DASH__GT_key,cljs.core.cst$kw$value,cljs.core.cst$kw$item_DASH__GT_items,cljs.core.cst$kw$value_DASH__GT_text,cljs.core.cst$kw$debounce_DASH_timeout,cljs.core.cst$kw$items],[(function (item){
return cljs.core.reset_BANG_(value,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item));
}),(function (item){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$komponentit$autocomplete_SLASH_i.cljs$core$IFn$_invoke$arity$1(item))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item)),")"].join('');
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name], null),cljs.core.cst$kw$id,cljs.core.deref(value),cljs.core.cst$kw$items,(function (items,id){
if(cljs.core.truth_(id)){
var items_by_id = example.autocomplete_tree.tree_items_by_id(cljs.core.PersistentArrayMap.EMPTY,items,cljs.core.PersistentVector.EMPTY);
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_by_id,id);
if(cljs.core.truth_(temp__4655__auto__)){
var map__38122 = temp__4655__auto__;
var map__38122__$1 = (((((!((map__38122 == null))))?(((((map__38122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38122):map__38122);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38122__$1,cljs.core.cst$kw$id);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38122__$1,cljs.core.cst$kw$name);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38122__$1,cljs.core.cst$kw$path);
var path__$1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" > ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,items_by_id),path));
return [((cljs.core.seq(path__$1))?[path__$1," > "].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id__$1),")"].join('');
} else {
return ["Unknown item, ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
}
} else {
return null;
}
}),(250),example.autocomplete_tree.tree_data_large])], null);
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

(example.autocomplete_tree.t_example$autocomplete_tree38119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta38120], null);
}));

(example.autocomplete_tree.t_example$autocomplete_tree38119.cljs$lang$type = true);

(example.autocomplete_tree.t_example$autocomplete_tree38119.cljs$lang$ctorStr = "example.autocomplete-tree/t_example$autocomplete_tree38119");

(example.autocomplete_tree.t_example$autocomplete_tree38119.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.autocomplete-tree/t_example$autocomplete_tree38119");
}));

/**
 * Positional factory function for example.autocomplete-tree/t_example$autocomplete_tree38119.
 */
example.autocomplete_tree.__GT_t_example$autocomplete_tree38119 = (function example$autocomplete_tree$__GT_t_example$autocomplete_tree38119(meta38120){
return (new example.autocomplete_tree.t_example$autocomplete_tree38119(meta38120));
});

}

return (new example.autocomplete_tree.t_example$autocomplete_tree38119(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$autocomplete_tree,cljs.core.cst$kw$sub_DASH_query_DASH_match_QMARK__DASH_test], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"sub-query-match?-test",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
var match_fn = komponentit.autocomplete.create_matcher_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name], null));
try{var values__35734__auto__ = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null)], null),(new cljs.core.List(null,komponentit.autocomplete.sub_query_match_QMARK_(match_fn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"foo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null)),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null)], null),cljs.core.list(cljs.core.cst$sym$autocomplete_SLASH_sub_DASH_query_DASH_match_QMARK_,cljs.core.cst$sym$match_DASH_fn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"foo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null)], null),cljs.core.list(cljs.core.cst$sym$autocomplete_SLASH_sub_DASH_query_DASH_match_QMARK_,cljs.core.cst$sym$match_DASH_fn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"foo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e38124){var t__35779__auto__ = e38124;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null)], null),cljs.core.list(cljs.core.cst$sym$autocomplete_SLASH_sub_DASH_query_DASH_match_QMARK_,cljs.core.cst$sym$match_DASH_fn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"foo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null))),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}})], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

example.autocomplete_tree.sub_query_match_QMARK__test = (function example$autocomplete_tree$sub_query_match_QMARK__test(){
return cljs.test.test_var(example.autocomplete_tree.sub_query_match_QMARK__test.cljs$lang$var);
});
example.autocomplete_tree.sub_query_match_QMARK__test.cljs$lang$test = (function (){
var match_fn = komponentit.autocomplete.create_matcher_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name], null));
try{var values__35734__auto__ = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null)], null),(new cljs.core.List(null,komponentit.autocomplete.sub_query_match_QMARK_(match_fn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"foo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null)),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null)], null),cljs.core.list(cljs.core.cst$sym$autocomplete_SLASH_sub_DASH_query_DASH_match_QMARK_,cljs.core.cst$sym$match_DASH_fn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"foo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null)], null),cljs.core.list(cljs.core.cst$sym$autocomplete_SLASH_sub_DASH_query_DASH_match_QMARK_,cljs.core.cst$sym$match_DASH_fn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"foo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e38125){var t__35779__auto__ = e38125;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null)], null),cljs.core.list(cljs.core.cst$sym$autocomplete_SLASH_sub_DASH_query_DASH_match_QMARK_,cljs.core.cst$sym$match_DASH_fn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"foo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null))),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}});

(example.autocomplete_tree.sub_query_match_QMARK__test.cljs$lang$var = new cljs.core.Var(function(){return example.autocomplete_tree.sub_query_match_QMARK__test;},cljs.core.cst$sym$example$autocomplete_DASH_tree_SLASH_sub_DASH_query_DASH_match_QMARK__DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$example$autocomplete_DASH_tree,cljs.core.cst$sym$sub_DASH_query_DASH_match_QMARK__DASH_test,"/home/juho/Source/komponentit/example-src/cljs/example/autocomplete_tree.cljs",34,1,113,113,cljs.core.List.EMPTY,null,(cljs.core.truth_(example.autocomplete_tree.sub_query_match_QMARK__test)?example.autocomplete_tree.sub_query_match_QMARK__test.cljs$lang$test:null)])));
