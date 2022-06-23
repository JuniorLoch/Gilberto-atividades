import React, { Component } from "react";
import Botoes from "./components/Botoes/Botoes";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div id="conteiner">
                <img alt="" src={require("./assets/cronometro.png")} />
                <Botoes />
            </div>
        );
    }
}

export default App;
