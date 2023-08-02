let incCount = 0
let decCount = 0


window.onload = function(){
    let incButton = document.getElementById("incButton");
    let decButton = document.getElementById("decButton");
    let statusButton = document.getElementById("statusButton")

    //Link event to listen for click and assign function name to exevute then event occures
    decButton.onclick = countDec

    //Define function inside
    incButton.onclick = function() {
        incCount++
        incCountMessage = document.getElementById("incCount").innerHTML = "Increment counter = " + incCount;
    }

    statusButton.addEventListener("click", function(){
        if (incCount>Math.abs(decCount)){
            alert("Increment ran more operations " + incCount + " : " + Math.abs(decCount))
        } 
        else if (incCount<Math.abs(decCount)){
            alert("Decrement ran more operations " + Math.abs(decCount) + " : " + incCount)
        }
        else {
            alert("Draw")
        }
    })  
}

function countDec(){
    decCount--
    var decCountMessage = document.getElementById("decCount").innerHTML = "Decrement counter = " + decCount;
}

