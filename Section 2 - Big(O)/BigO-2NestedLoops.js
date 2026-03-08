function logItems(n) {
     for(let i = 0; i < n; i++) {
         for(let j = 0; j < n; j++) {
             console.log(i, j) 
         }       
     } 
 }
 
 logItems(10)

 // The above function has a time complexity of O(n^2) because it consists of two nested loops. The outer loop runs n times, and for each iteration of the outer loop, the inner loop also runs n times. This results in a total of n * n = n^2 operations. Therefore, the time complexity is O(n^2).