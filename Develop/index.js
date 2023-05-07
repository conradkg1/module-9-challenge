// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

// const { mkdir, writeFile } = require("node:fs/promises");
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?',
        validate(answer) {
            if (!answer) {
                return 'Your project must have a title'
            }
            return true;
        }
    },
    {
        name: 'githubUsername',
        type: 'input',
        message: 'What is your github username?',
    },
    {
        name: 'emailInQuestions',
        type: 'list',
        message: 'Would you like to put your email address in the `Questions` section of the README?',
        choices: ["yes", "no"]
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email address: ',
        when(answers) {
            return answers.emailInQuestions === "yes";
        },
    },
    {
        name: 'license',
        type: 'list',
        message: 'How is your project licensed?',
        choices: ['MIT', 'ISC', 'BSD2', 'BSD3', 'GPLv2', 'GPLv3', 'Apache', 'None' ],
    },
    {
        name: 'description',
        type: 'input',
        message: 'Briefly describe your project: ',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What are the installation instructions for your project?',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What are the usage instructions for your project?',
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'How can others contribute to your project?',
    },
    {
        name: 'tests',
        type: 'input',
        message: 'How can users test your project?',
    },
];

async function createBuildDir() {
    try {
        // mkdir rejects if ./build/ exists when (default) { recursive: false }
        const createDir = await mkdir('./build/', { recursive: true });
        console.log(`created ${createDir}`);
        return createDir;
    } catch (err) {
        console.error(err.message);
    }
}

async function writeToFile(fileName, data) {
    try {
        return await writeFile(fileName, data);
    } catch (err) {
        console.error(err.message);
    }
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            createBuildDir()
                .then(() => {
                    writeToFile(`./build/README.md`, generateMarkdown(answers));
                });
        }) 
        .catch((err) => {
            if (err) throw err;
        });
}

init();