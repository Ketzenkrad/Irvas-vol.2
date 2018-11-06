function calc() {
	let calc_btn = document.getElementsByClassName('glazing_price_btn'),
		 modal = document.getElementsByClassName('popup_calc')[0],
		 modal_close = document.getElementsByClassName('popup_calc_close')[0],
		 mini_icon = modal.getElementsByClassName('balcon_icons')[0],
		 mini_icon_a = document.getElementsByClassName('mini_icon_a'),
		 mini_icon_a_img = document.getElementsByClassName('img_icon'),
		 big_icon = modal.getElementsByClassName("big_img_icon"),
		 input_modal = document.getElementsByClassName('form-control'),
		 modal_btn = document.getElementsByClassName('popup_calc_button')[0],
		 calc_profilу = document.getElementsByClassName('popup_calc_profile')[0],
		 box_calc_profilу = calc_profilу.getElementsByClassName('checkbox'),
		 popup_calc_profile_button = document.getElementsByClassName('popup_calc_profile_button')[0],
		 popup_calc_end = document.getElementsByClassName('popup_calc_end ')[0];

		 
	let form = new Object;

	for(let i = 0; i < calc_btn.length; i++) {
		calc_btn[i].addEventListener('click', function () {
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	}

	modal_close.addEventListener('click', function () {
		modal.style.display = '';
		document.body.style.overflow = '';
	})

	function hideIcon(a) {
		for(let i = a; i < big_icon.length; i++) {
			big_icon[i].style.display = "none";
			//mini_icon_a[i].style.paddingTop = "10px";
		}
	}
	hideIcon(1);

	function showIcon(b) {
		if(big_icon[b].style.display == "none") {
			hideIcon(0);
			big_icon[b].style.display = "inline-block";
			//mini_icon_a_img[b].style.width = "40rem";
		}
	}

	mini_icon.addEventListener('click', function(event) {
		let target = event.target;
		event.preventDefault();
		for(let i = 0; i < mini_icon_a.length; i++){
			if (target == mini_icon_a_img[i]) {
				showIcon(i);
				break;
			}
		}

	});

	modal.addEventListener('click', function () {
		if (event.target == modal) {
			modal.style.display = '';
		}
	});

	modal_btn.addEventListener('click', function () {
		modal.style.display = '';
		calc_profilу.style.display = "block";
	});

	popup_calc_profile_button.addEventListener('click', function () {
		calc_profilу.style.display = "";
		popup_calc_end.style.display = "block"
	})
	// for(let i = 0; i < box_calc_profilу.length; i++) {
	// 	if(box_calc_profilу[i].style.checked == true) {
	// 		console.log('f')
	// 	}
	// }

}











module.exports = calc;