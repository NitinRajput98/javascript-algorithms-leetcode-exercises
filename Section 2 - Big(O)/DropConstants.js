function logItems(n) {
  for (leti = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}

logItems(3);

// The above function has a time complexity of O(n) because it consists of two separate loops that each run n times. The first loop runs n times, and the second loop also runs n times, resulting in a total of 2n operations. However, when we drop constants in Big O notation, we ignore the constant factor of 2, leading to a final time complexity of O(n).
