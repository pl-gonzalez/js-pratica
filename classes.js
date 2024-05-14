/**
 * class -> (ES6) provides a more cleaner and structuredway to work with objects
 */

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

    displayProduct() {
      console.log(`Product: ${this.name}`)
      console.log(`Price: ${this.price}`)
    }
    
    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05

const product1 = new Product('shirt', 34.44)
const product2 = new Product('pants', 355.44)

product1.displayProduct()
product2.displayProduct()

const total = product1.calculateTotal(salesTax)
console.log(`Total price: ${total.toFixed(2)}`)