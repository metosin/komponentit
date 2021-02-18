// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.scrollbar_width');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
komponentit.scrollbar_width.get_scrollbar_width = (function komponentit$scrollbar_width$get_scrollbar_width(el){
return (el.offsetWidth - el.scrollWidth);
});
/**
 * Renders the container first time with forced scrollbar,
 *   but once the width of scrollbar can be detected, replaces
 *   scrollbar with padding.
 */
komponentit.scrollbar_width.scrollbar_padding = (function komponentit$scrollbar_width$scrollbar_padding(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32514 = arguments.length;
var i__4790__auto___32515 = (0);
while(true){
if((i__4790__auto___32515 < len__4789__auto___32514)){
args__4795__auto__.push((arguments[i__4790__auto___32515]));

var G__32516 = (i__4790__auto___32515 + (1));
i__4790__auto___32515 = G__32516;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return komponentit.scrollbar_width.scrollbar_padding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(komponentit.scrollbar_width.scrollbar_padding.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1){
var scrollbar_width = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(scrollbar_width,komponentit.scrollbar_width.get_scrollbar_width(el));
} else {
return null;
}
});
return (function() { 
var G__32517__delegate = function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$ref,ref_fn),cljs.core.cst$kw$style,cljs.core.merge,(cljs.core.truth_(cljs.core.deref(scrollbar_width))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_right,cljs.core.deref(scrollbar_width)], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow_DASH_y,"scroll"], null)))], null),children);
};
var G__32517 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__32518__i = 0, G__32518__a = new Array(arguments.length -  1);
while (G__32518__i < G__32518__a.length) {G__32518__a[G__32518__i] = arguments[G__32518__i + 1]; ++G__32518__i;}
  children = new cljs.core.IndexedSeq(G__32518__a,0,null);
} 
return G__32517__delegate.call(this,props,children);};
G__32517.cljs$lang$maxFixedArity = 1;
G__32517.cljs$lang$applyTo = (function (arglist__32519){
var props = cljs.core.first(arglist__32519);
var children = cljs.core.rest(arglist__32519);
return G__32517__delegate(props,children);
});
G__32517.cljs$core$IFn$_invoke$arity$variadic = G__32517__delegate;
return G__32517;
})()
;
}));

(komponentit.scrollbar_width.scrollbar_padding.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(komponentit.scrollbar_width.scrollbar_padding.cljs$lang$applyTo = (function (seq32512){
var G__32513 = cljs.core.first(seq32512);
var seq32512__$1 = cljs.core.next(seq32512);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32513,seq32512__$1);
}));

