const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


//prompts
inquirer
.prompt ([
    {
        type: 'input',
        message: `Please enter the Manager's name.`,
        name: 'name',
    },
    {
        type: 'input',
        message: `Please enter the Manager's employee ID.`,
        name: 'id',
    },
    {
        type: 'input',
        message: `Please enter the Manager's email address.`,
        name: 'email',
    },
    {
        type: 'input',
        message: `Please enter the Manager's office number.`,
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: `Add another employee or select Finish Building Team.`,
        name: 'employee',
        choices: ['Intern', 'Engineer', 'Finish Building Team'],
    }
])
.then((data) => {
    
})