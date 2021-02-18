// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.font_awesome');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('komponentit.font_awesome');
goog.require('reagent.core');
goog.require('cljs.test');
goog.require('devcards.core');
goog.require('example.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$font_awesome,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,[example.core.header(cljs.core.cst$sym$font_awesome,"FontAwesome"),"To use [FontAwesome icons](https://fontawesome.com/v4.7.0/)\neither add stylesheet to your HTML:\n\n```\n<link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n```\n\nOr add Webjars dependency:\n\n```\n[org.webjars.bower/font-awesome \"4.7.0\" :scope \"test\"]\n```\n\nAnd use together with [ring-webars](https://github.com/weavejester/ring-webjars), to serve icon files,\nand [less4clj](https://github.com/Deraen/less4clj)/[sass4clj](https://github.com/Deraen/sass4clj)\nto include FA stylesheet in your CSS bundle."].join(''),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$font_awesome,cljs.core.cst$kw$mime_DASH_type_DASH_icons], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"mime-type-icons",cljs.core.cst$kw$documentation,"This component can automatically provide icon given mime-type string.",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.font_awesome !== 'undefined') && (typeof example.font_awesome.t_example$font_awesome37544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.font_awesome.t_example$font_awesome37544 = (function (meta37545){
this.meta37545 = meta37545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.font_awesome.t_example$font_awesome37544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37546,meta37545__$1){
var self__ = this;
var _37546__$1 = this;
return (new example.font_awesome.t_example$font_awesome37544(meta37545__$1));
}));

(example.font_awesome.t_example$font_awesome37544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37546){
var self__ = this;
var _37546__$1 = this;
return self__.meta37545;
}));

(example.font_awesome.t_example$font_awesome37544.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.font_awesome.t_example$font_awesome37544.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4582__auto__ = (function example$font_awesome$iter__37547(s__37548){
return (new cljs.core.LazySeq(null,(function (){
var s__37548__$1 = s__37548;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__37548__$1);
if(temp__4657__auto__){
var s__37548__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37548__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37548__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37550 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37549 = (0);
while(true){
if((i__37549 < size__4581__auto__)){
var mime_type = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37549);
cljs.core.chunk_append(b__37550,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(function (){var or__4185__auto__ = mime_type;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "nil";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.font_awesome.mime_type_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mime_DASH_type,mime_type], null)], null)," ",(function (){var or__4185__auto__ = mime_type;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,"nil"], null);
}
})()], null));

var G__37551 = (i__37549 + (1));
i__37549 = G__37551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37550),example$font_awesome$iter__37547(cljs.core.chunk_rest(s__37548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37550),null);
}
} else {
var mime_type = cljs.core.first(s__37548__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(function (){var or__4185__auto__ = mime_type;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "nil";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.font_awesome.mime_type_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mime_DASH_type,mime_type], null)], null)," ",(function (){var or__4185__auto__ = mime_type;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,"nil"], null);
}
})()], null),example$font_awesome$iter__37547(cljs.core.rest(s__37548__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"","foo/bar","image/png","text/html","audio/mpeg","video/mp4","application/zip","application/pdf","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.presentationml.presentation"], null));
})()], null)], null);
if(cljs.core.fn_QMARK_(v__36201__auto__)){
return (function (data_atom__36202__auto__,owner__36203__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__36201__auto__,data_atom__36202__auto__,owner__36203__auto__], null));
});
} else {
return reagent.core.as_element(v__36201__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(devcard_opts__36183__auto__))], 0))], 0));
}));

(example.font_awesome.t_example$font_awesome37544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37545], null);
}));

(example.font_awesome.t_example$font_awesome37544.cljs$lang$type = true);

(example.font_awesome.t_example$font_awesome37544.cljs$lang$ctorStr = "example.font-awesome/t_example$font_awesome37544");

(example.font_awesome.t_example$font_awesome37544.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.font-awesome/t_example$font_awesome37544");
}));

/**
 * Positional factory function for example.font-awesome/t_example$font_awesome37544.
 */
example.font_awesome.__GT_t_example$font_awesome37544 = (function example$font_awesome$__GT_t_example$font_awesome37544(meta37545){
return (new example.font_awesome.t_example$font_awesome37544(meta37545));
});

}

return (new example.font_awesome.t_example$font_awesome37544(null));
})()
,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
