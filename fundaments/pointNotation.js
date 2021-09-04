console.log(Math.ceil(6.1));

const obj = {}
obj.name = "John";
console.log(obj.name);


function Obj(name) {
  this.name = name;
}

const obj2 = new Obj("Chair");
const obj3 = new Obj("Mesa");

console.log(obj2.name);
console.log(obj3.name);
