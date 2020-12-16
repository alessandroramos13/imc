import React, { Component } from 'react';
import Output from './Output';
import './Input.css';

class Input extends Component {

    constructor() {
        super()
        this.state = {
            peso: '',
            altura: '',
            imc: '',
        }
    }

    setPeso = (e) => {
        if (e.target.value > 999) {
            this.setState({peso: 999})
        } else {
            this.setState({peso: e.target.value})
        }
    }

    setAltura = (e) => {
        if (e.target.value > 999) {
            this.setState({altura: 999})
        } else {
            this.setState({altura: e.target.value})
        }
    }

    setIMC = () => {
        if (this.state.peso >= this.state.altura) {
            let alturacm = Number(this.state.altura) / 100
            let resultado = Number(this.state.peso) / (alturacm * alturacm)
            this.setState({imc: resultado})
        } else {
            this.setState({imc: 0})
            alert(`O seu IMC é de 0`)
        }
        this.setState({peso: '', altura: ''})
    }

    render() {

        return(
            <div>
                <div>
                    <form className="input"> 
                        <input type="number" value={this.state.peso} placeholder="Peso (em kg)" onChange={this.setPeso} />
                        <input type="number" value={this.state.altura} placeholder="Altura (em cm)" onChange={this.setAltura} />
                        <br/>
                        {this.state.peso !== '' && this.state.altura !== '' ? <input type="submit" value="Calcular" className="calcular" onClick={this.setIMC} /> : <input type="submit" className="calcularDisabled" disabled value="Calcular" />}
                    </form>
                </div>
                <div>
                    <Output imcState={this.state.imc} />
                </div>
            </div>
        )
    }
}

export default Input;