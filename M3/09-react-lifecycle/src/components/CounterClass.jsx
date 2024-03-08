import React, { Component } from "react";
import Display from "./Display";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    }
  }
  sumarUno = () => {
    this.setState({contador: this.state.contador + 1})
  }

  componentDidUpdate() {
    //* Lógica de JS
    console.log("CounterClass se Actualizó");
  }

  render() {
    return (
      <div>
        <h1>Cohorte FT47</h1>
        <hr />
        <h2>{this.props.nombre}</h2>
        <h3>Contador: {this.state.contador}</h3>
        <button onClick={this.sumarUno}>Suma 1</button>
        {
          this.state.contador > 2 && this.state.contador < 5
            ? <Display />
            : null
        }
        
      </div>
    )
  }
}