
const licenses = {
  'Apache license': {
    name: 'Apache v2.0',
    text: 'Apache License, version 2.0',
    link: 'https://opensource.org/license/apache2-0-php/',
    badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
  },
  'GPLv2 license': {
    name: 'GPLv2',
    text: 'GNU General Public License, version 2',
    link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
    badge: 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
  },
  'MIT': {
    name: 'MIT-0',
    text: 'MIT No Attribution License',
    link: 'https://opensource.org/licenses/MIT',
    badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
  }
};
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    const li = licenses[license];
    return `[![License: ${li.name}](${li.badge})](${li.link})`;
  }
  return '';
}
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    const li = licenses[license];
    return `[${li.link}](${li.link})`;
  }
  return '';
}
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  if (licenseLink) {
    const li = licenses[license];
    return `${li.text}: ${licenseLink}`;
  }
  return 'This project has not chosen a license yet.';
}

function renderQuestions(email, userName) {
  const mail = `, email: [${email}](${email})` ?? '';
  return `Contact [${userName}](https://github.com/${userName})` + mail; 
}
// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
### [Installation](#installation)
<a name="installation"></a>
${data.installation}
### [Usage](#usage)
<a name="usage"></a>
${data.usage}
### [License](#license)
<a name="license"></a>
${renderLicenseSection(data.license)}
### [Contributing](#contributing)
<a name="contributing"></a>
${data.contributing}
### [Tests](#tests)
<a name="tests"></a>
${data.tests}
### [Questions](#questions)
<a name="questions"></a>
${renderQuestions(data.email, data.githubUsername)}
`;
}

module.exports = generateMarkdown;