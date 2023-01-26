const Manager = require ('../lib/Manager');
//npm run test is the command to start the tests
describe ("Creating new instances of Manager subclass", () => {
test ("Instances of Manager class accept a name as a parameter and adds it under manager.name", () => {
    var name = "Jean";
    var manager = new Manager(name);
    expect (manager.name).toBe("Jean");
});

test("Instances of Manager class can accept a second parameter of id, and add it to the object under manager.id", () =>{
    var id = "24601";
    var manager = new Manager("Jean Valjean", id);
    expect (manager.id).toBe(id);
});

test("Instances of Manager class can accept a third parameter of email, and add it to the object under manager.email", () =>{
    var email = "baguettelover@gmail.com";
    var manager = new Manager("Jean Valjean", "24601", email );
    expect (manager.email).toBe(email);
});

});

describe ("Methods within Manager class work to return the correct information", () => {
    test ("manager.getName() method should work to return the manager's name", () => {
        var name = "Jean";
        var manager = new Manager(name);
        expect (manager.getName()).toBe(name);
    });
    test ("manager.getId() method should work to return the manager's Id", () => {
        var id = "24601";
        var manager = new Manager("Jean Valjean", id);
        expect (manager.getId()).toBe(id);
    });
    test ("manager.getEmail() method should work to return the manager's email", () => {
        var email = "baguettelover@gmail.com";
        var manager = new Manager("Jean Valjean", "24601", email);
        expect (manager.getEmail()).toBe(email);
    });
    test ("manager.getRole() method should work to return the manager role- which, because it overwrites the Employee class, will always return 'Manager'", () => {
        var manager = new Manager("Jean Valjean", "24601", "baguettelover@gmail.com");
        expect (manager.getRole()).toBe("Manager");
    });
    test ("manager.getOfficeNumber() method should work to return the manager's office number", () => {
        var office = "123";
        var manager = new Manager("Jean Valjean", "24601", "baguettelover@gmail.com", office);
        expect (manager.getOfficeNumber()).toBe(office);
    });
    
    });