// From chapter 18 forward, each lesson will be one branch. I am not done with this chapter yet.
class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
    }

    get pizzaCrust() {
        return this.crust;
    }
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }

    baked() {
        console.log(`baking a ${this.size} ${this.type} ${this.crust} pizza`);
    }
}
const myPizza = new Pizza("pepperoni", "small");
myPizza.pizzaCrust = "extra large";
myPizza.baked();
console.log(myPizza.type);