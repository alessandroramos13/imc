import React, { Component } from 'react';
import Input from './Input.js';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className='App'>
                <h1>Calculadora de IMC</h1>
                <Input />
            </div>
        );
    }
}

export default App;