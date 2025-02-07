// Static Function in Class and Object

class Person {
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    // Normal Function
    greetings(){
        console.log(`Greetins: ${this.fname} ${this.lname}`);
    }

    // Static Function >>> Can not access with Object >>> Access with Class(Person)
    static test(){
        console.log(`I am Static Function`);
    }
}

// Creating Object
let person1 = new Person("Shehad", "Uj Jahan");
console.log(person1.greetings());

// Static Function Can access only with Class
console.log(Person.test());