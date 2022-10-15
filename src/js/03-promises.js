// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('resolve');
//     }
//     reject('reject');
//   }, 2000);
// });
//------------------------------------
// promise.then(
//   result => {
//   console.log(`✅ Fulfilled promise ${result}`);
// },
//   error => {
//     console.log(`❌ Rejected promise ${error}`);
// });
//----------------------------------------------
// promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log('onFulfilled');
//   console.log(`✅ Fulfilled promise ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected');
//   console.log(`❌ Rejected promise ${error}`);
// }

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);
//     // throw new Error('bag');
//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('I will anyway'));

const makeOrder = dish => {
  const DELAY = 1000;

  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        resolve(`✅ It's your ${dish}`);
      }
      reject('❌ Sorry, out of products');
    }, DELAY);
  }); 
};

makeOrder('slice').then(onMakeOrderSuccess).catch(onMakeOrderError);

function onMakeOrderSuccess(result) {
  console.log('onMakeOrderSuccess');
  console.log(result);
};

function onMakeOrderError(error) {
  console.log('onMakeOrderError');
  console.log(error);
}