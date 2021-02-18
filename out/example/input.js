// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.input');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('komponentit.input');
goog.require('komponentit.autosize');
goog.require('reagent.core');
goog.require('cljs.test');
goog.require('devcards.core');
goog.require('example.options');
goog.require('example.core');
example.input.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar vitae ex non tincidunt. Vivamus rutrum enim eget elit congue pulvinar. Ut eu sodales odio, sit amet pellentesque libero. Curabitur suscipit non urna non convallis. Nulla bibendum massa nec nunc feugiat mattis. Duis velit felis, mattis nec aliquam et, dictum ac ipsum. Praesent condimentum aliquam magna, vel molestie erat vulputate vel. Quisque nec imperdiet magna, nec ultricies nisl. Phasellus ac dui ante. Donec egestas, felis eu tincidunt feugiat, lacus est lacinia enim, quis egestas arcu velit et velit. Aenean nec felis vel quam tincidunt egestas sed a felis. Sed nibh tortor, ultricies vitae bibendum sit amet, dictum vel lorem. Duis venenatis orci euismod tempus iaculis. Quisque venenatis eget leo vel laoreet.\n\nSuspendisse id bibendum velit. Phasellus cursus mauris finibus diam tempor, a feugiat neque maximus. Pellentesque ultricies tellus et ex consectetur, a eleifend magna aliquam. In hac habitasse platea dictumst. Aliquam nibh nibh, malesuada eget augue et, varius eleifend erat. Aenean vel lectus ut tortor iaculis cursus id eget diam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
example.input.safe_long = (function example$input$safe_long(s){
var i = cljs.core.long$(s);
if(cljs.core.truth_(isNaN(i))){
return s;
} else {
return i;
}
});

