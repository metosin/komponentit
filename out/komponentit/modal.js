// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('komponentit.modal');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('komponentit.mixins');
/**
 * - :title      The el for modal header
 * - :content    The el for modal body
 * - :footer     The elements for modal footer
 * - :on-close   (Optional) callback to be called when modal is closed by clicking outside of the modal
 * - :class      (Optional) additional classes for .modal-dialog; Examples: modal-sm, modal-lg
 */
komponentit.modal.modal = (function komponentit$modal$modal(p__32883){
var map__32884 = p__32883;
var map__32884__$1 = (((((!((map__32884 == null))))?(((((map__32884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32884):map__32884);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32884__$1,cljs.core.cst$kw$title);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32884__$1,cljs.core.cst$kw$content);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32884__$1,cljs.core.cst$kw$footer);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32884__$1,cljs.core.cst$kw$on_DASH_close);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32884__$1,cljs.core.cst$kw$class);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.mixins.window_event_listener,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_key_DASH_down,(function (e){
var G__32886 = e.keyCode;
switch (G__32886) {
case (27):
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));

break;
default:
return null;

}
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal__container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"block"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal__backdrop,(cljs.core.truth_(on_close)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
(on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));

return null;
})], null):null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,class$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal__header,(cljs.core.truth_(on_close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$modal__close,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$aria_DASH_label,"Close",cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (_){
(on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));

return null;
})], null),"\u00D7"], null):null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal__content,content], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal__footer], null),footer)], null)], null)], null);
});
/**
 * - :title        The el for modal header
 * - :content      The el for modal content
 * - :success      Function to call if confirmed
 * - :failure      Function to call if cancelled
 * - :ok-label     Label for OK button
 * - :cancel-label Label for Cancel button
 * - :class        (Optional) additional classes for .modal-dialog
 */
komponentit.modal.confirm_modal = (function komponentit$modal$confirm_modal(p__32888){
var map__32889 = p__32888;
var map__32889__$1 = (((((!((map__32889 == null))))?(((((map__32889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32889):map__32889);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32889__$1,cljs.core.cst$kw$title,"Yes or no?");
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32889__$1,cljs.core.cst$kw$content,"Are you sure?");
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32889__$1,cljs.core.cst$kw$class);
var success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32889__$1,cljs.core.cst$kw$success);
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32889__$1,cljs.core.cst$kw$failure);
var cancel_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32889__$1,cljs.core.cst$kw$cancel_DASH_label,"Cancel");
var ok_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32889__$1,cljs.core.cst$kw$ok_DASH_label,"OK");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.modal.modal,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,class$,cljs.core.cst$kw$title,title,cljs.core.cst$kw$content,content,cljs.core.cst$kw$footer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal__buttons,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$modal__cancel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (_){
if(cljs.core.truth_(failure)){
(failure.cljs$core$IFn$_invoke$arity$0 ? failure.cljs$core$IFn$_invoke$arity$0() : failure.call(null));
} else {
}

return null;
})], null),cancel_label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$modal__ok,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$autoFocus,true,cljs.core.cst$kw$on_DASH_click,(function (_){
if(cljs.core.truth_(success)){
(success.cljs$core$IFn$_invoke$arity$0 ? success.cljs$core$IFn$_invoke$arity$0() : success.call(null));
} else {
}

return null;
})], null),ok_label], null)], null)], null),cljs.core.cst$kw$on_DASH_close,(function (){
if(cljs.core.truth_(failure)){
return (failure.cljs$core$IFn$_invoke$arity$0 ? failure.cljs$core$IFn$_invoke$arity$0() : failure.call(null));
} else {
return null;
}
})], null)], null);
});
