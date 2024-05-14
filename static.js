/**
 * static -> defines properties or methods that belongs a class itself, objects created from that class cannot access static declarations
 */

// class MathUtil {
//     static PI = 3.14;

//     static getDiameter(radius) {
//         return radius * 2
//     }

//     static getCircunference(radius) {
//         return 2 * this.PI * radius
//     }
//     static getArea(radius) {
//         return  this.PI * radius * radius
//     }
// }

// const MathUtil1 = new MathUtil();

// // console.log(MathUtil1.getDiameter(2)) -> Beacause of static keyword, the method que only be accessed by the class

// console.log(MathUtil.PI)
// console.log(MathUtil.getDiameter(20))
// console.log(MathUtil.getCircunference(20))
// console.log(MathUtil.getArea(20))


class User { 
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    sayHello() {
        console.log(`My username is ${this.username}`)
    }

    static getUserCount() {
        console.log(`Users online: ${this.userCount}`)
    }
}

const user1 = new User("Patrick")
const user2 = new User("John Doe")
const user3 = new User("Sandy")

user1.sayHello()
user2.sayHello()
user3.sayHello()


console.log(user1.username)
console.log(user2.username)
console.log(user3.username)
User.getUserCount()
