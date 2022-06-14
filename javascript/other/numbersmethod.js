//number methods
var result;
var n1 = "10";
var n2 = 10;
var n3 = "10.5";
var n4 = "10 15 20";
var n5 = "10, 15, 20";
var n6 = "9e+2";
var n7 = 10e+2; //scientific number
var n8 = 2000.54;
const PI = 3.14159265359;

//toSting() method
result = n2.toString();

//parseInt() method
result = parseInt(n1); //return integer representation of number
result = parseInt("10") + parseInt("10");

//parseFloat() method
result = parseFloat(n3);

//toExponential() method
result = PI.toExponential(2); //(2) only gets you the first 3 numbers

//toFixed() method
result = n8.toFixed(0);

//Number() method
result = Number("10");
result = Number(undefined);
result = Number(null);
result = Number(true);//returns 1
result = Number(false);//returns 0

result = Number.MAX_VALUE;
result = Number.MIN_VALUE;
result = Number.MAX_SAFE_INTEGER;
result = Number.POSITIVE_INFINITY;
result = Number.NEGATIVE_INFINITY;
result = Number.NaN;
result = Number.isFinite(10);
result = Number.isFinite(Infinity);
result = Number.isFinite(NaN);
result = Number.isInteger("10");
result = Number.isInteger(10);
result = Number.isNaN(10/NaN);
result = Number.isNaN("10"/"10");
result = Number.isSafeInteger(10);
var userInput = 10;
if(Number.parseInteger(userInput)){
    console.log("valid input")
}
else{
    console.log("invalid input")
};




console.log(result, typeof(result));