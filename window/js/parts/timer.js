function timer() {
	let deadline = '2018-11-07';

	function getTime(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			 seconds = Math.floor((t / 1000) % 60),
			 minutes = Math.floor((t / 1000 / 60) % 60),
			 hours = Math.floor((t / (1000 * 60 * 60)) % 60),
			 days = Math.floor((t / (1000 * 60 * 60 * 24)) % 60);

		let a = Math.floor(hours / 24);
		if (a > 0) {
			hours = hours - 24*a;
		}

		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		if (hours < 10) {
			hours = '0' + hours;
		}
		if (days < 10) {
			days = '0' + days;
		}



		return {
			'total' : t,
			'seconds' : seconds,
			'minutes' : minutes,
			'hours' : hours,
			'days' : days
		};
	}

	function myClock(endtime) {
		
		let days = document.getElementsByClassName('days')[0],
			 hours = document.getElementsByClassName('hours')[0],
			 minutes = document.getElementsByClassName('minutes')[0],
			 seconds = document.getElementsByClassName('seconds')[0];

		function timeStart() {
			let time = getTime(endtime);
			seconds.innerHTML = time.seconds;
			minutes.innerHTML = time.minutes;
			hours.innerHTML = time.hours;
			days.innerHTML = time.days;

			if (time.total <= 0) {
				seconds.innerHTML = '00';
				minutes.innerHTML = '00';
				hours.innerHTML = '00';
				days.innerHTML = '00';
			}
		}
		timeStart();
		setInterval(timeStart, 1000);

	}
	myClock(deadline);
}
module.exports = timer;