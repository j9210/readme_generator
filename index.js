const fs = require('fs');
const inquirer = require('inquirer');
// to generate html
const generateMarkdown = require("./src/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
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
        type: 'checkbox',
        name: 'license',
        message: 'Which license would you like to use for your project? Pick one.',
        choices: ['Apache License 2.0', 'GNU GPLv3','MIT','ISC']
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a description your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please include a link of your deployed project here.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please include a link to your deployed project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the installation instructions for your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter usage instructions and examples for your project!");
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmCredits',
        message: 'Would you like to list any collaborators, third-party assets that require attribution, or tutorials you followed?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, any third-party assets that require attribution, and any tutorials you followed.',
        when: ({confirmCredits}) => {
            if (confirmCredits) {
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
    },
    {
        type: 'input',
        name: 'github',
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
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the title of your project!");
                return false;
            }
        }
    }  
];


// function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: "Readme created!"
            
            })
        })
    })
}

// function to initialize program
const init = () => inquirer.prompt(questions);

// function call to initialize program
init()
    .then((data) => writeToFile(data))
    .catch((err) => console.log(err));
