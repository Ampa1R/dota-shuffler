const axios = require('axios');
const fs = require('fs');
const { heroesApi } = require('../enums/api.js');
const heroImagesBaseUrl = 'http://cdn.dota2.com/apps/dota2/images/heroes';


const getHeroes = async () => {
    console.log('Parsing Heroes');
    const res = await axios.get(heroesApi);
    const formattedHeroes = Object.values(res.data).map(hero => ({
        id: hero.language.heroId,
        name: hero.displayName,
        shortName: hero.shortName,
        urlIcon: `${heroImagesBaseUrl}/${hero.shortName}_icon.png`,
        urlLg: `${heroImagesBaseUrl}/${hero.shortName}_lg.png`,
        urlFull: `${heroImagesBaseUrl}/${hero.shortName}_full.png`,
        urlVert: `${heroImagesBaseUrl}/${hero.shortName}_vert.jpg`,
        
        // attr: hero.stat.heroPrimaryAttribute,
        // talents: hero.talents,
        // roles: hero.roles,
    }));
    fs.writeFile("heroes.json", JSON.stringify(formattedHeroes), 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
    });
    console.log(formattedHeroes[0].talents);
};

module.exports = { getHeroes };