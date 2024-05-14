/**
 * Date Object -> dates and times
 */

// Date(year, month, day, hour, minute, second, ms)
// const date = new Date(2111,3,12,6,56,56);
// const date = new Date("2112-01-02T12:00:00Z");
// const date = new Date(1712000000000);
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const dayOfWeek = date.getDay()

console.log(year)
console.log(month)
console.log(day)
console.log(hour)
console.log(minute)
console.log(second)

console.log(dayOfWeek)

