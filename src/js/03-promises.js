import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmitCreatePromises);

function onSubmitCreatePromises(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget.elements;
  const dataForm = {
    delay: delay.value,
    step: step.value,
    amount: amount.value,
  };
  let delayEl = Number(dataForm.delay);
  let stepEl = Number(dataForm.step);
  let amountEl = Number(dataForm.amount);

  if (delayEl < 0 || stepEl < 0 || amountEl < 0) {
    Notify.failure('Data must be positive');
    return;
  }

  for (let position = 1; position <= amountEl; position += 1) {
    createPromise(position, delayEl)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayEl += stepEl;
  }

  event.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
