// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.codemirror');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('clojure.string');
goog.require('example.core');
goog.require('komponentit.codemirror');
example.codemirror.global$module$parinfer_codemirror = goog.global["parinferCodeMirror"];
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$codemirror,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,[example.core.header(cljs.core.cst$sym$coremirror,"Codemirror"),"Komponentit doesn't currently provide dependency on `cljsjs/codemirror` or `metosin/codemirror-parinfer`, include\nthese yourself in the application if needed.\n\n- [Examples](https://github.com/metosin/komponentit/blob/master/example-src/cljs/example/codemirror.cljs)"].join(''),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$codemirror,cljs.core.cst$kw$codemirror], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"codemirror",cljs.core.cst$kw$documentation,"Basic codemirror intergration with `:value` and `:on-change` properties.",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.codemirror !== 'undefined') && (typeof example.codemirror.t_example$codemirror32913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.codemirror.t_example$codemirror32913 = (function (meta32914){
this.meta32914 = meta32914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.codemirror.t_example$codemirror32913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32915,meta32914__$1){
var self__ = this;
var _32915__$1 = this;
return (new example.codemirror.t_example$codemirror32913(meta32914__$1));
}));

(example.codemirror.t_example$codemirror32913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32915){
var self__ = this;
var _32915__$1 = this;
return self__.meta32914;
}));

(example.codemirror.t_example$codemirror32913.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.codemirror.t_example$codemirror32913.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.codemirror.codemirror,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_change,(function (cm,change){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$code,cm.getValue());
}),cljs.core.cst$kw$codemirror_DASH_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mode,"clojure",cljs.core.cst$kw$matchBrackets,true], null)], null)], null)], null);
});
if(cljs.core.fn_QMARK_(v__31365__auto__)){
return (function (data_atom__31366__auto__,owner__31367__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__31365__auto__,data_atom__31366__auto__,owner__31367__auto__], null));
});
} else {
return reagent.core.as_element(v__31365__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(devcard_opts__31347__auto__))], 0))], 0));
}));

(example.codemirror.t_example$codemirror32913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32914], null);
}));

(example.codemirror.t_example$codemirror32913.cljs$lang$type = true);

(example.codemirror.t_example$codemirror32913.cljs$lang$ctorStr = "example.codemirror/t_example$codemirror32913");

(example.codemirror.t_example$codemirror32913.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.codemirror/t_example$codemirror32913");
}));

/**
 * Positional factory function for example.codemirror/t_example$codemirror32913.
 */
example.codemirror.__GT_t_example$codemirror32913 = (function example$codemirror$__GT_t_example$codemirror32913(meta32914){
return (new example.codemirror.t_example$codemirror32913(meta32914));
});

}

return (new example.codemirror.t_example$codemirror32913(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$code,"(defn hello\n  []\n  \"world\")"], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$codemirror,cljs.core.cst$kw$parinfer], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"parinfer",cljs.core.cst$kw$documentation,"The new [parinfer-codemirror](https://github.com/shaunlebron/parinfer-codemirror)\n  only requires calling `init` function with CodeMirror instance to initialize\n  parinfer mode.",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.codemirror !== 'undefined') && (typeof example.codemirror.t_example$codemirror32917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.codemirror.t_example$codemirror32917 = (function (meta32918){
this.meta32918 = meta32918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.codemirror.t_example$codemirror32917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32919,meta32918__$1){
var self__ = this;
var _32919__$1 = this;
return (new example.codemirror.t_example$codemirror32917(meta32918__$1));
}));

(example.codemirror.t_example$codemirror32917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32919){
var self__ = this;
var _32919__$1 = this;
return self__.meta32918;
}));

(example.codemirror.t_example$codemirror32917.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.codemirror.t_example$codemirror32917.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.codemirror.codemirror,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_mount,(function (p1__32916_SHARP_){
var G__32920 = p1__32916_SHARP_;
var G__32921 = "smart";
var G__32922 = ({});
return example.codemirror.global$module$parinfer_codemirror.init(G__32920,G__32921,G__32922);
}),cljs.core.cst$kw$on_DASH_change,(function (cm,change){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$code,cm.getValue());
}),cljs.core.cst$kw$codemirror_DASH_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mode,"clojure",cljs.core.cst$kw$matchBrackets,true], null)], null)], null)], null);
});
if(cljs.core.fn_QMARK_(v__31365__auto__)){
return (function (data_atom__31366__auto__,owner__31367__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__31365__auto__,data_atom__31366__auto__,owner__31367__auto__], null));
});
} else {
return reagent.core.as_element(v__31365__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(devcard_opts__31347__auto__))], 0))], 0));
}));

(example.codemirror.t_example$codemirror32917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32918], null);
}));

