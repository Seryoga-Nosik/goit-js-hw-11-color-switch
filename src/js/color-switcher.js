const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

stopBtn.disabled = true;
document.body.style.backgroundColor = '#000';

let intervalId = null;

function changeBodyBgColor() {
  const index = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[index];
}

function onStart() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  intervalId = setInterval(changeBodyBgColor, 500);
}

function onStop() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  document.body.style.backgroundColor = '#000';
}

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);
