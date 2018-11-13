$(document).ready(function(){
	$('.sidenav').sidenav();
	$(".slow-show").fadeTo(1200, 1); // function for slow showing elements from transparent (time,opacity)
	$('.tap-target').tapTarget();
	$('.modal').modal();
	$('.scrollspy').scrollSpy({scrollOffset: 210});
	$('.tooltipped').tooltip({enterDelay: 310});
	$('.pushpin').pushpin({top: 438, bottom: 5800});
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
			// Show sidenav element
			//document.getElementById('show-sidenav-'+i).style.display = 'block';
			// Change sidenav link to switcher if block disabled
			//$("#show-sidenav-"+i).replaceWith('<li id="show-sidenav-'+i+'"><a href="#block-'+i+'">Формы</a></li>');
			$("#show-sidenav-"+i).attr("href", "#block-"+i);

		}
		else {
			instance.close(i-1);
			// Hidde sidenav element
			//document.getElementById('show-sidenav-'+i).style.display = 'none';
			// Change sidenav link to switcher if block disabled
			//$("#show-sidenav-"+i).replaceWith('<li id="show-sidenav-1"><a href="#switcher'+i+'">Формы</a></li>');
			$("#show-sidenav-"+i).attr("href", "#switcher"+i);
			// Remove active class if block not in use
			$("#show-sidenav-"+i).removeClass("active");
			// Uncheck all block components if switch is off
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
		var toastHTML = '<span class="white-text">' +name+ '</span><button class="btn-flat toast-action" onclick="unCheck('+func+','+func2+')">Отменить</button>';
		M.toast({
			html: toastHTML,
			displayLength: 5000,
			classes: 'ch' + classname + ' rounded ' + id,
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
		// First block
		case 1:
			var nameText = 'Autocomplete<br><span class="infobox-description white-text">Автозаполнение для окна ввода</span>';
			var descriptionText = 'Занесите в список слова, которые будут предлагаться при заполнении текстового поля.';
			break;
		case 2:
			var nameText = 'Checkboxes<br><span class="infobox-description white-text">Элемент для выбора из списка</span>';
			var descriptionText = 'Элемент графического пользовательского интерфейса, позволяющий пользователю управлять параметром с двумя состояниями — ☑ включено и ☐ выключено. Во включённом состоянии внутри чекбокса отображается отметка (галочка (✓))';
			break;
		case 3:
			var nameText = 'Chips<br><span class="infobox-description white-text">Небольшие блоки информации</span>';
			var descriptionText = 'Могут использоваться для представления небольших блоков информации. Чаще всего используются для контактов, либо для тегов.';
			break;
		case 4:
			var nameText = 'Pickers<br><span class="infobox-description white-text">Выбор даты или времени из интерактивного меню</span>';
			var descriptionText = 'Позволяет пользователям выбтрать дату из стилизованного интерактивного календаря и время из интерактивных часов';
			break;
		case 5:
			var nameText = 'Radio buttons<br><span class="infobox-description white-text">Элемент для выбора из списка</span>';
			var descriptionText = 'Кнопки «Радио» используются, когда пользователь должен сделать только один выбор из группы элементов.';
			break;
		case 6:
			var nameText = 'Range<br><span class="infobox-description white-text">Диапазон значений</span>';
			var descriptionText = 'Ползунок для значений с широким диапазоном.';
			break;
		case 7:
			var nameText = 'Select<br><span class="infobox-description white-text">Выбор из выпадающего списока</span>';
			var descriptionText = 'Позволяет делать выбор пользователю через указанные параметры';
			break;
		case 8:
			var nameText = 'Switches<br><span class="infobox-description white-text">Переключатель (Выкл/Вкл)</span>';
			var descriptionText = 'Чтобы включить или выключить тумблер, нужно перетащить движок тумблера в ту или иную сторону. ';
			break;
		case 9:
			var nameText = 'Text Inputs<br><span class="infobox-description white-text">Поле ввода для текста</span>';
			var descriptionText = 'Служит для ввода информации, такой как имя пользователя, пароль, электронный адрес и т.п.';
			break;
		case 10:
			var nameText = 'File browser<br><span class="infobox-description white-text">Элемент для выбора файла с компьютера</span>';
			var descriptionText = 'Стилизованный элемент с помощью которого можно прикрепить файл для отправки.';
			break;
		case 11:
			var nameText = 'Input group<br><span class="infobox-description white-text">Поля для ввода с добавленной информацией</span>';
			var descriptionText = 'Легко расширяйте элементы управления форматом, добавляя текст, кнопки или группы кнопок с обеих сторон текстовых полей ввода.';
			break;
		// Second block
		case 20:
			var nameText = 'Alerts<br><span class="infobox-description white-text">Предупредительное сообщение</span>';
			var descriptionText = 'Обратная связь для пользователя с помощью доступного и гибкого предупреждающего сообщения.';
			break;
		case 21:
			var nameText = 'Animation<br><span class="infobox-description white-text">Анимация объектов</span>';
			var descriptionText = 'Коллекция гладких анимаций для блоков для использования на вашей странице.';
			break;
		case 22:
			var nameText = 'Article<br><span class="infobox-description white-text">Создание статей</span>';
			var descriptionText = 'Служит для создания стилизованных статей на вашей странице';
			break;
		case 23:
			var nameText = 'Auto init<br><span class="infobox-description white-text">Инициализация компонентов</span>';
			var descriptionText = 'Инициализация всех компонентов с помощью одного вызова функции';
			break;
		case 24:
			var nameText = 'Background<br><span class="infobox-description white-text">Задний фон</span>';
			var descriptionText = 'Добавление фона с различными эффектами в элементы';
			break;
		case 25:
			var nameText = 'Badges/Label<br><span class="infobox-description white-text">Значки уведомлений</span>';
			var descriptionText = 'Значки могут уведомить вас о появлении новых или непрочитанных сообщений или уведомлений.';
			break;
		case 26:
			var nameText = 'Breadcrumb<br><span class="infobox-description white-text">Вспомогательная навигация</span>';
			var descriptionText = 'Хороший способ отобразить ваше текущее местоположение. Обычно это используется, когда у вас несколько слоев контента.';
			break;
		case 27:
			var nameText = 'Button group<br><span class="infobox-description white-text">Сгрупированый ряд кнопок</span>';
			var descriptionText = 'Группируйте вместе ряд кнопок на одной строке.';
			break;
		case 28:
			var nameText = 'Buttons<br><span class="infobox-description white-text">Кнопки</span>';
			var descriptionText = 'Стилизованные кнопки для действий, используются в формах, диалогох и т.д';
			break;
		case 29:
			var nameText = 'Cards<br><span class="infobox-description white-text">Гибкий контейнер</span>';
			var descriptionText = 'Удобное средство отображения контента, состоящего из разных типов объектов.';
			break;
		case 30:
			var nameText = 'Carousel<br><span class="infobox-description white-text">Слайд-шоу</span>';
			var descriptionText = 'Слайд-шоу для циклирования  элементов';
			break;
		case 31:
			var nameText = 'Collapse<br><span class="infobox-description white-text">Переключатель видимости контента</span>';
			var descriptionText = 'Это элементы расширяемый при нажатии. Он позволяет скрывать контент, который не имеет непосредственного отношения к пользователю.';
			break;
		case 32:
			var nameText = 'Comment<br><span class="infobox-description white-text">Стили для комментариев</span>';
			var descriptionText = 'Стилизованный блок комментариев для сайта.';
			break;
		case 33:
			var nameText = 'Countdown<br><span class="infobox-description white-text">Обратный счётчик времени</span>';
			var descriptionText = 'Обратный счётчик времени используется для временных скидок или компаний, также для информирования об оставшемся времени до открытия сайта и т.п.';
			break;
		case 34:
			var nameText = 'Description list<br><span class="infobox-description white-text">Списки с описанием</span>';
			var descriptionText = 'Служит для создания красивых списков с описанием.';
			break;
		case 35:
			var nameText = 'Dotnav<br><span class="infobox-description white-text">Точечная навигация</span>';
			var descriptionText = 'Создайте точечную навигацию для управления слайд-шоу или для перехода к различным разделам страницы.';
			break;
		case 36:
			var nameText = 'Drop<br><span class="infobox-description white-text">Выпадающий элемент</span>';
			var descriptionText = 'Для создания одного выподающего элемента по отношению к другому элементу при наведении или нажатии на него.';
			break;
		case 37:
			var nameText = 'Dropdowns<br><span class="infobox-description white-text">Раскрывающийся список</span>';
			var descriptionText = 'Добавьте раскрывающийся список на любую кнопку';
			break;
		case 38:
			var nameText = 'FeatureDiscovery<br><span class="infobox-description white-text">Окно с подсказкой</span>';
			var descriptionText = 'Стилизованное окно оповещения, служит для подсказок в случае нехватки информации.';
			break;
		case 39:
			var nameText = 'Filter<br><span class="infobox-description white-text">Сортировка элементов по метаданным</span>';
			var descriptionText = 'Любой макет может быть отфильтрован или отсортирован независимо от расположения. Элементы исчезают и перемещаются с плавными переходами между различными состояниями фильтрации и сортировки.';
			break;
		case 40:
			var nameText = 'Floating Action Button<br><span class="infobox-description white-text">Кнопка с выпадающими иконками</span>';
			var descriptionText = 'Кнопка фиксированного плавающего действия, вы можете добавить несколько действий, которые будут отображаться при наведении.';
			break;
		case 41:
			var nameText = 'Footer<br><span class="infobox-description white-text">Нижний колонтитул</span>';
			var descriptionText = 'Компонент содержащий дополнительную или дублирующую навигацию и информацию на сайте в конце страницы';
			break;
		case 42:
			var nameText = 'Iconnav<br><span class="infobox-description white-text">Навигация из иконок</span>';
			var descriptionText = 'Навигация из иконок служит для дополнительных возможностей в навигации или в случае отсутствия места для навигации, например на мобильных устройствах';
			break;
		case 43:
			var nameText = 'Icons<br><span class="infobox-description white-text">Иконки</span>';
			var descriptionText = 'Легко подключаемые стилизованные под дизайн фреймворка иконки.';
			break;
		case 44:
			var nameText = 'Image<br><span class="infobox-description white-text">Изображение</span>';
			var descriptionText = 'Ускорьте время загрузки страницы и уменьшайте трафик, загружая только изображения, когда они входят в область просмотра.';
			break;
		case 45:
			var nameText = 'Leader<br><span class="infobox-description white-text">Строчная привязка к тексту</span>';
			var descriptionText = 'Чаще всего используется в меню ресторана, между блюдами и ценами, а также для оглавлений, между названиями и номерами страниц.';
			break;
		case 46:
			var nameText = 'Lightbox<br><span class="infobox-description white-text">Отзывчивая галерея</span>';
			var descriptionText = 'Отзывчивая стилизованная галерея для изображений и видео';
			break;
		case 47:
			var nameText = 'List group/Collections<br><span class="infobox-description white-text">Группированный список</span>';
			var descriptionText = 'Используется в основном для отображения серии контента';
			break;
		case 48:
			var nameText = 'Marker<br><span class="infobox-description white-text">Значок маркера</span>';
			var descriptionText = 'Создайте значок маркера, который может отображаться поверх изображений.';
			break;
		case 49:
			var nameText = 'Modal<br><span class="infobox-description white-text">Модальное диалоговое окно</span>';
			var descriptionText = 'Всплывающее диалоговое окно для подтверждения действий или отображения другого контента';
			break;
		case 50:
			var nameText = 'Nav<br><span class="infobox-description white-text">Навигация по спискам</span>';
			var descriptionText = 'Вспомагательная навигация по списку.';
			break;
		case 51:
			var nameText = 'Navbar<br><span class="infobox-description white-text">Панель навигации по сайту</span>';
			var descriptionText = 'Основная навигация по сайту';
			break;
		case 52:
		var nameText = 'Notification/Toasts<br><span class="infobox-description white-text">Уведомления</span>';
			var descriptionText = 'Ненавязчивые, автоматически исчезающие уведомления';
			break;
		case 53:
			var nameText = 'Overlay<br><span class="infobox-description white-text">Накладываемый слой</span>';
			var descriptionText = 'Накладываемый слой на изображение с различными стилями';
			break;
		case 54:
			var nameText = 'Pagination<br><span class="infobox-description white-text">Навигация по страницам</span>';
			var descriptionText = 'Добавьте ссылки на страницы, чтобы помочь разделить ваш длинный контент на более короткие, понятные блоки.';
			break;
		case 55:
			var nameText = 'Image<br><span class="infobox-description white-text">Изображение</span>';
			var descriptionText = '';
			break;
		case 56:
			var nameText = 'Parallax<br><span class="infobox-description white-text">Анимация фонового содержимого</span>';
			var descriptionText = 'Эффект, при котором фоновое содержимое или изображение в этом случае перемещаются с другой скоростью, чем содержимое переднего плана во время прокрутки.';
			break;
		case 57:
			var nameText = 'Placeholder<br><span class="infobox-description white-text">Размеченное пространство</span>';
			var descriptionText = 'Создайте размеченное пространство, которое можно использовать для загрузки файлов с помощью перетаскивания.';
			break;
		case 58:
			var nameText = 'Popovers<br><span class="infobox-description white-text">Всплывающие подсказки</span>';
			var descriptionText = 'Всплывающие подсказки подобных тем, которые используются в iOS, к любому элементу вашего сайта.';
			break;
		case 59:
			var nameText = 'Progress/Preloader<br><span class="infobox-description white-text">Индикатор выполнения</span>';
			var descriptionText = 'Служит для обратной связи с пользователем в случае если у вас есть контент, требующий много времени для загрузки.';
			break;
		case 60:
			var nameText = 'Pushpin<br><span class="infobox-description white-text">Плагин позиционирования</span>';
			var descriptionText = 'Используется для привязки элементов к своей странице во время определенных диапазонов прокрутки.';
			break;
		case 61:
			var nameText = 'Scrollspy/Scroll<br><span class="infobox-description white-text">Перемещение по странице</span>';
			var descriptionText = 'Дополнительная навигация, которая отслеживает тот элемент, на котором в данный момент находится экран пользователя.';
			break;
		case 62:
			var nameText = 'Scrollspy<br><span class="infobox-description white-text">Плавное появление элементов</span>';
			var descriptionText = 'Плавное появление элементов при пролистывании страницы';
			break;
		case 63:
			var nameText = 'Search<br><span class="infobox-description white-text">Окно поиска</span>';
			var descriptionText = 'Стилизованное окошко для поиска';
			break;
		case 64:
			var nameText = 'Section<br><span class="infobox-description white-text">Раздел горизонтальной компоновки</span>';
			var descriptionText = 'Создавайте разделы горизонтальной компоновки с разными цветами фона и стилями.';
			break;
		case 65:
			var nameText = 'Sidenav/Off-canvas<br><span class="infobox-description white-text">Боковое меню</span>';
			var descriptionText = 'Выпадающее боковое меню, в основном используется для мобильной навигации или для дополнительной информации';
			break;
		case 66:
			var nameText = 'Slidenav<br><span class="infobox-description white-text">Навигация для слайд-шоу</span>';
			var descriptionText = 'Элементы навигации для слайд-шоу (стилизованные стрелки влево и вправо)';
			break;
		case 67:
			var nameText = 'Sortable <br><span class="infobox-description white-text">Сортировка</span>';
			var descriptionText = 'Создайте сортируемые сетки и списки для изменения порядока элементов.';
			break;
		case 68:
			var nameText = 'Spinner/Circular<br><span class="infobox-description white-text">Значок загрузки</span>';
			var descriptionText = 'Стилизованный анимированный значок загрузки';
			break;
		case 69:
			var nameText = 'Sticky<br><span class="infobox-description white-text">Липкий элемент</span>';
			var descriptionText = 'Элементы остаются в верхней части окна просмотра, как липкая навигация.';
			break;
		case 70:
			var nameText = 'Subnav<br><span class="infobox-description white-text">Вспомогательная навигация</span>';
			var descriptionText = 'Стилизованный компонент для дополнительной навигации';
			break;
		case 71:
			var nameText = 'SVG<br><span class="infobox-description white-text">Векторные изображения</span>';
			var descriptionText = 'Внесите встроенные SVG-изображения в разметку страницы и стилизуйте их с помощью CSS.';
			break;
		case 72:
			var nameText = 'Switcher<br><span class="infobox-description white-text">Динамическая смена элемента</span>';
			var descriptionText = 'Динамический переход через различные панели контента.';
			break;
		case 73:
			var nameText = 'Tabs<br><span class="infobox-description white-text">Вкладки</span>';
			var descriptionText = 'Вкладки служат для структурирования контента.';
			break;
		case 74:
			var nameText = 'Thumbnav<br><span class="infobox-description white-text">Навигация по картинкам</span>';
			var descriptionText = 'В основном используется как навигация для галереи.';
			break;
		case 75:
			var nameText = 'Tile<br><span class="infobox-description white-text">Стилизованный коньейнер</span>';
			var descriptionText = 'Контейнеры с разными фонами, которые можно легко размещать рядом друг с другом.';
			break;
		case 76:
			var nameText = 'Toggle<br><span class="infobox-description white-text">Переключатель содержимого</span>';
			var descriptionText = 'Скройте, переключите или измените внешний вид содержимого с помощью переключателя.';
			break;
		case 77:
			var nameText = 'Tooltips<br><span class="infobox-description white-text">Подсказки</span>';
			var descriptionText = 'Всплывающие подсказки в основном используются с кнопками.';
			break;
		case 78:
			var nameText = 'Totop<br><span class="infobox-description white-text">Прокрутка к началу страницы</span>';
			var descriptionText = 'Кнопка с функцией плавной прокрутки к началу страницы';
			break;
		case 79:
			var nameText = 'Upload<br><span class="infobox-description white-text">Загрузка файлов</span>';
			var descriptionText = 'Размеченное пространство для загрузки файлов.';
			break;
		case 80:
			var nameText = 'Video<br><span class="infobox-description white-text">Контейнер для видео</span>';
			var descriptionText = 'Стилизованный, адаптивный контейнер для воспроизведения видео';
			break;

		// Third block
		case 101:
			var nameText = 'Align<br><span class="infobox-description white-text">Расположение контента</span>';
			var descriptionText = 'Простые в использовании классы, которые помогут вам выровнять ваш контент.';
			break;
		case 102:
			var nameText = 'Border-radius/Circular images<br><span class="infobox-description white-text">Закругление краёв картинки</span>';
			var descriptionText = 'Классы к элементу, чтобы легко закруглить его углы.';
			break;
		case 103:
			var nameText = 'Borders<br><span class="infobox-description white-text">Граница элемента</span>';
			var descriptionText = 'Классы для создания границ элемента. Отлично подходит для изображений, кнопок или любого другого элемента.';
			break;
		case 104:
			var nameText = 'Close<br><span class="infobox-description white-text">Иконка для закрытия</span>';
			var descriptionText = 'Стилизованная кнопка закрытия элемента';
			break;
		case 105:
			var nameText = 'Color<br><span class="infobox-description white-text">Цветовая палитра</span>';
			var descriptionText = 'Подобранная палитра цветов для элементов и текста';
			break;
		case 106:
			var nameText = 'Column<br><span class="infobox-description white-text">Колонка</span>';
			var descriptionText = 'Разбитие текста по столбцам в одном контейнере ';
			break;
		case 107:
			var nameText = 'Container<br><span class="infobox-description white-text">Контейнер</span>';
			var descriptionText = 'Основной элемент компоновки, требуются при использовании сетки по умолчанию.';
			break;
		case 108:
			var nameText = 'Cover<br><span class="infobox-description white-text">Фон для контейнера</span>';
			var descriptionText = 'Разверните изображения, видео или фреймы, чтобы покрыть весь контейнер и разместить свой собственный контент сверху.';
			break;
		case 109:
			var nameText = 'Divider<br><span class="infobox-description white-text">Разделитель</span>';
			var descriptionText = 'Стилизованный разделитель';
			break;
		case 110:
			var nameText = 'Flex<br><span class="infobox-description white-text">Плагин позиционирования</span>';
			var descriptionText = 'Быстрое управление компоновкой, выравниванием и размером столбцов сетки, навигации, компонентов и т.д.';
			break;
		case 111:
			var nameText = 'Grid<br><span class="infobox-description white-text">Адаптивная сетка</span>';
			var descriptionText = 'Мощная мобильная сетка для построения макетов всех форм и размеров благодаря двенадцатиколоночной системе.';
			break;
		case 112:
			var nameText = 'Heading<br><span class="infobox-description white-text">Заголовок</span>';
			var descriptionText = 'Различные стили для заголовка';
			break;
		case 113:
			var nameText = 'Height<br><span class="infobox-description white-text">Высота элементов</span>';
			var descriptionText = 'Определитель высоты элементов в зависимости от вида экрана.';
			break;
		case 114:
			var nameText = 'Image replacement<br><span class="infobox-description white-text">Замена текста картинкой</span>';
			var descriptionText = 'Класс для замены текста на изображение';
			break;
		case 115:
			var nameText = 'Inverse<br><span class="infobox-description white-text">Противоположность</span>';
			var descriptionText = 'Обратный стиль любого компонента для светлого или темного фона.';
			break;
		case 116:
			var nameText = 'Jumbotron<br><span class="infobox-description white-text">Стилизация ключевого элемента</span>';
			var descriptionText = 'Дополнительное увеличение ключевого сообщения.';
			break;
		case 117:
			var nameText = 'Link<br><span class="infobox-description white-text">Ссылка</span>';
			var descriptionText = 'Классы для стилизации ссылок';
			break;
		case 118:
			var nameText = 'List<br><span class="infobox-description white-text">Список</span>';
			var descriptionText = 'Классы для стилизации списка';
			break;
		case 119:
			var nameText = 'Margin/Padding<br><span class="infobox-description white-text">Промежутки</span>';
			var descriptionText = 'Классы для промежутков между элементами';
			break;
		case 120:
			var nameText = 'Position<br><span class="infobox-description white-text">Позиция контента</span>';
			var descriptionText = 'Коллекция классов для размещения содержимого';
			break;
		case 121:
			var nameText = 'Print/Display<br><span class="infobox-description white-text">Печать</span>';
			var descriptionText = 'Оптимизация страницы для печати.';
			break;
		case 122:
			var nameText = 'Pulse<br><span class="infobox-description white-text">Эффект пульсации</span>';
			var descriptionText = 'Эффект пульсации кнопок для привлечения внимания.';
			break;
		case 123:
			var nameText = 'Screenreaders<br><span class="infobox-description white-text">Чтение с экрана</span>';
			var descriptionText = 'Показать элемент только программе для чтения с экрана.';
			break;
		case 124:
			var nameText = 'Shadow<br><span class="infobox-description white-text">Тень</span>';
			var descriptionText = 'Тени для контейнеров.';
			break;
		case 125:
			var nameText = 'Tables<br><span class="infobox-description white-text">Таблицы</span>';
			var descriptionText = 'Стили для таблиц';
			break;
		case 126:
			var nameText = 'Text<br><span class="infobox-description white-text">Текст</span>';
			var descriptionText = 'Набор полезных текстовых классов для стилизации вашего контента.';
			break;
		case 127:
			var nameText = 'Transition<br><span class="infobox-description white-text">Плавный переход</span>';
			var descriptionText = 'Создавайте плавные переходы между двумя состояниями при наведении на элемент.';
			break;
		case 128:
			var nameText = 'Typography<br><span class="infobox-description white-text">Типография</span>';
			var descriptionText = 'Базовые стили для тегов заголовков.';
			break;
		case 129:
			var nameText = 'Visibility/Hidding/Showing content<br><span class="infobox-description white-text">Отображение элемента</span>';
			var descriptionText = 'Классы для контроля видимости элемента без изменения отображения.';
			break;
		case 130:
			var nameText = 'Wawes<br><span class="infobox-description white-text">Эффект волн</span>';
			var descriptionText = 'Внешняя библиотека для создания эффекта чернил, описанная в Material Design.';
			break;
		case 131:
			var nameText = 'Width/Sizing<br><span class="infobox-description white-text">Определение размера</span>';
			var descriptionText = 'Классы для определения размеров элементов для разных экранов';
			break;

	}

	// Place text
	$("#info-name").replaceWith('<h5 id="info-name" class="center white-text">' + nameText + '</h5>');
	$("#info-description").replaceWith('<p class="white-text" id="info-description">' + descriptionText + '</p>');
}



/************************************* Modal Windows *****************************************/
function openModal(id) {

	switch(id) {
		//************************FORMS************************//
		// Autocomplete
		case 'documentation-box-2':
			var header = "Autocomplete";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/autocomplete.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/autocomplete.html"></iframe>';
			break;

		// Checkboxes
		case 'documentation-box-4':
			var header = "Checkboxes";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/input-group/#checkboxes-and-radios">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/input-group/#checkboxes-and-radios"></iframe>';
			break;
		case 'documentation-box-5':
			var header = "Checkboxes";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/checkboxes.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/checkboxes.html"></iframe>';
			break;

		case 'documentation-box-6':
			var header = "Checkboxes";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/form">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/form"></iframe>';
			break;

		// Chips
		case 'documentation-box-8':
			var header = "Chips";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/chips.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/chips.html"></iframe>';
			break;

		// Pickers
		case 'documentation-box-11':
			var header = "Pickers";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/pickers.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/pickers.html"></iframe>';
			break;

		// Radiobuttons
		case 'documentation-box-13':
			var header = "Radiobuttons";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/input-group/#checkboxes-and-radios">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/input-group/#checkboxes-and-radios"></iframe>';
			break;
		case 'documentation-box-14':
			var header = "Radiobuttons";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/radio-buttons.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/radio-buttons.html"></iframe>';
			break;
		case 'documentation-box-15':
			var header = "Radiobuttons";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/form#layout">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/form#layout"></iframe>';
			break;

		// Range
		case 'documentation-box-16':
			var header = "Range";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/forms/#range-inputs">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/forms/#range-inputs"></iframe>';
			break;
		case 'documentation-box-17':
			var header = "Range";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/range.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/range.html"></iframe>';
			break;
		case 'documentation-box-18':
			var header = "Range";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/form">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/form"></iframe>';
			break;

		// Select
		case 'documentation-box-19':
			var header = "Select";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/input-group/#custom-select">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/input-group/#custom-select"></iframe>';
			break;
		case 'documentation-box-20':
			var header = "Select";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/select.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/select.html"></iframe>';
			break;
		case 'documentation-box-21':
			var header = "Select";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/form">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/form"></iframe>';
			break;

		// Switches
		case 'documentation-box-23':
			var header = "Select";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/switches.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/switches.html"></iframe>';
			break;

		// Text inputs
		case 'documentation-box-25':
			var header = "Text inputs";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/input-group/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/input-group/"></iframe>';
			break;
		case 'documentation-box-26':
			var header = "Text inputs";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/text-inputs.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/text-inputs.html"></iframe>';
			break;
		case 'documentation-box-27':
			var header = "Text inputs";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/form">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/form"></iframe>';
			break;

		// File browser
		case 'documentation-box-28':
			var header = "File browser";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/forms/#file-browser">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/forms/#file-browser"></iframe>';
			break;
		case 'documentation-box-29':
			var header = "File browser";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/text-inputs.html#file">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/text-inputs.html#file"></iframe>';
			break;
		case 'documentation-box-30':
			var header = "File browser";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/form#custom-controls">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/form#custom-controls"></iframe>';
			break;
			// Input group
		case 'documentation-box-31':
			var header = "Input group";
			var link = '<a target="_blank" id="modal-link" href="http://getbootstrap.com/docs/4.1/components/input-group">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="http://getbootstrap.com/docs/4.1/components/input-group"></iframe>';
			break;
			// Alerts
		case 'documentation-box-40':
			var header = "Alerts";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/alerts/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/alerts/"></iframe>';
			break;
		case 'documentation-box-41':
			var header = "Alerts";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/alert">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/alert"></iframe>';
			break;
			// Animation
		case 'documentation-box-42':
			var header = "Animation";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/animation">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/animation"></iframe>';
			break;
			// Article
		case 'documentation-box-43':
			var header = "Article";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/article">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/article"></iframe>';
			break;
			// Auto init
		case 'documentation-box-44':
			var header = "Auto init";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/auto-init.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/auto-init.html"></iframe>';
			break;
			// Background
		case 'documentation-box-45':
			var header = "Background";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/background">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/background"></iframe>';
			break;
			// Badges/Label
		case 'documentation-box-46':
			var header = "Badges";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/badge/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/badge/"></iframe>';
			break;
		case 'documentation-box-47':
			var header = "Badges";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/badges.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/badges.html"></iframe>';
			break;
		case 'documentation-box-48':
			var header = "Label";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/label">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/label"></iframe>';
			break;
			// Breadcrumb
		case 'documentation-box-49':
			var header = "Breadcrumb";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/breadcrumb/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/breadcrumb/"></iframe>';
			break;
		case 'documentation-box-50':
			var header = "Breadcrumbs";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/breadcrumbs.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/breadcrumbs.html"></iframe>';
			break;
		case 'documentation-box-51':
			var header = "Breadcrumb";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/breadcrumb">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/breadcrumb"></iframe>';
			break;
			// Button group
		case 'documentation-box-52':
			var header = "Button group";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/button-group/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/button-group/"></iframe>';
			break;
		case 'documentation-box-53':
			var header = "Button group";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/button#group">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/button#group"></iframe>';
			break;
			// Buttons
		case 'documentation-box-54':
			var header = "Buttons";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/buttons/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/buttons/"></iframe>';
			break;
		case 'documentation-box-55':
			var header = "Buttons";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/buttons.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/buttons.html"></iframe>';
			break;
		case 'documentation-box-56':
			var header = "Button";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/button">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/button"></iframe>';
			break;
			// Cards
		case 'documentation-box-57':
			var header = "Cards";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/card/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/card/"></iframe>';
			break;
		case 'documentation-box-58':
			var header = "Cards";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/cards.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/cards.html"></iframe>';
			break;
		case 'documentation-box-59':
			var header = "Card";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/card">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/card"></iframe>';
			break;
			// Carousel/Slider
		case 'documentation-box-60':
			var header = "Carousel";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/carousel/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/carousel/"></iframe>';
			break;
		case 'documentation-box-61':
			var header = "Carousel";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/carousel.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/carousel.html"></iframe>';
			break;
		case 'documentation-box-62':
			var header = "Slider";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/slider">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/slider"></iframe>';
			break;
			// Collapse/Accordion
		case 'documentation-box-63':
			var header = "Collapse";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/collapse/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/collapse/"></iframe>';
			break;
		case 'documentation-box-64':
			var header = "Collapsible";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/collapsible.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/collapsible.html"></iframe>';
			break;
		case 'documentation-box-65':
			var header = "Accordion";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/accordion">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/accordion"></iframe>';
			break;
			// Comment
		case 'documentation-box-66':
			var header = "Comment";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/comment">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/comment"></iframe>';
			break;
			// Countdown
		case 'documentation-box-67':
			var header = "Countdown";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/countdown">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/countdown"></iframe>';
			break;
			// Description list
		case 'documentation-box-68':
			var header = "Description list";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/description-list">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/description-list"></iframe>';
			break;
			// Dotnav
		case 'documentation-box-69':
			var header = "Dotnav";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/dotnav">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/dotnav"></iframe>';
			break;
			// Drop
		case 'documentation-box-70':
			var header = "Drop";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/drop">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/drop"></iframe>';
			break;
			// Dropdowns
		case 'documentation-box-71':
			var header = "Dropdowns";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/dropdowns/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/dropdowns/"></iframe>';
			break;
		case 'documentation-box-72':
			var header = "Dropdown";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/dropdown.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/dropdown.html"></iframe>';
			break;
		case 'documentation-box-73':
			var header = "Dropdown";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/dropdown">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/dropdown"></iframe>';
			break;
			// FeatureDiscovery
		case 'documentation-box-74':
			var header = "FeatureDiscovery";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/feature-discovery.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/feature-discovery.html"></iframe>';
			break;
			// Filter
		case 'documentation-box-75':
			var header = "Filter";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/filter">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/filter"></iframe>';
			break;
			// Floating Action Button
		case 'documentation-box-76':
			var header = "Floating Action Button";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/floating-action-button.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/floating-action-button.html"></iframe>';
			break;
			// Footer
		case 'documentation-box-77':
			var header = "Footer";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/footer.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/footer.html"></iframe>';
			break;
			// Iconnav
		case 'documentation-box-78':
			var header = "Iconnav";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/iconnav">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/iconnav"></iframe>';
			break;
			// Icons
		case 'documentation-box-79':
			var header = "Icons";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/icons.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/icons.html"></iframe>';
			break;
		case 'documentation-box-80':
			var header = "Icon";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/icon">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/icon"></iframe>';
			break;
			// Image
		case 'documentation-box-81':
			var header = "Image";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/image">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/image"></iframe>';
			break;
			// Leader
		case 'documentation-box-82':
			var header = "Leader";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/leader">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/leader"></iframe>';
			break;
			// Lightbox/Media
		case 'documentation-box-83':
			var header = "Media";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/media-css.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/media-css.html"></iframe>';
			break;
		case 'documentation-box-84':
			var header = "Lightbox";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/lightbox">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/lightbox"></iframe>';
			break;
			// List group/Collections
		case 'documentation-box-85':
			var header = "List group";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/list-group/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/list-group/"></iframe>';
			break;
		case 'documentation-box-86':
			var header = "Collections";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/collections.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/collections.html"></iframe>';
			break;
			// Marker
		case 'documentation-box-88':
			var header = "Marker";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/marker">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/marker"></iframe>';
			break;
			// Modal
		case 'documentation-box-89':
			var header = "Modal";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/modal/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/list-group/"></iframe>';
			break;
		case 'documentation-box-90':
			var header = "Modals";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/modals.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/modals.html"></iframe>';
			break;
		case 'documentation-box-91':
			var header = "Modal";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/modal">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/modal"></iframe>';
			break;
			// Nav
		case 'documentation-box-92':
			var header = "Nav";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/nav">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/nav"></iframe>';
			break;
			// Navbar
		case 'documentation-box-93':
			var header = "Navbar";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/navbar/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/navbar/"></iframe>';
			break;
		case 'documentation-box-94':
			var header = "Navbar";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/navbar.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/navbar.html"></iframe>';
			break;
		case 'documentation-box-95':
			var header = "Navbar";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/navbar">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/navbar"></iframe>';
			break;
			// Notification/Toasts
		case 'documentation-box-96':
			var header = "Toasts";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/toasts.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/toasts.html"></iframe>';
			break;
		case 'documentation-box-97':
			var header = "Notification";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/notification">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/notification"></iframe>';
			break;
			// Overlay
		case 'documentation-box-98':
			var header = "Overlay";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/overlay">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/overlay"></iframe>';
			break;
			// Pagination
		case 'documentation-box-99':
			var header = "Pagination";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/pagination/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/pagination/"></iframe>';
			break;
		case 'documentation-box-100':
			var header = "Pagination";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/pagination.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/pagination.html"></iframe>';
			break;
		case 'documentation-box-101':
			var header = "Pagination";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/pagination">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/pagination"></iframe>';
			break;
			// Parallax
		case 'documentation-box-102':
			var header = "Parallax";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/parallax.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/parallax.html"></iframe>';
			break;
		case 'documentation-box-103':
			var header = "Parallax";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/parallax">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/parallax"></iframe>';
			break;
			// Placeholder
		case 'documentation-box-104':
			var header = "Placeholder";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/placeholder">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/placeholder"></iframe>';
			break;
			// Popovers
		case 'documentation-box-105':
			var header = "Popovers";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/popovers/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/popovers/"></iframe>';
			break;
			// Progress/Preloader
		case 'documentation-box-106':
			var header = "Progress";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/progress/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/progress/"></iframe>';
			break;
		case 'documentation-box-107':
			var header = "Preloader";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/preloader.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/preloader.html"></iframe>';
			break;
		case 'documentation-box-108':
			var header = "Progress";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/progress">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/progress"></iframe>';
			break;
			// Pushpin
		case 'documentation-box-109':
			var header = "Pushpin";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/pushpin.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/pushpin.html"></iframe>';
			break;
			// Scrollspy/Scroll
		case 'documentation-box-110':
			var header = "Scrollspy";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/scrollspy/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/scrollspy/"></iframe>';
			break;
		case 'documentation-box-111':
			var header = "Scrollspy";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/scrollspy.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/scrollspy.html"></iframe>';
			break;
		case 'documentation-box-112':
			var header = "Scroll";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/scroll">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/scroll"></iframe>';
			break;
			// Search
		case 'documentation-box-113':
			var header = "Search";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/search">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/search"></iframe>';
			break;
			// Section
		case 'documentation-box-1140':
			var header = "Section";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/grid.html#grid-layouts">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/grid.html#grid-layouts"></iframe>';
			break;
		case 'documentation-box-114':
			var header = "Section";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/section">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/section"></iframe>';
			break;
			// Sidenav/Off-canvas
		case 'documentation-box-115':
			var header = "Sidenav";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/sidenav.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/sidenav.html"></iframe>';
			break;
		case 'documentation-box-116':
			var header = "Off-canvas";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/offcanvas">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/offcanvas"></iframe>';
			break;
			// Slidenav
		case 'documentation-box-117':
			var header = "Slidenav";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/slidenav">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/slidenav"></iframe>';
			break;
			// Sortable
		case 'documentation-box-118':
			var header = "Sortable";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/sortable">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/sortable"></iframe>';
			break;
			// Spinner/Circular
		case 'documentation-box-119':
			var header = "Circular";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/preloader.html#circular">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/preloader.html#circular"></iframe>';
			break;
		case 'documentation-box-120':
			var header = "Spinner";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/spinner">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/spinner"></iframe>';
			break;
			// Subnav
		case 'documentation-box-121':
			var header = "Subnav";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/subnav">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/subnav"></iframe>';
			break;
			// SVG
		case 'documentation-box-122':
			var header = "SVG";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/svg">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/svg"></iframe>';
			break;
			// Switcher
		case 'documentation-box-123':
			var header = "Switcher";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/switcher">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/switcher"></iframe>';
			break;
			// Tabs
		case 'documentation-box-124':
			var header = "Tabs";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/navs/#tabs">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/navs/#tabs"></iframe>';
			break;
		case 'documentation-box-125':
			var header = "Tabs";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/tabs.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/tabs.html"></iframe>';
			break;
		case 'documentation-box-126':
			var header = "Tab";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/tab">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/tab"></iframe>';
			break;
			// Thumbnav
		case 'documentation-box-127':
			var header = "Thumbnav";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/thumbnav">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/thumbnav"></iframe>';
			break;
			// Tile
		case 'documentation-box-128':
			var header = "Tile";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/tile">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/tile"></iframe>';
			break;
			// Tooltips
		case 'documentation-box-129':
			var header = "Tooltips";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/tooltips/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/tooltips/"></iframe>';
			break;
		case 'documentation-box-130':
			var header = "Tooltips";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/tooltips.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/tooltips.html"></iframe>';
			break;
		case 'documentation-box-131':
			var header = "Tooltip";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/tooltip">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/tooltip"></iframe>';
			break;
			// Totop
		case 'documentation-box-132':
			var header = "Totop";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/totop">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/totop"></iframe>';
			break;
			// Upload
		case 'documentation-box-133':
			var header = "Upload";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/upload">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/upload"></iframe>';
			break;
			// Video/Embeds
		case 'documentation-box-134':
			var header = "Embeds";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/utilities/embed/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/utilities/embed/"></iframe>';
			break;
		case 'documentation-box-135':
			var header = "Videos";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/media-css.html#videos">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/media-css.html#videos"></iframe>';
			break;
		case 'documentation-box-136':
			var header = "Video";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/video">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/video"></iframe>';
			break;

			// Align
		case 'documentation-box-200':
			var header = "Align";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/utilities/text/#text-alignment">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/utilities/text/#text-alignment"></iframe>';
			break;
		case 'documentation-box-201':
			var header = "Align";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/helpers.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/helpers.html"></iframe>';
			break;
		case 'documentation-box-202':
			var header = "Align";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/align">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/align"></iframe>';
			break;
			// Border-radius/Circular images
		case 'documentation-box-203':
			var header = "Border-radius";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/utilities/borders/#border-radius">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/utilities/borders/#border-radius"></iframe>';
			break;
		case 'documentation-box-204':
			var header = "Circular images";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/media-css.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/media-css.html"></iframe>';
			break;
		case 'documentation-box-205':
			var header = "Border-radius";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/utility#border-radius">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/utility#border-radius"></iframe>';
			break;
			// Borders
		case 'documentation-box-206':
			var header = "Borders";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/utilities/borders/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/utilities/borders/"></iframe>';
			break;
			// Close
		case 'documentation-box-207':
			var header = "Close icon";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/utilities/close-icon/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/utilities/close-icon/"></iframe>';
			break;
		case 'documentation-box-208':
			var header = "Close";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/close">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/close"></iframe>';
			break;
			// Color
		case 'documentation-box-209':
			var header = "Colors";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/utilities/colors/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/utilities/colors/"></iframe>';
			break;
		case 'documentation-box-210':
			var header = "Color";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/color.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/color.html"></iframe>';
			break;
			// Column
		case 'documentation-box-212':
			var header = "Column";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/column">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/column"></iframe>';
			break;
			// Container
		case 'documentation-box-213':
			var header = "Containers";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/layout/overview/#containers">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/layout/overview/#containers"></iframe>';
			break;
		case 'documentation-box-214':
			var header = "Container";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/grid.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/grid.html"></iframe>';
			break;
		case 'documentation-box-215':
			var header = "Container";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/container">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/container"></iframe>';
			break;
			// Cover
		case 'documentation-box-216':
			var header = "Cover";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/cover">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/cover"></iframe>';
			break;
			// Divider
		case 'documentation-box-217':
			var header = "Divider";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/grid.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/grid.html"></iframe>';
			break;
		case 'documentation-box-218':
			var header = "Divider";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/divider">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/divider"></iframe>';
			break;
			// Flex
		case 'documentation-box-219':
			var header = "Flex";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/utilities/flex/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/utilities/flex/"></iframe>';
			break;
		case 'documentation-box-220':
			var header = "Flex";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/flex">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/flex"></iframe>';
			break;
			// Grid
		case 'documentation-box-221':
			var header = "Grid";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/layout/grid">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/layout/grid"></iframe>';
			break;
		case 'documentation-box-222':
			var header = "Grid";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/grid.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/grid.html"></iframe>';
			break;
		case 'documentation-box-223':
			var header = "Grid";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/grid">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/grid"></iframe>';
			break;
		// 	// Heading
		// case 'documentation-box-224':
		// 	var header = "Heading";
		// 	var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/heading">Ссылка на документацию</a>';
		// 	var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/heading"></iframe>';
		// 	break;
			// Height
		case 'documentation-box-225':
			var header = "Height";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/height">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/height"></iframe>';
			break;
			// Image replacement
		case 'documentation-box-226':
			var header = "Image replacement";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/utilities/image-replacement/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/utilities/image-replacement/"></iframe>';
			break;
			// Inverse
		case 'documentation-box-227':
			var header = "Inverse";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/inverse">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/inverse"></iframe>';
			break;
			// Jumbotron
		case 'documentation-box-228':
			var header = "Jumbotron";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/components/jumbotron/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/components/jumbotron/"></iframe>';
			break;
			// Link
		case 'documentation-box-229':
			var header = "Link";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/link">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/link"></iframe>';
			break;
			// List
		case 'documentation-box-230':
			var header = "List";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/list">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/list"></iframe>';
			break;
			// Margin/Padding
		case 'documentation-box-231':
			var header = "Margin/Padding";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/layout/utilities-for-layout/#margin-and-padding">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/layout/utilities-for-layout/#margin-and-padding"></iframe>';
			break;
		case 'documentation-box-232':
			var header = "Margin";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/margin">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/margin"></iframe>';
			break;
			// Position
		case 'documentation-box-233':
			var header = "Position";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/position">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/position"></iframe>';
			break;
			// Print/Display
		case 'documentation-box-234':
			var header = "Display";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/utilities/display/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/utilities/display/"></iframe>';
			break;
		case 'documentation-box-235':
			var header = "Print";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/print">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/print"></iframe>';
			break;
			// Pulse
		case 'documentation-box-236':
			var header = "Pulse";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/pulse.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/pulse.html"></iframe>';
			break;
			// Screenreaders
		case 'documentation-box-237':
			var header = "Screenreaders";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/utilities/screenreaders/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/utilities/screenreaders/"></iframe>';
			break;
			// Scrollspy
		case 'documentation-box-238':
			var header = "Scrollspy";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/scrollspy">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/scrollspy"></iframe>';
			break;
			// Shadow
		case 'documentation-box-239':
			var header = "Shadows";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/utilities/shadows/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/utilities/shadows/"></iframe>';
			break;
		case 'documentation-box-240':
			var header = "Shadow";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/shadow.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/shadow.html"></iframe>';
			break;
		case 'documentation-box-241':
			var header = "Shadow";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/utility#box-shadow">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/utility#box-shadow"></iframe>';
			break;
			// Sticky
		case 'documentation-box-242':
			var header = "Sticky";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/sticky">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/sticky"></iframe>';
			break;
			// Tables
		case 'documentation-box-243':
			var header = "Tables";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/content/tables/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/content/tables/"></iframe>';
			break;
		case 'documentation-box-244':
			var header = "Table";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/table.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/table.html"></iframe>';
			break;
		case 'documentation-box-245':
			var header = "Table";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/table">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/table"></iframe>';
			break;
			// Text
		case 'documentation-box-246':
			var header = "Text";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/utilities/text/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/utilities/text/"></iframe>';
			break;
		case 'documentation-box-247':
			var header = "Text";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/text">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/text"></iframe>';
			break;
			// Toggle
		case 'documentation-box-248':
			var header = "Toggle";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/toggle">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/toggle"></iframe>';
			break;
			// Transition
		case 'documentation-box-249':
			var header = "Transition";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/transition">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/transition"></iframe>';
			break;
			// Typography/Heading
		case 'documentation-box-250':
			var header = "Typography";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/content/typography/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/content/typography/"></iframe>';
			break;
		case 'documentation-box-251':
			var header = "Typography";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/typography.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/typography.html"></iframe>';
			break;
		case 'documentation-box-252':
			var header = "Heading";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/heading">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/heading"></iframe>';
			break;
			// Visibility/Hidding/Showing content
		case 'documentation-box-253':
			var header = "Visibility";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/utilities/visibility/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/utilities/visibility/"></iframe>';
			break;
		case 'documentation-box-254':
			var header = "Hiding/Showing Content";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/helpers.html#hiding">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/helpers.html#hiding"></iframe>';
			break;
		case 'documentation-box-255':
			var header = "Visibility";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/visibility">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/visibility"></iframe>';
			break;
			// Wawes
		case 'documentation-box-256':
			var header = "Wawes";
			var link = '<a target="_blank" id="modal-link" href="https://materializecss.com/waves.html">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://materializecss.com/waves.html"></iframe>';
			break;
			// Width/Sizing
		case 'documentation-box-257':
			var header = "Sizing";
			var link = '<a target="_blank" id="modal-link" href="https://getbootstrap.com/docs/4.1/utilities/sizing/">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getbootstrap.com/docs/4.1/utilities/sizing/"></iframe>';
			break;
		case 'documentation-box-258':
			var header = "Width";
			var link = '<a target="_blank" id="modal-link" href="https://getuikit.com/docs/width">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="https://getuikit.com/docs/width"></iframe>';
			break;

	}

	$("#modal-header").replaceWith('<h4 id="modal-header">' + header + '</h4>');
	$("#modal-iframe").replaceWith(iframe);
	$("#modal-link").replaceWith(link);
    $('#modal').modal('open');
}

// *********************************Sorting*********************************
// Open wizard2.html with parametr
function openWizard2(id) {
	location.href = 'wizard2.html?id='+id+'';
}

// Wizard1 function for sort
function whichComponents() {
	//разбиваем подстроку на массив.
	var str = window.location.search.split('id=');
	//берем из него второй элемент и проверяем число это или нет, Если не null показываем.
	if(str[1].match(/\d/) != null) {
		switch (Number(str[1])) {
			// сайт витрина
			case 1:
				document.getElementById('component11').checked = true;	//slider
				document.getElementById('component32').checked = true;	//search
				document.getElementById('component24').checked = true;	//icons
				document.getElementById('component10').checked = true; //cards
				document.getElementById('component3').checked = true;	//article
				document.getElementById('checkbox9').checked = true; //text inputs - forms
				break;
				// Промо сайт
			case 2:
				document.getElementById('component9').checked = true;	//buttons
				document.getElementById('component14').checked = true;	//countdown
				document.getElementById('stylization30').checked = true;	//tipography
				break;
				//Интернет магазин
			case 3:
				document.getElementById('component22').checked = true;	//footer
				document.getElementById('component32').checked = true;	//navbar
				document.getElementById('component41').checked = true;	//scrollspy
				document.getElementById('checkbox9').checked = true;	//text input
				document.getElementById('checkbox6').checked = true;	//range
				document.getElementById('component18').checked = true;	//dropdowns
				document.getElementById('component10').checked = true;	//cards
				document.getElementById('component11').checked = true;	//carousel
				document.getElementById('component24').checked = true;	//icons
				document.getElementById('component7').checked = true;	//breadcrumbs
				document.getElementById('component35').checked = true;	//pagination
				document.getElementById('component9').checked = true;	//buttons
				document.getElementById('component42').checked = true;	//search
				document.getElementById('component6').checked = true;	//badges
				document.getElementById('component51').checked = true;	//tabs
				document.getElementById('component1').checked = true;	//alerts
				document.getElementById('component1').checked = true;	//alerts

				break;
			default:

		}
	}
}
// *************************************************************************************************8Dodelat top

function countComponents() {
	var url1 = 'checkbox=';
	var url2 = 'component=';
	var url3 = 'stylization=';
	// Find all checked components from Forms
	for (var i = 1; i <= 11; i++) {
		if (document.getElementById('checkbox'+i) != null) {
			if (document.getElementById('checkbox'+i).checked == true) {
				url1+=i+',';
			}
		}
	}
	// Find all checked components from Components
	for (var i = 1; i <= 70; i++) {
		if (document.getElementById('component'+i) != null) {
			if (document.getElementById('component'+i).checked == true) {
				url2+=i+',';
			}
		}
	}
	// Find all checked components from Utilites
	for (var i = 1; i <= 40; i++) {
		if (document.getElementById('stylization'+i) != null) {
			if (document.getElementById('stylization'+i).checked == true) {
				url3+=i+',';
			}
		}
	}
	location.href = 'wizard3.html?'+url1+'&'+url2+'&'+url3;
}

// **************************************** Wizard3 ***************************************

function whichFramework() {

	// Take values from URL
	var forms = location.search.split("&")[0].replace("?","").split("=")[1];
	var components = location.search.split("&")[1].replace("?","").split("=")[1];
	var stylizations = location.search.split("&")[2].replace("?","").split("=")[1];

	// Split every component nr. to array
	var form = forms.split(',');
	var component = components.split(',');
	var stylization = stylizations.split(',');

	// delete last ,
	--form.length;
	--component.length;
	--stylization.length;


	// Which framework what component have
	//******************************Checkboxes*******************************
	var materialize_form = ['1','2','3','4','5','6','7','8','9','10'];
	var bootstrap_form = ['2','5','6','7','9','10','11'];
	var uikit_form = ['2','5','6','7','9','10'];
	//******************************Components*******************************
	var materialize_component = ['4','6','7','9','10','11','12','18','19','21','22','24','27','28','30','32','33','35','36','39','40','41','43','44','47','51','54','57'];
	var bootstrap_component = ['1','6','7','8','9','10','11','12','18','28','30','32','35','38','39','41','51','54','57'];
	var uikit_component = ['1','2','3','5','6','7','8','9','10','11','12','13','14','15','16','17','18','20','23','24','25','26','27','29','30','31','32','33','34','35','36','37','39','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57'];
	//******************************Stylizations*****************************
	var materialize_stylization = ['1','2','5','7','9','11','21','24','26','30','31','32'];
	var bootstrap_stylization = ['1','2','3','4','5','7','10','11','13','15','18','20','22','24','26','27','30','31','33'];
	var uikit_stylization = ['1','2','4','6','7','8','9','10','11','12','14','16','17','18','19','20','23','24','25','26','27','28','29','30','31','33'];


	// how many components suitable for each framework
	//******************************Checkboxes*******************************
	var materialize_form_suit = 0;
	var bootstrap_form_suit = 0;
	var uikit_form_suit = 0;
	//******************************Components*******************************
	var materialize_component_suit = 0;
	var bootstrap_component_suit = 0;
	var uikit_component_suit = 0;
	//******************************Stylizations*****************************
	var materialize_stylization_suit = 0;
	var bootstrap_stylization_suit = 0;
	var uikit_stylization_suit = 0;


	// Create array with list of not suitable components
	//******************************Checkboxes*******************************
	var materialize_form_not_suit_array = [];
	var bootstrap_form_not_suit_array = [];
	var uikit_form_not_suit_array = [];
	//******************************Components*******************************
	var materialize_component_not_suit_array = [];
	var bootstrap_component_not_suit_array = [];
	var uikit_component_not_suit_array = [];
	//******************************Stylizations*****************************
	var materialize_stylization_not_suit_array = [];
	var bootstrap_stylization_not_suit_array = [];
	var uikit_stylization_not_suit_array = [];


	//****************** Check every framework for component availability
	//******************************Checkboxes*******************************
	// Materialize
	for (var i = 0; i < form.length; i++) {
		if (materialize_form.includes(form[i])) {
			// Add value if it's true
			materialize_form_suit++;
		}
		else {
			// Add value to array if it's not true
			materialize_form_not_suit_array.push(form[i]);
		}
	}
	// Bootstrap
	for (var i = 0; i < form.length; i++) {
		if (bootstrap_form.includes(form[i])) {
			// Add value if it's true
			bootstrap_form_suit++;
		}
		else {
			// Add value to array if it's not true
			bootstrap_form_not_suit_array.push(form[i]);
		}
	}
	// Uikit
	for (var i = 0; i < form.length; i++) {
		if (uikit_form.includes(form[i])) {
			// Add value if it's true
			uikit_form_suit++;
		}
		else {
			// Add value to array if it's not true
			uikit_form_not_suit_array.push(form[i]);
		}
	}
	//******************************Components*******************************
	for (var i = 0; i < component.length; i++) {
		if (materialize_component.includes(component[i])) {
			// Add value if it's true
			materialize_component_suit++;
		}
		else {
			// Add value to array if it's not true
			materialize_component_not_suit_array.push(component[i]);
		}
	}
	// Bootstrap
	for (var i = 0; i < component.length; i++) {
		if (bootstrap_component.includes(component[i])) {
			// Add value if it's true
			bootstrap_component_suit++;
		}
		else {
			// Add value to array if it's not true
			bootstrap_component_not_suit_array.push(component[i]);
		}
	}
	// Uikit
	for (var i = 0; i < component.length; i++) {
		if (uikit_component.includes(component[i])) {
			// Add value if it's true
			uikit_component_suit++;
		}
		else {
			// Add value to array if it's not true
			uikit_component_not_suit_array.push(component[i]);
		}
	}
	//******************************Stylizations*****************************
	for (var i = 0; i < stylization.length; i++) {
		if (materialize_stylization.includes(stylization[i])) {
			// Add value if it's true
			materialize_stylization_suit++;
		}
		else {
			// Add value to array if it's not true
			materialize_stylization_not_suit_array.push(stylization[i]);
		}
	}
	// Bootstrap
	for (var i = 0; i < stylization.length; i++) {
		if (bootstrap_stylization.includes(stylization[i])) {
			// Add value if it's true
			bootstrap_stylization_suit++;
		}
		else {
			// Add value to array if it's not true
			bootstrap_stylization_not_suit_array.push(stylization[i]);
		}
	}
	// Uikit
	for (var i = 0; i < stylization.length; i++) {
		if (uikit_stylization.includes(stylization[i])) {
			// Add value if it's true
			uikit_stylization_suit++;
		}
		else {
			// Add value to array if it's not true
			uikit_stylization_not_suit_array.push(stylization[i]);
		}
	}

	// Don't show missing components block if is nothing to show
	// Materialize
	if (materialize_form_not_suit_array.length < 1) {
		document.getElementById('materialize-missing-form').style.display = 'none';
	}
	if (materialize_component_not_suit_array.length < 1) {
		document.getElementById('materialize-missing-component').style.display = 'none';
	}
	if (materialize_stylization_not_suit_array.length < 1) {
		document.getElementById('materialize-missing-stylization').style.display = 'none';
	}
	if (materialize_form_not_suit_array.length < 1 && materialize_component_not_suit_array.length < 1 && materialize_stylization_not_suit_array.length < 1) {
		document.getElementById('materialize-missing').style.display = 'none';
	}
	// Bootstrap
	if (bootstrap_form_not_suit_array.length < 1) {
		document.getElementById('bootstrap-missing-form').style.display = 'none';
	}
	if (bootstrap_component_not_suit_array.length < 1) {
		document.getElementById('bootstrap-missing-component').style.display = 'none';
	}
	if (bootstrap_stylization_not_suit_array.length < 1) {
		document.getElementById('bootstrap-missing-stylization').style.display = 'none';
	}
	if (bootstrap_form_not_suit_array.length < 1 && bootstrap_component_not_suit_array.length < 1 && bootstrap_stylization_not_suit_array.length < 1) {
		document.getElementById('bootstrap-missing').style.display = 'none';
	}
	// UIKit
	if (uikit_form_not_suit_array.length < 1) {
		document.getElementById('uikit-missing-form').style.display = 'none';
	}
	if (uikit_component_not_suit_array.length < 1) {
		document.getElementById('uikit-missing-component').style.display = 'none';
	}
	if (uikit_stylization_not_suit_array.length < 1) {
		document.getElementById('uikit-missing-stylization').style.display = 'none';
	}
	if (uikit_form_not_suit_array.length < 1 && uikit_component_not_suit_array.length < 1 && uikit_stylization_not_suit_array.length < 1) {
		document.getElementById('uikit-missing').style.display = 'none';
	}


	//***************************Progress bar setup*****************************************
	// Create value in %

	// % for bootstrap
	var bootstrap_forms_value = Math.round(bootstrap_form_suit / form.length * 100);	//Forms
	var bootstrap_components_value = Math.round(bootstrap_component_suit / component.length * 100);	//Components
	var bootstrap_stylizations_value = Math.round(bootstrap_stylization_suit / stylization.length * 100);	//Stylizations
	//Check
	var bootstrap_check = 3;
	if(isNaN(parseFloat(bootstrap_forms_value))){bootstrap_forms_value = 0; bootstrap_check--};
	if(isNaN(parseFloat(bootstrap_components_value))){bootstrap_components_value = 0; bootstrap_check--};
	if(isNaN(parseFloat(bootstrap_stylizations_value))){bootstrap_stylizations_value = 0; bootstrap_check--};
	//Overall value
	if (bootstrap_check == 0) {bootstrap_overall_value = 0} else {var bootstrap_overall_value = Math.round((bootstrap_forms_value + bootstrap_components_value + bootstrap_stylizations_value) / bootstrap_check)}

	// % for materialize
	var materialize_forms_value = Math.round(materialize_form_suit / form.length * 100);	//Forms
	var materialize_components_value = Math.round(materialize_component_suit / component.length * 100);	//Components
	var materialize_stylizations_value = Math.round(materialize_stylization_suit / stylization.length * 100);	//Stylizations
	//Check
	var materialize_check = 3;
	if(isNaN(parseFloat(materialize_forms_value))){materialize_forms_value = 0; materialize_check--};
	if(isNaN(parseFloat(materialize_components_value))){materialize_components_value = 0; materialize_check--};
	if(isNaN(parseFloat(materialize_stylizations_value))){materialize_stylizations_value = 0; materialize_check--};
	//Overall value
	if (materialize_check == 0) {materialize_overall_value = 0} else {var materialize_overall_value = Math.round((materialize_forms_value + materialize_components_value + materialize_stylizations_value) / materialize_check)}

	// % for uikit
	var uikit_forms_value = Math.round(uikit_form_suit / form.length * 100);	//Forms
	var uikit_components_value = Math.round(uikit_component_suit / component.length * 100);	//Components
	var uikit_stylizations_value = Math.round(uikit_stylization_suit / stylization.length * 100);	//Stylizations
	// Check
	var uikit_check = 3;
	if(isNaN(parseFloat(uikit_forms_value))){uikit_forms_value = 0; uikit_check--};
	if(isNaN(parseFloat(uikit_components_value))){uikit_components_value = 0; uikit_check--};
	if(isNaN(parseFloat(uikit_stylizations_value))){uikit_stylizations_value = 0; uikit_check--};
	//Overall value
	if (uikit_check == 0) {uikit_overall_value = 0} else {var uikit_overall_value = Math.round((uikit_forms_value + uikit_components_value + uikit_stylizations_value) / uikit_check)}

	if (bootstrap_overall_value == 0 && materialize_overall_value == 0 && uikit_overall_value == 0) {
		$("#modal-header").replaceWith('<h4 id="modal-header">Вы не выбрали ни одного  компонента</h4>');
		$("#modal-text").replaceWith('<p>Пожалуйста вернитесь на предыдущую страницу и выберите необходимые компоненты.</p>');
		$('#modal').modal('open');
		setTimeout('history.back(-1)', 15000);

	}

	//***************** Show bootstrap % and preloader ********************
	// Forms
	document.getElementById("bootstrap-forms-value").innerHTML = bootstrap_forms_value + '%';
	document.getElementById("bootstrap-forms-progress").style.width = bootstrap_forms_value + '%';
	// Components
	document.getElementById("bootstrap-components-value").innerHTML = bootstrap_components_value + '%';
	document.getElementById("bootstrap-components-progress").style.width = bootstrap_components_value + '%';
	// Stylizations
	document.getElementById("bootstrap-stylizations-value").innerHTML = bootstrap_stylizations_value + '%';
	document.getElementById("bootstrap-stylizations-progress").style.width = bootstrap_stylizations_value + '%';

	//***************** Show materialize % and preloader ******************
	// Forms
	document.getElementById("materialize-forms-value").innerHTML = materialize_forms_value + '%';
	document.getElementById("materialize-forms-progress").style.width = materialize_forms_value + '%';
	// Components
	document.getElementById("materialize-components-value").innerHTML = materialize_components_value + '%';
	document.getElementById("materialize-components-progress").style.width = materialize_components_value + '%';
	// Stylizations
	document.getElementById("materialize-stylizations-value").innerHTML = materialize_stylizations_value + '%';
	document.getElementById("materialize-stylizations-progress").style.width = materialize_stylizations_value + '%';

	//***************** Show uikit % and preloader ************************
	// Forms
	document.getElementById("uikit-forms-value").innerHTML = uikit_forms_value + '%';
	document.getElementById("uikit-forms-progress").style.width = uikit_forms_value + '%';
	// Components
	document.getElementById("uikit-components-value").innerHTML = uikit_components_value + '%';
	document.getElementById("uikit-components-progress").style.width = uikit_components_value + '%';
	// Stylizations
	document.getElementById("uikit-stylizations-value").innerHTML = uikit_stylizations_value + '%';
	document.getElementById("uikit-stylizations-progress").style.width = uikit_stylizations_value + '%';


	//***************** Show overall results ******************************
	// Bootstrap
	document.getElementById("bootstrap-overall-value").innerHTML = bootstrap_overall_value + '%';
	document.getElementById("bootstrap-overall-progress").style.width = bootstrap_overall_value + '%';
	// Materialize
	document.getElementById("materialize-overall-value").innerHTML = materialize_overall_value + '%';
	document.getElementById("materialize-overall-progress").style.width = materialize_overall_value + '%';
	// Uikit
	document.getElementById("uikit-overall-value").innerHTML = uikit_overall_value + '%';
	document.getElementById("uikit-overall-progress").style.width = uikit_overall_value + '%';


	// ****************************************Chips********************************************

	// Data for chips / Forms
	var form_chips = [
		[],
		[1,'Autocomplete','getInfo(1)'],
		[2,'Checkboxes','getInfo(2)'],
		[3,'Chips','getInfo(3)'],
		[4,'Pickers','getInfo(4)'],
		[5,'Radio buttons','getInfo(5)'],
		[6,'Range','getInfo(6)'],
		[7,'Select','getInfo(7)'],
		[8,'Switches','getInfo(8)'],
		[9,'Text Inputs','getInfo(9)'],
		[10,'File browser','getInfo(10)'],
		[11,'Input group','getInfo(11)']
	];
	// Data for chips / Components
	var component_chips = [
		[],
		[1,'Alerts','getInfo(20)'],
		[2,'Animation','getInfo(21)'],
		[3,'Article','getInfo(22)'],
		[4,'Auto init','getInfo(23)'],
		[5,'Background','getInfo(24)'],
		[6,'Badges/Label','getInfo(25)'],
		[7,'Breadcrumb','getInfo(26)'],
		[8,'Button group','getInfo(27)'],
		[9,'Buttons','getInfo(28)'],
		[10,'Cards','getInfo(29)'],
		[11,'Carousel/Slider','getInfo(30)'],
		[12,'Collapse/Accordion','getInfo(31)'],
		[13,'Comment','getInfo(32)'],
		[14,'Countdown','getInfo(33)'],
		[15,'Description list','getInfo(34)'],
		[16,'Dotnav','getInfo(35)'],
		[17,'Drop','getInfo(36)'],
		[18,'Dropdowns','getInfo(37)'],
		[19,'FeatureDiscovery','getInfo(38)'],
		[20,'Filter','getInfo(39)'],
		[21,'Floating Action Button','getInfo(40)'],
		[22,'Footer','getInfo(41)'],
		[23,'Iconnav','getInfo(42)'],
		[24,'Icons','getInfo(43)'],
		[25,'Image','getInfo(44)'],
		[26,'Leader','getInfo(45)'],
		[27,'Lightbox/Media','getInfo(46)'],
		[28,'List group/Collections','getInfo(47)'],
		[29,'Marker','getInfo(48)'],
		[30,'Modal','getInfo(49)'],
		[31,'Nav','getInfo(50)'],
		[32,'Navbar','getInfo(51)'],
		[33,'Notification/Toasts','getInfo(52)'],
		[34,'Overlay','getInfo(53)'],
		[35,'Pagination','getInfo(54)'],
		[36,'Parallax','getInfo(56)'],
		[37,'Placeholder','getInfo(57)'],
		[38,'Popovers','getInfo(58)'],
		[39,'Progress/Preloader','getInfo(59)'],
		[40,'Pushpin','getInfo(60)'],
		[41,'Scrollspy/Scroll','getInfo(61)'],
		[42,'Search','getInfo(63)'],
		[43,'Section','getInfo(64)'],
		[44,'Sidenav/Off-canvas','getInfo(65)'],
		[45,'Slidenav','getInfo(66)'],
		[46,'Sortable','getInfo(67)'],
		[47,'Spinner/Circular','getInfo(68)'],
		[48,'Subnav','getInfo(70)'],
		[49,'SVG','getInfo(71)'],
		[50,'Switcher','getInfo(72)'],
		[51,'Tabs','getInfo(73)'],
		[52,'Thumbnav','getInfo(74)'],
		[53,'Tile','getInfo(75)'],
		[54,'Tooltips','getInfo(77)'],
		[55,'Totop','getInfo(78)'],
		[56,'Upload','getInfo(79)'],
		[57,'Video/Embeds','getInfo(80)']
	];
	// Data for chips / Stylization
	var stylization_chips = [
		[],
		[111,'Align','getInfo(101)'],
		[111,'Border-radius','getInfo(102)'],
		[111,'Borders','getInfo(103)'],
		[111,'Close','getInfo(104)'],
		[111,'Color','getInfo(105)'],
		[111,'Column','getInfo(106)'],
		[111,'Container','getInfo(107)'],
		[111,'Cover','getInfo(108)'],
		[111,'Divider','getInfo(109)'],
		[111,'Flex','getInfo(110)'],
		[111,'Grid','getInfo(111)'],
		[111,'Height','getInfo(113)'],
		[111,'Image replacement','getInfo(114)'],
		[111,'Inverse','getInfo(115)'],
		[111,'Jumbotron','getInfo(116)'],
		[111,'Link','getInfo(117)'],
		[111,'List','getInfo(118)'],
		[111,'Margin/Padding','getInfo(119)'],
		[111,'Position','getInfo(120)'],
		[111,'Print/Display','getInfo(121)'],
		[111,'Pulse','getInfo(122)'],
		[111,'Screenreaders','getInfo(123)'],
		[111,'Scrollspy','getInfo(62)'],
		[111,'Shadow','getInfo()'],
		[111,'Sticky','getInfo(69)'],
		[111,'Tables','getInfo(125)'],
		[111,'Text','getInfo(126)'],
		[111,'Toggle','getInfo(76)'],
		[111,'Transition','getInfo(127)'],
		[111,'Typography/Heading','getInfo(128)'],
		[111,'Visibility','getInfo(129)'],
		[111,'Wawes','getInfo(130)'],
		[111,'Width/Sizing','getInfo(131)']
	];


	//**************************************** Chips for forms *****************************************
	// Generate chips for bootstrap - missing components from forms
	for (var i = 0; i < bootstrap_form_not_suit_array.length; i++) {
		var bootstrap_chips_list = "<div class='chip'>" + form_chips[bootstrap_form_not_suit_array[i]][1] + "<i onclick='" + form_chips[bootstrap_form_not_suit_array[i]][2] + "' class='chip-info material-icons'>info_outline</i></div>"
		document.getElementById("bootstrap-form-chips").innerHTML += bootstrap_chips_list;
	}
	// Generate chips for materizlize - missing components from forms
	for (var i = 0; i < materialize_form_not_suit_array.length; i++) {
		var materialize_chips_list = "<div class='chip'>" + form_chips[materialize_form_not_suit_array[i]][1] + "<i onclick='" + form_chips[materialize_form_not_suit_array[i]][2] + "' class='chip-info material-icons'>info_outline</i></div>"
		document.getElementById("materialize-form-chips").innerHTML += materialize_chips_list;
	}
	// Generate chips for uikit - missing components from forms
	for (var i = 0; i < uikit_form_not_suit_array.length; i++) {
		var uikit_chips_list = "<div class='chip'>" + form_chips[uikit_form_not_suit_array[i]][1] + "<i onclick='" + form_chips[uikit_form_not_suit_array[i]][2] + "' class='chip-info material-icons'>info_outline</i></div>"
		document.getElementById("uikit-form-chips").innerHTML += uikit_chips_list;
	}


	//**************************************** Chips for components *****************************************
	// Generate chips for bootstrap - missing components from components
	for (var i = 0; i < bootstrap_component_not_suit_array.length; i++) {
		var bootstrap_chips_list = "<div class='chip'>" + component_chips[bootstrap_component_not_suit_array[i]][1] + "<i onclick='" + component_chips[bootstrap_component_not_suit_array[i]][2] + "' class='chip-info material-icons'>info_outline</i></div>"
		document.getElementById("bootstrap-component-chips").innerHTML += bootstrap_chips_list;
	}
	// Generate chips for materizlize - missing components from components
	for (var i = 0; i < materialize_component_not_suit_array.length; i++) {
		var materialize_chips_list = "<div class='chip'>" + component_chips[materialize_component_not_suit_array[i]][1] + "<i onclick='" + component_chips[materialize_component_not_suit_array[i]][2] + "' class='chip-info material-icons'>info_outline</i></div>"
		document.getElementById("materialize-component-chips").innerHTML += materialize_chips_list;
	}
	// Generate chips for uikit - missing components from components
	for (var i = 0; i < uikit_component_not_suit_array.length; i++) {
		var uikit_chips_list = "<div class='chip'>" + component_chips[uikit_component_not_suit_array[i]][1] + "<i onclick='" + component_chips[uikit_component_not_suit_array[i]][2] + "' class='chip-info material-icons'>info_outline</i></div>"
		document.getElementById("uikit-component-chips").innerHTML += uikit_chips_list;
	}


	//**************************************** Chips for stylization *****************************************
	// Generate chips for bootstrap - missing components from stylization
	for (var i = 0; i < bootstrap_stylization_not_suit_array.length; i++) {
		var bootstrap_chips_list = "<div class='chip'>" + stylization_chips[bootstrap_stylization_not_suit_array[i]][1] + "<i onclick='" + stylization_chips[bootstrap_stylization_not_suit_array[i]][2] + "' class='chip-info material-icons'>info_outline</i></div>"
		document.getElementById("bootstrap-stylization-chips").innerHTML += bootstrap_chips_list;
	}
	// Generate chips for materizlize - missing stylizations from stylization
	for (var i = 0; i < materialize_stylization_not_suit_array.length; i++) {
		var materialize_chips_list = "<div class='chip'>" + stylization_chips[materialize_stylization_not_suit_array[i]][1] + "<i onclick='" + stylization_chips[materialize_stylization_not_suit_array[i]][2] + "' class='chip-info material-icons'>info_outline</i></div>"
		document.getElementById("materialize-stylization-chips").innerHTML += materialize_chips_list;
	}
	// Generate chips for uikit - missing stylizations from stylization
	for (var i = 0; i < uikit_stylization_not_suit_array.length; i++) {
		var uikit_chips_list = "<div class='chip'>" + stylization_chips[uikit_stylization_not_suit_array[i]][1] + "<i onclick='" + stylization_chips[uikit_stylization_not_suit_array[i]][2] + "' class='chip-info material-icons'>info_outline</i></div>"
		document.getElementById("uikit-stylization-chips").innerHTML += uikit_chips_list;
	}

}
