let car1 = {
    make: "BMW",
    model: "745li",
    year: 2010,
    getPrice: function(){
        return 5000
    },
    print**Description**: function(){
        console.log(this.make + " " + this.model)
    }
}

car1.printDescription();
console.log(car1.year)
console.log("Estimated cost : " + car1.getPrice())

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Alternative mwthod to access the objects
let car2 = {
    make: "Audi",
    model: "A8L",
    year: 2014,
    getPrice: function(){
        return 10000
    },
    print**Description**: function(){
        console.log(this.make + " " + this.model)
    }
}

console.log("\n" + car2["make"] + " " + car2["model"] + "\n" + car2["year"] + "\nEstimated price : " + car2[3])
console.log()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Populating object
let car3 = {}
car3.make = "Skoda"
car3.model = "Superb"
car3.year = 2008
car3.getPrice = function() {return 2500}
car3.printDescription = function() {console.log(this.make + " " + this.model)}

car3.printDescription();
console.log(car3.year)
console.log("Estimated cost : " + car3.getPrice())

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Storing object inside object
let car4 = {
    van: {
        make: "Mercedes-Benz",
        model: "Vito"
    },
    cupe: {
        make: "Mercedes-Benz",
        model: "SLC"
    }
}

console.log("\n" + car4.van.make + " has following model available:\n\t- " + car4.van.model + "\n\t- " + car4.cupe.model )


let c = {
    myProperty: [
        {message: "This"},
        {message: " is "},
        {message: "valid"}
    ]
}
console.log("\n" + c.myProperty[0].message + c.myProperty[1].message + c.myProperty[2].message)