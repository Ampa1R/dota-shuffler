const attributes = require('./enums/attributes');
const { getHeroes } = require('./options/heroes');
const { getItems } = require('./options/items');

const args = process.argv.slice(2);
let anythingIsCalled = false;

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
// getHeroes();