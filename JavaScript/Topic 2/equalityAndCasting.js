let a;
console.log(typeof a) //undefined

let b=null;
console.log(typeof b)//object
console.log(a==b)//true since both are undefined
console.log(a===b)//false since a is undefined, but b is an object

let c=true;
console.log(typeof c)//boolean
console.log(Boolean("")) // false for empty string
console.log(Boolean("abc")) // true
console.log(Boolean(0)) // false
console.log(Boolean(1234)) // true
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false

let d=123;
console.log(typeof d)//number
console.log(+f+d) //246 Unary (+) casting return sum of two numbers
console.log(Number(f)+d) //246 Casting string to number returns the sum of two numbers
console.log(parseInt(f)+d)// 246

let e="some text";
console.log(typeof e)//string
console.log(Array.from(e)) // ['s', 'o', 'm', 'e', ' ', 't', 'e', 'x', 't']
console.log(e.split("")) // ['s', 'o', 'm', 'e', ' ', 't', 'e', 'x', 't']


let f="123";
console.log(typeof f)//string

console.log(d+e)
console.log(d+f)


console.log()
