// https://www.freecodecamp.org/news/solid-principles-for-programming-and-software-design/

/**
 * What is the Single-Responsibility Principle (SRP)?
 * The Single-responsibility Principle, or SRP, states that a class should only have one reason to change. This means that a class should have only one job and do one thing.
 * Let’s take a look at a proper example. You’ll always be tempted to put similar classes together – but unfortunately, this goes against the Single-responsibility principle. Why?
 * The ValidatePerson object below has three methods: two validation methods, (ValidateName() and ValidateAge()), and a Display() method.
 */
class ValidatePerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    ValidateName(name) {
        if (name.length > 3) {
            return true;
        } else {
            return false;
        }
    }

    ValidateAge(age) {
        if (age > 18) {
            return true;
        } else {
            return false;
        }
    }
}

class DisplayPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.validate = new ValidatePerson(this.name, this.age)
    }
    Display() {
        if (this.validate.ValidateName(this.name) && this / validate.ValidateAge(this.age)) {
            console.log(`Name: ${this.name} and Age: ${this.age}`);
        } else {
            console.log('Invalid');
        }
    }
}