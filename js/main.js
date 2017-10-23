$(function() {
	var window_width = $(window).width();
	adaptiveMenu(window_width);

	$(window).resize(function(){
		window_width = $(window).width();
		adaptiveMenu(window_width);
	})

	$('#menu_button').click(function(){
		$('#main_nav').slideToggle();
	});

});

function adaptiveMenu(window_width){
	if (window_width < 800) {
		$('#main_nav').removeClass('nav-fill').addClass('flex-column').hide();
		$('.logo_slogan__container').addClass('align-items-center');
	}else{
		$('#main_nav').removeClass('flex-column').addClass('nav-fill').show();
		$('.logo_slogan__container').removeClass('align-items-center');
	}
}