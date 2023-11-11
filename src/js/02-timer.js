import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const counterInput = document.querySelector('#datetime-picker');
const daysCounter = document.querySelector('[data-days]');
const hoursCounter = document.querySelector('[data-hours]');
const minutesCounter = document.querySelector('[data-minutes]');
const secondsCounter = document.querySelector('[data-seconds]');
const startCounter = document.querySelector('[data-start]');

// ====== adding a "Reset" button ======
const resetCounter = document.createElement('button');
resetCounter.setAttribute('id', 'resetBtn');
startCounter.insertAdjacentElement('afterend', resetCounter);
startCounter.setAttribute('id', 'startBtn');
resetCounter.textContent = 'Reset';
resetCounter.type = 'button';
resetCounter.setAttribute('data-reset', '');
resetCounter.setAttribute('disabled', '');

// ====== adding a Headline ======
const backLink = counterInput.previousElementSibling;
const headline = document.createElement('h1');
headline.className = 'title';
headline.textContent = 'Pick an expiration date';
backLink.insertAdjacentElement('afterend', headline);

let currentDate = null;
let setDate = null;
let progressDate = null;
let timerId = null;
let intervalId = null;

// ====== adding time units conversion function ======

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// ====== adding two-digit form view function ======

const addLeadingZero = value => String(value).padStart(2, '0');

// ====== adding countdown timer function ======

const countDown = () => {
  currentDate = new Date();
  let remainingTime = setDate.getTime() - currentDate.getTime();
  if (remainingTime > 0) {
    remainingTime = convertMs(remainingTime);

    let { days, hours, minutes, seconds } = remainingTime;
    daysCounter.textContent = addLeadingZero(days);
    hoursCounter.textContent = addLeadingZero(hours);
    minutesCounter.textContent = addLeadingZero(minutes);
    secondsCounter.textContent = addLeadingZero(seconds);
    resetCounter.disabled = false;
  } else {
    clearInterval(timerId);
    startCounter.disabled = true;
    resetCounter.disabled = false;
    counterInput.disabled = false;
    iziToast.success({
      title: 'OK',
      message: 'Your wait has ended! Relax...',
    });
  }
};

// ====== adding flatpickr options ======

const options = {
  locale: {
    firstDayOfWeek: 1,
  },
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    currentDate = new Date();
    setDate = selectedDates[0];
    if (setDate.getTime() - currentDate.getTime() > 0) {
      startCounter.disabled = false;
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a future date!',
      });
    }
  },
};

flatpickr('#datetime-picker', options);

// ====== assigning functions to timer control buttons ======

startCounter.disabled = true;

startCounter.addEventListener('click', () => {
  progressDate = new Date();
  timerId = setInterval(countDown, 1000);
  endDiv.style.display = 'block';
  intervalId = populateEnd();
  timer.style.display = 'block';
  startCounter.disabled = true;
  counterInput.style.display = 'none';
  counterInput.disabled = true;
  endDiv.dataset.intervalId = intervalId;
});

resetCounter.addEventListener('click', () => {
  clearInterval(timerId);
  startCounter.disabled = true;
  resetCounter.disabled = true;
  counterInput.style.display = 'block';
  counterInput.disabled = false;
  daysCounter.textContent = '00';
  hoursCounter.textContent = '00';
  minutesCounter.textContent = '00';
  secondsCounter.textContent = '00';
  clearInterval(intervalId);
  endDiv.textContent = '';
  endDiv.style.display = 'none';
  timer.style.display = 'none';
  intervalId = null;
});

// ====== adding "Expiring Time" function =====

const timer = document.body.querySelector('.timer');
timer.style.display = 'none';
timer.insertAdjacentHTML('afterend', `<div class="end"></div>`);
const endDiv = document.querySelector('.end');

function populateEnd() {
  const updateEndDiv = () => {
    const remainingTime = setDate.getTime() - new Date().getTime();
    if (remainingTime > 0) {
      const remainingTimeObj = convertMs(remainingTime);
      const { days, hours, minutes, seconds } = remainingTimeObj;
      endDiv.textContent = `Time's up in: ${addLeadingZero(
        days
      )} Days ${addLeadingZero(hours)}:${addLeadingZero(
        minutes
      )}:${addLeadingZero(seconds)}`;
    } else {
      endDiv.textContent = 'Time has expired!';
    }
  };
  updateEndDiv();
  const intervalId = setInterval(updateEndDiv, 1000);
  return intervalId;
}

// ====== Styles ======

const headTitle = document.head.querySelector('title');

headTitle.insertAdjacentHTML(
  'afterend',
  `<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
    `
);

document.styleSheets[0].insertRule(`body {
  height: 100vh;
  background: #0f3854;
  background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%);
  background-size: 100%;
  background-repeat: no-repeat;
}`);

document.styleSheets[0].insertRule(` .title {
  font-family: 'Share Tech Mono', monospace;
    color: #ffffff;
    text-align: center;
    color: #daf6ff;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  
}`);

document.styleSheets[0].insertRule(`#datetime-picker {
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translate(-50%, -50%);
  width: 308px;
  padding: 5px;
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.5em;
  text-align: center;
  outline: none;
  border: none;
  color: #daf6ff;
  background-color: transparent;
}`);

document.styleSheets[0].insertRule(`#startBtn:disabled{
  display: none;
}`);

document.styleSheets[0].insertRule(`#startBtn {
  position: absolute;
  left: 50%;
  bottom: 100px;
  transform: translate(-50%, -50%);
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.5em;
  text-align: center;
  padding: 5px 25px;
  color: #daf6ff;
  // text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  background-color: transparent;
  border: none;
  cursor: pointer;
}`);

document.styleSheets[0].insertRule(`#startBtn:hover {
  // border: 1px solid #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 9);
}`);

document.styleSheets[0].insertRule(`#resetBtn:disabled{
  display: none;
}`);

document.styleSheets[0].insertRule(`#resetBtn {
  position: absolute;
  left: 50%;
  bottom: 100px;
  transform: translate(-50%, -50%);
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.5em;
  text-align: center;
  padding: 5px 25px;
  color: #daf6ff;
  // text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  background-color: transparent;
  border: none;
  cursor: pointer;
}`);

document.styleSheets[0].insertRule(`#resetBtn:hover {
  // border: 1px solid #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 9);
}`);

document.styleSheets[0].insertRule(`.field {
 display: none;
}`);

document.styleSheets[0].insertRule(`.end {
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translate(-50%, -50%);
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.5em;
  color: #daf6ff;
}`);
