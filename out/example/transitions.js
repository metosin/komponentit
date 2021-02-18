// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.transitions');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('devcards.core');
example.transitions.global$module$react_dom$server = goog.global["ReactDOMServer"];
example.transitions.global$module$react_transition_group$TransitionGroup = goog.global["ReactTransitionGroup"]["TransitionGroup"];
example.transitions.global$module$react_transition_group$Transition = goog.global["ReactTransitionGroup"]["Transition"];
example.transitions.global$module$react_transition_group$CSSTransition = goog.global["ReactTransitionGroup"]["CSSTransition"];
example.transitions.global$module$react_transition_group$SwitchTransition = goog.global["ReactTransitionGroup"]["SwitchTransition"];
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$transitions,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,"# React-transition-group example ([View source](https://github.com/metosin/komponentit/blob/master/example-src/cljs/example/transitions.cljs))\n\nJust example, no wrapper code is provided to work with React-transition-group.",cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$transitions,cljs.core.cst$kw$transition_DASH_group_DASH_example], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"transition-group-example",cljs.core.cst$kw$documentation,"Look for lifecycle messages in console.",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.transitions !== 'undefined') && (typeof example.transitions.t_example$transitions37582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.transitions.t_example$transitions37582 = (function (meta37583){
this.meta37583 = meta37583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.transitions.t_example$transitions37582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37584,meta37583__$1){
var self__ = this;
var _37584__$1 = this;
return (new example.transitions.t_example$transitions37582(meta37583__$1));
}));

(example.transitions.t_example$transitions37582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37584){
var self__ = this;
var _37584__$1 = this;
return self__.meta37583;
}));

