/*
Complete the function which takes two arguments and 
returns all numbers which are divisible by the given divisor. 
First argument is an array of numbers and the second is the divisor.
*/


// Solution

function divisibleBy(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0)
}

// or

function divisibleBy(numbers, divisor) {
  let newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      newArr.push(numbers[i]);
    }
  }
  return newArr;
}