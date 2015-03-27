var main = function() {
	// Scroll cover to reveal text below
	var top = $('body');
	$('.down').click(function() {
		$('.long-text').ScrollTo({
			duration: 1500,
			erasing: 'linear'
		});
		setTimeout(function() {
			$('.logo, .logo a').addClass('logo-inverted');
		}, 1500);		
	});
	if($(document).scrollTop() !== -1) {
		console.log()
	}
	console.log($(document).scrollTop());

	// Keep logo visible during scrolling
	$(window).scroll(function() {
		
		// console.log(window.innerHeight);
	

		if($(document).scrollTop() > window.innerHeight) {
			$('.logo, .logo a').addClass('logo-inverted');
		}
		else if($(document).scrollTop() < window.innerHeight) {
			$('.logo').removeClass('logo-inverted');
		}
	});
};


$(document).ready(main);