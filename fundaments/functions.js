function printSum(a,b) { //funcao sem retorno
  console.log(a+b);
}

printSum(3,3);
printSum(3);

function sum(a, b = 0) { // funcao com retorno
  return a+b;
}

c = sum(3,3)
console.log(c)
