function sum () {
  let sum = 0;
  for (i in arguments) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sum())
console.log(sum(2,2))
console.log(sum(2,3,4,5,6,7,8))
console.log(sum(2,3,4,5,6,7,8, "teste"))
console.log(sum("a"," ","b","c"))