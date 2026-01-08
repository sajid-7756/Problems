// Write a function that returns all even numbers from a given array.

function Even(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(Even([1, 2, 3, 4, 5]));
