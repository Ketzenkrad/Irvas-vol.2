function tabs_finish() {
	let decoration_item = document.getElementsByClassName('decoration_item_div'),
	 	 decorate_conent = document.getElementsByClassName('decorate_conent');

	function hideTab(a) {
		for(let i = a; i < decoration_item.length; i++) {
			decoration_item[i].classList.remove('after_click');
			decorate_conent[i].style.display = "none";
		}
	}

	hideTab(1);

	function showItem(b) {
		hideTab(0);
		decoration_item[b].classList.add('after_click');
		decorate_conent[b].style.display = "block";
	}

	for(let i = 0; i < decoration_item.length; i++) {
		decoration_item[i].addEventListener('click', function (event) {
			showItem(i);
		})
	}
}
module.exports = tabs_finish;