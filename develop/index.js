// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    default: 'My README',
},
{
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.',
    default: 'This is an initial README file.',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the instructions for installing this project?',
    default: 'Clone the repo to your local machine.'
},
{
    type: 'input',
    name: 'usage',
    message: 'What will be the application be used for?',
    default: 'Open the README file in your preferred IDE.'
},
{
    type: 'input',
    name: 'contribution',
    message: 'How would the user contribute to the project?',
    default: 'In the repo, click "Fork" to fork the repo.'
},
{
    type: 'input',
    name: 'test',
    message: 'How would the user test the application?',
    default: 'Test it in your preferred application.'
},
{
    type: 'list',
    name: 'license',
    message: "What license will be added?",
    choices: ["MIT", "BSD", "GPL"],
    default: "MIT"
},
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    default: 'spb71'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    default: 'sos@fakemail.com'
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your README.md file has been created.')
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {writeToFile('./utils/README.md', generateMarkdown(answers))})
}

// Function call to initialize app
init();
