// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.codemirror');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
komponentit.codemirror.default_codemirror_opts = cljs.core.PersistentArrayMap.EMPTY;
komponentit.codemirror.codemirror = (function komponentit$codemirror$codemirror(p__37533){
var map__37534 = p__37533;
var map__37534__$1 = (((((!((map__37534 == null))))?(((((map__37534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37534):map__37534);
var codemirror_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37534__$1,cljs.core.cst$kw$codemirror_DASH_opts);
var cm = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"komponentit.codemirror.codemirror",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
cljs.core.reset_BANG_(cm,CodeMirror.fromTextArea(reagent.dom.dom_node(this$),cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([komponentit.codemirror.default_codemirror_opts,codemirror_opts], 0)))));

var temp__4655__auto___37545 = cljs.core.cst$kw$on_DASH_mount.cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$));
if(cljs.core.truth_(temp__4655__auto___37545)){
var f_37546 = temp__4655__auto___37545;
var G__37536_37547 = cljs.core.deref(cm);
(f_37546.cljs$core$IFn$_invoke$arity$1 ? f_37546.cljs$core$IFn$_invoke$arity$1(G__37536_37547) : f_37546.call(null,G__37536_37547));
} else {
}

var G__37537 = cljs.core.deref(cm);
G__37537.setValue((function (){var or__4185__auto__ = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.cst$kw$default_DASH_value.cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$));
}
})());

G__37537.on("change",(function (cm__$1,change){
var fexpr__37538 = cljs.core.cst$kw$on_DASH_change.cljs$core$IFn$_invoke$arity$2(reagent.core.props(this$),cljs.core.identity);
return (fexpr__37538.cljs$core$IFn$_invoke$arity$2 ? fexpr__37538.cljs$core$IFn$_invoke$arity$2(cm__$1,change) : fexpr__37538.call(null,cm__$1,change));
}));

G__37537.on("beforeChange",(function (cm__$1,change){
var fexpr__37539 = cljs.core.cst$kw$on_DASH_before_DASH_change.cljs$core$IFn$_invoke$arity$2(reagent.core.props(this$),cljs.core.identity);
return (fexpr__37539.cljs$core$IFn$_invoke$arity$2 ? fexpr__37539.cljs$core$IFn$_invoke$arity$2(cm__$1,change) : fexpr__37539.call(null,cm__$1,change));
}));

G__37537.on("cursorActivity",(function (cm__$1){
var fexpr__37540 = cljs.core.cst$kw$on_DASH_cursor_DASH_activity.cljs$core$IFn$_invoke$arity$2(reagent.core.props(this$),cljs.core.identity);
return (fexpr__37540.cljs$core$IFn$_invoke$arity$1 ? fexpr__37540.cljs$core$IFn$_invoke$arity$1(cm__$1) : fexpr__37540.call(null,cm__$1));
}));

return G__37537;
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$,p__37541){
var vec__37542 = p__37541;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37542,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37542,(1),null);
var temp__4655__auto__ = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$));
if(cljs.core.truth_(temp__4655__auto__)){
var new_value = temp__4655__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cm).getValue(),new_value)){
return cljs.core.deref(cm).setValue(new_value);
} else {
return null;
}
} else {
return null;
}
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea], null);
})], null));
});
