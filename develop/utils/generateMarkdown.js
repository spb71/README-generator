// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `https://spb71.mit-license.org/`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `# License
    
    The license is covered under ${license}. Link to user license is below.
    ${renderLicenseLink(license)}`
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  ${renderLicenseBadge(data.license)}
  
  # Title
  ## ${data.title}

  # Description
  ${data.description}

  # Table of Contents

  [Title](#title)
  [Description](#description)
  [Installation](#installation) 
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)

  # Installation

  ${data.installation}

  # Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  # Contributing

  ${data.contribution}

  # Tests

  ${data.test}

  # Questions
  
  My work on Github: [github link](https://github.com/${data.github})
  Contact via Email: ${data.email}
`;
}

module.exports = generateMarkdown;
