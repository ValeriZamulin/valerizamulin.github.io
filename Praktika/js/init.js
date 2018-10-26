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

// Switvher in manual part of wizard - Open accardion if switch is enabled
function Switcher(i) {
	document.getElementById('switcher'+i).onchange = function(){
		if(this.checked){
			instance.open(i-1);
		} 
		else {
			instance.close(i-1);
			unCheckSeveral(i);
		}
	}		
}

/*******************TOASTS**********************/
// Toasts - show toast with info if checked
function Toast(name, id, classname) {
	if (document.getElementById(id).checked == true) {
		var func = "'"+id+"','"+classname+"'";
		var toastHTML = '<span>' +name+ '</span><button class="btn-flat toast-action" onclick="unCheck('+func+')">Отменить</button>';
		M.toast({
			html: toastHTML, 
			displayLength: 10000, 
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
function unCheck(id, classname) {
	document.getElementById(id).checked = false;
	Toast('noname', id);
	if (id.indexOf('0') > -1) {
		unCheckSeveral(classname);
	}
}
// Uncheck all checkboxes if switch is turned off
function unCheckSeveral(classname) {
	var boxes = document.getElementsByClassName(classname);
	for(var i = 0; boxes.length >= i; i++) {
		boxes[i].checked = false;
	}
}
// Check all checkboxes in this section if choosed "check all" checkbox
function checkSeveral(id, classname) {
	var boxes = document.getElementsByClassName(classname);
	for(var i = 0; boxes.length >= i; i++) {
		boxes[i].checked = true;
	}
}
function checkUncheck(id, classname) {
	if (document.getElementById(id).checked == true) {
		checkSeveral(id, classname);
	}
	else unCheckSeveral(classname);
}