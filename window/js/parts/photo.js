function photo() {
	let photo = document.getElementsByClassName('photo_lupa'),
	 	 primary_photo_div = document.getElementsByClassName('primary_photo_div');
	 	 div_photo = document.createElement('div');

	div_photo.classList.add('div_photo');

	for(let i = 0; i < photo.length; i++) {
		photo[i].addEventListener('click', function (event) {
			event.preventDefault();
			div_photo.appendChild(photo[i]);
			primary_photo_div.appendChild(div_photo);
		})
	}
}
module.exports = photo;