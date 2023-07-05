let a = new Array(1, 2, 3)
console.log(a + "\nIs of type : " + typeof a + "\nWith " + a.length + " elements")

//Reult of code below will print out the [ 1, 2, 3, <6 empty items>, 10 ]
let b = [1 ,2, 3]
console.log("\n" + b)
b[9] = 10
console.log(b)

//Use array methods to add elements to the array
let c = [1,2,3]
console.log("\n" + c)
c.push(4)
console.log(c)
c.pop()
console.log(c)

console.log("\nArray methods\n" + "-".repeat(40))

// Array methods
let names = ["David", "Eddie", "Alex", "Michael"]
let others = ["Sammy", "Gary", "Wolfgang", "Mark"]
let lost = [4, 8, 15, 16, 23, 42]
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//combining arrays
let combine = lost.concat(fibonacci)
console.log("concat() : " + combine)

//array into a string
console.log("join() : " + fibonacci.join("~"))

//Array pop() method removes last element from the array. shift() removes first element from the array
lost.shift()
console.log("shift() : " + lost)

//Unshift adds elements to the front of the array
lost.unshift(1, 2, 3, 4)
console.log("unshift() : " + lost)

//Reverse order of elements in the array
console.log("names : " + names + 
            "\n\tnames.reverse() : " + names.reverse() +
            "\n\tnames.sort() : " + names.sort() + 
            "\n\tnames.lastIndexOf(\"David\") : " + names.lastIndexOf("David"))

//filter function
let filteredEven = combine.filter( (x) => {if (x%2==0) return x; } )
let filteredHigh = combine.filter( x => {if (x > 15) return x; } )
console.log("Even numbers: " + filteredEven + "\nNumber higher than 15: " + filteredHigh)

//Iterator forEach()
names.forEach(x => {console.log("Hi " + x)})

//every() returns true if every element in the array matches defined condition
console.log("filteredEven.every(x => x%2==0) : " + filteredEven.every(x => x%2==0) + "\nlost.every((x) => (x < 56)) : " + lost.every((x) => (x < 56)))

//some() at least one of the elements matches the condition
console.log("names.some(x => x===\"Alex\") : " + names.some(x => x==="Alex") + "\nnames.every(x => x===\"Alex\") : " + names.every(x => x==="Alex"))