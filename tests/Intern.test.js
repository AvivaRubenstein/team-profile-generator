const Intern = require ('../lib/Intern');
//npm run test is the command to start the tests
describe ("Creating new instances of Intern subclass", () => {
test ("Instances of Intern class accept a name as a parameter and adds it under intern.name", () => {
    var name = "Jean";
    var intern = new Intern(name);
    expect (intern.name).toBe("Jean");
});

test("Instances of Intern class can accept a second parameter of id, and add it to the object under intern.id", () =>{
    var id = "24601";
    var intern = new Intern("Jean Valjean", id);
    expect (intern.id).toBe(id);
});

test("Instances of Intern class can accept a third parameter of email, and add it to the object under intern.email", () =>{
    var email = "baguettelover@gmail.com";
    var intern = new Intern("Jean Valjean", "24601", email );
    expect (intern.email).toBe(email);
});

});

describe ("Methods within Intern class work to return the correct information", () => {
    test ("intern.getName() method should work to return the intern's name", () => {
        var name = "Jean";
        var intern = new Intern(name);
        expect (intern.getName()).toBe(name);
    });
    test ("intern.getId() method should work to return the intern's Id", () => {
        var id = "24601";
        var intern = new Intern("Jean Valjean", id);
        expect (intern.getId()).toBe(id);
    });
    test ("intern.getEmail() method should work to return the intern's email", () => {
        var email = "baguettelover@gmail.com";
        var intern = new Intern("Jean Valjean", "24601", email);
        expect (intern.getEmail()).toBe(email);
    });
    test ("intern.getRole() method should work to return the intern role- which, because it overwrites the Employee class, will always return 'Intern'", () => {
        var intern = new Intern("Jean Valjean", "24601", "baguettelover@gmail.com");
        expect (intern.getRole()).toBe("Intern");
    });
    test ("intern.getSchool() method should work to return the intern's school", () => {
        var school = "Columbia";
        var intern = new Intern("Jean Valjean", "24601", "baguettelover@gmail.com", school);
        expect (intern.getSchool()).toBe(school);
    });
    
    });