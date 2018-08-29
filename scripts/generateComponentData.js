var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var reactDocs = require('react-docgen');
var chokidar = require('chokidar');

var paths = {
    examples: path.join(__dirname, '../src/docs/', 'examples' ),
    components: path.join(__dirname, '../src/', 'components'),
    output: path.join(__dirname, '../src/config/', 'componentData.js'),
}

//console.log('[paths]', paths);

let enableWatchMode = process.argv.slice(2) == '--watch';
// enableWatchMode = true;
if (enableWatchMode) {
    // Regenerate component metadata when components or examples change
    chokidar.watch([paths.examples, paths.components]).on('change', function(event,path) {
        generate(paths);
    })
} else {
    generate(paths);
}

function generate(paths) {
    let errors = [];
    let componentData = getDirectories(paths.components).map(function(componentName) {
        try {
           // console.log('before getComponentData');
            let componentData = getComponentData(paths, componentName);
           // console.log('after getComponentData');
            return componentData;
        } catch( error ) {
            errors.push('An error occurred while attempting to generate metadata for ' + componentName + '. ' + error);
        }
    });
    writeFile(paths.output, "module.exports = " + JSON.stringify(errors.length ? errors : componentData));
}

function getComponentData(paths, componentName) {
    let file = path.join(paths.components, componentName, componentName + '.js');
    //console.log("[getComponentData::file]", file);
    let content = readFile(file);
    let info = reactDocs.parse(content);

    let data = {
        name: componentName,
        description: info.description,
        props: info.props,
        examples: getExampleData(paths.examples, componentName)
    }

   // console.log("[data]", data);
    return data;
}

function getExampleData(examplesPath, componentName) {
    let examples = getExampleFiles(examplesPath, componentName);
    return examples.map(function(file) {
        let filePath = path.join(examplesPath, componentName, file);
        let content = readFile(filePath);
        let info = reactDocs.parse(content);
        return {
            name: file.slice(0, -3),
            description: info.description,
            code: content
        };
    })
}

function getExampleFiles (examplesPath, componentName) {
    let exampleFiles = [];
    try {
        exampleFiles = getFiles(path.join(examplesPath, componentName));
    } catch( error ) {
        console.log(chalk.red(`No examples were found for ${componentName}.`));
    }
    return exampleFiles;
}

function getDirectories (filePath) {
    return fs.readdirSync(filePath).filter(function(file) {
        return fs.statSync(path.join(filePath, file)).isDirectory();
    })
}

function getFiles (filePath) {
    return fs.readdirSync(filePath).filter(function(file) {
        return fs.statSync(path.join(filePath, file)).isFile();
    })
}

function writeFile (filePath, content) {
    //console.log("[filePath]", filePath);
    //console.log("[content]", content);
    fs.writeFile(filePath, content, function(err) {
        err ? console.log(chalk.red(err)) : console.log(chalk.green("Component data saved."))
    })
}

function readFile (filePath) {
   // console.log(['readFile::filePath'], filePath);
    let data = fs.readFileSync(filePath, "utf-8");
   // console.log(['readFile::data'], data);
    return data;
}