var resumeApp = angular.module('resumeApp', []);

resumeApp.controller('PersonController', function ($scope) {
	var self = {
		name: "Kyle Stevenson",
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
			dates: { start: "June 2014", end: "March 2015" },
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
			description: "Optimized social media analytics metric generation.",
			title: "Software Engineer"
		},
		{
			company: { name: "Kyle Stevenson LLC", color: "none" },
			dates: { start: "June 2011", end: "February 2014" },
			description: "Created custom software solutions for a myriad of clients across many domains of problems.",
			title: "Software Engineer"
		},
		{
			company: { name: "Department of Veterans Affairs", color: "none" },
			dates: { start: "July 2010", end: "September 2012" },
			description: "Implemented inventory management API and UI.",
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
			description: "Which Course for Me is a web application providing current, consumable information about courses offered at Oregon State University. Conveniently, there are interfaces for both humans (Bootstrap + AngularJS), and for machines (JSON API)!",
			image: {
				src: "https://i.imgur.com/CSZw6m7.png",
				href: "https://which-course-for.me"
			}
		},
		{
			title: "Map the Yak!",
			description: "Map the Yak maps Yik Yak posts in near real time, showing use of the app via heatmap timelapses across variouses universities in the USA.",
			image: {
				src: "https://i.imgur.com/akBj3FV.png",
				href: "https://medium.com/@kylestev/the-yak-is-a-hack-bcf1616f1195"
			}
		},
		{
			title: "VNC Open Season",
			description: "What happens when you leave VNC open to the public? Which countries have the highest density of vulnerable servers? Read to find out!",
			image: {
				src: "https://i.imgur.com/pgpG6TH.png",
				href: "https://medium.com/@kylestev/open-season-on-vnc-servers-around-the-world-4b89a0f8d992"
			}
		},
		{
			title: "Prison Architect Editor",
			description: "Simple Python module for accessing Prison Architect save files.",
			image: {
				src: "https://i.imgur.com/l12tJGN.png",
				href: "https://github.com/kylestev/prisonarchitect"
			}
		},
		// {
		// 	title: "Java Bytecode Manipulator (jbcm)",
		// 	description: "jbcm is a Python module that allows programatic access to the internals of Java Virtual Machine Classfiles.",
		// 	image: {
		// 		src: "https://i.imgur.com/9xQKzC6.png",
		// 		href: "https://github.com/kylestev/jbcm"
		// 	},
		// 	repo: "https://github.com/kylestev/jbcm"
		// }
	];

	$scope.getProjects = function () {
		return projects;
	};
});

resumeApp.controller('HobbyController', function ($scope) {
	var hobbySections = [
		{
			name: "Favorite Books",
			hobbies: [
				"Ender's Game Series",
				"Foundation Series",
				"Next of Kin",
			]
		},
		{
			name: "Physical Activities",
			hobbies: [
				"Racquetball",
				"Biking",
				"Running",
			]
		},
		{
			name: "Fun Puzzles",
			hobbies: [
				"Rubik's Cube (< 60s solves)",
				"Pyraminx (< 20s solves)",
				"2x2 Cube (< 30s solves)",
			]
		},
		{
			name: "Programming Languages and Frameworks",
			hobbies: [
				"Python, Flask",
				"Java, bytecode, ASM 4",
				"PHP, HHVM, Laravel 5",
				"JavaScript, Node JS, AngularJS",
			]
		},
		{
			name: "Selected Topics in Computing",
			hobbies: [
				"Large System Design",
				"Application Security",
				"Penetration Testing",
				"Reverse Engineering",
				"Distributed Systems",
				"Software Architecture",
				"High Performance Computing",
			]
		},
		{
			name: "Software Engineering Practices",
			hobbies: [
				"Behavior-Driven Development",
				"Dependency Injection",
				"Inversion of Control",
			]
		}
	];

	$scope.getHobbySections = function () {
		return hobbySections;
	}
});
