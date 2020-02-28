import React from 'react';
import { ItemModel } from '../../models';

interface Props {
    item: ItemModel | undefined;
}

const ResultItem: React.FC<Props> = ({ item }: Props) => (
    <div className="Result__Item">
        {item && item.url && <img src={item.url} alt={item.name} />}
    </div>
);

export default ResultItem;
