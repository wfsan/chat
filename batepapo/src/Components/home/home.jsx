import React, { Component } from "react";
import "./estilo.css";

class Home extends Component {
  render() {
    return (
      <div>
          <div className="cabecalho">
              <header>
                  <a><p>sobre nós</p></a>
              </header>
          </div>
        <div className="mensagem">
          <p>Nova conversa</p>
        </div>
        <div>
          <button className="botaoAdd">+</button>
        </div>
        <div className="rodape">
          <footer>
            <p>@Copyright</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Home;
