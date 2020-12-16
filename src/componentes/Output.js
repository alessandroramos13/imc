import React, { Component } from 'react';
import './Output.css';

class Output extends Component {
    render() {
        return(
            <div className='bg-imc'>
                {this.props.imcState !== '' && 
                <div className ='res-imc'>
                    <p>SEU IMC: {this.props.imcState.toFixed(2)}</p>
                </div>}
            </div>
        )
    }
}

export default Output;