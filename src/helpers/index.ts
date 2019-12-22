import { HeroModel, ItemModel, ResultModel } from '../models';
import heroes from '../data/heroes.json';
import boots from '../data/boots.json';
import items from '../data/items.json';

export const randomInteger = (min: number, max: number): number => {
    // случайное число от min до (max+1)
    const rand: number = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const getHero = (): HeroModel => {
    const heroId = randomInteger(0, 100);
    return heroes.find(h => heroId === h.id);
};

const getItem = (isBoot?: boolean): ItemModel => {
    if (isBoot) {
        return boots.find(b => randomInteger(0, 150) === b.id);
    }
    const itemId = randomInteger(0, 150);
    return items.find(i => itemId === i.id);
};

export const getResult = (): ResultModel => ({
    hero: getHero(),
    boot: getItem(true),
    items: new Array(5).fill(getItem()),
});
