import React from 'react';
import Header from '../../components/Header';
import Result from '../../components/Result';
import './index.scss';
import items from '../../data/artifacts.json';

interface State {
    result: {
        hero: number | null;
        boot: number | null;
        items: number[];
    };
}

class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            result: {
                hero: null,
                boot: null,
                items: [],
            },
        };
    }

    componentDidMount(): void {
        console.log(items);
    }

    render(): React.ReactNode {
        const { result } = this.state;
        return (
            <div>
                <div className="App">
                    <Header />
                    <Result result={result} />
                </div>
            </div>
        );
    }
}

export default App;
