import axios from 'axios';
import fs from 'fs';
import { heroesApi, abilitiesApi } from '../enums/api';
import { HeroModel, TalentModel, HeroFromApi, AbilityFromApi, AbilityModel } from '../../../src/models/index';

const heroImagesBaseUrl = 'https://cdn.dota2.com/apps/dota2/images/heroes';

interface Abilities {
    [id: number]: AbilityModel;
}

// eslint-disable-next-line import/prefer-default-export
export const getHeroes = async (directoryPath: string): Promise<void> => {
    console.log('Parsing Heroes');

    // Talents
    const abilitiesRes = await axios.get(abilitiesApi);
    const abilities: Abilities = {};
    Object.values(abilitiesRes.data)
        .forEach((item: AbilityFromApi) => {
            abilities[item.id] = item.isTalent ? {
                id: item.id,
                name: item.language && item.language.displayName,
                shortName: item.name,
            } : {
                id: item.id,
                name: item.language && item.language.displayName,
                shortName: item.name,
                description: item.language?.description,
                cooldown: item.stat?.cooldownArray ? item.stat?.cooldownArray?.join('/') : item.stat?.cooldown?.join('/'),
                manacost: item.stat?.manaCostArray ? item.stat?.manaCostArray?.join('/') : item.stat?.manaCost?.join('/'),
            };
        });

    const heroesRes = await axios.get(heroesApi);

    const formattedHeroes: HeroModel[] = Object.values(heroesRes.data).map(
        (hero: HeroFromApi): HeroModel => ({
            id: hero.id,
            name: hero.displayName,
            shortName: hero.shortName,
            attr: hero.stat.primaryAttribute,
            urlIcon: `${heroImagesBaseUrl}/${hero.shortName}_icon.png`,
            urlLg: `${heroImagesBaseUrl}/${hero.shortName}_lg.png`,
            urlFull: `${heroImagesBaseUrl}/${hero.shortName}_full.png`,
            urlVert: `${heroImagesBaseUrl}/${hero.shortName}_vert.jpg`,
            talents: hero.talents.map(talent => abilities[talent.abilityId]),
            abilities: hero.abilities.map(ability => abilities[ability.abilityId]),
        })
    )

    // const ablilities: Abilities    

    // // Format heroes
    // const res = await axios.get(heroesApi);
    // const formattedHeroes: HeroModel[] = Object.values(res.data).map(
    //     (hero: HeroFromApi): HeroModel => ({
    //         id: hero.id,
    //         name: hero.displayName,
    //         shortName: hero.shortName,
    //         attr: hero.stat.primaryAttribute,
    //         urlIcon: `${heroImagesBaseUrl}/${hero.shortName}_icon.png`,
    //         urlLg: `${heroImagesBaseUrl}/${hero.shortName}_lg.png`,
    //         urlFull: `${heroImagesBaseUrl}/${hero.shortName}_full.png`,
    //         urlVert: `${heroImagesBaseUrl}/${hero.shortName}_vert.jpg`,
    //         talents: hero.talents.map(talent => abilities[talent.abilityId]),
    //         abilities: hero.abilities.map(ability => abilities[ability.abilityId]),
    //         abilities: hero.abilities.reduce((result, ability) => result.push(ability.id), []),
    //         // TODO:
    //         // roles: hero.roles,
    //         // attackType: hero.stat.attackType,
    //     }),
    // );
    fs.writeFile(`${directoryPath}/heroes.json`, JSON.stringify(formattedHeroes), 'utf8', (err): void => {
        if (err) {
            console.log('An error occured while saving heroes to file.');
            console.log(err);
            return;
        }

        console.log('Heroes have been imported.');
    });
};
