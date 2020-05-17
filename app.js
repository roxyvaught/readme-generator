const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./develop/utils/generateMarkdown.js');

// array of questions for user
const questions = [
//promptUser = () => {
    // return inquirer.prompt([
        {
            type: 'input',
            name: 'user',
            message: 'Enter your GitHub username',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter your project name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'about',
            message: 'What is the project about?',
            validate: aboutInput => {
                if (aboutInput) {
                  return true;
                } else {
                  console.log('Please enter your project description!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install the project?',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please include the steps to install your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions to run the application.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please include usage steps for your application.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'List the GitHub username(s) for any collaborators.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Is there a test included?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the license for the project:',
            choices: ['Apache', 'MIT', 'Mozilla', 'Unlicense']
        }
    ];

// function to write README file
async function writeToFile(fileName, info) {
    await fs.promises.writeFile(fileName, info, 'utf-8');
  }
  
  // function to initialize program
  async function init() {
    const answers = await inquirer.prompt(questions);
    const createMarkdown = generateMarkdown(answers);
    await writeToFile('README.md', createMarkdown);
  }
  
  // function call to initialize program
  init();   
