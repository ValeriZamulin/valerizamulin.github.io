$(document).ready(function(){
	$('.slider').slider();
	$('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
	$('.datepicker').datepicker({
		autoClose: true,
		format: 'd mmmm, yyyy',
		firstDay: 1
	});
    $('.timepicker').timepicker({
        defaultTime: '12:00'
    });
    $('select').formSelect();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.scrollspy').scrollSpy({
    	activeClass: 'active',
    	scrollOffset: 65
    });
});