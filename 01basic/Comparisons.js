// console.log( 2 > 3);
// console.log(3 < 2);
// console.log(2 ==2);
// console.log( 2 >= 3)
// console.log(3 <= 2)
// console.log("2" == 2)
// console.log("2" === 2)
// console.log(null == 0)
// console.log(null >=0)
// console.log(null <= 0)
// console.log(null > 0)
// console.log(null < 0)
// console.log(null === 0)

// console.log(undefined == 0)

const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
