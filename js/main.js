// From chapter 18 forward, each lesson will be one branch
class Car {
    constructor(person, age) {
        this.name = "Ferrari";
        this.year = "2022";
        this.person = person;
        this.age = age;
    }
    sell() {
        console.log(`sell a ${this.name} in the year of ${this.year} to this ${this.person}. That person is ${this.age} years old`); 
    }
}

const myCar = new Car("Jerk", "40");
myCar.person = "Bigger Jerk";
myCar.sell();