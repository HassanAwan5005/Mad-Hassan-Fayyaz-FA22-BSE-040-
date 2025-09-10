function add(a, b) {
  if (a === undefined || b === undefined) {
    return "Please provide two numbers for addition";
  }
  return a + b;
}

function subtract(a = 0, b = 0) {
  return a - b;
}

function multiply(...numbers) {
  let result = 1;
  for (let num of numbers) {
    result *= num;
  }
  return result;
}

function divide() {
  if (arguments.length < 2) {
    return "Please provide at least two numbers to divide";
  }
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    result /= arguments[i];
  }
  return result;
}

console.log("Add:", add(5, 10));         
console.log("Add (missing arg):", add(5)); 

console.log("Subtract:", subtract(20, 5)); 
console.log("Subtract (one arg):", subtract(20)); 

console.log("Multiply:", multiply(2, 3, 4));
console.log("Multiply (one arg):", multiply(5));

console.log("Divide:", divide(100, 2, 5));
console.log("Divide (missing arg):", divide(50));
