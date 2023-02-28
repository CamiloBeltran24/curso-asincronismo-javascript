//mostrar un mensaje después de 2 segundos usando promesas

export function delay(time, message) {
  const promise = new Promise((resolve, reject) => {
    if (time > 0) {
      window.setTimeout(() => resolve(message), time);
    } else {
      reject('Upps');
    }
  });

  return promise;
}

const sayHay = delay(2000, 'Hola mundo');

sayHay
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log('End'));
