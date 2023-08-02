"use strict";

window.onload = function () {
    time.onclick = displayDate;
    convert.onchange = convertIntoUppercase;
    convert.onfocus = onFocus;
    mouse.onmouseover = mouseOver;
    mouse.onmouseout = mouseOut;
    image.onmousedown = nightToronto;
    image.onmouseup = dayToronto;  

}

function displayDate(){
    let time = new Date()
    currenttime.innerHTML = time
}

function convertIntoUppercase(){
    let uppercase = document.getElementById("convert")
    uppercase.value = uppercase.value.toUpperCase()
}

function onFocus(){
    let focus = document.getElementById("convert")
    focus.style.background = "yellow"
}

function mouseOver() {
    let mouseover = document.getElementById("mouse")
    mouseover.style.backgroundColor = "green"
    mouseover.innerHTML = "mouseover event"
}

function mouseOut() {
    let mouseover = document.getElementById("mouse")
    mouseover.style.backgroundColor = "white"
    mouseover.innerHTML = "mouseout event"

    setTimeout(function() {
        // Code inside this callback function will be executed after 2 seconds
        mouseover.style.backgroundColor = "pink";
        mouseover.innerHTML = "Mouse Over Me";
      }, 2000);
}

function nightToronto() {
    let toronto = document.getElementById("image")
    toronto.src = "../Toronto-at-night.png"
}

function dayToronto() {
    let toronto = document.getElementById("image")
    toronto.src = "../T.png"
}