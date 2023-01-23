const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

const questions = [

];

function writeToHtml(data){
    fs.writeFile("index.html", data, () => console.log("HTML successfully generated!"));
}

function init(){
    
    inquirer.prompt(questions)
    .then((answers) => {

    });
}
