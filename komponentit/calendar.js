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
return (function (p__25155){
var map__25156 = p__25155;
var map__25156__$1 = (((((!((map__25156 == null))))?(((((map__25156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25156):map__25156);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25156__$1,cljs.core.cst$kw$value);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25156__$1,cljs.core.cst$kw$text);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25156__$1,cljs.core.cst$kw$on_DASH_change);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25156__$1,cljs.core.cst$kw$opts);
var container_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25156__$1,cljs.core.cst$kw$container_DASH_class,"date-input__container");
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25156__$1,cljs.core.cst$kw$input_DASH_class,"date-input");
var warning_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25156__$1,cljs.core.cst$kw$warning_DASH_class,"date-input__warning");
var submit_button_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25156__$1,cljs.core.cst$kw$submit_DASH_button_DASH_class,"date-input__submit");
var map__25158 = opts;
var map__25158__$1 = (((((!((map__25158 == null))))?(((((map__25158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25158):map__25158);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25158__$1,cljs.core.cst$kw$i18n);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,container_class,cljs.core.cst$kw$on_DASH_submit,(function (e){
e.preventDefault();

e.stopPropagation();

var G__25160_25162 = komponentit.date.date_read(cljs.core.deref(input_value),komponentit.calendar.loc(i18n,cljs.core.cst$kw$date_DASH_format));
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__25160_25162) : on_change.call(null,G__25160_25162));

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
var G__25161_25163 = komponentit.date.date_read(cljs.core.deref(input_value),komponentit.calendar.loc(i18n,cljs.core.cst$kw$date_DASH_format));
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__25161_25163) : on_change.call(null,G__25161_25163));
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
return cljs.core.vec((function (){var iter__4582__auto__ = (function komponentit$calendar$build_month_$_iter__25164(s__25165){
return (new cljs.core.LazySeq(null,(function (){
var s__25165__$1 = s__25165;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__25165__$1);
if(temp__4657__auto__){
var s__25165__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25165__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__25165__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__25167 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__25166 = (0);
while(true){
if((i__25166 < size__4581__auto__)){
var wom = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__25166);
cljs.core.chunk_append(b__25167,cljs.core.vec((function (){var iter__4582__auto__ = ((function (i__25166,wom,c__4580__auto__,size__4581__auto__,b__25167,s__25165__$2,temp__4657__auto__,start,end){
return (function komponentit$calendar$build_month_$_iter__25164_$_iter__25168(s__25169){
return (new cljs.core.LazySeq(null,((function (i__25166,wom,c__4580__auto__,size__4581__auto__,b__25167,s__25165__$2,temp__4657__auto__,start,end){
return (function (){
var s__25169__$1 = s__25169;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__25169__$1);
if(temp__4657__auto____$1){
var s__25169__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25169__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__25169__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__25171 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__25170 = (0);
while(true){
if((i__25170 < size__4581__auto____$1)){
var dow = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__25170);
var date = cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(komponentit.calendar.first_day_of_the_week(start),cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(wom)),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(dow));
cljs.core.chunk_append(b__25171,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$date,date,cljs.core.cst$kw$out_QMARK_,(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(day),cljs_time.core.month(date))))], null));

var G__25176 = (i__25170 + (1));
i__25170 = G__25176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25171),komponentit$calendar$build_month_$_iter__25164_$_iter__25168(cljs.core.chunk_rest(s__25169__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25171),null);
}
} else {
var dow = cljs.core.first(s__25169__$2);
var date = cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(komponentit.calendar.first_day_of_the_week(start),cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(wom)),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(dow));
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$date,date,cljs.core.cst$kw$out_QMARK_,(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(day),cljs_time.core.month(date))))], null),komponentit$calendar$build_month_$_iter__25164_$_iter__25168(cljs.core.rest(s__25169__$2)));
}
} else {
return null;
}
break;
}
});})(i__25166,wom,c__4580__auto__,size__4581__auto__,b__25167,s__25165__$2,temp__4657__auto__,start,end))
,null,null));
});})(i__25166,wom,c__4580__auto__,size__4581__auto__,b__25167,s__25165__$2,temp__4657__auto__,start,end))
;
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
})()));

