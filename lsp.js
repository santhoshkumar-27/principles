// https://www.freecodecamp.org/news/solid-principles-for-programming-and-software-design/
/**
 * What is the Liskov Substitution Principle?
In 1987, the Liskov Substitution Principle (LSP) was introduced by Barbara Liskov in her conference keynote “Data abstraction”. A few years later, she defined the principle like this:

“Let Φ(x) be a property provable about objects x of type T. Then Φ(y) should be true for objects y of type S where S is a subtype of T”.

To be honest, that definition is not what many software developers want to see 😂 — so let me break it down into an OOP-related definition.

The principle defines that in an inheritance, objects of a superclass (or parent class) should be substitutable with objects of its subclasses (or child class) without breaking the application or causing any error.

In very plain terms, you want the objects of your subclasses to behave the same way as the objects of your superclass.

A very common example is the rectangle, square scenario. It’s clear that all squares are rectangles because they are quadrilaterals with all four angles being right angles. But not every rectangle is a square. To be a square, its sides must have the same length.

Bearing this in mind, suppose you have a rectangle class to calculate the area of a rectangle and perform other operations like set color:
 */

class Rectangle {
    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    setColor(color) {
        // ...
    }

    getArea() {
        return this.width * this.height;
    }
}
/**
 * Knowing fully well that all squares are rectangles, you can inherit the properties of the rectangle. Since the width and height has to be the same, then you can adjust it:
 */
class Square extends Rectangle {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }
    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}
// Taking a look at the example, it should work properly:

let rectangle = new Rectangle();
rectangle.setWidth(10);
rectangle.setHeight(5);
console.log(rectangle.getArea()); // 50

/**
 * In the above, you will notice that a rectangle is created, and the width and height are set. Then you can calculate the correct area.

But according to the LSP, you want the objects of your subclasses to behave the same way as the objects of your superclass. Meaning if you replace the Rectangle with Square, everything should still work well:
 */

let square = new Square();
square.setWidth(10);
square.setHeight(5);
console.log(square.getArea()); // 25 or 100
/**
 * You should get 100, because the setWidth(10) is supposed to set both the width and height to 10. But because of the setHeight(5), this will return 25.
 */
/**
 * This breaks the LSP. To fix this, there should be a general class for all shapes that will hold all generic methods that you want the objects of your subclasses to have access to. Then for individual methods, you create an individual class for rectangle and square.
 */

class Shape {
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Rectangle extends Shape {
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    setSide(side) {
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}

/**
 * This way, you can set the color and get the color using either the super or subclasses:
 */

// superclass
let shape = new Shape();
shape.setColor('red');
console.log(shape.getColor()); // red

// subclass
let rectangle1 = new Rectangle();
rectangle1.setColor('red');
console.log(rectangle1.getColor()); // red

// subclass
let square1 = new Square();
square1.setColor('red');
console.log(square1.getColor()); // red
