const fs = require('fs');
const inquirer = require('inquirer');
// to generate html
const generateMarkdown = require("./src/page-template.js");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: "What is your Github username?",
        validate: nameInput => {
            if (nameInput) {
                return true; 
            } else {
                console.log("Please enter your username!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the title of your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the title of your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please enter a description of your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the title of your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Link',
        message: 'Please include a link of your deployed project here.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the title of your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the title of your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the title of your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'List your collaborators, any third-party assets that require attribution, and any tutorials you followed.'
    },
    {
        type: 'checkbox',
        name: 'License',
        message: 'Which license would you like to use for your project? Pick one.',
        choices: ['Apache License 2.0', 'GNU GPLv3','MIT','ISC']
    },
    {
        type: 'confirm',
        name: 'confirmFeatures',
        message: 'Would you like to add a list of your projects features?',
        default: true
    },
    {
        type: 'input',
        name: 'Features',
        message: 'List the features',
        when: ({confirmFeatures}) => {
            if (confirmFeatures) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Tests',
        message: ''

    }

    
];


// function to write README file
// function writeToFile(fileName, data) {
    
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
