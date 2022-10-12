const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

let idInterval = null;
let isActive = false;

refs.btnStart.addEventListener('click', onClickStartChangeColor);
refs.btnStop.addEventListener('click', onClickStopChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStartChangeColor(event) {
  if (isActive) {
    return;
  }

  isActive = true;
  refs.body.style.backgroundColor = getRandomHexColor();

  idInterval = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    console.log('change color');
  }, 1000);
}

function onClickStopChangeColor(event) {
  clearInterval(idInterval);
    isActive = false;
}
