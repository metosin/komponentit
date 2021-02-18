// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('cljs.test');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.pprint');
/**
 * Generates a testing environment with a reporter.
 * (empty-env) - uses the :cljs.test/default reporter.
 * (empty-env :cljs.test/pprint) - pretty prints all data structures. 
 * (empty-env reporter) - uses a reporter of your choosing.
 * 
 * To create your own reporter see cljs.test/report
 */
cljs.test.empty_env = (function cljs$test$empty_env(var_args){
var G__31170 = arguments.length;
switch (G__31170) {
case 0:
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$cljs$test_SLASH_default);
}));

(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$1 = (function (reporter){
var G__31171 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$report_DASH_counters,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$test,(0),cljs.core.cst$kw$pass,(0),cljs.core.cst$kw$fail,(0),cljs.core.cst$kw$error,(0)], null),cljs.core.cst$kw$testing_DASH_vars,cljs.core.List.EMPTY,cljs.core.cst$kw$testing_DASH_contexts,cljs.core.List.EMPTY,cljs.core.cst$kw$formatter,cljs.core.pr_str,cljs.core.cst$kw$reporter,reporter], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$test_SLASH_pprint,reporter)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__31171,cljs.core.cst$kw$reporter,cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$formatter,cljs.pprint.pprint], 0));
} else {
return G__31171;
}
}));

(cljs.test.empty_env.cljs$lang$maxFixedArity = 1);

cljs.test._STAR_current_env_STAR_ = null;
cljs.test.get_current_env = (function cljs$test$get_current_env(){
var or__4185__auto__ = cljs.test._STAR_current_env_STAR_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
}
});
cljs.test.update_current_env_BANG_ = (function cljs$test$update_current_env_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___31176 = arguments.length;
var i__4790__auto___31177 = (0);
while(true){
if((i__4790__auto___31177 < len__4789__auto___31176)){
args__4795__auto__.push((arguments[i__4790__auto___31177]));

var G__31178 = (i__4790__auto___31177 + (1));
i__4790__auto___31177 = G__31178;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return (cljs.test._STAR_current_env_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,cljs.test.get_current_env(),ks,f,args));
}));

(cljs.test.update_current_env_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.test.update_current_env_BANG_.cljs$lang$applyTo = (function (seq31173){
var G__31174 = cljs.core.first(seq31173);
var seq31173__$1 = cljs.core.next(seq31173);
var G__31175 = cljs.core.first(seq31173__$1);
var seq31173__$2 = cljs.core.next(seq31173__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31174,G__31175,seq31173__$2);
}));

cljs.test.set_env_BANG_ = (function cljs$test$set_env_BANG_(new_env){
return (cljs.test._STAR_current_env_STAR_ = new_env);
});
cljs.test.clear_env_BANG_ = (function cljs$test$clear_env_BANG_(){
return (cljs.test._STAR_current_env_STAR_ = null);
});
cljs.test.get_and_clear_env_BANG_ = (function cljs$test$get_and_clear_env_BANG_(){

var env = cljs.test.get_current_env();
cljs.test.clear_env_BANG_();

return env;
});
/**
 * Returns a string representation of the current test.  Renders names
 *   in *testing-vars* as a list, then the source file and line of
 *   current assertion.
 */
cljs.test.testing_vars_str = (function cljs$test$testing_vars_str(m){
var map__31180 = m;
var map__31180__$1 = (((((!((map__31180 == null))))?(((((map__31180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31180):map__31180);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31180__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31180__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31180__$1,cljs.core.cst$kw$column);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31179_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__31179_SHARP_));
}),cljs.core.cst$kw$testing_DASH_vars.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):null),")"].join('');
});
/**
 * Returns a string representation of the current test context. Joins
 *   strings in *testing-contexts* with spaces.
 */
cljs.test.testing_contexts_str = (function cljs$test$testing_contexts_str(){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.reverse(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))));
});
/**
 * Increments the named counter in *report-counters*, a ref to a map.
 *   Does nothing if *report-counters* is nil.
 */
