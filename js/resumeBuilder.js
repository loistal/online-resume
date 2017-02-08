var bio = {
    "name": "Lois Talagrand",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "+68987714710",
        "email": "lois.talagrand@gmail.com",
        "github": "https://github.com/loistal",
        "location": "Tahiti, French Polynesia"
    },
    "welcomeMessage": "Thank you for consulting my resume!",
    "skills": [
        "HTML, CSS, Javascript",
        "Bootstrap",
        "SQL",
        "jQuery",
        "D3.js",
        "Grunt",
        "GitHub"
    ],
    "biopic": "img/profile-picture.jpg"
};

var education = {
    "schools": [{
        "name": "Swiss Federal Institute of Technology, EPFL",
        "location": "Lausanne, Switzerland",
        "degree": "Bsc",
        "majors": [
            "Computer Science"
        ],
        "dates": "Sep. 2013 - Dec. 2017",
        "url": "www.epfl.ch"
    }],
    "onlineCourses": [{
        "title": "Front-End Developer Nanodegree",
        "school": "Udacity",
        "dates": "Jan. 2017 - Mar. 2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
};

var work = {
    "jobs": [{
        "employer": "Vittoria Conseil",
        "title": "Software Developer, Intern",
        "location": "Tahiti, French Polynesia",
        "dates": "Jul. 2016 -  Sep. 2016",
        "description": "Investigation and documentation of the API of the Odoo CRM. The technical documentation is currently used by the company's technicians for the development of Odoo plugins.  I learnt and used various development skills such as: Python, XML, HTML, CSS, and the Unix command line."
    }]
};

var projects = {
    "projects": [{
        "title": "Swiss Flows",
        "dates": "Nov. 2016 - Feb. 2017",
        "description": "Swiss flows is an interactive map that represents migration patterns in Switzerland. The flows are constructed using tweets, and the visualization uses D3.js",
        "images": [
            "https://github.com/loistal/Portfolio/blob/master/img/swiss-flows.png?raw=true"
        ]
    }, {
        "title": "Online library",
        "dates": "Mar. 2016 - Jun. 2016",
        "description": "Online library is a project where I was given a dataset consisting of a few GB about books, as well as all the information related to these books (author, price, language, ...). This data had to be cleaned and stored. The final product is a minimalistic Java based interface which queries the database through a simple interface.",
        "images": [
            "http://www.fujitsu.com/global/Images/oracle-580x224_tcm100-102907.png"
        ]
    }]
};

// HEADER
bio.display = function () {
    var personName = HTMLheaderName.replace("%data%", bio.name);
    var role = HTMLheaderRole.replace("%data%", bio.role);
    var biopic = HTMLbioPic.replace("%data%", bio.biopic);
    var welcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    var contactInfo = [];
    contactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    contactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    // Twitter field is optional. Only display if present
    if (typeof bio.contacts.twitter != 'undefined') {
        console.log(bio.contacts.twitter);
        contactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    }
    contactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
    contactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));


    $("#header").prepend(role);
    $("#header").prepend(personName);
    $("#header").append(biopic);
    $("#header").append(welcomeMsg);

    // SKILLS
    // Check if the individual actually has some skills
    if (bio.skills.length > 0) {

        // title for the skill section
        $("#header").append(HTMLskillsStart);

        // append skills
        for (var i = 0; i < bio.skills.length; i++) {
            // Reuse the same HTMLskills template everytime (HTMLskills is left unchanged)
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    // CONTACT INFO
    for (var index = 0; index < contactInfo.length; index++) {
        $("#topContacts").append(contactInfo[index]);
        $("#footerContacts").append(contactInfo[index]);
    }
}

bio.display();

// EDUCATION
education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var i = 0; i < education.schools.length; i++) {
            // Title
            $("#education").append(HTMLschoolStart);

            // formatting
            var schoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var schoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            // Add school info only to the last education-entry
            $(".education-entry:last").append(schoolName + schoolDegree);
            $(".education-entry:last").append(schoolDates);
            $(".education-entry:last").append(schoolLocation);
            $(".education-entry:last").append(schoolMajor);
        }

        // only display if non empty
        if (education.onlineCourses.length > 0) {
            // title
            $("#education").append(HTMLonlineClasses);

            for (var index = 0; index < education.onlineCourses.length; index++) {
                $("#education").append(HTMLschoolStart);
                var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title).replace("#", education.onlineCourses[index].url);
                var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
                var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
                var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url).replace("#", education.onlineCourses[index].url);

                // only add to last entry
                $(".education-entry:last").append(onlineTitle + onlineSchool);
                $(".education-entry:last").append(onlineDates);
                $(".education-entry:last").append(onlineURL);
            }
        }

    }
};

education.display();

// WORK
work.display = function () {
    // Check if the individual used to be employed
    if (work.jobs.length > 0) {
        // title
        $("#workExperience").append(HTMLworkStart);

        // Add work information for each job 
        for (var i = 0; i < work.jobs.length; i++) {
            var employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var workLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var dates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var workDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var employerWorkTitle = employer + workTitle;

            // Append the formatted information to the LAST work-entry element created
            $(".work-entry:last").append(employerWorkTitle);
            $(".work-entry:last").append(workLocation);
            $(".work-entry:last").append(dates);
            $(".work-entry:last").append(workDescription);
        }

    }

}

work.display();


projects.display = function() {
    if (projects.projects.length > 0) {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var projectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(projectTitle);
            $(".project-entry:last").append(projectDates);
            $(".project-entry:last").append(projectDescription);

            for (var img = 0; img < projects.projects[i].images.length; img++) {
                var projectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(projectImage);
            }


        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);
