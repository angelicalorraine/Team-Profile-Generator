const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

teamMembers = [];


const promptUser = () => {
    return inquirer
        .prompt([

            {
                type: 'input',
                message: 'Team Managers Name',
                name: 'managerName',
            },
            {
                type: 'input',
                message: 'Employee ID',
                name: 'managerID',
            },
            {
                type: 'input',
                message: 'Enter team managers email address',
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: 'Office Number',
                name: 'officeNumber',
            },
            {
                type: 'list',
                message: 'Which Team Member would you like to add next?',
                name: 'addTeam',
                choices: ['Engineer', 'Intern']
            },
        ])
        .then(answers => {
            let manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
            teamMembers.push(manager);
            addTeamMember(answers.addTeam)
        })

};

const addEngineer = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'Engineers Name',
                name: 'engineerName',
            },
            {
                type: 'input',
                message: 'Engineers Employee ID',
                name: 'engineerID',
            },
            {
                type: 'input',
                message: 'Enter engineers email address',
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: 'Github URL',
                name: 'github',
            },
            {
                type: 'list',
                message: 'Which Team Member would you like to add next?',
                name: 'addTeam',
                choices: ['Engineer', 'Intern', 'Exit']
            },
        ])
        .then(answers => {
            let engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.github);
            teamMembers.push(engineer);
            addTeamMember(answers.addTeam);

        })

}
const addIntern = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'Intern Name',
                name: 'internName',
            },
            {
                type: 'input',
                message: 'Intern Employee ID',
                name: 'internID',
            },
            {
                type: 'input',
                message: 'Enter interns email address',
                name: 'internEmail',
            },
            {
                type: 'input',
                message: 'Interns School',
                name: 'school',
            },
            {
                type: 'list',
                message: 'Which Team Member would you like to add next?',
                name: 'newTeam',
                choices: ['Engineer', 'Intern', 'Exit']
            },
        ])
        .then(answers => {
            let intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.school);
            teamMembers.push(intern);
            addTeamMember(answers.addTeam);

        })

}

function addTeamMember(result) {
    if (result === "Engineer") {
        addEngineer();
    } else if (result === "Intern") {
        addIntern();
    } else {
        generateHtml();
    }
};


promptUser();