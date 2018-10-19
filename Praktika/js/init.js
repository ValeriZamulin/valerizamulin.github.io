$(document).ready(function(){
	$('.sidenav').sidenav();
	$(".slow-show").fadeTo(1200, 1);
	$('.tap-target').tapTarget();
});


/*********************ACCARDION******************/
// Collapsible for manual wizard
var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false,
});
// Disable accardion animation
instance.destroy();

// Checker in manual part of wizard - Open accardion if switch is enabled
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

/*******************TOASTS**********************/
// Toasts - show toast with info if checked
function Toast(name, id) {
	if (document.getElementById(id).checked == true) {
		var func = "'"+id+"'";
		var toastHTML = '<span>I am toast content' +name+ '</span><button class="btn-flat toast-action" onclick="unCheck('+func+')">Undo</button>';
		M.toast({
			html: toastHTML, 
			displayLength: 180000, 
			classes: 'rounded '+id,
		});
	}
	else {
		var toastElement = document.querySelector('.'+id);
		var toastInstance = M.Toast.getInstance(toastElement);
		toastInstance.dismiss();
	}
}
// Uncheck and delete toast if press Undo on toast
function unCheck(id) {
    document.getElementById(id).checked = false;
    Toast('noname', id);
}
