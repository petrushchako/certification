"use strict";


let language = document.getElementById('jstitle');
console.log("The content of jstitle : ", language.innerHTML)

let bTags = document.getElementsByTagName('b');
console.log("\nAll the <b> tags in the document : ", bTags)

Array.from(bTags).forEach(element =>{
    console.log(element.innerHTML)
})

let pTags = document.getElementsByTagName('p')
console.log("\nThe number of <p> elements : ", pTags.length)

let jsText = document.getElementById('jstext');
let jsTextBTags = jsText.getElementsByTagName('b');
console.log("\nNumber ob <b> elements inside element with id 'jstext' : ", jsTextBTags.length)



let jsdesc = document.getElementsByClassName('jsdescription');
console.log("\nThe innerHTML of the first jsdescription element : ", jsdesc[0].innerHTML)


//using JS selector
//i in parameters is for the type of tag. The return is the HTML Collection
var selector = document.querySelectorAll('i.jsdescription');
console.log("\nThe first of <i> tags" ,selector[0])
