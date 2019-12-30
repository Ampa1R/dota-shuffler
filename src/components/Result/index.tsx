import React from 'react';
import ResultHero from '../ResultHero';
import ResultBoot from '../ResultBoot';
import ResultItem from '../ResultItem';
import { ResultModel, ItemModel } from '../../models';
import './index.scss';

interface Props {
    result: ResultModel;
}

const Result: React.FC<Props> = ({ result }: Props) => {
    const { hero, boot, items } = result;
    return (
        <main className="Result">
            <ResultHero hero={hero} />
            <ResultBoot boot={boot} />
            {items.map((item: ItemModel | undefined, i: number) => (
                <ResultItem item={item} key={item ? item.id : i} />
            ))}
        </main>
    );
};

export default Result;
