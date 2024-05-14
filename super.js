/**
 * super = used to call the constructor or access the poroperties and methods of a parent
 */

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    }
    
    move(speed) {
        console.log(`The ${this.name} moves at speed of ${speed}`)
    }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
    }
    
    run() {
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed)
    }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  swim() {
      console.log(`This ${this.name} can swim`);
      super.move(this.swimSpeed);
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }

  fly() {
      console.log(`This ${this.name} can fly`);
      super.move(this.flySpeed);
  }
}

const rabbit = new Rabbit("rab", 3, 20);
const fish = new Fish("fifi", 2, 10);
const hawk = new Hawk("haha", 3, 14);


console.log(rabbit.name)
console.log(rabbit.age)
console.log(rabbit.runSpeed)
rabbit.run()

console.log(fish.name)
console.log(fish.age)
console.log(fish.swimSpeed)
fish.swim()

console.log(hawk.name)
console.log(hawk.age)
console.log(hawk.flySpeed)
hawk.fly();