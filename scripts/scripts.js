/* Ritvik Kumar Kothapalli*/
const student = 
    {
        "name": 'Jimmy Cockbottom',
        "age": 23,
        "isActive": true,
        "contact": ['gmail', 'phone']
    }

var output = document.getElementById('output');

output.innerHTML = student.name + ' ' + student.age + ' ' + student.isActive + ' ' + student.contact;
