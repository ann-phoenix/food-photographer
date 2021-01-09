$(function () {

	let header = $('#header');
	let headerH = header.innerHeight();
	let scrollTop = $(window).scrollTop();
	let headerMenuToggle = $('#headerMenuToggle');
	let headerMenuToggleMobile = $('#headerMenuToggleMobile');
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
		let sections = ['header','about','portfolio','services'];
		let current;

		for (let i = 0; i < sections.length; i++) {
			if ($('#' + sections[i]).offset().top <= $(window).scrollTop()) {
				current = sections[i];
			}
		}

		$("nav a[href='#" + current + "']").addClass('active');
		$("nav a").not("a[href='#" + current + "']").removeClass('active');
	}

	// smooth scrolling navigation
	$(document).ready(function () {
		let nav = $('.content-nav');
		if (nav.length) {
			let contentNav = nav.offset().top;
		}

		$('nav a').click(function () {
			let target = $(this.hash);
			if (target.length) {
				$('body, html').animate({

					scrollTop: $(target).offset().top
				}, 700);
				return false;
			}
		});

		// scrollSpy call
		$(document).ready(function () {
			scrollSpy();
		});

		$(window).scroll(function () {
			scrollSpy();
		});

	});

	 /*Burger*/
	 headerMenuToggle.on('click', function (event) {
    event.preventDefault();
		$('body').toggleClass('show-header__menu');
    $(this).toggleClass('active');
    headerMenu.toggleClass('show');
	});

	headerMenuToggleMobile.on('click', function (event) {
    event.preventDefault();
		$('body').toggleClass('show-header__menu');
    $(this).toggleClass('active');
    headerMenu.toggleClass('show');
	});

	$(window).on('resize', function () {
		$('body').removeClass('show-header__menu');
		headerMenuToggle.removeClass('active');
		headerMenuToggleMobile.removeClass('active');
    headerMenu.removeClass('show');
  });


});