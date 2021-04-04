const inquirer = require("inquirer");


const promptUser = () => {

    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
        }
    ]);

}

const promptFileCreation = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            validate: (value) => {
                if(value) {
                    return true;
                }
                else {
                    return false;
                    console.log("I need a Page Title to continue.");
                }
            }
        },
        {
            type: 'input',
            message: 'How would you describe the project?',
            name: 'description',
            validate: (value) => {
                if(value) {
                    return true;
                }
                else {
                    return false;
                    console.log("I need a concise description of your project to continue.");
                }
            }
        },
        {
            type: 'input',
            message: 'How does one install this project?',
            name: 'installation',
            validate: (value) => {
                if(value) {
                    return true;
                }
                else {
                    return false;
                    console.log("I need to know how to install it to use it.");
                }
            }
        },
        {
            
            type: 'input',
            message: 'How do you use this project?',
            name: 'usage',
            validate: (value) => {
                if(value) {
                    return true;
                }
                else {
                    return false;
                    console.log("I need to know how this project works.");
                }
            }
        },
        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contributors',
            validate: (value) => {
                if(value) {
                    return true;
                }
                else {
                    return false;
                    console.log("I need to know how worked on this project. Give credits where it's due.");
                }
            }
        },
        {
            type: 'input',
            message: 'Any tests for this project?',
            name: 'tests',
            validate: (value) => {
                if(value) {
                    return true;
                }
                else {
                    return false;
                    console.log("I need a tests to make sure the project works.");
                }
            }
        },
        {
            type: 'list',
            message: 'Any licenses used in this project? Use N/A if none.',
            name: 'licenses',
            choices:['Apache', 'GPL', 'LGPL', 'MIT', 'MPL', 'CDDL', 'EPL', 'N/A'],
            validate: (value) => {
                if(value) {
                    return true;
                }
                else {
                    return false;
                    console.log("I need to show licenses for every project.");
                }
            }
        },
        {
            type: 'input',
            message: 'Github UserName:',
            name: 'github',
            validate: (value) => {
                if(value) {
                    return true;
                }
                else {
                    return false;
                    console.log("I need your github username.");
                }
            }
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'email',
            validate: (value) => {
                if(value) {
                    return true;
                }
                else {
                    return false;
                    console.log("I need your email address for people to reach you.");
                }
            }
        }
    ])
}

promptUser()
    .then(promptFileCreation)