// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.timeago');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('komponentit.timeago');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('clojure.string');
goog.require('example.core');
goog.require('goog.date.DateTime');
goog.require('goog.date.Interval');
example.timeago.in$ = (function example$timeago$in(x,interval){
var G__37494 = (new goog.date.DateTime());
G__37494.add((new goog.date.Interval(interval,x)));

return G__37494;
});
example.timeago.ago = (function example$timeago$ago(x,interval){
var G__37495 = (new goog.date.DateTime());
G__37495.add((new goog.date.Interval(interval,x)).getInverse());

return G__37495;
});
example.timeago.example_data = (function example$timeago$example_data(){
return new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_1_DASH_minute,example.timeago.in$((45),goog.date.Interval.SECONDS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_5_DASH_minutes,example.timeago.in$((5),goog.date.Interval.MINUTES)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_1_DASH_hour,example.timeago.in$((46),goog.date.Interval.MINUTES)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_5_DASH_hours,example.timeago.in$((5),goog.date.Interval.HOURS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_1_DASH_day,example.timeago.in$((23),goog.date.Interval.HOURS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_5_DASH_days,example.timeago.in$((5),goog.date.Interval.DAYS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_1_DASH_month,example.timeago.in$((27),goog.date.Interval.DAYS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_5_DASH_months,example.timeago.in$((5),goog.date.Interval.MONTHS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_1_DASH_year,example.timeago.in$((12),goog.date.Interval.MONTHS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_5_DASH_years,example.timeago.in$((5),goog.date.Interval.YEARS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$now,(new goog.date.DateTime())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1_DASH_minute,example.timeago.ago((45),goog.date.Interval.SECONDS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$5_DASH_minutes,example.timeago.ago((5),goog.date.Interval.MINUTES)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1_DASH_hour,example.timeago.ago((45),goog.date.Interval.MINUTES)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$5_DASH_hours,example.timeago.ago((5),goog.date.Interval.HOURS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1_DASH_day,example.timeago.ago((22),goog.date.Interval.HOURS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$5_DASH_days,example.timeago.ago((5),goog.date.Interval.DAYS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1_DASH_month,example.timeago.ago((26),goog.date.Interval.DAYS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$5_DASH_months,example.timeago.ago((5),goog.date.Interval.MONTHS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$1_DASH_year,example.timeago.ago((11),goog.date.Interval.MONTHS)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$5_DASH_years,example.timeago.ago((5),goog.date.Interval.YEARS)], null)], null);
});
