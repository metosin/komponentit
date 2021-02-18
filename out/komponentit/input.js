// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.input');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
/**
 * Input with debounced on-change. On-change also run on Enter key and on-blur event.
 */
komponentit.input.input = (function komponentit$input$input(_){
var temp = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__31942){
var map__31943 = p__31942;
var map__31943__$1 = (((((!((map__31943 == null))))?(((((map__31943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31943):map__31943);
var opts = map__31943__$1;
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31943__$1,cljs.core.cst$kw$el,cljs.core.cst$kw$input);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31943__$1,cljs.core.cst$kw$value);
var value_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31943__$1,cljs.core.cst$kw$value_DASH_fn,cljs.core.identity);
var text_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31943__$1,cljs.core.cst$kw$text_DASH_fn,cljs.core.identity);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31943__$1,cljs.core.cst$kw$on_DASH_change);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31943__$1,cljs.core.cst$kw$type);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31943__$1,cljs.core.cst$kw$on_DASH_blur);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31943__$1,cljs.core.cst$kw$timeout_DASH_ms,(250));
var on_key_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31943__$1,cljs.core.cst$kw$on_DASH_key_DASH_press);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$el,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$timeout_DASH_ms,cljs.core.cst$kw$value_DASH_fn,cljs.core.cst$kw$text_DASH_fn], 0)),cljs.core.cst$kw$value,(function (){var or__4185__auto__ = cljs.core.deref(temp);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (text_fn.cljs$core$IFn$_invoke$arity$1 ? text_fn.cljs$core$IFn$_invoke$arity$1(value) : text_fn.call(null,value));
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return "";
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_change,(function (e){
var v = e.target.value;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(timeout,(function (current){
if(cljs.core.truth_(current)){
clearTimeout(current);
} else {
}

return setTimeout((function (___$1){
if(cljs.core.truth_(on_change)){
var G__31945 = (value_fn.cljs$core$IFn$_invoke$arity$1 ? value_fn.cljs$core$IFn$_invoke$arity$1(v) : value_fn.call(null,v));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__31945) : on_change.call(null,G__31945));
} else {
return null;
}
}),timeout_ms);
}));

return cljs.core.reset_BANG_(temp,v);
}),cljs.core.cst$kw$on_DASH_blur,(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(timeout,(function (current){
if(cljs.core.truth_(current)){
return clearTimeout(current);
} else {
return null;
}
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(temp,(function (x){
if(cljs.core.truth_(x)){
if(cljs.core.truth_(on_change)){
var G__31946_31949 = (value_fn.cljs$core$IFn$_invoke$arity$1 ? value_fn.cljs$core$IFn$_invoke$arity$1(x) : value_fn.call(null,x));
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__31946_31949) : on_change.call(null,G__31946_31949));
} else {
}
} else {
}

return null;
}));

if(cljs.core.truth_(on_blur)){
return (on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(e) : on_blur.call(null,e));
} else {
return null;
}
}),cljs.core.cst$kw$on_DASH_key_DASH_press,(function (e){
var G__31947_31950 = e.key;
switch (G__31947_31950) {
case "Enter":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(timeout,(function (current){
if(cljs.core.truth_(current)){
return clearTimeout(current);
} else {
return null;
}
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(temp,(function (x){
if(cljs.core.truth_(x)){
if(cljs.core.truth_(on_change)){
var G__31948_31952 = (value_fn.cljs$core$IFn$_invoke$arity$1 ? value_fn.cljs$core$IFn$_invoke$arity$1(x) : value_fn.call(null,x));
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__31948_31952) : on_change.call(null,G__31948_31952));
} else {
}
} else {
}

return null;
}));

break;
default:

}

if(cljs.core.truth_(on_key_press)){
return (on_key_press.cljs$core$IFn$_invoke$arity$1 ? on_key_press.cljs$core$IFn$_invoke$arity$1(e) : on_key_press.call(null,e));
} else {
return null;
}
})], 0))], null);
});
});
komponentit.input.text = (function komponentit$input$text(p__31953){
var map__31954 = p__31953;
var map__31954__$1 = (((((!((map__31954 == null))))?(((((map__31954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31954):map__31954);
var opts = map__31954__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31954__$1,cljs.core.cst$kw$value);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31954__$1,cljs.core.cst$kw$on_DASH_change);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.input,opts], null);
});
komponentit.input.str__GT_number = (function komponentit$input$str__GT_number(var_args){
var G__31957 = arguments.length;
switch (G__31957) {
case 1:
return komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1 = (function (s){
return komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2 = (function (s,p__31958){
var map__31959 = p__31958;
var map__31959__$1 = (((((!((map__31959 == null))))?(((((map__31959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31959):map__31959);
var multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31959__$1,cljs.core.cst$kw$multiplier,(1));
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
var s__$1 = clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(s,/\s/,""),/–/,"-"),/−/,"-"),/,/,".");
return (parseFloat(s__$1) * multiplier);
}
}));

(komponentit.input.str__GT_number.cljs$lang$maxFixedArity = 2);

/**
 * Options:
 *   - :precision - maximum number of digits after delimiter
 *   - :min-precision - minimum number of digits after delimiter, zero padded if neeeded
 */
komponentit.input.number__GT_str = (function komponentit$input$number__GT_str(var_args){
var G__31963 = arguments.length;
switch (G__31963) {
case 1:
return komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$1 = (function (value){
return komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (value,p__31964){
var map__31965 = p__31964;
var map__31965__$1 = (((((!((map__31965 == null))))?(((((map__31965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31965):map__31965);
var multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31965__$1,cljs.core.cst$kw$multiplier,(1));
var precision = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31965__$1,cljs.core.cst$kw$precision,(2));
var min_precision = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31965__$1,cljs.core.cst$kw$min_DASH_precision,(0));
var delimiter = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31965__$1,cljs.core.cst$kw$delimiter,".");
if((value == null)){
return "";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.long$((value / multiplier))),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(value,multiplier))) || ((min_precision > (0)))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod(Math.abs(value),multiplier)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(min_precision,"0")))].join(''),/0\./,""),(0),precision)].join(''):null)].join('');
}
}));

(komponentit.input.number__GT_str.cljs$lang$maxFixedArity = 2);

komponentit.input.number = (function komponentit$input$number(p__31970){
var map__31971 = p__31970;
var map__31971__$1 = (((((!((map__31971 == null))))?(((((map__31971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31971):map__31971);
var opts = map__31971__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31971__$1,cljs.core.cst$kw$value);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31971__$1,cljs.core.cst$kw$on_DASH_change);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31971__$1,cljs.core.cst$kw$on_DASH_blur);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$multiplier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$precision,cljs.core.cst$kw$min_DASH_precision,cljs.core.cst$kw$delimiter], 0)),cljs.core.cst$kw$value_DASH_fn,(function (p1__31968_SHARP_){
return komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(p1__31968_SHARP_,opts);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$text_DASH_fn,(function (p1__31969_SHARP_){
return komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(p1__31969_SHARP_,opts);
})], 0))], null);
});
komponentit.input.password = (function komponentit$input$password(p__31973){
var map__31974 = p__31973;
var map__31974__$1 = (((((!((map__31974 == null))))?(((((map__31974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31974):map__31974);
var opts = map__31974__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$type,"password")], null);
});
komponentit.input.textarea = (function komponentit$input$textarea(opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$el,cljs.core.cst$kw$textarea,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,null], 0))], null);
});
komponentit.input.static$ = (function komponentit$input$static(p__31976){
var map__31977 = p__31976;
var map__31977__$1 = (((((!((map__31977 == null))))?(((((map__31977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31977):map__31977);
var opts = map__31977__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31977__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,((cljs.core.map_QMARK_(opts))?opts:cljs.core.PersistentArrayMap.EMPTY),value], null);
});
komponentit.input._PLUS_empty_value_PLUS_ = "komponentit.input/empty-value";
komponentit.input.select = (function komponentit$input$select(p__31979){
var map__31980 = p__31979;
var map__31980__$1 = (((((!((map__31980 == null))))?(((((map__31980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31980):map__31980);
var opts = map__31980__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31980__$1,cljs.core.cst$kw$value);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31980__$1,cljs.core.cst$kw$on_DASH_change);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31980__$1,cljs.core.cst$kw$on_DASH_blur);
var empty_option_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31980__$1,cljs.core.cst$kw$empty_DASH_option_QMARK_);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31980__$1,cljs.core.cst$kw$options);
var value_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31980__$1,cljs.core.cst$kw$value_DASH_fn,cljs.core.identity);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$empty_DASH_option_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$value_DASH_fn,cljs.core.cst$kw$options], 0)),cljs.core.cst$kw$value,(((!((value == null))))?value:(cljs.core.truth_(empty_option_QMARK_)?komponentit.input._PLUS_empty_value_PLUS_:""
)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_change,(function (e){
var v = e.target.value;
var v__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(komponentit.input._PLUS_empty_value_PLUS_,v))?null:v);
var G__31982 = (value_fn.cljs$core$IFn$_invoke$arity$1 ? value_fn.cljs$core$IFn$_invoke$arity$1(v__$1) : value_fn.call(null,v__$1));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__31982) : on_change.call(null,G__31982));
}),cljs.core.cst$kw$on_DASH_blur,on_blur], 0)),(cljs.core.truth_(empty_option_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,komponentit.input._PLUS_empty_value_PLUS_], null),"---"], null):null),(function (){var iter__4582__auto__ = (function komponentit$input$select_$_iter__31983(s__31984){
return (new cljs.core.LazySeq(null,(function (){
var s__31984__$1 = s__31984;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__31984__$1);
if(temp__4657__auto__){
var s__31984__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31984__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__31984__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__31986 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__31985 = (0);
while(true){
if((i__31985 < size__4581__auto__)){
var map__31987 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__31985);
var map__31987__$1 = (((((!((map__31987 == null))))?(((((map__31987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31987):map__31987);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31987__$1,cljs.core.cst$kw$value);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31987__$1,cljs.core.cst$kw$text);
cljs.core.chunk_append(b__31986,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,value__$1,cljs.core.cst$kw$key,value__$1], null),text], null));

var G__31991 = (i__31985 + (1));
i__31985 = G__31991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31986),komponentit$input$select_$_iter__31983(cljs.core.chunk_rest(s__31984__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31986),null);
}
} else {
var map__31989 = cljs.core.first(s__31984__$2);
var map__31989__$1 = (((((!((map__31989 == null))))?(((((map__31989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31989):map__31989);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31989__$1,cljs.core.cst$kw$value);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31989__$1,cljs.core.cst$kw$text);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,value__$1,cljs.core.cst$kw$key,value__$1], null),text], null),komponentit$input$select_$_iter__31983(cljs.core.rest(s__31984__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(options);
})()], null);
});
komponentit.input.checkbox = (function komponentit$input$checkbox(p__31993){
var map__31994 = p__31993;
var map__31994__$1 = (((((!((map__31994 == null))))?(((((map__31994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31994):map__31994);
var opts = map__31994__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31994__$1,cljs.core.cst$kw$value);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31994__$1,cljs.core.cst$kw$on_DASH_change);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31994__$1,cljs.core.cst$kw$on_DASH_blur);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$value),cljs.core.cst$kw$type,"checkbox",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$checked,cljs.core.boolean$(value),cljs.core.cst$kw$on_DASH_change,(function (p1__31992_SHARP_){
var G__31996 = p1__31992_SHARP_.target.checked;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__31996) : on_change.call(null,G__31996));
}),cljs.core.cst$kw$on_DASH_blur,on_blur], 0))], null);
});
