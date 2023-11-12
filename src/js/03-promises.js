import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formArea = document.querySelector('.form');
const inputFields = document.querySelectorAll('input');
const submitButton = document.querySelector('button[type="submit"]');

//  ====== creating Promise generator ======
let promiseDelay = null;
let promiseStep = null;
let promiseAmount = null;
let promiseElapsed = null;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      promiseElapsed = delay;
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(position);
      } else {
        reject(position);
      }
    }, delay);
  });
}

const formManipulate = {
  block() {
    submitButton.disabled = true;
    [...inputFields].forEach(element => {
      element.disabled = true;
    });
  },

  reset() {
    formArea.reset();
    submitButton.disabled = false;
    [...inputFields].forEach(element => {
      element.disabled = false;
    });
  },
};

formArea.addEventListener('submit', event => {
  event.preventDefault();
  promiseDelay = parseInt(event.currentTarget.elements[0].value);
  promiseStep = parseInt(event.currentTarget.elements[1].value);
  promiseAmount = parseInt(event.currentTarget.elements[2].value);

  progressBar.start();
  formManipulate.block();

  for (let i = 0; i < promiseAmount; i += 1) {
    createPromise(i + 1, promiseDelay + promiseStep * i)
      .then(value => {
        iziToast.success({
          progressBar: false,
          close: false,
          position: 'topRight',
          icon: '',
          message: `✅ Fulfilled promise ${value} in ${promiseElapsed}ms`,
        });
        if (value === promiseAmount) {
          progressBar.done();
          formManipulate.reset();
        }
      })
      .catch(value => {
        iziToast.error({
          progressBar: false,
          close: false,
          position: 'topRight',
          icon: '',
          message: `❌ Rejected promise ${value} in ${promiseElapsed}ms`,
        });
        if (value === promiseAmount) {
          progressBar.done();
          formManipulate.reset();
        }
      });
  }
});

// ====== adding Form labels mechanics ======
const label = document.querySelectorAll('label');

[...label].forEach(element => {
  element.insertAdjacentHTML(
    'beforeend',
    `<div class="input-background"></div>`
  );
});

label[label.length - 1].insertAdjacentHTML(
  'afterend',
  `<div class="progress">
        <div class="generator"></div>
        <div class="spiner"></div>
      </div>`
);

// ====== adding Form animations
[...inputFields].forEach(element => {
  element.setAttribute('min', 1);
});

[...inputFields].forEach(element => {
  element.addEventListener('focus', event => {
    event.target.nextElementSibling.classList.add('focused');
  });
  element.addEventListener('blur', event => {
    event.target.nextElementSibling.classList.remove('focused');
  });
});

const progressBar = {
  progress: document.querySelector('.progress'),
  generator: document.querySelector('.generator'),
  spiner: document.querySelector('.spiner'),
  generatorTimer: undefined,
  spinerTimer: undefined,
  genStepVar: 1,
  spinStepVar: 1,

  start() {
    this.generatorTimer = setInterval(() => {
      switch (this.genStepVar) {
        case 1:
          this.generator.textContent = 'Resolving';
          this.genStepVar += 1;
          break;
        case 2:
          this.generator.textContent = 'Resolving.';
          this.genStepVar += 1;
          break;
        case 3:
          this.generator.textContent = 'Resolving..';
          this.genStepVar += 1;
          break;
        case 4:
          this.generator.textContent = 'Resolving...';
          this.genStepVar = 1;
          break;
      }
    }, 500);
    this.spinerTimer = setInterval(() => {
      switch (this.spinStepVar) {
        case 1:
          this.spiner.textContent = '╱';
          this.spinStepVar += 1;
          break;
        case 2:
          this.spiner.textContent = '──';
          this.spinStepVar += 1;
          break;
        case 3:
          this.spiner.textContent = '╲';
          this.spinStepVar += 1;
          break;
        case 4:
          this.spiner.textContent = '│';
          this.spinStepVar = 1;
          break;
      }
    }, 200);
  },

  done() {
    clearInterval(this.generatorTimer);
    this.generatorTimer = undefined;
    clearInterval(this.spinerTimer);
    this.spinerTimer = undefined;
    this.progress.innerHTML = `<div class="done">Done!</div>`;
    setTimeout(() => {
      this.progress.innerHTML = `<div class="generator"></div>
        <div class="spiner"></div>`;
      this.generator = document.querySelector('.generator');
      this.spiner = document.querySelector('.spiner');
    }, 2000);
  },
};

// ====== adding Fonts ======
const headTitle = document.head.querySelector('title');

