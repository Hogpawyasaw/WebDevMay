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



//output yes
function myFunction(weatherTypeRule0) {
    document.getElementById("weatheroutput").innerHTML = "It is 28 degrees so it's time to dress light.";
  }
  function myFunction() {
    document.getElementById("weatheroutput").innerHTML = "It is 2 degrees so it's time to dress heavy.";
  }
  function myFunction() {
    document.getElementById("weatheroutput").innerHTML = "It is 20 degrees so it's time to dress accordingly.";
  }
  function myFunction() {
    document.getElementById("weatheroutput").innerHTML = "It is 18 degrees so it's time to dress not so light.";
  }

//output no
  function myFunction() {
    document.getElementById("weatheroutput").innerHTML = "It is not 28 degrees.";
  }
  function myFunction() {
    document.getElementById("weatheroutput").innerHTML = "It is not 2 degrees.";
  }
  function myFunction() {
    document.getElementById("weatheroutput").innerHTML = "It is not 20 degrees.";
  }
  function myFunction() {
    document.getElementById("weatheroutput").innerHTML = "It is not 18 degrees.";
  }