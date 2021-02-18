// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.filepicker');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.ratom');
komponentit.filepicker.humanize_filesize = (function komponentit$filepicker$humanize_filesize(var_args){
var G__32207 = arguments.length;
switch (G__32207) {
case 1:
return komponentit.filepicker.humanize_filesize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return komponentit.filepicker.humanize_filesize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(komponentit.filepicker.humanize_filesize.cljs$core$IFn$_invoke$arity$1 = (function (bytes){
return komponentit.filepicker.humanize_filesize.cljs$core$IFn$_invoke$arity$2(bytes,null);
}));

(komponentit.filepicker.humanize_filesize.cljs$core$IFn$_invoke$arity$2 = (function (bytes,p__32208){
var map__32209 = p__32208;
var map__32209__$1 = (((((!((map__32209 == null))))?(((((map__32209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32209):map__32209);
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32209__$1,cljs.core.cst$kw$locale);
var iec_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32209__$1,cljs.core.cst$kw$iec_QMARK_);
var locale_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32209__$1,cljs.core.cst$kw$locale_DASH_opts);
var units = (cljs.core.truth_(iec_QMARK_)?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bytes","KiB","MiB","GiB","TiB","PiB"], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bytes","kB","MB","GB","TB","PB"], null));
var m = (cljs.core.truth_(iec_QMARK_)?(1024):(1000));
var unit = (((bytes === (0)))?(0):Math.floor((Math.log(bytes) / Math.log(m))));
var size = (bytes / Math.pow(m,unit));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size.toLocaleString((function (){var or__4185__auto__ = locale;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})(),cljs.core.clj__GT_js((function (){var or__4185__auto__ = locale_opts;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})())))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(units,unit))].join('');
}));

(komponentit.filepicker.humanize_filesize.cljs$lang$maxFixedArity = 2);

komponentit.filepicker.file_list__GT_vec = (function komponentit$filepicker$file_list__GT_vec(file_list){
return cljs.core.vec(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__32212_SHARP_){
return file_list.item(p1__32212_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(file_list.length)));
});
komponentit.filepicker.noop = cljs.core.constantly(null);
komponentit.filepicker.filepicker = (function komponentit$filepicker$filepicker(_){
var input_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var input_ref_fn = (function (p1__32213_SHARP_){
return cljs.core.reset_BANG_(input_ref,p1__32213_SHARP_);
});
return (function (p__32214){
var map__32215 = p__32214;
var map__32215__$1 = (((((!((map__32215 == null))))?(((((map__32215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32215):map__32215);
var opts = map__32215__$1;
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32215__$1,cljs.core.cst$kw$on_DASH_select);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32215__$1,cljs.core.cst$kw$on_DASH_blur);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32215__$1,cljs.core.cst$kw$value);
var file_select_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32215__$1,cljs.core.cst$kw$file_DASH_select_DASH_label);
var on_clear = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32215__$1,cljs.core.cst$kw$on_DASH_clear);
var clearable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32215__$1,cljs.core.cst$kw$clearable_QMARK_);
var on_select__$1 = (function (){var or__4185__auto__ = on_select;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return komponentit.filepicker.noop;
}
})();
var on_clear__$1 = (cljs.core.truth_(clearable_QMARK_)?(function (){var or__4185__auto__ = on_clear;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (function (){
return (on_select__$1.cljs$core$IFn$_invoke$arity$1 ? on_select__$1.cljs$core$IFn$_invoke$arity$1(null) : on_select__$1.call(null,null));
});
}
})():komponentit.filepicker.noop);
var on_blur__$1 = (function (){var or__4185__auto__ = on_blur;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return komponentit.filepicker.noop;
}
})();
var file_select_label__$1 = (function (){var or__4185__auto__ = file_select_label;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Select file";
}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"inline-block"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null),cljs.core.cst$kw$type,"file",cljs.core.cst$kw$ref,input_ref_fn,cljs.core.cst$kw$on_DASH_change,(function (e){
var temp__4655__auto__ = e.target.files.item((0));
if(cljs.core.truth_(temp__4655__auto__)){
var file = temp__4655__auto__;
return (on_select__$1.cljs$core$IFn$_invoke$arity$1 ? on_select__$1.cljs$core$IFn$_invoke$arity$1(file) : on_select__$1.call(null,file));
} else {
return null;
}
}),cljs.core.cst$kw$on_DASH_blur,on_blur__$1,cljs.core.cst$kw$value,null], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$on_DASH_select,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_blur,cljs.core.cst$kw$value,cljs.core.cst$kw$file_DASH_select_DASH_label,cljs.core.cst$kw$on_DASH_clear,cljs.core.cst$kw$clearable_QMARK_,cljs.core.cst$kw$iec_QMARK_,cljs.core.cst$kw$locale,cljs.core.cst$kw$locale_DASH_opts], 0)),cljs.core.cst$kw$type,"button",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_click,(function (e){
return cljs.core.deref(input_ref).click();
})], 0)),file_select_label__$1], null),(cljs.core.truth_(clearable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (){
return (on_clear__$1.cljs$core$IFn$_invoke$arity$0 ? on_clear__$1.cljs$core$IFn$_invoke$arity$0() : on_clear__$1.call(null));
})], null),"\u00D7"], null):null),(cljs.core.truth_(value)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$selected_DASH_file," ",value.name,", ",komponentit.filepicker.humanize_filesize.cljs$core$IFn$_invoke$arity$2(value.size,cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locale,cljs.core.cst$kw$iec_QMARK_,cljs.core.cst$kw$locale_DASH_opts], null)))], null):null)], null);
});
});
komponentit.filepicker.on_drag_over_handler = (function komponentit$filepicker$on_drag_over_handler(p__32217){
var map__32218 = p__32217;
var map__32218__$1 = (((((!((map__32218 == null))))?(((((map__32218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32218):map__32218);
var on_active_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32218__$1,cljs.core.cst$kw$on_DASH_active_DASH_change);
return (function (e){
e.preventDefault();

e.stopPropagation();

if(cljs.core.truth_(on_active_change)){
(on_active_change.cljs$core$IFn$_invoke$arity$1 ? on_active_change.cljs$core$IFn$_invoke$arity$1(true) : on_active_change.call(null,true));
} else {
}

return null;
});
});
komponentit.filepicker.on_drag_leave_handler = (function komponentit$filepicker$on_drag_leave_handler(p__32220){
var map__32221 = p__32220;
var map__32221__$1 = (((((!((map__32221 == null))))?(((((map__32221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32221):map__32221);
var on_active_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32221__$1,cljs.core.cst$kw$on_DASH_active_DASH_change);
return (function (e){
if(cljs.core.truth_(on_active_change)){
(on_active_change.cljs$core$IFn$_invoke$arity$1 ? on_active_change.cljs$core$IFn$_invoke$arity$1(false) : on_active_change.call(null,false));
} else {
}

return null;
});
});
/**
 * Create handler when can be used for file drag'n'drop.
 * 
 * Options:
 * 
 * - :on-file-drop - Called with vector of File
 * - :on-active-change - (optional) Called when dragged over and leaves the area.
 */
komponentit.filepicker.on_drop_handler = (function komponentit$filepicker$on_drop_handler(p__32223){
var map__32224 = p__32223;
var map__32224__$1 = (((((!((map__32224 == null))))?(((((map__32224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32224):map__32224);
var on_file_drop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32224__$1,cljs.core.cst$kw$on_DASH_file_DASH_drop);
var on_active_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32224__$1,cljs.core.cst$kw$on_DASH_active_DASH_change);
return (function (e){
e.preventDefault();

e.stopPropagation();

if(cljs.core.truth_(on_active_change)){
(on_active_change.cljs$core$IFn$_invoke$arity$1 ? on_active_change.cljs$core$IFn$_invoke$arity$1(false) : on_active_change.call(null,false));
} else {
}

var G__32226_32227 = komponentit.filepicker.file_list__GT_vec(e.dataTransfer.files);
(on_file_drop.cljs$core$IFn$_invoke$arity$1 ? on_file_drop.cljs$core$IFn$_invoke$arity$1(G__32226_32227) : on_file_drop.call(null,G__32226_32227));

return null;
});
});
/**
 * Create attribute map for drop area.
 */
komponentit.filepicker.drop_area = (function komponentit$filepicker$drop_area(p__32228){
var map__32229 = p__32228;
var map__32229__$1 = (((((!((map__32229 == null))))?(((((map__32229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32229):map__32229);
var opts = map__32229__$1;
var on_file_drop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32229__$1,cljs.core.cst$kw$on_DASH_file_DASH_drop);
var on_active_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32229__$1,cljs.core.cst$kw$on_DASH_active_DASH_change);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_drag_DASH_over,komponentit.filepicker.on_drag_over_handler(opts),cljs.core.cst$kw$on_DASH_drag_DASH_leave,komponentit.filepicker.on_drag_leave_handler(opts),cljs.core.cst$kw$on_DASH_drop,komponentit.filepicker.on_drop_handler(opts)], null);
});
