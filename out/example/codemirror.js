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
if((typeof example !== 'undefined') && (typeof example.codemirror !== 'undefined') && (typeof example.codemirror.t_example$codemirror32830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.codemirror.t_example$codemirror32830 = (function (meta32831){
this.meta32831 = meta32831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.codemirror.t_example$codemirror32830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32832,meta32831__$1){
var self__ = this;
var _32832__$1 = this;
return (new example.codemirror.t_example$codemirror32830(meta32831__$1));
}));

(example.codemirror.t_example$codemirror32830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32832){
var self__ = this;
var _32832__$1 = this;
return self__.meta32831;
}));

(example.codemirror.t_example$codemirror32830.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.codemirror.t_example$codemirror32830.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
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

(example.codemirror.t_example$codemirror32830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32831], null);
}));

(example.codemirror.t_example$codemirror32830.cljs$lang$type = true);

(example.codemirror.t_example$codemirror32830.cljs$lang$ctorStr = "example.codemirror/t_example$codemirror32830");

(example.codemirror.t_example$codemirror32830.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.codemirror/t_example$codemirror32830");
}));

/**
 * Positional factory function for example.codemirror/t_example$codemirror32830.
 */
example.codemirror.__GT_t_example$codemirror32830 = (function example$codemirror$__GT_t_example$codemirror32830(meta32831){
return (new example.codemirror.t_example$codemirror32830(meta32831));
});

}

return (new example.codemirror.t_example$codemirror32830(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$code,"(defn hello\n  []\n  \"world\")"], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$codemirror,cljs.core.cst$kw$parinfer], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"parinfer",cljs.core.cst$kw$documentation,"The new [parinfer-codemirror](https://github.com/shaunlebron/parinfer-codemirror)\n  only requires calling `init` function with CodeMirror instance to initialize\n  parinfer mode.",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.codemirror !== 'undefined') && (typeof example.codemirror.t_example$codemirror32834 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.codemirror.t_example$codemirror32834 = (function (meta32835){
this.meta32835 = meta32835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.codemirror.t_example$codemirror32834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32836,meta32835__$1){
var self__ = this;
var _32836__$1 = this;
return (new example.codemirror.t_example$codemirror32834(meta32835__$1));
}));

(example.codemirror.t_example$codemirror32834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32836){
var self__ = this;
var _32836__$1 = this;
return self__.meta32835;
}));

(example.codemirror.t_example$codemirror32834.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.codemirror.t_example$codemirror32834.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.codemirror.codemirror,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.cst$kw$on_DASH_mount,(function (p1__32833_SHARP_){
var G__32837 = p1__32833_SHARP_;
var G__32838 = "smart";
var G__32839 = ({});
return example.codemirror.global$module$parinfer_codemirror.init(G__32837,G__32838,G__32839);
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

(example.codemirror.t_example$codemirror32834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32835], null);
}));

(example.codemirror.t_example$codemirror32834.cljs$lang$type = true);

(example.codemirror.t_example$codemirror32834.cljs$lang$ctorStr = "example.codemirror/t_example$codemirror32834");

(example.codemirror.t_example$codemirror32834.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.codemirror/t_example$codemirror32834");
}));

/**
 * Positional factory function for example.codemirror/t_example$codemirror32834.
 */
example.codemirror.__GT_t_example$codemirror32834 = (function example$codemirror$__GT_t_example$codemirror32834(meta32835){
return (new example.codemirror.t_example$codemirror32834(meta32835));
});

}

return (new example.codemirror.t_example$codemirror32834(null));
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
var G__32842 = (start - (1));
start = G__32842;
continue;
} else {
return start;
}
break;
}
})();
var cur_word = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,end))?cur_line.slice(start,end):null);
return ({"list": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,(function (){var G__32841 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","foobar","bar","hello",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_word),"foo"].join('')], null);
if(cljs.core.truth_(cur_word)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32840_SHARP_){
return clojure.string.starts_with_QMARK_(p1__32840_SHARP_,cur_word);
}),G__32841);
} else {
return G__32841;
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
if((typeof example !== 'undefined') && (typeof example.codemirror !== 'undefined') && (typeof example.codemirror.t_example$codemirror32843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.codemirror.t_example$codemirror32843 = (function (meta32844){
this.meta32844 = meta32844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.codemirror.t_example$codemirror32843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32845,meta32844__$1){
var self__ = this;
var _32845__$1 = this;
return (new example.codemirror.t_example$codemirror32843(meta32844__$1));
}));

(example.codemirror.t_example$codemirror32843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32845){
var self__ = this;
var _32845__$1 = this;
return self__.meta32844;
}));

(example.codemirror.t_example$codemirror32843.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.codemirror.t_example$codemirror32843.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
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

(example.codemirror.t_example$codemirror32843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32844], null);
}));

(example.codemirror.t_example$codemirror32843.cljs$lang$type = true);

(example.codemirror.t_example$codemirror32843.cljs$lang$ctorStr = "example.codemirror/t_example$codemirror32843");

(example.codemirror.t_example$codemirror32843.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.codemirror/t_example$codemirror32843");
}));

/**
 * Positional factory function for example.codemirror/t_example$codemirror32843.
 */
example.codemirror.__GT_t_example$codemirror32843 = (function example$codemirror$__GT_t_example$codemirror32843(meta32844){
return (new example.codemirror.t_example$codemirror32843(meta32844));
});

}

return (new example.codemirror.t_example$codemirror32843(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$code,""], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
