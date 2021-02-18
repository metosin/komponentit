// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.calendar');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('komponentit.date');
goog.require('cljs_time.core');
komponentit.calendar.default_i18n = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$date_DASH_placeholder,cljs.core.cst$kw$quicklist,cljs.core.cst$kw$this_DASH_month,cljs.core.cst$kw$start,cljs.core.cst$kw$this_DASH_week,cljs.core.cst$kw$today,cljs.core.cst$kw$week_DASH_short,cljs.core.cst$kw$date_DASH_format,cljs.core.cst$kw$end,cljs.core.cst$kw$month_DASH_format],["dd.mm.yyyy","Quicklist","This month","Start","This week","Today","W","d.M.yyyy","End","LLLL yyyy"]);
komponentit.calendar.loc = (function komponentit$calendar$loc(i18n,k){
if((((i18n == null)) || (cljs.core.ifn_QMARK_(i18n)))){
} else {
throw (new Error("Assert failed: (or (nil? i18n) (ifn? i18n))"));
}

var or__4185__auto__ = (cljs.core.truth_(i18n)?(i18n.cljs$core$IFn$_invoke$arity$1 ? i18n.cljs$core$IFn$_invoke$arity$1(k) : i18n.call(null,k)):null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(komponentit.calendar.default_i18n,k);
}
});
komponentit.calendar.first_day_of_the_week = (function komponentit$calendar$first_day_of_the_week(day){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(day,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((cljs_time.core.day_of_week(day) - (1))));
});
komponentit.calendar.last_day_of_the_week = (function komponentit$calendar$last_day_of_the_week(day){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(day,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(((7) - cljs_time.core.day_of_week(day))));
});
komponentit.calendar.date_input = (function komponentit$calendar$date_input(_){
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__24261){
var map__24262 = p__24261;
var map__24262__$1 = (((((!((map__24262 == null))))?(((((map__24262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24262):map__24262);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24262__$1,cljs.core.cst$kw$value);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24262__$1,cljs.core.cst$kw$text);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24262__$1,cljs.core.cst$kw$on_DASH_change);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24262__$1,cljs.core.cst$kw$opts);
var container_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24262__$1,cljs.core.cst$kw$container_DASH_class,"date-input__container");
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24262__$1,cljs.core.cst$kw$input_DASH_class,"date-input");
var warning_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24262__$1,cljs.core.cst$kw$warning_DASH_class,"date-input__warning");
var submit_button_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24262__$1,cljs.core.cst$kw$submit_DASH_button_DASH_class,"date-input__submit");
var map__24264 = opts;
var map__24264__$1 = (((((!((map__24264 == null))))?(((((map__24264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24264):map__24264);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24264__$1,cljs.core.cst$kw$i18n);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,container_class,cljs.core.cst$kw$on_DASH_submit,(function (e){
e.preventDefault();

e.stopPropagation();

var G__24266_24268 = komponentit.date.date_read(cljs.core.deref(input_value),komponentit.calendar.loc(i18n,cljs.core.cst$kw$date_DASH_format));
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__24266_24268) : on_change.call(null,G__24266_24268));

cljs.core.reset_BANG_(input_value,null);

return null;
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$date_DASH_input__name,text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,input_class,cljs.core.cst$kw$on_DASH_change,(function (e){
var x = clojure.string.trim(e.target.value);
return cljs.core.reset_BANG_(input_value,x);
}),cljs.core.cst$kw$on_DASH_blur,(function (e){
if(cljs.core.truth_((function (){var and__4174__auto__ = on_change;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.seq(cljs.core.deref(input_value));
} else {
return and__4174__auto__;
}
})())){
var G__24267_24269 = komponentit.date.date_read(cljs.core.deref(input_value),komponentit.calendar.loc(i18n,cljs.core.cst$kw$date_DASH_format));
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__24267_24269) : on_change.call(null,G__24267_24269));
} else {
}

cljs.core.reset_BANG_(input_value,null);

return null;
}),cljs.core.cst$kw$placeholder,komponentit.calendar.loc(i18n,cljs.core.cst$kw$date_DASH_placeholder),cljs.core.cst$kw$value,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = cljs.core.deref(input_value);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return komponentit.date.date_format(value,komponentit.calendar.loc(i18n,cljs.core.cst$kw$date_DASH_format));
}
})())], null)], null),(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref(input_value);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(komponentit.date.date_read(cljs.core.deref(input_value),komponentit.calendar.loc(i18n,cljs.core.cst$kw$date_DASH_format)));
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,warning_class], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$class,submit_button_class,cljs.core.cst$kw$disabled,cljs.core.not((function (){var and__4174__auto__ = cljs.core.deref(input_value);
if(cljs.core.truth_(and__4174__auto__)){
return komponentit.date.date_read(cljs.core.deref(input_value),komponentit.calendar.loc(i18n,cljs.core.cst$kw$date_DASH_format));
} else {
return and__4174__auto__;
}
})())], null)], null)], null);
});
});
komponentit.calendar.build_month = (function komponentit$calendar$build_month(day){
var start = cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1(day);
var end = cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1(day);
return cljs.core.vec((function (){var iter__4582__auto__ = (function komponentit$calendar$build_month_$_iter__24270(s__24271){
return (new cljs.core.LazySeq(null,(function (){
var s__24271__$1 = s__24271;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__24271__$1);
if(temp__4657__auto__){
var s__24271__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24271__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__24271__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__24273 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__24272 = (0);
while(true){
if((i__24272 < size__4581__auto__)){
var wom = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__24272);
cljs.core.chunk_append(b__24273,cljs.core.vec((function (){var iter__4582__auto__ = ((function (i__24272,wom,c__4580__auto__,size__4581__auto__,b__24273,s__24271__$2,temp__4657__auto__,start,end){
return (function komponentit$calendar$build_month_$_iter__24270_$_iter__24274(s__24275){
return (new cljs.core.LazySeq(null,((function (i__24272,wom,c__4580__auto__,size__4581__auto__,b__24273,s__24271__$2,temp__4657__auto__,start,end){
return (function (){
var s__24275__$1 = s__24275;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__24275__$1);
if(temp__4657__auto____$1){
var s__24275__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24275__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__24275__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__24277 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__24276 = (0);
while(true){
if((i__24276 < size__4581__auto____$1)){
var dow = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__24276);
var date = cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(komponentit.calendar.first_day_of_the_week(start),cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(wom)),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(dow));
cljs.core.chunk_append(b__24277,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$date,date,cljs.core.cst$kw$out_QMARK_,(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(day),cljs_time.core.month(date))))], null));

var G__24282 = (i__24276 + (1));
i__24276 = G__24282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24277),komponentit$calendar$build_month_$_iter__24270_$_iter__24274(cljs.core.chunk_rest(s__24275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24277),null);
}
} else {
var dow = cljs.core.first(s__24275__$2);
var date = cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(komponentit.calendar.first_day_of_the_week(start),cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(wom)),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(dow));
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$date,date,cljs.core.cst$kw$out_QMARK_,(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(day),cljs_time.core.month(date))))], null),komponentit$calendar$build_month_$_iter__24270_$_iter__24274(cljs.core.rest(s__24275__$2)));
}
} else {
return null;
}
break;
}
});})(i__24272,wom,c__4580__auto__,size__4581__auto__,b__24273,s__24271__$2,temp__4657__auto__,start,end))
,null,null));
});})(i__24272,wom,c__4580__auto__,size__4581__auto__,b__24273,s__24271__$2,temp__4657__auto__,start,end))
;
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
})()));

