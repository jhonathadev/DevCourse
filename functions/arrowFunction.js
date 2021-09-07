let double = function(a) {
  return 2 * a;
}

double = (a) => {
  return 2 * a;
}

double = a => 2 * a; // return implicito

console.log(double(Math.PI));

let hello = function() {
  return "Hello1";
}

hello = () => "Hello2";
hello = _ => "Hello3";
console.log(hello())
