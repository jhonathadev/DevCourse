const manufacturer = ["Mercedes", "Audi", "Bmw"];

function print(name, indice) {
  console.log(`${indice + 1}. ${name}`);
}

manufacturer.forEach(print);
manufacturer.forEach(function(a) {
  console.log(a);
});
