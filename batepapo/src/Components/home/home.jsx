import React, { Component } from "react";
import "./estilo.css";
import { Link } from "react-router-dom";
import { loadCSS } from "fg-loadcss";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="cabecalho">
          <header>
            <Link to="/sobre">
              <button className="botaoSobre">sobre nós</button>
            </Link>
          </header>
        </div>
        <div className="mensagem">
          <p>Nova conversa</p>
        </div>
        <Link to="/chat">
          <div>
            <button className="botaoAdd">+</button>
          </div>
        </Link>
        <div className="rodape">
          <footer>
            <p>@Copyright 2021 for Wellington</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Home;
