const Employee = require ('../lib/Employee');
//npm run test is the command to start the tests
describe ("Creating new instances of Employee class", () => {
test ("Instances of Employee class accept a name as a parameter and adds it under employee.name", () => {
    var name = "Jean";
    var employee = new Employee(name);
    expect (employee.name).toBe("Jean");
});

test("Instances of Employee class can accept a second parameter of id, and add it to the object under employee.id", () =>{
    var id = "24601";
    var employee = new Employee("Jean Valjean", id);
    expect (employee.id).toBe(id);
});

test("Instances of Employee class can accept a third parameter of email, and add it to the object under employee.email", () =>{
    var email = "baguettelover@gmail.com";
    var employee = new Employee("Jean Valjean", "24601", email );
    expect (employee.email).toBe(email);
});

});

describe ("Methods within Employee class work to return the correct information", () => {
    test ("employee.getName() method should work to return the employee name", () => {
        var name = "Jean";
        var employee = new Employee(name);
        expect (employee.getName()).toBe(name);
    });
    test ("employee.getId() method should work to return the employee Id", () => {
        var id = "24601";
        var employee = new Employee("Jean Valjean", id);
        expect (employee.getId()).toBe(id);
    });
    test ("employee.getEmail() method should work to return the employee email", () => {
        var email = "baguettelover@gmail.com";
        var employee = new Employee("Jean Valjean", "24601", email);
        expect (employee.getEmail()).toBe(email);
    });
    test ("employee.getRole() method should work to return the employee role- which unless overwritten, will always return 'Employee'", () => {
        var employee = new Employee("Jean Valjean", "24601", "baguettelover@gmail.com");
        expect (employee.getRole()).toBe("Employee");
    });
    
    });