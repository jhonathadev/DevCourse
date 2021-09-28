// armazenando funcao em uma variavel

const printSum = function (a, b) {
  console.log(a+b);
}

printSum(2,3);

// armazenando funcao arrow em uma variavel

const sum = (a, b) => {
  return a + b;
}

console.log(sum(2,4));

// retorno implicito

const sub = (a, b) => a - b;

console.log(sub(3,2));