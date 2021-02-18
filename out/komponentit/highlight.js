// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.highlight');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('komponentit.util');
komponentit.highlight.normalize = (function komponentit$highlight$normalize(s){
var G__37244 = s;
if((G__37244 == null)){
return null;
} else {
return clojure.string.lower_case(G__37244);
}
});
komponentit.highlight.highlight_string = (function komponentit$highlight$highlight_string(var_args){
var G__37246 = arguments.length;
switch (G__37246) {
case 2:
return komponentit.highlight.highlight_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return komponentit.highlight.highlight_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(komponentit.highlight.highlight_string.cljs$core$IFn$_invoke$arity$2 = (function (s,query){
return komponentit.highlight.highlight_string.cljs$core$IFn$_invoke$arity$3(s,query,(function (s__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$highlight,s__$1], null);
}));
}));

(komponentit.highlight.highlight_string.cljs$core$IFn$_invoke$arity$3 = (function (s,query,wrapper){
var rst = s;
var r = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span], null);
while(true){
if(cljs.core.truth_(rst)){
var normalized_rst = komponentit.highlight.normalize(rst);
var vec__37254 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (rst,r,normalized_rst){
return (function (p__37257,term){
var vec__37258 = p__37257;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37258,(0),null);
var acc = vec__37258;
var x = normalized_rst.indexOf(term);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,(-1))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))) || ((x < i)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(rst,x,(x + cljs.core.count(term)))], null);
} else {
return acc;
}
});})(rst,r,normalized_rst))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),null], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,query));
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37254,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37254,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
var a = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(rst,(0),i);
var b = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(rst,i,(i + cljs.core.count(match)));
var c = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rst,(i + cljs.core.count(match)));
var G__37262 = c;
var G__37263 = ((cljs.core.seq(a))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(r,a,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(b) : wrapper.call(null,b))], 0)):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(b) : wrapper.call(null,b))));
rst = G__37262;
r = G__37263;
continue;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,rst);
}
} else {
return r;
}
break;
}
}));

(komponentit.highlight.highlight_string.cljs$lang$maxFixedArity = 3);

