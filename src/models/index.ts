export interface HeroModel {
    id?: number;
    name?: string;
    url?: string;
}

export interface ItemModel {
    id?: number;
    name?: string;
    url?: string;
}

export interface ResultModel {
    hero: HeroModel;
    boot: ItemModel;
    items: ItemModel[];
}
