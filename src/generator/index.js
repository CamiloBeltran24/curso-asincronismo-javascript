function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

console.log(g.next().value);  //output: 1
console.log(g.next().value); //output: 2
console.log(g.next().value); //output: 3
console.log(g.next().value); // output: undefined


function* iterate(array){
  for (const iterator of array) {
    yield iterator
  }
}

const it = iterate(['Juan','Oscar','Pedro','Christian'])

console.log(it.next().value); //output: Juan
console.log(it.next().value); //output: Oscar
console.log(it.next().value); //output: Pedro
console.log(it.next().value); //output: Christian
console.log(it.next().value); //output: undefined