let pattern = /xyz/;
let value = "This is just a test";
let result = value.match(pattern)
//result = undefined //this would return result undefined as value and type
console.log("\nResult is " + result + " (typeof : "+ typeof result + ")\n")