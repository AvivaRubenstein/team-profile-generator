const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
var employees = [];
const generateHTML = require('./generateHTML');

const managerQuestions = [
    //team manager’s name, employee ID, email address, and office number
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the team manager's employee ID?",
        name: 'managerId',
    },
    {
        type: 'input',
        message: "What is the team manager's email address?",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'managerOffice',
    }];

const employeeQuestions = [
    {
        type: 'list',  //user selects an option from the list
        message: 'Please select one of the following options: ',
        choices: ["Add an Engineer", "Add an Intern", "I am finished building my team"],
        name: 'menu',
    },
    //THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engineerName',
        //using "when" keyword means this question will only be asked if the answer to the menu question was that we wanted to add an engineer to the team
        when: (answers) => answers.menu === "Add an Engineer",
    },
    {
        type: 'input',
        message: "What is the engineer's employee ID?",
        name: 'engineerId',
        when: (answers) => answers.menu === "Add an Engineer",
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'engineerEmail',
        when: (answers) => answers.menu === "Add an Engineer",
    },
    {
        type: 'input',
        message: "What is the engineer's Github username?",
        name: 'engineerGithub',
        when: (answers) => answers.menu === "Add an Engineer",
    },
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'internName',
        //using "when" keyword means this question will only be asked if the answer to the menu question was that we wanted to add an intern to the team
        when: (answers) => answers.menu === "Add an Intern",
    },
    {
        type: 'input',
        message: "What is the interns's employee ID?",
        name: 'internId',
        when: (answers) => answers.menu === "Add an Intern",
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'internEmail',
        when: (answers) => answers.menu === "Add an Intern",
    },
    {
        type: 'input',
        message: "What is the intern's school",
        name: 'internSchool',
        when: (answers) => answers.menu === "Add an Intern",
    },



];


var finalAnswers = [];
function init() {
    inquirer.prompt(managerQuestions)
        .then((answers) => {
            finalAnswers.push(answers);
            addMoreEmployees(employeeQuestions);
            //after we have all of the answers/employees filled into the finalAnswers array, we will loop through each object in the array
            //and will create an employee object for each of them using the createEmployees() function
            //each object will be passed in to that function one by one, being called by the variable name employee
        });
}

function addMoreEmployees(employeeQuestions) {
    //we are only re-prompting the user starting from the menu question and forward
    inquirer.prompt(employeeQuestions)
        .then((answers) => {

            if (answers.menu !== "I am finished building my team") {
                //this is a recursive function--- it calls itself to run again and re-prompt the user starting from the menu
                //as long as the person has not answered that they are finished
                finalAnswers.push(answers);
                addMoreEmployees(employeeQuestions);

            }
            else {
                //if after we re-prompt the user they decide that they are done entering their team, then we close the addMoreEmployees() function
                //here we are not pushing anything into finalAnswers because the only answer in the newest iteration of inquirer.prompt is 
                //that the menu question was answered saying that we are finished --- the answers put in for previous iterations are already pushed in
                
                    finalAnswers.forEach((employee => {
                        createEmployees(employee);
                        console.log(employees);
                    }));
                    generateHTML.createEmployeeCards(employees);
                    var html = generateHTML.generateHTML(); 
                    generateHTML.writeToHtml(html);
            }
        });
}
//this function creates instances of the Employee class based on the user's answers
function createEmployees(employee) {
    switch (employee.menu) {
        case undefined:
            var manager = new Manager(employee.managerName, employee.managerId, employee.managerEmail, employee.managerOffice);
            manager.getRole(); //will return "Manager"
            manager.getName();
            manager.getId();
            manager.getEmail();
            manager.getOfficeNumber();
            // console.log(manager);
            employees.push(manager);

            return manager;
        case "Add an Engineer":
            var engineer = new Engineer(employee.engineerName, employee.engineerId, employee.engineerEmail, employee.engineerGithub);
            engineer.getRole(); //will return "Engineer"
            engineer.getName();
            engineer.getId();
            engineer.getEmail();
            engineer.getGithub();
            // console.log(engineer);
            employees.push(engineer);

            return engineer;
        case "Add an Intern":
            var intern = new Intern(employee.internName, employee.internId, employee.internEmail, employee.internSchool);
            intern.getRole(); //will return "Intern"
            intern.getName();
            intern.getId();
            intern.getEmail();
            intern.getSchool();
            // console.log(intern);
            employees.push(intern);

            return intern;
    }

}


init();
