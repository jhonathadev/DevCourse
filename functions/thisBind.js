const person = {
  salutation: "Good morning!",
  speak() {
    console.log(this.salutation);
  }
}

const speak = person.speak();

console.log(speak);

const speakPerson = person.speak.bind(person);
speakPerson()
///////////////////////////////////

function Person() {
  this.age = 0;
  const self = this;
  setInterval(function() {
    self.age++;
    console.log(self.age);
  }/*.bind(this)*/, 1000) // tbm e possivel resolver com o bind ao inves da constante self
}

new Person