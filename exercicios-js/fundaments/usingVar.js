{
  {
    {
      var hi = "Hello"; // funciona como uma variavel global
      console.log(hi)
    }
  }
}

function test() {
  var local = 123 // funciona como uma variavel local, por estar dentro de uma funcao
  console.log(local)
}

console.log(local) // nao consegue encontrar a variavel "local"

var number = 3
{
  {
    {
      var number = 2; // sobreescreve a variavel number
      console.log("Inside: ", number)
    }
  }
}

console.log("Outside: ",number)