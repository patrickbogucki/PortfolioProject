var main = function() {
	var temp = $('.long-text').scrollTop();
	var top = $('body');
	$('.down').click(function() {
		$('.long-text').ScrollTo({
			duration: 1500,
			erasing: 'linear'
		});		
	});
};


$(document).ready(main);