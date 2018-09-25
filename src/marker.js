const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotel: "http://i.imgur.com/D9574Cu.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png",
    activity: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
    var marker = document.createElement('div');
    marker.setAttribute = 'marker';
    marker.style.width = "32px";
    marker.style.height = "39px";
    marker.style.backgroundImage = `url(${iconURLs[type]})`;
    marker.setLngLat(coords);
    return marker;
};

module.exports = buildMarker;