//Generate License
const generateLicense = license => {
  if (!license) {
    return '';
  }
  return `## License

  Licensed under the ${license}.`
}

//Create a badge for the selected license
const generateBadge = license => {
  if(!license) {
    return '';
  }
  return `<img src = "https://img.shields.io/badge/License-${license}-red">`
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  ${data.link}

  ${generateBadge(data.license)}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Github](#github)
  - [Email](#email)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  <img src ='assets/images/${data.screenshot}' height = 450px>

  ## Credits
  ${data.credits}

  ## Tests
  ${data.tests}

  ## Github 
  Check out my github profile at [Github](http://github.com/${data.github})

  ## Email
  If you have any questions, feel free to contact me at <${data.email}>

  ${generateLicense(data.license)}
`;
}

module.exports = generateMarkdown;
