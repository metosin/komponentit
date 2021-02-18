// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.scrollbar_width');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('komponentit.scrollbar_width');
goog.require('reagent.core');
goog.require('cljs.test');
goog.require('devcards.core');
goog.require('example.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$scrollbar_width,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,[example.core.header(cljs.core.cst$sym$scrollbar_width,"Scrollbar-width"),"This component can calculate scrollbar width and add padding to compensate for it.\nThis can be useful for compensating for scrollbar width in cases with separate table\nfor header and the table contents, e.g. when table contents are scrollable and the\nheader is fixed (is shown at the top of the table always)."].join(''),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$scrollbar_width,cljs.core.cst$kw$scrollbar_DASH_width], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"scrollbar-width",cljs.core.cst$kw$documentation,"To implmement fixed header for table,\n  the table contents need to be placed inside a scroll container (red borders, div with `overflow-y: scroll` or `auto`).\n\n  Now that the header table and contents table are separate elements, the columns widths can't be\n  reliably set as relative (percentages) because the total width of the table elements can be different.\n  Usually this is because the content table container will have the scrollbar which takes up some width, and\n  the header doesn't have such scrollbar.\n\n  Simple fix would be to always force header container to display scrollbar with `overflow-y: scroll`,\n  but that will look unpolished.\n\n  This component first renders the header in a div with scrollbar forced on, and after first render,\n  it checks the difference of the DOM element width and it's content width, which is the width of the\n  scrollbar. The header container is then rendered again, without the scrollbar but using\n  the scrollbar width as right padding (green box on the example).\n\n  Now 50% column width is the same on both the header table, and on the content table.\n  (Note that table is using `table-layout: fixed`, so that the cell contents don't force\n  any column to stretch. This would break the widths, as the separate tables can't know if\n  column widths are different on the other table due to cell contents.)\n\n  NOTE: If you are using OS X or other system where scrollbar is hidden\n  until used, and drawn over the contents, the scrollbar width might be zero,\n  and header will have 0px padding.",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.scrollbar_width !== 'undefined') && (typeof example.scrollbar_width.t_example$scrollbar_width32741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.scrollbar_width.t_example$scrollbar_width32741 = (function (meta32742){
this.meta32742 = meta32742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.scrollbar_width.t_example$scrollbar_width32741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32743,meta32742__$1){
var self__ = this;
var _32743__$1 = this;
return (new example.scrollbar_width.t_example$scrollbar_width32741(meta32742__$1));
}));

(example.scrollbar_width.t_example$scrollbar_width32741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32743){
var self__ = this;
var _32743__$1 = this;
return self__.meta32742;
}));

(example.scrollbar_width.t_example$scrollbar_width32741.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.scrollbar_width.t_example$scrollbar_width32741.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.scrollbar_width.scrollbar_padding,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$border,"1px solid red",cljs.core.cst$kw$background,"green"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$scroll_DASH_table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"50%"], null)], null),"50%"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"30%"], null)], null),"30%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"20%"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$scroll_DASH_container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1px solid red"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$scroll_DASH_table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__4582__auto__ = (function example$scrollbar_width$iter__32744(s__32745){
return (new cljs.core.LazySeq(null,(function (){
var s__32745__$1 = s__32745;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__32745__$1);
if(temp__4657__auto__){
var s__32745__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32745__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__32745__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__32747 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__32746 = (0);
while(true){
if((i__32746 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__32746);
cljs.core.chunk_append(b__32747,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"50%"], null)], null),"50%"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"30%"], null)], null),"30%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"20%"], null)], null));

var G__32748 = (i__32746 + (1));
i__32746 = G__32748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32747),example$scrollbar_width$iter__32744(cljs.core.chunk_rest(s__32745__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32747),null);
}
} else {
var i = cljs.core.first(s__32745__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"50%"], null)], null),"50%"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"30%"], null)], null),"30%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"20%"], null)], null),example$scrollbar_width$iter__32744(cljs.core.rest(s__32745__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((100)));
})()], null)], null)], null)], null);
if(cljs.core.fn_QMARK_(v__31365__auto__)){
return (function (data_atom__31366__auto__,owner__31367__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__31365__auto__,data_atom__31366__auto__,owner__31367__auto__], null));
});
} else {
return reagent.core.as_element(v__31365__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(devcard_opts__31347__auto__))], 0))], 0));
}));

(example.scrollbar_width.t_example$scrollbar_width32741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32742], null);
}));

(example.scrollbar_width.t_example$scrollbar_width32741.cljs$lang$type = true);

(example.scrollbar_width.t_example$scrollbar_width32741.cljs$lang$ctorStr = "example.scrollbar-width/t_example$scrollbar_width32741");

(example.scrollbar_width.t_example$scrollbar_width32741.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.scrollbar-width/t_example$scrollbar_width32741");
}));

/**
 * Positional factory function for example.scrollbar-width/t_example$scrollbar_width32741.
 */
example.scrollbar_width.__GT_t_example$scrollbar_width32741 = (function example$scrollbar_width$__GT_t_example$scrollbar_width32741(meta32742){
return (new example.scrollbar_width.t_example$scrollbar_width32741(meta32742));
});

}

return (new example.scrollbar_width.t_example$scrollbar_width32741(null));
})()
,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
