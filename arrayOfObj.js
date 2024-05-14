const fruits = [
  { name: "Apple", color: "red", calories: 95 },
  { name: "Orange", color: "orange", calories: 45 },
  { name: "Banana", color: "yellow", calories: 105 },
  { name: "Coconut", color: "white", calories: 155 },
  { name: "Pineapple", color: "yellow", calories: 35 },
];

// console.log(fruits[0].name)
// console.log(fruits[1].name)
// console.log(fruits[2].name)
// console.log(fruits[3].name)
// console.log(fruits[4].name)

// For any property in array of objects

fruits.push({ name: "grapes", color: "purple", calories: 62 });


// console.log(fruits)

//                                      forEach()

// fruits.forEach((fruit) => {
//   console.log(fruit.name);
//   console.log(fruit.color);
//   console.log(fruit.calories);
// });


//                                       .map()

const fruitNames = fruits.map((fruit) => fruit.name)
const fruitColors = fruits.map((fruit) => fruit.color)
const fruitCalories = fruits.map((fruit) => fruit.calories)

// console.log(fruitNames)

//                                       .filter()

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow")
const lowCalories = fruits.filter(fruit => fruit.calories < 100)
const highCalories = fruits.filter(fruit => fruit.calories >= 100)


// console.log(yellowFruits)
// console.log(lowCalories)
// console.log(highCalories)


//                                      .reduce()

const maxFruit = fruits.reduce((max, fruit) => {
    return fruit.calories > max.calories ? fruit : max
})
const minFruit = fruits.reduce((min, fruit) => {
  return fruit.calories < min.calories ? fruit : min;
});

// console.log(maxFruit)
// console.log(minFruit)