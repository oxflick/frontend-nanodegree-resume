
var name = "Oxana Web";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = [ "fast learner", "like to organize things", "programming" ];

var bio = {
 "name" : name,
 "role" : role,
 "contacts" : {
 "mobile" : "415-724-9255",
 "email" : "oxana@oxanaweb.com"
 },
 
 "welcomeMessage" : "Welcome to my page",
 "skills" : skills,
 "bioPic" : "images/fry.jpg"
 
 };
 
 bio.city = "Santa Clara";
 bio["desirableRole"] = "Front-End Developer";
 
 $("#header").append(bio.name);
 
 var workObject = {};
 workObject.currentPosition = "Project Manager";
 workObject.employer = "Funkyflick";
 workObject.yearsworked = 2;
 
 var educationalObject = {};
 educationalObject.name = "Udacity";
 
 $("#header").append(workObject.currentPosition);
 
 $("#header").append(educationalObject.name);
 
 var education = {
  "school" : [
   { 
    "name": "udacity",
    "type": "uni"
    },
   {
    "name": "Moscow State Uni",
    "type": "Uni"
    }
  ]
 };
    
 $(document).click(function(loc) {
   var x = loc.pageX;
   var y = loc.pageY;
   
   logClicks(x,y);
   });
   
   function locationizer(work_obj) {
    var locationArray = [];
    
    for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
    }
    
    return locationArray;
 }
 
 function inName(name) {
 name = name.trim().split(" ");
 console.log(name);
 name[1] = name[1].toUpperCase();
 name[0] = name[0].slice(0,1).toUpperCase() + 
 name[0].slice(1).toLowerCase();
 
 return name[0] +" " +name[1];
 }
 
 $('#main').append(internationalizeButton);
 
 /*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;        

  var mapOptions = {
   zoomControl: true,
   disableDefaultUI: true
  };
 
 //var map = {
 // initialize: function() {
    
   //  var map, locations,
   //  mapOptions = {
    //  zoomControl: true,
    //  disableDefaultUI: true
    //  };
 
 

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {
    
    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);
    
    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  };

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.k;  // latitude from the place service
    var lon = placeData.geometry.location.B;  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    
    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
      });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  };

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  //function callback(results, status) {
   // if (status == google.maps.places.PlacesServiceStatus.OK) {
    //  createMapMarker(results[0])
   // }
 // }

 callback = function(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0])
    }
  };








  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);
    
    // Iterates through the array of locations, creates a search object for each location
    for (place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      }

      // Actually searches the Google Maps API for location data and runs the callback 
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  };

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);
  
};

/*
Uncomment all the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window 
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});
 
 
 
 
//.biopic {
  float: left;
  padding: 10px;
  width: 200px;
  display: none;
}
 
 
