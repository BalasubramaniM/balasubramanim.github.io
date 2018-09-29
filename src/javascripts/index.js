$(document).ready(function() {
	$(".certifications .margin-bottom-5").on("click", function() {
		switch (this.id) {
			case "certificate1":
				$(".certificate1")
					.addClass("is-active")
					.siblings()
					.removeClass("is-active");
				break;
			case "certificate2":
				$(".certificate2")
					.addClass("is-active")
					.siblings()
					.removeClass("is-active");
				break;
			case "certificate3":
				$(".certificate3")
					.addClass("is-active")
					.siblings()
					.removeClass("is-active");
				break;
		}
	});

	$(".modal-close").on("click", function() {
		$(this)
			.parent()
			.removeClass("is-active");
	});

	$(document).keyup(function(e) {
		if (e.keyCode === 27) $(".modal").removeClass("is-active"); // esc key handling
	});
});
