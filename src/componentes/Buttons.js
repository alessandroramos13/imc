import React, { Component } from 'react';
import './Buttons.css';

class Button extends Component {

    constructor() {
        super()
        this.state = {
            peso: '',
            altura: '',
            imc: '',
        }
    }

    setPeso = (e) => {
        this.setState({peso: e.target.value})
    }

    setAltura = (e) => {
        this.setState({altura: e.target.value})
    }

    setIMC = () => {
        let resultado = Number(this.state.peso) / (Number(this.state.altura) * Number(this.state.altura))
        this.setState({imc: resultado})
        alert(`O seu IMC é de ${resultado.toFixed(2)}`)
    }

    render() {

        return(
            <div>
                <div className="input" >
                    <input type="number" value={this.state.peso} placeholder="Peso (em kg)" onChange={this.setPeso} />
                    <input type="number" value={this.state.altura} placeholder="Altura (em m)" onChange={this.setAltura} />
                    <br/>
                    {this.state.peso !== '' && this.state.altura !== '' ? <input type="submit" value="Calcular" className="calcular" onClick={this.setIMC} /> : <input type="submit" className="calcularDisabled" disabled value="Calcular" />}
                </div>
                <div className="output" >

                </div>
            </div>
        )
    }
}

export default Button;