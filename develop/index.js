// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    question: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    question: 'Please provide a description of your project.',
},
{
    type: 'input',
    name: 'installation',
    question: 'What are the instructions for installing this project',
},
{
    type: 'input',
    name: 'usage',
    question: 'What will be the application be used for?',
},
{
    type: 'input',
    name: 'contribution',
    question: 'How would the user contribute to the project?',
},
{
    type: 'input',
    name: 'test',
    question: 'How would the user test the application',
},
{
    type: 'list',
    name: 'license',
    question: "What license will be added?",
    choices: ["MIT", "BSD", "GPL"],
},
{
    type: 'input',
    name: 'github',
    question: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'email',
    question: 'What is your email address?',
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
