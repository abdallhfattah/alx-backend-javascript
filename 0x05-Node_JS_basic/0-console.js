const { stdout } = require('process');

function displayMessage(str) {
  stdout.write(`${str}\n`);
}

module.exports = displayMessage;
