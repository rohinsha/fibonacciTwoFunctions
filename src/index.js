// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

function findDFibonacciSeries(number) {
  let n1 = 0,
    n2 = 1,
    nextTerm = 0;
  for (let i = 1; i < number; i++) {
    console.log(`${n1} + firstProg`);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return n1;
}
console.log(findDFibonacciSeries(8));
function findDFibonacciSeriesUptoCertainNum(num) {
  let n1 = 0,
    n2 = 1,
    nextTerm = 0;
  while (nextTerm <= num) {
    console.log(`${n1} + secondProg`);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return n1;
}

console.log(findDFibonacciSeriesUptoCertainNum(15));
