// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.options');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
example.options.field = (function example$options$field(k,value,type,cb){
var G__37170 = type;
var G__37170__$1 = (((G__37170 instanceof cljs.core.Keyword))?G__37170.fqn:null);
switch (G__37170__$1) {
case "string":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,value,cljs.core.cst$kw$on_DASH_change,(function (p1__37168_SHARP_){
var G__37171 = p1__37168_SHARP_.target.value;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__37171) : cb.call(null,G__37171));
})], null)], null);

break;
case "bool":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$checked,value,cljs.core.cst$kw$on_DASH_change,(function (p1__37169_SHARP_){
var G__37172 = p1__37169_SHARP_.target.checked;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__37172) : cb.call(null,G__37172));
})], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37170__$1)].join('')));

}
});
example.options.table = (function example$options$table(current,cb,options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Value"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__4582__auto__ = (function example$options$table_$_iter__37174(s__37175){
return (new cljs.core.LazySeq(null,(function (){
var s__37175__$1 = s__37175;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__37175__$1);
if(temp__4657__auto__){
var s__37175__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37175__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37175__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37177 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37176 = (0);
while(true){
if((i__37176 < size__4581__auto__)){
var vec__37178 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37176);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37178,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37178,(1),null);
cljs.core.chunk_append(b__37177,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":",cljs.core.name(k)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.field,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,k),type,((function (i__37176,vec__37178,k,type,c__4580__auto__,size__4581__auto__,b__37177,s__37175__$2,temp__4657__auto__){
return (function (v){
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(k,v) : cb.call(null,k,v));
});})(i__37176,vec__37178,k,type,c__4580__auto__,size__4581__auto__,b__37177,s__37175__$2,temp__4657__auto__))
], null)], null)], null));

var G__37184 = (i__37176 + (1));
i__37176 = G__37184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37177),example$options$table_$_iter__37174(cljs.core.chunk_rest(s__37175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37177),null);
}
} else {
var vec__37181 = cljs.core.first(s__37175__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37181,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37181,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":",cljs.core.name(k)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.field,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,k),type,((function (vec__37181,k,type,s__37175__$2,temp__4657__auto__){
return (function (v){
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(k,v) : cb.call(null,k,v));
});})(vec__37181,k,type,s__37175__$2,temp__4657__auto__))
], null)], null)], null),example$options$table_$_iter__37174(cljs.core.rest(s__37175__$2)));
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
