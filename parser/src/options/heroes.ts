import axios from 'axios';
import fs from 'fs';
import { heroesApi, abilitiesApi } from '../enums/api';
import { HeroModel, TalentModel } from '../../../src/models/index';

const heroImagesBaseUrl = 'https://cdn.dota2.com/apps/dota2/images/heroes';

interface HeroFromApi {
    id: number;
    displayName: string;
    shortName: string;
    roles: [];
    stat: {
        primaryAttribute: 'str' | 'agi' | 'int';
        attackType: 'Melee' | 'Ranged';
    };
    talents: [
        {
            slot: number;
            abilityId: number;
        },
    ];
}

interface AbilityFromApi {
    id: number;
    name: string;
    isTalent: boolean;
    language: {
        displayName: string;
    };
}

interface Abilities {
    [id: number]: TalentModel;
}

// eslint-disable-next-line import/prefer-default-export
export const getHeroes = async (directoryPath: string): Promise<void> => {
    console.log('Parsing Heroes');
    // Talents
    const abilitiesRes = await axios.get(abilitiesApi);
    const abilities: Abilities = {};
    Object.values(abilitiesRes.data)
        .filter((item: AbilityFromApi) => item.isTalent)
        .forEach((item: AbilityFromApi) => {
            abilities[item.id] = {
                id: item.id,
                name: item.language && item.language.displayName,
                shortName: item.name,
            };
        });
    // Format heroes
    const res = await axios.get(heroesApi);
    const formattedHeroes: HeroModel[] = Object.values(res.data).map(
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
            // TODO:
            // roles: hero.roles,
            // attackType: hero.stat.attackType,
        }),
    );
    fs.writeFile(
        `${directoryPath}/heroes.json`,
        JSON.stringify(formattedHeroes),
        'utf8',
        (err): void => {
            if (err) {
                console.log('An error occured while saving heroes to file.');
                console.log(err);
                return;
            }

            console.log('Heroes have been imported.');
        },
    );
};
