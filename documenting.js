/**
 * function logs a string of fruit string to the console
 * @param fruit1 - the first fruit
 * @param fruit2 - the second fruit
 * @returns - void (nothing)
 */
function makeFruitSalad(fruit1, fruit2) {
    var salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
    console.log(salad);
}
/**
 * function proclaims (logs to console) the status (string) repeat(number) times
 * @param status - string with the status, default (when status is not provided) is 'not ready'
 * @param repeat - number of status repeats
 * @returns - void (nothing)
 */
function proclaim(status, repeat) {
    if (status === void 0) { status = 'not ready...'; }
    if (repeat === void 0) { repeat = 1; }
    for (var i = 0; i < repeat; i += 1) {
        console.log("I'm " + status);
    }
}
