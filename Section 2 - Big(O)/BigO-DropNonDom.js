function logItems(n) {
     for(let i = 0; i < n; i++) {
         for(let j = 0; j < n; j++) {
             console.log(i, j) 
         }       
     } 
 
     for(let k = 0; k < n; k++) {
         console.log(k)
     }
 }
 
 logItems(10)

 // The above function has a time complexity of O(n^2) because it consists of two nested loops. The outer loop runs n times, and for each iteration of the outer loop, the inner loop also runs n times. This results in a total of n * n = n^2 operations. The second part of the function has a single loop that runs n times, which contributes O(n) to the overall time complexity. However, when we drop non-dominant terms in Big O notation, we ignore the O(n) term since O(n^2) grows faster than O(n). Therefore, the final time complexity is O(n^2).