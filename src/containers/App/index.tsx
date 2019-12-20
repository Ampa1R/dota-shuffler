import React from 'react';
import Header from '../../components/Header';
import Result from '../../components/Result';
import { ResultModel } from '../../models';
import './index.scss';

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

    render(): React.ReactNode {
        const { result } = this.state;
        return (
            <div>
                <div className="App">
                    <Header />
                    <Result
                        hero={result.hero}
                        boot={result.boot}
                        items={result.items}
                    />
                </div>
            </div>
        );
    }
}

export default App;
