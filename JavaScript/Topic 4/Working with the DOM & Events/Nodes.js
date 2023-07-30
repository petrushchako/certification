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



let uList = document.getElementById("unOrdered")
console.log("\n\n\nAcessing children of Unordered List" , uList, "\n\n\nChild info : ", uList.childNodes)



//Adding Nodes to the DOM

var unorderedList = document.getElementById('unOrdered')
var listItem1 = document.createElement('li')
//View created item
console.log("<li> item created : ", listItem1) //this returns <li></li> since no data has been added, it is an emlty list item
//Add content to <li> created
listItem1.textContent = "JavaScript";
console.log("<li> item created and text added : ", listItem1) //this returns <li>Javascript</li>

var listItem2 = document.createElement("li")
var text2 = document.createTextNode("Java")
listItem2.appendChild(text2)
console.log("Java line item created with text node added : ", listItem2)


//Add JavaScript on the top of the <ul> and Java at the bottom
//Use prepend to attach to the top of the list
unorderedList.prepend(listItem1)
//Use append method to add to the end of the list
unorderedList.append(listItem2)


// Insert elemnt into specified location
var h4 = document.createElement("h4")
h4.textContent = "List of useful programming languages"
document.body.insertBefore(h4, unorderedList)
h4.style.backgroundColor = "green"

//There is no insertAfter method available. Here is an alternative approach to add elements after some element
//is to use .nextSibling parameter
var h6 = document.createElement("h6")
h6.textContent = "And many more languages"
document.body.insertBefore(h6, unorderedList.nextSibling)

//Removing elements
//First retrieve lement, and then .remove() it
let jstitle = document.getElementById("jstitle")
jstitle.remove()
 
//You can also remove a child node of the element
let listItem = unorderedList.firstElementChild
console.log(listItem)
unorderedList.removeChild(listItem)

//replacing elements
let listItem3 = document.createElement("li")
let content = document.createTextNode("Go")
listItem3.appendChild(content)
console.log(listItem3)

//Replace "Ruby" with "Go"
let rubyLI = document.getElementById("unOrdered").firstChild
console.log(rubyLI)
//Pass in a new child that needs to be included, and second parameter a child that should be replaced
unorderedList.replaceChild(listItem3, unorderedList.childNodes[3])