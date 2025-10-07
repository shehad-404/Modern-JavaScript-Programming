// for-in   >>>    String, Array, Object
// for-of   >>>    String, Array (Don't works in Object >>> Because object doesnot have Index)

// String
let nm = "I am JavaScript";
// Array
let food = ["Cake", "Chocolate", "Icecreame", "Butter", "Bread"];
// Object
let person = {
    name:"Shehad Uj Jahan",
    age: 25,
    prof: "Student"
}

// for-in loop >>> String, Array, Object
// String 
console.log("For-in loop starts:");
console.log("String");
for(var x in nm){
    console.log(`index[${x}] = `+nm[x]);
}
console.log("String for-in loop ends");

// Array
console.log("--------------------------------------------------");
console.log("Array");
for(var x in food){
    console.log(`index[${x}] = `+food[x]);
}
console.log("Array for-in loop ends");

// Object
console.log("--------------------------------------------------");
console.log("Object");
for(var x in person){
    console.log(`${x} = `+person[x]);
}
console.log("Object for-in loop ends");
console.log("for-in loop ends");
console.log("--------------------------------------------------");

// for-of loop >>> String, Array
console.log("For-of loop starts:");
// String
console.log("--------------------------------------------------");
console.log("String");
for(var x of nm){
    console.log(x);
}
console.log("String for-of loop ends");

// Array
console.log("--------------------------------------------------");
console.log("Array food");
for(var x of food){
    console.log(x);
}
console.log("Array for-of loop ends");

// Object >>> Error >>> Object don't works in for-of loop
console.log("--------------------------------------------------");
console.log("Object person");
for(var x of person){
    console.log(x);  // Error: person is not iterable
}
console.log("For-of loop ends");
console.log("--------------------------------------------------");