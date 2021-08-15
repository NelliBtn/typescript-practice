// ** is a exponentiation operator === Math.pow()

// parameter type
// rest parameters type
// return type

function addPower(p: number, ...numsToAdd: number[]): number {
  let answer = 0;
  for (let i = 0; i < numsToAdd.length; i++) {
    answer += numsToAdd[i] ** p;
  }
  return answer;
}

// addPower('a string', 4, 5, 6) // will cause error