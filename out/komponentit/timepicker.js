// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.timepicker');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('goog.date.UtcDateTime');
komponentit.timepicker.allow_only_numbers = (function komponentit$timepicker$allow_only_numbers(e){
if((!(((((48) <= e.which)) && ((e.which <= (57))))))){
return e.preventDefault();
} else {
return null;
}
});
komponentit.timepicker.validate_hours = (function komponentit$timepicker$validate_hours(h){
var hours_len = cljs.core.count(h);
var hours_val = parseInt(h);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hours_len,(0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hours_len,(1))) && (((((0) <= hours_val)) && ((hours_val <= (9))))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hours_len,(2))) && (((((0) <= hours_val)) && ((hours_val <= (23))))))))){
return hours_val;
} else {
return null;
}
});
komponentit.timepicker.validate_minutes = (function komponentit$timepicker$validate_minutes(m){
var minutes_len = cljs.core.count(m);
var minutes_val = parseInt(m);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes_len,(0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes_len,(1))) && (((((0) <= minutes_val)) && ((minutes_val <= (9))))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes_len,(2))) && (((((0) <= minutes_val)) && ((minutes_val <= (59))))))))){
return minutes_val;
} else {
return null;
}
});
komponentit.timepicker.padded_value = (function komponentit$timepicker$padded_value(value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(value))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
} else {
return value;
}
});
komponentit.timepicker.clone_date = (function komponentit$timepicker$clone_date(value){
if(cljs.core.truth_(value)){
return value.clone();
} else {
var G__31857 = (new goog.date.UtcDateTime());
G__31857.setHours((0));

G__31857.setMinutes((0));

G__31857.setSeconds((0));

return G__31857;
}
});
komponentit.timepicker.timepicker = (function komponentit$timepicker$timepicker(p__31858){
var map__31859 = p__31858;
var map__31859__$1 = (((((!((map__31859 == null))))?(((((map__31859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31859):map__31859);
var opts = map__31859__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31859__$1,cljs.core.cst$kw$value);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31859__$1,cljs.core.cst$kw$on_DASH_change);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31859__$1,cljs.core.cst$kw$on_DASH_blur);
var clearable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31859__$1,cljs.core.cst$kw$clearable_QMARK_);
var hours = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var minutes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__31861){
var map__31862 = p__31861;
var map__31862__$1 = (((((!((map__31862 == null))))?(((((map__31862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31862):map__31862);
var opts__$1 = map__31862__$1;
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31862__$1,cljs.core.cst$kw$value);
var on_change__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31862__$1,cljs.core.cst$kw$on_DASH_change);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31862__$1,cljs.core.cst$kw$on_DASH_select);
var on_blur__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31862__$1,cljs.core.cst$kw$on_DASH_blur);
var clearable_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31862__$1,cljs.core.cst$kw$clearable_QMARK_);
if(cljs.core.truth_(on_select)){
console.warn("komponentit.timepicker/timepicker :on-select option is deprecated, use :on-change instead.");
} else {
}

var on_change__$2 = (function (){var or__4185__auto__ = on_change__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return on_select;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$timepicker,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$timepicker_DASH_hours,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$min,cljs.core.cst$kw$on_DASH_key_DASH_press,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$value,cljs.core.cst$kw$on_DASH_blur,cljs.core.cst$kw$type,cljs.core.cst$kw$max,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$step],[(0),(function (e){
var G__31864_31874 = e.key;
switch (G__31864_31874) {
case "Enter":
if(cljs.core.not(isNaN(cljs.core.deref(hours)))){
var G__31865_31876 = (function (){var G__31866 = komponentit.timepicker.clone_date(value__$1);
G__31866.setHours(cljs.core.deref(hours));

return G__31866;
})();
(on_change__$2.cljs$core$IFn$_invoke$arity$1 ? on_change__$2.cljs$core$IFn$_invoke$arity$1(G__31865_31876) : on_change__$2.call(null,G__31865_31876));
} else {
}

cljs.core.reset_BANG_(hours,null);

break;
default:

}

return komponentit.timepicker.allow_only_numbers(e);
}),"hh",(function (){var or__4185__auto__ = cljs.core.deref(hours);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.truth_(value__$1)){
return komponentit.timepicker.padded_value(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1.getHours()));
} else {
return null;
}
}
})(),(function (e){
if(cljs.core.not(isNaN(cljs.core.deref(hours)))){
var G__31867_31877 = (function (){var G__31868 = komponentit.timepicker.clone_date(value__$1);
G__31868.setHours(cljs.core.deref(hours));

return G__31868;
})();
(on_change__$2.cljs$core$IFn$_invoke$arity$1 ? on_change__$2.cljs$core$IFn$_invoke$arity$1(G__31867_31877) : on_change__$2.call(null,G__31867_31877));
} else {
}

cljs.core.reset_BANG_(hours,null);

if(cljs.core.truth_(on_blur__$1)){
(on_blur__$1.cljs$core$IFn$_invoke$arity$1 ? on_blur__$1.cljs$core$IFn$_invoke$arity$1(e) : on_blur__$1.call(null,e));
} else {
}

return null;
}),"number",(23),(function (e){
var temp__4655__auto__ = komponentit.timepicker.validate_hours(e.target.value);
if(cljs.core.truth_(temp__4655__auto__)){
var x = temp__4655__auto__;
return cljs.core.reset_BANG_(hours,x);
} else {
return null;
}
}),(1)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$timepicker_DASH_minutes,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$min,cljs.core.cst$kw$on_DASH_key_DASH_press,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$value,cljs.core.cst$kw$on_DASH_blur,cljs.core.cst$kw$type,cljs.core.cst$kw$max,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$step],[(0),(function (e){
var G__31869_31878 = e.key;
switch (G__31869_31878) {
case "Enter":
if(cljs.core.not(isNaN(cljs.core.deref(hours)))){
var G__31870_31880 = (function (){var G__31871 = komponentit.timepicker.clone_date(value__$1);
G__31871.setMinutes(cljs.core.deref(minutes));

return G__31871;
})();
(on_change__$2.cljs$core$IFn$_invoke$arity$1 ? on_change__$2.cljs$core$IFn$_invoke$arity$1(G__31870_31880) : on_change__$2.call(null,G__31870_31880));
} else {
}

cljs.core.reset_BANG_(minutes,null);

break;
default:

}

return komponentit.timepicker.allow_only_numbers(e);
}),"mm",(function (){var or__4185__auto__ = cljs.core.deref(minutes);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.truth_(value__$1)){
return komponentit.timepicker.padded_value(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1.getMinutes()));
} else {
return null;
}
}
})(),(function (e){
if(cljs.core.not(isNaN(cljs.core.deref(minutes)))){
var G__31872_31881 = (function (){var G__31873 = komponentit.timepicker.clone_date(value__$1);
G__31873.setMinutes(cljs.core.deref(minutes));

return G__31873;
})();
(on_change__$2.cljs$core$IFn$_invoke$arity$1 ? on_change__$2.cljs$core$IFn$_invoke$arity$1(G__31872_31881) : on_change__$2.call(null,G__31872_31881));
} else {
}

cljs.core.reset_BANG_(minutes,null);

if(cljs.core.truth_(on_blur__$1)){
(on_blur__$1.cljs$core$IFn$_invoke$arity$1 ? on_blur__$1.cljs$core$IFn$_invoke$arity$1(e) : on_blur__$1.call(null,e));
} else {
}

return null;
}),"number",(59),(function (e){
var temp__4655__auto__ = komponentit.timepicker.validate_minutes(e.target.value);
if(cljs.core.truth_(temp__4655__auto__)){
var x = temp__4655__auto__;
return cljs.core.reset_BANG_(minutes,x);
} else {
return null;
}
}),(1)])], null),(cljs.core.truth_(clearable_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$glyphicon$glyphicon_DASH_remove$timepicker_DASH_remove_DASH_btn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return (on_change__$2.cljs$core$IFn$_invoke$arity$1 ? on_change__$2.cljs$core$IFn$_invoke$arity$1(null) : on_change__$2.call(null,null));
})], null)], null):null)], null);
});
});
