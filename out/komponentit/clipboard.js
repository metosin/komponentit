// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.clipboard');
goog.require('cljs.core');
goog.require('cljs.core.constants');
komponentit.clipboard.copy_text = (function komponentit$clipboard$copy_text(text){
var el = document.createElement("textarea");
var prev_focus_el = document.activeElement;
var y_pos = (function (){var or__4185__auto__ = window.pageYOffset;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return document.documentElement.scrollTop;
}
})();
(el.style = ({"position": "absolute", "left": "-9999px", "top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_pos),"px"].join(''), "fontSize": "12pt", "border": "0", "padding": "0", "margin": "0"}));

(el.value = text);

el.addEventListener("focus",(function (_){
return window.scrollTo((0),y_pos);
}));

document.body.appendChild(el);

el.setSelectionRange((0),el.value.length);

el.focus();

document.execCommand("copy");

el.blur();

if(cljs.core.truth_(prev_focus_el)){
prev_focus_el.focus();
} else {
}

window.getSelection().removeAllRanges();

return window.document.body.removeChild(el);
});
