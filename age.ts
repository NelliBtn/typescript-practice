/* TYPE INFERENCES */

let aged = true;
let realAge = 0; // variable can never be reassigned a value of a different data type

if (aged) {
  realAge = 4; // must be number
}

let dogAge = realAge * 7;

console.log(`${dogAge} years`);
