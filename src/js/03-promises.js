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
//////////////////////////////////////////////////////////////
// const makeOrder = dish => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ It's your ${dish}`);
//       }
//       reject('❌ Sorry, out of products');
//     }, DELAY);
//   });
// };

// makeOrder('slice').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// };

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

///////////////////////////////////////////

// const makeOrder = dish => {
//   return Promise.resolve(`✅ It's your ${dish}`);
// };

// makeOrder('slice').then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

//////////////////////////////////////////
// function fetch (url) {
// return new Promise(...)
// }

// const fetchPokemonById = id => {
//   return fetch(`https:/pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// };

// fetchPokemonById(1).then(onFatchSuccess).then(onFatchError);
// fetchPokemonById(2).then(onFatchSuccess).then(onFatchError);
// fetchPokemonById(3).then(onFatchSuccess).then(onFatchError);

// function onFatchSuccess(pokemon) {
//   console.log('onFatchSuccess');
//   console.log(pokemon);
// }

// function onFatchError(error) {
//   console.log('onFatchError');
//   console.log(error);
// }

////////////////////////////////////////////////////////

// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('✅ resolve');
//       }
//       reject('❌ reject');
//     });
//     })

// };

// makePromise()
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

////////////////////////////////////////////////////////

// const horses = [
//   'Secretariat',
//   'Eclipse',
//   'West Australian',
//   'Flaying Fox',
//   'Seabiscuit',
// ];

// console.log('%c The race has started', 'color: brown; font-size: 14px;');

// const promisesCollection = horses.map(race);
// // console.log(promisesCollection);

// Promise.race(promisesCollection).then(({ horse, time }) => {
//   console.log(
//     `%c Won ${horse}, finished in ${time} time`,
//     'color:green; font-size: 14px'
//   );
// });

// Promise.all(promisesCollection).then(() => {
//   console.log('%c Check in is over', 'color: blue; font-size: 14px');;
// });

// function race(horse) {
//   return new Promise(resolve => {
//     const time = getRandomTime(2000, 3500);
//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   });
// }

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

/////////////////////////////////////////////////////////////

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// };

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

////////////
// Why undefined???
// const promise = new Promise(resolve => {
//   resolve(10);
// });

// promise
//   .then(value => {
//     new Promise(resolve => {
//       resolve(value * 2);
//     });
//   })
//   .then(value => console.log(value));
///////////////////////////////////////////////

const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random > 0.5) {
    resolve('Yes');
  } else {
    reject('No');
  }
});
