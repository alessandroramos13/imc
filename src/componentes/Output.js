import React, { Component } from 'react';
import './Output.css';

class Output extends Component {
    render() {

        var imcState = this.props.imcState

        return (
            <div className='imc'>
                <p>IMC: {imcState.toFixed(2)} </p>
            </div>
        );
    }
}

export default Output;