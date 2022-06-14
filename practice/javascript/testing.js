//forEach() method
const letters = ['a', 'c', 'b', 'a', 'c'];
const numbers = [1, 3, 2, 5, 8, 45, 8, 2, 2, 3];
let add = {};
let count = {};

numbers.forEach((item, index) => {
    if(add[item])
        add[item]++;
}
    else{
        
    }
)

letters.forEach((item, index, arr) => {
    if(count[item]){
        count[item]++;
    }
    else{
        count[item] = 1;
    }

});

 console.log(count)
//'index = ' + index + ' item = ' + item + ' ' + arr 