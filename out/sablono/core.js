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
var G__30521__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__30518 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__30519 = cljs.core.seq(vec__30518);
var first__30520 = cljs.core.first(seq__30519);
var seq__30519__$1 = cljs.core.next(seq__30519);
var tag = first__30520;
var body = seq__30519__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__30521 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30522__i = 0, G__30522__a = new Array(arguments.length -  0);
while (G__30522__i < G__30522__a.length) {G__30522__a[G__30522__i] = arguments[G__30522__i + 0]; ++G__30522__i;}
  args = new cljs.core.IndexedSeq(G__30522__a,0,null);
} 
return G__30521__delegate.call(this,args);};
G__30521.cljs$lang$maxFixedArity = 0;
G__30521.cljs$lang$applyTo = (function (arglist__30523){
var args = cljs.core.seq(arglist__30523);
return G__30521__delegate(args);
});
G__30521.cljs$core$IFn$_invoke$arity$variadic = G__30521__delegate;
return G__30521;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__30524(s__30525){
return (new cljs.core.LazySeq(null,(function (){
var s__30525__$1 = s__30525;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30525__$1);
if(temp__4657__auto__){
var s__30525__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30525__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30525__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30527 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30526 = (0);
while(true){
if((i__30526 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30526);
cljs.core.chunk_append(b__30527,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__30528 = (i__30526 + (1));
i__30526 = G__30528;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30527),sablono$core$update_arglists_$_iter__30524(cljs.core.chunk_rest(s__30525__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30527),null);
}
} else {
var args = cljs.core.first(s__30525__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__30524(cljs.core.rest(s__30525__$2)));
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
var len__4789__auto___30534 = arguments.length;
var i__4790__auto___30535 = (0);
while(true){
if((i__4790__auto___30535 < len__4789__auto___30534)){
args__4795__auto__.push((arguments[i__4790__auto___30535]));

var G__30536 = (i__4790__auto___30535 + (1));
i__4790__auto___30535 = G__30536;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__30530(s__30531){
return (new cljs.core.LazySeq(null,(function (){
var s__30531__$1 = s__30531;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30531__$1);
if(temp__4657__auto__){
var s__30531__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30531__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30531__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30533 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30532 = (0);
while(true){
if((i__30532 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30532);
cljs.core.chunk_append(b__30533,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__30537 = (i__30532 + (1));
i__30532 = G__30537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30533),sablono$core$iter__30530(cljs.core.chunk_rest(s__30531__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30533),null);
}
} else {
var style = cljs.core.first(s__30531__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__30530(cljs.core.rest(s__30531__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq30529){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30529));
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
sablono.core.link_to30538 = (function sablono$core$link_to30538(var_args){
var args__4795__auto__ = [];
var len__4789__auto___30541 = arguments.length;
var i__4790__auto___30542 = (0);
while(true){
if((i__4790__auto___30542 < len__4789__auto___30541)){
args__4795__auto__.push((arguments[i__4790__auto___30542]));

var G__30543 = (i__4790__auto___30542 + (1));
i__4790__auto___30542 = G__30543;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to30538.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to30538.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to30538.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to30538.cljs$lang$applyTo = (function (seq30539){
var G__30540 = cljs.core.first(seq30539);
var seq30539__$1 = cljs.core.next(seq30539);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30540,seq30539__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to30538);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to30544 = (function sablono$core$mail_to30544(var_args){
var args__4795__auto__ = [];
var len__4789__auto___30551 = arguments.length;
var i__4790__auto___30552 = (0);
while(true){
if((i__4790__auto___30552 < len__4789__auto___30551)){
args__4795__auto__.push((arguments[i__4790__auto___30552]));

var G__30553 = (i__4790__auto___30552 + (1));
i__4790__auto___30552 = G__30553;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to30544.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to30544.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__30547){
var vec__30548 = p__30547;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30548,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to30544.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to30544.cljs$lang$applyTo = (function (seq30545){
var G__30546 = cljs.core.first(seq30545);
var seq30545__$1 = cljs.core.next(seq30545);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30546,seq30545__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to30544);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list30554 = (function sablono$core$unordered_list30554(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4582__auto__ = (function sablono$core$unordered_list30554_$_iter__30555(s__30556){
return (new cljs.core.LazySeq(null,(function (){
var s__30556__$1 = s__30556;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30556__$1);
if(temp__4657__auto__){
var s__30556__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30556__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30556__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30558 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30557 = (0);
while(true){
if((i__30557 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30557);
cljs.core.chunk_append(b__30558,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__30559 = (i__30557 + (1));
i__30557 = G__30559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30558),sablono$core$unordered_list30554_$_iter__30555(cljs.core.chunk_rest(s__30556__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30558),null);
}
} else {
var x = cljs.core.first(s__30556__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list30554_$_iter__30555(cljs.core.rest(s__30556__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list30554);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list30560 = (function sablono$core$ordered_list30560(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__4582__auto__ = (function sablono$core$ordered_list30560_$_iter__30561(s__30562){
return (new cljs.core.LazySeq(null,(function (){
var s__30562__$1 = s__30562;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30562__$1);
if(temp__4657__auto__){
var s__30562__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30562__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30562__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30564 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30563 = (0);
while(true){
if((i__30563 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30563);
cljs.core.chunk_append(b__30564,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__30565 = (i__30563 + (1));
i__30563 = G__30565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30564),sablono$core$ordered_list30560_$_iter__30561(cljs.core.chunk_rest(s__30562__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30564),null);
}
} else {
var x = cljs.core.first(s__30562__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list30560_$_iter__30561(cljs.core.rest(s__30562__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list30560);
/**
 * Create an image element.
 */
sablono.core.image30566 = (function sablono$core$image30566(var_args){
var G__30568 = arguments.length;
switch (G__30568) {
case 1:
return sablono.core.image30566.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image30566.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image30566.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image30566.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
}));

(sablono.core.image30566.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image30566);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__30570_SHARP_,p2__30571_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30570_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__30571_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__30572_SHARP_,p2__30573_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30572_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__30573_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__30575 = arguments.length;
switch (G__30575) {
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
sablono.core.color_field30577 = (function sablono$core$color_field30577(var_args){
var G__30579 = arguments.length;
switch (G__30579) {
case 1:
return sablono.core.color_field30577.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field30577.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field30577.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color),name__30508__auto__);
}));

(sablono.core.color_field30577.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.color_field30577.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field30577);

/**
 * Creates a date input field.
 */
sablono.core.date_field30580 = (function sablono$core$date_field30580(var_args){
var G__30582 = arguments.length;
switch (G__30582) {
case 1:
return sablono.core.date_field30580.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field30580.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field30580.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date),name__30508__auto__);
}));

(sablono.core.date_field30580.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.date_field30580.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field30580);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field30583 = (function sablono$core$datetime_field30583(var_args){
var G__30585 = arguments.length;
switch (G__30585) {
case 1:
return sablono.core.datetime_field30583.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field30583.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field30583.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime),name__30508__auto__);
}));

(sablono.core.datetime_field30583.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.datetime_field30583.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field30583);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field30586 = (function sablono$core$datetime_local_field30586(var_args){
var G__30588 = arguments.length;
switch (G__30588) {
case 1:
return sablono.core.datetime_local_field30586.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field30586.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field30586.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local),name__30508__auto__);
}));

(sablono.core.datetime_local_field30586.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.datetime_local_field30586.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field30586);

/**
 * Creates a email input field.
 */
sablono.core.email_field30589 = (function sablono$core$email_field30589(var_args){
var G__30591 = arguments.length;
switch (G__30591) {
case 1:
return sablono.core.email_field30589.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field30589.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field30589.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email),name__30508__auto__);
}));

(sablono.core.email_field30589.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.email_field30589.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field30589);

/**
 * Creates a file input field.
 */
sablono.core.file_field30592 = (function sablono$core$file_field30592(var_args){
var G__30594 = arguments.length;
switch (G__30594) {
case 1:
return sablono.core.file_field30592.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field30592.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field30592.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file),name__30508__auto__);
}));

(sablono.core.file_field30592.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.file_field30592.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field30592);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field30595 = (function sablono$core$hidden_field30595(var_args){
var G__30597 = arguments.length;
switch (G__30597) {
case 1:
return sablono.core.hidden_field30595.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field30595.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field30595.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden),name__30508__auto__);
}));

(sablono.core.hidden_field30595.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.hidden_field30595.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field30595);

/**
 * Creates a month input field.
 */
sablono.core.month_field30598 = (function sablono$core$month_field30598(var_args){
var G__30600 = arguments.length;
switch (G__30600) {
case 1:
return sablono.core.month_field30598.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field30598.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field30598.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month),name__30508__auto__);
}));

(sablono.core.month_field30598.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.month_field30598.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field30598);

/**
 * Creates a number input field.
 */
sablono.core.number_field30601 = (function sablono$core$number_field30601(var_args){
var G__30603 = arguments.length;
switch (G__30603) {
case 1:
return sablono.core.number_field30601.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field30601.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field30601.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number),name__30508__auto__);
}));

(sablono.core.number_field30601.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.number_field30601.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field30601);

/**
 * Creates a password input field.
 */
sablono.core.password_field30604 = (function sablono$core$password_field30604(var_args){
var G__30606 = arguments.length;
switch (G__30606) {
case 1:
return sablono.core.password_field30604.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field30604.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field30604.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password),name__30508__auto__);
}));

(sablono.core.password_field30604.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.password_field30604.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field30604);

/**
 * Creates a range input field.
 */
sablono.core.range_field30607 = (function sablono$core$range_field30607(var_args){
var G__30609 = arguments.length;
switch (G__30609) {
case 1:
return sablono.core.range_field30607.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field30607.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field30607.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range),name__30508__auto__);
}));

(sablono.core.range_field30607.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.range_field30607.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field30607);

/**
 * Creates a search input field.
 */
sablono.core.search_field30610 = (function sablono$core$search_field30610(var_args){
var G__30612 = arguments.length;
switch (G__30612) {
case 1:
return sablono.core.search_field30610.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field30610.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field30610.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search),name__30508__auto__);
}));

(sablono.core.search_field30610.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.search_field30610.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field30610);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field30613 = (function sablono$core$tel_field30613(var_args){
var G__30615 = arguments.length;
switch (G__30615) {
case 1:
return sablono.core.tel_field30613.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field30613.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field30613.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel),name__30508__auto__);
}));

(sablono.core.tel_field30613.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.tel_field30613.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field30613);

/**
 * Creates a text input field.
 */
sablono.core.text_field30616 = (function sablono$core$text_field30616(var_args){
var G__30618 = arguments.length;
switch (G__30618) {
case 1:
return sablono.core.text_field30616.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field30616.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field30616.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text),name__30508__auto__);
}));

(sablono.core.text_field30616.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.text_field30616.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field30616);

/**
 * Creates a time input field.
 */
sablono.core.time_field30619 = (function sablono$core$time_field30619(var_args){
var G__30621 = arguments.length;
switch (G__30621) {
case 1:
return sablono.core.time_field30619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field30619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field30619.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time),name__30508__auto__);
}));

(sablono.core.time_field30619.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.time_field30619.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field30619);

/**
 * Creates a url input field.
 */
sablono.core.url_field30622 = (function sablono$core$url_field30622(var_args){
var G__30624 = arguments.length;
switch (G__30624) {
case 1:
return sablono.core.url_field30622.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field30622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field30622.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url),name__30508__auto__);
}));

(sablono.core.url_field30622.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.url_field30622.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field30622);

/**
 * Creates a week input field.
 */
sablono.core.week_field30625 = (function sablono$core$week_field30625(var_args){
var G__30627 = arguments.length;
switch (G__30627) {
case 1:
return sablono.core.week_field30625.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field30625.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field30625.cljs$core$IFn$_invoke$arity$1 = (function (name__30508__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week),name__30508__auto__);
}));

(sablono.core.week_field30625.cljs$core$IFn$_invoke$arity$2 = (function (name__30508__auto__,value__30509__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week),name__30508__auto__,value__30509__auto__);
}));

(sablono.core.week_field30625.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field30625);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box30645 = (function sablono$core$check_box30645(var_args){
var G__30647 = arguments.length;
switch (G__30647) {
case 1:
return sablono.core.check_box30645.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box30645.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box30645.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box30645.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box30645.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.check_box30645.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.check_box30645.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box30645);
/**
 * Creates a radio button.
 */
sablono.core.radio_button30649 = (function sablono$core$radio_button30649(var_args){
var G__30651 = arguments.length;
switch (G__30651) {
case 1:
return sablono.core.radio_button30649.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button30649.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button30649.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button30649.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button30649.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.radio_button30649.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.radio_button30649.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button30649);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options30653 = (function sablono$core$select_options30653(coll){
var iter__4582__auto__ = (function sablono$core$select_options30653_$_iter__30654(s__30655){
return (new cljs.core.LazySeq(null,(function (){
var s__30655__$1 = s__30655;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30655__$1);
if(temp__4657__auto__){
var s__30655__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30655__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30655__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30657 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30656 = (0);
while(true){
if((i__30656 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30656);
cljs.core.chunk_append(b__30657,((cljs.core.sequential_QMARK_(x))?(function (){var vec__30658 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30658,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30658,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30658,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options30653.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options30653.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options30653.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__30664 = (i__30656 + (1));
i__30656 = G__30664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30657),sablono$core$select_options30653_$_iter__30654(cljs.core.chunk_rest(s__30655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30657),null);
}
} else {
var x = cljs.core.first(s__30655__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__30661 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30661,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30661,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30661,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options30653.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options30653.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options30653.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options30653_$_iter__30654(cljs.core.rest(s__30655__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options30653);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down30665 = (function sablono$core$drop_down30665(var_args){
var G__30667 = arguments.length;
switch (G__30667) {
case 2:
return sablono.core.drop_down30665.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down30665.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down30665.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down30665.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down30665.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down30665.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down30665);
/**
 * Creates a text area element.
 */
sablono.core.text_area30669 = (function sablono$core$text_area30669(var_args){
var G__30671 = arguments.length;
switch (G__30671) {
case 1:
return sablono.core.text_area30669.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area30669.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area30669.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area30669.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area30669.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area30669);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label30673 = (function sablono$core$label30673(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label30673);
/**
 * Creates a submit button.
 */
sablono.core.submit_button30674 = (function sablono$core$submit_button30674(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button30674);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button30675 = (function sablono$core$reset_button30675(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button30675);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to30676 = (function sablono$core$form_to30676(var_args){
var args__4795__auto__ = [];
var len__4789__auto___30686 = arguments.length;
var i__4790__auto___30687 = (0);
while(true){
if((i__4790__auto___30687 < len__4789__auto___30686)){
args__4795__auto__.push((arguments[i__4790__auto___30687]));

var G__30688 = (i__4790__auto___30687 + (1));
i__4790__auto___30687 = G__30688;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to30676.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to30676.cljs$core$IFn$_invoke$arity$variadic = (function (p__30679,body){
var vec__30680 = p__30679;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30680,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30680,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__30683 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__30684 = "_method";
var G__30685 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__30683,G__30684,G__30685) : sablono.core.hidden_field.call(null,G__30683,G__30684,G__30685));
})()], null)),body));
}));

(sablono.core.form_to30676.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to30676.cljs$lang$applyTo = (function (seq30677){
var G__30678 = cljs.core.first(seq30677);
var seq30677__$1 = cljs.core.next(seq30677);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30678,seq30677__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to30676);
