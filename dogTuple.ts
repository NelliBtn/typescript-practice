/**
 * Type inference returns arrays. 
 * When we want tuples, we need to use explicit type annotations
 */

let examAnswers = [true, false, false]; // is boolean[], NOT [boolean, boolean, boolean], because the tuple is more restrictive


let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];

const myArr = dogTup.concat('clingy');
myArr[50] = 'not a tuple'; // no error, because myArr is not a tuple

/**
 * TypeScript infers the variable myArr as an array of strings, not a tuple
 */