var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 0
});
var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('0_0.jpg', bounds).addTo(map);
map.fitBounds(bounds);
var marker = L.marker([1, 1]).addTo(map);
function onMapClick(e) {
    marker
        .setLatLng(e.latlng)
        .openOn(map);
}
map.on('click', onMapClick);