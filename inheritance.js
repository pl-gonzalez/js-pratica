/**
 * inheritance = allows a new class to inherit properties and methods from existing class
 */

class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`)
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal {
    name = 'Rabbit';

    run() {
        console.log(`This ${this.name} is running`)
    }
}
class Fish extends Animal {
  name = "Fish";

  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}
class Hawk extends Animal {
  name = "Hawk";

  fly() {
    console.log(`This ${this.name} is flying`);
  }
}


const rabbit = new Rabbit();
const fish = new Fish(); 
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.sleep();
rabbit.eat();
rabbit.run();

console.log(fish.alive);
fish.sleep();
fish.eat();
fish.swim();

console.log(hawk.alive);
hawk.sleep();
hawk.eat();
hawk.fly();