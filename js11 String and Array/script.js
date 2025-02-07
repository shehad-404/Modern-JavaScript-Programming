// String and Array iteration

// String 
console.log("String Part Starts: ");
let nm = "I am Javascript";

for(var i=0; i< nm.length; i++){
    console.log(`index[${i}] and Character is :`+nm[i]);
}
console.log("String Part Ends: ");

// Array
console.log("Array Part Starts: ");
let food = ["Cake", "Chocolate", "Icecream", "Butter", "Bread"];

for(var j=0; j< food.length; j++){
    console.log(`index[${j}] and Item is :`+food[j]);
}
console.log("Array Part Ends: ");