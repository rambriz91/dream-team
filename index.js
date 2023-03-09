const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//const teamContainer = document.getElementById('team-container')

const teamRoster = [];
//prompts
function addMember() {  
    inquirer
    .prompt ([
        {
            type: 'input',
            message: `Please enter your name.`,
            name: 'name',
        },
        {
            type: 'input',
            message: `Please enter your employee ID.`,
            name: 'id',
        },
        {
            type: 'input',
            message: `Please enter your email address.`,
            name: 'email',
        },
        {
            type: 'list',
            message: 'Please indicate your role.',
            name: 'role',
            choices: ['manager', 'engineer', 'intern'],
        },
    ])
    .then((data) => {
        console.log(data)
        if (data.role === 'manager') {
        addManager(data)
        }
        else if (data.role === 'engineer') {
        addEngineer(data)
        }
        else if (data.role === 'intern') {
        addIntern(data)
        }
})};

// Prompt functions for each team member role
function addManager(data) {
    inquirer
    .prompt([
    {
        type: 'input',
        message: `Please enter the your office number.`,
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: `Add another employee or select Finish Building Team.`,
        name: 'employee',
        choices: ['Add New Member', 'Finish Building Team'],
    },
    ])
    const newManager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber,
    )
    teamRoster.push(newManager)

    if (data.employee === 'Add New Member') {
        addMember()
    }
    else if (data.employee === 'Finish Building Team') {
        generateTeam(teamRoster)
    }
};

function addEngineer(data) {
    inquirer
    .prompt([
    {
        type: 'input',
        message: `Please input the employee's github username`,
        name: `github`,
    },
    {
        type: 'list',
        message: `Add another employee or select Finish Building Team.`,
        name: 'employee',
        choices: ['Add New Member', 'Finish Building Team'],
    }, 
    ])
    const newEngineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
    )
    teamRoster.push(newEngineer)

    if (data.employee === 'Add New Member') {
        addMember()
    }
    else if (data.employee === 'Finish Building Team') {
        generateTeam(teamRoster)
    }
};

function addIntern(data) {
    inquirer
    .prompt([
    {
        type: 'input',
        message: `Please input the employee's school`,
        name: `school`,
    },
    {
        type: 'list',
        message: `Add another employee or select Finish Building Team.`,
        name: 'employee',
        choices: ['Add New Member', 'Finish Building Team'],
    }, 
])
    const newIntern = new Intern(
        data.name,
        data.id,
        data.email,
        data.school
    )
    if (data.employee === 'Add New Member') {
        addMember()
    }
    else if (data.employee === 'Finish Building Team') {
        generateTeam(teamRoster)
    }
}
// create a function that writes a div from the newMember array.

function generateTeam() {
console.log('Yay it works!'),
console.log(teamRoster)
}

//init
addMember();