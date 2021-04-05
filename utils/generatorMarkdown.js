function generateMarkdown(data) {
    return
     `# ${data.title}
     https://github.com/${data.github}/${data.title}
     # Description
     ${data.description}
     # Table of Contents
     *[Installation](#installation)
     *[Usage](#usage)
     *[License](#licenses)
     *[Contributors](#contributors)
     *[Tests](#tests)
     *[Questions](#email)
     # Installation
     The following neccessary dependecies must be installed to run the application: ${data.installation}.
     # Usage
     In order to use this app, you must ${data.usage}
     # License
     This project is licensed under ${data.licenses} license.
     # Contributing
     Contributors ${data.contributors}
     # Tests
     The following is needed to run a test: ${data.tests}
     # Questions
     If you have any questions about this project, contact: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;