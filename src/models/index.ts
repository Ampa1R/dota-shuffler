export interface HeroModel {
    id?: number;
    name?: string;
    shortName?: string;
    urlIcon?: string;
    urlLg?: string;
    urlFull?: string;
    urlVert?: string;
    talents: TalentModel[];
}

export interface ItemModel {
    id?: number;
    name?: string;
    shortName?: string;
    url?: string;
    isBoots?: boolean;
    cost?: number;
}

export interface ResultModel {
    hero: HeroModel | undefined;
    boot: ItemModel | undefined;
    items: ItemModel[];
}

export interface TalentModel {
    id: number;
    name: string;
    shortName: string;
}
