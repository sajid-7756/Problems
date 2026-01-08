function isPalindrome(string) {
  const plain = string.toLowerCase();
  const reversed = plain.split("").reverse().join("");
  return plain === reversed;
}

console.log(isPalindrome("Sajid"));
console.log(isPalindrome("madam"));
