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
if((typeof example !== 'undefined') && (typeof example.transitions !== 'undefined') && (typeof example.transitions.t_example$transitions32318 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.transitions.t_example$transitions32318 = (function (meta32319){
this.meta32319 = meta32319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.transitions.t_example$transitions32318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32320,meta32319__$1){
var self__ = this;
var _32320__$1 = this;
return (new example.transitions.t_example$transitions32318(meta32319__$1));
}));

(example.transitions.t_example$transitions32318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32320){
var self__ = this;
var _32320__$1 = this;
return self__.meta32319;
}));

(example.transitions.t_example$transitions32318.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.transitions.t_example$transitions32318.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (___$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,cljs.core.cst$kw$i,cljs.core.inc),cljs.core.cst$kw$elements,cljs.core.conj,(cljs.core.cst$kw$i.cljs$core$IFn$_invoke$arity$1(s) + (1)));
}));
})], null),"Append element"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (___$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,cljs.core.cst$kw$elements,(function (p1__32317_SHARP_){
return cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(p1__32317_SHARP_));
}));
}));
})], null),"Remove element"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,example.transitions.global$module$react_transition_group$TransitionGroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,"ul"], null),(function (){var iter__4582__auto__ = (function example$transitions$iter__32321(s__32322){
return (new cljs.core.LazySeq(null,(function (){
var s__32322__$1 = s__32322;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__32322__$1);
if(temp__4657__auto__){
var s__32322__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32322__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__32322__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__32324 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__32323 = (0);
while(true){
if((i__32323 < size__4581__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__32323);
cljs.core.chunk_append(b__32324,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,example.transitions.global$module$react_transition_group$CSSTransition,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$classNames,"fade",cljs.core.cst$kw$timeout,(500),cljs.core.cst$kw$on_DASH_enter,((function (i__32323,e,c__4580__auto__,size__4581__auto__,b__32324,s__32322__$2,temp__4657__auto__,this__31346__auto____$1){
return (function (){
return console.log("enter",e);
});})(i__32323,e,c__4580__auto__,size__4581__auto__,b__32324,s__32322__$2,temp__4657__auto__,this__31346__auto____$1))
,cljs.core.cst$kw$on_DASH_entering,((function (i__32323,e,c__4580__auto__,size__4581__auto__,b__32324,s__32322__$2,temp__4657__auto__,this__31346__auto____$1){
return (function (){
return console.log("entering",e);
});})(i__32323,e,c__4580__auto__,size__4581__auto__,b__32324,s__32322__$2,temp__4657__auto__,this__31346__auto____$1))
,cljs.core.cst$kw$on_DASH_entered,((function (i__32323,e,c__4580__auto__,size__4581__auto__,b__32324,s__32322__$2,temp__4657__auto__,this__31346__auto____$1){
return (function (){
return console.log("entered",e);
});})(i__32323,e,c__4580__auto__,size__4581__auto__,b__32324,s__32322__$2,temp__4657__auto__,this__31346__auto____$1))
,cljs.core.cst$kw$on_DASH_exit,((function (i__32323,e,c__4580__auto__,size__4581__auto__,b__32324,s__32322__$2,temp__4657__auto__,this__31346__auto____$1){
return (function (){
return console.log("enter",e);
});})(i__32323,e,c__4580__auto__,size__4581__auto__,b__32324,s__32322__$2,temp__4657__auto__,this__31346__auto____$1))
,cljs.core.cst$kw$on_DASH_exiting,((function (i__32323,e,c__4580__auto__,size__4581__auto__,b__32324,s__32322__$2,temp__4657__auto__,this__31346__auto____$1){
return (function (){
return console.log("exiting",e);
});})(i__32323,e,c__4580__auto__,size__4581__auto__,b__32324,s__32322__$2,temp__4657__auto__,this__31346__auto____$1))
,cljs.core.cst$kw$on_DASH_exited,((function (i__32323,e,c__4580__auto__,size__4581__auto__,b__32324,s__32322__$2,temp__4657__auto__,this__31346__auto____$1){
return (function (){
return console.log("exited",e);
});})(i__32323,e,c__4580__auto__,size__4581__auto__,b__32324,s__32322__$2,temp__4657__auto__,this__31346__auto____$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"item ",e], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,e], null)));

var G__32325 = (i__32323 + (1));
i__32323 = G__32325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32324),example$transitions$iter__32321(cljs.core.chunk_rest(s__32322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32324),null);
}
} else {
var e = cljs.core.first(s__32322__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,example.transitions.global$module$react_transition_group$CSSTransition,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$classNames,"fade",cljs.core.cst$kw$timeout,(500),cljs.core.cst$kw$on_DASH_enter,((function (e,s__32322__$2,temp__4657__auto__,this__31346__auto____$1){
return (function (){
return console.log("enter",e);
});})(e,s__32322__$2,temp__4657__auto__,this__31346__auto____$1))
,cljs.core.cst$kw$on_DASH_entering,((function (e,s__32322__$2,temp__4657__auto__,this__31346__auto____$1){
return (function (){
return console.log("entering",e);
});})(e,s__32322__$2,temp__4657__auto__,this__31346__auto____$1))
,cljs.core.cst$kw$on_DASH_entered,((function (e,s__32322__$2,temp__4657__auto__,this__31346__auto____$1){
return (function (){
return console.log("entered",e);
});})(e,s__32322__$2,temp__4657__auto__,this__31346__auto____$1))
,cljs.core.cst$kw$on_DASH_exit,((function (e,s__32322__$2,temp__4657__auto__,this__31346__auto____$1){
return (function (){
return console.log("enter",e);
});})(e,s__32322__$2,temp__4657__auto__,this__31346__auto____$1))
,cljs.core.cst$kw$on_DASH_exiting,((function (e,s__32322__$2,temp__4657__auto__,this__31346__auto____$1){
return (function (){
return console.log("exiting",e);
});})(e,s__32322__$2,temp__4657__auto__,this__31346__auto____$1))
,cljs.core.cst$kw$on_DASH_exited,((function (e,s__32322__$2,temp__4657__auto__,this__31346__auto____$1){
return (function (){
return console.log("exited",e);
});})(e,s__32322__$2,temp__4657__auto__,this__31346__auto____$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"item ",e], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,e], null)),example$transitions$iter__32321(cljs.core.rest(s__32322__$2)));
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
if(cljs.core.fn_QMARK_(v__31365__auto__)){
return (function (data_atom__31366__auto__,owner__31367__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__31365__auto__,data_atom__31366__auto__,owner__31367__auto__], null));
});
} else {
return reagent.core.as_element(v__31365__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(devcard_opts__31347__auto__))], 0))], 0));
}));

