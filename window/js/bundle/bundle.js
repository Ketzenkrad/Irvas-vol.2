(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/photo.js":5,"../parts/tabs.js":6,"../parts/tabs_finish.js":7,"../parts/timer.js":8,"../parts/timer_60sec.js":9}],2:[function(require,module,exports){
function ajax() {
        let message = new Object();
        message.loading = "Загрузка... ";
        message.success = "Спасибо! Скоро мы с вами свяжемся!";
        message.failure = "Ошибка при отправке. ";

        let form = document.getElementsByClassName('form'),
            input = document.getElementsByTagName('input'),
            statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

        for (let i = 1; i < 16; i = i + 2) {
            input[i].oninput = event => event.target.value = event.target.value.replace(/\D/g, '');
        }

        document.body.addEventListener('submit', function(event) {

            let target = event.target;
            if (target.classList.contains('form')) {
                for (let i = 0; i < 8; i++) {
                    if (target == form[i]) {
                        event.preventDefault();

                        form[i].appendChild(statusMessage);


                        let request = new XMLHttpRequest();
                        request.open("POST", 'server.php');

                        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                        let formData = new FormData();

                        request.send(formData);

                        request.onreadystatechange = function() {
                            if (request.readyState < 4) {
                                statusMessage.innerHTML = message.loading;
                            } else if (request.readyState === 4) {
                                if (request.status == 200 && request.status < 300) {
                                    statusMessage.innerHTML = message.success;
                                } else {
                                    statusMessage.innerHTML = message.failure;
                                }
                            }
                        }
                    }
                }
            }
        });
	

}
module.exports = ajax;
},{}],3:[function(require,module,exports){
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
		}
	}
	hideIcon(1);

	function showIcon(b) {
		if(big_icon[b].style.display == "none") {
			hideIcon(0);
			big_icon[b].style.display = "inline-block";
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


}


module.exports = calc;
},{}],4:[function(require,module,exports){
function modal() {
        let callButton = document.getElementsByClassName('header_btn')[0],
            engineerCall = document.getElementsByClassName('popup_engineer')[0];

        callButton.addEventListener('click', function() {
            engineerCall.classList.add('show');
            document.body.style.overflow = 'hidden';
        });

        engineerCall.addEventListener('click', function(event) {
            let target = event.target;
            if (target.classList.contains('popup_close') || target.classList.contains('popup_engineer') || target.tagName == 'STRONG') {
                engineerCall.classList.remove('show');
                document.body.style.overflow = '';
            }
        });


    // //Телефон;
        let phone = document.getElementsByClassName('popup')[0];

        document.body.addEventListener('click', function(event) {

            let target = event.target;
            if (target.classList.contains('phone_link')) {
                phone.classList.add('show');
                document.body.style.overflow = 'hidden';
                event.preventDefault();
            }
        });

        phone.addEventListener('click', function(event) {
            let target = event.target;
            if (target.classList.contains('popup_close') || target.classList.contains('popup') || target.tagName == 'STRONG') {
                phone.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
}
module.exports = modal;
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
function tabs() {
	let tabs = document.getElementsByClassName('glazing_block'),
		 tab_block = document.getElementsByClassName('glazing_slider')[0],
		 tabs_link = tab_block.getElementsByTagName('a'),
		 tabs_content_block = document.getElementsByClassName('tabs_conent_block')[0],
		 tabs_content = tabs_content_block.getElementsByClassName("row");

	function hideConent(a) {
		for(i = a; i < tabs_link.length; i++){
			tabs_link[i].classList.remove('active');
			tabs_content[i].style.display = "none";
		}
	}
	hideConent(1);

	function showContent(b) {  
		if (tabs_link[b].classList.contains != "active") {
			hideConent(0);
			tabs_link[b].classList.add('active');
			tabs_content[b].style.display = "block";
		}
	}
	
	tab_block.addEventListener('click', function (event) {
		if (event.target.classList.contains('link_slider_link')) {
			for(let i = 0; i < tabs_link.length; i++) {
				if (event.target == tabs_link[i]) {
					showContent(i);
					break;
				}
			}
		}

	})

	}
module.exports = tabs;
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
function timer_60sec() {
    let minute = 60000 + Date.parse(new Date());

    function getTimeRemaining(endtime) {
        let time = endtime - Date.parse(new Date());
        return time;
    }

    function setClock(endtime) {
        let popup = document.getElementsByClassName('popup')[0];

        function updateClock() {
            let time = getTimeRemaining(endtime);
            if (time < 0 && time > -2000) {
                popup.classList.add('show');
                document.body.style.overflow = 'hidden';
            }

        };
        updateClock();
        setInterval(updateClock, 1000);
    };

    setClock(minute);
}
module.exports = timer_60sec;
},{}]},{},[1]);
