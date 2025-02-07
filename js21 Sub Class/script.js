// Sub Class
// Inheritance 
class Person {  // Super Class  >>> Person 
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    // Function
    greetings(){
        console.log(`Hello! ${this.fname} ${this.lname}`);
    }
}

class Customer extends Person {     // Sub Class >>> Customer 
    constructor(fname, lname, phone, memberShip){
        super(fname, lname);

        this.phone = phone;
        this.memberShip = memberShip;
    }
    // Function
    fullname(){
        console.log(`Full Name is: ${this.fname} ${this.lname}`);
    }
}

// Creating Object for Class Person
let person1 = new Person("Fazle", "Rabbi");
console.log(person1);
console.log(person1.greetings());

// Creating Object for Sub-Class Customer
let customer1 = new Customer("Tanvir", "Hasan", "01701873833", "9398");
console.log(customer1);
console.log(customer1.greetings());
console.log(customer1.fullname());