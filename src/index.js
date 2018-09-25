console.log('hi');

const mapboxgl = require("mapbox-gl");
// const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoiY2RjbHIiLCJhIjoiY2ptaTZvaWtrMDFydTN3bzUyNHB1bnRrYiJ9.R3UJ1lGn2M0P3enZ3LBdoQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = document.createElement('div');
marker.style.width = "32px";
marker.style.height = "39px";
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);


// const marker = new mapboxgl.Marker();
// marker.setLngLat([-74.009151, 40.705086]).addTo(map);

// const marker = buildMarker("activity", [-74.009151, 40.705086])
// marker.addTo(map);