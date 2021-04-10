 function generateMarkdown(data) {
  console.log("md", data);
    if(!data) {
      return '';
    }
    let output =
     `
     ![License](https://img.shields/io/badge/License-${data.License}-blue.svg "License Badge")
     
     # ${data.Title}

     # Description
    
    ${data.Description}

     # Table of Contents

     *[Installation](#installation)
     *[Usage](#usage)
     *[License](#license)
     *[Contributors](#contributors)
     *[Tests](#tests)
     *[Questions](#email)

     # Installation
     ${data.Installation}

     # Usage
     ${data.Usage}

     # License
    ${data.License}
    
    
    # Contributors
    ${data.Contributors}
     
    # Tests
     ${data.Tests}
    
    # Questions
    ${data.Email}
    ${data.Github}
  `
  console.log(output);
  return output;
  }
  
  module.exports = generateMarkdown;
  
 