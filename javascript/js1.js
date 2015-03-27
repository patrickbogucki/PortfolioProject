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
		}
		else if($(document).scrollTop() < window.innerHeight) {
			$('.logo').removeClass('logo-inverted');
			$('.nav').removeClass('nav-fixed');
			$navVisible = false;
		}
	});

	var showNavBar = function() {
		// $('.logo, .logo a').addClass('logo-inverted');
		$('.nav').addClass('nav-fixed');
		if(!$navVisible) {
			$('.nav').hide();
			$('.nav').fadeIn('slow');
			$navVisible = true;
		}
	};
};




$(document).ready(main);