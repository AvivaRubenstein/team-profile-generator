function createEmployee(answers){
    //<!-- employee cards will be added according to how many employees are added -->
    //TODO set up all employees to be in an array of employee objects, 
    //and loop through each one and create the HTML for that employee to be added 
    //to the full HTML doc

    //TODO use conditional logic to check what kind of employee each employee is, and 
    //depending on what type they are, return the property that is unique to them
    //and insert that as the bottom item of their employee card
    
    return `
    <div class = "container">
        <div class = "row">
            <div class = "col-12 col-md-6 col-lg-4">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <!-- Employee name goes here -->
          <h5 class="card-title"> ${}</h5>
        <!-- Employee position goes here -->
          <p class="card-text">${}</p>
        </div>
        <ul class="list-group list-group-flush">
        <!-- id, email, other info -->
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
        </div>
      </div>
    </div>
    </div>
    </div> `;

}
function generateHTML(answers) {

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




    </div>

   
  </body>

</html>
` ;
}

module.exports = generateHTML;