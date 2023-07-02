//Declaring variables
const x =5
var y = 3
let z = x + y

console.log("Answer to " + x + " + " + y +  " = "+ z)


//Data types
let j = 5
console.log("\nType of j - " + typeof j + " (" + j + ")")
j = true
console.log("Type of j - " + typeof j + " (" + j + ")")
j = "TEXT123"
console.log("Type of j - " + typeof j + " (" + j + ")")
j=undefined
console.log("Type of j - " + typeof j + " (" + j + ")")
j=null
console.log("Type of j - " + typeof j + " (" + j + ")")

//Conversion
let a = 2
let b = "3"
let c = a + b
let d = b + a
console.log("\n" + c + " : " + d)
console.log("Type of b - " + typeof b + " (" + b + ")")

let e = parseInt(b)
console.log(typeof e)

let f = parseInt("bob", 10) //NaN
//Check for NaN and execute if true
if (isNaN(f)){
    console.log("f = " + f + " (" + typeof f + ")")
}

