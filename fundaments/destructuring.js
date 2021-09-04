
const person = {
  name: "Ana",
  age: 5,
  address: {
    street: "554 test",
    //city: "New York"
  }
}

const { name, age } = person;
console.log(name, age);

const { name: n, age: a } = person;
console.log(n, a);


const { lastname, middlename = true } = person;
console.log(lastname, middlename);


const { address: { street, city="Bayonne" }} = person;
console.log(street, city); 