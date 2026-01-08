function CountVowels(string) {
  return [...string.toLowerCase()].filter((str) => "aeiou".includes(str))
    .length;
}

console.log(CountVowels("Programming"));
