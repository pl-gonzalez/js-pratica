/**
 * get -> read a property
 * set -> set a property
 * 
 * helps with validation and validating when reading or writing a property
 */

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth; // _  as prefix means that is private property, dont touch it
//     } else {
//       console.error("Width must be a positive number");
//     }
//   }
//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight; // _  as prefix means that is private property, dont touch it
//     } else {
//       console.error("height must be a positive number");
//     }
//   }

//   get width() {
//     return this._width;
//   }
//   get height() {
//     return this._height;
//     }
    
//     get area() {
//         return this._height * this._width
//     }
// }

// const rec = new Rectangle(2, 4)

// rec.width = 5

// console.log(rec.width)
// console.log(rec.height)
// console.log(rec.area)

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error(
        "first name must be a name and not null",
        typeof firstName === "string"
      );
    }
  }
  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("last name must be a name and not null", typeof lastName);
    }
    }
    
    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        } else {
            console.error("Age must be a number")
        }
    }

    get firstName() {
        return this._firstName
    }

    get lastName() {
        return this._lastName
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }

}

const person = new Person("John", "Square", 38)


console.log(person.fullName)