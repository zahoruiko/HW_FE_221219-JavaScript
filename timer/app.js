const inputHours = document.getElementById('hours');
const inputMinuts = document.getElementById('minuts');
const inputSeconds = document.getElementById('seconds');
const timeElement = document.querySelector('.time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);

let interval = null;
let seconds = 0;

function getInputInSeconds() {
    let hours = +inputHours.value;
    let mins = +inputMinuts.value;
    let secs = +inputSeconds.value;

    seconds = hours * 3600 + mins * 60 + secs;
}

function timer() {
    // Преобразовываем текущие секунды в оставшиеся часы, минуты и секунды
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - hours * 3600) / 60);
    let secs = seconds % 60;

    if(hours < 10) hours = '0' + hours;
    if(mins < 10) mins = '0' + mins;
    if(secs < 10) secs = '0' + secs;

    timeElement.innerText = `${hours}:${mins}:${secs}`;

    if(seconds == 0) stop();

    seconds--;
}

function start() {
    if((seconds > 0) &&  interval) {
        return
    }

    getInputInSeconds();
    interval = setInterval(timer, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
    timeElement.innerText = `__:__:__`;
}