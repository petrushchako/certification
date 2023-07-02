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

