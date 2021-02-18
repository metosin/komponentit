// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__23625__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__23625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23626__i = 0, G__23626__a = new Array(arguments.length -  0);
while (G__23626__i < G__23626__a.length) {G__23626__a[G__23626__i] = arguments[G__23626__i + 0]; ++G__23626__i;}
  args = new cljs.core.IndexedSeq(G__23626__a,0,null);
} 
return G__23625__delegate.call(this,args);};
G__23625.cljs$lang$maxFixedArity = 0;
G__23625.cljs$lang$applyTo = (function (arglist__23627){
var args = cljs.core.seq(arglist__23627);
return G__23625__delegate(args);
});
G__23625.cljs$core$IFn$_invoke$arity$variadic = G__23625__delegate;
return G__23625;
})()
);

(o.error = (function() { 
var G__23628__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__23628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23629__i = 0, G__23629__a = new Array(arguments.length -  0);
while (G__23629__i < G__23629__a.length) {G__23629__a[G__23629__i] = arguments[G__23629__i + 0]; ++G__23629__i;}
  args = new cljs.core.IndexedSeq(G__23629__a,0,null);
} 
return G__23628__delegate.call(this,args);};
G__23628.cljs$lang$maxFixedArity = 0;
G__23628.cljs$lang$applyTo = (function (arglist__23630){
var args = cljs.core.seq(arglist__23630);
return G__23628__delegate(args);
});
G__23628.cljs$core$IFn$_invoke$arity$variadic = G__23628__delegate;
return G__23628;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
