//number method example
// var userinput = prompt("Enter a number");
// var input = parseInt(userinput);
// if(Number.isInteger(input)){
//     document.getElementById("result1").innerHTML="is a number";
//     console.log(typeof "is a number");
    
// }
// else{ 
//     document.getElementById("result2").innerHTML="is not a number";
//     console.log("is not a number")
// };



//calculator
var n1 = prompt("First number");
var n2 = prompt("Second number");
let input1 = parseInt(n1, n2);
if(Number.isInteger(n1, n2)){
    document.getElementById("result1").innerHTML="is a number";
    console.log(typeof "is a number");
}
else{ 
    document.getElementById("result2").innerHTML="is not a number";
    console.log("is not a number")
};