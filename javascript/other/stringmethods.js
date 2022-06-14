//string methods
var result;
const MyText = `lorem ipsum dolor ipsum sit amet intec`;

//length method
result = MyText.length;
result = MyText[MyText.length-1];

//charAt() method
result = MyText.charAt(6); //returns charachter at index 6

//concat() method
var firstname = "john ";
var lastname = "doe";
result = firstname.concat(lastname) //returns var's : john + doe
result = "1234 ".concat("5678") //returns numbers 12345678

//startwidth() endwidth() method
result = MyText.endsWith("intec"); //only returns true or false
result = MyText.startsWith("lorem");

//include() method
result = MyText.includes("ipsum"); //only returns true or false

//indexOf() method
result = MyText.indexOf("ipsum"); //returns index at 6

//replace() method
result = MyText.replace("ipsum", "javascript");
result = MyText.replaceAll("ipsum", "javascript");

//split() method
var names = "ersin,hande,alex,john";
result = MyText.split(" ");
result = names.split(",");

//slice() method
result = MyText.slice(6, MyText.length-6);
result = MyText.toUpperCase(); //returns everything to uppercase
result = MyText.toLowerCase(); //returns everything to lowercase
var MyText2 = "               lorem              ipsum                 ";
result = MyText2.trim().slice();

//match() method
var MyText3 = "ipsum DOLOR 1345 DOLOR";
result = MyText3.match(/DOLOR/);
result = MyText3.match(/DOLOR/g);

console.log(MyText2);
console.log(result);