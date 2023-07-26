//Self-invoking or immediately-invoked function expression (IIFE)
(function(){
    function clickHandler(value){
        console.log(value);
    }

    let myButton = document.getElementById("myButton");
    myButton.addEventListener('click', function(){ clickHandler('Hi from my IIFY') }); 
    /*If you leave the parameters in EventListener like: 
        myButton.addEventListener('click', clickHandler('Hi from my IIFY')); 
    it will execute a code as soon as the page loads. You can avoid this by either:
        1. Removing parenthasis from second parameter (i.e. myButton.addEventListener('click', clickHandler))
           But it will only work with function without input parameters. 
        2. Wrap the code call in function definition (i.e. line 8) */

})();


