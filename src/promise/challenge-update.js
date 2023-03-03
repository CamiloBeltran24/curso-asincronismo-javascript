import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1'

function updateData(urlApi, data) {
  const response = fetch(urlApi,{
    method: 'PUT',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return response
}

const data = {
  title: "Productito",
  price: 7894,
  description: "This is a new description for this product"
}

updateData(`${API}/products/262`, data) //se debe enviar un id existente en la API
  .then( response => response.json())
  .then( data => console.log( data ))

