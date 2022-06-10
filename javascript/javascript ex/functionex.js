//BMI calculation
    //Simplified function
        //Reguler function
            function BMICalc1(){
                var weight = 85;
                var height = 183;
                BMIOutput1 = weight / (height * height);
                console.log(BMIOutput1);
            }
            BMICalc1()
        //End regular function
        //Arrow function
        var BMICalc2 = (n1, n2, n3) => n1/(n2*n3)
        console.log(85 / (183 * 183))
        //End arrow function
    //End simplified function
    //More complex function
        //Regular function
            function BMICalc3(){
                var user = {
                    name : "Jack",
                    age : 45,
                    weight : 85,
                    height : 183
                };
                BMICalculation3 = user.weight / (user.height * user.height);
                BMIOutput2 = user.weight / (user.height * user.height) ? `Because ${user.name}'s height is ${user.height} and weight is ${user.weight} his BMI is ${BMICalculation3}.`: `The information introduced is not correct.`
                console.log(BMIOutput2);
            }
            BMICalc3()
        //End regular version
    //End more complex version
//End BMI calculation


//Netto salary
    //Simplified function
        //Regular function
            function nettoSalaryCalc1(){
                bruto = 3500;
                percent = 25;
                nettoSalaryOutput1 = bruto * percent / 100;
                console.log(nettoSalaryOutput1);
            }
            nettoSalaryCalc1();
        //End function version
        //Arrow function
            var nettoSalaryCalc2 = (n1, n2, n3) => n1*n2/n3
            console.log(3500*25/100)
         //End arrow function
    //End simplified version
    //More complex version
        //Regular function
            function nettoSalaryCalc3(){
                var user = {
                    name : "Jack",
                    age : 45,
                    job :{
                        type : "Web developer",
                        bruto : 3500,
                        percent : 25
                    }
                };
                nettoSalaryCalculation3 = user.job.bruto * user.job.percent / 100;
                nettoSalaryOutput2 = user.job.bruto * user.job.percent / 100 ? `${user.name}'s job as a ${user.job.type} gets him a bruto of ${user.job.bruto} he has to give ${user.job.percent}% back and ends up with a neto of ${nettoSalaryCalculation3}.`: `The information introduced is not correct.`;
                console.log(nettoSalaryOutput2);
            }
            nettoSalaryCalc3()
        //End regular function
    //End more complex version
//End netto salary
