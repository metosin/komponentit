// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.autosize');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
komponentit.autosize.base_sizer_style = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$min_DASH_height,cljs.core.cst$kw$top,cljs.core.cst$kw$overflow,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$right,cljs.core.cst$kw$position,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],["none",(0),(0),"hidden",(-1000),(0),"absolute","hidden",(0)]);
komponentit.autosize.base_sizer_style_str = cljs.core.reduce_kv((function (s,prop,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.name(prop),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}),"",komponentit.autosize.base_sizer_style);
/**
 * List of style properties which affect the size of textarea
 */
komponentit.autosize.size_style_props = new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, ["letter-spacing","line-height","font-family","font-kerning-settings","font-kerning","font-size","font-stretch","font-style","font-variant","font-variant-caps","font-variant-ligatures","font-variant-numeric","font-weight","text-rendering","text-indent","padding-left","padding-right","padding-top","padding-bottom","box-sizing","border-left-width","border-right-width","border-bottom-width","border-top-width","white-space","word-wrap"], null);
komponentit.autosize.copy_styles = (function komponentit$autosize$copy_styles(style,props){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,prop){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style.getPropertyValue(prop)),";"].join('');
}),"",props);
});
komponentit.autosize.get_property_value = (function komponentit$autosize$get_property_value(style,k){
var or__4185__auto__ = parseFloat(style.getPropertyValue(k));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
});
komponentit.autosize.apply_box_sizing = (function komponentit$autosize$apply_box_sizing(value,p__37133){
var map__37134 = p__37133;
var map__37134__$1 = (((((!((map__37134 == null))))?(((((map__37134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37134):map__37134);
var box_sizing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37134__$1,cljs.core.cst$kw$box_DASH_sizing);
var border_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37134__$1,cljs.core.cst$kw$border_DASH_size);
var padding_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37134__$1,cljs.core.cst$kw$padding_DASH_size);
var G__37136 = box_sizing;
switch (G__37136) {
case "border-box":
return (value + border_size);

break;
case "content-box":
return (value - padding_size);

break;
default:
return value;

}
});
komponentit.autosize.input_node_styles = (function komponentit$autosize$input_node_styles(el){
if(cljs.core.truth_(el)){
var style = window.getComputedStyle(el);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$box_DASH_sizing,style.getPropertyValue("box-sizing"),cljs.core.cst$kw$border_DASH_size,(komponentit.autosize.get_property_value(style,"border-left-width") + komponentit.autosize.get_property_value(style,"border-right-width")),cljs.core.cst$kw$padding_DASH_size,(komponentit.autosize.get_property_value(style,"padding-left") + komponentit.autosize.get_property_value(style,"padding-right")),cljs.core.cst$kw$sizer_DASH_style,komponentit.autosize.copy_styles(style,komponentit.autosize.size_style_props)], null);
} else {
return null;
}
});
if((typeof komponentit !== 'undefined') && (typeof komponentit.autosize !== 'undefined') && (typeof komponentit.autosize.input_sizer !== 'undefined')){
} else {
komponentit.autosize.input_sizer = (new cljs.core.Delay((function (){
var G__37138 = document.createElement("div");
document.body.appendChild(G__37138);

return G__37138;
}),null));
}
komponentit.autosize.node_width = (function komponentit$autosize$node_width(value,placeholder,placeholder_is_min_width_QMARK_,p__37139){
var map__37140 = p__37139;
var map__37140__$1 = (((((!((map__37140 == null))))?(((((map__37140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37140):map__37140);
var styles = map__37140__$1;
var sizer_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37140__$1,cljs.core.cst$kw$sizer_DASH_style);
var _ = (cljs.core.deref(komponentit.autosize.input_sizer).textContent = ((cljs.core.seq(value))?value:placeholder));
var ___$1 = cljs.core.deref(komponentit.autosize.input_sizer).setAttribute("style",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(komponentit.autosize.base_sizer_style_str),"width:auto;",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sizer_style)].join(''));
var width = komponentit.autosize.apply_box_sizing(cljs.core.deref(komponentit.autosize.input_sizer).scrollWidth,styles);
var placeholder_width = (cljs.core.truth_(placeholder_is_min_width_QMARK_)?(function (){
(cljs.core.deref(komponentit.autosize.input_sizer).textContent = placeholder);

return komponentit.autosize.apply_box_sizing(cljs.core.deref(komponentit.autosize.input_sizer).scrollWidth,styles);
})()
:null);
var min_width = (cljs.core.truth_(placeholder_is_min_width_QMARK_)?placeholder_width:(- Infinity));
var width__$1 = ((2) + (function (){var x__4273__auto__ = min_width;
var y__4274__auto__ = (function (){var x__4273__auto____$1 = (1);
var y__4274__auto__ = width;
return ((x__4273__auto____$1 > y__4274__auto__) ? x__4273__auto____$1 : y__4274__auto__);
})();
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})());
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$min_DASH_width,(cljs.core.truth_(isFinite(min_width))?min_width:null)], null);
});
/**
 * Calculate width of the input based on the contents.
 * 
 *   Content width is calculated using separate hidden element. This
 *   element is not managed by React and is placed outside of this
 *   component, for easier styling.
 */
komponentit.autosize.input = (function komponentit$autosize$input(p__37142){
var map__37143 = p__37142;
var map__37143__$1 = (((((!((map__37143 == null))))?(((((map__37143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37143):map__37143);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37143__$1,cljs.core.cst$kw$placeholder);
var placeholder_is_min_width_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37143__$1,cljs.core.cst$kw$placeholder_DASH_is_DASH_min_DASH_width_QMARK_);
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"komponentit.autosize.input",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
return cljs.core.reset_BANG_(state,komponentit.autosize.input_node_styles(reagent.dom.dom_node(this$)));
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$,p__37145){
var vec__37146 = p__37145;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37146,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37146,(1),null);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)),cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(prev_props))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)),cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(prev_props))))){
return cljs.core.reset_BANG_(state,komponentit.autosize.input_node_styles(reagent.dom.dom_node(this$)));
} else {
return null;
}
}),cljs.core.cst$kw$reagent_DASH_render,(function (p__37149){
var map__37150 = p__37149;
var map__37150__$1 = (((((!((map__37150 == null))))?(((((map__37150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37150):map__37150);
var props = map__37150__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37150__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37150__$1,cljs.core.cst$kw$style);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37150__$1,cljs.core.cst$kw$value);
var placeholder__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37150__$1,cljs.core.cst$kw$placeholder);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$min_DASH_width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$placeholder_DASH_is_DASH_min_DASH_width_QMARK_], 0)),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,komponentit.autosize.node_width(value,placeholder__$1,placeholder_is_min_width_QMARK_,cljs.core.deref(state))], 0)))], null);
})], null));
});
komponentit.autosize.textarea_node_styles = (function komponentit$autosize$textarea_node_styles(el){
if(cljs.core.truth_(el)){
var style = window.getComputedStyle(el);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$box_DASH_sizing,style.getPropertyValue("box-sizing"),cljs.core.cst$kw$border_DASH_size,(komponentit.autosize.get_property_value(style,"border-bottom-width") + komponentit.autosize.get_property_value(style,"border-top-width")),cljs.core.cst$kw$padding_DASH_size,(komponentit.autosize.get_property_value(style,"padding-bottom") + komponentit.autosize.get_property_value(style,"padding-top")),cljs.core.cst$kw$sizer_DASH_style,komponentit.autosize.copy_styles(style,cljs.core.into.cljs$core$IFn$_invoke$arity$2(komponentit.autosize.size_style_props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width"], null)))], null);
} else {
return null;
}
});
if((typeof komponentit !== 'undefined') && (typeof komponentit.autosize !== 'undefined') && (typeof komponentit.autosize.textarea_sizer !== 'undefined')){
} else {
komponentit.autosize.textarea_sizer = (new cljs.core.Delay((function (){
var G__37152 = document.createElement("div");
document.body.appendChild(G__37152);

return G__37152;
}),null));
}
komponentit.autosize.node_height = (function komponentit$autosize$node_height(value,min_rows,max_rows,p__37153){
var map__37154 = p__37153;
var map__37154__$1 = (((((!((map__37154 == null))))?(((((map__37154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37154):map__37154);
var styles = map__37154__$1;
var box_sizing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37154__$1,cljs.core.cst$kw$box_DASH_sizing);
var border_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37154__$1,cljs.core.cst$kw$border_DASH_size);
var padding_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37154__$1,cljs.core.cst$kw$padding_DASH_size);
var sizer_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37154__$1,cljs.core.cst$kw$sizer_DASH_style);
var _ = (cljs.core.deref(komponentit.autosize.textarea_sizer).textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"\u200B"].join(''));
var ___$1 = cljs.core.deref(komponentit.autosize.textarea_sizer).setAttribute("style",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(komponentit.autosize.base_sizer_style_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sizer_style)].join(''));
var height = komponentit.autosize.apply_box_sizing(cljs.core.deref(komponentit.autosize.textarea_sizer).scrollHeight,styles);
var single_row_height = (cljs.core.truth_((function (){var or__4185__auto__ = min_rows;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return max_rows;
}
})())?(function (){
(cljs.core.deref(komponentit.autosize.textarea_sizer).textContent = "x");

return (cljs.core.deref(komponentit.autosize.textarea_sizer).scrollHeight - padding_size);
})()
:null);
var min_height = (cljs.core.truth_(min_rows)?(((min_rows * single_row_height) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("border-box",box_sizing))?(padding_size + border_size):null)) + (0)):(- Infinity));
var max_height = (cljs.core.truth_(max_rows)?((max_rows * single_row_height) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("border-box",box_sizing))?(padding_size + border_size):(0))):Infinity);
var height__$1 = (function (){var x__4276__auto__ = max_height;
var y__4277__auto__ = (function (){var x__4273__auto__ = min_height;
var y__4274__auto__ = height;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,height__$1,cljs.core.cst$kw$min_DASH_height,(cljs.core.truth_(isFinite(min_height))?min_height:null),cljs.core.cst$kw$max_DASH_height,(cljs.core.truth_(isFinite(max_height))?max_height:null)], null);
});
/**
 * Calculate height of the textarea based on the text contents.
 * 
 *   Content height is calculated using separate hidden textarea. This
 *   textarea is not managed by React and is placed outside of this
 *   component, for easier styling.
 */
