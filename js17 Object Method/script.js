// Object Method >>> Acces with "this" Keyword
// here persion = object
let person = {
    fname: "Shehad",
    lname: "Uj Jahan",
    dob: "18.12.2000", // number, string, array, object

    fullname: function() {  // Object Method
        return `${this.fname} ${this.lname}`;
    }
}

console.log(`First Name: `,person.fname);
console.log(`Last Name: `,person.lname);

console.log(`Full Name: `,person.fullname());

// Understanding Object Property Vs Object Method
let str = "Bohubrihi";
console.log(`Length: `,str.length);     // str = object &   length = Property of str
console.log(str.split());              // split = method of str