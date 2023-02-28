//Para poder usar fetch es necesario instalarlo desde la terminal => npm i node-fetch
import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
  return fetch(urlApi);
}

// fetchData(`${API}/products`)
//   .then((response) => response.json())
//   .then((products) => {
//     console.log(products);
//   })
//   .then(() => {
//     console.log('Hola');
//   })
//   .catch((error) => console.log(error));

// Ejemplo de multiples llamados

fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((response) => response.json())
  .then((product) => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}}`);
  })
  .then((response) => response.json())
  .then((category) => {
    console.log(category.name);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log('Finally'));
