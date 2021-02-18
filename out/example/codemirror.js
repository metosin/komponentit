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
example.codemirror.word_re = /[\w$]+/;
example.codemirror.simple_completions = (function example$codemirror$simple_completions(editor,opts){
var cur = editor.getCursor();
var cur_line = editor.getLine(cur.line);
var end = cur.ch;
var start = (function (){var start = end;
while(true){
if(cljs.core.truth_(example.codemirror.word_re.test(cur_line.charAt((start - (1)))))){
var G__37884 = (start - (1));
start = G__37884;
continue;
} else {
return start;
}
break;
}
})();
var cur_word = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,end))?cur_line.slice(start,end):null);
return ({"list": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,(function (){var G__37883 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","foobar","bar","hello",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_word),"foo"].join('')], null);
if(cljs.core.truth_(cur_word)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37882_SHARP_){
return clojure.string.starts_with_QMARK_(p1__37882_SHARP_,cur_word);
}),G__37883);
} else {
return G__37883;
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