cljs.test.inc_report_counter_BANG_ = (function cljs$test$inc_report_counter_BANG_(name){
if(cljs.core.truth_(cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$report_DASH_counters,name], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
} else {
return null;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.test !== 'undefined') && (typeof cljs.test.report !== 'undefined')){
} else {
/**
 * Generic reporting function, may be overridden to plug in
 * different report formats (e.g., TAP, JUnit).  Assertions such as
 * 'is' call 'report' to indicate results.  The argument given to
 * 'report' will be a map with a :type key.
 */
cljs.test.report = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__31182 = cljs.core.get_global_hierarchy;
return (fexpr__31182.cljs$core$IFn$_invoke$arity$0 ? fexpr__31182.cljs$core$IFn$_invoke$arity$0() : fexpr__31182.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.test","report"),(function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reporter.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m)], null);
}),cljs.core.cst$kw$default,hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$pass], null),(function (m){
return cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$pass);
}));
cljs.test.print_comparison = (function cljs$test$print_comparison(m){
var formatter_fn = (function (){var or__4185__auto__ = cljs.core.cst$kw$formatter.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env());
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.pr_str;
}
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["expected:",(function (){var G__31183 = cljs.core.cst$kw$expected.cljs$core$IFn$_invoke$arity$1(m);
return (formatter_fn.cljs$core$IFn$_invoke$arity$1 ? formatter_fn.cljs$core$IFn$_invoke$arity$1(G__31183) : formatter_fn.call(null,G__31183));
})()], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  actual:",(function (){var G__31184 = cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m);
return (formatter_fn.cljs$core$IFn$_invoke$arity$1 ? formatter_fn.cljs$core$IFn$_invoke$arity$1(G__31184) : formatter_fn.call(null,G__31184));
})()], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$fail], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$fail);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nFAIL in",cljs.test.testing_vars_str(m)], 0));

if(cljs.core.seq(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.test.testing_contexts_str()], 0));
} else {
}

var temp__4657__auto___31185 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto___31185)){
var message_31186 = temp__4657__auto___31185;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message_31186], 0));
} else {
}

return cljs.test.print_comparison(m);
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$error], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$error);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nERROR in",cljs.test.testing_vars_str(m)], 0));

if(cljs.core.seq(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.test.testing_contexts_str()], 0));
} else {
}

var temp__4657__auto___31187 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto___31187)){
var message_31188 = temp__4657__auto___31187;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message_31188], 0));
} else {
}

return cljs.test.print_comparison(m);
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$summary], null),(function (m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nRan",cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(m),"tests containing",((cljs.core.cst$kw$pass.cljs$core$IFn$_invoke$arity$1(m) + cljs.core.cst$kw$fail.cljs$core$IFn$_invoke$arity$1(m)) + cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(m)),"assertions."], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fail.cljs$core$IFn$_invoke$arity$1(m),"failures,",cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(m),"errors."], 0));
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$begin_DASH_test_DASH_ns], null),(function (m){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nTesting",cljs.core.name(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m))], 0));
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$end_DASH_test_DASH_ns], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$begin_DASH_test_DASH_var], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$end_DASH_test_DASH_var], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$end_DASH_run_DASH_tests], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$end_DASH_test_DASH_all_DASH_vars], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$end_DASH_test_DASH_vars], null),(function (m){
return null;
}));
cljs.test.js_line_and_column = (function cljs$test$js_line_and_column(stack_element){

var parts = stack_element.split(":");
var cnt = cljs.core.count(parts);
if((cnt > (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(cnt - (2))),(10)),parseInt(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(cnt - (1))),(10))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [NaN,NaN], null);
}
});
cljs.test.js_filename = (function cljs$test$js_filename(stack_element){
var output_dir = "build-target/public/out";
var output_dir__$1 = (function (){var G__31189 = output_dir;
if((!(clojure.string.ends_with_QMARK_(output_dir,"/")))){
return [G__31189,"/"].join('');
} else {
return G__31189;
}
})();
return cljs.core.first(cljs.core.last(stack_element.split(output_dir__$1)).split(":"));
});
cljs.test.mapped_line_and_column = (function cljs$test$mapped_line_and_column(filename,line,column){
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,line,column], null);
var temp__4655__auto__ = cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env());
if(cljs.core.truth_(temp__4655__auto__)){
var source_map = temp__4655__auto__;
var temp__4655__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(source_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,(line - (1))], null));
if(cljs.core.truth_(temp__4655__auto____$1)){
var columns = temp__4655__auto____$1;
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first((function (){var temp__4655__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,(column - (1)));
if(cljs.core.truth_(temp__4655__auto____$2)){
var mapping = temp__4655__auto____$2;
return mapping;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$line,cljs.core.cst$kw$col], null)));
} else {
return default$;
}
} else {
return default$;
}
});
cljs.test.file_and_line = (function cljs$test$file_and_line(exception,depth){
var temp__4655__auto__ = ((typeof exception.stack === 'string')?(function (){var G__31191 = exception.stack;
var G__31191__$1 = (((G__31191 == null))?null:clojure.string.split_lines(G__31191));
var G__31191__$2 = (((G__31191__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__31191__$1,depth));
if((G__31191__$2 == null)){
return null;
} else {
return clojure.string.trim(G__31191__$2);
}
})():false);
if(cljs.core.truth_(temp__4655__auto__)){
var stack_element = temp__4655__auto__;
var fname = cljs.test.js_filename(stack_element);
var vec__31192 = cljs.test.js_line_and_column(stack_element);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31192,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31192,(1),null);
var vec__31195 = cljs.test.mapped_line_and_column(fname,line,column);
var fname__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31195,(0),null);
var line__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31195,(1),null);
var column__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31195,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$file,fname__$1,cljs.core.cst$kw$line,line__$1,cljs.core.cst$kw$column,column__$1], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,exception.fileName,cljs.core.cst$kw$line,exception.lineNumber], null);
}
});
cljs.test.do_report = (function cljs$test$do_report(m){
var m__$1 = (function (){var G__31198 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m);
var G__31198__$1 = (((G__31198 instanceof cljs.core.Keyword))?G__31198.fqn:null);
switch (G__31198__$1) {
case "fail":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.test.file_and_line((new Error()),(4)),m], 0));

break;
case "error":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.test.file_and_line(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m),(0)),m], 0));

