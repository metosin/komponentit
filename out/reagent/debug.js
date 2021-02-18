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
var G__23458__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__23458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23459__i = 0, G__23459__a = new Array(arguments.length -  0);
while (G__23459__i < G__23459__a.length) {G__23459__a[G__23459__i] = arguments[G__23459__i + 0]; ++G__23459__i;}
  args = new cljs.core.IndexedSeq(G__23459__a,0,null);
} 
return G__23458__delegate.call(this,args);};
G__23458.cljs$lang$maxFixedArity = 0;
G__23458.cljs$lang$applyTo = (function (arglist__23460){
var args = cljs.core.seq(arglist__23460);
return G__23458__delegate(args);
});
G__23458.cljs$core$IFn$_invoke$arity$variadic = G__23458__delegate;
return G__23458;
})()
);

(o.error = (function() { 
var G__23461__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__23461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23462__i = 0, G__23462__a = new Array(arguments.length -  0);
while (G__23462__i < G__23462__a.length) {G__23462__a[G__23462__i] = arguments[G__23462__i + 0]; ++G__23462__i;}
  args = new cljs.core.IndexedSeq(G__23462__a,0,null);
} 
return G__23461__delegate.call(this,args);};
G__23461.cljs$lang$maxFixedArity = 0;
G__23461.cljs$lang$applyTo = (function (arglist__23463){
var args = cljs.core.seq(arglist__23463);
return G__23461__delegate(args);
});
G__23461.cljs$core$IFn$_invoke$arity$variadic = G__23461__delegate;
return G__23461;
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
