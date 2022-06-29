import React, { Component } from "react";
import { ReactComponent as Logo } from "./../../assets/logo.svg";
import { Link } from "react-router-dom";
import Navegador from "../Navegador/Navegador";

import "./Cabecalho.css";

class Cabecalho extends Component {
    render() {
        return (
            <header id="cabecalho">
                <Navegador />

                <Link to="/">
                    <Logo />
                </Link>

                <h3>Bom dia filmes</h3>
            </header>
        );
    }
}

export default Cabecalho;
