var resumeApp = angular.module('resumeApp', []);

resumeApp.controller('PersonController', function ($scope) {
	var self = {
		name: "Kyle Stevenson",
		major: "Computer Science",
		year: "Sophomore",
		school: "Oregon State University",
		image: {
			src: "img/me.jpg"
		},
		email: {
			username: "kyle",
			domain: "kylestevenson.me"
		}
	};

	var socialIcons = [
		{ src: "img/icons/octocat.svg",  href: "https://github.com/kylestev" },
		{ src: "img/icons/linkedin.png", href: "http://linkedin.com/in/kylestev" },
		{ src: "img/icons/twitter.svg",  href: "https://twitter.com/kylestev" },
		{ src: "img/icons/gplus.svg",    href: "https://plus.google.com/+KyleStevenson-kylestev/posts" }
	];

	$scope.me = self;

	$scope.getSocialIcons = function () {
		return socialIcons;
	};
});

resumeApp.controller('JobController', function ($scope) {
	var jobs = [
		{
			company: { name: "Rackspace", color: "red" },
			dates: { start: "June 2014" },
			// "description": "Contributed to <a href=\"https://github.com/openstack/ironic\">Open Source software</a> that quickly provisions physical hardware for customers.",
			description: "Contributed to Open Source software that quickly provisions physical hardware for customers.",
			title: "Software Engineer Intern",
			bullets: [
				"Contributed to Open Source software that provisions physical hardware for customers.",
				"Implemented metrics collection for viewing resource utilization and customer adoption over time.",
				"Created dashboard for viewing the status of physical nodes across datacenters resulting in operations engineers being able to easily pinpoint anomalous nodes"
			]
		},
		{
			company: { name: "Intel", color: "blue" },
			dates: { start: "June 2013", end: "March 2014" },
			// "description": "Focused on <abbr title="High Performance Computing">HPC</abbr> and Cluster software stack internals.",
			description: "Focused on High Performance Computing and Cluster software stack internals.",
			title: "Software Engineer Intern"
		},
		{
			company: { name: "OSU", color: "orange" },
			dates: { start: "April 2013", end: "June 2013" },
			// "description": "Lead office hours and graded assignments of students in Accelerated Introduction to Computer Science (<a href="https://which-course-for.me/CS165">CS165</a>).",
			description: "Lead office hours and graded assignments of students in Accelerated Introduction to Computer Science (CS165).",
			title: "Undergraduate Teaching Assistant"
		},
		{
			company: { name: "OSU Open Source Lab", color: "orange" },
			dates: { start: "February 2013", end: "April 2013" },
			// "description": "Patched bugs for a piece of Open Source, <a href="http://ganeti-webmgr.readthedocs.org/en/latest/">cluster virtual server management software</a>.",
			description: "Patched bugs for a piece of Open Source, cluster virtual server management software.",
			title: "Student Developer"
		},
		{
			company: { name: "BlitzLocal", color: "blue" },
			dates: { start: "July 2012", end: "October 2012" },
			description: "Optimization of social media analytics metric generation.",
			title: "Software Engineer"
		},
		{
			company: { name: "Kyle Stevenson LLC", color: "none" },
			dates: { start: "June 2011", end: "February 2014" },
			description: "Custom software solutions for a myriad of clients across many domains of problems.",
			title: "Software Engineer"
		},
		{
			company: { name: "Department of Veterans Affairs", color: "none" },
			dates: { start: "July 2010", end: "September 2012" },
			description: "Created inventory management API and UI in C#.",
			title: "STEP Student (Intern)"
		}
	];

	$scope.getJobs = function () {
		return jobs;
	};

	$scope.printDates = function (job) {
		if ( ! ("end" in job.dates)) {
			return job.dates.start + " - Present";
		}

		return job.dates.start + " - " + job.dates.end;
	};
});

resumeApp.controller('ProjectController', function ($scope) {
	var projects = [
		{
			title: "Which Course For Me",
			description: "Which Course for Me is a web application providing current, consumable information about course information at Oregon State University. Conveniently, there are interfaces for both humans (Bootstrap + AngularJS), and for machines (JSON API)!",
			image: {
				src: "https://i.imgur.com/SU6wXSd.png",
				href: "https://which-course-for.me"
			}
		},
		{
			title: "Java Bytecode Manipulator (jbcm)",
			description: "jbcm is a Python module that allows programatic access to the internals of Java Virtual Machine Classfiles.",
			image: {
				src: "https://i.imgur.com/9xQKzC6.png",
				href: "https://github.com/kylestev/jbcm"
			},
			repo: "https://github.com/kylestev/jbcm"
		}
	];

	$scope.getProjects = function () {
		return projects;
	};
});
