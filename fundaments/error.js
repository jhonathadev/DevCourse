function printNameUpperCase(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!');
  } catch(e) {
    handlingError(e);
  } finally {
    console.log('final');
  }
}

function handlingError(error) {
  //throw new Error("Algo errado aconteceu!");
  throw {
    name: error.name,
    msg: error.message,
    date: new Date,
  }
}

const obj = { name: "Roberto" }
printNameUpperCase(obj);