break;
default:
return m;

}
})();
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(m__$1) : cljs.test.report.call(null,m__$1));
});

/**
 * Marker protocol denoting CPS function to begin asynchronous
 *   testing.
 * @interface
 */
cljs.test.IAsyncTest = function(){};

/**
 * Returns whether x implements IAsyncTest.
 */
cljs.test.async_QMARK_ = (function cljs$test$async_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$test$IAsyncTest$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.test.IAsyncTest,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.test.IAsyncTest,x);
}
});
/**
 * Invoke all functions in fns with no arguments. A fn can optionally
 *   return
 * 
 *   an async test - is invoked with a continuation running left fns
 * 
 *   a seq of fns tagged per block - are invoked immediately after fn
 */
cljs.test.run_block = (function cljs$test$run_block(fns){
while(true){
var temp__4657__auto__ = cljs.core.seq(fns);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var f = cljs.core.first(xs__5205__auto__);
var obj = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.test.async_QMARK_(obj)){
var G__31201 = (function (){var d = (new cljs.core.Delay(((function (fns,obj,f,xs__5205__auto__,temp__4657__auto__){
return (function (){
var G__31202 = cljs.core.rest(fns);
return (cljs.test.run_block.cljs$core$IFn$_invoke$arity$1 ? cljs.test.run_block.cljs$core$IFn$_invoke$arity$1(G__31202) : cljs.test.run_block.call(null,G__31202));
});})(fns,obj,f,xs__5205__auto__,temp__4657__auto__))
,null));
return ((function (fns,d,obj,f,xs__5205__auto__,temp__4657__auto__){
return (function (){
if(cljs.core.realized_QMARK_(d)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WARNING: Async test called done more than one time."], 0));
} else {
return cljs.core.deref(d);
}
});
;})(fns,d,obj,f,xs__5205__auto__,temp__4657__auto__))
})();
return (obj.cljs$core$IFn$_invoke$arity$1 ? obj.cljs$core$IFn$_invoke$arity$1(G__31201) : obj.call(null,G__31201));
} else {
var G__31204 = (function (){var G__31203 = cljs.core.rest(fns);
if(cljs.core.truth_(cljs.core.cst$kw$cljs$test_SLASH_block_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(obj,G__31203);
} else {
return G__31203;
}
})();
fns = G__31204;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Tag a seq of fns to be picked up by run-block as injected
 *   continuation.  See run-block.
 */
cljs.test.block = (function cljs$test$block(fns){
var G__31205 = fns;
if((G__31205 == null)){
return null;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__31205,cljs.core.assoc,cljs.core.cst$kw$cljs$test_SLASH_block_QMARK_,true);
}
});
cljs.test.test_var_block_STAR_ = (function cljs$test$test_var_block_STAR_(v,t){
if((v instanceof cljs.core.Var)){
} else {
throw (new Error("Assert failed: (instance? Var v)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_vars], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));

cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$report_DASH_counters,cljs.core.cst$kw$test], null),cljs.core.inc);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_var,cljs.core.cst$kw$var,v], null));

try{return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
}catch (e31206){var e = e31206;
var G__31207 = e;
var G__31207__$1 = (((G__31207 instanceof cljs.core.Keyword))?G__31207.fqn:null);
switch (G__31207__$1) {
case "cljs.test/async-disabled":
throw "Async tests require fixtures to be specified as maps.  Testing aborted.";

break;
default:
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,"Uncaught exception, not in assertion.",cljs.core.cst$kw$expected,null,cljs.core.cst$kw$actual,e], null));

}
}}),(function (){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_var,cljs.core.cst$kw$var,v], null));

