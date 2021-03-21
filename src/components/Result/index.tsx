/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import ResultHero from '../ResultHero';
import ResultBoot from '../ResultBoot';
import ResultItem from '../ResultItem';
import { ResultModel, ItemModel } from '../../models';
import './index.scss';

interface Props {
    result: ResultModel | null;
    attrs: string[];
    onAttrClick: (attr: string) => void;
}

const Result: React.FC<Props> = ({ result, attrs, onAttrClick }: Props) => {
    const { hero, boot, items = new Array(5).fill(null) } = result || {};
    return (
        <main className="Result">
            <section className="Result__Card">
                <ResultHero hero={hero}>
                    <div className="Attrs">
                        {['str', 'agi', 'int'].map(attr => (
                            <div
                                key={attr}
                                className={`Attrs__Item Attrs__Item--${attr} ${
                                    attrs.includes(attr)
                                        ? ''
                                        : 'Attrs__Item--Disabled'
                                }`}
                                onClick={(): void => onAttrClick(attr)}
                            />
                        ))}
                    </div>
                </ResultHero>
                <ResultBoot boot={boot} />
                {items.map((item: ItemModel | null, i: number) => (
                    <ResultItem item={item} key={item ? item.id : i} />
                ))}
            </section>
        </main>
    );
};

export default Result;
