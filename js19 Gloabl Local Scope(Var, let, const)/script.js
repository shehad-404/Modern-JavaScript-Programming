// Global and Local Scope >>> Var, Let and Const >>> ES6

// Global Scope
var a = 1;      // Another variable = a  be created
let b = 2;      // Another variable = b  can't be created
const c = 3;

console.log(`Global Scope: `,a, b, c);

// Function Scope
function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Functional Scope: `,a, b, c);
}
test();

console.log(`Global Scope: `,a, b, c);

// if Scope >>> Redeclaration >>> var will change Globally 
if(true){
    var a = 7;      // var a = 7 value will Change Globally 
    let b = 8;
    const c = 9;
    console.log(`If Scope: `,a, b, c);
}
console.log(`Global Scope: `,a, b, c);

// for Scope >>> Redeclaration >>> var will change Globally 
for(var a=0; a<=10; a++){
    console.log(a);
}
console.log(`Global Scope: `,a, b, c);

