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
var G__37437 = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$iconUrl,image_url));
return example.map.global$module$leaflet.icon(G__37437);
});
example.map.latLng__GT_latlon = (function example$map$latLng__GT_latlon(lat_lng){
if(cljs.core.truth_(lat_lng)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat_lng.lat,lat_lng.lng], null);
} else {
return null;
}
});
example.map.make_bounds = (function example$map$make_bounds(p__37438){
var map__37439 = p__37438;
var map__37439__$1 = (((((!((map__37439 == null))))?(((((map__37439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37439):map__37439);
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37439__$1,cljs.core.cst$kw$sw);
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37439__$1,cljs.core.cst$kw$ne);
var G__37441 = cljs.core.clj__GT_js(sw);
var G__37442 = cljs.core.clj__GT_js(ne);
return example.map.global$module$leaflet.latLngBounds(G__37441,G__37442);
});
example.map.map_bounds = (function example$map$map_bounds(map){
var b = map.getBounds();
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$sw,example.map.latLng__GT_latlon(b.getSouthWest()),cljs.core.cst$kw$nw,example.map.latLng__GT_latlon(b.getNorthWest()),cljs.core.cst$kw$ne,example.map.latLng__GT_latlon(b.getNorthEast()),cljs.core.cst$kw$se,example.map.latLng__GT_latlon(b.getSouthEast())], null);
});
example.map.default_bounds = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$sw,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.7121,14.9854], null),cljs.core.cst$kw$nw,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [70.5102,14.9854], null),cljs.core.cst$kw$ne,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [70.5102,37.3096], null),cljs.core.cst$kw$se,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.7121,37.3096], null)], null);
example.map.default_center = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [65.6583,26.1475], null);
example.map.default_highlight_opts = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,true,cljs.core.cst$kw$color,"#000000",cljs.core.cst$kw$weight,(5),cljs.core.cst$kw$opacity,0.3,cljs.core.cst$kw$fill,true,cljs.core.cst$kw$fill_DASH_color,"#000000",cljs.core.cst$kw$fill_DASH_opacity,0.1], null);
example.map.hover_highlight_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example.map.default_highlight_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$stroke,false,cljs.core.cst$kw$fill_DASH_color,"#555555",cljs.core.cst$kw$fill_DASH_opacity,0.25], null)], 0));
example.map.select_highlight_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example.map.default_highlight_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"#0494D2",cljs.core.cst$kw$opacity,0.5,cljs.core.cst$kw$fill_DASH_color,"#0494D2"], null)], 0));
example.map.random_coordinates = (function example$map$random_coordinates(){
var vec__37443 = cljs.core.cst$kw$nw.cljs$core$IFn$_invoke$arity$1(example.map.default_bounds);
var lat1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37443,(0),null);
var lng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37443,(1),null);
var vec__37446 = cljs.core.cst$kw$se.cljs$core$IFn$_invoke$arity$1(example.map.default_bounds);
var lat2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37446,(0),null);
var lng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37446,(1),null);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$((lat1 + ((lat2 - lat1) * Math.random()))),cljs.core.long$((lng1 + ((lng2 - lng1) * Math.random())))], null);
})));
});
