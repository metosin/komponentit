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
var G__32612 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(by_id__$1,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item__$1),item__$1);
var G__32613 = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(item__$1);
var G__32614 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item__$1));
return (example.autocomplete_tree.tree_items_by_id.cljs$core$IFn$_invoke$arity$3 ? example.autocomplete_tree.tree_items_by_id.cljs$core$IFn$_invoke$arity$3(G__32612,G__32613,G__32614) : example.autocomplete_tree.tree_items_by_id.call(null,G__32612,G__32613,G__32614));
}),by_id,items);
});
example.autocomplete_tree.create_tree = (function example$autocomplete_tree$create_tree(index,n,depth){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.inc);
var item = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$name,["Option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null);
if((depth > (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$items,(function (){var G__32615 = index;
var G__32616 = ((n - (2)) / (2));
var G__32617 = (depth - (1));
return (example.autocomplete_tree.create_tree.cljs$core$IFn$_invoke$arity$3 ? example.autocomplete_tree.create_tree.cljs$core$IFn$_invoke$arity$3(G__32615,G__32616,G__32617) : example.autocomplete_tree.create_tree.call(null,G__32615,G__32616,G__32617));
})());
} else {
return item;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((((depth > (0)))?(2):n))));
});
example.autocomplete_tree.tree_data_large = example.autocomplete_tree.create_tree(cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),(1000),(4));

example.autocomplete_tree.sub_query_match_QMARK__test = (function example$autocomplete_tree$sub_query_match_QMARK__test(){
return cljs.test.test_var(example.autocomplete_tree.sub_query_match_QMARK__test.cljs$lang$var);
});
example.autocomplete_tree.sub_query_match_QMARK__test.cljs$lang$test = (function (){
var match_fn = komponentit.autocomplete.create_matcher_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name], null));
try{var values__31006__auto__ = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null)], null),(new cljs.core.List(null,komponentit.autocomplete.sub_query_match_QMARK_(match_fn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"foo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null)),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null)], null),cljs.core.list(cljs.core.cst$sym$autocomplete_SLASH_sub_DASH_query_DASH_match_QMARK_,cljs.core.cst$sym$match_DASH_fn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"foo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null)], null),cljs.core.list(cljs.core.cst$sym$autocomplete_SLASH_sub_DASH_query_DASH_match_QMARK_,cljs.core.cst$sym$match_DASH_fn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"foo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32618){var t__31051__auto__ = e32618;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null)], null),cljs.core.list(cljs.core.cst$sym$autocomplete_SLASH_sub_DASH_query_DASH_match_QMARK_,cljs.core.cst$sym$match_DASH_fn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"foo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null))),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}});

(example.autocomplete_tree.sub_query_match_QMARK__test.cljs$lang$var = new cljs.core.Var(function(){return example.autocomplete_tree.sub_query_match_QMARK__test;},cljs.core.cst$sym$example$autocomplete_DASH_tree_SLASH_sub_DASH_query_DASH_match_QMARK__DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$example$autocomplete_DASH_tree,cljs.core.cst$sym$sub_DASH_query_DASH_match_QMARK__DASH_test,"/home/juho/Source/komponentit/example-src/cljs/example/autocomplete_tree.cljs",34,1,113,113,cljs.core.List.EMPTY,null,(cljs.core.truth_(example.autocomplete_tree.sub_query_match_QMARK__test)?example.autocomplete_tree.sub_query_match_QMARK__test.cljs$lang$test:null)])));
