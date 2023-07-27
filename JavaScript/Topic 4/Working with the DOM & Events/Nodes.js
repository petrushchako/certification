"use strict";

let jsDescription = document.getElementById('jsdescription');


console.log("Accessing text using innerHTML for 'jsdescription", jsDescription.innerHTML)

//Access child nodes
let counter = 0
Array.from(jsDescription.childNodes).forEach(element =>{
    console.log("\nChild node : ", counter++ , " : ", element)
})
