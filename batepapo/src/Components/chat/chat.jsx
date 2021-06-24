import React, { Component } from "react";
import "./estilo.css";
import balaoMessage from "../balaoMessage/balaoMessage";

class Chat extends Component {
  // constructor(texto) {
  //   super();
  //   this.texto = texto;
  // }

  // boxMessenger(props) {

  // }

  // sendMensseger(props) {

  // }

  handleClick() {
    console.log("Enviado");
  }
  render() {
    return (
      <div>
        <div>
          <header className="titulo">Bate Papo</header>
        </div>
        <div>
          <balaoMessage />
          <span>
            <input
              type="text"
              className="digitar"
              placeholder="Digite algo..."
            />
          </span>
          <button className="botaoEnviar" onClick={this.handleClick.bind(this)}>
            Enviar
          </button>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Chat;
