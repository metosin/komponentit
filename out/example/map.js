// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('example.map');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('devcards.core');
example.map.global$module$leaflet = goog.global["L"];
example.map.global$module$react_leaflet = goog.global["ReactLeaflet"];
example.map.copy_osm = "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors";
example.map.osm_url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.protocol),"//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"].join('');
example.map.Map = reagent.core.adapt_react_class(example.map.global$module$react_leaflet.Map);
example.map.Marker = reagent.core.adapt_react_class(example.map.global$module$react_leaflet.Marker);
example.map.Popup = reagent.core.adapt_react_class(example.map.global$module$react_leaflet.Popup);
example.map.TileLayer = reagent.core.adapt_react_class(example.map.global$module$react_leaflet.TileLayer);
example.map.LayerGroup = reagent.core.adapt_react_class(example.map.global$module$react_leaflet.LayerGroup);
example.map.Circle = reagent.core.adapt_react_class(example.map.global$module$react_leaflet.Circle);
example.map.CircleMarker = reagent.core.adapt_react_class(example.map.global$module$react_leaflet.CircleMarker);
example.map.make_icon = (function example$map$make_icon(image_url,opts){
var G__32195 = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$iconUrl,image_url));
return example.map.global$module$leaflet.icon(G__32195);
});
example.map.latLng__GT_latlon = (function example$map$latLng__GT_latlon(lat_lng){
if(cljs.core.truth_(lat_lng)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat_lng.lat,lat_lng.lng], null);
} else {
return null;
}
});
example.map.make_bounds = (function example$map$make_bounds(p__32196){
var map__32197 = p__32196;
var map__32197__$1 = (((((!((map__32197 == null))))?(((((map__32197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32197):map__32197);
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32197__$1,cljs.core.cst$kw$sw);
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32197__$1,cljs.core.cst$kw$ne);
var G__32199 = cljs.core.clj__GT_js(sw);
var G__32200 = cljs.core.clj__GT_js(ne);
return example.map.global$module$leaflet.latLngBounds(G__32199,G__32200);
});
example.map.map_bounds = (function example$map$map_bounds(map){
var b = map.getBounds();
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$sw,example.map.latLng__GT_latlon(b.getSouthWest()),cljs.core.cst$kw$nw,example.map.latLng__GT_latlon(b.getNorthWest()),cljs.core.cst$kw$ne,example.map.latLng__GT_latlon(b.getNorthEast()),cljs.core.cst$kw$se,example.map.latLng__GT_latlon(b.getSouthEast())], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$map,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,"# React leaflet example ([View source](https://github.com/metosin/komponentit/blob/master/example-src/cljs/example/map.cljs))\n\nJust example, no wrapper code is provided to work with React-leaflet.",cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
example.map.default_bounds = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$sw,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.7121,14.9854], null),cljs.core.cst$kw$nw,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [70.5102,14.9854], null),cljs.core.cst$kw$ne,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [70.5102,37.3096], null),cljs.core.cst$kw$se,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.7121,37.3096], null)], null);
example.map.default_center = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [65.6583,26.1475], null);
example.map.default_highlight_opts = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,true,cljs.core.cst$kw$color,"#000000",cljs.core.cst$kw$weight,(5),cljs.core.cst$kw$opacity,0.3,cljs.core.cst$kw$fill,true,cljs.core.cst$kw$fill_DASH_color,"#000000",cljs.core.cst$kw$fill_DASH_opacity,0.1], null);
example.map.hover_highlight_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example.map.default_highlight_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$stroke,false,cljs.core.cst$kw$fill_DASH_color,"#555555",cljs.core.cst$kw$fill_DASH_opacity,0.25], null)], 0));
example.map.select_highlight_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example.map.default_highlight_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"#0494D2",cljs.core.cst$kw$opacity,0.5,cljs.core.cst$kw$fill_DASH_color,"#0494D2"], null)], 0));
example.map.random_coordinates = (function example$map$random_coordinates(){
var vec__32201 = cljs.core.cst$kw$nw.cljs$core$IFn$_invoke$arity$1(example.map.default_bounds);
var lat1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32201,(0),null);
var lng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32201,(1),null);
var vec__32204 = cljs.core.cst$kw$se.cljs$core$IFn$_invoke$arity$1(example.map.default_bounds);
var lat2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32204,(0),null);
var lng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32204,(1),null);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$((lat1 + ((lat2 - lat1) * Math.random()))),cljs.core.long$((lng1 + ((lng2 - lng1) * Math.random())))], null);
})));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$example$map,cljs.core.cst$kw$leaflet_DASH_example], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"leaflet-example",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,(function (){
if((typeof example !== 'undefined') && (typeof example.map !== 'undefined') && (typeof example.map.t_example$map32207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.map.t_example$map32207 = (function (meta32208){
this.meta32208 = meta32208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.map.t_example$map32207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32209,meta32208__$1){
var self__ = this;
var _32209__$1 = this;
return (new example.map.t_example$map32207(meta32208__$1));
}));

(example.map.t_example$map32207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32209){
var self__ = this;
var _32209__$1 = this;
return self__.meta32208;
}));

(example.map.t_example$map32207.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.map.t_example$map32207.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__31346__auto__,devcard_opts__31347__auto__){
var self__ = this;
var this__31346__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__31347__auto__,cljs.core.cst$kw$main_DASH_obj,(function (){var v__31365__auto__ = (function (state,_){
var ref_fn = (function (el){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$leaflet,(cljs.core.truth_(el)?el.leafletElement:null));
});
return (function (state__$1,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.map.Map,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ref,cljs.core.cst$kw$max_DASH_zoom,cljs.core.cst$kw$on_DASH_zoom_DASH_end,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$bounds,cljs.core.cst$kw$center,cljs.core.cst$kw$style,cljs.core.cst$kw$on_DASH_move_DASH_end,cljs.core.cst$kw$min_DASH_zoom],[ref_fn,(18),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc,cljs.core.cst$kw$bounds,example.map.map_bounds(e.target));
}),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc,cljs.core.cst$kw$selected,null);
}),example.map.make_bounds(example.map.default_bounds),example.map.default_center,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min_DASH_height,"640px"], null),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc,cljs.core.cst$kw$bounds,example.map.map_bounds(e.target));
}),(5)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.map.TileLayer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,example.map.osm_url,cljs.core.cst$kw$attribution,example.map.copy_osm], null)], null),(function (){var iter__4582__auto__ = (function example$map$iter__32210(s__32211){
return (new cljs.core.LazySeq(null,(function (){
var s__32211__$1 = s__32211;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__32211__$1);
if(temp__4657__auto__){
var s__32211__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32211__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__32211__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__32213 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__32212 = (0);
while(true){
if((i__32212 < size__4581__auto__)){
var vec__32214 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__32212);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32214,(0),null);
var latlng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32214,(1),null);
cljs.core.chunk_append(b__32213,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.map.Marker,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$key,id,cljs.core.cst$kw$title,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.cst$kw$position,latlng,cljs.core.cst$kw$on_DASH_click,((function (i__32212,vec__32214,id,latlng,c__4580__auto__,size__4581__auto__,b__32213,s__32211__$2,temp__4657__auto__,ref_fn,this__31346__auto____$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc,cljs.core.cst$kw$selected,id);
});})(i__32212,vec__32214,id,latlng,c__4580__auto__,size__4581__auto__,b__32213,s__32211__$2,temp__4657__auto__,ref_fn,this__31346__auto____$1))
,cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (i__32212,vec__32214,id,latlng,c__4580__auto__,size__4581__auto__,b__32213,s__32211__$2,temp__4657__auto__,ref_fn,this__31346__auto____$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc,cljs.core.cst$kw$hover,id);
});})(i__32212,vec__32214,id,latlng,c__4580__auto__,size__4581__auto__,b__32213,s__32211__$2,temp__4657__auto__,ref_fn,this__31346__auto____$1))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (i__32212,vec__32214,id,latlng,c__4580__auto__,size__4581__auto__,b__32213,s__32211__$2,temp__4657__auto__,ref_fn,this__31346__auto____$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc,cljs.core.cst$kw$hover,null);
});})(i__32212,vec__32214,id,latlng,c__4580__auto__,size__4581__auto__,b__32213,s__32211__$2,temp__4657__auto__,ref_fn,this__31346__auto____$1))
], null)], null));

