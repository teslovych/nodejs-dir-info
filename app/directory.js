const fs = require('fs');
const path = require('path');

function getListChildren(path) {
    fs.readdir(path, function (err, files) {
        if (err) {
            throw err;
        }
        files.forEach((file) => {
            const name = `${path}/${file}`;
            console.log(name);
        })
    });
}

function getDetailedInfo(pathAttr) {
    fs.readdir(path.resolve(pathAttr), function (err, files) {
        if (err) {
            throw err;
        }
        const infoTable = [];

        files.forEach((file) => {
            const pathChild = `${pathAttr}/${file}`;
            const stats = fs.statSync(pathChild);

            infoTable.push({
                file,
                size: stats.size
            });
        });

        console.table(infoTable);

    });
}

module.exports = {getListChildren, getDetailedInfo};