import React, { Component } from "react";
import "./Botoes.css";

class Botoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ativo: false,
        };
    }

    componentDidUpdate() {
        // eslint-disable-next-line
        if (this.props.ativo != this.state.ativo) {
            this.setState({ ativo: this.props.ativo });
            console.log("Botoes estado: " + this.state.ativo);
        }
    }

    render() {
        return (
            <div id="botoes">
                <button id="btstart" onClick={this.props.ativar}>
                    <img alt="start-stop" src={require("../../assets/botao.png")} className={this.state.ativo ? "btpress" : ""} />
                </button>
                <button id="btreset" onClick={this.props.resetar}>
                    <img alt="reset" src={require("../../assets/botao.png")} />
                </button>
            </div>
        );
    }
}

export default Botoes;
