window.addEventListener('DOMContentLoaded', function () {
	let modal = require('../parts/modal.js');
	let ajax = require('../parts/ajax.js');
	let tabs = require('../parts/tabs.js');
	let calc = require('../parts/calc.js');
	let tabs_finish = require('../parts/tabs_finish.js');
	let photo = require('../parts/photo.js');
	let timer_60sec = require('../parts/timer_60sec.js');
	let timer = require('../parts/timer.js');

	ajax();
	modal();
	tabs();
	calc();
	tabs_finish();
	photo();
	timer_60sec();
	timer();

	
});	