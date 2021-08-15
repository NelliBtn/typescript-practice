let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

//Write Your Code here:
function checkCustomersArray(array) {
  for (let el of array) {
    if (typeof el !== 'string') {
      console.log(`Type error: ${el} should be a string!`)
    }
  }
};

function stringPush(val) {
  if (typeof val === 'string') {
    customersArray.push(val);
  }
}

checkCustomersArray(customersArray);