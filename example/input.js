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
try{var values__35734__auto___37576 = (new cljs.core.List(null,1.1,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,1"),null,(1),null)),(2),null));
var result__35735__auto___37577 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37576);
if(cljs.core.truth_(result__35735__auto___37577)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37576),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37576),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37551){var t__35779__auto___37578 = e37551;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,1")),cljs.core.cst$kw$actual,t__35779__auto___37578,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37579 = (new cljs.core.List(null,1.1,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,10"),null,(1),null)),(2),null));
var result__35735__auto___37580 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37579);
if(cljs.core.truth_(result__35735__auto___37580)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37579),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37579),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37552){var t__35779__auto___37581 = e37552;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.1,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,10")),cljs.core.cst$kw$actual,t__35779__auto___37581,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37582 = (new cljs.core.List(null,1.11,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("1,11"),null,(1),null)),(2),null));
var result__35735__auto___37583 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37582);
if(cljs.core.truth_(result__35735__auto___37583)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37582),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37582),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37553){var t__35779__auto___37584 = e37553;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1,11")),cljs.core.cst$kw$actual,t__35779__auto___37584,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37585 = (new cljs.core.List(null,0.11,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1(",11"),null,(1),null)),(2),null));
var result__35735__auto___37586 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37585);
if(cljs.core.truth_(result__35735__auto___37586)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37585),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37585),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37554){var t__35779__auto___37587 = e37554;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,0.11,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",11")),cljs.core.cst$kw$actual,t__35779__auto___37587,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37588 = (new cljs.core.List(null,10.0012,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("10,0012"),null,(1),null)),(2),null));
var result__35735__auto___37589 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37588);
if(cljs.core.truth_(result__35735__auto___37589)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37588),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37588),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37555){var t__35779__auto___37590 = e37555;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,10.0012,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0012")),cljs.core.cst$kw$actual,t__35779__auto___37590,cljs.core.cst$kw$message,null], null));
}
var opts_37591 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__35734__auto___37592 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0",opts_37591),null,(1),null)),(2),null));
var result__35735__auto___37593 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37592);
if(cljs.core.truth_(result__35735__auto___37593)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37592),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37592),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37556){var t__35779__auto___37594 = e37556;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37594,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37595 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,0",opts_37591),null,(1),null)),(2),null));
var result__35735__auto___37596 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37595);
if(cljs.core.truth_(result__35735__auto___37596)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37595),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37595),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37557){var t__35779__auto___37597 = e37557;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,0",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37597,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37598 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50",opts_37591),null,(1),null)),(2),null));
var result__35735__auto___37599 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37598);
if(cljs.core.truth_(result__35735__auto___37599)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37598),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37598),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37558){var t__35779__auto___37600 = e37558;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37600,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37601 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,cljs.core.long$(komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.0012",opts_37591)),null,(1),null)),(2),null));
var result__35735__auto___37602 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37601);
if(cljs.core.truth_(result__35735__auto___37602)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37601),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37601),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37559){var t__35779__auto___37603 = e37559;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$long,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.0012",cljs.core.cst$sym$opts))),cljs.core.cst$kw$actual,t__35779__auto___37603,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37604 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(" \t10.50",opts_37591),null,(1),null)),(2),null));
var result__35735__auto___37605 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37604);
if(cljs.core.truth_(result__35735__auto___37605)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37604),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37604),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37560){var t__35779__auto___37606 = e37560;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number," \t10.50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37606,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37607 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.50abc",opts_37591),null,(1),null)),(2),null));
var result__35735__auto___37608 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37607);
if(cljs.core.truth_(result__35735__auto___37608)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37607),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37607),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37561){var t__35779__auto___37609 = e37561;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.50abc",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37609,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37610 = (new cljs.core.List(null,(1050),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10,50",opts_37591),null,(1),null)),(2),null));
var result__35735__auto___37611 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37610);
if(cljs.core.truth_(result__35735__auto___37611)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37610),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37610),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37562){var t__35779__auto___37612 = e37562;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1050),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10,50",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37612,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37613 = (new cljs.core.List(null,1050.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10.505",opts_37591),null,(1),null)),(2),null));
var result__35735__auto___37614 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37613);
if(cljs.core.truth_(result__35735__auto___37614)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37613),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37613),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37563){var t__35779__auto___37615 = e37563;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,1050.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10.505",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37615,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37616 = (new cljs.core.List(null,(1000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10",opts_37591),null,(1),null)),(2),null));
var result__35735__auto___37617 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37616);
if(cljs.core.truth_(result__35735__auto___37617)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37616),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37616),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37564){var t__35779__auto___37618 = e37564;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37618,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37619 = (new cljs.core.List(null,(1000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("10 000",opts_37591),null,(1),null)),(2),null));
var result__35735__auto___37620 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37619);
if(cljs.core.truth_(result__35735__auto___37620)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37619),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37619),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37565){var t__35779__auto___37621 = e37565;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"10 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37621,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37622 = (new cljs.core.List(null,(100000000),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("1 000 000",opts_37591),null,(1),null)),(2),null));
var result__35735__auto___37623 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37622);
if(cljs.core.truth_(result__35735__auto___37623)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37622),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37622),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37566){var t__35779__auto___37624 = e37566;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(100000000),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"1 000 000",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37624,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37625 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(".10",opts_37591),null,(1),null)),(2),null));
var result__35735__auto___37626 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37625);
if(cljs.core.truth_(result__35735__auto___37626)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37625),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37625),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37567){var t__35779__auto___37627 = e37567;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,".10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37627,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37628 = (new cljs.core.List(null,(10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2(",10",opts_37591),null,(1),null)),(2),null));
var result__35735__auto___37629 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37628);
if(cljs.core.truth_(result__35735__auto___37629)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37628),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37628),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37568){var t__35779__auto___37630 = e37568;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,",10",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37630,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37631 = (new cljs.core.List(null,(-1055),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("-10,55",opts_37591),null,(1),null)),(2),null));
var result__35735__auto___37632 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37631);
if(cljs.core.truth_(result__35735__auto___37632)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37631),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37631),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37569){var t__35779__auto___37633 = e37569;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-1055),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"-10,55",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37633,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37634 = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("",opts_37591),null,(1),null)),(2),null));
var result__35735__auto___37635 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37634);
if(cljs.core.truth_(result__35735__auto___37635)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37634),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37634),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37570){var t__35779__auto___37636 = e37570;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37636,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37637 = (new cljs.core.List(null,null,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("  \t",opts_37591),null,(1),null)),(2),null));
var result__35735__auto___37638 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37637);
if(cljs.core.truth_(result__35735__auto___37638)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37637),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37637),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37571){var t__35779__auto___37639 = e37571;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,null,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"  \t",cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37639,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37640 = (new cljs.core.List(null,15.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("15.5"),null,(1),null)),(2),null));
var result__35735__auto___37641 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37640);
if(cljs.core.truth_(result__35735__auto___37641)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37640),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37640),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37572){var t__35779__auto___37642 = e37572;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15.5")),cljs.core.cst$kw$actual,t__35779__auto___37642,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37643 = (new cljs.core.List(null,15.5,(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$2("15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null)),null,(1),null)),(2),null));
var result__35735__auto___37644 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37643);
if(cljs.core.truth_(result__35735__auto___37644)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37643),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37643),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37573){var t__35779__auto___37645 = e37573;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,15.5,cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"15,5",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"fi-FI"], null))),cljs.core.cst$kw$actual,t__35779__auto___37645,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37646 = (new cljs.core.List(null,(-10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("\u201310"),null,(1),null)),(2),null));
var result__35735__auto___37647 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37646);
if(cljs.core.truth_(result__35735__auto___37647)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37646),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37646),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37574){var t__35779__auto___37648 = e37574;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u201310")),cljs.core.cst$kw$actual,t__35779__auto___37648,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto__ = (new cljs.core.List(null,(-10),(new cljs.core.List(null,komponentit.input.str__GT_number.cljs$core$IFn$_invoke$arity$1("\u221210"),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37575){var t__35779__auto__ = e37575;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(-10),cljs.core.list(cljs.core.cst$sym$input_SLASH_str_DASH__GT_number,"\u221210")),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}});

(example.input.str__GT_number_test.cljs$lang$var = new cljs.core.Var(function(){return example.input.str__GT_number_test;},cljs.core.cst$sym$example$input_SLASH_str_DASH__GT_number_DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$example$input,cljs.core.cst$sym$str_DASH__GT_number_DASH_test,"/home/juho/Source/komponentit/example-src/cljs/example/input.cljs",29,1,121,121,cljs.core.List.EMPTY,null,(cljs.core.truth_(example.input.str__GT_number_test)?example.input.str__GT_number_test.cljs$lang$test:null)])));

