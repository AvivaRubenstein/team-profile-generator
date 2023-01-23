const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github){
        super(name, id, email);
        this.github = github; 
        
    }
    //get github username
    getGithub(){

    }
    getRole(){
        return "Engineer";
    }
}