const grades = [7, 9, 2, 10, 5];

for(let i in grades) {
  console.log(`Grade ${i+1}:`, grades[i]);
}


const person = {
  name: "John",
  surname: "Gomes",
  age: 21,
}

for(let attribute in person) {
  console.log(`${attribute}:`, person[attribute]);
}