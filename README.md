# <Team-Profile-Generator>

## Description

This project allows a user to generate a team website -with information about their Manager, team Engineers, and Interns- by simply answering questions on the command line.
Building this project allowed me to practice my skills with node.js, including the inquirer and jest packages.  Using jest, I learned to create tests to ensure my application's functionality.  This project also allowed me to practice working more with Object Oriented programming concepts, such as creating Classes, extending classes with subclasses, and generating new instances of objects. 


## Installation

To install this project, you will need to have node installed.  
You will need to use node on the command line to run "npm install", as this will automatically install the project's dependencies (in this case: inquirer and jest).  

## Usage

To run the project, you will need to enter "node index.js" in the command line.  You will then be prompted to answer questions about your team's manager.  After answering the questions pertaining to the manager, you will be prompted to add more employees.  You can opt to add as many Engineers and Interns as you would like, and will be prompted to answer questions about each employee you add.  When you have completed your team, you can select "I am finished building my team" to finish the process and generate your HTML file.  You can then find your page saved as "index.html" in the team-profile-generator file, and open in in your browser to see how it looks!

To see a video walkthrough of the application, please visit: https://watch.screencastify.com/v/pd6iQqvKM8iIOx0kfbwm 

## Credits

This project used the node inquirer and jest packages.  Bootstrap was used for generating styled HTML content.

## License

See LICENSE.txt in repository.

## Tests

Enter "npm run test" in the command line to test the functionality of our application.