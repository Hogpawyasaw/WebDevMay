//Regular function

//Return explanation (add return if you dont add data in your function)
//Example
// function getSum(){
//     var getResult = 1;
//     console.log("Get some function,", "Yes just get some function!", getResult);
//     return 5;
// }
// getSum()
// console.log(getSum())
//End example
//Example
function getNumber1(){
    console.log(5);
    return 5
};
function getNumber2(){
    console.log(6);
    return 6
};
function getResult(){
    console.log(getNumber1()+getNumber2());
};
// getResult()
//End example
//End return explanation

//Example
// function getSumOfNumbers(n1, n2){
//     // console.log(n1, n2);
//     return n1+n2
// };
// // getSumOfNumbers("hello world", [1,2,3]) 
// // getSumOfNumbers({id:1}, null)
// console.log(getSumOfNumbers(4,5));
// console.log(getSumOfNumbers(10, 20));
//End example

//Function with parameter
var student = {
    name : "mal",
    age : 23
};
function getStudentName(studentObj){
    console.log(studentObj.name);
};
// getStudentName(student)
//End function with parameter

//Function with parameter
var student = {
    name : "Mal",
    age: 23,
    isStudent : true,
    isTeacher : false,
    scores : [10, 20, 30, 40]
};
function verifyStudent(studentParam){
//  console.log(studentParam);
 let isStudent = studentParam.isStudent
//  console.log(isStudent);
 return isStudent ? `NAME:${studentParam.name}\nAGE:${studentParam.age}\nSCORES:${studentParam.scores.toString()}` : "Is not a student"
};

//Arrow function 
var verifyStudent2 = studentParam => {
    //  console.log(studentParam);
 let isStudent = studentParam.isStudent
 //  console.log(isStudent);
 console.log("Arrow function");
  return isStudent ? `NAME:${studentParam.name}\nAGE:${studentParam.age}\nSCORES:${studentParam.scores.toString()}` : "Is not a student"
 };
var getSomeOfNumber2 = (n1, n2) => n1+n2

//End arrow function
console.log(getSomeOfNumber2(4, 5));
//End function with parameter


