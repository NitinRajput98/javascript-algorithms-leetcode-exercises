let num1 = 10
let num2 = num1

console.log(num1) // 10
console.log(num2) // 10
num1 = 20
console.log(num1) // 20
console.log(num2) // 10

let obj1 = { name: 'Alice' }
let obj2 = obj1

console.log(obj1) // { name: 'Alice' }
console.log(obj2) // { name: 'Alice' }
obj1.name = 'Bob'
console.log(obj1) // { name: 'Bob' }
console.log(obj2) // { name: 'Bob' }

// In the above code, num1 and num2 are primitive values (numbers), 
// so when we assign num1 to num2, we are copying the value. 
// Therefore, when we change num1 to 20, it does not affect num2, which remains 10.

// On the other hand, obj1 and obj2 are objects, which are reference types. 
// When we assign obj1 to obj2, we are copying the reference to the same object in memory. 
// Therefore, when we change the name property of obj1 to 'Bob', it also changes the name 
// property of obj2, since both obj1 and obj2 point to the same object in memory.

let obj3 = { name: 'Charlie' }
obj1 = obj3
obj2 = obj3

console.log(obj1) // { name: 'Charlie' }
console.log(obj2) // { name: 'Charlie' }
// In this case, we create a new object obj3 and assign it to both obj1 and obj2.
// Now, obj1 and obj2 both reference the same new object in memory, which has the name 'Charlie'. 
// Therefore, when we log obj1 and obj2, they both show { name: 'Charlie' }.

// But the object that obj1 and obj2 were originally referencing (the one with the name 'Bob') still exists in memory,
//  but it is no longer referenced by any variable. So it becomes eligible for garbage collection, 
// meaning that the memory it occupies can be reclaimed by the JavaScript engine when needed. 
// These objects are removed from memory by garbage collection.