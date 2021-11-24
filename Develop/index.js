// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What will be the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage information?",
    name: "usage",
  },
  {
    type: "input",
    message: "Who are the contributors?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What are the test instructions?",
    name: "testing",
  },
  {
    type: "list",
    message: "Which license would you like to use?",
    name: "license",
    choices: ["MIT", "GNU", "Apache"],
  },
  {
    type: "input",
    message: "What is your Github Username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    writeToFile("ReadMe.md", generateMarkdown(responses))
  });
}

// Function call to initialize app
init();
