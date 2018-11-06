function modal() {
	let headerBtn = document.querySelector(".header_btn"),
		 modalHeaderBtn = document.getElementsByClassName('popup_engineer')[0],
		 close_1 = modalHeaderBtn.getElementsByClassName('popup_close')[0],

		 phoneLink = document.getElementsByClassName('phone_link'),
		 modalPhoneLink = document.getElementsByClassName('popup')[0];
		 close_2 = modalPhoneLink.getElementsByClassName('popup_close')[0];

		 
	headerBtn.addEventListener("click", function () {
		modalHeaderBtn.style.display = "block";
		document.body.style.overflow = 'hidden';
	});

	close_1.addEventListener("click", function () {
		modalHeaderBtn.style.display = "";
		document.body.style.overflow = '';
	});
	for (let i = 0; i < phoneLink.length; i++) {
		phoneLink[i].addEventListener("click", function (event) {
			event.preventDefault();
			modalPhoneLink.style.display = "block";
			document.body.style.overflow = 'hidden';
		});
	}
	
	close_2.addEventListener('click',function () {
		modalPhoneLink.style.display = "";
		document.body.style.overflow = '';
	})

	modalHeaderBtn.addEventListener('click',function (event) {
		if (event.target == modalHeaderBtn) {
			modalHeaderBtn.style.display = "";
		}
		
	})
	modalPhoneLink.addEventListener('click',function (event) {
		if (event.target == modalPhoneLink) {
			modalPhoneLink.style.display = "";
		}
	})

}
module.exports = modal;