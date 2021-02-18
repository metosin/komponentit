// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.markdown');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
devcards.util.markdown.leading_space_count = (function devcards$util$markdown$leading_space_count(s){
var temp__4657__auto__ = cljs.core.second(cljs.core.re_matches(/^([\s]*).*/,s));
if(cljs.core.truth_(temp__4657__auto__)){
var ws = temp__4657__auto__;
return ws.length;
} else {
return null;
}
});
devcards.util.markdown.is_bullet_item_QMARK_ = (function devcards$util$markdown$is_bullet_item_QMARK_(s){
return cljs.core.boolean$(cljs.core.re_matches(/^\s*([-*+]|[0-9]+\.)\s.*/,s));
});
/**
 * Find the common left edge of bullet lists in a collection of lines.
 */
devcards.util.markdown.bullets_left_edge = (function devcards$util$markdown$bullets_left_edge(lines){
var or__4185__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.util.markdown.leading_space_count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(devcards.util.markdown.is_bullet_item_QMARK_,lines)));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
});
/**
 * Strip the left margin's extra whitespace, but leave bullet list indents in tact.
 */
devcards.util.markdown.strip_left_margin = (function devcards$util$markdown$strip_left_margin(s,margin){
if(devcards.util.markdown.is_bullet_item_QMARK_(s)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,margin);
} else {
return clojure.string.trim(s);
}
});
devcards.util.markdown.markdown_to_html = (function devcards$util$markdown$markdown_to_html(markdown_txt){
return marked(markdown_txt);
});
devcards.util.markdown.matches_delim_QMARK_ = (function devcards$util$markdown$matches_delim_QMARK_(line){
return cljs.core.re_matches(/^[\s]*```(\w*).*/,line);
});
if((typeof devcards !== 'undefined') && (typeof devcards.util !== 'undefined') && (typeof devcards.util.markdown !== 'undefined') && (typeof devcards.util.markdown.block_parser !== 'undefined')){
} else {
devcards.util.markdown.block_parser = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__36089 = cljs.core.get_global_hierarchy;
return (fexpr__36089.cljs$core$IFn$_invoke$arity$0 ? fexpr__36089.cljs$core$IFn$_invoke$arity$0() : fexpr__36089.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.util.markdown","block-parser"),(function (p__36090,line){
var map__36091 = p__36090;
var map__36091__$1 = (((((!((map__36091 == null))))?(((((map__36091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36091):map__36091);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36091__$1,cljs.core.cst$kw$stage);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.util.markdown.matches_delim_QMARK_(line))?cljs.core.cst$kw$delim:cljs.core.cst$kw$line),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(stage)], null);
}),cljs.core.cst$kw$default,hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$markdown], null),(function (p__36093,line){
var map__36094 = p__36093;
var map__36094__$1 = (((((!((map__36094 == null))))?(((((map__36094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36094):map__36094);
var st = map__36094__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36094__$1,cljs.core.cst$kw$stage);
var left_margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36094__$1,cljs.core.cst$kw$left_DASH_margin);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stage,cljs.core.cst$kw$content], null),cljs.core.conj,devcards.util.markdown.strip_left_margin(line,left_margin));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$code_DASH_block], null),(function (p__36096,line){
var map__36097 = p__36096;
var map__36097__$1 = (((((!((map__36097 == null))))?(((((map__36097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36097):map__36097);
var st = map__36097__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36097__$1,cljs.core.cst$kw$stage);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stage,cljs.core.cst$kw$content], null),cljs.core.conj,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,cljs.core.cst$kw$leading_DASH_spaces.cljs$core$IFn$_invoke$arity$1(stage)));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delim,cljs.core.cst$kw$markdown], null),(function (p__36099,line){
var map__36100 = p__36099;
var map__36100__$1 = (((((!((map__36100 == null))))?(((((map__36100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36100):map__36100);
var st = map__36100__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36100__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36100__$1,cljs.core.cst$kw$accum);
var lang = cljs.core.second(devcards.util.markdown.matches_delim_QMARK_(line));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,cljs.core.cst$kw$accum,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$code_DASH_block,cljs.core.cst$kw$lang,((clojure.string.blank_QMARK_(lang))?null:lang),cljs.core.cst$kw$leading_DASH_spaces,devcards.util.markdown.leading_space_count(line),cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delim,cljs.core.cst$kw$code_DASH_block], null),(function (p__36102,line){
var map__36103 = p__36102;
var map__36103__$1 = (((((!((map__36103 == null))))?(((((map__36103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36103):map__36103);
var st = map__36103__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36103__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36103__$1,cljs.core.cst$kw$accum);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,cljs.core.cst$kw$accum,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$markdown,cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.parse_out_blocks_STAR_ = (function devcards$util$markdown$parse_out_blocks_STAR_(m){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(m,"\n");
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(devcards.util.markdown.block_parser,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$markdown,cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$accum,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$left_DASH_margin,devcards.util.markdown.bullets_left_edge(lines)], null),lines);
});
devcards.util.markdown.parse_out_blocks = (function devcards$util$markdown$parse_out_blocks(m){
var map__36106 = devcards.util.markdown.parse_out_blocks_STAR_(m);
var map__36106__$1 = (((((!((map__36106 == null))))?(((((map__36106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36106):map__36106);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36106__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36106__$1,cljs.core.cst$kw$accum);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$content], null),(function (p1__36105_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",p1__36105_SHARP_);
}));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__36108){
var map__36109 = p__36108;
var map__36109__$1 = (((((!((map__36109 == null))))?(((((map__36109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36109):map__36109);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36109__$1,cljs.core.cst$kw$content);
return cljs.core.not_empty(content);
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)));
});
