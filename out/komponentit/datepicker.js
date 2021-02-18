// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.datepicker');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('komponentit.date');
goog.require('komponentit.calendar');
goog.require('komponentit.mixins');
goog.require('goog.dom');
goog.require('goog.date.Date');
goog.require('goog.date.UtcDateTime');
komponentit.datepicker.default_i18n = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$date_DASH_format,"d.M.yyyy"], null);
komponentit.datepicker.loc = (function komponentit$datepicker$loc(i18n,k){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(i18n,k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(komponentit.datepicker.default_i18n,k);
}
});
komponentit.datepicker.validate = (function komponentit$datepicker$validate(p__37713,v){
var map__37714 = p__37713;
var map__37714__$1 = (((((!((map__37714 == null))))?(((((map__37714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37714):map__37714);
var opts = map__37714__$1;
var min_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37714__$1,cljs.core.cst$kw$min_DASH_date);
var max_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37714__$1,cljs.core.cst$kw$max_DASH_date);
if(cljs.core.truth_((function (){var and__4174__auto__ = min_date;
if(cljs.core.truth_(and__4174__auto__)){
return max_date;
} else {
return and__4174__auto__;
}
})())){
return (((min_date <= v)) && ((v <= max_date)));
} else {
if(cljs.core.truth_(min_date)){
return (min_date <= v);
} else {
if(cljs.core.truth_(max_date)){
return (v <= max_date);
} else {
return true;

}
}
}
});
komponentit.datepicker.date = (function komponentit$datepicker$date(_){
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var el = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var el_ref = (function (p1__37716_SHARP_){
return cljs.core.reset_BANG_(el,p1__37716_SHARP_);
});
return (function (p__37717){
var map__37718 = p__37717;
var map__37718__$1 = (((((!((map__37718 == null))))?(((((map__37718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37718):map__37718);
var opts = map__37718__$1;
var week_numbers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37718__$1,cljs.core.cst$kw$week_DASH_numbers_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37718__$1,cljs.core.cst$kw$on_DASH_change);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37718__$1,cljs.core.cst$kw$i18n);
var container_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37718__$1,cljs.core.cst$kw$container_DASH_class,"datepicker__container ");
var min_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37718__$1,cljs.core.cst$kw$min_DASH_date);
var max_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37718__$1,cljs.core.cst$kw$max_DASH_date);
var clearable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37718__$1,cljs.core.cst$kw$clearable_QMARK_);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37718__$1,cljs.core.cst$kw$disabled);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37718__$1,cljs.core.cst$kw$value);
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37718__$1,cljs.core.cst$kw$input_DASH_class,"datepicker ");
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_class),(cljs.core.truth_(disabled)?"datepicker--disabled ":null)].join(''),cljs.core.cst$kw$ref,el_ref], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$clearable_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$min_DASH_date,cljs.core.cst$kw$max_DASH_date,cljs.core.cst$kw$i18n,cljs.core.cst$kw$week_DASH_numbers_QMARK_,cljs.core.cst$kw$container_DASH_class,cljs.core.cst$kw$input_DASH_class], 0)),cljs.core.cst$kw$class,input_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,(function (){var or__4185__auto__ = cljs.core.deref(input_value);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = komponentit.date.date_format(value,komponentit.datepicker.loc(i18n,cljs.core.cst$kw$date_DASH_format));
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return "";
}
}
})(),cljs.core.cst$kw$on_DASH_change,(function (e){
return cljs.core.reset_BANG_(input_value,clojure.string.trim(e.target.value));
}),cljs.core.cst$kw$on_DASH_focus,(function (___$1){
return cljs.core.reset_BANG_(open_QMARK_,true);
}),cljs.core.cst$kw$on_DASH_blur,(function (___$1){
return cljs.core.reset_BANG_(input_value,null);
}),cljs.core.cst$kw$on_DASH_key_DASH_down,(function (e){
var G__37720 = e.key;
switch (G__37720) {
case "Enter":
if(cljs.core.truth_(on_change)){
if(cljs.core.seq(cljs.core.deref(input_value))){
e.preventDefault();

var v_37723 = komponentit.date.date_read(cljs.core.deref(input_value),komponentit.datepicker.loc(i18n,cljs.core.cst$kw$date_DASH_format));
if(komponentit.datepicker.validate(opts,v_37723)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(v_37723) : on_change.call(null,v_37723));
} else {
}
} else {
}

cljs.core.reset_BANG_(open_QMARK_,false);
} else {
}

return cljs.core.reset_BANG_(input_value,null);

break;
default:
return null;

}
}),cljs.core.cst$kw$disabled,disabled], 0))], null),(cljs.core.truth_(cljs.core.deref(open_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.mixins.window_event_listener,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (e){
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref(el);
if(cljs.core.truth_(and__4174__auto__)){
return (!(goog.dom.contains(cljs.core.deref(el),e.target)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.reset_BANG_(open_QMARK_,false);
} else {
return null;
}
}),cljs.core.cst$kw$on_DASH_key_DASH_down,(function (e){
var G__37721 = e.keyCode;
switch (G__37721) {
case (27):
return cljs.core.reset_BANG_(open_QMARK_,false);

break;
default:
return null;

}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.calendar,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$container_DASH_class,"datepicker__dropdown calendar",cljs.core.cst$kw$value,value,cljs.core.cst$kw$on_DASH_change,(function (v){
cljs.core.reset_BANG_(open_QMARK_,false);

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(v) : on_change.call(null,v));
} else {
return null;
}
}),cljs.core.cst$kw$week_DASH_numbers_QMARK_,week_numbers_QMARK_,cljs.core.cst$kw$i18n,i18n,cljs.core.cst$kw$date_DASH_input_QMARK_,false,cljs.core.cst$kw$min_DASH_date,min_date,cljs.core.cst$kw$max_DASH_date,max_date], null)], null)], null):null),(cljs.core.truth_(clearable_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$datepicker__clear_DASH_button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$disabled,disabled,cljs.core.cst$kw$on_DASH_click,(function (e){
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(null) : on_change.call(null,null));
} else {
}

return null;
})], null)], null):null)], null);
});
});
