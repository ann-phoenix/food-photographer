$(function () {

	let header = $('#header');
	let headerH = header.innerHeight();
	let scrollTop = $(window).scrollTop();
	let headerMenuToggle = $('#headerMenuToggle');
	let headerMenu = $('#header__menu');


	/* Smooth scroll to sections */
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		let scrollEl = $(this).data('scroll');
		let scrollElPos = $(scrollEl).offset().top;

		$('body').removeClass('show-header__menu');
		headerMenuToggle.removeClass('active');
		headerMenu.removeClass('show');

		$('html, body').animate({
			scrollTop: scrollElPos - headerH
		}, 800);
	});

	/*Vertical navigation and scrollspy*/
	//scrollSpy function
	function scrollSpy() {
		var sections = ['header', 'about', 'portfolio', 'services'];
		var current;

		for (var i = 0; i < sections.length; i++) {
			if ($('#' + sections[i]).offset().top <= $(window).scrollTop()) {
				current = sections[i];
			}
		}

		$("nav a[href='#" + current + "']").addClass('active');
		$("nav a").not("a[href='#" + current + "']").removeClass('active');
	}

	// smooth scrolling navigation
	$(document).ready(function () {
		var nav = $('.content-nav');
		if (nav.length) {
			var contentNav = nav.offset().top;
		}

		$('nav a').click(function () {
			var target = $(this.hash);
			if (target.length) {
				$('body, html').animate({

					scrollTop: $(target).offset().top
				}, 700);
				return false;
			};
		});

		// scrollSpy call
		$(document).ready(function () {
			scrollSpy();
		});

		$(window).scroll(function () {
			scrollSpy();
		});

	});
});