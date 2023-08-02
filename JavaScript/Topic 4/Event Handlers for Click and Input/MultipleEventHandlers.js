"use strict";

window.onload = function () {
    time.onclick = displayDate;
    convert.onchange = convertIntoUppercase;
    convert.onfocus = onFocus;
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