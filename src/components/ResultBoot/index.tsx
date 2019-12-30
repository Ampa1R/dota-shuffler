import React from 'react';
import { ItemModel } from '../../models';

interface Props {
    boot: ItemModel | undefined;
}

const ResultBoot: React.FC<Props> = ({ boot }: Props) => (
    <div className="Result__Item Result__Item--boot">
        {boot && boot.id && <img src={boot.url} alt={boot.name} />}
    </div>
);

export default ResultBoot;
