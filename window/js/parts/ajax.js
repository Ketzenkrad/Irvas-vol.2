function ajax() {
        let message = new Object();
        message.loading = "Загрузка... ";
        message.success = "Спасибо! Скоро мы с вами свяжемся!";
        message.failure = "Ошибка при отправке. ";

        // let message = {
        //     loading = "Загрузка... ",
        //     success = "Спасибо! Скоро мы с вами свяжемся!",
        //     failure = "Ошибка при отправке. "
        // }

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