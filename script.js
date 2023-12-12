const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2024";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = timeFormat(hours);
    minsEl.innerHTML = timeFormat(minutes);
    secondsEl.innerHTML = timeFormat(seconds);

    console.log(days, hours, minutes, seconds);
}

function timeFormat(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);