// Finding Largest Number
var n1 = prompt();
var n2 = prompt();
var n3 = prompt();

n1 = parseInt(n1);
n2 = parseInt(n2); 
n3 = parseInt(n3); 

if(n1 > n2){
    if(n1 > n3){
        console.log(n1 +" = n1 is Larger");
    }
    else{
        console.log(n3 +" = n3 is Larger");
    }
}
else{
    if(n2 > n3){
        console.log(n2 +" = n2 is Larger");
    }
    else{
        console.log(n3 +" = n3 is Larger");
    }
}