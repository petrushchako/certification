try {
    let obj = undefined;
    console.log(onj.b);
    console.log("If try bolck fails, you will not see this message")
} catch (e){
    line()
    console.log("I cought an exception : " + e.message)
} finally {
    line()
    console.log("However, the application is sitll running (FINALLY block)")
}


function line (){
    console.log("--------------------------------------------------------------")
}