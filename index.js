const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
//const generateHTML = require('./generateHTML');

const questions = [
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
    },
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

// function writeToHtml(data){
//     fs.writeFile("index.html", data, () => console.log("HTML successfully generated!"));
// }
var finalAnswers =[];
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            
            //if the user chooses the option to add an engineer or an intern, when they are done answering the questions 
            //pertaining to adding that employee, they will be returned to the menu question in the array, 
            //which again allows them to choose whether to add more employees or be done
            if (answers.menu !== "I am finished building my team") {
                // console.log(answers);
                finalAnswers.push(answers);
                restartFromMenu(questions);
                
                //console.log(finalAnswers);

            }
            else {
                // console.log(answers);
                finalAnswers.push(answers);
                
            }
                //console.log(finalAnswers);
                return finalAnswers;

        });
}

function restartFromMenu(questions) {
    //we are slicing the questions array, and only re-prompting the user starting from the menu question and forward
    const startMenu = questions.slice(4);
    inquirer.prompt(startMenu)
        .then((answers) => {
            if (answers.menu !== "I am finished building my team") {
                //this is a recursive function--- it calls itself to run again and re-prompt the user starting from the menu
                //as long as the person has not answered that they are finished
                var restartAnswers = restartFromMenu(questions);
                finalAnswers.push(restartAnswers);

            }
            else {
                //if after we re-prompt the user they decide that they are done entering their team, then we close the restart function
                // console.log(answers);
                finalAnswers.push(answers);
                return;
            }
        });
}

init();
