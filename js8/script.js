// Switch Statement
console.log(`Select an option
a. option 1
b. option 2
c. option 3`);

var choice = prompt("Enter Choice: ");

switch(choice){
    case "a":
        console.log("Option 1 selected!");
        break;
    case "b":
        console.log("Option 2 selected!");
        break;
    case "c":
        console.log("Option 3 selected!");
        break;
    default:
        console.log("No Option selected!");
}