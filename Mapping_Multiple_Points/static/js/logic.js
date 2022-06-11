// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 14);

// Get data from cities.js
let cityData = cities;

// Adding a marker for each city
cityData.forEach(function(city){
    console.log(city);
    var location = city.location;
    var cityName = city.city;
    var state = city.state;
    var population = city.population;

    L.circleMarker(location, {
        radius : population/200000,
        color : 'orange',
        fillColor : '#FFA500',
        lineWeight : 4

    })
    .bindPopup("<h2>" + cityName + ", " + state + "</h2> <hr> <h3>Population " + population.toLocaleString() + "</h3>").addTo(map);
  });

// We create the tile layer that will be the background of our map.
streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);




