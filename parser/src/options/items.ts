import axios from 'axios';
import fs from 'fs';
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
    };
};

const bootsShortNames: string[] = [
    'phase_boots',
    'power_treads',
    'boots',
    'arcane_boots',
    'tranquil_boots',
    'travel_boots',
];

// eslint-disable-next-line import/prefer-default-export
export const getItems = async (): Promise<void> => {
    console.log('Parsing Items');
    const res = await axios.get(itemsApi);
    const formattedItems: ItemModel[] = Object.values(res.data)
        .filter(
            (item: ItemFromApi) =>
                item.stat &&
                !item.stat.isRecipe &&
                item.stat.isPurchaseable &&
                item.stat.behavior !== 16, // mango tree, shovel, paints, etc...
        )
        .map((item: ItemFromApi) => ({
            id: item.id,
            name: item.displayName,
            shortName: item.shortName,
            url: `${itemImagesBaseUrl}/${item.image}`,
            isBoots: bootsShortNames.includes(item.shortName),
        }));
    fs.writeFile(
        'items.json',
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
        'boots.json',
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
