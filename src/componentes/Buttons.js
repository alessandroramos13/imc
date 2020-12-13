import React, { Component } from 'react';
import Output from './Output';
import './Buttons.css';

class Buttons extends Component {

    constructor() {
        super()
        this.state = {
            peso: '',
            altura: '',
            imc: 0,
        }

    }

    setPeso = (e) => {
        this.setState({ peso: e.target.value })
    }

    setAltura = (e) => {
        this.setState({ altura: e.target.value })
    }

    setIMC = () => {
        let resultado = Number(this.state.peso) / (Number(this.state.altura) * Number(this.state.altura))
        this.setState({ peso: '', altura: '', imc: resultado })
        return (
            <Output />
        )

    }

    render() {
        if (this.state.peso !== '' && this.state.altura !== '') {
            return (
                <div>
                    <div className='bt'>
                        <input type="number" className='bt_peso' value={this.state.peso} placeholder={'Peso (em kg)'} onChange={this.setPeso} />
                        <input type="number" className='bt_altura' value={this.state.altura} placeholder={'Altura (em m)'} onChange={this.setAltura} />
                        <br />
                        <input type="submit" className='calc' value="Calcular" onClick={this.setIMC} />
                        <div className='imcStyle'>
                            <Output imcState={this.state.imc} />
                            p
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <div className='bt'>
                        <input type="number" className='bt_peso' value={this.state.peso} placeholder={'Peso (em kg)'} onChange={this.setPeso} />
                        <input type="number" className='bt_altura' value={this.state.altura} placeholder={'Altura (em m)'} onChange={this.setAltura} />
                        <br />
                        <input type="submit" className='calc' value="Calcular" disabled onClick={this.setIMC} />
                        <div className='imcStyle'>
                            <Output imcState={this.state.imc} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Buttons;