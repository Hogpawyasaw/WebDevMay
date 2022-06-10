//BMI calculation
//Simplified version
function BMICalc1(){
    var weight = 85;
    var height = 183;
    BMIOutput1 = weight / (height * height);
    console.log(BMIOutput1);
}
BMICalc1()

//More complex version
//Regular version
function BMICalc2(){
    var user = {
        name : "Jack",
        age : 45,
        weight : 85,
        height : 183
    };
    BMICalculation = user.weight / (user.height * user.height);
    BMIOutput2 = user.weight / (user.height * user.height) ? `Because ${user.name}'s height is ${user.height} and weight is ${user.weight} his BMI is ${BMICalculation}.`: `The information introduced is not correct.`
    console.log(BMIOutput2);
 }
 BMICalc2()
 //Arrow function


//End BMI calculation


//Netto salary
    //Simplified version
        //Regular version
            function nettoSalaryCalc1(){
                bruto = 3500;
                percent = 25;
                nettoSalaryOutput1 = bruto * percent / 100;
                console.log(nettoSalaryOutput1);
            }
            nettoSalaryCalc1()
        //End regular version
        //Arrow function

        //End arrow function
    //End simplified version
    //More complex version
        //Regular version
            function nettoSalaryCalc2(){
                var user = {
                    name : "Jack",
                    age : 45,
                    job :{
                        type : "Web developer",
                        bruto : 3500,
                        percent : 25
                    }
                };
                nettoSalaryCalculation = user.job.bruto * user.job.percent / 100;
                nettoSalaryOutput2 = user.job.bruto * user.job.percent / 100 ? `${user.name}'s job as a ${user.job.type} gets him a bruto of ${user.job.bruto} he has to give ${user.job.percent}% back and ends up with a neto of ${nettoSalaryCalculation}.`: `The information introduced is not correct.`;
                console.log(nettoSalaryOutput2);
            }
            nettoSalaryCalc2()
        //End regular version
        //Arrow function

        //End arrow functio
    //End more complex version
//End netto salary
