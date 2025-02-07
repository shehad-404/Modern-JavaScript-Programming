// Data Type >>>> Premitive type (num, string, boolean) & Reference type (array, object)
// Premitive type >>> Deals with values
// Reference type >>> Deals with Memory Address(reference)

// Premitive type (num, string, boolean) 
let a = 7;
let b = a;

console.log(b);

// Reference type (array, object)
let number = [1,2,3];
let newNumber = number;

console.log(number)
console.log(newNumber)

// After Changing main array values >>> Changes all array values(Cause deals with mem address)
number[1] = 500;

console.log(number)
console.log(newNumber)

// After Changing New array values  >>> Changes all array values
newNumber[2] = 700;

console.log(newNumber)
console.log(number)

// Another part
console.log("First Line\nSecond Line");
