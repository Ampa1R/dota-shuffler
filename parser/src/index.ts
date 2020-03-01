import fs from 'fs';
import { getHeroes } from './options/heroes';
import { getItems } from './options/items';
import { resultDirectory } from './enums/config';

const args = process.argv.slice(2);
let anythingIsCalled = false;

if (!fs.existsSync(resultDirectory)) {
    fs.mkdirSync(resultDirectory);
}

if (args.includes('--heroes')) {
    getHeroes();
    anythingIsCalled = true;
}
if (args.includes('--items')) {
    getItems();
    anythingIsCalled = true;
}

if (!anythingIsCalled) {
    console.log('You need to specify at least 1 argument');
}
