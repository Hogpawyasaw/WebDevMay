
//datatypes--------------------------------------------------------------

/*
string
number
boolean
undefined
object/array
null
 */

let result1;
//string data type
result = 'hello friend';
result = "hello friend";
result = `hello friend`;

//number data dype
result = 1;
result = "2";
result = 1.5;
result = 1.5e2

//boolean data type
result = true;
result = false;

//undefined data type
result = undefined;
//declared var but not assigned a value
var x;

//objects data type
var student = {
    name:"jhon",
    age:30,
    email: "john@john.com",
    isStudent:true,
    address: {
        street:"belgium",
        city:"bel",
        test:{
            title:"test title",
            test2:{
                anothertest:"test title 3"
        }
    }
   }
} 
result = `His name is ${student.name} and he is ${student.age} years old.`;

result = student.isStudent ? `His name is ${student.name} and he is ${student.age} years old ${student.address.street}`: `He is not a student.`;

result = student.address.street;
result = student.address.city;
result = student.address.test.test2.anothertest;


//array data types
var numbers = [1, "string", true, null, {name:"jhon"}, undefined];
//array index starts from 0
result = numbers.length;
result = numbers[0];
result = numbers[4].name;
numbers [1] = "new string";
result = numbers;

//extracting items from an array 
var students = [
    {
        name:"alex", age:24,
        scores:[44,56,23,74]
    },
    {name:"mal", age:23},
    {name:"guppy", age:2}
];
result = students[0].scores[3];

var nestedArray = [1,2,3,[4,5,6,[7,8,9]]];
result = nestedArray[3][3][1];

console.log(result, `Type of result: ${typeof result}`);