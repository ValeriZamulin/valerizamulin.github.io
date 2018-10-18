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


// Checker in manual part of wizard
var checker = document.getElementById('sw1');
// when unchecked or checked, run the function
checker.onchange = function(){
if(this.checked){
instance.open(3);
} 
else {

}
}	

instance.open(0);