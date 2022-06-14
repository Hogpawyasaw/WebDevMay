//array methods
var result;
var myArr = [];
var myNumbersArr = [8, 7, 5, 3, 6, 2, 1, 12, 50, 48, 54, 26, 96];
var myLettersArr = ["a", "h", "b", "u", "k", "c", "s", "r", "o"];
//push method
myArr.push(1);
myArr.push("a");
myArr.push(true);
myArr.push(null);
myArr.push({name:"john"}); //adds an element to the array

//pop method
myArr.pop(); //removes the last item in the array

//shift method
myArr.shift(); //removes the first item in the array

//join method
result = myArr.join("-");

//sort method
result = myLettersArr.sort(); //alphabetical order
result = myNumbersArr.sort(function(a, b){
    return a - b //b - a from biggest to smallest number
}); //numerical order

//concat method
result = myNumbersArr.concat(myLettersArr); //combines two arrays


//iteration method (for, forEach, filter, reduce, every, some)

//for() method
// for(var i = 5; i < result.length; i++){
//     console.log(result[i])
// };

//forEach() method
function NewForLoop(value, index, arrayitself){
    console.log(value, index, arrayitself)
};
//result.forEach(NewForLoop)
var total = 0;
for(let n=0; n<myNumbersArr.length; n++){
    total+=myLettersArr[n]
    console.log(total)
};

// myNumbersArr.forEach(function(n){total+=n};
// result = `Total result is ${total}`;

//filter() method
result = myNumbersArr.filter(function(value){
    return value >= 30
})

let posts = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
},
{
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
},]

result = posts.filter(value => {
    return value.id === 
});

function findById(id){
    return posts.filter(value => value.id === id)
};
result = findById(5);
console.log(result);