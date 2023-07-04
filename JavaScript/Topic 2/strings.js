let first = "Knowledge is power but enthusiasm pull the switch";
let second = "Do or do not. There is no try.";
let third = "4,8,15,16,23,42";

let mySplit = third.split(",")
console.info(mySplit)

let mySlice = first.slice(13,18) //first parameter(index) included, scond excluded from the result
console.log(mySlice)

let mySubstr = first.substr(13, 5)
console.log(mySubstr)

let mySubstring = first.substring(13 ,18)
console.log(mySubstring)

let myEndsWith = second.endsWith("try.")
console.log(myEndsWith)

let myIncludes = second.includes("There")
console.log(myIncludes)

let myRepeat = "-----".repeat(5)
console.log(myRepeat)

let myTrim = "         myTrim varaible        "
console.log(myTrim + " : length " +myTrim.length)
console.log(myTrim.trim() + " : length " + myTrim.trim().length)