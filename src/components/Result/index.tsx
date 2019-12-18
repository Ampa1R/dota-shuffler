import React from 'react';

interface Props {
    result: {
        hero: number | null;
        boot: number | null;
        items: number[];
    };
}

const Result: React.FC<Props> = () => {
    return (
        <div>
            <p>ow yeah boooooooooooooooooooiiiiiiiiiiiiiiiiiiiiii</p>
        </div>
    );
};

export default Result;
