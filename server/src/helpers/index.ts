import { HeroModel, ItemModel, ResultModel, TalentModel } from '../models';
const heroes = require('../../data/heroes.json');
const items = require('../../data/items.json');
const boots = require('../../data/boots.json');

export const randomInteger = (min: number, max: number): number => {
    // случайное число от min до (max+1)
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const getHero = (attrs: string[]): HeroModel => {
    let hero = heroes[randomInteger(0, heroes.length - 1)];
    for (let i = 0; i < heroes.length; i += 1) {
        if (attrs.includes(hero.attr)) {
            break;
        }
        hero = heroes[randomInteger(0, heroes.length - 1)];
    }

    const talents = [
        randomInteger(0, 1),
        randomInteger(2, 3),
        randomInteger(4, 5),
        randomInteger(6, 7),
    ];
    return {
        ...hero,
        talents: talents.map((i: number): TalentModel => hero.talents[i]),
    };
};

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

export const getResult = (attrs: string[]): ResultModel => ({
    hero: getHero(attrs),
    boot: getBoot(),
    items: getItems(),
});
