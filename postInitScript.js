#!/usr/bin/env node

const chalk = require("chalk");
const path = require("path");

function printInitScript() {
  const projectDir = path.resolve();

  const instructions = `
    ${chalk.cyan(`Run instructions for ${chalk.bold("visionOS")}`)}:
    • cd "${projectDir}/visionos"

    • Install Cocoapods
      • bundle install # you need to run this only once in your project.
      • bundle exec pod install
      • cd ..
      
    • npx react-native run-visionos
    `;

  console.log(instructions);
}

printInitScript();
