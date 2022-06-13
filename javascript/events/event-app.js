var number = 1; //global scope variable (adds up when in here)
const inputValue = document.getElementById("username")
function ClickHandler(){
    //event.preventDefault()
    //var number = 1; //local scope variable (does not add up when in here)
    number++
    console.log("Clicked the button", number)
};

function InputHandler(event){
    console.log("Hello",inputValue.value)
};

inputValue.addEventListener("change", InputHandler)

const RegisterBtn = document.getElementById("register");


function RegisterClickHandler(event){
    console.log("registerd button click",inputValue.value)
};

RegisterBtn.addEventListener("click", RegisterClickHandler());