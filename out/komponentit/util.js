// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Limit x: a < x b
 */
komponentit.util.limit = (function komponentit$util$limit(a,b,x){
var x__4273__auto__ = a;
var y__4274__auto__ = (function (){var x__4276__auto__ = b;
var y__4277__auto__ = x;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
});
