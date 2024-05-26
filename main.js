var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 1,
    zoomSnap: 0.25
});
var bounds = [[12,10], [1000,1000]];
var image = L.tileLayer('https://www.zeldadungeon.net/maps/totk/tiles/surface/{z}/{x}_{y}.jpg', {maxZoom: 5}).addTo(map);
//map.fitBounds(bounds);
map.setView([50, 50], 0);
var marker = L.marker([500, 500]).addTo(map);
function onMapClick(e) {
    marker
        .setLatLng(e.latlng);
}
function changeLevel(){

}
map.on('click', onMapClick);
map.on("zoomend")