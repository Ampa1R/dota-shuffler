import axios from 'axios';
import fs from 'fs';
import { abilitiesApi } from '../enums/api';
import { AbilityModel } from '../../../src/models/index';

// const abilityImagesBaseUrl = 'https://cdn.dota2.com/apps/dota2/images/ablities';

interface AbilityFromApi {
    id: number;
    name: string;
    uri: string;
    isTalent: boolean;
    language: {
        displayName: string;
        description: string[];
        attributes: string[];
    };
    stat: {
        cooldown: number[];
        manaCost: number[];
    };
}

// eslint-disable-next-line import/prefer-default-export
export const getAbilities = async (directoryPath: string): Promise<void> => {
    console.log('Parsing Abilities');
    // Talents
    const abilitiesRes = await axios.get(abilitiesApi);
    const abilities: AbilityModel[] = [];
    Object.values(abilitiesRes.data)
        .filter(
            (item: AbilityFromApi) =>
                !item.isTalent &&
                item.stat &&
                item.stat.cooldown &&
                item.stat.manaCost &&
                item.language &&
                item.language.displayName,
        )
        .forEach((item: AbilityFromApi) => {
            abilities.push({
                id: item.id,
                name: item.language.displayName,
                shortName: item.name,
                description: item.language.description.join(' '),
                cooldown: item.stat.cooldown.join(' / '),
                manacost: item.stat.manaCost.join(' / '),
            });
        });

    console.log(abilities.length);
    fs.writeFile(`${directoryPath}/abilities.json`, JSON.stringify(abilities), 'utf8', (err): void => {
        if (err) {
            console.log('An error occured while saving abilities to file.');
            console.log(err);
            return;
        }

        console.log('Abilities have been imported.');
    });
};
