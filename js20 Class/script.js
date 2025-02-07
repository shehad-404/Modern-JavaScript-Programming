// Class (ES6)
// Class >>> Template >>> for Creating Objects

// Creating Class
class Person {
    constructor(fname, lname, dob){
        this.fname = fname;
        this.lname = lname;
        this.dob = dob;
    }
    // Function
    calculateAge() {
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    // Function 
    fullname(){
        return `Full Name: ${this.fname} ${this.lname}`;
    }
}

// Creating Object
let person1 = new Person("Shehad", "Uj Jahan", "2000.08.18");
let person2 = new Person("Imran", "Sharkar", "2001.03.12");
let person3 = new Person("Shovon", "Jahan", "2000.11.18");

console.log(person1);
console.log(person1.calculateAge());
console.log(person1.fullname());

console.log(person2);
console.log(person2.calculateAge());
console.log(person2.fullname());

console.log(person3);
console.log(person3.calculateAge());
console.log(person3.fullname());