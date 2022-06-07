// var username = "root";

// console.log ("hello friend");
// console.log (username);


// let website = "www.google.com";
// console.log (website);
// // let website = "www.facebook.com"; cannot be re-declared
// website = "www.facebook.com";   
// // can be updated ^



// const company = "google";
// // const company = "facebook"; cennot be re-declared
// // company = "facebook"; cannot be changed
// console.log (company);

// console.log(user) mistake
// var user = "root"; 
// console.log(userx); mistake

var number1 = 10;
var number2 = 20;
var total = number1 + number2; 
var country = "Bru" + "ssel";
var country = 'Brussel\'s beer';
console.log(country);
console.log(total);


document.getElementById("message").innerText="Hello friend";
document.getElementById("container").innerHTML="<h1>Container!</h1>";

var weight = 50;
var height = 150;
var BMI = weight / (height * height);
console.log(BMI);

var bruto = 3000;
var tax = 21;
var neto= bruto * tax / 100;
console.log(neto);

let result;
result = 7+3; //addition operator
result = "a"+"b";

result = 7-3; //subtraction operator

result += 2; // result = result +2 
result -= 1; // result = result -1 

result = 5*5; // multiplication operator
result *= 2; // result = result *2

result = 50/2; // division operator
result /= 5; // result = result /5

// increase and decrease
result++;
++result;

--result;
result--;
// increase and decrease


var number1 = 50;
number1 += 10;
console.log (number1);


/*const number2 = 40;
number2 += 10;         doesnt work, use var/let
console.log(number2)*/

console.log(result);



let firstname = "jhon";
let lastname = "doe";
names = firstname + "😄" + lastname;
console.log(names + "😄")


var n1 = 5;
var n2 = 5;
var n3 = 6;
var n4 = "5";

// equal to operator ==
result1 = n1 == n2;
result1 = n1 == n3;
result1 = n1 == n4; // value

// equal to poerator ===
result1 = n1 === n4; // value and type

result1 = "spacex" == "spacex";
result1 = "Spacex" === "spacex";
result1 = "😄" == "😄";
result1 = "😄 " == "😄";

// var %"*-varvar = "varvar"; does not work when starting var with signs

var _$Xcom = 5; // can start with those

result1 = n1 != n2;
result1 = n1 != n4;
result1 = "😄" != "abc";
result1 = n1 !== n4; // check value and type


var x1; //undefined
var x2; //undefined
result1 = x1 === x2;

//greater than operator
result1 = n1 > n2;
result1 = n3 > n1;
result1 = n3 > n4;

// less than operator
result1 = n4 < n3;

//greater than or equal
result1 = n1 >= n2;
result1 = n1 >= n4;
// result1 = n1 >== n4; does not work with 2: ==

//less than or equal operator
result1 = n1 <= n3;

//? operator
result1 = n1 >= n3 ? "Right": "Wrong";

var myRule = n1 >= n1;
var mySecondRule = 

result = myRule && mySecondRule;


console.log(result1 + "😄");




var name1 = "jack";
var nameage = 16;
result2 = nameage >= 18 ? name1 + " is allowed to drink": name1 + " is not allowed to drink";
console.log(result2)




var studentname = "jack";
var studentage = "17";
var studentmoney= 10;
// result3 = studentage >= 18 ? studentname + " is allowed to drink alcohol": studentname + " is not allowed to drink alcohol";
result3 = studentage >= 18 ? `${studentname} is allowed`: `${studentname} is not allowed`;
console.log(result3)




var StudentRule1 = studentage >= 18; //true
var StudentRule2 = studentmoney >=1; //false
var GetResult = StudentRule1 && StudentRule2;
result4 = GetResult ? "Yes he can": "No he cannot"

result4 = StudentRule1 ? (StudentRule2) ? "Yes he can drink":                                                                                                                                                                                                                        "No he needs money": "No he is not old enough";


console.log(result4)








// true and false



/*  studentname + "" is allowed
    `${studentname} is allowed`
*/

    // var keyword > can be re-declared
    // const keyword > 
    // let keyword

    /* multi line comment
        1111
        2222
        3333
    */
    // single line comment
    /*
    artimetic operators:
    + addition
    - subtraction
    * mulitplication
    / division
    */
