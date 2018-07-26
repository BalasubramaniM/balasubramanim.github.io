$(document).ready(function() {
	$(".workExp li").on("click", function() {
		$(this)
			.addClass("is-active")
			.siblings()
			.removeClass("is-active");

		switch (this.id) {
			case "zoho":
				$(".zoho")
					.show()
					.siblings()
					.hide();
				break;
			case "pearson":
				$(".pearson")
					.show()
					.siblings()
					.hide();
				break;
			case "nexmoo":
				$(".nexmoo")
					.show()
					.siblings()
					.hide();
				break;
		}
	});
});
