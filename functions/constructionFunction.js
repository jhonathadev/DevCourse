function Car(maxSpeed = 200, delta = 5) {

  // atributo privado
  let speed = 0;

  // metodo publico
  this.speedUp = function() {
    if(speed + delta <= maxSpeed) {
      this.setSpeed(delta);
    } else {
      speed = maxSpeed;
    }
  }

  // metodo publico 
  this.getSpeed = function() {
    return speed;
  }

  this.setSpeed = function(delta) {
    speed += delta;
  }
}

const uno = new Car;
uno.speedUp()
console.log(`Uno: ${uno.getSpeed()}`);

const ferrari = new Car(350, 30);
ferrari.speedUp();
ferrari.speedUp();
ferrari.speedUp();
console.log(`Ferrari: ${ferrari.getSpeed()}`);