example.input.number__GT_str_test = (function example$input$number__GT_str_test(){
return cljs.test.test_var(example.input.number__GT_str_test.cljs$lang$var);
});
example.input.number__GT_str_test.cljs$lang$test = (function (){
var opts_37665 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(100)], null);
try{var values__35734__auto___37666 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts_37665),null,(1),null)),(2),null));
var result__35735__auto___37667 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37666);
if(cljs.core.truth_(result__35735__auto___37667)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37666),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37666),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37649){var t__35779__auto___37668 = e37649;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37668,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37669 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((1000),opts_37665),null,(1),null)),(2),null));
var result__35735__auto___37670 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37669);
if(cljs.core.truth_(result__35735__auto___37670)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37669),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37669),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37650){var t__35779__auto___37671 = e37650;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37671,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37672 = (new cljs.core.List(null,"-10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1000),opts_37665),null,(1),null)),(2),null));
var result__35735__auto___37673 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37672);
if(cljs.core.truth_(result__35735__auto___37673)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37672),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37672),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37651){var t__35779__auto___37674 = e37651;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1000),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37674,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37675 = (new cljs.core.List(null,"-10.45",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((-1045),opts_37665),null,(1),null)),(2),null));
var result__35735__auto___37676 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37675);
if(cljs.core.truth_(result__35735__auto___37676)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37675),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37675),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37652){var t__35779__auto___37677 = e37652;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"-10.45",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(-1045),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37677,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37678 = (new cljs.core.List(null,"1",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((100),opts_37665),null,(1),null)),(2),null));
var result__35735__auto___37679 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37678);
if(cljs.core.truth_(result__35735__auto___37679)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37678),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37678),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37653){var t__35779__auto___37680 = e37653;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(100),cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37680,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37681 = (new cljs.core.List(null,"",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(null,opts_37665),null,(1),null)),(2),null));
var result__35735__auto___37682 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37681);
if(cljs.core.truth_(result__35735__auto___37682)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37681),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37681),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37654){var t__35779__auto___37683 = e37654;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,null,cljs.core.cst$sym$opts)),cljs.core.cst$kw$actual,t__35779__auto___37683,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37684 = (new cljs.core.List(null,"10.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null)),null,(1),null)),(2),null));
var result__35735__auto___37685 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37684);
if(cljs.core.truth_(result__35735__auto___37685)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37684),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37684),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37655){var t__35779__auto___37686 = e37655;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(105),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$multiplier,(10)], null))),cljs.core.cst$kw$actual,t__35779__auto___37686,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37687 = (new cljs.core.List(null,"10.00",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto___37688 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37687);
if(cljs.core.truth_(result__35735__auto___37688)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37687),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37687),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37656){var t__35779__auto___37689 = e37656;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto___37689,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37690 = (new cljs.core.List(null,"10",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2((10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto___37691 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37690);
if(cljs.core.truth_(result__35735__auto___37691)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37690),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37690),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37657){var t__35779__auto___37692 = e37657;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,(10),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto___37692,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37693 = (new cljs.core.List(null,"10.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto___37694 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37693);
if(cljs.core.truth_(result__35735__auto___37694)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37693),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37693),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37658){var t__35779__auto___37695 = e37658;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto___37695,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37696 = (new cljs.core.List(null,"10.50",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto___37697 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37696);
if(cljs.core.truth_(result__35735__auto___37697)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37696),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37696),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37659){var t__35779__auto___37698 = e37659;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.50",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$precision,(2),cljs.core.cst$kw$min_DASH_precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto___37698,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37699 = (new cljs.core.List(null,"10.55",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto___37700 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37699);
if(cljs.core.truth_(result__35735__auto___37700)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37699),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37699),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37660){var t__35779__auto___37701 = e37660;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto___37701,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37702 = (new cljs.core.List(null,"10.55",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto___37703 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37702);
if(cljs.core.truth_(result__35735__auto___37703)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37702),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37702),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37661){var t__35779__auto___37704 = e37661;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.55",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.554,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto___37704,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37705 = (new cljs.core.List(null,"10.00",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null)),null,(1),null)),(2),null));
var result__35735__auto___37706 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37705);
if(cljs.core.truth_(result__35735__auto___37706)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37705),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37705),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37662){var t__35779__auto___37707 = e37662;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"10.00",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,10.0012,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$precision,(2)], null))),cljs.core.cst$kw$actual,t__35779__auto___37707,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto___37708 = (new cljs.core.List(null,"15.5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$1(15.5),null,(1),null)),(2),null));
var result__35735__auto___37709 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto___37708);
if(cljs.core.truth_(result__35735__auto___37709)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto___37708),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto___37708),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

}catch (e37663){var t__35779__auto___37710 = e37663;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15.5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5)),cljs.core.cst$kw$actual,t__35779__auto___37710,cljs.core.cst$kw$message,null], null));
}
try{var values__35734__auto__ = (new cljs.core.List(null,"15,5",(new cljs.core.List(null,komponentit.input.number__GT_str.cljs$core$IFn$_invoke$arity$2(15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null)),null,(1),null)),(2),null));
var result__35735__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__35734__auto__);
if(cljs.core.truth_(result__35735__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__35734__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__35734__auto__),null,(1),null)),(2),null)),cljs.core.cst$kw$message,null], null));
}

return result__35735__auto__;
}catch (e37664){var t__35779__auto__ = e37664;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"15,5",cljs.core.list(cljs.core.cst$sym$input_SLASH_number_DASH__GT_str,15.5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$delimiter,","], null))),cljs.core.cst$kw$actual,t__35779__auto__,cljs.core.cst$kw$message,null], null));
}});

(example.input.number__GT_str_test.cljs$lang$var = new cljs.core.Var(function(){return example.input.number__GT_str_test;},cljs.core.cst$sym$example$input_SLASH_number_DASH__GT_str_DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$example$input,cljs.core.cst$sym$number_DASH__GT_str_DASH_test,"/home/juho/Source/komponentit/example-src/cljs/example/input.cljs",29,1,161,161,cljs.core.List.EMPTY,null,(cljs.core.truth_(example.input.number__GT_str_test)?example.input.number__GT_str_test.cljs$lang$test:null)])));