var G__25177 = (i__25166 + (1));
i__25166 = G__25177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25167),komponentit$calendar$build_month_$_iter__25164(cljs.core.chunk_rest(s__25165__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25167),null);
}
} else {
var wom = cljs.core.first(s__25165__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__4582__auto__ = ((function (wom,s__25165__$2,temp__4657__auto__,start,end){
return (function komponentit$calendar$build_month_$_iter__25164_$_iter__25172(s__25173){
return (new cljs.core.LazySeq(null,(function (){
var s__25173__$1 = s__25173;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__25173__$1);
if(temp__4657__auto____$1){
var s__25173__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25173__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__25173__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__25175 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__25174 = (0);
while(true){
if((i__25174 < size__4581__auto__)){
var dow = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__25174);
var date = cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(komponentit.calendar.first_day_of_the_week(start),cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(wom)),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(dow));
cljs.core.chunk_append(b__25175,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$date,date,cljs.core.cst$kw$out_QMARK_,(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(day),cljs_time.core.month(date))))], null));

var G__25178 = (i__25174 + (1));
i__25174 = G__25178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25175),komponentit$calendar$build_month_$_iter__25164_$_iter__25172(cljs.core.chunk_rest(s__25173__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25175),null);
}
} else {
var dow = cljs.core.first(s__25173__$2);
var date = cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(komponentit.calendar.first_day_of_the_week(start),cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(wom)),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(dow));
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$date,date,cljs.core.cst$kw$out_QMARK_,(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(day),cljs_time.core.month(date))))], null),komponentit$calendar$build_month_$_iter__25164_$_iter__25172(cljs.core.rest(s__25173__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(wom,s__25165__$2,temp__4657__auto__,start,end))
;
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
})()),komponentit$calendar$build_month_$_iter__25164(cljs.core.rest(s__25165__$2)));
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
return (function (p__25179){
var map__25180 = p__25179;
var map__25180__$1 = (((((!((map__25180 == null))))?(((((map__25180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25180):map__25180);
var opts = map__25180__$1;
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25180__$1,cljs.core.cst$kw$end);
var week_numbers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25180__$1,cljs.core.cst$kw$week_DASH_numbers_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25180__$1,cljs.core.cst$kw$on_DASH_change);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25180__$1,cljs.core.cst$kw$i18n);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25180__$1,cljs.core.cst$kw$text);
var container_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25180__$1,cljs.core.cst$kw$container_DASH_class,"calendar__container");
var calendar_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25180__$1,cljs.core.cst$kw$calendar_DASH_class,"calendar");
var min_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25180__$1,cljs.core.cst$kw$min_DASH_date);
var max_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25180__$1,cljs.core.cst$kw$max_DASH_date);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25180__$1,cljs.core.cst$kw$value);
var date_input_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25180__$1,cljs.core.cst$kw$date_DASH_input_QMARK_);
var calendar_date_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25180__$1,cljs.core.cst$kw$calendar_DASH_date_DASH_class,"calendar__date");
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25180__$1,cljs.core.cst$kw$start);
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
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,(cljs.core.truth_(week_numbers_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,komponentit.calendar.loc(i18n,cljs.core.cst$kw$week_DASH_short)], null):null),(function (){var iter__4582__auto__ = (function komponentit$calendar$calendar_$_iter__25182(s__25183){
return (new cljs.core.LazySeq(null,(function (){
var s__25183__$1 = s__25183;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__25183__$1);
if(temp__4657__auto__){
var s__25183__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25183__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__25183__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__25185 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__25184 = (0);
while(true){
if((i__25184 < size__4581__auto__)){
var day = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__25184);
var w = komponentit.date.date_format(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(day),"E");
cljs.core.chunk_append(b__25185,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$calendar__week_DASH_header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,w], null),w], null));

var G__25206 = (i__25184 + (1));
i__25184 = G__25206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25185),komponentit$calendar$calendar_$_iter__25182(cljs.core.chunk_rest(s__25183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25185),null);
}
} else {
var day = cljs.core.first(s__25183__$2);
var w = komponentit.date.date_format(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(day),"E");
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$calendar__week_DASH_header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,w], null),w], null),komponentit$calendar$calendar_$_iter__25182(cljs.core.rest(s__25183__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.first(month));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__4582__auto__ = (function komponentit$calendar$calendar_$_iter__25186(s__25187){
return (new cljs.core.LazySeq(null,(function (){
var s__25187__$1 = s__25187;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__25187__$1);
if(temp__4657__auto__){
var s__25187__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25187__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__25187__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__25189 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__25188 = (0);
while(true){
if((i__25188 < size__4581__auto__)){
var week = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__25188);
var week_num = komponentit.date.date_format(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(cljs.core.first(week)),"w");
cljs.core.chunk_append(b__25189,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,week_num], null),(cljs.core.truth_(week_numbers_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$calendar__week,week_num], null):null),(function (){var iter__4582__auto__ = ((function (i__25188,week_num,week,c__4580__auto__,size__4581__auto__,b__25189,s__25187__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__25180,map__25180__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val){
return (function komponentit$calendar$calendar_$_iter__25186_$_iter__25190(s__25191){
return (new cljs.core.LazySeq(null,((function (i__25188,week_num,week,c__4580__auto__,size__4581__auto__,b__25189,s__25187__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__25180,map__25180__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val){
return (function (){
var s__25191__$1 = s__25191;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__25191__$1);
if(temp__4657__auto____$1){
var s__25191__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25191__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__25191__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__25193 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__25192 = (0);
while(true){
if((i__25192 < size__4581__auto____$1)){
var map__25194 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__25192);
var map__25194__$1 = (((((!((map__25194 == null))))?(((((map__25194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25194):map__25194);
var day = map__25194__$1;
var date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25194__$1,cljs.core.cst$kw$date);
var out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25194__$1,cljs.core.cst$kw$out_QMARK_);
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
cljs.core.chunk_append(b__25193,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,date__$1,cljs.core.cst$kw$class,["calendar__date ",(cljs.core.truth_(week_numbers_QMARK_)?"calendar__date--with-week-numbers ":null),(cljs.core.truth_(disabled_QMARK_)?"calendar__date--disabled ":null),(cljs.core.truth_(out_QMARK_)?"calendar__date--out ":null),(cljs.core.truth_(selected_QMARK_)?"calendar__date--selected ":null),(cljs.core.truth_((function (){var and__4174__auto__ = start;
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
})())?"calendar__date--end ":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["calendar__date-button ",(cljs.core.truth_(out_QMARK_)?"calendar__date-button--out ":null),(cljs.core.truth_(selected_QMARK_)?"calendar__date-button--selected ":null)].join(''),cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (i__25192,i__25188,day_num,disabled_QMARK_,selected_QMARK_,map__25194,map__25194__$1,day,date__$1,out_QMARK_,c__4580__auto____$1,size__4581__auto____$1,b__25193,s__25191__$2,temp__4657__auto____$1,week_num,week,c__4580__auto__,size__4581__auto__,b__25189,s__25187__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__25180,map__25180__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val){
return (function (){
return on_change__$1(date__$1);
});})(i__25192,i__25188,day_num,disabled_QMARK_,selected_QMARK_,map__25194,map__25194__$1,day,date__$1,out_QMARK_,c__4580__auto____$1,size__4581__auto____$1,b__25193,s__25191__$2,temp__4657__auto____$1,week_num,week,c__4580__auto__,size__4581__auto__,b__25189,s__25187__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__25180,map__25180__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val))
,cljs.core.cst$kw$disabled,disabled_QMARK_], null),day_num], null)], null));

var G__25207 = (i__25192 + (1));
i__25192 = G__25207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25193),komponentit$calendar$calendar_$_iter__25186_$_iter__25190(cljs.core.chunk_rest(s__25191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25193),null);
}
} else {
var map__25196 = cljs.core.first(s__25191__$2);
var map__25196__$1 = (((((!((map__25196 == null))))?(((((map__25196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25196):map__25196);
var day = map__25196__$1;
var date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25196__$1,cljs.core.cst$kw$date);
var out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25196__$1,cljs.core.cst$kw$out_QMARK_);
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
})())?"calendar__date--end ":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["calendar__date-button ",(cljs.core.truth_(out_QMARK_)?"calendar__date-button--out ":null),(cljs.core.truth_(selected_QMARK_)?"calendar__date-button--selected ":null)].join(''),cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (i__25188,day_num,disabled_QMARK_,selected_QMARK_,map__25196,map__25196__$1,day,date__$1,out_QMARK_,s__25191__$2,temp__4657__auto____$1,week_num,week,c__4580__auto__,size__4581__auto__,b__25189,s__25187__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__25180,map__25180__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val){
return (function (){
return on_change__$1(date__$1);
});})(i__25188,day_num,disabled_QMARK_,selected_QMARK_,map__25196,map__25196__$1,day,date__$1,out_QMARK_,s__25191__$2,temp__4657__auto____$1,week_num,week,c__4580__auto__,size__4581__auto__,b__25189,s__25187__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__25180,map__25180__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val))
,cljs.core.cst$kw$disabled,disabled_QMARK_], null),day_num], null)], null),komponentit$calendar$calendar_$_iter__25186_$_iter__25190(cljs.core.rest(s__25191__$2)));
}
} else {
return null;
}
break;
}
});})(i__25188,week_num,week,c__4580__auto__,size__4581__auto__,b__25189,s__25187__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__25180,map__25180__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val))
,null,null));
});})(i__25188,week_num,week,c__4580__auto__,size__4581__auto__,b__25189,s__25187__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__25180,map__25180__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val))
;
return iter__4582__auto__(week);
})()], null));

