// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.options');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
example.options.field = (function example$options$field(k,value,type,cb){
var G__37173 = type;
var G__37173__$1 = (((G__37173 instanceof cljs.core.Keyword))?G__37173.fqn:null);
switch (G__37173__$1) {
case "string":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,value,cljs.core.cst$kw$on_DASH_change,(function (p1__37171_SHARP_){
var G__37174 = p1__37171_SHARP_.target.value;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__37174) : cb.call(null,G__37174));
})], null)], null);

break;
case "bool":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$checked,value,cljs.core.cst$kw$on_DASH_change,(function (p1__37172_SHARP_){
var G__37175 = p1__37172_SHARP_.target.checked;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__37175) : cb.call(null,G__37175));
})], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37173__$1)].join('')));

}
});
example.options.table = (function example$options$table(current,cb,options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Value"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__4582__auto__ = (function example$options$table_$_iter__37177(s__37178){
return (new cljs.core.LazySeq(null,(function (){
var s__37178__$1 = s__37178;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__37178__$1);
if(temp__4657__auto__){
var s__37178__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37178__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37178__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37180 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37179 = (0);
while(true){
if((i__37179 < size__4581__auto__)){
var vec__37181 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37179);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37181,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37181,(1),null);
cljs.core.chunk_append(b__37180,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":",cljs.core.name(k)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.field,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,k),type,((function (i__37179,vec__37181,k,type,c__4580__auto__,size__4581__auto__,b__37180,s__37178__$2,temp__4657__auto__){
return (function (v){
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(k,v) : cb.call(null,k,v));
});})(i__37179,vec__37181,k,type,c__4580__auto__,size__4581__auto__,b__37180,s__37178__$2,temp__4657__auto__))
], null)], null)], null));

var G__37187 = (i__37179 + (1));
i__37179 = G__37187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37180),example$options$table_$_iter__37177(cljs.core.chunk_rest(s__37178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37180),null);
}
} else {
var vec__37184 = cljs.core.first(s__37178__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37184,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37184,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":",cljs.core.name(k)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.field,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,k),type,((function (vec__37184,k,type,s__37178__$2,temp__4657__auto__){
return (function (v){
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(k,v) : cb.call(null,k,v));
});})(vec__37184,k,type,s__37178__$2,temp__4657__auto__))
], null)], null)], null),example$options$table_$_iter__37177(cljs.core.rest(s__37178__$2)));
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
