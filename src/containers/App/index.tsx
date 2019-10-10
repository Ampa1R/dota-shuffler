import React from 'react';
import Header from '../../components/Header';
import './index.scss';

class App extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    render(): React.ReactNode {
        return (
            <div>
                <div className="App">
                    <Header />
                </div>
            </div>
        );
    }
}

export default App;