var G__24283 = (i__24272 + (1));
i__24272 = G__24283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24273),komponentit$calendar$build_month_$_iter__24270(cljs.core.chunk_rest(s__24271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24273),null);
}
} else {
var wom = cljs.core.first(s__24271__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__4582__auto__ = ((function (wom,s__24271__$2,temp__4657__auto__,start,end){
return (function komponentit$calendar$build_month_$_iter__24270_$_iter__24278(s__24279){
return (new cljs.core.LazySeq(null,(function (){
var s__24279__$1 = s__24279;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__24279__$1);
if(temp__4657__auto____$1){
var s__24279__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24279__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__24279__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__24281 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__24280 = (0);
while(true){
if((i__24280 < size__4581__auto__)){
var dow = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__24280);
var date = cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(komponentit.calendar.first_day_of_the_week(start),cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(wom)),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(dow));
cljs.core.chunk_append(b__24281,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$date,date,cljs.core.cst$kw$out_QMARK_,(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(day),cljs_time.core.month(date))))], null));

var G__24284 = (i__24280 + (1));
i__24280 = G__24284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24281),komponentit$calendar$build_month_$_iter__24270_$_iter__24278(cljs.core.chunk_rest(s__24279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24281),null);
}
} else {
var dow = cljs.core.first(s__24279__$2);
var date = cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(komponentit.calendar.first_day_of_the_week(start),cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(wom)),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(dow));
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$date,date,cljs.core.cst$kw$out_QMARK_,(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(day),cljs_time.core.month(date))))], null),komponentit$calendar$build_month_$_iter__24270_$_iter__24278(cljs.core.rest(s__24279__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(wom,s__24271__$2,temp__4657__auto__,start,end))
;
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
})()),komponentit$calendar$build_month_$_iter__24270(cljs.core.rest(s__24271__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
})());
});
komponentit.calendar.calendar = (function komponentit$calendar$calendar(_){
var month_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var prev_val = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__24285){
var map__24286 = p__24285;
var map__24286__$1 = (((((!((map__24286 == null))))?(((((map__24286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24286):map__24286);
var opts = map__24286__$1;
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,cljs.core.cst$kw$end);
var week_numbers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,cljs.core.cst$kw$week_DASH_numbers_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,cljs.core.cst$kw$on_DASH_change);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,cljs.core.cst$kw$i18n);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,cljs.core.cst$kw$text);
var container_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24286__$1,cljs.core.cst$kw$container_DASH_class,"calendar__container");
var calendar_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24286__$1,cljs.core.cst$kw$calendar_DASH_class,"calendar");
var min_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,cljs.core.cst$kw$min_DASH_date);
var max_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,cljs.core.cst$kw$max_DASH_date);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,cljs.core.cst$kw$value);
var date_input_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,cljs.core.cst$kw$date_DASH_input_QMARK_);
var calendar_date_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24286__$1,cljs.core.cst$kw$calendar_DASH_date_DASH_class,"calendar__date");
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,cljs.core.cst$kw$start);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.deref(prev_val))){
cljs.core.reset_BANG_(month_x,null);
} else {
}

