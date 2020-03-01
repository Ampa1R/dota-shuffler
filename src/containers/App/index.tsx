import React from 'react';
import Header from '../../components/Header';
import Result from '../../components/Result';
import { ResultModel } from '../../models';
import './index.scss';
import { getResult } from '../../helpers';

interface State {
    result: ResultModel;
}

const defaultResult: ResultModel = {
    hero: {},
    boot: {},
    items: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
};

class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            result: defaultResult,
        };
    }

    handleClick = (): void => {
        this.setState(() => ({
            result: defaultResult,
        }));
        const result = getResult();
        setTimeout(() => this.setState(() => ({ result })));
    };

    render(): React.ReactNode {
        const { result } = this.state;
        return (
            <div className="App">
                <Header />
                <Result result={result} />
                <button
                    type="button"
                    className="Button"
                    onClick={this.handleClick}
                >
                    I’M FEELING LUCKY
                </button>
            </div>
        );
    }
}

export default App;
