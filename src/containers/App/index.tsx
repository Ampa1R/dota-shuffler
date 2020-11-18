import React from 'react';
import Header from '../../components/Header';
import Result from '../../components/Result';
import { ResultModel } from '../../models';
import './index.scss';
import { getResult } from '../../helpers';

interface State {
    result: ResultModel | null;
    attrs: string[];
}

class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            result: null,
            attrs: ['str', 'agi', 'int'],
        };
    }

    componentDidMount(): void {
        window.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                this.handleRandom();
            }
        });
    }

    handleRandom = (): void => {
        const { attrs } = this.state;
        this.setState(() => ({
            result: null,
        }));
        const result = getResult(attrs);
        setTimeout(() => this.setState(() => ({ result })));
    };

    handleAttrChange = (attr: string): void => {
        const { attrs } = this.state;
        if (attrs.includes(attr)) {
            this.setState({
                attrs: attrs.filter(a => a !== attr),
            });
        } else {
            this.setState({
                attrs: [...attrs, attr],
            });
        }
    };

    render(): React.ReactNode {
        const { result, attrs } = this.state;
        return (
            <div className="App">
                <Header />
                <Result
                    result={result}
                    attrs={attrs}
                    onAttrClick={this.handleAttrChange}
                />
                <button
                    type="button"
                    className="Button"
                    onClick={this.handleRandom}
                >
                    I’M FEELING LUCKY
                </button>
            </div>
        );
    }
}

export default App;