return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_vars], null),cljs.core.rest);
})], null);
});
/**
 * Like test-var, but returns a block for further composition and
 *   later execution.
 */
cljs.test.test_var_block = (function cljs$test$test_var_block(v){
var temp__4655__auto__ = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__4655__auto__)){
var t = temp__4655__auto__;
return cljs.test.test_var_block_STAR_(v,t);
} else {
return null;
}
});
/**
 * If v has a function in its :test metadata, calls that function,
 *   add v to :testing-vars property of env.
 */
cljs.test.test_var = (function cljs$test$test_var(v){
return cljs.test.run_block(cljs.test.test_var_block(v));
});
/**
 * The default, empty, fixture function.  Just calls its argument.
 * 
 *   NOTE: Incompatible with map fixtures.
 */
cljs.test.default_fixture = (function cljs$test$default_fixture(f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
/**
 * Composes two fixture functions, creating a new fixture function
 *   that combines their behavior.
 * 
 *   NOTE: Incompatible with map fixtures.
 */
cljs.test.compose_fixtures = (function cljs$test$compose_fixtures(f1,f2){
return (function (g){
var G__31209 = (function (){
return (f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(g) : f2.call(null,g));
});
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31209) : f1.call(null,G__31209));
});
});
/**
 * Composes a collection of fixtures, in order.  Always returns a valid
 *   fixture function, even if the collection is empty.
 * 
 *   NOTE: Incompatible with map fixtures.
 */
cljs.test.join_fixtures = (function cljs$test$join_fixtures(fixtures){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.test.compose_fixtures,cljs.test.default_fixture,fixtures);
});
/**
 * Wraps block in map-fixtures.
 */
cljs.test.wrap_map_fixtures = (function cljs$test$wrap_map_fixtures(map_fixtures,block){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$before,map_fixtures),block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reverse(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$after,map_fixtures))], 0));
});
cljs.test.execution_strategy = (function cljs$test$execution_strategy(once,each){
var fixtures_type = (function cljs$test$execution_strategy_$_fixtures_type(coll){
if(cljs.core.empty_QMARK_(coll)){
return cljs.core.cst$kw$none;
} else {
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,coll)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.every_QMARK_(cljs.core.fn_QMARK_,coll)){
return cljs.core.cst$kw$fn;
} else {
return null;
}
}
}
});
var fixtures_types = (function cljs$test$execution_strategy_$_fixtures_types(){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$none,null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(fixtures_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [once,each], null))));
});
var vec__31210 = fixtures_types();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31210,(0),null);
var types = vec__31210;
if(cljs.core.not_any_QMARK_(cljs.core.nil_QMARK_,types)){
} else {
throw (new Error(["Assert failed: ","Fixtures may not be of mixed types","\n","(not-any? nil? types)"].join('')));
}

if(((2) > cljs.core.count(types))){
} else {
throw (new Error(["Assert failed: ","fixtures specified in :once and :each must be of the same type","\n","(> 2 (count types))"].join('')));
}

var G__31214 = type;
var G__31215 = cljs.core.cst$kw$async;
var fexpr__31213 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$map,cljs.core.cst$kw$async,cljs.core.cst$kw$fn,cljs.core.cst$kw$sync,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__31213.cljs$core$IFn$_invoke$arity$2 ? fexpr__31213.cljs$core$IFn$_invoke$arity$2(G__31214,G__31215) : fexpr__31213.call(null,G__31214,G__31215));
});
cljs.test.disable_async = (function cljs$test$disable_async(f){
return (function (){
var obj = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.test.async_QMARK_(obj)){
throw cljs.core.cst$kw$cljs$test_SLASH_async_DASH_disabled;
} else {
}

return obj;
});
});
/**
 * Like test-vars, but returns a block for further composition and
 *   later execution.
 */
