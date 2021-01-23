import React from 'react';
import heroes from '../../data/heroes.json';
import items from '../../data/items.json';
import boots from '../../data/boots.json';
import Header from '../../components/Header';
import Result from '../../components/Result';
import { ResultModel } from '../../models';
import { getResult } from '../../helpers';
import './index.scss';

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
        this.prefetchImages();

        window.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                this.handleRandom();
            }
        });
    }

    prefetchImages = () => {
        const imageUrls: Array<string> = [];

        boots.forEach(item => imageUrls.push(item.url));
        items.forEach(item => imageUrls.push(item.url));
        heroes.forEach(item => imageUrls.push(item.urlVert));

        imageUrls.forEach(url => {
            const linkTag = document.createElement('link');

            linkTag.rel = 'prefetch';
            linkTag.href = url;
            document.head.appendChild(linkTag);
        })
        
    };

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