(example.codemirror.t_example$codemirror32917.cljs$lang$type = true);

(example.codemirror.t_example$codemirror32917.cljs$lang$ctorStr = "example.codemirror/t_example$codemirror32917");

(example.codemirror.t_example$codemirror32917.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.codemirror/t_example$codemirror32917");
}));

/**
 * Positional factory function for example.codemirror/t_example$codemirror32917.
 */
example.codemirror.__GT_t_example$codemirror32917 = (function example$codemirror$__GT_t_example$codemirror32917(meta32918){
return (new example.codemirror.t_example$codemirror32917(meta32918));
});

}

return (new example.codemirror.t_example$codemirror32917(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$code,"(defn hello\n  []\n  \"world\")"], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
example.codemirror.word_re = /[\w$]+/;
example.codemirror.simple_completions = (function example$codemirror$simple_completions(editor,opts){
var cur = editor.getCursor();
var cur_line = editor.getLine(cur.line);
var end = cur.ch;
var start = (function (){var start = end;
while(true){
if(cljs.core.truth_(example.codemirror.word_re.test(cur_line.charAt((start - (1)))))){
var G__32925 = (start - (1));
start = G__32925;
continue;
} else {
return start;
}
break;
}
})();
var cur_word = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,end))?cur_line.slice(start,end):null);
return ({"list": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,(function (){var G__32924 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","foobar","bar","hello",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_word),"foo"].join('')], null);
if(cljs.core.truth_(cur_word)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32923_SHARP_){
return clojure.string.starts_with_QMARK_(p1__32923_SHARP_,cur_word);
}),G__32924);
} else {
return G__32924;
}
})()), "from": CodeMirror.Pos(cur.line,start), "to": CodeMirror.Pos(cur.line,end)});
});
example.codemirror.trigger_autocomplete = (function example$codemirror$trigger_autocomplete(cm){
var cur = cm.getCursor();
setTimeout((function (){
if(cljs.core.truth_(cm.state.completionActive)){
return null;
} else {
return cm.showHint(({"completeSingle": false}));
}
}),(100));

return CodeMirror.Pass;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$codemirror,cljs.core.cst$kw$codemirror_DASH_hint], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"codemirror-hint",cljs.core.cst$kw$documentation,"Example of using hint functionality. Triggerd by Ctrl-space or `(` `[` `{`.",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.codemirror !== 'undefined') && (typeof example.codemirror.t_example$codemirror32926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.codemirror.t_example$codemirror32926 = (function (meta32927){
this.meta32927 = meta32927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.codemirror.t_example$codemirror32926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32928,meta32927__$1){
var self__ = this;
var _32928__$1 = this;
return (new example.codemirror.t_example$codemirror32926(meta32927__$1));
}));

(example.codemirror.t_example$codemirror32926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32928){
var self__ = this;
var _32928__$1 = this;
return self__.meta32927;
}));

(example.codemirror.t_example$codemirror32926.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.codemirror.t_example$codemirror32926.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.codemirror.codemirror,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_change,(function (cm,change){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$code,cm.getValue());
}),cljs.core.cst$kw$codemirror_DASH_opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mode,"clojure",cljs.core.cst$kw$matchBrackets,true,cljs.core.cst$kw$extraKeys,new cljs.core.PersistentArrayMap(null, 4, ["Ctrl-Space","autocomplete","'('",example.codemirror.trigger_autocomplete,"'{'",example.codemirror.trigger_autocomplete,"'['",example.codemirror.trigger_autocomplete], null),cljs.core.cst$kw$hintOptions,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hint,example.codemirror.simple_completions], null)], null)], null)], null)], null);
});
if(cljs.core.fn_QMARK_(v__31365__auto__)){
return (function (data_atom__31366__auto__,owner__31367__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__31365__auto__,data_atom__31366__auto__,owner__31367__auto__], null));
});
} else {
return reagent.core.as_element(v__31365__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(devcard_opts__31347__auto__))], 0))], 0));
}));

(example.codemirror.t_example$codemirror32926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32927], null);
}));

(example.codemirror.t_example$codemirror32926.cljs$lang$type = true);

(example.codemirror.t_example$codemirror32926.cljs$lang$ctorStr = "example.codemirror/t_example$codemirror32926");

(example.codemirror.t_example$codemirror32926.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.codemirror/t_example$codemirror32926");
}));

/**
 * Positional factory function for example.codemirror/t_example$codemirror32926.
 */
example.codemirror.__GT_t_example$codemirror32926 = (function example$codemirror$__GT_t_example$codemirror32926(meta32927){
return (new example.codemirror.t_example$codemirror32926(meta32927));
});

}

return (new example.codemirror.t_example$codemirror32926(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$code,""], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
