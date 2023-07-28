"use strict";

let jsDescription = document.getElementById('jsdescription');


console.log("Accessing text using innerHTML for 'jsdescription", jsDescription.innerHTML)

//Access child nodes
let counter = 0
Array.from(jsDescription.childNodes).forEach(element =>{
    console.log("\nChild node : ", counter++ , " : ", element)
})

//Access child nodes and view key-value pairs
console.log("\n\n\nAccessing childNodes : ", jsDescription.childNodes)

//Access first and last child nodes
console.log("\n\n\nAccess first child : ", jsDescription.firstChild.nodeValue)
console.log("\nAccess last child : ", jsDescription.lastChild.nodeValue)

for(let i=0; i<jsDescription.childNodes.length; i++){
    let text = jsDescription.childNodes[i].nodeValue
    if(text!==null){
        console.log("\nChild node ", i , " : ", text)
    }
    else{
        text = jsDescription.childNodes[i].firstChild.nodeValue
        console.log("\nChild node ", i , " : ", text)
    }
    
}



let uList = document.getElementById("unOrder")
console.log("\n\n\nAcessing children of Unordered List" , uList, "\n\n\nChild info : ", uList.childNodes)