headTitle.insertAdjacentHTML(
  'afterend',
  `<link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
      rel="stylesheet"
    />
    <link
      rel="preload"
      href="https://upload.wikimedia.org/wikipedia/commons/8/8a/10x10_checkered_board_transparent.svg"
      as="image"
      type="image/svg+xml"
      crossorigin
    />`
);

// ====== adding Styles =======

const link = document.querySelector('a');
link.setAttribute('id', 'pageLink');
document.body.style.cssText = `overflow: hidden; width: 100vw; height: 100vh; background: radial-gradient(transparent, #e9e9e9);`;

const styles = document.styleSheets[0];

styles.insertRule(` #pageLink {
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #1D1B1B;
}`);

styles.insertRule(` #pageLink:hover {
  color: #00f;
}`);

styles.insertRule(`@-webkit-keyframes anim-gradient {
  0% {
    background-position: -50% -50%;
  }
  25% {
    background-position: 75% 200%;
  }
  50% {
    background-position: 200% -50%;
  }
  75% {
    background-position: 75% -200%;
  }
  100% {
    background-position: -50% -50%;
  }
}`);

styles.insertRule(`.form {
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #00f;
  box-shadow: 0 0 0 3px #0ff, 0 0 0 5px #00f, 0 0 0 8px #0ff, 0 0 0 12px #00f,
    15px 15px 0px 10px #00000099;
  color: #0ff;
  font-family: 'VT323', monospace;
  font-size: 20px;
  -webkit-font-smoothing: none;
}`);

styles.insertRule(`.form::before {
  content: 'PROMISE GENERATOR';
  position: absolute;
  top: 0%;
  left: 50%;
  height: 15px;
  transform: translate(-50%, -11px);
  background-color: #0ff;
  color: #00f;
  padding: 1px 5px 0px 5px;
  vertical-align: text-top;
  line-height: 12px;
}`);

styles.insertRule(`label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}`);

styles.insertRule(`label:first-of-type {
  margin-top: 100px;
}`);

styles.insertRule(`.input-background {
  pointer-events: none;
  position: absolute;
  right: 30px;
  display: block;
  width: 180px;
  height: 22px;
  background-color: #00ffff96;
  -webkit-mask-image: url(https://upload.wikimedia.org/wikipedia/commons/8/8a/10x10_checkered_board_transparent.svg);
  mask-image: url(https://upload.wikimedia.org/wikipedia/commons/8/8a/10x10_checkered_board_transparent.svg);
  -webkit-mask-size: 12%;
  mask-size: 12%;
  -webkit-mask-repeat: repeat;
  mask-repeat: repeat;
}`);

styles.insertRule(`.focused {
  -webkit-mask-image: none !important;
  mask-image: none !important;
}`);

styles.insertRule(`input[type='number'] {
  z-index: 1;
  width: 180px;
  height: 22px;
  padding: 0 5px 0;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  caret-color: #f00;
  border: solid 2px transparent;
  background-color: transparent;
  color: #fff;
  -moz-appearance: textfield;
}`);

styles.insertRule(`input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}`);

styles.insertRule(`input[type='number']:focus {
  border: dotted 2px #00ffff96;
}`);

styles.insertRule(`.progress {
  position: absolute;
  top: 280px;
  left: 50%;
  width: 130px;
  height: 30px;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
}`);

styles.insertRule(`.generator {
  width: 100px;
}`);

styles.insertRule(`.spiner {
  width: 25px;
  text-align: center;
}`);

styles.insertRule(`.done {
  width: 100%;
  text-align: center;
}`);

styles.insertRule(`button[type='submit'] {
  cursor: pointer;
  display: block;
  width: 150px;
  height: 50px;
  background-color: #fff;
  border: none;
  outline: none;
  box-shadow: 5px 5px 0px 0px #00000099;
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
  text-align: center;
  margin-top: 120px;
}`);

styles.insertRule(`button[type='submit']:focus,
button[type='submit']:hover {
  background-color: #ff0;
}`);

styles.insertRule(`button[type='submit']:active {
  background-color: #ff0;
  box-shadow: none;
  transform: translate(5px, 5px);
}`);

styles.insertRule(`button[type='submit']:disabled {
  cursor: not-allowed;
  background-color: silver;
  color: gray;
}`);

styles.insertRule(`button[type='submit']:disabled:focus, button[type='submit']:disabled:hover {
  background-color: silver;
}`);

styles.insertRule(`button[type='submit']:disabled:active {
  transform: none;
  box-shadow: 5px 5px 0px 0px #00000099;
}
`);
