// Function

console.log(`First Function`);
function say_hello(fname = "Tanvir", lname = "Hasan") {
    console.log(`Hello, I am ${ fname } ${ lname } `);
}

let name1, name2;
name1 = prompt("Enter First Name: ");
name2 = prompt('Enter Second Name: ');

say_hello(name1, name2);
say_hello(name1);
say_hello();

console.log(`\nSecond Function`);
function add_num(a, b) {
    console.log(`Addition of ${a} + ${b} = ${a+b}`);
}

// Third Function
function add_num(a=0, b=1) {
        return a+b;
        // After got return >>> funtion will exits from this 
}
console.log(`Addition is = `, add_num(4,5));
console.log(`Addition = `, add_num());

