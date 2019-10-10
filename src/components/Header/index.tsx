import React from 'react';
import './index.scss';

export default function index(): JSX.Element {
    return (
        <header className="Header">
            <div className="Header__Title">Dota Shuffler</div>
            <div className="Header__Tagline">v1.0</div>
        </header>
    );
}
