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