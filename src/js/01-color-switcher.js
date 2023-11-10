function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getRandomGradient() {
  return (
    'linear-gradient(' +
    90 +
    'deg, ' +
    getRandomHexColor() +
    ' 0%, ' +
    getRandomHexColor() +
    ' 100%)'
  );
}

function changeBackgroundColor() {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    document.body.style.background = getRandomGradient();
    document.body.classList.remove('fade-out');
    document.body.classList.add('fade-in');
    setTimeout(() => {
      document.body.classList.remove('fade-in');
    }, 250);
  }, 250);
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
stopBtn.disabled = true;

let intervalId = null;

startBtn.addEventListener('click', () => {
  intervalId = setInterval(changeBackgroundColor, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

// ====== Making Fading ======

// Creating animation for background
const bodyStyle = document.createElement('style');
bodyStyle.textContent = 'body {transition: background 0.5s ease-in-out;}';
document.head.insertAdjacentHTML('beforeend', bodyStyle);

// Adding faders
const fadeInStyle = document.createElement('style');
fadeInStyle.innerHTML = `
  .fade-in {
    opacity: 0.8;
  }
  `;

const fadeOutStyle = document.createElement('style');
fadeOutStyle.innerHTML = `
  .fade-out {
    opacity: 0.2;
    pointer-events: none;
    transition: opacity 0.5s ease-in-out;
  }
`;

document.head.insertAdjacentHTML('beforeend', fadeInStyle);
document.head.insertAdjacentHTML('beforeend', fadeOutStyle);

// ====== Button styles  ======

document.styleSheets[0].insertRule(
  `button {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);

  mix-blend-mode: multiply;

  margin: 15px;
  padding: 15px 30px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #1D1B1B;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid #1D1B1B;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #1D1B1B;
}`
);

document.styleSheets[0].insertRule(`button:disabled {
  display: none;
}`);

// ====== Buttons hover  ======

startBtn.addEventListener('mouseover', hoverIn);
stopBtn.addEventListener('mouseover', hoverIn);
startBtn.addEventListener('mouseout', hoverOut);
stopBtn.addEventListener('mouseout', hoverOut);

function hoverIn() {
  this.style.cssText = `
    color: white;
    box-shadow: inset 0 -100px 0 0 #1D1B1B;
  `;
}

function hoverOut() {
  this.style.cssText = `
  color: #1D1B1B;
  box-shadow: inset 0 0 0 0 #1D1B1B;
`;
}

// ====== Styling <a> link  ======

const link = document.querySelector('a');

link.style.cssText = `
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #1D1B1B;

`;

link.addEventListener('mouseover', () => {
  link.style.cssText = `
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 0.9em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #1D1B1B;
  transition: font-size 0.9s;
  `;
});
link.addEventListener('mouseout', () => {
  link.style.cssText = `
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #1D1B1B;
  transition: font-size 0.9s;
  `;
});
