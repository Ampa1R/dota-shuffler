import { HeroModel, ItemModel, ResultModel } from '../models';
import heroes from '../data/heroes.json';
import items from '../data/items.json';
import boots from '../data/boots.json';

export const randomInteger = (min: number, max: number): number => {
    // случайное число от min до (max+1)
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const getHero = (): HeroModel => heroes[randomInteger(0, heroes.length - 1)];

const getBoot = (): ItemModel => boots[randomInteger(0, boots.length - 1)];

const getItems = (): ItemModel[] => {
    if (items.length < 5) {
        return [];
    }
    const indexes: number[] = [];
    let index: number;
    do {
        index = randomInteger(0, items.length - 1);
        if (!indexes.includes(index)) {
            indexes.push(index);
        }
    } while (indexes.length < 5);
    return indexes.map(i => items[i]);
};

export const getResult = (): ResultModel => ({
    hero: getHero(),
    boot: getBoot(),
    items: getItems(),
});
