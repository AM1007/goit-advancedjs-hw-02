# goit-advancedjs-hw-02

### Task 1. Color switcher

Complete this task in the files `01-color-switcher.html` and
`01-color-switcher.js`.

Take a look at the demo video of the color switcher in action.

https://user-images.githubusercontent.com/17479434/127716753-fabd276f-6a7d-411b-bfa2-01c818f4ea66.mp4

The HTML contains "Start" and "Stop" buttons.

```html
<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>
```

Write a script that, after clicking the "Start" button, changes the background
color of the `<body>` element to a random value once per second using inline
style. Clicking the "Stop" button should stop the background color change.

> [!warning] WARNING Take into account that the "Start" button can be pressed an
> infinite number of times. Make it so that while the theme change is running,
> the "Start" button is inactive (disabled).

To generate a random color, use the `getRandomHexColor` function.

```js
function getRandomHexColor() {
return #${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)};
}
```

---

### Task 2. Countdown Timer

Complete this task in the files `02-timer.html` and `02-timer.js.` Write a
countdown timer script that counts down to a specific date. Such a timer can be
used on blogs, online stores, event registration pages, during maintenance, and
more.

Take a look at the demo video of the timer in action.

https://user-images.githubusercontent.com/17479434/127672390-2a51efe1-06fb-41dd-86dd-8542393d3043.mp4

#### Interface Elements

The HTML includes a ready-made timer layout, date picker fields, and a button
that, when clicked, should start the timer. Add minimal styling to the interface
elements.

```html
<input type="text" id="datetime-picker" />
<button type="button" data-start>Start</button>

<div class="timer">
  <div class="field">
    <span class="value" data-days>00</span>
    <span class="label">Days</span>
  </div>
  <div class="field">
    <span class="value" data-hours>00</span>
    <span class="label">Hours</span>
  </div>
  <div class="field">
    <span class="value" data-minutes>00</span>
    <span class="label">Minutes</span>
  </div>
  <div class="field">
    <span class="value" data-seconds>00</span>
    <span class="label">Seconds</span>
  </div>
</div>
```

#### The `flatpickr` library

Use the [flatpickr](https://flatpickr.js.org/) library to enable users to select
the end date and time in a single interface element with cross-browser
compatibility. To include the library's CSS code in your project, you'll need to
add an additional import in addition to what's described in the documentation.

```js
// Described in the documentation
import flatpickr from 'flatpickr';
// Additional styles import
import 'flatpickr/dist/flatpickr.min.css';
```

The library expects to be initialized on the `input[type="text"]` so we've added
an input field `input#datetime-picker` to the HTML document.

```html
<input type="text" id="datetime-picker" />
```

The second argument of the `flatpickr(selector, options)` function allows you to
pass an optional object containing parameters. We've prepared an object for you
that's needed to complete the task. Take a look at what each property is
responsible for in the
["Options" documentation](https://flatpickr.js.org/options/) and use it in your
code.

```js
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
```

#### Date selection

The `onClose()` method from the options object is called every time the
`flatpickr` interface element is closed. This is where you should handle the
date selected by the user. The `selectedDates` parameter is an array of selected
dates, so you can access the first element to work with the chosen date.

- If the user selects a date in the past, display a `window.alert()` with the
  text `"Please choose a date in the future"`.
- If the user selects a valid date (in the future), the "Start" button becomes
  active.
- The "Start" button should remain inactive until the user selects a date in the
  future.
- By clicking the "Start" button, the countdown to the selected date begins from
  the moment of clicking.

#### Countdown timer

By clicking the "Start" button, the script should calculate once per second how
much time is left until the specified date and update the timer interface,
displaying four digits: days, hours, minutes, and seconds in the format
`xx:xx:xx:xx`.

- The number of days can consist of more than two digits.
- The timer should stop when it reaches the end date, which is `00:00:00:00`.

> [!tip]WE WON'T COMPLICATE IT. If the timer is running and you want to select a
> new date and restart it, you'll need to reload the page.

To calculate the values, use the provided `convertMs` function, where `ms`
represents the difference between the end date and the current date in
milliseconds.

```js
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
```

#### Time formatting

The `convertMs()` function returns an object with the calculated time remaining
until the end date. Please note that it doesn't format the result. In other
words, if there are 4 minutes or any other time component remaining, the
function will return `4`, not `04`. In the timer interface, it's necessary to
add a leading zero if the value has fewer than two characters. Write a
`addLeadingZero(value)` function that uses the `padStart()` method to format the
value before rendering it in the interface.

#### The message library

> [!warning] WARNING.The following functionality is not mandatory for completing
> the task but will be a good additional practice.

To display messages to the user, use the
[iziToast](https://izitoast.marcelodolza.com/) library instead of
`window.alert()`.

To include the library's CSS code in your project, you'll need to add an
additional import in addition to what's described in the documentation.

```js
// Described in documentation
import iziToast from 'izitoast';
// Additional styles import
import 'izitoast/dist/css/iziToast.min.css';
```

---

### Task 3. Promises generator

Complete this task in the files `03-promises.html` and `03-promises.js`.

Watch the demo video of the promises generator in action.

https://user-images.githubusercontent.com/17479434/127932183-42232f26-4db2-4614-86bc-6bec54b1d6a4.mp4

The HTML contains a form layout with fields where the user will input the
initial delay in milliseconds, the increment for delay for each promise after
the first one, and the number of promises to create.

```html
<form class="form">
  <label>
    First delay (ms)
    <input type="number" name="delay" required />
  </label>
  <label>
    Delay step (ms)
    <input type="number" name="step" required />
  </label>
  <label>
    Amount
    <input type="number" name="amount" required />
  </label>
  <button type="submit">Create promises</button>
</form>
```

Write a script that, upon form submission, calls the function
`createPromise(position, delay)` as many times as the user entered in the
`amount` field. During each call, pass it the `position` (the promise number
being created), taking into account the initial delay (`delay`) entered by the
user, and the step (incremental delay).

```js
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
```

Enhance the `createPromise` function to return a single promise that either
resolves or rejects after a specified `delay`. The promise's value should be an
object with properties `position` and `delay`, matching the function's
parameters. Use the initial code structure of the function to determine whether
to fulfill or reject the promise.

```js
createPromise(2, 1500)
.then(({ position, delay }) => {
console.log(✅ Fulfilled promise ${position} in ${delay}ms);
})
.catch(({ position, delay }) => {
console.log(❌ Rejected promise ${position} in ${delay}ms);
});
```

#### The message library

> [!warning] WARNING.The following functionality is not mandatory for completing
> the task but will be a good additional practice.

To display messages to the user, use the
[iziToast](https://izitoast.marcelodolza.com/) library instead of
`console.log()`.
