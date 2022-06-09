function buttonChange2() {
    document.getElementById('enddegrees').innerHTML = "No it is not.";
}


function buttonChange1() {
    var x = document.getElementById('changeme');
    if (x.innerHTML === "15 C\u00B0"){
        x.innerHTML = "12 C\u00B0";
    }
    else {
        x.innerHTML = "15 C\u00B0";
    }
}



// document.getElementById("output").innerHTML="Yes it is 15 degrees.";
// document.getElementById("output").innerHTML="No it is not 15 degrees.";