var G__32220 = (i__32212 + (1));
i__32212 = G__32220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32213),example$map$iter__32210(cljs.core.chunk_rest(s__32211__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32213),null);
}
} else {
var vec__32217 = cljs.core.first(s__32211__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32217,(0),null);
var latlng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32217,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.map.Marker,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$key,id,cljs.core.cst$kw$title,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.cst$kw$position,latlng,cljs.core.cst$kw$on_DASH_click,((function (vec__32217,id,latlng,s__32211__$2,temp__4657__auto__,ref_fn,this__31346__auto____$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc,cljs.core.cst$kw$selected,id);
});})(vec__32217,id,latlng,s__32211__$2,temp__4657__auto__,ref_fn,this__31346__auto____$1))
,cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (vec__32217,id,latlng,s__32211__$2,temp__4657__auto__,ref_fn,this__31346__auto____$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc,cljs.core.cst$kw$hover,id);
});})(vec__32217,id,latlng,s__32211__$2,temp__4657__auto__,ref_fn,this__31346__auto____$1))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (vec__32217,id,latlng,s__32211__$2,temp__4657__auto__,ref_fn,this__31346__auto____$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state__$1,cljs.core.assoc,cljs.core.cst$kw$hover,null);
});})(vec__32217,id,latlng,s__32211__$2,temp__4657__auto__,ref_fn,this__31346__auto____$1))
], null)], null),example$map$iter__32210(cljs.core.rest(s__32211__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state__$1)));
})(),(function (){var temp__4655__auto__ = cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state__$1));
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.map.CircleMarker,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example.map.select_highlight_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,"selected",cljs.core.cst$kw$center,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state__$1)),s),cljs.core.cst$kw$radius,(25)], null)], 0))], null);
} else {
return null;
}
})(),(function (){var temp__4655__auto__ = cljs.core.cst$kw$hover.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state__$1));
if(cljs.core.truth_(temp__4655__auto__)){
var h = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.map.CircleMarker,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example.map.hover_highlight_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,"hovering",cljs.core.cst$kw$center,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state__$1)),h),cljs.core.cst$kw$radius,(25)], null)], 0))], null);
} else {
return null;
}
})()], null)], null);
});
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

(example.map.t_example$map32207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32208], null);
}));

(example.map.t_example$map32207.cljs$lang$type = true);

(example.map.t_example$map32207.cljs$lang$ctorStr = "example.map/t_example$map32207");

(example.map.t_example$map32207.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"example.map/t_example$map32207");
}));

/**
 * Positional factory function for example.map/t_example$map32207.
 */
example.map.__GT_t_example$map32207 = (function example$map$__GT_t_example$map32207(meta32208){
return (new example.map.t_example$map32207(meta32208));
});

}

return (new example.map.t_example$map32207(null));
})()
,cljs.core.cst$kw$initial_DASH_data,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$points,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),example.map.random_coordinates())),cljs.core.cst$kw$bounds,example.map.default_bounds,cljs.core.cst$kw$selected,null,cljs.core.cst$kw$hover,null,cljs.core.cst$kw$leaflet,null], null)),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$watch_DASH_atom,false], null)], null));
})], null));
