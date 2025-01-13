var Days1 = document.getElementById("days");
var Hours1 = document.getElementById("hours");
var Minutes1 = document.getElementById("minutes");
var Seconds1 = document.getElementById("seconds");

function countdownTimer() {

    const countDowndate = new Date("02/04/2025").getTime(); // Add parentheses to execute getTime()

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const intervel = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDowndate - now;

        Days1.innerText = formatNumber(Math.floor(distance / day));
        Hours1.innerText = formatNumber(Math.floor((distance % day) / hour));
        Minutes1.innerText = formatNumber(Math.floor((distance % hour) / minute));
        Seconds1.innerText = formatNumber(Math.floor((distance % minute) / second));

        if (distance < 0) {
            document.getElementById("headline").innerHTML = "Our Website is ready to use";
            document.getElementById("countdown").style.display = "none";

            clearInterval(intervel);
        }
    }, 1000);
}

function formatNumber(number) {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}

countdownTimer();
