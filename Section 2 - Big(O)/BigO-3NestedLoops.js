function logItems(n) {
     for(let i = 0; i < n; i++) {
         for(let j = 0; j < n; j++) {
             for(let k = 0; k < n; k++) {
                 console.log(i, j, k) 
             }       
         }       
     } 
 }
 
 logItems(10)

 // The above function has a time complexity of O(n^3) because it consists of three nested loops. The outer loop runs n times, and for each iteration of the outer loop, the second loop also runs n times. Additionally, for each iteration of the second loop, the innermost loop runs n times. This results in a total of n * n * n = n^3 operations. Therefore, the time complexity is O(n^3).