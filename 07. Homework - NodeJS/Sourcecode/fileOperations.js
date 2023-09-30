// fileOperations.js
const fs = require('fs');

module.exports = {
    writeFile: function(filename, data) {
        fs.writeFile(filename, data, (err) => {
            if (err) throw err;
            console.log(`Data berhasil ditulis ke dalam file ${filename}.`);
        });
    },
    readFile: function(filename) {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) throw err;
            console.log(`Data dari file ${filename}:\n${data}`);
        });
    }
};
