function RemoveDuplicate(arr) {
  return [...new Set(arr)];
}

console.log(RemoveDuplicate([1, 2, 3, 2, 1, 3]));
