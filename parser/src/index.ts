import fs from 'fs';
import { getHeroes } from './options/heroes';
import { getItems } from './options/items';
import { resultDirectory, resultFrontDirectory } from './enums/config';


const args = process.argv.slice(2);
let anythingIsCalled = false;

if (!fs.existsSync(resultDirectory)) {
    fs.mkdirSync(resultDirectory);
}

if (!fs.existsSync(resultFrontDirectory)) {
    fs.mkdirSync(resultFrontDirectory);
}

if (args.includes('--heroes')) {
    getHeroes(resultDirectory);
    getHeroes(resultFrontDirectory);
    anythingIsCalled = true;
}

if (args.includes('--items')) {
    getItems(resultDirectory);
    getItems(resultFrontDirectory);
    anythingIsCalled = true;
}

if (!anythingIsCalled) {
    console.log('You need to specify at least 1 argument');
}
