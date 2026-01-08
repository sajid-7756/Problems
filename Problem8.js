function capitalizeWords(string) {
  return string.split(" ").map((word) => word[0].toUpperCase() + word.slice(1));
}

console.log(capitalizeWords("hello world"));
