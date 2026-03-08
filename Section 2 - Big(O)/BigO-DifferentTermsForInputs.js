function logItems(a,b){
    for(let i = 0; i < a; i++) {
        console.log(i)
    }
    for(let j = 0; j < b; j++) {
        console.log(j)
    }
}

logItems(10, 20)

// The above function has a time complexity of O(a + b) because it consists of two separate loops. The first loop runs a times, and the second loop runs b times. This results in a total of a + b operations. Therefore, the time complexity is O(a + b).


function logItems(a,b){
    for(let i = 0; i < a; i++) {
        for(let j = 0; j < b; j++) {
            console.log(i, j) 
        }
    }
}

logItems(10, 20)

// The above function has a time complexity of O(ab) because it consists of two nested loops. The outer loop runs a times, and for each iteration of the outer loop, the inner loop runs b times. This results in a total of a * b operations. Therefore, the time complexity is O(ab).