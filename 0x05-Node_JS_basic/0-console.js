const { stdout } = require("process");

export function displayMessage(str) {
  stdout.write(str + '\n');
}

