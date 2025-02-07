// for-in   >>>    String, Array, Object
// for-of   >>>    String, Array (Don't works in Object >>> Because object doesnot have Index)

let nm = "I am Javascript";
let food = ["Cake", "Chocolate", "Icecream", "Butter", "Bread"];
let person = {
    name: "Shehad Uj Jahan",
    age: 24,
    prof: "Student",
}

// for-in   >>>  We will get index
console.log("for-in loop Starts:");
for(var x in nm){
    console.log(`Index[${x}] = `+ nm[x]);
}

for(var x in food){
    console.log(`Index[${x}] = `+ food[x]);
}

console.log("for-in loop Ends.");

// for-of   >>>  We will get items/values
console.log("\n\nfor-of loop Starts:");
for(var x of nm){
    console.log(x);
}
for(var x of food){
    console.log(food);
}
console.log("for-of loop Ends");

// for-in >>> uses in Object
console.log("for-in uses in Object");
for(var x in person){
    console.log(`Property: ${x}
    Value: ${person[x]}`);
}