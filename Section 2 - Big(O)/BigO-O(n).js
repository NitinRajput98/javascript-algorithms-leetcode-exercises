function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

logItems(10);

// The above function has a time complexity of O(n) because it consists of a single loop that runs n times. Each iteration of the loop performs a constant amount of work (logging the value of i), resulting in a total of n operations. Therefore, the time complexity is O(n).
