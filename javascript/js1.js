var main = function() {
	// Scroll cover to reveal text below
	var $navVisible = false;
	$('.down').click(function() {
		$('.long-text').ScrollTo({
			duration: 1500,
			erasing: 'linear'
		});
		setTimeout(function() {
			// $('.logo, .logo a').addClass('logo-inverted');
			showNavBar();
		}, 1500);		
	});
	if($(document).scrollTop() !== -1) {
		console.log()
	}
	console.log($(document).scrollTop());

	// Keep logo visible during scrolling
	
	$(window).scroll(function() {
		// Actions to perform when cover has scrolled
		// out of sight
		if($(document).scrollTop() > window.innerHeight) {
			showNavBar();
			$('.back-to-top').fadeIn();
		}
		else if($(document).scrollTop() < window.innerHeight) {
			$('.logo').removeClass('logo-inverted');
			$('.nav-container').removeClass('nav-fixed');
			$navVisible = false;

			$('.back-to-top').fadeOut();
		}

		// Increase loadbar during scrolling by changing
		// the css width value
		$('.progress-bar').css('width', function() {
			return ($(document).width() * ($(document).scrollTop() / ($(document).height() - window.innerHeight)));
		});

	});

	var showNavBar = function() {
		// $('.logo, .logo a').addClass('logo-inverted');
		$('.nav-container').addClass('nav-fixed');
		if(!$navVisible) {
			$('.nav-container').hide();
			$('.nav-container').fadeIn('slow');
			$navVisible = true;
		}
	};


	$('.info').slideUp(200);
	// Slide up info panel on project previews on hover
	$('.project').mouseenter(function() {
		$(this).children('.info').stop().slideDown(200);
	});
	$('.project').mouseleave(function() {
		$('.info').stop().slideUp(200);
	});

	// TODO have gallery items fade in when scrolling and their
	// area comes in view


	// Menu that slides in from the side when logo is clicked
	// Commented areas also slide body so menu doesn't cover it
	var menuOpen = false;
	$('.logo').click(function() {
		var menuWidth = $('.menu-panel').width();
		if(!menuOpen) {
			// $('body').animate({
			// 		left: '' + menuWidth + 'px'
			// 	}, 300);
			$('.menu-panel').stop().animate({
				left: '0px'
				}, 300);
			menuOpen = true;
		}
		else if(menuOpen) {
			// $('body').animate({
			// 		left: '0px'
			// 	}, 300);
			$('.menu-panel').stop().animate({
				left: '-' + menuWidth + 'px'
				}, 300);
			menuOpen = false;
			$('.menu-item-submenu').slideUp();
		}
	});


	// Waypoints - nav items become underlined when their
	// div area takes up more than 50% of the screen.
	var waypointPortfolio = new Waypoint({
		element: $('.gallery-container'),
		handler: function(direction) {
			if(direction === 'down') {
				$('.nav-item-portfolio').addClass('nav-item-inview')
			}
			else if(direction === 'up') {
				$('.nav-item-portfolio').removeClass('nav-item-inview')
			}
		},
		offset: '50%'
	});


	// Open submenus in side popup menu
	$('.menu-item').click(function() {
		$(this).next().stop().slideToggle('slow');
	});

	$('.back-to-top').click(function() {
		$('.site').ScrollTo({
			duration: 1500,
			erasing: 'linear'
		});
	});

};




$(document).ready(main);