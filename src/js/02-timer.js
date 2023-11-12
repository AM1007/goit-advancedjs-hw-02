import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const counterInput = document.querySelector('#datetime-picker');
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
let timerId1 = null;
let timerId2 = null;

// ====== adding Time Units conversion function ======

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

// ====== adding Two-digit form view function ======

const addLeadingZero = value => String(value).padStart(2, '0');

// ====== adding Flatpickr options ======

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

// ====== adding a Countdown function function =====

const timer = document.body.querySelector('.timer');
timer.insertAdjacentHTML(
  'afterend',
  `
  <div class="end"></div>
  <div class="progress">
    <div class="circle"></div>
    <span class="percentage"></span>
  </div>
`
);
const endDiv = document.querySelector('.end');

function countDown() {
  currentDate = new Date();
  let remainingTime = setDate.getTime() - currentDate.getTime();
  if (remainingTime > 0) {
    resetCounter.disabled = false;
    const { days, hours, minutes, seconds } = convertMs(remainingTime);
    endDiv.textContent = `Time's up in: ${addLeadingZero(
      days
    )} Days ${addLeadingZero(hours)}:${addLeadingZero(
      minutes
    )}:${addLeadingZero(seconds)}`;
  } else {
    progressCircle.style.background = `conic-gradient(#fafafa 0deg 360deg, transparent 360deg 360deg)`;
    progressPercent.textContent = `100%`;
    endDiv.textContent = 'Time has expired!';
    clearInterval(timerId1);
    clearInterval(timerId2);
    startCounter.disabled = true;
    resetCounter.disabled = false;
    iziToast.success({
      title: 'OK',
      message: 'Your wait has ended! Relax...',
    });
  }
}

// ====== adding Progress bar ======
const progressCircle = document.querySelector('.circle');
const progressPercent = document.querySelector('.percentage');

const initialProgressCircleStyles = {
  background: progressCircle.style.background,
};

const progressBar = () => {
  let nowDate = new Date();
  let hundredPercent = setDate.getTime() - progressDate.getTime();
  let currentProgress = setDate.getTime() - nowDate.getTime();
  let percentCoeficient = (hundredPercent - currentProgress) / hundredPercent;
  if (percentCoeficient > 1) {
    percentCoeficient = 1;
  }
  let progressDegrees = Math.round(360 * percentCoeficient);
  let progressNumber = Math.round(percentCoeficient * 100);
  progressCircle.style.background = `conic-gradient(#daf6ff 0deg ${progressDegrees}deg, transparent ${progressDegrees}deg 360deg)`;
  progressPercent.textContent = `${progressNumber}%`;
};

// ====== assigning functions to Timer Control buttons ======

startCounter.disabled = true;

startCounter.addEventListener('click', () => {
  timerId1 = setInterval(countDown, 1000);
  timerId2 = setInterval(progressBar, 100);
  startCounter.disabled = true;
  counterInput.disabled = true;
  endDiv.style.display = 'block';
  counterInput.style.display = 'none';
  progressDate = new Date();
});

resetCounter.addEventListener('click', () => {
  resetCounter.disabled = true;
  counterInput.disabled = false;
  counterInput.style.display = 'block';
  if (progressCircle) {
    progressCircle.style.background = initialProgressCircleStyles.background;
  }
  progressPercent.textContent = '';
  endDiv.textContent = '';
  endDiv.style.display = 'none';
  clearInterval(timerId1);
  clearInterval(timerId2);
});

// ====== Styles ======

const headTitle = document.head.querySelector('title');
const link = document.querySelector('a');
link.setAttribute('id', 'pageLink');
const styles = document.styleSheets[0];

headTitle.insertAdjacentHTML(
  'afterend',
  `<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
    `
);

styles.insertRule(`body {
  height: 100vh;
  background: #0f3854;
  background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%);
  background-size: 100%;
  background-repeat: no-repeat;
}`);

styles.insertRule(` #pageLink {
  text-decoration: none;
  font-family: 'Share Tech Mono', monospace;
  color: #456671;
}`);

styles.insertRule(` #pageLink:hover {
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
}`);

styles.insertRule(` .title {
  font-family: 'Share Tech Mono', monospace;
    text-align: center;
    color: #daf6ff;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
}`);

styles.insertRule(`#datetime-picker {
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

styles.insertRule(`#startBtn:disabled{
  display: none;
}`);

styles.insertRule(`#startBtn {
  position: absolute;
  left: 50%;
  bottom: 80px;
  transform: translate(-50%, -50%);
  font-family: 'Share Tech Mono', monospace;
  font-size: 2em;
  text-align: center;
  padding: 5px 25px;
  color: #daf6ff;
  // text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  background-color: transparent;
  border: none;
  cursor: pointer;
}`);

styles.insertRule(`#startBtn:hover {
  // border: 1px solid #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 9);
}`);

styles.insertRule(`#resetBtn:disabled{
  display: none;
}`);

styles.insertRule(`#resetBtn {
  position: absolute;
  left: 50%;
  bottom: 80px;
  transform: translate(-50%, -50%);
  font-family: 'Share Tech Mono', monospace;
  font-size: 2em;
  text-align: center;
  padding: 5px 25px;
  color: #daf6ff;
  // text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  background-color: transparent;
  border: none;
  cursor: pointer;
}`);

styles.insertRule(`#resetBtn:hover {
  // border: 1px solid #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 9);
}`);

styles.insertRule(`.field {
 display: none;
}`);

styles.insertRule(`.end {
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translate(-50%, -50%);
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.5em;
  color: #daf6ff;
}`);

// Progress bar styles

styles.insertRule(`.progress {
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 350px;
  border-radius: 50%;
}`);

styles.insertRule(`@-webkit-keyframes circle-in-center {
  from {
    -webkit-clip-path: circle(125%);
    clip-path: circle(125%);
  }
  to {
    -webkit-clip-path: circle(0%);
    clip-path: circle(0%);
  }
}`);

styles.insertRule(`@keyframes circle-in-center {
  from {
    -webkit-clip-path: circle(125%);
    clip-path: circle(125%);
  }
  to {
    -webkit-clip-path: circle(0%);
    clip-path: circle(0%);
  }
}`);

styles.insertRule(`.circle {
  display: block;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  transform: rotate(-180deg);
  -webkit-mask-image: radial-gradient(
    circle at 50% 50%,
    transparent 60%,
    black 40%
  );
  mask-image: radial-gradient(circle at 50% 50%, transparent 60%, black 40%);
}`);

styles.insertRule(`.percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Share Tech Mono', monospace;
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  font-size: 70px;
}`);