komponentit.autosize.textarea = (function komponentit$autosize$textarea(p__37156){
var map__37157 = p__37156;
var map__37157__$1 = (((((!((map__37157 == null))))?(((((map__37157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37157):map__37157);
var min_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157__$1,cljs.core.cst$kw$min_DASH_rows);
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157__$1,cljs.core.cst$kw$max_DASH_rows);
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"komponentit.autosize.textarea",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
return cljs.core.reset_BANG_(state,komponentit.autosize.textarea_node_styles(reagent.dom.dom_node(this$)));
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$,p__37159){
var vec__37160 = p__37159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37160,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37160,(1),null);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)),cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(prev_props))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)),cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(prev_props))))){
return cljs.core.reset_BANG_(state,komponentit.autosize.textarea_node_styles(reagent.dom.dom_node(this$)));
} else {
return null;
}
}),cljs.core.cst$kw$reagent_DASH_render,(function (p__37163){
var map__37164 = p__37163;
var map__37164__$1 = (((((!((map__37164 == null))))?(((((map__37164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37164):map__37164);
var props = map__37164__$1;
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37164__$1,cljs.core.cst$kw$style);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37164__$1,cljs.core.cst$kw$value);
var min_rows__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37164__$1,cljs.core.cst$kw$min_DASH_rows);
var max_rows__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37164__$1,cljs.core.cst$kw$max_DASH_rows);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$min_DASH_rows,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_rows], 0)),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,komponentit.autosize.node_height(value,min_rows__$1,max_rows__$1,cljs.core.deref(state))], 0)))], null);
})], null));
});
