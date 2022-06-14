var _students = [
    {
        id:1,
        name:'avarel',
        course:'javascript',
        score:45
    },
    {
        id:1,
        name:'mike',
        course:'java',
        score:55
    },
    {
        id:1,
        name:'george',
        course:'javascript',
        score:66
    },
    {
        id:1,
        name:'joe',
        course:'python',
        score:70
    }
]

// whoPassedExam?
function whoPassedExam(){
    if(_students.filter(value => value._students)){
        return  _students.filter(value => value.score >= 50)
    }
    else{
        return _students.filter(value => value.score <= 50)
    }
}

console.log(whoPassedExam(_students));