(example.transitions.t_example$transitions37582.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.transitions.t_example$transitions37582.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (___$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,cljs.core.cst$kw$i,cljs.core.inc),cljs.core.cst$kw$elements,cljs.core.conj,(cljs.core.cst$kw$i.cljs$core$IFn$_invoke$arity$1(s) + (1)));
}));
})], null),"Append element"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (___$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,cljs.core.cst$kw$elements,(function (p1__37581_SHARP_){
return cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(p1__37581_SHARP_));
}));
}));
})], null),"Remove element"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,example.transitions.global$module$react_transition_group$TransitionGroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,"ul"], null),(function (){var iter__4582__auto__ = (function example$transitions$iter__37585(s__37586){
return (new cljs.core.LazySeq(null,(function (){
var s__37586__$1 = s__37586;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__37586__$1);
if(temp__4657__auto__){
var s__37586__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37586__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37586__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37588 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37587 = (0);
while(true){
if((i__37587 < size__4581__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37587);
cljs.core.chunk_append(b__37588,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,example.transitions.global$module$react_transition_group$CSSTransition,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$classNames,"fade",cljs.core.cst$kw$timeout,(500),cljs.core.cst$kw$on_DASH_enter,((function (i__37587,e,c__4580__auto__,size__4581__auto__,b__37588,s__37586__$2,temp__4657__auto__,this__36182__auto____$1){
return (function (){
return console.log("enter",e);
});})(i__37587,e,c__4580__auto__,size__4581__auto__,b__37588,s__37586__$2,temp__4657__auto__,this__36182__auto____$1))
,cljs.core.cst$kw$on_DASH_entering,((function (i__37587,e,c__4580__auto__,size__4581__auto__,b__37588,s__37586__$2,temp__4657__auto__,this__36182__auto____$1){
return (function (){
return console.log("entering",e);
});})(i__37587,e,c__4580__auto__,size__4581__auto__,b__37588,s__37586__$2,temp__4657__auto__,this__36182__auto____$1))
,cljs.core.cst$kw$on_DASH_entered,((function (i__37587,e,c__4580__auto__,size__4581__auto__,b__37588,s__37586__$2,temp__4657__auto__,this__36182__auto____$1){
return (function (){
return console.log("entered",e);
});})(i__37587,e,c__4580__auto__,size__4581__auto__,b__37588,s__37586__$2,temp__4657__auto__,this__36182__auto____$1))
,cljs.core.cst$kw$on_DASH_exit,((function (i__37587,e,c__4580__auto__,size__4581__auto__,b__37588,s__37586__$2,temp__4657__auto__,this__36182__auto____$1){
return (function (){
return console.log("enter",e);
});})(i__37587,e,c__4580__auto__,size__4581__auto__,b__37588,s__37586__$2,temp__4657__auto__,this__36182__auto____$1))
,cljs.core.cst$kw$on_DASH_exiting,((function (i__37587,e,c__4580__auto__,size__4581__auto__,b__37588,s__37586__$2,temp__4657__auto__,this__36182__auto____$1){
return (function (){
return console.log("exiting",e);
});})(i__37587,e,c__4580__auto__,size__4581__auto__,b__37588,s__37586__$2,temp__4657__auto__,this__36182__auto____$1))
,cljs.core.cst$kw$on_DASH_exited,((function (i__37587,e,c__4580__auto__,size__4581__auto__,b__37588,s__37586__$2,temp__4657__auto__,this__36182__auto____$1){
return (function (){
return console.log("exited",e);
});})(i__37587,e,c__4580__auto__,size__4581__auto__,b__37588,s__37586__$2,temp__4657__auto__,this__36182__auto____$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"item ",e], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,e], null)));

var G__37589 = (i__37587 + (1));
i__37587 = G__37589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37588),example$transitions$iter__37585(cljs.core.chunk_rest(s__37586__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37588),null);
}
} else {
var e = cljs.core.first(s__37586__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,example.transitions.global$module$react_transition_group$CSSTransition,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$classNames,"fade",cljs.core.cst$kw$timeout,(500),cljs.core.cst$kw$on_DASH_enter,((function (e,s__37586__$2,temp__4657__auto__,this__36182__auto____$1){
return (function (){
return console.log("enter",e);
});})(e,s__37586__$2,temp__4657__auto__,this__36182__auto____$1))
,cljs.core.cst$kw$on_DASH_entering,((function (e,s__37586__$2,temp__4657__auto__,this__36182__auto____$1){
return (function (){
return console.log("entering",e);
});})(e,s__37586__$2,temp__4657__auto__,this__36182__auto____$1))
,cljs.core.cst$kw$on_DASH_entered,((function (e,s__37586__$2,temp__4657__auto__,this__36182__auto____$1){
return (function (){
return console.log("entered",e);
});})(e,s__37586__$2,temp__4657__auto__,this__36182__auto____$1))
,cljs.core.cst$kw$on_DASH_exit,((function (e,s__37586__$2,temp__4657__auto__,this__36182__auto____$1){
return (function (){
return console.log("enter",e);
});})(e,s__37586__$2,temp__4657__auto__,this__36182__auto____$1))
,cljs.core.cst$kw$on_DASH_exiting,((function (e,s__37586__$2,temp__4657__auto__,this__36182__auto____$1){
return (function (){
return console.log("exiting",e);
});})(e,s__37586__$2,temp__4657__auto__,this__36182__auto____$1))
,cljs.core.cst$kw$on_DASH_exited,((function (e,s__37586__$2,temp__4657__auto__,this__36182__auto____$1){
return (function (){
return console.log("exited",e);
});})(e,s__37586__$2,temp__4657__auto__,this__36182__auto____$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"item ",e], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,e], null)),example$transitions$iter__37585(cljs.core.rest(s__37586__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
})()], null)], null);
});
if(cljs.core.fn_QMARK_(v__36201__auto__)){
return (function (data_atom__36202__auto__,owner__36203__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__36201__auto__,data_atom__36202__auto__,owner__36203__auto__], null));
});
} else {
return reagent.core.as_element(v__36201__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(devcard_opts__36183__auto__))], 0))], 0));
}));

(example.transitions.t_example$transitions37582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37583], null);
}));

(example.transitions.t_example$transitions37582.cljs$lang$type = true);

(example.transitions.t_example$transitions37582.cljs$lang$ctorStr = "example.transitions/t_example$transitions37582");

(example.transitions.t_example$transitions37582.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.transitions/t_example$transitions37582");
}));

/**
 * Positional factory function for example.transitions/t_example$transitions37582.
 */
example.transitions.__GT_t_example$transitions37582 = (function example$transitions$__GT_t_example$transitions37582(meta37583){
return (new example.transitions.t_example$transitions37582(meta37583));
});

}

return (new example.transitions.t_example$transitions37582(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$i,(1),cljs.core.cst$kw$elements,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$transitions,cljs.core.cst$kw$css_DASH_transition_DASH_example], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"css-transition-example",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.transitions !== 'undefined') && (typeof example.transitions.t_example$transitions37590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.transitions.t_example$transitions37590 = (function (meta37591){
this.meta37591 = meta37591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.transitions.t_example$transitions37590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37592,meta37591__$1){
var self__ = this;
var _37592__$1 = this;
return (new example.transitions.t_example$transitions37590(meta37591__$1));
}));

