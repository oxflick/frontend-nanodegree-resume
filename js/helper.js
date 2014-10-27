/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<span>%data%</span><hr/>";

var HTMLcontactGeneric = "<li><span class='orange-text'>%contact%</span><span class='pinky-text'>%data%</span></li>";
var HTMLmobile = "<li><span class='orange-text'>mobile</span><span class='pinky-text'>%data%</span></li>";
var HTMLemail = "<li><span class='orange-text'>email</span><span class='pinky-text'>%data%</span></li>";
var HTMLtwitter = "<li class='flex-item'><span class='orange-text'>twitter</span><span class='pinky-text'>%data%</span></li>";
var HTMLgithub = "<li><span class='orange-text'>github</span><span class='pinky-text'>%data%</span></li>";
var HTMLblog = "<li class='flex-item'><span class='orange-text'>blog</span><span class='pinky-text'>%data%</span></li>";
var HTMLlocation = "<li class='flex-item'><span class='orange-text'>location</span><span class='pinky-text'>%data%</span></li>";

var HTMLbioPic = "<div id='photo'><img src='%data%' alt='logo'></div>";
var HTMLheaderText = "<div id='text-header'><h1>Hello,<br>my name is <span>%data%</span> and I am a %role%</h1></div>";
var HTMLaboutMe = "<p>%data%</p>";

var HTMLskillsStart = "<h3 id='skillsH3'></h3><ul id='skills' class='box'></ul>";
var HTMLskills = "<li><span class='pinky-text'>%data%</span></li>";

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<h3>%data%";
var HTMLworkTitle = " - %data%</h3>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p><br>%data%</p>";

var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectTitle = "<a href='%url%' target='_blank'><h3>%data%</h3></a>";
var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p><br>%data%</p>";
var HTMLprojectImage = "<img class='img-responsive img-thumbnail' src='%data%'>";


var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<h3>%data%</h3>";
var HTMLschoolDegree = " -- %data%";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<em><br>Major: %data%</em>";
var HTMLschoolURL = "<br><a href='#'>%data%</a>";

var HTMLonlineClasses = "<h2>Online Classes</h2>";
var HTMLonlineTitle = "<h3>%data%</h3>";
var HTMLonlineSchool = " -- %data%";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "<br><a href='#'>%data%</a>";


var HTMLlanguageItem = "<li><span class='pinky-text'>%data%</span></li>";
var HTMLhobbyItem = "<div class='hobby'>%data%</div>";

var internationalizeButton = "<button>Internationalize</button>";
var googleMap = "<div id='map' class='box'></div>";


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
})



/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      "x": x,
      "y": y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  // your code goes here!
});




