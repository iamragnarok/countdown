daysCounter = document.getElementById("days");
hoursCounter = document.getElementById("hours");
minutesCounter = document.getElementById("mins");
secondsCounter = document.getElementById("seconds");

function countdown(){
    const currentDate = new Date();
    const birthdayDate = new Date("6 Feb 2025");
    const totalSeconds = Math.floor((birthdayDate-currentDate)/1000);
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor((totalSeconds/3600)%24);
    const minutes = Math.floor((totalSeconds/60)%60);
    const seconds = Math.floor(totalSeconds%60);
    daysCounter.innerText = days;
    hoursCounter.innerText = hours;
    minutesCounter.innerText = minutes;
    secondsCounter.innerText = seconds;
}
setInterval(() => {
    countdown();
}, 1000);
