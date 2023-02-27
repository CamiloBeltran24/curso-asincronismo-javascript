//Una promesa Tiene 3 Estados
// 1 - Pendiente => cuando la promesa se esta ejecutando
// 2 - Cumplido => Cuando la promesa a retornado información
// 3 - Rechazado

const promise = new Promise(function (resolve, reject) {
  resolve('Hey !');
});

const cows = 20;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows`);
  } else {
    reject('There is no cows on the farm');
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log('Finally'));