example.input.str__GT_number_test = (function example$input$str__GT_number_test(){
return cljs.test.test_var(example.input.str__GT_number_test.cljs$lang$var);
});
example.input.str__GT_number_test.cljs$lang$test = (function (){
try{var values__31006__auto___32331 = (new cljs.core.List(null,1.1,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,1"),null,(1),null)),(2),null));
var result__31007__auto___32332 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32331);
if(cljs.core.truth_(result__31007__auto___32332)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32331),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32331),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32306){var t__31051__auto___32333 = e32306;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,t__31051__auto___32333,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32334 = (new cljs.core.List(null,1.1,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,10"),null,(1),null)),(2),null));
var result__31007__auto___32335 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32334);
if(cljs.core.truth_(result__31007__auto___32335)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32334),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32334),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32307){var t__31051__auto___32336 = e32307;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,t__31051__auto___32336,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32337 = (new cljs.core.List(null,1.11,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,11"),null,(1),null)),(2),null));
var result__31007__auto___32338 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32337);
if(cljs.core.truth_(result__31007__auto___32338)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32337),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32337),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32308){var t__31051__auto___32339 = e32308;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,t__31051__auto___32339,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32340 = (new cljs.core.List(null,0.11,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1(",11"),null,(1),null)),(2),null));
var result__31007__auto___32341 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32340);
if(cljs.core.truth_(result__31007__auto___32341)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32340),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32340),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32309){var t__31051__auto___32342 = e32309;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,t__31051__auto___32342,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32343 = (new cljs.core.List(null,10.0012,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("10,0012"),null,(1),null)),(2),null));
var result__31007__auto___32344 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32343);
if(cljs.core.truth_(result__31007__auto___32344)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32343),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32343),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32310){var t__31051__auto___32345 = e32310;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,t__31051__auto___32345,cljs.core.cst$kw$message,null], null));
}
var opts_32346 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__31006__auto___32347 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0",opts_32346),null,(1),null)),(2),null));
var result__31007__auto___32348 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32347);
if(cljs.core.truth_(result__31007__auto___32348)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32347),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32347),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32311){var t__31051__auto___32349 = e32311;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32349,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32350 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,0",opts_32346),null,(1),null)),(2),null));
var result__31007__auto___32351 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32350);
if(cljs.core.truth_(result__31007__auto___32351)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32350),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32350),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32312){var t__31051__auto___32352 = e32312;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32352,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32353 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50",opts_32346),null,(1),null)),(2),null));
var result__31007__auto___32354 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32353);
if(cljs.core.truth_(result__31007__auto___32354)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32353),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32353),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32313){var t__31051__auto___32355 = e32313;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32355,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32356 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,cljs.core.long$(komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0012",opts_32346)),null,(1),null)),(2),null));
var result__31007__auto___32357 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32356);
if(cljs.core.truth_(result__31007__auto___32357)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32356),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32356),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32314){var t__31051__auto___32358 = e32314;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,t__31051__auto___32358,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32359 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(" \t10.50",opts_32346),null,(1),null)),(2),null));
var result__31007__auto___32360 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32359);
if(cljs.core.truth_(result__31007__auto___32360)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32359),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32359),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32315){var t__31051__auto___32361 = e32315;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32361,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32362 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50abc",opts_32346),null,(1),null)),(2),null));
var result__31007__auto___32363 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32362);
if(cljs.core.truth_(result__31007__auto___32363)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32362),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32362),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32316){var t__31051__auto___32364 = e32316;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32364,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32365 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,50",opts_32346),null,(1),null)),(2),null));
var result__31007__auto___32366 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32365);
if(cljs.core.truth_(result__31007__auto___32366)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32365),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32365),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32317){var t__31051__auto___32367 = e32317;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32367,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32368 = (new cljs.core.List(null,1050.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.505",opts_32346),null,(1),null)),(2),null));
var result__31007__auto___32369 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32368);
if(cljs.core.truth_(result__31007__auto___32369)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32368),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32368),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32318){var t__31051__auto___32370 = e32318;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32370,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32371 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10",opts_32346),null,(1),null)),(2),null));
var result__31007__auto___32372 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32371);
if(cljs.core.truth_(result__31007__auto___32372)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32371),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32371),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32319){var t__31051__auto___32373 = e32319;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32373,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32374 = (new cljs.core.List(null,(1000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10 000",opts_32346),null,(1),null)),(2),null));
var result__31007__auto___32375 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32374);
if(cljs.core.truth_(result__31007__auto___32375)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32374),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32374),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32320){var t__31051__auto___32376 = e32320;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32376,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32377 = (new cljs.core.List(null,(100000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("1 000 000",opts_32346),null,(1),null)),(2),null));
var result__31007__auto___32378 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32377);
if(cljs.core.truth_(result__31007__auto___32378)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32377),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32377),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32321){var t__31051__auto___32379 = e32321;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32379,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32380 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(".10",opts_32346),null,(1),null)),(2),null));
var result__31007__auto___32381 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32380);
if(cljs.core.truth_(result__31007__auto___32381)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32380),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32380),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32322){var t__31051__auto___32382 = e32322;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32382,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32383 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(",10",opts_32346),null,(1),null)),(2),null));
var result__31007__auto___32384 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32383);
if(cljs.core.truth_(result__31007__auto___32384)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32383),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32383),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32323){var t__31051__auto___32385 = e32323;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32385,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32386 = (new cljs.core.List(null,(-1055),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("-10,55",opts_32346),null,(1),null)),(2),null));
var result__31007__auto___32387 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32386);
if(cljs.core.truth_(result__31007__auto___32387)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32386),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32386),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32324){var t__31051__auto___32388 = e32324;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32388,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32389 = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("",opts_32346),null,(1),null)),(2),null));
var result__31007__auto___32390 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32389);
if(cljs.core.truth_(result__31007__auto___32390)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32389),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32389),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32325){var t__31051__auto___32391 = e32325;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32391,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32392 = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("  \t",opts_32346),null,(1),null)),(2),null));
var result__31007__auto___32393 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32392);
if(cljs.core.truth_(result__31007__auto___32393)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32392),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32392),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32326){var t__31051__auto___32394 = e32326;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32394,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32395 = (new cljs.core.List(null,15.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("15.5"),null,(1),null)),(2),null));
var result__31007__auto___32396 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32395);
if(cljs.core.truth_(result__31007__auto___32396)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32395),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32395),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32327){var t__31051__auto___32397 = e32327;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,t__31051__auto___32397,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32398 = (new cljs.core.List(null,15.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null)),null,(1),null)),(2),null));
var result__31007__auto___32399 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32398);
if(cljs.core.truth_(result__31007__auto___32399)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32398),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32398),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32328){var t__31051__auto___32400 = e32328;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,t__31051__auto___32400,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32401 = (new cljs.core.List(null,(-10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("\u201310"),null,(1),null)),(2),null));
var result__31007__auto___32402 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32401);
if(cljs.core.truth_(result__31007__auto___32402)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32401),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32401),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32329){var t__31051__auto___32403 = e32329;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,t__31051__auto___32403,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto__ = (new cljs.core.List(null,(-10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("\u221210"),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32330){var t__31051__auto__ = e32330;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}});

(example.input.str__GT_number_test.cljs$lang$var = new cljs.core.Var(function(){return example.input.str__GT_number_test;},cljs.core.cst$sym$example$input_SLASH_str_DASH__GT_number_DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$example$input,cljs.core.cst$sym$str_DASH__GT_number_DASH_test,"/home/juho/Source/komponentit/example-src/cljs/example/input.cljs",29,1,121,121,cljs.core.List.EMPTY,null,(cljs.core.truth_(example.input.str__GT_number_test)?example.input.str__GT_number_test.cljs$lang$test:null)])));

