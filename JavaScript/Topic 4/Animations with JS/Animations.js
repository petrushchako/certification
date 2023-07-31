"use strict";

function animation(){
    let dot1 = document.getElementById("circle1");
    let dot2 = document.getElementById("circle2")

    let location1 = 450;
    let location2 = 0
    //Arguments are 1:Function that needs to be executed periodically, 2:frequency in msc
    let time1 = setInterval(frame, 10)

    function frame() {
        if (location1 == 0){
            clearInterval(time1);
        } else {
            location1--
            location2++
            dot1.style.top = location1 + "px"
            dot1.style.right = location1 + "px"
            dot2.style.top = location1 + "px"
            dot2.style.right = location2 + "px"
        }
    }



}