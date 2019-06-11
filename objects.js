var person = {
    fName: "Arthur",
    lastName: "Dent",
    homePlanet: "Earth",
    getPlanet: function() {
        return `${this.fName} ${this.lastName} is from planet ${this.homePlanet}.`
    }
}
console.log(`first name: ${person.fName}`);
console.log(`last name: ${person.lastName}`);
console.log(person.getPlanet());

var product = {
    name: "chair",
    price: 14.99,
    // describeProduct: function(){
    //     return `The product is a ${product.name}. It costs $${product.price}.`
    //}
}
describeProduct = (thing) => {
    return `The product is a ${thing.name}. It costs $${thing.price}.`
}
console.log(describeProduct(product));

var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    recipe: function(){
        return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients}.`
    }

}

// describe3rdIngredient = (food) => {
//     return `The 3rd ingredient is ${food.ingredients[3]}`
// }
// console.log(describe3rdIngredient(lunch));

// ingredients = (food) => {
//     return `The ingredients for a ${food.name} ${food.type} are ${food.ingredients}.`
// }
console.log(lunch.recipe());


class Coffee {
  constructor(type, cream=0, sugar=0){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile () {
    console.log( (`${this.type}: ${this.creams()}, ${this.sugars()}`))
  }

  creams() {
    if (this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

    sugars() {
    if (this.sugar > 0){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}

var blackCoffee = new Coffee("Black",0,0)
var myFave = new Coffee("French", 0, 2)
blackCoffee.coffeeProfile();
//coffeeProfile(blackCoffee)


class Latte {
    constructor (type, milkType="milk", shots=1){
        this.type = type
        this.milkType = milkType
        this.shots = shots
    }

    latteProfile () {
        console.log(`Profile: ${this.type}, ${this.milkType}, Number of shots: ${this.shots}`)
    }


}
var myLatte = new Latte ("regular", "milk", 1)
myLatte.latteProfile()
var specialLatte = new Latte ("hazelnut")
specialLatte.latteProfile()

class Item {
    constructor (product, budget, price){
        this.product = product
        this.budget = budget
        this.price = price
    }

    inBudget() {
        if (this.budget >= this.price){
            console.log(`This ${this.product} is in budget`);
        }else {
            console.log(`This ${this.product} is beyond budget`);
        }
    }
}

var tv = new Item("OledMonitor", 275, 300)
tv.inBudget()

class Cylinder {
    constructor(radius, height){
        this.radius = radius
        this.height = height
    }

    volume(){
        return (Math.PI * this.height * this.radius ** 2).toFixed(4)
    }
}
var test = new Cylinder(3,4)
console.log(test.volume());

//
var cartItems = [
  {
    name: "banana",
    price: 2.34,
    weight: 1.2
  },
  {
    name: "Cereal",
    price: 5.67,
    weight: 2.2
  },
  {
    name: "Gogurt",
    price: 3.99,
    weight: 3.1
  }
]

getTotal = (array) => {
    let totalPrice = 0
    let totalTax = 0
    let totalWeight = 0
    for (let i = 0; i < array.length; i++){
        totalPrice = totalPrice + array[i].price
        totalWeight += array[i].weight
    }
    totalTax = totalPrice * 0.08
    console.log(`Price: ${totalPrice}, Tax: ${totalTax}, Weight: ${totalWeight}`)
    return
}

getTotal(cartItems)

class CartItem {
    constructor(name, price, weight){
        this.name = name
        this.price = price
        this.weight = weight
    }
}

var banana = new CartItem("banana", 2.34, 1.2)
var cereal = new CartItem("cereal", 5.67, 2.2)
var gogurt = new CartItem("gogurt", 3.99, 3.1)