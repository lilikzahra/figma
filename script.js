var map = L.map('map').setView([-0.789275, 113.921326], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
var marker = L.marker([-0.789275, 113.921326]).addTo(map);
var circle = L.circle([-0.789500, 113.921350], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
var polygon = L.polygon([
    [-0.809300, 112.921390],
    [-0.819657, 111.921330],
    [-0.829275, 110.921400]
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([-0.789275, 113.921326])
    .setContent("I am a standalone popup.")
    .openOn(map);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick);

    var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


const http = require('http');

const fs = require('fs');
const port = 3000;

function panggilHTML(path, res) {
    fs.readFile(path, 'utf8', function(err, data){
        if(err) {
            res.writeHead(404);
            res.write('File tidak ditemukan!');
        }
        else {
            res.write(data)
        }
        res.end();
    });
}

const server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type' : 'text/html'});


    panggilHTML('./index.html', res);
});

server.listen(3000);