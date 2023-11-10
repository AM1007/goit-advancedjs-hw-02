import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
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
startCounter.insertAdjacentElement('afterend', resetCounter);
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
let timerId1 = null;

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

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

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
    clearInterval(timerId1);
    startCounter.disabled = false;
    resetCounter.disabled = true;
    counterInput.disabled = false;
    iziToast.success({
      title: 'OK',
      message: 'Your wait has ended! Relax...',
    });
  }
};

// ====== adding flatpickr options ======

const options = {
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
  timerId1 = setInterval(countDown, 1000);
  endDiv.style.display = 'block';
  populateEnd();
  timer.style.display = 'block';
  startCounter.disabled = true;
  counterInput.disabled = true;
});

resetCounter.addEventListener('click', () => {
  clearInterval(timerId1);
  startCounter.disabled = true;
  resetCounter.disabled = true;
  counterInput.disabled = false;
  daysCounter.textContent = '00';
  hoursCounter.textContent = '00';
  minutesCounter.textContent = '00';
  secondsCounter.textContent = '00';
  endDiv.textContent = '';
  endDiv.style.display = 'none';
  timer.style.display = 'none';
});

// ====== adding "Expiring Time" function =====

const timer = document.body.querySelector('.timer');
timer.style.display = 'none';
timer.insertAdjacentHTML('afterend', `<div class="end"></div>`);
const endDiv = document.querySelector('.end');

function populateEnd() {
  endDiv.textContent = `Expiring time: ${setDate.getDate()}.${
    setDate.getMonth() + 1
  }.${setDate.getFullYear()} ${setDate.getHours()}:${setDate.getMinutes()}`;
}

// ====== Styles ======

startCounter.setAttribute('id', 'startBtn');
resetCounter.setAttribute('id', 'resetBtn');

document.styleSheets[0].insertRule(`#startBtn:disabled{
  display: none;
}`);

document.styleSheets[0].insertRule(`#resetBtn:disabled{
  display: none;
}`);
