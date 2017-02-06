

//  // Try HTML5 geolocation.
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(function(position) {
//             pos = {
//               lat: position.coords.latitude,
//               lng: position.coords.longitude
//             };

//             infoWindow.setPosition(pos);
//             infoWindow.setContent('Location found.');
//             map.setCenter(pos);
//           }, function() {
//             handleLocationError(true, infoWindow, map.getCenter());
//           });
//         } else {
//           // Browser doesn't support Geolocation
//           handleLocationError(false, infoWindow, map.getCenter());
//         }


// lat:37.7749,lng:-122.4194


// function getLocation(){
//   return [
//         {lat:37.7749,lng:-122.4194},
//         {lat:37.7884,lng:-122.4076},
//         {lat:37.7584,lng:-122.4376}
//       ]
// }

function distance(p1,p2){
  return google.maps.geometry.spherical.computeDistanceBetween(p1,p2);

}




// <!DOCTYPE html>
// <html>
//   <head>
//     <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
//     <meta charset="utf-8">
//     <title>Simple icons</title>
//     <style>
//       /* Always set the map height explicitly to define the size of the div
//        * element that contains the map. */
//       #map {
//         height: 100%;
//       }
//       /* Optional: Makes the sample page fill the window. */
//       html, body {
//         height: 100%;
//         margin: 0;
//         padding: 0;
//       }
//     </style>
//   </head>
//   <body>
//     <div id="map"></div>
//   </body>


//     <script src="script/script.js"></script>
    
//     <script>

//       // This example adds a marker to indicate the position of Bondi Beach in Sydney,
//       // Australia.
//       function initMap() {
//         var pos={lat:37.7749,lng:-122.4194};

//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 14,
//           center: pos
//         });



//         // Create an array of alphabetical characters used to label the markers.
//         var labels = 'ABC';

//         var markers=[];
//         var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';


//         markers.push(
//           new google.maps.Marker({
//             position: pos,
//             map: map,
//             icon: image
//         })); 

//         locations.map(function(location, i) {
//           markers.push(new google.maps.Marker({
//             position: location,
//             label: labels[i % labels.length]
//             })); 
//         });

//         // Add a marker clusterer to manage the markers.
//         var markerCluster = new MarkerClusterer(map, markers);
//       }

//       var locations = getLocation();

//     </script>
//     <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
//     <script async defer
//     src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpSAXsBvs1m0o5SUlF54Z8bFM6DPNvnQk&callback=initMap">
//     </script>

// </html>