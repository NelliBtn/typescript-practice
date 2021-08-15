// Arrays with a fixed sequence of types -- TUPLES
let ourTuple: [string, number, string, boolean] = ['Is', 7, 'our favorite number?', false];

//  ERRORS

// let numbersTuple: [number, number, number] = [1, 2, 3, 4]; // Type Error! numbersTuple should only have three elements.
// let mixedTuple: [number, string, boolean] = ['hi', 3, true] // Type Error! The first elements should be a number, the second a string, and the third a boolean. 

// TUPLES AND ARRAYS ARE NOT THE SAME

/**
 * Tuples and arrays do not have compatible types within TypeScript. 
 * Specifically, we can’t assign an array to a tuple variable, even when the elements are of the correct type.
 */

let tup: [string, string] = ['hi', 'bye'];
let arr: string[] = ['there', 'there'];
tup = ['there', 'there']; // No Errors.
// tup = arr; // Type Error! An array cannot be assigned to a tuple.

let favoriteCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];

favoriteCoordinates = [17, 45, 'N', 142, 30, 'E'];

// favoriteCoordinates[6] = -6.825; // error -> tuple has fixed length