"use strict";

window.onload = function() {
    let openButton = document.getElementById("openButton")
    let closeButton = document.getElementById("closeButton")

    let newWindow = null;

    openButton.onclick = function() {
        newWindow = window.open("https://skillsoft.com/")
    }

    closeButton.onclick = function() {
        if (newWindow != null){
            newWindow.close();
        }
    }

    historyButton.onclick = function() {
        let browserHistory = document.getElementById("history");
        browserHistory.innerHTML = "Your browser window history has " +
                                    window.history.length + " entries!"
    }

    wikipediaButton.onclick = function() {
        //new window
        window.open("https://wikipedia.org")
        //in the same window
        window.location = "https://wikipedia.org"
    }
}

//Return all elements matching a given CSS selector
//document.querySelectorAll("<css_selector>")

//Add element before another element
//document.body.insertBefore(newElement, myElement)