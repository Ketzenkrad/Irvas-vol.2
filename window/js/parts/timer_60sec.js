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