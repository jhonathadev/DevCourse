// Closuse, e o escopo criado quando uma funcao e declarada
// Esse escopo permite a funcao acessar e manipular as variaveis extenas a funcao


const x = "Global";

function outside() {
  const x = "Local";
  function inside() {
    return x;
  }
  return inside;
}

const myFunction = outside();
console.log(myFunction());