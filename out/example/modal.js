// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.modal');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('komponentit.modal');
goog.require('reagent.core');
goog.require('devcards.core');
goog.require('example.options');
goog.require('example.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$modal,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,[example.core.header(cljs.core.cst$sym$modal,"Modals"),"## Basic options\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(new cljs.core.Var(function(){return komponentit.modal.modal;},cljs.core.cst$sym$komponentit$modal_SLASH_modal,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$komponentit$modal,cljs.core.cst$sym$modal,"/home/juho/Source/komponentit/src/cljs/komponentit/modal.cljs",12,1,7,7,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$title,cljs.core.cst$sym$content,cljs.core.cst$sym$footer,cljs.core.cst$sym$on_DASH_close,cljs.core.cst$sym$class], null)], null)], null)),"- :title      The el for modal header\n- :content    The el for modal body\n- :footer     The elements for modal footer\n- :on-close   (Optional) callback to be called when modal is closed by clicking outside of the modal\n- :class      (Optional) additional classes for .modal-dialog; Examples: modal-sm, modal-lg",(cljs.core.truth_(komponentit.modal.modal)?komponentit.modal.modal.cljs$lang$test:null)]))))),"\n\n## Confirm modal options\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(new cljs.core.Var(function(){return komponentit.modal.confirm_modal;},cljs.core.cst$sym$komponentit$modal_SLASH_confirm_DASH_modal,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$komponentit$modal,cljs.core.cst$sym$confirm_DASH_modal,"/home/juho/Source/komponentit/src/cljs/komponentit/modal.cljs",20,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$title,cljs.core.cst$sym$content,cljs.core.cst$sym$class,cljs.core.cst$sym$success,cljs.core.cst$sym$failure,cljs.core.cst$sym$cancel_DASH_label,cljs.core.cst$sym$ok_DASH_label], null),cljs.core.cst$kw$or,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$title,"Yes or no?",cljs.core.cst$sym$content,"Are you sure?",cljs.core.cst$sym$cancel_DASH_label,"Cancel",cljs.core.cst$sym$ok_DASH_label,"OK"], null)], null)], null)),"- :title        The el for modal header\n- :content      The el for modal content\n- :success      Function to call if confirmed\n- :failure      Function to call if cancelled\n- :ok-label     Label for OK button\n- :cancel-label Label for Cancel button\n- :class        (Optional) additional classes for .modal-dialog",(cljs.core.truth_(komponentit.modal.confirm_modal)?komponentit.modal.confirm_modal.cljs$lang$test:null)])))))].join(''),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$modal,cljs.core.cst$kw$modal], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"modal",cljs.core.cst$kw$documentation,"With basic modal the buttons need to be defined manually",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.modal !== 'undefined') && (typeof example.modal.t_example$modal32813 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.modal.t_example$modal32813 = (function (meta32814){
this.meta32814 = meta32814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.modal.t_example$modal32813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32815,meta32814__$1){
var self__ = this;
var _32815__$1 = this;
return (new example.modal.t_example$modal32813(meta32814__$1));
}));

(example.modal.t_example$modal32813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32815){
var self__ = this;
var _32815__$1 = this;
return self__.meta32814;
}));

(example.modal.t_example$modal32813.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.modal.t_example$modal32813.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (open_QMARK_,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(cljs.core.truth_(cljs.core.deref(open_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.modal.modal,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Example modal",cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Some content"], null),cljs.core.cst$kw$footer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(open_QMARK_,false);
})], null),"Close"], null)], null),cljs.core.cst$kw$on_DASH_close,(function (){
return cljs.core.reset_BANG_(open_QMARK_,false);
})], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(open_QMARK_,true);
})], null),"Open"], null)], null);
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

(example.modal.t_example$modal32813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32814], null);
}));

(example.modal.t_example$modal32813.cljs$lang$type = true);

(example.modal.t_example$modal32813.cljs$lang$ctorStr = "example.modal/t_example$modal32813");

(example.modal.t_example$modal32813.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.modal/t_example$modal32813");
}));

/**
 * Positional factory function for example.modal/t_example$modal32813.
 */
example.modal.__GT_t_example$modal32813 = (function example$modal$__GT_t_example$modal32813(meta32814){
return (new example.modal.t_example$modal32813(meta32814));
});

}

return (new example.modal.t_example$modal32813(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$modal,cljs.core.cst$kw$confirm_DASH_modal], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"confirm-modal",cljs.core.cst$kw$documentation,"Confirm modal provides default buttons",cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.modal !== 'undefined') && (typeof example.modal.t_example$modal32816 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.modal.t_example$modal32816 = (function (meta32817){
this.meta32817 = meta32817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.modal.t_example$modal32816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32818,meta32817__$1){
var self__ = this;
var _32818__$1 = this;
return (new example.modal.t_example$modal32816(meta32817__$1));
}));

(example.modal.t_example$modal32816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32818){
var self__ = this;
var _32818__$1 = this;
return self__.meta32817;
}));

(example.modal.t_example$modal32816.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.modal.t_example$modal32816.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (open_QMARK_,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(cljs.core.truth_(cljs.core.deref(open_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.modal.confirm_modal,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Example confirm-modal",cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Would you please confirm this action?"], null),cljs.core.cst$kw$success,(function (){
cljs.core.reset_BANG_(open_QMARK_,false);

return alert("SUCCESS!!");
}),cljs.core.cst$kw$failure,(function (){
return cljs.core.reset_BANG_(open_QMARK_,false);
})], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(open_QMARK_,true);
})], null),"Open"], null)], null);
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

(example.modal.t_example$modal32816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32817], null);
}));

(example.modal.t_example$modal32816.cljs$lang$type = true);

(example.modal.t_example$modal32816.cljs$lang$ctorStr = "example.modal/t_example$modal32816");

(example.modal.t_example$modal32816.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.modal/t_example$modal32816");
}));

/**
 * Positional factory function for example.modal/t_example$modal32816.
 */
example.modal.__GT_t_example$modal32816 = (function example$modal$__GT_t_example$modal32816(meta32817){
return (new example.modal.t_example$modal32816(meta32817));
});

}

return (new example.modal.t_example$modal32816(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