(example.transitions.t_example$transitions37590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37592){
var self__ = this;
var _37592__$1 = this;
return self__.meta37591;
}));

(example.transitions.t_example$transitions37590.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.transitions.t_example$transitions37590.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (___$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.not);
})], null),"Toggle"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,example.transitions.global$module$react_transition_group$CSSTransition,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$on_DASH_exiting,cljs.core.cst$kw$on_DASH_enter,cljs.core.cst$kw$on_DASH_exit,cljs.core.cst$kw$classNames,cljs.core.cst$kw$on_DASH_exited,cljs.core.cst$kw$on_DASH_entering,cljs.core.cst$kw$timeout,cljs.core.cst$kw$on_DASH_entered,cljs.core.cst$kw$in],[(function (){
return console.log("exiting");
}),(function (){
return console.log("enter");
}),(function (){
return console.log("enter");
}),"fade",(function (){
return console.log("exited");
}),(function (){
return console.log("entering");
}),(500),(function (){
return console.log("entered");
}),cljs.core.deref(state)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core.not(cljs.core.deref(state)))?"hide":null)], null),"foobar"], null)], null)], null);
});
if(cljs.core.fn_QMARK_(v__36201__auto__)){
return (function (data_atom__36202__auto__,owner__36203__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__36201__auto__,data_atom__36202__auto__,owner__36203__auto__], null));
});
} else {
return reagent.core.as_element(v__36201__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(devcard_opts__36183__auto__))], 0))], 0));
}));

(example.transitions.t_example$transitions37590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37591], null);
}));

(example.transitions.t_example$transitions37590.cljs$lang$type = true);

(example.transitions.t_example$transitions37590.cljs$lang$ctorStr = "example.transitions/t_example$transitions37590");

(example.transitions.t_example$transitions37590.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.transitions/t_example$transitions37590");
}));

/**
 * Positional factory function for example.transitions/t_example$transitions37590.
 */
example.transitions.__GT_t_example$transitions37590 = (function example$transitions$__GT_t_example$transitions37590(meta37591){
return (new example.transitions.t_example$transitions37590(meta37591));
});

}

return (new example.transitions.t_example$transitions37590(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$transitions,cljs.core.cst$kw$switch_DASH_transition_DASH_example], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"switch-transition-example",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.transitions !== 'undefined') && (typeof example.transitions.t_example$transitions37593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.transitions.t_example$transitions37593 = (function (meta37594){
this.meta37594 = meta37594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.transitions.t_example$transitions37593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37595,meta37594__$1){
var self__ = this;
var _37595__$1 = this;
return (new example.transitions.t_example$transitions37593(meta37594__$1));
}));

(example.transitions.t_example$transitions37593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37595){
var self__ = this;
var _37595__$1 = this;
return self__.meta37594;
}));

(example.transitions.t_example$transitions37593.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.transitions.t_example$transitions37593.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__36182__auto__,devcard_opts__36183__auto__){
var self__ = this;
var this__36182__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__36183__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__36201__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,example.transitions.global$module$react_transition_group$SwitchTransition,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,example.transitions.global$module$react_transition_group$CSSTransition,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,(cljs.core.truth_(cljs.core.deref(state))?"active":"disabled"),cljs.core.cst$kw$classNames,"fade",cljs.core.cst$kw$timeout,(500)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (___$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(state))?"Active":"Disabled")], null)], null)], null)], null);
});
if(cljs.core.fn_QMARK_(v__36201__auto__)){
return (function (data_atom__36202__auto__,owner__36203__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__36201__auto__,data_atom__36202__auto__,owner__36203__auto__], null));
});
} else {
return reagent.core.as_element(v__36201__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(devcard_opts__36183__auto__))], 0))], 0));
}));

(example.transitions.t_example$transitions37593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37594], null);
}));

(example.transitions.t_example$transitions37593.cljs$lang$type = true);

(example.transitions.t_example$transitions37593.cljs$lang$ctorStr = "example.transitions/t_example$transitions37593");

(example.transitions.t_example$transitions37593.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.transitions/t_example$transitions37593");
}));

/**
 * Positional factory function for example.transitions/t_example$transitions37593.
 */
example.transitions.__GT_t_example$transitions37593 = (function example$transitions$__GT_t_example$transitions37593(meta37594){
return (new example.transitions.t_example$transitions37593(meta37594));
});

}

return (new example.transitions.t_example$transitions37593(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
