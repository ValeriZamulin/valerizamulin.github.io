$(document).ready(function(){
	$('.sidenav').sidenav();
	$(".slow-show").fadeTo(1200, 1);
	$('.tap-target').tapTarget();
});

// Collapsible for manual wizard
var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false,
});