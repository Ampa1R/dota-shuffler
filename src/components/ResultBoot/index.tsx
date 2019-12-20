import React from 'react';
import { ItemModel } from '../../models';

interface Props {
    boot: ItemModel;
}

const ResultBoot: React.FC<Props> = ({ boot }: Props) => (
    <div className="Result__Item Result__Item--boot">{boot.name}</div>
);

export default ResultBoot;
