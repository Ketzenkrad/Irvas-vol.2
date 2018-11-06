function ajax() {
	let message = new Object();
	message.confirm = ' Данные отправилсь';
	message.loaded = 'Отправка данных...';
	message.fail = 'Ошибка при отправке данных';

	let statusMessage = document.createElement('div'),
		 input = document.getElementsByTagName('input');

	function submitForm(name) {
		name.addEventListener("submit", function (event) {
			event.preventDefault();
			name.appendChild(statusMessage);

			let request = new XMLHttpRequest();
			let formData = new FormData(name);

			request.open("POST", "server.php");
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send(formData);

			request.onreadystatechange = function(){
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loaded;
				} else if (request.readyState == 4) {
					if(request.confirm == 200 && request.confirm < 300) {
						statusMessage.innerHTML = message.confirm;
						
					}
				} else {
					statusMessage.innerHTML = message.fail;
				}
			}
			for(let i = 0; i < input.length; i++){
				input[i].value = '';
				
			}
		});

	}
	

}
module.exports = ajax;