$(document).ready(function(){
	$('.slider').slider();
	$('.sidenav').sidenav();
	$('.datepicker').datepicker({
		autoClose: true,
		format: 'd mmmm, yyyy',
		firstDay: 1
	});
    $('.timepicker').timepicker();
    $('select').formSelect();
    $('.parallax').parallax();
    $('.carousel').carousel();
});