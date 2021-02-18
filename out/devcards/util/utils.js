// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25845_25849 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25846_25850 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25847_25851 = true;
var _STAR_print_fn_STAR__temp_val__25848_25852 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25847_25851);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25848_25852);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25846_25850);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25845_25849);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
}catch (e25843){if((e25843 instanceof Error)){
var e1 = e25843;
try{return obj.toString();
}catch (e25844){if((e25844 instanceof Error)){
var e2 = e25844;
return "<<Un-printable Type>>";
} else {
throw e25844;

}
}} else {
throw e25843;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__25853 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__25854 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__25854);

try{return devcards.util.utils.pprint_str(code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__25853);
}});
