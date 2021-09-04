
// forma literal
function fun() {
  console.log("hello there");

}
// armazenar em variavel
const fun2 = function () {
  return ("hello");
};

// armazenar em vetor/array

const array = [function (a, b) { return a + b}, fun, fun2]

console.log(array[0](2,3));

// armazenar em objetos

const obj = {
  speak: function () {
    return "Hiii!";
  }
}

console.log(obj.speak());

// funcao como parametro para outra funcao

function run(fun) {
  fun();
}

run(function () {
  console.log("Executing...");
})

// funcao que retorna funcao

function sum (a, b) {
  
  return function (c) {
    console.log(a + b + c );
  }
  
}

sum(2, 3)(3)