// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  ${data.description}
  ${data.link}

  ## Table of Contents
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Github](#github)
  - [Email](#email)

  ## License:
  [![License:${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

 

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}
  <img src ='assets/images/${data.screenshot}' height = 450px>

  ## Credits:
  ${data.credits}

  ## Tests:
  ${data.tests}

  ## Github: 
  Check out my github profile at [Github](http://github.com/${data.github})

  ## Email:
  If you have any questions, feel free to contact me at <${data.email}>
`;
}

module.exports = generateMarkdown;
