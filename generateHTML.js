const fs = require('fs');
var employeeHTML = '';
function createEmployeeCards(employees) {
  //<!-- employee cards will be added according to how many employees are added -->
  //TODO set up all employees to be in an array of employee objects, 
  //and loop through each one and create the HTML for that employee to be added 
  //to the full HTML doc

  //TODO use conditional logic to check what kind of employee each employee is, and 
  //depending on what type they are, return the property that is unique to them
  //and insert that as the bottom item of their employee card

  employees.forEach((employee => {
    var role = employee.getRole();
    var uniqueAttr;
    if (role === "Manager") {
      uniqueAttr = `Office Number: ${employee.officeNumber}`;
    } else if (role === "Engineer") {
//this will be a clickable link to github profile
      uniqueAttr = `<a href="https://github.com/${employee.github}">Github Account:  ${employee.github}</a>`;
    } else if (role === "Intern") {
      uniqueAttr = `School: ${employee.school}`;
    }

    var employeeCardHTML = `
            <div class = "col-12 col-md-6 col-lg-4">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <!-- Employee role goes here -->
          <h5 class="card-title"> ${role}</h5>
        <!-- Employee name goes here -->
          <p class="card-text">${employee.name}</p>
        </div>
        <ul class="list-group list-group-flush">
        <!-- id, email, other info -->
          <li class="list-group-item">${employee.id}</li>
          <li class="list-group-item"><a href="mailto:${employee.email}">${employee.email}</a></li>
          <li class="list-group-item">${uniqueAttr}</li>
        </ul>
        <div class="card-body">
        </div>
      </div>
    </div>
    
    `;

    employeeHTML = employeeHTML.concat(employeeCardHTML);
  })
  );
}


function generateHTML() {

  return `
    <!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Team Profile Site</title>
  </head>

  <body>
    <div class="container">
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <div class="container-fluid">
            <h1>My Team</h1>
          </div>
       
      </nav>
    <div class = "container">
    <div class = "row">
${employeeHTML}
    </div>
    </div> 

    </div>

   
  </body>

</html>
` ;
}

function writeToHtml(html){
fs.writeFile("./dist/index.html", html, () => console.log("HTML successfully generated!"));
}

module.exports = { generateHTML, createEmployeeCards, writeToHtml };