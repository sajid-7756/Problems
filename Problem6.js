// Write a function that returns the sum of all numbers in an array.

function Sum(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}

console.log(Sum([1, 2, 3, 4, 5]));
