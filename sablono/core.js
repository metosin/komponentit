// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__34979__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__34976 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__34977 = cljs.core.seq(vec__34976);
var first__34978 = cljs.core.first(seq__34977);
var seq__34977__$1 = cljs.core.next(seq__34977);
var tag = first__34978;
var body = seq__34977__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__34979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34980__i = 0, G__34980__a = new Array(arguments.length -  0);
while (G__34980__i < G__34980__a.length) {G__34980__a[G__34980__i] = arguments[G__34980__i + 0]; ++G__34980__i;}
  args = new cljs.core.IndexedSeq(G__34980__a,0,null);
} 
return G__34979__delegate.call(this,args);};
G__34979.cljs$lang$maxFixedArity = 0;
G__34979.cljs$lang$applyTo = (function (arglist__34981){
var args = cljs.core.seq(arglist__34981);
return G__34979__delegate(args);
});
G__34979.cljs$core$IFn$_invoke$arity$variadic = G__34979__delegate;
return G__34979;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__34982(s__34983){
return (new cljs.core.LazySeq(null,(function (){
var s__34983__$1 = s__34983;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__34983__$1);
if(temp__4657__auto__){
var s__34983__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34983__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34983__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34985 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34984 = (0);
while(true){
if((i__34984 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__34984);
cljs.core.chunk_append(b__34985,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__34986 = (i__34984 + (1));
i__34984 = G__34986;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34985),sablono$core$update_arglists_$_iter__34982(cljs.core.chunk_rest(s__34983__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34985),null);
}
} else {
var args = cljs.core.first(s__34983__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__34982(cljs.core.rest(s__34983__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34992 = arguments.length;
var i__4790__auto___34993 = (0);
while(true){
if((i__4790__auto___34993 < len__4789__auto___34992)){
args__4795__auto__.push((arguments[i__4790__auto___34993]));

var G__34994 = (i__4790__auto___34993 + (1));
i__4790__auto___34993 = G__34994;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__34988(s__34989){
return (new cljs.core.LazySeq(null,(function (){
var s__34989__$1 = s__34989;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__34989__$1);
if(temp__4657__auto__){
var s__34989__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34989__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34989__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34991 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34990 = (0);
while(true){
if((i__34990 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__34990);
cljs.core.chunk_append(b__34991,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__34995 = (i__34990 + (1));
i__34990 = G__34995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34991),sablono$core$iter__34988(cljs.core.chunk_rest(s__34989__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34991),null);
}
} else {
var style = cljs.core.first(s__34989__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__34988(cljs.core.rest(s__34989__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq34987){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34987));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to34996 = (function sablono$core$link_to34996(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34999 = arguments.length;
var i__4790__auto___35000 = (0);
while(true){
if((i__4790__auto___35000 < len__4789__auto___34999)){
args__4795__auto__.push((arguments[i__4790__auto___35000]));

var G__35001 = (i__4790__auto___35000 + (1));
i__4790__auto___35000 = G__35001;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to34996.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to34996.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to34996.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to34996.cljs$lang$applyTo = (function (seq34997){
var G__34998 = cljs.core.first(seq34997);
var seq34997__$1 = cljs.core.next(seq34997);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34998,seq34997__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to34996);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to35002 = (function sablono$core$mail_to35002(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35009 = arguments.length;
var i__4790__auto___35010 = (0);
while(true){
if((i__4790__auto___35010 < len__4789__auto___35009)){
args__4795__auto__.push((arguments[i__4790__auto___35010]));

var G__35011 = (i__4790__auto___35010 + (1));
i__4790__auto___35010 = G__35011;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to35002.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to35002.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__35005){
var vec__35006 = p__35005;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to35002.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to35002.cljs$lang$applyTo = (function (seq35003){
var G__35004 = cljs.core.first(seq35003);
var seq35003__$1 = cljs.core.next(seq35003);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35004,seq35003__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to35002);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list35012 = (function sablono$core$unordered_list35012(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4582__auto__ = (function sablono$core$unordered_list35012_$_iter__35013(s__35014){
return (new cljs.core.LazySeq(null,(function (){
var s__35014__$1 = s__35014;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35014__$1);
if(temp__4657__auto__){
var s__35014__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35014__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35014__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35016 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35015 = (0);
while(true){
if((i__35015 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__35015);
cljs.core.chunk_append(b__35016,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__35017 = (i__35015 + (1));
i__35015 = G__35017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35016),sablono$core$unordered_list35012_$_iter__35013(cljs.core.chunk_rest(s__35014__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35016),null);
}
} else {
var x = cljs.core.first(s__35014__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list35012_$_iter__35013(cljs.core.rest(s__35014__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list35012);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list35018 = (function sablono$core$ordered_list35018(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__4582__auto__ = (function sablono$core$ordered_list35018_$_iter__35019(s__35020){
return (new cljs.core.LazySeq(null,(function (){
var s__35020__$1 = s__35020;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35020__$1);
if(temp__4657__auto__){
var s__35020__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35020__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35020__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35022 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35021 = (0);
while(true){
if((i__35021 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__35021);
cljs.core.chunk_append(b__35022,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__35023 = (i__35021 + (1));
i__35021 = G__35023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35022),sablono$core$ordered_list35018_$_iter__35019(cljs.core.chunk_rest(s__35020__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35022),null);
}
} else {
var x = cljs.core.first(s__35020__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list35018_$_iter__35019(cljs.core.rest(s__35020__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list35018);
/**
 * Create an image element.
 */
sablono.core.image35024 = (function sablono$core$image35024(var_args){
var G__35026 = arguments.length;
switch (G__35026) {
case 1:
return sablono.core.image35024.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image35024.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image35024.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image35024.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
}));

(sablono.core.image35024.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image35024);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__35028_SHARP_,p2__35029_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35028_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__35029_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__35030_SHARP_,p2__35031_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35030_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__35031_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__35033 = arguments.length;
switch (G__35033) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field35035 = (function sablono$core$color_field35035(var_args){
var G__35037 = arguments.length;
switch (G__35037) {
case 1:
return sablono.core.color_field35035.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field35035.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field35035.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color),name__34793__auto__);
}));

(sablono.core.color_field35035.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.color_field35035.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field35035);

/**
 * Creates a date input field.
 */
sablono.core.date_field35038 = (function sablono$core$date_field35038(var_args){
var G__35040 = arguments.length;
switch (G__35040) {
case 1:
return sablono.core.date_field35038.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field35038.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field35038.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date),name__34793__auto__);
}));

(sablono.core.date_field35038.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.date_field35038.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field35038);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field35041 = (function sablono$core$datetime_field35041(var_args){
var G__35043 = arguments.length;
switch (G__35043) {
case 1:
return sablono.core.datetime_field35041.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field35041.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field35041.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime),name__34793__auto__);
}));

(sablono.core.datetime_field35041.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.datetime_field35041.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field35041);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field35044 = (function sablono$core$datetime_local_field35044(var_args){
var G__35046 = arguments.length;
switch (G__35046) {
case 1:
return sablono.core.datetime_local_field35044.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field35044.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field35044.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local),name__34793__auto__);
}));

(sablono.core.datetime_local_field35044.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.datetime_local_field35044.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field35044);

/**
 * Creates a email input field.
 */
sablono.core.email_field35047 = (function sablono$core$email_field35047(var_args){
var G__35049 = arguments.length;
switch (G__35049) {
case 1:
return sablono.core.email_field35047.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field35047.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field35047.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email),name__34793__auto__);
}));

(sablono.core.email_field35047.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.email_field35047.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field35047);

/**
 * Creates a file input field.
 */
sablono.core.file_field35050 = (function sablono$core$file_field35050(var_args){
var G__35052 = arguments.length;
switch (G__35052) {
case 1:
return sablono.core.file_field35050.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field35050.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field35050.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file),name__34793__auto__);
}));

(sablono.core.file_field35050.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.file_field35050.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field35050);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field35053 = (function sablono$core$hidden_field35053(var_args){
var G__35055 = arguments.length;
switch (G__35055) {
case 1:
return sablono.core.hidden_field35053.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field35053.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field35053.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden),name__34793__auto__);
}));

(sablono.core.hidden_field35053.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.hidden_field35053.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field35053);

/**
 * Creates a month input field.
 */
sablono.core.month_field35056 = (function sablono$core$month_field35056(var_args){
var G__35058 = arguments.length;
switch (G__35058) {
case 1:
return sablono.core.month_field35056.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field35056.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field35056.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month),name__34793__auto__);
}));

(sablono.core.month_field35056.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.month_field35056.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field35056);

/**
 * Creates a number input field.
 */
sablono.core.number_field35059 = (function sablono$core$number_field35059(var_args){
var G__35061 = arguments.length;
switch (G__35061) {
case 1:
return sablono.core.number_field35059.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field35059.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field35059.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number),name__34793__auto__);
}));

(sablono.core.number_field35059.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.number_field35059.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field35059);

/**
 * Creates a password input field.
 */
sablono.core.password_field35062 = (function sablono$core$password_field35062(var_args){
var G__35064 = arguments.length;
switch (G__35064) {
case 1:
return sablono.core.password_field35062.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field35062.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field35062.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password),name__34793__auto__);
}));

(sablono.core.password_field35062.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.password_field35062.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field35062);

/**
 * Creates a range input field.
 */
sablono.core.range_field35065 = (function sablono$core$range_field35065(var_args){
var G__35067 = arguments.length;
switch (G__35067) {
case 1:
return sablono.core.range_field35065.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field35065.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field35065.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range),name__34793__auto__);
}));

(sablono.core.range_field35065.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.range_field35065.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field35065);

/**
 * Creates a search input field.
 */
sablono.core.search_field35068 = (function sablono$core$search_field35068(var_args){
var G__35070 = arguments.length;
switch (G__35070) {
case 1:
return sablono.core.search_field35068.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field35068.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field35068.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search),name__34793__auto__);
}));

(sablono.core.search_field35068.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.search_field35068.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field35068);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field35071 = (function sablono$core$tel_field35071(var_args){
var G__35073 = arguments.length;
switch (G__35073) {
case 1:
return sablono.core.tel_field35071.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field35071.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field35071.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel),name__34793__auto__);
}));

(sablono.core.tel_field35071.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.tel_field35071.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field35071);

/**
 * Creates a text input field.
 */
sablono.core.text_field35074 = (function sablono$core$text_field35074(var_args){
var G__35076 = arguments.length;
switch (G__35076) {
case 1:
return sablono.core.text_field35074.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field35074.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field35074.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text),name__34793__auto__);
}));

(sablono.core.text_field35074.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.text_field35074.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field35074);

/**
 * Creates a time input field.
 */
sablono.core.time_field35077 = (function sablono$core$time_field35077(var_args){
var G__35079 = arguments.length;
switch (G__35079) {
case 1:
return sablono.core.time_field35077.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field35077.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field35077.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time),name__34793__auto__);
}));

(sablono.core.time_field35077.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.time_field35077.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field35077);

/**
 * Creates a url input field.
 */
sablono.core.url_field35080 = (function sablono$core$url_field35080(var_args){
var G__35082 = arguments.length;
switch (G__35082) {
case 1:
return sablono.core.url_field35080.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field35080.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field35080.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url),name__34793__auto__);
}));

(sablono.core.url_field35080.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.url_field35080.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field35080);

/**
 * Creates a week input field.
 */
sablono.core.week_field35083 = (function sablono$core$week_field35083(var_args){
var G__35085 = arguments.length;
switch (G__35085) {
case 1:
return sablono.core.week_field35083.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field35083.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field35083.cljs$core$IFn$_invoke$arity$1 = (function (name__34793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week),name__34793__auto__);
}));

(sablono.core.week_field35083.cljs$core$IFn$_invoke$arity$2 = (function (name__34793__auto__,value__34794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week),name__34793__auto__,value__34794__auto__);
}));

(sablono.core.week_field35083.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field35083);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box35103 = (function sablono$core$check_box35103(var_args){
var G__35105 = arguments.length;
switch (G__35105) {
case 1:
return sablono.core.check_box35103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box35103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box35103.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box35103.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box35103.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.check_box35103.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.check_box35103.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box35103);
/**
 * Creates a radio button.
 */
sablono.core.radio_button35107 = (function sablono$core$radio_button35107(var_args){
var G__35109 = arguments.length;
switch (G__35109) {
case 1:
return sablono.core.radio_button35107.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button35107.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button35107.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button35107.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button35107.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.radio_button35107.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.radio_button35107.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button35107);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options35111 = (function sablono$core$select_options35111(coll){
var iter__4582__auto__ = (function sablono$core$select_options35111_$_iter__35112(s__35113){
return (new cljs.core.LazySeq(null,(function (){
var s__35113__$1 = s__35113;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35113__$1);
if(temp__4657__auto__){
var s__35113__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35113__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35113__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35115 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35114 = (0);
while(true){
if((i__35114 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__35114);
cljs.core.chunk_append(b__35115,((cljs.core.sequential_QMARK_(x))?(function (){var vec__35116 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options35111.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options35111.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options35111.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__35122 = (i__35114 + (1));
i__35114 = G__35122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35115),sablono$core$select_options35111_$_iter__35112(cljs.core.chunk_rest(s__35113__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35115),null);
}
} else {
var x = cljs.core.first(s__35113__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__35119 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options35111.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options35111.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options35111.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options35111_$_iter__35112(cljs.core.rest(s__35113__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options35111);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down35123 = (function sablono$core$drop_down35123(var_args){
var G__35125 = arguments.length;
switch (G__35125) {
case 2:
return sablono.core.drop_down35123.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down35123.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down35123.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down35123.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down35123.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down35123.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down35123);
/**
 * Creates a text area element.
 */
sablono.core.text_area35127 = (function sablono$core$text_area35127(var_args){
var G__35129 = arguments.length;
switch (G__35129) {
case 1:
return sablono.core.text_area35127.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area35127.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area35127.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area35127.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area35127.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area35127);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label35131 = (function sablono$core$label35131(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label35131);
/**
 * Creates a submit button.
 */
sablono.core.submit_button35132 = (function sablono$core$submit_button35132(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button35132);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button35133 = (function sablono$core$reset_button35133(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button35133);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to35134 = (function sablono$core$form_to35134(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35144 = arguments.length;
var i__4790__auto___35145 = (0);
while(true){
if((i__4790__auto___35145 < len__4789__auto___35144)){
args__4795__auto__.push((arguments[i__4790__auto___35145]));

var G__35146 = (i__4790__auto___35145 + (1));
i__4790__auto___35145 = G__35146;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to35134.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to35134.cljs$core$IFn$_invoke$arity$variadic = (function (p__35137,body){
var vec__35138 = p__35137;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35138,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35138,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__35141 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__35142 = "_method";
var G__35143 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__35141,G__35142,G__35143) : sablono.core.hidden_field.call(null,G__35141,G__35142,G__35143));
})()], null)),body));
}));

(sablono.core.form_to35134.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to35134.cljs$lang$applyTo = (function (seq35135){
var G__35136 = cljs.core.first(seq35135);
var seq35135__$1 = cljs.core.next(seq35135);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35136,seq35135__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to35134);
