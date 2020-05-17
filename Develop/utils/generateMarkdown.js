// Badges
const badges = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "Apache": "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "Mozilla": "[![License: Mozilla](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  "Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
};


// function to generate markdown for README
function generateMarkdown(info) {
  return `# ${info.title}
  ${info.about}

  ## Badges 
  ${badges[info.license]}

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Test](#test)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  ${info.install}
  
  ## Usage
  Run the following command in the command line and answer the questions ${info.usage}

  ## Contributions
  [GitHub: ${info.contributing}](https://github.com/${info.contributing})
  
  ## Test
  ${info.tests}

  ## License
  Licensed under the ${info.license} license

  ## Questions
  Have any questions? Email me at ${info.email}

`;
}

module.exports = generateMarkdown;
