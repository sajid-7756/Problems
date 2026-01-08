// Write a function that capitalizes the first letter of each word in a string.

function capitalizeWords(string) {
  return string.split(" ").map((word) => word[0].toUpperCase() + word.slice(1));
}

console.log(capitalizeWords("hello world"));
