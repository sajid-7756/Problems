// Write a function that checks if a string is a palindrome (reads the same forward and backward).

function isPalindrome(string) {
  const plain = string.toLowerCase();
  const reversed = [...plain].reverse().join("");
  return plain === reversed;
}

console.log(isPalindrome("Sajid"));
console.log(isPalindrome("madam"));
