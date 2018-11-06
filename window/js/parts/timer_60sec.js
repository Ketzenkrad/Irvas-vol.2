function timer_60sec() {
	let modal = document.getElementsByClassName('popup')[0];

	function timer() {
		modal.style.display = 'block'
	}

	setTimeout(timer, 60000);
}
module.exports = timer_60sec;