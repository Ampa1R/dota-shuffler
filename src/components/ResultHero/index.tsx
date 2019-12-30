import React from 'react';
import { HeroModel } from '../../models';

interface Props {
    hero: HeroModel | undefined;
}

const ResultHero: React.FC<Props> = ({ hero }: Props) => (
    <div className="Result__Hero">
        {hero && hero.id && <img src={hero.urlVert} alt={hero.name} />}
    </div>
);

export default ResultHero;
