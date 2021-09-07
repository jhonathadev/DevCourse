const person = {
  salutation: "Good morning!",
  speak() {
    console.log(this.salutation);
  }
}

const speak = person.speak();

console.log(speak);

const speakPerson = person.speak.bind(person);