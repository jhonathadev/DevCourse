const sum = function(a, b) {
  return a + b;
}

const printResult = function(a, b, operation = sum) {
  console.log(operation(a,b));
}

printResult(5,7);
printResult(5,7, (x, y) => x * y);
printResult(3, 3, function(x, y) {
  return x - y;
})