cljs.test.test_vars_block = (function cljs$test$test_vars_block(vars){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31216){
var vec__31217 = p__31216;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(1),null);
return (function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_fixtures,ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$each_DASH_fixtures,ns], null));
var G__31220 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__31220__$1 = (((G__31220 instanceof cljs.core.Keyword))?G__31220.fqn:null);
switch (G__31220__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$test,cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__31222 = (function (){
var seq__31223 = cljs.core.seq(vars__$1);
var chunk__31224 = null;
var count__31225 = (0);
var i__31226 = (0);
while(true){
if((i__31226 < count__31225)){
var v = chunk__31224.cljs$core$IIndexed$_nth$arity$2(null,i__31226);
var temp__4657__auto___31232 = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__4657__auto___31232)){
var t_31233 = temp__4657__auto___31232;
var G__31229_31234 = ((function (seq__31223,chunk__31224,count__31225,i__31226,t_31233,temp__4657__auto___31232,v,each_fixture_fn,G__31220,G__31220__$1,env,once_fixtures,each_fixtures,vec__31217,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_31233)));
});})(seq__31223,chunk__31224,count__31225,i__31226,t_31233,temp__4657__auto___31232,v,each_fixture_fn,G__31220,G__31220__$1,env,once_fixtures,each_fixtures,vec__31217,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__31229_31234) : each_fixture_fn.call(null,G__31229_31234));
} else {
}


var G__31235 = seq__31223;
var G__31236 = chunk__31224;
var G__31237 = count__31225;
var G__31238 = (i__31226 + (1));
seq__31223 = G__31235;
chunk__31224 = G__31236;
count__31225 = G__31237;
i__31226 = G__31238;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__31223);
if(temp__4657__auto__){
var seq__31223__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31223__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__31223__$1);
var G__31239 = cljs.core.chunk_rest(seq__31223__$1);
var G__31240 = c__4609__auto__;
var G__31241 = cljs.core.count(c__4609__auto__);
var G__31242 = (0);
seq__31223 = G__31239;
chunk__31224 = G__31240;
count__31225 = G__31241;
i__31226 = G__31242;
continue;
} else {
var v = cljs.core.first(seq__31223__$1);
var temp__4657__auto___31243__$1 = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__4657__auto___31243__$1)){
var t_31244 = temp__4657__auto___31243__$1;
var G__31230_31245 = ((function (seq__31223,chunk__31224,count__31225,i__31226,t_31244,temp__4657__auto___31243__$1,v,seq__31223__$1,temp__4657__auto__,each_fixture_fn,G__31220,G__31220__$1,env,once_fixtures,each_fixtures,vec__31217,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_31244)));
});})(seq__31223,chunk__31224,count__31225,i__31226,t_31244,temp__4657__auto___31243__$1,v,seq__31223__$1,temp__4657__auto__,each_fixture_fn,G__31220,G__31220__$1,env,once_fixtures,each_fixtures,vec__31217,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__31230_31245) : each_fixture_fn.call(null,G__31230_31245));
} else {
}


var G__31246 = cljs.core.next(seq__31223__$1);
var G__31247 = null;
var G__31248 = (0);
var G__31249 = (0);
seq__31223 = G__31246;
chunk__31224 = G__31247;
count__31225 = G__31248;
i__31226 = G__31249;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__31221 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__31221.cljs$core$IFn$_invoke$arity$1 ? fexpr__31221.cljs$core$IFn$_invoke$arity$1(G__31222) : fexpr__31221.call(null,G__31222));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31220__$1)].join('')));

}
})());
});
}),cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ns,cljs.core.meta),vars));
});
/**
 * Groups vars by their namespace and runs test-vars on them with
 *   appropriate fixtures assuming they are present in the current
 *   testing environment.
 */
cljs.test.test_vars = (function cljs$test$test_vars(vars){
return cljs.test.run_block(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.test.test_vars_block(vars),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__31250 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_vars,cljs.core.cst$kw$vars,vars], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__31250) : cljs.test.report.call(null,G__31250));
})], null)));
});
/**
 * Returns true if the given test summary indicates all tests
 *   were successful, false otherwise.
 */
cljs.test.successful_QMARK_ = (function cljs$test$successful_QMARK_(summary){
return (((cljs.core.cst$kw$fail.cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0))) && ((cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0))));
});
