import React from 'react';
import ResultHero from '../ResultHero';
import ResultBoot from '../ResultBoot';
import ResultItem from '../ResultItem';
import { HeroModel, ItemModel } from '../../models';
import './index.scss';

interface Props {
    hero: HeroModel;
    boot: ItemModel;
    items: ItemModel[];
}

const Result: React.FC<Props> = ({ hero, boot, items }: Props) => (
    <main className="Result">
        <ResultHero hero={hero} />
        <ResultBoot boot={boot} />
        {items.map(item => (
            <ResultItem item={item} />
        ))}
    </main>
);

export default Result;
