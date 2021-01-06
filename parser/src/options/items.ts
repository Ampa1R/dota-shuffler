import axios from 'axios';
import fs from 'fs';
import whitelist from '../../whitelist.json';
import { itemsApi } from '../enums/api';
import { ItemModel } from '../../../src/models/index';

const itemImagesBaseUrl = 'http://cdn.dota2.com/apps/dota2/images/items';

type ItemFromApi = {
    id: number;
    displayName: string;
    shortName: string;
    image: string;
    stat: {
        behavior: number;
        isRecipe: boolean;
        isPurchaseable: boolean;
        cost: number;
    };
};

// eslint-disable-next-line import/prefer-default-export
export const getItems = async (directoryPath: string): Promise<void> => {
    console.log('Parsing Items');
    const res = await axios.get(itemsApi);
    const formattedItems: ItemModel[] = Object.values(res.data)
        .filter(
            ({ shortName }: ItemFromApi) =>
                whitelist.items.includes(shortName) ||
                whitelist.boots.includes(shortName),
        )
        .map((item: ItemFromApi) => ({
            id: item.id,
            name: item.displayName,
            shortName: item.shortName,
            url: `${itemImagesBaseUrl}/${item.image}`,
            isBoots: whitelist.boots.includes(item.shortName),
            cost: item.stat.cost,
        }));
    fs.writeFile(
        `${directoryPath}/items.json`,
        JSON.stringify(formattedItems.filter(item => !item.isBoots)),
        'utf8',
        (err): void => {
            if (err) {
                console.log('An error occured while saving items to file.');
                console.log(err);
                return;
            }

            console.log('Items have been imported.');
        },
    );
    fs.writeFile(
        `${directoryPath}/boots.json`,
        JSON.stringify(formattedItems.filter(item => item.isBoots)),
        'utf8',
        (err): void => {
            if (err) {
                console.log('An error occured while saving boots to file.');
                console.log(err);
                return;
            }

            console.log('Boots have been imported.');
        },
    );
};