(example.transitions.t_example$transitions32318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32319], null);
}));

(example.transitions.t_example$transitions32318.cljs$lang$type = true);

(example.transitions.t_example$transitions32318.cljs$lang$ctorStr = "example.transitions/t_example$transitions32318");

(example.transitions.t_example$transitions32318.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.transitions/t_example$transitions32318");
}));

/**
 * Positional factory function for example.transitions/t_example$transitions32318.
 */
example.transitions.__GT_t_example$transitions32318 = (function example$transitions$__GT_t_example$transitions32318(meta32319){
return (new example.transitions.t_example$transitions32318(meta32319));
});

}

return (new example.transitions.t_example$transitions32318(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$i,(1),cljs.core.cst$kw$elements,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$transitions,cljs.core.cst$kw$css_DASH_transition_DASH_example], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"css-transition-example",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.transitions !== 'undefined') && (typeof example.transitions.t_example$transitions32326 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.transitions.t_example$transitions32326 = (function (meta32327){
this.meta32327 = meta32327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.transitions.t_example$transitions32326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32328,meta32327__$1){
var self__ = this;
var _32328__$1 = this;
return (new example.transitions.t_example$transitions32326(meta32327__$1));
}));

(example.transitions.t_example$transitions32326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32328){
var self__ = this;
var _32328__$1 = this;
return self__.meta32327;
}));

(example.transitions.t_example$transitions32326.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.transitions.t_example$transitions32326.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (state,_){
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
if(cljs.core.fn_QMARK_(v__31365__auto__)){
return (function (data_atom__31366__auto__,owner__31367__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__31365__auto__,data_atom__31366__auto__,owner__31367__auto__], null));
});
} else {
return reagent.core.as_element(v__31365__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(devcard_opts__31347__auto__))], 0))], 0));
}));

(example.transitions.t_example$transitions32326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32327], null);
}));

(example.transitions.t_example$transitions32326.cljs$lang$type = true);

(example.transitions.t_example$transitions32326.cljs$lang$ctorStr = "example.transitions/t_example$transitions32326");

(example.transitions.t_example$transitions32326.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.transitions/t_example$transitions32326");
}));

/**
 * Positional factory function for example.transitions/t_example$transitions32326.
 */
example.transitions.__GT_t_example$transitions32326 = (function example$transitions$__GT_t_example$transitions32326(meta32327){
return (new example.transitions.t_example$transitions32326(meta32327));
});

}

return (new example.transitions.t_example$transitions32326(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$transitions,cljs.core.cst$kw$switch_DASH_transition_DASH_example], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"switch-transition-example",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.transitions !== 'undefined') && (typeof example.transitions.t_example$transitions32329 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.transitions.t_example$transitions32329 = (function (meta32330){
this.meta32330 = meta32330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.transitions.t_example$transitions32329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32331,meta32330__$1){
var self__ = this;
var _32331__$1 = this;
return (new example.transitions.t_example$transitions32329(meta32330__$1));
}));

(example.transitions.t_example$transitions32329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32331){
var self__ = this;
var _32331__$1 = this;
return self__.meta32330;
}));

(example.transitions.t_example$transitions32329.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.transitions.t_example$transitions32329.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (state,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,example.transitions.global$module$react_transition_group$SwitchTransition,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,example.transitions.global$module$react_transition_group$CSSTransition,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,(cljs.core.truth_(cljs.core.deref(state))?"active":"disabled"),cljs.core.cst$kw$classNames,"fade",cljs.core.cst$kw$timeout,(500)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (___$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(state))?"Active":"Disabled")], null)], null)], null)], null);
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

(example.transitions.t_example$transitions32329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32330], null);
}));

(example.transitions.t_example$transitions32329.cljs$lang$type = true);

(example.transitions.t_example$transitions32329.cljs$lang$ctorStr = "example.transitions/t_example$transitions32329");

(example.transitions.t_example$transitions32329.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.transitions/t_example$transitions32329");
}));

/**
 * Positional factory function for example.transitions/t_example$transitions32329.
 */
example.transitions.__GT_t_example$transitions32329 = (function example$transitions$__GT_t_example$transitions32329(meta32330){
return (new example.transitions.t_example$transitions32329(meta32330));
});

}

return (new example.transitions.t_example$transitions32329(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
