import React from 'react';
import { HeroModel } from '../../models';

interface Props {
    hero: HeroModel | undefined;
}

const ResultHero: React.FC<Props> = ({
    hero,
    children,
}: React.PropsWithChildren<Props>) => (
    <div className="Result__Hero">
        {hero && hero.id && (
            <img src={hero.urlVert} alt={hero.name} title={hero.name} />
        )}
        {children}
    </div>
);

export default ResultHero;
