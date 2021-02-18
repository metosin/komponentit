// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.options');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
example.options.field = (function example$options$field(k,value,type,cb){
var G__31928 = type;
var G__31928__$1 = (((G__31928 instanceof cljs.core.Keyword))?G__31928.fqn:null);
switch (G__31928__$1) {
case "string":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,value,cljs.core.cst$kw$on_DASH_change,(function (p1__31926_SHARP_){
var G__31929 = p1__31926_SHARP_.target.value;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__31929) : cb.call(null,G__31929));
})], null)], null);

break;
case "bool":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$checked,value,cljs.core.cst$kw$on_DASH_change,(function (p1__31927_SHARP_){
var G__31930 = p1__31927_SHARP_.target.checked;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__31930) : cb.call(null,G__31930));
})], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31928__$1)].join('')));

}
});
example.options.table = (function example$options$table(current,cb,options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Value"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__4582__auto__ = (function example$options$table_$_iter__31932(s__31933){
return (new cljs.core.LazySeq(null,(function (){
var s__31933__$1 = s__31933;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__31933__$1);
if(temp__4657__auto__){
var s__31933__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31933__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__31933__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__31935 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__31934 = (0);
while(true){
if((i__31934 < size__4581__auto__)){
var vec__31936 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__31934);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31936,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31936,(1),null);
cljs.core.chunk_append(b__31935,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":",cljs.core.name(k)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.field,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,k),type,((function (i__31934,vec__31936,k,type,c__4580__auto__,size__4581__auto__,b__31935,s__31933__$2,temp__4657__auto__){
return (function (v){
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(k,v) : cb.call(null,k,v));
});})(i__31934,vec__31936,k,type,c__4580__auto__,size__4581__auto__,b__31935,s__31933__$2,temp__4657__auto__))
], null)], null)], null));

var G__31942 = (i__31934 + (1));
i__31934 = G__31942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31935),example$options$table_$_iter__31932(cljs.core.chunk_rest(s__31933__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31935),null);
}
} else {
var vec__31939 = cljs.core.first(s__31933__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31939,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31939,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":",cljs.core.name(k)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.field,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,k),type,((function (vec__31939,k,type,s__31933__$2,temp__4657__auto__){
return (function (v){
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(k,v) : cb.call(null,k,v));
});})(vec__31939,k,type,s__31933__$2,temp__4657__auto__))
], null)], null)], null),example$options$table_$_iter__31932(cljs.core.rest(s__31933__$2)));
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
