const fs = require("fs")

function changeFileNames(folderPath) {

    var files = fs.readdirSync(folderPath);

    // with arrow function and callback
    files.forEach(file => {
        if (file.includes('.mp3')) {

            var newFileName = file;
            newFileName = newFileName.replace('yt1s.com - ', '');
            newFileName = newFileName.replace('  ', ' - ');

            changeFileName(path, file, newFileName);
        }
    })

}

function changeFileName(path, fileName, newFileName) {

    let Name = path + '/' + fileName;
    let newName = path + '/' + newFileName;

    fs.rename(Name, newName, (err) => { if (err) console.log(err) })

}