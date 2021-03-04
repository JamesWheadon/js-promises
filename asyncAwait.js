const { orderMilkshake, drinkMilkshake, complain, shopAround } = require('./script.js')

const customers = [{'name': 'James', 'flavour':'Chocolate'}, 
{'name': 'Ellie', 'flavour':'Vanilla'}, 
{'name': 'Tom', 'flavour':'Everything'}, 
{'name': 'Dan', 'flavour':'Milk'}, 
{'name': 'Liam', 'flavour':'Strawberry'}]

async function placeOrder(name, flavour) {
    try {
        console.log(`${flavour} milkshake ordered by ${name}`)
        const order = await orderMilkshake(flavour)
        drinkMilkshake(flavour)
    } catch(e) {
        complain()
    }
}

for (let c of customers) {
    placeOrder(c.name, c.flavour)
    shopAround()
}