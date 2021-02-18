// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.date');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('goog.date.Date');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeParse');
komponentit.date.jsdate__GT_local_date = (function komponentit$date$jsdate__GT_local_date(v){
if(cljs.core.truth_(v)){
var G__23210 = (new goog.date.Date());
G__23210.setYear(v.getFullYear());

G__23210.setMonth(v.getMonth());

G__23210.setDate(v.getDate());

return G__23210;
} else {
return null;
}
});
komponentit.date.jsdate__GT_date_time = (function komponentit$date$jsdate__GT_date_time(v){
if(cljs.core.truth_(v)){
var G__23211 = (new goog.date.UtcDateTime());
G__23211.setYear(v.getFullYear());

G__23211.setMonth(v.getMonth());

G__23211.setDate(v.getDate());

G__23211.setHours((0));

G__23211.setMinutes((0));

G__23211.setSeconds((0));

return G__23211;
} else {
return null;
}
});
komponentit.date.local_date__GT_jsdate = (function komponentit$date$local_date__GT_jsdate(v){
if(cljs.core.truth_(v)){
var G__23212 = (new Date());
G__23212.setYear(v.getFullYear());

G__23212.setMonth(v.getMonth());

G__23212.setDate(v.getDate());

G__23212.setHours((0));

G__23212.setMinutes((0));

G__23212.setSeconds((0));

return G__23212;
} else {
return null;
}
});
komponentit.date.date_time__GT_jsdate = (function komponentit$date$date_time__GT_jsdate(v){
if(cljs.core.truth_(v)){
var G__23213 = (new Date());
G__23213.setYear(v.getFullYear());

G__23213.setMonth(v.getMonth());

G__23213.setDate(v.getDate());

G__23213.setHours(v.getHours());

G__23213.setMinutes(v.getMinutes());

G__23213.setSeconds(v.getSeconds());

return G__23213;
} else {
return null;
}
});
komponentit.date.date_format = (function komponentit$date$date_format(d,f){
if(cljs.core.truth_(d)){
return (new goog.i18n.DateTimeFormat(f)).format(d);
} else {
return null;
}
});
komponentit.date.date_read = (function komponentit$date$date_read(s,f){
var date = (new goog.date.Date((0),(0),(0)));
(new goog.i18n.DateTimeParse(f)).strictParse(s,date);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),date.getYear())){
return date;
} else {
return null;
}
});
