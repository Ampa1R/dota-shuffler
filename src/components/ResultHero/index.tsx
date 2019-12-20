import React from 'react';
import { HeroModel } from '../../models';

interface Props {
    hero: HeroModel;
}

const ResultHero: React.FC<Props> = ({ hero }: Props) => (
    <div className="Result__Hero">{hero.name}</div>
);

export default ResultHero;
