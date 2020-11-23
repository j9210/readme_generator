//Create a badge for the selected license
const generateBadge = license => {
  if(!license) {
    return '';
  }
  return `<img src = "https://img.shields.io/badge/License-${license}-red">`
};

// dont show contributors section unless added
const generateCont = credits => {
  if (!credits) {
    return '';
  }
  return `## Contributing
  ${credits}
  `
};

// add contributor link to table of contents
const contToc = credits => {
  if (!credits) {
    return '';
  }
  return ` - [Contributing](#contributing)`

}
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}<br>
  ${data.link}

  ${generateBadge(data.license)}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)${contToc(data.credits)}
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ${generateCont(data.credits)}

  ## License
  ${data.license}

  ## Tests
  ${data.tests}

  ## Questions
  Check out my github profile at [Github](http://github.com/${data.github})

  Contact me at <${data.email}>
`;
}

module.exports = generateMarkdown;