cljs.core.reset_BANG_(prev_val,value);

var value_SINGLEQUOTE_ = (function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs_time.core.today();
}
})();
var date = (cljs.core.truth_(cljs.core.deref(month_x))?cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(value_SINGLEQUOTE_,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(month_x))):value_SINGLEQUOTE_);
var on_change__$1 = (function (x){
cljs.core.reset_BANG_(month_x,null);

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(x) : on_change.call(null,x));
} else {
return null;
}
});
var month = komponentit.calendar.build_month(date);
var month_name = clojure.string.capitalize(komponentit.date.date_format(date,komponentit.calendar.loc(i18n,cljs.core.cst$kw$month_DASH_format)));
var date_input_QMARK___$1 = ((date_input_QMARK_ === true) || ((date_input_QMARK_ == null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,container_class], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.str.cljs$core$IFn$_invoke$arity$1(calendar_class)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$calendar__header_DASH_cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$col_DASH_span,(cljs.core.truth_(week_numbers_QMARK_)?(8):(7))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$calendar_DASH_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$calendar_DASH_header__prev_DASH_month,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (___$1){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(month_x,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,(0)));

return null;
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$calendar_DASH_header__content,((date_input_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.date_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$text,text,cljs.core.cst$kw$on_DASH_change,(function (){var or__4185__auto__ = on_change__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.identity;
}
})(),cljs.core.cst$kw$opts,opts], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$calendar_DASH_header__month_DASH_name,month_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$calendar_DASH_header__next_DASH_month,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (___$1){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(month_x,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));

return null;
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,(cljs.core.truth_(week_numbers_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,komponentit.calendar.loc(i18n,cljs.core.cst$kw$week_DASH_short)], null):null),(function (){var iter__4582__auto__ = (function komponentit$calendar$calendar_$_iter__24288(s__24289){
return (new cljs.core.LazySeq(null,(function (){
var s__24289__$1 = s__24289;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__24289__$1);
if(temp__4657__auto__){
var s__24289__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24289__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__24289__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__24291 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__24290 = (0);
while(true){
if((i__24290 < size__4581__auto__)){
var day = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__24290);
var w = komponentit.date.date_format(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(day),"E");
cljs.core.chunk_append(b__24291,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$calendar__week_DASH_header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,w], null),w], null));

var G__24312 = (i__24290 + (1));
i__24290 = G__24312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24291),komponentit$calendar$calendar_$_iter__24288(cljs.core.chunk_rest(s__24289__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24291),null);
}
} else {
var day = cljs.core.first(s__24289__$2);
var w = komponentit.date.date_format(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(day),"E");
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$calendar__week_DASH_header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,w], null),w], null),komponentit$calendar$calendar_$_iter__24288(cljs.core.rest(s__24289__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.first(month));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__4582__auto__ = (function komponentit$calendar$calendar_$_iter__24292(s__24293){
return (new cljs.core.LazySeq(null,(function (){
var s__24293__$1 = s__24293;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__24293__$1);
if(temp__4657__auto__){
var s__24293__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24293__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__24293__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__24295 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__24294 = (0);
while(true){
if((i__24294 < size__4581__auto__)){
var week = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__24294);
var week_num = komponentit.date.date_format(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(cljs.core.first(week)),"w");
cljs.core.chunk_append(b__24295,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,week_num], null),(cljs.core.truth_(week_numbers_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$calendar__week,week_num], null):null),(function (){var iter__4582__auto__ = ((function (i__24294,week_num,week,c__4580__auto__,size__4581__auto__,b__24295,s__24293__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__24286,map__24286__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val){
return (function komponentit$calendar$calendar_$_iter__24292_$_iter__24296(s__24297){
return (new cljs.core.LazySeq(null,((function (i__24294,week_num,week,c__4580__auto__,size__4581__auto__,b__24295,s__24293__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__24286,map__24286__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val){
return (function (){
var s__24297__$1 = s__24297;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__24297__$1);
if(temp__4657__auto____$1){
var s__24297__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24297__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__24297__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__24299 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__24298 = (0);
while(true){
if((i__24298 < size__4581__auto____$1)){
var map__24300 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__24298);
var map__24300__$1 = (((((!((map__24300 == null))))?(((((map__24300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24300):map__24300);
var day = map__24300__$1;
var date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24300__$1,cljs.core.cst$kw$date);
var out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24300__$1,cljs.core.cst$kw$out_QMARK_);
var day_num = komponentit.date.date_format(date__$1,"d");
var disabled_QMARK_ = (function (){var or__4185__auto__ = (function (){var and__4174__auto__ = min_date;
if(cljs.core.truth_(and__4174__auto__)){
return (date__$1 < min_date);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = max_date;
if(cljs.core.truth_(and__4174__auto__)){
return (date__$1 > max_date);
} else {
return and__4174__auto__;
}
}
})();
var selected_QMARK_ = (function (){var or__4185__auto__ = (function (){var and__4174__auto__ = value;
if(cljs.core.truth_(and__4174__auto__)){
return value.equals(date__$1);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var and__4174__auto__ = start;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = end;
if(cljs.core.truth_(and__4174__auto____$1)){
return (((start <= date__$1)) && ((date__$1 <= end)));
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = (function (){var and__4174__auto__ = start;
if(cljs.core.truth_(and__4174__auto__)){
return start.equals(date__$1);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
var and__4174__auto__ = end;
if(cljs.core.truth_(and__4174__auto__)){
return end.equals(date__$1);
} else {
return and__4174__auto__;
}
}
}
}
})();
cljs.core.chunk_append(b__24299,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,date__$1,cljs.core.cst$kw$class,["calendar__date ",(cljs.core.truth_(week_numbers_QMARK_)?"calendar__date--with-week-numbers ":null),(cljs.core.truth_(disabled_QMARK_)?"calendar__date--disabled ":null),(cljs.core.truth_(out_QMARK_)?"calendar__date--out ":null),(cljs.core.truth_(selected_QMARK_)?"calendar__date--selected ":null),(cljs.core.truth_((function (){var and__4174__auto__ = start;
if(cljs.core.truth_(and__4174__auto__)){
return start.equals(date__$1);
} else {
return and__4174__auto__;
}
})())?"calendar__date--start ":null),(cljs.core.truth_((function (){var and__4174__auto__ = end;
if(cljs.core.truth_(and__4174__auto__)){
return end.equals(date__$1);
} else {
return and__4174__auto__;
}
})())?"calendar__date--end ":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["calendar__date-button ",(cljs.core.truth_(out_QMARK_)?"calendar__date-button--out ":null),(cljs.core.truth_(selected_QMARK_)?"calendar__date-button--selected ":null)].join(''),cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (i__24298,i__24294,day_num,disabled_QMARK_,selected_QMARK_,map__24300,map__24300__$1,day,date__$1,out_QMARK_,c__4580__auto____$1,size__4581__auto____$1,b__24299,s__24297__$2,temp__4657__auto____$1,week_num,week,c__4580__auto__,size__4581__auto__,b__24295,s__24293__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__24286,map__24286__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val){
return (function (){
return on_change__$1(date__$1);
});})(i__24298,i__24294,day_num,disabled_QMARK_,selected_QMARK_,map__24300,map__24300__$1,day,date__$1,out_QMARK_,c__4580__auto____$1,size__4581__auto____$1,b__24299,s__24297__$2,temp__4657__auto____$1,week_num,week,c__4580__auto__,size__4581__auto__,b__24295,s__24293__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__24286,map__24286__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val))
,cljs.core.cst$kw$disabled,disabled_QMARK_], null),day_num], null)], null));

var G__24313 = (i__24298 + (1));
i__24298 = G__24313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24299),komponentit$calendar$calendar_$_iter__24292_$_iter__24296(cljs.core.chunk_rest(s__24297__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24299),null);
}
} else {
var map__24302 = cljs.core.first(s__24297__$2);
var map__24302__$1 = (((((!((map__24302 == null))))?(((((map__24302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24302):map__24302);
var day = map__24302__$1;
var date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24302__$1,cljs.core.cst$kw$date);
var out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24302__$1,cljs.core.cst$kw$out_QMARK_);
var day_num = komponentit.date.date_format(date__$1,"d");
var disabled_QMARK_ = (function (){var or__4185__auto__ = (function (){var and__4174__auto__ = min_date;
if(cljs.core.truth_(and__4174__auto__)){
return (date__$1 < min_date);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = max_date;
if(cljs.core.truth_(and__4174__auto__)){
return (date__$1 > max_date);
} else {
return and__4174__auto__;
}
}
})();
var selected_QMARK_ = (function (){var or__4185__auto__ = (function (){var and__4174__auto__ = value;
if(cljs.core.truth_(and__4174__auto__)){
return value.equals(date__$1);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var and__4174__auto__ = start;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = end;
if(cljs.core.truth_(and__4174__auto____$1)){
return (((start <= date__$1)) && ((date__$1 <= end)));
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = (function (){var and__4174__auto__ = start;
if(cljs.core.truth_(and__4174__auto__)){
return start.equals(date__$1);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
var and__4174__auto__ = end;
if(cljs.core.truth_(and__4174__auto__)){
return end.equals(date__$1);
} else {
return and__4174__auto__;
}
}
}
}
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,date__$1,cljs.core.cst$kw$class,["calendar__date ",(cljs.core.truth_(week_numbers_QMARK_)?"calendar__date--with-week-numbers ":null),(cljs.core.truth_(disabled_QMARK_)?"calendar__date--disabled ":null),(cljs.core.truth_(out_QMARK_)?"calendar__date--out ":null),(cljs.core.truth_(selected_QMARK_)?"calendar__date--selected ":null),(cljs.core.truth_((function (){var and__4174__auto__ = start;
if(cljs.core.truth_(and__4174__auto__)){
return start.equals(date__$1);
} else {
return and__4174__auto__;
}
})())?"calendar__date--start ":null),(cljs.core.truth_((function (){var and__4174__auto__ = end;
if(cljs.core.truth_(and__4174__auto__)){
return end.equals(date__$1);
} else {
return and__4174__auto__;
}
})())?"calendar__date--end ":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["calendar__date-button ",(cljs.core.truth_(out_QMARK_)?"calendar__date-button--out ":null),(cljs.core.truth_(selected_QMARK_)?"calendar__date-button--selected ":null)].join(''),cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (i__24294,day_num,disabled_QMARK_,selected_QMARK_,map__24302,map__24302__$1,day,date__$1,out_QMARK_,s__24297__$2,temp__4657__auto____$1,week_num,week,c__4580__auto__,size__4581__auto__,b__24295,s__24293__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__24286,map__24286__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val){
return (function (){
return on_change__$1(date__$1);
});})(i__24294,day_num,disabled_QMARK_,selected_QMARK_,map__24302,map__24302__$1,day,date__$1,out_QMARK_,s__24297__$2,temp__4657__auto____$1,week_num,week,c__4580__auto__,size__4581__auto__,b__24295,s__24293__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__24286,map__24286__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val))
,cljs.core.cst$kw$disabled,disabled_QMARK_], null),day_num], null)], null),komponentit$calendar$calendar_$_iter__24292_$_iter__24296(cljs.core.rest(s__24297__$2)));
}
} else {
return null;
}
break;
}
});})(i__24294,week_num,week,c__4580__auto__,size__4581__auto__,b__24295,s__24293__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__24286,map__24286__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val))
,null,null));
});})(i__24294,week_num,week,c__4580__auto__,size__4581__auto__,b__24295,s__24293__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__24286,map__24286__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val))
;
return iter__4582__auto__(week);
})()], null));

var G__24314 = (i__24294 + (1));
i__24294 = G__24314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24295),komponentit$calendar$calendar_$_iter__24292(cljs.core.chunk_rest(s__24293__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24295),null);
}
} else {
var week = cljs.core.first(s__24293__$2);
var week_num = komponentit.date.date_format(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(cljs.core.first(week)),"w");
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,week_num], null),(cljs.core.truth_(week_numbers_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$calendar__week,week_num], null):null),(function (){var iter__4582__auto__ = ((function (week_num,week,s__24293__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__24286,map__24286__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val){
return (function komponentit$calendar$calendar_$_iter__24292_$_iter__24304(s__24305){
return (new cljs.core.LazySeq(null,(function (){
var s__24305__$1 = s__24305;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__24305__$1);
if(temp__4657__auto____$1){
var s__24305__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24305__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__24305__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__24307 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__24306 = (0);
while(true){
if((i__24306 < size__4581__auto__)){
var map__24308 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__24306);
var map__24308__$1 = (((((!((map__24308 == null))))?(((((map__24308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24308):map__24308);
var day = map__24308__$1;
var date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24308__$1,cljs.core.cst$kw$date);
var out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24308__$1,cljs.core.cst$kw$out_QMARK_);
var day_num = komponentit.date.date_format(date__$1,"d");
var disabled_QMARK_ = (function (){var or__4185__auto__ = (function (){var and__4174__auto__ = min_date;
if(cljs.core.truth_(and__4174__auto__)){
return (date__$1 < min_date);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = max_date;
if(cljs.core.truth_(and__4174__auto__)){
return (date__$1 > max_date);
} else {
return and__4174__auto__;
}
}
})();
var selected_QMARK_ = (function (){var or__4185__auto__ = (function (){var and__4174__auto__ = value;
if(cljs.core.truth_(and__4174__auto__)){
return value.equals(date__$1);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var and__4174__auto__ = start;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = end;
if(cljs.core.truth_(and__4174__auto____$1)){
return (((start <= date__$1)) && ((date__$1 <= end)));
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = (function (){var and__4174__auto__ = start;
if(cljs.core.truth_(and__4174__auto__)){
return start.equals(date__$1);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
var and__4174__auto__ = end;
if(cljs.core.truth_(and__4174__auto__)){
return end.equals(date__$1);
} else {
return and__4174__auto__;
}
}
}
}
})();
cljs.core.chunk_append(b__24307,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,date__$1,cljs.core.cst$kw$class,["calendar__date ",(cljs.core.truth_(week_numbers_QMARK_)?"calendar__date--with-week-numbers ":null),(cljs.core.truth_(disabled_QMARK_)?"calendar__date--disabled ":null),(cljs.core.truth_(out_QMARK_)?"calendar__date--out ":null),(cljs.core.truth_(selected_QMARK_)?"calendar__date--selected ":null),(cljs.core.truth_((function (){var and__4174__auto__ = start;
if(cljs.core.truth_(and__4174__auto__)){
return start.equals(date__$1);
} else {
return and__4174__auto__;
}
})())?"calendar__date--start ":null),(cljs.core.truth_((function (){var and__4174__auto__ = end;
if(cljs.core.truth_(and__4174__auto__)){
return end.equals(date__$1);
} else {
return and__4174__auto__;
}
})())?"calendar__date--end ":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["calendar__date-button ",(cljs.core.truth_(out_QMARK_)?"calendar__date-button--out ":null),(cljs.core.truth_(selected_QMARK_)?"calendar__date-button--selected ":null)].join(''),cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (i__24306,day_num,disabled_QMARK_,selected_QMARK_,map__24308,map__24308__$1,day,date__$1,out_QMARK_,c__4580__auto__,size__4581__auto__,b__24307,s__24305__$2,temp__4657__auto____$1,week_num,week,s__24293__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__24286,map__24286__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val){
return (function (){
return on_change__$1(date__$1);
});})(i__24306,day_num,disabled_QMARK_,selected_QMARK_,map__24308,map__24308__$1,day,date__$1,out_QMARK_,c__4580__auto__,size__4581__auto__,b__24307,s__24305__$2,temp__4657__auto____$1,week_num,week,s__24293__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__24286,map__24286__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val))
,cljs.core.cst$kw$disabled,disabled_QMARK_], null),day_num], null)], null));

var G__24315 = (i__24306 + (1));
i__24306 = G__24315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24307),komponentit$calendar$calendar_$_iter__24292_$_iter__24304(cljs.core.chunk_rest(s__24305__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24307),null);
}
} else {
var map__24310 = cljs.core.first(s__24305__$2);
var map__24310__$1 = (((((!((map__24310 == null))))?(((((map__24310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24310):map__24310);
var day = map__24310__$1;
var date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24310__$1,cljs.core.cst$kw$date);
var out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24310__$1,cljs.core.cst$kw$out_QMARK_);
var day_num = komponentit.date.date_format(date__$1,"d");
var disabled_QMARK_ = (function (){var or__4185__auto__ = (function (){var and__4174__auto__ = min_date;
if(cljs.core.truth_(and__4174__auto__)){
return (date__$1 < min_date);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = max_date;
if(cljs.core.truth_(and__4174__auto__)){
return (date__$1 > max_date);
} else {
return and__4174__auto__;
}
}
})();
var selected_QMARK_ = (function (){var or__4185__auto__ = (function (){var and__4174__auto__ = value;
if(cljs.core.truth_(and__4174__auto__)){
return value.equals(date__$1);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var and__4174__auto__ = start;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = end;
if(cljs.core.truth_(and__4174__auto____$1)){
return (((start <= date__$1)) && ((date__$1 <= end)));
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = (function (){var and__4174__auto__ = start;
if(cljs.core.truth_(and__4174__auto__)){
return start.equals(date__$1);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
var and__4174__auto__ = end;
if(cljs.core.truth_(and__4174__auto__)){
return end.equals(date__$1);
} else {
return and__4174__auto__;
}
}
}
}
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,date__$1,cljs.core.cst$kw$class,["calendar__date ",(cljs.core.truth_(week_numbers_QMARK_)?"calendar__date--with-week-numbers ":null),(cljs.core.truth_(disabled_QMARK_)?"calendar__date--disabled ":null),(cljs.core.truth_(out_QMARK_)?"calendar__date--out ":null),(cljs.core.truth_(selected_QMARK_)?"calendar__date--selected ":null),(cljs.core.truth_((function (){var and__4174__auto__ = start;
if(cljs.core.truth_(and__4174__auto__)){
return start.equals(date__$1);
} else {
return and__4174__auto__;
}
})())?"calendar__date--start ":null),(cljs.core.truth_((function (){var and__4174__auto__ = end;
if(cljs.core.truth_(and__4174__auto__)){
return end.equals(date__$1);
} else {
return and__4174__auto__;
}
})())?"calendar__date--end ":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["calendar__date-button ",(cljs.core.truth_(out_QMARK_)?"calendar__date-button--out ":null),(cljs.core.truth_(selected_QMARK_)?"calendar__date-button--selected ":null)].join(''),cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (day_num,disabled_QMARK_,selected_QMARK_,map__24310,map__24310__$1,day,date__$1,out_QMARK_,s__24305__$2,temp__4657__auto____$1,week_num,week,s__24293__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__24286,map__24286__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val){
return (function (){
return on_change__$1(date__$1);
});})(day_num,disabled_QMARK_,selected_QMARK_,map__24310,map__24310__$1,day,date__$1,out_QMARK_,s__24305__$2,temp__4657__auto____$1,week_num,week,s__24293__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__24286,map__24286__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val))
,cljs.core.cst$kw$disabled,disabled_QMARK_], null),day_num], null)], null),komponentit$calendar$calendar_$_iter__24292_$_iter__24304(cljs.core.rest(s__24305__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(week_num,week,s__24293__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__24286,map__24286__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val))
;
return iter__4582__auto__(week);
})()], null),komponentit$calendar$calendar_$_iter__24292(cljs.core.rest(s__24293__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(month);
})()], null)], null)], null);
});
});
komponentit.calendar.quicklist_item = (function komponentit$calendar$quicklist_item(p__24316){
var map__24317 = p__24316;
var map__24317__$1 = (((((!((map__24317 == null))))?(((((map__24317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24317):map__24317);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24317__$1,cljs.core.cst$kw$item);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24317__$1,cljs.core.cst$kw$opts);
var map__24319 = opts;
var map__24319__$1 = (((((!((map__24319 == null))))?(((((map__24319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24319):map__24319);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24319__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24319__$1,cljs.core.cst$kw$end);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24319__$1,cljs.core.cst$kw$on_DASH_change);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24319__$1,cljs.core.cst$kw$i18n);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$calendar_DASH_quicklist__item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (_){
if(cljs.core.truth_(on_change)){
var G__24321 = cljs.core.select_keys(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,cljs.core.cst$kw$end], null));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__24321) : on_change.call(null,G__24321));
} else {
return null;
}
}),cljs.core.cst$kw$class,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(item).equals(start);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(item).equals(end);
} else {
return and__4174__auto__;
}
})())?"calendar-quicklist__item--active ":null))], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null);
});
komponentit.calendar.quicklist = (function komponentit$calendar$quicklist(p__24322){
var map__24323 = p__24322;
var map__24323__$1 = (((((!((map__24323 == null))))?(((((map__24323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24323):map__24323);
var opts = map__24323__$1;
var container_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24323__$1,cljs.core.cst$kw$container_DASH_class,"calendar-quicklist__container");
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24323__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24323__$1,cljs.core.cst$kw$end);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24323__$1,cljs.core.cst$kw$on_DASH_change);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24323__$1,cljs.core.cst$kw$i18n);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,container_class], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$calendar_DASH_quicklist__title,komponentit.calendar.loc(i18n,cljs.core.cst$kw$quicklist)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$calendar_DASH_quicklist,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.quicklist_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,komponentit.calendar.loc(i18n,cljs.core.cst$kw$today),cljs.core.cst$kw$start,cljs_time.core.today(),cljs.core.cst$kw$end,cljs_time.core.today()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.quicklist_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,komponentit.calendar.loc(i18n,cljs.core.cst$kw$this_DASH_week),cljs.core.cst$kw$start,komponentit.calendar.first_day_of_the_week(cljs_time.core.today()),cljs.core.cst$kw$end,komponentit.calendar.last_day_of_the_week(cljs_time.core.today())], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.quicklist_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,komponentit.calendar.loc(i18n,cljs.core.cst$kw$this_DASH_month),cljs.core.cst$kw$start,cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1(cljs_time.core.today()),cljs.core.cst$kw$end,cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1(cljs_time.core.today())], null)], null)], null),(function (){var iter__4582__auto__ = (function komponentit$calendar$quicklist_$_iter__24325(s__24326){
return (new cljs.core.LazySeq(null,(function (){
var s__24326__$1 = s__24326;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__24326__$1);
if(temp__4657__auto__){
var s__24326__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24326__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__24326__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__24328 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__24327 = (0);
while(true){
if((i__24327 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__24327);
var month = cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.months.cljs$core$IFn$_invoke$arity$1(i));
cljs.core.chunk_append(b__24328,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.quicklist_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,clojure.string.capitalize(komponentit.date.date_format(month,"LLLL")),cljs.core.cst$kw$start,cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1(month),cljs.core.cst$kw$end,cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1(month)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)));

var G__24329 = (i__24327 + (1));
i__24327 = G__24329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24328),komponentit$calendar$quicklist_$_iter__24325(cljs.core.chunk_rest(s__24326__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24328),null);
}
} else {
var i = cljs.core.first(s__24326__$2);
var month = cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.months.cljs$core$IFn$_invoke$arity$1(i));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.quicklist_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,clojure.string.capitalize(komponentit.date.date_format(month,"LLLL")),cljs.core.cst$kw$start,cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1(month),cljs.core.cst$kw$end,cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1(month)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)),komponentit$calendar$quicklist_$_iter__24325(cljs.core.rest(s__24326__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(6)));
})()], null)], null);
});
komponentit.calendar.set_start = (function komponentit$calendar$set_start(p__24330,x){
var map__24331 = p__24330;
var map__24331__$1 = (((((!((map__24331 == null))))?(((((map__24331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24331):map__24331);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24331__$1,cljs.core.cst$kw$end);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,x,cljs.core.cst$kw$end,((((cljs.core.not(end)) || ((x > end))))?x:end)], null);
});
komponentit.calendar.set_end = (function komponentit$calendar$set_end(p__24333,x){
var map__24334 = p__24333;
var map__24334__$1 = (((((!((map__24334 == null))))?(((((map__24334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24334):map__24334);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24334__$1,cljs.core.cst$kw$start);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$end,x,cljs.core.cst$kw$start,((((cljs.core.not(start)) || ((x < start))))?x:start)], null);
});
komponentit.calendar.date_range = (function komponentit$calendar$date_range(p__24336){
var map__24337 = p__24336;
var map__24337__$1 = (((((!((map__24337 == null))))?(((((map__24337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24337):map__24337);
var opts = map__24337__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337__$1,cljs.core.cst$kw$end);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337__$1,cljs.core.cst$kw$on_DASH_change);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337__$1,cljs.core.cst$kw$i18n);
var quicklist_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24337__$1,cljs.core.cst$kw$quicklist_QMARK_);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$date_DASH_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.calendar,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$container_DASH_class,"date-range__calendar",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$text,komponentit.calendar.loc(i18n,cljs.core.cst$kw$start),cljs.core.cst$kw$value,start,cljs.core.cst$kw$on_DASH_change,(function (x){
if(cljs.core.truth_(on_change)){
var G__24339 = komponentit.calendar.set_start(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$end,end], null),x);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__24339) : on_change.call(null,G__24339));
} else {
return null;
}
})], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.calendar,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$container_DASH_class,"date-range__calendar",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$text,komponentit.calendar.loc(i18n,cljs.core.cst$kw$end),cljs.core.cst$kw$value,end,cljs.core.cst$kw$on_DASH_change,(function (x){
if(cljs.core.truth_(on_change)){
var G__24340 = komponentit.calendar.set_end(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$start,start], null),x);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__24340) : on_change.call(null,G__24340));
} else {
return null;
}
})], 0))], null),((((quicklist_QMARK_ === true) || ((quicklist_QMARK_ == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.quicklist,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$container_DASH_class,"date-range__quicklist",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_change,(function (p__24341){
var map__24342 = p__24341;
var map__24342__$1 = (((((!((map__24342 == null))))?(((((map__24342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24342):map__24342);
var x = map__24342__$1;
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24342__$1,cljs.core.cst$kw$start);
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24342__$1,cljs.core.cst$kw$end);
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(x) : on_change.call(null,x));
} else {
return null;
}
})], 0))], null):null)], null);
});
