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
// Disable accardion animation
instance.destroy();

// Checker in manual part of wizard
function Switcher(i) {
	document.getElementById('switcher'+i).onchange = function(){
		if(this.checked){
			instance.open(i-1);
		} 
		else {
			instance.close(i-1);
		}
	}		
}

// Toasts
function Toast(name) {
	M.toast({html: name})
}