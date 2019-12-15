; (function () {
	// add isotope
	$('.portfolio-examp').isotope({
	});

	var filters = [];
	$('.portfolio-navi').on('click', 'a', function (event) {
		event.preventDefault();
		$(this).toggleClass('active');
		var isChecked = $(this).hasClass('active');
		var filter = $(this).attr('data-filter');
		if (isChecked) {
			addFilter(filter);
		} else {
			removeFilter(filter);
		}

		console.log(filters);
		$('.portfolio-examp').isotope({
			filter: filters.join(',')
		});
	});
	function addFilter(filter) {
		if (filters.indexOf(filter) == -1) {
			filters.push(filter);
			filters.join(',')
		}
	}
	function removeFilter(filter) {
		var index = filters.indexOf(filter);
		if (index != -1) {
			filters.splice(index, 1);
			console.log(filters.join(','));
		}
	}

	// функция проверки, если маленькими буквами, то ок, а если большими, выводится ошибка!
	$('.bs-form').on('submit', function (e) {
		e.preventDefault();

		let $inpText = $('.inp-one').val();
		let $inpCheck = $inpText.toLowerCase();
		if ($inpText !== $inpCheck || $inpText === '') {
			$('.error-inp').css({
				visibility: 'visible',
			});
		} else {
			$('.error-inp').css({
				visibility: 'hidden',
			});
		}


		//проверка что в email находится email

		let $emailText = $('.email').val();
		let $pattern = /^([a-z0-9_\.-])+[@][a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		if ($emailText === '' || $pattern.test($emailText)) {
			$('.error-email').css({
				visibility: 'visible',
			});
		} else {
			$('.error-email').css({
				visibility: 'hidden',
			});
		}


		let $areaText = $('.area').val();
		let $space = /^[\s]+$/; //патерн на пробелы
		if ($areaText.length < 20 || $areaText === '' || $space.test($areaText)) /* проверка если одни пробелы */ {
			$('.error-area').css({
				visibility: 'visible',
			});
		} else {
			$('.error-area').css({
				visibility: 'hidden',
			});
		}
	});
})();
