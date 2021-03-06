

var work = {
    "jobs": [
        {
            "employer": "Funkyflick, Inc.",
            "title": "Developer",
            "location": "Santa Clara, CA",
            "dates": "08-01-2014 - present",
            "description": "Developing functional web application based on usability best practices for FunkyFlick - Personalized movie search high-tech company."
        },
        {
            "employer": "Funkyflick, Inc.",
            "title": "Project Manager",
            "location": "Santa Clara, CA",
            "dates": "07-01-2013 - present",
            "description": "My goals are to contribute to the success of FunkyFlick - Personalized movie search high-tech company by applying a varied set of experiences in Project Management and broad understanding of the web application structure. FunkyFlick offers unique services for finding movies based on your favorite book, TV show, movie or any wikipedia page."
        },
        {
            "employer": "Bridge to San Francisco, Inc.",
            "title": "Project Manager",
            "location": "San Francisco, CA",
            "dates": "04-01-2012 - 06-01-2013",
            "description": "As a Project Manager I was responsible for the successful planning, execution, monitoring, control and closure of the enterntainment project that took place at the Palace of Fine Arts, San Francisco in January 2013."
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "funkyflick.herokuapp.com",
            "urls": "http://funkyflick.herokuapp.com/",
            "dates": "07-01-2013 - present",
            "description": " Designed Web Application using Ruby on Rails, Bootstrap, JavaScript and added it on Heroku.",
            "images": "images/funkyflick_modal.png"          
        },
        {
            "title": "Navyart.com",
            "urls" : "http://www.navyart.com",
            "dates": "Spring 2014",
            "description": "Navyart.com is the official website of the chief U.S. Navy artist Arthur Beaumont (1870-1978). Main skills used: Design, HTML, CSS, Bootstrap Framework and JavaScript.",
            "images": 'images/navyart_modal.png'  
        },
        {
            "title": "Oxanaweb.com",
            "urls" : "http://www.oxanaweb.com",
            "dates": "October 2014",
            "description": "Designed my official page using HTML, Bootstrap framework, CSS and JavaScript.",
            "images": "images/oxanaweb_modal.png"  
        }, 
        {
            "title": "Museum.oxanaweb.com",
            "urls" : "http://museum.oxanaweb.com/",
            "dates": "February 2015",
            "description": "Museum.oxanaweb.com is a web application build using Knockout.js, Google Maps API, Wiki API to search for museums around the world. Main skills used: JavaScript, jQuery, Knockout.js, CSS, Ajax.",
            "images": "images/museum.png"  
        }, 
        {
            "title": "Natalyataxlaw.com",
            "urls" : "http://natalyataxlaw.com/",
            "dates": "June 2015",
            "description": "Natalyataxlaw.com is a website for Bay Area CPA&Attorney. It is developed on Wordpress and the theme is hand-coded. Main skills used: PHP, HTML, CSS, Bootstrap, JavaScript, Wordpress. ",
            "images": "images/natalyacpa.png"  
        }, 
        {
            "title": "KomfiKidzDesign.com",
            "urls" : "http://www.komfikidzdesign.com/",
            "dates": "July 2015",
            "description": "KomfiKidz is an online store that sells hand made baby blankets. The client needed to update the existing website and make it responsive. We chose to develop a store with Wordpress. The design idea did not change. I developed a custom theme for Wordpress and connected Pay Pal shopping cart. Bootstrap is used for framework. Main skills used: HTML, CSS, PHP, Bootstrap, Website Optimization. ",
            "images": "images/komfikidz.png"  
        }    
    ]
};
  
var bio = {
    "name": "Oxana Web",
    "role": "Web Developer",
    "aboutme": "With my recent experience in start-ups, I feel I bring a unique perspective to front end development and user interface design. Each position I have held has transmuted my skillset and goals towards forward-thinking technology. I am obsessed with expanding my knowledge, solving challenging problems and staying on the bleeding edge.",
    "image" : "images/logo.png",
    "languages" : [
          "English",
          "Russian"
    ],
    "hobbies" : [
          "Traveling",
          "Tennis",
          "Cats"
    ],     
    "contacts": [
        {
            "mobileNumber": "415-724-9255",
            "email": "oxana@oxanaweb.com",
            "github": "oxflick",
            "location": "Santa Clara, CA"
        }
    ],
    "skills": [
        "Adobe Illustrator",
        "HTML/CSS",
        "JavaScript, jQuery, Ajax",
        "Ruby on Rails, PHP, Wordpress",
        "MySQL",
        "Website Performance Optimization"

    ]
}

var education = {
    "schools": [
        {
            "name": "Saratov State University",
            "location": "Saratov, Russian Federation",
            "degree": "Bachelor",
            "majors": "Economics",
            "dates": "2000-2005",
            "urls": "http://www.sgu.ru"
        }
    ],
    "onlineCourse": [
        {
            "title": "Front-End Development, UX Design, Ruby on Rails",
            "school": "Treehouse",
            "dates": "July 2014 - present",
            "urls": "http://www.teamtreehouse.com",
            
        },
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "October 2014 - May 2015",
            "urls": "http://www.udacity.com"
        }
    ]
};

 //Skills Display
 
