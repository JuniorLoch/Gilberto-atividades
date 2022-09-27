import React, { Component } from "react";
import Botoes from "./components/Botoes/Botoes";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            milis: 0,
            seg: 0,
            min: 0,
            ativo: false,
        };
        this.ativar = this.ativar.bind(this);
        this.resetar = this.resetar.bind(this);
        this.contar = this.contar.bind(this);
    }

    ativar() {
        var inverte = !this.state.ativo;

        this.setState({ ativo: inverte });
        setTimeout(() => {
            console.log("State estado: " + this.state.ativo);

            if (this.state.ativo) {
                this.interalid = setInterval(this.contar, 10);
            } else {
                clearInterval(this.interalid);
                this.interalid = null;
            }
        }, 100);
    }

    /*
    componentDidUpdate() {
        if (this.state.ativo) {
            setInterval(this.contar(), 100);
        } else {
        }
    }
    */

    contar() {
        if (this.state.milis >= 99) {
            this.setState({ milis: 0, seg: this.state.seg + 1 });
            if (this.state.seg >= 59) {
                this.setState({ seg: 0, min: this.state.min + 1 });
            }
        } else {
            this.setState({ milis: this.state.milis + 1 });
        }
    }

    resetar() {
        clearInterval(this.interalid);
        this.interalid = null;
        this.setState({ ativo: false, min: 0, seg: 0, milis: 0 });
    }

    render() {
        return (
            <div id="conteiner">
                <img id="cronometro" alt="" src={require("./assets/cronometro.png")} />
                <Botoes ativar={this.ativar} resetar={this.resetar} ativo={this.state.ativo} />
                <h1 id="tempo">
                    {/* eslint-disable-next-line*/}
                    {this.state.min == 0 ? "00" : this.state.min < 10 ? "0" + this.state.min : this.state.min}:{/* eslint-disable-next-line*/}
                    {this.state.seg == 0 ? "00" : this.state.seg < 10 ? "0" + this.state.seg : this.state.seg}:{/* eslint-disable-next-line*/}
                    {this.state.milis == 0 ? "00" : this.state.milis < 10 ? "0" + this.state.milis : this.state.milis}
                </h1>
            </div>
        );
    }
}

export default App;
