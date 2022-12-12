function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyColor = document.querySelector('body');
let timerId = null;

const onClick = () => {
  startBtn.setAttribute('disabled', null);
  timerId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const offClick = () => {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
};

startBtn.addEventListener('click', onClick);
stopBtn.addEventListener('click', offClick);
