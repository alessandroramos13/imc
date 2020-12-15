import React, { Component } from 'react';
import Buttons from './Buttons.js';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className='App'>
                <h1>Calculadora de IMC</h1>
                <Buttons />
            </div>
        );
    }
}

export default App;