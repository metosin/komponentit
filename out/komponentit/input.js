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
return (function (p__37187){
var map__37188 = p__37187;
var map__37188__$1 = (((((!((map__37188 == null))))?(((((map__37188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37188):map__37188);
var opts = map__37188__$1;
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37188__$1,cljs.core.cst$kw$el,cljs.core.cst$kw$input);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,cljs.core.cst$kw$value);
var value_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37188__$1,cljs.core.cst$kw$value_DASH_fn,cljs.core.identity);
var text_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37188__$1,cljs.core.cst$kw$text_DASH_fn,cljs.core.identity);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,cljs.core.cst$kw$on_DASH_change);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,cljs.core.cst$kw$type);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,cljs.core.cst$kw$on_DASH_blur);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37188__$1,cljs.core.cst$kw$timeout_DASH_ms,(250));
var on_key_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,cljs.core.cst$kw$on_DASH_key_DASH_press);
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
var G__37190 = (value_fn.cljs$core$IFn$_invoke$arity$1 ? value_fn.cljs$core$IFn$_invoke$arity$1(v) : value_fn.call(null,v));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__37190) : on_change.call(null,G__37190));
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
var G__37191_37194 = (value_fn.cljs$core$IFn$_invoke$arity$1 ? value_fn.cljs$core$IFn$_invoke$arity$1(x) : value_fn.call(null,x));
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__37191_37194) : on_change.call(null,G__37191_37194));
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
var G__37192_37195 = e.key;
switch (G__37192_37195) {
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
var G__37193_37197 = (value_fn.cljs$core$IFn$_invoke$arity$1 ? value_fn.cljs$core$IFn$_invoke$arity$1(x) : value_fn.call(null,x));
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__37193_37197) : on_change.call(null,G__37193_37197));
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
komponentit.input.text = (function komponentit$input$text(p__37198){
var map__37199 = p__37198;
var map__37199__$1 = (((((!((map__37199 == null))))?(((((map__37199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37199):map__37199);
var opts = map__37199__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37199__$1,cljs.core.cst$kw$value);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37199__$1,cljs.core.cst$kw$on_DASH_change);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.input,opts], null);
});
komponentit.input.str__GT_number = (function komponentit$input$str__GT_number(var_args){
var G__37202 = arguments.length;
switch (G__37202) {
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

(komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2 = (function (s,p__37203){
var map__37204 = p__37203;
var map__37204__$1 = (((((!((map__37204 == null))))?(((((map__37204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37204):map__37204);
var multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37204__$1,cljs.core.cst$kw$multiplier,(1));
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
var G__37208 = arguments.length;
switch (G__37208) {
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

(komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (value,p__37209){
var map__37210 = p__37209;
var map__37210__$1 = (((((!((map__37210 == null))))?(((((map__37210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37210):map__37210);
var multiplier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37210__$1,cljs.core.cst$kw$multiplier,(1));
var precision = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37210__$1,cljs.core.cst$kw$precision,(2));
var min_precision = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37210__$1,cljs.core.cst$kw$min_DASH_precision,(0));
var delimiter = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37210__$1,cljs.core.cst$kw$delimiter,".");
if((value == null)){
return "";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.long$((value / multiplier))),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(value,multiplier))) || ((min_precision > (0)))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod(Math.abs(value),multiplier)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(min_precision,"0")))].join(''),/0\./,""),(0),precision)].join(''):null)].join('');
}
}));

(komponentit.input.number__GT_str.cljs$lang$maxFixedArity = 2);

komponentit.input.number = (function komponentit$input$number(p__37215){
var map__37216 = p__37215;
var map__37216__$1 = (((((!((map__37216 == null))))?(((((map__37216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37216):map__37216);
var opts = map__37216__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37216__$1,cljs.core.cst$kw$value);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37216__$1,cljs.core.cst$kw$on_DASH_change);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37216__$1,cljs.core.cst$kw$on_DASH_blur);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$multiplier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$precision,cljs.core.cst$kw$min_DASH_precision,cljs.core.cst$kw$delimiter], 0)),cljs.core.cst$kw$value_DASH_fn,(function (p1__37213_SHARP_){
return komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(p1__37213_SHARP_,opts);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$text_DASH_fn,(function (p1__37214_SHARP_){
return komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(p1__37214_SHARP_,opts);
})], 0))], null);
});
komponentit.input.password = (function komponentit$input$password(p__37218){
var map__37219 = p__37218;
var map__37219__$1 = (((((!((map__37219 == null))))?(((((map__37219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37219):map__37219);
var opts = map__37219__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$type,"password")], null);
});
komponentit.input.textarea = (function komponentit$input$textarea(opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.input.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$el,cljs.core.cst$kw$textarea,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,null], 0))], null);
});
komponentit.input.static$ = (function komponentit$input$static(p__37221){
var map__37222 = p__37221;
var map__37222__$1 = (((((!((map__37222 == null))))?(((((map__37222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37222):map__37222);
var opts = map__37222__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37222__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,((cljs.core.map_QMARK_(opts))?opts:cljs.core.PersistentArrayMap.EMPTY),value], null);
});
komponentit.input._PLUS_empty_value_PLUS_ = "komponentit.input/empty-value";
komponentit.input.select = (function komponentit$input$select(p__37224){
var map__37225 = p__37224;
var map__37225__$1 = (((((!((map__37225 == null))))?(((((map__37225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37225):map__37225);
var opts = map__37225__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37225__$1,cljs.core.cst$kw$value);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37225__$1,cljs.core.cst$kw$on_DASH_change);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37225__$1,cljs.core.cst$kw$on_DASH_blur);
var empty_option_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37225__$1,cljs.core.cst$kw$empty_DASH_option_QMARK_);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37225__$1,cljs.core.cst$kw$options);
var value_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37225__$1,cljs.core.cst$kw$value_DASH_fn,cljs.core.identity);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$empty_DASH_option_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$value_DASH_fn,cljs.core.cst$kw$options], 0)),cljs.core.cst$kw$value,(((!((value == null))))?value:(cljs.core.truth_(empty_option_QMARK_)?komponentit.input._PLUS_empty_value_PLUS_:""
)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_change,(function (e){
var v = e.target.value;
var v__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(komponentit.input._PLUS_empty_value_PLUS_,v))?null:v);
var G__37227 = (value_fn.cljs$core$IFn$_invoke$arity$1 ? value_fn.cljs$core$IFn$_invoke$arity$1(v__$1) : value_fn.call(null,v__$1));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__37227) : on_change.call(null,G__37227));
}),cljs.core.cst$kw$on_DASH_blur,on_blur], 0)),(cljs.core.truth_(empty_option_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,komponentit.input._PLUS_empty_value_PLUS_], null),"---"], null):null),(function (){var iter__4582__auto__ = (function komponentit$input$select_$_iter__37228(s__37229){
return (new cljs.core.LazySeq(null,(function (){
var s__37229__$1 = s__37229;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__37229__$1);
if(temp__4657__auto__){
var s__37229__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37229__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37229__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37231 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37230 = (0);
while(true){
if((i__37230 < size__4581__auto__)){
var map__37232 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37230);
var map__37232__$1 = (((((!((map__37232 == null))))?(((((map__37232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37232):map__37232);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37232__$1,cljs.core.cst$kw$value);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37232__$1,cljs.core.cst$kw$text);
cljs.core.chunk_append(b__37231,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,value__$1,cljs.core.cst$kw$key,value__$1], null),text], null));

var G__37236 = (i__37230 + (1));
i__37230 = G__37236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37231),komponentit$input$select_$_iter__37228(cljs.core.chunk_rest(s__37229__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37231),null);
}
} else {
var map__37234 = cljs.core.first(s__37229__$2);
var map__37234__$1 = (((((!((map__37234 == null))))?(((((map__37234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37234):map__37234);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37234__$1,cljs.core.cst$kw$value);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37234__$1,cljs.core.cst$kw$text);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,value__$1,cljs.core.cst$kw$key,value__$1], null),text], null),komponentit$input$select_$_iter__37228(cljs.core.rest(s__37229__$2)));
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
komponentit.input.checkbox = (function komponentit$input$checkbox(p__37238){
var map__37239 = p__37238;
var map__37239__$1 = (((((!((map__37239 == null))))?(((((map__37239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37239):map__37239);
var opts = map__37239__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37239__$1,cljs.core.cst$kw$value);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37239__$1,cljs.core.cst$kw$on_DASH_change);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37239__$1,cljs.core.cst$kw$on_DASH_blur);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$value),cljs.core.cst$kw$type,"checkbox",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$checked,cljs.core.boolean$(value),cljs.core.cst$kw$on_DASH_change,(function (p1__37237_SHARP_){
var G__37241 = p1__37237_SHARP_.target.checked;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__37241) : on_change.call(null,G__37241));
}),cljs.core.cst$kw$on_DASH_blur,on_blur], 0))], null);
});
