import React from 'react';
import Header from '../../components/Header';
import Result from '../../components/Result';
import { ResultModel } from '../../models';
import './index.scss';
import { getResult } from '../../helpers';

class App extends React.Component<{}, { result: ResultModel }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            result: {
                hero: {},
                boot: {},
                items: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
            },
        };
    }

    handleClick = (): void => {
        const res = getResult();
        this.setState(() => ({
            result: res,
        }));
    };

    render(): React.ReactNode {
        const { result } = this.state;
        return (
            <div>
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
            </div>
        );
    }
}

export default App;
