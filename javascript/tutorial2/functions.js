
/* 
regular function
arrow function
*/

// function getSum(){
//     //here is function scope
//     var getResult = 1+1;
//     console.log("Get Sum function", getResult);
//     return 5;
// };

// getSum(); //calledback function
// console.log(getSum())

// function getNumber1(){
//     console.log(5)
//     return 5
// }
// function getNumber2(){
//     console.log(6)
//     return 6
// }
// function getResult(){
//     console.log(getNumber1()+getNumber2())
// }
// getResult()



// function getSumOfNumbers(n1, n2){
//     console.log(n1, n2)
//     return n1+n2 //1+1 or 2+5
// };

// // getSumOfNumbers("hello", [1,2,3]);
// // getSumOfNumbers({id:1}, null);
// console.log(getSumOfNumbers(4, 5))
// console.log(getSumOfNumbers(10, 20))

// var student = {
//     name:"joedalton",
//     age:23
// }

// function getStudentName(studentObj){
//     console.log(studentObj.name)
// }

// getStudentName(student)

var student = {
    name:"joe",
    age:23,
    isStudent:true,
    isTeacher:false,
    scores:[12,15,46,85]
}


function verifyStudent(studentParam){
    //console.log(studentParam) //function scope
    let isStudent = studentParam.isStudent
    //console.log(isStudent)
    return isStudent ? `NAME:${studentParam.name}\nAGE:${studentParam.age}\nSCORES:${studentParam.scores.toString()}`: "student is not a student"
}
 verifyStudent(student)



 //arrow function
const verifyStudent2 = studentParam => {
     //console.log(studentParam) //function scope
     let isStudent = studentParam.isStudent
     //console.log(isStudent)
     console.log("arrow function")
     return isStudent ? `NAME:${studentParam.name}\nAGE:${studentParam.age}\nSCORES:${studentParam.scores.toString()}`: "student is not a student"
}

const getSumOfNumbers = (n1, n2) => n1+n2;
const testArrowFunction = ()=>console.log("hello arrow function");

console.getSumOfNumbers(4, 5)
testArrowFunction()


//BMI calculator with function



//netto salary with function


