// Array iteration using For-Each
var foods = ["Cake", "Chocolate", "Ice-cream","Bread"];
var numbers = [1,32,64,3];

// 1st Parameter: Item
// 2nd Parameter: Index
// 3rd Parameter: Whole Array
let printEverything = function(value, i, arr){
    console.log(`Index = ${i}, Item = ${value}`);
    console.log(arr);
}
// Function Calling with For-Each
// forEach() — Executes a function for each element (no return)
foods.forEach(printEverything);

// Array iterarion using Mapping 
// map() runs a function on each element but returns a new array with the return values from the callback.
// map() is used to transform each element in an array and return a new array with the transformed values.
let addSomething = function(item){
    console.log(`${item} is good`);
}

// Square values for number array
let arr_square = numbers.map(function(item){
    return item*item;
})

// Function Calling with map
let arr_res = foods.map(addSomething);
console.log(arr_res);
console.log(arr_square);