var G__25208 = (i__25188 + (1));
i__25188 = G__25208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25189),komponentit$calendar$calendar_$_iter__25186(cljs.core.chunk_rest(s__25187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25189),null);
}
} else {
var week = cljs.core.first(s__25187__$2);
var week_num = komponentit.date.date_format(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(cljs.core.first(week)),"w");
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,week_num], null),(cljs.core.truth_(week_numbers_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$calendar__week,week_num], null):null),(function (){var iter__4582__auto__ = ((function (week_num,week,s__25187__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__25180,map__25180__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val){
return (function komponentit$calendar$calendar_$_iter__25186_$_iter__25198(s__25199){
return (new cljs.core.LazySeq(null,(function (){
var s__25199__$1 = s__25199;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__25199__$1);
if(temp__4657__auto____$1){
var s__25199__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25199__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__25199__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__25201 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__25200 = (0);
while(true){
if((i__25200 < size__4581__auto__)){
var map__25202 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__25200);
var map__25202__$1 = (((((!((map__25202 == null))))?(((((map__25202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25202):map__25202);
var day = map__25202__$1;
var date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25202__$1,cljs.core.cst$kw$date);
var out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25202__$1,cljs.core.cst$kw$out_QMARK_);
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
cljs.core.chunk_append(b__25201,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,date__$1,cljs.core.cst$kw$class,["calendar__date ",(cljs.core.truth_(week_numbers_QMARK_)?"calendar__date--with-week-numbers ":null),(cljs.core.truth_(disabled_QMARK_)?"calendar__date--disabled ":null),(cljs.core.truth_(out_QMARK_)?"calendar__date--out ":null),(cljs.core.truth_(selected_QMARK_)?"calendar__date--selected ":null),(cljs.core.truth_((function (){var and__4174__auto__ = start;
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
})())?"calendar__date--end ":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["calendar__date-button ",(cljs.core.truth_(out_QMARK_)?"calendar__date-button--out ":null),(cljs.core.truth_(selected_QMARK_)?"calendar__date-button--selected ":null)].join(''),cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (i__25200,day_num,disabled_QMARK_,selected_QMARK_,map__25202,map__25202__$1,day,date__$1,out_QMARK_,c__4580__auto__,size__4581__auto__,b__25201,s__25199__$2,temp__4657__auto____$1,week_num,week,s__25187__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__25180,map__25180__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val){
return (function (){
return on_change__$1(date__$1);
});})(i__25200,day_num,disabled_QMARK_,selected_QMARK_,map__25202,map__25202__$1,day,date__$1,out_QMARK_,c__4580__auto__,size__4581__auto__,b__25201,s__25199__$2,temp__4657__auto____$1,week_num,week,s__25187__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__25180,map__25180__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val))
,cljs.core.cst$kw$disabled,disabled_QMARK_], null),day_num], null)], null));

var G__25209 = (i__25200 + (1));
i__25200 = G__25209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25201),komponentit$calendar$calendar_$_iter__25186_$_iter__25198(cljs.core.chunk_rest(s__25199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25201),null);
}
} else {
var map__25204 = cljs.core.first(s__25199__$2);
var map__25204__$1 = (((((!((map__25204 == null))))?(((((map__25204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25204):map__25204);
var day = map__25204__$1;
var date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25204__$1,cljs.core.cst$kw$date);
var out_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25204__$1,cljs.core.cst$kw$out_QMARK_);
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
})())?"calendar__date--end ":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["calendar__date-button ",(cljs.core.truth_(out_QMARK_)?"calendar__date-button--out ":null),(cljs.core.truth_(selected_QMARK_)?"calendar__date-button--selected ":null)].join(''),cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (day_num,disabled_QMARK_,selected_QMARK_,map__25204,map__25204__$1,day,date__$1,out_QMARK_,s__25199__$2,temp__4657__auto____$1,week_num,week,s__25187__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__25180,map__25180__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val){
return (function (){
return on_change__$1(date__$1);
});})(day_num,disabled_QMARK_,selected_QMARK_,map__25204,map__25204__$1,day,date__$1,out_QMARK_,s__25199__$2,temp__4657__auto____$1,week_num,week,s__25187__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__25180,map__25180__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val))
,cljs.core.cst$kw$disabled,disabled_QMARK_], null),day_num], null)], null),komponentit$calendar$calendar_$_iter__25186_$_iter__25198(cljs.core.rest(s__25199__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(week_num,week,s__25187__$2,temp__4657__auto__,value_SINGLEQUOTE_,date,on_change__$1,month,month_name,date_input_QMARK___$1,map__25180,map__25180__$1,opts,end,week_numbers_QMARK_,on_change,i18n,text,container_class,calendar_class,min_date,max_date,value,date_input_QMARK_,calendar_date_class,start,month_x,prev_val))
;
return iter__4582__auto__(week);
})()], null),komponentit$calendar$calendar_$_iter__25186(cljs.core.rest(s__25187__$2)));
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
komponentit.calendar.quicklist_item = (function komponentit$calendar$quicklist_item(p__25210){
var map__25211 = p__25210;
var map__25211__$1 = (((((!((map__25211 == null))))?(((((map__25211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25211):map__25211);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25211__$1,cljs.core.cst$kw$item);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25211__$1,cljs.core.cst$kw$opts);
var map__25213 = opts;
var map__25213__$1 = (((((!((map__25213 == null))))?(((((map__25213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25213):map__25213);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25213__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25213__$1,cljs.core.cst$kw$end);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25213__$1,cljs.core.cst$kw$on_DASH_change);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25213__$1,cljs.core.cst$kw$i18n);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$calendar_DASH_quicklist__item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (_){
if(cljs.core.truth_(on_change)){
var G__25215 = cljs.core.select_keys(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,cljs.core.cst$kw$end], null));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__25215) : on_change.call(null,G__25215));
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
komponentit.calendar.quicklist = (function komponentit$calendar$quicklist(p__25216){
var map__25217 = p__25216;
var map__25217__$1 = (((((!((map__25217 == null))))?(((((map__25217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25217):map__25217);
var opts = map__25217__$1;
var container_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25217__$1,cljs.core.cst$kw$container_DASH_class,"calendar-quicklist__container");
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25217__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25217__$1,cljs.core.cst$kw$end);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25217__$1,cljs.core.cst$kw$on_DASH_change);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25217__$1,cljs.core.cst$kw$i18n);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,container_class], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$calendar_DASH_quicklist__title,komponentit.calendar.loc(i18n,cljs.core.cst$kw$quicklist)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$calendar_DASH_quicklist,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.quicklist_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,komponentit.calendar.loc(i18n,cljs.core.cst$kw$today),cljs.core.cst$kw$start,cljs_time.core.today(),cljs.core.cst$kw$end,cljs_time.core.today()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.quicklist_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,komponentit.calendar.loc(i18n,cljs.core.cst$kw$this_DASH_week),cljs.core.cst$kw$start,komponentit.calendar.first_day_of_the_week(cljs_time.core.today()),cljs.core.cst$kw$end,komponentit.calendar.last_day_of_the_week(cljs_time.core.today())], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.quicklist_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,komponentit.calendar.loc(i18n,cljs.core.cst$kw$this_DASH_month),cljs.core.cst$kw$start,cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1(cljs_time.core.today()),cljs.core.cst$kw$end,cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1(cljs_time.core.today())], null)], null)], null),(function (){var iter__4582__auto__ = (function komponentit$calendar$quicklist_$_iter__25219(s__25220){
return (new cljs.core.LazySeq(null,(function (){
var s__25220__$1 = s__25220;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__25220__$1);
if(temp__4657__auto__){
var s__25220__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25220__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__25220__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__25222 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__25221 = (0);
while(true){
if((i__25221 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__25221);
var month = cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.months.cljs$core$IFn$_invoke$arity$1(i));
cljs.core.chunk_append(b__25222,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.quicklist_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,clojure.string.capitalize(komponentit.date.date_format(month,"LLLL")),cljs.core.cst$kw$start,cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1(month),cljs.core.cst$kw$end,cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1(month)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)));

var G__25223 = (i__25221 + (1));
i__25221 = G__25223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25222),komponentit$calendar$quicklist_$_iter__25219(cljs.core.chunk_rest(s__25220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25222),null);
}
} else {
var i = cljs.core.first(s__25220__$2);
var month = cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.months.cljs$core$IFn$_invoke$arity$1(i));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.quicklist_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,clojure.string.capitalize(komponentit.date.date_format(month,"LLLL")),cljs.core.cst$kw$start,cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1(month),cljs.core.cst$kw$end,cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1(month)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)),komponentit$calendar$quicklist_$_iter__25219(cljs.core.rest(s__25220__$2)));
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
komponentit.calendar.set_start = (function komponentit$calendar$set_start(p__25224,x){
var map__25225 = p__25224;
var map__25225__$1 = (((((!((map__25225 == null))))?(((((map__25225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25225):map__25225);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25225__$1,cljs.core.cst$kw$end);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,x,cljs.core.cst$kw$end,((((cljs.core.not(end)) || ((x > end))))?x:end)], null);
});
komponentit.calendar.set_end = (function komponentit$calendar$set_end(p__25227,x){
var map__25228 = p__25227;
var map__25228__$1 = (((((!((map__25228 == null))))?(((((map__25228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25228):map__25228);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25228__$1,cljs.core.cst$kw$start);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$end,x,cljs.core.cst$kw$start,((((cljs.core.not(start)) || ((x < start))))?x:start)], null);
});
komponentit.calendar.date_range = (function komponentit$calendar$date_range(p__25230){
var map__25231 = p__25230;
var map__25231__$1 = (((((!((map__25231 == null))))?(((((map__25231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25231):map__25231);
var opts = map__25231__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25231__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25231__$1,cljs.core.cst$kw$end);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25231__$1,cljs.core.cst$kw$on_DASH_change);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25231__$1,cljs.core.cst$kw$i18n);
var quicklist_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25231__$1,cljs.core.cst$kw$quicklist_QMARK_);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$date_DASH_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.calendar,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$container_DASH_class,"date-range__calendar",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$text,komponentit.calendar.loc(i18n,cljs.core.cst$kw$start),cljs.core.cst$kw$value,start,cljs.core.cst$kw$on_DASH_change,(function (x){
if(cljs.core.truth_(on_change)){
var G__25233 = komponentit.calendar.set_start(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$end,end], null),x);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__25233) : on_change.call(null,G__25233));
} else {
return null;
}
})], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.calendar,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$container_DASH_class,"date-range__calendar",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$text,komponentit.calendar.loc(i18n,cljs.core.cst$kw$end),cljs.core.cst$kw$value,end,cljs.core.cst$kw$on_DASH_change,(function (x){
if(cljs.core.truth_(on_change)){
var G__25234 = komponentit.calendar.set_end(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$start,start], null),x);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__25234) : on_change.call(null,G__25234));
} else {
return null;
}
})], 0))], null),((((quicklist_QMARK_ === true) || ((quicklist_QMARK_ == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.calendar.quicklist,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$container_DASH_class,"date-range__quicklist",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_change,(function (p__25235){
var map__25236 = p__25235;
var map__25236__$1 = (((((!((map__25236 == null))))?(((((map__25236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25236):map__25236);
var x = map__25236__$1;
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25236__$1,cljs.core.cst$kw$start);
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25236__$1,cljs.core.cst$kw$end);
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(x) : on_change.call(null,x));
} else {
return null;
}
})], 0))], null):null)], null);
});
