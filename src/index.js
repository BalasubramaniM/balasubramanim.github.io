document.addEventListener("DOMContentLoaded", function(event) {
	const INTEREST = [
		"Machine Learning",
		"ReactJs",
		"Redux",
		"Blockchain",
		"JavaScript",
		"HTML5",
		"CSS3",
		"NodeJs",
		"ExpressJs",
		"MongoDB"
	];

	const WORK_EXPERIENCE = {
		ZOHO: {
			ROLE: "Member Technical Staff",
			PERIOD: "06/2016 – Present",
			TASKS: [
				"Implemented JavaScript basics like Closures, Promises and self-invoking functions and has hands-on experience in DOM manipulation, event and object modelling and programming patterns.",
				"Developed a JavaScript library which converts Android XML tags into HTML tags and CSS styles (Mobile - Web conversion) and met deadlines consistently.",
				"Built an email sharing widget, similar to the Google docs sharing widget and has a working knowledge of Object Oriented and Functional JavaScript.",
				"Written test cases for front-end applications using Selenium, handled XSS scripting and trained one junior employee as part of my team.",
				"Created Progressive Web Apps (PWA) and has good experience in writing code in ES6/7 standards.",
				"Achieved MVC modelling and has a strong knowledge in common web design patterns."
			]
		},
		PEARSON: {
			ROLE: "Software Engineer",
			PERIOD: "11/2014 – 05/2016",
			TASKS: [
				"Created an SDK as a team which tracks all user's interactivity, similar to Google Analytics and an endpoint to collect user data.",
				"Handled social integrations and has a good understanding of asynchronous request handling, partial page updates, and AJAX.",
				"Configured projects using WebPack and holds a working knowledge of Gulp, Grunt and NPM.",
				"Have been part of a team in creating developer.english.com.",
				"Improved performance in cloudDNA (back-end) API.",
				"The Employee of the Month."
			]
		},
		NEXMOO: {
			ROLE: "Software Engineer",
			PERIOD: "04/2014 – 11/2014",
			TASKS: [
				"Implemented the entire search and categories section in Bharat Matrimony Windows Phone app.",
				"Worked on CricHQ engine to automate cricket scoring in Windows Phone app.",
				"One of the developers in SunTV Windows Phone app development."
			]
		}
	};

	let interestHTML = INTEREST.map(
		value => `<span class="tag">${value}</span>`
	);

	$(".workExp li").on("click", function() {
		$(this)
			.addClass("is-active")
			.siblings()
			.removeClass("is-active");

		let exp = WORK_EXPERIENCE[this.id];

		let tasks = exp.TASKS.map(task => `<li>- ${task}</li>`);

		document.getElementById("role").innerHTML = exp.ROLE;
		document.getElementById("period").innerHTML = exp.PERIOD;
		document.getElementById("tasks").innerHTML = tasks.join("");
	});

	document.getElementById("interest").innerHTML = interestHTML.join("");

	// WORK EXPERIENCE
	// Select first one by default during page load.
	$(".workExp li")[0].click();
});
