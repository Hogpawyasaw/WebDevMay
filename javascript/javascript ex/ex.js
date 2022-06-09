//Weathertypes with degrees
var weatherTypeSummer = 28;
var weatherTypeWinter = 2;
var weatherTypeFall = 10;
var weatherTypeSpring = 18;

//The actuall degrees
var weatherDegrees = 19;

weatherTypeRule0 = weatherDegrees >= weatherTypeSummer ? "It is: ": + weatherTypeSummer + " degrees so it's time to dress light.";
weatherTypeRule1 = weatherDegrees >= weatherTypeWinter ? "It is: ": + weatherTypewinter + " degrees so it's time to dress heavy.";
weatherTypeRule2 = weatherDegrees >= weatherTypeFall ? "It is: ": + weatherTypeFall + " degrees so it's time to dress accordingly.";
weatherTypeRule3 = weatherDegrees >= weatherTypeSpring ? "It is: ": + weatherTypeSpring + " degrees so it's time to dress not so light.";

weatherTypeRule4 = weatherDegrees >= weatherTypeSummer ? "It is not: ": + weatherTypeSummer + " degrees so it's time to dress light.";
weatherTypeRule5 = weatherDegrees >= weatherTypeWinter ? "It is not: ": + weatherTypewinter + " degrees so it's time to dress heavy.";
weatherTypeRule6 = weatherDegrees >= weatherTypeFall ? "It is not: ": + weatherTypeFall + " degrees so it's time to dress accordingly.";
weatherTypeRule7 = weatherDegrees >= weatherTypeSpring ? "It is not: ": + weatherTypeSpring + " degrees so it's time to dress not so light.";

//random number generator
document.getElementById('degrees').innerHTML = getRndInteger(0,30);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

//output yes
document.getElementById('weatheroutput').innerHTML = "It is more then 28 degrees.";
document.getElementById('weatheroutput').innerHTML = "It is more then 2 degrees.";
document.getElementById('weatheroutput').innerHTML =  "It is more then 10 degrees.";
document.getElementById('weatheroutput').innerHTML = "It is more then 18 degrees.";
//output no
document.getElementById('weatheroutput').innerHTML = "It is not more then 28 degrees.";
document.getElementById('weatheroutput').innerHTML = "It is not more then 2 degrees.";
document.getElementById('weatheroutput').innerHTML =  "It is not more then 10 degrees.";
document.getElementById('weatheroutput').innerHTML = "It is not more then 18 degrees.";

function degrees(){
    
}