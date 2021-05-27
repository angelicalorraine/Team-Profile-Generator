const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');


const teamMembers = [];


const promptUser = () => {
    inquirer
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
    inquirer
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
    inquirer
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
        generateHTML();
    }
};

const profileHTML = teamMembers => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="dist/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Bebas+Neue|Roboto&display=swap" rel="stylesheet">
        
    
    </head>
    
    <body>
    
        <div class="jumbotron jumbotron-fluid team-profile">
            <div class="container ">
                <h1 class="display-4 text-center dream-team" >Dream Team Profile</h1>
                <p class="lead text-center">Meet the Dream Team. View each employees
                    information and their
                    part in the company! </p>
            </div>
        </div>
    
    
        <div class="d-flex flex-wrap container">
            

            ${generateTeamMember(teamMembers)}


            </div>

            </body>
            
            </html>`
}

const generateTeamMember = teamMembers => {

    const generateManager = manager => {

        return `<div class="card" style="width: 18rem;">      <div class="card-header cardTop">
    <h2 class="card-title">${manager.getName()}</h2>
   <h4>  <i class="fas fa-user-tie fa-lg"></i> ${manager.getRole()} </h4>

</div>
<ul class="list-group list-group-flush card-body">
    <li class="list-group-item"><i class="far fa-id-badge"></i> <b>ID:</b> ${manager.getId()}</li> </h4>
    <li class="list-group-item"><i class="fas fa-envelope"></i> <b>Email: </b>
        <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h4>
    </li>
    <li class="list-group-item"><i class="fas fa-building"></i> <b>Office Number: </b> ${manager.getOfficeNumber()}</li></h4>
</ul>
</div>`
    }

    const generateEngineer = engineer => {
        return ` <div class="card style="width: 18rem;">     <div class="card-header cardTop">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h4> <i class="fas fa-laptop-code fa-lg"></i> ${engineer.getRole()}</h4>
  
  </div>
  <ul class="list-group list-group-flush card-body">
      <li class="list-group-item"><i class="far fa-id-badge"></i>  <b>ID:</b> ${engineer.getId()}</li>
      <li class="list-group-item"><i class="fas fa-envelope"></i> <b>Email: </b>
          <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
      </li>
      <li class="list-group-item"><i class="fab fa-github"></i> <b>GitHub:</b> <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li> 
  </ul>
  </div>`;
    }

    const generateIntern = intern => {
        return ` <div class="card style="width: 18rem;">     <div class="card-header cardTop">
    <h2 class="card-title">${intern.getName()}</h2>
    <h4> <i class="fas fa-user-graduate fa-lg"></i> ${intern.getRole()}</h4>

</div>
<ul class="list-group list-group-flush card-body">
    <li class="list-group-item"><i class="far fa-id-badge"></i> <b>ID:</b> ${intern.getId()}</li>
    <li class="list-group-item"><i class="fas fa-envelope"></i> <b>Email: </b>
        <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
    </li>
    <li class="list-group-item"><i class="fas fa-school"></i> <b> School:</b> ${intern.getSchool()}</li>
</ul>
</div>`;
    };

    const team = [];

    team.push(teamMembers
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
    );
    team.push(teamMembers
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
    );
    team.push(teamMembers
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
    );
    return team.join("");

}




function generateHTML() {
    fs.writeFileSync("Team.html", profileHTML(teamMembers), (err) =>
        err ? console.error(err) : console.log('Go Team!!')
    )

}

promptUser();