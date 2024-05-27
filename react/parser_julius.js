
const fs = require('node:fs');
//import { readFileSync, writeFileSync } from 'fs';

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

// Function to write to a file
function writeFile(filePath, data) {
    fs.writeFileSync(filePath, data);
}

// Function to perform regex-based replacements
function replaceText(text, regex, replacement) {
    return text.replace(regex,replacement);
}

// Main function
function main_postbuild() {
    const inputFile = './temp/react.tmp.julius';
    const outputFile = '../templates/react.julius';

    const regex1 = /(['"])(#\{.*?\})(['"])/g;
    const replacement1 = "$2";

    const regex2 = /(className.?=.?)(['"])(.*?)(['"])/g;
    const replacement2 = ".$3";

    // Read the input file
    const fileContent = readFile(inputFile);

    // Perform regex-based replacements
    var modifiedContent = replaceText(fileContent, regex1, replacement1);
    modifiedContent = replaceText(modifiedContent, regex2, replacement2);

    // Write the modified content to the output file
    writeFile(outputFile, modifiedContent);

    console.log('File has been processed.');
}

// Call the main function
main_postbuild();

