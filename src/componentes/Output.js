import React, { Component } from 'react';

class Output extends Component {
    render() {
        return (
            <div>
                {this.props.IMC}
            </div>
        );
    }
}

export default Output;