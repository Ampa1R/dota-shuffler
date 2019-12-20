import { HeroModel, ItemModel, ResultModel } from '../models';
import heroes from '../data/heroes.json';

export const randomInteger = (min: number, max: number): number => {
    // случайное число от min до (max+1)
    const rand: number = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const getHero = (): HeroModel => {
    const heroId = randomInteger(0, 100);
    const { id, name } = heroes.find(hero => heroId === hero.id);
};

const getItem = (): ItemModel => {
    return {};
};

export const getResult = (): ResultModel => ({
    hero: getHero(),
    boot: getBoot(),
    items: getItems(),
});