if (bio.skills.length > 0) {
   $("#skillsChart").append(HTMLskillsStart);
   
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);
   };
   
   //Job Display
   
  function displaywork() { 
   for (job in work.jobs) {
   $("#workExperience").append(HTMLworkStart);
 
   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
   var formattedEmployerTitle = formattedEmployer + formattedTitle;
   $(".work-entry:last").append(formattedEmployerTitle);
  
   var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
   var formattedjobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
   var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
   $(".work-entry:last").append(formattedDates);
   $(".work-entry:last").append(formattedjobLocation);
   $(".work-entry:last").append(formattedDescription);
  
  }
  }
  displaywork();
  
  
  //Projects Display
  
  projects.display = function () {
  
  for (project in projects.projects) {
  
   $("#projects").append(HTMLprojectStart);
  
   var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace('%url%', projects.projects[project].urls);
   $(".project-entry:last").append(formattedProjectTitle);
  
   var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
   $(".project-entry:last").append(formattedProjectDates);
  
   var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
   $(".project-entry:last").append(formattedProjectDescription);
  
  
   var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
   $(".project-entry:last").append(formattedProjectImage);
  
  
  
  }
  }
  projects.display();
  
  
 
  
  
  
  
  //Header name, role, picture, welcome message
  
  var formattedPicture = HTMLbioPic.replace("%data%", bio.image);
  $("#logo-header").append(formattedPicture);
  
  var formattedheaderText = HTMLheaderText.replace("%data%", bio.name).replace("%role%", bio.role);
  $("#logo-header").append(formattedheaderText);
 
  var formattedaboutMe = HTMLaboutMe.replace("%data%", bio.aboutme);
  $("#welcome").append(formattedaboutMe);
  
    
  //Top-Contacts
  
  function contactsdisplay () {
  
   for (contact in bio.contacts) {
  
   var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
   $("#topContacts").append(formattedEmail);
  
  
   var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
   $("#topContacts").append(formattedLocation);
  
   var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobileNumber);
   $("#topContacts").append(formattedMobile);
  
   var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
   $("#topContacts").append(formattedGithub);
  
  }
  }
  contactsdisplay();
  
  //Education Display
  
  function educationdisplay () {
  
   for (school in education.schools) {
   $("#education").append(HTMLschoolStart);
  
   var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
   $(".education-entry:last").append(formattedschoolName);
      
   var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
   $(".education-entry:last").append(formattedschoolDegree);
  
   var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
   $(".education-entry:last").append(formattedschoolDates);
  
   var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
   $(".education-entry:last").append(formattedschoolMajor);
   
   var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
   $(".education-entry:last").append(formattedschoolLocation);
  
   var formattedschoolURL = HTMLschoolURL.replace("%data%", education.schools[school].urls);
   $(".education-entry:last").append(formattedschoolURL);

  }
  }
  educationdisplay(); 
  
  //Online Courses Display
  
  $(".education-entry:last").append(HTMLonlineClasses);
  
  function displayonlinecourses() { 
  for (course in education.onlineCourse) {
      
  var formattedonlineTitle =  HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
  $(".education-entry:last").append(formattedonlineTitle);
  
  var formattedonlineSchool =  HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
  $(".education-entry:last").append(formattedonlineSchool);
  
  var formattedonlineDates =  HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
  $(".education-entry:last").append(formattedonlineDates);
   
  var formattedonlineUrl =  HTMLonlineURL.replace("%data%", education.onlineCourse[course].urls);
  $(".education-entry:last").append(formattedonlineUrl);
  
  }
  }
  displayonlinecourses();
  
  
  //Languages Display
 
  if (bio.languages.length > 0) {
   
  var formattedLanguage = HTMLlanguageItem.replace("%data%", bio.languages[0]);
  $("#languages").append(formattedLanguage);
  formattedLanguage = HTMLlanguageItem.replace("%data%", bio.languages[1]);
  $("#languages").append(formattedLanguage);
    
  };
   
  //Hobbies Display
 
  if (bio.hobbies.length > 0) {
   
  var formattedHobby = HTMLhobbyItem.replace("%data%", bio.hobbies[0]);
  $("#hobbies").append(formattedHobby);
  formattedHobby = HTMLhobbyItem.replace("%data%", bio.hobbies[1]);
  $("#hobbies").append(formattedHobby);
  formattedHobby = HTMLhobbyItem.replace("%data%", bio.hobbies[2]);
  $("#hobbies").append(formattedHobby);
    
  };
   
   
  //Building Map

 var map;
function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(37.35, -121.955)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);















 
 
