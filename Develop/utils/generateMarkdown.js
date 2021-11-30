// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if( license !== "None"){
//   return `\n [License](#license)\n`
// }
// return "";
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if(license !== "None"){
//     return `## License
    
//     This project is licensed under the ${license} license`
//   }
//   return "";
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Questions](#questions)
  
  ## Description
   ${data.description}

  ## Installation
   ${data.installation}

  ## Usage 
  ${data.usage}

  ## License 
  ![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Contributors 
  ${data.contribution}

  ## Questions 
  If  you have any more questions feel free to email me at ${data.email}. You can find other work of mine
  at [${data.username}](https://github.com/${data.username}) 

`;
}

module.exports = generateMarkdown;
