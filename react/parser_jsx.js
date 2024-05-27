//parser_jsx.js
//prepare React-JSX/Yesod-Julius/Javascript code for compiling JSX with webpack


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

    const directoryPath = './components/';
    const tempPath = './temp/';

    // Use fs.readdirSync to read the contents of the directory synchronously
    var fileList = fs.readdirSync(directoryPath);

    console.log('Files and folders in the directory:', fileList);

    fileList = fileList.map(e => e.match(/.*\.js/)); //.toString());
 
    fileList = fileList.filter(Boolean);

    fileList = fileList.map(e => e.toString());

    console.log('Filtered files and folders in the directory:', fileList);

    for (var i=0, l=fileList.length; i<l; i++) {
        console.log(fileList[i].toString());

        const inputFile = directoryPath + fileList[i].toString();
        const outputFile = tempPath + fileList[i].split(".")[0].toString() + '.tmp.js';

        const regex1 = /(\(['"]?)(#\{.*\})(['"]?\))/g;
        const replacement1 = "('$2')";

        const regex2 = /(import .* from ['"])(\.\/)(\w*)(\.?.*)(['"];)/g;
        const replacement2 = "$1$2$3.tmp.js$5";

        const regex3 = /(@startuml)(.|\n)*?(@enduml)/g;
        const replacement3 = "";

        const regex4 = /(\/\*)(.|\n)*?(\*\/)/g;
        const replacement4 = "";
    
        const regex5 = /(\;?\/\/)(.*)(\n)/g;
        const replacement5 = "\n";
    
        // Read the input file
        const fileContent = readFile(inputFile);

        // Perform regex-based replacements
        var modifiedContent = replaceText(fileContent, regex1, replacement1);
        modifiedContent = replaceText(modifiedContent, regex2, replacement2);
        modifiedContent = replaceText(modifiedContent, regex3, replacement3);
        modifiedContent = replaceText(modifiedContent, regex4, replacement4);
        modifiedContent = replaceText(modifiedContent, regex5, replacement5);

        // Write the modified content to the output file
        writeFile(outputFile, modifiedContent);
    }

    console.log('Files have been processed.');
}

// Call the main function
main_postbuild();

