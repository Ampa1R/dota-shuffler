import React from 'react';
import Header from '../../components/Header';
import Result from '../../components/Result';
import { ResultModel } from '../../models';
import './index.scss';
import { getResult } from '../../helpers';

interface State {
    result: ResultModel;
}

class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            result: {
                hero: {},
                boot: {},
                items: [{}, {}, {}, {}, {}],
            },
        };
    }

    handleClick = (): void => {
        const res = getResult();
        console.log(res);
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
