function getRandomHexColor() {
  let color = '';
  do {
    color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } while (color.length < 7);
  return color;
}

// startBtn.addEventListener('mouseover', () => {
//   button.style.backgroundColor = 'blue';
// });

// startBtn.addEventListener('mouseout', () => {
//   button.style.backgroundColor = 'green';
// });

const mainArea = document.body;
mainArea.insertAdjacentHTML('afterbegin', `<div class="main__division"></div>`);
const mainDivision = document.querySelector('.main__division');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
stopBtn.disabled = true;

mainArea.style.height = '100vh';
mainArea.style.width = '100vw';

const colorChanger = () => {
  mainArea.style.background = getRandomHexColor();
};
