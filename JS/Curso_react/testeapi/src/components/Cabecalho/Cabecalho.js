import React from "react";
import "./Cabecalho.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Cabecalho() {
    return (
        <header id="cabecalho">
            <Link to="/">
                <Logo id="logo" />
            </Link>
            <p>Bom dia nutrição</p>
        </header>
    );
}

export default Cabecalho;
