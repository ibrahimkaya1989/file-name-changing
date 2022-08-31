const fs = require("fs")
let path = 'C:/Users/Kafein/Music/Youtube';
var files = fs.readdirSync(path);
/*
for (i = 0; i < files.length; i++) {
    let file = files[i];
    console.log(file);
    // do things with file
}
*/

// with arrow function and callback


files.forEach(file => {
    if (file.includes('.mp3')) {

        var newFileName = file;
        newFileName = newFileName.replace('yt1s.com - ', '');
        newFileName = newFileName.replace('  ', ' - ');

        fs.rename(path + '/' + file, path + '/' + newFileName, (err) => { if (err) console.log(err) })
        console.log(file);

    } else {
        var innerFolderPath = fs.readdirSync(path + '/' + file);
        innerFolderPath.forEach(fileInFolder => {
            console.log(fileInFolder);
            if (fileInFolder.includes('.mp3')) {

                var newFileName = fileInFolder;
                newFileName = newFileName.replace('yt1s.com - ', '');
                newFileName = newFileName.replace('  ', ' - ');

                fs.rename(path + '/' + file + '/' + fileInFolder, path + '/' + file + '/' + newFileName, (err) => { if (err) console.log(err) })
                console.log(path + '/' + file + '/' + fileInFolder);
            }
        })
    }
});



/*
fs.rename("./testfile.txt", "./newtestfile.txt", (err) => {
    if (err) console.log(err)
})
*/

/*
files.forEach(file => {
    if (file.includes('.mp3')) {
        let newFileName = file;
        newFileName = newFileName.replace('yt1s.com - ', '');
        newFileName = newFileName.replace('  ', ' - ');

        fs.rename(path + '/' + file, path + '/' + newFileName, (err) => { if (err) console.log(err) })

        console.log(newFileName);
    }
})
*/