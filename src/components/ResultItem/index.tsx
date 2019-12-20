import React from 'react';
import { ItemModel } from '../../models';

interface Props {
    item: ItemModel;
}

const ResultItem: React.FC<Props> = ({ item }: Props) => (
    <div className="Result__Item">{item.name}</div>
);

export default ResultItem;
