// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.font_awesome');
goog.require('cljs.core');
goog.require('cljs.core.constants');
komponentit.font_awesome.mime_type_icons = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$default,"fa-file-o","image","fa-file-image-o","text","fa-file-text-o","audio","fa-file-audio-o","video","fa-file-video-o","application",new cljs.core.PersistentArrayMap(null, 5, ["zip","fa-file-archive-o","pdf","fa-file-pdf-o","vnd.openxmlformats-officedocument.spreadsheetml.sheet","fa-file-excel-o","vnd.openxmlformats-officedocument.wordprocessingml.document","fa-file-word-o","vnd.openxmlformats-officedocument.presentationml.presentation","fa-file-powerpoint-o"], null)], null);
komponentit.font_awesome.mime_type__GT_class = (function komponentit$font_awesome$mime_type__GT_class(mime_type){
var vec__37535 = (function (){var G__37538 = mime_type;
if((G__37538 == null)){
return null;
} else {
return cljs.core.re_matches(/(.*)\/(.*)+(.*)/,G__37538);
}
})();
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37535,(0),null);
var toptype = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37535,(1),null);
var subtype = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37535,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37535,(3),null);
var icon_or_sub = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(komponentit.font_awesome.mime_type_icons,toptype);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(komponentit.font_awesome.mime_type_icons);
}
})();
if(cljs.core.map_QMARK_(icon_or_sub)){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(icon_or_sub,subtype);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(komponentit.font_awesome.mime_type_icons);
}
} else {
return icon_or_sub;
}
});
komponentit.font_awesome.mime_type_icon = (function komponentit$font_awesome$mime_type_icon(p__37539){
var map__37540 = p__37539;
var map__37540__$1 = (((((!((map__37540 == null))))?(((((map__37540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37540):map__37540);
var props = map__37540__$1;
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37540__$1,cljs.core.cst$kw$mime_DASH_type);
var cl = komponentit.font_awesome.mime_type__GT_class(mime_type);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$class,(function (c){
if(typeof c === 'string'){
return [c," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cl)].join('');
} else {
if(cljs.core.coll_QMARK_(c)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(c,cl);
} else {
return cl;

}
}
})),cljs.core.cst$kw$mime_DASH_type)], null);
});
