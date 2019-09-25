import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    render(): React.ReactNode {
        return (
            <div>
                <div className="App">
                    <header className="App-header">there is an app</header>
                </div>
            </div>
        );
    }
}

export default App;
