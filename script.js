function orderMilkshake(flavour) {
    return new Promise(makeMilkshake(drinkMilkshake, complain, flavour));
}

function drinkMilkshake(flavour) {
    console.log(`Yum ${flavour.toLowerCase()}, my favourite!`)
}

function complain() {
    console.log("Hey, I didn't get a milkshake!")
}

function shopAround() {
    console.log("I hope it doesn't take long")
}

let iceCream = 4

function makeMilkshake(resolve, reject, flavour) {
    if (iceCream > 0) {
        iceCream--
        setTimeout(() => {
            console.log(`${flavour} milshake ready!`)
            resolve(flavour)
        }, 7500)
    } else {
        console.log(flavour.toUpperCase())
        setTimeout(() => {
            console.log("Out of ice cream!!!")
            reject()
        }, 500)
    }
}

module.exports = { orderMilkshake, drinkMilkshake, complain, shopAround }