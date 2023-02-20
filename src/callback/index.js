function sumar(valor1, valor2) {
  return valor1 + valor2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2); // llamado a la función callback en este caso la función recibida es sumar
}

console.log(calc(10, 32, sumar)); // => No es necesario pasar la función con paréntesis

// Ejemplo2

setTimeout(function () {
  console.log('Hola Mundo');
}, 2000);

// Ejemplo 3

function greeting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, 'Christian');
