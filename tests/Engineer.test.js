const Engineer = require ('../lib/Engineer');
//npm run test is the command to start the tests
describe ("Creating new instances of Engineer subclass", () => {
test ("Instances of Engineer class accept a name as a parameter and adds it under engineer.name", () => {
    var name = "Jean";
    var engineer = new Engineer(name);
    expect (engineer.name).toBe("Jean");
});

test("Instances of Engineer class can accept a second parameter of id, and add it to the object under engineer.id", () =>{
    var id = "24601";
    var engineer = new Engineer("Jean Valjean", id);
    expect (engineer.id).toBe(id);
});

test("Instances of Engineer class can accept a third parameter of email, and add it to the object under engineer.email", () =>{
    var email = "baguettelover@gmail.com";
    var engineer = new Engineer("Jean Valjean", "24601", email );
    expect (engineer.email).toBe(email);
});

});

describe ("Methods within Engineer class work to return the correct information", () => {
    test ("engineer.getName() method should work to return the engineer's name", () => {
        var name = "Jean";
        var engineer = new Engineer(name);
        expect (engineer.getName()).toBe(name);
    });
    test ("engineer.getId() method should work to return the engineer's Id", () => {
        var id = "24601";
        var engineer = new Engineer("Jean Valjean", id);
        expect (engineer.getId()).toBe(id);
    });
    test ("engineer.getEmail() method should work to return the engineer's email", () => {
        var email = "baguettelover@gmail.com";
        var engineer = new Engineer("Jean Valjean", "24601", email);
        expect (engineer.getEmail()).toBe(email);
    });
    test ("engineer.getRole() method should work to return the engineer role- which, because it overwrites the Employee class, will always return 'Engineer'", () => {
        var engineer = new Engineer("Jean Valjean", "24601", "baguettelover@gmail.com");
        expect (engineer.getRole()).toBe("Engineer");
    });
    test ("engineer.getGithub() method should work to return the engineer's github account", () => {
        var github = "baguettesAndCoding";
        var engineer = new Engineer("Jean Valjean", "24601", "baguettelover@gmail.com", github);
        expect (engineer.getGithub()).toBe(github);
    });
    
    });