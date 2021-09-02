$(document).ready(function () {
	// Segment: Sticky Navigation
	const touchScreen = "ontouchstart" in window;
	const offsetRem = touchScreen ? 8 : 8;

	function convertRemToPixels(rem) {
		return (
			rem *
			parseFloat(getComputedStyle(document.documentElement).fontSize)
		);
	}
	const offset = convertRemToPixels(offsetRem);

	$(`.section-about`).waypoint(
		function (direction) {
			if (direction === `down`) $(`nav`).addClass(`sticky`);
			else $(`nav`).removeClass(`sticky`);
		},
		{ offset: `${offset}px` }
	);

	// Segment: Smooth Scrolling
	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			if (
				location.pathname.replace(/^\//, "") ==
					this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length
					? target
					: $("[name=" + this.hash.slice(1) + "]");
				if (target.length) {
					event.preventDefault();

					$("html, body").animate(
						{
							scrollTop: target.offset().top - offset
						},
						1000
					);
				}
			}
		});

	// Segment: Preventing element resize on keyboard opening on mobile
	setTimeout(function () {
		const viewheight = $(window).height();
		const viewwidth = $(window).width();
		const viewport = $("meta[name=viewport]");
		viewport.attr(
			"content",
			"height=" +
				viewheight +
				"px, width=" +
				viewwidth +
				"px, initial-scale=1.0"
		);
	}, 300);
});
