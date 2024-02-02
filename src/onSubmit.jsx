import { Component } from "react";

class OnSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado con texto:", this.state.text);
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ingrese un texto:
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Enviar</button>
        <div>Texto ingresado: {this.state.text}</div>
      </form>
    );
  }
}

export default OnSubmit;
