// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

function CountVowels(string) {
  return [...string.toLowerCase()].filter((str) => "aeiou".includes(str))
    .length;
}

console.log(CountVowels("Programming"));
