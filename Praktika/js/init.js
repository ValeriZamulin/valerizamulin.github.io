$(document).ready(function(){
	$('.sidenav').sidenav();
	$(".slow-show").fadeTo(1200, 1); // function for slow showing elements from transparent (time,opacity)
	$('.tap-target').tapTarget();
	$('.modal').modal();
	$('.scrollspy').scrollSpy();
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
		// First block
		case 1:
			var nameText = 'Autocomplete<br><span class="infobox-description">Автозаполнение для окна ввода</span>';
			var descriptionText = 'Занесите в список слова, которые будут предлагаться при заполнении текстового поля.';
			break;
		case 2:
			var nameText = 'Checkboxes<br><span class="infobox-description">Элемент для выбора из списка</span>';
			var descriptionText = 'Элемент графического пользовательского интерфейса, позволяющий пользователю управлять параметром с двумя состояниями — ☑ включено и ☐ выключено. Во включённом состоянии внутри чекбокса отображается отметка (галочка (✓))';
			break;
		case 3:
			var nameText = 'Chips<br><span class="infobox-description">Небольшие блоки информации</span>';
			var descriptionText = 'Могут использоваться для представления небольших блоков информации. Чаще всего используются для контактов, либо для тегов.';
			break;
		case 4:
			var nameText = 'Pickers<br><span class="infobox-description">Выбор даты или времени из интерактивного меню</span>';
			var descriptionText = 'Позволяет пользователям выбтрать дату из стилизованного интерактивного календаря и время из интерактивных часов';
			break;
		case 5:
			var nameText = 'Radio buttons<br><span class="infobox-description">Элемент для выбора из списка</span>';
			var descriptionText = 'Кнопки «Радио» используются, когда пользователь должен сделать только один выбор из группы элементов.';
			break;
		case 6:
			var nameText = 'Range<br><span class="infobox-description">Диапазон значений</span>';
			var descriptionText = 'Ползунок для значений с широким диапазоном.';
			break;
		case 7:
			var nameText = 'Select<br><span class="infobox-description">Выбор из выпадающего списока</span>';
			var descriptionText = 'Позволяет делать выбор пользователю через указанные параметры';
			break;
		case 8:
			var nameText = 'Switches<br><span class="infobox-description">Переключатель (Выкл/Вкл)</span>';
			var descriptionText = 'Чтобы включить или выключить тумблер, нужно перетащить движок тумблера в ту или иную сторону. ';
			break;
		case 9:
			var nameText = 'Text Inputs<br><span class="infobox-description">Поле ввода для текста</span>';
			var descriptionText = 'Служит для ввода информации, такой как имя пользователя, пароль, электронный адрес и т.п.';
			break;
		case 10:
			var nameText = 'File browser<br><span class="infobox-description">Элемент для выбора файла с компьютера</span>';
			var descriptionText = 'Стилизованный элемент с помощью которого можно прикрепить файл для отправки.';
			break;
		case 11:
			var nameText = 'Input group<br><span class="infobox-description">Поля для ввода с добавленной информацией</span>';
			var descriptionText = 'Легко расширяйте элементы управления форматом, добавляя текст, кнопки или группы кнопок с обеих сторон текстовых полей ввода.';
			break;
		// Second block
		case 20:
			var nameText = 'Alerts<br><span class="infobox-description">Предупредительное сообщение</span>';
			var descriptionText = 'Обратная связь для пользователя с помощью доступного и гибкого предупреждающего сообщения.';
			break;
		case 21:
			var nameText = 'Animation<br><span class="infobox-description">Анимация объектов</span>';
			var descriptionText = 'Коллекция гладких анимаций для блоков для использования на вашей странице.';
			break;
		case 22:
			var nameText = 'Article<br><span class="infobox-description">Создание статей</span>';
			var descriptionText = 'Служит для создания стилизованных статей на вашей странице';
			break;
		case 23:
			var nameText = 'Auto init<br><span class="infobox-description">Инициализация компонентов</span>';
			var descriptionText = 'Инициализация всех компонентов с помощью одного вызова функции';
			break;
		case 24:
			var nameText = 'Background<br><span class="infobox-description">Задний фон</span>';
			var descriptionText = 'Добавление фона с различными эффектами в элементы';
			break;
		case 25:
			var nameText = 'Badges/Label<br><span class="infobox-description">Значки уведомлений</span>';
			var descriptionText = 'Значки могут уведомить вас о появлении новых или непрочитанных сообщений или уведомлений.';
			break;
		case 26:
			var nameText = 'Breadcrumb<br><span class="infobox-description">Вспомогательная навигация</span>';
			var descriptionText = 'Хороший способ отобразить ваше текущее местоположение. Обычно это используется, когда у вас несколько слоев контента.';
			break;
		case 27:
			var nameText = 'Button group<br><span class="infobox-description">Сгрупированый ряд кнопок</span>';
			var descriptionText = 'Группируйте вместе ряд кнопок на одной строке.';
			break;
		case 28:
			var nameText = 'Buttons<br><span class="infobox-description">Кнопки</span>';
			var descriptionText = 'Стилизованные кнопки для действий, используются в формах, диалогох и т.д';
			break;
		case 29:
			var nameText = 'Cards<br><span class="infobox-description">Гибкий контейнер</span>';
			var descriptionText = 'Удобное средство отображения контента, состоящего из разных типов объектов.';
			break;
		case 30:
			var nameText = 'Carousel<br><span class="infobox-description">Слайд-шоу</span>';
			var descriptionText = 'Слайд-шоу для циклирования  элементов';
			break;
		case 31:
			var nameText = 'Collapse<br><span class="infobox-description">Переключатель видимости контента</span>';
			var descriptionText = 'Это элементы расширяемый при нажатии. Он позволяет скрывать контент, который не имеет непосредственного отношения к пользователю.';
			break;
		case 32:
			var nameText = 'Comment<br><span class="infobox-description">Стили для комментариев</span>';
			var descriptionText = 'Стилизованный блок комментариев для сайта.';
			break;
		case 33:
			var nameText = 'Countdown<br><span class="infobox-description">Обратный счётчик времени</span>';
			var descriptionText = 'Обратный счётчик времени используется для временных скидок или компаний, также для информирования об оставшемся времени до открытия сайта и т.п.';
			break;
		case 34:
			var nameText = 'Description list<br><span class="infobox-description">Списки с описанием</span>';
			var descriptionText = 'Служит для создания красивых списков с описанием.';
			break;
		case 35:
			var nameText = 'Dotnav<br><span class="infobox-description">Точечная навигация</span>';
			var descriptionText = 'Создайте точечную навигацию для управления слайд-шоу или для перехода к различным разделам страницы.';
			break;
		case 36:
			var nameText = 'Drop<br><span class="infobox-description">Выпадающий элемент</span>';
			var descriptionText = 'Для создания одного выподающего элемента по отношению к другому элементу при наведении или нажатии на него.';
			break;
		case 37:
			var nameText = 'Dropdowns<br><span class="infobox-description">Раскрывающийся список</span>';
			var descriptionText = 'Добавьте раскрывающийся список на любую кнопку';
			break;
		case 38:
			var nameText = 'FeatureDiscovery<br><span class="infobox-description">Окно с подсказкой</span>';
			var descriptionText = 'Стилизованное окно оповещения, служит для подсказок в случае нехватки информации.';
			break;
		case 39:
			var nameText = 'Filter<br><span class="infobox-description">Сортировка элементов по метаданным</span>';
			var descriptionText = 'Любой макет может быть отфильтрован или отсортирован независимо от расположения. Элементы исчезают и перемещаются с плавными переходами между различными состояниями фильтрации и сортировки.';
			break;
		case 40:
			var nameText = 'Floating Action Button<br><span class="infobox-description">Кнопка с выпадающими иконками</span>';
			var descriptionText = 'Кнопка фиксированного плавающего действия, вы можете добавить несколько действий, которые будут отображаться при наведении.';
			break;
		case 41:
			var nameText = 'Footer<br><span class="infobox-description">Нижний колонтитул</span>';
			var descriptionText = 'Компонент содержащий дополнительную или дублирующую навигацию и информацию на сайте в конце страницы';
			break;
		case 42:
			var nameText = 'Iconnav<br><span class="infobox-description">Навигация из иконок</span>';
			var descriptionText = 'Навигация из иконок служит для дополнительных возможностей в навигации или в случае отсутствия места для навигации, например на мобильных устройствах';
			break;
		case 43:
			var nameText = 'Icons<br><span class="infobox-description">Иконки</span>';
			var descriptionText = 'Легко подключаемые стилизованные под дизайн фреймворка иконки.';
			break;
		case 44:
			var nameText = 'Image<br><span class="infobox-description">Изображение</span>';
			var descriptionText = 'Ускорьте время загрузки страницы и уменьшайте трафик, загружая только изображения, когда они входят в область просмотра.';
			break;
		case 45:
			var nameText = 'Leader<br><span class="infobox-description">Строчная привязка к тексту</span>';
			var descriptionText = 'Чаще всего используется в меню ресторана, между блюдами и ценами, а также для оглавлений, между названиями и номерами страниц.';
			break;
		case 46:
			var nameText = 'Lightbox<br><span class="infobox-description">Отзывчивая галерея</span>';
			var descriptionText = 'Отзывчивая стилизованная галерея для изображений и видео';
			break;
		case 47:
			var nameText = 'List group/Collections<br><span class="infobox-description">Группированный список</span>';
			var descriptionText = 'Используется в основном для отображения серии контента';
			break;
		case 48:
			var nameText = 'Marker<br><span class="infobox-description">Значок маркера</span>';
			var descriptionText = 'Создайте значок маркера, который может отображаться поверх изображений.';
			break;
		case 49:
			var nameText = 'Modal<br><span class="infobox-description">Модальное диалоговое окно</span>';
			var descriptionText = 'Всплывающее диалоговое окно для подтверждения действий или отображения другого контента';
			break;
		case 50:
			var nameText = 'Nav<br><span class="infobox-description">Навигация по спискам</span>';
			var descriptionText = 'Вспомагательная навигация по списку.';
			break;
		case 51:
			var nameText = 'Navbar<br><span class="infobox-description">Панель навигации по сайту</span>';
			var descriptionText = 'Основная навигация по сайту';
			break;
		case 52:
		var nameText = 'Notification/Toasts<br><span class="infobox-description">Уведомления</span>';
			var descriptionText = 'Ненавязчивые, автоматически исчезающие уведомления';
			break;
		case 53:
			var nameText = 'Overlay<br><span class="infobox-description">Накладываемый слой</span>';
			var descriptionText = 'Накладываемый слой на изображение с различными стилями';
			break;
		case 54:
			var nameText = 'Pagination<br><span class="infobox-description">Навигация по страницам</span>';
			var descriptionText = 'Добавьте ссылки на страницы, чтобы помочь разделить ваш длинный контент на более короткие, понятные блоки.';
			break;
		case 55:
			var nameText = 'Image<br><span class="infobox-description">Изображение</span>';
			var descriptionText = '';
			break;
		case 56:
			var nameText = 'Parallax<br><span class="infobox-description">Анимация фонового содержимого</span>';
			var descriptionText = 'Эффект, при котором фоновое содержимое или изображение в этом случае перемещаются с другой скоростью, чем содержимое переднего плана во время прокрутки.';
			break;
		case 57:
			var nameText = 'Placeholder<br><span class="infobox-description">Размеченное пространство</span>';
			var descriptionText = 'Создайте размеченное пространство, которое можно использовать для загрузки файлов с помощью перетаскивания.';
			break;
		case 58:
			var nameText = 'Popovers<br><span class="infobox-description">Всплывающие подсказки</span>';
			var descriptionText = 'Всплывающие подсказки подобных тем, которые используются в iOS, к любому элементу вашего сайта.';
			break;
		case 59:
			var nameText = 'Progress/Preloader<br><span class="infobox-description">Индикатор выполнения</span>';
			var descriptionText = 'Служит для обратной связи с пользователем в случае если у вас есть контент, требующий много времени для загрузки.';
			break;
		case 60:
			var nameText = 'Pushpin<br><span class="infobox-description">Плагин позиционирования</span>';
			var descriptionText = 'Используется для привязки элементов к своей странице во время определенных диапазонов прокрутки.';
			break;
		case 61:
			var nameText = 'Scrollspy/Scroll<br><span class="infobox-description">Перемещение по странице</span>';
			var descriptionText = 'Дополнительная навигация, которая отслеживает тот элемент, на котором в данный момент находится экран пользователя.';
			break;
		case 62:
			var nameText = 'Scrollspy<br><span class="infobox-description">Плавное появление элементов</span>';
			var descriptionText = 'Плавное появление элементов при пролистывании страницы';
			break;
		case 63:
			var nameText = 'Search<br><span class="infobox-description">Окно поиска</span>';
			var descriptionText = 'Стилизованное окошко для поиска';
			break;
		case 64:
			var nameText = 'Section<br><span class="infobox-description">Раздел горизонтальной компоновки</span>';
			var descriptionText = 'Создавайте разделы горизонтальной компоновки с разными цветами фона и стилями.';
			break;
		case 65:
			var nameText = 'Sidenav/Off-canvas<br><span class="infobox-description">Боковое меню</span>';
			var descriptionText = 'Выпадающее боковое меню, в основном используется для мобильной навигации или для дополнительной информации';
			break;
		case 66:
			var nameText = 'Slidenav<br><span class="infobox-description">Навигация для слайд-шоу</span>';
			var descriptionText = 'Элементы навигации для слайд-шоу (стилизованные стрелки влево и вправо)';
			break;
		case 67:
			var nameText = 'Sortable <br><span class="infobox-description">Сортировка</span>';
			var descriptionText = 'Создайте сортируемые сетки и списки для изменения порядока элементов.';
			break;
		case 68:
			var nameText = 'Spinner/Circular<br><span class="infobox-description">Значок загрузки</span>';
			var descriptionText = 'Стилизованный анимированный значок загрузки';
			break;
		case 69:
			var nameText = 'Sticky<br><span class="infobox-description">Липкий элемент</span>';
			var descriptionText = 'Элементы остаются в верхней части окна просмотра, как липкая навигация.';
			break;
		case 70:
			var nameText = 'Subnav<br><span class="infobox-description">Вспомогательная навигация</span>';
			var descriptionText = 'Стилизованный компонент для дополнительной навигации';
			break;
		case 71:
			var nameText = 'SVG<br><span class="infobox-description">Векторные изображения</span>';
			var descriptionText = 'Внесите встроенные SVG-изображения в разметку страницы и стилизуйте их с помощью CSS.';
			break;
		case 72:
			var nameText = 'Switcher<br><span class="infobox-description">Динамическая смена элемента</span>';
			var descriptionText = 'Динамический переход через различные панели контента.';
			break;
		case 73:
			var nameText = 'Tabs<br><span class="infobox-description">Вкладки</span>';
			var descriptionText = 'Вкладки служат для структурирования контента.';
			break;
		case 74:
			var nameText = 'Thumbnav<br><span class="infobox-description">Навигация по картинкам</span>';
			var descriptionText = 'В основном используется как навигация для галереи.';
			break;
		case 75:
			var nameText = 'Tile<br><span class="infobox-description">Стилизованный коньейнер</span>';
			var descriptionText = 'Контейнеры с разными фонами, которые можно легко размещать рядом друг с другом.';
			break;
		case 76:
			var nameText = 'Toggle<br><span class="infobox-description">Переключатель содержимого</span>';
			var descriptionText = 'Скройте, переключите или измените внешний вид содержимого с помощью переключателя.';
			break;
		case 77:
			var nameText = 'Tooltips<br><span class="infobox-description">Подсказки</span>';
			var descriptionText = 'Всплывающие подсказки в основном используются с кнопками.';
			break;
		case 78:
			var nameText = 'Totop<br><span class="infobox-description">Прокрутка к началу страницы</span>';
			var descriptionText = 'Кнопка с функцией плавной прокрутки к началу страницы';
			break;
		case 79:
			var nameText = 'Upload<br><span class="infobox-description">Загрузка файлов</span>';
			var descriptionText = 'Размеченное пространство для загрузки файлов.';
			break;
		case 80:
			var nameText = 'Video<br><span class="infobox-description">Контейнер для видео</span>';
			var descriptionText = 'Стилизованный, адаптивный контейнер для воспроизведения видео';
			break;

		// Third block
		case 101:
			var nameText = 'Align<br><span class="infobox-description">Расположение контента</span>';
			var descriptionText = 'Простые в использовании классы, которые помогут вам выровнять ваш контент.';
			break;
		case 102:
			var nameText = 'Border-radius/Circular images<br><span class="infobox-description">Закругление краёв картинки</span>';
			var descriptionText = 'Классы к элементу, чтобы легко закруглить его углы.';
			break;
		case 103:
			var nameText = 'Borders<br><span class="infobox-description">Граница элемента</span>';
			var descriptionText = 'Классы для создания границ элемента. Отлично подходит для изображений, кнопок или любого другого элемента.';
			break;
		case 104:
			var nameText = 'Close<br><span class="infobox-description">Иконка для закрытия</span>';
			var descriptionText = 'Стилизованная кнопка закрытия элемента';
			break;
		case 105:
			var nameText = 'Color<br><span class="infobox-description">Цветовая палитра</span>';
			var descriptionText = 'Подобранная палитра цветов для элементов и текста';
			break;
		case 106:
			var nameText = 'Column<br><span class="infobox-description">Колонка</span>';
			var descriptionText = 'Разбитие текста по столбцам в одном контейнере ';
			break;
		case 107:
			var nameText = 'Container<br><span class="infobox-description">Контейнер</span>';
			var descriptionText = 'Основной элемент компоновки, требуются при использовании сетки по умолчанию.';
			break;
		case 108:
			var nameText = 'Cover<br><span class="infobox-description">Фон для контейнера</span>';
			var descriptionText = 'Разверните изображения, видео или фреймы, чтобы покрыть весь контейнер и разместить свой собственный контент сверху.';
			break;
		case 109:
			var nameText = 'Divider<br><span class="infobox-description">Разделитель</span>';
			var descriptionText = 'Стилизованный разделитель';
			break;
		case 110:
			var nameText = 'Flex<br><span class="infobox-description">Плагин позиционирования</span>';
			var descriptionText = 'Быстрое управление компоновкой, выравниванием и размером столбцов сетки, навигации, компонентов и т.д.';
			break;
		case 111:
			var nameText = 'Grid<br><span class="infobox-description">Адаптивная сетка</span>';
			var descriptionText = 'Мощная мобильная сетка для построения макетов всех форм и размеров благодаря двенадцатиколоночной системе.';
			break;
		case 112:
			var nameText = 'Heading<br><span class="infobox-description">Заголовок</span>';
			var descriptionText = 'Различные стили для заголовка';
			break;
		case 113:
			var nameText = 'Height<br><span class="infobox-description">Высота элементов</span>';
			var descriptionText = 'Определитель высоты элементов в зависимости от вида экрана.';
			break;
		case 114:
			var nameText = 'Image replacement<br><span class="infobox-description">Замена текста картинкой</span>';
			var descriptionText = 'Класс для замены текста на изображение';
			break;
		case 115:
			var nameText = 'Inverse<br><span class="infobox-description">Противоположность</span>';
			var descriptionText = 'Обратный стиль любого компонента для светлого или темного фона.';
			break;
		case 116:
			var nameText = 'Jumbotron<br><span class="infobox-description">Стилизация ключевого элемента</span>';
			var descriptionText = 'Дополнительное увеличение ключевого сообщения.';
			break;
		case 117:
			var nameText = 'Link<br><span class="infobox-description">Ссылка</span>';
			var descriptionText = 'Классы для стилизации ссылок';
			break;
		case 118:
			var nameText = 'List<br><span class="infobox-description">Список</span>';
			var descriptionText = 'Классы для стилизации списка';
			break;
		case 119:
			var nameText = 'Margin/Padding/Spacing<br><span class="infobox-description">Промежутки</span>';
			var descriptionText = 'Классы для промежутков между элементами';
			break;
		case 120:
			var nameText = 'Position<br><span class="infobox-description">Позиция контента</span>';
			var descriptionText = 'Коллекция классов для размещения содержимого';
			break;
		case 121:
			var nameText = 'Print/Display<br><span class="infobox-description">Печать</span>';
			var descriptionText = 'Оптимизация страницы для печати.';
			break;
		case 122:
			var nameText = 'Pulse<br><span class="infobox-description">Эффект пульсации</span>';
			var descriptionText = 'Эффект пульсации кнопок для привлечения внимания.';
			break;
		case 123:
			var nameText = 'Screenreaders<br><span class="infobox-description">Чтение с экрана</span>';
			var descriptionText = 'Показать элемент только программе для чтения с экрана.';
			break;
		case 124:
			var nameText = 'Shadow<br><span class="infobox-description">Тень</span>';
			var descriptionText = 'Тени для контейнеров.';
			break;
		case 125:
			var nameText = 'Tables<br><span class="infobox-description">Таблицы</span>';
			var descriptionText = 'Стили для таблиц';
			break;
		case 126:
			var nameText = 'Text<br><span class="infobox-description">Текст</span>';
			var descriptionText = 'Набор полезных текстовых классов для стилизации вашего контента.';
			break;
		case 127:
			var nameText = 'Transition<br><span class="infobox-description">Плавный переход</span>';
			var descriptionText = 'Создавайте плавные переходы между двумя состояниями при наведении на элемент.';
			break;
		case 128:
			var nameText = 'Typography<br><span class="infobox-description">Типография</span>';
			var descriptionText = 'Базовые стили для тегов заголовков.';
			break;
		case 129:
			var nameText = 'Visibility/Hidding/Showing content<br><span class="infobox-description">Отображение элемента</span>';
			var descriptionText = 'Классы для контроля видимости элемента без изменения отображения.';
			break;
		case 130:
			var nameText = 'Wawes<br><span class="infobox-description">Эффект волн</span>';
			var descriptionText = 'Внешняя библиотека для создания эффекта чернил, описанная в Material Design.';
			break;
		case 125:
			var nameText = 'Width/Sizing<br><span class="infobox-description">Определение размера</span>';
			var descriptionText = 'Классы для определения размеров элементов для разных экранов';
			break;

	}

	// Place text
	$("#info-name").replaceWith('<h5 id="info-name" class="center">' + nameText + '</h5>');
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
		case 'forms31':
			var header = "Input group";
			var link = '<a target="_blank" id="modal-link" href="http://getbootstrap.com/docs/4.1/components/input-group">Ссылка на документацию</a>';
			var iframe = '<iframe id="modal-iframe" src="http://getbootstrap.com/docs/4.1/components/input-group"></iframe>';
			break;

	}








	$("#modal-header").replaceWith('<h4 id="modal-header">' + header + '</h4>');
	$("#modal-iframe").replaceWith(iframe);
	$("#modal-link").replaceWith(link);
    $('#modal').modal('open');
}
