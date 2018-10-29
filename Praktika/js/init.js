$(document).ready(function(){
	$('.sidenav').sidenav();
	$(".slow-show").fadeTo(1200, 1); // function for slow showing elements from transparent (time,opacity)
	$('.tap-target').tapTarget();
	$('.modal').modal();
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
			var boxes = document.getElementsByClassName(i);
			for(var z = 0; boxes.length >= z; z++) {
				boxes[z].checked = false;
				// Delete toast if present
				if (document.querySelector('.ch'+i)) {
					M.Toast.getInstance(document.querySelector('.ch'+i)).dismiss();
				}
			}
		}
	}		
}

/*******************TOASTS**********************/
// Toasts - show toast with info if checked
function Toast(name, id, classname) {
	var checkbox = document.getElementById(id);
	if (checkbox.checked == true) {
		var func = "'"+id+"'";
		var func2 = "'"+classname+"'";
		var toastHTML = '<span>' +name+ '</span><button class="btn-flat toast-action" onclick="unCheck('+func+','+func2+')">Отменить</button>';
		M.toast({
			html: toastHTML, 
			displayLength: 10000, 
			classes: 'ch'+classname + ' rounded ' + id,
		});
	}

	else {
		/*Find id of first checkbox*/
		var getname = id.replace(/[0-9]/g, '') + '0';
		var firstCheckbox = document.getElementById(getname);
		/*Uncheck fisrst checkbox with "Check All"*/
		if (firstCheckbox.checked == true) {
			document.getElementById(getname).checked = false;
			M.Toast.getInstance(document.querySelector('.'+getname)).dismiss();
		}
		/*Remove toast*/
		M.Toast.getInstance(document.querySelector('.'+id)).dismiss();
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
	for(var q = 1; q <= document.getElementsByClassName(i).length; q++ ) {
		M.Toast.getInstance(document.querySelector('.ch'+i)).dismiss();
	}
}

// Check all checkboxes in this section if choosed "check all" checkbox
function checkSeveral(id, classname) {
	var boxes = document.getElementsByClassName(classname);
	for(var i = 0; boxes.length >= i; i++) {
		boxes[i].checked = true;
	}
}

function checkUncheck(name, id, classname) {
	if (document.getElementById(id).checked == true) {
		Toast(name, id, classname);
		checkSeveral(id, classname);
	}

	else {
		if (document.querySelector('.ch'+classname)) {
			M.Toast.getInstance(document.querySelector('.ch'+classname)).dismiss();
		}
		var boxes = document.getElementsByClassName(classname);
		for(var i = 0; boxes.length >= i; i++) {
			boxes[i].checked = false;
		}
	}
}
// Not in use
function unChips(i) {
	for(var q = 1; q <= document.getElementsByClassName(i).length; q++ ) {
		M.Toast.getInstance(document.querySelector('.ch'+i)).dismiss();
	}
}

/**************************Tap Target (info icon) ********************************/
// Open info box
function getInfo(id) {
	// Open empty info box
	$('.tap-target').tapTarget('open');

	// Add text to info box
	switch(id) {
		case 1:
			var nameText = 'Text number 1';
			var descriptionText = 'Description number 1';
			break;
		case 2:
			var nameText = 'Text number 2';
			var descriptionText = 'Description number 2 Description number 2 Description number 2';
			break;
	}

	// Place text
	$("#info-name").replaceWith('<h5 id="info-name">' + nameText + '</h5>');
	$("#info-description").replaceWith('<p class="white-text" id="info-description">' + descriptionText + '</p>');
}



/************************************* Modal Windows *****************************************/
function openModal(id) {

	switch(id) {
		//************************FORMS************************//
		// Autocomplete
		case 'forms2':
			var header = "Autocomplete";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/autocomplete.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/autocomplete.html"></iframe>';
			break;

		// Checkboxes
		case 'forms4':
			var header = "Checkboxes";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/input-group/#checkboxes-and-radios">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/input-group/#checkboxes-and-radios"></iframe>';
			break;
		case 'forms5':
			var header = "Checkboxes";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/checkboxes.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/checkboxes.html"></iframe>';
			break;

		case 'forms6':
			var header = "Checkboxes";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/form">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/form"></iframe>';
			break;
		
		// Chips
		case 'forms8':
			var header = "Chips";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/chips.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/chips.html"></iframe>';
			break;

		// Pickers
		case 'forms11':
			var header = "Pickers";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/pickers.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/pickers.html"></iframe>';
			break;

		// Radiobuttons
		case 'forms13':
			var header = "Radiobuttons";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/input-group/#checkboxes-and-radios">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/input-group/#checkboxes-and-radios"></iframe>';
			break;
		case 'forms14':
			var header = "Radiobuttons";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/radio-buttons.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/radio-buttons.html"></iframe>';
			break;
		case 'forms15':
			var header = "Radiobuttons";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/form#layout">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/form#layout"></iframe>';
			break;

		// Range
		case 'forms16':
			var header = "Range";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/forms/#range-inputs">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/forms/#range-inputs"></iframe>';
			break;
		case 'forms17':
			var header = "Range";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/range.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/range.html"></iframe>';
			break;
		case 'forms18':
			var header = "Range";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/form">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/form"></iframe>';
			break;

		// Select
		case 'forms19':
			var header = "Select";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/input-group/#custom-select">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/input-group/#custom-select"></iframe>';
			break;
		case 'forms20':
			var header = "Select";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/select.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/select.html"></iframe>';
			break;
		case 'forms21':
			var header = "Select";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/form">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/form"></iframe>';
			break;

		// Switches
		case 'forms23':
			var header = "Select";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/switches.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/switches.html"></iframe>';
			break;

		// Text inputs
		case 'forms25':
			var header = "Text inputs";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/input-group/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/input-group/"></iframe>';
			break;
		case 'forms26':
			var header = "Text inputs";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/text-inputs.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/text-inputs.html"></iframe>';
			break;
		case 'forms27':
			var header = "Text inputs";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/form">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/form"></iframe>';
			break;

		// File browser
		case 'forms28':
			var header = "File browser";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/forms/#file-browser">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/forms/#file-browser"></iframe>';
			break;
		case 'forms29':
			var header = "File browser";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/text-inputs.html#file">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/text-inputs.html#file"></iframe>';
			break;
		case 'forms30':
			var header = "File browser";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/form#custom-controls">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/form#custom-controls"></iframe>';
			break;

	}






	

	$("#modal-header").replaceWith('<h4 id="modal-header">' + header + '</h4>');
	$("#modal-iframe").replaceWith(iframe);
	$("#modal-link").replaceWith(link);
    $('#modal').modal('open');
}