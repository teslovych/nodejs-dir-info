const dirModule = require('./directory');

const args = process.argv.slice(2);

args.length ? run() : warnHandler();

function run() {
    dirModule.getDetailedInfo(args[0]);
}

function warnHandler() {
    console.error('No path provided');
}