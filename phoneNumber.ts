/* TYPE ANNOTATION or TYPE DECLARATON */

let phoneNumber : string; // value is not assigned, but the type can only be a string

if (Math.random() > 0.5) {
  phoneNumber = '+61770102062';
} else {
  phoneNumber = '7167762323'; // get error if it is a number
}