let hero = "Superman"

switch(hero.toLowerCase()){
    case "superman":
        console.log("Super strength")
        break
    case "aquaman":
        console.log("Breath under water")
        break
    case "spiderman":
        console.log("Shoots spider web")
        break
    default:
        console.log("Just a normal creature")
}


let arr = []

for (i = 1; i<=10; i++){
    arr.push(i)
}
console.log(arr)

console.log("Array above has " + arr.length + " elements")

console.log("")

arr.forEach(element => {
    if(element % 2 == 0){
        console.log(element)
    }
})

console.log("")

let z = 100
do{
    console.log(z)
    z -= 25
}while(z > 0)