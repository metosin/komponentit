// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.options');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
example.options.field = (function example$options$field(k,value,type,cb){
var G__31925 = type;
var G__31925__$1 = (((G__31925 instanceof cljs.core.Keyword))?G__31925.fqn:null);
switch (G__31925__$1) {
case "string":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,value,cljs.core.cst$kw$on_DASH_change,(function (p1__31923_SHARP_){
var G__31926 = p1__31923_SHARP_.target.value;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__31926) : cb.call(null,G__31926));
})], null)], null);

break;
case "bool":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$checked,value,cljs.core.cst$kw$on_DASH_change,(function (p1__31924_SHARP_){
var G__31927 = p1__31924_SHARP_.target.checked;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__31927) : cb.call(null,G__31927));
})], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31925__$1)].join('')));

}
});
example.options.table = (function example$options$table(current,cb,options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Value"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__4582__auto__ = (function example$options$table_$_iter__31929(s__31930){
return (new cljs.core.LazySeq(null,(function (){
var s__31930__$1 = s__31930;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__31930__$1);
if(temp__4657__auto__){
var s__31930__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31930__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__31930__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__31932 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__31931 = (0);
while(true){
if((i__31931 < size__4581__auto__)){
var vec__31933 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__31931);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31933,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31933,(1),null);
cljs.core.chunk_append(b__31932,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":",cljs.core.name(k)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.field,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,k),type,((function (i__31931,vec__31933,k,type,c__4580__auto__,size__4581__auto__,b__31932,s__31930__$2,temp__4657__auto__){
return (function (v){
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(k,v) : cb.call(null,k,v));
});})(i__31931,vec__31933,k,type,c__4580__auto__,size__4581__auto__,b__31932,s__31930__$2,temp__4657__auto__))
], null)], null)], null));

var G__31939 = (i__31931 + (1));
i__31931 = G__31939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31932),example$options$table_$_iter__31929(cljs.core.chunk_rest(s__31930__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31932),null);
}
} else {
var vec__31936 = cljs.core.first(s__31930__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31936,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31936,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":",cljs.core.name(k)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.field,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,k),type,((function (vec__31936,k,type,s__31930__$2,temp__4657__auto__){
return (function (v){
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(k,v) : cb.call(null,k,v));
});})(vec__31936,k,type,s__31930__$2,temp__4657__auto__))
], null)], null)], null),example$options$table_$_iter__31929(cljs.core.rest(s__31930__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(options);
})()], null)], null);
});
