const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');


const md = require("./util/generatorMarkdown");


const questions = [
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'Title'
        },
        {
            type: 'input',
            message: 'How would you describe the project?',
            name: 'Description'
        },
            {
            type: 'input',
            message: 'How does one install this project?',
            name: 'Installation'
            },
        {
                        
            type: 'input',
            message: 'How do you use this project?',
            name: 'Usage'
        },
        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'Contributors'
        },
        {
            type: 'input',
            message: 'Any tests for this project?',
            name: 'Tests'
        },
        {
            type: 'checkbox',
            message: 'Any licenses used in this project? Use N/A if none.',
            name: 'License',
            choices: ['Apache', 'BSD-2', 'BSD-3', 'GPL', 'LGPL', 'MIT', 'MPL', 'CDDL', 'EPL']
        },
        {
            type: 'input',
            message: 'Github UserName:',
            name: 'Github'
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'Email'
        }
    ]

function writeToFile(fileName, data) {

        console.log(fileName);
            console.log(data);
        fs.writeFile(fileName, md(data), function(err) {
            
            if(err){
                reject(err);
            }
            else{   
            console.log("README created");
            };
        })     
    
};

function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("./dist/README.md", data);
            console.log(data);

        })
}

init();