example.input.number__GT_str_test = (function example$input$number__GT_str_test(){
return cljs.test.test_var(example.input.number__GT_str_test.cljs$lang$var);
});
example.input.number__GT_str_test.cljs$lang$test = (function (){
var opts_32420 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__31006__auto___32421 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts_32420),null,(1),null)),(2),null));
var result__31007__auto___32422 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32421);
if(cljs.core.truth_(result__31007__auto___32422)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32421),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32421),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32404){var t__31051__auto___32423 = e32404;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32423,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32424 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts_32420),null,(1),null)),(2),null));
var result__31007__auto___32425 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32424);
if(cljs.core.truth_(result__31007__auto___32425)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32424),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32424),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32405){var t__31051__auto___32426 = e32405;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32426,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32427 = (new cljs.core.List(null,"-10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1000),opts_32420),null,(1),null)),(2),null));
var result__31007__auto___32428 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32427);
if(cljs.core.truth_(result__31007__auto___32428)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32427),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32427),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32406){var t__31051__auto___32429 = e32406;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32429,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32430 = (new cljs.core.List(null,"-10.45",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1045),opts_32420),null,(1),null)),(2),null));
var result__31007__auto___32431 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32430);
if(cljs.core.truth_(result__31007__auto___32431)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32430),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32430),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32407){var t__31051__auto___32432 = e32407;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32432,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32433 = (new cljs.core.List(null,"1",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((100),opts_32420),null,(1),null)),(2),null));
var result__31007__auto___32434 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32433);
if(cljs.core.truth_(result__31007__auto___32434)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32433),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32433),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32408){var t__31051__auto___32435 = e32408;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32435,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32436 = (new cljs.core.List(null,"",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(null,opts_32420),null,(1),null)),(2),null));
var result__31007__auto___32437 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32436);
if(cljs.core.truth_(result__31007__auto___32437)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32436),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32436),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32409){var t__31051__auto___32438 = e32409;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__31051__auto___32438,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32439 = (new cljs.core.List(null,"10.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null)),null,(1),null)),(2),null));
var result__31007__auto___32440 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32439);
if(cljs.core.truth_(result__31007__auto___32440)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32439),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32439),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32410){var t__31051__auto___32441 = e32410;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,t__31051__auto___32441,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32442 = (new cljs.core.List(null,"10.00",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32443 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32442);
if(cljs.core.truth_(result__31007__auto___32443)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32442),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32442),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32411){var t__31051__auto___32444 = e32411;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32444,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32445 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32446 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32445);
if(cljs.core.truth_(result__31007__auto___32446)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32445),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32445),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32412){var t__31051__auto___32447 = e32412;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32447,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32448 = (new cljs.core.List(null,"10.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32449 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32448);
if(cljs.core.truth_(result__31007__auto___32449)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32448),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32448),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32413){var t__31051__auto___32450 = e32413;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32450,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32451 = (new cljs.core.List(null,"10.50",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32452 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32451);
if(cljs.core.truth_(result__31007__auto___32452)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32451),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32451),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32414){var t__31051__auto___32453 = e32414;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32453,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32454 = (new cljs.core.List(null,"10.55",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32455 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32454);
if(cljs.core.truth_(result__31007__auto___32455)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32454),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32454),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32415){var t__31051__auto___32456 = e32415;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32456,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32457 = (new cljs.core.List(null,"10.55",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32458 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32457);
if(cljs.core.truth_(result__31007__auto___32458)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32457),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32457),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32416){var t__31051__auto___32459 = e32416;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32459,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32460 = (new cljs.core.List(null,"10.00",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__31007__auto___32461 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32460);
if(cljs.core.truth_(result__31007__auto___32461)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32460),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32460),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32417){var t__31051__auto___32462 = e32417;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__31051__auto___32462,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto___32463 = (new cljs.core.List(null,"15.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$1(15.5),null,(1),null)),(2),null));
var result__31007__auto___32464 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto___32463);
if(cljs.core.truth_(result__31007__auto___32464)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto___32463),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto___32463),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e32418){var t__31051__auto___32465 = e32418;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,t__31051__auto___32465,cljs.core.cst$kw$message,null], null));
}
try{var values__31006__auto__ = (new cljs.core.List(null,"15,5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null)),null,(1),null)),(2),null));
var result__31007__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__31006__auto__);
if(cljs.core.truth_(result__31007__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__31006__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__31006__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__31007__auto__;
}catch (e32419){var t__31051__auto__ = e32419;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,t__31051__auto__,cljs.core.cst$kw$message,null], null));
}});

(example.input.number__GT_str_test.cljs$lang$var = new cljs.core.Var(function(){return example.input.number__GT_str_test;},cljs.core.cst$sym$example$input_SLASH_number_DASH__GT_str_DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$example$input,cljs.core.cst$sym$number_DASH__GT_str_DASH_test,"/home/juho/Source/komponentit/example-src/cljs/example/input.cljs",29,1,161,161,cljs.core.List.EMPTY,null,(cljs.core.truth_(example.input.number__GT_str_test)?example.input.number__GT_str_test.cljs$lang$test:null)])));
