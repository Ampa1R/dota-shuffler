import axios from 'axios';
import fs from 'fs';
import { heroesApi } from '../enums/api';
import { resultDirectory } from '../enums/config';
import { HeroModel } from '../../../src/models/index';

const heroImagesBaseUrl = 'http://cdn.dota2.com/apps/dota2/images/heroes';

type HeroFromApi = {
    id: number;
    displayName: string;
    shortName: string;
    talents: [];
    roles: [];
    stat: {
        heroPrimaryAttribute: string;
    };
};

// eslint-disable-next-line import/prefer-default-export
export const getHeroes = async (): Promise<void> => {
    console.log('Parsing Heroes');
    const res = await axios.get(heroesApi);
    const formattedHeroes: HeroModel[] = Object.values(res.data).map(
        (hero: HeroFromApi) => ({
            id: hero.id,
            name: hero.displayName,
            shortName: hero.shortName,
            urlIcon: `${heroImagesBaseUrl}/${hero.shortName}_icon.png`,
            urlLg: `${heroImagesBaseUrl}/${hero.shortName}_lg.png`,
            urlFull: `${heroImagesBaseUrl}/${hero.shortName}_full.png`,
            urlVert: `${heroImagesBaseUrl}/${hero.shortName}_vert.jpg`,
            // TODO:
            // attr: hero.stat.heroPrimaryAttribute,
            // talents: hero.talents,
            // roles: hero.roles,
        }),
    );
    fs.writeFile(
        `${resultDirectory}/heroes.json`,
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
