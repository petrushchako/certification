"use strict";

console.log("Width of the screen : ", screen.width)
console.log("Height of the screen : ", screen.height)
console.log("Depth of the color : ", screen.colorDepth)

console.log("\n\nCurrent page location : ", window.location.href)
console.log("The protocol used : ", window.location.protocol)



//Load different page
let newDoc = document.getElementById("newDoc");
newDoc.onclick = function(){
    window.location.assign("https://skillsoft.com/")
}


//Go back to the previous page (from vrowsing history)
let goBack = document.getElementById("goBack");

goBack.onclick = function(){
    window.history.back()
}

console.log("\n\ncheck whether the cookie is enabled or not : ", navigator.cookieEnabled)
console.log("Version of the browser : ", navigator.appVersion, 
            "\nPlatform of the browser", navigator.platform)